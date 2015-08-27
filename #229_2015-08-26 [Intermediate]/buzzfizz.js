if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}

var fs = require('fs'), filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, filedata) {
    if (err) throw err;

    parseFileData(filedata, buzzfizz);
});

function parseFileData(filedata, next) {
    var data = [],
        dataorder = {},
        pos = 0;

    for(var i=0; i< filedata.length; i++) {
        var currchar = filedata.charAt(i);
        if(currchar == "\n") { 
            var line = filedata.substring(pos, i);
            dataorder = parseFileDataLine(line, dataorder);
            data.push(line);
            pos = i+1;
        } else if (currchar == "\r") {
            var line = filedata.substring(pos, i);
            dataorder = parseFileDataLine(line, dataorder);
            data.push(line);
            pos = i+2;
            i++;
        }
    }

    next(data, dataorder);
}

function buzzfizz(data, dataorder) {
    console.log(data);
    console.log(dataorder); 
}

function parseFileDataLine(line, dataorder) {
    for(var j = 0; j < line.length; j++)
        if(!dataorder[line.charAt(j)])
            dataorder[line.charAt(j)] = Object.keys(dataorder).length + 1;

    return dataorder;
}