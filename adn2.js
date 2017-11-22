/* Copyright (c) 2017, Sejong University. All rights reserved

oneM2M ADN Profile 2
This document contains the implementation code of oneM2M ADN profile 2. oneM2M is open standard for IoT. The purpose of this ADN pofile is Testing. 
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
///////////////////////=================ADN 2 =======================////////////////////

//===========  Fundamental features ==========//

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

// ### Create <AE> with pointOfAccess  ### AE/REG/0002/0006
exports.createAEpoa =function (origin,url,api_value,rr_value,poa_value){
  console.log("Creating <AE> with pointOfAccess attributes AE/REG/0002/0006");
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
                        "rr" : rr_value,
                        "poa" : poa_value
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

//###	Create <Subscription> with mandatory attributes	###
exports.createSubscription = function(origin,url,rn_value,nu_value,nct_value,net_value){
	console.log("Creating <Subscription> with mandatory attributes");
	var headers={
    'X-M2M-Origin': origin,
    'X-M2M-RI' :12345,
    'Content-Type': 'application/json;ty=23'
    };
    request({
      headers: headers,
      url:url+cseName,
      method:'POST',
      body:
          JSON.stringify({
            "m2m:sub":{
                        "rn" : rn_value,
                        "enc" : {
                        	"net" : net_value
                        },
                        "nu" : nu_value,
                        "nct" : nct_value
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
