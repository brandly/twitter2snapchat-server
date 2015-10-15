/* global describe, it */
'use strict'

const parseHandlesMap = require('../parse-handles-map')

describe('parseHandlesMap', () => {
  let handlesMap = null

  it('should return an object', () => {
    handlesMap = parseHandlesMap('./handles.txt')
    handlesMap.should.be.an.Object
  })

  it('should be full of lowercase strings', () => {
    for (let twitter in handlesMap) {
      let snapchat = handlesMap[twitter]
      twitter.should.equal(twitter.toLowerCase())
      snapchat.should.equal(snapchat.toLowerCase())
    }
  })
})

// TODO: enforce alphabetical order
// TODO: enforce no trailing whitespace
