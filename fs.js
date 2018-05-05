const fs = require('fs');

//delete files
//fs.unlink('./test.txt', (err)=>{
//	if (err) throw err;
//	console.log('successfully deleted test.txt');
//})

//read files synchronized
//fs.unlinkSync('./test2.txt');
//console.log('successfully deleted test2.txt');

//rename files 
//fs.rename('./test3.txt', './test4.txt',(err)=>{
//	if (err) throw err;
//	console.log('renamed complete');
//});

//get file information
//fs.stat('./test4.txt',function(err, stats){
//	if (err) throw err;
//	console.log(`stats:${JSON.stringify(stats)}`);
//});

//open files and read file
/*
fs.open('./numberOptions.js','r+', function(err,fd){
	if (err) {
		return console.error(err);
	}
	console.log('open file sucessfully');
	
	var readBuffer = new Buffer(1024),
	offset = 0,
	len = readBuffer.length,
	filePosition = 0;
	fs.read(fd, readBuffer, offset, len, filePosition, function(err, readByte){
		console.log('read lenght:'+ readByte + 'bytes');
		console.log(readBuffer.slice(0, readByte));  //fill bytes to readBuffer
		console.log(readBuffer.toString('utf8',0, readBuffer.length));
	});
	
	//close files, this operation is not necessary 
	fs.close(fd, function(err,fd){
		if (err) {
			console.log(err);
		}
		console.log('close file successfully');
	});
});
*/

//readFile function
/*
fs.readFile('./numberOptions.js',{
	encoding:'utf8',
	flag:'r'
	}, function(err,data){
		if (err) throw err;
		console.log(data);
	});
*/


//writeFile function
/*
fs.writeFile('./test4.txt','append to file.',{
	encoding:'utf8',
	mode:0666,
	flag:'a'
},function(err){
	if (err) throw err;
	console.log('The "append to file." was appened to file!');
});
*/


































