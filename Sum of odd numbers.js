/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
  let arr = Array.from({ length: n - 1 }, (v, k) => 1 + k).reduce((a, b) => a + b, 0);
  return Array.from({ length: n}, (v, k) => (arr + k) * 2 + 1).reduce((a, b) => a + b, 0);
//return n * n * n;
}
