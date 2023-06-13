// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./names");
const sayHi = require("./utils");
const data = require("./alternative-flavor");
require("./mind-grenade");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
