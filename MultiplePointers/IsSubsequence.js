function isSubsequence(first, second) {
    let left = 0, right = 0;
    
    while (left < first.length && right < second.length){
        if (first[left] === second[right]) {
            left++;
        }
        right++;
    }
    
    return left === first.length;
}

console.assert(isSubsequence('hello', 'hello world') === true);
console.assert(isSubsequence('sing', 'sting') === true);
console.assert(isSubsequence('abc', 'abracadabra') === true);
console.assert(isSubsequence('abc', 'acb') === false);
