/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string
*/

function isValidIP(str) { 
  if ((str.split('.').filter(x => /[a-z]|\s/gi.test(x))[0]) ||
      (str.split('.').filter(x => x == '')[0] == '') ||
      (str.split('.').filter(x => x.length > 1 && (x[0] == '0'))[0]))
    return false;  
  return str.split('.').filter(x => (Number(x) < 256 && Number(x) >= 0)).length == 4 ? true : false;
}
