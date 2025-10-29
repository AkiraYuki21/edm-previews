(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._2ndprize = function() {
	this.initialize(img._2ndprize);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,519,247);


(lib._320x480 = function() {
	this.initialize(img._320x480);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.b2g2 = function() {
	this.initialize(img.b2g2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,255,300);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,47);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,63);


(lib.promo = function() {
	this.initialize(img.promo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,287);


(lib.ticket = function() {
	this.initialize(img.ticket);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,386,208);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.ticket_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ticket();
	this.instance.setTransform(-121,-258,0.6264,0.6264);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-121,-258,241.8,130.3), null);


(lib.second_prize_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._2ndprize();
	this.instance.setTransform(-158,-78,0.6291,0.6291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-158,-78,326.5,155.4), null);


(lib.promo_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.promo();
	this.instance.setTransform(-137,-165,0.9834,0.9834);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-137,-165,273.4,282.3), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhMmBH3MAAAiPtMCZNAAAMAAACPtg");
	mask.setTransform(490.275,459.85);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqZeNQkHhuihilQiiilhEjCQhDjFAAiiQAAirAtiNQAtiNBPh0QBPh0BjhgQBdhbB3haQj0jFhyjAQh1i/AAksQAAjhBdjSQBejRCqibQCoibDxhdQDyhdEkAAQFYAAD2BjQD2BjCeCYQCfCZBGC8QBGC9AAC7QABEPiRDqQiQDrjXCGQFCDQCMDmQCKDlAAEyQgBD/hXDUQhYDUiuCeQixCfkGBYQkIBXlWAAQmMAAkGhugAnLIOQhsCgAADcQAABFAfBRQAfBSBEBEQBEBEBsAuQBsAtCXAAQElAACIiOQCIiNgBiwQABiDg8hlQg7hnhmhMQhlhMiLg8QiMg8icgyQieB3hrCegAjY0sQhaAng8BBQg8BCgcBIQgcBJAABEQAAC1CFCdQCECeFCBxQC0hxBgiTQBhiTAAjVQAAg+gZhHQgahFg7g/Qg7g9hbgsQhagqiCAAQh9AAhZAog");
	this.shape.setTransform(573.95,459.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABjemMAAAgsDQimBwjUBfQjMBajKBHIj/qKQChhDC1hZQCzhZCohnQCshqCYhzQCeh0B6iCIJMAAMAAAA9Mg");
	this.shape_1.setTransform(271.85,460.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlkSaIAAtOIr7AAIAAqXIL7AAIAAtNILJAAIAANNIL7AAIAAKXIr7AAIAANOg");
	this.shape_2.setTransform(868.5,449.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgZuBCNQs5lep9p9Qp9p9lds5QlqtWAAumQAAulFqtXQFds5J9p8QJ9p9M5leQNXlqOkAAQK9ABKXDOQKBDHIwF5QIoF1GpIBQGsIFEGJmIrHAAQj2neltmOQltmMnHkdQnQkioKiYQobido1ABQsiAArfE2QrFEtokIkQokIjksLGQk4LeAAMjQAAMiE4LgQEsLFIkIkQIkIkLFEtQLfE3MiAAQJVAAI0iuQIjioHfk/QHXk7FumyQFxm1DloJIK2AAQjxKQmsIsQmoIno2GSQo9GXqaDYQqwDfraABQulgBtWlpg");
	this.shape_3.setTransform(445.7,459.85);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,980.6,919.7), null);


(lib.daily_sub_caption_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4BrIAOgvQAWAIAKABQARAAAAgPIAAgCQAAgGgEgHQgEgHgLgMIgKgJQgQgPgIgOQgHgOAAgVIAAgBQAAgeAQgQQAPgRAaAAQAWAAAaAKIgNAsQgRgEgIAAQgRAAAAAOIAAABIABAEIACADIACAFIADAEIAFAFIAFAFIALALQAQAQAIAOQAHANAAAXIAAABQAAAegQASQgRASgaAAQgbAAgbgLg");
	this.shape.setTransform(105.325,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZByIAAiwIghAAIAAg0IB0AAIAAA0IggAAIAACwg");
	this.shape_1.setTransform(93.35,12.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZByIAAjkIAzAAIAADkg");
	this.shape_2.setTransform(83.875,12.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARByIgEgsIgZAAIgEAsIgzAAIAejkIBLAAIAeDkgAAAgoIgGA9IANAAIgGg9IgBgTg");
	this.shape_3.setTransform(73,12.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAKByIgKiJIgJCJIhEAAIgRjkIA4AAIADCwIAPiwIApAAIAPCwIADiwIA4AAIgRDkg");
	this.shape_4.setTransform(55.575,12.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARByIgEgsIgZAAIgEAsIgzAAIAejkIBLAAIAfDkgAAAgoIgGA9IANAAIgGg9IgBgTg");
	this.shape_5.setTransform(38.15,12.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag4BrIAOgvQAWAIAKABQARAAAAgPIAAgCQAAgGgEgHQgEgHgLgMIgKgJQgQgPgIgOQgHgOAAgVIAAgBQAAgeAQgQQAPgRAaAAQAWAAAaAKIgNAsQgRgEgIAAQgRAAAAAOIAAABIABAEIACADIACAFIADAEIAFAFIAFAFIALALQAQAQAIAOQAHANAAAXIAAABQAAAegQASQgRASgaAAQgbAAgbgLg");
	this.shape_6.setTransform(21.125,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyByIAAjkIBkAAIAAAxIgwAAIAAAoIAnAAIAAAvIgnAAIAAArIAxAAIAAAxg");
	this.shape_7.setTransform(9.825,12.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoBkQgRgRAAgiIAAhhQAAgiARgSQAQgRAgAAQAZAAAVAJIgTArQgJgDgJAAIAAAAQgVAAABAZIAABXQgBALAGAHQAHAHAKAAQAKAAALgFIASArQgXALgbAAQggAAgQgSg");
	this.shape_8.setTransform(-1.65,12.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAByIgOiQIAACQIg1AAIAAjkIBEAAIAOCNIAAiNIA1AAIAADkg");
	this.shape_9.setTransform(-15.925,12.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgyByIAAjkIBkAAIAAAxIgwAAIAAAoIAnAAIAAAvIgnAAIAAArIAxAAIAAAxg");
	this.shape_10.setTransform(-28.875,12.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZByIAAjkIAzAAIAADkg");
	this.shape_11.setTransform(-38.275,12.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAJByIgRhXIgEAAIAABXIg0AAIAAjkIA4AAQAjABAPAQQAOAQAAAfIAAARQAAAhgRANIAaBlgAgMgOIADAAQAHAAACgDQACgEAAgHIAAgWQAAgHgCgEQgCgDgHAAIgDAAg");
	this.shape_12.setTransform(-49.125,12.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgyByIAAjkIBkAAIAAAxIgwAAIAAAoIAnAAIAAAvIgnAAIAAArIAxAAIAAAxg");
	this.shape_13.setTransform(-61.825,12.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag7ByIAAjkIA3AAQAkABAOAQQAOAQAAAfIAAATQAAAigQAOQgRANgfAAIgDAAIAABUgAgHgMIACAAQAGAAADgCQADgDAAgIIAAgZQAAgHgDgEQgDgDgGAAIgCAAg");
	this.shape_14.setTransform(-74.675,12.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAIByIgIhRIgIBRIg5AAIAchyIgchyIA3AAIAKBKIALhKIA3AAIgdByIAeByg");
	this.shape_15.setTransform(-88.5,12.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgyByIAAjkIBkAAIAAAxIgwAAIAAAoIAnAAIAAAvIgnAAIAAArIAxAAIAAAxg");
	this.shape_16.setTransform(-100.775,12.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZByIAAiwIghAAIAAgzIB0AAIAAAzIggAAIAACwg");
	this.shape_17.setTransform(113.05,-21.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAHByIAAhaIgNAAIAABaIg1AAIAAjjIA1AAIAABWIANAAIAAhWIA1AAIAADjg");
	this.shape_18.setTransform(100.225,-21.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgoBkQgRgRAAgiIAAhhQAAgiARgRQAQgSAgAAQAZAAAVAKIgTApQgIgCgKAAIgBAAQgTAAgBAZIAABXQABALAFAIQAHAGALAAQAJAAALgFIASArQgXALgbAAQggAAgQgSg");
	this.shape_19.setTransform(88.2,-21.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AARByIgEgsIgZAAIgEAsIgzAAIAejjIBLAAIAeDjgAAAgnIgGA8IANAAIgGg8IgBgTg");
	this.shape_20.setTransform(74.15,-21.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaByIAAhAIgrijIA2AAIAPBMIAQhMIA2AAIgsCjIAABAg");
	this.shape_21.setTransform(59.45,-21.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaByIAAhAIgrijIA2AAIAPBMIAPhMIA3AAIgsCjIAABAg");
	this.shape_22.setTransform(41.2,-21.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAJByIgRhXIgEAAIAABXIg0AAIAAjjIA4AAQAjAAAPAPQAOARAAAfIAAARQAAAhgRAOIAaBkgAgMgOIADAAQAHAAACgEQACgDAAgHIAAgWQAAgHgCgEQgCgDgHAAIgDAAg");
	this.shape_23.setTransform(26.575,-21.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgrBkQgRgPAAgeIAAiqIA2AAIAACrQAAAKAGAAQAHAAAAgKIAAirIA2AAIAACqQAAAcgQAQQgPARgeAAQgbAAgQgQg");
	this.shape_24.setTransform(11.975,-21.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAIByIgIhRIgHBRIg7AAIAdhyIgchxIA3AAIAKBJIALhJIA3AAIgcBxIAdByg");
	this.shape_25.setTransform(-2.25,-21.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgrBkQgRgPAAgeIAAiqIA2AAIAACrQAAAKAGAAQAHAAAAgKIAAirIA2AAIAACqQAAAcgQAQQgPARgeAAQgbAAgQgQg");
	this.shape_26.setTransform(-16.375,-21.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag1ByIAAjjIA1AAIAACwIA1AAIAAAzg");
	this.shape_27.setTransform(-30.1,-21.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag/BnQgRgOAAggIAAgbQAAgRAIgKQAIgJAMgBQgLgUAAgQIAAgQQAAggALgNQALgNAeAAQAYAAAKANQAKAMAAAhIAAAOQAAAigfAKIAUAcQgEgLAAgQIArAAIAAAMIAAAOIgBAKIgBAKIgBAIIgDAJIgEAIIAeAsIg2AAIgFgIQgPALgRAAQgkAAgRgPgAgdAkIAAAOQAAAMAFAGQAFAGALAAIAIgBIgdgsgAgQhFQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAIgBAGIAAAbIAAAHQAMgDAAgNIAAgSIgBgHQgCgDgDABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_28.setTransform(-48.925,-21.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgyByIAAjjIBkAAIAAAwIgwAAIAAAnIAnAAIAAAxIgnAAIAAArIAxAAIAAAwg");
	this.shape_29.setTransform(-66.825,-21.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgoBkQgRgRAAgiIAAhhQAAgiARgRQAQgSAgAAQAZAAAVAKIgTApQgIgCgKAAIgBAAQgTAAgBAZIAABXQABALAFAIQAHAGALAAQAJAAALgFIASArQgXALgbAAQggAAgQgSg");
	this.shape_30.setTransform(-78.3,-21.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AARByIgEgsIgZAAIgEAsIgzAAIAejjIBLAAIAeDjgAAAgnIgGA8IANAAIgGg8IgBgTg");
	this.shape_31.setTransform(-92.35,-21.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAJByIgRhXIgEAAIAABXIg0AAIAAjjIA4AAQAjAAAPAPQAOARAAAfIAAARQAAAhgRAOIAaBkgAgMgOIADAAQAHAAACgEQACgDAAgHIAAgWQAAgHgCgEQgCgDgHAAIgDAAg");
	this.shape_32.setTransform(-107.075,-21.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_sub_caption_mc, new cjs.Rectangle(-115.9,-39.8,236.4,77.19999999999999), null);


(lib.cta_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cta();
	this.instance.setTransform(-181,22,1.4849,1.4849);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-181,22,362.3,69.8), null);


(lib.bt_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(-55,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bt_logo, new cjs.Rectangle(-55,-31.5,110,63), null);


(lib.bonus_prizes_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4BrIAOgvQAWAIAKABQARAAAAgPIAAgBQAAgHgEgHQgEgHgLgMIgKgJQgQgPgIgOQgHgOAAgVIAAAAQAAgeAQgRQAPgRAaAAQAWAAAaAKIgNAtQgRgFgIgBQgRAAAAAPIAAABIABAEIACAEIACADIADAFIAFAFIAFAFIALALQAQAQAIAOQAHANAAAXIAAABQAAAegQASQgRASgaAAQgbAAgbgLg");
	this.shape.setTransform(90.375,-10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyByIAAjjIBkAAIAAAwIgwAAIAAAoIAnAAIAAAvIgnAAIAAAsIAxAAIAAAwg");
	this.shape_1.setTransform(79.075,-10.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag7ByIAAguIA/iEIg3AAIAAgxIBvAAIAAAuIhACEIA/AAIAAAxg");
	this.shape_2.setTransform(66.625,-10.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZByIAAjjIAzAAIAADjg");
	this.shape_3.setTransform(56.575,-10.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAJByIgRhXIgEAAIAABXIg0AAIAAjjIA4AAQAjgBAPARQAOAQAAAfIAAARQAAAhgRANIAaBlgAgMgOIADAAQAHAAACgEQACgDAAgHIAAgWQAAgIgCgDQgCgDgHAAIgDAAg");
	this.shape_4.setTransform(45.775,-10.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7ByIAAjjIA3AAQAkgBAOARQAOAQAAAfIAAATQAAAigQANQgRAOgfAAIgDAAIAABUgAgHgMIACAAQAGAAADgCQADgDAAgIIAAgZQAAgIgDgDQgDgDgGAAIgCAAg");
	this.shape_5.setTransform(31.525,-10.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAJByIgRhXIgEAAIAABXIg0AAIAAjjIA4AAQAjgBAPARQAOAQAAAfIAAARQAAAhgRANIAaBlgAgMgOIADAAQAHAAACgEQACgDAAgHIAAgWQAAgIgCgDQgCgDgHAAIgDAAg");
	this.shape_6.setTransform(13.625,-10.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyByIAAjjIBkAAIAAAwIgwAAIAAAoIAnAAIAAAvIgnAAIAAAsIAxAAIAAAwg");
	this.shape_7.setTransform(0.875,-10.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag8ByIAAjjIA5AAQAcAAARANQARAOAAAcIAAAHQAAARgGALQgGALgMAGQAaAIAAAmIAAAOQAAAdgQAQQgQAPgcAAgAgIBBIADAAQAGAAACgDQADgDAAgHIAAgWQAAgHgDgDQgCgEgGAAIgDAAgAgIgYIAEAAQAGAAACgEQADgDAAgGIAAgOQAAgHgDgDQgCgDgGAAIgEAAg");
	this.shape_8.setTransform(-11.875,-10.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAlByIAAiqIgCAaIgQCQIgmAAIgQiQIgCgaIAACqIgzAAIAAjjIBQAAIAHBsIABARIABgRIAIhsIBPAAIAADjg");
	this.shape_9.setTransform(-28.55,-10.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgyByIAAjjIBkAAIAAAwIgwAAIAAAoIAnAAIAAAvIgnAAIAAAsIAxAAIAAAwg");
	this.shape_10.setTransform(-43.575,-10.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiByIgljjIA4AAIAPCgIAQigIA3AAIgkDjg");
	this.shape_11.setTransform(-57.25,-10.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAB2QgdAAgPgRQgQgQAAgfIAAhrQAAggAQgQQAQgQAcAAIABAAQAdAAAQARQAPAQAAAfIAABrQAAAggQAQQgPAQgdAAgAgGg6IAAB0QAAALAGAAIAAAAQAHAAAAgLIAAh0QAAgKgHAAQgGAAAAAKg");
	this.shape_12.setTransform(-71.925,-10.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAByIgOiQIAACQIg1AAIAAjjIBEAAIAOCMIAAiMIA1AAIAADjg");
	this.shape_13.setTransform(-86.475,-10.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoBlQgRgSAAgiIAAhhQAAgiARgSQAQgRAgAAQAZAAAVAJIgTAqQgJgCgJAAIgBAAQgUAAABAZIAABXQgBAMAGAGQAHAHAKAAQAKAAALgEIASAqQgXALgbAAQggAAgQgRg");
	this.shape_14.setTransform(77.55,-45.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZBzIAAjlIAzAAIAADlg");
	this.shape_15.setTransform(67.425,-45.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag7BzIAAjlIA3AAQAkAAAOAQQAOARAAAfIAAATQAAAigQAOQgRANgfAAIgDAAIAABVgAgHgLIACAAQAGAAADgEQADgDAAgHIAAgZQAAgIgDgDQgDgDgGAAIgCAAg");
	this.shape_16.setTransform(57.075,-45.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgyBzIAAjlIBkAAIAAAxIgwAAIAAAnIAnAAIAAAxIgnAAIAAAqIAxAAIAAAyg");
	this.shape_17.setTransform(44.875,-45.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag4BrIAOgwQAWAKAKgBQARAAAAgOIAAgCQAAgGgEgHQgEgHgLgLIgKgKQgQgPgIgOQgHgNAAgWIAAgBQAAgeAQgRQAPgQAaAAQAWAAAaALIgNArQgRgEgIAAQgRAAAAAOIAAABIABAEIACADIACAFIADAEIAFAFIAFAGIALALQAQAPAIANQAHAOAAAXIAAAAQAAAggQARQgRASgaAAQgbAAgbgLg");
	this.shape_18.setTransform(29.275,-45.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag4BrIAOgwQAWAKAKgBQARAAAAgOIAAgCQAAgGgEgHQgEgHgLgLIgKgKQgQgPgIgOQgHgNAAgWIAAgBQAAgeAQgRQAPgQAaAAQAWAAAaALIgNArQgRgEgIAAQgRAAAAAOIAAABIABAEIACADIACAFIADAEIAFAFIAFAGIALALQAQAPAIANQAHAOAAAXIAAAAQAAAggQARQgRASgaAAQgbAAgbgLg");
	this.shape_19.setTransform(17.375,-45.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgZBzIAAjlIAzAAIAADlg");
	this.shape_20.setTransform(7.925,-45.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAmBzIAAirIgDAaIgPCRIgnAAIgPiRIgDgaIAACrIgyAAIAAjlIBPAAIAHBtIABAQIACgQIAIhtIBOAAIAADlg");
	this.shape_21.setTransform(-5.3,-45.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZBzIAAixIghAAIAAg0IB0AAIAAA0IggAAIAACxg");
	this.shape_22.setTransform(-24.65,-45.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOAxIgKhhIAxAAIgJBhg");
	this.shape_23.setTransform(-34.275,-51.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAABzIgOiQIAACQIg1AAIAAjlIBEAAIAOCNIAAiNIA1AAIAADlg");
	this.shape_24.setTransform(-45.525,-45.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAAB2QgdAAgPgQQgQgRAAgeIAAhtQAAgfAQgQQAQgQAcAAIABAAQAdAAAQAQQAPAQAAAfIAABtQAAAfgQAQQgPAQgdAAgAgGg6IAAB0QAAALAGgBIAAAAQAHABAAgLIAAh0QAAgJgHAAQgGAAAAAJg");
	this.shape_25.setTransform(-60.125,-45.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag8BzIAAjlIA4AAQAcABATASQASASAAAfIAABbQAAAfgSAUQgTASgbABgAgHBBIACAAQAHAAACgDQADgEAAgKIAAhiQgBgIgDgDQgCgDgGAAIgCAAg");
	this.shape_26.setTransform(-73.95,-45.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bonus_prizes_mc, new cjs.Rectangle(-95.5,-63.9,193.4,78.6), null);


(lib.big_win_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAACDIgQilIAAClIg9AAIAAkFIBPAAIAQChIAAihIA7AAIAAEFg");
	this.shape.setTransform(122.15,-28.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdCDIAAkFIA7AAIAAEFg");
	this.shape_1.setTransform(109.5,-28.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALCDIgLicIgKCcIhOAAIgTkFIA/AAIADDIIARjIIAwAAIASDIIACjIIBAAAIgTEFg");
	this.shape_2.setTransform(94.1,-28.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AABCGQgiAAgSgSQgSgTAAgjIAAh7QABgkARgSQATgSAggBIABAAQAiAAARATQARATABAjIAAB7QAAAlgSARQgSATghgBgAgHhCIAACGQAAALAHgBIABAAQAHABABgLIAAiGQAAgLgJAAIAAAAQgHAAAAALg");
	this.shape_3.setTransform(70.5,-29);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdCDIAAjKIglAAIAAg7ICFAAIAAA7IglAAIAADKg");
	this.shape_4.setTransform(55.775,-28.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhAB6IAQg1QAZAKALgBQAVAAgBgQIAAgCQAAgHgFgIQgEgIgNgNIgMgLQgSgRgIgQQgIgQAAgZIAAAAQAAgiARgUQASgTAeAAQAZAAAeANIgQAyQgSgGgKAAQgTAAAAAQIAAACIABAEIABAFIADAEIAEAFIAFAFIAGAHIAMAMQATATAJAPQAIAPAAAbIAAAAQAAAkgTATQgSAUgeAAQgfAAgfgMg");
	this.shape_5.setTransform(37.95,-29);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5CDIAAkFIByAAIAAA4Ig3AAIAAAtIAtAAIAAA3IgtAAIAAAxIA4AAIAAA4g");
	this.shape_6.setTransform(25.05,-28.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBzQgTgUAAgnIAAhvQAAgnATgUQATgUAkAAQAdAAAXALIgVAwQgJgDgMAAIAAAAQgXAAAAAdIAABjQAAAOAHAHQAHAIAMAAIABAAQAKAAAMgFIAVAwQgaANgfAAQgkAAgTgUg");
	this.shape_7.setTransform(11.975,-28.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAACDIgQilIAAClIg9AAIAAkFIBPAAIAQChIAAihIA7AAIAAEFg");
	this.shape_8.setTransform(-4.3,-28.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATCDIgEgzIgcAAIgGAzIg6AAIAikFIBWAAIAjEFgAgBgtIgHBFIAQAAIgHhFIgBgWg");
	this.shape_9.setTransform(-21.45,-28.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAICDIAAhnIgPAAIAABnIg8AAIAAkFIA8AAIAABjIAPAAIAAhjIA8AAIAAEFg");
	this.shape_10.setTransform(-37.65,-28.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AguBzQgTgUAAgnIAAhvQAAgnATgUQATgUAkAAQAdAAAXALIgVAwQgJgDgMAAIAAAAQgXAAAAAdIAABjQAAAOAHAHQAHAIAMAAIABAAQAKAAAMgFIAVAwQgaANgfAAQgkAAgTgUg");
	this.shape_11.setTransform(-51.425,-28.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag5CDIAAkFIBzAAIAAA4Ig4AAIAAAtIAtAAIAAA3IgtAAIAAAxIA4AAIAAA4g");
	this.shape_12.setTransform(-69.3,-28.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAKCDIgThkIgEAAIAABkIg8AAIAAkFIBAAAQApAAAPATQARASAAAkIAAATQAAAmgUAQIAeBzgAgNgQIADAAQAHAAADgEQACgDAAgJIAAgZQAAgJgCgDQgDgEgHAAIgDAAg");
	this.shape_13.setTransform(-84.45,-28.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AABCGQgiAAgSgSQgRgTAAgjIAAh7QgBgkATgSQASgSAggBIABAAQAiAAARATQARATAAAjIAAB7QABAlgTARQgRATghgBgAgHhCIAACGQAAALAHgBIABAAQAHABAAgLIAAiGQABgLgJAAIAAAAQgHAAAAALg");
	this.shape_14.setTransform(-100.8,-29);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AArCDIAAjDIgDAeIgSClIgsAAIgSilIgCgeIAADDIg6AAIAAkFIBbAAIAIB8IABATIABgTIAKh8IBaAAIAAEFg");
	this.shape_15.setTransform(-119.775,-28.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.big_win_mc, new cjs.Rectangle(-132.5,-50,265.1,49.6), null);


(lib.background_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._320x480();
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_mc, new cjs.Rectangle(-160,-240,320,480), null);


(lib.b2g2_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.b2g2();
	this.instance.setTransform(-127.5,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.b2g2_mc, new cjs.Rectangle(-127.5,-150,255,300), null);


// stage content:
(lib.bigticketconversionhtml5320x480 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// footer
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(304.6,464.1,0.0195,0.0195,0,0,0,496.7,465.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAtIgBgUQAKADAHAAQAFAAACgCQACgBACgHIgEAAQgKAAgFgEQgGgGADgLIAJgrIAUAAIgIArQAAAAAAABQAAABAAAAQAAABABAAQABAAAAAAIACAAIAKguIAUAAIgOBCQgDAPgHAGQgHAHgMgBQgIAAgJgCg");
	this.shape.setTransform(289.575,465.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAwIAThfIAUAAIgTBfg");
	this.shape_1.setTransform(285.6,463.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAtIAUhcIAUAAIgFAYIACAAQANAAAEAFQAEAHgDAMIgEAVQgDAOgHAGQgGAGgMAAQgJAAgOgDgAgDAcIABAAIACgBIADgFIAEgUQABgDgBgBQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_2.setTransform(280.91,463.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAxIAOhDIAUAAIgOBDgAABgeQgBgDAAgFQABgFADgDQAEgDAEABQAFgBABADQACADgBAFQgBAFgDADQgDADgFAAQgEAAgCgDg");
	this.shape_3.setTransform(276.9417,463.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAhIAGgTQAIADAHAAQAGAAABgDIgBgDIgCgCIgCgBIgCgBQgOgGAEgPQACgJAGgGQAHgGAJAAQAJgBAJADIgFATQgIgCgGAAQgFAAgBADIABACIADACIAEACQAHADADAEQADAFgCAIQgCAKgIAHQgIAGgMAAQgJAAgIgDg");
	this.shape_4.setTransform(272.725,464.5214);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAkIAJgwQABgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBAAIgCAAIgKAzIgVAAIAOhCQAOgFAKAAQAXAAgFAWIgKAxg");
	this.shape_5.setTransform(267.4625,464.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAKIAFgTQAFgaAXAAQAXAAgGAaIgEATQgFAagWAAQgYAAAFgagAAAgKIgEAVQgBAGADAAQACAAAAgGIAFgVQABgGgCAAQgDAAgBAGg");
	this.shape_6.setTransform(262.1592,464.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAxIAUhfIAXgCQANAAAEAGQAEAHgDANIgEAVQgDANgHAGQgGAGgMAAIgCAAIgGAZgAAAAEIAAAAIADgBIADgEIAEgUQABgEgBgCQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_7.setTransform(256.31,465.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAhIAGgTQAIADAHAAQAGAAABgDIgBgDIgCgCIgCgBIgCgBQgOgGAEgPQACgJAGgGQAHgGAJAAQAJgBAJADIgFATQgIgCgGAAQgFAAgBADIABACIADACIAEACQAHADADAEQADAFgCAIQgCAKgIAHQgIAGgMAAQgJAAgIgDg");
	this.shape_8.setTransform(251.425,464.5214);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAeQgGgHADgOIAEgSQADgOAHgGQAHgGALAAQAMAAADAGQAFAGgDAOIgEAPIgYAAIAAAEQgCAHAJAAIAKgBIgCATIgOABQgNAAgGgGgAABgMIgBAGIAFAAIABgGIAAgEQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQgCAAgBAFg");
	this.shape_9.setTransform(246.5321,464.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAwIAAglIgBAAIgIAlIgWAAIAUhfIAXAAQAPAAAEAHQAFAHgDANIgBAGQgDAOgIAFIABArgAABgFIABAAIAEgBQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAABgBIACgJIAAgEQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgBAAg");
	this.shape_10.setTransform(240.6946,463.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAtIgBgUQAKADAHAAQAFAAACgCQACgBACgHIgEAAQgKAAgFgEQgGgGADgLIAJgrIAUAAIgIArQAAAAAAABQAAABAAAAQABABAAAAQAAAAABAAIACAAIAKguIAUAAIgOBCQgDAPgHAGQgHAHgMgBQgIAAgJgCg");
	this.shape_11.setTransform(233.375,465.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAfQgEgFACgLIAAgBQACgKAHgFQAHgFAKAAIAEAAIAAgDQABgEgCgBQgBgCgEAAQgGAAgKAEIAKgVIAHgBIAHgBQAOAAAEAGQAEAFgDANIgJAsQgQADgIAAQgLAAgFgFgAgCAIIgCAEIAAACQgBAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAIACgMIgBAAIgDABg");
	this.shape_12.setTransform(227.7923,464.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAwIAUhfIAVAAIgVBfg");
	this.shape_13.setTransform(223.9,463.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggAwIAUhfIAWAAQAPAAAFAHQAEAHgCANIgCAIQgDANgIAGQgIAFgMAAIgBAAIgIAkgAAAgEIABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQACgCABgDIACgKQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIAAAAg");
	this.shape_14.setTransform(219.3196,463.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAuIAAhbIAWAAQAKAAAIAHQAHAIAAAMIAAAkQAAANgHAIQgIAHgKAAgAgCAaIAAAAQABAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAIACgGIAAgmIgCgFIgDgBIAAAAg");
	this.shape_15.setTransform(180.25,464.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAuIAAhbIAoAAIAAAUIgUAAIAAAPIAQAAIAAATIgQAAIAAASIAVAAIAAATg");
	this.shape_16.setTransform(175.3,464.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAHAuIgCgSIgKAAIgBASIgUAAIALhbIAeAAIANBbgAAAgPIgCAYIAFAAIgCgYIgBgIg");
	this.shape_17.setTransform(169.95,464.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAuIgFg5IAAA5IgVAAIAAhbIAbAAIAFA4IAAg4IAVAAIAABbg");
	this.shape_18.setTransform(162.375,464.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAuIAAhbIATAAIAABbg");
	this.shape_19.setTransform(157.9,464.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWArIAFgTQAJADAFAAQAGAAAAgFIAAgBQAAgDgCgCQgBgDgFgEIgEgFQgGgFgDgGQgCgFAAgIIAAgBQAAgMAFgHQAHgGAKAAQAIAAALADIgFASIgKgBQgGgBAAAHIAAACIAAABIABABIABACIACACIACADIAEAEQAHAFADAGQADAGAAAIIAAABQAAANgGAGQgHAIgKgBQgLABgLgFg");
	this.shape_20.setTransform(152.6,464.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUAuIAAhbIAoAAIAAAUIgTAAIAAAPIAPAAIAAATIgPAAIAAASIAUAAIAAATg");
	this.shape_21.setTransform(148.05,464.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXAuIAAgSIAYg1IgVAAIAAgUIAsAAIAAASIgZA1IAZAAIAAAUg");
	this.shape_22.setTransform(143.05,464.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAuIAAhbIATAAIAABbg");
	this.shape_23.setTransform(139,464.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAEAuIgHgjIgBAAIAAAjIgVAAIAAhbIAWAAQAOAAAGAGQAGAHAAAMIAAAHQAAANgHAGIAKAogAgEgFIABAAIADgBIABgFIAAgJIgBgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_24.setTransform(134.675,464.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXAuIAAhbIAWAAQAOAAAGAGQAFAHAAAMIAAAIQAAANgGAGQgHAFgMAAIgBAAIAAAigAgCgEIABAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAABAAIABgEIAAgLIgBgEQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_25.setTransform(128.925,464.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIA7IAAh1IARAAIAAB1g");
	this.shape_26.setTransform(119.975,466.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJAuIAAgaIgShBIAWAAIAFAfIAHgfIAVAAIgRBBIAAAag");
	this.shape_27.setTransform(110.875,464.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUAuIAAhbIAUAAIAABGIAVAAIAAAVg");
	this.shape_28.setTransform(105.35,464.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXAuIAAhbIAWAAQAOAAAGAGQAFAHAAAMIAAAIQAAANgGAGQgHAFgMAAIgBAAIAAAigAgCgEIABAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAIABgEIAAgLIgBgEQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_29.setTransform(100.075,464.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgXAuIAAhbIAWAAQAOAAAGAGQAFAHAAAMIAAAIQAAANgGAGQgHAFgMAAIgBAAIAAAigAgCgEIABAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAABAAIABgEIAAgLIgBgEQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_30.setTransform(94.525,464.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAHAuIgCgSIgJAAIgCASIgVAAIAMhbIAeAAIAMBbgAAAgPIgCAYIAFAAIgDgYIAAgIg");
	this.shape_31.setTransform(88.8,464.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgWArIAGgTQAIADAEAAQAHAAAAgFIAAgBQAAgDgCgCQgBgDgEgEIgFgFQgGgFgDgGQgDgFAAgIIAAgBQAAgMAHgHQAGgGAKAAQAJAAAKADIgFASIgKgBQgHgBAAAHIABACIAAABIABABIABACIACACIACADIAFAEQAGAFADAGQADAGAAAIIAAABQAAANgHAGQgGAIgKgBQgLABgLgFg");
	this.shape_32.setTransform(81.9,464.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFAUIgEgnIATAAIgDAng");
	this.shape_33.setTransform(78,462.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgQAoQgGgHAAgNIAAgnQAAgOAGgHQAHgHAMAAQAKAAAJAEIgIARIgHgBQgIAAAAAKIAAAjQAAAEACADQADADAEAAIAAAAQAEAAAEgCIAHARQgJAFgLAAQgMAAgHgIg");
	this.shape_34.setTransform(74.325,464.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZAqQgGgGgBgNIAAgLQAAgHADgEQAEgCAFgBQgFgJAAgGIAAgGQAAgNAEgFQAFgGAMABQAJAAAEAEQAEAGAAANIAAAGQAAAOgMADIAIALQgCgFAAgGIARAAIAAAFIAAAFIAAAFIAAADIgBADIgBAFIgBACIALASIgVAAIgCgDQgGAFgHgBQgOAAgHgFgAgLAPIAAAFQAAAGACABQACADAEAAIADgBIgLgRgAgGgbIAAABIAAACIAAALIAAADQAEgCAAgFIAAgHIgBgDIgBAAIgCAAg");
	this.shape_35.setTransform(68.05,464.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJAuIAAhGIgOAAIAAgVIAvAAIAAAVIgNAAIAABGg");
	this.shape_36.setTransform(62.05,464.825);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIA7IAAh1IARAAIAAB1g");
	this.shape_37.setTransform(53.475,466.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgFAvIAAhEIgJACIAAgUIAdgHIAABdg");
	this.shape_38.setTransform(45.175,464.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgRApQgGgHAAgNIAAgFQAAgKAFgGQgDgGAAgJIAAgFQgBgMAHgIQAGgGAJAAQAKAAAGAGQAHAIAAAMIAAAFQAAAJgFAGQAGAGAAAKIAAAFQAAANgHAHQgGAGgLAAQgKAAgHgGgAgBALIAAAOQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIAAgOQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABgAgBgYIAAAQIAAACIABABIACgBIAAgCIAAgQQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAg");
	this.shape_39.setTransform(40.65,464.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgWAvIAAgSQAZgeAAgPIAAgBQAAgEgCgCQgCgDgEAAIgLADIgHgRQAKgGANAAQALAAAGAIQAHAIAAAMIAAABQAAAGgCAHQgCAFgEAGIgIAKIgIAKIAVAAIAAAUg");
	this.shape_40.setTransform(35.325,464.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgWArIAGgTQAIADAFAAQAGAAAAgFIAAgBQAAgDgCgCQgBgDgEgEIgFgFQgGgFgDgGQgDgFAAgIIAAgBQAAgMAHgHQAGgGAKAAQAJAAAKADIgFASIgKgBQgHgBAAAHIABACIAAABIABABIABACIACACIACADIAFAEQAGAFADAGQADAGAAAIIAAABQAAANgHAGQgGAIgKgBQgLABgLgFg");
	this.shape_41.setTransform(28.8,464.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgTAuIAAhbIAnAAIAAAUIgUAAIAAAPIARAAIAAATIgRAAIAAASIAUAAIAAATg");
	this.shape_42.setTransform(24.25,464.825);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgJAuIAAhbIAUAAIAABbg");
	this.shape_43.setTransform(20.45,464.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAEAuIgHgjIgBAAIAAAjIgVAAIAAhbIAWAAQAOAAAGAGQAGAHAAAMIAAAHQAAANgHAGIAKAogAgEgFIABAAIADgBIABgFIAAgJIgBgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgBAAg");
	this.shape_44.setTransform(16.125,464.825);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgUAuIAAhbIAoAAIAAAUIgTAAIAAAPIAQAAIAAATIgQAAIAAASIAUAAIAAATg");
	this.shape_45.setTransform(11,464.825);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgWArIAGgTQAJADADAAQAHAAAAgFIAAgBQAAgDgCgCQgBgDgFgEIgDgFQgHgFgCgGQgDgFgBgIIAAgBQABgMAFgHQAHgGAKAAQAIAAALADIgFASIgKgBQgHgBABAHIAAACIAAABIABABIABACIACACIACADIAEAEQAHAFADAGQADAGAAAIIAAABQAAANgGAGQgHAIgKgBQgLABgLgFg");
	this.shape_46.setTransform(6.15,464.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(386));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(160,36.5,0.8182,0.8182);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(292).to({alpha:0},16).wait(78));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(160,380.95,0.5745,0.5745,0,0,0,0,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(308).to({_off:false},0).wait(1).to({regX:0.2,regY:56.9,x:160.1,y:413.45,alpha:0.0032},0).wait(1).to({y:413.05,alpha:0.0145},0).wait(1).to({y:412.25,alpha:0.0371},0).wait(1).to({y:410.85,alpha:0.077},0).wait(1).to({y:408.4,alpha:0.1467},0).wait(1).to({y:404.1,alpha:0.2672},0).wait(1).to({y:398.85,alpha:0.4164},0).wait(1).to({y:393.6,alpha:0.5648},0).wait(1).to({y:389.2,alpha:0.6887},0).wait(1).to({y:385.75,alpha:0.7859},0).wait(1).to({y:383.05,alpha:0.8625},0).wait(1).to({y:380.9,alpha:0.9229},0).wait(1).to({y:379.5,alpha:0.9628},0).wait(1).to({y:378.7,alpha:0.9857},0).wait(1).to({y:378.3,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:160,y:345.55,alpha:1},0).wait(62));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(-164.95,220,0.7981,0.7981);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(292).to({_off:false},0).wait(1).to({regX:-0.1,regY:-192.8,scaleX:0.7983,scaleY:0.7983,x:-164,y:66.15},0).wait(1).to({scaleX:0.799,scaleY:0.799,x:-160.3,y:66.25},0).wait(1).to({scaleX:0.8005,scaleY:0.8005,x:-152.95,y:66.45},0).wait(1).to({scaleX:0.8032,scaleY:0.8032,x:-140,y:66.8},0).wait(1).to({scaleX:0.8077,scaleY:0.8077,x:-117.35,y:67.45},0).wait(1).to({scaleX:0.8157,scaleY:0.8157,x:-78.2,y:68.6},0).wait(1).to({scaleX:0.8255,scaleY:0.8255,x:-29.7,y:70},0).wait(1).to({scaleX:0.8353,scaleY:0.8353,x:18.5,y:71.35},0).wait(1).to({scaleX:0.8434,scaleY:0.8434,x:58.75,y:72.55},0).wait(1).to({scaleX:0.8498,scaleY:0.8498,x:90.35,y:73.4},0).wait(1).to({scaleX:0.8549,scaleY:0.8549,x:115.25,y:74.15},0).wait(1).to({scaleX:0.8589,scaleY:0.8589,x:134.85,y:74.7},0).wait(1).to({scaleX:0.8615,scaleY:0.8615,x:147.85,y:75.05},0).wait(1).to({scaleX:0.863,scaleY:0.863,x:155.25,y:75.25},0).wait(1).to({scaleX:0.8637,scaleY:0.8637,x:158.9,y:75.35},0).wait(1).to({regX:0.1,regY:0,scaleX:0.8639,scaleY:0.8639,x:160.1,y:242},0).wait(78));

	// b2g2_lockup
	this.instance_4 = new lib.b2g2_mc();
	this.instance_4.setTransform(161.25,239);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(98).to({_off:false},0).wait(1).to({y:238.9262,alpha:0.0037},0).wait(1).to({y:238.6652,alpha:0.0167},0).wait(1).to({y:238.1308,alpha:0.0435},0).wait(1).to({y:237.1628,alpha:0.0919},0).wait(1).to({y:235.3687,alpha:0.1816},0).wait(1).to({y:232.5041,alpha:0.3248},0).wait(1).to({y:229.2445,alpha:0.4878},0).wait(1).to({y:226.3109,alpha:0.6345},0).wait(1).to({y:224.0018,alpha:0.7499},0).wait(1).to({y:222.2241,alpha:0.8388},0).wait(1).to({y:220.8247,alpha:0.9088},0).wait(1).to({y:219.8721,alpha:0.9564},0).wait(1).to({y:219.3313,alpha:0.9834},0).wait(1).to({y:219.072,alpha:0.9964},0).wait(1).to({y:219,alpha:1},0).wait(69).to({y:219.0738,alpha:0.9963},0).wait(1).to({y:219.3348,alpha:0.9833},0).wait(1).to({y:219.8692,alpha:0.9565},0).wait(1).to({y:220.8372,alpha:0.9081},0).wait(1).to({y:222.6313,alpha:0.8184},0).wait(1).to({y:225.4959,alpha:0.6752},0).wait(1).to({y:228.7555,alpha:0.5122},0).wait(1).to({y:231.6891,alpha:0.3655},0).wait(1).to({y:233.9982,alpha:0.2501},0).wait(1).to({y:235.7759,alpha:0.1612},0).wait(1).to({y:237.1753,alpha:0.0912},0).wait(1).to({y:238.1279,alpha:0.0436},0).wait(1).to({y:238.6687,alpha:0.0166},0).wait(1).to({y:238.928,alpha:0.0036},0).wait(1).to({y:239,alpha:0},0).wait(190));

	// bonus_prizes_copy
	this.instance_5 = new lib.big_win_mc();
	this.instance_5.setTransform(159.2,436.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regY:-29,y:407.4,alpha:0.0037},0).wait(1).to({y:407.05,alpha:0.0167},0).wait(1).to({y:406.4,alpha:0.0435},0).wait(1).to({y:405.2,alpha:0.0919},0).wait(1).to({y:402.95,alpha:0.1816},0).wait(1).to({y:399.35,alpha:0.3248},0).wait(1).to({y:395.3,alpha:0.4878},0).wait(1).to({y:391.6,alpha:0.6345},0).wait(1).to({y:388.75,alpha:0.7499},0).wait(1).to({y:386.5,alpha:0.8388},0).wait(1).to({y:384.75,alpha:0.9088},0).wait(1).to({y:383.55,alpha:0.9564},0).wait(1).to({y:382.9,alpha:0.9834},0).wait(1).to({y:382.55,alpha:0.9964},0).wait(1).to({regY:0,y:411.5,alpha:1},0).wait(69).to({regY:-29,y:382.55,alpha:0.9963},0).wait(1).to({y:382.85,alpha:0.9833},0).wait(1).to({y:383.4,alpha:0.9565},0).wait(1).to({y:384.4,alpha:0.9081},0).wait(1).to({y:386.3,alpha:0.8184},0).wait(1).to({y:389.3,alpha:0.6752},0).wait(1).to({y:392.7,alpha:0.5122},0).wait(1).to({y:395.8,alpha:0.3655},0).wait(1).to({y:398.2,alpha:0.2501},0).wait(1).to({y:400.1,alpha:0.1612},0).wait(1).to({y:401.55,alpha:0.0912},0).wait(1).to({y:402.55,alpha:0.0436},0).wait(1).to({y:403.15,alpha:0.0166},0).wait(1).to({y:403.4,alpha:0.0036},0).wait(1).to({regY:0,y:432.5,alpha:0},0).to({_off:true},80).wait(110));

	// sub_caption
	this.instance_6 = new lib.daily_sub_caption_mc();
	this.instance_6.setTransform(157.2,425.65);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(181).to({_off:false},0).wait(1).to({regX:2.7,regY:-4.5,x:159.85,y:421.05,alpha:0.0037},0).wait(1).to({y:420.8,alpha:0.0167},0).wait(1).to({y:420.25,alpha:0.0435},0).wait(1).to({y:419.3,alpha:0.0919},0).wait(1).to({y:417.55,alpha:0.1816},0).wait(1).to({x:159.8,y:414.75,alpha:0.3248},0).wait(1).to({y:411.55,alpha:0.4878},0).wait(1).to({x:159.75,y:408.65,alpha:0.6345},0).wait(1).to({y:406.4,alpha:0.7499},0).wait(1).to({x:159.7,y:404.65,alpha:0.8388},0).wait(1).to({y:403.25,alpha:0.9088},0).wait(1).to({y:402.35,alpha:0.9564},0).wait(1).to({y:401.8,alpha:0.9834},0).wait(1).to({y:401.55,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:157,y:406,alpha:1},0).wait(96).to({x:157.2,y:405.65},0).wait(1).to({regX:2.7,regY:-4.5,x:159.9,y:401.2,alpha:0.9968},0).wait(1).to({y:401.4,alpha:0.9855},0).wait(1).to({y:401.85,alpha:0.9629},0).wait(1).to({y:402.65,alpha:0.923},0).wait(1).to({y:404.05,alpha:0.8533},0).wait(1).to({y:406.45,alpha:0.7328},0).wait(1).to({y:409.45,alpha:0.5836},0).wait(1).to({y:412.4,alpha:0.4352},0).wait(1).to({y:414.9,alpha:0.3113},0).wait(1).to({y:416.85,alpha:0.2141},0).wait(1).to({y:418.35,alpha:0.1375},0).wait(1).to({y:419.6,alpha:0.0771},0).wait(1).to({y:420.4,alpha:0.0372},0).wait(1).to({y:420.85,alpha:0.0143},0).wait(1).to({y:421.05,alpha:0.0031},0).wait(1).to({regX:0,regY:0,x:157.2,y:425.65,alpha:0},0).wait(78));

	// second_prize_mc
	this.instance_7 = new lib.second_prize_mc();
	this.instance_7.setTransform(164,254);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(181).to({_off:false},0).wait(1).to({regX:5.2,regY:-0.3,x:169.2,y:253.6,alpha:0.0037},0).wait(1).to({y:253.25,alpha:0.0167},0).wait(1).to({y:252.6,alpha:0.0435},0).wait(1).to({y:251.4,alpha:0.0919},0).wait(1).to({y:249.15,alpha:0.1816},0).wait(1).to({y:245.55,alpha:0.3248},0).wait(1).to({y:241.5,alpha:0.4878},0).wait(1).to({y:237.8,alpha:0.6345},0).wait(1).to({y:234.95,alpha:0.7499},0).wait(1).to({y:232.7,alpha:0.8388},0).wait(1).to({y:230.95,alpha:0.9088},0).wait(1).to({y:229.75,alpha:0.9564},0).wait(1).to({y:229.1,alpha:0.9834},0).wait(1).to({y:228.75,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:164,y:229,alpha:1},0).wait(97).to({regX:5.2,regY:-0.3,scaleX:0.9985,scaleY:0.9985,x:169.4,y:228.7},0).wait(1).to({scaleX:0.9931,scaleY:0.9931,x:170.05,y:228.75},0).wait(1).to({scaleX:0.9824,scaleY:0.9824,x:171.5,y:228.85},0).wait(1).to({scaleX:0.9634,scaleY:0.9634,x:174,y:229.1},0).wait(1).to({scaleX:0.9303,scaleY:0.9303,x:178.4,y:229.45},0).wait(1).to({scaleX:0.8731,scaleY:0.8731,x:185.95,y:230.1},0).wait(1).to({scaleX:0.8022,scaleY:0.8022,x:195.3,y:230.9},0).wait(1).to({scaleX:0.7317,scaleY:0.7317,x:204.6,y:231.7},0).wait(1).to({scaleX:0.6728,scaleY:0.6728,x:212.4,y:232.35},0).wait(1).to({scaleX:0.6266,scaleY:0.6266,x:218.5,y:232.85},0).wait(1).to({scaleX:0.5902,scaleY:0.5902,x:223.25,y:233.25},0).wait(1).to({scaleX:0.5615,scaleY:0.5615,x:227.05,y:233.65},0).wait(1).to({scaleX:0.5426,scaleY:0.5426,x:229.55,y:233.85},0).wait(1).to({scaleX:0.5317,scaleY:0.5317,x:231,y:233.95},0).wait(1).to({scaleX:0.5264,scaleY:0.5264,x:231.75,y:234},0).wait(1).to({regX:0.4,regY:0.4,scaleX:0.5249,scaleY:0.5249,x:229.2,y:234.2},0).wait(78));

	// bonus_prizes
	this.instance_8 = new lib.bonus_prizes_mc();
	this.instance_8.setTransform(159.2,436.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({_off:false},0).wait(1).to({regX:1.4,regY:-27.9,x:160.6,y:408.5,alpha:0.0037},0).wait(1).to({y:408.15,alpha:0.0167},0).wait(1).to({y:407.5,alpha:0.0435},0).wait(1).to({y:406.3,alpha:0.0919},0).wait(1).to({y:404.05,alpha:0.1816},0).wait(1).to({y:400.45,alpha:0.3248},0).wait(1).to({y:396.4,alpha:0.4878},0).wait(1).to({y:392.7,alpha:0.6345},0).wait(1).to({y:389.85,alpha:0.7499},0).wait(1).to({y:387.6,alpha:0.8388},0).wait(1).to({y:385.85,alpha:0.9088},0).wait(1).to({y:384.65,alpha:0.9564},0).wait(1).to({y:384,alpha:0.9834},0).wait(1).to({y:383.65,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:159.2,y:411.5,alpha:1},0).wait(69).to({regX:1.4,regY:-27.9,x:160.6,y:383.65,alpha:0.9963},0).wait(1).to({y:383.95,alpha:0.9833},0).wait(1).to({y:384.5,alpha:0.9565},0).wait(1).to({y:385.5,alpha:0.9081},0).wait(1).to({y:387.4,alpha:0.8184},0).wait(1).to({y:390.4,alpha:0.6752},0).wait(1).to({y:393.8,alpha:0.5122},0).wait(1).to({y:396.9,alpha:0.3655},0).wait(1).to({y:399.3,alpha:0.2501},0).wait(1).to({y:401.2,alpha:0.1612},0).wait(1).to({y:402.65,alpha:0.0912},0).wait(1).to({y:403.65,alpha:0.0436},0).wait(1).to({y:404.25,alpha:0.0166},0).wait(1).to({y:404.5,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:159.2,y:432.5,alpha:0},0).to({_off:true},80).wait(193));

	// promo
	this.instance_9 = new lib.promo_mc();
	this.instance_9.setTransform(439.95,224,0.8327,0.8327);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:-0.3,regY:-23.9,x:438.65,y:204.1,alpha:0.0037},0).wait(1).to({x:435,alpha:0.0167},0).wait(1).to({x:427.5,alpha:0.0435},0).wait(1).to({x:413.95,alpha:0.0919},0).wait(1).to({x:388.85,alpha:0.1816},0).wait(1).to({x:348.75,alpha:0.3248},0).wait(1).to({x:303.1,alpha:0.4878},0).wait(1).to({x:262.05,alpha:0.6345},0).wait(1).to({x:229.75,alpha:0.7499},0).wait(1).to({x:204.85,alpha:0.8388},0).wait(1).to({x:185.25,alpha:0.9088},0).wait(1).to({x:171.95,alpha:0.9564},0).wait(1).to({x:164.35,alpha:0.9834},0).wait(1).to({x:160.75,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:160,y:224,alpha:1},0).wait(83).to({alpha:0},15).wait(180).to({regX:-0.3,regY:-23.9,scaleX:0.8315,scaleY:0.8315,x:159.5,y:204.2,alpha:0.0032},0).wait(1).to({scaleX:0.8271,scaleY:0.8271,x:158.65,y:204.55,alpha:0.0145},0).wait(1).to({scaleX:0.8183,scaleY:0.8183,x:157.05,y:205.2,alpha:0.0371},0).wait(1).to({scaleX:0.8028,scaleY:0.8028,x:154.15,y:206.35,alpha:0.077},0).wait(1).to({scaleX:0.7757,scaleY:0.7757,x:149.1,y:208.45,alpha:0.1467},0).wait(1).to({scaleX:0.7289,scaleY:0.7289,x:140.4,y:212.1,alpha:0.2672},0).wait(1).to({scaleX:0.6709,scaleY:0.6709,x:129.55,y:216.55,alpha:0.4164},0).wait(1).to({scaleX:0.6132,scaleY:0.6132,x:118.8,y:221.05,alpha:0.5648},0).wait(1).to({scaleX:0.565,scaleY:0.565,x:109.85,y:224.75,alpha:0.6887},0).wait(1).to({scaleX:0.5272,scaleY:0.5272,x:102.8,y:227.7,alpha:0.7859},0).wait(1).to({scaleX:0.4975,scaleY:0.4975,x:97.25,y:229.95,alpha:0.8625},0).wait(1).to({scaleX:0.474,scaleY:0.474,x:92.85,y:231.8,alpha:0.9229},0).wait(1).to({scaleX:0.4585,scaleY:0.4585,x:89.95,y:233,alpha:0.9628},0).wait(1).to({scaleX:0.4496,scaleY:0.4496,x:88.3,y:233.7,alpha:0.9857},0).wait(1).to({scaleX:0.4452,scaleY:0.4452,x:87.5,y:234,alpha:0.9969},0).wait(1).to({regX:0.2,regY:0.5,scaleX:0.444,scaleY:0.444,x:87.45,y:244.75,alpha:1},0).wait(78));

	// background
	this.instance_10 = new lib.background_mc();
	this.instance_10.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(386));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-101.5,240,655.1,240);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 320,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_2ndprize.png", id:"_2ndprize"},
		{src:"images/_320x480.jpg", id:"_320x480"},
		{src:"images/b2g2.png", id:"b2g2"},
		{src:"images/cta.png", id:"cta"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/promo.png", id:"promo"},
		{src:"images/ticket.png", id:"ticket"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8F9B67423E0CC34A8BA2D26890153A40'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;