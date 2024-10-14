import { getNegativeNumbers, sum } from '../../src/utils/math';

describe('sum', () => {
  it('should return sum of numbers array', () => {
    const result = sum([1, 2, 3, 5]);
    expect(result).toBe(11);
  });

  it('should return sum of floating numbers array', () => {
    const result = sum([1, 2.5, 3, 0.98]);
    expect(result).toBe(7.48);
  });

  it('should return negative numbers', () => {
    const resultOne = getNegativeNumbers([1, -5, 3, -10]);
    expect(resultOne).toEqual([-5, -10]);

    const resultTwo = getNegativeNumbers([-1111, -500, -3, 0]);
    expect(resultTwo).toEqual([-1111, -500, -3]);
  });
});
