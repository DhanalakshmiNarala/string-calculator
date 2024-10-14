import { MAX_RANGE } from '../constants';
import { getNegativeNumbers, getNumbersInRange, sum } from '../utils/math';
import {
  getStringDelimiters,
  removeDelimiterPrefixFromString,
  splitDelimiterString,
} from '../utils/delimitersHelper';

export class StringCalculator {
  public add(input: string): number {
    let nums = this.stringToNumberArray(input);
    this.validateNumberArray(nums);
    nums = getNumbersInRange(nums, MAX_RANGE);
    return sum(nums);
  }

  private stringToNumberArray(input: string): number[] {
    let delimiters = getStringDelimiters(input);
    input = removeDelimiterPrefixFromString(input);
    return splitDelimiterString(input, delimiters);
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
