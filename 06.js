var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
    var suffix = req.url.substr(req.url.length - 4, req.url.length);
    var realpath = __dirname + '\\' + 'static' + '\\';
    if (suffix === '.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        fs.readFile(realpath  + "red.css",function(err,data){
            res.end(data.toString())
        })
    } else if (suffix === '.png') {
        res.writeHead(200, {'Content-Type': 'image/png'});
        fs.readFile(realpath  + "red.png",function(err,data){
            res.end(data)
        })
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile(realpath  + "red.html",function(err,data){
            res.end(data.toString())
        })
    }
});
server.listen(3000);