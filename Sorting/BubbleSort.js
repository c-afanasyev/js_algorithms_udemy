function bubbleSort(arr) {
    for (let i = arr.length-1; i > 0; i--) {
        let noSwaps = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([5,4,3,2,1]))
console.log(bubbleSort([4,2,1,5,0,3]))
console.log(bubbleSort([1,2,3,5,4]))
console.log(bubbleSort([5,1,2,3,4]))
