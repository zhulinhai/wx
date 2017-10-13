/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-13 10:27:16
 * @version $Id$
 */

/*var basic = $('.demo').croppie({
		viewport: {
	        width: 300,
	        height: 300
        },

	    showZoomer:false,
		url:'images/test.jpg'
	});

    var images = null;
	$('#croppied').click(function(){
			//on button click
			basic.croppie('result', 'base64').then(function(base64) {
			    // html is div (overflow hidden)
			    // with img positioned inside.
			    images = base64;
			    draw();
			});
		});

	function draw(fn){
	    // var data1= new Array();
	    // for(var i=0;i<$('.img_photo img').length;i++){
	    //     data1[i]=$('.img_photo img').eq(i).attr('src');
	    // }
	    var data1 = [images,'images/01.png'];
	    var c=document.createElement('canvas'),
	        ctx=c.getContext('2d'),
	        len=data1.length;
		    c.width=300;
		    c.height=300;
		    ctx.rect(0,0,c.width,c.height);
		    ctx.fillStyle='transparent';//画布填充颜色
		    ctx.fill();

	    function drawing(n){
	        if(n<len){
	            var img=new Image;
	            //img.crossOrigin = 'Anonymous'; //解决跨域
	            img.src=data1[n];
	            img.onload=function(){
	                ctx.drawImage(img,0,0,300,300);
	                drawing(n+1);//递归
	            }
	        }else{
	            //保存生成作品图片
	            convertCanvasToImage(c);
	            // Canvas2Image.saveAsJPEG(c); //保存到电脑
	        }
	    }

	    drawing(0);
}

function convertCanvasToImage(canvas) {
    var hc_image = new Image();
    hc_image.src = canvas.toDataURL("image/png");
    $('.demo').html(hc_image);
}*/

(function($,win){
  win.onload = function(){
  	alert('main loaded');
  }
})($,window)