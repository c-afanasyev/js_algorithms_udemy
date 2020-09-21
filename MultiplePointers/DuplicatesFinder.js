function areThereDuplicates(...args) {
    let result = false;
    const lookup = {}
    let left = 0, right = args.length-1;

    while (left < right) {
        if (!(lookup[args[left]])) {
            lookup[args[left]] = 1;
            left++;
        } else {
            result = true;
            break;
        }
        
        if (!(lookup[args[right]])) {
            lookup[args[right]] = 1;
            right--;
        } else {
            result = true;
            break;
        }
    }
    
    if (args.length % 2 !== 0) {
        if (lookup[args[left]]) {
            result = true;
        }
    }
    
    return result;
}

console.assert(areThereDuplicates(1,2,3) === false)
console.assert(areThereDuplicates(1,2,2) === true)
console.assert(areThereDuplicates('a','b','c','a') === true)
console.assert(areThereDuplicates('a','b','c','d') === false)
console.assert(areThereDuplicates('a','b','c','d','d') === true)
console.assert(areThereDuplicates('a','b','c','d','e') === false)
console.assert(areThereDuplicates('c','b','c','d','e') === true)
