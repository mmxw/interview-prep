'use strict'

const assert = require('assert').strict
const parse = require('./qp')

assert.deepEqual(parse('m.com/search?a=2'), {a: "2"})
assert.deepEqual(parse('m.com/query?a=1&b=stupid'), {"a": "1", "b": "stupid"})
assert.deepEqual(parse('m.com/query?a=1&b=stupid&b=elephant'), {"a": "1", "b":["stupid", "elephant"]})


assert.deepEqual(parse('m.com/hey?a=1&b=stupid#hashbrown'), {a: "1", b: "stupid"})

assert.deepEqual(parse('m.com/search'), {})
assert.deepEqual(parse('m.com/'), {})

