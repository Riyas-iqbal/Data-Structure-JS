/** 
 *   Given two positive integers a and b, return the number of common factors of a and b.
 *   An integer x is a common factor of a and b if x divides both a and b.
 * 
 *  Input: a = 12, b = 6
 *  Output: 4
 *  Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.
 * 
 *  Input: a = 25, b = 30
 *  Output: 2
 *  Explanation: The common factors of 25 and 30 are 1, 5.
 * 
 */


const commonFactors = function(a, b) {
    const lowest = a < b ? a : b;
    let count = 0
    for (let i = 0; i <= lowest; i++) {
        if ( a%i == 0 && b%i == 0 ) {
            count+=1;
        }
    }
    return count
};

console.log(commonFactors(885,885))