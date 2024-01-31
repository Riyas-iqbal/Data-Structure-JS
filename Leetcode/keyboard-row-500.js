/**
 * 
 * Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
 * In the American keyboard:
 * the first row consists of the characters "qwertyuiop",
 * the second row consists of the characters "asdfghjkl", and
 * the third row consists of the characters "zxcvbnm".
 * 
 * Input: words = ["Hello","Alaska","Dad","Peace"]
 * Output: ["Alaska","Dad"]
 * 
 * Input: words = ["omk"]
 * Output: []
 * 
 * Input: words = ["adsdf","sfd"]
 * Output: ["adsdf","sfd"]
 * 
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
    const firstRow = "qwertyuiop"
    const secondRow = "asdfghjkl"
    const thirdRow = "zxcvbnm"

    firstRowArray = firstRow.split("")
    secondRowArray = secondRow.split("")
    thirdRowArray = thirdRow.split("")

    let keyboardRow = []

    const checkIfAllLetterPresent = (word, row) => {
        const wordArray = word.split("")
        for (let wrdIdx = 0; wrdIdx < wordArray.length; wrdIdx++) {
            let letterPresent = false
            for (let rowIdx = 0; rowIdx < row.length; rowIdx++) {
                const letterFromWord = wordArray[wrdIdx]
                const letterFromRow = row[rowIdx]
                if (letterFromRow === letterFromWord) {
                    letterPresent = true
                    break;
                }
            }
    
            if (!letterPresent) {
                return false;
            }
        }
        return true
    }

    /**
     * Take each word and compare it with each row to check if each letter is from a single row
     */

    for (let idx = 0; idx < words.length; idx++) {
        const currentWord = words[idx].toLowerCase()

        const isWrdPrsntInFirstRow = checkIfAllLetterPresent(currentWord, firstRow)
        const isWrdPrsntInSecondRow = checkIfAllLetterPresent(currentWord, secondRow)
        const isWrdPrsntInThirdRow = checkIfAllLetterPresent(currentWord, thirdRow)
        
        if (isWrdPrsntInFirstRow | isWrdPrsntInSecondRow | isWrdPrsntInThirdRow) {
            keyboardRow.push(words[idx])   
        }
    }

    return keyboardRow
};



console.log(findWords(["Hello","Alaska","Dad","Peace"]))