import test from 'ava'
import flatten from './flatten'

test('flatten', t => {
  t.deepEqual(flatten([1, [2], [3, [[4]]]]), [1, 2, 3, 4])
})
