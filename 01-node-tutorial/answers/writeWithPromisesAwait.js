// we'll use the fs.promose package
// fs is the built-in "file system" set of functions
// by adding .promises, we access the versions of those built-in functions that return a promise
const { writeFile, readFile } = require("fs").promises;

// Then create an async function called writer that takes 0 arguments, and that writes three lines to a file named temp.txt, by calling the writeFile function with await. The Promise version of writeFile takes the same arguments as the one you used in last week’s exercise 10-fs-sync but will return a Promise instead of a result directly.
// Put the await statements inside a try/catch block!

async function writer() {
    try {
        await writeFile('temp.text', 'firstLine\n');
        await writeFile('temp.text', 'secondLine\n', { flag: 'a' });
        await writeFile('temp.text', 'thirdLine\n', { flag: 'a' });
        console.log('three lines are successfully added!')
    } catch (error) {
        console.log('oh no something happened! Unable to add the lines.', error);
    }
}

// Create another async function called reader that reads the file with await readFile and logs the return value to the screen.

async function reader() {
    try {
        const data = await readFile('temp.text', 'utf8');
        console.log('Contents of the ifle: ');
        console.log(data);
    } catch (error) {
        console.log('Cannot read the lines!', error);
    }
}

// Write a third async function called readWrite. In that function, you call await reader and await writer. 
async function readWrite() {
    await writer();
    await reader();
}

// Finally, write a line at the bottom of the file that calls the readWrite function. 
readWrite();