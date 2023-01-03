const fs = require('fs')
const path = require('path')

const moves = {
  opponent: {
    rock: 'A',
    paper: 'B',
    scissors: 'C'
  },
  me: {
    rock: 'X',
    paper: 'Y',
    scissors: 'Z'
  }
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
    .map(([opponent, me]) => {
      if (opponent === moves.opponent.rock) {
        if (me === moves.me.rock) {
          return points.rock + points.draw
        }

        if (me === moves.me.paper) {
          return points.paper + points.win
        }

        if (me === moves.me.scissors) {
          return points.scissors + points.lose
        }
      }

      if (opponent === moves.opponent.paper) {
        if (me === moves.me.rock) {
          return points.rock + points.lose
        }

        if (me === moves.me.paper) {
          return points.paper + points.draw
        }

        if (me === moves.me.scissors) {
          return points.scissors + points.win
        }
      }

      if (opponent === moves.opponent.scissors) {
        if (me === moves.me.rock) {
          return points.rock + points.win
        }

        if (me === moves.me.paper) {
          return points.paper + points.lose
        }

        if (me === moves.me.scissors) {
          return points.scissors + points.draw
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
