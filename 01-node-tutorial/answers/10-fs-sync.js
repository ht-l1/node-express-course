// 10-fs-sync.js: This should load writeFileSync and readFileSync functions from the fs module. 

// Then you will use writeFileSync to write 3 lines to a file, ./temporary/fileA.txt, using the "append" flag for each line after the first one. Then use readFileSync to read the file, and log the contents to the console. 

// Be sure you create the file in the temporary directory. That will ensure that it isn’t pushed to Github when you submit your answers (because that file has been added to the .gitignore file for you already which tells git not to look at those files).

const { readFileSync, writeFileSync, appendFileSync } = require('fs')
const path = require('path')
const filePath = path.join(__dirname, "temporary", "fileA.txt");

// wreite 3 lines to a file
writeFileSync(
    filePath, "Hello 2024! \n"
)

appendFileSync(
    filePath, "Hello 2025! \n"
)

appendFileSync(
    filePath, "And hello 2026! \n"
)

const fileContent = readFileSync(filePath, "utf-8")
console.log(fileContent)