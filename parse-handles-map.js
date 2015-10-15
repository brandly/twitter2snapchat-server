const fs = require('fs')

module.exports = parseHandlesMap

function parseHandlesMap (file) {
  return fs.readFileSync(file)
    .toString()
    .split('\n')
    .filter(line => line.length)
    .map(line => line.trim())
    .reduce((map, line) => {
      const splits = line.split(' ')
      map[splits[0]] = splits[1]
      return map
    }, {})
}
