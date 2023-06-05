/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i===j) {
                continue;
            }
            const number = arr[i]
            const numberToCheck = 2*arr[j]
            if (number === numberToCheck) {
                return true
            }
        }
    }
    return false
};

console.log(checkIfExist([7,1,14,11]))