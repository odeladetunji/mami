var http = require('http');
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json({type: "application/json"});
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var router = express.Router();


router.get('/', jsonParser, function(req, res){
	var getPassword = Object.keys(req.query)[0];
    var username = JSON.parse(getPassword).username;
    var password = JSON.parse(getPassword).password;
    var connection = mysql.createConnection({
	    host     : '127.0.0.1',
	    user     : 'root',
	    password : '',
	    database : 'mami'
	});

	// connecting to mysql server!
	connection.connect();
    console.log('Got to this point');
	function getAuthentication(){
		var sql = 'select password from authenticationtable Where username = ?';
		connection.query(sql, [username], function(error, results, fields){
              if (error) {throw error;}

              if (password == results[0].password) {
              	 res.send({'message': 'true'});
              	 return;
              }else{
              	 res.send({'message': 'false'});
              	 return;
              }


		});
	}

	function seeIfUsernameExit(){
		var sql = 'select * from authenticationtable Where username = ?';
		connection.query(sql, [username], function(error, results, fields){
            if(error) throw error;

            if(results.length == 0){
               res.send({'message': 'false'});
            }else{
               console.log('wrong user');
               getAuthentication();
            }
		});
	}

	seeIfUsernameExit();
    
});

module.exports = router;