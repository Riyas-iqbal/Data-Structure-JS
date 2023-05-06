
const findDisappearedNumbers = function (nums) {
    let disapperedNumbers = []
    nums.sort((a, b) => a - b)
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            disapperedNumbers.push(i)
        }
    }
    console.log(disapperedNumbers)
    return disapperedNumbers
};



findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])
