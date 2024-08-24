export function incrementAndMultiply(count: number): number {
  const result = (count === 0 ? 1 : count) * 2;
  return result > 1000000 ? 1000000 : result;
}
