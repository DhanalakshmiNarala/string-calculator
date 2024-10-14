export const sum = (nums: number[]): number => {
  return nums.reduce((result, current) => result + current, 0);
};

export const getNegativeNumbers = (nums: number[]): number[] => {
  return nums.filter((num) => num < 0);
};
