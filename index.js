const http = require('http');    //����ԭ��ģ��
const arrFn = require('./numberOptions');
const arr = [1,2,3,4];

let noRepeatArr = arrFn.noRepeat(arr);
let num = arrFn.add(arr);

http.createServer(function(request, response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('Hello World!\n' + noRepeatArr + '\n' + num + '\n');
}).listen(3000);
console.log("Welcome to buobao's server");

//const underscore = require('./underscore');  //��������ģ��

