# is-trademarked [![NPM version](https://img.shields.io/npm/v/is-trademarked.svg)](https://npmjs.com/package/is-trademarked) [![NPM downloads](https://img.shields.io/npm/dm/is-trademarked.svg)](https://npmjs.com/package/is-trademarked) [![Build Status](https://img.shields.io/circleci/project/egoist/is-trademarked/master.svg)](https://circleci.com/gh/egoist/is-trademarked)

> Check if a word is trademarked.

## Install

```bash
$ npm install --save is-trademarked
```

## Usage

```js
const isTrademarked = require('is-trademarked')

// not trademarked yet
isTrademarked('unicorns')
  .then(trademarked => {
    console.log(trademarked) //=> false
  })

// trademarked
// return an array which contains a single item
isTrademarked('apple')
  .then(trademarks => {
    if (trademarks) {
      trademarks.forEach(t => console.log(t.wordmark))
    }
  })

// wildcard
// return an array which contains multiple items
// it searches `macbook` `macbook air` etc...
isTrademarked('mac*')
  .then(/* your code */)
```

## API

### isTrademarked(input, opts)

#### input

Type: `string`

The term to search. Support wildcard by using `*` symbol.

#### opts

Type: `object`

##### token

API token to retrieve data from `markerapi.com`, sign up to get one [here](http://www.markerapi.com/) for free.

#### return

```js
[
  {
    wordmark: 'NAME',
    reg: Tue May 20 2008 00:00:00 GMT+0800 (CST),
    description: 'General feature magazines',
    sn: '77119087',
    serviceCode: 'GS0161'
  }
]
```

Or return `false` when it's not trademarked.

## Related

- [is-trademarked-cli](https://github.com/egoist/is-trademarked-cli) - CLI for this module

## License

MIT © [EGOIST](https://github.com/egoist)
