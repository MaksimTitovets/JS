function solution(str){
  let arr = str.split("");
  let arr2 = [];
  for (let i = 0; i < arr.length; i+=2) {
     if (arr[i + 1]) arr2.push(arr[i].concat(arr[i + 1]))
     else arr2.push(arr[i].concat('_'));
   }
  return arr2;
}
