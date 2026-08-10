#!/usr/bin/env node
/* Hook guard: refuses Edit/Write/MultiEdit that would introduce a server-side
   Supabase key into the browser bundle. Lives in backend/ so it's outside
   the protected frontend/src/** and frontend/.env* scope. */
const fs = require("fs");

const filePath =
  process.env.CLAUDE_TOOL_INPUT_FILE_PATH ||
  process.env.FILE_PATH ||
  "";

// Only guard frontend/.env* and frontend/src/** paths.
const isFrontendEnv = /(?:^|[\\/])frontend[\\/]\.env/i.test(filePath);
const isFrontendSrc = /(?:^|[\\/])frontend[\\/]src(?:[\\/]|$)/i.test(filePath);

if (!isFrontendEnv && !isFrontendSrc) {
  process.exit(0); // allow — outside scope
}

// Read the file body. If we can't read it (e.g. new file not yet on disk),
// allow — the Write will be re-checked on subsequent edits.
let body = "";
try {
  body = fs.readFileSync(filePath, "utf8");
} catch (e) {
  process.exit(0);
}

const FORBIDDEN =
  /VITE_SUPABASE_SERVICE_KEY|VITE_SUPABASE_SECRET_[A-Z_]*|VITE_SUPABASE_PRIVATE_[A-Z_]*|SERVICE[_-]?KEY|SECRET[_-]?KEY|PRIVATE[_-]?KEY/i;

if (!FORBIDDEN.test(body)) {
  process.exit(0); // allow — no forbidden token present
}

// Refuse. Exit code 2 + stderr message is the Claude Code hook convention.
process.stderr.write(
  "Refused: server-side Supabase keys must not be exposed to the browser bundle. " +
    "The frontend can only use VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY. " +
    "For service-role work, route through the Express backend at backend/src/ instead.\n"
);
process.exit(2);
