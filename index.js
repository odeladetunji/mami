// mami server start here!
var http = require('http');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var cookieParser = require('cookie-parser');
var cors = require('cors');
var $ = require("jquery");
var multer = require('multer');
var fs = require('fs');
var landing = require('./routes/homepage');
var mongo = require('mongodb');
// bodyparser middleware!!!
var homepage = require('./routes/homepage');
var livestream = require('./routes/livestream');
var homepageFromLiveStream = require('./routes/homepage');
var admin = require('./routes/admin');
var adminAuthentication = require('./routes/adminAuthentication');
var authenticateAdmin = require('./routes/authenticateAdmin');
var checkIfAdmin = require('./routes/checkIfAdmin');
var bs = require("browser-sync").create();
var gettingAdminContent = require('./routes/gettingAdminContent');
var mamiupdate = require('./routes/mamiupdate');
var gettingMamiContent = require('./routes/gettingMamiContent');

var dir = path.join(__dirname, 'public');

var mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};

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

/*
modules to handle navigations within the site
*/
//var get_Peoplepage = require('./routes/getPeoplepage');
//var get_Grouppage = require('./routes/getGrouppage');


app.use('*', cors());
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json({type: 'application/json'}));
app.use(cookieParser());
//app.options(cors());
app.set('view engine', 'ejs');
app.use('/', homepage);
app.use('/livestream', livestream);
app.use('/homepage', homepageFromLiveStream);
app.use('/admin', admin);
app.use('/adminAuthentication', adminAuthentication);
app.use('/authenticateAdmin', authenticateAdmin);
app.use('/checkIfAdmin', checkIfAdmin);
app.use('/gettingAdminContent', gettingAdminContent);
app.use('/mamiupdate', mamiupdate);
app.use('/gettingMamiContent', gettingMamiContent);
//app.use('/searchAlgorithm', searchAlgorithm);

// setting mysql variable */


var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'lovedaises'
});

// connecting to mysql server
connection.connect();

app.get('*', function (req, res) {
    var file = path.join(dir, req.path.replace(/\/$/, '/index.html'));
    if (file.indexOf(dir + path.sep) !== 0) {
        return res.status(403).end('Forbidden');
    }
    var type = mime[path.extname(file).slice(1)] || 'text/plain';
    var s = fs.createReadStream(file);
    s.on('open', function () {
        res.set('Content-Type', type);
        s.pipe(res);
    });
    s.on('error', function () {
        res.set('Content-Type', 'text/plain');
        res.status(404).end('Not found');
    });
});

app.post('/mamiupdatetest', function(req, res){
      upload(req, res, function(){
        console.log(req.files);
        console.log(req.body)
        res.send(req.body);
      });
});

// listening on port 9000...
/*app.listen(9000, function () {
 console.log('Our app is still working!')
})*/


server.listen(5000, function(){
  console.log("Mami is now running live on Port:   5000");
});

module.export = app;