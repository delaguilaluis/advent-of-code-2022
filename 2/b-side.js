const fs = require('fs')
const path = require('path')

const moves = {
  rock: 'A',
  paper: 'B',
  scissors: 'C'
}

const outcomes = {
  lose: 'X',
  draw: 'Y',
  win: 'Z'
}

const points = {
  rock: 1,
  paper: 2,
  scissors: 3,
  lose: 0,
  draw: 3,
  win: 6
}

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const results = data.split('\n').map((m) => m.split(' '))
    .map(([oponent, outcome]) => {
      if (oponent === moves.rock) {
        if (outcome === outcomes.lose) {
          return points.scissors + points.lose
        }

        if (outcome === outcomes.draw) {
          return points.rock + points.draw
        }

        if (outcome === outcomes.win) {
          return points.paper + points.win
        }
      }

      if (oponent === moves.paper) {
        if (outcome === outcomes.lose) {
          return points.rock + points.lose
        }

        if (outcome === outcomes.draw) {
          return points.paper + points.draw
        }

        if (outcome === outcomes.win) {
          return points.scissors + points.win
        }
      }

      if (oponent === moves.scissors) {
        if (outcome === outcomes.lose) {
          return points.paper + points.lose
        }

        if (outcome === outcomes.draw) {
          return points.scissors + points.draw
        }

        if (outcome === outcomes.win) {
          return points.rock + points.win
        }
      }

      return 0
    })

  const sum = results.reduce((acc, val) => {
    if (!val) return acc
    return acc + val
  }, 0)

  console.log(sum)
})
