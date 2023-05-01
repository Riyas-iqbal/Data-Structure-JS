const missingNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === i ) {
                flag = 0
                break;
            } else {
                flag=1
            }
        }
        if (flag === 1) {
            return i
        }
    }
    return nums.length
};


console.log(missingNumber([0,1]))