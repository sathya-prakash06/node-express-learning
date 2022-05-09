const { readFileSync, writeFileSync } = require("fs");

console.log("start");

const first = readFileSync("./contents/first.txt", "utf8");
const second = readFileSync("./contents/second.txt", "utf8");

console.log(first);

writeFileSync(
  "./contents/result-sync.txt",
  `Here is the result is = ${first}  ${second}`,
  { flag: "a" }
);


// To append to a file, use the flag "a".