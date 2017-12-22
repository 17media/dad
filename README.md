<h1 align="center">
  dad
</h1>
<p align="center">
  <a href="https://github.com/17media/dad/releases">
    <img src="https://img.shields.io/github/release/17media/dad.svg?style=flat-square&" />
  </a>
  <a href="https://travis-ci.org/17media/dad" alt="Build Status">
    <img src="https://img.shields.io/travis/17media/dad/master.svg?style=flat-square&" />
  </a>
  <a href="https://codecov.io/gh/17media/dad" alt="Coverage">
    <img src="https://img.shields.io/codecov/c/github/17media/dad/master.svg?style=flat-square&" />
  </a>
  <img src="https://img.shields.io/github/license/17media/dad.svg?style=flat-square&" />
</p>


## Why Is Calling Dad?
`Dad` pronounces like "Date"

## Why Use Dad
- Humans readable code
- Easy for testing
- Zero dependencies
- Works in Node and Browser

## Installation

```sh
$ yarn add https://github.com/17media/dad#latest
```

## Convention
`dad`'s API interface always input `ms` and return `ms`

## Usage

```js
import dad from '@17media/dad'

dad('2017-12-12').tw

// or
import { tw } from '@17media/dad'

tw('2017-12-12')
```

## Valid date format
- `YYYY-MM-DD`
- `YYYY-MM-DD HH`
- `YYYY-MM-DD HH:mm`
- `YYYY-MM-DD HH:mm:ss`

You can omit `HH:mm:ss`, dad will help you auto suffix `00`.
## Regions
Current works regions for event:

`tw`, `ja` and `indo`

> The time zone of HK is same as TW

## API

## Utils

## isToday(ms)
Check ms timestamp whether same as Today, this is helpful for vote feature.

## now()
`now` is very useful for testing, you can feel free to hard-code current time.

In Browser, pass URL querystring:
```sh
?dad.now=2017-12-12 19:00
```

In Node:
```sh
$ ndoe entry.js --dad.now="2017-12-12 19:00"
```

pass `--auto` lets time go on:

In Browser:
```sh
?dad.now=2017-12-12 19:00&auto
```

In Node:
```sh
$ ndoe entry.js --dad.now="2017-12-12 19:00" --auto
```
