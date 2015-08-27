if(process.argv.length < 3){
    console.log('Expected one argument');
} else {
    // Take in parameter
    var number = process.argv[2];

    console.log("Result: " + dottify(number));
}

function dottify(number) {
	var abs = 0.739085; // The real dottie number
	var diff = 0.0000001; // + or - this number

	var iter = 0;

	while(Math.abs(number - abs) > diff) {
		number = Math.cos(number);
		iter ++;
	}

	console.log("Iterated " + iter + " times");
	return number;
}