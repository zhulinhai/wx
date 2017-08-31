/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-08-31 16:58:01
 * @version $Id$
 */

    var player_1, player_2;
	var STANDARD_WIDTH = 750;
	// var STANDARD_HEIGHT = 1206;
	var STANDARD_HEIGHT = 1206;
	var scale = STANDARD_WIDTH/STANDARD_HEIGHT;
   
    //经销商数据
	var provinces,cities,dealers;
	
	/*
	 *开始加载
	 */
    Pace.once('start',function(){
        
        //loading 百分比显示
        loadInterval = setInterval(function(){
            var load = $('.pace-progress').attr('data-progress-text');
            $('.percent').html(load);
        },100);

        //初始化经销商列表数据
	    //并初始化省份下拉列表
    	$.getJSON('data.json',function(json){
			provinces = json.provinces;
			cities = json.cities;
			dealers = json.dealers;

			$('select[name="province"]').empty();
			var option = '<option value="省">省</option>';
			for(var i = 0; i < provinces.length; i++){
				var p = provinces[i];
				option += '<option value="'+ p.province +'">'+ p.province +'</option>';
			}
			$('select[name="province"]').html(option);
		});

        
    });


    /**
     * 完成加载
     */
    Pace.once('hide', function(e){

    	initPage();
    	
    	if(isVideoCanAutoPlay()){//可以自动播放
    		$('.percent').css('visibility','hidden');
   //  		setTimeout(function(){
	  //   		$('#loading').hide();
			// 	player_1.play();
			// },1000);
			$('.off_clock').css('display','block');
    		$('.off_clock').click(function(){
    			$('#loading').hide();
    			player_1.play();
    		});
    	}else{//不能自动播放时  			
    		$('.percent').css('visibility','hidden');
    		$('.off_clock').css('display','block');
    		$('.off_clock').click(function(){
    			$('#loading').hide();
    			player_1.play();
    		});
    	}
    });

    function initPage(){

	   player_1 = document.getElementById('video_1');
       player_2 = document.getElementById('video_2');	

		//也可以在这个事件触发后播放一次然后暂停（这样以后视频会处于加载状态，为后面的流畅播放做准备）
		document.addEventListener("WeixinJSBridgeReady", function (){ 
			alert(111);
		    player_1.play();
		    player_1.pause();
		}, false);
    }


	/**
	 * [multipleDisplayAdapter description]
	 * 基于iphone 6屏幕分辨率375 * 603 进行全屏适配算法
	 * @return 
	 */
	function multipleDisplayAdapter(){
		var videos = document.getElementsByClassName('video');
		var bodyW = document.body.clientWidth;
		var bodyH = document.body.clientHeight;
	 	var height = bodyW/scale;
		for(var i =0; i < videos.length; i++){
			var video = videos[i];
			if(height >= bodyH){
	            video.style.width = bodyW + 'px';
	            video.style.height = height + 'px';
	            video.style.top = (bodyH-height) + 'px';
	        }else {
	            video.style.height = bodyH + 'px';
	            video.style.width = bodyH * scale + 'px';
	            video.style.left = (bodyW - scale * bodyH)/2 + 'px';
	        }
		}
	}














function c() {
	var t = navigator.userAgent,
		i = !! t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	return i
}
function l() {
	var t = navigator.userAgent;
	return "MicroMessenger" == t.match(/MicroMessenger/i)
}
function f() {
	var t = navigator.userAgent;
	return "QQ/" == t.match(/QQ\//i)
}
function p() {
	var t = window.navigator.userAgent.toLowerCase(),
		i = "";
	if (t.indexOf("iphone") >= 0) return i = t.indexOf("os 10") >= 0 ? "ios10s" : t.indexOf("os 9") >= 0 ? "ios9s" : t.indexOf("os 8") >= 0 ? "ios8" : "iosOther"
}

function isVideoCanAutoPlay() {
	var t = !1;
	return c() && (l() || f()) && (t = "ios8" != p() || "iosOther" != p()), t
}