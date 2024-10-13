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
  return input.split(',').map(Number);
};
