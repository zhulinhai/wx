(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"666_atlas_", frames: [[1336,434,634,311],[1336,0,703,432],[0,624,201,221],[0,0,1334,622],[203,624,427,35]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._634311 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._703432 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bj = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(4);
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


(lib.补间11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.482)","rgba(255,255,255,0)"],[0,0.518,1],-32.2,-19.6,32.2,19.6).s().p("AoaCgIGyrHIKDGIImyLHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.8,-55.2,107.8,110.4);


(lib.sprite8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-99,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite8, new cjs.Rectangle(-99,-108,201,221), null);


(lib.shape20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],27.8,48.2,-27.8,-48.2).s().p("ABaEbQixmOk4laIDIhzIGjLXIA8BoIAEAGIBzDHIAAABIAAABIABAAIjIBzQguiWhAiQg");
	this.shape.setTransform(-40,-46.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],48.2,27.8,-48.2,-27.8).s().p("ADcDIQlhkAm7iPIBzjIILYGkQBACQAuCXIDIh0IhzDHQhzhrh/hcg");
	this.shape_1.setTransform(-57.7,-19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],0,66,0,-45.3).s().p("Ag+GJQAumyhinHIDlAAIAANJQg4BOg+BKg");
	this.shape_2.setTransform(-11.6,-70.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],55.6,0,-55.7,0).s().p("AEiBAQmygunHBhIAAjlINJAAQB/BcBzBqIB0jGIgBAAIABAAIAAAAIAAAAIAAABIAADkQiagjicgQg");
	this.shape_3.setTransform(-59.9,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],48.2,-27.9,-48.2,27.7).s().p("ApADIILZmkQCcAQCaAjIAAjlIByDGQiWAuiPBAQmPCwlaE5g");
	this.shape_4.setTransform(-46.2,40.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],27.8,-48.2,-27.8,48.2).s().p("AmPHOIGlrZQCPhACWguIhyjGIAAgBIDGByQhqB0hcB+QkBFhiQG8g");
	this.shape_5.setTransform(-20,57.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],0,-55.6,0,55.7).s().p("AhyJYIAAtKQBch+Bqh0IjFhyIAAAAIgBAAIAAgBIDlAAQgjCZgRCdQguGyBiHHg");
	this.shape_6.setTransform(11.5,60);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],-27.8,-48.2,27.8,48.2).s().p("AjciXQARidAjiZIjnAAIDHhzQAvCWBACPQCxGPE4FaIjHBzg");
	this.shape_7.setTransform(40,46.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],-48.2,27.9,48.2,-27.7).s().p("ApADIQCWguCQhAQGOixFak3IBzDHIrYGkQidgRiZgiIAADlg");
	this.shape_8.setTransform(46.1,-40);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],-48.2,-27.8,48.2,27.8).s().p("AkKgVQhAiPgviWIjHBzIAAAAIAAgBIBzjHQBzBrB/BcQFhEBG7CPIhzDIg");
	this.shape_9.setTransform(57.7,20);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],-55.7,0,55.6,0).s().p("AjyBzQh+hch0hqIhyDGIgBAAIAAjlQCZAjCdAQQGxAvHIhiIAADlg");
	this.shape_10.setTransform(59.9,-11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],-31.8,58.2,23.8,-38.2).s().p("AlmHXQA+hKA4hOQEAlhCQm6IDHBzImkLYQiQBAiWAug");
	this.shape_11.setTransform(24,-67.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,-119.9,239.9,240);


(lib.shape19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],27.8,48.2,-27.8,-48.2).s().p("ABaEbQixmOk4laIDIhzIGjLXIA8BoIAEAGIBzDHIAAABIAAABIABAAIjIBzQguiWhAiQg");
	this.shape.setTransform(-40,-46.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],48.2,27.8,-48.2,-27.8).s().p("ADcDIQlhkAm7iPIBzjIILYGkQBACQAuCXIDIh0IhzDHQhzhrh/hcg");
	this.shape_1.setTransform(-57.7,-19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],0,66,0,-45.3).s().p("Ag+GJQAumyhinHIDlAAIAANJQg4BOg+BKg");
	this.shape_2.setTransform(-11.6,-70.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],-27.8,-48.2,27.8,48.2).s().p("AjciXQARidAjiZIjnAAIDHhzQAvCWBACPQCxGPE4FaIjHBzg");
	this.shape_3.setTransform(40,46.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],0,-55.6,0,55.7).s().p("AhyJYIAAtKQBch+Bqh0IjFhyIAAAAIgBAAIAAgBIDlAAQgjCZgRCdQguGyBiHHg");
	this.shape_4.setTransform(11.5,60);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],48.2,-27.9,-48.2,27.7).s().p("ApADIILZmkQCcAQCaAjIAAjlIByDGQiWAuiPBAQmPCwlaE5g");
	this.shape_5.setTransform(-46.2,40.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],55.6,0,-55.7,0).s().p("AEiBAQmygunHBhIAAjlINJAAQB/BcBzBqIB0jGIgBAAIABAAIAAAAIAAAAIAAABIAADkQiagjicgQg");
	this.shape_6.setTransform(-59.9,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],27.8,-48.2,-27.8,48.2).s().p("AmPHOIGlrZQCPhACWguIhyjGIAAgBIDGByQhqB0hcB+QkBFhiQG8g");
	this.shape_7.setTransform(-20,57.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],-48.2,27.9,48.2,-27.7).s().p("ApADIQCWguCQhAQGOixFak3IBzDHIrYGkQidgRiZgiIAADlg");
	this.shape_8.setTransform(46.1,-40);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],-48.2,-27.8,48.2,27.8).s().p("AkKgVQhAiPgviWIjHBzIAAAAIAAgBIBzjHQBzBrB/BcQFhEBG7CPIhzDIg");
	this.shape_9.setTransform(57.7,20);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],-55.7,0,55.6,0).s().p("AjyBzQh+hch0hqIhyDGIgBAAIAAjlQCZAjCdAQQGxAvHIhiIAADlg");
	this.shape_10.setTransform(59.9,-11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.416,1],-31.8,58.2,23.8,-38.2).s().p("AlmHXQA+hKA4hOQEAlhCQm6IDHBzImkLYQiQBAiWAug");
	this.shape_11.setTransform(24,-67.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,-119.9,239.9,240);


(lib.shape16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#F7ECEB","rgba(234,205,202,0.89)","rgba(191,145,138,0.459)","rgba(133,101,96,0.451)","rgba(104,78,77,0)"],[0.071,0.145,0.22,0.361,0.478,1],0,0,0,0,0,87.7).s().p("ApnJnQj+j/AAloQAAloD+j/QD/j+FoAAQFoAAD/D+QD/D/AAFoQAAFoj/D/Qj/D/loAAQloAAj/j/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-87,174,174);


(lib.yut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3 复制 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AK5EqQgGgtgQglIgCgEQgLgSgVgUQgtgshHgFQgcgCghAAQhCAAgVAJQgqAZgdA5IAAADQgbAsgKAAQgGACgBhOQgChPAEABIBniTQAsg5AdgfQAmgpA1gqIAAAAIACADQAzgqAtgWQAWgKAugPQApgNAMABQADAAAOBMQAQBWAMBfIAVCrQAJBJACAhQgEBsAEAAIh/ACQAAgPgDgWgApZE4IgBABQAAABAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQjTgIk6gEQlmgFiJAGQh3AHhhgKIg6gFIgDgBIgCgCIAAgEIACgCQAHgECEhrQCVh4BhhTQBqhZB6hMQB3hLBAgSIAAAAQA5gOEugRQEHgPC/gDIFHABQCyABAoAGIAiAAQApAAAJANIABAEIABAQIAAACQgIAZgoAvIAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQglApiFCtQiIC0gSAVQgrA0gdATQguAehPANIgBAAIhaABQhyAAikgEgAPPE3QgOjBgXhnQgNg7gYhaIgYhgIgNhQIBHACQBXADBKAJIAAAFQCJAKBIARQAbAGAOAGIAHABIABAEIABAAQAEAEARAoQAZA7ANA9IAAAEIAbB/QAPBFAFAtQAJBLgBAeIAAAFIAAAAQgHgFhpAKQhfAJhMAKQg3AJhQAEIhBACQgLAAAAAAgAZHEiQgJgogQg9Qggh4gmhaIh1kWQABgCBEAXQBHAWAzATQAkAPAyAPQAmAOAdAjIAAAGIA3BUQA7BdANApIAAADQALAhARAtQAMAigBARQgBAWgFAGQgGAIgZALQgKAJgNAIQgaASgRAAIhrAHIhXAEIgBgBg");
	mask.setTransform(307.2,139.1);

	// 图层 4 复制
	this.instance = new lib.补间11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-64.9,92.9,3.226,3.226,-24.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:300.5},9).to({x:600.7,y:143.6},8).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.uyttt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3 复制 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ARdG5QgZgOACgqQAEhcAai5QAhj2AkhVQAjhTAogoQAggYAAACIAWA/QAaBNATBJQAVBMAeCNQAcCCgBAEQgXgCgdAAQg7ABgiAaQggAZgRA1QgbBXgGANQgUAqgIAAQgKgHgPAHQgNAHgMAAQgMAAgLgHgAbpGjQgGAAgNgYQgPgbgRgtQgTgwgGgGQgHgJgqgSQgjgQgggIIgXgGQhsmngZhBQgQgogGgZIgDgRIAzARIBmAlQApAPAsAVIAiARQABgBAgBUQAkBcAQA4IAgBoQAPA2ARBKIAwDHQhQAJgOAAIgCgBgAdJGbIAAAAIAAAAIAAAAgADqF2Qj4gal3gSQl6gRiOAIQhhAFkiACQklAChfAFQhoAGiaAOQhzAKAAgCQABgCgGgKIgFgJQCxjsCLiTQBghnB1hrQBmheAsgeQAfgWAYgCQAqgBAwgHQBBgJGugOQFngMDNgEQCagDEhAHQE4AGCPALQBmAHBzAGQBEAFAOAVQAOAVgJA5QgDAUgUBXQgTBRgeBuQgnCSgaBHQgiBfgKATQgSAjgiAOQgsAUh8ADIgyABQiLAAi+gUgAfBGFQgNgDglhoIgviMIgsh9QglhlgYg+QgZg9gYgtIgUggIgCgWQADgBBOA+QBTBDAQAZQARAcAoBbQAhBJAcBHQA0CBAFAmQAHAtgeAhQgTAWgLAHQgKAGgLAAIgIgBg");
	mask.setTransform(-73.9,177.2);

	// 图层 4 复制
	this.instance = new lib.补间11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-462.6,133.7,3.226,3.226,-24.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:101.5,y:102.8},9).to({x:600.7,y:173.5},8).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.sprite17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape16("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite17, new cjs.Rectangle(-87,-87,174,174), null);


(lib.sprite9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite8();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,180);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,scaleY:0.99,rotation:153.5,alpha:0.77},13).to({rotation:151.5,alpha:0.828},1).to({scaleX:0.99,scaleY:0.99,rotation:150.1,alpha:0.871},1).to({scaleX:0.99,scaleY:0.99,rotation:141.7,alpha:0.91},2).to({scaleX:0.99,scaleY:0.99,rotation:137.4,alpha:0.922},1).to({scaleX:0.99,scaleY:0.99,rotation:131.8,alpha:0.941},1).to({rotation:126.1,alpha:0.961},1).to({scaleX:0.99,scaleY:0.99,rotation:120.6,alpha:0.98},1).to({scaleX:0.99,scaleY:0.99,rotation:116.3,alpha:1},1).to({scaleX:0.99,scaleY:0.99,rotation:107.6,alpha:0.289},1).to({rotation:94.5,alpha:0.949},1).to({scaleX:0.99,scaleY:0.99,rotation:81.7,alpha:0.922},1).to({scaleX:0.99,scaleY:0.99,rotation:70.2,alpha:0.898},1).to({scaleX:0.99,scaleY:0.99,rotation:58.4,alpha:0.879},1).to({scaleX:0.99,scaleY:0.99,rotation:46.9,alpha:0.852},1).to({rotation:38.1,alpha:0.828},1).to({scaleX:0.99,scaleY:0.99,rotation:29.5,alpha:0.809},1).to({rotation:26.8,alpha:0.738},1).to({scaleX:0.99,scaleY:0.99,rotation:23.3,alpha:0.641},1).to({scaleX:1,scaleY:1,rotation:6.5,alpha:0.18},5).to({scaleX:1,scaleY:1,rotation:0.3,alpha:0.012},10).wait(1).to({rotation:0,alpha:0},0).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-113,201,221);


(lib.grgg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape19("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.shape20("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:15.6},1).to({scaleX:1,scaleY:1,rotation:46.9},2).to({scaleX:1,scaleY:1,rotation:172.2},6).to({rotation:187.8},1).to({scaleX:1,scaleY:1,rotation:203.3},1).to({scaleX:1,scaleY:1,rotation:234.9},2).to({scaleX:1,scaleY:1,rotation:344.4},7).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,-119.9,239.9,240);


(lib.di = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.补间11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-229,470.6,3.226,3.226,-52.5,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390.9,300.7,323.9,338.6);


(lib.sprite18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite17();
	this.instance.parent = this;
	this.instance.setTransform(-1.3,0.2,0.295,0.295);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.5,scaleY:0.5,alpha:0.711},5).to({scaleX:0.54,scaleY:0.54,alpha:0.859},1).to({scaleX:0.58,scaleY:0.58,alpha:1},1).to({scaleX:0.41,scaleY:0.41,alpha:0.34},16).to({scaleX:0.37,scaleY:0.37,alpha:0.172},4).to({scaleX:0.34,scaleY:0.34,alpha:0.039},3).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0},0).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-25.5,51.4,51.4);


(lib.kar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.instance = new lib.yut();
	this.instance.parent = this;
	this.instance.setTransform(253.4,6.2,1,1,0,0,0,142.2,77.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// 图层 3
	this.instance_1 = new lib.grgg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(600.5,229.3,0.102,0.243,2.4,0,0,68.7,49);
	this.instance_1.alpha = 0.59;

	this.instance_2 = new lib.grgg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(409.1,245.5,0.171,0.314,2.4,0,0,67.2,48.2);
	this.instance_2.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(30));

	// 图层 2
	this.instance_3 = new lib.sprite18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(318.5,144.9,1.359,1.359,0,0,0,0.1,0.1);
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.sprite18();
	this.instance_4.parent = this;
	this.instance_4.setTransform(153.7,140,1.122,1.122,0,0,0,0.1,0.1);
	this.instance_4.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(30));

	// 图层 1
	this.instance_5 = new lib._634311();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.6,-212.2,819.7,523.2);


(lib.gggf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhdBAcuIBjghUAe5gJvAhWgKaUBCqgU0AMNgDdQMOjcE4hkQCcgyAAgGIV4m9QocC6qDDZQ0IGxoHCcUgNAAD9g1gAQYUg5cARmgFGABrQkyBklcBbg");
	mask.setTransform(595.4,162.9);

	// 图层 2
	this.instance = new lib.di();
	this.instance.parent = this;
	this.instance.setTransform(681.2,-40.4,1.215,1.215,-9.2,0,0,609.5,166);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:165.9,rotation:0,x:1553.2,y:-174.5},12).to({x:2023.2,y:-301.5},14).to({x:2392.2,y:-436.5},12).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,199.5,25.5,149.4);


(lib.yutt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.instance = new lib.uyttt();
	this.instance.parent = this;
	this.instance.setTransform(544.4,-109.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 3
	this.instance_1 = new lib.grgg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(688.1,280.7,0.066,0.366,2.4,0,0,66.3,47.8);
	this.instance_1.alpha = 0.59;

	this.instance_2 = new lib.grgg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(573.6,318.5,0.111,0.492,2.5,0,0,64.8,47.2);
	this.instance_2.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// 图层 6
	this.instance_3 = new lib.sprite9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(640.2,95.7,0.348,0.348);
	this.instance_3.alpha = 0.309;

	this.instance_4 = new lib.sprite9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(588.5,22.7,0.348,0.348);
	this.instance_4.alpha = 0.309;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// 图层 2
	this.instance_5 = new lib.sprite18();
	this.instance_5.parent = this;
	this.instance_5.setTransform(487.1,163,2.725,2.725,0,0,0,0.2,0.1);
	this.instance_5.compositeOperation = "lighter";

	this.instance_6 = new lib.sprite18();
	this.instance_6.parent = this;
	this.instance_6.setTransform(179.1,156.9,1.866,1.866,0,0,0,0.2,0.1);
	this.instance_6.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// 图层 1
	this.instance_7 = new lib._703432();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.yutt, new cjs.Rectangle(-150.1,-209.9,853.2,641.9), null);


// stage content:
(lib._666 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 11
	this.instance = new lib.yutt();
	this.instance.parent = this;
	this.instance.setTransform(1099.7,326.1,0.481,0.481,0,0,0,351.7,216.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).wait(1).to({regX:351.5,regY:201.4,scaleX:0.52,scaleY:0.52,x:1064.9,y:323.7,alpha:0.164},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:1023.4,y:329.4,alpha:0.359},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:982.9,y:334.9,alpha:0.551},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:950.2,y:339.3,alpha:0.705},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:928.9,y:342.2,alpha:0.805},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:910.6,y:344.6,alpha:0.891},0).wait(1).to({regX:351.6,regY:216.1,scaleX:0.7,scaleY:0.7,x:887.7,y:358.2,alpha:1},0).wait(1).to({regX:351.5,regY:201.4,scaleX:0.75,scaleY:0.75,x:869,y:350.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:847.8,y:353.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:826.5,y:355.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:807.6,y:358.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:794.3,y:360.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:784.2,y:361.6},0).wait(1).to({regY:216,scaleX:1,scaleY:1,x:771.5,y:378},0).to({x:784.5,y:374},28).to({x:772.9,y:377.6},26).to({x:771.5,y:378},3).to({x:780.8,y:375.2},22).to({x:784.5,y:374},9).to({x:771.5,y:378},32).wait(26));

	// 图层 10
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(38,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(177));

	// 图层 9
	this.instance_2 = new lib.kar();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1059.3,294.6,0.498,0.498,0,0,0,317.1,155.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:317,regY:155.5,scaleX:0.52,scaleY:0.52,x:1029,y:297,alpha:0.09},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:1012.9,y:298.4,alpha:0.139},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:979.3,y:301.2,alpha:0.239},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:920.3,y:306.1,alpha:0.416},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:851,y:311.9,alpha:0.623},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:782.2,y:317.7,alpha:0.829},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:725.1,y:322.6,alpha:1},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:674.4,y:325.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:601.5,y:329.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:528.1,y:333.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:462.6,y:337.6},0).wait(1).to({regX:317.1,scaleX:0.95,scaleY:0.95,x:415.9,y:340.3},0).wait(1).to({regX:317,scaleX:0.96,scaleY:0.96,x:392,y:341.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:374.3,y:342.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:362.1,y:343.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:354.4,y:343.9},0).wait(1).to({scaleX:1,scaleY:1,x:343,y:344.5},0).to({x:360,y:340.5},35).to({x:343,y:344.5},30).to({x:360,y:340.5},33).to({x:343,y:344.5},35).wait(27));

	// 图层 3
	this.instance_3 = new lib.gggf();
	this.instance_3.parent = this;
	this.instance_3.setTransform(448,429.7,0.787,0.787,-11.3,0,0,0.3,0.7);

	this.instance_4 = new lib.gggf();
	this.instance_4.parent = this;
	this.instance_4.setTransform(448.6,468.6,0.787,0.787,-13,0,0,0.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3}]},15).wait(162));

	// 图层 4
	this.instance_5 = new lib.gggf();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-175,231.8,1,1,5.8,0,0,-0.1,0.3);

	this.instance_6 = new lib.gggf();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-89.5,184.8,1,1,8,0,0,-0.1,0.2);

	this.instance_7 = new lib.gggf();
	this.instance_7.parent = this;
	this.instance_7.setTransform(218.5,273.7,1,1,1.7);

	this.instance_8 = new lib.gggf();
	this.instance_8.parent = this;
	this.instance_8.setTransform(208.1,322.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},6).wait(171));

	// 图层 8
	this.instance_9 = new lib.bj();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(177));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(667,311,1334,622);
// library properties:
lib.properties = {
	width: 1334,
	height: 622,
	fps: 32,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/666_atlas_.png", id:"666_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;