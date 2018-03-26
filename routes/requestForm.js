//livestream module;
var http = require('http');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	var fullname = req.body.fullname;
	var email = req.body.email;
	var telephone = req.body.telephone;
	var request = req.body.request;
	 // setting mysql variable
	var connection = mysql.createConnection({
	    host     : '127.0.0.1',
	    user     : 'root',
	    password : 'root',
	    database : 'mami'
	});

	// connecting to mysql server!
	connection.connect();
    
    var sql = "INSERT INTO requestForm set fullname = ?, email = ?, telephone = ?, request = ?";
	connection.query(sql, [fullname, email, telephone, request], function(error, results, fields){
		if (error)throw error;
		res.send({'message': 'submitted succesfully!'});
		console.log('successfull');
	})
});

module.exports = router;