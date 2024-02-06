// npm is a global command
// local dependency installation npm -i <package name>
// global dependency installation npm install -g <package naem>
// package.json is manifest file which stores important files about our project or package

// loadash is a external package which we need to install first
const _ = require("loadash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
