/*
DESCRIPTION:
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. 
If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

var maxSequence = function(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      let sump = arr[i];
      for (let j = i + 1; j < arr.length; j++) {
        sump = Math.max(arr.slice(i, j + 1).reduce((a, b) => a + b), sump);
      }
      sum = Math.max(sump, sum);
  }
  return sum;
}

var maxSequenceBestPractice = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}
