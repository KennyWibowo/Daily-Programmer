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

    // One character test
    if(word.length == 1) {
        return "IN ORDER";
    }

    // Test first two characters to determine direction
    var prev = word.charCodeAt(0);
    var curr = word.charCodeAt(1);

    var direction = prev < curr ? "forward" : "backward"; // Note: but what if it's the same letter?

    prev = curr;

    for(var i=2; i<word.length; i++) {
        var curr = word.charCodeAt(i);

        var thisDir = prev < curr ? "forward" : "backward";

        // if it's not in order, oh well
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