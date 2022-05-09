const { createReadStream } = require("fs");

const stream = createReadStream("./files/new.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

stream.on("data", (res) => {
  console.log(res);
});

stream.on("err", (err) => {
  console.log(err);
});
