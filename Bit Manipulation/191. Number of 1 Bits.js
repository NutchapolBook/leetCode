/**
 * @param {number} n - a positive integer
 * @return {number}
 */

Explanation:

// In each iteration, we use the bitwise AND operation n & (n - 1) to clear the rightmost set bit.
// We count the number of iterations until n becomes 0, and that count is the set bit count.
var hammingWeight = function(n) {
    
};