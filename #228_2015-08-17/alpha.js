if(process.argv.length < 3){
	console.log('Expected one argument');
} else {
	var word = process.argv[2];
	for(var i=0; i<word.length; i++) {
		console.log(word.charAt(i));
	}
}