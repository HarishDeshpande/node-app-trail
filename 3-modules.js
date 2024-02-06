// Modules - modules are the encapsulated code (only share minimum)
// Built in modules
// 1 - OS
// 2 - PATH
// 3 - FS
// 4 - HTTP

// importing the names and functions from different files
const names = require("./4-name");
const sayhi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grened");
// console.log(data);
// { items: [ 'item1', 'item2' ], singlePerson: { name: 'harish' } }

sayhi(names.harry);
sayhi(names.harish);
sayhi(names.hello);
sayhi("harish");
