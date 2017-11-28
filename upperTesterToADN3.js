/* Copyright (c) 2017, Sejong University. All rights reserved

oneM2M ADN Layer to Communicate with UpperTester
This document contains the implementation code of oneM2M ADN layer to communicate with UpperTester. oneM2M is open standard for IoT. The purpose of this layer to recieve the message from UpperTester after parsing. UpperTester will connect with this implementation by ssh and will run this by passing the arguments which includes:
	- URL of Tester
	- TestCase ID
	- The value which need to send with request to tester

This file is a generic implementation against each Test Case of Application Dedicated Nodes (ADN profiles) of oneM2M.

**************** How to Use ***************
	- import file of any ADN profile
	- call the function against testcase ID in the if-else statements
	- Pass the required parameters while calling the functions.

Author : Abdullah Aziz
Email : mister.abdullah.aziz@gmail.com
*/

var url = process.argv[2];
var testCaseID = process.argv[3];
var valueToSend = process.argv[4];

var adn4 = require("./adn4.js");
var origin = "SOrigin"; 
var AEOrigin = "S";

//AE Create varialbles

var rn="my_ressource";
var api = "0.2.481.2.0001.001.000111";
var rr = true;
var et="20180101T000000";
var lbl=["my_label"];
var apn="my_application";
var poa=["http://127.0.0.1:42"];
var nl=""; // due to bug in mobius sending NULL at the moment
var csz="JSON";

//Container variables
var cr="my_creator";
var mni="100";
var mbs="10000";
var mia="500";

// ContentInstance Variables
var con = "on";
var cnf=1; //encoding type, can be 0:plain, 1:base64 encode string, 2: base64 encoded binary
var conr="content_ref";


if(testCaseID == "AE/GEN/00001")
{

}
else if(testCaseID == "AE/GEN/00002/00001"){
	//	Support Create request targeting one resource
}
else if(testCaseID == "AE/REG/00002/00001"){ ////********** AE Resource ************////
	//Create <AE> with mandatory attributes
	adn4.createAE(origin,url,api,rr);
}

else if(testCaseID == "AE/DMR/00001/00001"){       ////********** Container Resource ************////
	//Create <container> with no attribute set
	adn4.createContainer(AEOrigin,url);
}
else if(testCaseID == "AE/DMR/00002/00001"){		////********** ContentInstance Resource ************////
	//Create <contentInstance> with mandatory attributes
	adn4.createContentInstance(AEOrigin,url,con);
}
