/*
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.
 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

function wave(str) {
  return str
    .split('')
    .map((x, i) => {
      let s = str.split('');
      s[i] = s[i].toUpperCase();
      return s.join('') 
    })
    .filter(x => /[A-Z]/.test(x));
}
