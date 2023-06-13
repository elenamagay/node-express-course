const { readFile, writeFile } = require("fs");
const fs = require("fs");
console.log("start");
const dirPath = "./temporary";
const filePath = "./temporary/fileB.txt";

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

writeFile(filePath, "this is line 1\n", (err, result) => {
  console.log("at point 1");
  if (err) {
    console.log("This error happened: ", err);
  } else {
    writeFile(filePath, "this is line 2\n", { flag: "a" }, (err, result) => {
      console.log("at point 2");
      if (err) {
        console.log("This error happened: ", err);
      } else {
        writeFile(filePath, "this is line 3\n", { flag: "a" }, (err, result) => {
            console.log("at point 3");
            if (err) {
              console.log("This error happened: ", err);
            } else {
              readFile(filePath, "utf8", (err, result) => {
                if (err) {
                  console.log("This error happened: ", err)
                } else {
                  console.log(result);
                  console.log("at point 4");
                }
              });
              
            }
          }
        );
      }
    });
  }
});

console.log("at end");