// const _ = require("lodash");

// const arr = [1, [1, 7, 3], [4, 5, 6], [7, 8, 9, 44]];

// console.log(_.flatten(arr));
// console.log('Hello World');
// console.log('Welcome to the jungle!!!');

const http = require("http");
const { readFile, writeFile } = require("fs").promises;
const util = require("util");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Home Page");
//   } else if (req.url === "/about") {
//     // res.end("About Page");
//     // BLOCKING CODE
//     for (let i = 0; i < 1000; i++) {
//       for (let j = 0; j < 1000; j++) {
//         console.log(i, j);
//       }
//     }
//   }

//   res.end("Error Page");
// });

// server.listen(4500, () => {
//   console.log("Server is running on port 4500");
// });

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./contents/first.txt")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const start = async () => {
  try {
    const res = await readFile("./contents/first.txt", "utf-8");
    const res2 = await writeFile(
      "./contents/new.txt",
      "This is awesome, yyyy",
      "utf-8",
      {
        flag: "a",
      }
    );
    console.log(res);
    console.log(res2);
  } catch (error) {
    console.log(error);
  }
};

start();
