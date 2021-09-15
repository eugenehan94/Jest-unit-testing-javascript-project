const arrayClone = require("./arrayClone");

test("Clones array", () => {
  const array = [5, 6, 7, 8];
  expect(arrayClone(array)).toEqual(array);
  //Make sure clone of array is returned not the original
  expect(arrayClone(array)).not.toBe(array);
});
