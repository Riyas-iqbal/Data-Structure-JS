
function BubbleSort(array) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i + 1]
                array[i + 1] = array[i]
                array[i] = temp
                swapped = true
            }
        }
    } while (swapped);
}

let array = [4 , 6 , 5 , 3 , -1 ]

BubbleSort(array)

console.log(array)



function BubbleSort(array) {
    let numToInsert=array[0]
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (numToInsert > array[j] && i!==j) {
                array[j] = array[j+1];
            }
        }
    }
}

