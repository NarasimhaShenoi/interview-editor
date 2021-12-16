let fs = require('fs');

let readableStream = fs.createReadStream('input.txt');
let writeableStream = fs.createWriteStream('out.txt');
readableStream.pipe(writeableStream);