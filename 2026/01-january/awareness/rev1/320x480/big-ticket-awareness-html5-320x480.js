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
p.nominalBounds = new cjs.Rectangle(0,0,288,287);


(lib._320x480 = function() {
	this.initialize(img._320x480);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.bigwinpngcopy = function() {
	this.initialize(img.bigwinpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,287);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,40);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,94);


(lib.promo = function() {
	this.initialize(img.promo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,287);// helper functions:

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
	this.instance.setTransform(-97,-129,0.6637,0.6637);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-97,-129,191.2,190.5), null);


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
	this.instance.setTransform(-110,-145,0.7658,0.7658);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-110,-145,220.6,219.8), null);


(lib.other_text_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgUAUQgJgHAAgNQAAgLAJgHQAIgHAMAAQANAAAIAHQAJAHAAALQAAANgJAHQgIAGgNAAQgMAAgIgGg");
	this.shape.setTransform(160.125,6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag4BrIAOgvQAWAJAKAAQARAAAAgPIAAgCQAAgGgEgHQgEgHgLgLIgKgKQgQgPgIgOQgHgOAAgVIAAgBQAAgeAQgRQAPgQAaAAQAWAAAaAKIgNAsQgRgEgIAAQgRAAAAAOIAAABIABAEIACADIACAFIADAEIAFAFIAFAFIALAMQAQAPAIAOQAHANAAAXIAAAAQAAAggQARQgRASgaAAQgbAAgbgLg");
	this.shape_1.setTransform(150.325,-2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABzIgOiRIAACRIg1AAIAAjlIBEAAIAOCNIAAiNIA1AAIAADlg");
	this.shape_2.setTransform(136.725,-2.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZBzIAAjlIAzAAIAADlg");
	this.shape_3.setTransform(125.625,-2.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAKBzIgKiKIgJCKIhEAAIgRjlIA4AAIADCwIAPiwIApAAIAPCwIADiwIA4AAIgRDlg");
	this.shape_4.setTransform(112.125,-2.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8A2IAAhrQAAgeATgRQATgRAdAAQAcAAAaAOIgTAtQgNgHgQAAQgTAAAAAXIAABkQAAAKAHAAIAGgBIAAhSIAyAAIAAB1QgQAIgMAEQgLAEgQAAQg+AAAAhAg");
	this.shape_5.setTransform(92.025,-2.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZBzIAAjlIAzAAIAADlg");
	this.shape_6.setTransform(81.625,-2.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag8BzIAAjlIA5AAQAcAAARAOQARAOAAAcIAAAGQAAASgGALQgGALgMAFQAaAJAAAmIAAAOQAAAdgQAQQgQAPgcABgAgIBBIADAAQAGAAACgDQADgDAAgGIAAgXQAAgHgDgDQgCgEgGABIgDAAgAgIgZIAEAAQAGAAACgCQADgEAAgGIAAgOQAAgGgDgEQgCgDgGAAIgEAAg");
	this.shape_7.setTransform(71.325,-2.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAHBzIAAhbIgNAAIAABbIg1AAIAAjlIA1AAIAABXIANAAIAAhXIA1AAIAADlg");
	this.shape_8.setTransform(53.825,-2.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZBzIAAixIghAAIAAg0IB0AAIAAA0IggAAIAACxg");
	this.shape_9.setTransform(41.35,-2.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZBzIAAjlIAzAAIAADlg");
	this.shape_10.setTransform(31.875,-2.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAKBzIgKiKIgJCKIhEAAIgRjlIA4AAIADCwIAPiwIApAAIAPCwIADiwIA4AAIgRDlg");
	this.shape_11.setTransform(18.325,-2.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAJByIgRhXIgEAAIAABXIg0AAIAAjjIA4AAQAjgBAPARQAOAQAAAfIAAARQAAAhgRANIAaBlgAgMgOIADAAQAHAAACgEQACgDAAgHIAAgWQAAgIgCgDQgCgDgHAAIgDAAg");
	this.shape_12.setTransform(161.125,-36.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AARByIgEgsIgZAAIgEAsIgzAAIAejjIBLAAIAeDjgAAAgoIgGA9IANAAIgGg9IgBgSg");
	this.shape_13.setTransform(146.35,-36.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgyByIAAjjIBkAAIAAAwIgwAAIAAAoIAnAAIAAAvIgnAAIAAAsIAxAAIAAAwg");
	this.shape_14.setTransform(133.625,-36.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaByIAAhBIgriiIA2AAIAPBMIAPhMIA3AAIgsCiIAABBg");
	this.shape_15.setTransform(120.4,-36.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgyByIAAjjIBkAAIAAAwIgwAAIAAAoIAnAAIAAAvIgnAAIAAAsIAxAAIAAAwg");
	this.shape_16.setTransform(104.125,-36.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAHByIAAhaIgNAAIAABaIg1AAIAAjjIA1AAIAABWIANAAIAAhWIA1AAIAADjg");
	this.shape_17.setTransform(91.375,-36.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZByIAAiwIghAAIAAgzIB0AAIAAAzIggAAIAACwg");
	this.shape_18.setTransform(78.85,-36.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgaByIAAiwIgfAAIAAgzIB0AAIAAAzIghAAIAACwg");
	this.shape_19.setTransform(63.25,-36.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAJByIgRhXIgEAAIAABXIg0AAIAAjjIA4AAQAjgBAPARQAOAQAAAfIAAARQAAAhgRANIAaBlgAgMgOIADAAQAHAAACgEQACgDAAgHIAAgWQAAgIgCgDQgCgDgHAAIgDAAg");
	this.shape_20.setTransform(49.875,-36.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AARByIgEgsIgZAAIgEAsIgzAAIAejjIBLAAIAeDjgAAAgoIgGA9IANAAIgGg9IgBgSg");
	this.shape_21.setTransform(35.1,-36.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaByIAAiwIgfAAIAAgzIB0AAIAAAzIghAAIAACwg");
	this.shape_22.setTransform(21.75,-36.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag4BrIAOgvQAWAIAKABQARAAAAgPIAAgBQAAgHgEgHQgEgHgLgMIgKgJQgQgPgIgOQgHgOAAgVIAAAAQAAgeAQgRQAPgRAaAAQAWAAAaAKIgNAtQgRgFgIgBQgRAAAAAPIAAABIABAEIACAEIACADIADAFIAFAFIAFAFIALALQAQAQAIAOQAHANAAAXIAAABQAAAegQASQgRASgaAAQgbAAgbgLg");
	this.shape_23.setTransform(9.775,-36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.other_text_mc, new cjs.Rectangle(2.3,-55,167.7,77.2), null);


(lib.other_prizes_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bigwinpngcopy();
	this.instance.setTransform(17,-27,0.6384,0.6384);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.other_prizes_mc, new cjs.Rectangle(17,-27,183.9,183.3), null);


(lib.new_cta_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-73,-14.3,0.7157,0.7157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.new_cta_mc, new cjs.Rectangle(-73,-14.3,146,28.700000000000003), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgSARQgHgGAAgLQAAgJAHgGQAIgHAKAAQALAAAHAHQAIAGAAAJQAAALgIAGQgHAGgLAAQgKAAgIgGg");
	this.shape.setTransform(88.8,-41.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxBeIAMgqQAUAIAIAAQAPAAAAgNIAAgBQAAgGgEgGQgDgGgKgKIgIgIQgPgNgGgMQgGgMAAgTIAAgBQAAgaAOgOQANgPAXAAQATAAAXAJIgMAnQgPgFgGAAQgPAAAAANIAAABIAAADIACADIABAEIAEAEIAEAEIAEAFIAKAKQAOANAHAMQAGAMAAAUIAAAAQAAAbgOAQQgPAPgWAAQgYAAgYgJg");
	this.shape_1.setTransform(80.225,-49.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrBkIAAjHIBXAAIAAArIgqAAIAAAiIAiAAIAAAqIgiAAIAAAmIAqAAIAAAqg");
	this.shape_2.setTransform(70.325,-49.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAIBkIgPhMIgDAAIAABMIguAAIAAjHIAxAAQAfAAANAOQAMAOAAAbIAAAPQAAAdgPAMIAXBYgAgKgMIACAAQAGAAACgDQACgDAAgGIAAgUQAAgGgCgDQgCgDgGAAIgCAAg");
	this.shape_3.setTransform(58.7,-49.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWBkIAAjHIAtAAIAADHg");
	this.shape_4.setTransform(49.25,-49.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPBkIgEgnIgVAAIgEAnIgtAAIAbjHIBBAAIAbDHgAAAgiIgGA0IANAAIgGg0IgBgRg");
	this.shape_5.setTransform(39.725,-49.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAABkIgMh+IAAB+IguAAIAAjHIA7AAIAMB7IAAh7IAuAAIAADHg");
	this.shape_6.setTransform(26.575,-49.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAABnQgZAAgOgOQgNgOAAgbIAAhfQAAgbANgOQAOgOAZAAIAAAAQAbAAANAOQANAPAAAaIAABfQAAAcgOANQgNAOgZAAgAgFgyIAABmQAAAIAFAAIAAAAQAGAAAAgIIAAhmQAAgJgGAAQgFAAAAAJg");
	this.shape_7.setTransform(13.825,-49.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWBkIAAjHIAtAAIAADHg");
	this.shape_8.setTransform(4.7,-49.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguBkIAAjHIAuAAIAACaIAvAAIAAAtg");
	this.shape_9.setTransform(-4.025,-49.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguBkIAAjHIAuAAIAACaIAvAAIAAAtg");
	this.shape_10.setTransform(-15.075,-49.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWBkIAAjHIAtAAIAADHg");
	this.shape_11.setTransform(-23.55,-49.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAhBkIAAiVIgDAXIgNB+IgiAAIgNh+IgCgXIAACVIgtAAIAAjHIBGAAIAHBfIAAAOIABgOIAHhfIBGAAIAADHg");
	this.shape_12.setTransform(-35.05,-49.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAJBkIgJh3IgIB3Ig7AAIgPjHIAxAAIACCZIANiZIAlAAIANCZIACiZIAxAAIgPDHg");
	this.shape_13.setTransform(-55.575,-49.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgrBkIAAjHIBXAAIAAArIgqAAIAAAiIAiAAIAAAqIgiAAIAAAmIAqAAIAAAqg");
	this.shape_14.setTransform(-69.025,-49.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAABkIgMh+IAAB+IguAAIAAjHIA7AAIAMB7IAAh7IAuAAIAADHg");
	this.shape_15.setTransform(-80.875,-49.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRARQgIgGAAgLQAAgKAIgGQAGgGALAAQALAAAIAGQAHAGAAAKQAAALgHAGQgIAGgLAAQgLAAgGgGg");
	this.shape_16.setTransform(113.05,-70.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgxBeIAMgqQAUAIAIAAQAPAAAAgNIAAgBQAAgGgEgGQgDgGgKgKIgIgIQgPgNgGgMQgGgMAAgTIAAgBQAAgaAOgOQANgPAXAAQATAAAXAJIgMAnQgPgFgGAAQgPAAAAANIAAABIAAADIACADIABAEIAEAEIAEAEIAEAFIAKAKQAOANAHAMQAGAMAAAUIAAAAQAAAbgOAQQgPAPgWAAQgYAAgYgJg");
	this.shape_17.setTransform(104.425,-78.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAgBkIAAiVIgCAXIgNB+IghAAIgOh+IgCgXIAACVIgtAAIAAjHIBGAAIAHBfIAAAOIABgOIAHhfIBFAAIAADHg");
	this.shape_18.setTransform(90.75,-78.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAPBkIgEgnIgVAAIgEAnIgtAAIAbjHIBBAAIAbDHgAAAgiIgGA0IANAAIgGg0IgBgRg");
	this.shape_19.setTransform(75.775,-78.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgrBkIAAjHIBXAAIAAArIgqAAIAAAiIAiAAIAAAqIgiAAIAAAmIAqAAIAAAqg");
	this.shape_20.setTransform(64.625,-78.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAIBkIgPhMIgDAAIAABMIguAAIAAjHIAxAAQAfAAAMAOQANAOAAAbIAAAPQAAAdgPAMIAXBYgAgKgMIACAAQAGAAACgDQACgDAAgGIAAgUQAAgGgCgDQgCgDgGAAIgCAAg");
	this.shape_21.setTransform(53,-78.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag0BkIAAjHIAxAAQAYAAAQAQQAQAQAAAbIAABQQAAAbgQARQgQAQgYAAgAgGA5IACAAQAFAAADgDQABgDAAgJIAAhVQABgIgDgCQgDgDgEAAIgCAAg");
	this.shape_22.setTransform(40.5,-78.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAJBkIgJh3IgIB3Ig7AAIgPjHIAxAAIACCZIANiZIAlAAIANCZIACiZIAxAAIgPDHg");
	this.shape_23.setTransform(22.475,-78.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgrBkIAAjHIBXAAIAAArIgqAAIAAAiIAiAAIAAAqIgiAAIAAAmIAqAAIAAAqg");
	this.shape_24.setTransform(9.025,-78.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAABkIgMh+IAAB+IguAAIAAjHIA7AAIAMB7IAAh7IAuAAIAADHg");
	this.shape_25.setTransform(-2.825,-78.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgSARQgHgGAAgLQAAgKAHgGQAIgGAKAAQALAAAHAGQAIAGAAAKQAAALgIAGQgHAGgLAAQgKAAgIgGg");
	this.shape_26.setTransform(-16.05,-70.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAIBkIgPhMIgDAAIAABMIguAAIAAjHIAxAAQAfAAANAOQAMAOAAAbIAAAPQAAAdgPAMIAXBYgAgKgMIACAAQAGAAACgDQACgDAAgGIAAgUQAAgGgCgDQgCgDgGAAIgCAAg");
	this.shape_27.setTransform(-25.8,-78.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAPBkIgEgnIgVAAIgEAnIgtAAIAbjHIBBAAIAbDHgAAAgiIgGA0IANAAIgGg0IgBgRg");
	this.shape_28.setTransform(-38.775,-78.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgrBkIAAjHIBXAAIAAArIgqAAIAAAiIAiAAIAAAqIgiAAIAAAmIAqAAIAAAqg");
	this.shape_29.setTransform(-49.925,-78.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWBkIAAg5IgmiOIAvAAIANBDIAOhDIAvAAIgmCOIAAA5g");
	this.shape_30.setTransform(-61.475,-78.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAJBkIgJh3IgIB3Ig7AAIgPjHIAxAAIACCZIANiZIAlAAIANCZIACiZIAxAAIgPDHg");
	this.shape_31.setTransform(-79.825,-78.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgrBkIAAjHIBXAAIAAArIgqAAIAAAiIAiAAIAAAqIgiAAIAAAmIAqAAIAAAqg");
	this.shape_32.setTransform(-93.275,-78.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAABkIgMh+IAAB+IguAAIAAjHIA7AAIAMB7IAAh7IAuAAIAADHg");
	this.shape_33.setTransform(-105.125,-78.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_sub_caption_mc, new cjs.Rectangle(-113.2,-94.8,231.10000000000002,67), null);


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
	this.instance.setTransform(-56,-21,0.6335,0.6335);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bt_logo, new cjs.Rectangle(-56,-21,126.7,59.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgSARQgHgGAAgLQAAgKAHgGQAIgGAKAAQALAAAIAGQAHAGAAAKQAAALgHAGQgIAGgLAAQgKAAgIgGg");
	this.shape.setTransform(133.65,-47.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglBaQgOgNAAgZIAAgYQAAgSAEgMQAKgdAchHIAqAAIgOAkIgPAkIAEgBQAsAAAAAzIAAAYQAAAbgOAQQgOAQgYAAQgXAAgOgNgAgEANIAAApQAAAGAEAAQAFAAAAgGIAAgpQAAgGgFAAQgEAAAAAGg");
	this.shape_1.setTransform(124.375,-55.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxBmIAAgoQA4hAAAgiIAAgBQAAgLgFgFQgFgEgIAAQgHAAgSAFIgPgmQAVgLAeAAQAXAAAOASQAOASABAaIAAABQAAAOgFAOQgEAMgJAOIgPAWIgSAWIAtAAIAAAqg");
	this.shape_2.setTransform(112.775,-55.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglBYQgOgQAAgZIAAhcQAAgaAOgQQAOgPAXAAQAXAAAPAPQAOAQAAAaIAABcQAAAZgOAQQgPAPgXAAQgXAAgOgPgAgEg1IAABrIABAEIADACIAAAAQAFAAAAgGIAAhrQAAAAAAgBQAAgBAAAAQAAAAgBgBQAAAAAAgBIgDgCIgBAAQgEAAAAAGg");
	this.shape_3.setTransform(101.175,-55.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxBmIAAgoQA4hAAAgiIAAgBQAAgLgFgFQgFgEgIAAQgHAAgSAFIgPgmQAVgLAeAAQAXAAAOASQAOASABAaIAAABQAAAOgFAOQgEAMgJAOIgPAWIgSAWIAtAAIAAAqg");
	this.shape_4.setTransform(89.525,-55.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWBkIAAiaIgcAAIAAgtIBlAAIAAAtIgcAAIAACag");
	this.shape_5.setTransform(75.375,-55.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAIBkIgPhMIgDAAIAABMIguAAIAAjHIAxAAQAfAAAMAOQANAOAAAbIAAAPQAAAdgPAMIAXBYgAgKgMIACAAQAGAAACgDQACgDAAgGIAAgUQAAgGgCgDQgCgDgGAAIgCAAg");
	this.shape_6.setTransform(63.7,-55.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPBkIgEgnIgVAAIgEAnIgtAAIAbjHIBBAAIAbDHgAAAgiIgGA0IANAAIgGg0IgBgRg");
	this.shape_7.setTransform(50.775,-55.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWBkIAAiaIgcAAIAAgtIBlAAIAAAtIgcAAIAACag");
	this.shape_8.setTransform(39.025,-55.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgxBeIAMgqQAUAIAIAAQAPAAAAgNIAAgBQAAgGgEgGQgDgGgKgKIgIgIQgPgNgGgMQgGgMAAgTIAAgBQAAgaAOgOQANgPAXAAQATAAAXAJIgMAnQgPgFgGAAQgPAAAAANIAAABIAAADIACADIABAEIAEAEIAEAEIAEAFIAKAKQAOANAHAMQAGAMAAAUIAAAAQAAAbgOAQQgPAPgWAAQgYAAgYgJg");
	this.shape_9.setTransform(28.575,-55.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAABnQgZAAgOgOQgNgOAAgbIAAhfQAAgbANgOQAOgOAZAAIAAAAQAbAAANAOQANAPAAAaIAABfQAAAcgOANQgNAOgZAAgAgFgyIAABmQAAAIAFAAIAAAAQAGAAAAgIIAAhmQAAgJgGAAQgFAAAAAJg");
	this.shape_10.setTransform(14.075,-55.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWBkIAAiaIgcAAIAAgtIBlAAIAAAtIgcAAIAACag");
	this.shape_11.setTransform(2.725,-55.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgxBeIAMgqQAUAIAIAAQAPAAAAgNIAAgBQAAgGgEgGQgDgGgKgKIgIgIQgPgNgGgMQgGgMAAgTIAAgBQAAgaAOgOQANgPAXAAQATAAAXAJIgMAnQgPgFgGAAQgPAAAAANIAAABIAAADIACADIABAEIAEAEIAEAEIAEAFIAKAKQAOANAHAMQAGAMAAAUIAAAAQAAAbgOAQQgPAPgWAAQgYAAgYgJg");
	this.shape_12.setTransform(-10.925,-55.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrBkIAAjHIBXAAIAAArIgqAAIAAAiIAiAAIAAAqIgiAAIAAAmIAqAAIAAAqg");
	this.shape_13.setTransform(-20.825,-55.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAIBkIgPhMIgDAAIAABMIguAAIAAjHIAxAAQAfAAAMAOQANAOAAAbIAAAPQAAAdgPAMIAXBYgAgKgMIACAAQAGAAACgDQACgDAAgGIAAgUQAAgGgCgDQgCgDgGAAIgCAAg");
	this.shape_14.setTransform(-32.45,-55.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWBkIAAjHIAtAAIAADHg");
	this.shape_15.setTransform(-41.9,-55.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAPBkIgEgnIgVAAIgEAnIgtAAIAbjHIBBAAIAbDHgAAAgiIgGA0IANAAIgGg0IgBgRg");
	this.shape_16.setTransform(-51.475,-55.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAABkIgMh+IAAB+IguAAIAAjHIA7AAIAMB7IAAh7IAuAAIAADHg");
	this.shape_17.setTransform(-64.575,-55.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAABnQgZAAgOgOQgNgOAAgbIAAhfQAAgbANgOQAOgOAZAAIAAAAQAbAAANAOQANAPAAAaIAABfQAAAcgOANQgNAOgZAAgAgFgyIAABmQAAAIAFAAIAAAAQAGAAAAgIIAAhmQAAgJgGAAQgFAAAAAJg");
	this.shape_18.setTransform(-77.325,-55.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWBkIAAjHIAtAAIAADHg");
	this.shape_19.setTransform(-86.45,-55.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AguBkIAAjHIAuAAIAACaIAvAAIAAAtg");
	this.shape_20.setTransform(-95.175,-55.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AguBkIAAjHIAuAAIAACaIAvAAIAAAtg");
	this.shape_21.setTransform(-106.225,-55.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWBkIAAjHIAtAAIAADHg");
	this.shape_22.setTransform(-114.7,-55.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAgBkIAAiVIgCAXIgNB+IghAAIgOh+IgCgXIAACVIgtAAIAAjHIBGAAIAHBfIAAAOIABgOIAHhfIBFAAIAADHg");
	this.shape_23.setTransform(-126.25,-55.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag0BkIAAjHIAxAAQAYAAAQAQQAQAQAAAbIAABQQAAAbgQARQgQAQgXAAgAgGA5IACAAQAGAAACgDQACgDAAgJIAAhVQgBgIgCgCQgDgDgEAAIgCAAg");
	this.shape_24.setTransform(70.45,-85.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgrBkIAAjHIBXAAIAAArIgqAAIAAAiIAiAAIAAAqIgiAAIAAAmIAqAAIAAAqg");
	this.shape_25.setTransform(59.725,-85.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgrBkIAAjHIBXAAIAAArIgqAAIAAAiIAiAAIAAAqIgiAAIAAAmIAqAAIAAAqg");
	this.shape_26.setTransform(49.875,-85.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgWBkIAAiaIgcAAIAAgtIBlAAIAAAtIgcAAIAACag");
	this.shape_27.setTransform(39.425,-85.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAABkIgMh+IAAB+IguAAIAAjHIA7AAIAMB7IAAh7IAuAAIAADHg");
	this.shape_28.setTransform(27.525,-85.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAPBkIgEgnIgVAAIgEAnIgtAAIAbjHIBBAAIAbDHgAAAgiIgGA0IANAAIgGg0IgBgRg");
	this.shape_29.setTransform(14.375,-85.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAIBkIgPhMIgDAAIAABMIguAAIAAjHIAxAAQAfAAANAOQAMAOAAAbIAAAPQAAAdgPAMIAXBYgAgKgMIACAAQAGAAACgDQACgDAAgGIAAgUQAAgGgCgDQgCgDgGAAIgCAAg");
	this.shape_30.setTransform(1.45,-85.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAPBkIgEgnIgVAAIgEAnIgtAAIAbjHIBBAAIAbDHgAAAgiIgGA0IANAAIgGg0IgBgRg");
	this.shape_31.setTransform(-11.475,-85.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgmBYQgOgOAAgaIAAiUIAvAAIAACWQAAAIAFAAQAGAAAAgIIAAiWIAvAAIAACUQAAAZgNAPQgOANgaAAQgXAAgPgNg");
	this.shape_32.setTransform(-24.275,-85.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag0AwIAAhfQAAgZAQgPQARgQAZABQAYAAAXAMIgQAoQgMgGgOgBQgRABABATIAABXQAAAKAGAAQADAAACgBIAAhHIArAAIAABlQgNAIgLADQgKADgNABQg2AAAAg4g");
	this.shape_33.setTransform(-36.225,-85.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAHBkIgHhHIgGBHIgzAAIAZhkIgYhjIAwAAIAIBAIAJhAIAxAAIgZBjIAZBkg");
	this.shape_34.setTransform(-51.575,-85.575);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWBkIAAjHIAtAAIAADHg");
	this.shape_35.setTransform(-60.65,-85.575);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgxBeIAMgqQAUAIAIAAQAPAAAAgNIAAgBQAAgGgEgGQgDgGgKgKIgIgIQgPgNgGgMQgGgMAAgTIAAgBQAAgaAOgOQANgPAXAAQATAAAXAJIgMAnQgPgFgGAAQgPAAAAANIAAABIAAADIACADIABAEIAEAEIAEAEIAEAFIAKAKQAOANAHAMQAGAMAAAUIAAAAQAAAbgOAQQgPAPgWAAQgYAAgYgJg");
	this.shape_36.setTransform(-68.925,-85.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bonus_prizes_mc, new cjs.Rectangle(-136.2,-101.9,274.7,68.4), null);


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


// stage content:
(lib.bigticketawarenesshtml5320x480 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// new_cta
	this.instance = new lib.new_cta_mc();
	this.instance.setTransform(160,439.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(363));

	// footer
	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(304.6,464.1,0.0195,0.0195,0,0,0,496.7,465.9);

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
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAuIAAhbIAXAAQALAAAHAHQAIAIAAAMIAAAkQAAANgIAIQgHAHgLAAgAgDAaIACAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAIABgGIAAgmIgBgFIgCgBIgCAAg");
	this.shape_15.setTransform(184.8,464.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAuIAAhbIAnAAIAAAUIgTAAIAAAPIAQAAIAAATIgQAAIAAASIATAAIAAATg");
	this.shape_16.setTransform(179.85,464.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAGAuIgBgSIgJAAIgCASIgVAAIANhbIAdAAIAMBbgAAAgPIgCAYIAFAAIgDgYIAAgIg");
	this.shape_17.setTransform(174.5,464.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAuIgFg5IAAA5IgVAAIAAhbIAbAAIAFA4IAAg4IAVAAIAABbg");
	this.shape_18.setTransform(166.975,464.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAuIAAhbIATAAIAABbg");
	this.shape_19.setTransform(162.5,464.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWArIAFgTQAJADAFAAQAGAAAAgFIAAgBQAAgDgCgCQgBgDgEgEIgFgFQgGgFgDgGQgCgFAAgIIAAgBQAAgMAFgHQAHgGAKAAQAJAAAKADIgFASIgKgBQgGgBAAAHIAAACIAAABIABABIABACIACACIACADIAEAEQAHAFADAGQADAGAAAIIAAABQAAANgHAGQgGAIgKgBQgLABgLgFg");
	this.shape_20.setTransform(157.2,464.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUAuIAAhbIAoAAIAAAUIgTAAIAAAPIAPAAIAAATIgPAAIAAASIAUAAIAAATg");
	this.shape_21.setTransform(152.65,464.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXAuIAAgSIAZg1IgXAAIAAgUIAtAAIAAASIgZA1IAYAAIAAAUg");
	this.shape_22.setTransform(147.6,464.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAuIAAhbIATAAIAABbg");
	this.shape_23.setTransform(143.6,464.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAEAuIgHgjIgBAAIAAAjIgVAAIAAhbIAWAAQAOAAAGAGQAGAHAAAMIAAAHQAAANgHAGIAKAogAgEgFIABAAIADgBIABgFIAAgJIgBgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgBAAg");
	this.shape_24.setTransform(139.225,464.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXAuIAAhbIAWAAQAOAAAGAGQAFAHAAAMIAAAIQAAANgGAGQgHAFgMAAIgBAAIAAAigAgCgEIABAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAIABgEIAAgLIgBgEQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_25.setTransform(133.475,464.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIA7IAAh1IARAAIAAB1g");
	this.shape_26.setTransform(124.575,466.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJAuIAAgaIgShBIAWAAIAFAfIAHgfIAVAAIgRBBIAAAag");
	this.shape_27.setTransform(115.475,464.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAuIAAhbIAVAAIAABGIAVAAIAAAVg");
	this.shape_28.setTransform(109.9,464.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXAuIAAhbIAWAAQAOAAAGAGQAFAHAAAMIAAAIQAAANgGAGQgHAFgMAAIgBAAIAAAigAgCgEIABAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAABAAIABgEIAAgLIgBgEQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_29.setTransform(104.625,464.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgXAuIAAhbIAWAAQAOAAAGAGQAFAHAAAMIAAAIQAAANgGAGQgHAFgMAAIgBAAIAAAigAgCgEIABAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAIABgEIAAgLIgBgEQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_30.setTransform(99.075,464.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAGAuIgBgSIgKAAIgBASIgUAAIALhbIAeAAIANBbgAAAgPIgCAYIAFAAIgCgYIgBgIg");
	this.shape_31.setTransform(93.35,464.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgWArIAFgTQAJADAFAAQAGAAAAgFIAAgBQAAgDgCgCQgBgDgFgEIgEgFQgGgFgDgGQgCgFAAgIIAAgBQAAgMAFgHQAHgGAKAAQAIAAALADIgFASIgKgBQgGgBAAAHIAAACIAAABIABABIABACIACACIACADIAEAEQAHAFADAGQADAGAAAIIAAABQAAANgGAGQgHAIgKgBQgLABgLgFg");
	this.shape_32.setTransform(86.45,464.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFAUIgEgnIATAAIgDAng");
	this.shape_33.setTransform(82.6,462.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgQAoQgGgHAAgNIAAgnQAAgOAGgHQAHgHAMAAQAKAAAJAEIgIARIgHgBQgIAAAAAKIAAAjQAAAEACADQADADAEAAIAAAAQAEAAAEgCIAHARQgJAFgLAAQgMAAgHgIg");
	this.shape_34.setTransform(78.925,464.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZAqQgGgGgBgNIAAgLQAAgHADgEQADgCAGgBQgFgJAAgGIAAgGQAAgNAEgFQAFgGAMABQAJAAAEAEQAEAGAAANIAAAGQAAAOgMADIAIALQgBgFAAgGIAQAAIAAAFIAAAFIAAAFIAAADIgBADIgBAFIgCACIAMASIgVAAIgCgDQgGAFgHgBQgOAAgHgFgAgLAPIAAAFQAAAGACABQACADAEAAIADgBIgLgRgAgGgbIAAABIAAACIAAALIAAADQAEgCAAgFIAAgHIgBgDIgBAAIgCAAg");
	this.shape_35.setTransform(72.65,464.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKAuIAAhGIgMAAIAAgVIAtAAIAAAVIgMAAIAABGg");
	this.shape_36.setTransform(66.6,464.825);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIA7IAAh1IARAAIAAB1g");
	this.shape_37.setTransform(58.075,466.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgWAqIAHgRIACABIACABIABAAIACABIACABIADAAQAEAAAAgIIAAgIIAAgCIgBgCIgBgCIgEAAIgEAAIAAgPIADAAQAHAAgBgHIAAgFQAAgIgEAAQgFAAgEAEIgIgRQALgGAJAAQALAAAGAHQAGAHAAAMIAAABQAAAIgDAFQgDAFgFAAQANABAAATIAAAEQgBAMgGAHQgHAHgKAAQgMAAgKgGg");
	this.shape_38.setTransform(49.2,464.825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgQApQgHgHAAgNIAAgFQAAgKAFgGQgEgGAAgJIAAgFQABgMAGgIQAGgGAJAAQAKAAAGAGQAGAIAAAMIAAAFQABAJgEAGQAFAGAAAKIAAAFQAAANgHAHQgGAGgLAAQgKAAgGgGgAgCALIAAAOQAAABABAAQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBIAAgOQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABgAgCgYIAAAQIABACIABABIACgBIABgCIAAgQQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgBABAAAAg");
	this.shape_39.setTransform(44.1,464.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgWAvIAAgSQAZgeAAgPIAAgBQAAgEgCgCQgCgDgEAAIgLADIgHgRQAKgGANAAQALAAAGAIQAHAIAAAMIAAABQAAAGgCAHQgCAFgEAGIgIAKIgIAKIAVAAIAAAUg");
	this.shape_40.setTransform(38.725,464.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgWArIAFgTQAJADAFAAQAGAAAAgFIAAgBQAAgDgCgCQgBgDgEgEIgFgFQgGgFgDgGQgCgFAAgIIAAgBQgBgMAHgHQAGgGAKAAQAJAAAKADIgFASIgKgBQgGgBgBAHIABACIAAABIABABIABACIACACIACADIAEAEQAHAFADAGQADAGAAAIIAAABQAAANgHAGQgGAIgKgBQgLABgLgFg");
	this.shape_41.setTransform(32.2,464.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgUAuIAAhbIAoAAIAAAUIgUAAIAAAPIAQAAIAAATIgQAAIAAASIAVAAIAAATg");
	this.shape_42.setTransform(27.7,464.825);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgJAuIAAhbIATAAIAABbg");
	this.shape_43.setTransform(23.9,464.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAEAuIgHgjIgBAAIAAAjIgVAAIAAhbIAWAAQAOAAAGAGQAGAHAAAMIAAAHQAAANgHAGIAKAogAgEgFIABAAIADgBIABgFIAAgJIgBgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgBAAg");
	this.shape_44.setTransform(19.525,464.825);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgUAuIAAhbIAoAAIAAAUIgTAAIAAAPIAPAAIAAATIgPAAIAAASIAUAAIAAATg");
	this.shape_45.setTransform(14.4,464.825);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgWArIAFgTQAJADAFAAQAGAAAAgFIAAgBQAAgDgCgCQgBgDgEgEIgFgFQgGgFgDgGQgCgFAAgIIAAgBQAAgMAFgHQAHgGAKAAQAJAAAKADIgFASIgKgBQgGgBgBAHIABACIAAABIABABIABACIACACIACADIAEAEQAHAFADAGQADAGAAAIIAAABQAAANgGAGQgHAIgKgBQgLABgLgFg");
	this.shape_46.setTransform(9.6,464.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).wait(363));

	// logo
	this.instance_2 = new lib.bt_logo();
	this.instance_2.setTransform(160,56.5,0.8182,0.8182);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(363));

	// other_prizes_mc
	this.instance_3 = new lib.other_prizes_mc();
	this.instance_3.setTransform(160,235.5,1,1,0,0,0,110,71.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(181).to({_off:false},0).wait(1).to({regX:108.9,regY:64.6,x:158.9,y:228.45,alpha:0.0037},0).wait(1).to({y:228.05,alpha:0.0167},0).wait(1).to({y:227.25,alpha:0.0435},0).wait(1).to({y:225.8,alpha:0.0919},0).wait(1).to({y:223.15,alpha:0.1816},0).wait(1).to({y:218.85,alpha:0.3248},0).wait(1).to({y:213.95,alpha:0.4878},0).wait(1).to({y:209.55,alpha:0.6345},0).wait(1).to({y:206.1,alpha:0.7499},0).wait(1).to({y:203.4,alpha:0.8388},0).wait(1).to({y:201.3,alpha:0.9088},0).wait(1).to({y:199.9,alpha:0.9564},0).wait(1).to({y:199.05,alpha:0.9834},0).wait(1).to({y:198.7,alpha:0.9964},0).wait(1).to({regX:110,regY:71.5,x:160,y:205.5,alpha:1},0).wait(74).to({regX:108.9,regY:64.6,scaleX:0.9986,scaleY:0.9986,x:159.15,y:198.95},0).wait(1).to({scaleX:0.9937,scaleY:0.9937,x:160.05,y:200.4},0).wait(1).to({scaleX:0.9838,scaleY:0.9838,x:161.9,y:203.25},0).wait(1).to({scaleX:0.9664,scaleY:0.9664,x:165.1,y:208.3},0).wait(1).to({scaleX:0.936,scaleY:0.936,x:170.75,y:217.1},0).wait(1).to({scaleX:0.8834,scaleY:0.8834,x:180.5,y:232.25},0).wait(1).to({scaleX:0.8182,scaleY:0.8182,x:192.6,y:251.1},0).wait(1).to({scaleX:0.7534,scaleY:0.7534,x:204.6,y:269.85},0).wait(1).to({scaleX:0.6993,scaleY:0.6993,x:214.65,y:285.5},0).wait(1).to({scaleX:0.6569,scaleY:0.6569,x:222.55,y:297.75},0).wait(1).to({scaleX:0.6235,scaleY:0.6235,x:228.75,y:307.45},0).wait(1).to({scaleX:0.5971,scaleY:0.5971,x:233.6,y:315},0).wait(1).to({scaleX:0.5797,scaleY:0.5797,x:236.9,y:320.1},0).wait(1).to({scaleX:0.5697,scaleY:0.5697,x:238.7,y:322.95},0).wait(1).to({scaleX:0.5648,scaleY:0.5648,x:239.6,y:324.4},0).wait(1).to({regX:110,regY:71.5,scaleX:0.5634,scaleY:0.5634,x:240.5,y:328.7},0).wait(78));

	// other_text
	this.instance_4 = new lib.other_text_mc();
	this.instance_4.setTransform(159.25,424.8,1,1,0,0,0,86.1,38.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(181).to({_off:false},0).wait(1).to({regX:85.9,regY:-19.7,x:159.05,y:366.4,alpha:0.0037},0).wait(1).to({y:366.15,alpha:0.0167},0).wait(1).to({y:365.6,alpha:0.0435},0).wait(1).to({y:364.65,alpha:0.0919},0).wait(1).to({y:362.85,alpha:0.1816},0).wait(1).to({y:360,alpha:0.3248},0).wait(1).to({y:356.7,alpha:0.4878},0).wait(1).to({y:353.8,alpha:0.6345},0).wait(1).to({y:351.5,alpha:0.7499},0).wait(1).to({y:349.7,alpha:0.8388},0).wait(1).to({y:348.3,alpha:0.9088},0).wait(1).to({y:347.35,alpha:0.9564},0).wait(1).to({y:346.8,alpha:0.9834},0).wait(1).to({y:346.55,alpha:0.9964},0).wait(1).to({regX:86.1,regY:38.6,x:159.25,y:404.8,alpha:1},0).wait(74).to({regX:85.9,regY:-19.7,x:159.05,y:346.5,alpha:0.9968},0).wait(1).to({alpha:0.9855},0).wait(1).to({alpha:0.9629},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.8533},0).wait(1).to({alpha:0.7328},0).wait(1).to({alpha:0.5836},0).wait(1).to({alpha:0.4352},0).wait(1).to({alpha:0.3113},0).wait(1).to({alpha:0.2141},0).wait(1).to({alpha:0.1375},0).wait(1).to({alpha:0.0771},0).wait(1).to({alpha:0.0372},0).wait(1).to({alpha:0.0143},0).wait(1).to({alpha:0.0031},0).wait(1).to({regX:86.1,regY:38.6,x:159.25,y:404.8,alpha:0},0).wait(78));

	// sub_caption
	this.instance_5 = new lib.daily_sub_caption_mc();
	this.instance_5.setTransform(157.2,425.65);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:2.3,regY:-64.2,x:159.45,y:361.35,alpha:0.0037},0).wait(1).to({y:361.1,alpha:0.0167},0).wait(1).to({y:360.55,alpha:0.0435},0).wait(1).to({y:359.6,alpha:0.0919},0).wait(1).to({y:357.85,alpha:0.1816},0).wait(1).to({x:159.4,y:355.05,alpha:0.3248},0).wait(1).to({y:351.85,alpha:0.4878},0).wait(1).to({x:159.35,y:348.95,alpha:0.6345},0).wait(1).to({y:346.7,alpha:0.7499},0).wait(1).to({x:159.3,y:344.95,alpha:0.8388},0).wait(1).to({y:343.55,alpha:0.9088},0).wait(1).to({y:342.65,alpha:0.9564},0).wait(1).to({y:342.1,alpha:0.9834},0).wait(1).to({y:341.85,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:157,y:406,alpha:1},0).wait(69).to({regX:3.4,regY:-63.1,x:160.4,y:342.95,alpha:0.9963},0).wait(1).to({y:343.2,alpha:0.9833},0).wait(1).to({y:343.75,alpha:0.9565},0).wait(1).to({y:344.7,alpha:0.9081},0).wait(1).to({y:346.5,alpha:0.8184},0).wait(1).to({y:349.35,alpha:0.6752},0).wait(1).to({y:352.65,alpha:0.5122},0).wait(1).to({y:355.55,alpha:0.3655},0).wait(1).to({y:357.85,alpha:0.2501},0).wait(1).to({y:359.65,alpha:0.1612},0).wait(1).to({y:361.05,alpha:0.0912},0).wait(1).to({y:362,alpha:0.0436},0).wait(1).to({y:362.55,alpha:0.0166},0).wait(1).to({y:362.8,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:157,y:426,alpha:0},0).to({_off:true},69).wait(98));

	// second_prize_mc
	this.instance_6 = new lib.second_prize_mc();
	this.instance_6.setTransform(164,254);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({regX:-1.4,regY:-33.8,x:162.6,y:220.1,alpha:0.0037},0).wait(1).to({y:219.75,alpha:0.0167},0).wait(1).to({y:219.1,alpha:0.0435},0).wait(1).to({y:217.9,alpha:0.0919},0).wait(1).to({y:215.65,alpha:0.1816},0).wait(1).to({y:212.05,alpha:0.3248},0).wait(1).to({y:208,alpha:0.4878},0).wait(1).to({y:204.3,alpha:0.6345},0).wait(1).to({y:201.45,alpha:0.7499},0).wait(1).to({y:199.2,alpha:0.8388},0).wait(1).to({y:197.45,alpha:0.9088},0).wait(1).to({y:196.25,alpha:0.9564},0).wait(1).to({y:195.6,alpha:0.9834},0).wait(1).to({y:195.25,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:164,y:229,alpha:1},0).wait(69).to({regX:-1.4,regY:-33.8,x:162.6,y:195.2,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:0.9081},0).wait(1).to({alpha:0.8184},0).wait(1).to({alpha:0.6752},0).wait(1).to({alpha:0.5122},0).wait(1).to({alpha:0.3655},0).wait(1).to({alpha:0.2501},0).wait(1).to({alpha:0.1612},0).wait(1).to({alpha:0.0912},0).wait(1).to({alpha:0.0436},0).wait(1).to({alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:164,y:229,alpha:0},0).wait(74).to({regX:-1.4,regY:-33.8,scaleX:0.9986,scaleY:0.9986,x:162.3,y:195.6,alpha:0.0032},0).wait(1).to({scaleX:0.9938,scaleY:0.9938,x:161.45,y:197,alpha:0.0145},0).wait(1).to({scaleX:0.9841,scaleY:0.9841,x:159.65,y:199.9,alpha:0.0371},0).wait(1).to({scaleX:0.967,scaleY:0.967,x:156.55,y:204.95,alpha:0.077},0).wait(1).to({scaleX:0.9371,scaleY:0.9371,x:151.1,y:213.85,alpha:0.1467},0).wait(1).to({scaleX:0.8854,scaleY:0.8854,x:141.7,y:229.1,alpha:0.2672},0).wait(1).to({scaleX:0.8214,scaleY:0.8214,x:130,y:248.1,alpha:0.4164},0).wait(1).to({scaleX:0.7578,scaleY:0.7578,x:118.4,y:266.95,alpha:0.5648},0).wait(1).to({scaleX:0.7046,scaleY:0.7046,x:108.7,y:282.7,alpha:0.6887},0).wait(1).to({scaleX:0.663,scaleY:0.663,x:101.1,y:295.05,alpha:0.7859},0).wait(1).to({scaleX:0.6301,scaleY:0.6301,x:95.1,y:304.75,alpha:0.8625},0).wait(1).to({scaleX:0.6042,scaleY:0.6042,x:90.4,y:312.45,alpha:0.9229},0).wait(1).to({scaleX:0.5871,scaleY:0.5871,x:87.3,y:317.5,alpha:0.9628},0).wait(1).to({scaleX:0.5773,scaleY:0.5773,x:85.5,y:320.4,alpha:0.9857},0).wait(1).to({scaleX:0.5725,scaleY:0.5725,x:84.65,y:321.85,alpha:0.9969},0).wait(1).to({regX:0.5,regY:0.5,scaleX:0.5712,scaleY:0.5712,x:85.25,y:341.6,alpha:1},0).wait(78));

	// bonus_prizes
	this.instance_7 = new lib.bonus_prizes_mc();
	this.instance_7.setTransform(159.2,436.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).wait(1).to({regX:1.1,regY:-70.6,x:160.3,y:365.8,alpha:0.0037},0).wait(1).to({y:365.45,alpha:0.0167},0).wait(1).to({y:364.8,alpha:0.0435},0).wait(1).to({y:363.6,alpha:0.0919},0).wait(1).to({y:361.35,alpha:0.1816},0).wait(1).to({y:357.75,alpha:0.3248},0).wait(1).to({y:353.7,alpha:0.4878},0).wait(1).to({y:350,alpha:0.6345},0).wait(1).to({y:347.15,alpha:0.7499},0).wait(1).to({y:344.9,alpha:0.8388},0).wait(1).to({y:343.15,alpha:0.9088},0).wait(1).to({y:341.95,alpha:0.9564},0).wait(1).to({y:341.3,alpha:0.9834},0).wait(1).to({y:340.95,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:159.2,y:411.5,alpha:1},0).wait(69).to({regX:1.1,regY:-70.6,x:160.3,y:340.95,alpha:0.9963},0).wait(1).to({y:341.25,alpha:0.9833},0).wait(1).to({y:341.8,alpha:0.9565},0).wait(1).to({y:342.8,alpha:0.9081},0).wait(1).to({y:344.7,alpha:0.8184},0).wait(1).to({y:347.7,alpha:0.6752},0).wait(1).to({y:351.1,alpha:0.5122},0).wait(1).to({y:354.2,alpha:0.3655},0).wait(1).to({y:356.6,alpha:0.2501},0).wait(1).to({y:358.5,alpha:0.1612},0).wait(1).to({y:359.95,alpha:0.0912},0).wait(1).to({y:360.95,alpha:0.0436},0).wait(1).to({y:361.55,alpha:0.0166},0).wait(1).to({y:361.8,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:159.2,y:432.5,alpha:0},0).to({_off:true},152).wait(98));

	// promo
	this.instance_8 = new lib.promo_mc();
	this.instance_8.setTransform(439.95,224,0.8327,0.8327);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:0.3,regY:-35.1,x:439.15,y:194.75,alpha:0.0037},0).wait(1).to({x:435.5,alpha:0.0167},0).wait(1).to({x:428,alpha:0.0435},0).wait(1).to({x:414.45,alpha:0.0919},0).wait(1).to({x:389.35,alpha:0.1816},0).wait(1).to({x:349.25,alpha:0.3248},0).wait(1).to({x:303.6,alpha:0.4878},0).wait(1).to({x:262.55,alpha:0.6345},0).wait(1).to({x:230.25,alpha:0.7499},0).wait(1).to({x:205.35,alpha:0.8388},0).wait(1).to({x:185.75,alpha:0.9088},0).wait(1).to({x:172.45,alpha:0.9564},0).wait(1).to({x:164.85,alpha:0.9834},0).wait(1).to({x:161.25,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:160,y:224,alpha:1},0).wait(83).to({alpha:0},15).wait(157).to({regX:0.3,regY:-35.1,scaleX:0.8321,scaleY:0.8321,x:160.25,y:194.7,alpha:0.0032},0).wait(1).to({scaleX:0.8299,scaleY:0.8299,y:194.6,alpha:0.0145},0).wait(1).to({scaleX:0.8254,scaleY:0.8254,x:160.3,y:194.45,alpha:0.0371},0).wait(1).to({scaleX:0.8175,scaleY:0.8175,x:160.35,y:194.05,alpha:0.077},0).wait(1).to({scaleX:0.8037,scaleY:0.8037,x:160.4,y:193.4,alpha:0.1467},0).wait(1).to({scaleX:0.7798,scaleY:0.7798,x:160.6,y:192.3,alpha:0.2672},0).wait(1).to({scaleX:0.7502,scaleY:0.7502,x:160.8,y:190.9,alpha:0.4164},0).wait(1).to({scaleX:0.7208,scaleY:0.7207,x:160.95,y:189.55,alpha:0.5648},0).wait(1).to({scaleX:0.6962,scaleY:0.6962,x:161.1,y:188.4,alpha:0.6887},0).wait(1).to({scaleX:0.6769,scaleY:0.6769,x:161.25,y:187.55,alpha:0.7859},0).wait(1).to({scaleX:0.6618,scaleY:0.6617,x:161.35,y:186.8,alpha:0.8625},0).wait(1).to({scaleX:0.6498,scaleY:0.6497,x:161.45,y:186.3,alpha:0.9229},0).wait(1).to({scaleX:0.6419,scaleY:0.6418,x:161.5,y:185.9,alpha:0.9628},0).wait(1).to({scaleX:0.6373,scaleY:0.6373,y:185.7,alpha:0.9857},0).wait(1).to({scaleX:0.6351,scaleY:0.6351,x:161.55,y:185.6,alpha:0.9969},0).wait(1).to({regY:0.7,scaleX:0.6345,scaleY:0.6344,x:161.4,y:207.9,alpha:1},0).wait(78));

	// background
	this.instance_9 = new lib.background_mc();
	this.instance_9.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(363));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(160,240,372,240);
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
		{src:"images/bigwinpngcopy.png", id:"bigwinpngcopy"},
		{src:"images/cta.png", id:"cta"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/promo.png", id:"promo"}
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