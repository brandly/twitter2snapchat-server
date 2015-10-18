const fs = require('fs')

module.exports = {
  parseHandlesMap: parseHandlesMap,
  getLinesFromFile: getLinesFromFile
}

function parseHandlesMap (file) {
  return getLinesFromFile(file)
    .reduce((map, line) => {
      const splits = line.split(' ')
      map[splits[0]] = splits[1]
      return map
    }, {})
}

function getLinesFromFile (file) {
  return fs.readFileSync(file)
    .toString()
    .split('\n')
    .filter(line => line.length)
}
