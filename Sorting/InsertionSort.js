function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        const currValue = arr[i];
        for (var j = i-1; j >= 0 && arr[j] > currValue ; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currValue;
    }
    
    return arr;
}

const first = [0,1,2,3,4,5];
const second = [1,2,4,9,76];
console.assert(insertionSort([5,4,3,2,1,0]).every((val, index) => first[index] === val));
console.assert(insertionSort([2,1,9,76,4]).every((val, index) => second[index] === val));
