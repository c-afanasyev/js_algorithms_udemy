function productOfArray(arr) {
    let counter = arr.length-1;
    
    return (function count(arr, counter) {
        if (counter < 0) {
            return 1;
        }
        return arr[counter] * count(arr, --counter);
    })(arr, counter);
}

console.assert(productOfArray([1]) === 1);
console.assert(productOfArray([1,2,3]) === 6);
console.assert(productOfArray([1,2,3,10]) === 60);
