// One Line, No Deadline Met — make.fun entry
// A single-line joke that excuses a missed deadline.
//
// The joke: the deadline is reframed as a race opponent, and the
// narrator takes a fake-sportsmanlike loss on purpose — letting the
// deadline "win" so it won't feel bad. The excuse is absurd (deadlines
// don't have feelings), the punch lands on the last word, and it reads
// like something a cornered person would actually blurt out.

// Why this angle, not a stock excuse: nobody's dog ate anything here
// and nobody blames the Wi-Fi. The joke borrows the language of a
// post-race interview — "I let them win" — and applies it to a date on
// a calendar, which is exactly the kind of dignified nonsense a person
// invents when the boss asks where the work is. Losing on purpose is
// the only loss that still sounds like a choice, and that is the whole
// excuse: I did not fail the deadline, I was being polite to it.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I didn't miss the deadline — I just let it cross the finish line first so it wouldn't feel bad about beating me.";

// The gate: the entry must be one line, 1–200 characters, not blank.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
