import test from 'ava'
import lib from './recursionIntro'

test('recursion intro', t => {
  t.is(lib.exponent(2, 2), 4)
  t.is(lib.exponent(2, 3), 8)

  t.deepEqual(lib.multiplier([1, 2, 3], 2), [2, 4, 6])

  t.deepEqual(lib.reverse([1, 2, 3]), [3, 2, 1])
})
