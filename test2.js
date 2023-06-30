let a ='aabba'
let b = 'baaba'

function checkStringIsEqual(stringOne,stringTwo){
    if (stringOne.length !== stringTwo.length) {
        console.log('Not Equal')
        return false
    }
    for (let i = 0; i < stringOne.length; i++) {
        let count = 0
        for (let j = 0; j < stringTwo.length; j++) {
            if (stringOne[i] === stringTwo[j]) {
                count++
            }
        }
        if (count !== getCount(stringOne[i],stringOne)) {
            return false
        }
    }
    return true
}

function getCount(char,string){
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (char == string[i]) {
            count++
        }
    }
    return count
}

console.log(checkStringIsEqual(a,b))

//method two
function checkStringIsEqual2 (stringOne,stringTwo){
    if (JSON.stringify(new Array(...stringOne).sort()) === JSON.stringify(new Array(...stringTwo).sort())) return true
    return false
}

