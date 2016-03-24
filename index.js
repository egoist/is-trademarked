'use strict'
const got = require('got')

module.exports = function (word) {
  if (typeof word !== 'string') {
    return Promise.reject(new TypeError(`Expected word to be string, got ${typeof word}`))
  }
  return got
    .post('http://www.markerapi.com/', {body: {token: 'C9WxnRmHjd', search: word}})
    .then(res => {
      return res.body.indexOf('no trademarks found') === -1
    })
}
