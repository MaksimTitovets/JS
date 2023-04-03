function tribonacci(signature,n){
  for(let i = 3; i < n; i++) signature.push(signature[i - 1] + signature[i - 2] + signature[i - 3]);
  signature.splice(n);
  return signature;
}
