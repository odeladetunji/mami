//livestream module;
var http = require('http');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	 // setting mysql variable
	var connection = mysql.createConnection({
	    host     : '127.0.0.1',
	    user     : 'root',
	    password : 'root',
	    database : 'mami'
	});

	// connecting to mysql server!
	connection.connect();
    
    var mottor;
    var arrayOfPictures = [];
    var sql = "select * from firstpage";
	connection.query(sql, function(error, results, fields){
		if(error)throw error;
		arrayOfPictures.push(results.firstImage);
		arrayOfPictures.push(results.secondImage);
		arrayOfPictures.push(results.thirdImage);
		arrayOfPictures.push(results.fouthImage);
		mottor = results.mottor;
		res.send({'message': arrayOfPictures, 'word': mottor});
	})
});

module.exports = router;