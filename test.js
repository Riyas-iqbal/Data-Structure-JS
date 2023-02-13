function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [[arr[j]], [arr[j + 1]]] = [[arr[j + 1]], [arr[j]]]
                swapped = true
            }
        }
        if(!swapped) break;
    }
    return arr
}

let arr = [7,1,2,3,4,5,6]

console.log(bubbleSort(arr))


function SelectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        
    }
}
