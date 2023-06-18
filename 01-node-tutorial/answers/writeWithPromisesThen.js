const { writeFile, readFile } = require("fs").promises;
const newFile = "./temporary/newFile.txt";

writeFile(newFile, "Line 1\n")
.then(() => {
    return writeFile(newFile, "Line 2\n", { flag: "a" })
})
.then(() => {
    return writeFile(newFile, "Line 3\n", { flag: "a" })
})
.then(() => {
    return readFile(newFile, "utf8", (err, data) => {
        if (err) {
            console.log("An error occured: ", err)
        } else {
            return data;
        }
    })
})
.then((result) => {
    return console.log(result);
})
.catch((err) => {
    console.log("An error occured: ", err);
})
