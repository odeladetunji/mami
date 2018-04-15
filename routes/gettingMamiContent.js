var http = require('http');
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json({type: "application/json"});
var urlencodedParser = bodyParser.urlencoded({ extended: true });
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
	function getHomepageContent(){
        sql = 'select * from mamicontent where mamiadmin = "mamiemail"';
        connection.query(sql, function(error, results, fields){
        	if(error) throw error;
            console.log(results[0]);
            res.send({'message': results[0]});
            return;
        });
	}

	getHomepageContent();
    
});

module.exports = router;