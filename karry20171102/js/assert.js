(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"666_atlas_", frames: [[880,1437,311,139],[1193,1377,311,139],[340,1459,311,139],[340,1296,335,161],[0,1463,311,139],[1506,1377,311,139],[1819,1377,164,164],[2012,65,17,20],[880,1296,311,139],[1975,0,63,63],[1493,1680,315,41],[1336,0,637,628],[0,0,1334,646],[1336,1064,634,311],[1336,630,703,432],[0,1296,338,165],[1975,65,35,42],[1193,1518,135,135],[1330,1518,135,135],[1467,1518,135,135],[1604,1518,135,135],[653,1519,135,135],[1741,1543,135,135],[1878,1543,135,135],[790,1578,135,135],[927,1578,135,135],[313,1600,135,135],[450,1600,135,135],[0,1604,135,135],[677,1296,201,221],[0,648,1334,646],[1064,1655,427,35]]}
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



(lib._001 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._002 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._003 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._004 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._444 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._444png复制 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._52 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._55 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._555 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._56 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._57 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._58 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._59 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._634311 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._703432 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._888 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib._999666 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.a1 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.a10 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.a11 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.a12 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.a2 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.a3 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.a4 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.a5 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.a6 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.a7 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.a8 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.a9 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.bj = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["666_atlas_"];
	this.gotoAndStop(31);
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


(lib.vxvxvcv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._444png复制();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,311,139);


(lib.vvdgg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPAQQgGgHAAgJQAAgJAHgGQAHgHAIABQAIAAAHAGQAGAHAAAIQAAAKgGAGQgHAGgJABQgIAAgHgHgAgGgGQgCADAAADQAAAFADADQADABACAAQAEABADgDQACgCABgFQgBgDgCgDQgDgCgEAAQgDAAgDACg");
	this.shape.setTransform(221.4,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhVBQQAMgTAHgRIAMAFQgIASgLATIgMgGgAglAzIALgFIARAgIgNAGIgPghgAAyAuIALgGIAXAjIgNAIIgVglgAAGAyIAMgFIARAgIgNAFQgHgQgJgQgAgkAeQAYgNAJgYIgTgNIAHgKIAPAKQADgMAAgOIgUAAIAAgNIAVAAIAAgaIANAAIAAAaIApAAQgCA0AEASQACAKAFAAQADAAABgGIADgWIANAEIgDAYQgEAQgNAAQgPAAgFgZQgDgPAAgrIgbAAQAAASgEAQIAYAPIgJAMIgUgPQgKAbgYAOIgKgLgAhSAkIgCgPIAPACQAKAAAAgKIAAgTIgZAHIgCgNIAbgHIAAgbIgZAAIAAgMIAZAAIAAgaIANAAIAAAaIAVAAIAAAMIgVAAIAAAXIATgGIABANIgUAGIAAAZQAAAVgUAAIgQAAg");
	this.shape_1.setTransform(209.2,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhUBLQAeggAAg+IABgWIgZAAIAAgNIAZAAIAAggIAOAAIAAAgIAoAAIgCBpQAAAfgYgBIgUAAIgDgQIAUACQAMAAABgRQACgpAAgyIgbAAIAAAXQgBBEggAlIgLgMgABHBRIAAgSIgnAAIAAASIgOAAIAAiQIBDAAIAACQgAAgAzIAnAAIAAhlIgnAAg");
	this.shape_2.setTransform(190.5,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAHBTQgXAAgBgYIAAgVIgyAAIAAANIgPAAIAAhvIBBAAIAAgWIAPAAIAAAWIBAAAIAABiIhAAAIAAAVQAAALAKAAIAqAAQALgBADgHQACgJACgQIAOAGQgCAOgCAJQgFARgTAAgAgCAZIAxAAIAAgdIgxAAgAhDAZIAyAAIAAgdIgyAAgAgCgRIAxAAIAAgdIgxAAgAhDgRIAyAAIAAgdIgyAAg");
	this.shape_3.setTransform(173.4,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag8BWIAAhhQgJAfgMATIgFgPQARgbAJgkIgZAAIAAgMIAZAAIAAgiIANAAIAAAiIAXAAIAAAMIgXAAIAAAcIAFgFIAUAQIgJAJIgQgOIAABbgAAcBVIgDgPIAVABQAMAAAAgMIAAg+IhUAAIAAgMIBxAAIAAAMIgQAAIAABBQAAAXgUAAIgXAAgAgQA9IAAg2IA0AAIAAAvIgoAAIAAAHgAgEArIAcAAIAAgYIgcAAgAgUgdQAdgJAJgRIgnAAIAAgLIArAAQABgIAAgLIANAAIgBATIAuAAIAAALIgxAAIgCAEQAYAKAWALIgHALIgtgWQgMAPgXAIIgJgLg");
	this.shape_4.setTransform(155,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhWBLQAPgUAAg2IAAhBIBNAAIgLgPIALgHIAMAQIgKAGIBKAAIAAAMIiMAAIAAA2QAAA9gPAYQgGgHgHgFgAg5BPIAAgMIBAAAIAAgZIg0AAIAAgNIA0AAIAAhNIAOAAIAABNIA2AAIAAANIg2AAIAAAZIBCAAIAAAMgAAXAJQAVgVAGgcIANAEIgFAQIAcAaIgLAKQgMgPgKgKQgIAQgLALQgFgGgGgDgAg5AJQAVgUAGgcIANADIgFAQIAZAZIgKAJQgLgNgJgJQgIAOgLAMIgLgJg");
	this.shape_5.setTransform(136.9,14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAYIALgvIAQAAIgOAvg");
	this.shape_6.setTransform(118.6,21.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgxBKQAZgYAAgqIAAhVIBrAAIAACMQAAAUgSAAIgcgBIgDgNIAbABQAJAAAAgKIAAh9IhSAAIAABIQAAAzgcAbIgJgLgAABA9IAAg1IA2AAIAAAtIgqAAIAAAIgAANAqIAdAAIAAgWIgdAAgAhFAxQAGgGAAgKIAAg0IgTAAIAAgNIAgAAIAABEIAUgQIABAPQgSAOgNALgAgGgFIAAgLIAcAAIAAgQIgXAAIAAgMIAXAAIAAgQIANAAIAAAQIAYAAIAAAMIgYAAIAAAQIAeAAIAAALgAhHhLIALgJIAaAcIgMAKQgNgSgMgLg");
	this.shape_7.setTransform(100.6,14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhPBTIAAgOIBJAAIAAguIg3AAIAAgNIB8AAIAAANIg3AAIAAAuIBJAAIAAAOgAAOgaIAJgKQAkAWAcATIgKAMQgbgUgkgXgAhWAFQAigQAfgZIAKAKQgiAageARQgGgIgFgEgABCgYIAAgVIiCAAIAAAVIgOAAIAAgiIBMAAIgKgRIAMgHQAHALAGAKIgHADIBKAAIAAAig");
	this.shape_8.setTransform(83,14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhSBVIgCgOIAPACQAIAAAAgJIAAgvIgXAHIgCgPIAZgHIAAgnIgYAAIAAgNIAYAAIAAgiIAOAAIAAAiIASAAIAAANIgSAAIAAAlIARgFIACANIgTAFIAAA2QAAATgRAAIgSgBgAggBRIAAgOIA2AAIAAgrIgqAAIAAgMIBjAAIAAAMIgsAAIAAArIA0AAIAAAOgAAlgYIAJgJQAYARAQAPIgJAKQgRgPgXgSgAgbgBQAVgPAQgRIAKAJQgUATgSAOgABFgaIAAgSIhOAAIAAASIgOAAIAAggIAxAAIgOgUIAMgHIAQAWIgIAFIAyAAIAAAgg");
	this.shape_9.setTransform(65,14.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbBEQAhgQAUgXQgYghgEg+IgEAAIAAgOIBSAAIAAANQgIA/gYAhQASAWAaAMIgMANQgYgPgRgVQgUAWghASIgJgMgAAjARQAVgeAFg1IgyAAQAEA4AUAbgAhXBAQAbgaAPgbQgUgfgRgZIALgHIAgAxQALgdADgiIg7AAIAAgOIBJAAIAAAOQgGAugNAdIAYAmIgMAJIgUggQgPAcgXAWIgLgKg");
	this.shape_10.setTransform(47,15.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhWBIQAMgSAFgSQAEgRAAghIAAg7QBMgCA7gIIAIAOQhJAIg4ACIAAAXICKAAIAAANIiKAAQAAAvgFARQgFAUgQAXIgJgMgAA5BUIAAgMIhOAAIAAAMIgOAAIAAhQIBqAAIAABQgAgVA7IBOAAIAAgqIhOAAg");
	this.shape_11.setTransform(28.9,15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhJBXIAAh0IBMAAIAABhQAAASgRgBIgUAAIgDgNIAUABQAIAAAAgIIAAgWIgzAAIAAAsgAg8AfIAzAAIAAgTIgzAAgAg8ABIAzAAIAAgSIgzAAgAAeBUIgCgOIAUABQAMAAAAgMIAAhdIAOAAIAABhQgBAVgTAAIgYAAgAAXA0IAAhOIAOAAIAABOgAhVguIAAgNIA5AAIgPgUIALgHIASAWIgJAFIAvAAIgHgDQAKgMAGgMIAOAHIgRAUIA4AAIAAANg");
	this.shape_12.setTransform(11,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,238.2,27.8);


(lib.vvdddf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJBOIABgOIAUABQAJAAACgIIARhBIggAAIADgMIAmAAIgUgcIAKgHIAPARIAfgaIg6AAIADgMIBJAAIgDANIgpAiIAFAGIgGADIAjAAIgCAKIgUAdIgMgEIARgXIgWAAIgTBFQgFARgTAAIgUAAgAhkA4IApgDIAHgZIgkAAIADgLIAjAAIAHgVIgVAAIgCAEIgLAAIAUhNIBNAAIgUBNIgMAAIACgEIgVAAIgFAVIAjAAIgDALIgkAAIgGAYIAogEIgFANIhbAIgAgbgPIAUAAIAFgUIgVAAgAg9gPIAUAAIAGgUIgVAAgAgUguIAUAAIAFgUIgTAAgAg1guIAVAAIAFgUIgVAAg");
	this.shape.setTransform(248.2,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag6BJQA7gUATg4IAOguIANAAQgNAwgGALIALAAIgMAuQgDAKAKAAIAKAAQAKAAAEgJIAIgXIANAFIgJAXQgIAQgSAAIgQAAQgVAAAGgUIAJgkQgWArg0ATIgGgLgAhVBSIAVhKIgaAUIAAgPQAggWAYgbIgqAAIADgMIA5AAIgDAMQgOAQgOAOIgDAIIAJgGQAKAKAIALIgMAIIgPgVIgVBOgAAyAeIAZhcIg9AAIgYBcIgOAAIAbhoIBYAAIgcBogAgwhNIAOgGIAIAXIgPAHIgHgYg");
	this.shape_1.setTransform(230.4,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhjBGQBRggAVg9IhKAAIADgNIBLAAIANguIAPAAIgNAuIBOAAIgDANIhOAAQgGBDA/AWIgQANQg0gWgCg5QgaA0hIAfIgHgNg");
	this.shape_2.setTransform(211.7,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhZBSIAkiGIBAAAIAIgdIAOAAIgIAdIBBAAIgeBvQgGAWgWAAIgcgBIABgPIAcACQAKAAADgLIAahfIgyAAQgFAPgHAMQAZAYAPASIgOALQgOgUgTgVQgSAZgnASIgGgMQAhgPAPgQQAMgOAHgZIgxAAIghB5g");
	this.shape_3.setTransform(193.9,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTBUIAKgjIhWAAIADgNIBWAAIAHgdIhAAAIAEgLIAggoIgkAAIAEgNIAqAAIATgaIAMAEIgQAWIBiAAIgEANIhoAAIggAoIAwAAIAJghIAOAAIgJAhIAzAAIgEALIgyAAIgIAdIBGAAIgDANIhGAAIgJAjg");
	this.shape_4.setTransform(176.1,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcBUIAMgrIhOAAIADgMIBOAAIAGgWIANAAIgGAWIBOAAIgDAMIhNAAIgMArgAg3ALIANgzQgOAMgQAKIgDgOQAkgUAbggIALAHQgLAMgMALIgRBBgAAeAHQgYAAAGgVIADgKQgRAHgUAGIgEgNQAYgFAUgIIAMgrIAOAAIgKAlQAdgNAYgQIAHAKQgcASgkAOIgDAOQgDALAOAAIATAAQANABAFgMQAFgJADgKIAMAEQgEAMgEAHQgJATgWAAg");
	this.shape_5.setTransform(158.2,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgyBTIAAgMIAZABQANAAADgNIACgJQgeAPg7ARIgFgKQA4gNAlgTIgDgHQgdAOgzAOIgEgKQAxgLAggPIgEgFQgaAKgnAJIgEgLQApgHAdgKIgpAAIABgJIBvAAIgDAJIgwAAIgKAFQAHAJACALIA1gUIADAKIghAMQAMAWAeAFIgLAMQgggJgLgaIgKAEQAAAGgBAHQgGAYgYAAIgWAAgABAAJIAEgPIiGAAIgDAPIgNAAIAGgYICfAAIgHAYgAAzgUIABgEIhcAAIgBAEIgLAAIAIgeIBzAAIgIAegAgmggIBcAAIADgKIhbAAgAhEg7IACgJIBPAAIgDgKIANgEQADAHACAHIBKAAIgCAJg");
	this.shape_6.setTransform(140.5,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag+BUIACgOIAZABQAKAAADgJIAEgMIhSAAIADgLIBRAAIADgJIAtgMIhsAAIADgLICFAAIgFAPIg4APIAAACIBMAAIgDALIhNAAIgEAOQgEAUgXAAIgaAAgAAtABIACgFIhdAAIgCAFIgNAAIALgoIB4AAIgLAogAgsgPIBeAAIAEgNIheAAgAhHgxIADgMIBNAAIgGgPIAPgHIAIASIgHAEIBSAAIgDAMg");
	this.shape_7.setTransform(122.5,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhVBTIAsilIANAAIgKAmIAJgFQAHAMADAMIgMAHQgDgNgFgKIghB8gAg8BIQAegNAMgNQAKgLAHgYIgNAAIgCAHIgNAAIAShDIA1AAIAdghIAMAGIgaAbIAeAAIgSBDIgNAAIACgHIgQAAIgNAxQgCAHAHAAIAMAAQAIAAADgIIAJgVIAMAFIgJAVQgHAPgRAAIgPAAQgTAAAFgTIANgxIgSAAQgIAbgLAOQgOAQgfAOQgDgFgEgFgAgLAAIBIAAIAKglIhIAAgAhWAAIATgrIAMACQgJAVgLAVIgLgBgAAFhLIAMgHIAMAYIgOAIQgDgLgHgOg");
	this.shape_8.setTransform(104.3,14.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTAXIAWgsIARAAIgaAsg");
	this.shape_9.setTransform(84.2,20.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhfBUIAchmIA4AAIAOgUIAMAFIgOAPIBHAAIgbBmIgOAAIACgHIhwAAIgCAHgAhMBCIBwAAIAUhIIhxAAgAhBA0QAegGATgIIgSgJIAIgIIAXALQATgJAIgIIgzAAQgPALgOAJIgGgHQAZgPARgQIAOAAIgKAIIA5AAIgCAKQgNAMgUAKIAYANIgLAKIgZgQQgWALggAHQgCgFgDgFgAAXgnIAIgKIA8AXIgIALIg8gYgAhSgaQApgLAggMIAEAKQgcAKguAOIgDgLgABKgnIAEgPIiEAAIgEAPIgPAAIAIgbIBKAAIgEgLIAPgGIAGARIBGAAIgIAbg");
	this.shape_10.setTransform(68.7,14.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhkBBQBJgbAXgwIhKAAIADgMIBMAAIALgqIhBAAIADgNICXAAIgDANIhGAAIgLAqIBOAAIgDAMIhMAAQABA1A6ASIgQAPQgzgXgFgzQgZAwhHAcIgHgNg");
	this.shape_11.setTransform(49.8,14.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgsBPIABgNIATAAQAIAAADgIIAFgUIgsAAIgBAFIgNAAIALgnIB7AAIgKAnIgNAAIACgFIgrAAIgFAXQgFATgSgBIgUAAgAgxAcIBjAAIADgOIhiAAgAhbBEQAhgMAYgLIAFAKIg6AXQgBgFgDgFgAAOA4IAJgLIAwAUIgKAMQgVgLgagKgAhHgFIACgKIBJAAIgCgIIANgFIg0AAIgCAGIgMAAIAPg4ICAAAIgPA4IgNAAIACgGIgzAAIADANIBKAAIgDAKgAgigmIBnAAIADgKIhnAAgAgdg6IBnAAIADgKIhnAAg");
	this.shape_12.setTransform(31.6,14.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhgBPIAEgNIBIAAIAIgdIg5AAIAEgNIA5AAIAHgZIgzAAIAEgMIByAAIgDAMIgzAAIgHAZIA5AAIgDANIg6AAIgHAdIBIAAIgDANgAhPgOQA9gbAlglIATAAIgEAEQATAmAsASIgNAOQgpgWgWglQgiAhg8AcIgGgMg");
	this.shape_13.setTransform(14,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268.7,26.8);


(lib.vdgdfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXBIIADgMIAUABQAJAAAEgIIAcg9IggAAIAFgLIAmAAIgPgaIALgHIALAQIAkgZIg6AAIAFgLIBJAAIgFANIguAgIADAFIgGADIAjAAIgEAJIgaAcIgKgDIAUgXIgWAAIgfBBQgHAQgSAAIgVgBgAhuA0IApgCIALgYIgkAAIAGgKIAjAAIAKgUIgVAAIgCAEIgMAAIAihIIBNAAIghBIIgMAAIACgEIgVAAIgJAUIAjAAIgFAKIgjAAIgLAXIApgEIgHALIhcAIgAgZgPIAUAAIAIgSIgUAAgAg7gPIAUAAIAJgSIgUAAgAgMgrIATAAIAJgTIgUAAgAgugrIAVAAIAJgTIgVAAg");
	this.shape.setTransform(250.3,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhJBFQA/gUAcgzQAKgSALgaIAOAAQgVAtgHAKIALAAIgVAsQgEAJAJAAIAKAAQAKAAAGgIIANgXIALAFIgOAWQgJAPgTAAIgPAAQgUAAAIgTIAQgiQgeApg4ASIgEgKgAhlBNIAghFIgcASIACgOQAlgUAcgaIgqAAIAFgLIA5AAIgGALQgPAPgRANIgFAIIALgGIAOAUIgOAIIgLgUIgjBJgAArAcIAohWIg9AAIgoBWIgNAAIAthhIBYAAIguBhgAglhIIAPgGIAEAWIgQAGIgDgWg");
	this.shape_1.setTransform(232.7,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhsBBQBWgdAgg5IhKAAIAFgNIBLAAIAVgrIAPAAIgVArIBOAAIgFANIhOAAQgSA+A8AVIgTANQgwgVAIg2QgjAxhNAdIgFgNg");
	this.shape_2.setTransform(213.6,13.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhkBNIA7h+IBAAAIANgbIAOAAIgNAbIBAAAIgxBoQgJAUgWAAIgbAAIAEgNIAaABQALAAAFgKIAqhZIgzAAQgHAOgJAMQAVAVALARIgQAKQgKgSgPgUQgWAXgqARIgEgLQAjgNASgQQANgNANgXIgyAAIg1Bxg");
	this.shape_3.setTransform(195.8,13.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiBPIAQghIhWAAIAGgMIBVAAIANgbIhBAAIAGgLIAnglIgkAAIAGgMIAqAAIAXgZIAMAEIgVAVIBjAAIgGAMIhoAAIgnAmIAwAAIAPggIAOAAIgPAgIAzAAIgGAKIgyAAIgNAbIBGAAIgFAMIhFAAIgQAhg");
	this.shape_4.setTransform(178.3,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgrBPIASgoIhOAAIAGgMIBOAAIAKgVIANAAIgJAVIBNAAIgGAMIhMAAIgUAogAg7AKIAXgvQgRALgRAJIgBgMQAogUAfgdIAKAGIgaAVIgcA9gAAcAGQgYAAAJgTIAFgJQgTAGgVAGIgCgMQAZgGAWgHIATgoIAOAAIgQAiQAfgLAcgQIAEAKQgfAQgmAOIgGANQgFALAPAAIASAAQAOAAAGgLIAMgSIALAFIgLASQgMAQgWAAg");
	this.shape_5.setTransform(160.5,13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhBBOIACgLIAZABQANAAAGgMIAEgJQghAOg/AQIgCgKQA6gMAogRIgBgHQggANg2ANIgBgJQAzgLAhgNIgDgFQgbAJgoAJIgDgKQArgIAdgIIgoAAIADgJIBuAAIgEAJIgwAAIgLAEQAHAJAAAJIA3gSIABAJIgiAMQAIAVAeAEIgPAMQgcgJgIgYIgJADIgEANQgLAWgXAAIgYAAgAA+AJIAHgOIiFAAIgHAOIgNAAIALgXICfAAIgLAXgAA3gSIABgEIhcAAIgBAEIgMAAIANgdIB0AAIgNAdgAgfgeIBbAAIAEgJIhcAAgAg5g4IADgIIBPAAIgCgJIAPgEIACANIBKAAIgEAIg");
	this.shape_6.setTransform(142.7,13.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhNBOIAFgNIAYACQAKAAAFgJIAFgLIhRAAIAEgLIBSAAIAEgIIAvgLIhsAAIAFgKICEAAIgGANIg7AOIgBACIBNAAIgFALIhNAAIgGANQgIATgXAAIgagBgAAsAAIADgEIhdAAIgDAEIgNAAIASgkIB4AAIgSAkgAgqgOIBeAAIAFgMIhdAAgAg/guIAFgLIBNAAIgEgOIAQgHIAFARIgIAEIBSAAIgEALg");
	this.shape_7.setTransform(124.7,13.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhhBOIBIiaIANAAIgQAjIAKgFQAEAMACALIgOAGQgBgMgDgJIg2B0gAhGBDQAggMAOgMQANgLAKgVIgNAAIgDAGIgNAAIAehAIA1AAIAigeIALAGIgeAYIAeAAIgeBAIgNAAIADgGIgPAAIgVAtQgEAHAHAAIAMAAQAIAAAFgHIAMgVIALAFIgNAUQgKAPgRAAIgPAAQgSAAAIgSIAWguIgTAAQgLAYgOAOQgRAPgiANIgFgKgAgJAAIBIAAIARgjIhJAAgAhTAAIAagoIALABIgbApIgKgCgAAUhHIAOgGIAHAWIgPAIQgCgLgEgNg");
	this.shape_8.setTransform(106.2,13.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWAVIAdgpIARAAIgiApg");
	this.shape_9.setTransform(85.3,19.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AATBPIACgGIhwAAIgDAGIgOAAIAthfIA4AAIASgTIALAEIgQAPIBHAAIgtBfgAhWA+IBxAAIAfhEIhwAAgAhIAxQAegGAUgHIgQgJIAKgHIAVAKQAUgJAKgHIgzAAIggATIgFgHQAbgNAUgQIAOAAIgLAIIA5AAIgEAJQgPALgWAKIAWAMIgMAJIgXgPQgYAKghAHIgDgJgAAfgkIAKgJIA4AVIgKAKIg4gWgAhMgYQArgLAhgLIACAKQgdAJgwANQAAgGgBgEgABSgkIAHgPIiEAAIgHAPIgOAAIAMgaIBKAAIgDgKIARgGIADAQIBGAAIgMAag");
	this.shape_10.setTransform(70.7,13.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhwA9QBNgZAggtIhKAAIAFgMIBMAAIASgnIhCAAIAGgMICXAAIgGAMIhFAAIgTAnIBPAAIgFAMIhNAAQgHAyA2ARIgSANQgugVADgwQgiAshLAbIgFgMg");
	this.shape_11.setTransform(52,13.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag6BKIADgMIATAAQAIAAAEgHIAJgTIgsAAIgDAFIgMAAIARglIB8AAIgSAlIgMAAIACgFIgpAAIgKAVQgIASgTgBIgTAAgAg3AaIBjAAIAGgMIhjAAgAhoA/QAjgLAbgKIADAKIg/AWQAAgFgCgGgAADA1IALgKIAtATIgMAKQgTgKgZgJgAhIgFIAFgKIBJAAIgBgGIANgFIACALIBKAAIgFAKgABDgUIADgGIhnAAIgDAGIgMAAIAZg1ICAAAIgZA1gAgdgkIBnAAIAFgJIhnAAgAgUg2IBnAAIAFgKIhnAAg");
	this.shape_12.setTransform(33.8,13.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhoBKIAGgMIBIAAIANgbIg5AAIAFgMIA5AAIALgYIgyAAIAGgLIByAAIgFALIgzAAIgLAYIA5AAIgGAMIg5AAIgLAbIBHAAIgFAMgAhHgOQBCgYArgjIASAAIgFAEQANAjApASIgPANQglgVgQgjQgoAfhBAbIgDgNg");
	this.shape_13.setTransform(15.7,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268,25.2);


(lib.uutrbbb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._444();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,311,139);


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


(lib.sdghh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAIBfQASglAAhcIAAhRIDXAAIAABJIgpAAIAAATIAtAAIAAAYIgtAAIAAAUIA0AAIAAAYIgTAAIALARIglARQAVAJAbACIgWAhQgzgOgeggIgBAeQgxANgRAGIgMgbQAGgGgBgVIAAgbIgUAAQgFAwgTAiQgNgSgNgOgABwBXIAngLQgNgNgJgSIgRAAgACzBAIAhgTIg1AAQAJALALAIgACBAVIAnAAIAAgUIgnAAgAA8AVIAkAAIAAgUIgjAAIgBAUgACBgXIAnAAIAAgTIgnAAgAA9gXIAjAAIAAgTIgjAAgAA9hDICSAAIAAgUIiSAAgAEcBkQAIgIAAgPIAAhiIAgAAIAABeIAagRQABATACAQQgnAXgLALgAFuB8IAAiqICBAAIAABFIhgAAIAAARIBrAAIAABUIggAAIAAgNIhLAAIAAANgAGPBWIBLAAIAAgUIhLAAgAGPgCIBBAAIAAgSIhBAAgAoCBWIAagYIAAhBIgYAAIAAggIA5AAIAABkQAUAVAoAAQBuAAAYgBQgHASgEAPIhMAAIgtAAQgaAAgTgFQgUgHgMgMIgdAegAj/BaQBPg5AchUQgQgcgcgaIAhgUQAbAWAmBLQAjBIA5ApQgVAXgMAPQg3g2gkhKQggBMhDA0QgLgPgTgSgAmxA6QANgRAHgXIgfAAIAAgdIAkAAQABgJAAgjIgcAAIAAgeIAcAAIAAgnIAiAAIAAAnIAmAAIAAgnIAiAAIAAAnIAbAAIAAAeIgbAAIAAAsIAlAAIAAAdIglAAIAAA8IgiAAIAAg8IgqAAQgGAmgRAbQgPgNgSgMgAl2gLIAnAAIAAgsIgmAAIgBAsgAEIgpQARglAJgvIAeAFIgGAcIAmAAIAAAcIgPAtIgagJIANgjIgUAAQgMAigQAcIgMgogAHjg0IAAgQIhgAAIAAAQIggAAIAAgvIA+AAIgIgUIAlgHIAIAbIA9AAIAAAvgAn5hqIAbgQIAjAvIgeATQgQgagQgYg");
	this.shape.setTransform(157.9,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("An9BvQARgeANgcIAfANQgMAagUAjgAFuBoIANgPIhGAFQgQACgJAEIgPgfQANgKAThEIgfAAIAAghIB1AAIAAAhIgxAAQgMAjgNAiIAqgCIgSguIAcgKIAbBAQARggAAhTIgaAAIAAghIAbAAIAAgrIAiAAIAAArIBCAAIgDCOQgBAegBAHQgCAHgFAGQgGAGgIACQgJADglAAIgJgmIAcABQAHAAAEgDQAEgDABgFIABgoIAChSIghAAQgBA4gEAZQgDAYgLAZQgKAZgRAUQgPgMgQgKgAg5B8IAAgNIiqAAIAAhVIAkAAIAAAzIAwAAIAAhEIhqAAIAAghIBqAAIAAgfIhbAAIAAgiIBbAAIAAgjIAlAAIAAAjIBcAAIAAAiIhcAAIAAAfIBqAAIAAAhIhqAAIAABEIAxAAIAAgzIAkAAIAABigABLB7IAAhtICnAAIAABtIgiAAIAAgNIhjAAIAAANgABtBOIBjAAIAAggIhjAAgAk/A/IAegNQAQAfAOAeIggAMQgPgigNgagAAIBdQAYgoAAhBIAAhXIBXAAIgHgSIAngJIALAbIBSAAIAABaIixAAQAABUgiAvIgZgdgABDgoICPAAIAAgcIiPAAgAm3BBIAggIIATA2IghAIIgSg2gAl6BAIAfgKIAWA2IghAKQgJgcgLgagAnhAtIAAhgIBLAAIAAhJIAkAAIAAAVIBrAAIAAAgIhrAAIAAAUIBWAAIAABggAm8ANIB7AAIAAghIh7AAgAEYhKIAAggIBiAAIAAAgg");
	this.shape_1.setTransform(53.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,7.8,206.9,25.5);


(lib.jhhggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhfBPIACgNIBJAAIAIgdIg5AAIADgNIA5AAIAHgZIgyAAIADgMIBzAAIgEAMIgyAAIgHAZIA5AAIgEANIg4AAIgHAdIBHAAIgDANgAhOgOQA8gbAmglIASAAIgFAEQAUAmArASIgMAOQgpgWgVglQgjAhg9AcIgEgMg");
	this.shape.setTransform(379.4,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFA4QgjAUg0AIIgEgNQAugHAggPIgrgVIAXgaIguAAIAEgLIA2AAIAZggIALAHIgUAZIBnAAIgDALIgmAAQgQAagaATIAwAYIgMANIgzgcgAgnAWIAlASQAYgPAPgXIg6AAIgSAUgABLgYIAFgUIiBAAIgFAUIgOAAIAJghIBOAAIgKgTIANgIQAIAMAFALIgKAEIBIAAIgIAhg");
	this.shape_1.setTransform(361.4,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhmBEQAhgFAXgLQgNgKgHgQIALgHIgPAAIAThGIA9AAIAFgQIhLAAIAEgMICgAAIgEAMIhIAAIgEAQIA6AAIgUBOIgOAAIACgIIgyAAQgJAUgMALQAfAMA/AAIgLAOQhEgCgdgPQgYANgnAIIgEgMgAghAsQAMgHAJgSIgrAAQAIAQAOAJgAAGAIIAvAAIAFgSIguAAIgGASgAg1AIIAuAAIAHgSIgwAAgAAQgWIAtAAIAFgSIgtAAIgFASgAgtgWIAvAAIAGgSIgwAAg");
	this.shape_2.setTransform(343.4,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTBUIAKgjIhWAAIADgNIBWAAIAHgdIhAAAIAEgLIAggoIgkAAIAEgNIAqAAIATgaIAMAEIgQAWIBiAAIgEANIhoAAIggAoIAwAAIAJghIAOAAIgJAhIAzAAIgEALIgyAAIgIAdIBGAAIgDANIhGAAIgJAjg");
	this.shape_3.setTransform(325.4,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhTBUIAUhJIgcAWIgCgOQAggVAhgnIAKAIIgbAcIgYBZgAgVBRIABgPIAaABQAMAAADgMIARg8Ig9AAIADgNIBuAAIgDANIgiAAIgSBBQgFAVgXAAIgcAAgAhPgiQAigVAZgcIAKAIQgcAeglAYIgEgNgAAAg5IADgMIBcAAIgEAMg");
	this.shape_4.setTransform(308,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAXIAWgsIARAAIgaAsg");
	this.shape_5.setTransform(287.6,20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMBQIACgNIAVABQANAAADgOIAliGIAOAAIgmCMQgGAVgVAAIgZgBgAhVBQIACgOIATABQALAAAEgNIALgqIguAAIADgMIAvAAIAGgXIAOAAIgIAXIAsAAIgCAMIgsAAIgNAvQgGAVgVAAIgVAAgAhlA8QAUgTAPgTIAKAFQgQAWgVATIgIgIgAgQAbIAMgGQAIATAFATIgOAHQgFgWgGgRgAAVArIAchqIAOAAIgeBqgAhNgbQAagJAZgNIgfgUIAJgJIAkAWQASgLASgNIAIAIQgRAMgRALIAgAVIgLALIgigZQgbAPgdALQgCgFgEgGg");
	this.shape_6.setTransform(271.5,14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgDBTIANgxQgZAagiASIgGgMQAhgOAWgVIglAAIADgLIAvAAIAEgPIgkAAIAPg2IgNAAIADgLIANAAIAEgSIALAAIgEASIATAAIAGgWIALAAIgGAWIAZAAIAHgWIALAAIgHAWIAVAAIgDALIgVAAIgJAiIgKAAIABgGIgaAAIgBAGIgLAAIAJgiIgTAAIgMAsIBSAAIgDAKIgtAAIgDAPIAxAAIgCALIgpAAQAKAVAYAMIgLAMQgYgRgJgaIgNAygAAgggIAZAAIAGgRIgaAAgAheBDIARg+IgMARIgHgJQAbgiAUglIgWAAIACgLIA2AAIgCALIgUAAQgKASgMASIAfAAIgWBQIgdAAIgCAJgAhMAvIARAAIAQg5IgSAAg");
	this.shape_7.setTransform(254.1,14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhEBUIAKgkIgmAEIACgMIAngEIAGgYIgiAAIADgLIAdguIgSAAIADgLIAVAAIAPgbIANADIgOAYIAlAAIgDALIgpAAIgdAtIAVAAIAKgkIANAAIgKAkIAWAAIgDAMIgWAAIgGAWIAZgDIgEANIgYADIgLAlgAACBOQgUAAAFgTIAUhMIANAAIgKAlQAbgOAYgRIAJAIQghAXgeANIgGAXQgCAKALAAIAYAAQAMAAAFgKQAFgLAEgOIAMAEIgKAYQgIATgVAAgAgPgVQAkgYAcglIARAAIgEAGQAJAlAaAOIgMAMQgYgRgLgiQgdAggeAUIgGgJg");
	this.shape_8.setTransform(235.4,14.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAoBNIADgKIh5AAIgDAKIgOAAIApiZICWAAIgpCZgAhKA1IB5AAIAfh0IgiAAIgRA+QgCAIALAAIAVAAIgHAOIgUAAQgXAAAFgUIARhAIgZAAQgMAwgJAPQgLATgeAPIgIgLQAcgOAJgOQAHgLANgvIgiAAg");
	this.shape_9.setTransform(217.7,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTAXIAWgsIARAAIgaAsg");
	this.shape_10.setTransform(197.6,20.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhNBJQAegPAOgSQAOgPAHgeIAMgqIALAAIgLAqQgGAZgJAQIAfAeIgNAKIgZgdQgQAVghAQIgGgLgAhmBLQATgdAQgiIAMAGQgYArgJAUgAATBQQACgGgBgIIATABQALAAACgKIAmiMIAMAAIgmCQQgFATgUAAIgUAAgAAcArIAfhwIAMAAIgfBwgAADAhIAahfIgoAAIgaBfIgNAAIAdhqIBCAAIgdBqgAhPgbIAKgJIAXAXIgOALIgTgZgAg8hHIALgJIAVAYIgOAKQgJgOgJgLg");
	this.shape_11.setTransform(176.3,14.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhnBRIAEgMIAUAAIAPg3ICCAAIgOA3IAUAAIgDAMgAAMBFIAaAAIAMgrIgaAAgAgaBFIAaAAIAKgrIgZAAgAhBBFIAaAAIAMgrIgbAAgAggAJIAYhYIANAAIgXBYgAAggZIALgJQARAOANAPIgMAKQgPgQgOgOgAhEAAIAUhFIANAAIgTBFgAgIgRQAdgbAXgkIAMAEIgPAWIA/AAIgDALIhFAAQgQAUgQAOIgIgIg");
	this.shape_12.setTransform(158,13.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhoBCQASgTAIgQQAIgPAJggIAQg8ICWAAIgDAMIiIAAIgMAsQgKAlgKAUQgKATgVAVIgHgLgAhFBEIADgNIA9AAIAPg7IgvAAIADgNIAwAAIAKgmIAPAAIgKAmIA2AAIgEANIg2AAIgQA7IA+AAIgEANgAAjAOIAMgIIATAbIgOAJIgRgcg");
	this.shape_13.setTransform(140.2,14.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhiBLQATgWALgsIAXhTIAxAAIglCKQgEARgQAAIgQgBIABgMIAOABQAHAAADgIIALgnIgaAAQgKAjgWAbQgDgFgEgEgAg3ALIAYAAIAJgfIgZAAgAgsgfIAZAAIAJggIgZAAgAgXBUIAVhNIBUAAIgUBMIgOAAIAEgLIg7AAIgDAMgAgEA8IA7AAIALgqIg7AAgABRgRIhFAFQgGABgGACIgEgMQAHgEAHgHQAUgVAWgeIAOAEQgUAYgbAeIA7gDIgIgbIANgFQAKAbAHAaIgQAGIgDgQg");
	this.shape_14.setTransform(121.4,14.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTAXIAWgsIARAAIgaAsg");
	this.shape_15.setTransform(102.2,20.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag/BMQAFgDACgFIABgFQgTAGgYAGIgEgKQAvgIAbgMIhAAAIACgHIAyAAIACgHIgmAAIACgIIAlAAIACgHIgoAAIACgHIAoAAIACgHIgQAAIAAADIgLAAIAFgXIA2AAIgEAXIgMAAIABgDIgGAAIgBAHIAsAAIABgHIgGAAIgBADIgKAAIAGgXIA3AAIgGAXIgLAAIAAgDIgQAAIgBAHIAoAAIgCAHIgoAAIgCAHIAmAAIgDAIIglAAIgCAHIAxAAIgCAHIgWAAIAEAJIgaAKQARAFAZADIgKALQgogIgPgKQgLgHgGgLQgNAHgSAFIgDALIAtgHIgCALIgvAHIgJAEgAARA7QATgHAOgHIgyAAQAFAJAMAFgAgdAmIAsAAIACgHIgsAAgAgaAXIAsAAIACgHIgsAAgAAUgDIAhAAIACgIIghAAgAgtgDIAhAAIACgIIghAAgABMgKIADgOIiMAAIgDAOIgMAAIAGgWIBLAAIACgHIgvAAIgBACIgMAAIAHgXIA7AAIACgHIhJAAIACgIIBJAAIACgJIAMAAIgDAJIBLAAIgCAIIhLAAIgBAHIA7AAIgGAXIgMAAIABgCIgwAAIgCAHIBMAAIgGAWgAAVguIAwAAIACgIIgwAAgAgmguIAvAAIACgIIgvAAg");
	this.shape_16.setTransform(86.1,14.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAbBJQgFgUALgsIABgGIhuAAIAEgLIB8AAIgFARQgLAoAFASQADAGAEgIQAGgMAFgSIAMAEQgEANgHAQQgJAQgMAAQgJAAgDgLgAhYgOQAigfAWgmIANAEIgLAPIB4AAIgEAMIh8AAQgXAegaAWIgBgOgAgwgYIAEgMIBxAAIgDAMg");
	this.shape_17.setTransform(69,14.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgpBCQAmgQAZgWQgPgfAMg9IgFAAIAEgNIBTAAIgEANQgYA9ghAfQANAVAWAMIgOANQgVgPgMgUQgZAVgmASIgGgMgAAiARQAdgdATg0IgyAAQgKA2AMAbgAhkA+QAigYAVgbQgLgegKgYIAMgHIAUAvQASgcAMghIg7AAIAEgMIBIAAIgEAMQgRAsgVAdIAOAlIgOAJQgFgRgGgOQgWAageAWIgIgKg");
	this.shape_18.setTransform(49.8,14.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAPBUIAtimIAOAAIgIAfIAlAAIgEANIglAAIgIAdIAhAAIgDAMIghAAIgIAdIAoAAIgEANIgoAAIgKAngAgTBUIAKgnIgkAAIAEgNIAkAAIAHgdIgbAAIAEgMIAaAAIAIgdIgaAAIAEgNIAaAAIAIgfIAOAAIgsCmgAhmBSIABgOIAPAAQAIAAACgHIANgxIgXAKIACgPIAZgIIAKgnIgVAAIADgLIAVAAIAIggIAOAAIgIAgIARAAIgDALIgSAAIgIAgIATgIIgCANIgVAIIgQA7QgEASgTAAIgHAAIgIAAg");
	this.shape_19.setTransform(31.9,14.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhiBUIAehwIBMAAIgYBeQgFARgSgBIgUAAIABgNIATABQAIAAACgHIAGgVIgzAAIgLAqgAhGAeIAyAAIAFgSIgzAAgAg/ABIAyAAIAGgRIgzAAgAAFBRIACgOIAVABQALAAADgLIAYhaIAOAAIgZBdQgGAVgUABIgYgBgAAIAyIAUhLIANAAIgUBLgAhMgtIAEgMIA5AAIgKgTIANgHIAMAVIgKAFIAwAAIgHgDQANgLAKgMIALAHIgVATIA3AAIgEAMg");
	this.shape_20.setTransform(14.6,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,394.7,26.8);


(lib.hnnng = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhiBUIAbhjIBHAAIgVBPQgFASgRAAIgUABIABgOIARABQAIAAADgJIADgNIgsAAIgJAkgAhIAmIAsAAIAFgRIgsAAgAhBALIAsAAIAFgPIgsAAgAAKBRQgTAAAGgUIAPg7IANAAIgHAcQAbgJAfgPIAFAMQghAOgiAMIgEAOQgDALAJAAIAaAAQAJAAADgIIAIgWIANAEQgFAQgEAHQgHAPgTAAgAAjgEQgVAAAFgUIAPg4IAOAAIgIAdQAbgJAbgOIAFANQgfANggALIgCAJQgDAMAJAAIAWAAQALAAAEgIIAIgWIAMAFIgJAWQgGAPgVAAgAgCgfIhGAGIgCgPQAJgEAMgMQANgMANgPIANAGQgUATgVATIAwgDIgHgRIANgHQAKAVAGASIgOAHIgDgLg");
	this.shape.setTransform(338,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVBUIACgHIhbAAIgCAHIgNAAIAVhNIB0AAIgUBNgAhBBCIBaAAIAFgTIhaAAgAg5AlIBaAAIAFgTIhaAAgAhbADQAigKAOgTIgkAAIACgLIAnAAIAHgSIgRAAQgKAJgLAIIgGgKQAXgPAMgUIAMADIgKAOIA0AAIgDALIgdAAIgGASIAjAAIgDALIglAAIgCADIAgAUIgKAJQgPgLgPgIQgQARgfALIgFgMgAA9AAIACgJIgpAAIgDAJIgNAAIAThEIBDAAIgSBEgAAZgUIApAAIAKglIgpAAg");
	this.shape_1.setTransform(320.3,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhnBEQAigFAWgLQgLgKgJgQIALgHIgNAAIAShGIA+AAIAEgQIhLAAIADgMICgAAIgCAMIhIAAIgFAQIA7AAIgVBOIgOAAIACgIIgxAAQgJAUgNALQAfAMA/AAIgLAOQhEgCgdgPQgYANgnAIIgFgMgAggAsQALgHAJgSIgrAAQAIAQAPAJgAAFAIIAwAAIAFgSIguAAIgHASgAg1AIIAvAAIAGgSIgwAAgAAPgWIAuAAIAFgSIgtAAIgGASgAgtgWIAvAAIAGgSIgwAAg");
	this.shape_2.setTransform(301.7,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhgBPIAEgNIBIAAIAIgdIg5AAIAEgNIA4AAIAIgZIgzAAIAEgMIByAAIgEAMIgyAAIgHAZIA5AAIgDANIg6AAIgHAdIBIAAIgDANgAhPgOQA+gbAkglIATAAIgEAEQATAmAsASIgNAOQgpgWgVglQgkAhg7AcIgGgMg");
	this.shape_3.setTransform(283.7,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFA4QgjAUg0AIIgEgNQAugHAggPIgrgVIAXgaIguAAIAEgLIA2AAIAZggIALAHIgUAZIBnAAIgDALIgmAAQgQAagaATIAwAYIgMANIgzgcgAgnAWIAlASQAYgPAPgXIg6AAIgSAUgABLgYIAFgUIiBAAIgFAUIgOAAIAJghIBOAAIgKgTIANgIQAIAMAFALIgKAEIBIAAIgIAhg");
	this.shape_4.setTransform(265.7,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAXIAWgsIARAAIgaAsg");
	this.shape_5.setTransform(252.7,20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag/BJQAdgJANgQQALgNAJgfIgHAAIgPACIgCgMQAHgDAGgFQARgQAQgRIglAAIADgMIA3AAIgIgSIAOgHIAKATIgKAGIA2AAIgDAMIhIAAIAJADQgUAUgSAPIA9gBQgEgLgEgIIAOgIQAJAUAJAXIgPAIIgFgOIgQAAIgQA6QgDALAIAAIAJAAQAIAAAEgJIAIgWIAMAFIgJAXQgHAOgPAAIgQAAQgSAAAFgUIAPg7IgUACQgLAkgMAPQgPATgfAMIgGgMgAhlA3IBAgMIgEAMIg7AOgAhXAXQAOgMAVgXIgbACIAAgMQAVgTAcgpIANAFQgbAhgTAVIAVAAIARgUIALAFQgdAjgZAXIAlgFIgFAMIg0AHg");
	this.shape_6.setTransform(243.6,14.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgxBQIACgOIAWABQAKAAACgJIAKgjIgtACIgUADIgCgPQAMgCAMgFQAegLAZgNIgzAEIgOACIgCgPQAJgCAIgEQAZgLAagRIg9ADQABgFgBgGQBUgDBDgHIgBAMIhPAGIAGAFQggASgaAMIBBgEIAngWIAJAJQg1AehAAaIBUgEIgNgOIAMgJQASARARAVIgNAKIgLgOIgxACIgJAnQgFATgVAAIgXAAgAhjBEQAbgPAcgVIAJAIQgcAUgdASIgHgKgAAVApIAMgJQASAOAVAUIgNALIgmgkg");
	this.shape_7.setTransform(225,14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhkBIQAkgZARgvIAOACQgGAQgIANQAGAcAbAFIAUhKIhPAAIADgNICmAAIgDANIhIAAIgIAbIA9AAIgDAMIg9AAIgKAjQAjACApgCIgIAOQgsABgfgCQgnAAgKgfQgRAXgVAPIgGgMgABPgeIAFgUIh/AAIgFAUIgOAAIAIggIBKAAIgHgPIAQgHIAKASIgJAEIBHAAIgJAgg");
	this.shape_8.setTransform(207,14.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhNBUIAUhLQgPAYgRAQIgDgOQAXgWATghIgYAAIAEgMIAZAAIAHgbIgWACIABgMQAdgCAegEIgBANIgYACIgHAcIAWAAIgEAMIgWAAIgFAUIAIgFQAIAJAGAKIgNAJQgEgLgGgIIgWBQgAAABRQgWAAAGgVIAGgZIANAAIgGAYQgCAKAKAAIARAAQALAAAEgJIAHgPIAMAFIgIAQQgIAPgRAAgAg0BEQANgPAKgSIALAEQgKASgNAQQgEgDgHgCgAA6AoIAMgFIAIAfIgOAFIgGgfgAAKAgIALgGIANAWIgNAHQgEgMgHgLgAA9AfIACgGIhUAAIADgMIBUAAIAEgNIhRAAIADgLIBRAAIADgPIhQAAIADgKIgDACIgIgJQAYgRASgXIAOADIgNANIA0AAIgDALIgTATIAgAAIgTBEgAAAglIAuAAIASgTIgsAAIgUATg");
	this.shape_9.setTransform(189.1,14.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag/BOIABgQQANACAOAAQANAAADgMIAOgyIhSAAIADgMIBSAAIAEgTIA7gjIhwAAIADgNICIAAIgDANIhGAqIgEAMIBNAAIgDAMIhNAAIgNA1QgGAXgZAAIgbAAg");
	this.shape_10.setTransform(171.7,14.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFBQQgYAAAGgXIAGgUIgzAAIgDAMIgPAAIAdhqIBAAAIAGgWIAPAAIgHAWIBBAAIgZBeIhAAAIgFAUQgDAKALAAIAoAAQAMAAAFgHQAFgJAFgPIAOAFIgMAXQgIAQgUAAgAAAAYIAyAAIAIgcIgyAAgAhBAYIAzAAIAIgcIgzAAgAALgQIAyAAIAIgdIgyAAgAg1gQIAyAAIAHgdIgxAAg");
	this.shape_11.setTransform(153.2,14);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhfBHQBCgQA3gcIhuAAIADgLIAZAAIAWhQIAnAAIAMgTIANAEIgLAPIBAAAIgTBHIAagQIAGAJQgRALgTALIgJAiQgHAagYAAIgcAAIABgPQAMACAOAAQAOAAAEgOIAGgYQg9AhhJAUIgEgNgAgqAQIBZAAIAFgQIhaAAgAgjgKIBaAAIAEgQIhaAAgAgcglIBaAAIAEgQIhZAAg");
	this.shape_12.setTransform(134.8,14.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgTBUIAKgjIhWAAIADgNIBWAAIAHgdIhAAAIAEgLIAggoIgkAAIAEgNIAqAAIATgaIAMAEIgQAWIBiAAIgEANIhoAAIggAoIAwAAIAJghIAOAAIgJAhIAzAAIgEALIgyAAIgIAdIBGAAIgDANIhGAAIgJAjg");
	this.shape_13.setTransform(117.4,14.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag3BCIAjiDIAmAAQAWAAAKALQAJAKgFATQgFATgSALQgRAMgUAAIgSAAIgNAxgAgUACIAQAAQAPAAALgGQAKgHADgNQAHgagfAAIgRAAg");
	this.shape_14.setTransform(103.3,13.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgoBCQgLgCgDgEIAFgTQAEAFAKAEQAKADAJAAQAcAAAFgUQABgFgBgFQgCgEgFgDIgQgLQgSgJgEgIQgEgJADgKQAEgRAQgJQAPgKAVAAQAUAAAIAFIgFASQgJgIgTAAQgNAAgJAFQgIAFgDAJQgCAIAEAFQAEAFAPAJQASAIAFAJQAGAKgDALQgFARgPAKQgQAJgWAAQgIAAgKgCg");
	this.shape_15.setTransform(92.4,13.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgzBCIAiiDIBFAAIgDAPIg0AAIgLAqIAwAAIgEAOIgwAAIgMAtIA3AAIgEAPg");
	this.shape_16.setTransform(82.7,13.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhYBPIAbhmIgXAAIADgNIAYAAIAJgiIAOAAIgJAiIAhAAIAKgqIAOAAIgLAqIAvAAIALgqIANAAIgLAqIAaAAIgDANIgaAAIgSBDIgOAAIADgLIguAAIgDAMIgNAAIAShEIghAAIgZBZICBAAIgEANgAgLAUIAtAAIAMgrIguAAg");
	this.shape_17.setTransform(69,14);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhfBUIAdhqIgSAAIADgNIASAAIANgwIAMAAIgMAwIARAAIgEANIgRAAIgcBqgAgMBRIABgNIAYABQAKABACgKIAGgSIhaAAIACgKIBaAAIADgKIANAAIgDAKIAcAAIgDAKIgcAAIgFAUQgFATgVAAIgYAAgAgoA0IAKgJIATARIgLAJQgIgJgKgIgAgpAYIAShBIAsAAIADgLIg1AAIADgLIA1AAIAFgUIAMAAIgEAUIA4AAIgDALIg5AAIgDALIAuAAIgRA+IgMAAIACgJIghAAIgDALIgMAAIACgLIgfAAIgEAMgAAWACIAhAAIADgLIghAAgAgWACIAfAAIAEgLIggAAgAAbgTIAhAAIADgLIggAAgAgRgTIAgAAIADgLIgfAAgAA4hKIAHgJIAUAKIgIAJIgTgKg");
	this.shape_18.setTransform(50.8,14.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhiBEIAcgVIAPg3IgVAAIAEgOIAiAAIgTBIQAGARAbAAIAkAAIBBgBIgJAOIg9ABIgkgBQgfgBgHgUQgJAHgSARgAgsAwQAigMAIgYIADgMIghAAIADgMIA5AAIAIgcIgeAAIgQAXIgLgGQAVgXANgdIANADIgMAUIAZAAIAIgdIAOAAIgIAdIAuAAIgEAMIgtAAIgIAcIA2AAIgDAMIgpAAIgKAkQgCAIAIABIAIAAQAIAAADgJIAIgUIAMAFIgJATQgHAQgRAAIgNAAQgSAAAFgTIAKglIgXAAIgFAMQgJAggnAPIgGgLgAgxhHIANgHIAQAfIgPAJQgIgWgGgLg");
	this.shape_19.setTransform(31.6,14.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAVBUIACgHIhbAAIgCAHIgNAAIAVhNIB0AAIgUBNgAhBBCIBaAAIAFgTIhaAAgAg5AlIBaAAIAFgTIhaAAgAhbADQAigKAOgTIgkAAIACgLIAnAAIAHgSIgRAAQgKAJgLAIIgGgKQAXgPAMgUIAMADIgKAOIA0AAIgDALIgdAAIgGASIAjAAIgDALIglAAIgCADIAgAUIgKAJQgPgLgPgIQgQARgfALIgFgMgAA9AAIACgJIgpAAIgDAJIgNAAIAThEIBDAAIgSBEgAAZgUIApAAIAKglIgpAAg");
	this.shape_20.setTransform(14.7,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,353,26.8);


(lib.ggdfvvb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._001();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,311,139);


(lib.gdfgdfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._004();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,335,161);


(lib.fgvghh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhMBXIAAhnIBIAAIAABSQAAATgSAAIgUAAIgCgNIASABQAIAAAAgJIAAgPIgsAAIAAAmgAg+AnIAsAAIAAgRIgsAAgAg+ALIAsAAIAAgQIgsAAgAAgBUQgUAAAAgVIAAg9IAOAAIAAAdQAZgJAbgQIAIANQgdAPgfALIAAAQQgBALAKAAIAZAAQAJAAACgJIACgXIAOAFIgEAXQgCAQgTAAgAAigEQgWAAAAgVIAAg6IAOAAIAAAeQAYgJAYgOIAIAMQgbAOgdAMIAAAKQAAAMAKAAIAVAAQALAAACgKQABgHABgPIAOAGIgDAWQgDAQgVAAgAgLggIhFAFIgGgOQAJgFAIgLQALgNAIgQIAPAGQgPAVgQASIAwgDIgMgRIALgHQAQAVALATIgMAIIgHgMg");
	this.shape.setTransform(348.3,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA0BXIAAgIIhbAAIAAAIIgMAAIAAhQIB0AAIAABQgAgnBEIBbAAIAAgTIhbAAgAgnAmIBbAAIAAgTIhbAAgAhSADQAggKAIgVIgkAAIAAgLIAnAAIACgSIgSAAQgGAJgKAJIgIgLQASgPAHgVIAOADIgIAOIA1AAIAAAMIgdAAIgCASIAjAAIAAALIglAAIgBAEQASAIATANIgIAJQgQgLgSgJQgMASgcALIgIgMgABFAAIAAgJIgpAAIAAAJIgNAAIAAhHIBEAAIAABHgAAcgVIApAAIAAgmIgpAAg");
	this.shape_1.setTransform(329.8,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhXBGQAhgFATgLQgPgLgMgRIAJgHIgNAAIAAhIIA9AAIAAgRIhLAAIAAgMICgAAIAAAMIhIAAIAAARIA6AAIAABRIgNAAIAAgJIgyAAQgDAVgKALQAiANBAAAIgIAOQhGgCgfgPQgVANglAJIgIgNgAgXAuQAKgJAEgSIgrAAQAMARARAKgAAGAHIAvAAIAAgSIgtAAIgCASgAg1AHIAuAAIACgSIgwAAgAAIgWIAtAAIAAgTIgtAAIAAATgAg1gWIAwAAIAAgTIgwAAg");
	this.shape_2.setTransform(312.4,15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhOBSIAAgOIBIAAIAAgeIg5AAIAAgNIA5AAIAAgaIgzAAIAAgNIBzAAIAAANIgzAAIAAAaIA6AAIAAANIg6AAIAAAeIBJAAIAAAOgAhWgPQA2gbAcgmIARAAIgDADQAdAoAwATIgJAOQgugXgfgnQgaAkg1AcIgIgNg");
	this.shape_3.setTransform(294.3,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAGA6QgdAVgyAIIgHgOQAsgHAcgPIgxgXIARgZIguAAIAAgNIA2AAIARggIAOAGIgPAaIBnAAIAAANIgmAAQgIAagWATIA3AZIgIAOQgbgOghgPgAgkAXIApATQAVgRAIgWIg6AAIgMAUgABBgaIAAgUIiBAAIAAAUIgOAAIAAggIBPAAIgPgVIAMgHQAKALAHALIgIAGIBIAAIAAAgg");
	this.shape_4.setTransform(276.3,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAYIALgvIAQAAIgOAvg");
	this.shape_5.setTransform(257.9,21.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVBKQAXgJALgMQgOgNgKgVIALgHQAIAUANALQAGgMABgaIglAAIAAhBIAlAAIAAgZIAMAAIAAAZIAlAAIAABJIgMAAIAAgIIgZAAQAAAegJAQQAXAPAhACIgJAQQgggHgWgPQgNAOgXAKIgJgMgAAogGIAZAAIAAgrIgZAAgAADgGIAZAAIAAgrIgZAAgAhFBSQAAgJgDgGIAZABQAMABABgOIADgtIgvAAIAFg9IANAAIgFAxIAWAAIAFg8IgtAAIAAgNIA7AAIgGBJIAMAAQgBAigCAYQgCAagWAAIgYAAgAhWAgQAUgDAcgFIgBAOIguAIg");
	this.shape_6.setTransform(240.3,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AATBUQgBgHgCgGIAhABQAQAAABgOIACgXIh4AAIAGgdIANAAIgDARIBMAAIADgWIhlAAIAAgKIB0AAIgEAgIAcAAIgCAkQgDAagZAAIghgBgAhMA7IAAgLIB+AAIAAALgAhRgXQAagMADgVIgXAAIAAgLIAYAAIABgRIANAAIAAARIAnAAIgBAZQgBAYgUAAIgPAAIgEgMIAQAAQAMAAAAgMIABgOIgdAAQgDAdgfAQIgIgMgABEgSIAAgGIgnAAIAAAGIgNAAIAAg1IBBAAIAAA1gAAdgiIAnAAIAAgaIgnAAg");
	this.shape_7.setTransform(221.7,14.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgLBJQAJgIAHgJIhUAMIgDgOIAPgCIAAh/IA+AAIAAB3IALgCIgBANQAJgNAEgRQAFgSAAgrIgTAAIAAgNIATAAIABgkIAOAAIAAAkIAtAAIgEBoQgCAbgWAAIgYgBIgDgPQAOABAKABQALgBACgOIADhZIgeAAQgCAsgEAVQgJAigaAXIgIgNgAg2AzIAjgFIAAgcIgjAAgAg2AGIAjAAIAAgcIgjAAgAg2ghIAjAAIAAgeIgjAAg");
	this.shape_8.setTransform(203.9,14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLBXIAAh0IAmAAIAAgRIgpAAIAAgMIApAAIAAgaIAMAAIAAAaIAwAAIAAAMIgwAAIAAARIAoAAIAABgQAAARgQAAIgRABIgCgOIAOABQAIAAAAgIIAAgSIgbAAIAAAmIgMAAIAAgmIgaAAIAAApgAAnAjIAbAAIAAgWIgbAAgAABAjIAaAAIAAgWIgaAAgAAnACIAbAAIAAgUIgbAAgAABACIAaAAIAAgUIgaAAgAgxBXIAAglIgkAEIgBgMIAlgEIAAgaIghAAIAAgLQAKgaAHgVIgTAAIAAgMIAWAAQAFgPADgNIANADIgIAZIAfAAIAAAMIgjAAIgQAvIAUAAIAAglIAMAAIAAAlIATAAIAAALIgTAAIAAAYIAWgDIgCANIgUACIAAAngAAuhNIAIgIQANAJAIAIIgIAJIgVgSg");
	this.shape_9.setTransform(186.3,14.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhWBGIAVgTIAAg9IgUAAIAAgMIAiAAIAABLQANAQAZABQAwABA0gCIgFAOQgwABgxgBQgdgBgOgUQgFAFgQASgAgoAyQAvgbAEg1IgwAAIAAgMIAxAAIAAgqIANAAIAAAqIA3AAIAAAMIg3AAQAAANgDAMQAeAXAbAbIgLANQgYgcgbgYQgNAjgjAUQgEgHgFgEgAhPhLIALgJIAbAjIgNAJQgLgTgOgQg");
	this.shape_10.setTransform(168.3,14.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhCBTIAAhPICGAAIAABOIgNAAIAAgHIhtAAIAAAIgAAGBAIAxAAIAAgTIgxAAgAg2BAIAxAAIAAgTIgxAAgAAGAiIAxAAIAAgTIgxAAgAg2AiIAxAAIAAgTIgxAAgAgFgCIAAguIg+AAIAAAUIgOAAIAAgfIBMAAIAAgMIhAAAIAAgLICLAAIAAALIhAAAIAAAMIBMAAIAAAgIgOAAIAAgVIg+AAIAAAugAAPgGIAAgKIAtAAIAAAKgAg7gGIAAgKIAtAAIAAAKgAAPgbIAAgKIAtAAIAAAKgAg7gbIAAgKIAtAAIAAAKg");
	this.shape_11.setTransform(150.3,15.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhJBXIAAh0IBMAAIAABhQAAASgRgBIgUAAIgDgNIAUABQAIAAgBgIIAAgWIgyAAIAAAsgAg8AfIAyAAIAAgTIgyAAgAg8ABIAyAAIAAgSIgyAAgAAeBUIgCgOIAVABQALAAAAgMIAAhdIAOAAIAABhQAAAVgVAAIgXAAgAAXA0IAAhOIAOAAIAABOgAhVguIAAgNIA5AAIgPgUIAMgHIARAWIgJAFIAvAAIgHgDQAKgMAGgMIAOAHIgQAUIA3AAIAAANg");
	this.shape_12.setTransform(132.3,14.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNAYIALgvIAQAAIgOAvg");
	this.shape_13.setTransform(113.9,21.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgqBEIAAiHIAoAAQAUAAAMAKQANALAAAUQAAAUgPALQgOANgUgBIgSAAIAAAzgAgYABIAQAAQAQABAIgHQAIgHAAgNQAAgagegBIgSAAg");
	this.shape_14.setTransform(100.3,14.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZBEQgLgCgFgDIAAgUQAGAFALAEQAKADAKAAQAbAAAAgUQAAgGgDgFQgDgEgFgEIgTgLQgVgJgGgJQgHgIAAgMQAAgQAOgLQANgKAUAAQAUAAAKAGIAAATQgMgJgTAAQgMAAgIAFQgHAGAAAJQAAAIAFAFQAFAGASAIQAUAJAIAJQAIAKAAAMQAAASgNAKQgNAJgWABQgJAAgKgDg");
	this.shape_15.setTransform(89.2,14.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkBEIAAiHIBFAAIAAAPIgzAAIAAAsIAwAAIAAAPIgwAAIAAAuIA3AAIAAAPg");
	this.shape_16.setTransform(79.4,14.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag9BSIAAhqIgXAAIAAgNIAXAAIAAgkIAOAAIAAAkIAiAAIAAgsIANAAIAAAsIAuAAIAAgsIAOAAIAAAsIAZAAIAAANIgZAAIAABFIgOAAIAAgLIguAAIAAANIgNAAIAAhHIgiAAIAABcICAAAIAAAOgAAAAVIAuAAIAAgtIguAAg");
	this.shape_17.setTransform(65,14.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhEBWIAAhtIgSAAIAAgNIASAAIAAgxIANAAIAAAxIARAAIAAANIgRAAIAABtgAANBUIgCgNIAZABQAKABAAgKIAAgTIhZAAIAAgLIBZAAIAAgKIANAAIAAAKIAcAAIAAALIgcAAIAAAVQAAATgVABIgZgBgAgWA2IAIgJIAXARIgJAKQgJgJgNgJgAgeAaIAAhEIAsAAIAAgMIg0AAIAAgLIA0AAIAAgUIANAAIAAAUIA4AAIAAALIg4AAIAAAMIAtAAIAABBIgMAAIAAgKIghAAIAAALIgNAAIAAgLIgfAAIAAANgAAbACIAhAAIAAgLIghAAgAgRACIAfAAIAAgLIgfAAgAAbgUIAhAAIAAgLIghAAgAgRgUIAfAAIAAgLIgfAAgAAohMIAFgJIAXAKIgGAJIgWgKg");
	this.shape_18.setTransform(47,14.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhXBHIAXgWIAAg6IgVAAIAAgNIAiAAIAABKQAMARAbABIAjAAIBBgBIgFAOIg9AAIglAAQgfgBgMgUQgHAGgOARgAglAyQAegNABgYIABgNIgiAAIAAgMIA5AAIAAgeIgcAAIgLAYQgFgDgIgDQAOgYAHgdIANADIgGAUIAYAAIAAgeIAOAAIAAAeIAuAAIAAAMIguAAIAAAeIA2AAIAAAMIgqAAIAAAlQAAAJAJAAIAIAAQAIAAABgJIACgUIAOAFIgEAUQgDAQgRAAIgMAAQgTAAAAgUIAAgmIgYAAIAAANQgBAhgjAQIgIgMgAhLhKIALgHQAJALAPAWIgNAJIgWgjg");
	this.shape_19.setTransform(29,14.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AA0BXIAAgIIhbAAIAAAIIgMAAIAAhQIB0AAIAABQgAgnBEIBbAAIAAgTIhbAAgAgnAmIBbAAIAAgTIhbAAgAhSADQAggKAIgVIgkAAIAAgLIAnAAIACgSIgSAAQgHAJgIAJIgJgLQATgPAHgVIAMADIgHAOIA0AAIAAAMIgcAAIgBASIAjAAIAAALIgmAAIgBAEQARAIAVANIgJAJQgQgLgSgJQgMASgcALIgIgMgABFAAIAAgJIgpAAIAAAJIgNAAIAAhHIBEAAIAABHgAAcgVIApAAIAAgmIgpAAg");
	this.shape_20.setTransform(10.5,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,359.5,27.8);


(lib.fdfffcvv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._002();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,311,139);


(lib.补间36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a12();
	this.instance.parent = this;
	this.instance.setTransform(-67.5,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-67.5,135,135);


(lib.补间35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a12();
	this.instance.parent = this;
	this.instance.setTransform(-67.5,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-67.5,135,135);


(lib.补间34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._999666();
	this.instance.parent = this;
	this.instance.setTransform(-17.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-21,35,42);


(lib.补间33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._999666();
	this.instance.parent = this;
	this.instance.setTransform(-17.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-21,35,42);


(lib.补间32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._999666();
	this.instance.parent = this;
	this.instance.setTransform(14.7,-21,0.835,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-21,29.3,42);


(lib.补间31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._999666();
	this.instance.parent = this;
	this.instance.setTransform(14.7,-21,0.835,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-21,29.3,42);


(lib.补间22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._52();
	this.instance.parent = this;
	this.instance.setTransform(-82,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-82,164,164);


(lib.补间21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AFzAqIAPg1IgRAAIAEgNIAQAAIAGgXIATgFIgHAcIAYAAIgEANIgYAAIgOAzQgCAJACAEQACAEAIAAQAFAAAGgEIgEAPQgGACgKAAQgaAAAHgcgADCBAQgHgIADgNQAIgaAhgEIAegEQAGgWgUAAQgRAAgSALIAFgQQAQgJATAAQAkAAgKAjIgQA8IgRAAIAEgOIAAAAQgPAQgUAAQgOAAgGgGgADqAYQgMACgGAEQgGAFgCAHQgBAHADAEQAEAEAIAAQALAAAKgIQAJgHADgLIADgJgACIAqIAPg1IgRAAIAEgNIAQAAIAGgXIATgFIgHAcIAYAAIgEANIgYAAIgOAzQgCAJACAEQACAEAIAAQAFAAAGgEIgEAPQgGACgKAAQgaAAAHgcgAAgBEQgLgCgDgDIAFgTQAEAFAKADQAKAEAJAAQAdAAAFgUQABgFgBgFQgCgEgFgDIgRgLQgSgJgEgJQgEgIADgLQAEgQAQgKQAQgJAVAAQAUAAAIAFIgFASQgJgIgTAAQgNAAgJAFQgJAFgDAJQgCAIAEAFQAEAFAQAIQASAJAFAJQAGAJgDAMQgFARgPAJQgQAJgXAAQgIAAgKgCgAjTA6QgJgOAFgUQAGgYASgNQARgOAYAAQANAAAIAFIgEARQgIgIgNAAQgPAAgLAKQgMAJgFARQgEAQAGAJQAGAJAPAAQANAAANgIIgEAQQgNAFgQAAQgVAAgJgMgAmmA1QgMgSAIgeQAIgfAZgTQAZgTAeAAQAUAAALAFIgFASQgNgIgRAAQgXAAgSAPQgSAPgHAXQgGAYAJAOQAKAOAWAAQAUAAARgJIgEAQQgRAIgXgBQgdAAgNgRgAEjBEIAZhcIARAAIgFATIAAAAQANgVASAAQAGAAADACIgFAQQgDgDgIAAQgKAAgJAJQgJAIgEAPIgMAvgAhHBEIgegtIAAAAIgMAtIgRAAIAliJIARAAIgYBWIABAAIAzgpIAWAAIg4AsIAiAwgAkMBEIAZhcIARAAIgZBcgAk8BEIAliJIARAAIglCJgAjrgyQgCgDABgFQABgEAEgDQAEgDAEAAQAFAAACADQACADgBAEQgBAFgEADQgEADgEAAQgFAAgCgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-7,86.1,14.1);


(lib.补间20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AFzAqIAPg1IgRAAIAEgNIAQAAIAGgXIATgFIgHAcIAYAAIgEANIgYAAIgOAzQgCAJACAEQACAEAIAAQAFAAAGgEIgEAPQgGACgKAAQgaAAAHgcgADCBAQgHgIADgNQAIgaAhgEIAegEQAGgWgUAAQgRAAgSALIAFgQQAQgJATAAQAkAAgKAjIgQA8IgRAAIAEgOIAAAAQgPAQgUAAQgOAAgGgGgADqAYQgMACgGAEQgGAFgCAHQgBAHADAEQAEAEAIAAQALAAAKgIQAJgHADgLIADgJgACIAqIAPg1IgRAAIAEgNIAQAAIAGgXIATgFIgHAcIAYAAIgEANIgYAAIgOAzQgCAJACAEQACAEAIAAQAFAAAGgEIgEAPQgGACgKAAQgaAAAHgcgAAgBEQgLgCgDgDIAFgTQAEAFAKADQAKAEAJAAQAdAAAFgUQABgFgBgFQgCgEgFgDIgRgLQgSgJgEgJQgEgIADgLQAEgQAQgKQAQgJAVAAQAUAAAIAFIgFASQgJgIgTAAQgNAAgJAFQgJAFgDAJQgCAIAEAFQAEAFAQAIQASAJAFAJQAGAJgDAMQgFARgPAJQgQAJgXAAQgIAAgKgCgAjTA6QgJgOAFgUQAGgYASgNQARgOAYAAQANAAAIAFIgEARQgIgIgNAAQgPAAgLAKQgMAJgFARQgEAQAGAJQAGAJAPAAQANAAANgIIgEAQQgNAFgQAAQgVAAgJgMgAmmA1QgMgSAIgeQAIgfAZgTQAZgTAeAAQAUAAALAFIgFASQgNgIgRAAQgXAAgSAPQgSAPgHAXQgGAYAJAOQAKAOAWAAQAUAAARgJIgEAQQgRAIgXgBQgdAAgNgRgAEjBEIAZhcIARAAIgFATIAAAAQANgVASAAQAGAAADACIgFAQQgDgDgIAAQgKAAgJAJQgJAIgEAPIgMAvgAhHBEIgegtIAAAAIgMAtIgRAAIAliJIARAAIgYBWIABAAIAzgpIAWAAIg4AsIAiAwgAkMBEIAZhcIARAAIgZBcgAk8BEIAliJIARAAIglCJgAjrgyQgCgDABgFQABgEAEgDQAEgDAEAAQAFAAACADQACADgBAEQgBAFgEADQgEADgEAAQgFAAgCgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-7,86.1,14.1);


(lib.补间19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._55();
	this.instance.parent = this;
	this.instance.setTransform(-8.5,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-10,17,20);


(lib.补间18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._55();
	this.instance.parent = this;
	this.instance.setTransform(-8.5,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-10,17,20);


(lib.补间17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-213.5,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213.5,-17.5,427,35);


(lib.补间16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-213.5,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213.5,-17.5,427,35);


(lib.补间15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._58();
	this.instance.parent = this;
	this.instance.setTransform(-318.5,-314);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-318.5,-314,637,628);


(lib.补间14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._58();
	this.instance.parent = this;
	this.instance.setTransform(-318.5,-314);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-318.5,-314,637,628);


(lib.补间13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._59();
	this.instance.parent = this;
	this.instance.setTransform(-667,-311);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-667,-311,1334,646);


(lib.补间12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._59();
	this.instance.parent = this;
	this.instance.setTransform(-667,-311);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-667,-311,1334,646);


(lib.补间10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bj();
	this.instance.parent = this;
	this.instance.setTransform(-667,-311);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-667,-311,1334,646);


(lib.补间9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bj();
	this.instance.parent = this;
	this.instance.setTransform(-667,-311);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-667,-311,1334,646);


(lib.补间8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhmA6IAWgOIAMgvIgQAAIAGgWIApAAIgTBFQAJAPAXAAIAaAAIBJgBIgPAXIhkgBQgLgBgJgEQgIgDgDgIIgcAVgAgNAcIAcACQANAAAEgPIAOgxIhGAAIAFgVIBGAAIAHgcIAaAAIgIAcIAaAAIgFAVIgaAAIgPA4QgFAPgIAHQgJAIgNAAIgiABIAAgZgAgZgRIAXgPQAHANANAXIgYAPIgTgkgAg9hIIAXgMIAOAgIgaANQgFgSgGgPg");
	this.shape.setTransform(8.7,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBGIg8AJIAAgWIAIgBIARg9IASAAIgQA7IAJgCIAShDIgbAAIARg9IA5AAIgFAWIAMgFIAGAXIAMgwIAWAAIgYBbQgOA0goAaQgCgFgIgKgAgjA9QAVgPALgbIgUAQIgFgKIgLAAIgGAYIAPgCIgFAOgAghAGIAMAAIgCAFIAcgTIACgMIgMAFIgFgcIgHAcIgLAAgAgxghIAQAAIAGgYIgPAAgAAgBRQgVAAAFgTIAoiSIAVAAIgNAyIAUgZIATAJQgQATgSARIgJgFIgCALIAdAWIgUAVIgRgTIgKAqQgBABAAAAQAAABABABQAAAAABAAQAAABABAAIACAAQAFAAACgHQAEgGAEgPIAUAHQgLAbgHAHQgIAGgLAAg");
	this.shape_1.setTransform(-9.5,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.2,-13.8,48.6,27.7);


(lib.补间7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhmA6IAWgOIAMgvIgQAAIAGgWIApAAIgTBFQAJAPAXAAIAaAAIBJgBIgPAXIhkgBQgLgBgJgEQgIgDgDgIIgcAVgAgNAcIAcACQANAAAEgPIAOgxIhGAAIAFgVIBGAAIAHgcIAaAAIgIAcIAaAAIgFAVIgaAAIgPA4QgFAPgIAHQgJAIgNAAIgiABIAAgZgAgZgRIAXgPQAHANANAXIgYAPIgTgkgAg9hIIAXgMIAOAgIgaANQgFgSgGgPg");
	this.shape.setTransform(8.7,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBGIg8AJIAAgWIAIgBIARg9IASAAIgQA7IAJgCIAShDIgbAAIARg9IA5AAIgFAWIAMgFIAGAXIAMgwIAWAAIgYBbQgOA0goAaQgCgFgIgKgAgjA9QAVgPALgbIgUAQIgFgKIgLAAIgGAYIAPgCIgFAOgAghAGIAMAAIgCAFIAcgTIACgMIgMAFIgFgcIgHAcIgLAAgAgxghIAQAAIAGgYIgPAAgAAgBRQgVAAAFgTIAoiSIAVAAIgNAyIAUgZIATAJQgQATgSARIgJgFIgCALIAdAWIgUAVIgRgTIgKAqQgBABAAAAQAAABABABQAAAAABAAQAAABABAAIACAAQAFAAACgHQAEgGAEgPIAUAHQgLAbgHAHQgIAGgLAAg");
	this.shape_1.setTransform(-9.5,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.2,-13.8,48.6,27.7);


(lib.补间6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._003();
	this.instance.parent = this;
	this.instance.setTransform(-155.5,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.5,-69.5,311,139);


(lib.补间5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._003();
	this.instance.parent = this;
	this.instance.setTransform(-155.5,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.5,-69.5,311,139);


(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._555();
	this.instance.parent = this;
	this.instance.setTransform(-155.5,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.5,-69.5,311,139);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._555();
	this.instance.parent = this;
	this.instance.setTransform(-155.5,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.5,-69.5,311,139);


(lib.dfgrr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._888();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgrr, new cjs.Rectangle(0,0,338,165), null);


// (lib.dff = function(mode,startPosition,loop) {
// 	this.initialize(mode,startPosition,loop,{});

// 	// 图层 1
// 	this.shape = new cjs.Shape();
// 	this.shape.graphics.f("#FF9900").s().p("AsQFAIAAp/IYhAAIAAJ/g");

// 	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

// }).prototype = p = new cjs.MovieClip();
// p.nominalBounds = new cjs.Rectangle(-78.4,-32,157,64);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3300").s().p("AodCIIhPhYIBpi3IQ2AAIA6BVIhrC6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(-62.1,-13.5,124.2,27.1), null);


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


(lib.vdsgfsfsdf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(318.5,314);
	this.instance._off = true;

	this.instance_1 = new lib.补间15("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(318.5,314,1,1,30);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).to({_off:true,rotation:30},11).wait(16).to({_off:false,rotation:0},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},11).to({regX:0.1,regY:-0.1,rotation:90,x:318.7,y:314.2},16).to({_off:true,regX:0,regY:0,rotation:0,x:318.5,y:314},12).wait(1));

	// 图层 1
	this.instance_2 = new lib.补间14("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(318.5,314);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间15("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(318.5,314,1,1,30);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80).to({_off:false},0).to({_off:true,rotation:30},11).wait(16).to({_off:false,rotation:0},12).to({_off:true},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80).to({_off:false},11).to({regX:0.1,regY:-0.1,rotation:90,x:318.7,y:314.2},16).to({_off:true,regX:0,regY:0,rotation:0,x:318.5,y:314},12).wait(40));

	// 图层 1
	this.instance_4 = new lib.补间14("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(318.5,314);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间15("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(318.5,314,1,1,30);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(41).to({_off:false},0).to({_off:true,rotation:30},11).wait(16).to({_off:false,rotation:0},12).to({_off:true},1).wait(78));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({_off:false},11).to({regX:0.1,regY:-0.1,rotation:90,x:318.7,y:314.2},16).to({_off:true,regX:0,regY:0,rotation:0,x:318.5,y:314},12).wait(79));

	// 图层 1
	this.instance_6 = new lib.补间14("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(318.5,314);

	this.instance_7 = new lib.补间15("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(318.5,314,1,1,30);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,rotation:30},12).wait(16).to({_off:false,rotation:0},12).to({_off:true},1).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:false},12).to({regX:0.1,regY:-0.1,rotation:90,x:318.7,y:314.2},16).to({_off:true,regX:0,regY:0,rotation:0,x:318.5,y:314},12).wait(119));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,637,628);


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


(lib.tyyyyy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AhRAhQgOAAgKgKQgJgJAAgOQAAgMAJgKQAKgJAOAAICjAAQAOAAAKAJQAJAKAAAMQAAAOgJAJQgKAKgOAAg");
	this.shape.setTransform(77,219.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(34).to({_off:false},0).wait(11));

	// 图层 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgNBfIAAikIgwAAIAAgZIB7AAIAAAZIgwAAIAACkg");
	this.shape_1.setTransform(108.4,268.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AAfBfIg0hUIgOAAIAABUIgdAAIAAi9IAsAAQAPAAAMADQANACAJAGQAKAGAFAJQAGAKAAAOQAAALgEAIQgDAJgHAGQgGAHgHADQgJAEgIACIA6BZgAgjgLIAPAAQATAAAKgJQAKgIAAgPQAAgOgJgGQgKgGgTAAIgQAAg");
	this.shape_2.setTransform(94.2,268.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AA5BfIgVg3IhIAAIgUA3IgfAAIBKi9IAaAAIBLC9gAgCg2IgCAHIgXA+IA2AAIgYg/IgCgGIgBgIIAAAAIgCAIg");
	this.shape_3.setTransform(76.3,268.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgNBfIAAikIgwAAIAAgZIB7AAIAAAZIgwAAIAACkg");
	this.shape_4.setTransform(60.1,268.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgSBhIgOgDIgMgFIgLgFIAAgdIAMAHIANAGIAOAEIAMABQAIAAAHgCQAFgCAFgEQAFgEACgFQACgGAAgHQgBgHgCgFQgDgFgFgEIgMgHIgOgGIgWgJQgJgFgGgGQgGgGgDgIQgEgIAAgLQAAgMAFgJQAFgKAIgHQAJgHAKgDQALgEAMAAQAOAAALACQALADAJADIAAAbIgJgEIgMgDIgNgDIgLgBQgHAAgGACQgGACgFADQgDAEgCAFQgDAFAAAGQAAAGADAFQADAFAFAEQAFADAIADIAPAHQALAFAJAFQAJADAGAHQAGAGAEAJQADAIAAALQAAALgEALQgEAKgIAHQgHAIgMAEQgMAEgPAAIgOAAg");
	this.shape_5.setTransform(45.6,268.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("Ag1BZIAAixIAkAAQAQABAMACQANACAJAGQAKAGAFAJQAGAJgBAOQAAANgEAKQgGALgKAGQgKAHgPAFQgNAEgVAAIAABIgAgagFIAJAAQAUAAALgJQALgHAAgQQAAgHgCgGQgCgEgGgEQgFgDgHgCQgIgBgMAAIgJAAg");
	this.shape_6.setTransform(101.2,295.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AgiBUQgPgGgLgMQgLgLgGgRQgFgQgBgUQABgUAFgRQAGgSALgMQALgMAQgGQAQgHATAAQATAAAPAGQAPAHALAMQAKALAGARQAFAQAAATQAAAVgFARQgGASgLAMQgLAMgPAGQgQAHgTAAQgTAAgPgHgAgWg/QgKAFgHAJQgIAJgEANQgDANAAAOQAAAPADANQAEANAHAIQAHAJAKAFQALAFAMAAQANAAAKgEQALgFAHgJQAHgIAEgNQAEgNAAgQQAAgPgDgNQgEgMgHgJQgHgJgLgFQgJgFgOAAQgMAAgLAFg");
	this.shape_7.setTransform(83.5,295.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AgMBZIAAiZIgtAAIAAgYIBzAAIAAAYIgsAAIAACZg");
	this.shape_8.setTransform(66.7,295.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AgRBaIgNgDIgMgEQgFgCgEgDIAAgbIAKAGIANAGIANAEIAMABQAHAAAGgCQAFgCAFgEQADgDADgFQABgFAAgHQAAgHgCgEQgDgFgEgEIgLgGIgOgGIgUgIQgIgEgGgGQgGgGgDgHQgDgIAAgKQAAgLAEgJQAFgJAIgHQAHgGALgDQAKgEALAAQANAAAKACIATAGIAAAZIgJgEIgLgDIgMgCIgLgBQgGAAgGACQgFABgEAEQgEADgCAFQgCAEAAAGQAAAGADAEQACAFAFADQAFAEAHADIAOAGIATAJQAIADAGAGQAGAGADAIQADAIAAAKQAAALgEAJQgDAKgIAHQgHAHgLAEQgLAEgNAAIgOgBg");
	this.shape_9.setTransform(53.1,295.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AgcA5IAAhxIA5AAIAAAPIgnAAIAAAiIAnAAIAAAOIgnAAIAAAjIAnAAIAAAPg");
	this.shape_10.setTransform(103,244.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AAgA5Ig2hJIgCgDIgDgFIgDgFIgCgDIAABZIgRAAIAAhxIATAAIA0BGIADAFIAEAFIACAFIADAEIAAhZIAPAAIAABxg");
	this.shape_11.setTransform(92,244.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_12.setTransform(83.1,244.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AgQA2QgKgEgHgIQgIgHgDgLQgEgKAAgNQAAgNAEgLQAFgLAIgIQAIgHALgEQALgEAMAAQALAAAJACQAKADAIAFIAAARIgJgFIgJgEIgKgDIgKgBQgKAAgHADQgIAEgFAFQgFAGgDAIQgDAJAAAIQAAAKACAIQADAIAFAGQAFAFAIAEQAHADAJAAIAMgBIALgEIAAgZIgaAAIAAgOIArAAIAAAwQgJAFgLADQgKACgMAAQgMAAgLgEg");
	this.shape_13.setTransform(74.4,244.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AAhA5Ig3hJIgCgDIgDgFIgDgFIgCgDIAABZIgQAAIAAhxIASAAIA0BGIADAFIADAFIAEAFIACAEIAAhZIAQAAIAABxg");
	this.shape_14.setTransform(61.9,244.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AgcA5IAAhxIA5AAIAAAPIgnAAIAAAiIAnAAIAAAOIgnAAIAAAjIAnAAIAAAPg");
	this.shape_15.setTransform(51.4,244.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},34).wait(11));

	// 图层 2
	this.instance = new lib.a1();
	this.instance.parent = this;
	this.instance.setTransform(10,197);

	this.instance_1 = new lib.a2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10,197);

	this.instance_2 = new lib.a3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(10,197);

	this.instance_3 = new lib.a4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(10,197);

	this.instance_4 = new lib.a5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(10,197);

	this.instance_5 = new lib.a6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(10,197);

	this.instance_6 = new lib.a7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(10,197);

	this.instance_7 = new lib.a8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(10,197);

	this.instance_8 = new lib.a9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(10,197);

	this.instance_9 = new lib.a10();
	this.instance_9.parent = this;
	this.instance_9.setTransform(10,197);

	this.instance_10 = new lib.a11();
	this.instance_10.parent = this;
	this.instance_10.setTransform(10,197);

	this.instance_11 = new lib.补间35("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(77.5,264.5);
	this.instance_11._off = true;

	this.instance_12 = new lib.补间36("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(77.5,264.5);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},12).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({_off:false},0).to({_off:true,alpha:0},12).wait(10));

	// 图层 2
	this.instance_13 = new lib.补间22("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(77,264.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,182.5,164,164);


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


(lib.mghfg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间18("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(8.5,10);

	this.instance_1 = new lib.补间19("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.5,10,1,1,45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:45,x:9.5},9).wait(9).to({_off:false,rotation:105,x:10.5,y:8},8).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},9).to({rotation:135,x:12.5,y:8.9},9).to({_off:true,rotation:105,x:10.5,y:8},8).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17,20);


(lib.hjkgg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.补间31("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(705.6,10);

	this.instance_1 = new lib.补间32("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(705.6,10,0.89,0.89);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:0.89,scaleY:0.89},6).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},6).to({scaleX:1,scaleY:1},8).wait(1));

	// 图层 2
	this.instance_2 = new lib.补间33("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6.5,10);

	this.instance_3 = new lib.补间34("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6.5,10,0.81,0.81);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,scaleX:0.81,scaleY:0.81},6).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},6).to({scaleX:1,scaleY:1},8).wait(1));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("ALsAFQAAhGAaglQAagmAxAAQBfAAAACLQAABEgaAlQgaAlgwAAQhgAAAAiIgAMlADQAABeApAAQAnAAAAhhQAAhggmAAQgqAAAABjgAItBrQgZgiAAg6QAAhEAggrQAggsA6AAQAfAAASAIIAAAwQgVgMgYAAQggAAgTAZQgTAYAAAoIABAAQATgeAnAAQAiAAAVAXQATAXAAAlQAAApgaAbQgaAbgoAAQgwAAgYgigAJZAQQgLAMAAATQAAAVALAPQAKAOASAAQAQAAALgNQAKgOAAgUQAAgugmAAQgRAAgKAMgACXBqQgrAjg4AAQgvAAgbgWQgbgWAAgnQAAg2BBgYQgggaAAgfQAAgdAVgRQAWgRAlAAQAiAAAWARQAVAQABAaQgBAqgwAUQAlARAcApQAeglAAgzQAAgPgEgMIAxAAQADALAAAPQABBEg1A5QAUAWATAAQASAAAQgIIAAAsQgUAIgWAAQgiAAgegjgAAIA4QAAASANAMQANALAVAAQAmAAAhgbQgegxgvgTQgpATAAAjgAArheQgJAIAAALQAAAVAYAOQAhgMAAgYQAAgMgIgGQgIgHgLAAQgNAAgIAHgAkFB+IAAg6QAgAbAqAAQAYAAAMgIQAMgIAAgNQAAgLgKgKQgJgKgpgRQhAgaABg0QAAgmAdgVQAcgVAwAAQAoAAAbALIAAA2QgcgSgkAAQgVAAgNAIQgOAHAAANQABALAIAJQAJAJAjAPQApARAOATQAQATAAAbQAAAngcAUQgcAVgzAAQgvAAgdgPgAnpAFQAAhGAaglQAagmAyAAQBeAAgBCLQABBEgaAlQgaAlgwAAQhgAAAAiIgAmvADQAABeAoAAQAoAAAAhhQAAhggnAAQgpAAAABjgAq1CBIAAgxQAcARAeAAQAYAAAOgLQAOgMAAgVQAAgqg6AAQgRAAgbADIAAiVICUAAIAAAvIhkAAIAAA5QAKgBANAAQApAAAYAWQAYAUAAAmQAAArgcAZQgdAZguAAQgoAAgZgMgAG7CIIhSh3IgIgOIgBAAIAACFIg5AAIAAkPIA5AAIAACBIABAAQAEgJAEgGIBOhyIBFAAIhhCCIBpCNgAsaCIIhTh3IgGgOIgCAAIAACFIg6AAIAAkPIA6AAIAACBIACAAQADgJAEgGIBOhyIBGAAIhiCCIBqCNg");
	this.shape.setTransform(313.1,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EAraACEQAYg0ABh/IAAhwIEqAAIAABlIg5AAIAAAbIA+AAIAAAhIg+AAIAAAbIBIAAIAAAjIgbAAIARAXIg0AXQAdAMAkAEIgeAsQhGgTgqgsQgBAUAAAWQhEARgYAKIgRgmQAIgIAAgeIAAgkIgcAAQgHBBgbAvQgRgZgSgTgEAtqAB5IA1gPQgRgTgMgXIgYAAgEAvIABaIAsgaIhJAAQANAOAQAMgEAuBAAdIA2AAIAAgbIg2AAgEAshAAdIAzAAIAAgbIgyAAIgBAbgEAuBgAfIA2AAIAAgbIg2AAgEAsjgAfIAxAAIAAgbIgxAAgEAsjgBdIDLAAIAAgbIjLAAgEg0rACGQA2gfAagvQAZgvAAhFIAuAAQAAAcgEAZQAfBlBDAcQgNAUgPAbQg7gigchKQgbBHhAAsQgNgRgagZgAL/CMQATgSALgaIgjAUQgMgbgPgZIAigRQAMARARAgQAPgjAAgwIAAieQBQgIAygRIAUAuQgvAMg5AGIAAAuIBoAAIAAAvIgbAAIAAC1IguAAIAAi1IgfAAIAAATQAABvgwA6QgZgUgTgPgA/zCLQAhgSAVgYQAWgYADgyIhQAAIAAgsIBSAAIAAhWIg+AAIAAguIE6AAIAAAuIg5AAIAABWIBIAAIAAAsIhIAAIAACRIgzAAIAAiRIheAAQgDBAgVAhQgUAggrAXQgTgSgZgSgA9vgVIBdAAIAAhWIhdAAgEgwtAB5IAjggIAAhjIghAAIAAguIBQAAIAACXQAQAVAkACQAlACAzAAICBgCIgSAxQiyABglgFQgjgFgYgbIgnAsgAVmCBQA7gRAwgVQgagYgVgfQgpBBg1AtQgHghgIgaQBEhAAihUIhYAAIAAgqQAKgdAHggIAxAGIgOA2IAyAAQAIgeAIgoIAzAEIgPBCIBjAAIgognIAegdQAhAZAWAUIgWAXIA7AAIAAArIjCAAIgMAgICqAAIAAAmQgbAvgqAjQAoASBDAKIgfA0QhHgQgyggQg0AehHAVIgbgtgAX7BCQAlgaAUgdIhrAAQAUAfAeAYgARwCuIAAhDIieAAIAAgsICeAAIAAglIh9AAIAAgnQAXgnARglIg/AAIAAgsIBUAAIARgqIA0AIIgPAiICyAAIAAAsIjIAAQgSAjgUAmIBGAAIAAg4IAxAAIAAA4IBkAAIAAAqIhkAAIAAAlICFAAIAAAsIiFAAIAABDgEAw8AB8QAjg2AAhVIAAiNIE4AAIAAAwIkGAAIAABcQAAB3gyBGQgOgWgVgbgEgrFAB3QATgSARgPIAAhaIgiAAIAAgsIBQAAIAACLQAcAdA3AAQCYAAAhgDQgJAagGAVIhpABIg+AAQgkAAgbgJQgbgIgRgRIgpAqgAdECsIAAihIg4AAIAACGIgwAAIAAhwQgVAXgYAVQgJgfgHgTQA5gzAig6IhWAAIAAgvIBtAAQAJgVAFgWIAyAGIgOAlIC1AAIAAAvIjKAAQgOAbgSAaIA2AAIAAgtIAxAAIAAAtIBqAAIAABxQAAAWgKANQgKANgPADQgQACgiAAIgIguIAWABQAXAAAAgZIAAg4Ig6AAIAAChgA4SCsIAAiiIBFAAIAFgVIhQAAIAAgqIDmAAIAAAqIhoAAIgGAVIBmAAIAACEQgBAPgHAHQgJAHgQAAIgkAAIgCgRIgcAAIAAhmIgVAAIAABmIgiAAIAAhmIgVAAIAAB4gA16CEIANABQAJgBgBgKIAAhGIgVAAgEAy3AB6IAqACQAXAAAFgIQAGgHABgLIAAh9IhoAAIAAguID3AAIAAAuIhdAAIAACMQAAAbgMAOQgOANgcACIg+ACQgDgXgIgagEAncACEIAcACQAKAAAFgDQAEgEAAgIIAAgcIhuAAIAAhNIEBAAIAABNIhkAAIAAArQAAASgKAJQgJAJgUABIguAAQgDgQgGgXgEAnMAA+ICiAAIAAgTIiiAAgEgleAB9QBthOAnh1QgWgogngjIAugbQAlAdA0BoQAyBkBPA5QgeAggQAUQhNhKgyhnQgtBqhbBIQgRgUgZgagEAluACEQAwgQAxgWIAXAgQgyAYgvAUQgJgSgOgUgEApRACCIAUghQAzAQAwATIgUAlQgrgSg4gVgAKOB/IgHAPQgNgIgZgJQASghANgtIAnAMQgJAggNAeIARABQANAAABgQIAAhBIhCAAIAAgnIBCAAIAAgWIhIAAIAAgoIAmAAIgQgbIAngPQAOAXAJATIAQAAQASgdAGgOIh1AAIAAgoIA+AAIgJgXIAwgJIALAgIA7AAIAAAoIgwAAIAmAQIgSAbIAkAAIAAAoIhFAAIAAAWIA/AAIAAAnIg/AAIAABVQAAAQgGAKQgHAJgNADQgMACgiAAQgBgVgGgSgEg2WABuQAmglAUgnIg4hbIAmgUIAmA7QALgnABgpIhTAAIAAguICCAAQAABpgbBHIAkA7IgpAZIgTgiQgZAqglAlQgMgcgMgXgEAgVACgIAAgtICFAAIAAgqIhoAAIAAgtIBoAAIAAgjIhDAAIAAgcQgYARgbAQQgKgPgUgaQBwg9AohFIA9AAIgJAOQAuBBBkAuIggAqQgbgOgWgQIAAAdIhFAAIAAAjIBrAAIAAAtIhrAAIAAAqICGAAIAAAtgEAhtgA0ICPAAQgqgggegmQgcAkgrAigA6NBjIAkgGIAAhVIghAAIAAgsIAhAAIAAhGIgjAAIAAgtIBwAAIAAAtIgfAAIAABGIAaAAIAAAsIgaAAIAABMIAhgGIgCAvIhpAWgEgpUABQQARgWAKggIgrAAIAAgpIAyAAQABgMAAgxIgmAAIAAgqIAmAAIAAg1IAvAAIAAA1IA1AAIAAg1IAvAAIAAA1IAlAAIAAAqIglAAIAAA9IAzAAIAAApIgzAAIAABTIgvAAIAAhTIg6AAQgJA0gXAlQgVgSgYgRgEgoCgAPIA1AAIAAg9Ig1AAIAAA9gEgtfABvIAAjrQgZAKgWAEIAAB+IAngUQgBAiACARQg5AbgSAPIgagoQAOgLAAgXIAAihQArgJAegOIAVAnIAAgUICAAAIAACvQAAAOgDAKQgEAKgIAGQgIAGgIABQgJACggAAQgDgXgFgXIARABQASAAAAgTIAAh0IglAAIAADZgEAlvAAAIAAgiICTAAIgHgQIhoAAIAAhvIETAAIAABvIhvAAIAGAQICOAAIAAAigEAnDgBOICzAAIAAgPIizAAgEAnDgB2ICzAAIAAgPIizAAgEg0TgAeQAfhEAShNIAvAHIgLArIB/AAIAAAqIgQBCIgtgJIAPg4IhfAAQgOApgPAjQgLgIgfgQgA4PhJIAAhQIAtAAIAAAnIAjAAIAAg9IAtAAIAAA9IAkAAIAAgnIAsAAIAABQgEgq4gCSIAmgXQAaAiAVAeIgpAcQgWgkgWghgEgwlgCUIAmgZQAeAkATAcIgqAbQgTghgaghg");
	this.shape_1.setTransform(347.9,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-11,744.3,46.3);


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


(lib.ggdfgdf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.sdghh("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(117.3,13.6,1.098,1.098,0,15,0,106,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0,233.2,27);


(lib.fsdfdsfsdfsf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.yyuuuu = new lib.vdsgfsfsdf();
	this.yyuuuu.parent = this;
	this.yyuuuu.setTransform(318.5,314,1,1,0,0,0,318.5,314);

	this.timeline.addTween(cjs.Tween.get(this.yyuuuu).wait(1));

}).prototype = getMCSymbolPrototype(lib.fsdfdsfsdfsf, new cjs.Rectangle(0,0,637,628), null);


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

	// timeline functions:
	// this.frame_11 = function() {
	// 	/* 单击以转到帧并播放
	// 	单击指定的元件实例会将播放头移动到时间轴中的指定帧并继续从该帧回放。
	// 	可在主时间轴或影片剪辑时间轴上使用。
		
	// 	说明:
	// 	1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
	// 	2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
	// 	*/
		
	// 	this.button_4.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
	// 	function fl_ClickToGoToAndPlayFromFrame_6()
	// 	{
	// 		 this.gotoAndPlay(500);
	// 	}
	// }

	// // actions tween:
	// this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(640));

	// // 图层 42
	// this.button_4 = new lib.dff();
	// this.button_4.parent = this;
	// this.button_4.setTransform(89.5,610);
	// this.button_4.alpha = 0;
	// new cjs.ButtonHelper(this.button_4, 0, 1, 2, false, new lib.dff(), 3);

	// this.timeline.addTween(cjs.Tween.get(this.button_4).wait(651));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhmA6IAWgOIANgvIgRAAIAGgWIApAAIgTBFQAKAPAWAAIAaAAIBJgBIgPAXIhkgBQgLgBgJgEQgIgDgEgIIgbAVgAgNAcIAcACQANAAAEgPIAOgxIhGAAIAFgVIBGAAIAHgcIAaAAIgIAcIAbAAIgGAVIgaAAIgPA4QgFAPgIAHQgJAIgNAAIgiABIAAgZgAgZgRIAXgPQAHANANAXIgYAPIgTgkgAg9hIIAXgMIAOAgIgaANQgFgSgGgPg");
	this.shape.setTransform(97.7,610.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBGIg8AJIABgWIAHgBIARg9IASAAIgQA7IAJgCIAShDIgbAAIARg9IA5AAIgFAWIAMgFIAGAXIANgwIAVAAIgYBbQgOA0goAaQgCgFgIgKgAgjA9QAWgPAKgbIgUAQIgFgKIgLAAIgGAYIAPgCIgFAOgAgiAGIANAAIgCAFIAcgTIACgMIgMAFIgFgcIgHAcIgLAAgAgxghIAPAAIAHgYIgQAAgAAgBRQgVAAAFgTIAniSIAXAAIgOAyIAUgZIATAJQgQATgSARIgJgFIgCALIAdAWIgUAVIgQgTIgLAqQgBABAAAAQAAABABABQAAAAABABQAAAAABAAIACAAQAFAAACgHQAEgGAFgPIATAHQgLAbgHAHQgIAGgLAAg");
	this.shape_1.setTransform(79.5,610.8);

	this.instance = new lib.补间7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(89.1,591);
	this.instance._off = true;

	this.instance_1 = new lib.补间8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-150.9,591);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},493).to({state:[{t:this.instance_1}]},6).to({state:[]},1).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(493).to({_off:false},0).to({_off:true,x:-150.9},6).wait(152));

	// 图层 1
	this.movieClip_3 = new lib.元件2();
	this.movieClip_3.parent = this;
	this.movieClip_3.setTransform(87.5,610.8);

	this.movieClip_3.addEventListener("click", gotoAndPlaySelft.bind(this));

	function gotoAndPlaySelft(){
		this.gotoAndPlay(500);
	}

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC3300").s().p("AodCHIhPhYIBqi1IQ2AAIA5BUIhsC5g");
	this.shape_2.setTransform(87.5,591.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC3300").s().p("AodCHIhPhYIBpi1IQ2AAIA6BUIhrC5g");
	this.shape_3.setTransform(47.5,591.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC3300").s().p("AodCHIhPhYIBpi1IQ3AAIA5BUIhsC5g");
	this.shape_4.setTransform(7.5,591.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC3300").s().p("AodCHIhPhYIBqi1IQ1AAIA6BUIhrC5g");
	this.shape_5.setTransform(-32.5,591.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC3300").s().p("AodCHIhPhYIBpi1IQ2AAIA6BUIhsC5g");
	this.shape_6.setTransform(-72.5,591.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_3}]}).to({state:[{t:this.shape_2,p:{x:87.5}}]},493).to({state:[{t:this.shape_3,p:{x:47.5}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_2,p:{x:-112.5}}]},1).to({state:[{t:this.shape_3,p:{x:-152.5}}]},1).to({state:[]},1).wait(151));

	// 图层 26
	this.instance_2 = new lib.vdgdfg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1488.3,575.2,1,1,0,0,0,133.9,12.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(335).to({_off:false},0).to({x:918.3},9).wait(115).to({startPosition:0},0).to({x:-331.7,alpha:0},7).to({_off:true},34).wait(151));

	// 图层 24
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(1,1,1).p("A7uriIoeWoMBHcAAAEAkNALFQAAAMgJAJQgIAJgMAAQgMAAgJgJQgJgJAAgMQAAgLAJgJQAJgJAMAAQAMAAAIAJQAJAJAAALg");
	this.shape_7.setTransform(1605.2,519.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(1,1,1).p("A7uriIoeWoMBHcAAAEAjSALFQAAgLAJgJQAhgJAIAJQAJAJAAALQAAAMgJAJQgIAJgMAAQgMAAgJgJQgJgJAAgMg");
	this.shape_8.setTransform(1545.2,519.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(1,1,1).p("EAjSALFQAAgLAJgJQAhgJAIAJQAJAJAAALQAAAMgJAJQgIAJgMAAQgMAAgJgJQgJgJAAgMgA7uriIoeWoMBHcAAA");
	this.shape_9.setTransform(1485.2,519.1);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7,p:{x:1605.2}}]},329).to({state:[{t:this.shape_8,p:{x:1545.2}}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_7,p:{x:1005.2}}]},1).to({state:[{t:this.shape_7,p:{x:1005.2}}]},116).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8,p:{x:271.8}}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_7,p:{x:-314.8}}]},1).to({state:[]},36).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(331).to({_off:false},0).wait(1).to({x:1425.2},0).wait(1).to({x:1365.2},0).wait(1).to({x:1305.2},0).wait(1).to({x:1245.2},0).wait(1).to({x:1185.2},0).wait(1).to({x:1125.2},0).wait(1).to({x:1065.2},0).to({_off:true},1).wait(117).to({_off:false,x:858.5},0).wait(1).to({x:711.8},0).wait(1).to({x:565.2},0).wait(1).to({x:418.5},0).to({_off:true},1).wait(1).to({_off:false,x:125.2},0).wait(1).to({x:-21.5},0).wait(1).to({x:-168.2},0).to({_off:true},1).wait(187));

	// 图层 23
	this.instance_3 = new lib.补间5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1551.5,492.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.补间6("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(951.5,492.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(339).to({_off:false},0).to({_off:true,x:951.5,alpha:1},9).wait(303));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(339).to({_off:false},9).wait(113).to({startPosition:0},0).to({x:-318.5,alpha:0},8).to({_off:true},31).wait(151));

	// 图层 28
	this.instance_5 = new lib.fgvghh("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1558.8,393.2,1,1,0,25,0,179.8,13.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(352).to({_off:false},0).to({x:1041.8,alpha:1},8).wait(110).to({startPosition:0},0).to({x:-238.2,alpha:0},9).to({_off:true},21).wait(151));

	// 图层 27
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(1,1,1).p("EAkNALFQAAAMgJAJQgIAJgMAAQgMAAgJgJQgJgJAAgMQAAgLAJgKQAJgIAMAAQAMAAAIAIQAJAKAAALgA7uriIoeWoMBHcAAA");
	this.shape_10.setTransform(1604.2,337.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(1,1,1).p("EAjSALFQAAgLAJgKQAhgIAIAIQAJAKAAALQAAAMgJAJQgIAJgMAAQgMAAgJgJQgJgJAAgMgA7uriIoeWoMBHcAAA");
	this.shape_11.setTransform(1545.3,337.1);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10,p:{x:1604.2}}]},348).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10,p:{x:1074.2}}]},1).to({state:[{t:this.shape_10,p:{x:1074.2}}]},109).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10,p:{x:-255.8}}]},1).to({state:[]},25).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(349).to({_off:false},0).wait(1).to({x:1486.4},0).wait(1).to({x:1427.5},0).wait(1).to({x:1368.6},0).wait(1).to({x:1309.7},0).wait(1).to({x:1250.8},0).wait(1).to({x:1192},0).wait(1).to({x:1133.1},0).to({_off:true},1).wait(110).to({_off:false,x:926.4},0).wait(1).to({x:778.6},0).wait(1).to({x:630.8},0).wait(1).to({x:483.1},0).wait(1).to({x:335.3},0).wait(1).to({x:187.5},0).wait(1).to({x:39.7},0).wait(1).to({x:-108},0).to({_off:true},1).wait(176));

	// 图层 22
	this.instance_6 = new lib.fdfffcvv("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1508.5,314.5,1,1,0,0,0,155.5,69.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(357).to({_off:false},0).to({x:1018.5,alpha:1},8).wait(109).to({startPosition:0},0).to({x:-171.5,alpha:0},8).to({_off:true},18).wait(151));

	// 图层 30
	this.instance_7 = new lib.vvdgg("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1482.1,212.9,1,1,0,25,0,119.2,13.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(365).to({_off:false},0).to({x:1052.1,alpha:1},8).wait(110).to({startPosition:0},0).to({x:-157.9,alpha:0},7).to({_off:true},10).wait(151));

	// 图层 29
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(1,1,1).p("AcZLGQAAAMgJAIQgIAJgMAAQgMAAgJgJQgJgIAAgMQAAgMAJgJQAJgJAMAAQAMAAAIAJQAJAJAAAMgAz6riIoeWpMA30AAA");
	this.shape_12.setTransform(1541.2,162.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF0000").ss(1,1,1).p("AbeLGQAAgMAJgJQAhgJAIAJQAJAJAAAMQAAAMgJAIQgIAJgMAAQgMAAgJgJQgJgIAAgMgAz6riIoeWpMA30AAA");
	this.shape_13.setTransform(1484.9,162.1);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12,p:{x:1541.2}}]},361).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12,p:{x:1091.2}}]},1).to({state:[{t:this.shape_12,p:{x:1091.2}}]},110).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12,p:{x:-208.8}}]},1).to({state:[]},13).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(362).to({_off:false},0).wait(1).to({x:1428.7},0).wait(1).to({x:1372.4},0).wait(1).to({x:1316.2},0).wait(1).to({x:1259.9},0).wait(1).to({x:1203.7},0).wait(1).to({x:1147.4},0).to({_off:true},1).wait(111).to({_off:false,x:928.7},0).wait(1).to({x:766.2},0).wait(1).to({x:603.7},0).wait(1).to({x:441.2},0).wait(1).to({x:278.7},0).wait(1).to({x:116.2},0).wait(1).to({x:-46.3},0).to({_off:true},1).wait(164));

	// 图层 21
	this.instance_8 = new lib.ggdfvvb("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(1505.5,133.5,1,1,0,0,0,155.5,69.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(369).to({_off:false},0).to({x:1085.5,alpha:1},9).wait(109).to({startPosition:0},0).to({x:-174.5,alpha:0},7).to({_off:true},6).wait(151));

	// 图层 20
	this.instance_9 = new lib.gdfgdfg("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(1165.5,97.5,1,1,0,0,0,167.5,80.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(320).to({_off:false},0).to({x:705.5,alpha:1},14).wait(118).to({startPosition:0},0).to({alpha:0},9).to({_off:true},1).wait(189));

	// 图层 11
	this.instance_10 = new lib.yutt();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1099.7,326.1,0.481,0.481,0,0,0,351.7,216.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(303).to({_off:false},0).wait(1).to({regX:351.5,regY:201.4,scaleX:0.52,scaleY:0.52,x:1031.5,y:326.5,alpha:0.164},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:950.1,y:335.5,alpha:0.359},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:870.5,y:344.2,alpha:0.551},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:806.4,y:351.3,alpha:0.705},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:764.7,y:355.9,alpha:0.805},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:728.8,y:359.8,alpha:0.891},0).wait(1).to({regX:351.6,regY:216.1,scaleX:0.7,scaleY:0.7,x:683.6,y:375.2,alpha:1},0).wait(1).to({regX:351.5,regY:201.4,scaleX:0.75,scaleY:0.75,x:626.5,y:367.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:561.4,y:370.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:496,y:373.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:438,y:376.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:397,y:378.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:366.1,y:379.5},0).wait(1).to({regY:216,scaleX:1,scaleY:1,x:326.8,y:396},0).to({x:339.5,y:394},28).to({x:326.8,y:396},22).to({x:336.5,y:394},11).to({x:339.5},18).to({x:326.8,y:396},9).to({x:339.5,y:394},32).wait(14).to({x:326.8,y:396},0).to({regY:216.1,scaleX:1.18,scaleY:1.18,x:-479.8,y:588.3},8).to({_off:true},1).wait(191));

	// 图层 11
	this.instance_11 = new lib.yutt();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1099.7,326.1,0.481,0.481,0,0,0,351.7,216.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(17).to({_off:false},0).wait(1).to({regX:351.5,regY:201.4,scaleX:0.52,scaleY:0.52,x:1064.9,y:323.7,alpha:0.164},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:1023.4,y:329.4,alpha:0.359},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:982.9,y:334.9,alpha:0.551},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:950.2,y:339.3,alpha:0.705},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:928.9,y:342.2,alpha:0.805},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:910.6,y:344.6,alpha:0.891},0).wait(1).to({regX:351.6,regY:216.1,scaleX:0.7,scaleY:0.7,x:887.7,y:358.2,alpha:1},0).wait(1).to({regX:351.5,regY:201.4,scaleX:0.75,scaleY:0.75,x:869,y:350.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:847.8,y:353.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:826.5,y:355.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:807.6,y:358.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:794.3,y:360.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:784.2,y:361.6},0).wait(1).to({regY:216,scaleX:1,scaleY:1,x:771.5,y:378},0).to({x:784.5,y:374},28).to({x:772.9,y:377.6},26).to({x:771.5,y:378},7).wait(11).to({regY:216.1,scaleX:1.18,scaleY:1.18,x:271.4,y:473.2},8).to({_off:true},1).wait(539));

	// 图层 10
	this.instance_12 = new lib.logo();
	this.instance_12.parent = this;
	this.instance_12.setTransform(38,25);

	this.instance_13 = new lib.补间16("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(251.5,42.5);
	this.instance_13._off = true;

	this.instance_14 = new lib.补间17("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(251.5,42.5);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},501).to({state:[{t:this.instance_14}]},11).to({state:[]},1).wait(138));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(501).to({_off:false},0).to({_off:true,alpha:0},11).wait(139));

	// 图层 15
	this.instance_15 = new lib.vvdddf("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(1493.3,577.2,1,1,0,0,0,134.3,13.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(131).to({_off:false},0).to({x:873.3},10).wait(127).to({startPosition:0},0).to({x:-426.7,alpha:0},6).to({_off:true},4).wait(373));

	// 图层 18
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(1,1,1).p("A7uriIoeWpMBHcAAAEAkNALGQAAAMgJAIQgIAJgMAAQgMAAgJgJQgJgIAAgMQAAgMAJgJQAJgJAMAAQAMAAAIAJQAJAJAAAMg");
	this.shape_14.setTransform(1598.7,524.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF0000").ss(1,1,1).p("EAjSALGQAAgMAJgJQAhgJAIAJQAJAJAAAMQAAAMgJAIQgIAJgMAAQgMAAgJgJQgJgIAAgMgA7uriIoeWpMBHcAAA");
	this.shape_15.setTransform(1527.6,524.1);
	this.shape_15._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF0000").ss(1,1,1).p("A7uriIoeWpMBHcAAAEAjSALGQAAgMAJgJQAhgJAIAJQAJAJAAAMQAAAMgJAIQgIAJgMAAQgMAAgJgJQgJgIAAgMg");
	this.shape_16.setTransform(1029.8,524.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14,p:{x:1598.7}}]},121).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16,p:{x:1029.8}}]},1).to({state:[{t:this.shape_14,p:{x:958.7}}]},1).to({state:[{t:this.shape_14,p:{x:958.7}}]},135).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16,p:{x:303.7}}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14,p:{x:-351.3}}]},1).to({state:[]},5).wait(373));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(122).to({_off:false},0).wait(1).to({x:1456.4},0).wait(1).to({x:1385.3},0).wait(1).to({x:1314.2},0).wait(1).to({x:1243.1},0).wait(1).to({x:1172},0).wait(1).to({x:1100.9},0).to({_off:true},1).wait(137).to({_off:false,x:794.9},0).wait(1).to({x:631.2},0).wait(1).to({x:467.4},0).to({_off:true},1).wait(1).to({_off:false,x:139.9},0).wait(1).to({x:-23.8},0).wait(1).to({x:-187.6},0).to({_off:true},1).wait(378));

	// 图层 12
	this.instance_16 = new lib.vxvxvcv("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(1487.5,487.5,1,1,0,0,0,155.5,69.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(125).to({_off:false},0).to({x:907.5},8).wait(138).to({startPosition:0},0).to({x:307.5,alpha:0},6).to({_off:true},1).wait(373));

	// 图层 14
	this.instance_17 = new lib.hnnng("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(1533.5,386.1,1,1,0,0,0,176.5,13.4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(155).to({_off:false},0).to({x:993.5},8).wait(117).to({startPosition:0},0).to({x:-336.5,alpha:0},6).to({_off:true},7).wait(358));

	// 图层 17
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF0000").ss(1,1,1).p("EAkNALGQAAAMgJAIQgIAJgMAAQgMAAgJgJQgJgIAAgMQAAgMAJgJQAJgJAMAAQAMAAAIAJQAJAJAAAMgA7uriIoeWpMBHcAAA");
	this.shape_17.setTransform(1599.7,334.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF0000").ss(1,1,1).p("EAjSALGQAAgMAJgJQAhgJAIAJQAJAJAAAMQAAAMgJAIQgIAJgMAAQgMAAgJgJQgJgIAAgMgA7uriIoeWpMBHcAAA");
	this.shape_18.setTransform(1528.4,334.1);
	this.shape_18._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17,p:{x:1599.7}}]},140).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17,p:{x:1029.7}}]},1).to({state:[{t:this.shape_17,p:{x:1029.7}}]},128).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17,p:{x:-330.3}}]},1).to({state:[]},10).wait(358));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(141).to({_off:false},0).wait(1).to({x:1457.2},0).wait(1).to({x:1385.9},0).wait(1).to({x:1314.7},0).wait(1).to({x:1243.4},0).wait(1).to({x:1172.2},0).wait(1).to({x:1100.9},0).to({_off:true},1).wait(129).to({_off:false,x:835.4},0).wait(1).to({x:641.1},0).wait(1).to({x:446.8},0).wait(1).to({x:252.5},0).wait(1).to({x:58.3},0).wait(1).to({x:-136},0).to({_off:true},1).wait(368));

	// 图层 7
	this.instance_18 = new lib.补间1("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(1552.5,304.5);
	this.instance_18._off = true;

	this.instance_19 = new lib.补间2("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(972.5,304.5);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(146).to({_off:false},0).to({_off:true,x:972.5},9).wait(496));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(146).to({_off:false},9).wait(128).to({startPosition:0},0).to({x:-367.5,alpha:0},6).to({_off:true},4).wait(358));

	// 图层 13
	this.instance_20 = new lib.jhhggg("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(1579.3,205.4,1,1,0,0,0,197.3,13.4);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(185).to({_off:false},0).to({x:1079.3},9).wait(96).to({startPosition:0},0).to({x:-280.7,alpha:0},6).to({_off:true},7).wait(348));

	// 图层 16
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF0000").ss(1,1,1).p("EAhkALHIAKAAEAisALGQAAAMgJAIQgJAJgMAAQgMAAgJgJQgIgIAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMgA6NriIoeWpMBEFAAA");
	this.shape_19.setTransform(1596,151);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF0000").ss(1,1,1).p("EAhkALHIAKAAEAhxALGQAAgMAIgJQAhgJAJAJQAJAJAAAMQAAAMgJAIQgJAJgMAAQgMAAgJgJQgIgIAAgMgA6NriIoeWpMBEFAAA");
	this.shape_20.setTransform(1545,151);
	this.shape_20._off = true;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF0000").ss(1,1,1).p("EAhxALGQAAgMAIgJQAhgJAJAJQAJAJAAAMQAAAMgJAIQgJAJgMAAQgMAAgJgJQgIgIAAgMgEAhkALHIAKAAA6NriIoeWpMBEFAAA");
	this.shape_21.setTransform(1443,151);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF0000").ss(1,1,1).p("EAisALGQAAAMgJAIQgJAJgMAAQgMAAgJgJQgIgIAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMgEAhkALHIAKAAA6NriIoeWpMBEFAAA");
	this.shape_22.setTransform(1086,151);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19,p:{x:1596}}]},170).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},107).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19,p:{x:-294}}]},1).to({state:[]},10).wait(348));
	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(171).to({_off:false},0).wait(1).to({x:1494},0).to({_off:true},1).wait(1).to({_off:false,x:1392},0).wait(1).to({x:1341},0).wait(1).to({x:1290},0).wait(1).to({x:1239},0).wait(1).to({x:1188},0).wait(1).to({x:1137},0).to({_off:true},1).wait(108).to({_off:false,x:856},0).wait(1).to({x:626},0).wait(1).to({x:396},0).wait(1).to({x:166},0).wait(1).to({x:-64},0).to({_off:true},1).wait(358));

	// 图层 6
	this.instance_21 = new lib.uutrbbb("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(1499.5,124.5,1,1,0,0,0,155.5,69.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(177).to({_off:false},0).to({x:1039.5},8).wait(108).to({startPosition:0},0).to({x:-334.5,alpha:0},5).to({_off:true},5).wait(348));

	// 图层 5
	this.instance_22 = new lib.dfgrr();
	this.instance_22.parent = this;
	this.instance_22.setTransform(1152,137.5,1,1,0,0,0,169,82.5);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(99).to({_off:false},0).to({x:655,alpha:1},22).wait(138).to({alpha:0},11).to({_off:true},1).wait(380));

	// 图层 9
	this.instance_23 = new lib.kar();
	this.instance_23.parent = this;
	this.instance_23.setTransform(1059.3,294.6,0.498,0.498,0,0,0,317.1,155.6);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1).to({regX:317,regY:155.5,scaleX:0.52,scaleY:0.52,x:1029,y:297,alpha:0.09},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:1012.9,y:298.4,alpha:0.139},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:979.3,y:301.2,alpha:0.239},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:920.3,y:306.1,alpha:0.416},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:851,y:311.9,alpha:0.623},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:782.2,y:317.7,alpha:0.829},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:725.1,y:322.6,alpha:1},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:668.6,y:328.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:587.2,y:336.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:505.5,y:345.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:432.4,y:352.9},0).wait(1).to({regX:317.1,scaleX:0.95,scaleY:0.95,x:380.4,y:358.3},0).wait(1).to({regX:317,scaleX:0.96,scaleY:0.96,x:355,y:361},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:336.3,y:363},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:323.3,y:364.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:315.1,y:365.2},0).wait(1).to({scaleX:1,scaleY:1,x:303,y:366.5},0).to({x:324,y:363.5},35).to({x:303,y:366.5},30).wait(173).to({x:-345.2,y:401.5},7).to({_off:true},1).wait(388));

	// 图层 3
	this.instance_24 = new lib.gggf();
	this.instance_24.parent = this;
	this.instance_24.setTransform(448,429.7,0.787,0.787,-11.3,0,0,0.3,0.7);

	this.instance_25 = new lib.gggf();
	this.instance_25.parent = this;
	this.instance_25.setTransform(448.6,468.6,0.787,0.787,-13,0,0,0.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_25},{t:this.instance_24}]},15).to({state:[]},92).wait(544));

	// 图层 4
	this.instance_26 = new lib.gggf();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-175,231.8,1,1,5.8,0,0,-0.1,0.3);

	this.instance_27 = new lib.gggf();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-89.5,184.8,1,1,8,0,0,-0.1,0.2);

	this.instance_28 = new lib.gggf();
	this.instance_28.parent = this;
	this.instance_28.setTransform(218.5,273.7,1,1,1.7);

	this.instance_29 = new lib.gggf();
	this.instance_29.parent = this;
	this.instance_29.setTransform(208.1,322.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]},6).to({state:[]},456).wait(189));

	// 图层 41
	this.instance_30 = new lib.hjkgg();
	this.instance_30.parent = this;
	this.instance_30.setTransform(676.3,413.3,0.189,0.189,0,0,0,347.9,17.5);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(582).to({_off:false},0).to({regY:17.6,scaleX:1,scaleY:1,alpha:1},6).wait(63));

	// 图层 40
	this.instance_31 = new lib.ggdfgdf("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(593.1,43,1,1,0,0,0,117.2,13.5);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(569).to({_off:false},0).to({x:303.1,alpha:1},10).wait(72));

	// 图层 38
	this.instance_32 = new lib.补间20("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(61.7,78.5);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.instance_33 = new lib.补间21("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(231.7,78.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_32}]},563).to({state:[{t:this.instance_33}]},9).wait(79));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(563).to({_off:false},0).to({_off:true,x:231.7,alpha:1},9).wait(79));

	// 图层 39 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_551 = new cjs.Graphics().p("AhmEdIAAo5IDNAAIAAI5g");
	var mask_graphics_552 = new cjs.Graphics().p("AmFEdIAAo5IMLAAIAAI5g");
	var mask_graphics_553 = new cjs.Graphics().p("AqkEdIAAo5IVIAAIAAI5g");
	var mask_graphics_554 = new cjs.Graphics().p("AvDEdIAAo5IeGAAIAAI5g");
	var mask_graphics_555 = new cjs.Graphics().p("AzhEdIAAo5MAnDAAAIAAI5g");
	var mask_graphics_556 = new cjs.Graphics().p("A4AEdIAAo5MAwBAAAIAAI5g");
	var mask_graphics_557 = new cjs.Graphics().p("A8fEdIAAo5MA4/AAAIAAI5g");
	var mask_graphics_558 = new cjs.Graphics().p("Egg+AEdIAAo5MBB9AAAIAAI5g");
	var mask_graphics_559 = new cjs.Graphics().p("EgldAEdIAAo5MBK7AAAIAAI5g");
	var mask_graphics_560 = new cjs.Graphics().p("Egp8AEdIAAo5MBT5AAAIAAI5g");
	var mask_graphics_561 = new cjs.Graphics().p("EguaAEdIAAo5MBc1AAAIAAI5g");
	var mask_graphics_562 = new cjs.Graphics().p("Egy6AEdIAAo5MBl0AAAIAAI5g");
	var mask_graphics_563 = new cjs.Graphics().p("Eg3YAEdIAAo5MBuxAAAIAAI5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(551).to({graphics:mask_graphics_551,x:78.8,y:60.5}).wait(1).to({graphics:mask_graphics_552,x:78.9,y:60.5}).wait(1).to({graphics:mask_graphics_553,x:78.9,y:60.5}).wait(1).to({graphics:mask_graphics_554,x:79,y:60.5}).wait(1).to({graphics:mask_graphics_555,x:79.1,y:60.5}).wait(1).to({graphics:mask_graphics_556,x:79.1,y:60.5}).wait(1).to({graphics:mask_graphics_557,x:79.2,y:60.5}).wait(1).to({graphics:mask_graphics_558,x:79.3,y:60.5}).wait(1).to({graphics:mask_graphics_559,x:79.3,y:60.5}).wait(1).to({graphics:mask_graphics_560,x:79.4,y:60.5}).wait(1).to({graphics:mask_graphics_561,x:79.5,y:60.5}).wait(1).to({graphics:mask_graphics_562,x:79.6,y:60.5}).wait(1).to({graphics:mask_graphics_563,x:79.6,y:60.5}).wait(88));

	// 图层 34
	this.instance_34 = new lib._57();
	this.instance_34.parent = this;
	this.instance_34.setTransform(100,37);
	this.instance_34._off = true;

	var maskedShapeInstanceList = [this.instance_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(551).to({_off:false},0).wait(100));

	// 图层 36
	this.yutytggg = new lib.mghfg();
	this.yutytggg.parent = this;
	this.yutytggg.setTransform(66.5,64,1,1,0,0,0,8.5,10);
	this.yutytggg._off = true;

	this.timeline.addTween(cjs.Tween.get(this.yutytggg).wait(547).to({_off:false},0).wait(104));

	// 图层 35
	this.instance_35 = new lib._56();
	this.instance_35.parent = this;
	this.instance_35.setTransform(37,32);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(547).to({_off:false},0).wait(104));

	// 图层 33
	this.hgdfhdgfhdfgd = new lib.tyyyyy();
	this.hgdfhdgfhdfgd.parent = this;
	this.hgdfhdgfhdfgd.setTransform(756,169.2,1,1,0,0,0,166.3,166.3);
	this.hgdfhdgfhdfgd._off = true;

	/*
	*点击进入全景界面
	*/
	this.hgdfhdgfhdfgd.addEventListener("click", function(){
		// alert("click start");
		document.getElementById("canvas").style.display = 'none';
	});
	this.timeline.addTween(cjs.Tween.get(this.hgdfhdgfhdfgd).wait(534).to({_off:false},0).wait(117));

	// 图层 32
	this.instance_36 = new lib.fsdfdsfsdfsf();
	this.instance_36.parent = this;
	this.instance_36.setTransform(667.5,265.1,1,1,0,0,0,318.5,314);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(524).to({_off:false},0).wait(127));

	// 图层 31
	this.instance_37 = new lib.补间12("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(667,311);
	this.instance_37.alpha = 0;
	this.instance_37._off = true;

	this.instance_38 = new lib.补间13("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(667,311);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_37}]},508).to({state:[{t:this.instance_38}]},13).wait(130));
	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(508).to({_off:false},0).to({_off:true,alpha:1},13).wait(130));

	// 图层 8
	this.instance_39 = new lib.bj();
	this.instance_39.parent = this;

	this.instance_40 = new lib.补间9("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(667,311);
	this.instance_40._off = true;

	this.instance_41 = new lib.补间10("synched",0);
	this.instance_41.parent = this;
	this.instance_41.setTransform(667,311);
	this.instance_41.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_39}]}).to({state:[{t:this.instance_40}]},500).to({state:[{t:this.instance_41}]},12).to({state:[]},1).wait(138));
	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(500).to({_off:false},0).to({_off:true,alpha:0},12).wait(139));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(667,323,1334,646);
// library properties:
lib.properties = {
	width: 1334,
	height: 646,
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