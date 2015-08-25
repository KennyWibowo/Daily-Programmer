if(process.argv.length < 3){
    console.log('Expected one argument');
} else {
    // Take in parameter
    var number = process.argv[2];

    console.log(dottify(number));
}

function dottify(number) {
	var abs = 0.739085; // The real dottie number
	var diff = 0.000005; // + or - this number


	while(Math.abs(number - abs) > diff) {
		number = Math.cos(number);
	}

	return number;
}