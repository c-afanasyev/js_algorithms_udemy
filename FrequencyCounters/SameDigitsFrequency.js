function sameFrequency(first, second) {
    let firstString = first.toString(), secondString = second.toString();
    if (firstString.length !== secondString.length) return false;
    
    let result = true;
    
    let firstLookup = {};

    for (const digit of firstString) {
        firstLookup[digit] = ++firstLookup[digit] || 1;
    }

    for (const digit of secondString) {
        if (firstLookup[digit]) {
            firstLookup[digit]--;
        } else {
            result = false;
            break;
        }
    }
    
    return result;
}


console.assert(sameFrequency(182,281) === true)
console.assert(sameFrequency(34,14) === false)
console.assert(sameFrequency(3589578,5879385) === true)
console.assert(sameFrequency(22,222) === false)
