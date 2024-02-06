const { readFile } = require("fs");

console.log("started the first task");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(result);
    console.log("Completed First Task");
  }
});
console.log("Started Next Task");
