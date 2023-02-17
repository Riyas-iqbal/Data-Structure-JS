let arr = [-1, 4, 5, 8, 10]

function BinarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

        if (arr[middleIndex] === target) {
            console.log('data found')
            return middleIndex
        }

        if (arr[middleIndex] < target) {
            leftIndex = middleIndex + 1
        } else {
            rightIndex = middleIndex - 1
        }
    }

    return -1
}


console.log(BinarySearch(arr, 10))