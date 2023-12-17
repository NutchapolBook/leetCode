/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// Below is my boring but clear solution, 
// using the proposed BigInt object.

// The idea is to use inputs, a and b to build two binary literals. 
// Calculating the sum is done by calling the BigInt 
// function on our binary literals, 
// adding them together and returning the sum with 
// a call to the toString method with 2 as the argument, 
// since we are working with binary numbers.

var addBinary = function(a, b) {
    const aBi = `0b${a}`
    const bBi = `0b${b}`
    const sum = BigInt(aBi) + BigInt(bBi)
    console.log(sum)
    return sum.toString(2)
}

console.log(addBinary("11","1"))
console.log(addBinary("1010","1011"))