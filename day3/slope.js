var fs = require('fs');



var contents = fs.readFileSync('input.in', 'utf8');
const treeMap = contents.split('\r\n')
let multiplyArr = []
multiplyArr.push(calculateSlope(treeMap, 1, 1))
multiplyArr.push(calculateSlope(treeMap, 3, 1))
multiplyArr.push(calculateSlope(treeMap, 5, 1))
multiplyArr.push(calculateSlope(treeMap, 7, 1))
multiplyArr.push(calculateSlope(treeMap, 1, 2))

console.log(multiplyArr.reduce((a, b) => a * b, 1))

function calculateSlope(input, rightSteps, downSteps) {
    let treesEncountered = 0;
    let xPos = 0;
    let yPos = 0;
    let line = input[0];
    while (yPos < input.length) {
        let strLen = line.length;
        while (strLen <= xPos) {
            line = line.repeat(2)
            strLen = line.length;
        }
        const char = line[xPos]
        console.log(char);
        if(char === '#') {
            treesEncountered++;
        }
        yPos += downSteps;
        xPos += rightSteps;
        line = input[yPos];
    }
    console.log(treesEncountered)
    return treesEncountered;
}
