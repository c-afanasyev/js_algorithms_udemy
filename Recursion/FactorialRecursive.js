function countFactorial(num) {
    if (num <= 1) return 1;
    return num * countFactorial(num-1);
}

console.assert(countFactorial(0) === 1)
console.assert(countFactorial(1) === 1)
console.assert(countFactorial(3) === 6)
console.assert(countFactorial(4) === 24)
console.assert(countFactorial(5) === 120)
console.assert(countFactorial(7) === 5040)
