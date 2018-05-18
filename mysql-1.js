//mysql-1
const mysql = require('mysql');

const connection = mysql.createConnection({
	host:'localhost',
	port:'3306',
	user:'root',
	password:'320683buobao',
	database:'buobao'
});

connection.connect(function(err){
	if (err) {
		console.log('connect error');
		return;
	}
	console.log('connected as id '+connection.threadId);
});

const table = 'user';

connection.query('DELETE from '+table+' WHERE id=\'1001\'', function(err, result){
	if (err) {
		console.log(err);
		return;
	}
	console.log('delete result:'+result);
});

const user = ['zhangfei',38,'sg13455678970'];

connection.query('INSERT INTO '+table+'(id,name,age,telephone)VALUES(\'1001\',?,?,?)',user, function(err,result){

	if (err) {
		console.log(err);
		return;
	}
	console.log('INSERT ID:'+result);
});

connection.query('SELECT * FROM ' + table, function(err, rows){
	if (err) {
		console.log(err);		
	} else {
		console.log(rows);
	}
});

connection.end(function(err){
	if (err) {
		console.log(err);
	}
	connection.destroy();
});







































































