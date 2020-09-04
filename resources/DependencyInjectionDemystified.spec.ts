// The problem

export function biasedRandomGenerator(): number {
  const seed: number = Math.random();
  return seed < 0.7 ? 0 : 1;
}

it("should return 0 70% of the time", function () {
  expect(biasedRandomGenerator(/* ??? */)).toEqual(0);
});

// A possible solution

export function biasedRandomGenerator(randomGenerator: () => number): number {
  const seed: number = randomGenerator();
  return seed < 0.7 ? 0 : 1;
}

it("should return 0 for a seed of 0.5", function () {
  expect(biasedRandomGenerator(() => 0.5)).toEqual(0);
});

it("should return 1 for a seed of 0.7", function () {
  expect(biasedRandomGenerator(() => 0.7)).toEqual(1);
});

export interface RandomGenerator {
  (): number;
}
