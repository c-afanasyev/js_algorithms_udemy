function validateAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    
    const lookup = {};
    
    for (const char of string1) {
        lookup[char] = ++lookup[char] || 1;
    }

    for (const char of string2) {
        if (lookup[char]) {
            lookup[char]--;
        } else {
            return false;
        }
    }
    
    return true;
}


console.assert(validateAnagram('',''))
console.assert(!validateAnagram('aaz','zza'))
console.assert(validateAnagram('anagram','nagaram'))
console.assert(!validateAnagram('rat','car'))
console.assert(!validateAnagram('awesome','awesom'))
console.assert(!validateAnagram('amanaplanacanalpanama','acanalmanplanpamana'))
console.assert(validateAnagram('qwerty','qeywrt'))
console.assert(validateAnagram('texttwisttime','timetwisttext'))
