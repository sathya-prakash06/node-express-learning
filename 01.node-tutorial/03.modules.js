// Modules
// Modules are a way to organize code and reuse code
// CommonJS, every file is module (by default)

const names = require("./04.names.js");
const sayHi = require("./05.utils.js");
require('./07.mind-granade')

console.log(names);
sayHi("Sathya");
sayHi(names.name1);
sayHi(names.name2);
