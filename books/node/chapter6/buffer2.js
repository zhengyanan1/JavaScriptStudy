var fs = require('fs');
var rs = fs.createReadStream('buffer1.js', { highWaterMark: 10});
var data = '';
rs.on("data", function (chunk){ 
    data += chunk; 
    console.log("---", chunk)
});
rs.on("end", function() { 
    console.log(data);
});