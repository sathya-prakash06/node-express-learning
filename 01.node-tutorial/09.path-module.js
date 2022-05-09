//  PATH Module

const path = require("path");

console.log(path.sep);

const filePath = path.join("/contents", "test.txt");
console.log(filePath);
// \contents\test.txt

const baseName = path.basename(filePath);
console.log(baseName);
// test.txt

const absolutePath = path.resolve(__dirname, "contents", "test.txt");
console.log(absolutePath);
// C:\Users\user\OneDrive\Desktop\Konverge Training\06.Node Express\node-express-learning\01.node-tutorial\contents\test.txt
