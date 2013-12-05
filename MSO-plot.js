$(function () {  
	var sdata = [], cdata = [],ldata = [],mdata = [],
	  	log7data = [],log6data = [],
	  	log5data = [],log4data = [],
	  	log3data = [],log2data = [],
	  	log1data = [],log0data = [],
		totalPoints = 1000, j=0, k=0, l=0,m=0,
		laStart=-2.0,laHeight=-0.1,laGap=-0.05,
		frmTop=2,frmBtm=-2,frmLABtm=-3.25,frmLeft=0,frmRight=999,
	  	trigPosH,triPosV,curAH,curAV,curBH,curBV;
		
	var trigPosH = 500;
	var trigPosV = 0.0;
	var curAH = 110,curAV = 0.35;
	var curBH = 720,curBV = -0.85;
    var updateInterval = 30;
    var initCnt =0;
    var prevCursSel = 0;
    var CursSel = 0;
       
     var plotOptionsNone = {  
       	colors: ["#00f000","#f00080",
			"#663300",//LA
			"#f00000",
			"#ff6000",
			"#f0f000",
			"#33cc00",
			"#0033cc",
			"#9900cc",
			"#505050",
			"#a02020",//TrigPosH
			"#a02020",//TrigPosV
			"#20a020",//CurA
			"#20a020",//CurA
			"#2020a0",//CurB
			"#2020a0"//CurB
		],
	    series: { lines:{lineWidth:1},shadowSize: 0 }, // drawing is faster without shadows
        yaxis: { min: -3.25, max: 2.0,show:false},
        xaxis: { min: 0, max: 999,show: false },
		lineWidth: [0],
        grid: {hoverable: true,
        		clickable: true,
             backgroundColor: { colors: ["#000","#000"]},
			markings: [//draw grid
			  { xaxis: { from: 100, to: 100 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 200, to: 200 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 300, to: 300 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 400, to: 400 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 500, to: 500 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 600, to: 600 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 700, to: 700 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 800, to: 800 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 900, to: 900 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: 1.5, to: 1.5 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: 1.0, to: 1.0 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: 0.5, to: 0.5 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: 0, to: 0 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: -0.5, to: -0.5 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: -1.0, to: -1.0 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: -1.5, to: -1.5 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: -2, to: -2 }, color: "#202020" }
			]
        }
    };  
  
    var plotOptionsX = {  
       	colors: ["#00f000","#f00080",
			"#663300",//LA
			"#f00000",
			"#ff6000",
			"#f0f000",
			"#33cc00",
			"#0033cc",
			"#9900cc",
			"#505050",
			"#a02020",//TrigPosH
			"#a02020",//TrigPosV
			"#20a020",//CurA
			"#20a020",//CurA
			"#2020a0",//CurB
			"#2020a0"//CurB
		],
		crosshair: { mode: "x", color:"#808080"},   
	    series: { lines:{lineWidth:1},shadowSize: 0 }, // drawing is faster without shadows
        yaxis: { min: -3.25, max: 2.0,show:false},
        xaxis: { min: 0, max: 999,show: false },
		lineWidth: [0],
        grid: {hoverable: true,
        		clickable: true,
             backgroundColor: { colors: ["#000","#000"]},
			markings: [//draw grid
			  { xaxis: { from: 100, to: 100 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 200, to: 200 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 300, to: 300 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 400, to: 400 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 500, to: 500 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 600, to: 600 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 700, to: 700 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 800, to: 800 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 900, to: 900 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: 1.5, to: 1.5 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: 1.0, to: 1.0 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: 0.5, to: 0.5 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: 0, to: 0 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: -0.5, to: -0.5 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: -1.0, to: -1.0 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: -1.5, to: -1.5 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: -2, to: -2 }, color: "#202020" }
			]
        }
    };  
    var plotOptionsY = {  
       	colors: ["#00f000","#f00080",
			"#663300",//LA
			"#f00000",
			"#ff6000",
			"#f0f000",
			"#33cc00",
			"#0033cc",
			"#9900cc",
			"#505050",
			"#a02020",//TrigPosH
			"#a02020",//TrigPosV
			"#20a020",//CurA
			"#20a020",//CurA
			"#2020a0",//CurB
			"#2020a0"//CurB
		],
		crosshair: { mode: "y", color:"#808080"},   
	    series: { lines:{lineWidth:1},shadowSize: 0 }, // drawing is faster without shadows
        yaxis: { min: -3.25, max: 2.0,show:false},
        xaxis: { min: 0, max: 999,show: false },
		lineWidth: [0],
        grid: {hoverable: true,
        		clickable: true,
             backgroundColor: { colors: ["#000","#000"]},
			markings: [//draw grid
			  { xaxis: { from: 100, to: 100 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 200, to: 200 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 300, to: 300 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 400, to: 400 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 500, to: 500 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 600, to: 600 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 700, to: 700 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 800, to: 800 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 900, to: 900 }, yaxis: { from: -3.2, to: 2 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: 1.5, to: 1.5 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: 1.0, to: 1.0 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: 0.5, to: 0.5 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: 0, to: 0 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: -0.5, to: -0.5 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: -1.0, to: -1.0 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: -1.5, to: -1.5 }, color: "#202020" },
			  { xaxis: { from: 0, to: 999 }, yaxis: { from: -2, to: -2 }, color: "#202020" }
			]
        }
    };  

	var plotOptions = plotOptionsNone;
	
    var plot = $.plot($("#plotarea"), [getA1Data(),getA2Data(),
    	getLogData(0),getLogData(1),
    	getLogData(2),getLogData(3),
    	getLogData(4),getLogData(5),
    	getLogData(6),getLogData(7),
    	getCurH(trigPosH),getCurV(trigPosV),
    	getCurH(curAH),getCurV(curAV),
    	getCurH(curBH),getCurV(curBV)
    	], plotOptions);
 
    var updateLegendTimeout = null;
    var latestPosition = null;
    var hoverOn = 0;
    var startTime = new Date().getTime();



    function updateLegend() {
        updateLegendTimeout = null;
        
        var pos = latestPosition;
        var axes = plot.getAxes();
        
        if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max ||
        	pos.y < axes.yaxis.min || pos.y > axes.yaxis.max)
            return;
				if(hoverOn) hoverOn = 0;
				else hoverOn = 1;

			switch(cursSel){
				case 1:
					trigPosH = pos.x.toFixed(0);
				break;
				case 2:
					trigPosV = pos.y.toFixed(2);
				break;
				case 3:
					curAH = pos.x.toFixed(0);
				break;
				case 4:
					curAV = pos.y.toFixed(2);
				break;
				case 5:
					curBH = pos.x.toFixed(0);
				break;
				case 6:
					curBV = pos.y.toFixed(2);
				break;
			}

				changeStat = 1;
				reDraw = 1;
				
				if(!goStat){
					plot = $.plot($("#plotarea"), [getA1Data(),getA2Data(),
			    	getLogData(0),getLogData(1),
			    	getLogData(2),getLogData(3),
			    	getLogData(4),getLogData(5),
			    	getLogData(6),getLogData(7),
			    	getCurV(trigPosV),getCurH(trigPosH),
			    	getCurH(curAH),getCurV(curAV),
			    	getCurH(curBH),getCurV(curBV)
			    	], plotOptions);
		 		}
    }
    function updateLegend2() {
        updateLegendTimeout = null;
        
        var pos = latestPosition;
        var axes = plot.getAxes();
        if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max ||
        	pos.y < axes.yaxis.min || pos.y > axes.yaxis.max)
            return;

			switch(cursSel){
				case 1:
				case 3:
				case 5:
					plotOptions = plotOptionsX;
					hoverOn = 0;
				break;
				case 2:
				case 4:
				case 6:
					plotOptions = plotOptionsY;
					hoverOn = 0;
				break;
				default:
					plotOptions = plotOptionsNone;
					hoverOn = 1;
				break;				
			}


			changeStat = 1;
			reDraw = 1;
	
	if(prevCursSel != cursSel){
	
			if(!goStat){
				plot = $.plot($("#plotarea"), [getA1Data(),getA2Data(),
		    	getLogData(0),getLogData(1),
		    	getLogData(2),getLogData(3),
		    	getLogData(4),getLogData(5),
		    	getLogData(6),getLogData(7),
		    	getCurH(trigPosH),getCurV(trigPosV),
		    	getCurH(curAH),getCurV(curAV),
		    	getCurH(curBH),getCurV(curBV)
		    	], plotOptions);
	 		}
	 	}
	 	prevCursSel = cursSel;
	 	
	 	}
    


    $("#plotarea").bind("plotclick",  function (event, pos, item) {
        latestPosition = pos;
        if (!updateLegendTimeout)
            updateLegendTimeout = setTimeout(updateLegend, 50);
    });
 
    $("#plotarea").bind("plothover",  function (event, pos, item) {
        latestPosition = pos;
        if (!updateLegendTimeout)
            updateLegendTimeout = setTimeout(updateLegend2, 50);
    });

 
    function deltaABH() {
 		var i,j,dt;

	    dt = (Math.abs(curAH-curBH));
		j=dt*nsClkRate;
		if(j<1000) i= j +"nS";
		else if(j<1000000) i= j/1000 +"uS";
		else if(j<1000000000) i= j/1000000 +"mS";
		else if(j<1000000000000) i= j/1000000000 +"S";

 		return i;
    }
 
    function curTH() {
 		var i,j,dt;

	    dt = (Math.abs(trigPosH));
		j=dt*nsClkRate;
		if(j<1000) i= j +"nS";
		else if(j<1000000) i= j/1000 +"uS";
		else if(j<1000000000) i= j/1000000 +"mS";
		else if(j<1000000000000) i= j/1000000000 +"S";

 		return i;
    }
 
    function curAHPos() {
 		var i,j,dt;

	    dt = (Math.abs(curAH));
		j=dt*nsClkRate;
		if(j<1000) i= j +"nS";
		else if(j<1000000) i= j/1000 +"uS";
		else if(j<1000000000) i= j/1000000 +"mS";
		else if(j<1000000000000) i= j/1000000000 +"S";

 		return i;
    }
    function curBHPos() {
 		var i,j,dt;

	    dt = (Math.abs(curBH));
		j=dt*nsClkRate;
		if(j<1000) i= j +"nS";
		else if(j<1000000) i= j/1000 +"uS";
		else if(j<1000000000) i= j/1000000 +"mS";
		else if(j<1000000000000) i= j/1000000000 +"S";

 		return i;
    }
 
    function deltaABV() {
	    var i,j,res,dv,dvA,dvB;
	    dv = curAV-curBV;
	    dvA = (Math.abs(dv * (500/vDivM0)*2)).toFixed(1);
		if(dvA<1000.0) i= dvA +"mV";
		else i= (dvA/1000.0) +"V";
	    dvB = (Math.abs(dv * (500/vDivM1)*2)).toFixed(1);
		if(dvB<1000.0) j= dvB +"mV";
		else j= (dvB/1000.0) +"V";
	    res = i+"  "+j;
 		return res;
    }
 


    function getA1Data() {
	    var res = [];
       	res = a1array;
 		return res;
    }
  
    function getA2Data() {
	    var res = [];
		res = a2array;
	    return res;
    }
 

    function calcLogData() {
		var y = [];
		var k;

       	for(var j=0; j<= lAarray.length; ++j){
			for (var i = 0; i < 8; ++i){
				if(lAarray[j] & (0x01<<i))
					 k = laStart + (laGap*i)+laGap+(laHeight*i);
				else
					 k = laStart + (laGap*i)+laGap+(laHeight*i)+laHeight;
				
				switch(i){
				  case 0: log0data[j]=k;break;
				  case 1: log1data[j]=k;break;
				  case 2: log2data[j]=k;break;
				  case 3: log3data[j]=k;break;
				  case 4: log4data[j]=k;break;
				  case 5: log5data[j]=k;break;
				  case 6: log6data[j]=k;break;
				  case 7: log7data[j]=k;break;
  				} 	 

			}
   		}
    }

    function getLogData(k) {
        var res = [];
        var tres = [];
        switch(k){
        	case 0: tres = log0data; break;
        	case 1: tres = log1data; break;
        	case 2: tres = log2data; break;
        	case 3: tres = log3data; break;
        	case 4: tres = log4data; break;
        	case 5: tres = log5data; break;
        	case 6: tres = log6data; break;
        	case 7: tres = log7data; break;
        	
        }
		if(dataZip==1){
	        res.push([0, tres[0]]);
	        for (var i = 1; i < tres.length; ++i){
	            if(tres[i]!=tres[i-1]){
	            	res.push([i, tres[i-1]]);
	            	res.push([i+1, tres[i]]);
				}
			}
           	res.push([i-1, tres[i-1]]);
		}
		else{
	        for (var i = 0; i < tres.length; ++i)
	            res.push([i, tres[i]]);
		}
		return res;
	}

	function getCurH(i){
        var res = [];
        var j = 7;
        frmBtm = laStart + (laGap*j)+laGap+(laHeight*j)+laHeight;
       	res.push([i, frmBtm]);
       	res.push([i, frmTop]);
		return res;
	}

	function getCurV(i){
        var res = [];
       	res.push([frmLeft,i]);
       	res.push([frmRight,i]);
		return res;
	}

	
	function getDataFile(){
		sidTx=(new Date().getTime()-startTime);
		fileNm = "/fcgi-bin/tmp/msodata"+sidRx+".csv?sid="+ sidRx;//fcgi
		makeRequest(fileNm,1);
	}
	
  

	function MsoConnect(Cnct){
		var Cncs;
		if(Cnct=="on")Cncs="C";
		else Cncs = "Q";

		sidTx=(new Date().getTime()-startTime);
		$.ajax({
		  type: 'GET',
			url: "/fcgi-bin/mso28ctl.fcgi",//fcgi
			data: "i="+Cncs+"&sid="+ sidTx,
		});
	}

	function MsoStat(){
		dataReceived = 0;
	 	sidTx=(new Date().getTime()-startTime);

		if((goStatPrev)&&((msoRawStat==28)||(msoRawStat==27)
				||(msoRawStat==36)||(msoRawStat==37)))
		 	fileNm = "/fcgi-bin/mso28ctl.fcgi?sid="+sidCur+"&i=t";//fcgi 

		else if((goStatPrev)&&(msoRawStat==35))
			fileNm = "/fcgi-bin/mso28ctl.fcgi?sid="+sidRx+"&i=t"; //fcgi
		else fileNm = "/fcgi-bin/mso28ctl.fcgi?sid="+sidTx+"&i=t"; //fcgi

		makeRequest(fileNm,0);


	}

	function MsoReadBuffer(){
		sidTx=(new Date().getTime()-startTime);
		$.ajax({
		  type: 'GET',
		  url: "/fcgi-bin/mso28ctl.fcgi",//fcgi
		  data: "sid="+sidTx+"&i=B",
		});
	}


	function MsoInit(){
		sidTx=(new Date().getTime()-startTime);
		$.ajax({
		  type: 'GET',
		  url: "/fcgi-bin/mso28ctl.fcgi",//fcgi
		  data: "sid="+sidTx+"&i=I",
		});
	}
	
	function MsoArmOld(i){
		var outMsg;
	//	alert(TRSPIWD);
	sidTx=(new Date().getTime()-startTime);

	if(i=='A'){
		outMsg = "sid="+sidTx+"&TSAMP="+nsClkRate+
		"&VDIV0="+VDIV0+
		"&VDIV1="+VDIV1+
		"&VOFF0="+OffsetDbl0+
		"&VOFF1="+OffsetDbl1+
		"&ACDC0="+DC0+
		"&ACDC1="+DC1+
		"&LAFM="+LAFM+
		"&TRIGV0="+TRIGV0+
		"&TRIGV1="+TRIGV1+
		"&TRSLP0="+TRSLP0+
		"&TRSLP1="+TRSLP1+
		"&TRIGWD0="+TRIGWD0+
		"&TRIGWD1="+TRIGWD1+
		"&TRMODE0="+TRMODE0+
		"&TRMODE1="+TRMODE1+
		"&TRLASLP="+TRLASLP+
		"&TRPOS="+trigPosH+
		"&TRGCH="+TRGCH+
		"&TRLAWD="+TRLAWD+
		"&TRI2CWD="+TRI2CWD+
		"&TRSPIWD="+TRSPIWD+
		"&SPIMODE="+SPIMODE+
		"&i="+i;
	}
	else{
		outMsg = "sid="+sidTx+"&i="+i;
	}

	if((i=='A')||(i=='a'))sidCur=sidTx;

	$.ajax({
		  type: 'GET',
		  url: "/fcgi-bin/mso28ctl.fcgi",//fcgi
		  data: outMsg,
		});
	}


	function MsoArm(i){

	dataReceived = 0;
	var outMsg;
	sidTx=(new Date().getTime()-startTime);
	if(i=='A'){
		outMsg = "/fcgi-bin/mso28ctl.fcgi?sid="+sidTx+
		"&TSAMP="+nsClkRate+
		"&VDIV0="+VDIV0+
		"&VDIV1="+VDIV1+
		"&VOFF0="+OffsetDbl0+
		"&VOFF1="+OffsetDbl1+
		"&ACDC0="+DC0+
		"&ACDC1="+DC1+
		"&LAFM="+LAFM+
		"&TRIGV0="+TRIGV0+
		"&TRIGV1="+TRIGV1+
		"&TRSLP0="+TRSLP0+
		"&TRSLP1="+TRSLP1+
		"&TRIGWD0="+TRIGWD0+
		"&TRIGWD1="+TRIGWD1+
		"&TRMODE0="+TRMODE0+
		"&TRMODE1="+TRMODE1+
		"&TRLASLP="+TRLASLP+
		"&TRPOS="+trigPosH+
		"&TRGCH="+TRGCH+
		"&TRLAWD="+TRLAWD+
		"&TRI2CWD="+TRI2CWD+
		"&TRSPIWD="+TRSPIWD+
		"&SPIMODE="+SPIMODE+
		"&i="+i;
	}
	else{
		outMsg = "/fcgi-bin/mso28ctl.fcgi?sid="+sidTx+"&i="+i;
	}

	if((i=='A')||(i=='a'))sidCur=sidTx;

	makeRequest(outMsg,0);

	}

	function MsoCplA(i){
		//alert('test5');
		sidTx=(new Date().getTime()-startTime);		
		$.ajax({
		  type: 'GET',
		  url: "/fcgi-bin/mso28ctl.fcgi",//fcgi
		  data: "&sid="+sidTx+"&DC0="+i,
		});
	}

	function MsoCplB(i){
		sidTx=(new Date().getTime()-startTime);
		$.ajax({
		  type: 'GET',
		  url: "/fcgi-bin/mso28ctl.fcgi",//fcgi
		  data: "sid="+sidTx+"DC1="+i,
		});
	}

	function loop2(){

		switch(currState){
			case msoState.waitMso:
				if(!statReqSent) nextState = msoState.chkMso;
				else{
					if(dataReceived ==1){
						if(msoRawStat != 31)//found MSO(1)	
							{
							if(msoRawStat == 22)
								nextState = msoState.initMso;
							else
								nextState = msoState.ncMso;
							}
						else{//No MSO(31) check again
							nextState = msoState.chkMso;
							statReqSent = 0;//clears statReq
						}
					}
					else //data not rdy
						nextState = msoState.waitMso;
				}
				break;

			case msoState.chkMso:
				nextState = msoState.waitMso;
				break;

			case msoState.initMso:
				nextState = msoState.stbyMso;
				break;

			case msoState.ncMso:
				if(dataReceived) nextState = msoState.stbyMso;
				else nextState = msoState.ncMso;
				break;

			case msoState.stbyMsoOld:
				if((!statReqSent)&&(!rdBufReqSent)&&(msoRawStat!=35)) 
					nextState = msoState.statReqMso;
				else{
					if(dataReceived){
						if((msoRawStat == 31)&&(dataReceived ==1))
							nextState = msoState.chkMso;//trap MSO disconnect (31)
						else{
							if(!msoConnected) //<16 
								nextState = msoState.ncMso;//trap MSO connected but off (<16)
							else{//MSO On
								if(goStat && !goStatPrev && !dataRdy){
									if(TrgLoop == 0){
										setGoStat(false);
										TrgLoop = 1;	
										$("#radio4").attr("checked",false).button("refresh");
										$("#radio5").attr("checked",true).button("refresh");
									}
									else{
										if(changeStat)								
											nextState = msoState.armMso;
										else
  											nextState = msoState.reArmMso;
										
										if(TrgLoop == 1) 
											TrgLoop = 0;
									}
								}//on Go button 
								else if(!goStat && goStatPrev) nextState = msoState.stopMso;
								else if((goStat && goStatPrev) && ((msoRawStat-16)==1) && (rdBufReqSent==0)) nextState = msoState.reArmMso;//17
								else if((goStat && goStatPrev) && ((msoRawStat-16)==19)) nextState = msoState.statReqMso;//35
								else if((goStat && goStatPrev) && ((msoRawStat-16)==20)) {alert("36"); nextState = msoState.reArmMso;}//36
								else if((goStat && goStatPrev) && ((msoRawStat-16)==13)) nextState = msoState.getData;//29
								else {
									if(goStat && goStatPrev && (TrgLoop == 6) && (statCnt > autoWait[$( "#slider-vertical3" ).slider( "value" )]))
										nextState = msoState.forceCapMso;
									else
										nextState = msoState.statReqMso;
								}
							}//MSO On
						}//MSO Connected
					}//Data Received
					else{
						nextState = msoState.stbyMso;
					}
				}
				break;

			case msoState.stbyMso:
				if((!statReqSent)&&(!rdBufReqSent)) 
					nextState = msoState.statReqMso;//statReq queue empty, send statReq
				else{
					if(dataReceived){
						if(msoRawStat == 31)
							nextState = msoState.chkMso;//trap MSO disconnect(31)
						else{//not 31
							if(!msoConnected) 
								nextState = msoState.ncMso;//trap MSO off(<16)
							else{//MSO On
					 			if(goStat && !goStatPrev){//on Go button
									if(TrgLoop == 0){
										setGoStat(false);
										TrgLoop = 1;	
										$("#radio4").attr("checked",false).button("refresh");
										$("#radio5").attr("checked",true).button("refresh");
									}//TrigLoop
									else{
										if(changeStat)								
											nextState = msoState.armMso;
										else
  											nextState = msoState.reArmMso;
									
										if(TrgLoop == 1) 
											TrgLoop = 0;
									}//else TrigLoop
								}//on Go button 
								else if(!goStat && goStatPrev) nextState = msoState.stopMso; //on Stop Button
								else if(goStat && goStatPrev) //trig Normal loop
									{
										if ((msoRawStat==17) && (!rdBufReqSent)) nextState = msoState.reArmMso;//17
										else if (msoRawStat==35) nextState = msoState.statReqMso;//35
										else if (msoRawStat==36) nextState = msoState.statReqMso;//36
										else if (msoRawStat==29) nextState = msoState.getData;//29
									//	else if((TrgLoop == 6) && (statCnt > autoWait[$( "#slider-vertical3" ).slider( "value" )]))
									//		nextState = msoState.forceCapMso; //auto trigger
									//	else if (msoRawStat==27) nextState = msoState.statReqMso;//27
										else if ((msoRawStat==28) && (!statReqSent)) nextState = msoState.statReqMso;//28
										else nextState = msoState.statReqMso;
									}
								else //stopped
									{
										if(msoRawStat != 17) 
											nextState = msoState.stopMso;
										else 
											nextState = msoState.statReqMso;
									}
							}//MSO On
						}//MSO Connected
					}//Data Received
					else{
						nextState = msoState.stbyMso;
					}//dataReceived not rdy, keep waiting
				}//statReq waiting for data
				break;
			case msoState.statReqMso:
				nextState = msoState.stbyMso;
				break;
			case msoState.armMso:
				nextState = msoState.stbyMso;
				break;
			case msoState.stopMso:
				nextState = msoState.stbyMso;
				break;
			case msoState.forceCapMso:
				nextState = msoState.stbyMso;
				break;
			case msoState.rbMso:
				nextState = msoState.stbyMso;
				break;
			case msoState.reArmMso:
				nextState = msoState.stbyMso;
				break;
			case msoState.getData:
				nextState = msoState.statReqMso;
				break;
			case msoState.wTrigMso:
				break;
			case msoState.triggedgMso:
				break;
		}
		
		
		switch(nextState){
			case msoState.chkMso:

				MsoStat();
				statReqSent = 1;
				updateInterval = 50;
			break;
			case msoState.waitMso:
				goStatPrev = 0;
				rdBufReqSent = 0;
				updateInterval = 50;
			break;

			case msoState.initMso:
				statReqSent = 0;
				MsoInit();
				msoInitStat = 1;
				changeStat = 1;
				statReqSent = 0;
				updateInterval =1000;//1000
				break;
			case msoState.ncMso:
				MsoConnect("on");
				changeStat = 1;
				statReqSent = 0;
				trigCnt = 0;
				drawCnt = 0;
				statCnt = 0;
				updateInterval =500;//500
				break;
			case msoState.stbyMso:
				if(goStat)
					updateInterval = 10;//20
				else
					updateInterval = 50;//20
				break;
			case msoState.statReqMso:
				statCnt++;
				MsoStat();
				statReqSent = 1;
				if(goStat)
					updateInterval = 10;//20
				else
					updateInterval = 50;//20
				break;
			case msoState.armMso:
				MsoArm('A');
				goStatPrev = 1;
				changeStat = 0;
				statReqSent = 1;
				rdBufReqSent = 0;
				trigCnt = 0;
				drawCnt = 0;
				statCnt = 0;	
				updateInterval = 50;//70
				break;
			case msoState.stopMso:
				MsoArm('F');
				goStatPrev = 0;
				rdBufReqSent=0;
				statReqSent = 0;
				updateInterval = 10;
				break;
			case msoState.forceCapMso:
				MsoArm('X');
				statCnt = 0;
				updateInterval = 10;
				statReqSent = 1;
				break;
			case msoState.rbMso:
				MsoReadBuffer();
				rdBufReqSent = 1;
				updateInterval = 10;
				break;
			case msoState.reArmMso:
				MsoArm('a');
				goStatPrev = 1;
				statReqSent = 1;
				rdBufReqSent = 0;
				updateInterval = 20;//70
				break;
			case msoState.getData:
				getDataFile();
				rdBufReqSent=0;
				statReqSent = 0;
				statCnt = 0;
				rdBufReqSent = 1;
				trigCnt++;
				updateInterval = 10;//20

				break;

			case msoState.wTrigMso:
				break;
			case msoState.triggedgMso:
				break;
		}
		trigPosV = 	($( "#slider-verticalTrgA1" ).slider( "value" )-19)/10;

		if(goStat){
			if(dataRdy == 1){
		  	calcLogData();
			plot.setData([getA1Data(),getA2Data(),
		    	getLogData(0),getLogData(1),
		    	getLogData(2),getLogData(3),
		    	getLogData(4),getLogData(5),
		    	getLogData(6),getLogData(7),
			getCurH(trigPosH),getCurV(trigPosV),
			getCurH(curAH),getCurV(curAV),
			getCurH(curBH),getCurV(curBV)
			]);
	        plot.draw();	
			dataRdy = 0;
	        drawCnt++;
	       	}
		}//goStat				


	currState = nextState;	
	setTimeout(loop2,updateInterval);
	}


	window.onload=loop2; 



}
);
