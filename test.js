function nthLargest(arr, n) {
    let largest = arr[0];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            count++;
            if (count === n) {
                largest = arr[i];
                break;
            }
        }
    }
    return largest;
}



let arr = [60,4,3,5,6,7,43,21]
console.log(nthLargest(arr,8))
arr.sort((a,b)=>a-b)
console.log(arr);




