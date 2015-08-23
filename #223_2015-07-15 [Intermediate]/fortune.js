if(process.argv.length < 4){
    console.log('Expected two arguments');
} else {
    // Take in parameter
    var word_puzzle = process.argv[2];
    var word_offense = process.argv[3];

    console.log(queryOffense(word_puzzle, word_offense));
}


function queryOffense(word_puzzle, word_offense) {
	var iter_query = 0;

	for(var i =0; i < word_puzzle.length; i++) {
		if(word_puzzle.charAt(i) == word_offense.charAt(iter_query))
			iter_query++;
	}

	if(iter_query== word_offense.length)
		return true;

	return false;
}