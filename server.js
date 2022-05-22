
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    var XLSX = require('xlsx');
    var workbook = XLSX.readFile('Book3.xlsx');
    var sheet_name_list = workbook.SheetNames;
    var json_data=XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });

    res.end(JSON.stringify(json_data));
    }
);
server.listen(process.env.PORT||3000);
console.log('Server running at http://localhost:8080/');
