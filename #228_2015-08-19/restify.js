var Client = require('node-rest-client').Client;

var rest_client = new Client();

rest_client.get("http://api.bitcoincharts.com/v1/trades.csv?symbol=rockUSD", function(data, response) {
	console.log("Data: ");

	console.log(parsepayload(String(data)));
})

function parsepayload(payload, next) {
	var data = [];

	while(payload.length != 0) {
		var iter = 0, currchar = payload.charAt(iter);

		while((payload.length != iter.length) && (currchar != '\n') ){
			currchar = payload.charAt(++iter);
		}
			
		data.push(parsepayloadline(payload.slice(0, iter)))

		if( currchar == '\n' )
			payload.slice(0, 1); //get rid of new line

		console.log("Data: " + data);
	}
	
	next(data);
	return data;
}

function parsepayloadline(line, next) {
	var linedata = [];

	while(line.length != 0){
		var iter = 0, currchar = line.charAt(iter);

		while(currchar != ',')
			currchar = line.charAt(++iter);

		linedata.push(line.slice(0, iter))

		if(currchar == ',')
			line.slice(0,1) // get rid of comma
	}

	next(linedata);
	return linedata;
}