const { readFile } = require("fs");

// promise in javascript is used to handle the asynchronus operation
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log(data);
      }
    });
  });
};

const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");
    console.log(first, second);
  } catch (error) {
    console.error();
  }
};

start();
