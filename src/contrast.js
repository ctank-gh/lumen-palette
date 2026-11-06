function parseHex(color) {
  if (typeof color !== 'string' || !/^#[0-9a-f]{6}$/i.test(color)) {
    throw new TypeError('Expected a six-digit hex color such as #ffffff');
  }
  return [1, 3, 5].map((offset) => parseInt(color.slice(offset, offset + 2), 16) / 255);
}

function luminance(color) {
  const linear = parseHex(color).map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

export function contrastRatio(first, second) {
  const a = luminance(first);
  const b = luminance(second);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}
