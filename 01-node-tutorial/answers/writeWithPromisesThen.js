const { writeFile } = require("fs").promises;

writeFile('temp.text', 'Promises and .then style: First Line\n')
    .then(() => {
        console.log("First Line is in!");
        return writeFile('temp.text', 'Promises and .then style: Second Line\n', {
            flag:
                'a'
        });
    })
    .then(() => {
        console.log("Second Line is in!");
        return writeFile('temp.text', 'Promises and .then style: Third Line\n', { flag: 'a' });
    })
    .then(() => {
        console.log('Third Line is in!');
        console.log('All three lines written succesfully!')
    })
    .catch((error) => {
        console.error('An error occured: ', error);
    })

//     async function reader() {
//     try {
//         const data = await readFile('temp.text', 'utf8');
//         console.log('Contents of the ifle: ');
//         console.log(data);
//     } catch (error) {
//         console.log('Cannot read the lines!', error);
//     }
// }

// async function readWrite() {
//     await writeFile();
//     await reader();
// }

// readWrite();