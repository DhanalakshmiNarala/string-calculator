import { getStringDelimiters } from '../../src/utils/delimitersHelper';

describe('Delimiters helper', () => {
  describe('getStringDelimiters ', () => {
    it('should return "," as delimiter', () => {
      const result = getStringDelimiters('1,2,3');
      expect(result).toEqual([',']);
    });

    it('should return "\n" as delimiter', () => {
      const result = getStringDelimiters('1\n2\n3');
      expect(result).toEqual(['\n']);
    });

    it('should return ";" as delimiter', () => {
      const result = getStringDelimiters('//;\n1;2\n');
      expect(result).toEqual([';']);
    });

    it('should return "$" as delimiter', () => {
      const result = getStringDelimiters('//$\n1$2\n');
      expect(result).toEqual(['$']);
    });

    it('should return "***" as delimiter', () => {
      const result = getStringDelimiters('//[***]\n1***2***3');
      expect(result).toEqual(['***']);
    });

    it('should return "$$$$$" as delimiter', () => {
      const result = getStringDelimiters('//[$$$$$]\n1$$$$$2$$$$$3');
      expect(result).toEqual(['$$$$$']);
    });

    it('should return "*" and "%" as delimiters', () => {
      const result = getStringDelimiters('//[*][%]\n1*2%3');
      expect(result).toEqual(['*', '%']);
    });
  });
});
