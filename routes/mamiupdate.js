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

    if(message == 'freedomonair'){
         function updateFreedomOnAir(){
         	    data1 = req.body.firstData;
		   	    data2 = req.body.secondData;
		   	    data3 = req.body.thirdData;
		   	    console.log(data1);
		   	    sql = 'INSERT INTO mamicontent SET freedomonair = ?, freedomonairdiscription = ?, freedomonairsubdiscription = ?';
		        connection.query(sql, [data1, data2, data3], function(error, results, fields){
		            if(error) throw error;
		            res.send({'message': 'ok'});
		        });
         }

         updateFreedomOnAir();
         return;
    }

    if(message == 'LoveChoices'){
          function updateLoveChoices(){
          	    data1 = req.body.firstData;
		   	    data2 = req.body.secondData;
		   	    sql = 'INSERT INTO mamicontent SET lovechoices = ?, lovechoicesdescription = ?';
		        connection.query(sql, [data1, data2], function(error, results, fields){
		            if(error) throw error;
		            res.send({'message': 'ok'});
		        });
          }

          updateLoveChoices();
          return;
    }

     if(message == 'ministersin'){
          function updateMinistersnIn(){
          	    data1 = req.body.firstData;
		   	    data2 = req.body.secondData;
		   	    sql = 'INSERT INTO mamicontent SET ministersin = ?, ministersindescription = ?';
		        connection.query(sql, [data1, data2], function(error, results, fields){
		            if(error) throw error;
		            res.send({'message': 'ok'});
		        });
          }

          updateMinistersnIn();
          return;
    }

    if(message == 'freedomministry'){
          function updateFreedomMinistry(){
          	    data1 = req.body.firstData;
		   	    data2 = req.body.secondData;
		   	    sql = 'INSERT INTO mamicontent SET freedomministry = ?, freedomministrydiscription = ?';
		        connection.query(sql, [data1, data2], function(error, results, fields){
		            if(error) throw error;
		            res.send({'message': 'ok'});
		        });
          }

          updateFreedomMinistry();
          return;
    }
    
    if(message == 'publishingarm'){
          function updatePublishingArm(){
          	    data1 = req.body.firstData;
		   	    data2 = req.body.secondData;
		   	    sql = 'INSERT INTO mamicontent SET publishingarm = ?, publishingarmdiscription = ?';
		        connection.query(sql, [data1, data2], function(error, results, fields){
		            if(error) throw error;
		            res.send({'message': 'ok'});
		        });
          }

          updatePublishingArm();
          return;
    }

    if(message == 'reviveministry'){
          function updateReviveMinistry(){
          	    data1 = req.body.firstData;
		   	    data2 = req.body.secondData;
		   	    sql = 'INSERT INTO mamicontent SET reviveministry = ?, reviveministrydiscription = ?';
		        connection.query(sql, [data1, data2], function(error, results, fields){
		            if(error) throw error;
		            res.send({'message': 'ok'});
		        });
          }

          updateReviveMinistry();
          return;
    }

    if(message == 'mamipartners'){
          function updatePartnership(){
          	    data1 = req.body.firstData;
		   	    data2 = req.body.secondData;
		   	    data3 = req.body.thirdData;
		   	    sql = 'INSERT INTO mamicontent SET mamipartners = ?, mamipartnersubheading = ?, mamipartnerdiscription = ?';
		        connection.query(sql, [data1, data2, data3], function(error, results, fields){
		            if(error) throw error;
		            res.send({'message': 'ok'});
		        });
          }

          updatePartnership();
          return;
    }

    if(message == 'onlinepayment'){
          function updateOnlinePayment(){
          	    data1 = req.body.firstData;
		   	    data2 = req.body.secondData;
		   	    data3 = req.body.thirdData;
		   	    data4 = req.body.fouthData;
		   	    data5 = req.body.fifthData;
		   	    sql = 'INSERT INTO mamicontent SET mamipartners = ?, mamipartnersubheading = ?, mamipartnerdiscription = ?';
		        connection.query(sql, [data1, data2, data3, data4, data5], function(error, results, fields){
		            if(error) throw error;
		            res.send({'message': 'ok'});
		        });
          }

          updateOnlinePayment();
          return;
    }
    
    console.log('Got to this point');
});

module.exports = router;