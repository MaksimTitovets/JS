/*
DESCRIPTION:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str){
  let arr = str.split("");
  let arr2 = [];
  for (let i = 0; i < arr.length; i+=2) {
     if (arr[i + 1]) arr2.push(arr[i].concat(arr[i + 1]))
     else arr2.push(arr[i].concat('_'));
   }
  return arr2;
}

function solutionBestPractice(s){
   return (s+"_").match(/.{2}/g)||[]
}
