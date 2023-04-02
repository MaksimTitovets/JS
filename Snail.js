transp = function(arr) {
  let arr2 = [];
  if (arr.length == 0) return arr;
  for (let i = 0, l = arr[0].length; i < l; i++) {
    arr2.push([]);
    for (let j = 0; j < arr.length; j++) arr2[i].push(arr[j][l - i - 1]);
  }
  return arr2;
}

snail = function(array) {
  let final = [];
  while (array.length != 0) {
    final = final.concat(array.shift());
    array = transp(array);
  }
  return final;
}
