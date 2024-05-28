const fs = require('fs');
const functions = require('./functions.js');

const codeFile = process.argv[2];

// If the specified file is not found
if (!fs.existsSync(codeFile)) {
    console.log('ERROR: File isn\'t found');
    return 404;
}

let LineNumber = 0, SymbolNumber = 0;
const ArrayAllCodeFile = fs.readFileSync(codeFile, { encoding:'utf-8'}).split('\n');

// Converting commands to binary code
ArrayAllCodeFile.forEach(line => {
    // Removing extra spaces from the string
    line = functions.trim(line);

    // If the string is empty, then skip the iteration
    if (!line) {
        return;
    }

    // Debug
    console.log(line);
    // Continue coding...
});
