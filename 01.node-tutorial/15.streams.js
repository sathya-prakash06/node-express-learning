// Streams

// - Writable
// - Readable
// - Duplex
// - Transform

// creating big files
const { writeFileSync } = require("fs");

for (let i = 0; i < 10000; i++) {
  writeFileSync("./files/new.txt", `hello world ${i}\n`, { flag: "a" });
}
