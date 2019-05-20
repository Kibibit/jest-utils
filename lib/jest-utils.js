"use strict";

global.assertTruthy = (message, func, ...args) => {
  return global.it(message, () => {
    expect(func(...args)).toBeTruthy();
  });
}

