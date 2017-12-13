<h1 align="center">
  daddy
</h1>
<p align="center">
  <a href="https://travis-ci.org/17media/daddy" alt="Build Status">
    <img src="https://img.shields.io/travis/17media/daddy.svg?style=flat-square&" />
  </a>
  <a href="https://codecov.io/gh/17media/daddy" alt="Coverage">
    <img src="https://img.shields.io/codecov/c/github/17media/daddy/master.svg?style=flat-square&" />
  </a>
  <img src="https://img.shields.io/github/license/17media/daddy.svg?style=flat-square&" />
</p>


## Why Daddy
- Humans readable code
- Easy for testing
- Zero dependencies
- Works in Node and Browser

## Installation

```sh
$ yarn add https://github.com/17media/daddy#latest
```

## Usage

```js
import daddy from '@17media/daddy'

daddy('2017-12-12').tw.time

// or
import { tw } from '@17media/daddy'

tw('2017-12-12').time
```

## Valid date format
`YYYY-MM-DD HH:mm:ss`

You and feel free to omit `HH:mm:ss`, daddy will help you auto suffix `00`.
## Regions
Current works regions for event:

`tw`, `ja` and `indo`

> The time zone of HK is same as TW

## API

### .time
get ms time
```js
daddy('YYYY-MM-DD HH:mm:ss').tw.time
```

### .unix
get unix time
```js
daddy('YYYY-MM-DD HH:mm:ss').tw.unix
```

## Utils

## isToday([unixTimestamp])
Check unix timestamp whether same as Today, this is helpful for vote feature.

## now()
`now` is very useful for testing, you can feel free to hard-code current time.

in Browser, add URL querystring:
```sh
?daddy.now=2017-12-12 19:00
```

in Node:
```sh
$ ndoe entry.js --daddy.now="2017-12-12 19:00"
```