if(process.argv.length < 3){
    console.log('Expected one argument');
} else {
    // Take in parameter
    var word = process.argv[2];

    console.log(testWord(word));
}

//=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-
//                           Function definitions
//=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-

// Parameter: Takes in any single word
// Returns: Message determining if word is "IN ORDER", "NOT IN ORDER", or "REVERSE ORDER"
function testWord(word) {

    var j=1;

    // Test first two characters to determine direction
    // Skips over characters until characters are different
    for(var i=0; prev==curr && j < word.length; i++, j++) {
        var prev = word.charCodeAt(i);
        var curr = word.charCodeAt(j);
    }

    // If all characters in word are the same!
    if(j == word.length) {
        return "BOTH IN ORDER AND REVERSE ORDER";
    }
    
    // Determine direction to keep up with
    var direction = prev < curr ? "forward" : "backward";

    prev = curr;

    // Iterate through all the characters
    for(var i=2; i<word.length; i++) {
        var curr = word.charCodeAt(i);

        // Determine current direction
        var thisDir = prev < curr ? "forward" : "backward";

        // if it's not in order, oh no!
        if(curr != prev && thisDir != direction) {
            direction = "oh noes!";
            break;
        }

        prev = curr;
    }

    // This line's just for fun
    var message = (direction == "forward" || direction == "oh noes!") ? "IN ORDER" : "REVERSE ORDER"

    if(direction == "oh noes!")
        message = "NOT ".concat(message);

    return message;
}