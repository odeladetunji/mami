var http = require('http');
var express = require('express');
var mysql = require('mysql');
var router = express.Router();


router.post('/', function(req, res){
    console.log(req.body);
	var data1;
    var data2;
    var data3;
    var data4;
    var data5;
    var data6;
    var sql;
	var message = req.body.message;
	console.log(message);
    var connection = mysql.createConnection({
	    host     : '127.0.0.1',
	    user     : 'root',
	    password : '',
	    database : 'mami'
	});

	// connecting to mysql server!
	connection.connect();

	if(message == "landingSection"){
		   function updateLandingSectionColumn(){
		   	    data1 = req.body.firstData;
		   	    data2 = req.body.secondData;
		   	    console.log(data1);
		   	    console.log(data2);
		   	    sql = 'INSERT INTO mamicontent SET mainheading = ?, subheading = ?';
		        connection.query(sql, [data1, data2], function(error, results, fields){
		            if(error) throw error;
		            res.send({'message': 'ok'});
		        });
		   }

		   updateLandingSectionColumn();
		   return;
	}
    
    if(message == "replaceIntroductionVideo"){
          function updateIntroductionVideoColumn(){
		   	    data1 = req.body.firstData;
		   	    data1 = data1.split('.')[0];
		   	    console.log(data1);
		   	    sql = 'INSERT INTO mamicontent SET introductionvideo = ?';
		        connection.query(sql, [data1], function(error, results, fields){
		            if(error) throw error;
		            res.send({'message': 'ok'});
		        });
         }

		 updateIntroductionVideoColumn();
		 return;
    }

    if(message == 'videoForLifeStream'){
         function updateVideoForStreamingColumn(){
		   	    data1 = req.body.firstData;
		   	    data1 = data1.split('.')[0];
		   	    console.log(data1);
		   	    sql = 'INSERT INTO mamicontent SET livestreamvideo = ?';
		        connection.query(sql, [data1], function(error, results, fields){
		            if(error) throw error;
		            res.send({'message': 'ok'});
		        });
         }

		 updateVideoForStreamingColumn();
		 return;
    }

    console.log('Got to this point');
});

module.exports = router;