import { sum } from '../utils/math';
import { findDelimiters } from '../utils/stringHelpers';

export class StringCalculator {
  public add(str: string): number {
    const nums = this.stringToNumberArray(str);
    this.validateNumsArray(nums);
    return sum(nums);
  }

  private stringToNumberArray(input: string): number[] {
    let delimiters = findDelimiters(input);
    delimiters = delimiters instanceof Array ? delimiters : [delimiters];

    input = input.replace(/^\/\/.*\n/, '');

    delimiters.forEach((delimiter) => {
      input.replace(delimiter, ' ');
    });

    return input.split(' ').map(Number);
  }

  private validateNumsArray(nums: number[]): void {
    const firstNegative = this.hasNegativeNumbers(nums);
    if (firstNegative !== null) {
      throw new Error(`negative numbers not allowed ${firstNegative}`);
    }
  }

  private hasNegativeNumbers(nums: number[]): number | null {
    return nums.find((num) => num < 0) || null;
  }
}
