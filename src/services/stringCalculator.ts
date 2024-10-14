import { getNegativeNumbers, sum } from '../utils/math';
import { findDelimiters } from '../utils/stringHelpers';

export class StringCalculator {
  public add(str: string): number {
    const nums = this.stringToNumberArray(str);
    this.validateNumsArray(nums);
    return sum(nums);
  }

  private stringToNumberArray(input: string): number[] {
    let delimiters = findDelimiters(input);

    input = input.replace(/^\/\/.*\n/, '');

    delimiters.forEach((delimiter) => {
      input = input.split(delimiter).join(' ');
    });

    return input.split(' ').map(Number);
  }

  private validateNumsArray(nums: number[]): void {
    const negativeNums = getNegativeNumbers(nums);
    if (negativeNums.length) {
      throw new Error(
        `negative numbers not allowed ${negativeNums.join(', ')}`
      );
    }
  }
}
