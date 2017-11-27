const express = require('express');
const app = express();
var SSH = require("simple-ssh");
var bodyParser = require('body-parser');

var sshHost = "192.168.0.87";
var sshUser = "pi";
var sshPassword = "raspberry";
var filePathSSH = "Documents/oneM2M-AE-ADNs-with-UpperTester-/commandLineArgs.js";

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/', function (req, res) {
	var AE_RESSOURCE_ADRESS = "MY_AE";
	var CSE_RESSOURCE_ADRESS = "http://127.0.0.1:7959";
	var CONTAINER_RESSOURCE_ADRESS = "MY_CONTAINER";
	var CONTENT_INSTANCE_RESSOURCE_ADRESS = "MY_CONTENT_INSTANCE";
	var PREFIX = "mn-name";
	var pc = false;
	var key ="";
	var value=null;
	var op=null;
	var ty=null;
	var to=CSE_RESSOURCE_ADRESS;
	var api="my_api";
	var rr="true";
	var AEopt = "";
	var lbl=["my_label"];
	var rn="my_ressource";
	var et="20180101T000000";
	var apn="my_application";
	var poa=["http://127.0.0.1:42"];
	var nl="my_node";
	var csz="JSON";
	var cr="my_creator";
	var mni="100";
	var mbs="10000";
	var mia="500";
	var cnf="text/json";
	var conr="content_ref";
	var con="1";
	var testerURL;
	var valueToADN;
	var functionID="";
	var attributes="";

	var testCaseID = "AE/";
	var requestType = req.get('content-type');
	if(!req.body.hasOwnProperty("rqp") || requestType != "application/json" || !req.body.rqp.hasOwnProperty("to") || !req.body.rqp.hasOwnProperty("op")){
			var err = new Error("BAD_REQUEST");
			return next(err);
	}
	try{	
			// mandatory attribute
			if(req.body.rqp.hasOwnProperty("to")){
				to = req.body.rqp.to; 
				testerURL = to.ip + ":"+ to.port;
			}
			// mandatory attribute
			if(req.body.rqp.hasOwnProperty("op")){
				if(req.body.rqp.op == "1")
					op="create";
				else if(req.body.rqp.op == "2")
					op="get";
				else if(req.body.rqp.op == "3")
					op="update";
				else if(req.body.rqp.op == "4")
					op="delete";
				else if(req.body.rqp.op == "5")
					op="notify";
			}
			// optional attribute
			if(req.body.rqp.hasOwnProperty("ty")){
				if(req.body.rqp.ty == "1"){
					ty="accessControlPolicy";
				}
				else if(req.body.rqp.ty == "2"){
					ty="AE";
					testCaseID += "REG/00002/000";
					if(op == "get"){
						testCaseID +="17";
					}
				}
				else if(req.body.rqp.ty == "3"){
					ty="Container";
					testCaseID += "DMR/00001/000";
					if(op == "get"){
						testCaseID +="15";
					}
				}
				else if(req.body.rqp.ty == "4"){
					ty="ContentInstance";
					testCaseID += "DMR/00002/000";
				}
				else if(req.body.rqp.ty == "5"){
					ty="CSE";
					testCaseID += "REG/00001/0000";
					if(op == "get")
						testCaseID +="1";
				}
				else if(req.body.rqp.ty == "23"){
					ty="subscription";
					testCaseID += "SUB/00001/00001";
				}
			}
			// optional attribute
			if(req.body.rqp.hasOwnProperty("pc")){
				var ae;
				pc = req.body.rqp.pc;
				if(pc.hasOwnProperty("ae"))
					ae = pc["ae"];
				if(pc.hasOwnProperty("cnt"))
					ae = pc["cnt"];
				if(pc.hasOwnProperty("cin"))
					ae = pc["cin"];
				Object.keys(ae).forEach(function(k){
				   if(k == "lbl")
					{
						functionID=k;
						if(ae[k] != "UNINITIALIZED")
							lbl=ae[k];
						if(op == "create")	
							testCaseID += "04";
						if(op == "update")	
							testCaseID += "10";
						valueToADN = lbl;
					}
					else if(k == "rn")
					{
						functionID=k;
						if(ae[k] != "UNINITIALIZED")
							rn=ae[k];
						else
						{
							if(ty=="AE")
								rn=AE_RESSOURCE_ADRESS;
							else if(ty=="Container")
								rn=CONTAINER_RESSOURCE_ADRESS;
							else if(ty=="ContentInstance")
								rn=CONTENT_INSTANCE_RESSOURCE_ADRESS;
							valueToADN = rn;
						}
						if(op == "create")	
							testCaseID += "02";
					}
					else if(k == "et")
					{
						functionID=k;
						if(ae[k] != "UNINITIALIZED")
							et=ae[k];
						if(op == "create")	
							testCaseID += "03";
						if(op == "update")	
							testCaseID += "09";
						valueToADN = et;
					}
					else if(k == "apn")
					{
						functionID=k;
						if(ae[k] != "UNINITIALIZED")
							apn=ae[k];
						if(op == "create")	
							testCaseID += "05";
						if(op == "update")	
							testCaseID += "11";
					}
					else if(k == "api")
					{
						functionID=k;
						if(ae[k] != "UNINITIALIZED")
							api=ae[k];
						valueToADN = api;
					}
					else if(k == "poa")
					{
						functionID=k;
						if(ae[k] != "UNINITIALIZED")
							poa=ae[k];
						if(op == "create")	
							testCaseID += "06";
						if(op == "update")	
							testCaseID += "12";
						valueToADN = poa;
					}
					else if(k == "nl")
					{
						functionID=k;
						if(ae[k] != "UNINITIALIZED")
							nl=ae[k];
						if(op == "create")	
							testCaseID += "07";
						if(op == "update")	
							testCaseID += "13";
						valueToADN = nl;
					}
					else if(k == "csz")
					{
						functionID=k;
						if(ae[k] != "UNINITIALIZED")
							csz=ae[k];
						if(op == "create")	
							testCaseID += "08";
						if(op == "update")	
							testCaseID += "15";
						valueToADN = csz;
					}
					else if(k == "rr")
					{
						functionID=k;
						if(ae[k] != "UNINITIALIZED")
							rr=ae[k];
						if(op == "update")	
							testCaseID += "14";
						valueToADN = rr;
					}
					else if(k == "cr")
					{
						functionID=k;
						if(ae[k] != "UNINITIALIZED")
							cr=ae[k];
						if(op == "create")	
							testCaseID += "05";
						valueToADN = cr;
					}
					else if(k == "mni")
					{
						functionID=k;
						if(ae[k] != "UNINITIALIZED")
							mni=ae[k];
						if(op == "create")	
							testCaseID += "06";
						if(op == "update")	
							testCaseID += "11";
						valueToADN = mni;
					}
					else if(k == "mbs")
					{
						functionID=k;
						if(ae[k] != "UNINITIALIZED")
							mbs=ae[k];
						if(op == "create")	
							testCaseID += "07";
						if(op == "update")	
							testCaseID += "12";
						valueToADN = mbs;
					}
					else if(k == "mia")
					{
						functionID=k;
						if(ae[k] != "UNINITIALIZED")
							mia=ae[k];
						if(op == "create")	
							testCaseID += "08";
						if(op == "update")	
							testCaseID += "13";
						valueToADN = mia;
					}
					else if(k == "cnf")
					{
						functionID=k;
						if(ae[k] != "UNINITIALIZED")
							cnf=ae[k];
						if(op == "create")	
							testCaseID += "06";
						valueToADN = cnf;
					}
					else if(k == "conr")
					{
						functionID=k;
						if(ae[k] != "UNINITIALIZED")
							conr=ae[k];
						if(op == "create")	
							testCaseID += "07";
						valueToADN = conr;
					}
					else if(k == "apn")
					{
						functionID=k;
						if(ae[k] != "UNINITIALIZED")
							apn=ae[k];
						valueToADN = apn;
					}
					else if(k == "con")
					{
						if(ae[k] != "UNINITIALIZED")
							con=ae[k];
						valueToADN = con;
					}
				});
			}
			console.log(functionID);
			console.log(testCaseID);
			console.log(valueToADN);
			console.log(testerURL);
	}catch(error){
		next(error);
	}
	sendToADN(testerURL,testCaseID,valueToADN
		);
	res.status= 2000;
res.setHeader('X-M2M-RSC', 2000);
  res.send({
  'rsp': {
  	"rsc" : 2000
  }
});
})


app.use(function(err, req, res, next) {
   res.status(400).send({
  'rsp': {
  	"rsc" : 4000
  }
});
});


app.listen(3000, function () {
  console.log('Upper Tester is listening on port 3000')
})



function sendToADN (url, testcase, value){
	var ssh = new SSH({
	host: sshHost,
	user: sshUser,
	pass: sshPassword
	});
	var commnad = "node " + filePathSSH + " " + url + " " + testcase + " " + value;
	console.log(commnad);
	ssh.exec(commnad, {
		out: function(stdout) {
		    console.log("OutPut: " +stdout);
		},
		err: function(stderr) {
		    console.log("Error: " +stderr); 
		}
	}).start();
}