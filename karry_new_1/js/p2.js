(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"k50_atlas_", frames: [[2035,10,8,8],[1959,10,8,8],[1729,36,46,39],[1777,40,46,39],[1681,36,46,39],[2035,0,8,8],[1975,0,46,39],[1959,0,8,8],[1399,0,106,106],[0,0,358,556],[698,0,330,492],[360,0,336,524],[1825,40,54,29],[1661,0,138,34],[1507,36,172,12],[1801,26,172,12],[698,494,1227,5],[1921,0,17,20],[1940,0,17,20],[1901,0,18,20],[1030,0,195,184],[1227,0,170,176],[1507,0,152,31],[2029,0,4,89],[2023,0,4,89],[1801,0,98,24]]}
];

// library properties:
lib.properties = {
	width: 1334,
	height: 646,
	fps: 32,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/k50_atlas_.png?1510478150367", id:"k50_atlas_"}
	],
	preloads: []
};


// symbols:



(lib.多边形1 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.多边形1拷贝 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.多边形1拷贝2 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.多边形1拷贝3 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.多边形1拷贝4 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.多边形1拷贝4_1 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.多边形1拷贝5 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.多边形1拷贝5_1 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.椭圆2 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.img_infobg = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.img_k50 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.img_k60 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.VR = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.虚拟看展 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.图层236 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.图层236拷贝 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.图层236拷贝3合并 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.图层253 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.图层254 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.图层255 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.矢量智能对象_1 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.矢量智能对象_2 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.矩形1 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.矩形2拷贝8 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.矩形2拷贝9 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.预约试驾 = function() {
	this.spriteSheet = ss["k50_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.scan_outlinepsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 矢量智能对象_2
	this.instance = new lib.矢量智能对象_2();
	this.instance.parent = this;
	this.instance.setTransform(592,217);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 矢量智能对象_1
	this.instance_1 = new lib.矢量智能对象_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(580,225);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(580,217,195,192);


(lib.sc_uright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.图层253();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sc_uright, new cjs.Rectangle(0,0,17,20), null);


(lib.sc_outline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.椭圆2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sc_outline, new cjs.Rectangle(0,0,106,106), null);


(lib.sc_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.图层255();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sc_left, new cjs.Rectangle(0,0,18,20), null);


(lib.sc_dright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.图层254();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sc_dright, new cjs.Rectangle(0,0,17,20), null);


(lib.mc_k60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.img_k60();
	this.instance.parent = this;
	this.instance.setTransform(-168,-262);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_k60, new cjs.Rectangle(-168,-262,336,524), null);


(lib.btn_submit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.预约试驾();
	this.instance.parent = this;
	this.instance.setTransform(28,4);

	this.instance_1 = new lib.矩形1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,31);


(lib.boxbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.img_infobg();
	this.instance.parent = this;
	this.instance.setTransform(-179,-278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.boxbg, new cjs.Rectangle(-179,-278,358,556), null);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.多边形1拷贝4();
	this.instance.parent = this;
	this.instance.setTransform(1228,564);

	this.instance_1 = new lib.多边形1拷贝4_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1262,590);

	this.instance_2 = new lib.多边形1拷贝3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1228,0);

	this.instance_3 = new lib.多边形1拷贝();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1262,5);

	this.instance_4 = new lib.多边形1拷贝5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,564);

	this.instance_5 = new lib.多边形1拷贝5_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(4,590);

	this.instance_6 = new lib.多边形1拷贝2();
	this.instance_6.parent = this;

	this.instance_7 = new lib.多边形1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(4,5);

	this.instance_8 = new lib.图层236拷贝3合并();
	this.instance_8.parent = this;
	this.instance_8.setTransform(4,597);

	this.instance_9 = new lib.图层236拷贝();
	this.instance_9.parent = this;
	this.instance_9.setTransform(552,53);

	this.instance_10 = new lib.图层236();
	this.instance_10.parent = this;
	this.instance_10.setTransform(552,0);

	this.instance_11 = new lib.VR();
	this.instance_11.parent = this;
	this.instance_11.setTransform(540,20);

	this.instance_12 = new lib.虚拟看展();
	this.instance_12.parent = this;
	this.instance_12.setTransform(597,16);

	this.instance_13 = new lib.矩形2拷贝9();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,427);

	this.instance_14 = new lib.矩形2拷贝8();
	this.instance_14.parent = this;
	this.instance_14.setTransform(1271,95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1275,603);


(lib.scan_outline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.scan_outlinepsd("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,677.5,313);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.8,x:0.1,y:0.1},0).wait(1).to({rotation:7.5,y:0},0).wait(1).to({rotation:11.3,x:0},0).wait(1).to({rotation:15,y:0.1},0).wait(1).to({rotation:18.8,x:0.1,y:0},0).wait(1).to({rotation:22.5,x:0},0).wait(1).to({rotation:26.3,x:0.1},0).wait(1).to({rotation:30,x:0},0).wait(1).to({rotation:33.8,y:0.1},0).wait(1).to({rotation:37.5,y:0},0).wait(1).to({rotation:41.3,x:0.1},0).wait(1).to({rotation:45},0).wait(1).to({rotation:48.8},0).wait(1).to({rotation:52.5,y:0.1},0).wait(1).to({rotation:56.3,y:0},0).wait(1).to({rotation:60},0).wait(1).to({rotation:63.8,y:0.1},0).wait(1).to({rotation:67.5,x:0,y:0},0).wait(1).to({rotation:71.3},0).wait(1).to({rotation:75},0).wait(1).to({rotation:78.8},0).wait(1).to({rotation:82.5},0).wait(1).to({rotation:86.3},0).wait(1).to({rotation:90},0).wait(1).to({rotation:93.8,y:0.1},0).wait(1).to({rotation:97.5},0).wait(1).to({rotation:101.3,y:0},0).wait(1).to({rotation:105},0).wait(1).to({rotation:108.8,y:0.1},0).wait(1).to({rotation:112.5,y:0},0).wait(1).to({rotation:116.3,y:0.1},0).wait(1).to({rotation:120,y:0},0).wait(1).to({rotation:123.8},0).wait(1).to({rotation:127.5},0).wait(1).to({rotation:131.3,y:0.1},0).wait(1).to({rotation:135},0).wait(1).to({rotation:138.8},0).wait(1).to({rotation:142.5},0).wait(1).to({rotation:146.3},0).wait(1).to({rotation:150},0).wait(1).to({rotation:153.8},0).wait(1).to({rotation:157.5,y:0},0).wait(1).to({rotation:161.3},0).wait(1).to({rotation:165},0).wait(1).to({rotation:168.8},0).wait(1).to({rotation:172.5},0).wait(1).to({rotation:176.3},0).wait(1).to({rotation:180},0).wait(1).to({rotation:176.2},0).wait(1).to({rotation:172.3},0).wait(1).to({rotation:168.5},0).wait(1).to({rotation:164.7},0).wait(1).to({rotation:160.9},0).wait(1).to({rotation:157},0).wait(1).to({rotation:153.2},0).wait(1).to({rotation:149.4},0).wait(1).to({rotation:145.5},0).wait(1).to({rotation:141.7},0).wait(1).to({rotation:137.9},0).wait(1).to({rotation:134},0).wait(1).to({rotation:130.2},0).wait(1).to({rotation:126.4,y:0.1},0).wait(1).to({rotation:122.6},0).wait(1).to({rotation:118.7},0).wait(1).to({rotation:114.9,y:0},0).wait(1).to({rotation:111.1},0).wait(1).to({rotation:107.2,y:0.1},0).wait(1).to({rotation:103.4},0).wait(1).to({rotation:99.6,y:0},0).wait(1).to({rotation:95.7},0).wait(1).to({rotation:91.9},0).wait(1).to({rotation:88.1},0).wait(1).to({rotation:84.3,y:0.1},0).wait(1).to({rotation:80.4,y:0},0).wait(1).to({rotation:76.6},0).wait(1).to({rotation:72.8,y:0.1},0).wait(1).to({rotation:68.9,y:0},0).wait(1).to({rotation:65.1,x:0.1},0).wait(1).to({rotation:61.3,x:0},0).wait(1).to({rotation:57.4,x:0.1},0).wait(1).to({rotation:53.6,x:0},0).wait(1).to({rotation:49.8,x:0.1},0).wait(1).to({rotation:46,x:0,y:0.1},0).wait(1).to({rotation:42.1},0).wait(1).to({rotation:38.3,y:0},0).wait(1).to({rotation:34.5},0).wait(1).to({rotation:30.6},0).wait(1).to({rotation:26.8,x:0.1},0).wait(1).to({rotation:23},0).wait(1).to({rotation:19.1,y:0.1},0).wait(1).to({rotation:15.3,x:0},0).wait(1).to({rotation:11.5,y:0},0).wait(1).to({rotation:7.7,x:0.1},0).wait(1).to({rotation:3.8},0).wait(1).to({rotation:0,x:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-96,195,192);


(lib.scan_center = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sc_uright
	this.instance = new lib.sc_uright();
	this.instance.parent = this;
	this.instance.setTransform(59.5,44,1,1,0,0,0,8.5,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:59.8,y:43.7},0).wait(1).to({x:60,y:43.5},0).wait(1).to({x:60.3,y:43.2},0).wait(1).to({x:60.5,y:43},0).wait(1).to({x:60.8,y:42.7},0).wait(1).to({x:61.1,y:42.4},0).wait(1).to({x:61.3,y:42.2},0).wait(1).to({x:61.6,y:41.9},0).wait(1).to({x:61.8,y:41.7},0).wait(1).to({x:62.1,y:41.4},0).wait(1).to({x:62.4,y:41.1},0).wait(1).to({x:62.6,y:40.9},0).wait(1).to({x:62.9,y:40.6},0).wait(1).to({x:63.2,y:40.3},0).wait(1).to({x:63.4,y:40.1},0).wait(1).to({x:63.7,y:39.8},0).wait(1).to({x:63.9,y:39.6},0).wait(1).to({x:64.2,y:39.3},0).wait(1).to({x:64.5,y:39},0).wait(1).to({x:64.7,y:38.8},0).wait(1).to({x:65,y:38.5},0).wait(1).to({x:65.2,y:38.3},0).wait(1).to({x:65.5,y:38},0).wait(1).to({x:65.3,y:38.3},0).wait(1).to({x:65,y:38.5},0).wait(1).to({x:64.8,y:38.8},0).wait(1).to({x:64.5,y:39},0).wait(1).to({x:64.3,y:39.3},0).wait(1).to({x:64,y:39.5},0).wait(1).to({x:63.8,y:39.8},0).wait(1).to({x:63.5,y:40},0).wait(1).to({x:63.3,y:40.3},0).wait(1).to({x:63,y:40.5},0).wait(1).to({x:62.8,y:40.8},0).wait(1).to({x:62.5,y:41},0).wait(1).to({x:62.3,y:41.3},0).wait(1).to({x:62,y:41.5},0).wait(1).to({x:61.8,y:41.8},0).wait(1).to({x:61.5,y:42},0).wait(1).to({x:61.3,y:42.3},0).wait(1).to({x:61,y:42.5},0).wait(1).to({x:60.8,y:42.8},0).wait(1).to({x:60.5,y:43},0).wait(1).to({x:60.3,y:43.3},0).wait(1).to({x:60,y:43.5},0).wait(1).to({x:59.8,y:43.8},0).wait(1).to({x:59.5,y:44},0).wait(1));

	// sc_dright
	this.instance_1 = new lib.sc_dright();
	this.instance_1.parent = this;
	this.instance_1.setTransform(59.5,66,1,1,0,0,0,8.5,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:59.8,y:66.3},0).wait(1).to({x:60,y:66.5},0).wait(1).to({x:60.3,y:66.8},0).wait(1).to({x:60.5,y:67},0).wait(1).to({x:60.8,y:67.3},0).wait(1).to({x:61.1,y:67.6},0).wait(1).to({x:61.3,y:67.8},0).wait(1).to({x:61.6,y:68.1},0).wait(1).to({x:61.8,y:68.3},0).wait(1).to({x:62.1,y:68.6},0).wait(1).to({x:62.4,y:68.9},0).wait(1).to({x:62.6,y:69.1},0).wait(1).to({x:62.9,y:69.4},0).wait(1).to({x:63.2,y:69.7},0).wait(1).to({x:63.4,y:69.9},0).wait(1).to({x:63.7,y:70.2},0).wait(1).to({x:63.9,y:70.4},0).wait(1).to({x:64.2,y:70.7},0).wait(1).to({x:64.5,y:71},0).wait(1).to({x:64.7,y:71.2},0).wait(1).to({x:65,y:71.5},0).wait(1).to({x:65.2,y:71.7},0).wait(1).to({x:65.5,y:72},0).wait(1).to({x:65.3,y:71.8},0).wait(1).to({x:65,y:71.5},0).wait(1).to({x:64.8,y:71.3},0).wait(1).to({x:64.5,y:71},0).wait(1).to({x:64.3,y:70.8},0).wait(1).to({x:64,y:70.5},0).wait(1).to({x:63.8,y:70.3},0).wait(1).to({x:63.5,y:70},0).wait(1).to({x:63.3,y:69.8},0).wait(1).to({x:63,y:69.5},0).wait(1).to({x:62.8,y:69.3},0).wait(1).to({x:62.5,y:69},0).wait(1).to({x:62.3,y:68.8},0).wait(1).to({x:62,y:68.5},0).wait(1).to({x:61.8,y:68.3},0).wait(1).to({x:61.5,y:68},0).wait(1).to({x:61.3,y:67.8},0).wait(1).to({x:61,y:67.5},0).wait(1).to({x:60.8,y:67.3},0).wait(1).to({x:60.5,y:67},0).wait(1).to({x:60.3,y:66.8},0).wait(1).to({x:60,y:66.5},0).wait(1).to({x:59.8,y:66.3},0).wait(1).to({x:59.5,y:66},0).wait(1));

	// sc_left
	this.instance_2 = new lib.sc_left();
	this.instance_2.parent = this;
	this.instance_2.setTransform(41,55,1,1,0,0,0,9,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:40.7},0).wait(1).to({x:40.5},0).wait(1).to({x:40.2},0).wait(1).to({x:40},0).wait(1).to({x:39.7},0).wait(1).to({x:39.4},0).wait(1).to({x:39.2},0).wait(1).to({x:38.9},0).wait(1).to({x:38.7},0).wait(1).to({x:38.4},0).wait(1).to({x:38.1},0).wait(1).to({x:37.9},0).wait(1).to({x:37.6},0).wait(1).to({x:37.3},0).wait(1).to({x:37.1},0).wait(1).to({x:36.8},0).wait(1).to({x:36.6},0).wait(1).to({x:36.3},0).wait(1).to({x:36},0).wait(1).to({x:35.8},0).wait(1).to({x:35.5},0).wait(1).to({x:35.3},0).wait(1).to({x:35},0).wait(1).to({x:35.3},0).wait(1).to({x:35.5},0).wait(1).to({x:35.8},0).wait(1).to({x:36},0).wait(1).to({x:36.3},0).wait(1).to({x:36.5},0).wait(1).to({x:36.8},0).wait(1).to({x:37},0).wait(1).to({x:37.3},0).wait(1).to({x:37.5},0).wait(1).to({x:37.8},0).wait(1).to({x:38},0).wait(1).to({x:38.3},0).wait(1).to({x:38.5},0).wait(1).to({x:38.8},0).wait(1).to({x:39},0).wait(1).to({x:39.3},0).wait(1).to({x:39.5},0).wait(1).to({x:39.8},0).wait(1).to({x:40},0).wait(1).to({x:40.3},0).wait(1).to({x:40.5},0).wait(1).to({x:40.8},0).wait(1).to({x:41},0).wait(1));

	// sc_outline
	this.instance_3 = new lib.sc_outline();
	this.instance_3.parent = this;
	this.instance_3.setTransform(53,53,1,1,0,0,0,53,53);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,106);


(lib.carinfo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/* 停止影片剪辑
		停止舞台上的指定影片剪辑。
		
		说明:
		1. 将此代码用于当前正在播放的影片剪辑。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// content
	this.instance = new lib.img_k50();
	this.instance.parent = this;
	this.instance.setTransform(-165,0);

	this.movieClip_4 = new lib.mc_k60();
	this.movieClip_4.name = "movieClip_4";
	this.movieClip_4.parent = this;
	this.movieClip_4.setTransform(0,262);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.movieClip_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165,0,330,492);


(lib.popbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
			/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		this.stop();
	}
	this.frame_3 = function() {
		this.carinfo_mc.gotoAndStop(carIndex);
	}
	this.frame_11 = function() {
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(8).call(this.frame_11).wait(9));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A79AFIAAgJMA37AAAIAAAJg");
	var mask_graphics_1 = new cjs.Graphics().p("A79EBIAAoBMA37AAAIAAIBg");
	var mask_graphics_2 = new cjs.Graphics().p("A79H+IAAv7MA37AAAIAAP7g");
	var mask_graphics_3 = new cjs.Graphics().p("A79L6IAA3zMA37AAAIAAXzg");
	var mask_graphics_4 = new cjs.Graphics().p("A79P2IAA/rMA37AAAIAAfrg");
	var mask_graphics_5 = new cjs.Graphics().p("A79TyMAAAgnjMA37AAAMAAAAnjg");
	var mask_graphics_6 = new cjs.Graphics().p("A79XvMAAAgvdMA37AAAMAAAAvdg");
	var mask_graphics_7 = new cjs.Graphics().p("A79brMAAAg3VMA37AAAMAAAA3Vg");
	var mask_graphics_8 = new cjs.Graphics().p("A79fnMAAAg/NMA37AAAMAAAA/Ng");
	var mask_graphics_9 = new cjs.Graphics().p("Egb9AjjMAAAhHFMA37AAAMAAABHFg");
	var mask_graphics_10 = new cjs.Graphics().p("Egb9AngMAAAhO/MA37AAAMAAABO/g");
	var mask_graphics_11 = new cjs.Graphics().p("Egb9ArcMAAAhW3MA37AAAMAAABW3g");
	var mask_graphics_12 = new cjs.Graphics().p("Egb9AmBMAAAhMBMA37AAAMAAABMBg");
	var mask_graphics_13 = new cjs.Graphics().p("Egb9AgmMAAAhBLMA37AAAMAAABBLg");
	var mask_graphics_14 = new cjs.Graphics().p("A79bLMAAAg2VMA37AAAMAAAA2Vg");
	var mask_graphics_15 = new cjs.Graphics().p("A79VxMAAAgrhMA37AAAMAAAArhg");
	var mask_graphics_16 = new cjs.Graphics().p("A79QWMAAAggrMA37AAAMAAAAgrg");
	var mask_graphics_17 = new cjs.Graphics().p("A79K7IAA11MA37AAAIAAV1g");
	var mask_graphics_18 = new cjs.Graphics().p("A79FgIAAq/MA37AAAIAAK/g");
	var mask_graphics_19 = new cjs.Graphics().p("A79AFIAAgJMA37AAAIAAAJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:0,y:0}).wait(1).to({graphics:mask_graphics_2,x:0,y:0}).wait(1).to({graphics:mask_graphics_3,x:0,y:0}).wait(1).to({graphics:mask_graphics_4,x:0,y:0}).wait(1).to({graphics:mask_graphics_5,x:0,y:0}).wait(1).to({graphics:mask_graphics_6,x:0,y:0}).wait(1).to({graphics:mask_graphics_7,x:0,y:0}).wait(1).to({graphics:mask_graphics_8,x:0,y:0}).wait(1).to({graphics:mask_graphics_9,x:0,y:0}).wait(1).to({graphics:mask_graphics_10,x:0,y:0}).wait(1).to({graphics:mask_graphics_11,x:0,y:0}).wait(1).to({graphics:mask_graphics_12,x:0,y:0}).wait(1).to({graphics:mask_graphics_13,x:0,y:0}).wait(1).to({graphics:mask_graphics_14,x:0,y:0}).wait(1).to({graphics:mask_graphics_15,x:0,y:0}).wait(1).to({graphics:mask_graphics_16,x:0,y:0}).wait(1).to({graphics:mask_graphics_17,x:0,y:0}).wait(1).to({graphics:mask_graphics_18,x:0,y:0}).wait(1).to({graphics:mask_graphics_19,x:0,y:0}).wait(1));

	// content
	this.carinfo_mc = new lib.carinfo();
	this.carinfo_mc.name = "carinfo_mc";
	this.carinfo_mc.parent = this;
	this.carinfo_mc.setTransform(0,-15.9,1,1,0,0,0,0,246);
	this.carinfo_mc.alpha = 0;

	var maskedShapeInstanceList = [this.carinfo_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.carinfo_mc).wait(3).to({alpha:1},0).wait(16).to({alpha:0},0).wait(1));

	// bg
	this.instance = new lib.boxbg();
	this.instance.parent = this;
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({alpha:1},0).wait(16).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179,-0.5,358,1);


// stage content:
(lib.part2 = function(mode,startPosition,loop) {
	setObject(this);
	
	this.initialize(mode,startPosition,loop,{});

	// carinfo
	this.instance = new lib.popbox();
	this.instance.parent = this;
	this.instance.setTransform(1097.5,323.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// scan_center
	this.instance_1 = new lib.scan_center();
	this.instance_1.parent = this;
	this.instance_1.setTransform(667,323,1,1,0,0,0,53,53);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// scan_outline
	this.instance_2 = new lib.scan_outline();
	this.instance_2.parent = this;
	this.instance_2.setTransform(667,323);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));


		// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.btn_openbox.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			handleOpenBox();
			// 结束您的自定义代码
		}
	
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
	// btn_submit
	this.btn_openbox = new lib.btn_submit();
	this.btn_openbox.parent = this;
	this.btn_openbox.setTransform(86.5,571.5);
	new cjs.ButtonHelper(this.btn_openbox, 0, 1, 2, false, new lib.btn_submit(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_openbox).wait(1));

	// background
	this.instance_4 = new lib.background("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(667,323,1,1,0,0,0,637.5,301.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(696.5,344.5,1275,603);




// bootstrap callback support:

// (lib.Stage = function(canvas) {
// 	createjs.Stage.call(this, canvas);
// }).prototype = p = new createjs.Stage();

// p.setAutoPlay = function(autoPlay) {
// 	this.tickEnabled = autoPlay;
// }
// p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
// p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
// p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
// p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

// p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }



})(p2 = p2||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var p2, images, createjs, ss, AdobeAn;