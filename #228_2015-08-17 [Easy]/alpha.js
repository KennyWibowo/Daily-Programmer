if(process.argv.length < 3){
	console.log('Expected one argument');
} else {
	var word = process.argv[2];
	
	var prev = word.charCodeAt(0);
	var curr = word.charCodeAt(1);

	var direction = prev < curr ? "forward" : "backward";

	prev = curr;

	for(var i=2; i<word.length; i++) {
		var curr = word.charCodeAt(i);

		var thisDir = prev < curr ? "forward" : "backward";

		if(thisDir != direction) {
			direction = "oh noes!";
			break;
		}
	}

	var message = (direction == "forward" || direction == "oh noes!") ? "IN ORDER" : "REVERSE ORDER"

	if(direction == "oh noes!") {
		message = "NOT ".concat(message);
	}

	console.log(message);
}