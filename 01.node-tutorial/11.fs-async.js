const { readFile, writeFile } = require("fs");

console.log("start1");

readFile("./contents/first.txt", "utf8", (err, res) => {
  if (err) {
    throw err;
  }
  const first = res;

  readFile("./contents/second.txt", "utf8", (err, res) => {
    if (err) {
      throw err;
    }
    const second = res;

    writeFile(
      "./contents/result0async.txt",
      `Here is the result : ${first} , ${second}`,
      (err, res) => {
        if (!err) {
          console.log("File written successfully");
        }
      }
    );
  });
});

console.log("start2");
