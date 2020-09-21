function linearSearch(arr, n){
    let result = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n){
            result = i;
            break;
        }
    }
    return result;
}
