import test from 'ava'
import fibonnaci from './fibonacci'

test('fibonnaci', t => {
  t.is(fibonnaci(9), 34)
})
