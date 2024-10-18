import {
  getNegativeNumbers,
  getNumbersInRange,
  productOfTwo,
  productUsingSum,
  sum,
} from '../../src/utils/math';

describe('math', () => {
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

    it('should return numbers which are less than or equal to 1000', () => {
      const resultOne = getNumbersInRange([1, -5, 3000, 1000], 1000);
      expect(resultOne).toEqual([1, -5, 1000]);

      const resultTwo = getNumbersInRange([999, 100, 3000, 4000], 1000);
      expect(resultTwo).toEqual([999, 100]);
    });
  });

  describe('productOfTwo', () => {
    it('should give 10 for 2*5', () => {
      const product = productOfTwo(2, 5);
      expect(product).toBe(10);
    });

    it('should give 1000 for 1*1000', () => {
      const product = productOfTwo(1, 1000);
      expect(product).toBe(1000);
    });
  });
});
