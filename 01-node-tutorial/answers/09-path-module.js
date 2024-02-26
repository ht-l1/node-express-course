// 09-path-module.js: This should load the path Node module, which is another built-in module. It should then call the path.join function to join up a sequence of alphanumeric strings, and it should print out the result. The result will work one way on Windows, where the directory separator is a backslash, and a different way on other platforms, where the directory separator is a slash.

const path = require('path')

// # Example of a Windows path:
// C:\Users\JohnSmith\node-express-course\01-node-tutorial\answers
const filePath = path.join('/node-express-course', '01-node-tutorial', 'answers')
console.log(filePath)