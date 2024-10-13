import { findDelimiter } from '../../src/utils/stringHelpers';

describe('String helpers', () => {
  describe('findDelimiter ', () => {
    it('should return "," as delimiter', () => {
      const result = findDelimiter('1,2,3');
      expect(result).toBe(',');
    });

    it('should return "\n" as delimiter', () => {
      const result = findDelimiter('1\n2\n3');
      expect(result).toBe('\n');
    });
  });
});
