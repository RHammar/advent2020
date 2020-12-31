var fs = require('fs');

var contents = fs.readFileSync('input.in', 'utf8');
const passports = contents.split('\n\n')
    .map(passport => passport.split(/\n| /))

let validPassports = 0;
passports.forEach(passport => {
    if (allRequired(passport)) {
        validPassports++
    }
});
console.log(validPassports)

function allRequired(passport) {
    let requiredFields = {
        'byr': false,
        'iyr': false,
        'eyr': false,
        'hgt': false,
        'hcl': false,
        'ecl': false,
        'pid': false
    }
    passport.forEach(line => {
        requiredFields[getField(line)] = true;
    });

    let values = Object.values(requiredFields)
    if (values.filter(value => value === false).length === 0) {
        return true;
    }

}

function getField(line) {
    return line.slice(0, 3)
}