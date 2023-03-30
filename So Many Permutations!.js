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
