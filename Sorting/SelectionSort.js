function selectionSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        let minIndex = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        if (i === minIndex) continue;
        //swap
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

console.log(selectionSort([5,4,3,2,1]))
console.log(selectionSort([4,2,1,5,0,3]))
console.log(selectionSort([1,2,3,5,4]))
console.log(selectionSort([5,1,2,3,4]))
