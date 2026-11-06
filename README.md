# Lumen Palette

Generate color palettes & check WCAG contrast ratios in JavaScript.

![Status](https://img.shields.io/badge/status-demo-green)

## Why
Choose foreground colors using measured contrast rather than appearance. This is a fictional community-project demo, with no package publication.

## Quick start
```sh
npm test
```
```js
import { createPalette } from "./src/palette.js";
import { contrastRatio } from "./src/contrast.js";
console.log(createPalette("#2563eb"));
console.log(contrastRatio("#000000", "#ffffff")); // 21
```

| Capability | Status |
| --- | --- |
| WCAG contrast ratio | Available |
| Black/white text selection | Available |
| Tailwind export guide | Proposed in PR |

Accepts six-digit hex colors. Text contrast alone does not establish whole-page accessibility. See `docs/ROADMAP.md` for planned work. Invented pulse metrics are marked `sample`.
