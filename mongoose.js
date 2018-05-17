//mongoose
const mongoose = require('mongoose');

const uri = 'mongodb://localhost/article';

mongoose.connect(uri, function(err){
	if (err) {
		console.log('connect failed');
		console.log(err);	
		return;
	}
	console.log('connect success');
});

const ArticleSchema = new mongoose.Schema({
	title:String,
	author:String,
	content:String,
	publishTime:Date
});

mongoose.model('Article',ArticleSchema);

const Article = mongoose.model('Article');
var art = new Article({
	title:'node.js',
	author:'node',
	content:'node.js is great!',
	publishTime:new Date()
});

art.save(function(err){
	if(err) {
		console.log('save filed');
		console.log(err);	
	} else {
		console.log('save successed');	
	}
});
