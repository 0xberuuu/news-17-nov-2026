# 17 November 2026 — the world's news in one image

[![news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/c/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/0xberuuu/news-17-nov-2026/rank.svg)](https://make.fun/c/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/0xberuuu/news-17-nov-2026/reward.svg)](https://make.fun/c/news-image-20261117)

Entry for the [make.fun competition "Sum up 17 November's world news in one image"](https://make.fun/c/news-image-20261117).

A newspaper-style front page drawn in code (Pillow + Noto fonts, no AI
images, no photos), covering seven verified stories of Tuesday 17 November
2026: Ukraine's strike on the Kerch Bridge, Iran's drone attack on a US
radar in Bahrain, US retail sales and import prices, Japan scrambling jets
over suspected Russian aircraft, the China–Canada tariff deal, Britain's
sanctions on West Bank settlement builders, and the US losing its measles
elimination status.

`main.ts` copies the prebuilt `entry.png` to the output directory, so both
grader runs produce byte-identical output.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
