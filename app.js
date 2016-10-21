var express = require("express");
var http = require("http");
var ejs = require('ejs');
var logger = require('morgan');
var app = express();


// 設置模板引擎
app.set("view engine", "ejs");
// 設置view目錄
app.set("views", __dirname + "/views");

app.use('/static/v1', express.static('assets'));

app.use(logger());

app.get("/", function(request, response) {
    response.render("index.ejs", { message: "I love anime" });   
});
 
app.get("/about", function(request, response) {
    response.end("Welcome to the about page!");
});
 
app.get("/hello/:who", function(request, response) {
    response.end("Hello, " + request.params.who + ".");    
});
 
app.get("/fraser", function(request, response){
	response.end("fraser");
})
 

app.get("*", function(request, response) {
	response.writeHead(404, { "Content-Type": "text/plain;charset=utf-8" });
    response.end("404! 页面丢失再三次元");
});


http.createServer(app).listen(1337);