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



(lib._320x480 = function() {
	this.initialize(img._320x480);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.bigwin = function() {
	this.initialize(img.bigwin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,61);


(lib.consolation = function() {
	this.initialize(img.consolation);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,63);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgUBtQgJgGAAgNQAAgMAJgHQAIgHAMAAQANAAAIAHQAJAHAAAMQAAANgJAGQgIAHgNAAQgMAAgIgHgAgZAnIAAiaIAzAAIAACag");
	this.shape.setTransform(69.3,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZByIAAiwIghAAIAAgzIB0AAIAAAzIggAAIAACwg");
	this.shape_1.setTransform(57.9,13.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZByIAAjjIAzAAIAADjg");
	this.shape_2.setTransform(48.425,13.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag4BrIAOgvQAWAIAKABQARAAAAgPIAAgBQAAgHgEgHQgEgHgLgMIgKgJQgQgPgIgOQgHgOAAgVIAAAAQAAgeAQgRQAPgRAaAAQAWAAAaAKIgNAtQgRgFgIgBQgRAAAAAPIAAABIABAEIACAEIACADIADAFIAFAFIAFAFIALALQAQAQAIAOQAHANAAAXIAAABQAAAegQASQgRASgaAAQgbAAgbgLg");
	this.shape_3.setTransform(35.325,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag4BrIAOgvQAWAIAKABQARAAAAgPIAAgBQAAgHgEgHQgEgHgLgMIgKgJQgQgPgIgOQgHgOAAgVIAAAAQAAgeAQgRQAPgRAaAAQAWAAAaAKIgNAtQgRgFgIgBQgRAAAAAPIAAABIABAEIACAEIACADIADAFIAFAFIAFAFIALALQAQAQAIAOQAHANAAAXIAAABQAAAegQASQgRASgaAAQgbAAgbgLg");
	this.shape_4.setTransform(23.375,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZByIAAjjIAzAAIAADjg");
	this.shape_5.setTransform(13.925,13.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAmByIAAiqIgDAaIgPCQIgnAAIgPiQIgCgaIAACqIg0AAIAAjjIBQAAIAIBsIAAARIABgRIAJhsIBPAAIAADjg");
	this.shape_6.setTransform(0.75,13.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZByIAAiwIghAAIAAgzIB0AAIAAAzIggAAIAACwg");
	this.shape_7.setTransform(-18.6,13.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAxIgKhhIAxAAIgJBhg");
	this.shape_8.setTransform(-28.275,6.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAByIgOiQIAACQIg1AAIAAjjIBEAAIAOCMIAAiMIA1AAIAADjg");
	this.shape_9.setTransform(-39.525,13.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAB2QgdAAgPgRQgQgQAAgfIAAhrQAAggAQgQQAQgQAcAAIABAAQAdAAAQARQAPAQAAAfIAABrQAAAggQAQQgPAQgdAAgAgGg6IAAB0QAAALAGAAIAAAAQAHAAAAgLIAAh0QAAgKgHAAQgGAAAAAKg");
	this.shape_10.setTransform(-54.075,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag7ByIAAjjIA3AAQAcAAASASQATASgBAfIAABcQABAfgTASQgSAUgbgBgAgHBBIACAAQAHAAACgEQADgDgBgKIAAhhQAAgKgCgCQgDgDgGAAIgCAAg");
	this.shape_11.setTransform(-67.95,13.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag8A2IAAhrQAAgeATgRQATgRAdAAQAcAAAaAOIgTAtQgNgHgQAAQgTAAAAAXIAABkQAAAKAHAAIAGgBIAAhSIAyAAIAAB1QgQAIgMAEQgLAEgQAAQg+AAAAhAg");
	this.shape_12.setTransform(95.925,-22.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZByIAAjjIAzAAIAADjg");
	this.shape_13.setTransform(85.475,-22.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag8ByIAAjjIA5AAQAcAAARANQARAOAAAdIAAAFQAAASgGALQgGALgMAFQAaAJAAAmIAAAOQAAAdgQAQQgQAPgcAAgAgIBBIADAAQAGAAACgDQADgDAAgHIAAgWQAAgHgDgDQgCgDgGgBIgDAAgAgIgZIAEAAQAGAAACgDQADgDAAgGIAAgOQAAgGgDgEQgCgDgGAAIgEAAg");
	this.shape_14.setTransform(75.175,-22.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAAByIgOiPIAACPIg1AAIAAjjIBEAAIAOCMIAAiMIA1AAIAADjg");
	this.shape_15.setTransform(56.925,-22.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZByIAAjjIAzAAIAADjg");
	this.shape_16.setTransform(45.825,-22.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAKByIgKiIIgJCIIhEAAIgRjjIA4AAIADCuIAPiuIApAAIAPCuIADiuIA4AAIgRDjg");
	this.shape_17.setTransform(32.325,-22.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAB2QgdAAgPgRQgQgQAAgeIAAhsQAAggAQgQQAQgQAcAAIABAAQAdAAAQAQQAPARAAAfIAABsQAAAfgQAQQgPAQgdAAgAgGg6IAAB0QAAAKAGAAIAAAAQAHAAAAgKIAAh0QAAgKgHAAQgGAAAAAKg");
	this.shape_18.setTransform(11.675,-22.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZByIAAiwIghAAIAAgzIB0AAIAAAzIggAAIAACwg");
	this.shape_19.setTransform(-1.25,-22.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgyByIAAjjIBkAAIAAAwIgwAAIAAAnIAnAAIAAAxIgnAAIAAArIAxAAIAAAwg");
	this.shape_20.setTransform(-16.275,-22.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAlByIAAiqIgCAaIgQCQIgmAAIgQiQIgBgaIAACqIg0AAIAAjjIBQAAIAIBsIAAARIABgRIAIhsIBQAAIAADjg");
	this.shape_21.setTransform(-31.9,-22.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZByIAAjjIAzAAIAADjg");
	this.shape_22.setTransform(-45.075,-22.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgaByIAAiwIgfAAIAAgzIB0AAIAAAzIghAAIAACwg");
	this.shape_23.setTransform(-54.55,-22.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag4BrIAOgwQAWAJAKAAQARAAAAgOIAAgBQAAgHgEgHQgEgHgLgMIgKgJQgQgPgIgOQgHgNAAgWIAAAAQAAgfAQgRQAPgQAaAAQAWAAAaALIgNAsQgRgGgIAAQgRAAAAAPIAAABIABAEIACAEIACADIADAFIAFAFIAFAGIALAKQAQAQAIANQAHAOAAAXIAAAAQAAAggQARQgRASgaAAQgbAAgbgLg");
	this.shape_24.setTransform(-70.175,-22.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOAxIgKhhIAxAAIgJBhg");
	this.shape_25.setTransform(-79.775,-29.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaByIAAiwIgfAAIAAgzIB0AAIAAAzIghAAIAACwg");
	this.shape_26.setTransform(-89.4,-22.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgZByIAAjjIAzAAIAADjg");
	this.shape_27.setTransform(-98.875,-22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_sub_caption_mc, new cjs.Rectangle(-103.8,-41.2,207.6,79.30000000000001), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgnCFIAAhdIhdAAIAAhOIBdAAIAAheIBOAAIAABeIBeAAIAABOIheAAIAABdg");
	this.shape.setTransform(-0.075,-57.875);

	this.instance = new lib.consolation();
	this.instance.setTransform(-85,-23,0.7744,0.7744);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bonus_prizes_mc, new cjs.Rectangle(-85,-97,170.4,122.8), null);


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
	this.instance = new lib.bigwin();
	this.instance.setTransform(-94,-25,0.8545,0.8545);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnCFIAAhdIhdAAIAAhOIBdAAIAAheIBOAAIAABeIBeAAIAABOIheAAIAABdg");
	this.shape.setTransform(-0.075,-57.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.big_win_mc, new cjs.Rectangle(-94,-97,188,124.2), null);


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


(lib.another_prizes_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.consolation();
	this.instance.setTransform(6.75,-14.55,0.4616,0.4616);

	this.instance_1 = new lib.bigwin();
	this.instance_1.setTransform(-108.25,-14.55,0.4754,0.4754);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.another_prizes_mc, new cjs.Rectangle(-108.2,-14.5,216.5,29.1), null);


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
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAuIAAhbIAXAAQALAAAHAHQAIAIgBAMIAAAkQABANgIAIQgHAHgLAAgAgDAaIABAAQABAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAIAAgGIAAgmIAAgFIgEgBIgBAAg");
	this.shape_15.setTransform(180.65,464.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAuIAAhbIAoAAIAAAUIgTAAIAAAPIAQAAIAAATIgQAAIAAASIAUAAIAAATg");
	this.shape_16.setTransform(175.7,464.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAHAuIgCgSIgJAAIgCASIgVAAIANhbIAdAAIAMBbgAAAgPIgCAYIAFAAIgDgYIAAgIg");
	this.shape_17.setTransform(170.35,464.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAuIgFg5IAAA5IgVAAIAAhbIAbAAIAFA4IAAg4IAVAAIAABbg");
	this.shape_18.setTransform(162.775,464.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAuIAAhbIATAAIAABbg");
	this.shape_19.setTransform(158.35,464.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWArIAFgTQAJADAFAAQAGAAAAgFIAAgBQAAgDgCgCQgBgDgFgEIgEgFQgGgFgDgGQgCgFAAgIIAAgBQAAgMAFgHQAHgGAKAAQAIAAALADIgFASIgKgBQgGgBAAAHIAAACIAAABIABABIABACIACACIACADIAEAEQAHAFADAGQADAGAAAIIAAABQAAANgGAGQgHAIgKgBQgLABgLgFg");
	this.shape_20.setTransform(153.05,464.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUAuIAAhbIAoAAIAAAUIgTAAIAAAPIAPAAIAAATIgPAAIAAASIAUAAIAAATg");
	this.shape_21.setTransform(148.5,464.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXAuIAAgSIAZg1IgWAAIAAgUIAsAAIAAASIgZA1IAZAAIAAAUg");
	this.shape_22.setTransform(143.45,464.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAuIAAhbIAVAAIAABbg");
	this.shape_23.setTransform(139.4,464.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAEAuIgHgjIgBAAIAAAjIgVAAIAAhbIAWAAQAOAAAGAGQAGAHAAAMIAAAHQAAANgHAGIAKAogAgEgFIABAAIADgBIABgFIAAgJIgBgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgBAAg");
	this.shape_24.setTransform(135.075,464.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXAuIAAhbIAWAAQAOAAAGAGQAFAHAAAMIAAAIQAAANgGAGQgHAFgMAAIgBAAIAAAigAgCgEIABAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAIABgEIAAgLIgBgEQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_25.setTransform(129.325,464.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIA7IAAh1IARAAIAAB1g");
	this.shape_26.setTransform(120.425,466.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJAuIAAgaIgShBIAWAAIAFAfIAHgfIAVAAIgRBBIAAAag");
	this.shape_27.setTransform(111.275,464.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAuIAAhbIAVAAIAABGIAWAAIAAAVg");
	this.shape_28.setTransform(105.75,464.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXAuIAAhbIAWAAQAOAAAGAGQAFAHAAAMIAAAIQAAANgGAGQgHAFgMAAIgBAAIAAAigAgCgEIABAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAABAAIABgEIAAgLIgBgEQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_29.setTransform(100.475,464.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgXAuIAAhbIAWAAQAOAAAGAGQAFAHAAAMIAAAIQAAANgGAGQgHAFgMAAIgBAAIAAAigAgCgEIABAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAIABgEIAAgLIgBgEQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_30.setTransform(94.925,464.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAGAuIgBgSIgJAAIgCASIgUAAIAMhbIAdAAIANBbgAAAgPIgCAYIAFAAIgCgYIgBgIg");
	this.shape_31.setTransform(89.2,464.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgWArIAFgTQAKADADAAQAHAAAAgFIAAgBQAAgDgCgCQgBgDgFgEIgDgFQgHgFgCgGQgDgFAAgIIAAgBQAAgMAFgHQAHgGAKAAQAIAAALADIgFASIgKgBQgGgBAAAHIAAACIAAABIABABIABACIACACIACADIAEAEQAHAFADAGQADAGAAAIIAAABQAAANgGAGQgHAIgKgBQgLABgLgFg");
	this.shape_32.setTransform(82.3,464.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFAUIgEgnIATAAIgDAng");
	this.shape_33.setTransform(78.45,462.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgQAoQgGgHAAgNIAAgnQAAgOAGgHQAHgHAMAAQAKAAAJAEIgIARIgHgBQgIAAAAAKIAAAjQAAAEACADQADADAEAAIAAAAQAEAAAEgCIAHARQgJAFgLAAQgMAAgHgIg");
	this.shape_34.setTransform(74.725,464.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZAqQgHgGAAgNIAAgLQABgHADgEQADgCAFgBQgFgJAAgGIAAgGQAAgNAFgFQAEgGANABQAIAAAEAEQAEAGAAANIAAAGQAAAOgNADIAJALQgCgFABgGIARAAIAAAFIAAAFIAAAFIgBADIAAADIgCAFIgCACIANASIgWAAIgCgDQgGAFgGgBQgPAAgHgFgAgLAPIAAAFQAAAGACABQACADAFAAIACgBIgLgRgAgGgbIgBABIAAACIAAALIAAADQAFgCAAgFIAAgHIAAgDIgCAAIgCAAg");
	this.shape_35.setTransform(68.45,464.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKAuIAAhGIgMAAIAAgVIAtAAIAAAVIgMAAIAABGg");
	this.shape_36.setTransform(62.45,464.825);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIA7IAAh1IARAAIAAB1g");
	this.shape_37.setTransform(53.875,466.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgQApQgHgHAAgNIAAgFQAAgKAFgGQgEgGAAgJIAAgFQABgMAGgIQAGgGAJAAQAKAAAGAGQAGAIABAMIAAAFQgBAJgDAGQAFAGAAAKIAAAFQAAANgHAHQgGAGgLAAQgKAAgGgGgAgCALIAAAOQAAABABAAQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBIAAgOQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABgAgCgYIAAAQIABACIABABIACgBIABgCIAAgQQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgBABAAAAg");
	this.shape_38.setTransform(45,464.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgOAuIAPhIIgVAAIAAgTIAqAAIAAATIgPBIg");
	this.shape_39.setTransform(39.75,464.825);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgWAvIAAgSQAZgeAAgPIAAgBQAAgEgCgCQgCgDgEAAIgLADIgHgRQAKgGANAAQALAAAGAIQAHAIAAAMIAAABQAAAGgCAHQgCAFgEAGIgIAKIgIAKIAVAAIAAAUg");
	this.shape_40.setTransform(34.875,464.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgWArIAFgTQAJADAFAAQAGAAAAgFIAAgBQAAgDgCgCQgBgDgFgEIgEgFQgGgFgDgGQgCgFAAgIIAAgBQAAgMAFgHQAHgGAKAAQAIAAALADIgFASIgKgBQgGgBAAAHIAAACIAAABIABABIABACIACACIACADIAEAEQAHAFADAGQADAGAAAIIAAABQAAANgGAGQgHAIgKgBQgLABgLgFg");
	this.shape_41.setTransform(28.4,464.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgUAuIAAhbIAoAAIAAAUIgTAAIAAAPIAPAAIAAATIgPAAIAAASIAUAAIAAATg");
	this.shape_42.setTransform(23.85,464.825);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgKAuIAAhbIAUAAIAABbg");
	this.shape_43.setTransform(20.05,464.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAEAuIgHgjIgBAAIAAAjIgVAAIAAhbIAWAAQAOAAAGAGQAGAHAAAMIAAAHQAAANgHAGIAKAogAgEgFIABAAIADgBIABgFIAAgJIgBgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgBAAg");
	this.shape_44.setTransform(15.675,464.825);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgTAuIAAhbIAnAAIAAAUIgUAAIAAAPIAQAAIAAATIgQAAIAAASIAVAAIAAATg");
	this.shape_45.setTransform(10.6,464.825);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgWArIAFgTQAKADAEAAQAGAAAAgFIAAgBQAAgDgCgCQgBgDgEgEIgFgFQgGgFgDgGQgDgFAAgIIAAgBQAAgMAHgHQAGgGAKAAQAIAAALADIgFASIgKgBQgHgBAAAHIABACIAAABIABABIABACIACACIACADIAFAEQAGAFADAGQADAGAAAIIAAABQAAANgHAGQgGAIgKgBQgLABgLgFg");
	this.shape_46.setTransform(5.75,464.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(351));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(160,36.5,0.8182,0.8182);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(257).to({alpha:0},16).wait(78));

	// another_prizes
	this.instance_2 = new lib.another_prizes_mc();
	this.instance_2.setTransform(158.25,347.55);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(273).to({_off:false},0).wait(1).to({x:158.2429,y:347.5648,alpha:0.0032},0).wait(1).to({x:158.2182,y:347.6166,alpha:0.0145},0).wait(1).to({x:158.1683,y:347.7208,alpha:0.0371},0).wait(1).to({x:158.0806,y:347.9042,alpha:0.077},0).wait(1).to({x:157.9272,y:348.2249,alpha:0.1467},0).wait(1).to({x:157.6623,y:348.7789,alpha:0.2672},0).wait(1).to({x:157.3339,y:349.4656,alpha:0.4164},0).wait(1).to({x:157.0074,y:350.1482,alpha:0.5648},0).wait(1).to({x:156.7348,y:350.7181,alpha:0.6887},0).wait(1).to({x:156.5209,y:351.1653,alpha:0.7859},0).wait(1).to({x:156.3525,y:351.5174,alpha:0.8625},0).wait(1).to({x:156.2196,y:351.7954,alpha:0.9229},0).wait(1).to({x:156.1318,y:351.979,alpha:0.9628},0).wait(1).to({x:156.0814,y:352.0843,alpha:0.9857},0).wait(1).to({x:156.0569,y:352.1356,alpha:0.9969},0).wait(1).to({x:156.05,y:352.15,alpha:1},0).wait(62));

	// cta
	this.instance_3 = new lib.cta_mc();
	this.instance_3.setTransform(160,380.95,0.5745,0.5745,0,0,0,0,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(273).to({_off:false},0).wait(1).to({regX:0.2,regY:56.9,x:160.1,y:413.55,alpha:0.0032},0).wait(1).to({y:413.5,alpha:0.0145},0).wait(1).to({y:413.35,alpha:0.0371},0).wait(1).to({y:413.15,alpha:0.077},0).wait(1).to({y:412.75,alpha:0.1467},0).wait(1).to({x:160.15,y:412.05,alpha:0.2672},0).wait(1).to({y:411.2,alpha:0.4164},0).wait(1).to({x:160.2,y:410.35,alpha:0.5648},0).wait(1).to({y:409.65,alpha:0.6887},0).wait(1).to({x:160.25,y:409.1,alpha:0.7859},0).wait(1).to({y:408.65,alpha:0.8625},0).wait(1).to({y:408.3,alpha:0.9229},0).wait(1).to({y:408.1,alpha:0.9628},0).wait(1).to({y:407.95,alpha:0.9857},0).wait(1).to({y:407.9,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:160.2,y:375.25,alpha:1},0).wait(62));

	// ticket
	this.instance_4 = new lib.ticket_mc();
	this.instance_4.setTransform(-164.95,220,0.7981,0.7981);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(257).to({_off:false},0).wait(1).to({regX:-0.1,regY:-192.8,scaleX:0.7983,scaleY:0.7983,x:-164,y:66.15},0).wait(1).to({scaleX:0.799,scaleY:0.799,x:-160.3,y:66.25},0).wait(1).to({scaleX:0.8005,scaleY:0.8005,x:-152.95,y:66.45},0).wait(1).to({scaleX:0.8032,scaleY:0.8032,x:-140,y:66.8},0).wait(1).to({scaleX:0.8077,scaleY:0.8077,x:-117.35,y:67.45},0).wait(1).to({scaleX:0.8157,scaleY:0.8157,x:-78.2,y:68.6},0).wait(1).to({scaleX:0.8255,scaleY:0.8255,x:-29.7,y:70},0).wait(1).to({scaleX:0.8353,scaleY:0.8353,x:18.5,y:71.35},0).wait(1).to({scaleX:0.8434,scaleY:0.8434,x:58.75,y:72.55},0).wait(1).to({scaleX:0.8498,scaleY:0.8498,x:90.35,y:73.4},0).wait(1).to({scaleX:0.8549,scaleY:0.8549,x:115.25,y:74.15},0).wait(1).to({scaleX:0.8589,scaleY:0.8589,x:134.85,y:74.7},0).wait(1).to({scaleX:0.8615,scaleY:0.8615,x:147.85,y:75.05},0).wait(1).to({scaleX:0.863,scaleY:0.863,x:155.25,y:75.25},0).wait(1).to({scaleX:0.8637,scaleY:0.8637,x:158.9,y:75.35},0).wait(1).to({regX:0.1,regY:0,scaleX:0.8639,scaleY:0.8639,x:160.1,y:242},0).wait(78));

	// bonus_prizes
	this.instance_5 = new lib.bonus_prizes_mc();
	this.instance_5.setTransform(159.2,436.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).wait(1).to({regX:0.2,regY:-22.7,x:159.4,y:413.7,alpha:0.0037},0).wait(1).to({y:413.35,alpha:0.0167},0).wait(1).to({y:412.7,alpha:0.0435},0).wait(1).to({y:411.5,alpha:0.0919},0).wait(1).to({y:409.25,alpha:0.1816},0).wait(1).to({y:405.65,alpha:0.3248},0).wait(1).to({y:401.6,alpha:0.4878},0).wait(1).to({y:397.9,alpha:0.6345},0).wait(1).to({y:395.05,alpha:0.7499},0).wait(1).to({y:392.8,alpha:0.8388},0).wait(1).to({y:391.05,alpha:0.9088},0).wait(1).to({y:389.85,alpha:0.9564},0).wait(1).to({y:389.2,alpha:0.9834},0).wait(1).to({y:388.85,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:159.2,y:411.5,alpha:1},0).wait(69).to({regX:0.2,regY:-22.7,x:159.4,y:388.85,alpha:0.9963},0).wait(1).to({y:389.15,alpha:0.9833},0).wait(1).to({y:389.7,alpha:0.9565},0).wait(1).to({y:390.7,alpha:0.9081},0).wait(1).to({y:392.6,alpha:0.8184},0).wait(1).to({y:395.6,alpha:0.6752},0).wait(1).to({y:399,alpha:0.5122},0).wait(1).to({y:402.1,alpha:0.3655},0).wait(1).to({y:404.5,alpha:0.2501},0).wait(1).to({y:406.4,alpha:0.1612},0).wait(1).to({y:407.85,alpha:0.0912},0).wait(1).to({y:408.85,alpha:0.0436},0).wait(1).to({y:409.45,alpha:0.0166},0).wait(1).to({y:409.7,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:159.2,y:432.5,alpha:0},0).to({_off:true},1).wait(237));

	// bonus_prizes_copy
	this.instance_6 = new lib.big_win_mc();
	this.instance_6.setTransform(159.2,436.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({regY:-22,y:414.4,alpha:0.0037},0).wait(1).to({y:414.05,alpha:0.0167},0).wait(1).to({y:413.4,alpha:0.0435},0).wait(1).to({y:412.2,alpha:0.0919},0).wait(1).to({y:409.95,alpha:0.1816},0).wait(1).to({y:406.35,alpha:0.3248},0).wait(1).to({y:402.3,alpha:0.4878},0).wait(1).to({y:398.6,alpha:0.6345},0).wait(1).to({y:395.75,alpha:0.7499},0).wait(1).to({y:393.5,alpha:0.8388},0).wait(1).to({y:391.75,alpha:0.9088},0).wait(1).to({y:390.55,alpha:0.9564},0).wait(1).to({y:389.9,alpha:0.9834},0).wait(1).to({y:389.55,alpha:0.9964},0).wait(1).to({regY:0,y:411.5,alpha:1},0).wait(69).to({regY:-22,y:389.55,alpha:0.9963},0).wait(1).to({y:389.85,alpha:0.9833},0).wait(1).to({y:390.4,alpha:0.9565},0).wait(1).to({y:391.4,alpha:0.9081},0).wait(1).to({y:393.3,alpha:0.8184},0).wait(1).to({y:396.3,alpha:0.6752},0).wait(1).to({y:399.7,alpha:0.5122},0).wait(1).to({y:402.8,alpha:0.3655},0).wait(1).to({y:405.2,alpha:0.2501},0).wait(1).to({y:407.1,alpha:0.1612},0).wait(1).to({y:408.55,alpha:0.0912},0).wait(1).to({y:409.55,alpha:0.0436},0).wait(1).to({y:410.15,alpha:0.0166},0).wait(1).to({y:410.4,alpha:0.0036},0).wait(1).to({regY:0,y:432.5,alpha:0},0).to({_off:true},1).wait(154));

	// sub_caption
	this.instance_7 = new lib.daily_sub_caption_mc();
	this.instance_7.setTransform(157.2,425.65);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(181).to({_off:false},0).wait(1).to({regX:0.2,regY:-4.9,x:157.35,y:420.65,alpha:0.0037},0).wait(1).to({y:420.4,alpha:0.0167},0).wait(1).to({y:419.85,alpha:0.0435},0).wait(1).to({y:418.9,alpha:0.0919},0).wait(1).to({y:417.15,alpha:0.1816},0).wait(1).to({x:157.3,y:414.35,alpha:0.3248},0).wait(1).to({y:411.15,alpha:0.4878},0).wait(1).to({x:157.25,y:408.25,alpha:0.6345},0).wait(1).to({y:406,alpha:0.7499},0).wait(1).to({x:157.2,y:404.25,alpha:0.8388},0).wait(1).to({y:402.85,alpha:0.9088},0).wait(1).to({y:401.95,alpha:0.9564},0).wait(1).to({y:401.4,alpha:0.9834},0).wait(1).to({y:401.15,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:157,y:406,alpha:1},0).wait(61).to({x:157.2,y:405.65},0).wait(1).to({regX:0.2,regY:-4.9,x:157.4,y:400.8,alpha:0.9968},0).wait(1).to({y:401,alpha:0.9855},0).wait(1).to({y:401.45,alpha:0.9629},0).wait(1).to({y:402.25,alpha:0.923},0).wait(1).to({y:403.65,alpha:0.8533},0).wait(1).to({y:406.05,alpha:0.7328},0).wait(1).to({y:409.05,alpha:0.5836},0).wait(1).to({y:412,alpha:0.4352},0).wait(1).to({y:414.5,alpha:0.3113},0).wait(1).to({y:416.45,alpha:0.2141},0).wait(1).to({y:417.95,alpha:0.1375},0).wait(1).to({y:419.2,alpha:0.0771},0).wait(1).to({y:420,alpha:0.0372},0).wait(1).to({y:420.45,alpha:0.0143},0).wait(1).to({y:420.65,alpha:0.0031},0).wait(1).to({regX:0,regY:0,x:157.2,y:425.65,alpha:0},0).wait(78));

	// promo
	this.instance_8 = new lib.promo_mc();
	this.instance_8.setTransform(439.95,224,0.8327,0.8327);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:-0.3,regY:-23.9,x:438.65,y:204.1,alpha:0.0037},0).wait(1).to({x:435,alpha:0.0167},0).wait(1).to({x:427.5,alpha:0.0435},0).wait(1).to({x:413.95,alpha:0.0919},0).wait(1).to({x:388.85,alpha:0.1816},0).wait(1).to({x:348.75,alpha:0.3248},0).wait(1).to({x:303.1,alpha:0.4878},0).wait(1).to({x:262.05,alpha:0.6345},0).wait(1).to({x:229.75,alpha:0.7499},0).wait(1).to({x:204.85,alpha:0.8388},0).wait(1).to({x:185.25,alpha:0.9088},0).wait(1).to({x:171.95,alpha:0.9564},0).wait(1).to({x:164.35,alpha:0.9834},0).wait(1).to({x:160.75,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:160,y:224,alpha:1},0).wait(243).to({regX:-0.3,regY:-23.9,scaleX:0.8323,scaleY:0.8323,x:159.75,y:204.1},0).wait(1).to({scaleX:0.8305,scaleY:0.8305,y:204.35},0).wait(1).to({scaleX:0.827,scaleY:0.827,y:204.8},0).wait(1).to({scaleX:0.8209,scaleY:0.8209,y:205.55},0).wait(1).to({scaleX:0.8102,scaleY:0.8102,y:206.85},0).wait(1).to({scaleX:0.7916,scaleY:0.7916,y:209.1},0).wait(1).to({scaleX:0.7686,scaleY:0.7686,y:211.9},0).wait(1).to({scaleX:0.7458,scaleY:0.7458,x:159.8,y:214.65},0).wait(1).to({scaleX:0.7267,scaleY:0.7267,y:217},0).wait(1).to({scaleX:0.7117,scaleY:0.7117,x:159.85,y:218.8},0).wait(1).to({scaleX:0.6999,scaleY:0.6999,y:220.2},0).wait(1).to({scaleX:0.6906,scaleY:0.6906,y:221.35},0).wait(1).to({scaleX:0.6845,scaleY:0.6845,y:222.1},0).wait(1).to({scaleX:0.681,scaleY:0.681,y:222.5},0).wait(1).to({scaleX:0.6793,scaleY:0.6793,y:222.7},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.6788,scaleY:0.6788,x:160.05,y:239.05},0).wait(78));

	// background
	this.instance_9 = new lib.background_mc();
	this.instance_9.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(351));

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
		{src:"images/_320x480.jpg", id:"_320x480"},
		{src:"images/bigwin.png", id:"bigwin"},
		{src:"images/consolation.png", id:"consolation"},
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