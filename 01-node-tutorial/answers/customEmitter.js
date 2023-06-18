const EventEmitter = require('events');

const customEmitter = new EventEmitter();

let count = 0;

const handleInterval = setInterval(()=> {
    customEmitter.emit("timer","hi there");
    count++;

    if (count === 3) {
        clearInterval(handleInterval)
    }
}, 2000)

customEmitter.on("timer", (msg) => console.log(msg));

const waitForEvent = () => {
    return new Promise((resolve) => {
        customEmitter.on("happens", (msg) => resolve(msg))
    })
}

const doWait = async () => {
    const msg = await waitForEvent()
    console.log("We got an event! Here it is: ", msg)
}

doWait()
customEmitter.emit("happens", "Hello World!")