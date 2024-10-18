import { ADD, MAX_RANGE, PRODUCT } from '../constants';
import {
  getNegativeNumbers,
  getNumbersInRange,
  productUsingSum,
  sum,
} from '../utils/math';
import {
  getStringDelimiters,
  removeDelimiterPrefixFromString,
  splitDelimiterString,
} from '../utils/delimitersHelper';

export class StringCalculator {
  public add(input: string): number {
    const delimiters = getStringDelimiters(input);
    const nums = this.stringToNumberArray(input, delimiters);

    const action = this.getActionBasedOnDelimiter(delimiters);
    if (action == PRODUCT) {
      return productUsingSum(nums);
    }

    return sum(nums);
  }

  private validateInput(nums: number[]): number[] {
    this.validateNumberArray(nums);
    return getNumbersInRange(nums, MAX_RANGE);
  }

  private getActionBasedOnDelimiter(delimiters: string[]): string {
    if (delimiters.includes('*')) {
      return PRODUCT;
    }
    return ADD;
  }

  private stringToNumberArray(input: string, delimiters: string[]): number[] {
    input = removeDelimiterPrefixFromString(input);
    const nums = splitDelimiterString(input, delimiters);
    return this.validateInput(nums);
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
