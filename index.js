'use strict'
const got = require('got')
const cheerio = require('cheerio')

const splitMeta = (str) => str.substr(str.indexOf(':') + 1).trim()

module.exports = function (word) {
  if (typeof word !== 'string') {
    return Promise.reject(new TypeError(`Expected word to be string, got ${typeof word}`))
  }
  return got
    .post('http://www.markerapi.com/', {body: {token: 'C9WxnRmHjd', search: word}})
    .then(res => {
      if (res.body.indexOf('no trademarks found') !== -1) {
        return false
      }
      const $ = cheerio.load(res.body)
      const result = []
      $('.full').each(function () {
        const el = $(this)
        const meta = el.next().text().trim().split('\n\t\t\t\t\t\t\t')
        if (meta[0]) {
          const wordmark = el.find('.left').text()
          const reg = new Date(el.find('.right').text().substr(4))
          const description = splitMeta(meta[0])
          const sn = splitMeta(meta[1])
          const serviceCode = splitMeta(meta[2])
          result.push({
            wordmark,
            reg,
            description,
            sn,
            serviceCode
          })
        }
      })
      return result
    })
}
