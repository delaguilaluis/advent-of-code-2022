const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const overlaps = data.split('\n')
    .filter(Boolean)
    .map((pair) => pair.split(','))
    .filter(([firstRange, secondRange]) => {
      const firstValues = firstRange.split('-')
      const firstLow = Number.parseInt(firstValues[0], 10)
      const firstHigh = Number.parseInt(firstValues[1], 10)

      const secondValues = secondRange.split('-')
      const secondLow = Number.parseInt(secondValues[0], 10)
      const secondHigh = Number.parseInt(secondValues[1], 10)

      const firstContainsSecond = firstLow <= secondLow && firstHigh >= secondHigh
      const secondContainsFirst = secondLow <= firstLow && secondHigh >= firstHigh

      return firstContainsSecond || secondContainsFirst
    })

  console.log(overlaps.length)
})
