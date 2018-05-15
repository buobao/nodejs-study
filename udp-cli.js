//udp-client
var dgram = require('dgram');

//create buffer
var message = new Buffer('this client string.');

var socket = dgram.createSocket('udp4');
socket.send(message, 0, message.length, 41234, 'localhost', function(err, bytes){
	if (err) {
		console.log(err);
		return;	
	}
	console.log('client send '+ bytes + ' message');
});

socket.on('message', function(msg, rinfo){
	console.log(msg.toString());	
});


