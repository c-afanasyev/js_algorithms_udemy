function getFirstZeroSumPair(arr) {
    let left = 0, right = arr.length-1;
    let result = [];
    
    while (left < right) {
        const sum = arr[left] + arr[right];
        
        if (sum === 0) {
            result = [arr[left], arr[right]]
            break;
        }
        sum > 0 ? right-- : left++;
    }
    
    return result;
}

const first = [-3,3];
const second = [-2,2];

console.assert(getFirstZeroSumPair([-3,-2,-1,0,1,2,3]).every((val, index) => first[index]));
console.assert(getFirstZeroSumPair([-4,-2,-1,0,1,2,3]).every((val, index) => second[index]));
console.assert(getFirstZeroSumPair([-2,0,2,3]).every((val, index) => second[index]));
console.assert(getFirstZeroSumPair([-2,0,1,3]).length === 0);
console.assert(getFirstZeroSumPair([1,2,3]).length === 0);
