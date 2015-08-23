if(process.argv.length < 4){
    console.log('Expected two arguments');
} else {
    // Take in parameter
    var word_puzzle = process.argv[2];
    var word_offense = process.argv[3];

    console.log(queryOffense(word_puzzle, word_offense));
}


function queryOffense(word_puzzle, word_offense) {
    var chars_offense = getUniqueChars(word_offense);
    var str_builder = [];

    for(var i=0; i < word_puzzle.length; i++) {
        str_builder.push(null);
    }

    for(var i=0; i < chars_offense.length; i++)
        for(var j=0; j < word_puzzle.length; j++)
            if(word_puzzle.charAt(j) == chars_offense[i])
                str_builder[j] = word_puzzle.charAt(j);

    console.log(arrToString(str_builder));
}   

function getUniqueChars(word) {
    var chars = [];
    for(var i=0 ; i<word.length; i++) 
        if(!chars.indexOf(word.charAt(i)))
            chars.push(word.charAt(i));

    return chars;
}

function testContains(word, query) {
    var iter_query = 0;

    for(var i =0; i < word.length; i++)
        if(word.charAt(i) == query.charAt(iter_query))
            iter_query++;
    
    if(iter_query== query.length)
        return true;

    return false;
}

function arrToString(arr) {
    var str = "";
    for(var i=0; i< arr.length;i++)
        if(arr[i])
            str += arr[i];

    return str;
}

function arrayIncludes(arr, item){
    for(var i =0; i< arr.length; i++)
        if(arr[i] == item)
            return true;
    return false;
}