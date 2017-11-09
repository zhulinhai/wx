var canvas, stage;
// function init() {
// 	createjs.MotionGuidePlugin.install();
// 	canvas = document.getElementById("canvas");
// 	stage = new createjs.Stage(canvas);//创建stage
// 	createjs.Ticker.setFPS(30);//设置帧频
//     createjs.Ticker.addEventListener("tick", stage);//创建全局舞台刷新
//     var light = new lib.fly();//创建我们在animateCC中的资源
//     light.x = 250;
//     light.y = 700;
// 	stage.addChild(light);//把资源放到舞台上
// }

var provinces,cities,dealers;
var host = 'http://api.bjczxda.com/api/';
var validate = new InputUtil();
var INITWIDTH = 1338;
var INITHEIGHT = 622;

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

function init() {
	 var w =  document.documentElement.clientWidth;
	 var h = document.documentElement.clientHeight;
	// load();
	// canvas = document.getElementById("canvas");
	// images = images||{};
	// ss = ss||{};
	// var loader = new createjs.LoadQueue(false);
	// loader.addEventListener("fileload", handleFileLoad);
	// loader.addEventListener("complete", handleComplete);
	// loader.loadManifest(lib.properties.manifest);
	alert(devicePixelRatio + ' ' + document.documentElement.style.fontSize + ' w:' + w + ' h:' + h + ' pw: ' + $('.pop').width() + ' ph:'+ $('.pop').height());
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
	
	//Registers the "tick" event listener.

	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();
		function resizeCanvas(){
		    stageWidth =  document.documentElement.clientWidth;
		    stageHeight = document.documentElement.clientHeight;
		    stageScale = stageWidth/(INITWIDTH/2);
		    canvas.style.width = INITWIDTH/2*stageScale + 'px';
		    canvas.style.height = INITHEIGHT / 2 * stageScale + 'px';
		    canvas.style.left = 0 + 'px';
		    canvas.style.top =0+ 'px';
		}
		// resizeCanvas();
		//宽度自适应	
		// function resizeCanvas() {			
		// 	var w = lib.properties.width, h = lib.properties.height;			
		// 	var iw = window.innerWidth, ih=window.innerHeight;			
		// 	var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		// 	if(isResp) {                
		// 		if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
		// 			sRatio = lastS;                
		// 		}				
		// 		else if(!isScale) {					
		// 			if(iw<w || ih<h)						
		// 				sRatio = Math.min(xRatio, yRatio);				
		// 		}				
		// 		else if(scaleType==1) {					
		// 			sRatio = Math.min(xRatio, yRatio);				
		// 		}				
		// 		else if(scaleType==2) {					
		// 			sRatio = Math.max(xRatio, yRatio);				
		// 		}			
		// 	}			
		// 	canvas.width = w*pRatio*sRatio;			
		// 	canvas.height = h*pRatio*sRatio;
		// 	canvas.style.width =  w*sRatio+'px';				
		// 	canvas.style.height = h*sRatio+'px';
		// 	// canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
		// 	// canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
		// 	stage.scaleX = pRatio*sRatio;			
		// 	stage.scaleY = pRatio*sRatio;			
		// 	lastW = iw; lastH = ih; lastS = sRatio;		
		// }
	}
	makeResponsive(false,'both',false,1);	
	fnStartAnimation();
	load();
}



function load(){

		$.getJSON('data.json', function(json) {
				/*optional stuff to do after success */
				provinces = json.provinces;
				cities = json.cities;
				dealers = json.dealers;

				$("#province").empty();
				var option = '<option value="省">省</option>';
				for(var i = 0; i < provinces.length; i++){
					var p = provinces[i];
					option += '<option value="'+ p.province +'">'+ p.province +'</option>';
				}
				$("#province").html(option);
		});

		//省、市、经销商三级联动
		$("#province").on('change',function(){
			var selected = $(this).val();
			$("#city").empty();
		    $("#city").html('<option value="市">市</option>');
		    $('#dealer').empty();
		    $('#dealer').html('<option value="经销商">经销商</option>');
			 if(selected !='省'){
		          for(var i = 0; i < cities.length; i++){
		          	   var city = cities[i];
		              if(city.province == $(this).val())
		                  $("#city").append('<option value="'+ city.city +'">'+ city.city +'</option>');
		          }
		    }
		});

		//市、经销商二级联动
		$("#city").on('change',function(){
			var selected = $(this).val();
		 	
		 	$("#dealer").empty();
		  	$("#dealer").append('<option value="经销商">经销商</option>');
			
			if(selected !='市'){
		          for(var i = 0; i < dealers.length; i++){
		          	   var dealer = dealers[i];
		              if(dealer.city == $(this).val())
		                  $("#dealer").append('<option value="'+ dealer.dealer +'">'+ dealer.dealer +'</option>');
		          }
		    }
		});

		// 响应点击提交信息
		$('.submit').on('click',function(e){
			submit();
		});

		resize();
}

function resize(){
    //调整留资框
	// var scale = document.body.clientWidth / 375;
	// var popH = $('.pop').height();
	// var popT = parseInt($('.pop').css('margin-top'));
	// $('.pop').css('transform','scale(' + scale + ','+ scale + ')');
	// $('.pop').css('margin-top', (popT + (popH * (scale - 1))/2 ) +'px');
	// alert('width: ' + document.body.clientWidth + ' height: ' + document.body.clientHeight);
}

/*
*提交用户资料
*/
function submit(){

	    var name = $('input[name="name"]').val();
	    var mobile = $('#mobile').val();
	    var carType = $('#car_type').val();  //client_ip 填充车型
	    var province = $('select[name="province"]').val();
	    var city = $('select[name="city"]').val();
	    var dealer = $('select[name="dealer"]').val();
	    var allow = 1;

	    if(validate.isEmpty(name)){
	        alert('姓名不能为空');
	        return false;
	    }
	    if(validate.isEmpty(mobile)){
	        alert('手机号不能为空');
	        return false;
	    }
	    if(!validate.isMobile(mobile)){
	        alert('请输入手机号');
	        return false;
	    }
	    if(carType == '车型'){
	        alert('请选车型');
	        return false;
	    }
	    if(province == '省'){
	        alert('请选择省');
	        return false;
	    }
	    if(city == '市'){
	        alert('请选择市');
	        return false;
	    }
	    if(dealer == '经销商'){
	        alert('请选择经销商');
	        return false;
	    }
	    
	    var datas = $('form:first').serialize() + '&flag=KARRY&allow=' + allow;

	    $.ajax({
            type:'POST',
            url: host + 'h5/saveClient',
            data : datas,
            success:function(json){
                var data = json.data;
                if(json.success){
                    alert( '报名试驾成功');
                }else{
                    alert('重复留资!');
                }
            },
            error:function(e){
    
              if(e.responseJSON) {
              	var emsg = e.responseJSON.message;
              	if(emsg.indexOf('Duplicate entry') != -1) {
              		alert('重复留资!');
              	}else 
              	  	alert(emsg);
              }else {
              	alert('Error');
              }
                
            }
        });
}