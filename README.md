# node-env-match
[![NPM Version][npm-image]][npm-url] [![Travis Build][travis-image]][travis-url]

> Utility to test the value of the NODE_ENV system variable.

## Usage
Add _node-env-match_ as a project dependency

```
$ npm install node-env-match --save
```

Require and use it is really simple

```javascript
// Suppose you run your app with
// NODE_ENV=simple-test

var nodeEnvMatch = require('node-env-match');

// you can use a string argument
nodeEnvMatch("simple-test") // => true
nodeEnvMatch("test") // => false

// or a regular expression
nodeEnvMatch(/simple-test/) // => true
nodeEnvMatch(/test/) // => true

// or array of strings/reg-exp
// it returns true if at least one matches
nodeEnvMatch(['test',/test/]) // => true
nodeEnvMatch(['test',/tost/]) // => false

```

You can see more examples in *test/node-env-match* file.


## Test

```
$ npm test
```

## License
MIT © [Andrea Tarquini](https://blog.h4t0n.com)

[npm-image]: https://img.shields.io/npm/v/node-env-match.svg
[npm-url]: https://www.npmjs.com/package/node-env-match
[travis-image]: https://img.shields.io/travis/h4t0n/node-env-match.svg
[travis-url]: https://travis-ci.org/h4t0n/node-env-match
