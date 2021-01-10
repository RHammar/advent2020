const fs = require('fs')

const contents = fs.readFileSync('input.in', 'utf8')
const rows = contents.split('\n')

const bags = new Map()
let numberOfBags = 0

rows.forEach(row => {
  const bagsContaining = 'bags contain'
  const c = row.indexOf(bagsContaining)
  const outerbag = row.slice(0, c).trim()
  const innerRows = row.slice(c + bagsContaining.length).replace(/\.$/, '').trim().split(', ')
  const innerBags = []
  innerRows.forEach(bag => {
    const amount = parseInt(bag)
    const colour = bag.replace(/^\d+\s*/, '').replace(/bags?/, '').trim()
    innerBags.push({
      colour,
      amount
    })
  })
  bags.set(outerbag, innerBags)
})

function canContainShinyGoldBag (colour) {
  if (colour === 'shiny gold') {
    return true
  }
  if (!bags.has(colour)) {
    return false
  }
  const innerbags = bags.get(colour)
  for (const bag of innerbags) {
    if (canContainShinyGoldBag(bag.colour)) {
      return true
    }
  }
  return false
}

[...bags.keys()].forEach(colour => {
  if (!(colour === 'shiny gold')) {
    if (canContainShinyGoldBag(colour)) {
      numberOfBags++
    }
  }
})

console.log(numberOfBags)
