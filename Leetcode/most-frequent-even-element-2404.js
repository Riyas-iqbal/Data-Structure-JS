/**
 * Given an integer array nums, return the most frequent even element.
 * If there is a tie, return the smallest one. If there is no such element, return -1.
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    //even numbers
    let evenNumbers = nums.filter(no => no % 2 == 0)
    if (!evenNumbers.length) {
        return -1
    }

    let evenObj = {}

    //finding count of even numbers
    for (let i = 0; i < evenNumbers.length; i++) {
        if (evenObj[evenNumbers[i]]) {
            continue;
        }
        let count = 1
        evenObj[evenNumbers[i]] = count
        for (let j = 0; j < evenNumbers.length; j++) {
            if (evenNumbers[i] === evenNumbers[j] && i !== j) {
                count++
            }
        }
        evenObj[evenNumbers[i]] = count
    }

    let mostFrequent = null

    //
    const keys = Object.keys(evenObj)
    console.log(evenObj)
    let appearance = -1
    keys.forEach(key=>{
        if (evenObj[key] > appearance) {
            console.log(evenObj[key]+' > '+ appearance)
            mostFrequent = key
            appearance = evenObj[key]
            console.log(mostFrequent)
        }
        if (key == appearance && evenObj < mostFrequent) {
            mostFrequent = key
            appearance = evenObj[key]
        }
    })

    return Number(mostFrequent)
};

console.log(mostFrequentEven([0,1,2,2,4,4,1]))