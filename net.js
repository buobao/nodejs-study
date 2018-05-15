var net = require('net');

var server = net.createServer(function(socket){
	console.log('someone connects');
	
	server.maxConnections = 3;
	server.getConnections(function(err, count){
		console.log('the count of client is ' + count);
	});
	
	socket.on('data',function(data){
		console.log(data.toString());
	});
	
	var address = server.address();
	var message = 'client, the server address is ' + JSON.stringify(address);
	
	socket.write(message, function(){
		var writeSize = socket.bytesWritten;
		console.log(message + ' has send');
		console.log('the size of message is '+ writeSize);
	});
});

server.listen(18001);

server.on('listening',function(){
	console.log('server is listening');
	
//	var address = server.address();
	
//	console.log('the port of server is ' + address.port);
//	console.log('the address of server is ' + address.address);
//	console.log('the famaily of server is ' + address.family);
});

server.on('close',function(){
	console.log('lest client');
})