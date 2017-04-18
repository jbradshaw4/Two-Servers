// Here we require/import the HTTP module


var http = require("http");

// Here we define a port to listen to
var PORT = 7000;
var PORT2 = 7500;

// Here we create a generic function to handle requests and responses
function handleRequest(request, response) {
    console.log("server site hit" + request.url);

    // The below statement is triggered (client-side) when the user visits the PORT URL
    response.end("You are great and everyone likes you: " + request.url);
}

function handleRequest1(request, response) {
    console.log("server site hit" + request.url);

    // The below statement is triggered (client-side) when the user visits the PORT URL
    response.end("You are still nice but need work: " + request.url);
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Here we start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

    // The below statement is triggered (server-side) when a user visits the PORT URL
    console.log("You are great and everyone likes you", PORT);


});

var server = http.createServer(handleRequest1);
server.listen(PORT2, function() {
    console.log("You are still nice but need work", PORT2);
});
