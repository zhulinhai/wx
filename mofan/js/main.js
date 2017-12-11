/**
 * 
 * @authors sky lu (you@example.org)
 * @date    2017-12-03 16:00:29
 * @version $Id$
 */

var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//用户回答
var currentSelected = -1;
//当前问题页索引
var currentQuestionIndex = 1;
//答案数组
var aArr = [];
//上一题已选择对象
var preSelectedObj = null;

var count = 0;

var loadingW = '在北京，每10个人中就有9个人患有此病......';

// $.fn.extend({
//     animateCss: function (animationName, callback) {
//         var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//         this.addClass('animated ' + animationName).one(animationEnd, function() {
//             $(this).removeClass('animated ' + animationName);
//             if (callback) {
//               callback();
//             }
//         });
//         return this;
//     }
// });
var audio = null;

$(document).ready(function() {
	
	audio = document.getElementById('audio');
	var dw = Math.round((loadingW.length - 5) * parseInt($('body').css('font-size'))); 
	$('.desc').width(dw);
	printLoading(loadingW);
	 // 百度统计，记录每一个题目页的浏览次数
	// _hmt.push(['_setCustomVar', 1, 'pageCount', 'loading页', 3]);
	zhuge.track('Loading页'); 
});


function printLoading($str){
	// console.log($str);
	if(count > ($str.length - 1)){
		clearTimeout(printTimeout);
		printTimeout =-1;
		return;
	}
	$('.desc').append($str.charAt(count));
	count++;
	printTimeout = setTimeout(printLoading, 40, $str);
}

/**
* 循环对象
*/
var loadInterval,firstPageInterval,loadTimeout, againTimeout,resultTimeout,printTimeout;

/*
 *开始加载
 */
Pace.once('start',function(){
    //loading 百分比显示
    loadInterval = setInterval(function(){
        var load = $('.pace-progress').attr('data-progress-text');
        $('.percentage').html(load); 
    },100);
});

// Pace.once('hide',function(){
	
// });


/**
 * 完成加载
 */
Pace.once('hide', function(e){

    "object" == typeof WeixinJSBridge ? WeixinJSBridge.invoke("WeixinJSBridgeReady", {}, function(i) {
    	audio.play();
    }) : document.addEventListener("WeixinJSBridgeReady", function(i) {
        audio.play();
    }, false);

    loadInterval = -1;
	initQuestions();
	bindEvents();
	doShare(jQuery);
	loadTimeout = setTimeout(function(){
    	$('.loading').hide();
    	firstPageAni();
        count = count < loadingW.length - 1 ? loadingW.length - 1 : count;
        clearTimeout(loadTimeout);
        loadTimeout = -1;
        // 百度统计，记录每一个题目页的浏览次数
		// _hmt.push(['_setCustomVar', 1, 'pageCount', '首页', 3]);
		zhuge.track('首页');
    }, 500);  
    
});
		


function bindEvents(){

	//开始测试按钮
	$('.btn_beginTest').on('click',function(e){
		$('.pg_f').hide();
		$('.pg_quetison').show();
		clearInterval(firstPageInterval);
		firstPageInterval = -1;
		questionInAni(currentQuestionIndex);
		zhuge.track('第1题');
	});

	//选项按钮
	$('.items > a').on('click',function(e) {
		var parent = $(this).parent();
		var items = $(parent).children('a');
		var div = $(this).find('div');
		if(!$(div).hasClass('checked')){
			var obj = this;
			$(items).each(function(i){
				var d = $(this).find('div');
				if($(d).hasClass('checked')){
					$(d).removeClass('checked');
					$(d).addClass('uncheck');
				}

				if(this == obj){
					currentSelected = i;
				}
			});

			preSelectedObj = div;
			
			$(div).removeClass('uncheck');
			$(div).addClass('checked');
			// console.log(currentSelected);
		}
	});

	//下一题按钮
	$('.btn_next').on('click',function(e){
		if(currentSelected != -1){
			currentQuestionIndex = currentQuestionIndex > 6 ? currentQuestionIndex : ++currentQuestionIndex;
			questionOutAni(currentQuestionIndex);
			if(currentQuestionIndex > 6){
				$(this).hide();
				$('.btn_result').show();
			}
			// _hmt.push(['_trackEvent', category, action, opt_label, opt_value]);
			recordAnswer();
		}else {
			alert('请选择答案，进入下一题!');
		}
	});

	//诊断按钮
	$('.btn_result').on('click', function(e) {
		console.log('点击诊断按钮' + Math.random()*10000 );
		if(currentSelected != -1){
			recordAnswer();
		    // alert(getMustIndex(aArr));
		    // aArr = [];
		    var result = getMustIndex(aArr);
		    //填充结果页
		    if(result == 'A'){
		    	$('#jg').html('心力交瘁出行狂魔');
		    	$('#zz').html('家庭负担重，工作压力大，整日奔波');
		    	$('#yf').html('摩范出行日租，给你时间的便捷');
		    	$('#yof').html('24小时不限里程，建议一日一次');
		    	$('#jag').html('199-228元封顶');
		    	$('.car_1').hide();
		    	$('.car_2').show();
		    	window.title = "我是心力交瘁出行狂魔，你呢？";
		    }else if(result == 'B') {
		    	$('#jg').html('起早贪黑出行大神');
		    	$('#zz').html('孤单寂寞冷，加班多睡眠少，害怕夜晚来临');
		    	$('#yf').html('摩范出行夜租，给你温暖的呵护');
		    	$('#yof').html('当日17:00-次日9:00不限里程，建议一日一次');
		    	$('#jag').html('69-99元封顶');
		    	$('.car_1').show();
		    	$('.car_2').hide();
		    	window.title = "我是起早贪黑出行大神，你呢？";
		    }else {
		    	$('#jg').html('随心所欲式出行小仙');
		    	$('#zz').html('工资不够花，生活琐事多，状况突发');
		    	$('#yf').html('摩范出行时租，解你临时的困境');
		    	$('#yof').html('随取随用，建议一日三次');
		    	$('#jag').html('0.17元/分钟+1元/公里');
		    	$('.car_1').hide();
		    	$('.car_2').show();
		    	window.title = "我是随心所欲式出行小仙，你呢？";
		    }
		    doShare(jQuery);
		    //还原答案页
		    resetQuestionPage(result);
		    
		}else {
			alert('请选择答案，进入诊断结果!');
		}	
		
	});

	//再测一次
	$('.btn_again').on('click', function(e) {
		console.log('点击再测一次按钮' + Math.random()*10000 );
	    
	    $('.result').addClass('animated bounceOutUp');
	    setTimeout(function(){
	    	$('.result').removeClass('animated bounceOutUp');
	    	$('.pg_result').hide();
	    	$('.pg_quetison').show();
	    	resetPrint();
	    	console.log('执行再测一次动画' + Math.random()*10000 );
	    }, 1000);

	    $('.question_img').addClass('animated delay_1_s fadeIn');
	    $('.questions').addClass('animated delay_1_s fadeIn').one(animationEnd,function(event){
	    	$('.question_img').removeClass('animated delay_1_s fadeIn');
	    	$('.questions').removeClass('animated delay_1_s fadeIn');
	    	console.log('删除再测一次动画' + Math.random()*10000 );
	    	event.stopPropagation();
	    }); 

	    e.stopPropagation();
	});

    //音乐开关
	$('.btn_music').click(function(event) {
		/* Act on the event */
		if($(this).hasClass('musicRotate')){
			$(this).removeClass('musicRotate');
			audio.pause();
		}else{
			$(this).addClass('musicRotate');
			audio.play();
		}
	});
}

var selectors = ['.start','.start_r','.dots'];

function firstPageAni(){
	$('.dots').addClass('dotZoomIn');
	$('.web').addClass('animated bounceIn');
	$('.web2').addClass('animated bounceInRight');
	$('.left_wed').addClass('animated delay_4_3_s bounceIn');
	$('.right_wed').addClass('animated delay_4_3_s bounceIn');
	$('.wave').addClass('animated delay_4_3_s bounceInLeft');
	$('.wave_r').addClass('animated delay_4_3_s bounceInRight');
	$('.start').addClass('animated delay_4_3_s fadeIn');

	$('.start_r').addClass('animated delay_4_3_s fadeIn')
	.one(animationEnd,function(){
		$('.dots').removeClass('dotZoomIn');
		$('.dots').addClass('animated');
		$('.web').removeClass('animated bounceIn');
		$('.web2').removeClass('animated bounceInRight');
		$('.left_wed').removeClass('animated delay_4_3_s bounceIn');
		$('.right_wed').removeClass('animated delay_4_3_s bounceIn');
		$('.wave').removeClass('animated delay_4_3_s bounceInLeft');
		$('.wave_r').removeClass('animated delay_4_3_s bounceInRight');
		$('.start').removeClass('delay_4_3_s fadeIn');
		$(this).removeClass('delay_4_3_s fadeIn');
		firstPageInterval = setInterval(function(){
			var i = Math.floor(Math.random() * 3);
			var s = selectors[i];
			$(s).toggleClass('flash');
		},1500);
	});
	$('.btn_beginTest').addClass('animated delay_1_4_3_s bounceIn');
	$('.people').addClass('delay_4_1_s peopleShake');

}


function resultAni($res){
	// 百度统计，记录每一个题目页的浏览次数
	// _hmt.push(['_setCustomVar', 1, 'pageCount', '结果页', 3]);
	zhuge.track('结果页');

	$('.result').addClass('animated bounceInDown');
	printWord($('#jg'));
    $('#zz').addClass('animated delay_1_4_1_s fadeIn');
    resultTimeout = setTimeout(function(){ 
    	printWord($('#yf'));
    	clearTimeout(resultTimeout);
    	resultTimeout = -1; 
    }, 750);

    var index = $res == 'B' ? 1 : 2;
	$('.car_'+index).addClass('animated delay_1_s fadeInRight');
	$('.btn_ticket,.btn_again').addClass('animated delay_1_4_3_s bounceIn');

	$('#yof').addClass('animated delay_2_4_3_s fadeIn');
	$('#jag').addClass('animated delay_2_4_3_s fadeIn').one(animationEnd,function(){
		$('.result').removeClass('animated bounceInDown');
		$('#zz').removeClass('animated delay_1_4_1_s fadeIn');
		$('.car_'+index).removeClass('animated delay_1_s fadeInRight');
	    $('.btn_ticket,.btn_again').removeClass('animated delay_1_4_3_s bounceIn');
	    $('#yof').removeClass('animated delay_2_4_3_s fadeIn');
	    $(this).removeClass('animated delay_2_4_3_s fadeIn');
	});
}

function resetQuestionPage($result){
	currentQuestionIndex = 1;
    
	$('.q7').hide();
	$('.q1').show();
    $('.question_7').hide();
    $('.question_1').show();
    $('.btn_result').hide();
    $('.btn_next').show();
    $('.pg_quetison').hide();
    $('.pg_result').show();
    resultAni($result);
    aArr = [];
}

function resetPrint(){
	$('#jg').removeAttr('style');
	$('#yf').removeAttr('style');
}

function printWord($obj){
	var str = $($obj).html();
	var fontSize = $($obj).css('font-size');
	var w = (str.length+1) * parseInt(fontSize);
	$($obj).css('transition','width 1s 1s steps('+ (str.length+1) +')');
	$($obj).css('width', w + 'px');
}


function questionInAni($index){
	var items = $('.q'+$index).find('.items > a');
	var issue = $('.q'+$index).find('.issue');
	/**
	*执行动画
	*/
	$('.question_'+ $index).addClass('animated flipInY');
	$(issue).addClass('animated delay_4_1_s fadeIn');
	$(items[0]).addClass('animated duration_4_3_s delay_4_1_s fadeInRight');
	$(items[1]).addClass('animated duration_4_3_s delay_2_1_s fadeInRight');
	$(items[2]).addClass('animated duration_4_3_s delay_4_3_s fadeInRight').one(animationEnd,function(e){
		$('.question_'+ $index).removeClass('animated flipInY');
		$(issue).removeClass('animated delay_4_1_s fadeIn');
		$(items[0]).removeClass('animated duration_4_3_s delay_4_1_s fadeInRight');
		$(items[1]).removeClass('animated duration_4_3_s delay_2_1_s fadeInRight');
		$(items[2]).removeClass('animated duration_4_3_s delay_4_3_s fadeInRight');
	});
}

function questionOutAni($index){
	if($index > 1){
		var $preIndex = $index - 1;
		var items = $('.q'+$preIndex).find('.items > a');
		var issue = $('.q'+$preIndex).find('.issue');
		/**
		*执行动画
		*/
		$('.question_'+ $preIndex).addClass('animated flipOutY');
		$(issue).addClass('animated delay_4_1_s fadeOut');
		$(items[0]).addClass('animated duration_4_3_s delay_4_1_s fadeOutLeft');
		$(items[1]).addClass('animated duration_4_3_s delay_2_1_s fadeOutLeft');
		$(items[2]).addClass('animated duration_4_3_s delay_4_3_s fadeOutLeft').one(animationEnd,function(e){
			$('.question_'+ $preIndex).removeClass('animated flipOutY');
			$(issue).removeClass('animated duration_4_3_s delay_4_1_s fadeOut');
			$(items[0]).removeClass('animated duration_4_3_s delay_4_1_s fadeOutLeft');
			$(items[1]).removeClass('animated duration_4_3_s delay_2_1_s fadeOutLeft');
			$(items[2]).removeClass('animated duration_4_3_s delay_4_3_s fadeOutLeft');
			
			$('.question_'+$preIndex).hide();
			$('.q'+ $preIndex).hide();
			$('.question_'+$index).show();
			$('.q'+ $index).show();
			questionInAni($index);
		});
	}
}

//记录回答
function recordAnswer(){
	switch (currentSelected) {
		case 0:
			aArr.push('A');
			break;
		case 1:
			aArr.push('B');
			break;
		case 2:
			aArr.push('C');
			break;
		default:
			// statements_def
			aArr.push('A');
			break;
	}
	//重置选项		
	currentSelected = -1;

	$(preSelectedObj).removeClass('checked');
	$(preSelectedObj).addClass('uncheck');
	// 百度统计，记录每一个题目页的浏览次数
	// _hmt.push(['_setCustomVar', 1, 'pageCount', '第'+ currentQuestionIndex +'题', 3]);
	zhuge.track('第'+currentQuestionIndex+'题');
}

function initQuestions(){
   
   var htmlStr = '<div class="q2" style="display:none;"><p class="issue">2、一日之计在于晨，几点起床搬（上）砖（班）？</p><div class="items">';
		htmlStr += '<a href="javascript:void(0);" class="answerA"><div class="uncheck"></div><p>踩点上班，争分多秒抢睡觉。</p></a>';
		htmlStr += '<a href="javascript:void(0);" class="answerB"><div class="uncheck"></div><p>公鸡打鸣，早起的鸟儿有虫吃。</p></a>';	
		htmlStr += '<a href="javascript:void(0);" class="answerC"><div class="uncheck"></div><p>睡到自然醒，人生在世需随意。</p></a></div></div>';	  
		htmlStr += '<div class="q3" style="display:none;"><p class="issue">3、上班路漫漫，从家到公司需要多长时间？</p><div class="items">';
		htmlStr += '<a href="javascript:void(0);" class="answerA"><div class="uncheck"></div><p>1小时左右，上班路程追剧放松。</p></a>';
		htmlStr += '<a href="javascript:void(0);" class="answerB"><div class="uncheck"></div><p>每天来回3小时，赶上北京飞广州。</p></a>';	
		htmlStr += '<a href="javascript:void(0);" class="answerC"><div class="uncheck"></div><p>30分钟任意走，上班迟到从不怕。</p></a></div></div>';	
		htmlStr += '<div class="q4" style="display:none;"><p class="issue">4、作为三好男人的你，为谁当私家司机？</p><div class="items">';
		htmlStr += '<a href="javascript:void(0);" class="answerA"><div class="uncheck"></div><p>家有萌娃，风雨兼程日夜接送。</p></a>';
		htmlStr += '<a href="javascript:void(0);" class="answerB"><div class="uncheck"></div><p>自我呵护，谁还不是个宝宝！</p></a>';	
		htmlStr += '<a href="javascript:void(0);" class="answerC"><div class="uncheck"></div><p>新婚青年，陪伴老婆上下班。</p></a></div></div>';	
		htmlStr += '<div class="q5" style="display:none;"><p class="issue">5、工作需要经常外出见客户吗？</p><div class="items">';
		htmlStr += '<a href="javascript:void(0);" class="answerA"><div class="uncheck"></div><p>客户就是上帝，随时待命。</p></a>';
		htmlStr += '<a href="javascript:void(0);" class="answerB"><div class="uncheck"></div><p>我就甲方！</p></a>';	
		htmlStr += '<a href="javascript:void(0);" class="answerC"><div class="uncheck"></div><p>天有不测风云，总有被劈中的时候。</p></a></div></div>';	
		htmlStr += '<div class="q6" style="display:none;"><p class="issue">6、工作是否需要经常加班苦干？</p><div class="items">';
		htmlStr += '<a href="javascript:void(0);" class="answerA"><div class="uncheck"></div><p>是的，996一族。</p></a>';
		htmlStr += '<a href="javascript:void(0);" class="answerB"><div class="uncheck"></div><p>偶尔加班。小加怡情。</p></a>';	
		htmlStr += '<a href="javascript:void(0);" class="answerC"><div class="uncheck"></div><p>朝九晚五，从不加班。</p></a></div></div>';	
		htmlStr += '<div class="q7" style="display:none;"><p class="issue">7、工作之余，怎样尽情放纵自己？</p><div class="items">';
		htmlStr += '<a href="javascript:void(0);" class="answerA"><div class="uncheck"></div><p>全家周边游，呼吸野外新鲜空气。</p></a>';
		htmlStr += '<a href="javascript:void(0);" class="answerB"><div class="uncheck"></div><p>夜晚通宵趴，一周烦恼全抛开。</p></a>';	
		htmlStr += '<a href="javascript:void(0);" class="answerC"><div class="uncheck"></div><p>三五好友，小聚谈心。</p></a></div></div>';
	$('.questions').append(htmlStr);	
}

function getMustIndex($arr) {
	// body...
	var countA = 0;
	var countB = 0;
	var countC = 0;
	var mustIndex;
	for(var i = 0; i < $arr.length; i++){
		if($arr[i] == 'A'){
			countA++;
		}else if($arr[i] == 'B'){
			countB++;
		}else {
			countC++;
		}
	}
	var tArr = [{'count':countA,
                 'index':'A'},
                 {'count':countB,
                 'index':'B'},
                 {'count':countC,
                 'index':'C'}];
    /**
    *冒泡倒排序desc
    */             
	for(var i = 0; i < tArr.length - 1; i++){
		for(var j = 0; j < tArr.length - i - 1; j++){
			if(tArr[j].count < tArr[j+1].count){
				var temp = tArr[j+1];
				tArr[j+1] = tArr[j];
				tArr[j] = temp;
			}
		}
	}
	console.log($arr);
	return tArr[0].index;
}
