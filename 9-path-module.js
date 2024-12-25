const path = require("path");
console.log(path.sep);
const filepath = path.join("/testfolder/", "test.txt");
console.log(filepath);
const base = path.basename(filepath);
console.log(base);
const absolute = path.resolve(__dirname, "testfolder", "test.txt");
console.log(absolute);
