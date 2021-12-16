let fs = require('fs');

// readable stream
let readableStream = fs.createReadStream('input.txt');
let data = '';
readableStream.setEncoding('UTF8');
readableStream.on('data', function (chunk) {
    data += chunk;
});
readableStream.on('end', function () {
    console.log(data);
});

//writeable stream
let writeData = 'Hello World';
let writeableStream = fs.createWriteStream('output.txt');
writeableStream.write(writeData, 'UTF8');
writeableStream.end();
writeableStream.on('finish', function () {
    console.log('write completed');
})