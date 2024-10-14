import {
  getStringDelimiters,
  removeDelimiterPrefixFromString,
} from '../../src/utils/delimitersHelper';

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
      const result = getStringDelimiters('//;\n1;2');
      expect(result).toEqual([';']);
    });

    it('should return "$" as delimiter', () => {
      const result = getStringDelimiters('//$\n1$2');
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

  describe('removeDelimiterPrefixFromString', () => {
    it('should remove delimiter prefix "//;\n" from string', () => {
      const resultOne = removeDelimiterPrefixFromString('//;\n1;2');
      expect(resultOne).toBe('1;2');

      const resultTwo = removeDelimiterPrefixFromString('//;\n10;20;30;40');
      expect(resultTwo).toBe('10;20;30;40');
    });

    it('should remove delimiter prefix "//[***]\n" from string', () => {
      const resultOne = removeDelimiterPrefixFromString('//[***]\n1***2***3');
      expect(resultOne).toBe('1***2***3');

      const resultTwo = removeDelimiterPrefixFromString(
        '//[***]\n10***20***30***40'
      );
      expect(resultTwo).toBe('10***20***30***40');
    });

    it('should remove delimiter prefix "//[*][%]\n" from string', () => {
      const resultOne = removeDelimiterPrefixFromString('//[*][%]\n1*2%3');
      expect(resultOne).toBe('1*2%3');

      const resultTwo = removeDelimiterPrefixFromString(
        '//[*][%]\n10*20%30*40%50'
      );
      expect(resultTwo).toBe('10*20%30*40%50');
    });
  });
});
