let stringOne = 'Hello World'
let stringTwo = 'String Manipulation'


//index of a letter or word
console.log( stringOne.indexOf('H') );
console.log( stringOne.indexOf('ello') );

//returns the letter at the specified index
console.log( stringOne.charAt(0)  )

//join two string or more string
let stringThree = stringOne.concat(stringTwo)
console.log(stringThree)

//replace
console.log( stringOne.replace('Hello','Hi') )