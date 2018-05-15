//tcp
var net = require('net');

var client = new net.Socket();

client.connect(18001, '127.0.0.1', function(){
	console.log('connect the server.');
});

client.on('data', function(data){
	console.log(data.toString());
})