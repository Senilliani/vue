export function sum(a: number, b: number) {
  return a + b
}

export const addArray = (arr: number[]) => {
  return arr.reduce((ac, curr) => ac + curr, 0)
}
