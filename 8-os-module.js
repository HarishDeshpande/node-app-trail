const { log } = require("console");
const os = require("os");
console.log(os.version());

// info about the current user
const user = os.userInfo();
console.log(user);
