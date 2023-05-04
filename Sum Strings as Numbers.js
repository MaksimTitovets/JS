/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

function sumStrings(a,b) { 
  a = a.split('');
  b = b.split('');
  let l = a.length - b.length, k = 0, p = 0, c = [];
  l < 0 ? a = Array(-l).fill('0').concat(a) : b = Array(l).fill('0').concat(b);
  a = a.map(x => Number(x));
  b = b.map(x => Number(x));
  for (let i = a.length - 1; i >= 0 ; i--) {
    p = a[i] + b[i] + k;
    c.unshift(p >= 10 ? p - 10 : p)
    k = Math.floor(p / 10);
  }
  if (k > 0) c.unshift(k);
  return c.join('').replace(/^0+/, '');
}

function sumStringsClever(a,b) { 
  return (BigInt(a) + BigInt(b)).toString();
}

function sumStrings(a, b) {
  var res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res.replace(/^0+/, '');
}
