const dns = require('dns');

let domain = 'sina.com';

dns.resolve(domain, function(err, address){
	if (err) {
		console.log(err);
		return;
	}
	console.log(address);
})