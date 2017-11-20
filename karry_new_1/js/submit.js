var host = 'http://api.bjczxda.com/api/';
var validate = new InputUtil();

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

		// 响应点击提交信息
		$('.submit').on('click',function(e){
			submit();
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