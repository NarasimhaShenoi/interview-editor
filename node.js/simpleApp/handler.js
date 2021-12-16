let querystring = require("querystring");

function home(response) {
    let htmlContent = '<html>'+
    '<head>'+
        '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />'+
    '</head>'+
    '<body>'+
        '<form action="/review" method="post">'+
            '<textarea name="text" rows="20" cols="60"></textarea>'+
            '<input type="submit" value="Submit text" />'
        '</form>'+
    '</body>'+
    '</html>';
    console.log("Executing 'home' handler");

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(htmlContent);
    response.end();
}

function review(response, reviewData) {
    console.log("Executing 'review' handler");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Your review is "+ querystring.parse(reviewData).text);
    response.end();
}
exports.home = home;
exports.review = review;