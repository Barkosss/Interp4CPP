module.exports = {
    // Input: The function takes in the string
    // Output: The function returns a string with one space after each word and no spaces at the beginning and end of the string
    trim: function(line) {
        let newLine = "";

        for(let char of line) {
            if (char != ' ') {
                newLine += char;
            } else if (char == ' ' && newLine.slice(-1) != ' ' && newLine.length) {
                newLine += ' ';
            }
        }

        return newLine;
    }
};