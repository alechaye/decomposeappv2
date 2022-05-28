const factorial_dict = {
  1: 1,
  2: 2,
  3: 6,
  4: 24,
  5: 120,
  6: 720,
  7: 5040,
  8: 40320,
  9: 362880,
  10: 3628800,
  11: 39916800,
}

export const numberOfPermutations = n => {
  let partialSum = Math.round(factorial_dict[n]/factorial_dict[1]);
  for (let i = 1; i < n; i++) {
    partialSum += Math.round(factorial_dict[n]/factorial_dict[i]);
  }
  return partialSum;
}