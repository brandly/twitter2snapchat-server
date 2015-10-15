require('dotenv').load()
const app = require('./app')

const server = app.listen(process.env.PORT, () => {
  const host = server.address().address
  const port = server.address().port

  console.log('twitter2snapchat app listening at http://%s:%s', host, port)
})
