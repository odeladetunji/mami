var http = require('http');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
       var connection = mysql.createConnection({
           host     : '127.0.0.1',
           user     : 'root',
           password : '',
           database : 'mami'
       });

       mongo.connect(url, function(err, db){
          if(err)throw err;
            console.log('was successfull....');
            var cursor = db.collection('Daises').find({$text: {$search: req.body.searchQuery}}, {score: {$meta: "textScore"}}).sort({score:{$meta:"textScore"}}).count();
            // dont forget that the cursor returns a promise!
            // you will have to handle it with the then() function call which accept a CallBacks
            // console.log(cursor);
            cursor.then(function(result){
                if(result == 0){
                    res.send({'message': 'No Result Found!'});
                    console.log("No result found .......");
                    return;
                }else{
                    console.log(hiddenFieldForm);
                    console.log('thats hidden field form above');
                    if(hiddenFieldForm != ""){
                        res.send({'message': hiddenFieldForm, 'RenderSearchPage': 'RenderSearchPageUsingFirstServer!'});
                        return; 
                    }
                    resultLength = result;
                    gettingFoundResults();
                }
            }, function(error){
                 console.log(error);
                 console.log("Error Function Ran  ...........");
            });
       });
       
       // setting this two variables global
       var neededEmail;
       var returnedDaisesOutSide;
       function gettingFoundResults(){
             mongo.connect(url, function(err, db){
                if(err)throw err;
                  console.log('gettingFoundResults was invoked!');
                  var cursor = db.collection('Daises').find({$text: {$search: searchQuery}}, {score: {$meta: "textScore"}}).sort({score:{$meta:"textScore"}});
                     console.log(cursor.length + ' should show length');
                     console.log('getting cursor length');  
                  var loopingCounter = 0;
                  var onlineResult = [];
                  var offlineResult = [];
                  var counter = 0;
                  var onlineCounter = 0;
                  var offlineCounter = 0;
                  var foundResult;

                  function gettingOnlineStatusSQL(returnedDaises){
                        console.log(neededEmail);
                        console.log(neededEmail);
                        console.log('Looks Like Email is not returning');
                        console.log(returnedDaisesOutSide);
                        console.log('Execution got here!!!!!!!!!!!!!!!');
                        var sql = 'Select OnlineStatus From onlineofflinestatustable WHERE Email = ?';
                        /// connection pooling here!
                        pool.getConnection(function(err, connectionpool){
                             connectionpool.query(sql, [neededEmail], function (error, results, fields) {
                                // releasing connection before proceeding!
                                connectionpool.release();
                                if (error) throw error;
                                console.log(results);
                                console.log(results);
                                console.log("why are they returned Empty!");
                                console.log(neededEmail);
                                console.log(returnedDaisesOutSide);
                                returnedDaisesOutSide.OnlineStatus = results[0].OnlineStatus;
                                console.log(returnedDaisesOutSide.OnlineStatus);
                                console.log('checking for returnedDaises.Email here');
                                SortObjectAccordingToOnlineStatus(returnedDaisesOutSide);
                                // Don't use the connection here, it has been returned to the pool.
                             });
                         });

                       /* connection.query(sql, [neededEmail], function(error, results, fields){
                            if(error)throw error;
                            console.log(results);
                            console.log(results);
                            console.log("why are they returned Empty!");
                            console.log(neededEmail);
                            console.log(returnedDaisesOutSide);
                            returnedDaisesOutSide.OnlineStatus = results[0].OnlineStatus;
                            console.log(returnedDaisesOutSide.OnlineStatus);
                            console.log('checking for returnedDaises.Email here');
                            SortObjectAccordingToOnlineStatus(returnedDaisesOutSide);
                          });*/
                  }

                  function SortObjectAccordingToOnlineStatus(returnedDaises){
                                      for(x in returnedDaises){
                                            counter++;
                                            if(returnedDaises[x] == 'online'){
                                                onlineCounter++;
                                                foundResult = {};
                                                var onlineSecondCounter = 0;
                                                for(u in returnedDaises){
                                                      onlineSecondCounter++;
                                                      if(u == 'FirstName'){
                                                         foundResult.FirstName = returnedDaises[u];
                                                      }
                                                      if(u == 'LastName'){
                                                         foundResult.LastName = returnedDaises[u];
                                                      }
                                                      if(u == 'OfflineStatus'){
                                                         foundResult.OfflineStatus = returnedDaises[u];
                                                      }
                                                      if(u == 'OnlineStatus'){
                                                         foundResult.OnlineStatus = returnedDaises[u];
                                                      }
                                                      if(u == 'PostedPicture'){
                                                         foundResult.PostedPicture = returnedDaises[u];
                                                      }
                                                      if(u == 'PostedVideo'){
                                                         foundResult.PostedVideo = returnedDaises[u];
                                                      }
                                                      if(u == 'DaisesType'){
                                                         foundResult.DaisesType = returnedDaises[u];
                                                      }
                                                      if(u == 'Daises'){
                                                         foundResult.Daises = returnedDaises[u];
                                                      }
                                                      if(u == 'RateAvg1'){
                                                         foundResult.RateAvg1 = returnedDaises[u];
                                                      }
                                                      if(u == 'RateAvg2'){
                                                         foundResult.RateAvg2 = returnedDaises[u];
                                                      }
                                                      if(u == 'PersonalPicture'){
                                                         foundResult.PersonalPicture = returnedDaises[u];
                                                      }
                                                      if(u == 'DaisesIdentity'){
                                                         foundResult.DaisesIdentity = returnedDaises[u];
                                                      }

                                                      if(onlineSecondCounter == Object.keys(returnedDaises).length){
                                                         onlineResult.push(foundResult);
                                                         console.log(onlineResult);
                                                         console.log('final result of onlineResult');
                                                      }
                                                }
                                            }

                                            if(returnedDaises[x] == 'offline'){
                                                 offlineCounter++;
                                                 foundResult = {};
                                                 var offlineSecondCounter = 0;
                                                  for(k in returnedDaises){
                                                      offlineSecondCounter++;
                                                      if(k == 'FirstName'){
                                                         foundResult.FirstName = returnedDaises[k];
                                                      }
                                                      if(k == 'LastName'){
                                                         foundResult.LastName = returnedDaises[k];
                                                      }
                                                      if(k == 'OfflineStatus'){
                                                         foundResult.OfflineStatus = returnedDaises[k];
                                                      }
                                                      if(k == 'OnlineStatus'){
                                                         foundResult.OnlineStatus = returnedDaises[k];
                                                      }
                                                      if(k == 'PostedPicture'){
                                                         foundResult.PostedPicture = returnedDaises[k];
                                                      }
                                                      if(k == 'PostedVideo'){
                                                         foundResult.PostedVideo = returnedDaises[k];
                                                      }
                                                      if(k == 'DaisesType'){
                                                         foundResult.DaisesType = returnedDaises[k];
                                                      }
                                                      if(k == 'Daises'){
                                                         foundResult.Daises = returnedDaises[k];
                                                      }
                                                      if(k == 'RateAvg1'){
                                                         foundResult.RateAvg1 = returnedDaises[k];
                                                      }
                                                      if(k == 'RateAvg2'){
                                                         foundResult.RateAvg2 = returnedDaises[k];
                                                      }
                                                      if(k == 'PersonalPicture'){
                                                         foundResult.PersonalPicture = returnedDaises[k];
                                                      }
                                                      if(k == 'DaisesIdentity'){
                                                         foundResult.DaisesIdentity = returnedDaises[k];
                                                      }

                                                      if(offlineSecondCounter == Object.keys(returnedDaises).length){
                                                         offlineResult.push(foundResult);
                                                         console.log('final Result of Offline Counter starts here');
                                                         console.log(offlineResult);

                                                         console.log('final Result of Offline Counter ends here');
                                                      }
                                                  }
                                            }
                                      }
                  }
                               
                    var counterForDoc = 0;
                    cursor.forEach(function(doc, err){
                        counterForDoc++
                        if(err) throw err;
                           var returnedDaises = doc.Daises;
                           returnedDaisesOutSide = returnedDaises;
                           neededEmail = returnedDaises.Email;
                           gettingOnlineStatusSQL(returnedDaises);
                           if(counterForDoc == resultLength){
                                    setTimeout(function(){
                                           if(onlineCounter >= 1 && offlineCounter >= 1){
                                                   console.log('this is from firstSection');
                                                   res.send({'online': onlineResult, 'offline': offlineResult});
                                                   return;
                                           }
                                           if(onlineCounter >= 1 && offlineCounter == 0){
                                                   console.log('this is from secondSection');
                                                   res.send({'online': onlineResult, 'offline': '', 'amount': resultLength});
                                                   console.log(onlineResult);
                                                   console.log(" Why the Empty Array");
                                                   return;
                                           }
                                           if(onlineCounter == 0 && offlineCounter >= 1){
                                                   console.log('this is from thirdsection');
                                                   res.send({'online': '', 'offline': offlineResult, 'amount': resultLength});
                                                   return;
                                           }

                                           console.log(foundResult + '  whats returning undefined');
                                           console.log('that is found result');
                                    },50);
                           }
                    })
             });   
       }
});

module.exports = router;