//insert data
var MongoClient = require('mongodb').MongoClient;
var Db = require('mongodb').Db;
var server = require('mongodb').Server;

var studentDb = new Db('student', new server('localhost','27017'));

var student = {
	id:'1001',
	name:'Jack',
	age:33
};

studentDb.open(function(err,db){

	if (err) {
		console.log('open err');
		console.log(err);
		return;	
	}

	db.collection('student', function(err, collection){
		if (err) {
			console.log('collection error');
			studentDb.close();
			console.log(err);
			return;		
		}
		collection.insertOnr(student, function(err,doc){
			studentDb.close();
			if (err) {
				console.log('document error');
				console.log(err);
				return;			
			}
			console.log(doc[0]);
		});
	});
});

