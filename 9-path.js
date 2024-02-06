const path = require("path");

// it'll give current path
console.log(path.sep);

// it'll give the path of the app.js directory
const absoulute = path.resolve(__dirname);
console.log(absoulute);
