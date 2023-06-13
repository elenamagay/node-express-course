const path = require("path");

console.log("Path separator: ", path.sep);

const filePath = path.join("/content/", "subfolder", "test.txt");
console.log("File path: ", filePath);

const base = path.basename(filePath);
console.log("Base name: ", base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log("Absolute path: ", absolute);
