$(document).ready(function(e){
	//横屏提示
	new WxMoment.OrientationTip(); 
	startInit();
	$('.font').css('top', window.innerHeight * .9 + 'px').show();
});

var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//分层动画，初始化动画
var section_1 = true,section_2 = true,section_3 = true,section_4 = true,section_5 = true,section_6 = true ,section_7 =true, section_8 = true;


function startInit(){
	var h = window.innerHeight;
	var s1_offset = $('.carola').attr('y') + $('.carola').height();
	var s2_offset = $('.crown').attr('y') + $('.crown').height();
	var s3_offset = $('.rv4').attr('y') + $('.rv4').height();
	var s4_offset = $('.lobster').attr('y') + $('.lobster').height();
	var s5_offset = $('.oil').attr('y') + $('.oil').height();
	var s6_offset = $('.part1').height();
	var s7_offset = $('.part1').height() + $('.part2').height();
	var s8_offset = ($('.wrapper').height() * 0.98);
   
	$('.ganen').addClass('animated delay_1 fadeIn');
	
	$(window).scroll(function(){
		var sh = $(window).scrollTop();
		
		if((sh + h) > s1_offset && section_1){
			console.log('scroll: '+ sh + ' s1_offset:' + s1_offset);
			$('.font').hide();
			section_1 = false;
			$('.carola').addClass('animated fadeInLeft');
			$('.newFirend').addClass('animated delay__5 fadeInLeft');
			$('.tip1').addClass('animated delay__5 fadeInRight');
			$('.family').addClass('animated delay__5 fadeIn');

		}else if((sh + h) > s2_offset && section_2){
			console.log('scroll: '+ sh + ' s2_offset:' + s2_offset);
			section_2 = false;
			$('.building').addClass('animated fadeIn');
			$('.tip2').addClass('animated delay__5 fadeInLeft');
			$('.crown').addClass('animated delay__5 crownCrush');
		}else if((sh + h) > s3_offset && section_3){
			console.log('scroll: '+ sh + ' s3_offset:' + s3_offset);
			section_3 = false;
			$('.rv4').addClass('animated rv4Crush');
			$('.trees').addClass('animated fadeIn');
			$('.tip3').addClass('animated delay__5 fadeInRight');
		}else if((sh + h) > s4_offset && section_4){
			console.log('scroll: '+ sh + ' s4_offset:' + s4_offset);
			section_4 = false;
			$('.lobster').addClass('animated fadeInRight');
			$('.oldFirend').addClass('animated delay__5 fadeInLeft');
			$('.tip4').addClass('animated delay__5 fadeInRight');
		}else if((sh + h) > s5_offset && section_5){
			console.log('scroll: '+ sh + ' s5_offset:' + s5_offset);
			section_5 = false;
			$('.oil').addClass('animated fadeInLeft');
			$('.tip5').addClass('animated delay__5 fadeInRight');
		}else if((sh + h) > s6_offset && section_6){
			console.log('scroll: '+ sh + ' s6_offset:' + s6_offset);
			section_6 = false;
			$('.carola2').addClass('animated crownCrush');
			$('.mountain').addClass('animated mountainBig');
			$('.tip6').addClass('animated delay__5 fadeInLeft');
		}else if((sh + h) > s7_offset && section_7){
			console.log('scroll: '+ sh + ' s7_offset:' + s7_offset);
			section_7 = false;
			$('.rv42').addClass('animated rv42Crush');
			$('.carola3').addClass('animated delay__5 carola3Crush');
			$('.giftBox').show().addClass('animated delay__5 bounceInDown');
			$('.cheap').show().addClass('animated delay_1 bounceIn');
			$('.info').css('height','1.2rem');
			$('.btn_cheap').show().addClass('animated delay_1 zoomIn');
			$('.btn_cheap').one(animationEnd,function(e){
				$('.btn_cheap').removeClass('delay_1 zoomIn').addClass('infinite pulse')
			});
		}else if((sh + h) > s8_offset && section_8){
			console.log('scroll: '+ sh + ' s8_offset:' + s8_offset);
			section_8 = false;
			$('.gifts').show().addClass('animated zoomIn');
			$('.privilege').show().addClass('animated delay__5 bounceIn');
			$('.info2').css('height','1.21rem');
			$('.btn_privilege').show().addClass('animated delay__5 zoomIn');
			$('.btn_privilege').one(animationEnd,function(e){
				$('.btn_privilege').removeClass('delay__5 zoomIn').addClass('infinite pulse')
			});
		}
		
	});
}