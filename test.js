function merge(arr1,arr2) {
    let length = arr1.length + arr2.length
    let j = 0
    let k = 0
    let newArr = []
    for (let i = 0; i < length; i++) {
        if (arr1[j] > arr2[k] || !arr1[j] ) {
            newArr.push(arr2[k])
            k++
        } else {
            newArr.push(arr1[j])
            j++
        }
    }
    return newArr
}

function mergeSort(arr){
    if (arr.length < 2) {
        return arr
    }

    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)

    return merge(left,right)
}



console.log(mergeSort([3,21,5,4,5]))