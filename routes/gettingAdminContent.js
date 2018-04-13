// livestream module;
var http = require('http');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(req, res){
	  console.log('this module just ran');
      // setting mysql variable
	  var connection = mysql.createConnection({
	       host     : '127.0.0.1',
	       user     : 'root',
	       password : '',
	       database : 'mami'
	  });

	  // connecting to mysql server!
	  connection.connect();

      function gettingMamiContent(){
      	    var sql = 'select * from mamicontent';
      	    connection.query(sql, function(error, results, fields){
      	    	 if(error) throw error;
                 res.send({'message': 'ok'});
      	    });
      }

      gettingMamiContent();
	  
});

module.exports = router;