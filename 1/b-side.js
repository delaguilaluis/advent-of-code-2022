const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const reducer = (acc, val) => {
    const int = Number.parseInt(val, 10)
    if (!Number.isNaN(int)) {
      acc.push(acc.pop() + int)
      return acc
    }

    acc.push(0)
    return acc
  }

  const aggregation = data.split('\n').reduce(reducer, [0])

  aggregation.sort((a, b) => a < b ? 1 : -1)

  const [top1, top2, top3] = aggregation

  console.log(top1 + top2 + top3)
})
