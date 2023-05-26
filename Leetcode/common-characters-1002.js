

const commonChars = function (words) {
    let newArr = []
    let flag = 0;
    for (let j = 0; j < words[0].length; j++) {
        flag = 0;
        for (let k = 1; k < words.length; k++) {
            let wordToCheck = words[k]
            if (wordToCheck.includes(words[0][j])) {
                flag++
            }
        }
        if (flag >= words.length - 1) {
            if (newArr.includes(words[0][j])) {
                console.log(flag)
                if (flag > ((words.length - 1) * 2)) {
                    newArr.push(words[0][j])
                }
            } else {
                newArr.push(words[0][j])
            }
        }
    }
    return newArr
};



const words = ["bella", "label", "roller"]

// return ["e","l","l"]
console.log(commonChars(words))