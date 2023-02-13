function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [[arr[j]], [arr[j + 1]]] = [[arr[j + 1]], [arr[j]]]
                swapped = true
            }
        }
        if (!swapped) break;
    }
    return arr
}


function SelectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minimum = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[minimum] ) {
                minimum = j
            }
        }
        if (i !== minimum) [[arr[i]],[arr[minimum]]] = [[arr[minimum]],[arr[i]]]
    }
    return arr
}


let random = [4, 2, 5, 1, 3]
let nearlySorted = [1, 2, 3, 5 , 4]


function InsertionSort(arr){
    for(let i = 1 ; i < arr.length ; i++){
        let currentElement = arr[i]
        for(var j = i-1; j >= 0 && arr[j] > currentElement ; j--){
            arr[j+1]=arr[j]
        }
        arr[j+1]=currentElement
    }
    return arr
}
