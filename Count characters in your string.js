/*
The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/


function count(string) {
  let arr = string.split('').sort(), result = {};
  for (let i = 0; i < arr.length; i = arr.lastIndexOf(arr[i]) + 1) {
    result[arr[i]] = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) + 1;
  }
  return result;
}

function countBP (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}
