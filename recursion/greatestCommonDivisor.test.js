import test from 'ava'
import common from './greatestCommonDivisor'

test('greatest common divisor', t => {
  t.is(common(3, 9), 3)
  t.is(common(10, 9), 1)
})
