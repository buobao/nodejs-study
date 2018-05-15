//udp
var dgram = require('dgram');

var message = new Buffer('this server message.');

var socket = dgram.createSocket('udp4',function(msg, rinfo){
	console.log(msg.toString());
	
	socket.send(message, 0, message.length, rinfo.port, rinfo.address, function(err, bytes){
			if (err) {
				console.log(err);
				return;
			}
			console.log('send '+bytes+' message');
	});
});

socket.bind(41234, 'localhost', function(){
	console.log('bind 41234');
});

/*
socket.on('message', function(msg, rinfo){
	console.log(msg.toString());
});
*/

socket.on('listening', function(){
	console.log('listening begin');
});

socket.on('close', function(){
	console.log('server closed');
});

socket.on('error', function(err){
	console.log(err);
});
