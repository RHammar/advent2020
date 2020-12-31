const readline = require('readline')

let valid = 0;
const lineReader = readline.createInterface({
    input: require('fs').createReadStream('input.txt')
});

lineReader.on('line', function (line) {
    const minOccurence = line.substring(
        0,
        line.lastIndexOf("-")
    );
    const maxOccurence = line.substring(
        line.lastIndexOf("-") + 1,
        line.lastIndexOf(" ") - 3,
    );
    const char = line.substring(
        line.lastIndexOf(":") - 1,
        line.lastIndexOf(":")
    );
    const password = line.substring(
        line.lastIndexOf(":") + 2
    );
    const charCount = (password.match(new RegExp(char, 'g')) || []).length
    if (minOccurence <= charCount) {
        if (charCount <= maxOccurence) {
            valid++;
        }
    }
    // console.log('minOccurence:', minOccurence);
    // console.log('maxOccurence:', maxOccurence);
    // console.log('char:', char);
    // console.log('password:', password);
    // console.log('charCount:', charCount);
    // console.log('valid: ', valid)
});

lineReader.on('close', function (line) {
    console.log('valid: ', valid)
});

