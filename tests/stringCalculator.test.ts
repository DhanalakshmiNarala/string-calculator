import { add } from '../src/stringCalculator';
describe('add', () => {
  it('should handle empty string', () => {
    const result = add('');
    expect(result).toBe(0);
  });

  it('should handle single number input', () => {
    const sumOne = add('1');
    const sumTwo = add('9');
    expect(sumOne).toBe(1);
    expect(sumTwo).toBe(9);
  });

  it('should handle number string with comma separation', () => {
    const sumOne = add('1,5');
    const sumTwo = add('2,9');
    expect(sumOne).toBe(6);
    expect(sumTwo).toBe(11);
  });

  it('should handle long number strings', () => {
    const oneToHundred =
      '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100';
    const sum = add(oneToHundred);
    expect(sum).toBe(5050);
  });

  it('should handle number string with newline separation', () => {
    const sumOne = add('1\n5');
    const sumTwo = add('2\n9');
    expect(sumOne).toBe(6);
    expect(sumTwo).toBe(11);
  });

  it('should handle custom delimiter number strings', () => {
    const sumOne = add('//;1;2;10');
    const sumTwo = add('//)5)9)1');
    expect(sumOne).toBe(13);
    expect(sumTwo).toBe(15);
  });

  it('should handle not accept negative number strings', () => {
    expect(() => add('1,-5,10')).toThrow('negative numbers not allowed -5');
    expect(() => add('1,9,-10')).toThrow('negative numbers not allowed -10');
  });
});
