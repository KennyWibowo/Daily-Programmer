if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

var fs = require('fs'), filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, filedata) {
  if (err) throw err;


});

function parseFileData(filedata, next) {
    var data = [];
    var pos = 0;
    for(var i=0; i< filedata.length; i++) {
        var currchar = filedata.charAt(i);
        if(currchar == "\n") {
            data.push(filedata.substring(pos, i));
            pos = i+1;
        }
    }
}
