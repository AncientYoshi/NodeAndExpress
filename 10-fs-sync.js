const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./testfolder/test.txt", "utf8");
const second = readFileSync("./testfolder/test2.txt", "utf8");
writeFileSync(
  "./testfolder/resultSync.txt",
  `Here is the test result : ${first} and ${second}`,
  { flag: "a" }
);
