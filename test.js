function merge(arr1, arr2) {
    let newArr = new Array(arr1.length + arr2.length)
    let idx_arr1 = 0 , idx_arr2 = 0
    for (i = 0; i < newArr.length; i++) {
        if (arr1[idx_arr1] < arr2[idx_arr2] || !arr2[idx_arr2]) {
            newArr[i] = arr1[idx_arr1]
            idx_arr1++
        } else {
            newArr[i] = arr2[idx_arr2]
            idx_arr2++
        }
    }
    return newArr
}

function mergeSort(arr) {
    if(arr.length < 2){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid)) 
    let right = mergeSort(arr.slice(mid)) 

    return merge(left,right)
}


console.log(mergeSort([1, 4,2 ,3, 6, 7]));