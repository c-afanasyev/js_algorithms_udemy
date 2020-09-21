function stringSearch(str1, str2){
    let occurrences = 0;
    const longStr = str1.length >= str2.length ? str1 : str2
    const shortStr = str1.length < str2.length ? str1 : str2;

    for (let i = 0; i < longStr.length; i++) {
        for (let j = 0; j < shortStr.length; j++) {
            if (longStr[i+j] !== shortStr[j]) {
                break;
            } else if (j === shortStr.length-1) {
                i += j;
                occurrences++;
            }
        }
    }
    
    return occurrences;
}

console.assert(stringSearch('dleksdkomglsdfs', 'omg') === 1)
console.assert(stringSearch('dleksdkomglsdomgfs', 'omg') === 2)
console.assert(stringSearch('dleksdkomgomlsdfs', 'omg') === 1)
console.assert(stringSearch('dleksdkomgomglsdfs', 'omg') === 2)
