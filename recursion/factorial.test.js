import test from 'ava'
import factorial from './factorial'

test('factorial', t => {
  t.is(factorial(5), 120)
})
