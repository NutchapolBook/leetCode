/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let arrayX = x.toString().split('');
  let max = arrayX.length - 1;
  result = true;

  for (let index = 0; index < arrayX.length; index++) {
    if (arrayX[index] != arrayX[max] && index != max) {
      result = false;
      break;
    }
    max--;
  }

  console.log(arrayX, result);
  return result;
};

isPalindrome(121)
isPalindrome(-121)
isPalindrome(10)