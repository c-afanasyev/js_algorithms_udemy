function averagePair(arr, average) {
    if (arr.length < 2) {
        return false;
    }
    
    let result = false;
    let left = 0, right = arr.length-1;
    
    while (left < right) {
        const currAverage = arr[left]+arr[right]/2;
        if (currAverage === average) {
            result = true;
            break;
        }
        currAverage < average ? left++ : right--;
    }
    
    return result;
}

console.assert(averagePair([1,2,3], 2.5) === true);
console.assert(averagePair([1,3,3,5,6,7,10,12,19], 8) === true);
console.assert(averagePair([-1,0,3,4,5,6], 4.1) === false);
console.assert(averagePair([], 4) === false);
