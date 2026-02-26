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
	this.shape.graphics.f("#FFFFFF").s().p("AAGBkIAAhPIgLAAIAABPIguAAIAAjHIAuAAIAABLIALAAIAAhLIAuAAIAADHg");
	this.shape.setTransform(92.975,-49.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWBkIAAiaIgcAAIAAgtIBlAAIAAAtIgcAAIAACag");
	this.shape_1.setTransform(81.975,-49.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABkIgMh+IAAB+IguAAIAAjHIA7AAIAMB7IAAh7IAuAAIAADHg");
	this.shape_2.setTransform(70.075,-49.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAABnQgZAAgOgOQgNgOAAgbIAAhfQAAgbANgOQAOgOAZAAIAAAAQAbAAANAOQANAPAAAaIAABfQAAAcgOANQgNAOgZAAgAgFgyIAABmQAAAIAFAAIAAAAQAGAAAAgIIAAhmQAAgJgGAAQgFAAAAAJg");
	this.shape_3.setTransform(57.325,-49.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhBkIAAiVIgDAXIgNB+IgiAAIgNh+IgCgXIAACVIgtAAIAAjHIBGAAIAHBfIAAAOIABgOIAHhfIBGAAIAADHg");
	this.shape_4.setTransform(42.8,-49.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxBeIAMgqQAUAIAIAAQAPAAAAgNIAAgBQAAgGgEgGQgDgGgKgKIgIgIQgPgNgGgMQgGgMAAgTIAAgBQAAgaAOgOQANgPAXAAQATAAAXAJIgMAnQgPgFgGAAQgPAAAAANIAAABIAAADIACADIABAEIAEAEIAEAEIAEAFIAKAKQAOANAHAMQAGAMAAAUIAAAAQAAAbgOAQQgPAPgWAAQgYAAgYgJg");
	this.shape_5.setTransform(25.825,-49.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWBkIAAjHIAtAAIAADHg");
	this.shape_6.setTransform(17.6,-49.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAGBkIAAhPIgLAAIAABPIguAAIAAjHIAuAAIAABLIALAAIAAhLIAuAAIAADHg");
	this.shape_7.setTransform(8.575,-49.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWBkIAAiaIgcAAIAAgtIBlAAIAAAtIgcAAIAACag");
	this.shape_8.setTransform(-2.425,-49.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgxBeIAMgqQAUAIAIAAQAPAAAAgNIAAgBQAAgGgEgGQgDgGgKgKIgIgIQgPgNgGgMQgGgMAAgTIAAgBQAAgaAOgOQANgPAXAAQATAAAXAJIgMAnQgPgFgGAAQgPAAAAANIAAABIAAADIACADIABAEIAEAEIAEAEIAEAFIAKAKQAOANAHAMQAGAMAAAUIAAAAQAAAbgOAQQgPAPgWAAQgYAAgYgJg");
	this.shape_9.setTransform(-16.075,-49.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAIBkIgPhMIgDAAIAABMIguAAIAAjHIAxAAQAfAAAMAOQANAOAAAbIAAAPQAAAdgPAMIAXBYgAgKgMIACAAQAGAAACgDQACgDAAgGIAAgUQAAgGgCgDQgCgDgGAAIgCAAg");
	this.shape_10.setTransform(-27.75,-49.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgrBkIAAjHIBXAAIAAArIgqAAIAAAiIAiAAIAAAqIgiAAIAAAmIAqAAIAAAqg");
	this.shape_11.setTransform(-38.875,-49.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAABkIgMh+IAAB+IguAAIAAjHIA7AAIAMB7IAAh7IAuAAIAADHg");
	this.shape_12.setTransform(-50.725,-49.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAABkIgMh+IAAB+IguAAIAAjHIA7AAIAMB7IAAh7IAuAAIAADHg");
	this.shape_13.setTransform(-64.025,-49.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWBkIAAjHIAtAAIAADHg");
	this.shape_14.setTransform(-73.75,-49.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAJBkIgJh3IgIB3Ig7AAIgPjHIAxAAIACCZIANiZIAlAAIANCZIACiZIAxAAIgPDHg");
	this.shape_15.setTransform(-85.575,-49.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAIBkIgPhMIgDAAIAABMIguAAIAAjHIAxAAQAfAAAMAOQANAOAAAbIAAAPQAAAdgPAMIAXBYgAgKgMIACAAQAGAAACgDQACgDAAgGIAAgUQAAgGgCgDQgCgDgGAAIgCAAg");
	this.shape_16.setTransform(112.4,-78.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAPBkIgEgnIgVAAIgEAnIgtAAIAbjHIBBAAIAbDHgAAAgiIgGA0IANAAIgGg0IgBgRg");
	this.shape_17.setTransform(99.475,-78.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag0BkIAAjHIAyAAQAYAAAPAMQAOAMAAAZIAAAFQAAAQgEAJQgGAJgLAFQAXAIABAhIAAAMQAAAagPANQgOAOgYAAgAgGA5IACAAQAFAAACgDQACgCAAgGIAAgUQAAgGgCgDQgCgCgFAAIgCAAgAgGgVIADAAQAEAAACgDQACgDAAgFIAAgMQAAgGgBgDQgCgDgFAAIgDAAg");
	this.shape_18.setTransform(87.05,-78.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag0BkIAAjHIAxAAQAYAAAQAQQAQAQAAAbIAABQQAAAbgQARQgQAQgXAAgAgGA5IACAAQAFAAADgDQACgDAAgJIAAhVQgBgIgCgCQgCgDgFAAIgCAAg");
	this.shape_19.setTransform(71.7,-78.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AguBkIAAjHIAuAAIAACaIAvAAIAAAtg");
	this.shape_20.setTransform(59.975,-78.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAABnQgZAAgOgOQgNgOAAgbIAAhfQAAgbANgOQAOgOAZAAIAAAAQAbAAANAOQANAPAAAaIAABfQAAAcgOANQgNAOgZAAgAgFgyIAABmQAAAIAFAAIAAAAQAGAAAAgIIAAhmQAAgJgGAAQgFAAAAAJg");
	this.shape_21.setTransform(48.475,-78.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag0AvIAAhdQAAgaAQgQQARgPAZAAQAYAAAXANIgQAoQgMgHgOAAQgRAAABAVIAABWQAAAKAGAAQADAAACgCIAAhHIArAAIAABmQgNAIgLADQgKAEgNgBQg2AAAAg4g");
	this.shape_22.setTransform(36.775,-78.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag0BkIAAjHIAxAAQAYAAAQAQQAQAQAAAbIAABQQAAAbgQARQgQAQgYAAgAgGA5IACAAQAFAAADgDQACgDgBgJIAAhVQAAgIgCgCQgDgDgEAAIgCAAg");
	this.shape_23.setTransform(21.5,-78.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgrBkIAAjHIBXAAIAAArIgqAAIAAAiIAiAAIAAAqIgiAAIAAAmIAqAAIAAAqg");
	this.shape_24.setTransform(10.775,-78.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgrBkIAAjHIBXAAIAAArIgqAAIAAAiIAiAAIAAAqIgiAAIAAAmIAqAAIAAAqg");
	this.shape_25.setTransform(0.925,-78.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWBkIAAiaIgcAAIAAgtIBlAAIAAAtIgcAAIAACag");
	this.shape_26.setTransform(-9.525,-78.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAABkIgMh+IAAB+IguAAIAAjHIA7AAIAMB7IAAh7IAuAAIAADHg");
	this.shape_27.setTransform(-21.425,-78.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAPBkIgEgnIgVAAIgEAnIgtAAIAbjHIBBAAIAbDHgAAAgiIgGA0IANAAIgGg0IgBgRg");
	this.shape_28.setTransform(-34.575,-78.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAIBkIgPhMIgDAAIAABMIguAAIAAjHIAxAAQAfAAANAOQAMAOAAAbIAAAPQAAAdgPAMIAXBYgAgKgMIACAAQAGAAACgDQACgDAAgGIAAgUQAAgGgCgDQgCgDgGAAIgCAAg");
	this.shape_29.setTransform(-47.5,-78.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAPBkIgEgnIgVAAIgEAnIgtAAIAbjHIBBAAIAbDHgAAAgiIgGA0IANAAIgGg0IgBgRg");
	this.shape_30.setTransform(-60.425,-78.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgmBYQgOgNAAgaIAAiWIAvAAIAACXQAAAIAFAAQAGAAAAgIIAAiXIAvAAIAACWQAAAYgNAOQgOAOgaABQgXAAgPgOg");
	this.shape_31.setTransform(-73.225,-78.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag0AvIAAhdQAAgaAQgQQARgPAZAAQAYAAAXANIgQAoQgMgHgOAAQgRAAABAVIAABWQAAAKAGAAQADAAACgCIAAhHIArAAIAABmQgNAIgLADQgKAEgNgBQg2AAAAg4g");
	this.shape_32.setTransform(-85.175,-78.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgMBmIAAiVIgUAEIAAgqIBBgQIAADLg");
	this.shape_33.setTransform(-99.1,-78.575);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgxBmIAAgpQA4g/AAgiIAAgBQAAgLgFgFQgFgEgIAAQgHAAgSAFIgPgmQAVgLAeAAQAXAAAOASQAOASABAaIAAABQAAAOgFAOQgEAMgJAOIgPAWIgSAWIAtAAIAAAqg");
	this.shape_34.setTransform(-108.625,-78.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_sub_caption_mc, new cjs.Rectangle(-115.7,-94.8,236.10000000000002,67), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgRBgQgIgGAAgMQAAgKAIgGQAHgGAKAAQAMAAAHAGQAHAGAAAKQAAAMgHAGQgHAGgMAAQgKAAgHgGgAgWAiIAAiHIAtAAIAACHg");
	this.shape.setTransform(112.8,-75.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABkIgMh+IAAB+IguAAIAAjHIA7AAIAMB7IAAh7IAuAAIAADHg");
	this.shape_1.setTransform(101.375,-75.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrBkIAAjHIBXAAIAAArIgqAAIAAAiIAiAAIAAAqIgiAAIAAAmIAqAAIAAAqg");
	this.shape_2.setTransform(90.025,-75.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BkIAAjHIAxAAQAYAAAQAQQAQAQAAAbIAABQQAAAbgQARQgQAQgYAAgAgGA5IABAAQAHAAABgDQACgDAAgJIAAhVQABgIgDgCQgDgDgFAAIgBAAg");
	this.shape_3.setTransform(78.85,-75.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguBkIAAjHIAuAAIAACaIAvAAIAAAtg");
	this.shape_4.setTransform(67.125,-75.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAABnQgZAAgOgOQgNgOAAgbIAAhfQAAgbANgOQAOgOAZAAIAAAAQAbAAANAOQANAPAAAaIAABfQAAAcgOANQgNAOgZAAgAgFgyIAABmQAAAIAFAAIAAAAQAGAAAAgIIAAhmQAAgJgGAAQgFAAAAAJg");
	this.shape_5.setTransform(55.625,-75.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag0AwIAAhfQAAgaAQgOQARgPAZgBQAYAAAXANIgQAoQgMgGgOgBQgRABABATIAABXQAAAKAGAAQADAAACgCIAAhHIArAAIAABmQgNAIgLADQgKADgNAAQg2AAAAg3g");
	this.shape_6.setTransform(43.925,-75.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWBkIAAiaIgcAAIAAgtIBlAAIAAAtIgcAAIAACag");
	this.shape_7.setTransform(29.375,-75.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAABnQgZAAgOgOQgNgOAAgbIAAhfQAAgbANgOQAOgOAZAAIAAAAQAbAAANAOQANAPAAAaIAABfQAAAcgOANQgNAOgZAAgAgFgyIAABmQAAAIAFAAIAAAAQAGAAAAgIIAAhmQAAgJgGAAQgFAAAAAJg");
	this.shape_8.setTransform(18.075,-75.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag0AwIAAhfQAAgaAQgOQARgPAZgBQAYAAAXANIgQAoQgMgGgOgBQgRABABATIAABXQAAAKAGAAQADAAACgCIAAhHIArAAIAABmQgNAIgLADQgKADgNAAQg2AAAAg3g");
	this.shape_9.setTransform(6.425,-75.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWBkIAAiaIgcAAIAAgtIBlAAIAAAtIgcAAIAACag");
	this.shape_10.setTransform(-8.125,-75.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgxBeIAMgqQAUAIAIAAQAPAAAAgNIAAgBQAAgGgEgGQgDgGgKgKIgIgIQgPgNgGgMQgGgMAAgTIAAgBQAAgaAOgOQANgPAXAAQATAAAXAJIgMAnQgPgFgGAAQgPAAAAANIAAABIAAADIACADIABAEIAEAEIAEAEIAEAFIAKAKQAOANAHAMQAGAMAAAUIAAAAQAAAbgOAQQgPAPgWAAQgYAAgYgJg");
	this.shape_11.setTransform(-18.575,-75.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgmBYQgOgOAAgZIAAiVIAvAAIAACWQAAAIAFAAQAGAAAAgIIAAiWIAvAAIAACVQAAAYgNAPQgOANgaAAQgXAAgPgNg");
	this.shape_12.setTransform(-30.125,-75.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgvBZIARgnQALAGAJAAQAGAAAEgEQABgEAAgKIAAiLIAvAAIAACTQAAAagOAPQgOAPgXAAQgVAAgXgNg");
	this.shape_13.setTransform(-42.25,-75.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAGBkIAAhPIgLAAIAABPIguAAIAAjHIAuAAIAABLIALAAIAAhLIAuAAIAADHg");
	this.shape_14.setTransform(-56.075,-75.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAHBnQgcAAgOgPQgPgQAAgeIAAhUQAAgeAPgPQAOgQAcAAIAAAAQAWAAASAJIgRAlQgHgDgIABIgBAAQgRAAAAAVIAABMQAAAKAFAHQAGAFAJAAIAAAAQAIAAAJgDIARAlQgUAKgYgBg");
	this.shape_15.setTransform(-66.675,-75.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAIBkIgPhMIgDAAIAABMIguAAIAAjHIAxAAQAfAAANAOQAMAOAAAbIAAAPQAAAdgPAMIAXBYgAgKgMIACAAQAGAAACgDQACgDAAgGIAAgUQAAgGgCgDQgCgDgGAAIgCAAg");
	this.shape_16.setTransform(-78.9,-75.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAPBkIgEgnIgVAAIgEAnIgtAAIAbjHIBBAAIAbDHgAAAgiIgGA0IANAAIgGg0IgBgRg");
	this.shape_17.setTransform(-91.825,-75.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAgBkIAAiVIgCAXIgNB+IghAAIgOh+IgCgXIAACVIgtAAIAAjHIBGAAIAHBfIAAAOIABgOIAHhfIBFAAIAADHg");
	this.shape_18.setTransform(-106.8,-75.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bonus_prizes_mc, new cjs.Rectangle(-116.8,-91.9,235.89999999999998,38.400000000000006), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(264));

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
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAuIAAhbIAXAAQAKAAAIAHQAHAIABAMIAAAkQgBANgHAIQgIAHgKAAgAgCAaIABAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAIABgGIAAgmIgBgFIgCgBIgBAAg");
	this.shape_15.setTransform(185.1,464.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAuIAAhbIAnAAIAAAUIgUAAIAAAPIARAAIAAATIgRAAIAAASIAUAAIAAATg");
	this.shape_16.setTransform(180.15,464.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAGAuIgBgSIgKAAIgBASIgUAAIALhbIAeAAIANBbgAAAgPIgCAYIAFAAIgCgYIgBgIg");
	this.shape_17.setTransform(174.8,464.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAuIgFg5IAAA5IgVAAIAAhbIAbAAIAFA4IAAg4IAVAAIAABbg");
	this.shape_18.setTransform(167.275,464.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKAuIAAhbIAVAAIAABbg");
	this.shape_19.setTransform(162.8,464.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWArIAGgTQAIADAFAAQAGAAAAgFIAAgBQAAgDgCgCQgBgDgEgEIgFgFQgGgFgDgGQgDgFAAgIIAAgBQAAgMAHgHQAGgGAKAAQAJAAAKADIgFASIgKgBQgHgBAAAHIABACIAAABIABABIABACIACACIACADIAFAEQAGAFADAGQADAGAAAIIAAABQAAANgHAGQgGAIgKgBQgLABgLgFg");
	this.shape_20.setTransform(157.5,464.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTAuIAAhbIAnAAIAAAUIgTAAIAAAPIAQAAIAAATIgQAAIAAASIATAAIAAATg");
	this.shape_21.setTransform(152.95,464.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXAuIAAgSIAZg1IgWAAIAAgUIAsAAIAAASIgZA1IAZAAIAAAUg");
	this.shape_22.setTransform(147.95,464.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAuIAAhbIAVAAIAABbg");
	this.shape_23.setTransform(143.9,464.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAEAuIgHgjIgBAAIAAAjIgVAAIAAhbIAWAAQAOAAAGAGQAGAHAAAMIAAAHQAAANgHAGIAKAogAgEgFIABAAIADgBIABgFIAAgJIgBgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_24.setTransform(139.525,464.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXAuIAAhbIAWAAQAOAAAGAGQAFAHAAAMIAAAIQAAANgGAGQgHAFgMAAIgBAAIAAAigAgCgEIABAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAABAAIABgEIAAgLIgBgEQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_25.setTransform(133.775,464.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIA7IAAh1IARAAIAAB1g");
	this.shape_26.setTransform(124.875,466.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJAuIAAgaIgShBIAWAAIAFAfIAHgfIAVAAIgRBBIAAAag");
	this.shape_27.setTransform(115.775,464.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAuIAAhbIAVAAIAABGIAWAAIAAAVg");
	this.shape_28.setTransform(110.25,464.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXAuIAAhbIAWAAQAOAAAGAGQAFAHAAAMIAAAIQAAANgGAGQgHAFgMAAIgBAAIAAAigAgCgEIABAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAIABgEIAAgLIgBgEQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_29.setTransform(104.925,464.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgXAuIAAhbIAWAAQAOAAAGAGQAFAHAAAMIAAAIQAAANgGAGQgHAFgMAAIgBAAIAAAigAgCgEIABAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAIABgEIAAgLIgBgEQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_30.setTransform(99.375,464.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAHAuIgCgSIgKAAIgBASIgUAAIALhbIAeAAIAMBbgAAAgPIgCAYIAFAAIgDgYIAAgIg");
	this.shape_31.setTransform(93.65,464.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgWArIAFgTQAKADAEAAQAGAAAAgFIAAgBQAAgDgCgCQgBgDgEgEIgFgFQgGgFgDgGQgDgFAAgIIAAgBQAAgMAHgHQAGgGAKAAQAIAAALADIgFASIgKgBQgHgBAAAHIABACIAAABIABABIABACIACACIACADIAFAEQAGAFADAGQADAGAAAIIAAABQAAANgHAGQgGAIgKgBQgLABgLgFg");
	this.shape_32.setTransform(86.75,464.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFAUIgEgnIATAAIgEAng");
	this.shape_33.setTransform(82.9,462.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgQAoQgGgHAAgNIAAgnQAAgOAGgHQAHgHAMAAQAKAAAJAEIgIARIgHgBQgIAAAAAKIAAAjQAAAEACADQADADAEAAIAAAAQAEAAAEgCIAHARQgJAFgLAAQgMAAgHgIg");
	this.shape_34.setTransform(79.225,464.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZAqQgHgGAAgNIAAgLQABgHADgEQADgCAFgBQgFgJAAgGIAAgGQAAgNAFgFQAEgGANABQAIAAAEAEQAEAGAAANIAAAGQAAAOgNADIAJALQgCgFABgGIARAAIAAAFIAAAFIAAAFIgBADIAAADIgCAFIgCACIANASIgWAAIgCgDQgGAFgGgBQgPAAgHgFgAgLAPIAAAFQAAAGACABQACADAFAAIACgBIgLgRgAgGgbIgBABIAAACIAAALIAAADQAFgCAAgFIAAgHIAAgDIgCAAIgCAAg");
	this.shape_35.setTransform(72.95,464.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJAuIAAhGIgOAAIAAgVIAuAAIAAAVIgMAAIAABGg");
	this.shape_36.setTransform(66.9,464.825);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIA7IAAh1IARAAIAAB1g");
	this.shape_37.setTransform(58.375,466.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgWApIAHgRQAFAEAHAAQAEAAAAgIIAAgIQABgLgKAAQgEAAgGAEIAFgzIAjAAIAAATIgOAAIgBAMQAIACAEAFQAEAHABALIAAALQgBAMgGAHQgGAHgLAAQgMAAgKgGgAAAgOIABAAIgBAAIAAAAg");
	this.shape_38.setTransform(49.3,464.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgQApQgHgHAAgNIAAgFQAAgKAGgGQgFgGAAgJIAAgFQABgMAGgIQAGgGAJAAQAKAAAGAGQAGAIAAAMIAAAFQAAAJgDAGQAFAGAAAKIAAAFQAAANgGAHQgHAGgLAAQgKAAgGgGgAgCALIAAAOQAAABABAAQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBIAAgOQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABgAgCgYIAAAQIABACIABABIACgBIABgCIAAgQQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgBABAAAAg");
	this.shape_39.setTransform(43.75,464.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgWAvIAAgSQAZgeAAgPIAAgBQAAgEgCgCQgCgDgEAAIgLADIgHgRQAKgGANAAQALAAAGAIQAHAIAAAMIAAABQAAAGgCAHQgCAFgEAGIgIAKIgIAKIAVAAIAAAUg");
	this.shape_40.setTransform(38.425,464.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgWArIAFgTQAKADADAAQAHAAAAgFIAAgBQAAgDgCgCQgBgDgFgEIgDgFQgHgFgCgGQgDgFAAgIIAAgBQAAgMAFgHQAHgGAKAAQAIAAALADIgFASIgKgBQgGgBAAAHIAAACIAAABIABABIABACIACACIACADIAEAEQAHAFADAGQADAGAAAIIAAABQAAANgGAGQgHAIgKgBQgLABgLgFg");
	this.shape_41.setTransform(31.9,464.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgUAuIAAhbIAoAAIAAAUIgUAAIAAAPIAQAAIAAATIgQAAIAAASIAVAAIAAATg");
	this.shape_42.setTransform(27.35,464.825);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgKAuIAAhbIAUAAIAABbg");
	this.shape_43.setTransform(23.55,464.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAEAuIgHgjIgBAAIAAAjIgVAAIAAhbIAWAAQAOAAAGAGQAGAHAAAMIAAAHQAAANgHAGIAKAogAgEgFIABAAIADgBIABgFIAAgJIgBgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_44.setTransform(19.225,464.825);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgTAuIAAhbIAnAAIAAAUIgUAAIAAAPIARAAIAAATIgRAAIAAASIAUAAIAAATg");
	this.shape_45.setTransform(14.1,464.825);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgWArIAGgTQAJADADAAQAHAAAAgFIAAgBQAAgDgCgCQgBgDgFgEIgDgFQgHgFgCgGQgDgFgBgIIAAgBQABgMAFgHQAHgGAKAAQAIAAALADIgFASIgKgBQgHgBABAHIAAACIAAABIABABIABACIACACIACADIAEAEQAHAFADAGQADAGAAAIIAAABQAAANgGAGQgHAIgKgBQgLABgLgFg");
	this.shape_46.setTransform(9.3,464.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).wait(264));

	// logo
	this.instance_2 = new lib.bt_logo();
	this.instance_2.setTransform(160,76.5,0.8182,0.8182);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(264));

	// other_prizes_mc
	this.instance_3 = new lib.other_prizes_mc();
	this.instance_3.setTransform(160,235.5,1,1,0,0,0,110,71.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(98).to({_off:false},0).wait(1).to({regX:108.9,regY:64.6,scaleX:0.999,scaleY:0.999,x:159.15,y:228.5,alpha:0.0037},0).wait(1).to({scaleX:0.9954,scaleY:0.9954,x:160.15,y:228.15,alpha:0.0167},0).wait(1).to({scaleX:0.988,scaleY:0.988,x:162.2,y:227.55,alpha:0.0435},0).wait(1).to({scaleX:0.9747,scaleY:0.9747,x:165.9,y:226.4,alpha:0.0919},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:172.75,y:224.25,alpha:0.1816},0).wait(1).to({scaleX:0.9106,scaleY:0.9106,x:183.65,y:220.9,alpha:0.3248},0).wait(1).to({scaleX:0.8658,scaleY:0.8658,x:196.15,y:217,alpha:0.4878},0).wait(1).to({scaleX:0.8254,scaleY:0.8254,x:207.35,y:213.5,alpha:0.6345},0).wait(1).to({scaleX:0.7936,scaleY:0.7936,x:216.15,y:210.75,alpha:0.7499},0).wait(1).to({scaleX:0.7692,scaleY:0.7692,x:222.9,y:208.65,alpha:0.8388},0).wait(1).to({scaleX:0.7499,scaleY:0.7499,x:228.25,y:207,alpha:0.9088},0).wait(1).to({scaleX:0.7368,scaleY:0.7368,x:231.9,y:205.85,alpha:0.9564},0).wait(1).to({scaleX:0.7294,scaleY:0.7294,x:234,y:205.2,alpha:0.9834},0).wait(1).to({scaleX:0.7258,scaleY:0.7258,x:235,y:204.9,alpha:0.9964},0).wait(1).to({regX:110,regY:71.5,scaleX:0.7248,scaleY:0.7248,x:236.05,y:209.85,alpha:1},0).wait(136).to({regX:108.9,regY:64.6,scaleX:0.7243,scaleY:0.7243,x:235.25,y:205.3},0).wait(1).to({scaleX:0.7222,scaleY:0.7222,x:235.4,y:206.8},0).wait(1).to({scaleX:0.7181,scaleY:0.7181,x:235.7,y:209.95},0).wait(1).to({scaleX:0.7107,scaleY:0.7107,x:236.25,y:215.65},0).wait(1).to({scaleX:0.6969,scaleY:0.6969,x:237.25,y:226.15},0).wait(1).to({scaleX:0.6748,scaleY:0.6748,x:238.85,y:243},0).wait(1).to({scaleX:0.6497,scaleY:0.6497,x:240.65,y:262.1},0).wait(1).to({scaleX:0.6271,scaleY:0.6271,x:242.3,y:279.35},0).wait(1).to({scaleX:0.6094,scaleY:0.6094,x:243.55,y:292.9},0).wait(1).to({scaleX:0.5957,scaleY:0.5957,x:244.55,y:303.4},0).wait(1).to({scaleX:0.5849,scaleY:0.5849,x:245.35,y:311.6},0).wait(1).to({scaleX:0.5776,scaleY:0.5776,x:245.9,y:317.15},0).wait(1).to({scaleX:0.5734,scaleY:0.5734,x:246.2,y:320.35},0).wait(1).to({scaleX:0.5714,scaleY:0.5714,x:246.35,y:321.85},0).wait(1).to({regX:110,regY:71.5,scaleX:0.5708,scaleY:0.5708,x:247.05,y:326.25},0).wait(1));

	// second_prize_mc
	this.instance_4 = new lib.second_prize_mc();
	this.instance_4.setTransform(164,254);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(98).to({_off:false},0).wait(1).to({regX:-1.4,regY:-33.8,scaleX:0.999,scaleY:0.999,x:162.3,y:220.15,alpha:0.0037},0).wait(1).to({scaleX:0.9955,scaleY:0.9955,x:161.45,y:219.9,alpha:0.0167},0).wait(1).to({scaleX:0.9884,scaleY:0.9884,x:159.6,y:219.5,alpha:0.0435},0).wait(1).to({scaleX:0.9755,scaleY:0.9755,x:156.4,y:218.75,alpha:0.0919},0).wait(1).to({scaleX:0.9515,scaleY:0.9515,x:150.3,y:217.3,alpha:0.1816},0).wait(1).to({scaleX:0.9132,scaleY:0.9132,x:140.6,y:215,alpha:0.3248},0).wait(1).to({scaleX:0.8697,scaleY:0.8697,x:129.6,y:212.4,alpha:0.4878},0).wait(1).to({scaleX:0.8305,scaleY:0.8305,x:119.7,y:210.05,alpha:0.6345},0).wait(1).to({scaleX:0.7997,scaleY:0.7997,x:111.9,y:208.2,alpha:0.7499},0).wait(1).to({scaleX:0.7759,scaleY:0.7759,x:105.85,y:206.75,alpha:0.8388},0).wait(1).to({scaleX:0.7573,scaleY:0.7573,x:101.15,y:205.65,alpha:0.9088},0).wait(1).to({scaleX:0.7445,scaleY:0.7445,x:97.9,y:204.9,alpha:0.9564},0).wait(1).to({scaleX:0.7373,scaleY:0.7373,x:96.05,y:204.5,alpha:0.9834},0).wait(1).to({scaleX:0.7338,scaleY:0.7338,x:95.15,y:204.25,alpha:0.9964},0).wait(1).to({regX:0,regY:0,scaleX:0.7329,scaleY:0.7329,x:96,y:229,alpha:1},0).wait(136).to({regX:-1.4,regY:-33.8,scaleX:0.7323,scaleY:0.7323,x:94.9,y:204.65},0).wait(1).to({scaleX:0.7302,scaleY:0.7302,x:94.8,y:206.15},0).wait(1).to({scaleX:0.7259,scaleY:0.7259,x:94.5,y:209.3},0).wait(1).to({scaleX:0.718,scaleY:0.718,x:94,y:215.05},0).wait(1).to({scaleX:0.7035,scaleY:0.7035,x:93,y:225.6},0).wait(1).to({scaleX:0.6804,scaleY:0.6804,x:91.5,y:242.55},0).wait(1).to({scaleX:0.654,scaleY:0.654,x:89.8,y:261.8},0).wait(1).to({scaleX:0.6303,scaleY:0.6303,x:88.25,y:279.1},0).wait(1).to({scaleX:0.6116,scaleY:0.6116,x:87.05,y:292.75},0).wait(1).to({scaleX:0.5972,scaleY:0.5972,x:86.05,y:303.2},0).wait(1).to({scaleX:0.5859,scaleY:0.5859,x:85.35,y:311.45},0).wait(1).to({scaleX:0.5782,scaleY:0.5782,x:84.85,y:317.05},0).wait(1).to({scaleX:0.5738,scaleY:0.5738,x:84.55,y:320.25},0).wait(1).to({scaleX:0.5717,scaleY:0.5717,x:84.4,y:321.85},0).wait(1).to({regX:0.5,regY:0.5,scaleX:0.5712,scaleY:0.5712,x:85.25,y:341.6},0).wait(1));

	// sub_caption
	this.instance_5 = new lib.daily_sub_caption_mc();
	this.instance_5.setTransform(157.2,425.65);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:2.1,regY:-64.2,x:159.25,y:361.35,alpha:0.0037},0).wait(1).to({y:361.1,alpha:0.0167},0).wait(1).to({y:360.55,alpha:0.0435},0).wait(1).to({y:359.6,alpha:0.0919},0).wait(1).to({y:357.85,alpha:0.1816},0).wait(1).to({x:159.2,y:355.05,alpha:0.3248},0).wait(1).to({y:351.85,alpha:0.4878},0).wait(1).to({x:159.15,y:348.95,alpha:0.6345},0).wait(1).to({y:346.7,alpha:0.7499},0).wait(1).to({x:159.1,y:344.95,alpha:0.8388},0).wait(1).to({y:343.55,alpha:0.9088},0).wait(1).to({y:342.65,alpha:0.9564},0).wait(1).to({y:342.1,alpha:0.9834},0).wait(1).to({y:341.85,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:157,y:406,alpha:1},0).wait(136).to({regX:2.1,regY:-64.2,x:159.1,y:341.85,alpha:0.9963},0).wait(1).to({y:342.1,alpha:0.9833},0).wait(1).to({y:342.65,alpha:0.9565},0).wait(1).to({y:343.6,alpha:0.9081},0).wait(1).to({y:345.4,alpha:0.8184},0).wait(1).to({y:348.25,alpha:0.6752},0).wait(1).to({y:351.55,alpha:0.5122},0).wait(1).to({y:354.45,alpha:0.3655},0).wait(1).to({y:356.75,alpha:0.2501},0).wait(1).to({y:358.55,alpha:0.1612},0).wait(1).to({y:359.95,alpha:0.0912},0).wait(1).to({y:360.9,alpha:0.0436},0).wait(1).to({y:361.45,alpha:0.0166},0).wait(1).to({y:361.7,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:157,y:426,alpha:0},0).wait(1));

	// bonus_prizes
	this.instance_6 = new lib.bonus_prizes_mc();
	this.instance_6.setTransform(159.2,436.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).wait(1).to({regX:0.4,regY:-75.6,x:159.6,y:360.85,alpha:0.0037},0).wait(1).to({y:360.8,alpha:0.0167},0).wait(1).to({y:360.65,alpha:0.0435},0).wait(1).to({y:360.4,alpha:0.0919},0).wait(1).to({y:359.95,alpha:0.1816},0).wait(1).to({y:359.25,alpha:0.3248},0).wait(1).to({y:358.45,alpha:0.4878},0).wait(1).to({y:357.7,alpha:0.6345},0).wait(1).to({y:357.15,alpha:0.7499},0).wait(1).to({y:356.7,alpha:0.8388},0).wait(1).to({y:356.35,alpha:0.9088},0).wait(1).to({y:356.1,alpha:0.9564},0).wait(1).to({y:355.95,alpha:0.9834},0).wait(1).to({y:355.9,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:159.2,y:431.5,alpha:1},0).wait(69).to({regX:0.4,regY:-75.6,x:159.6,y:355.9,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({alpha:0.9565},0).wait(1).to({y:355.95,alpha:0.9081},0).wait(1).to({y:356.05,alpha:0.8184},0).wait(1).to({y:356.2,alpha:0.6752},0).wait(1).to({y:356.35,alpha:0.5122},0).wait(1).to({y:356.5,alpha:0.3655},0).wait(1).to({y:356.6,alpha:0.2501},0).wait(1).to({y:356.7,alpha:0.1612},0).wait(1).to({y:356.8,alpha:0.0912},0).wait(1).to({y:356.85,alpha:0.0436},0).wait(1).to({alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:159.2,y:432.5,alpha:0},0).wait(151));

	// promo
	this.instance_7 = new lib.promo_mc();
	this.instance_7.setTransform(439.95,254,0.8327,0.8327);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0.3,regY:-35.1,x:439.15,y:224.75,alpha:0.0037},0).wait(1).to({x:435.5,alpha:0.0167},0).wait(1).to({x:428,alpha:0.0435},0).wait(1).to({x:414.45,alpha:0.0919},0).wait(1).to({x:389.35,alpha:0.1816},0).wait(1).to({x:349.25,alpha:0.3248},0).wait(1).to({x:303.6,alpha:0.4878},0).wait(1).to({x:262.55,alpha:0.6345},0).wait(1).to({x:230.25,alpha:0.7499},0).wait(1).to({x:205.35,alpha:0.8388},0).wait(1).to({x:185.75,alpha:0.9088},0).wait(1).to({x:172.45,alpha:0.9564},0).wait(1).to({x:164.85,alpha:0.9834},0).wait(1).to({x:161.25,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:160,y:254,alpha:1},0).wait(83).to({y:224,alpha:0},15).wait(136).to({regX:0.3,regY:-35.1,scaleX:0.832,scaleY:0.832,x:160.25,y:194.75,alpha:0.0037},0).wait(1).to({scaleX:0.8294,scaleY:0.8294,alpha:0.0167},0).wait(1).to({scaleX:0.8241,scaleY:0.8241,x:160.3,alpha:0.0435},0).wait(1).to({scaleX:0.8145,scaleY:0.8145,x:160.35,y:194.8,alpha:0.0919},0).wait(1).to({scaleX:0.7968,scaleY:0.7967,x:160.45,y:194.9,alpha:0.1816},0).wait(1).to({scaleX:0.7684,scaleY:0.7683,x:160.65,y:195.05,alpha:0.3248},0).wait(1).to({scaleX:0.7361,scaleY:0.736,x:160.85,y:195.15,alpha:0.4878},0).wait(1).to({scaleX:0.707,scaleY:0.7069,x:161.05,y:195.3,alpha:0.6345},0).wait(1).to({scaleX:0.6841,scaleY:0.684,x:161.2,y:195.35,alpha:0.7499},0).wait(1).to({scaleX:0.6665,scaleY:0.6664,x:161.3,y:195.45,alpha:0.8388},0).wait(1).to({scaleX:0.6526,scaleY:0.6525,x:161.4,y:195.5,alpha:0.9088},0).wait(1).to({scaleX:0.6432,scaleY:0.6431,x:161.45,y:195.55,alpha:0.9564},0).wait(1).to({scaleX:0.6378,scaleY:0.6377,x:161.5,alpha:0.9834},0).wait(1).to({scaleX:0.6352,scaleY:0.6351,x:161.55,alpha:0.9964},0).wait(1).to({regY:0.7,scaleX:0.6345,scaleY:0.6344,x:161.4,y:217.9,alpha:1},0).wait(1));

	// background
	this.instance_8 = new lib.background_mc();
	this.instance_8.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(264));

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