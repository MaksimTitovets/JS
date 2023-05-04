/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  let a1 = [], a2 = [];
  arr.forEach(x => x === 0 ? a2.push(0) : a1.push(x));
  return a1.concat(a2);
}

function moveZerosClever(arr) {
  return arr.sort((a, b) => b === 0 ? -1 : 0);
}

var moveZerosBP = function(arr) {
  return arr
    .filter((val) => val !== 0)
    .concat(arr.filter((val) => val === 0));
}
