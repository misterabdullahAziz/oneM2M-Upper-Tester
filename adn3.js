/* Copyright (c) 2017, Sejong University. All rights reserved

oneM2M ADN Profile 3 
This document contains the implementation code of oneM2M ADN profile 3. oneM2M is open standard for IoT. The purpose of this ADN pofile is Testing.
Author : Abdullah Aziz
Email : mister.abdullah.aziz@gmail.com
*/

var request = require('request');
var cseName = "/Mobius"; // to concatenate with url in any request
var aeNameForUpdate = "/ae_test";
var cnt_test = "/cnt_test";
var cinLatest = "/latest";
var cinOldest = "/oldest";
var cinName = "/my_ressource";
///////////////////////=================ADN 1 =======================////////////////////

//===========  Fundamental features ==========//

// ### Create a <ContentInstance> with mandatory attributes  ### AE/DMR/00002/00001
exports.createContentInstance = function(origin,url,con_value){
  console.log("Creating <ContentInstance> with mandatory attributes AE/DMR/00002/00001");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=4'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate+cnt_test,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:cin": {
                      "con":con_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}

//===========  Extendable features ==========//

// -------------- AE -------------//


//### Create <AE> with mandatory attributes ### AE/REG/00002/00001
exports.createAE = function (origin,url,api_value,rr_value){
  console.log("Creating <AE> with mandatory attributes AE/REG/00002/00001");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=2'
    };
    request({
      headers: headers,
      url:url+cseName,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:ae":{
                        "api" : api_value,
                        "rr" : rr_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });

}

// -------------- Container -------------//

// ### Create a <Container> with no attribute set  ### AE/DMR/00001/00001
exports.createContainer =  function(origin,url){
  console.log("Creating <Container> with no attribute set AE/DMR/00001/00001");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=3'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:cnt":{
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}


// -------------- ContentInstance -------------//

// ### Create a <ContentInstance> with mandatory attributes  ### AE/DMR/00002/00001
exports.createContentInstance = function(origin,url,con_value){
  console.log("Creating <ContentInstance> with mandatory attributes AE/DMR/00002/00001");
  var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=4'
    };
    request({
      headers: headers,
      url:url+cseName+aeNameForUpdate+cnt_test,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:cin": {
                      "con":con_value
                    }
          })
    },function(error, response, body)
    {
      if(!error)
      {
        var obj = JSON.parse(body);
        console.log("Response=",obj)
      }
      else
      {
         console.log("error is: "+ error);
      }
    });
}



