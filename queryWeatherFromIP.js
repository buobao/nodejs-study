//weather for IP
var fs = require('fs');
var request = require('request');
var qs = require('querystring');

function readIP(path, callback) {
	fs.readFile(path, function(err, data){
		if (err) {
			callback(err);
		} else {
			try{
				data = JSON.parse(data);
				callback(null, data);
			} catch (error) {
				callback(error);
			}
		}
	});
}

readIP('./ips.txt',function(err, data){
	if (err) throw err;
	//console.log(data);
	for (var i=0;i<data.length;i++) {
		ip2geo(data[i], function(err, body){
			if (err) throw err;
			console.log(body);
		});
	}
	
});

function ip2geo(ip, callback) {
	var url = 'http://www.telize.com/geoip/' + ip;
	request(
	{
		url:url,
		json:true
	},function(err, resp, body){
		callback(err,body);
	});
}

function geo2weather(lat, lon, callback) {
	var params = {
		lat:lat,
		lon:lon,
		APPID:'public key'
	};
	
	var url = 'http://api.openweathermap.org/data/2.5/weather?' + qs.stringify(params);
	
	request({
		url:url,
		json:true
	}, function(err, resp,body){
		callback(err, body);
	});
}

function geo2weathers(geos, callback) {
	var weahters = [];
	var geo;
	var remain = geos.length;
	for (var i =0;i<geos.lenth;i++) {
		geo = geos[i];
		(function(geo){
			geo2weather(geo.latitude, geo.longitude, function(err, weather){
				if (err) {
					callback(err);
				} else {
					weather.geo = geo;
					weathers.push(weather);
					remain--;
				}
				if (remain == 0) {
					callback(null, weathers);
				}
			})
		})(geo);
	}
}

function writeWeahter(weathers, callback) {
	var output = [];
	var weather;
	
	for (var i=0;i<weathers.length;i++) {
		weather = weathers[i];
		output.push({
			ip:weather.geo.ip,
			weather:weather.weather[0].main,
			region:weather.geo.region
		});
	}
	fs.writeFile('./weather.json', JSON.stringify(output, null, ' '),callback);
}




























