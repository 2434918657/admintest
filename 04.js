var http=require("http") //引入http模块
var fs=require("fs") //引入fs模块
// 创建服务费
http.createServer(function(req,res){ 
    // 判断获取的路径
    if(req.url=="/red"){
        // 读取文件
        fs.readFile("./static/red.html",function(err,data){ 
            // 结束响应，返回文件内容
            res.end(data.toString())
        })
    }else if(req.url=="/green"){
        fs.readFile("./static/green.html",function(err,data){
            res.end(data.toString())
        })
    }else{
        // 结束响应返回404
        res.end("404")
    }
}).listen(3000,function(){ //监听端口
    console.log("服务器已经挂起") 
})