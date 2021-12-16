let server = require('./server');
let router = require('./router');
let handler = require('./handler');

let handle = {};
handle["/"] = handler.home;
handle["/home"] = handler.home;
handle["/review"] = handler.review;
server.startServer(router.route, handle);