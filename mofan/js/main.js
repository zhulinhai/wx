/**
 * 
 * @authors sky lu (you@example.org)
 * @date    2017-12-03 16:00:29
 * @version $Id$
 */

 $(document).ready(function() {

    initQuestions();
    bindEvents();
    resultAni();
});

var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//用户回答
var currentSelected = -1;
//当前问题页索引
var currentQuestionIndex = 1;
//答案数组
var aArr = [];

function bindEvents(){

	//开始测试按钮
	$('.btn_beginTest').on('click',function(e){
		$('.pg_f').hide();
		$('.pg_quetison').show();
		questionInAni(currentQuestionIndex);
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
			recordAnswer();
		}else {
			alert('请选择答案，进入下一题!');
		}
	});

	//诊断按钮
	$('.btn_result').on('click', function(e) {
		if(currentSelected != -1){
			recordAnswer();
		    // alert(getMustIndex(aArr));
		    // aArr = [];

		    //填充结果页
		    if(getMustIndex(aArr) == 'A'){
		    	$('#jg').html('晴天霹雳出行狂魔');
		    	$('#zz').html('负担重，压力大，缺少睡眠，整日奔波');
		    	$('#yf').html('摩范出行日租，给你时间的便捷');
		    	$('#yof').html('24小时不限里程，建议一日一次');
		    	$('#jag').html('199-228元封顶');
		    	$('.car_1').hide();
		    	$('.car_2').show();
		    	window.title = "我已患有出行恐慌晚期，你呢？";
		    }else if(getMustIndex(aArr) == 'B') {
		    	$('#jg').html('望眼欲穿出行大神');
		    	$('#zz').html('孤单寂寞冷，加班多睡眠少，害怕夜晚来临');
		    	$('#yf').html('摩范出行夜租，给你温暖的呵护');
		    	$('#yof').html('当日17:00-次日9:00不限里程，建议一日一次');
		    	$('#jag').html('69-99元封顶');
		    	$('.car_1').show();
		    	$('.car_2').hide();
		    	window.title = "我已患有出行中度抑郁症，你呢？";
		    }else {
		    	$('#jg').html('随心所欲式出行小仙');
		    	$('#zz').html('工资不够花，生活琐事多，爱享受');
		    	$('#yf').html('摩范出行时租，解你临时的困境');
		    	$('#yof').html('随取随用，建议一日三次');
		    	$('#jag').html('1分钟1毛7+1公里1块钱');
		    	$('.car_1').hide();
		    	$('.car_2').show();
		    	window.title = "我已患有出行路怒早期，你呢？";
		    }
		    
		    //还原答案页
		    currentQuestionIndex = 1;
		    $('.q1').show();
		    $('.q7').hide();
		    $('.pg_quetison').hide();
		    $('.pg_result').show();
		}else {
			alert('请选择答案，进入诊断结果!');
		}	
		
	});
}

function resultAni(){
	$('.result').addClass('animated bounceInDown');
	printWord($('#jg'));
    $('#zz').addClass('animated delay_4_3_s fadeIn');
    setTimeout(function(){ printWord($('#yf')) }, 500);
    $('#yof').addClass('animated delay_1_4_1_s fadeIn');
	$('#jag').addClass('animated delay_1_4_1_s fadeIn');	
}

function printWord($obj){
	var str = $($obj).html();
	var fontSize = $($obj).css('font-size');
	var w = (str.length+1) * parseInt(fontSize);
	$($obj).css('transition','width 1s 1s steps('+ str.length +')');
	$($obj).css('width', w + 'px');
}


function questionInAni($index){
	var items = $('.q'+$index).find('.items > a');
	var issue = $('.q'+$index).find('.issue');
	/**
	*执行动画
	*/
	$('.question_'+ $index).addClass('animated flipInY');
	$(issue).addClass('animated duration_4_3_s delay_4_1_s fadeIn');
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
