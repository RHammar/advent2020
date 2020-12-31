var fs = require('fs');

var contents = fs.readFileSync('input.in', 'utf8');
const seatings = contents.split('\n')
const INITIAL_ROW_RANGE = {
    low: 0,
    low_high: 63,
    high_low: 64,
    high: 127
}

const INITIAL_COLUMN_RANGE = {
    low: 0,
    low_high: 3,
    high_low: 4,
    high: 7
}
let maxSeatId = 0;
seatings.forEach(seat => {
    const row = getRow(seat)
    const column = getColumn(seat)
    const seatId = getSeatId(row, column)
    if (seatId > maxSeatId) {
        maxSeatId = seatId
    }
});

console.log(maxSeatId)


function getRow(seatString) {
    const rowArray = seatString.slice(0, 7).split('')
    const seatId = rowArray.reduce((range, char) => {
        let newRange = range
        if (char === 'F') {
            //lower half
            newRange.high = range.low_high
        } else { // char is B
            // upper half
            newRange.low = range.high_low
        }
        newRange.high_low = Math.ceil(newRange.low + (newRange.high - newRange.low) / 2)
        newRange.low_high = newRange.high_low - 1
        return newRange;
    }, {
        low: INITIAL_ROW_RANGE.low,
        low_high: INITIAL_ROW_RANGE.low_high,
        high_low: INITIAL_ROW_RANGE.high_low,
        high: INITIAL_ROW_RANGE.high,
    });
    return seatId.low
}

function getColumn(seatString) {
    const columnArray = seatString.substr(7, 3).split('')
    const seatId = columnArray.reduce((range, char) => {
        let newRange = range
        if (char === 'L') {
            // lower half
            newRange.high = range.low_high
        } else { // char is R
            // upper half
            newRange.low = range.high_low
        }
        newRange.high_low = Math.ceil(newRange.low + (newRange.high - newRange.low) / 2)
        newRange.low_high = newRange.high_low - 1
        return newRange;
    }, {
        low: INITIAL_COLUMN_RANGE.low,
        low_high: INITIAL_COLUMN_RANGE.low_high,
        high_low: INITIAL_COLUMN_RANGE.high_low,
        high: INITIAL_COLUMN_RANGE.high,
    });
    // console.log(seatId.mid)
    return seatId.low
}

function getSeatId(row, column) {
    return row * 8 + column;
}