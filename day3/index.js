const readline = require('readline')

calculateSlope(1, 1)
calculateSlope(3, 1)
calculateSlope(5, 1)
calculateSlope(7, 1)
calculateSlope(1, 2)

async function calculateSlope(rightSteps, downSteps) {
    return new Promise((resolve, reject) => {
        let treesEncountered = 0;
        const lineReader = readline.createInterface({
            input: require('fs').createReadStream('input.in')
        });


        let rightPos = 0;
        // let downPos = 0;
        let includeLine = true;
        let skippedLines = 0;
        lineReader.on('line', function (line) {
            if (skippedLines == (downSteps - 1)) {
                skippedLines = 0;
                includeLine = true
            }
            if (includeLine == false) {
                skippedLines++;
                return;
            }
            includeLine = false;
            const char = getChar(line, rightPos);
            if (char == '#') {
                treesEncountered++;
            }
            rightPos = rightPos + rightSteps;
            // downPos = downPos + downSteps;
        });
        lineReader.on('close', function (line) {
            console.log('treesEncountered: ', treesEncountered)
            resolve(treesEncountered);
        });
    });
    function getChar(line, rightPos) {
        let strLen = line.length;
        while (strLen / rightPos < 1) {
            line = line.repeat(2)
            strLen = line.length;
        }
        // const repeat = Math.round(line.length/(rightStep+1))
        const currentChar = line.charAt(rightPos)
        return currentChar;
    }

}