export const sum = (nums: number[]): number => {
  return nums.reduce((result, current) => result + current, 0);
};
