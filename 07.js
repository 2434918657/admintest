var http=require("http")
var url=require("url")
http.createServer(function(req,res){
    if(req.url=="favicon.ico"){
        return
    }
    var data=url.parse(req.url,true).query
    var severData={
        username:"admin",
        password:"123456"
    }
    if(data.username==severData.username&&data.password==severData.password){
        res.end("success")
    }else{
        res.end("fail")
    }
}).listen(3000)