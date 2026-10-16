export const numberArray = [1, 2, 3];

numberArray.push(4);

const numberArray2 = [...numberArray];
numberArray2.push(7);

console.log({ numberArray, numberArray2 });
