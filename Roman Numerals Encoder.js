/*
Create a function taking a positive integer between 1 and 3999 (both included) as its parameter
and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit
and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC;
resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.
*/

function solution(num) {  
  const m = Math.floor(num / 1000);
  let o = [{
   0: "",
   1: "I",
   2: "II",
   3: "III",
   4: "VI",
   5: "V",
   6: "IV",
   7: "IIV",
   8: "IIIV",
   9: "XI"
 }, {
   0: "",
   1: "X",
   2: "XX",
   3: "XXX",
   4: "LX",
   5: "L",
   6: "XL",
   7: "XXL",
   8: "XXXL",
   9: "CX"
 }, {
   0: "",
   1: "C",
   2: "CC",
   3: "CCC",
   4: "DC",
   5: "D",
   6: "CD",
   7: "CCD",
   8: "CCCD",
   9: "MC"
 }];
  num = String(num).split('').reverse();
  const l = num.length;
  for (let i = 0; i < Math.min(l, 3); i++) {
        num.splice(i, 1, o[i][num[i]]);
   }
  if (m > 0) {
    num.splice(l - 1);
    for (let j = 0; j < m; j++) {
      num.push("M");
      }
   }
   return num.join("").split("").reverse().join("");
}

function solutionBP(number){
  // convert the number to a roman numeral
var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }

var ans = '';
while(number>0){
    for(a in roman){ 
        if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
            
    }
}
return ans;
}
