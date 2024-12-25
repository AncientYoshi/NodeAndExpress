const { log } = require("console");
const os = require("os");
const osPlatform = os.platform();
const osArchi = os.arch();
const osHomeDir = os.homedir();
console.log(osPlatform);
console.log(osArchi);
console.log(osHomeDir);
const osCpu = os.cpus();
osCpu.forEach((cpu) => {
  console.log(cpu.model);
  console.log(cpu.speed);
});
log("hello");
const networkInterface = os.networkInterfaces();
log(networkInterface);
