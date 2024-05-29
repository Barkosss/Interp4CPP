const fs = require('fs');
const functions = require('./functions.js');

// Database
const { Database, LocalStorage, JSONFormatter } = require('moonlifedb');
const db = new Database(new LocalStorage({ path: './' }), { useTabulation: new JSONFormatter({ whitespace: "\t" }) });

const includeFiles = [];
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
    if (line.startsWith('#')) {
        if (line.indexOf('"') != -1) {
            includeFiles.push(line.slice(line.indexOf('\"') + 1, line.slice(line.indexOf('\"') + 1, line.length).indexOf('"')));
            console.log(`Include file: ${line.slice(line.indexOf('\"') + 1, line.slice(line.indexOf('\"') + 1, line.length).indexOf('\"'))}`)
            console.log(`File: ${line.slice(line.indexOf('\"'))} |  ${line.indexOf('\"')}`);
            console.log(includeFiles);
        } else {
            console.log(`Include module: ${line.slice(line.indexOf('<') + 1, line.indexOf('>'))}`)
        }
    }

    console.log(line);
    // Continue coding...
});
