function minSubArrayLen(nums, targetSum) {
    let minLength = Infinity;
    let currentSum = 0;
    let left = 0, right = 0;
    
    while (left < nums.length) {
        if (currentSum < targetSum && right < nums.length) {
            currentSum += nums[right];
            right++;
        } else if (currentSum >= targetSum) {
            minLength = Math.min(minLength, right-left);
            currentSum -= nums[left];
            left++;
        } else {
            break;
        }
    }
    
    return minLength === Infinity ? 0 : minLength;
}

console.assert(minSubArrayLen([2,3,1,2,4,3], 7) === 2)
console.assert(minSubArrayLen([2,1,6,5,4], 9) === 2)
console.assert(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) === 1)
console.assert(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) === 3)
console.assert(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) === 5)
console.assert(minSubArrayLen([4,3,3,8,1,2,3], 11) === 2)
console.assert(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) === 0)
