const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const parseHandlesMap = require('./parse-handles-map')

const app = express()
module.exports = app

app.use(helmet())
app.use(bodyParser.json())

const handleMap = parseHandlesMap('./handles.txt')

app.get(/[A-Za-z0-9_]{1,15}/i, function (req, res) {
  const twitterHandle = req.path.slice(1)

  if (twitterHandle in handleMap) {
    res.status(200).send({ snapchat: handleMap[twitterHandle] })
  } else {
    res.status(404).send({ error: 'Not Found' })
  }
})
