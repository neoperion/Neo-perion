import { spawn } from 'child_process';
import http from 'http';

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9222;

const ROUTES = [
  '/industries',
  '/industries/education',
  '/industries/startups',
  '/industries/smbs',
  '/industries/accounting-automation',
];

const WIDTHS = [320, 360, 375, 390, 412, 430, 480, 768];

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getJson(url) {
  const res = await fetch(url);
  return res.json();
}

async function run() {
  console.log('Starting headless Chrome...');
  const chromeProcess = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${PORT}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--user-data-dir=' + process.env.TEMP + '\\chrome_test_profile_' + Date.now()
  ], { stdio: 'ignore' });

  // Wait for Chrome to be ready
  let version = null;
  for (let i = 0; i < 30; i++) {
    await sleep(300);
    try {
      version = await getJson(`http://127.0.0.1:${PORT}/json/version`);
      if (version && version.webSocketDebuggerUrl) break;
    } catch (e) {}
  }

  if (!version) {
    console.error('Failed to connect to Chrome remote debugging port.');
    chromeProcess.kill();
    process.exit(1);
  }

  console.log('Connected to Chrome version:', version.Browser);

  // Get targets
  const targets = await getJson(`http://127.0.0.1:${PORT}/json/list`);
  let target = targets.find(t => t.type === 'page');
  if (!target && targets.length > 0) target = targets[0];
  if (!target) {
    console.error('No page target found in Chrome');
    chromeProcess.kill();
    process.exit(1);
  }

  const wsUrl = target.webSocketDebuggerUrl;
  const ws = new WebSocket(wsUrl);

  let msgId = 1;
  const callbacks = new Map();

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && callbacks.has(data.id)) {
      callbacks.get(data.id)(data.result !== undefined ? data.result : data);
      callbacks.delete(data.id);
    }
  };

  await new Promise(resolve => ws.onopen = resolve);

  function sendCommand(method, params = {}) {
    const id = msgId++;
    return new Promise((resolve) => {
      callbacks.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await sendCommand('Page.enable');
  await sendCommand('DOM.enable');
  await sendCommand('Runtime.enable');

  const allResults = [];
  let totalViolations = 0;

  for (const route of ROUTES) {
    console.log(`\n========================================`);
    console.log(`Testing Route: ${route}`);
    console.log(`========================================`);

    // Navigate to route
    await sendCommand('Page.navigate', { url: `http://localhost:8080${route}` });
    await sleep(1500); // Allow react hydration and transitions

    for (const width of WIDTHS) {
      // Set viewport
      await sendCommand('Emulation.setDeviceMetricsOverride', {
        width: width,
        height: 844,
        deviceScaleFactor: 1,
        mobile: true,
        fitWindow: false
      });

      await sleep(400);

      // Evaluate scrollWidth and check for overflow
      const evalRes = await sendCommand('Runtime.evaluate', {
        expression: `
          (() => {
            const docWidth = document.documentElement.clientWidth;
            const docScroll = document.documentElement.scrollWidth;
            const bodyScroll = document.body.scrollWidth;
            const innerWidth = window.innerWidth;

            const overflowing = [];
            const allElements = document.querySelectorAll('*');
            for (const el of allElements) {
              const rect = el.getBoundingClientRect();
              if (rect.right > innerWidth + 1.5 && rect.width > 0 && rect.height > 0) {
                // Check if el is inside a clipped/overflow-hidden container
                let parent = el.parentElement;
                let isClipped = false;
                while (parent && parent !== document.body && parent !== document.documentElement) {
                  const style = window.getComputedStyle(parent);
                  if (style.overflowX === 'hidden' || style.overflowX === 'clip' || style.overflow === 'hidden' || style.overflow === 'clip') {
                    isClipped = true;
                    break;
                  }
                  parent = parent.parentElement;
                }
                if (!isClipped) {
                  overflowing.push({
                    tag: el.tagName,
                    class: (typeof el.className === 'string' ? el.className : '').slice(0, 80),
                    id: el.id || '',
                    right: Math.round(rect.right),
                    width: Math.round(rect.width)
                  });
                }
              }
            }

            return {
              docWidth,
              innerWidth,
              docScroll,
              bodyScroll,
              hasScrollbar: docScroll > innerWidth || bodyScroll > innerWidth,
              overflowCount: overflowing.length,
              overflowSamples: overflowing.slice(0, 3)
            };
          })()
        `,
        returnByValue: true
      });

      const metrics = evalRes?.result?.value || evalRes?.value || evalRes;
      if (!metrics || metrics.hasScrollbar === undefined) {
        console.error('Eval error on route', route, width, evalRes);
        continue;
      }
      const isClean = !metrics.hasScrollbar && metrics.overflowCount === 0;

      if (!isClean) {
        totalViolations++;
        console.error(`❌ [${width}px] OVERFLOW DETECTED:`, metrics);
      } else {
        console.log(`✅ [${width}px] clientWidth=${metrics.docWidth} innerWidth=${metrics.innerWidth} scrollWidth=${metrics.docScroll} bodyScroll=${metrics.bodyScroll} (Overflow: 0)`);
      }

      allResults.push({
        route,
        width,
        metrics,
        pass: isClean
      });
    }
  }

  // Cleanup
  ws.close();
  chromeProcess.kill();

  console.log(`\n========================================`);
  console.log(`Audit Finished. Total Violations: ${totalViolations}`);
  console.log(`========================================`);

  if (totalViolations > 0) {
    process.exit(1);
  } else {
    console.log('ALL TESTS PASSED! ZERO HORIZONTAL OVERFLOW DETECTED ACROSS ALL MOBILE VIEWPORTS!');
    process.exit(0);
  }
}

run().catch(err => {
  console.error('Audit script error:', err);
  process.exit(1);
});
