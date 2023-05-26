function factorial(n)
{ console.log(n);
  return n < 0 || n > 12 ? 'RangeError' : n === 0 ? 1 :
    Array(n).fill(1).map((x, i) => x += i).reduce((a, b) => a * b);
  
}
