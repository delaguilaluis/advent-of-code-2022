const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const repeated = data.split('\n')
    .map((rucksack) => {
      const size = rucksack.length / 2
      const firstCompartment = Array.from(rucksack.substring(0, size))
      const secondCompartment = Array.from(rucksack.substring(size))
      return { firstCompartment, secondCompartment }
    }).map(({ firstCompartment, secondCompartment }) => {
      return firstCompartment.find((supplyType) =>
        secondCompartment.includes(supplyType)
      )
    })

  const priorities = repeated.map((r) => {
    return r ? r.charCodeAt(0) - 96 : 0
  })
    .map((r) => r < 0 ? r + 58 : r)

  const sum = priorities.reduce((acc, val) => acc + val, 0)

  console.log(sum)
});
