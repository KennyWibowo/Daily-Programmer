var Client = require('node-rest-client').Client;

var rest_client = new Client();

// sends a GET to the rest API
rest_client.get("http://api.bitcoincharts.com/v1/trades.csv?symbol=rockUSD", 
    function(data, response) {
        // parse the resultant payload
        var parsed_payload = parsePayload(String(data));

        // Finds the latest data line from the server (probably not needed)
        var newest_time = parsed_payload[0][0];
        var newest_time_pos = 0;
        for(var i = 1; i < parsed_payload.length; ++i) {
            if(newest_time < parsed_payload[i][0]) {
                newest_time = parsed_payload[i][0];
                newest_time_pos = i;
            }
        }

        // Output the latest bitcoin-to-USD price
        console.log("One bitcoin currently valued at $" 
            + Math.round(parsed_payload[newest_time_pos][1]*100)/100);
              // Format float to two decimal places
    }
);



//=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-
//                           Function definitions
//=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-

// Parameter: Takes in String formatted "a,b,c,d,..." of n number of lines
// Returns: The data parsed into a double array
function parsePayload(payload) {
    var data = [];

    // Iterate through the payload
    while(payload.length != 0) {
        var iter = 0, currchar = payload.charAt(iter);

        // Position iter after each line
        while((payload.length != iter) && (currchar != '\n') )
            currchar = payload.charAt(++iter);
            
        // slice and parse the line, and add resultant array to data
        data.push(parsePayloadLine(payload.slice(0, iter)));
        payload = removeRange(payload, 0, iter); // remove the extracted line

        if( currchar == '\n' )
            payload = removeRange(payload, 0, 1); //get rid of new line

    }
    
    return data;
}

// Parameter: Takes in format n,n,n,n,...,n
// Returns: The data parsed into an array
function parsePayloadLine(line) {
    var linedata = [];

    // Iterate through line
    while(line.length != 0){
        var iter = 0, currchar = line.charAt(iter);

        // Position iter after each element
        while((currchar != ',') && (iter != line.length))
            currchar = line.charAt(++iter);

        // slice the element and add resultant element to linedata
        linedata.push(line.slice(0, iter));
        line = removeRange(line, 0, iter); // remove the extracted element

        if(currchar == ',')
            line  = removeRange(line, 0,1) // get rid of comma

    }

    return linedata;
}

// Removes a substring of specified range and returns result
function removeRange(str, start, end) {
    return str.substring(0, start) + str.substring(end);
}