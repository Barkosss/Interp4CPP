const fs = require('fs');
import func from 'functions.js';

// 4Mb data = 33554432 byte
let memory = new Array(4 * 1024 * 1024 * 8).fill(0);

// ...
let userProgramFile = process.argv[2];

// ...
if (!userProgramFile) {
    throw new Error("file not found");
}

// ...
let codeFromUserProgramFile = fs.readFileSync(userProgramFile, 'utf-8').split("\n");

console.log(codeFromUserProgramFile);