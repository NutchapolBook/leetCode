/**
 * @param {number} x
 * @return {boolean}
 */
//slow
// var isPalindrome = function (x) {
//   let arrayX = x.toString().split('');
//   let max = arrayX.length - 1;
//   result = true;

//   for (let index = 0; index < arrayX.length; index++) {
//     if (arrayX[index] != arrayX[max] && index != max) {
//       result = false;
//       break;
//     }
//     max--;
//   }

//   console.log(arrayX, result);
//   return result;
// }
var isPalindrome = function(x) {
  var reverse = 0;
  var copy = x;

  //The loop break when the copy of original number becomes zero
  //Also negative number cannot be a palindrome
  while (copy > 0) {
    const digit = copy % 10;
    reverse = reverse * 10 + digit;
    copy = ~~(copy / 10);
  }

  console.log(x, reverse == x);

  return reverse == x;
};

isPalindrome(121)
isPalindrome(-121)
isPalindrome(10)