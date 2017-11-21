/**
 *视觉窗口设置
 */
(function(){
	//判断设备，返回设备名称
	var equip = function(){
			var userAgentInfo = navigator.userAgent,
				Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
				
			for (var v = 0; v < Agents.length; v++) { 
				if (userAgentInfo.indexOf(Agents[v]) > 0) { return Agents[v]; };
			};
			return "pc";
		};		
  /*
  *设置viewport, 仅在iphone、iPad上设置viewport，Android或者其他设备使用默认viewport。
  *宽度大于移动设备最大宽度时，提示请在移动设备上浏览
  */  
  (function(){
  	var docEl = document.documentElement;
  	var scale = 1 / devicePixelRatio;
  	var stageWidth = docEl.clientWidth;
  	var stageHeight = docEl.clientHeight;
  	var rem = 0;
  	var sEquip = equip();

  	if(sEquip == 'iPhone')
      document.querySelector('meta[name="viewport"]').setAttribute('content',
      	'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');

     rem = docEl.clientWidth / 10;
     docEl.style.fontSize = rem + 'px';

  })();

})();