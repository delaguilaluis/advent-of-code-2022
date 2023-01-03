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

      const overlap =
        // At limits
        firstLow === secondHigh ||
        secondLow === firstHigh ||
        // 58-64, 59-65
        (firstLow <= secondLow && firstHigh >= secondLow) ||
        // 19-47, 18-99
        (secondLow <= firstLow && secondHigh >= firstLow)

      return overlap
    })

  console.log(overlaps.length)
})
