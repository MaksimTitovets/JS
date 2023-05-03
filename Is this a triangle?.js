/*
Implement a function that accepts 3 integer values a, b, c. 
The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

function isTriangle(a,b,c) {
  let x = [a, b, c].sort((a, b) => a - b);
  return x[2] < (x[0] + x[1]);
}

function isTriangleBP(a,b,c) {
  return a + b > c && a + c > b && c + b > a;
}

function isTriangleOther(a,b,c) {
  [a, b, c] = [a, b, c].sort((x, y) => x - y);
  return a + b > c;
}
