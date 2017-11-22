/* Copyright (c) 2017, Sejong University. All rights reserved

oneM2M ADN Profile 1 
This document contains the implementation code of oneM2M ADN profile 1. oneM2M is open standard for IoT. The purpose of this ADN pofile is Testing. 
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

// ### Create <AE> with resourceName attribute ### AE/REG/00002/00002
exports.createAErn= function(origin,url,api_value,rr_value,rn_value){
  console.log("Creating <AE> with resourceName attributes AE/REG/0002/0002");
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
                        "rn" : rn_value
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

// ### Create <AE> with expirationTime attribute ### AE/REG/00002/00003
exports.createAEet = function(origin,url,api_value,rr_value,et_value){
  console.log("Creating <AE> with expirationTime attributes AE/REG/00002/00003");
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
                        "et" : et_value
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

// ### Create <AE> with labels ### AE/REG/00002/00004
exports.createAElbl=function (origin,url,api_value,rr_value,lbl_value){
  console.log("Creating <AE> with label attributes AE/REG/00002/00004");
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
                        "lbl" : lbl_value
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


// ### Create <AE> with applicationName  ### AE/REG/00002/00005
exports.createAEapn =function (origin,url,api_value,rr_value,apn_value){
  console.log("Creating <AE> with applicationName attributes AE/REG/00002/00005");
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
                        "apn" : apn_value
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

// ### Create a <Container> with ressourceName ###  AE/DMR/00001/00002
exports.createContainerrn = function(origin,url,rn_value){
  console.log("Creating <Container> with resourceName AE/DMR/00001/00002");
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
                      "rn" : rn_value
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

// ### Create a <Container> with expirationTime  ### AE/DMR/00001/00003
exports.createContaineret = function(origin,url,et_value){
  console.log("Creating <Container> with expirationTime AE/DMR/00001/00003");
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
                      "et" : et_value
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

// ### Create a <Container> with labels  ### AE/DMR/00001/00004
exports.createContainerlbl = function(origin,url,lbl_value){
  console.log("Creating <Container> with labels AE/DMR/00001/00004");
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
                      "lbl" : lbl_value
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

// ### Create a <Container> with creator ### AE/DMR/00001/00005
exports.createContainercr = function(origin,url,cr_value){
  console.log("Creating <Container> with creator AE/DMR/00001/00005");
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
                      "cr" : cr_value
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

// ### Create a <Container> with maxNrOfInstances  ###  AE/DMR/00001/00006
exports.createContainermni= function(origin,url,mni_value){
  console.log("Creating <Container> with maxNrOfInstances AE/DMR/00001/00006");
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
                      "mni" : mni_value
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

// ### Create a <Container> with maxByteSize ### AE/DMR/00001/00007
exports.createContainermbs = function(origin,url,mbs_value){
  console.log("Creating <Container> with maxByteSize AE/DMR/00001/00007");
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
                      "mbs" : mbs_value
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

// ### Create a <Container> with maxInstanceAge  ###  AE/DMR/00001/00008
exports.createContainermia=function(origin,url,mia_value){
  console.log("Creating <Container> with maxInstanceAge AE/DMR/00001/00008");
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
                      "mia" : mia_value
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

// ### Create a <ContentInstance> with resourceName  ### AE/DMR/00002/00002
exports.createContentInstancern = function(origin,url,con_value,rn_value){
  console.log("Creating <ContentInstance> with resourceName attributes AE/DMR/00002/00002");
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
                      "con":con_value,
                      "rn": rn_value
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

// ### Create a <ContentInstance> with expirationTime  ### AE/DMR/00002/00003
exports.createContentInstanceet = function(origin,url,con_value,et_value){
  console.log("Creating <ContentInstance> with expirationTime attributes AE/DMR/00002/00003");
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
                      "con":con_value,
                      "et":et_value
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

// ### Create a <ContentInstance> with label ###  AE/DMR/00002/00004
exports.createContentInstancelbl = function(origin,url,con_value,lbl_value){
  console.log("Creating <ContentInstance> with labels attributes AE/DMR/00002/00004");
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
                      "con":con_value,
                      "lbl":lbl_value
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

// ### Create a <ContentInstance> with creator ### AE/DMR/00002/00005
exports.createContentInstancecr = function(origin,url,con_value,cr_value){
  console.log("Creating <ContentInstance> with creator attributes AE/DMR/00002/00005");
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
                      "con":con_value,
                      "cr":cr_value
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

// ### Create a <ContentInstance> with contentInfo ###  AE/DMR/00002/00006
exports.createContentInstancecnf = function(origin,url,con_value,cnf_value){
  console.log("Creating <ContentInstance> with contentInfo attributes AE/DMR/00002/00006");
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
                      "con":con_value,
                      "cnf":cnf_value
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

// ### Create a <ContentInstance> with contentRef  ### AE/DMR/00002/00007
exports.createContentInstanceconr = function(origin,url,con_value,conr_value){
  console.log("Creating <ContentInstance> with contentRef attributes AE/DMR/00002/00007");
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
                      "con":con_value,
                      "conr":conr_value
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

