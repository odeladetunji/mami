var http = require('http');
var express = require('express');
var mysql = require('mysql');
var router = express.Router();


router.get('/', function(req, res){
	
    var connection = mysql.createConnection({
	    host     : '127.0.0.1',
	    user     : 'root',
	    password : '',
	    database : 'mami'
	});

	// connecting to mysql server!
	connection.connect();
    console.log('Got to this point');
});

module.exports = router;