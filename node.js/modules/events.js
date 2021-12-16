let events = require('events');
let eventEmitter = new events.EventEmitter();

let ringBell = function () {
    console.log('Ring ring ring');
    eventEmitter.emit('bellRings', 'Welcome');
}

eventEmitter.on('doorOpen', ringBell);
eventEmitter.on('bellRings', function (message) {
    console.log(message);
});

eventEmitter.emit('doorOpen');