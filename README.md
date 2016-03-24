# is-trademarked [![NPM version](https://img.shields.io/npm/v/is-trademarked.svg)](https://npmjs.com/package/is-trademarked) [![NPM downloads](https://img.shields.io/npm/dm/is-trademarked.svg)](https://npmjs.com/package/is-trademarked) [![Build Status](https://img.shields.io/circleci/project/egoist/is-trademarked/master.svg)](https://circleci.com/gh/egoist/is-trademarked)

> Check if a word is trademarked.

## Install

```bash
$ npm install --save is-trademarked
```

## Usage

```js
const isTrademarked = require('is-trademarked')

isTrademarked('unicorns')
  .then(trademarked => {
    console.log(trademarked) //=> false
  })
```

## API

### isTrademarked(input)

#### input

Type: `string`

The word to check.

## License

MIT © [EGOIST](https://github.com/egoist)
