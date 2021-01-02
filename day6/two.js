var fs = require('fs');

var contents = fs.readFileSync('input.in', 'utf8');
const groups = contents.split('\n\n')
    .map(group => group.split('\n'))


let sum = 0;
groups.forEach(group => {
    let groupAnswers = {}
    let groupSize = group.length
    group.forEach(member => {
        memberAnswer = member.split('')
        memberAnswer.forEach(answer => {
            if (groupAnswers[answer]) {
                groupAnswers[answer]++;
            } else {
                groupAnswers[answer] = 1;
            }
        })

    })
    for (const [key, value] of Object.entries(groupAnswers)) {
        if(value === groupSize) {
            sum++
        }
      }
});
console.log(sum)
