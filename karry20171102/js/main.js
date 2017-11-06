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

function init(){

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
}

