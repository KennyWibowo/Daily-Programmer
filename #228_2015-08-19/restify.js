var Client = require('node-rest-client').Client;

var rest_client = new Client();

rest_client.get("http://api.bitcoincharts.com/v1/trades.csv?symbol=rockUSD", function(data, response) {
	console.log("Data: ");

	console.log(parsepayload(String(data)));
})

function parsepayload(payload) {
	var data = [];

	while(payload.length != 0) {
		var iter = 0, currchar = payload.charAt(iter);

		while((payload.length != iter.length) && (currchar != '\n') ){
			currchar = payload.charAt(++iter);
		}
			
		data.push(parsepayloadline(payload.slice(0, iter)))
		payload = replaceRange(payload, 0, iter);

		if( currchar == '\n' )
			payload = replaceRange(payload, 0, 1); //get rid of new line

		console.log("Data length: " + data.length);
	}
	
	console.log(done);
	return data;
}

function parsepayloadline(line) {
	var linedata = [];

	while(line.length != 0){
		var iter = 0, currchar = line.charAt(iter);

		while((currchar != ',') && (iter != line.length))
			currchar = line.charAt(++iter);

		linedata.push(line.slice(0, iter))
		line = replaceRange(line, 0, iter);

		if(currchar == ',')
			line  = replaceRange(line, 0,1) // get rid of comma

		console.log("Linedata :" + linedata);
	}

	return linedata;
}

function replaceRange(s, start, end) {
    return s.substring(0, start) + s.substring(end);
}