const EventEmitter = require("events");

// create custom even, then you have to extend the class
// if you want to emitt the event and want to listen it, then just create the instance

const customEmitter = new EventEmitter();

// ()=>{} it is callback funciton
// in on method, we pass the string and callback function
customEmitter.on("response", (name, id) => {
  console.log(`data recieved user ${name} and id ${id}`);
});
// here, the above event get completes

// in on method, we pass the string and callback function
customEmitter.on("response", () => {
  console.log(`some other logic`);
});
// here, the above event get completes
// this may contains as many event as we want

// here, we are emiting the event or listening the event
customEmitter.emit("response", "harish", "24");
