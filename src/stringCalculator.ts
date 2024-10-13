import { sum } from './utils/math';

export const add = (str: string) => {
  if (str.length == 0) {
    return 0;
  }

  if (str.length == 1) {
    return Number(str);
  }

  const nums = stringToNumberArray(str);
  return sum(nums);
};

const stringToNumberArray = (input: string): number[] => {
  let delimiter = '';
  if (input.includes(',')) {
    delimiter = ',';
  }

  if (input.includes('\n')) {
    delimiter = '\n';
  }
  return input.split(delimiter).map(Number);
};
