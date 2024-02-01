export const parseToFixedWithoutZero = (n: number, fixed: number = 1): number =>
  parseFloat(n.toFixed(fixed));

export const countPercentage = (known: number, goal: number) =>
  known ? (goal / known) * 100 : 0;
