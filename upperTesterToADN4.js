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
else if(testCaseID == "AE/GEN/00002/00002"){
	//Support Retrieve request targeting one resource
}
else if(testCaseID == "AE/GEN/00002/00003"){
	//Support Update request targeting one resource
}
else if(testCaseID == "AE/GEN/00002/00004"){
	//Support Delete request targeting one resource
}
else if(testCaseID == "AE/REG/00001/00001"){ ////********** CSE Resource ************////
	//The Retrival of <CSEBase> resource
	adn4.getCSE(origin,url);
}
else if(testCaseID == "AE/REG/00002/00001"){ ////********** AE Resource ************////
	//Create <AE> with mandatory attributes
	adn4.createAE(origin,url,api,rr);
}
else if(testCaseID == "AE/REG/00002/00002"){
	//Create <AE> with resourceName attribute
	adn4.createAErn(AEOrigin,url,api,rr,rn);
}
else if(testCaseID == "AE/REG/00002/00003"){
	//Create <AE> with expirationTime attribute
	adn4.createAEet(AEOrigin,url,api,rr,et);
}
else if(testCaseID == "AE/REG/00002/00004"){
	//Create <AE> with labels
	adn4.createAElbl(AEOrigin,url,api,rr,lbl);
}
else if(testCaseID == "AE/REG/00002/00005"){
	//Create <AE> with applicationName
	adn4.createAEapn(AEOrigin,url,api,rr,apn);
}
else if(testCaseID == "AE/REG/00002/00006"){
	//Create <AE> with pointOfAccess
	adn4.createAEpoa(AEOrigin,url,api,rr,poa);
}
else if(testCaseID == "AE/REG/00002/00007"){
	//Create <AE> with nodeLink
	adn4.createAEnl(AEOrigin,url,api,rr,nl);
}
else if(testCaseID == "AE/REG/00002/00008"){
	//Create <AE> with contentSerialization
	adn4.createAEcsz(AEOrigin,url,api,rr,csz);
}
else if(testCaseID == "AE/REG/00002/00009"){
	//Update <AE> with expirationTime
	adn4.updateAEet(AEOrigin,url,et);
}
else if(testCaseID == "AE/REG/00002/00010"){
	//Update <AE> with labels
	adn4.updateAElbl(AEOrigin,url,lbl);
}
else if(testCaseID == "AE/REG/00002/00011"){
	//Update <AE> with applicationName
	adn4.updateAEapn(AEOrigin,url,apn);

}
else if(testCaseID == "AE/REG/00002/00012"){
	//Update <AE> with pointOfAccess
	adn4.updateAEpoa(AEOrigin,url,poa);
}
else if(testCaseID == "AE/REG/00002/00013"){
	//Update <AE> with nodeLink
	adn4.updateAEnl(AEOrigin,url,nl);
}
else if(testCaseID == "AE/REG/00002/00014"){
	//Update <AE> with requestReachability
	adn4.updateAErr(AEOrigin,url,rr);
}
else if(testCaseID == "AE/REG/00002/00015"){
	//Update <AE> with contentSerialization
	adn4.updateAEcsz(AEOrigin,url,csz);
}
else if(testCaseID == "AE/REG/00002/00016"){
	//Delete <AE>
	adn4.deleteAE(AEOrigin,url);
}
else if(testCaseID == "AE/REG/00002/00017"){
	//Retrieve <AE>
	adn4.getAE(AEOrigin,url);
}
else if(testCaseID == "AE/DMR/00001/00001"){       ////********** Container Resource ************////
	//Create <container> with no attribute set
	adn4.createContainer(AEOrigin,url);
}
else if(testCaseID == "AE/DMR/00001/00002"){
	//Create <container> with resourceName
	adn4.createContainerrn(AEOrigin,url,"cnt_test");
}
else if(testCaseID == "AE/DMR/00001/00003"){
	//Create <container> with expirationTime
	adn4.createContaineret(AEOrigin,url,et);
}
else if(testCaseID == "AE/DMR/00001/00004"){
	//Create <container> with labels
	adn4.createContainerlbl(AEOrigin,url,lbl);
}
else if(testCaseID == "AE/DMR/00001/00005"){
	//Create <container> with creator
	adn4.createContainercr(AEOrigin,url,cr);
}
else if(testCaseID == "AE/DMR/00001/00006"){
	//Create <container> with maxNrOfInstances
	adn4.createContainermni(AEOrigin,url,mni);
}
else if(testCaseID == "AE/DMR/00001/00007"){
	//Create <container> with maxByteSize
	adn4.createContainermbs(AEOrigin,url,mbs);
}
else if(testCaseID == "AE/DMR/00001/00008"){
	//Create <container> with maxInstanceAge
	adn4.createContainermia(AEOrigin,url,mia);
}
else if(testCaseID == "AE/DMR/00001/00009"){
	//Update <container> with expirationTime
	adn4.updateContaineret(AEOrigin,url,et);
}
else if(testCaseID == "AE/DMR/00001/00010"){
	//Update <container> with labels
	adn4.updateContainerlbl(AEOrigin,url,lbl);
}
else if(testCaseID == "AE/DMR/00001/00011"){
	//Update <container> with maxNrOfInstances
	adn4.updateContainermni(AEOrigin,url,mni);
}
else if(testCaseID == "AE/DMR/00001/00012"){
	//Update <container> with maxByteSize
	adn4.updateContainermbs(AEOrigin,url,mbs);
}
else if(testCaseID == "AE/DMR/00001/00013"){
	//Update <container> with maxInstanceAge
	adn4.updateContainermia(AEOrigin,url,mia);
}
else if(testCaseID == "AE/DMR/00001/00014"){
	//Delete <container>
	adn4.deleteContainer(AEOrigin,url);
}
else if(testCaseID == "AE/DMR/00001/00015"){
	//Retrieve <container>
	adn4.getContainer(AEOrigin,url);
}
else if(testCaseID == "AE/DMR/00002/00001"){		////********** ContentInstance Resource ************////
	//Create <contentInstance> with mandatory attributes
	adn4.createContentInstance(AEOrigin,url,con);
}
else if(testCaseID == "AE/DMR/00002/00002"){
	//Create <contentInstance> with resourceName
	adn4.createContentInstancern(AEOrigin,url,con,rn);
}
else if(testCaseID == "AE/DMR/00002/00003"){
	//Create <contentInstance> with expirationTime
	adn4.createContaineret(AEOrigin,url,con,et);
}
else if(testCaseID == "AE/DMR/00002/00004"){
	//Create <contentInstance> with labels
	adn4.createContentInstancelbl(AEOrigin,url,con,lbl);
}
else if(testCaseID == "AE/DMR/00002/00005"){
	//Create <contentInstance> with creator
	adn4.createContentInstancecr(AEOrigin,url,con,cr);
}
else if(testCaseID == "AE/DMR/00002/00006"){
	//Create <contentInstance> with contentInfo
	adn4.createContentInstancecnf(AEOrigin,url,con,cnf);
}
else if(testCaseID == "AE/DMR/00002/00007"){
	//Create <contentInstance> with contentRef
	adn4.createContentInstanceconr(AEOrigin,url,con,conr);
}
else if(testCaseID == "AE/DMR/00002/00008"){
	//Retrieve <contentInstance> resource targeting the <contentInstance> resource
	adn4.getContentInstance(AEOrigin,url);
}
else if(testCaseID == "AE/DMR/00002/00009"){
	//Retrieve oldest <contentInstance> resource targeting the <oldest> resource
	adn4.getContentInstanceOldest(AEOrigin,url);
}
else if(testCaseID == "AE/DMR/00002/00010"){
	//Retrieve latest <contentInstance> resource targeting the <latest> resource
	adn4.getContentInstanceLatest(AEOrigin,url);
}
else if(testCaseID == "AE/DMR/00002/00011"){
	//Delete <contentInstance>
	adn4.deleteContentInstance(AEOrigin,url);
}
else if(testCaseID == "AE/DMR/00002/00012"){
	//Delete oldest <contentInstance> resource targeting the <oldest> resource
	adn4.deleteContentInstanceOldest(AEOrigin,url);
}
else if(testCaseID == "AE/DMR/00002/00013"){
	//Delete latest <contentInstance> resource targeting the <latest> resource
	adn4.deleteContentInstanceLatest(AEOrigin,url);
}
