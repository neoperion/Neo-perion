#!/usr/bin/env node
// seo-check.mjs — Phase 7 static SEO/indexability guard.
// Pure Node, no network, no browser. Exits 1 on any failed assertion.

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');
const ROOT = resolve(__dirname, '..');

const APEX = 'https://aincuru.com';
const WWW = 'https://www.aincuru.com';
const ROBOTS = `${ROOT}/public/robots.txt`;
const SITEMAP = `${ROOT}/public/sitemap.xml`;
const INDEX_HTML = `${ROOT}/index.html`;
const SRC = `${ROOT}/src`;
const DIST = `${ROOT}/dist`;

const errors = [];
const warnings = [];

function fail(msg) {
  errors.push(msg);
  console.error(`  FAIL  ${msg}`);
}
function warn(msg) {
  warnings.push(msg);
  console.warn(`  warn  ${msg}`);
}
function pass(msg) {
  console.log(`  ok    ${msg}`);
}

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const st = statSync(path);
    if (st.isDirectory()) walk(path, out);
    else out.push(path);
  }
  return out;
}

function readText(path) {
  return readFileSync(path, 'utf-8');
}

function findApexHits(text) {
  const matches = [];
  let from = 0;
  while (true) {
    const idx = text.indexOf(APEX, from);
    if (idx === -1) break;
    matches.push(idx);
    from = idx + APEX.length;
  }
  return matches;
}

console.log('seo-check: starting');

if (!existsSync(ROBOTS)) fail(`Missing ${relative(ROOT, ROBOTS)}`);
else {
  const text = readText(ROBOTS);
  const requiredSitemap = `Sitemap: ${WWW}/sitemap.xml`;
  if (!text.includes(requiredSitemap)) {
    fail(`robots.txt missing "${requiredSitemap}"`);
  } else pass('robots.txt has www sitemap line');
}

if (!existsSync(SITEMAP)) fail(`Missing ${relative(ROOT, SITEMAP)}`);
else {
  const text = readText(SITEMAP);
  const locMatches = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (locMatches.length === 0) fail('sitemap.xml has no <loc> entries');
  else {
    let bad = 0;
    for (const loc of locMatches) {
      if (!loc.startsWith(`${WWW}/`)) {
        fail(`sitemap <loc> not under www host: ${loc}`);
        bad++;
      }
    }
    if (bad === 0) pass(`sitemap.xml: ${locMatches.length} <loc> entries all www`);
  }
}

if (!existsSync(INDEX_HTML)) fail(`Missing ${relative(ROOT, INDEX_HTML)}`);
else {
  const text = readText(INDEX_HTML);
  const apex = findApexHits(text);
  if (apex.length > 0) fail(`index.html contains ${apex.length} apex URL literal(s)`);
  else pass('index.html: no apex URL literals');

  const gaIdPattern = /G-[A-Z0-9]{6,}/g;
  const gaMatches = [...text.matchAll(gaIdPattern)];
  if (gaMatches.length > 0) pass(`index.html contains hardcoded GA4 ID(s): ${gaMatches.map((m) => m[0]).join(', ')} (allowed)`);
  else pass('index.html: no hardcoded GA4 measurement ID');

  const hasOrg = text.includes('"@type": "Organization"');
  const hasWebSite = text.includes('"@type": "WebSite"');
  if (!hasOrg) fail('index.html missing Organization JSON-LD');
  else pass('index.html: Organization JSON-LD present');
  if (!hasWebSite) fail('index.html missing WebSite JSON-LD');
  else pass('index.html: WebSite JSON-LD present');

  if (!text.includes(WWW)) fail(`index.html missing locked www host (${WWW})`);
  else pass('index.html: contains locked www host');
}

if (!existsSync(SRC)) fail(`Missing ${relative(ROOT, SRC)}`);
else {
  const sourceFiles = walk(SRC).filter((p) => /\.(ts|tsx)$/.test(p));
  let apexHits = 0;
  let hardcodedGaIds = 0;
  for (const path of sourceFiles) {
    const text = readText(path);
    const apex = findApexHits(text);
    if (apex.length > 0) {
      apexHits += apex.length;
      fail(`${relative(ROOT, path)} contains ${apex.length} apex URL literal(s)`);
    }
    const ga = [...text.matchAll(/G-[A-Z0-9]{6,}/g)];
    if (ga.length > 0) {
      hardcodedGaIds += ga.length;
      fail(`${relative(ROOT, path)} contains hardcoded GA4 ID(s): ${ga.map((m) => m[0]).join(', ')}`);
    }
  }
  if (apexHits === 0) pass(`source: ${sourceFiles.length} files clean of apex URL literals`);
  if (hardcodedGaIds === 0) pass(`source: ${sourceFiles.length} files clean of hardcoded GA4 IDs`);
}

if (existsSync(DIST)) {
  const distHtml = walk(DIST).filter((p) => p.endsWith('index.html'));
  for (const path of distHtml) {
    const text = readText(path);
    const apex = findApexHits(text);
    if (apex.length > 0) fail(`dist ${relative(ROOT, path)} contains ${apex.length} apex URL literal(s)`);
  }
  if (distHtml.length > 0) pass(`dist: scanned ${distHtml.length} index.html file(s)`);
} else {
  warn('dist/ not present yet — skipped built-output apex check (run `npm run build` first)');
}

if (errors.length > 0) {
  console.error(`\nseo-check FAILED with ${errors.length} error(s), ${warnings.length} warning(s).`);
  process.exit(1);
}
console.log(`\nseo-check PASSED with ${warnings.length} warning(s).`);
