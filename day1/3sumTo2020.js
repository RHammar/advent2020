const fs = require("fs");

const TARGET = 2020;

function readJson(path) {
  return JSON.parse(fs.readFileSync(path));
}

const json = readJson("./input.json");

let found = false;
for (const value of json.input) {
  for (const innerValue of json.input) {
    for (const innerValue2 of json.input) {
      if (value + innerValue + innerValue2 === 2020) {
        console.log(`found: ${value} and ${innerValue} and ${innerValue2}`);
        console.log(value * innerValue * innerValue2);
        found = true;
        break;
      }
      if (found) {
        break;
      }
    }
    if (found) {
      break;
    }
  }
}
