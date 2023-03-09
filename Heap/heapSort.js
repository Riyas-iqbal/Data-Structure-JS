function heapSort(array) {
    const n = array.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {

        heapify(array, n, i);
    }


    for (let i = n - 1; i >= 0; i--) {

        [array[0], array[i]] = [array[i], array[0]];
        heapify(array, i, 0);
    }

    return array;
}

function heapify(array, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && array[left] > array[largest]) {
        largest = left;
    }

    if (right < n && array[right] > array[largest]) {
        largest = right;
    }


    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]];
        heapify(array, n, largest);
    }

}