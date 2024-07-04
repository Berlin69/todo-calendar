export const createEmptyArray = (number: number) => {
  const array: number[] = [];
  for (let i = 0; i < number; i++) {
    array.push(i);
  }
  return array;
};
