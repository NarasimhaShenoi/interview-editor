let http = require('http');
let url = require('url');

function startServer(route, handle) {
    function onRequest(request, response) {
        let reviewData = "";
        console.log("Request received for ", request.url);

        request.setEncoding("utf8");
        request.addListener("data", (chunk) => {
            reviewData +=  chunk;
        });
        request.addListener("end", () => {
            route(request.url, handle, response, reviewData);
        });
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server started listening in port 8888");
}


exports.startServer= startServer;