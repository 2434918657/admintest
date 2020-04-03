// 引入url模块
var url=require("url")
// url模块的作用：url字符串是一个结构化的字符串
// 注意：url模块提供了两套api处理url,node.js遗留特有的api

/**url模块下的方法
 *  Url: [Function: Url],
  parse: [Function: urlParse],
  resolve: [Function: urlResolve],
  resolveObject: [Function: urlResolveObject],
  format: [Function: urlFormat],
  URL: [Function: URL],
  URLSearchParams: [Function: URLSearchParams],
  domainToASCII: [Function: domainToASCII],
  domainToUnicode: [Function: domainToUnicode],
  pathToFileURL: [Function: pathToFileURL],
  fileURLToPath: [Function: fileURLToPath]
 * 
 *  */
// 1、parse  解析url  返回一个url属性对象
var data1=url.parse("http://localhost:3000/red?username=tom&password=123",true).query //加true  query返回一个对象
console.log(data1)  // { username: 'tom', password: '123' }
/**
 *  protocol: 'http:',  协议
  slashes: true, 
  auth: null,   用户名和密码
  host: 'localhost:3000', 主机名
  port: '3000',   端口号
  hostname: 'localhost', 主机名不加端口号
  hash: null,      哈希值
  search: '?username=tom&password=123',  查询字符串
  query: 'username=tom&password=123',   请求字符串  针对get
  pathname: '/red',   路径名称
  path: '/red?username=tom&password=123',  带查询的路径名
  href: 'http://localhost:3000/red?username=tom&password=123'   原字符串本身
 *  */ 
// 2、resolve  解析浏览器超链接  转换成基本的url
// 参数2个:from(解析式对应的url) to(要解析的超链接)
var data=url.resolve("aa/bb/cc","dd") 
console.log(data) //  aa/bb/dd
var datatwo=url.resolve("http://localhost:3000/aa/","ffff") // http://localhost:3000/aa/ffff
var datathree=url.resolve("http://localhost:3000/aa","ffff") //http://localhost:3000/ffff
console.log(datatwo,datathree)
// 注意：resolve中第一个参数中的路径最后有没有\,若有，接将第二个参数拼接到该地址上，若没有，则将第二个参数替换第一个路径中的最后位置

// 3、format  返回一个格式化的url字符串
var objurl={
    protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:3000',
  port: '3000',
  hostname: 'localhost',
  hash: null,
  search: '?username=tom&password=123',
  query: { username: 'tom', password: '123' },
  pathname: '/red',
  path: '/red?username=tom&password=123',
  href: 'http://localhost:3000/red?username=tom&password=123'
}
var mat=url.format(objurl)
console.log(mat) //http://localhost:3000/red?username=tom&password=123