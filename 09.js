// querystring   查询字符串
var queryString=require("querystring")
// 作用:解析和格式化url 查询字符串
console.log(queryString)
/**
 *  unescapeBuffer: [Function: unescapeBuffer],
  unescape: [Function: qsUnescape],
  escape: [Function: qsEscape],
  stringify: [Function: stringify],
  encode: [Function: stringify],
  parse: [Function: parse],
  decode: [Function: parse]
 * 
 *  */
// 1、parse  实现反序列化   字符串反序列化成对象
var data=queryString.parse("username=tom&&password=123")
console.log(data)  //{ username: 'tom', password: '123' }

// 2、stringify 序列化  把对象序列化成字符串
var datatwo=queryString.stringify({"username":"tom","password":"123"})
console.log(datatwo) //username=tom&password=123
// 3、escape  对传入的字符串进行编码
var datathree=queryString.escape("name=2")
console.log(datathree) //name%3D2
// 4、unescape 解码
var datafour=queryString.unescape(datathree)
console.log(datafour) // name=2