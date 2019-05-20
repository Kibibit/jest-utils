<p align="center">
  <a href="https://github.com/kibibit/jest-utils" target="blank"><img src="http://kibibit.io/kibibit-assets/kibibit-avatar.png" width="150" ></a>
  <h2 align="center">
    @kibibit/jest-utils
  </h2>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@kibibit/jest-utils"><img src="https://img.shields.io/npm/v/@kibibit/jest-utils/latest.svg?style=for-the-badge&logo=npm&color=CB3837"></a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@kibibit/jest-utils"><img src="https://img.shields.io/npm/v/@kibibit/jest-utils/next.svg?style=flat-square&logo=npm&color=CB3837"></a>
  <a href="https://travis-ci.org/kibibit/jest-utils">
  <img src="https://travis-ci.org/kibibit/jest-utils.svg?branch=master">
  </a>
  <a href="https://salt.bountysource.com/teams/kibibit"><img src="https://img.shields.io/endpoint.svg?url=https://monthly-salt.now.sh/kibibit&style=flat-square"></a>
</p>
<p align="center">
  supporting functions for jest tests
</p>
<hr>

***WIP***

## Installation
Install the library by running
```bash
npm install --save-dev @kibibit/jest-utils
```

In your **Jest configuration**, add `@kibibit/jest-utils`'s setup file
```javascript
module.exports = {
  // ...
  setupFiles: [ 'node_modules/@kibibit/jest-utils/lib/jest-utils.js' ],
  // ...
};
```

## Usage
```javascript
const funcToTest = (a: number, b: number) => a + b;

describe("Test Suite: funcToTest", () => {
  assertTruthy('this ran with assertTruthy', funcToTest, 5, 3);

  test("another test", () => {
    // ...
  });
});
```

## Defined functions
Currently, `assertTruthy` is defined as an example for [stackoverflow](https://stackoverflow.com/questions/56174883/how-to-add-global-commands-to-jest-like-describe-and-it)
