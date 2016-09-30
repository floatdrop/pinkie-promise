# pinkie-promise [![Build Status](https://travis-ci.org/floatdrop/pinkie-promise.svg?branch=master)](https://travis-ci.org/floatdrop/pinkie-promise)

> ES2015 [`Promise`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) [ponyfill](https://ponyfill.com)

Module exports global Promise object (if available) or [`pinkie`](https://github.com/floatdrop/pinkie) Promise polyfill.

## Install

```
$ npm install --save pinkie-promise
```

## Usage

```js
var Promise = require('pinkie-promise');

new Promise(function (resolve) { resolve('unicorns'); });
//=> Promise { 'unicorns' }
```

## Related

- [pify](https://github.com/sindresorhus/pify) - Promisify a callback-style function

## License

MIT © [Vsevolod Strukchinsky](https://github.com/floatdrop)
