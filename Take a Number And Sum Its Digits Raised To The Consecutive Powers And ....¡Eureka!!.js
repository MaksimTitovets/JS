function sumDigPow(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) 
    if (String(i).split('').reduce((a, b, i) => a + b ** (i + 1), 0) == i) 
      arr.push(i);  
  return arr;  
}
