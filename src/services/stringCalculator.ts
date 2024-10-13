import { sum } from '../utils/math';
import { findDelimiter } from '../utils/stringHelpers';

export class StringCalculator {
  public add(str: string): number {
    const nums = this.stringToNumberArray(str);
    this.validateNumsArray(nums);
    return sum(nums);
  }

  private stringToNumberArray(input: string): number[] {
    let delimiter = findDelimiter(input);

    const escapedDelimiter = delimiter.replace(
      /[-\/\\^$*+?.()|[\]{}]/g,
      '\\$&'
    );
    const delimitersRegex = new RegExp(`//${escapedDelimiter}`, 'g');
    return input.replace(delimitersRegex, '').split(delimiter).map(Number);
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
