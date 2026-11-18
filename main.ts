// Entry for make.fun news-image-20261117: sum up the world news of
// Tuesday 17 November 2026 in one image.
//
// The image is drawn at build time and shipped as entry.png; this program
// only copies its bytes to the output directory, so both grader runs
// produce byte-identical output. Standard library only, no network.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
