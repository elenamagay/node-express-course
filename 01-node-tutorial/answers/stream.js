const { createReadStream } = require("fs");

let counter = 0;

const readStream = createReadStream("../content/big.txt", {
    highWaterMark: 200,
    encoding: "utf8",
});

readStream.on("data", (res) => {
    counter++;
    console.log(res);
});

readStream.on("end", (res) => {
    console.log(`The end. ${counter} chunks received`)
})

readStream.on("error", (err) => {
    console.log("The error occured", err)
})