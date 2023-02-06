function InsertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let numberToInsert = array[i]
        let j = i - 1
        while (j >= 0 && array[j] > numberToInsert) {
            array[j+1]=array[j]
            j = j - 1
        }
        array[j+1] = numberToInsert
    }
}

const arr = [8,20,-2,4,-6]

InsertionSort(arr)

console.log(ar);