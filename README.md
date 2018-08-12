<p align="center">
  <img width="128" src="./assets/logo.png" />
</p>

<p align="center">
  <a href="https://github.com/17media/dad/releases">
    <img src="https://flat.badgen.net/github/release/17media/dad" />
  </a>
  <a href="https://circleci.com/gh/17media/dad" alt="Build Status">
    <img src="https://flat.badgen.net/circleci/github/17media/dad/master" />
  </a>
  <a href="https://codecov.io/gh/17media/dad" alt="Coverage">
    <img src="https://flat.badgen.net/codecov/c/github/17media/dad" />
  </a>
  <img src="https://flat.badgen.net/github/license/17media/dad" />
</p>


## Why Is Calling Dad?
`Dad` pronounces like "Date"

## Why Use Dad
- Humans readable code
- Easy for testing
- Works in Node and Browser

## Installation

```sh
$ yarn add github:17media/dad\#latest
```

## Convention
`dad`'s API interface always input `seconds` and return `seconds`

## Usage

```js
import dad from '@17media/dad'

dad('2017-12-12').tw

// or
import { tw } from '@17media/dad'

tw('2017-12-12')
// 1513036800

tw(1514736000)
// {
//   year: 2018,
//   month: 0,
//   date: 1,
//   hours: 0,
//   minutes: 0,
//   seconds: 0,
//   day: 1
// }

tw(1514736000).format('YYYY/MM/DD hh:mm:ss') //  2018/01/01 00:00:00
```

## Valid date format
- `YYYY-MM-DD`
- `YYYY-MM-DD HH`
- `YYYY-MM-DD HH:mm`
- `YYYY-MM-DD HH:mm:ss`

You can omit `HH:mm:ss`, dad will help you auto suffix `00`.
## Regions
Current works regions for event:

`tw`, `hk` and `ja`

## API

## Utils

## isToday(seconds)
Check seconds timestamp whether same as Today, this is helpful for vote feature.

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
