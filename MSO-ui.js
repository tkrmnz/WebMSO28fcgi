 $(document).ready(function() {
    $("#radioGS").buttonset();
	$("#radioTrg").buttonset();
	$("#radioTs").buttonset();
	$("#radioSlpA1").buttonset();
	$("#radioSlpA2").buttonset();
	$("#radioSlpLA").buttonset();
	$("#radioSlpI2C").buttonset();
	$("#radioSlpSPI").buttonset();
	$("#radioTB").buttonset();
	$("#radioVD2").buttonset();
	$("#radioDC1").buttonset();
	$("#radioDC2").buttonset();
	$("#accordion").accordion({
		autoHeight: false,
		collapsible: true,
		active: false,
	 	icons: { 'header': 'ui-icon-plus', 'headerSelected': 'ui-icon-minus' }
	 	});
	$("#accordion2").accordion({
		autoHeight: false,
		collapsible: true,
		active: false,
	 	icons: { 'header': 'ui-icon-plus', 'headerSelected': 'ui-icon-minus' }
	 	});
	
	$( "#slider-vertical1" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 6,
			value: 6,
			slide: function( event, ui ) {
				$( "#vDiv1" ).val( vDivDisp[ui.value] );
				vDivM0=vDivMult[ui.value];
				VDIV0=vDivSel[ui.value];
				$( "#vOff1" ).val( function(){
					OffsetDbl0 = ($( "#slider-vertical2" ).slider( "value" )-19)*vOffTick[ui.value];
					return  OffsetDbl0 +"mV"; 
				});
				$( "#trgA1" ).val( (100/vDivM0)*($( "#slider-verticalTrgA1" ).slider( "value" )-19)+"mV" );
				changeStat = 1;
			}
		});
	$( "#vDiv1" ).val(vDivDisp[ $( "#slider-vertical1" ).slider( "value" )] );
	//Vdiv A1
	
	$( "#slider-vertical2" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 39,
			value: 19,
			slide: function( event, ui ) {
				OffsetDbl0 = (ui.value-19)*vOffTick[$("#slider-vertical1").slider("value")];
				$( "#vOff1" ).val( OffsetDbl0+"mV");
				changeStat = 1;
			}
		});
	
	$( "#vOff1" ).val( function(){
					OffsetDbl0 = ($( "#slider-vertical2" ).slider( "value" )-19)*vOffTick[$("#slider-vertical1").slider("value")];
					return  OffsetDbl0 +"mV"; 
				}
	);
	//Voff A1
	
	$( "#slider-vertical4" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 6,
			value: 6,
			slide: function( event, ui ) {
				$( "#vDiv2" ).val( vDivDisp[ui.value] );
				vDivM1=vDivMult[ui.value];
				VDIV1=vDivSel[ui.value];
				$( "#vOff2" ).val( function(){
					OffsetDbl1 = ($( "#slider-vertical5" ).slider( "value" )-19)*vOffTick[ui.value];
					return  OffsetDbl1 +"mV"; 
				}
				);
				$( "#trgA2" ).val( (100/vDivM1)*($( "#slider-verticalTrgA2" ).slider( "value" )-19)+"mV" );
				changeStat = 1;
			}
		});
	$( "#vDiv2" ).val(vDivDisp[ $( "#slider-vertical4" ).slider( "value" )] );
	//Vdiv A2
	
	$( "#slider-vertical5" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 39,
			value: 19,
			slide: function( event, ui ) {
				OffsetDbl1 = (ui.value-19)*vOffTick[$("#slider-vertical4").slider("value")];
				$( "#vOff2" ).val( OffsetDbl1+"mV");
				changeStat = 1;
			}
		});

	$( "#vOff2" ).val( function(){
					OffsetDbl1 = ($( "#slider-vertical5" ).slider( "value" )-19)*vOffTick[$("#slider-vertical4").slider("value")];
					return  OffsetDbl1 +"mV"; 
				}
	);
	//Voff A2
	

	$( "#slider-vertical3" ).slider({
			orientation: "horizontal",
			range: "min",
			min: 0,
			max: 19,
			value: 0,
			slide: function( event, ui ) {
				$( "#timeBase" ).val( tBase[ui.value] );
				nsClkRate = nsRate[ui.value];
				$( "#wdthA1" ).val( pulseWdthCalc(WdthMdA0,nsClkRate,ui.value) );
				$( "#wdthA2" ).val( pulseWdthCalc(WdthMdA1,nsClkRate,ui.value) );
				TRIGWD0 =  pulseWdthCalcRaw(WdthMdA0,nsClkRate,ui.value);
				TRIGWD1 =  pulseWdthCalcRaw(WdthMdA1,nsClkRate,ui.value);
				
				document.getElementById("timeBase2").innerHTML = "<h1>Rate: "+tBase[ui.value]+"</h1>";
				changeStat = 1;
			}
		});
	$( "#timeBase" ).val(tBase[$( "#slider-vertical3" ).slider( "value" )] );
	document.getElementById("timeBase2").innerHTML = "<h1>Rate: "+tBase[$( "#slider-vertical3" ).slider( "value" )]+"</h1>";
	nsClkRate = nsRate[$( "#slider-vertical3" ).slider( "value" )];
	//sample Rate


	
	$( "#slider-verticalTrgA1" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 39,
			value: 19,
			slide: function( event, ui ) {
				$( "#trgA1" ).val( (100/vDivM0)*(ui.value-19)+"mV" );
				TRIGV0 = (100/vDivM0)*(ui.value-19);
				changeStat = 1;

			}
		});
		$( "#trgA1" ).val( (100/vDivM0)*($( "#slider-verticalTrgA1" ).slider( "value" )-19)+"mV" );
	//TrigV A1
	
	$( "#slider-horizontalWdthA1" ).slider({
			disabled: true,
			orientation: "horizontal",
			range: "min",
			min: 0,
			max: 255,
			value: 1,
			slide: function( event, ui ) {
				$( "#wdthA1" ).val( pulseWdthCalc(WdthMdA0,nsClkRate,ui.value) );
				TRIGWD0 =  pulseWdthCalcRaw(WdthMdA0,nsClkRate,ui.value);

				changeStat = 1;
			},
		});

		$( "#wdthA1" ).val(  pulseWdthCalc(WdthMdA0,nsClkRate,$("#slider-horizontalWdthA1" ).slider("value")));
	$( "#slider-verticalTrgA2" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 39,
			value: 19,
			slide: function( event, ui ) {
				$( "#trgA2" ).val( (100/vDivM1)*(ui.value-19)+"mV" );
				TRIGV1 = (100/vDivM1)*(ui.value-19);
				changeStat = 1;
			}
		});
		$( "#trgA2" ).val( (100/vDivM1)*($( "#slider-verticalTrgA2" ).slider( "value" )-19)+"mV" );

	//TrigV A2
	
	$( "#slider-horizontalWdthA2" ).slider({
			disabled: true,
			orientation: "horizontal",
			range: "min",
			min: 0,
			max: 255,
			value: 1,
			slide: function( event, ui ) {
				$( "#wdthA2" ).val( pulseWdthCalc(WdthMdA1,nsClkRate,ui.value) );
				TRIGWD1 =  pulseWdthCalcRaw(WdthMdA1,nsClkRate,ui.value);
				changeStat = 1;
			},
		});

		$( "#wdthA2" ).val(  pulseWdthCalc(WdthMdA1,nsClkRate,$("#slider-horizontalWdthA2" ).slider("value")));

	//Trig Width A2
	
 	showTrgSet();
	 DocRdy = 1;
  });
  
	var DC0="AC";
	var DC1="AC";
	var VDIV0="500";
	var VDIV1="500";
	var TRGCH = "A0";
	var TRIGV0 = 0;
	var TRIGV1 = 0;
	var TRSLP0 = "R";
	var TRSLP1 = "R";
	var TRLASLP = "T";
	var WdthMdA0 = "F";
	var WdthMdA1 = "F";
	var TRIGWD0 = 0;
	var TRIGWD1 = 0;
	var TRMODE0 = 0;
	var TRMODE1 = 0;
	var TRLAWD = "XXXXXXXX";
	var TRI2CWD = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
	var TRSPIWD = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
	var LAFM = 5;
	var OffsetDbl0 = 0;
	var OffsetDbl1 = 0;
	var SPIMODE = 0;
	var TrgLoop = 3;
	
	var goStat=false;
	var changeStat;
	var changeStatUpdate=false;
	var goStatPrev = false; 
	var a1array=[];
	var a2array=[];
	var lAarray=[];
	var dataRdy = 0;
	var fileNum = 0;
	var firstTime = 1;
	var dataZip = 1;
	var DocRdy = 0;
	var LaFmDisp=new Array("1.2V","1.5V","1.8V","2.5V","3.0V","3.3V/5.0V"); 
	var SpiMdDisp=new Array("Mode 0","Mode 1","Mode 2","Mode 3"); 
	var vDivDisp=new Array("5mV","10mV","20mV","50mV","100mV","200mV","500mV"); 
	var vDivMult=new Array(100,50,25,10,5,2.5,1); 
	var vDivSel=new Array("50","50","50","50","500","500","500"); 
	var vOffTick=new Array(1,2,4,10,20,40,100);
	var tBase=new Array(
		"500nS/Div",
		"1uS/Div","2uS/Div","5uS/Div",
		"10uS/Div","20uS/Div","50uS/Div",
		"100uS/Div","200uS/Div","500uS/Div",
		"1mS/Div","2mS/Div","5mS/Div",
		"10mS/Div","20mS/Div","50mS/Div",
		"100mS/Div","200mS/Div","500mS/Div",
		"1Sec/Div"
		); 
	var nsRate=new Array(
		5,10,20,50,100,200,500,1000,2000,5000,10000,20000,50000,100000,200000,500000,1000000,2000000,5000000,10000000);
		
	var autoWait=new Array(
		8,8,8,8,8,8,8,8,8,8,8,8,8,12,22,52,102,202,502,1002);
		
var sidTx=0;
var sidRx=0;
var sidErr=0;
var	sidCur=0;
		
	function setGoStat(i){
		if(i)trigCnt=0;
		goStat = i;
	}
 
 
 	function setCpl(i){
		switch(i){
			case 0x01: DC0 = "DC";	break;
			case 0x02: DC0 = "AC";	break;
			case 0x04: DC1 = "DC"; 	break;
			case 0x08: DC1 = "AC";	break;
		}
		changeStat = 1;
	}
 	function showTrgCh(){
			if(TRGCH == "A0") $( "#effect-TA1" ).show( 'drop', null, 500);
			else $( "#effect-TA1" ).hide();

			if(TRGCH == "A1") $( "#effect-TA2" ).show( 'drop', null, 500);
			else $( "#effect-TA2" ).hide();

			if(TRGCH == "LA") $( "#effect-TLA" ).show( 'drop', null, 500);
			else $( "#effect-TLA" ).hide();

			if(TRGCH == "I2C") $( "#effect-TI2C" ).show( 'drop', null, 500);
			else $( "#effect-TI2C" ).hide();

			if(TRGCH == "SPI") $( "#effect-TSPI" ).show( 'drop', null, 500);
			else $( "#effect-TSPI" ).hide();
			
			showTrgSet();

 		}

 	function setTrgCh(i){//logic not working yet
		switch(i){
			case 0x01:
				TRGCH = "A0";
			 	break;
			case 0x02:
				 TRGCH = "A1";
				 break;
			case 0x04:
				 TRGCH = "LA";
				 break;
			case 0x08:
				 TRGCH = "I2C";
				 break;
			case 0x10:
				 TRGCH = "SPI";
				 break;
		}
		changeStat = 1;
		showTrgCh();
	}

 	function setTrgSlp(i){//logic not working yet
		if(TRGCH=="A0"){
			if(i&0x02){
				WdthMdA0 = "T";
				$( "#slider-horizontalWdthA1" ).slider( "option","disabled",false);
				if(i&0x04) TRMODE0 = 1;
				else TRMODE0 = 2;
			}
			else{ 
				WdthMdA0 = "F";
				$( "#slider-horizontalWdthA1" ).slider( "option","disabled",true);
				TRMODE0 = 0;
			}

			$( "#wdthA1" ).val(  pulseWdthCalc(WdthMdA0,nsClkRate,$("#slider-horizontalWdthA1" ).slider("value")));
			TRIGWD0 =  pulseWdthCalcRaw(WdthMdA0,nsClkRate,nsClkRate,$("#slider-horizontalWdthA1" ).slider("value"));
			TRIGV0 = (100/vDivM0)*($( "#slider-verticalTrgA1" ).slider( "value" )-19);			
			if(i&0x01)TRSLP0 = "R";
			else TRSLP0 = "F";

		}
		else if(TRGCH=="A1"){
			if(i&0x02){
				WdthMdA1 = "T";
				$( "#slider-horizontalWdthA2" ).slider( "option","disabled",false);
				if(i&0x04) TRMODE1 = 1;
				else TRMODE1 = 2;
			}
			else {
				WdthMdA1 = "F";
				$( "#slider-horizontalWdthA2" ).slider( "option","disabled",true);
				TRMODE0 = 0;
			}
			$( "#wdthA2" ).val(  pulseWdthCalc(WdthMdA1,nsClkRate,$("#slider-horizontalWdthA2" ).slider("value")));
			TRIGWD1 =  pulseWdthCalcRaw(WdthMdA1,nsClkRate,$("#slider-horizontalWdthA2" ).slider("value"));
			TRIGV1 = (100/vDivM0)*($( "#slider-verticalTrgA2" ).slider( "value" )-19);			
			if(i&0x01)TRSLP1 = "R";
			else TRSLP1 = "F";

		}
		else if(TRGCH=="LA"){
			if(i&0x01)TRLASLP = "T";
			else TRLASLP = "F";
		}
		else if(TRGCH=="I2C"){TRLASLP = "T";}
		else if(TRGCH=="SPI"){TRLASLP = "T";}

		changeStat = 1;

		showTrgSet();
		DocRdy = 1;

	}

 	function setTrgLoop(i){
 		TrgLoop = i;
 	}


 	function pulseWdthCalc(trigType,clkRate,pulseWidth){
 		var i,j;
 		if(trigType=="T"){
 			j=pulseWidth*clkRate;
 			if(j<1000) i= j +"nS";
 			else if(j<1000000) i= j/1000 +"uS";
 			else if(j<1000000000) i= j/1000000 +"mS";
 			else if(j<1000000000000) i= j/1000000000 +"S";
 		}
 		else
	 		i=" ";
 		return i;
 	}

 	function pulseWdthCalcRaw(trigType,clkRate,pulseWidth){
 		var i,j;
 		if(trigType=="T"){
 			i=pulseWidth*clkRate;
 		}
 		else
	 		i=0;
 		return i;
 	}

	function setCharAt(str,index,chr) {
	    if(index > str.length-1) return str;
	    return str.substr(0,index) + chr + str.substr(index+1);
	}

	function laTWRotator(i){
		var j;
		if (i == "X") j="0";
		else if (i == "0") j="1";
		else j="X";
		
		return j;
	}

	function lafmRotator(i){
		var j;
		if (i == 0) j= 5;
		else j=i-1;

		return j;
	}

	function spimdRotator(i){
		var j;
		if (i == 3) j= 0;
		else j=i+1;

		return j;
	}

	function showTrgSet(){
		document.getElementById("trigger").innerHTML = "<h1>Trigger: "+TRGCH+" "+TRLAWD+"</h1>";
	}
	
	$(function() {
			$( "#laTWb0" ).button({text: false,	label: TRLAWD.charAt(0)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRLAWD=setCharAt(TRLAWD,0,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#laTWb1" ).button({text: false,	label: TRLAWD.charAt(1)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRLAWD=setCharAt(TRLAWD,1,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#laTWb2" ).button({text: false,	label: TRLAWD.charAt(2)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRLAWD=setCharAt(TRLAWD,2,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#laTWb3" ).button({text: false,	label: TRLAWD.charAt(3)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRLAWD=setCharAt(TRLAWD,3,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#laTWb4" ).button({text: false,	label: TRLAWD.charAt(4)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRLAWD=setCharAt(TRLAWD,4,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#laTWb5" ).button({text: false,	label: TRLAWD.charAt(5)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRLAWD=setCharAt(TRLAWD,5,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#laTWb6" ).button({text: false,	label: TRLAWD.charAt(6)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRLAWD=setCharAt(TRLAWD,6,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#laTWb7" ).button({text: false,	label: TRLAWD.charAt(7)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRLAWD=setCharAt(TRLAWD,7,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});
	});

	$(function() {
		$( "#laFm0" ).button({text: false,	label: (LaFmDisp[LAFM])})
		.click(function() {
			LAFM=lafmRotator(LAFM);
			$( this ).button( "option", {label: (LaFmDisp[LAFM])} );
			changeStat = 1;
		});
	});

	$(function() {
		$( "#spimd0" ).button({text: false,	label: (SpiMdDisp[SPIMODE])})
		.click(function() {
			SPIMODE=spimdRotator(SPIMODE);
			$( this ).button( "option", {label: (SpiMdDisp[SPIMODE])} );
			changeStat = 1;
		});
	});

	$(function() {
		$( "#I2CTWb0" ).button({text: false,	label: TRI2CWD.charAt(0)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,0,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb1" ).button({text: false,	label: TRI2CWD.charAt(1)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,1,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb2" ).button({text: false,	label: TRI2CWD.charAt(2)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,2,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb3" ).button({text: false,	label: TRI2CWD.charAt(3)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,3,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb4" ).button({text: false,	label: TRI2CWD.charAt(4)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,4,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb5" ).button({text: false,	label: TRI2CWD.charAt(5)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,5,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb6" ).button({text: false,	label: TRI2CWD.charAt(6)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,6,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb7" ).button({text: false,	label: TRI2CWD.charAt(7)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,7,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb8" ).button({text: false,	label: TRI2CWD.charAt(8)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,8,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb9" ).button({text: false,	label: TRI2CWD.charAt(9)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,9,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb10" ).button({text: false,	label: TRI2CWD.charAt(10)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,10,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb11" ).button({text: false,	label: TRI2CWD.charAt(11)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,11,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb12" ).button({text: false,	label: TRI2CWD.charAt(12)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,12,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb13" ).button({text: false,	label: TRI2CWD.charAt(13)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,13,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb14" ).button({text: false,	label: TRI2CWD.charAt(14)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,14,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb15" ).button({text: false,	label: TRI2CWD.charAt(15)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,15,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb16" ).button({text: false,	label: TRI2CWD.charAt(16)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,16,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb17" ).button({text: false,	label: TRI2CWD.charAt(17)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,17,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb18" ).button({text: false,	label: TRI2CWD.charAt(18)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,18,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb19" ).button({text: false,	label: TRI2CWD.charAt(19)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,19,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb20" ).button({text: false,	label: TRI2CWD.charAt(20)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,20,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb21" ).button({text: false,	label: TRI2CWD.charAt(21)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,21,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});


		$( "#I2CTWb22" ).button({text: false,	label: TRI2CWD.charAt(22)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,22,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb23" ).button({text: false,	label: TRI2CWD.charAt(23)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,23,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb24" ).button({text: false,	label: TRI2CWD.charAt(24)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,24,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb25" ).button({text: false,	label: TRI2CWD.charAt(25)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,25,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb26" ).button({text: false,	label: TRI2CWD.charAt(26)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,26,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb27" ).button({text: false,	label: TRI2CWD.charAt(27)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,27,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb28" ).button({text: false,	label: TRI2CWD.charAt(28)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,28,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb29" ).button({text: false,	label: TRI2CWD.charAt(29)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,29,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb30" ).button({text: false,	label: TRI2CWD.charAt(30)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,30,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#I2CTWb31" ).button({text: false,	label: TRI2CWD.charAt(31)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRI2CWD=setCharAt(TRI2CWD,31,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

	});


	$(function() {
		$( "#SPITWb0" ).button({text: false,	label: TRSPIWD.charAt(0)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,0,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb1" ).button({text: false,	label: TRSPIWD.charAt(1)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,1,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb2" ).button({text: false,	label: TRSPIWD.charAt(2)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,2,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb3" ).button({text: false,	label: TRSPIWD.charAt(3)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,3,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb4" ).button({text: false,	label: TRSPIWD.charAt(4)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,4,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb5" ).button({text: false,	label: TRSPIWD.charAt(5)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,5,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb6" ).button({text: false,	label: TRSPIWD.charAt(6)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,6,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb7" ).button({text: false,	label: TRSPIWD.charAt(7)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,7,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb8" ).button({text: false,	label: TRSPIWD.charAt(8)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,8,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb9" ).button({text: false,	label: TRSPIWD.charAt(9)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,9,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb10" ).button({text: false,	label: TRSPIWD.charAt(10)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,10,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb11" ).button({text: false,	label: TRSPIWD.charAt(11)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,11,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb12" ).button({text: false,	label: TRSPIWD.charAt(12)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,12,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb13" ).button({text: false,	label: TRSPIWD.charAt(13)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,13,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb14" ).button({text: false,	label: TRSPIWD.charAt(14)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,14,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb15" ).button({text: false,	label: TRSPIWD.charAt(15)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,15,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb16" ).button({text: false,	label: TRSPIWD.charAt(16)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,16,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb17" ).button({text: false,	label: TRSPIWD.charAt(17)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,17,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb18" ).button({text: false,	label: TRSPIWD.charAt(18)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,18,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb19" ).button({text: false,	label: TRSPIWD.charAt(19)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,19,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb20" ).button({text: false,	label: TRSPIWD.charAt(20)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,20,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb21" ).button({text: false,	label: TRSPIWD.charAt(21)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,21,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});


		$( "#SPITWb22" ).button({text: false,	label: TRSPIWD.charAt(22)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,22,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb23" ).button({text: false,	label: TRSPIWD.charAt(23)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,23,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb24" ).button({text: false,	label: TRSPIWD.charAt(24)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,24,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb25" ).button({text: false,	label: TRSPIWD.charAt(25)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,25,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb26" ).button({text: false,	label: TRSPIWD.charAt(26)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,26,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb27" ).button({text: false,	label: TRSPIWD.charAt(27)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,27,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb28" ).button({text: false,	label: TRSPIWD.charAt(28)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,28,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb29" ).button({text: false,	label: TRSPIWD.charAt(29)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,29,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb30" ).button({text: false,	label: TRSPIWD.charAt(30)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,30,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});

		$( "#SPITWb31" ).button({text: false,	label: TRSPIWD.charAt(31)})
		.click(function() {
			$( this ).button( "option", {label: laTWRotator($( this ).text())} );
			TRSPIWD=setCharAt(TRSPIWD,31,$( this ).text());
			changeStat = 1;
			showTrgSet();
		});



	});
