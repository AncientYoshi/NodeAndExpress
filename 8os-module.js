const names = require("./3-names");
const sayHi = require("./4-utils");
const data = require("./5-alternative-syntax");
console.log(data);
require("./6-mind-generate");
sayHi(names.James);
sayHi(names.peter);
sayHi("Lanny");

const os = require("os");
//info about current user
user = os.userInfo();
console.log(user);
console.log(`The system uptime is ${os.uptime()}`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalmemory: os.totalmem(),
  freememory: os.freemem(),
};
console.log(currentOs);
