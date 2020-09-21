function binarySearch(arr, target) {
    let left = 0, right = arr.length-1, middle;
    
    do {
        middle = Math.floor((left + right) / 2);
        if (target < arr[middle]) {
            right = middle-1;
        } else {
            left = middle+1;
        }
    } while (left <= right && arr[middle] !== target);
    
    return arr[middle] === target ? middle : -1;
}

console.assert(binarySearch([1,2,3,4,5],2) === 1);
console.assert(binarySearch([1,2,3,4,5],3) === 2);
console.assert(binarySearch([1,2,3,4,5],5) === 4);
console.assert(binarySearch([1,2,3,4,5],6) === -1);
console.assert(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99],10) === 2);
console.assert(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99],95) === 16);
console.assert(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99],100) === -1);
