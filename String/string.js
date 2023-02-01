// Manipulate String without using String Methods

// Interchanging letter in a string


let data = 'hello my name is riyas iqbal'
let newData = [];
targetLetter = 'a'
alternateLetter = 'e'

for (let i = 0; i < data.length; i++) {
    if (data[i] == targetLetter) {
        newData += alternateLetter 
        continue
    }
    newData += data[i]
}

console.log(newData)