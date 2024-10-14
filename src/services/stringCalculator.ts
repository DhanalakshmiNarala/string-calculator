import { MAX_RANGE } from '../constants';
import { getNegativeNumbers, getNumbersInRange, sum } from '../utils/math';
import { getStringDelimiters } from '../utils/delimitersHelper';

export class StringCalculator {
  public add(input: string): number {
    let nums = this.stringToNumberArray(input);
    this.validateNumberArray(nums);
    nums = getNumbersInRange(nums, MAX_RANGE);
    return sum(nums);
  }

  private stringToNumberArray(input: string): number[] {
    let delimiters = getStringDelimiters(input);
    input = this.removeCustomDelimiterPrefix(input);
    return this.splitDelimiterString(input, delimiters);
  }

  private removeCustomDelimiterPrefix(input: string): string {
    return input.replace(/^\/\/.*\n/, '');
  }

  private splitDelimiterString(input: string, delimiters: string[]) {
    delimiters.forEach((delimiter) => {
      input = input.split(delimiter).join(' ');
    });

    return input.split(' ').map(Number);
  }

  private validateNumberArray(nums: number[]): void {
    const negativeNums = getNegativeNumbers(nums);
    if (negativeNums.length) {
      throw new Error(
        `negative numbers not allowed ${negativeNums.join(', ')}`
      );
    }
  }
}
