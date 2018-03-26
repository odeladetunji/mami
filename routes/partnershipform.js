//livestream module;
var http = require('http');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	var fullname = req.body.fullname;
	var telephone = req.body.telephone;
	var frequency = req.body.freqency;
	var country = req.body.country;
	var sex = req.body.sex;
	var email = req.body.email;
	 // setting mysql variable
	var connection = mysql.createConnection({
	    host     : '127.0.0.1',
	    user     : 'root',
	    password : 'root',
	    database : 'mami'
	});

	// connecting to mysql server!
	connection.connect();
    
    var sql = "INSERT INTO partnershiptable set email = ?, sex = ?, fullname = ?, telephone = ?, frequency = ?, country = ?";
	connection.query(sql, [email, sex, fullname, telephone, frequency, country], function(error, results, fields){
		res.send({'message': 'submitted succesfully!'});
	})
});

module.exports = router;