function factorial(num) {
    for (let i = num; i > 1; i--) {
        num = num * (i-1) 
    }
    return num
}

const num = factorial(5)

console.log(num)