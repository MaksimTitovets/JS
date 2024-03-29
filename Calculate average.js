/*

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

function findAverage(array) {
  return array[0] ? array.reduce((a, b) => a + b) / array.length : 0;
}
