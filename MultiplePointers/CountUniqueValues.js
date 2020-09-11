function countUniqueValues(array){
    if (array.length <= 1) {
        return array.length;
    }
    
    let left = 0;

    for (let right = 0; right < array.length; right++) {
        if (array[left] !== array[right]) {
            array[++left] = array[right];
        }
    }
    
    return left+1;
}
console.assert(countUniqueValues([5,7,9]) === 3);
console.assert(countUniqueValues([1,3,5]) === 3);
console.assert(countUniqueValues([1,1,1,1,1,2]) === 2);
console.assert(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) === 7);
console.assert(countUniqueValues([]) === 0);
console.assert(countUniqueValues([1]) === 1);
console.assert(countUniqueValues([-2,-1,-1,0,1]) === 4);
