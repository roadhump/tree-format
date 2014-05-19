[![Build Status](https://travis-ci.org/roadhump/tree-format.svg?branch=master)](https://travis-ci.org/roadhump/tree-format)

[![NPM version](https://badge.fury.io/js/tree-format.svg)](http://badge.fury.io/js/tree-format)

# tree-format

Encode JavaScript data to `tree` parameter format used by Jenkins.

## Installation

### NPM

```
npm install tree-format
```

### Bower

```
bower install tree-format
```

## API

### .stringify(obj)

```js
var TreeFormat = require('tree-format');
TreeFormat.stringify({a: ["b", "c"]}) // a[b,c]
```

## Contributors

Aliaksei Shytkin

## Licence

MIT
