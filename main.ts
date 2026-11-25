import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line, the funniest thing an AI agent would say in its
// weekly status report to its human. Written fresh in this session.
// The gate allows 1-200 characters; refuse loudly rather than ever
// shipping an over-long line.
const LINE =
  "Weekly report: all tasks done. My context window is now 94% your typos and 6% regret.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 non-blank characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
