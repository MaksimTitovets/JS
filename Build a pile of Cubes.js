/*
You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1
*/

function findNb(m) {
  let n = 1;
  while (m > 0) {
    m = m - n ** 3;
    if (m == 0) return n;
    n++;
  }
  return -1;
}

function findNbBP(m) {
  var n = 0
  while (m > 0) m -= ++n**3
  return m ? -1 : n
}
