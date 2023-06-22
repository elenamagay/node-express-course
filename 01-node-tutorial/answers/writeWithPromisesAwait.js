const { writeFile, readFile } = require("fs").promises;
const newFile = "./temporary/newFile.txt";

const writer = async () => {
    try {
        await writeFile(newFile, "This is line 1\n");
        await writeFile(newFile, "This is line 2\n", { flag: "a" });
        await writeFile(newFile, "This is line 3\n", { flag: "a" });
    } catch (error) {
        console.log("An error occured: ", error);
    }
};

const reader = async () => {
    try {
        result = await readFile(newFile, "utf8");
        console.log(result);
    } catch (error) {
        console.log("An error occured: ", error);
    }
};

const readWrite = async () => {
    try {
        await writer();
        await reader();
    } catch (error) {
        console.log("An error occured: ", error);
    }
};

readWrite();