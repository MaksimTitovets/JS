/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be returned as they are. 
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message) {
  return message.replace(/[A-Za-z]/g, (v) => {
    let x = v.charCodeAt();
    if ((x > 64 && x < 78) || (x > 96 && x < 110)) return String.fromCharCode(x + 13)
    else return String.fromCharCode(x - 13)    
  });
}

const rot13Clever = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt() + (letter.toLowerCase() < 'n' ? 13: -13)));
