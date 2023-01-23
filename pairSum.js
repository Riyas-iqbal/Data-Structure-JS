


function hi(arr, a) {
    let count = 0;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == a) {
                count++;
            }
        }
    }
    console.log(count);
}

hi([2, 4, 6, 8, 0], 8)


