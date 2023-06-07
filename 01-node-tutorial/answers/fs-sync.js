const { readFileSync, writeFileSync } = require("fs");
const fs = require("fs");
console.log("start");
const dirPath = "./temporary";
const filePath = "./temporary/fileA.txt";
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
const third = readFileSync("./content/third.txt", "utf8");

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath)
};

writeFileSync(
  filePath,
  `Here is the result:\n ${first},\n ${second},\n ${third}\n`,
  { flag: "a" }
);

const result = readFileSync(filePath, "utf8");
console.log(result);