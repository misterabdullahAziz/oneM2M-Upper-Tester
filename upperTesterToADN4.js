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

var testerURL = process.argv[2];
var testCaseID = process.argv[3];
var valueToSend = process.argv[4];

var adn4 = require("./adn4.js");

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
else if(testCaseID == "AE/REG/00001/00001"){
	//The Retrival of <CSEBase> resource
}
else if(testCaseID == "AE/REG/00002/00001"){
	//Create <AE> with mandatory attributes
}
else if(testCaseID == "AE/REG/00002/00002"){
	//Create <AE> with resourceName attribute
}
else if(testCaseID == "AE/REG/00002/00003"){
	//Create <AE> with expirationTime attribute
}
else if(testCaseID == "AE/REG/00002/00004"){
	//Create <AE> with labels
	var api = "0.2.481.2.0001.001.000111";
	var rr = true;
	adn4.createAElbl('S',"http://"+testerURL,api,rr,['valueToSend']);
}
else if(testCaseID == "AE/REG/00002/00005"){
	//Create <AE> with applicationName
}
else if(testCaseID == "AE/REG/00002/00006"){
	//Create <AE> with pointOfAccess
}
else if(testCaseID == "AE/REG/00002/00007"){
	//Create <AE> with nodeLink
}
else if(testCaseID == "AE/REG/00002/00008"){
	//Create <AE> with contentSerialization
}
else if(testCaseID == "AE/REG/00002/00009"){
	//Update <AE> with expirationTime
}
else if(testCaseID == "AE/REG/00002/00010"){
	//Update <AE> with labels
}
else if(testCaseID == "AE/REG/00002/00011"){
	//Update <AE> with applicationName
}
else if(testCaseID == "AE/REG/00002/00012"){
	//Update <AE> with pointOfAccess
}
else if(testCaseID == "AE/REG/00002/00013"){
	//Update <AE> with nodeLink
}
else if(testCaseID == "AE/REG/00002/00014"){
	//Update <AE> with requestReachability
}
else if(testCaseID == "AE/REG/00002/00015"){
	//Update <AE> with contentSerialization
}
else if(testCaseID == "AE/REG/00002/00016"){
	//Delete <AE>
}
else if(testCaseID == "AE/REG/00002/00017"){
	//Retrieve <AE>
}
else if(testCaseID == "AE/DMR/00001/00001"){
	//Create <container> with no attribute set
}
else if(testCaseID == "AE/DMR/00001/00002"){
	//Create <container> with resourceName
}
else if(testCaseID == "AE/DMR/00001/00003"){
	//Create <container> with expirationTime
}
else if(testCaseID == "AE/DMR/00001/00004"){
	//Create <container> with labels
}
else if(testCaseID == "AE/DMR/00001/00005"){
	//Create <container> with creator
}
else if(testCaseID == "AE/DMR/00001/00006"){
	//Create <container> with maxNrOfInstances
}
else if(testCaseID == "AE/DMR/00001/00007"){
	//Create <container> with maxByteSize
}
else if(testCaseID == "AE/DMR/00001/00008"){
	//Create <container> with maxInstanceAge
}
else if(testCaseID == "AE/DMR/00001/00009"){
	//Update <container> with expirationTime
}
else if(testCaseID == "AE/DMR/00001/00010"){
	//Update <container> with labels
}
else if(testCaseID == "AE/DMR/00001/00011"){
	//Update <container> with maxNrOfInstances
}
else if(testCaseID == "AE/DMR/00001/00012"){
	//Update <container> with maxByteSize
}
else if(testCaseID == "AE/DMR/00001/00013"){
	//Update <container> with maxInstanceAge
}
else if(testCaseID == "AE/DMR/00001/00014"){
	//Delete <container>
}
else if(testCaseID == "AE/DMR/00001/00015"){
	//Retrieve <container>
}
else if(testCaseID == "AE/DMR/00002/00001"){
	//Create <contentInstance> with mandatory attributes
}
else if(testCaseID == "AE/DMR/00002/00002"){
	//Create <contentInstance> with resourceName
}
else if(testCaseID == "AE/DMR/00002/00003"){
	//Create <contentInstance> with expirationTime
}
else if(testCaseID == "AE/DMR/00002/00004"){
	//Create <contentInstance> with labels
}
else if(testCaseID == "AE/DMR/00002/00005"){
	//Create <contentInstance> with creator
}
else if(testCaseID == "AE/DMR/00002/00006"){
	//Create <contentInstance> with contentInfo
}
else if(testCaseID == "AE/DMR/00002/00007"){
	//Create <contentInstance> with contentRef
}
else if(testCaseID == "AE/DMR/00002/00008"){
	//Retrieve <contentInstance> resource targeting the <contentInstance> resource
}
else if(testCaseID == "AE/DMR/00002/00009"){
	//Retrieve oldest <contentInstance> resource targeting the <oldest> resource
}
else if(testCaseID == "AE/DMR/00002/00010"){
	//Retrieve latest <contentInstance> resource targeting the <latest> resource
}
else if(testCaseID == "AE/DMR/00002/00011"){
	//Delete <contentInstance>
}
else if(testCaseID == "AE/DMR/00002/00012"){
	//Delete oldest <contentInstance> resource targeting the <oldest> resource
}
else if(testCaseID == "AE/DMR/00002/00013"){
	//Delete latest <contentInstance> resource targeting the <latest> resource
}
