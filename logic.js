//--------------------------//
//   CREATING TWO SERVERS   //
//--------------------------//

//Install the http package so your server 
//has the cpability of reading http requests.
var http = require("http");

//Listening to where the info might be coming from
var PORTONE = 7000;
var PORTTWO = 7500;

//Put in our request and our response 
function handleRequestOne(request, response) {
    response.end("Hey, nice dress. You're so brave for wearing something like that!");
}

function handleRequestTwo(request, response) {
    response.end("You smell.");
}




var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTONE, function() {
    console.log("Server listening on server 1: https://localhost:%s", PORT1);
}); 

serverTwo.listen(PORTTWO, function() {
    console.log("Server listening on server 2: https://localhost:%s", PORT2);
}); 


//If you go to browser and type in 127.0.0


//--------------------------//
// CREATING ONLY ONE SERVER //
//--------------------------//

//this is basically allows our server to have the capability of handling http requests. any portal 80 and above. the number will matter eventually. 80 is the standard for ports
var http = require("http");
//Listening to where the info might be coming from
var PORT = 8080;

//Put in our request and our response 
function handleRequest(request, response) {
    //The string here is what is triggered client-side when they visit the port url
    response.end("It works!" + request)
}

var server = http.createServer(handleRequest);
//Now empower it with funcitonality. Let it do stuff: listen on this port, and do another function
server.listen(PORT, function() {
//the %s is a placeholder and it was filled in with the port number
console.log("server listening on: https://localhost:%s" + PORT);
});

//Node try loading the page in Node
//Now go to a browser and look at the url of yourlocalhost on the port
//localhost:8080 HIT ENTER
//go to Node, shut down Node by doing ctrl C on CLI or Bash
//go back to the browser, and the webpage "cannot be reached"
//Turn 

//The website will stay the same until the SERVER IS UPDATED

//--------------------------//
// URL PARSING - INCOMPLETE //
//--------------------------//

//this is basically allows our server to have the capability of handling http requests. any portal 80 and above. the number will matter eventually. 80 is the standard for ports
var http = require("http");
//Listening 
var PORT = 8080;

//Put in our request and our response 
function handleRequest(req, res) {
    var path = req.url;
    //The string here is what is triggered client-side when they visit the port url
    res.end("It works!" + req)
}

var server = http.createServer(handleRequest);
//Now empower it with funcitonality. Let it do stuff: listen on this port, and do another function
server.listen(PORT, function() {
//the %s is a placeholder and it was filled in with the port number
console.log("server listening on: https://localhost:%s" + PORT);
});
