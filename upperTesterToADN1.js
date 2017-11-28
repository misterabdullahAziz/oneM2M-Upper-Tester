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

var adn1 = require("./adn1.js");
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
	adn1.createAE(origin,url,api,rr);
}
else if(testCaseID == "AE/REG/00002/00002"){
	//Create <AE> with resourceName attribute
	adn1.createAErn(AEOrigin,url,api,rr,rn);
}
else if(testCaseID == "AE/REG/00002/00003"){
	//Create <AE> with expirationTime attribute
	adn1.createAEet(AEOrigin,url,api,rr,et);
}
else if(testCaseID == "AE/REG/00002/00004"){
	//Create <AE> with labels
	adn1.createAElbl(AEOrigin,url,api,rr,lbl);
}
else if(testCaseID == "AE/REG/00002/00005"){
	//Create <AE> with applicationName
	adn1.createAEapn(AEOrigin,url,api,rr,apn);
}
else if(testCaseID == "AE/DMR/00001/00001"){       ////********** Container Resource ************////
	//Create <container> with no attribute set
	adn1.createContainer(AEOrigin,url);
}
else if(testCaseID == "AE/DMR/00001/00002"){
	//Create <container> with resourceName
	adn1.createContainerrn(AEOrigin,url,"cnt_test");
}
else if(testCaseID == "AE/DMR/00001/00003"){
	//Create <container> with expirationTime
	adn1.createContaineret(AEOrigin,url,et);
}
else if(testCaseID == "AE/DMR/00001/00004"){
	//Create <container> with labels
	adn1.createContainerlbl(AEOrigin,url,lbl);
}
else if(testCaseID == "AE/DMR/00001/00005"){
	//Create <container> with creator
	adn1.createContainercr(AEOrigin,url,cr);
}
else if(testCaseID == "AE/DMR/00001/00006"){
	//Create <container> with maxNrOfInstances
	adn1.createContainermni(AEOrigin,url,mni);
}
else if(testCaseID == "AE/DMR/00001/00007"){
	//Create <container> with maxByteSize
	adn1.createContainermbs(AEOrigin,url,mbs);
}
else if(testCaseID == "AE/DMR/00001/00008"){
	//Create <container> with maxInstanceAge
	adn1.createContainermia(AEOrigin,url,mia);
}
else if(testCaseID == "AE/DMR/00002/00001"){		////********** ContentInstance Resource ************////
	//Create <contentInstance> with mandatory attributes
	adn1.createContentInstance(AEOrigin,url,con);
}
else if(testCaseID == "AE/DMR/00002/00002"){
	//Create <contentInstance> with resourceName
	adn1.createContentInstancern(AEOrigin,url,con,rn);
}
else if(testCaseID == "AE/DMR/00002/00003"){
	//Create <contentInstance> with expirationTime
	adn1.createContaineret(AEOrigin,url,con,et);
}
else if(testCaseID == "AE/DMR/00002/00004"){
	//Create <contentInstance> with labels
	adn1.createContentInstancelbl(AEOrigin,url,con,lbl);
}
else if(testCaseID == "AE/DMR/00002/00005"){
	//Create <contentInstance> with creator
	adn1.createContentInstancecr(AEOrigin,url,con,cr);
}
else if(testCaseID == "AE/DMR/00002/00006"){
	//Create <contentInstance> with contentInfo
	adn1.createContentInstancecnf(AEOrigin,url,con,cnf);
}
else if(testCaseID == "AE/DMR/00002/00007"){
	//Create <contentInstance> with contentRef
	adn1.createContentInstanceconr(AEOrigin,url,con,conr);
}