// GLOBALS - NO WINDOW !!!

// __dirname - path to current directory
// __filename - fime name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

let counter = 0;

const handleInterval = setInterval(() => {
  console.log(process.env.MY_VAR);
  counter++;

  if (counter === 3) {
    clearInterval(handleInterval);
  }
}, 1000);

console.log("dirname: " ,__dirname);