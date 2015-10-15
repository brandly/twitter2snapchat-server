/* global describe, it */
'use strict'

const request = require('supertest')
const app = require('../app')

describe('The app', () => {
  const agent = request.agent(app)

  it('should get an easy handle', (done) => {
    agent
    .get('/skrillex')
    .expect(200)
    .end(function (err, res) {
      if (err) { return done(err) }

      const body = res.body
      body.snapchat.should.equal('skrillex')
      done()
    })
  })

  it('should get another handle', (done) => {
    agent
    .get('/xskywlkr')
    .expect(200)
    .end(function (err, res) {
      if (err) { return done(err) }

      const body = res.body
      body.snapchat.should.equal('fuckskylar')
      done()
    })
  })

  it('should figure out uppercase handles', (done) => {
    agent
    .get('/CHANCETHERAPPER')
    .expect(200)
    .end(function (err, res) {
      if (err) { return done(err) }

      const body = res.body
      body.snapchat.should.equal('mynamechance')
      done()
    })
  })
})
