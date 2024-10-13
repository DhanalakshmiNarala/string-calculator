import { sum } from '../../src/utils/math';

describe('sum', () => {
  it('should return sum of numbers array', () => {
    const result = sum([1, 2, 3, 5]);
    expect(result).toBe(11);
  });

  it('should return sum of floating numbers array', () => {
    const result = sum([1, 2.5, 3, 0.98]);
    expect(result).toBe(7.48);
  });
});
