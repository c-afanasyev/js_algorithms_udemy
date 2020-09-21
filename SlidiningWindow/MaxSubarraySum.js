function countMaxSubArraySum(arr, range) {
    if (arr.length < 1) {
        throw new Error(`Input array can't be empty!`);
    }
    if (range < 1) {
        throw new Error(`The range can't be less than 1!`);
    }
    if (range > arr.length) {
        throw new Error(`The range can't be greater than array length!`);
    }
    
    let maxSum = arr.slice(0,range).reduce((acc,val) => acc+val);
    
    let tempSum = maxSum;

    for (let i = range; i < arr.length; i++) {
        tempSum = tempSum - arr[i-range] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    
    return maxSum;
}
console.assert(countMaxSubArraySum([1], 1) === 1);
console.assert(countMaxSubArraySum([1,2], 2) === 3);
console.assert(countMaxSubArraySum([1,3,5,7,9], 2) === 16);
console.assert(countMaxSubArraySum([1,2,5,2,8,1,5], 2) === 10);
console.assert(countMaxSubArraySum([4,2,1,6], 1) === 6);
console.assert(countMaxSubArraySum([4,2,1,6,2], 4) === 13);

console.assert(countMaxSubArraySum([100,200,300,400], 2) === 700);
console.assert(countMaxSubArraySum([1,4,2,10,23,3,1,0,20], 4) === 39);
console.assert(countMaxSubArraySum([-3,4,0,-2,6,-1], 2) === 5);
console.assert(countMaxSubArraySum([3,-2,7,-4,1,-1,4,-2,1], 2) === 5);
//console.assert(countMaxSubArraySum([2,3], 3) === null);
