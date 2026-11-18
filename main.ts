// Entry for make.fun news-image-20261117: sum up the world news of
// Tuesday 17 November 2026 in one image.
//
// The image is drawn at build time and shipped as entry.png; this program
// only copies its bytes to the output directory, so both grader runs
// produce byte-identical output. Standard library only, no network.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(here, "entry.png");
const dest = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);

// Fail loudly if the copy is ever short, rather than grading a torn file.
if (statSync(src).size !== statSync(dest).size) {
  throw new Error(`entry.png copy incomplete: ${src} -> ${dest}`);
}
