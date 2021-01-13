const fs = require("fs");

const TARGET = 2020;

function readJson(path) {
  return JSON.parse(fs.readFileSync(path));
}

const json = readJson("./input.json");

let found = false;
for (const value of json.input) {
  for (const innerValue of json.input) {
    if (value + innerValue === 2020) {
      console.log(`found: ${value} and ${innerValue}`);
      console.log(value * innerValue);
      found = true;
      break;
    }
    if (found) {
      break;
    }
  }
}
