/**
 * Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
 * Since the result may be very large, so you need to return a string instead of an integer.
 * 
 * Example 1:
 * Input: nums = [10,2]
 * Output: "210"
 * 
 * Example 2:
 * Input: nums = [3,30,34,5,9]
 * Output: "9534330"
 * 
 * Difficulty - medium
 */

const largestNumber = function (nums) {
    let swapNumbers = (i, j) => {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let first = nums[i].toString()
            let second = nums[j].toString()
            let k = 0;
            let l = 0;
            while (true) {
                if (first[k] == second[l] && (first[k] || second[l])) {
                    if (first[k + 1] && !second[l + 1]) {
                        break;
                    } else if (first[k + 1] == 0 || second[l + 1] == 0) {
                        break;
                    } else if (second[l + 1] && !first[k + 1] && second[l + 1] != 0) {
                        console.log(second[l+1])
                        swapNumbers(i, j)
                        break;
                    } else if (!first[k + 1] && !second[l + 1]) {
                        continue;
                    } else {
                        if (first[k + 1]) {
                            k++
                        }
                        if (second[l + 1]) {
                            l++
                        }
                    }
                } else if (first[k] < second[l]) {
                    swapNumbers(i, j)
                    break;
                }
            }
        }
    }

    return nums.join('');
};


console.log(largestNumber([111311, 1113]))