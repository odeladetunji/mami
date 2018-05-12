var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var fs = require('fs');
var formidable = require('formidable');
var router = express.Router();

router.post('/', function (req, res) {

        var connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'mami'
        });

        // connecting to mysql server!
        connection.connect();

        function updateVideoForStreamingColumn() {
            var form = new formidable.IncomingForm();
            var oldName;
            var newName;
            var oldPath;
            var newPath;

            // form.encoding = 'utf-8';
            form.type = true;
            
            console.log('uploading got Here');
            form.parse(req, function (err, fields, files) {
                if (err) {
                    throw err;
                }

                // form.uploadDir = './public/images';
                console.log(files);
                oldName = files.videoFile.path.split('\\')[2]; // returns the filenname
                newName = files.videoFile.name; // somehting is wrong!!
                oldPath = './public/testFolder/' + oldName;
                newPath = './public/tempImages/' + newName;
            });

            form.uploadDir = './public/testFolder';

            form.on('end', function () {
                console.log('finished uploading files');
                fs.rename(oldPath, newPath, function (error) {
                    if (error) {
                        throw error;
                    }

                    console.log('finished renaming file');
                });
            });

            return;
            console.log('videoForLifeStream was entered!');
            data1 = req.body.firstData;
            data1 = data1.split('.')[0];
            console.log(data1);
            sql = 'UPDATE mamicontent SET livestreamvideo = ? WHERE mamiadmin = ?';
            connection.query(sql, [data1, queryDefault], function (error, results, fields) {
                if (error) throw error;
                res.send({ 'message': 'ok' });
            });
        }

        updateVideoForStreamingColumn();
        return;
});

module.exports = router;
