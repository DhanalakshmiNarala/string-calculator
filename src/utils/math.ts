export const sum = (nums: number[]): number => {
  return nums.reduce((result, current) => result + current, 0);
};

export const productUsingSum = (nums: number[]): number => {
  if (nums.length == 0) {
    return 0;
  }

  if (nums.length == 1) {
    return nums[0];
  }

  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result += productOfTwo(result, nums[i + 1]);
  }
  return result;
};

export const productOfTwo = (numOne: number, numTwo: number): number => {
  const min = Math.min(numOne, numTwo);
  const other = numOne == min ? numTwo : numOne;

  let result = 0;
  for (let i = 0; i < min; i++) {
    result += other;
  }
  return result;
};

export const getNegativeNumbers = (nums: number[]): number[] => {
  return nums.filter((num) => num < 0);
};

export const getNumbersInRange = (
  nums: number[],
  maxRange: number
): number[] => {
  return nums.filter((num) => num <= maxRange);
};
