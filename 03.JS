// 引入fs模块
var fs=require("fs")
// 读文件  readFile(url,options,callback)
fs.readFile("./static/1.txt",function(err,data){
    // console.log(err,data.toString()) //null bacdefghigkmlnopqrstuvwxyz
    // err  报错的信息  data:文本内容 （类型Buffer,需转换成string）
})
// 写文件 writeFile(url,添加的内容,callback)
fs.writeFile("./static/2.txt","你是被添加的内容",function(err){
    // console.log(err)//null
})
fs.writeFile("./static/3.txt","你是被添加的文件中的内容",function(err){
    // 若文件不存在则创建文件
    console.log(err)//null
})