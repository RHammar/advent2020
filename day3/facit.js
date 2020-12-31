var fs = require('fs');



var input = fs.readFileSync('input.in', 'utf8');


 const two = (input, xCoordinates, yCoordinates) => {
    let numberOfTrees = [0, 0, 0, 0, 0];
  
    for (let i = 0; i < xCoordinates.length; i++) {
      let totalTrees = one(input, xCoordinates[i], yCoordinates[i]);
  
      numberOfTrees[i] = totalTrees;
    }
  
    return numberOfTrees.reduce((a, b) => a * b, 1);
  }

const one = (input, xUnits, yUnits) => {
    let treeMap = input
      .split('\r\n')
      .map(x => x.split(''));
  
    let numberOfTrees = 0
    let x = 0;
    let y = 0;
    
    while (y < treeMap.length) {
      const adjustedX = x % treeMap[0].length;
      const coordinate = treeMap[y][adjustedX];
  
      if (coordinate === `#`) { 
        numberOfTrees++;
      }
  
      x += xUnits;
      y += yUnits;
    }
  
    console.log(numberOfTrees)
    return numberOfTrees;
  }
//   input = `..##.......
// #...#...#..
// .#....#..#.
// ..#.#...#.#
// .#...##..#.
// ..#.##.....
// .#.#.#....#
// .#........#
// #.##...#...
// #...##....#
// .#..#...#.#`;
  // console.log(one(input, 3,1));
  console.log(two(input, [1, 3, 5, 7, 1], [1, 1, 1, 1, 2]));
