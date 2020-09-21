function recursiveRange(range){
    if (range < 1) return range;
    return range + recursiveRange(--range);
}

console.assert(recursiveRange(6) === 21);
console.assert(recursiveRange(10) === 55);

