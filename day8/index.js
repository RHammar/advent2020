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

// part 2

function resetVisited (operations) {
  for (const operation of operations) {
    operation.visited = false
  }
}

function reachesLast (operations) {
  const operationsLength = Object.keys(operations).length
  let accumulator = 0
  let step = 0
  while (true) {
    if (step === operationsLength) {
      console.log(accumulator)
      return true
    }
    const operation = operations[step]
    if (operations[step].visited) {
      return false
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
}

let position = 0
for (const operation of operations) {
  resetVisited(operations)
  if (operation.operation === 'jmp') {
    const testOperations = jmpToNop(operations, position)
    if (reachesLast(testOperations)) {
      break
    }
  }
  if (operation.operation === 'nop') {
    const testOperations = nopToJmp(operations, position)
    if (reachesLast(testOperations)) {
      break
    }
  }
  position++
}
function jmpToNop (initialOperations, position) {
  const newOperations = { ...initialOperations }
  newOperations[position] = {
    operation: 'nop',
    value: newOperations[position].value,
    visited: false
  }
  return newOperations
}

function nopToJmp (initialOperations, position) {
  const newOperations = { ...initialOperations }
  newOperations[position] = {
    operation: 'jmp',
    value: newOperations[position].value,
    visited: false
  }
  return newOperations
}
