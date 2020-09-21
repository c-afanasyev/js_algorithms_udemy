function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.assert(fib(4) === 3)
console.assert(fib(10) === 55)
console.assert(fib(28) === 317811)
console.assert(fib(35) === 9227465)

console.log(fib(1))
