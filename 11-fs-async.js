const { readFile, writeFile } = require("fs");
readFile("./testfolder/test.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;
  readFile("./testfolder/test2.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = result;
    writeFile(
      "./testfolder/result-async.txt",
      `Here is the result : ${first} and ${second}`,
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(result);
      }
    );
  });
});
