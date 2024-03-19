const { createReadStream } = require('fs');

// It should create a read stream for the big file (../content/big.txt) with encoding of "utf8" and a highWaterMark of 200.
const filePath = "../content/big.txt";
const readableStream = createReadStream(filePath, { encoding: 'utf8', highWaterMark: 200 })

// the program should initialize a counter to 0.
let counter = 0;

//  Then it should handle the “data” event for the stream by incrementing the counter and logging the event result to the screen.
readableStream.on('data', (chunk) => {
    counter++;
    console.log('Chunk received: ', chunk);
})

//  Then it should handle the “end” event by reporting the number of chunks received. 
readableStream.on('end', () => {
    console.log('Event Result: ', counter)
})

// Finally, it should handle the stream “error” event by logging the error to the console. 
readableStream.on('error', (error) => {
    console.log('Error logging: ', error)
})
