var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
    console.log("Hey, nice dress. You're so brave for wearing something like that!");
}

var server = http.createServer(handleRequest);

server.listen(PORT1, function() {
    console.log("Server listening on: https://localhost:%s", PORT1);
}); 

server.listen(PORT2, function() {
    console.log("Server listening on: https://localhost:%s", PORT2);
}); 