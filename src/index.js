import {Lexer} from "./lexer/lexer.js";
import {Parser} from "./parse/parser.js";
import {Interpreter} from "./interpreter/interpreter.js";
import fs from "fs";

const codeFile = process.argv[2];

if (!fs.existsSync(codeFile)) {
    console.log("ERROR: File is not found");
    return 404;
}

const code = fs.readFileSync(codeFile).toString();

// Лексический анализ
const lexer = new Lexer(code);
const tokens = lexer.tokenize();

// Синтаксический анализ
const parser = new Parser(tokens);
const ast = parser.parse();

const interpreter = new Interpreter(ast);
interpreter.execute();