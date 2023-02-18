function pivotElement(arr, start = 0, end = arr.length) {
    let pivotIndex = start
    let pivot = arr[pivotIndex]

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            pivotIndex++
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]
        }
    }

    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]]

    return pivotIndex
}

function quickSort(arr, left = 0, right = arr.length) {
    if (left < right) {
        let pivot = pivotElement(arr,left,right)
        //left
        quickSort(arr, left, pivot - 1)
        //right
        quickSort(arr, pivot + 1, right)
    }
    return arr
}

console.log(quickSort([3,4,1,6,2,7,8]))



