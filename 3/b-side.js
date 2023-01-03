const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'input-b-side.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const repeated = data.split('\n')
    .reduce((accum, rucksack, index) => {
      if (index % 3 === 0) {
        accum.push([rucksack])
        return accum
      }

      const group = accum.pop()
      group.push(rucksack)
      accum.push(group)
      return accum
    }, [])
    .filter((group) => group.length > 1)
    .map((cmpts) => {
      const [firstCompartment, secondCompartment, thirdCompartment] = cmpts
      const firstSupplies = Array.from(firstCompartment)
      const secondSupplies = Array.from(secondCompartment)
      const thirdSupplies = Array.from(thirdCompartment)
      return firstSupplies.find((supplyType) => {
        return secondSupplies.includes(supplyType) &&
          thirdSupplies.includes(supplyType)
      })
    })

  const priorities = repeated.map((r) => {
    return r ? r.charCodeAt(0) - 96 : 0
  })
    .map((r) => r < 0 ? r + 58 : r)

  const sum = priorities.reduce((acc, val) => acc + val, 0)

  console.log(sum)
})
