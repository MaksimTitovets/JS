function findEvenIndex(arr) {
  if (arr.length > 1) {  
    if (arr.slice(1).reduce((a, b) => a + b) == 0) 
      return 0
    else
      if (arr.slice(0, arr.length).reduce((a, b) => a + b) == arr[arr.length - 1]) 
        return (arr.length - 1)
    else
      return arr.findIndex((_, i) => {
        if (i > 0 && i < arr.length - 1) 
          return (arr.slice(0, i).reduce((a, b) => a + b) == arr.slice(i + 1).reduce((a, b) => a + b));
      });
  } else return 0;
}
