/**
 * 
 * @authors skylu (you@example.org)
 * @date    2017-08-21 15:52:06
 * @version 1.0
 */
var videoUtil = (function(){
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
		if (t.indexOf("iphone") >= 0) return i = t.indexOf("os 10") >= 0 ? "ios10s" : t.indexOf("os 9") >= 0 ? "ios9s" : 

	t.indexOf("os 8") >= 0 ? "ios8" : "iosOther"
	}
	function v(t) {
		l() && c() ? "object" == typeof WeixinJSBridge ? WeixinJSBridge.invoke("WeixinJSBridgeReady", {}, function(i) {
			t()
		}) : document.addEventListener("WeixinJSBridgeReady", function(i) {
			t()
		}, !1) : t()
	}
	function y() {
		var t = !1;
		return c() && (l() || f()) && (t = "ios8" != p() || "iosOther" != p());
	}

	return {
		isVideoCanAutoPlay:y()
	}
})();