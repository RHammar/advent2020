const fs = require('fs')

const contents = fs.readFileSync('input.in', 'utf8')
const operations = contents.split('\n')
  .map(row => {
    const operation = row.slice(0, 3)
    const value = parseInt(row.substring(4))
    return {
      operation,
      value,
      visited: false
    }
  })

let accumulator = 0
let step = 0
while (true) {
  const operation = operations[step]
  console.log(operation)
  if (operations[step].visited) {
    break
  }
  operations[step].visited = true
  switch (operation.operation) {
    case 'nop':
      step++
      break
    case 'acc':
      accumulator += operation.value
      step++
      break
    case 'jmp':
      step += operation.value
      break

    default:
      break
  }
}

console.log(accumulator)
