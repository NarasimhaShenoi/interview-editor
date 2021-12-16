function route(pathName, handle, response, reviewData) {
    console.log("Routing the url to ", pathName);

    if(typeof handle[pathName] === "function") handle[pathName](response, reviewData);
    else {
        console.log("No handler found");
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("Error 404 page not found");
        response.end();
    }
}

exports.route = route;