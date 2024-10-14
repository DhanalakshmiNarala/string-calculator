import { findDelimiters } from '../../src/utils/stringHelpers';

describe('String helpers', () => {
  describe('findDelimiter ', () => {
    it('should return "," as delimiter', () => {
      const result = findDelimiters('1,2,3');
      expect(result).toEqual([',']);
    });

    it('should return "\n" as delimiter', () => {
      const result = findDelimiters('1\n2\n3');
      expect(result).toEqual(['\n']);
    });

    it('should return ";" as delimiter', () => {
      const result = findDelimiters('//;\n1;2\n');
      expect(result).toEqual([';']);
    });

    it('should return "$" as delimiter', () => {
      const result = findDelimiters('//$\n1$2\n');
      expect(result).toEqual(['$']);
    });

    it('should return "***" as delimiter', () => {
      const result = findDelimiters('//[***]\n1***2***3');
      expect(result).toEqual(['***']);
    });

    it('should return "$$$$$" as delimiter', () => {
      const result = findDelimiters('//[$$$$$]\n1$$$$$2$$$$$3');
      expect(result).toEqual(['$$$$$']);
    });

    it('should return "*" and "%" as delimiters', () => {
      const result = findDelimiters('//[*][%]\n1*2%3');
      expect(result).toEqual(['*', '%']);
    });
  });
});
