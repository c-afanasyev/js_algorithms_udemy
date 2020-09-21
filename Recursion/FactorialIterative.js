function countFactorial(num) {
    let result = 1;
    for (let i = num; i > 1 ; i--) {
        result *= i;
    }
    
    return result;
}

console.assert(countFactorial(0) === 1)
console.assert(countFactorial(1) === 1)
console.assert(countFactorial(3) === 6)
console.assert(countFactorial(4) === 24)
console.assert(countFactorial(5) === 120)
