var express = require("express");
var http = require("http");
var ejs = require('ejs');
var logger = require('morgan');
var bodyParser = require('body-parser');

//加载路由
var routes = require('./routes/index');
// var settings = require('./settings');
var app = express();

// hahahaha
// 設置模板引擎
app.set("view engine", "ejs");
// 設置view目錄
app.set("views", __dirname + "/views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/public/v1', express.static('public'));
app.use(logger());

 
routes(app);

app.get("*", function(request, response) {
	response.writeHead(404, { "Content-Type": "text/plain;charset=utf-8" });
    response.end("404! 页面丢失再三次元");
});


http.createServer(app).listen(1337);