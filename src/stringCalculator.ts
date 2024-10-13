import { sum } from './utils/math';
import { findDelimiter } from './utils/stringHelpers';

export const add = (str: string) => {
  if (str.length == 0) {
    return 0;
  }

  if (str.length == 1) {
    return Number(str);
  }

  const nums = stringToNumberArray(str);
  validateNumsArray(nums);
  return sum(nums);
};

const stringToNumberArray = (input: string): number[] => {
  let delimiter = findDelimiter(input);

  const escapedDelimiter = delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const delimitersRegex = new RegExp(`//${escapedDelimiter}`, 'g');
  return input.replace(delimitersRegex, '').split(delimiter).map(Number);
};

const hasNegativeNumbers = (nums: number[]): number | null => {
  return nums.find((num) => num < 0) || null;
};

const validateNumsArray = (nums: number[]): void => {
  const firstNegative = hasNegativeNumbers(nums);
  if (firstNegative !== null) {
    throw new Error(`negative numbers not allowed ${firstNegative}`);
  }
};
