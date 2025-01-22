import {Lexer } from "../src/lexer/lexer"
import * as test from "node:jest";

test('Tokenize simple input', () => {
    const lexer = new Lexer('int a = 5;');
    expect(lexer.tokenize()).toEqual([
        { type: 'KEYWORD', value: 'int' },
        { type: 'IDENTIFIER', value: 'a' },
        { type: 'OPERATOR', value: '=' },
        { type: 'NUMBER', value: '5' },
        { type: 'SYMBOL', value: ';' },
    ]);
});