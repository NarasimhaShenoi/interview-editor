let fs = require('fs');

// Reading file asyncronously
fs.readFile('input.txt', function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log('Async Data is : ', data.toString());
    }
});

// Reading file syncronously.
let data = fs.readFileSync('input.txt');
console.log('Sync Data is : ', data.toString());
console.log('********** End of the code ************');

