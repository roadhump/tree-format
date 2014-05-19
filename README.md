[![Build Status](https://travis-ci.org/roadhump/tree-format.svg?branch=master)](https://travis-ci.org/roadhump/tree-format)

# tree-format

## Description

Encode JavaScript data to `tree` parameter format used by Jenkins.

## API

### .stringify(obj)

```js
TreeFormat.stringify({a: ["b", "c"]}) // a[b,c]
```

## Contributors

Aliaksei Shytkin

## Licence

MIT
