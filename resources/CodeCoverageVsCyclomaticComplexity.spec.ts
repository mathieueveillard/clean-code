function addIfStrictlyPositive(a: number, b: number): number {
  let result = 0;
  if (a > 0) {
    result += a;
  }
  if (b > 0) {
    result += b;
  }
  return result;
}

it("should add strictly positive numbers", function () {
  expect(addIfStrictlyPositive(1, 2)).toEqual(3);
});
