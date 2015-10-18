/* global describe, it */
'use strict'

const Parser = require('../parse-handles-map')

describe('parseHandlesMap', () => {
  let handlesMap = null

  it('should return an object', () => {
    handlesMap = Parser.parseHandlesMap('./handles.txt')
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

describe('handles.txt', () => {
  let linesList = null

  it('should have a list of Lines', () => {
    linesList = Parser.getLinesFromFile('./handles.txt')
    linesList.should.be.an.Array
  })

  it('should have a space on each line', () => {
    linesList.forEach(line => {
      let splitsBySpace = line.split(' ')
      splitsBySpace.should.have.length(2)
    })
  })

  it('should be free of trailing whitespace', () => {
    linesList.forEach(line => {
      line.should.equal(line.trim())
    })
  })

  it('should be alphabetized', () => {
    linesList.forEach((line, index) => {
      if (index === 0) return // first item has no previous item

      let previousLine = linesList[index - 1]
      line.should.be.greaterThan(previousLine)
    })
  })
})
