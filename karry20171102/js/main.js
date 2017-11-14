var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
var carIndex =-1 ,gameMc;
var mcArr = [];

var isStop = false , isGame = false;
var bgMusic;

function init() {
	canvas = document.getElementById("canvas");
	images = images||{};
	ss = ss||{};
	bgMusic = document.getElementById('audio');
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest([p1.properties.manifest[0],p2.properties.manifest[0]]);

	
	initPage();

}

function handleFileLoad(evt) {	
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}

function handleComplete(evt) {
	$('html').one('touchstart',function(){
		bgMusic.play();
	});
	// $('.btn_music').show();
	// $('.btn_jump').show().on('clcik',function(){
	// 	handleJumpBtn();
	// });
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var queue = evt.target;
	var ssMetadata = p2.ssMetadata;
	ssMetadata = ssMetadata.concat(p1.ssMetadata);
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}

	mcArr.push(new p1.part1(),new p2.part2());
	stage = new createjs.Stage(canvas);
	stage.addChild(mcArr[0]);

	fnStartAnimation = function() {
		createjs.Ticker.setFPS(p2.properties.fps);
		createjs.Ticker.addEventListener("tick", onTick);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive() {		
		window.addEventListener('resize', resizeCanvas);
		window.addEventListener("orientationchange",hengshuping);		
		resizeCanvas();
		hengshuping();		
		function resizeCanvas() {			
			var w = p2.properties.width, h = p2.properties.height;			
			var iw = document.documentElement.clientWidth , ih=document.documentElement.clientHeight;			
			var orientation = window.orientation || 0;
			// alert(orientation + 'iw :' + iw + ' ih: ' + ih);

			if(orientation == 90 || -90){ //如果是竖屏

				canvas.style.width = iw +'px';
			    canvas.style.height = Math.round(iw * 646 / 1334) +'px';
			}
		}
	}
	makeResponsive();	
	fnStartAnimation();
}


var fullScreenWidth = 0;
//判断手机横竖屏状态： html标签图片标签id = bbgImg
function hengshuping()
{
    if(window.orientation==180||window.orientation==0) {
        // alert("竖屏状态！")
        // document.getElementById("hint").style.height=document.documentElement.clientHeight+"px";
        // document.getElementById("hint").style.width=document.documentElement.clientWidth+"px";
        document.getElementById("hint").style.display ="block";
        isStop=true;
		if(!fullScreenWidth && document.body.clientWidth > document.body.clientHeight )
			fullScreenWidth = document.body.clientWidth
    }

    if (window.orientation == 90 || window.orientation == -90) {
        //alert("横屏状态！")
        document.getElementById("hint").style.display ="none";
		if(getOS() == IPHONE && krpano){
			$('#pano').css('width',fullScreenWidth + 'px');
		}
        isStop=false;
    }
}




//计算两点间距离
function dis(p1x,p1y,p2x,p2y){
    //p2y = p2y - 8;

    p2x = p2x%360;

    if(p1x < 0)
    {
        if(p2x > 0)
        {
            p2x -= 360;
        }
    }else{
        if(p2x < 0)
        {
            p2x += 360;
        }

    }

    var _ax = p1x - p2x;
    var _ay = p1y - p2y;
    var _length = Math.sqrt(Math.pow(_ax,2)+Math.pow(_ay,2));
    if(_length<6){
        return true
    }
    return false
}

var isOpen = false;
var subIndex = 0;

function onTick(e){

	if(!isStop){
		window.scroll(0,0);
		stage.update();
		
		if(!isGame){
			return;
		}

		for(var i = 1; i < 3; i++){

			if(dis(krpano.get("hotspot[spot"+ i +"].ath"),krpano.get("hotspot[spot"+ i +"].atv"),Math.floor(krpano.get("view.hlookat")),Math.floor(krpano.get("view.vlookat")))){

				if(!isOpen){
					isOpen = true;
					carIndex = i - 1;
					subIndex = i;
					gameMc.instance.gotoAndPlay(1);
				}
			}else {
				if(subIndex == i){
					isOpen = false;
					carIndex = -1;
                    subIndex = 0;
					gameMc.instance.gotoAndPlay(12);
				}
			}
		}
	}

}


function setObject(mc){
  gameMc = mc;
  console.log(gameMc);
}

var krpano;
/*
*响应点击跳转按钮
*/
function handleJumpBtn(){
	stage.removeChildAt(0);
	stage.addChild(mcArr[1]);
	$('#pano').show();
	isGame = true;
	krpano = document.getElementById("krpanoSWFObject");
	setTimeout(function(){ 
		krpano.call("set(plugin[skin_gyro].enabled,true)");
		$('.btn_openbox').show();
		$('.btn_openbox').on('click',function(){
			handleOpenBox();
		});

	},1000);
}

/*
*响应点击留资按钮
*/
function handleOpenBox(){
	if($('._pop').is(':hidden')){
		$('._pop').show();
		$('.pop').removeClass('animated bounceOutDown');
		$('.pop').addClass('animated bounceInUp');
	}
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

var host = 'http://api.bjczxda.com/api/';
var validate = new InputUtil();


/*
*初始化页面
*/
function initPage(){

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

		/*
		*响应点击关闭留资框按钮
		*/
		$('.btn_close').on('click',function(){
			$('.pop').removeClass('animated bounceInUp');
			$('.pop').addClass('animated bounceOutDown');
			setTimeout(function(){
				$('._pop').hide();
			},1000);

		});

		/*
		*响应点击背景音乐按钮
		*/
		$('.btn_music').on('click',function(){
			if(!$(this).hasClass('off')){ //关音乐
				$(this).addClass('off');
				$('.btn_music > img').attr('src','images/icon_music_no.png');
				bgMusic.pause();
			}else { //开音乐
				$(this).removeClass('off');
				$('.btn_music > img').attr('src','images/icon_music.png');
				bgMusic.play();
			}
		});
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