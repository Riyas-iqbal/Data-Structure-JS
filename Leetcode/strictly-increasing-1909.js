/**
 * Given a 0-indexed integer array nums, return true if it can be made strictly increasing after 
 * removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.
 * The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
    let flag = 0

    for (let i = 0; i < nums.length; i++) {
        let count = 0
        for (let j = 0; j < nums.length; j++) {
            if (i == j && nums[j] > nums[j]){
                
                continue
            } 
            if (nums[j] > nums[j + 1]) {
                count++
            }
        }
        if (count = 0) {
            return true
        }
    }

    return false
};

console.log(canBeIncreasing([1, 2, 10, 5, 7]))