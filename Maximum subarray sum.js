var maxSequence = function(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      let sump = arr[i];
      for (let j = i + 1; j < arr.length; j++) {
        sump = Math.max(arr.slice(i, j + 1).reduce((a, b) => a + b), sump);
      }
      sum = Math.max(sump, sum);
  }
  return sum;
}
