function power(base, pow) {
    if (pow === 0)  return 1;
    return base * power(base, --pow);
}

console.assert(power(2,0) === 1);
console.assert(power(2,2) === 4);
console.assert(power(2,4) === 16);
