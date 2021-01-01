var fs = require('fs');

var contents = fs.readFileSync('input.in', 'utf8');
const groups = contents.split('\n\n')
    .map(group => group.split('\n'))


let sum = 0;
groups.forEach(group => {
    let groupAnswers = []
    // let uniq
    group.forEach(member => {
        memberAnswer = member.split('')
        groupAnswers = groupAnswers.concat(memberAnswer);

    })
    const uniq = [...new Set(groupAnswers)];

    sum += uniq.length
});
console.log(sum)