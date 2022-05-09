// OS Module

const os = require("os");

// info about release
console.log(os.release());

// info about current user
console.log(os.userInfo());

// method to get system uptime in seconds
console.log(os.uptime());

const currentOS = {
  release: os.release(),
  name: os.type(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
