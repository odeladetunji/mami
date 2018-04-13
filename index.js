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

/*var bodyParser = require('body-parser');
// setting mysql variable */
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'lovedaises'
});

// connecting to mysql server
connection.connect();



// listening on port 9000...
/*app.listen(9000, function () {
 console.log('Our app is still working!')
})*/

server.listen(5000, function(){
  console.log("Mami is now running live on Port:   5000");
});


/*bs.reload('*.css');
bs.reload('*.ejs');
bs.reload('*.js');
bs.init({
	server: 'server',
	port: 5000
});*/

module.export = app;