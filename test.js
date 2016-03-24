import test from 'ava'
import fn from './'

test('wildcard', async t => {
  const a = await fn('name*')
  t.true(a.length > 2)
  t.is(a[0].wordmark, 'NAME')
})

test('single', async t => {
  const a = await fn('name')
  t.is(a[0].wordmark, 'NAME')
  t.is(a[0].description, 'General feature magazines')
})
