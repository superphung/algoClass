/*
Write a function that takes two numbers and returns the greatest common divisor.
*/

module.exports = greatestCommonDivisor

function greatestCommonDivisor (num1, num2) {
  let divisor = num1 > num2 ? num1 : num2

  function check (n1, n2, divisor) {
    if (n1 % divisor === 0 && n2 % divisor === 0) {
      return divisor
    }
    return check(n1, n2, divisor - 1)
  }
  return check(num1, num2, divisor)
}
