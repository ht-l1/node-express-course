// 08-os-module.js: This should load the built-in os Node module and display some interesting information from the resulting object. As for all modules, you load a reference to it with a require statement, in this case

const os = require("os");

console.log("OS Platform: ", os.platform())
console.log("OS total memory: ", os.totalmem())

const currentOS = {
    name: os.type(),
    release: os.release()
}

console.log(currentOS)