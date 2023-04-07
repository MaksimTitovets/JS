/*
DESCRIPTION:
Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures 
and same corresponding length of nested arrays as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     
For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.
*/

Array.prototype.sameStructureAs = function (other) {
  let a1 = this,
      a2 = other;
  
  if (!isArray(a1) || !isArray(a2)) return false;
  
  while (a1.findIndex(el => isArray(el)) != -1) {
    let i = a1.findIndex(el => isArray(el));
    a1.splice(i, 1, "<", ...a1[i], ">");
  }
  
  while (a2.findIndex(el => isArray(el)) != -1) {
    let i = a2.findIndex(el => isArray(el));
    a2.splice(i, 1, "<", ...a2[i], ">");
  }
  
  let str1 = a1.join('').replace(/[^<>]/gi, "0");
  let str2 = a2.join('').replace(/[^<>]/gi, "0");
  if (str1 == str2) return true 
  else return false;
};
