export const generateYearsArray = (from: number, to: number) =>
  Array.from({ length: to - from }, (_, index) => String(to - index));
