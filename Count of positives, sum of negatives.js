/*

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example:
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

function countPositivesSumNegatives(input) {
  return input && input.length ? 
         [input.reduce((a, b) => a + (b > 0 ? 1 : 0), 0), 
          input.reduce((a, b) => a + (b < 0 ? b : 0), 0))] : [];
}

function countPositivesSumNegativesAnother(input) {
    return (input && input.length) ? [
      input.filter(x => x > 0).length,
      input.reduce((t, c) => c < 0 ? t + c : t, 0)
    ] : [];
}
