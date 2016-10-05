/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

module.exports = flatten

function flatten (arr) {
  if (!Array.isArray(arr)) {
    return [arr]
  }
  if (arr.length === 0) {
    return []
  }
  return [...flatten(arr.shift()), ...flatten(arr)]
}
