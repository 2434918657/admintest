// 引入http模块
var http=require("http")
// 创建服务器
var sever=http.createServer(function(req,res){
    // 设置响应头
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    // req.url 获取地址栏路径
    if(req.url=="/red"){ //如果路径是/red
        res.write("red") //写入red   res.write 写入
    }else{
        res.write("我是默认的") //否则写入"我是默认的"
    }
    // 结束响应
    res.end()
})
//监听端口
sever.listen(3000)
