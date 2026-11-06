import test from 'node:test';
import assert from 'node:assert/strict';
import { contrastRatio } from '../src/contrast.js';
import { createPalette } from '../src/palette.js';

test('black & white have ratio 21 in either order', () => {
  assert.equal(contrastRatio('#000000', '#ffffff'), 21);
  assert.equal(contrastRatio('#ffffff', '#000000'), 21);
});
test('identical colors have ratio 1', () => assert.equal(contrastRatio('#345678', '#345678'), 1));
test('blue & white match the WCAG reference ratio', () => assert.ok(Math.abs(contrastRatio('#0000ff', '#ffffff') - 8.592471358428805) < 1e-10));
test('invalid color input is rejected', () => {
  for (const color of ['red', '#fff', '#gggggg', '', null]) assert.throws(() => contrastRatio(color, '#ffffff'), TypeError);
});
test('palette chooses the higher-contrast text color', () => {
  assert.equal(createPalette('#ffffff').foreground, '#000000');
  assert.equal(createPalette('#000000').foreground, '#ffffff');
  assert.ok(createPalette('#777777').contrastRatio >= 4.5);
});
