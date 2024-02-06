// for every two seconds, the event loop will invoke "namaskar"
var i = 0;
setInterval(() => {
  console.log("namaskar");
  console.log(i);
  i = i + 1;
}, 2000);
console.log("I'll run first");
// process will run until Ctrl+C or unexpected error occurs
