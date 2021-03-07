function fibo(n) {
  var res = []
  if(res[n] !== undefined) {
    return res[n]
  }
  return res[n] = (n === 0 || n === 1)? 1 : fibo(n - 1) + fibo(n - 2)
}
console.log(fibo(100))
