// Create one or several emitters. Then use the emitter .on function to handle the events you will emit, logging the parameters to the screen. Then use the emitter .emit function to emit several events, with one or several parameters, and make sure that the events are logged by your event handlers.

const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on('welcome', (name) => {
    console.log(`Welcome ${name} to my world!`)
})
emitter.on('math', (n1, n2) => {
    console.log(`sum of ${n1} and ${n2} is ${n1 + n2}`);
})

emitter.emit('welcome', 'Opera')
emitter.emit('math', 3, 2)