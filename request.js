var parsed 	= new Array(15);
var hvac_value 	= new Array(7);
var msoInitStat = 0;
var	dataReceived = 0;
var	statReqSent = 0;
var	rdBufReqSent = 0;
var	msoConnected = 0;
var msoStat = 0;
var msoRawStat = 0;
var changeStat = 0;
var trigCnt = 0;
var statCnt = 0;
var drawCnt = 0;
var armSent = 0;
var log4 = 'gfdhgfdh';
var log5 = 'wawa';
var nsClkRate = 0;
var reDraw = 0;
var vDivM0=1;
var vDivM1=1;
var scaleTop=2;
var scaleBtm=-2;
var cursSel=0;

var msoState = {"chkMso":0,
				"waitMso":1,
				"noMso":2,
				"initMso":3,
				"ncMso":4,
				"stbyMso":5,
				"stbyMsoOld":16,
				"statReqMso":6,
				"armMso":7,
				"reArmMso":8,
				"stopMso":9,
				"wTrigMso":10,
				"triggedMso":11,
				"rbMso":12,
				"getData":13,
				"chkMso":14,
				"forceCapMso":15}
				
var currState = msoState.waitMso;
var nextState = msoState.waitMso;


sfHover2 = function() {
	var navthree = document.getElementById("lnv");
	if (navthree){
		var sfEls2 = document.getElementById("lnv").getElementsByTagName("LI");
		for (var i=0; i<sfEls2.length; i++) {
			sfEls2[i].onmouseover=function() {
				this.className+=" sfhover";
				hideselects('hidden');
			}
			sfEls2[i].onmouseout=function() {
				this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
				hideselects('visible');
			}
		}
	}
}

if (window.attachEvent) {
	window.attachEvent("onload", sfHover2);
}

function hideselects(state) {
	for(i=0;i<document.forms.length;i++){ // if there are forms on the page
		frm = document.forms[i];
		var inputs = frm.getElementsByTagName("SELECT");
		for (j=0;j<inputs.length;j++){
			inputs[j].style.visibility = state;
		}
	}
}


// request.js
function makeRequest(url,txtype) {
	var http_request = false;
	if (window.XMLHttpRequest) { // Mozilla, Safari,...
		http_request = new XMLHttpRequest();
		if (http_request.overrideMimeType) {
			http_request.overrideMimeType('text/xml');
		}
	}
	else if (window.ActiveXObject) { // IE
		try {
			http_request = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try {
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e) {}
		}
	}
	if (!http_request) {
		alert('Giving up :( Cannot create an XMLHTTP instance');
		return false;
	}
	http_request.onreadystatechange = function() { alertContents(http_request,txtype); };
	http_request.open('GET', url, true);
	http_request.send(null);
}

function alertContents(http_request,txtype) {

	log4.innerHTML = "<h3>"+http_request.readyState+"</h1>";

	if (http_request.readyState == 4) {

		log5.innerHTML = "<h3>"+http_request.status+"</h1>";
		if ((http_request.status == 0)||(http_request.status == 200)) {
			if(txtype == 1){
				parse_data(http_request.responseText);
				dataReceived = 2;
			}
			else{
				parse_stat(http_request.responseText);
				dataReceived = 1;
			}

		}
	}
}
// page js
function parse_stat(data) {
	var parsed = data.split( "\n" );
	var statMsg;
	var statCntSym;
	var statMsgTmp;

	msoRawStat=parseInt(parsed[0]);
	sidRx=0;
	sidRx=parseInt(parsed[1]);
	if(msoRawStat < 16){
		msoConnected = 0;
		statMsgTmp = "Off";		
	}
	else
	{
		msoConnected = 1;
		switch(msoRawStat-16)
		{
			case 0: statMsgTmp = "Reset"; break;	
			case 1: statMsgTmp = "Stby";	break;	
			case 2: statMsgTmp = "Armed"; break;	
			case 3: statMsgTmp = "PrTrg F"; break;	
			case 4: statMsgTmp = "TrigWait"; break;	
			case 5: statMsgTmp = "Triggered"; break;	
			case 6: statMsgTmp = "Read Wait"; break;	
			case 7: statMsgTmp = "Reading Buffer"; break;	
			case 8: statMsgTmp = "Reading"; break;	
			case 12: statMsgTmp = "Armed."; break;	
			case 13: statMsgTmp = "Done"; break;	
			case 19: statMsgTmp = "Busy."; break;	
			case 20: statMsgTmp = "Busy'"; break;	
			case 21: statMsgTmp = "Busy:"; break;	
			default: statMsgTmp = "No MSO"; break;	
		}
	}
	if((statCnt%3)==0)statCntSym = ".";
	else if((statCnt%3)==1)statCntSym = ":";
	else statCntSym = "'";
	
	statMsg = trigCnt+" "+statCntSym+" "+statMsgTmp;
	document.getElementById("msoStat").innerHTML = "<h1>Stat: "+statMsg+"</h1>";

return sidRx;

}

function parse_data(data) {

		var array=[];
		var narray=[];
		var t1;
		var t2;
		
		dataRdy = 0;
		msoRawStat=40;

		narray = data.split("\n");
       	for (var i = 0; i < (narray.length-1); ++i){
			tarray = narray[i].split("\x09"); 		       
			t1 = (tarray[0]/1000)*vDivM0;
			if(t1>scaleTop) t1 = scaleTop;
			else if(t1<scaleBtm) t1=scaleBtm;
			a1array[i]=[i,t1];
			
			t2 = (tarray[1]/1000)*vDivM1;
			if(t2>scaleTop) t2 = scaleTop;
			else if(t2<scaleBtm) t2=scaleBtm;
			a2array[i]=[i,t2];

		    lAarray[i]=(tarray[2]);
		}
		rdBufReqSent = 0;
		dataRdy = 1;
}

