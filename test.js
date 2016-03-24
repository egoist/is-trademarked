import test from 'ava'
import fn from './'

test('regged', async t => {
  const marked = await fn('name')
  t.true(marked)
})

test('not regged', async t => {
  const marked = await fn('name-of-me')
  t.false(marked)
})
