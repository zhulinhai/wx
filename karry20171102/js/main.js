var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	// anim_container = document.getElementById("animation_container");
	// dom_overlay_container = document.getElementById("dom_overlay_container");
	images = images||{};
	ss = ss||{};
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt) {	
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib._666();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);	

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive() {		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = document.documentElement.clientWidth , ih=document.documentElement.clientHeight;			
			// var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			var orientation = window.orientation || 90;
			// alert(orientation + 'iw :' + iw + ' ih: ' + ih);

			if(orientation == PORTRAIT){ //如果是竖屏
		
				canvas.style.width = iw +'px';
			    canvas.style.height = Math.round(iw * 646 / 1334) +'px';
			}
		}
	}
	makeResponsive();	
	fnStartAnimation();
}

var LANDSCAPE = 0; //横屏
var PORTRAIT = 90; //竖屏
var ANDROID = 1;
var IPHONE = 2;
var WINDOWS = 3;

//获取系统
/// 1:安卓  2 苹果  3 PC
function getOS()
{
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
        return 1;
    } else if (u.indexOf('iPhone') > -1) {//苹果手机
        return 2;
    } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
    }else{
        window.location.href = "index_pc.html";
        return 3;
    }
}


function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = w*sRatio+'px';
			canvas.style.height = h*sRatio+'px';
			// canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			// canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	}