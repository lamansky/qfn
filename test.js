'use strict'

const assert = require('assert')
const qfn = require('.')

function add1 (x) {
  return x + 1
}

describe('qfn()', function () {
  it('should create a function', function () {
    assert.strictEqual(typeof qfn(add1), 'function')
  })

  it('should execute `fn` if `test` is true', function () {
    assert.strictEqual(qfn(add1, true)(3), 4)
  })

  it('should return the first argument if `test` is false', function () {
    const s = Symbol('s')
    assert.strictEqual(qfn(add1, false)(s), s)
  })

  it('should execute `fn` if `test` function returns true', function () {
    const add1IfEven = qfn(add1, x => x % 2 === 0)
    assert.strictEqual(add1IfEven(4), 5)
  })

  it('should return the first argument if `test` function returns false', function () {
    const add1IfEven = qfn(add1, x => x % 2 === 0)
    assert.strictEqual(add1IfEven(3), 3)
  })
})
