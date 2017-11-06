(function (lib,cjs) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
// library properties:
lib.properties = {
	width: 550,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};


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

(lib.plane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgOobIhkC0IAAGFImkAAIiWCgIIwAAIAACMIhkDSIHfAAIiCi+IAAiWIIwAAIkEi0IlKAAIAAmFg");
	this.shape.setTransform(68.5,54);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjgIcIBkjSIAAiMIowAAICWigIGkAAIAAmFIBki0IBtCqIAAGFIFKAAIEEC0IowAAIAACWICCC+g");
	this.shape_1.setTransform(68.5,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.plane, new cjs.Rectangle(-1,-1,139,110), null);


(lib.fly = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.plane();
	this.instance.parent = this;
	this.instance.setTransform(0.5,7,1,1,0,0,0,68.5,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[0.5,7,2.3,-4.5,4,-16,9,-16,14,-16,52,-62,90,-108,93,-108,96,-108,121.3,-130.5,121.6,-164,121.9,-195.1,108.9,-222.6,87.2,-268.4,32.6,-286,-6,-298.4,-48,-310.1,-55,-310.1,-62,-310.1,-65,-318.1,-69.6,-324.9,-110.2,-386.2,-132.8,-457,-158.1,-536.8,-102.6,-594.5,-43,-656.5,40,-650.1]}},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-47.5,138,109);


// stage content:
(lib.demo2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.fly();
	this.instance.parent = this;
	this.instance.setTransform(272,688,1,1,0,0,0,0.5,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(478,1033.5,138,109);

})(lib = lib||{}, createjs = createjs||{});
var lib, createjs;