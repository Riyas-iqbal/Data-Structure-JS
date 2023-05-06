const thirdMax = function(nums) {
    let max = -Infinity;
    let secMax = max;
    let thirdMax = secMax;

    if (nums.length <= 2 ){
        if (nums[0] > nums[1] || !nums[1]) {
            return nums[0];
        } else {
            return nums[1];
        }
    } 

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > thirdMax) {
            alignMax(nums[i])
        }
    }
    
    function alignMax(highest){
        if (highest > max && highest != max) {
            thirdMax = secMax
            secMax = max
            max = highest
        } else if (highest > secMax && highest!= secMax && highest!= max) {
            thirdMax = secMax
            secMax = highest
        } else if (highest > thirdMax && highest!= thirdMax && highest!= secMax) {
            thirdMax = highest
        }
    }

    if (thirdMax === -Infinity) {
        let max = -Infinity
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > max) {
                max = nums[i]
            }
        }
        return max
    } else {
        return thirdMax
    }
};


console.log(thirdMax([1,1,2]))