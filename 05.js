var path=require("path")
// basename  返回path的最后一部分
console.log(path.basename("aa/bb/cc/1.js")) //1.js
// dirname  返回目录名
console.log(path.dirname("aa/bb/cc/1.js"))  //aa/bb/cc
// format 从对象中解析出路径字符串
console.log(path.format({
    dir:"/aa", //目录
    root:"/bb/", //目录
    base:"1.js", //文件名 =name+ext
    name:"aaaaa", //文件名
    ext:".css" //后缀名
}))  // /aa\1.js
// 注意: 如果dir与root同时存在，则root会被忽略；日过base和name/ext同时存在，则ext/name会被忽略
// parse 返回一个对象
console.log(path.parse("aa/bb/cc/2.js")) 
//{ root: '', dir: 'aa/bb/cc', base: '2.js', ext: '.js', name: '2' }
// jion 将所有的名称利用path.seq连起来，在通过normalize格式化
console.log(path.join("/aa","/bb","./2.js")) //\aa\bb\2.js
// normalize  格式化  规范返回的path
console.log(path.normalize("/aa///////bb//../1.js")) //\aa\1.js  ..表示返回上一级
// extname 获取文件后缀名
console.log(path.extname("/aa/bb/1.css")) //.css  
// resolve  获取文件的绝对路径
console.log(path.resolve("/aa","bb","1/2")) //D:\aa\bb\1\2
// relative  获取相对路径
var begin="D:aa/b"
var end="D:/dd/c"
console.log(path.relative(begin,end)) //..\..\..\..\..\..\..\dd\c
// isabsolute 判断是否为绝对路径
var result="/第三阶段/day01/static/1.txt"
var result1="第三阶段/day01/static/1.txt"
console.log(path.isAbsolute(result,result1)) //true
