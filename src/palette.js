import { contrastRatio } from './contrast.js';

export function createPalette(background) {
  const darkRatio = contrastRatio(background, '#000000');
  const lightRatio = contrastRatio(background, '#ffffff');
  const foreground = darkRatio >= lightRatio ? '#000000' : '#ffffff';
  return { background, foreground, contrastRatio: Math.max(darkRatio, lightRatio) };
}
