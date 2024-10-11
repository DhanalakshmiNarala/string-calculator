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
});
