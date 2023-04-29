/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
  let a = ["*"],
      b = " ";
  for (let i = 0; i < nFloors - 1; i++) {    
    a.push(a[i] + "**");
  }
  for (let i = nFloors - 2; i >= 0 ; i--) {    
    a[i] = b + a[i] + b;
    b += " ";
  }
  return a;
}

function towerBuilderBP(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}
