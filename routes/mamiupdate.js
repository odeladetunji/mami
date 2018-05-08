var http = require('http');
var express = require('express');
var multer = require('multer');
var mysql = require('mysql');
//var fileUpload = require('express-fileupload');

var storage =   multer.diskStorage({
			destination: function (req, file, callback) {
			callback(null, './public/images/');
			},
			filename: function (req, file, callback) {
			// callback(null, file.fieldname + '-' + Date.now());
			callback(null, file.originalname);
			//email = req.body.name;
			}
		});

var upload = multer({ storage : storage,
                      limits: {fileSize: 1000000} }).single('imagefile');
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
    // queryDefault is just used to insert into a particular row
    var queryDefault = 'mamiemail';
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
		   	    sql = 'UPDATE mamicontent SET mainheading = ?, subheading = ? WHERE mamiadmin = ?';
		        connection.query(sql, [data1, data2, queryDefault], function(error, results, fields){
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
		   	    sql = 'UPDATE mamicontent SET introductionvideo = ? WHERE mamiadmin = ?';
		        connection.query(sql, [data1, queryDefault], function(error, results, fields){
		            if(error) throw error;
		            res.send({'message': 'ok'});
		        });
         }
         upload(req, res, function(error){
         	console.log(req.file);
         	console.log('this out to work!');
            if(error)throw error;
         });

		 updateIntroductionVideoColumn();
		 return;
    }

    if(message == 'videoForLifeStream'){
         function updateVideoForStreamingColumn(){
		   	    data1 = req.body.firstData;
		   	    data1 = data1.split('.')[0];
		   	    console.log(data1);
		   	    sql = 'UPDATE mamicontent SET livestreamvideo = ? WHERE mamiadmin = ?';
		        connection.query(sql, [data1, queryDefault], function(error, results, fields){
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
		   	    sql = 'UPDATE mamicontent SET freedomonair = ?, freedomonairdiscription = ?, freedomonairsubdiscription = ? WHERE mamiadmin = ?';
		        connection.query(sql, [data1, data2, data3, queryDefault], function(error, results, fields){
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
		   	    sql = 'UPDATE mamicontent SET lovechoices = ?, lovechoicesdescription = ? WHERE mamiadmin = ?';
		        connection.query(sql, [data1, data2, queryDefault], function(error, results, fields){
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
		   	    sql = 'UPDATE mamicontent SET ministersin = ?, ministersindescription = ? WHERE mamiadmin = ?';
		        connection.query(sql, [data1, data2, queryDefault], function(error, results, fields){
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
		   	    sql = 'UPDATE mamicontent SET freedomministry = ?, freedomministrydiscription = ? WHERE mamiadmin = ?';
		        connection.query(sql, [data1, data2, queryDefault], function(error, results, fields){
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
		   	    sql = 'UPDATE mamicontent SET publishingarm = ?, publishingarmdiscription = ? WHERE mamiadmin = ?';
		        connection.query(sql, [data1, data2, queryDefault], function(error, results, fields){
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
		   	    sql = 'UPDATE mamicontent SET reviveministry = ?, reviveministrydiscription = ? WHERE mamiadmin = ?';
		        connection.query(sql, [data1, data2, queryDefault], function(error, results, fields){
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
		   	    sql = 'UPDATE mamicontent SET mamipartners = ?, mamipartnersubheading = ?, mamipartnerdiscription = ? WHERE mamiadmin = ?';
		        connection.query(sql, [data1, data2, data3, queryDefault], function(error, results, fields){
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
		   	    sql = 'UPDATE mamicontent SET firstchannel = ?, secondchannel = ? WHERE mamiadmin = ?';
		        connection.query(sql, [data1, data2, queryDefault], function(error, results, fields){
		            if(error) throw error;
		            res.send({'message': 'ok'});
		        });
          }

          updateOnlinePayment();
          return;
    }

    if(message == 'visionarea'){
    	  console.log('visionarea');
          function updateVisionSegment(){
          	    data1 = req.body.firstData;
          	    data1 = data1.split('.')[0];
		   	    data2 = req.body.secondData;
		   	    console.log(data1);
		   	    console.log(data2);
		   	    sql = 'UPDATE mamicontent SET visionbackgroundpicture = ?, visionstatement = ? WHERE mamiadmin = ?';
		        connection.query(sql, [data1, data2, queryDefault], function(error, results, fields){
		            if(error) throw error;
		            res.send({'message': 'ok'});
		            console.log('successfull');
		        });
          }

          updateVisionSegment();
          return;
    }

    if(message == 'messageAdvertSection'){
    	  console.log('messageAdvertSection');
          function updateVisionSegment(){
          	    data1 = req.body.firstData.split('.')[0];
          	    data2 = req.body.secondData.split('.')[0];
          	    data3 = req.body.thirdData.split('.')[0];
          	    data4 = req.body.fouthData.split('.')[0]; 
          	    console.log(data2);
                console.log(data1 + ' ' + data2 + ' ' + data3 + ' ' + data4);
		   	    data2 = req.body.secondData;
		   	    sql = 'UPDATE mamicontent SET upcomingevent1 = ?, upcomingevent2 = ?, upcomingevent3 = ?, upcomingevent4 = ? WHERE mamiadmin = ?';
		        connection.query(sql, [data1, data2, data3, data4, queryDefault], function(error, results, fields){
		            if(error) throw error;
		            res.send({'message': 'ok'});
		            console.log('successfull');
		        });
          }

          updateVisionSegment();
          return;
    }
    
    console.log('Got to this point');
});

module.exports = router;