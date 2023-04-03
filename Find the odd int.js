function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    if (A.filter(el => (el == A[i])).length % 2 > 0) 
    return A[i];
  }
}
