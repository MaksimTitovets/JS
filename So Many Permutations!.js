/*
DESCRIPTION:
In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.

Good luck!
*/

function permutations(string) {
  let l = string.length;
  let arr = [string];
  for (let i = 0; i < l; i++) {
    let m = string.split(''),
        a = m.splice(i, 1);
    for (let j = 0; j < l; j++) {
      m.unshift(m.pop());
      for(let k = 0; k < l; k++) {
        m.splice(k, 0, a[0]);
        if (arr.indexOf(m.join("")) == -1) 
          arr.push(m.join(""));
        if (arr.indexOf(m.slice().reverse().join("")) == -1) 
          arr.push(m.slice().reverse().join(""));
        m.splice(k, 1);
      }
    }
  }
  return arr;
}
