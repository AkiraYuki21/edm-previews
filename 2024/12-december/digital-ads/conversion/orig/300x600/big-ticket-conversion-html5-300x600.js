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
p.nominalBounds = new cjs.Rectangle(0,0,278,247);


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
	this.instance.setTransform(-193,-259);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-193,-259,386,208), null);


(lib.sub_caption_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgYDBQgLgEgIgKQgGgKAAgQQAAgUAOgMQAOgMAVAAQAWAAAOAMQAOAMABAUQAAAQgIAKQgHAKgLAEQgLAFgOAAQgMAAgMgFgAgsBDIAAkIIBZAAIAAEIg");
	this.shape.setTransform(110.05,-13.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAADEIgZj4IAAD4IhaAAIAAmHIB1AAIAYDxIAAjxIBaAAIAAGHg");
	this.shape_1.setTransform(87.725,-13.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsDEIAAmHIBZAAIAAGHg");
	this.shape_2.setTransform(68.775,-13.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARDEIgRjqIgQDqIhzAAIgemHIBgAAIAEEsIAaksIBHAAIAaEsIAFksIBeAAIgcGHg");
	this.shape_3.setTransform(45.7,-13.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEE400").s().p("AhLBSIA0ijIBjAAIhLCjg");
	this.shape_4.setTransform(13.1,6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEE400").s().p("ABADEIAAklIgEAtIgbD4IhCAAIgbj4IgEgtIAAElIhWAAIAAmHICIAAIANC5IABAdIACgdIAOi5ICHAAIAAGHg");
	this.shape_5.setTransform(-9.575,-13.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEE400").s().p("AAdDEIgHhNIgrAAIgHBNIhYAAIA0mHICBAAIA0GHgAANAkIgLhoIgCggIgBAgIgLBoIAZAAg");
	this.shape_6.setTransform(-38.775,-13.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEE400").s().p("AhWDEIAAmHICrAAIAABUIhSAAIAABCIBDAAIAABTIhDAAIAABKIBTAAIAABUg");
	this.shape_7.setTransform(-60.55,-13.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEE400").s().p("AAQDEIgeiWIgHAAIAACWIhZAAIAAmHIBgAAQArAAAXAOQAZANAJAZQALAYgBAhIAAAcQAAAegIAUQgHAUgOAMIAsCsgAgVgZIAFAAQAMABAEgGQAEgFAAgNIAAgmQAAgMgEgHQgEgFgMAAIgFAAg");
	this.shape_8.setTransform(-83.25,-13.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEE400").s().p("AhnDEIAAmHIBhAAQAeAAAZAOQAZAOAOAaQAPAaAAAjIAACeQAAAlgPAaQgOAagZAOQgYAPgfAAgAgNBuIADAAQANABAEgGQAEgGAAgRIAAioQAAgPgGgFQgEgFgLABIgDAAg");
	this.shape_9.setTransform(-107.55,-13.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEE400").s().p("AgsDEIAAkuIg3AAIAAhZIDHAAIAABZIg3AAIAAEug");
	this.shape_10.setTransform(88.925,-69.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEE400").s().p("Ag0DEQgXgFgVgJIAXhQIAeALQAOAEALAAQAQAAAHgGQAIgGAAgNIAAgCQAAgLgIgNQgIgMgTgTIgRgQQgQgQgLgPQgMgPgGgTQgGgTAAgaIAAgBQAAgzAagdQAagcAtAAQASAAAWAEQAVAFAWAJIgXBLIgZgHQgLgCgGAAQgQAAgHAGQgHAHAAAMIAAABQAAAKAIALIAXAZIAJAJIAJAJQARAQALAOQAMAQAHATQAGAUAAAcIAAABQAAAkgMAZQgNAZgXAOQgXANgeAAQgZAAgXgFg");
	this.shape_11.setTransform(68.425,-69.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEE400").s().p("Ag1C7QgXgLgOgXQgNgXAAgjIAAkkIBcAAIAAEmQAAAJADAEQADAEAFgBQAHAAADgDQACgFAAgIIAAkmIBcAAIAAEkQAAAfgMAXQgLAXgXANQgXANgiAAQgeAAgYgLg");
	this.shape_12.setTransform(45.975,-69.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEE400").s().p("AgvDBQgWgHgYgMIAghNQAMAFAKAEQAJACAJAAQANABAGgJQAFgIAAgSIAAkQIBbAAIAAEfQAAA0gbAcQgbAdgvAAQgSAAgWgFg");
	this.shape_13.setTransform(22.3,-69.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEE400").s().p("AgsDEIAAkuIg3AAIAAhZIDHAAIAABZIg3AAIAAEug");
	this.shape_14.setTransform(-3.275,-69.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEE400").s().p("AgZBUIgRinIBVAAIgRCng");
	this.shape_15.setTransform(-19.65,-81.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEE400").s().p("AAADEIgZj4IAAD4IhaAAIAAmHIB1AAIAYDxIAAjxIBaAAIAAGHg");
	this.shape_16.setTransform(-38.875,-69.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEE400").s().p("AAADJQgzAAgagcQgagcAAg0IAAi5QABg3AbgbQAbgbAwABIABAAQAzAAAaAcQAaAcAAA0IAAC5QAAA3gbAbQgbAagxAAgAgIhwQgDAEAAAJIAADHQAAAJADAEQADAEAFAAIAAAAQAHAAADgEQACgEAAgJIAAjHQAAgJgDgEQgDgEgGAAIAAAAQgGAAgCAEg");
	this.shape_17.setTransform(-63.725,-69.9755);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEE400").s().p("AhnDEIAAmHIBgAAQAfABAZAOQAZANAPAaQAOAaAAAkIAACdQAAAlgOAZQgPAbgZAOQgYAPgfAAgAgNBuIAEAAQAMABAEgHQAEgGAAgQIAAioQAAgPgFgFQgGgEgJAAIgEAAg");
	this.shape_18.setTransform(-87.35,-69.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-121,-100.7,242.1,129.3), null);


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
	this.instance.setTransform(-145.75,-129.5,1.0486,1.0486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-145.7,-129.5,291.5,259), null);


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
	this.instance.setTransform(-179,-304,1.2855,1.2855);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-179,-304,357.4,369), null);


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


(lib.daily_caption_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgYDBQgLgEgIgKQgGgKgBgQQABgUAOgMQAOgMAVAAQAWAAAOAMQAOAMABAUQgBAQgGAKQgIAKgLAEQgMAFgNAAQgMAAgMgFgAgsBDIAAkIIBZAAIAAEIg");
	this.shape.setTransform(58.55,-25.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsDEIAAkvIg3AAIAAhYIDHAAIAABYIg3AAIAAEvg");
	this.shape_1.setTransform(39.025,-26.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsDEIAAmHIBZAAIAAGHg");
	this.shape_2.setTransform(22.825,-26.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdDEIgHhNIgrAAIgHBNIhYAAIA0mHICBAAIA0GHgAANAkIgLhoIgCggIgBAgIgLBoIAZAAg");
	this.shape_3.setTransform(4.275,-26.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARDEIgRjqIgQDqIh0AAIgdmHIBgAAIAEEsIAaksIBHAAIAaEsIAFksIBeAAIgcGHg");
	this.shape_4.setTransform(-25.5,-26.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdDEIgHhNIgrAAIgHBNIhYAAIA0mHICBAAIA0GHgAANAkIgLhoIgCggIgBAgIgLBoIAZAAg");
	this.shape_5.setTransform(-55.225,-26.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEE400").s().p("AhLBSIA1ijIBiAAIhLCjg");
	this.shape_6.setTransform(83.6,-63.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEE400").s().p("Ag0DEQgXgFgVgJIAXhQIAeALQAOAEALAAQAQAAAHgGQAIgGAAgNIAAgCQAAgLgIgNQgIgMgTgTIgRgQQgQgQgLgPQgMgPgGgTQgGgTAAgaIAAgBQAAgzAagdQAagcAtAAQASAAAWAEQAVAFAWAJIgXBLIgZgHQgLgCgGAAQgQAAgHAGQgHAHAAAMIAAABQAAAKAIALIAXAZIAJAJIAJAJQARAQALAOQAMAQAHATQAGAUAAAcIAAABQAAAkgMAZQgNAZgXAOQgXANgeAAQgZAAgXgFg");
	this.shape_7.setTransform(67.175,-82.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEE400").s().p("AAADEIgZj4IAAD4IhaAAIAAmHIB1AAIAYDxIAAjxIBaAAIAAGHg");
	this.shape_8.setTransform(44.025,-82.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEE400").s().p("AAADJQgzAAgagcQgagcAAg0IAAi5QABg3AbgbQAbgbAwABIABAAQAzAAAaAcQAaAcAAA0IAAC5QAAA3gbAbQgbAagxAAgAgIhwQgDAEAAAJIAADHQAAAJADAEQADAEAFAAIAAAAQAHAAADgEQACgEAAgJIAAjHQAAgJgDgEQgDgEgGAAIAAAAQgGAAgCAEg");
	this.shape_9.setTransform(19.125,-82.8255);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEE400").s().p("AgsDEIAAmHIBZAAIAAGHg");
	this.shape_10.setTransform(1.375,-82.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEE400").s().p("AhaDEIAAmHIBZAAIAAEuIBcAAIAABZg");
	this.shape_11.setTransform(-15.625,-82.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEE400").s().p("AhaDEIAAmHIBZAAIAAEuIBcAAIAABZg");
	this.shape_12.setTransform(-37.275,-82.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEE400").s().p("AgsDEIAAmHIBZAAIAAGHg");
	this.shape_13.setTransform(-53.775,-82.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEE400").s().p("ABADEIAAklIgEAtIgbD4IhCAAIgbj4IgEgtIAAElIhWAAIAAmHICIAAIANC6IABAcIACgcIAOi6ICHAAIAAGHg");
	this.shape_14.setTransform(-76.225,-82.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-94.5,-113.5,189,129.3), null);


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
	this.instance.setTransform(-207,-246,1.7004,1.7004);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-207,-246,414.9,79.9), null);


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


// stage content:
(lib.bigticketconversionhtml5300x600 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(285.55,585.75,0.0214,0.0214,0,0,0,493.9,463.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWA4IgHgCIgGgBIgBgYIAKADIAJABIAHAAQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIADgIIgCAAIgDAAQgHAAgGgCQgFgDgCgGQgDgGACgJIALgzIAYAAIgJAzIAAADIACABIABAAIAAAAIAHgcIAGgbIAYAAIgRBPQgEARgIAIQgIAHgPAAIgHAAg");
	this.shape.setTransform(269.45,587.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXA5IAXhxIAYAAIgYBxg");
	this.shape_1.setTransform(264.65,584.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUA4IgNgDIAXhtIAXAAIgFAcIADAAQAPAAAFAHQAFAIgEAPIgFAYQgDAQgIAIQgJAHgOAAIgNgBgAgFAiIACAAQABAAAAAAQABAAABAAQAAAAAAgBQAAAAAAAAIACgHIAFgYQACgEgBgBQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_2.setTransform(259.1516,584.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWA7IARhQIAXAAIgRBQgAABgkQgCgDABgGQABgGAEgEQADgDAFAAQAGAAACADQADAEgCAGQgBAGgEADQgDAEgGAAQgFAAgCgEg");
	this.shape_3.setTransform(254.4531,584.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAqIgMgCIAHgYIAJADIAJABIAGgBQAAAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAgDIgDgCIgDgBIgCgBQgIgEgDgGQgDgGACgKQABgHAEgGQAEgFAGgEQAFgDAJAAIAJAAIAMADIgGAXIgIgCIgIgBIgFABIgCACIABADIADACIACABIADABQAFADADADQAEADABAEQABAFgBAHQgCAHgEAGQgEAHgIADQgHAEgKAAIgDAAIgGgBg");
	this.shape_4.setTransform(249.425,585.9583);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDArIALg5IAAgDIgCgBIgCAAIgBAAIgMA9IgZAAIARhPIARgEIAMgCQANAAAGAHQAFAFgCAOIgNA7g");
	this.shape_5.setTransform(243.1641,585.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAkQgFgIACgQIAGgXQADgQAJgIQAJgHAMAAQAOAAAFAHQAFAIgDAQIgFAXQgDAQgJAIQgJAHgMAAQgOAAgFgHgAABgRQgBABAAAEIgFAZIAAAFQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAIADgCIAAgFIAGgZIAAgFQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAgBABg");
	this.shape_6.setTransform(236.8639,585.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglA6IAYhxIAKgBIAJAAIAJgBQAOAAAGAIQAEAHgDAQIgGAZQgCAPgJAHQgIAIgOAAIgDAAIgGAdgAgBAGIABAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBIACgGIAFgXQABgFgBgCQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgCAAg");
	this.shape_7.setTransform(229.9016,587.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAqIgMgCIAHgYIAJADIAJABIAGgBQAAAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAgDIgDgCIgDgBIgCgBQgIgEgDgGQgDgGACgKQABgHAEgGQAEgFAGgEQAFgDAJAAIAJAAIAMADIgGAXIgIgCIgIgBIgFABIgCACIABADIADACIACABIADABQAFADADADQAEADABAEQABAFgBAHQgCAHgEAGQgEAHgIADQgHAEgKAAIgDAAIgGgBg");
	this.shape_8.setTransform(224.075,585.9583);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAjQgHgIADgQIAFgWQADgQAJgIQAJgHANAAQANAAAFAHQAFAIgEAQIgEASIgdAAIAAAFQgBAEACACQADACAFAAIAGAAIAGgBIgDAWIgKACIgIAAQgPAAgGgIgAACgTIgBAFIgBAGIAFAAIACgGIAAgFQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIgDACg");
	this.shape_9.setTransform(218.3247,585.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBA5IAAgrIgCAAIgJArIgaAAIAXhxIAbAAQANAAAGAFQAGADACAIQABAGgCAKIgCAIQgCAJgDAFQgEAFgEAEIACAygAAAgGIACAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQACgBABgEIACgLQABgEgBgCQAAAAgBAAQAAAAAAgBQgBAAgBAAQAAAAgBAAIgCAAg");
	this.shape_10.setTransform(211.3667,584.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWA4IgHgCIgFgBIgCgYIALADIAJABIAHAAQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIACgIIgBAAIgCAAQgIAAgGgCQgFgDgCgGQgDgGACgJIALgzIAYAAIgKAzIAAADIADABIABAAIABAAIAGgcIAFgbIAZAAIgRBPQgDARgJAIQgIAHgPAAIgHAAg");
	this.shape_11.setTransform(202.7,587.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAkQgFgGADgMIAAgBQADgMAHgGQAJgGAMgBIACAAIACAAIABgCQABgGgCgCQgCgCgFABIgJABIgJACIALgXIAFgCIAFgBIAHAAQALAAAGADQAGADABAHQABAGgCAJIgLA0IgPAEIgOABQgNAAgGgHgAgCAJQgCABgBAEIAAACQgBADACACQAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIACAAIACgPIgCAAIgCABg");
	this.shape_12.setTransform(196.0405,585.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXA5IAXhxIAYAAIgYBxg");
	this.shape_13.setTransform(191.4,584.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmA5IAXhxIAbAAQAMAAAHAFQAGADABAIQACAGgDAKIgCAKQgCAMgGAFQgFAHgIADQgIACgIAAIgCAAIgIAqgAAAgFIABAAQADAAACgBQACgCAAgEIADgMQABgEgBgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAgBAAIgBAAg");
	this.shape_14.setTransform(185.9531,584.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLA0IAAgdIgUhKIAZAAIAGAjIAHgjIAZAAIgUBKIAAAdg");
	this.shape_15.setTransform(128.075,586.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXA0IAAhnIAXAAIAABQIAYAAIAAAXg");
	this.shape_16.setTransform(121.775,586.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaA0IAAhnIAYAAQAMAAAGAEQAGADADAHQACAGABAJIAAAJQgBALgEAFQgEAGgGADQgHACgIAAIgBAAIAAAmgAgDgEIABAAQABAAAAAAQABAAAAgBQAAAAABAAQAAAAABgBQABgBAAgEIAAgLQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBAAgBAAIgBAAg");
	this.shape_17.setTransform(115.85,586.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaA0IAAhnIAYAAQAMAAAGAEQAGADADAHQACAGABAJIAAAJQgBALgEAFQgEAGgGADQgHACgIAAIgBAAIAAAmgAgDgEIABAAQABAAAAAAQABAAAAgBQAAAAABAAQAAAAABgBQABgBAAgEIAAgLQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBAAgBAAIgBAAg");
	this.shape_18.setTransform(109.55,586.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAIA0IgCgUIgLAAIgCAUIgXAAIAOhnIAhAAIAOBngAADAKIgDgbIAAgJIAAAJIgDAbIAGAAg");
	this.shape_19.setTransform(103.075,586.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNA0IgMgDIAGgWIAIADIAHABQAEAAABgCQACgBAAgEIAAAAQAAgDgCgDIgGgJIgFgEIgHgHQgDgFgCgFQgBgFAAgHQAAgOAHgHQAGgIAMAAIAKABIAMAEIgGAUIgHgCIgFAAQgEAAgCABQgBACAAADIAAABQAAACACADIAGAHIACACIADADIAHAHIAFAJQACAGAAAHQAAAKgEAHQgDAGgGAEQgGAEgHAAQgHAAgGgCg");
	this.shape_20.setTransform(95.325,586.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGAWIgEgsIAVAAIgEAsg");
	this.shape_21.setTransform(90.95,583.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAuQgHgIAAgQIAAgrQAAgQAHgIQAIgIANAAIAMABIAKADIgJAUIgFgBIgDAAQgFAAgDADQgBACAAAGIAAAnQAAAGACACQADADAFAAIAEAAIAFgCIAJAUIgLADQgGACgHAAQgNAAgIgIg");
	this.shape_22.setTransform(86.8,586.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgcAvQgIgHAAgOIAAgMQAAgIAEgFQADgDAGgBIgEgJIgBgHIAAgHQAAgKACgGQACgGAFgCQAFgDAKAAQAGAAAEADQAFACACAGQACAGAAAKIAAAGIgBAHQgCAEgDAEQgDADgFACIAJAMIgBgGIgBgGIATAAIAAANIgBAKIgDAJIAOAUIgZAAIgCgEIgHAEQgDACgEAAQgRAAgHgHgAgNAQIAAADIAAAEQAAAGADACQACADAFAAIACgBIABAAIgNgUgAgHgfIgBAEIAAAMIAAABIAAACIAEgCQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgIIgBgEIgCgBIgCABg");
	this.shape_23.setTransform(79.725,586.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLA0IAAhPIgPAAIAAgYIA1AAIAAAYIgPAAIAABPg");
	this.shape_24.setTransform(72.925,586.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKBDIAAiFIAUAAIAACFg");
	this.shape_25.setTransform(63.25,587.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOAyQgFgEgEgGQgDgHAAgJIAAgvQAAgJADgHQAEgGAFgEQAHgEAHAAQAIAAAGAEQAHAEACAGQAEAHAAAJIAAAvQAAAJgEAHQgCAGgHAEQgGAEgIAAQgHAAgHgEgAgBgdIgBACIAAA3IABACIABABIAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQABgBAAgBIAAg3IgBgCIgBgBIgBAAIgBABg");
	this.shape_26.setTransform(53.2,586.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQA0IARhRIgYAAIAAgWIAvAAIAAAWIgRBRg");
	this.shape_27.setTransform(47.325,586.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgZA1IAAgVIAOgRQAHgKAEgHQAEgJAAgHIAAgBIgCgHIgCgCIgFgBIgIABIgFACIgIgUIALgFQAHgBAIAAQAJAAAGAFQAFAEAEAHQADAHAAAJIAAABQAAAHgCAHQgDAHgEAGIgIAMIgKALIAYAAIAAAWg");
	this.shape_28.setTransform(41.8,586.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNA0IgMgDIAGgWIAIADIAHABQAEAAABgCQACgBAAgEIAAAAQAAgDgCgDIgGgJIgFgEIgHgHQgDgFgCgFQgBgFAAgHQAAgOAHgHQAGgIAMAAIAKABIAMAEIgGAUIgHgCIgFAAQgEAAgCABQgBACAAADIAAABQAAACACADIAGAHIACACIADADIAHAHIAFAJQACAGAAAHQAAAKgEAHQgDAGgGAEQgGAEgHAAQgHAAgGgCg");
	this.shape_29.setTransform(34.475,586.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWA0IAAhnIAtAAIAAAWIgXAAIAAASIASAAIAAAVIgSAAIAAAUIAXAAIAAAWg");
	this.shape_30.setTransform(29.3,586.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLA0IAAhnIAXAAIAABng");
	this.shape_31.setTransform(25.025,586.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAEA0IgHgnIgCAAIAAAnIgXAAIAAhnIAZAAQAKAAAHAEQAGADADAHQADAGAAAJIAAAHQAAAIgDAGQgBAEgEADIALAugAgFgGIABAAQABAAABAAQABAAAAAAQABAAAAgBQAAAAAAAAIABgFIAAgKIgBgFQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBAAgBAAIgBAAg");
	this.shape_32.setTransform(20.1,586.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgWA0IAAhnIAsAAIAAAWIgWAAIAAASIASAAIAAAVIgSAAIAAAUIAXAAIAAAWg");
	this.shape_33.setTransform(14.35,586.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNA0IgMgDIAGgWIAIADIAHABQAEAAABgCQACgBAAgEIAAAAQAAgDgCgDIgGgJIgFgEIgHgHQgDgFgCgFQgBgFAAgHQAAgOAHgHQAGgIAMAAIAKABIAMAEIgGAUIgHgCIgFAAQgEAAgCABQgBACAAADIAAABQAAACACADIAGAHIACACIADADIAHAHIAFAJQACAGAAAHQAAAKgEAHQgDAGgGAEQgGAEgHAAQgHAAgGgCg");
	this.shape_34.setTransform(8.925,586.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(283));

	// footer_bg
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5050F").s().p("A3bCIIAAkPMAu3AAAIAAEPg");
	this.shape_35.setTransform(150,586.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(283));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(150,51.15,0.9088,0.9084);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(188).to({alpha:0},16).wait(79));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(150,507.15,0.5386,0.5386,0,0,0,0,0.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(204).to({_off:false},0).wait(1).to({regX:0.4,regY:-206,x:150.2,y:395.95,alpha:0.0032},0).wait(1).to({y:395.6,alpha:0.0145},0).wait(1).to({y:394.85,alpha:0.0371},0).wait(1).to({y:393.5,alpha:0.077},0).wait(1).to({y:391.2,alpha:0.1467},0).wait(1).to({y:387.2,alpha:0.2672},0).wait(1).to({y:382.25,alpha:0.4164},0).wait(1).to({y:377.3,alpha:0.5648},0).wait(1).to({y:373.2,alpha:0.6887},0).wait(1).to({y:370,alpha:0.7859},0).wait(1).to({y:367.45,alpha:0.8625},0).wait(1).to({y:365.45,alpha:0.9229},0).wait(1).to({y:364.1,alpha:0.9628},0).wait(1).to({y:363.35,alpha:0.9857},0).wait(1).to({y:363,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:150,y:473.95,alpha:1},0).wait(63));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(-154.6,356.25,0.7482,0.7482);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(188).to({_off:false},0).wait(1).to({regY:-155,x:-153.6,y:240.3},0).wait(1).to({x:-150.15},0).wait(1).to({x:-143.25},0).wait(1).to({x:-131.1},0).wait(1).to({x:-109.9},0).wait(1).to({x:-73.2},0).wait(1).to({x:-27.7},0).wait(1).to({x:17.45},0).wait(1).to({x:55.2},0).wait(1).to({x:84.8},0).wait(1).to({x:108.1},0).wait(1).to({x:126.55},0).wait(1).to({x:138.7},0).wait(1).to({x:145.65},0).wait(1).to({x:149.05},0).wait(1).to({regY:0,x:150,y:356.25},0).wait(79));

	// main_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(147.35,549,0.9375,0.9375);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:-1.4,regY:-38,x:146.05,y:513.3,alpha:0.0037},0).wait(1).to({y:513.05,alpha:0.0167},0).wait(1).to({y:512.55,alpha:0.0435},0).wait(1).to({y:511.65,alpha:0.0919},0).wait(1).to({y:509.95,alpha:0.1816},0).wait(1).to({y:507.3,alpha:0.3248},0).wait(1).to({y:504.25,alpha:0.4878},0).wait(1).to({y:501.5,alpha:0.6345},0).wait(1).to({y:499.3,alpha:0.7499},0).wait(1).to({y:497.65,alpha:0.8388},0).wait(1).to({y:496.35,alpha:0.9088},0).wait(1).to({y:495.45,alpha:0.9564},0).wait(1).to({y:494.95,alpha:0.9834},0).wait(1).to({y:494.7,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:147.35,y:530.25,alpha:1},0).wait(69).to({regX:-1.4,regY:-38,x:146.05,y:494.7,alpha:0.9963},0).wait(1).to({y:494.95,alpha:0.9833},0).wait(1).to({y:495.45,alpha:0.9565},0).wait(1).to({y:496.35,alpha:0.9081},0).wait(1).to({y:498.05,alpha:0.8184},0).wait(1).to({y:500.7,alpha:0.6752},0).wait(1).to({y:503.75,alpha:0.5122},0).wait(1).to({y:506.5,alpha:0.3655},0).wait(1).to({y:508.7,alpha:0.2501},0).wait(1).to({y:510.35,alpha:0.1612},0).wait(1).to({y:511.65,alpha:0.0912},0).wait(1).to({y:512.55,alpha:0.0436},0).wait(1).to({y:513.05,alpha:0.0166},0).wait(1).to({y:513.3,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:147.35,y:549,alpha:0},0).to({_off:true},1).wait(169));

	// sub_caption
	this.instance_5 = new lib.daily_caption_mc();
	this.instance_5.setTransform(147.35,549,0.9375,0.9375);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:-0.1,regY:-54.5,x:147.25,y:497.8,alpha:0.0037},0).wait(1).to({y:497.55,alpha:0.0167},0).wait(1).to({y:497.05,alpha:0.0435},0).wait(1).to({y:496.15,alpha:0.0919},0).wait(1).to({y:494.45,alpha:0.1816},0).wait(1).to({y:491.8,alpha:0.3248},0).wait(1).to({y:488.75,alpha:0.4878},0).wait(1).to({y:486,alpha:0.6345},0).wait(1).to({y:483.8,alpha:0.7499},0).wait(1).to({y:482.15,alpha:0.8388},0).wait(1).to({y:480.85,alpha:0.9088},0).wait(1).to({y:479.95,alpha:0.9564},0).wait(1).to({y:479.45,alpha:0.9834},0).wait(1).to({y:479.2,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:147.35,y:530.25,alpha:1},0).wait(61).to({regX:-0.1,regY:-54.5,x:147.25,y:479.2,alpha:0.9963},0).wait(1).to({y:479.45,alpha:0.9833},0).wait(1).to({y:479.95,alpha:0.9565},0).wait(1).to({y:480.85,alpha:0.9081},0).wait(1).to({y:482.55,alpha:0.8184},0).wait(1).to({y:485.2,alpha:0.6752},0).wait(1).to({y:488.25,alpha:0.5122},0).wait(1).to({y:491,alpha:0.3655},0).wait(1).to({y:493.2,alpha:0.2501},0).wait(1).to({y:494.85,alpha:0.1612},0).wait(1).to({y:496.15,alpha:0.0912},0).wait(1).to({y:497.05,alpha:0.0436},0).wait(1).to({y:497.55,alpha:0.0166},0).wait(1).to({y:497.8,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:147.35,y:549,alpha:0},0).wait(95));

	// second_prize_mc
	this.instance_6 = new lib.second_prize_mc();
	this.instance_6.setTransform(149.75,300.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({x:149.7511,y:300.4041,alpha:0.0037},0).wait(1).to({x:149.755,y:300.0648,alpha:0.0167},0).wait(1).to({x:149.763,y:299.37,alpha:0.0435},0).wait(1).to({x:149.7776,y:298.1117,alpha:0.0919},0).wait(1).to({x:149.8045,y:295.7794,alpha:0.1816},0).wait(1).to({x:149.8474,y:292.0553,alpha:0.3248},0).wait(1).to({x:149.8963,y:287.8179,alpha:0.4878},0).wait(1).to({x:149.9403,y:284.0042,alpha:0.6345},0).wait(1).to({x:149.975,y:281.0023,alpha:0.7499},0).wait(1).to({x:150.0016,y:278.6914,alpha:0.8388},0).wait(1).to({x:150.0226,y:276.8721,alpha:0.9088},0).wait(1).to({x:150.0369,y:275.6337,alpha:0.9564},0).wait(1).to({x:150.045,y:274.9307,alpha:0.9834},0).wait(1).to({x:150.0489,y:274.5937,alpha:0.9964},0).wait(1).to({x:150.05,y:274.5,alpha:1},0).wait(61).to({y:274.3893,alpha:0.9963},0).wait(1).to({y:273.9978,alpha:0.9833},0).wait(1).to({y:273.1962,alpha:0.9565},0).wait(1).to({y:271.7442,alpha:0.9081},0).wait(1).to({y:269.0531,alpha:0.8184},0).wait(1).to({y:264.7561,alpha:0.6752},0).wait(1).to({y:259.8668,alpha:0.5122},0).wait(1).to({y:255.4664,alpha:0.3655},0).wait(1).to({y:252.0027,alpha:0.2501},0).wait(1).to({y:249.3362,alpha:0.1612},0).wait(1).to({y:247.237,alpha:0.0912},0).wait(1).to({y:245.8081,alpha:0.0436},0).wait(1).to({y:244.9969,alpha:0.0166},0).wait(1).to({y:244.6081,alpha:0.0036},0).wait(1).to({y:244.5,alpha:0},0).to({_off:true},1).wait(94));

	// promo
	this.instance_7 = new lib.promo_mc();
	this.instance_7.setTransform(412.45,360,0.7807,0.7807);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-0.3,regY:-119.5,x:411.2,y:266.7,alpha:0.0037},0).wait(1).to({x:407.8,alpha:0.0167},0).wait(1).to({x:400.75,alpha:0.0435},0).wait(1).to({x:388.05,alpha:0.0919},0).wait(1).to({x:364.5,alpha:0.1816},0).wait(1).to({x:326.95,alpha:0.3248},0).wait(1).to({x:284.15,alpha:0.4878},0).wait(1).to({x:245.65,alpha:0.6345},0).wait(1).to({x:215.35,alpha:0.7499},0).wait(1).to({x:192.05,alpha:0.8388},0).wait(1).to({x:173.65,alpha:0.9088},0).wait(1).to({x:161.15,alpha:0.9564},0).wait(1).to({x:154.05,alpha:0.9834},0).wait(1).to({x:150.65,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:150,y:360,alpha:1},0).wait(83).to({alpha:0},15).to({_off:true},1).wait(169));

	// background
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5050F").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_36.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-149,300,700.7,300.1);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_2ndprize.jpg", id:"_2ndprize"},
		{src:"images/cta.jpg", id:"cta"},
		{src:"images/logo.jpg", id:"logo"},
		{src:"images/promo.jpg", id:"promo"},
		{src:"images/ticket.jpg", id:"ticket"}
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