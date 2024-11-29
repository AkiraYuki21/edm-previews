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
	this.instance.setTransform(-296,-159,1.5317,1.5317);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-296,-159,591.3,318.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgTCcQgJgEgGgIQgFgIgBgNQABgQALgKQAMgJAQAAQASAAALAJQAMAKAAAQQAAANgGAIQgGAIgJAEQgJAEgLAAQgKAAgJgEgAgjA2IAAjVIBHAAIAADVg");
	this.shape.setTransform(170.725,-12.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9CNQgWgXABgrIAAiVQAAgbAMgUQAMgTAVgLQAVgLAaAAQASABATAFQAUAFARAJIgaA+QgJgFgKgCQgLgCgKgBQgOABgGAHQgHAIAAAQIAACJQAAAJADADQADADAEABIAGgBIADgBIAAhxIBEAAIAACgQgNAHgLAFQgMAFgMADQgMACgPAAQgrABgVgWg");
	this.shape_1.setTransform(154.4494,-12.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjCdIAAk6IBHAAIAAE6g");
	this.shape_2.setTransform(140.125,-12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhTCdIAAk6IBPAAQAYABATAHQAUAIALARQALARAAAcIAAAIQAAAXgIAPQgHAQgSAIQASAGAKAPQAIAQAAAbIAAATQAAAbgKATQgKASgTAKQgSAJgZAAgAgLBZIAEAAQAJAAADgFQADgDAAgJIAAgfQAAgJgDgEQgDgFgJAAIgEAAgAgLgiIAGAAQAIAAADgFQADgEAAgJIAAgSQAAgJgDgFQgDgEgIAAIgGAAg");
	this.shape_3.setTransform(125.925,-12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAACdIgUjGIAADGIhIAAIAAk6IBeAAIATDCIAAjCIBIAAIAAE6g");
	this.shape_4.setTransform(100.775,-12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjCdIAAk6IBHAAIAAE6g");
	this.shape_5.setTransform(85.525,-12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAOCdIgOi8IgNC8IhdAAIgXk6IBMAAIAEDxIAUjxIA6AAIAVDxIADjxIBNAAIgYE6g");
	this.shape_6.setTransform(66.95,-12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEE400").s().p("Ag8BCIAqiDIBPAAIg8CDg");
	this.shape_7.setTransform(40.725,3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEE400").s().p("AANCdIgYh4IgFAAIAAB4IhJAAIAAk6IBOAAQAiAAAUAMQATAKAIAUQAIAUAAAZIAAAYQAAAYgHAQQgGAQgLAJIAkCKgAgQgUIADAAQAKAAADgEQADgEAAgLIAAgfQAAgKgDgEQgDgEgKAAIgDAAg");
	this.shape_8.setTransform(25.6,-12.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEE400").s().p("AhFCdIAAk6ICKAAIAABEIhCAAIAAA2IA2AAIAABCIg2AAIAAA8IBDAAIAABCg");
	this.shape_9.setTransform(8.125,-12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEE400").s().p("AhTCdIAAk6IBPAAQAYABATAHQAUAIALARQALARAAAcIAAAIQAAAXgIAPQgHAQgSAIQASAGAKAPQAIAQAAAbIAAATQAAAbgKATQgKASgTAKQgSAJgZAAgAgLBZIAEAAQAJAAADgFQADgDAAgJIAAgfQAAgJgDgEQgDgFgJAAIgEAAgAgLgiIAGAAQAIAAADgFQADgEAAgJIAAgSQAAgJgDgFQgDgEgIAAIgGAAg");
	this.shape_10.setTransform(-9.425,-12.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEE400").s().p("AA0CdIAAjrIgEAkIgVDHIg2AAIgVjHIgDgkIAADrIhGAAIAAk6IBuAAIAKCWIABAXIABgXIAMiWIBtAAIAAE6g");
	this.shape_11.setTransform(-32.35,-12.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEE400").s().p("AhFCdIAAk6ICKAAIAABEIhCAAIAAA2IA2AAIAABCIg2AAIAAA8IBDAAIAABCg");
	this.shape_12.setTransform(-53.075,-12.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEE400").s().p("AAKCiQgrAAgXgXQgXgZAAguIAAiGQAAgvAXgYQAXgYArgBIABAAQASABAPADQAQADAOAHIgaA5IgNgCIgMgBIgBAAQgOAAgHAJQgGAJAAARIAAB3QAAARAIAJQAJAJAOAAIABAAIANgBIAOgFIAaA6QgQAIgRAEQgQADgUAAg");
	this.shape_13.setTransform(-68.775,-12.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEE400").s().p("AhFCdIAAk6ICKAAIAABEIhCAAIAAA2IA2AAIAABCIg2AAIAAA8IBDAAIAABCg");
	this.shape_14.setTransform(-85.325,-12.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEE400").s().p("AhTCdIAAk6IBOAAQAZAAATAMQAVALAMAUQALAWABAcIAAB/QgBAdgLAVQgMAWgUALQgVALgYAAgAgKBZIADAAQAJABAEgGQADgFAAgNIAAiHQgBgMgEgEQgEgDgHAAIgDAAg");
	this.shape_15.setTransform(-102.95,-12.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEE400").s().p("AgqCeQgSgEgRgHIAShBIAYAJQALADAJAAQANAAAGgFQAGgFAAgKIAAgCQAAgIgHgKQgFgKgQgPIgNgOQgNgMgKgMQgJgMgFgQQgFgPAAgVIAAgBQABgpAUgXQAVgXAlAAQAOAAARAEQASAEARAGIgTA9IgTgFIgOgCQgNAAgGAFQgFAFAAAKIAAABQAAAIAGAIIATAVIAHAHIAIAIQANAMAJAMQAKAMAFAQQAFAPAAAXIAAABQAAAdgKAUQgKAVgTAKQgSALgYAAQgUAAgTgEg");
	this.shape_16.setTransform(-125.675,-12.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEE400").s().p("AgjCdIAAk6IBHAAIAAE6g");
	this.shape_17.setTransform(-138.675,-12.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEE400").s().p("AAKCdIAAh7IgTAAIAAB7IhIAAIAAk6IBIAAIAAB4IATAAIAAh4IBIAAIAAE6g");
	this.shape_18.setTransform(-152.85,-12.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEE400").s().p("AgjCdIAAjzIgsAAIAAhHICfAAIAABHIgsAAIAADzg");
	this.shape_19.setTransform(-170.075,-12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-179.7,-37.2,359.5,58.800000000000004), null);


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
	this.instance.setTransform(-78,-69.3,0.5612,0.5612);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-78,-69.3,156,138.6), null);


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
	this.instance.setTransform(-139,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-139,-143.5,278,287), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgTCcQgJgEgGgIQgFgIgBgNQABgQALgKQAMgJAQAAQASAAALAJQAMAKAAAQQAAANgGAIQgGAIgJAEQgJAEgLAAQgKAAgJgEgAgjA2IAAjVIBHAAIAADVg");
	this.shape.setTransform(124.425,-1.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjCdIAAjyIgsAAIAAhIICfAAIAABIIgsAAIAADyg");
	this.shape_1.setTransform(108.725,-1.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjCdIAAk6IBHAAIAAE6g");
	this.shape_2.setTransform(95.675,-1.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXCdIgFg9IgjAAIgFA9IhHAAIAqk6IBnAAIAqE6gAALAdIgJhUIgCgaIgBAaIgJBUIAVAAg");
	this.shape_3.setTransform(80.775,-1.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANCdIgNi8IgNC8IhdAAIgXk6IBMAAIAEDyIAUjyIA6AAIAVDyIAEjyIBMAAIgYE6g");
	this.shape_4.setTransform(56.8,-1.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXCdIgFg9IgjAAIgFA9IhHAAIAqk6IBnAAIAqE6gAALAdIgJhUIgCgaIgBAaIgJBUIAVAAg");
	this.shape_5.setTransform(32.825,-1.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEE400").s().p("Ag8BCIAqiDIBPAAIg8CDg");
	this.shape_6.setTransform(10.175,14.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEE400").s().p("AgqCeQgSgEgRgHIAShBIAYAJQALADAJAAQANAAAGgFQAGgFAAgKIAAgCQAAgIgHgKQgFgKgQgPIgNgOQgNgMgKgMQgJgMgFgQQgFgPAAgVIAAgBQABgpAUgXQAVgXAlAAQAOAAARAEQASAEARAGIgTA9IgTgFIgOgCQgNAAgGAFQgFAFAAAKIAAABQAAAIAGAIIATAVIAHAHIAIAIQANAMAJAMQAKAMAFAQQAFAPAAAXIAAABQAAAdgKAUQgKAVgTAKQgSALgYAAQgUAAgTgEg");
	this.shape_7.setTransform(-2.975,-1.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEE400").s().p("AAACdIgUjGIAADGIhIAAIAAk6IBeAAIATDDIAAjDIBIAAIAAE6g");
	this.shape_8.setTransform(-21.675,-1.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEE400").s().p("AAACiQgpAAgVgWQgUgXAAgqIAAiVQAAgsAVgWQAWgVAnAAIAAAAQAqAAAUAXQAWAWgBAqIAACVQAAAsgWAWQgVAVgnAAgAgHhaQgCADAAAHIAAChQAAAHACADQADADAEAAIAAAAQAFAAACgDQADgDAAgHIAAihQAAgHgDgDQgDgDgEAAQgFAAgCADg");
	this.shape_9.setTransform(-41.7,-1.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEE400").s().p("AgjCdIAAk6IBHAAIAAE6g");
	this.shape_10.setTransform(-56.025,-1.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEE400").s().p("AhJCdIAAk6IBJAAIAADzIBKAAIAABHg");
	this.shape_11.setTransform(-69.75,-1.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEE400").s().p("AhJCdIAAk6IBJAAIAADzIBKAAIAABHg");
	this.shape_12.setTransform(-87.2,-1.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEE400").s().p("AgjCdIAAk6IBHAAIAAE6g");
	this.shape_13.setTransform(-100.475,-1.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEE400").s().p("AAzCdIAAjqIgDAkIgVDGIg1AAIgWjGIgDgkIAADqIhGAAIAAk6IBtAAIALCWIABAWIACgWIALiWIBtAAIAAE6g");
	this.shape_14.setTransform(-118.6,-1.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-133.4,-26.2,266.9,58.8), null);


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
	this.instance.setTransform(-266,36,2.1782,2.1782);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-266,36,531.5,102.4), null);


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
(lib.bigticketconversionhtml5300x250 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(284.85,238.55,0.0192,0.0192,0,0,0,495.3,461.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAsIgGgBIgFAAIgBgTIAJACIAHABIAGgBQAAAAABAAQAAAAABAAQAAgBAAAAQAAAAAAgBIADgHIgCABIgBAAQgHAAgDgCQgFgCgCgFQgDgEACgIIAJgpIATAAIgIApIAAACIACABIABAAIABAAIAEgWIAFgWIAUAAIgOBAQgCANgIAGQgGAGgMAAIgFgBg");
	this.shape.setTransform(270.1,240.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAtIAShZIATAAIgTBZg");
	this.shape_1.setTransform(266.325,237.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAtIgLgCIAThYIASAAIgFAXIADAAQAMAAAEAFQAEAHgDALIgEAUQgDANgGAGQgHAGgKgBIgLAAgAgDAbIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBABAAIACgGIAEgSQABgDgBgBQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape_2.setTransform(261.9481,237.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAvIANhAIATAAIgOBAgAABgcQgBgDAAgFQABgFADgDQADgCAEAAQAEAAACACQACADgBAFQgBAFgDADQgDACgEAAQgEAAgCgCg");
	this.shape_3.setTransform(258.17,237.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAiIgKgCIAFgTIAIACIAHABIAFAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgCgBIgCgBIgCgBQgGgDgDgEQgCgGACgIQABgFADgFQADgEAFgDQAEgDAHAAIAHABIAKACIgGASIgGgCIgGAAIgEAAIgCACIABADIADACIABABIACAAIAHAFQADACABADIAAAJQgCAHgDAFQgDAEgGADQgGAEgIAAIgHgBg");
	this.shape_4.setTransform(254.175,238.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAiIAJgtQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgCABIgBAAIgJAwIgUAAIAOg/IANgDIAJgBQALAAAEAFQAFAFgCAKIgKAvg");
	this.shape_5.setTransform(249.1558,238.8227);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAcQgFgGADgMIAEgTQADgMAGgHQAHgGAKABQAKgBAGAGQAEAHgDAMIgEATQgCAMgIAGQgHAGgJAAQgMAAgDgGgAABgOIgBAFIgDATIgBAFQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIAAgEIAFgTIAAgFIgBgBQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAg");
	this.shape_6.setTransform(244.15,238.8731);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAuIAThaIAIAAIAHgBIAGAAQAMAAAEAGQAEAGgCANIgEATQgDAMgHAGQgGAGgLAAIgCAAIgFAXgAgBAEIABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIACgEIAEgTQABgEgBgBQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgCAAg");
	this.shape_7.setTransform(238.5731,240.0481);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAiIgKgCIAFgTIAIACIAHABIAFAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgCgBIgCgBIgCgBQgGgDgDgEQgCgGACgIQABgFADgFQADgEAFgDQAEgDAHAAIAHABIAKACIgGASIgGgCIgGAAIgEAAIgCACIABADIADACIABABIACAAIAHAFQADACABADIAAAJQgCAHgDAFQgDAEgGADQgGAEgIAAIgHgBg");
	this.shape_8.setTransform(233.925,238.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAcQgFgGACgNIAEgSQADgNAHgGQAGgGALABQAKgBAEAGQAEAGgDANIgDAPIgXAAIAAADQgBADACACQACACAEAAIAEAAIAFgBIgCASIgIABIgFAAQgNAAgFgGgAACgPIgCAEIAAAFIAEAAIABgFIABgEQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIgBAAIgBABg");
	this.shape_9.setTransform(229.3104,238.8731);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAtIAAgiIgCAAIgHAiIgUAAIAThZIAVAAQAKAAAFADQAEADACAGQABAFgCAIIgBAGQgCAHgCAFIgHAGIACAogAAAgFIABAAIAEgBIACgFIACgIQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_10.setTransform(223.7667,237.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAsIgGgBIgFAAIgBgTIAJACIAIABIAEgBQABAAABAAQAAAAABAAQAAgBAAAAQAAAAABgBIACgHIgCABIgBAAQgHAAgDgCQgFgCgCgFQgCgEACgIIAIgpIATAAIgIApIAAACIACABIABAAIABAAIAEgWIAFgWIAUAAIgOBAQgDANgHAGQgGAGgMAAIgFgBg");
	this.shape_11.setTransform(216.8,240.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAdQgEgFACgKIAAgBQACgJAHgFQAGgFAKAAIABAAIACAAIABgCQAAgEgBgCQgBgBgEAAIgHABIgIACIAJgTIAEgBIAEgBIAFAAQAJAAAEACQAFADABAFQABAFgBAHIgJAqIgMACIgLABQgKAAgFgFgAgCAHQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABIAAACQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAABIADABIABAAIABgMIgBAAIgCABg");
	this.shape_12.setTransform(211.5367,238.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAtIAShZIATAAIgTBZg");
	this.shape_13.setTransform(207.825,237.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeAtIAThZIAVAAQAKAAAFADQAEADABAGQACAFgCAIIgCAHQgCAKgEAFQgEAEgHADQgGACgGAAIgCAAIgHAhgAAAgEIABAAIADgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAgBIACgJQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBAAg");
	this.shape_14.setTransform(203.5071,237.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAqIAAgYIgQg7IATAAIAFAcIAGgcIATAAIgPA7IAAAYg");
	this.shape_15.setTransform(103.775,238.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAqIAAhTIATAAIAABAIATAAIAAATg");
	this.shape_16.setTransform(98.8,238.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAUAAQAJAAAFAEQAFACACAGQACAEAAAIIAAAHQAAAIgDAEQgDAFgFACQgGACgGAAIgBAAIAAAfgAgCgEIABAAIADgBIABgDIAAgJIgBgFIgDgBIgBAAg");
	this.shape_17.setTransform(94.03,238.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAUAAQAJAAAFAEQAFACACAGQACAEAAAIIAAAHQAAAIgDAEQgDAFgFACQgGACgGAAIgBAAIAAAfgAgCgEIABAAIADgBIABgDIAAgJIgBgFIgDgBIgBAAg");
	this.shape_18.setTransform(89.08,238.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAGAqIgBgQIgJAAIgBAQIgTAAIALhTIAbAAIALBTgAADAIIgDgWIAAgGIAAAGIgCAWIAFAAg");
	this.shape_19.setTransform(83.925,238.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKAqIgKgDIAGgRIAGACIAFABIAEgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgGIgEgEIgFgGIgEgHQgBgEgBgFIAAgBQABgKAGgGQAEgGAKgBIAIABIAJADIgFAQIgFgBIgEgBQgDAAgCACQAAAAAAABQAAAAAAAAQAAABAAABQgBAAAAABIABAEIAFAGIACABIACACIAGAGIAFAHIABALQAAAHgDAGQgCAFgFADQgGADgFAAIgKgBg");
	this.shape_20.setTransform(77.75,238.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEASIgEgjIARAAIgDAjg");
	this.shape_21.setTransform(74.25,236.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOAlQgGgHAAgMIAAgjQAAgMAGgGQAGgHALAAIAJABIAIADIgIAPIgCgBIgEAAQgDAAgCADQgBACAAAEIAAAfQAAAEABADQADACADAAIAEAAIADgBIAHAPIgJADIgJABQgLAAgGgGg");
	this.shape_22.setTransform(70.95,238.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWAmQgGgGAAgLIAAgKQAAgGADgEQACgCAFgBIgDgHIgBgGIAAgGQAAgHACgFQABgEAEgDQAEgCAIAAQAFAAADACQAEACABAFQACAFAAAHIAAAFIgBAGQgBAEgCACQgDADgEABIAHAKIgBgFIAAgFIAPAAIAAALIgBAIIgDAHIALAQIgTAAIgCgDIgFADIgGABQgNAAgGgFgAgKANIAAADIAAACQAAAFACACQACACAEAAIABAAIABgBIgKgPgAgFgYIgBADIAAAJIAAACIAAABIADgCIABgEIAAgGIAAgDIgCgBQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAg");
	this.shape_23.setTransform(65.325,238.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAqIAAhAIgLAAIAAgTIApAAIAAATIgMAAIAABAg");
	this.shape_24.setTransform(59.925,238.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHA1IAAhpIAPAAIAABpg");
	this.shape_25.setTransform(52.225,239.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKAoQgFgDgCgFQgEgGAAgHIAAglQAAgHAEgFQACgGAFgDQAFgDAFAAQAHAAAFADQAEADADAGQACAFAAAHIAAAlQAAAHgCAGQgDAFgEADQgFADgHAAQgFAAgFgDgAgBgXIAAACIAAArIAAACIABABIAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIAAgrIgBgCIgBgBIgBAAIgBABg");
	this.shape_26.setTransform(44.2,238.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMAqIANhBIgTAAIAAgSIAlAAIAAASIgNBBg");
	this.shape_27.setTransform(39.525,238.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUAqIAAgRIAMgNIAIgNQADgHAAgGIAAgBQAAgDgCgCQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAIgEgBIgGABIgFABIgFgPIAJgEQAFgBAGAAQAHAAAEADQAFAEACAGQADAFAAAHIAAABIgCAMQgCAEgDAFIgGAKIgIAJIATAAIAAARg");
	this.shape_28.setTransform(35.15,238.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgKAqIgJgDIAEgRIAHACIAFABIAEgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgGIgEgEIgFgGIgEgHQgCgEABgFIAAgBQAAgKAGgGQAEgGAJgBIAJABIAJADIgFAQIgFgBIgDgBQgEAAgCACQAAAAAAABQAAAAAAAAQAAABAAABQAAAAAAABIAAAEIAGAGIACABIABACIAHAGIADAHIABALQAAAHgCAGQgDAFgFADQgEADgGAAIgKgBg");
	this.shape_29.setTransform(29.3,238.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRAqIAAhTIAjAAIAAASIgRAAIAAAPIAOAAIAAAQIgOAAIAAAQIARAAIAAASg");
	this.shape_30.setTransform(25.225,238.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgIAqIAAhTIASAAIAABTg");
	this.shape_31.setTransform(21.8,238.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAEAqIgGggIgBAAIAAAgIgTAAIAAhTIAUAAQAIAAAGAEQAEACACAGQADAEAAAIIAAAGQAAAGgCAEQgCAEgCACIAJAlgAgDgFIAAAAIADgBIABgDIAAgIIgBgFIgDgBIAAAAg");
	this.shape_32.setTransform(17.9,238.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRAqIAAhTIAjAAIAAASIgRAAIAAAPIAOAAIAAAQIgOAAIAAAQIARAAIAAASg");
	this.shape_33.setTransform(13.275,238.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgKAqIgKgDIAGgRIAGACIAFABIAEgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgGIgDgEIgGgGIgEgHQgCgEAAgFIAAgBQABgKAGgGQAEgGAKgBIAIABIAJADIgFAQIgFgBIgEgBQgDAAgBACQgBAAAAABQAAAAAAAAQAAABAAABQgBAAAAABIACAEIAEAGIACABIADACIAFAGIAFAHIABALQgBAHgCAGQgCAFgFADQgGADgFAAIgKgBg");
	this.shape_34.setTransform(9,238.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(283));

	// footer_bg
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5050F").s().p("A4uBuIAAjbMAxdAAAIAADbg");
	this.shape_35.setTransform(149.9,238.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(283));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(149.85,19,0.4261,0.4261,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(188).to({alpha:0},16).wait(79));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(149.85,198.4,0.2992,0.2992,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(204).to({_off:false},0).wait(1).to({regX:-0.3,regY:87.2,x:149.7,y:224.35,alpha:0.0032},0).wait(1).to({y:224.15,alpha:0.0145},0).wait(1).to({y:223.75,alpha:0.0371},0).wait(1).to({y:223,alpha:0.077},0).wait(1).to({y:221.7,alpha:0.1467},0).wait(1).to({y:219.5,alpha:0.2672},0).wait(1).to({y:216.75,alpha:0.4164},0).wait(1).to({y:214,alpha:0.5648},0).wait(1).to({y:211.7,alpha:0.6887},0).wait(1).to({y:209.9,alpha:0.7859},0).wait(1).to({y:208.5,alpha:0.8625},0).wait(1).to({y:207.4,alpha:0.9229},0).wait(1).to({y:206.65,alpha:0.9628},0).wait(1).to({y:206.25,alpha:0.9857},0).wait(1).to({y:206.05,alpha:0.9969},0).wait(1).to({regX:0.1,regY:0.1,x:149.85,y:179.95,alpha:1},0).wait(63));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(-131.2,112.6,0.4156,0.4156,0,0,0,-0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(188).to({_off:false},0).wait(1).to({regX:-0.4,regY:0.3,x:-130.35,y:112.65},0).wait(1).to({x:-127.2},0).wait(1).to({x:-120.85,y:112.7},0).wait(1).to({x:-109.65,y:112.8},0).wait(1).to({x:-90.05,y:112.9},0).wait(1).to({x:-56.2,y:113.15},0).wait(1).to({x:-14.25,y:113.45},0).wait(1).to({x:27.4,y:113.75},0).wait(1).to({x:62.25,y:114},0).wait(1).to({x:89.55,y:114.2},0).wait(1).to({x:111.05,y:114.35},0).wait(1).to({x:128.05,y:114.45},0).wait(1).to({x:139.25,y:114.55},0).wait(1).to({x:145.7,y:114.6},0).wait(1).to({x:148.85},0).wait(1).to({regX:0.1,regY:0.1,x:149.85},0).wait(79));

	// main_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(148.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:-1.6,regY:-9.4,x:147.45,y:216.7,alpha:0.0037},0).wait(1).to({y:216.55,alpha:0.0167},0).wait(1).to({y:216.25,alpha:0.0435},0).wait(1).to({y:215.75,alpha:0.0919},0).wait(1).to({x:147.4,y:214.8,alpha:0.1816},0).wait(1).to({x:147.35,y:213.25,alpha:0.3248},0).wait(1).to({x:147.3,y:211.55,alpha:0.4878},0).wait(1).to({x:147.25,y:209.95,alpha:0.6345},0).wait(1).to({x:147.2,y:208.75,alpha:0.7499},0).wait(1).to({y:207.8,alpha:0.8388},0).wait(1).to({x:147.15,y:207.05,alpha:0.9088},0).wait(1).to({y:206.55,alpha:0.9564},0).wait(1).to({y:206.25,alpha:0.9834},0).wait(1).to({y:206.1,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:148.05,y:211.05,alpha:1},0).wait(68).to({x:148.4,y:211.25},0).wait(1).to({regX:-1.6,regY:-9.4,x:147.5,y:206.3,alpha:0.9963},0).wait(1).to({y:206.45,alpha:0.9833},0).wait(1).to({y:206.75,alpha:0.9565},0).wait(1).to({y:207.25,alpha:0.9081},0).wait(1).to({y:208.15,alpha:0.8184},0).wait(1).to({y:209.65,alpha:0.6752},0).wait(1).to({y:211.35,alpha:0.5122},0).wait(1).to({y:212.9,alpha:0.3655},0).wait(1).to({y:214.1,alpha:0.2501},0).wait(1).to({y:215.05,alpha:0.1612},0).wait(1).to({y:215.75,alpha:0.0912},0).wait(1).to({y:216.25,alpha:0.0436},0).wait(1).to({y:216.55,alpha:0.0166},0).wait(1).to({y:216.7,alpha:0.0036},0).wait(1).to({regX:0.1,regY:0.1,x:148.4,y:221.7,alpha:0},0).to({_off:true},1).wait(169));

	// sub_caption
	this.instance_5 = new lib.daily_caption_mc();
	this.instance_5.setTransform(148.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:-1.2,regY:1.6,x:147.7,y:222.45,alpha:0.0037},0).wait(1).to({y:222.3,alpha:0.0167},0).wait(1).to({y:222,alpha:0.0435},0).wait(1).to({y:221.5,alpha:0.0919},0).wait(1).to({x:147.65,y:220.55,alpha:0.1816},0).wait(1).to({x:147.6,y:219,alpha:0.3248},0).wait(1).to({x:147.55,y:217.3,alpha:0.4878},0).wait(1).to({x:147.5,y:215.7,alpha:0.6345},0).wait(1).to({x:147.45,y:214.5,alpha:0.7499},0).wait(1).to({y:213.55,alpha:0.8388},0).wait(1).to({x:147.4,y:212.8,alpha:0.9088},0).wait(1).to({y:212.3,alpha:0.9564},0).wait(1).to({y:212,alpha:0.9834},0).wait(1).to({y:211.85,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:148.05,y:211.05,alpha:1},0).wait(60).to({x:148.4,y:211.25},0).wait(1).to({regX:-1.2,regY:1.6,x:147.75,y:212.05,alpha:0.9963},0).wait(1).to({y:212.2,alpha:0.9833},0).wait(1).to({y:212.5,alpha:0.9565},0).wait(1).to({y:213,alpha:0.9081},0).wait(1).to({y:213.9,alpha:0.8184},0).wait(1).to({y:215.4,alpha:0.6752},0).wait(1).to({y:217.1,alpha:0.5122},0).wait(1).to({y:218.65,alpha:0.3655},0).wait(1).to({y:219.85,alpha:0.2501},0).wait(1).to({y:220.8,alpha:0.1612},0).wait(1).to({y:221.5,alpha:0.0912},0).wait(1).to({y:222,alpha:0.0436},0).wait(1).to({y:222.3,alpha:0.0166},0).wait(1).to({y:222.45,alpha:0.0036},0).wait(1).to({regX:0.1,regY:0.1,x:148.4,y:221.7,alpha:0},0).wait(95));

	// second_prize
	this.instance_6 = new lib.second_prize_mc();
	this.instance_6.setTransform(150,133.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({y:133.2373,alpha:0.0037},0).wait(1).to({y:133.0154,alpha:0.0167},0).wait(1).to({y:132.5612,alpha:0.0435},0).wait(1).to({y:131.7384,alpha:0.0919},0).wait(1).to({y:130.2134,alpha:0.1816},0).wait(1).to({y:127.7785,alpha:0.3248},0).wait(1).to({y:125.0078,alpha:0.4878},0).wait(1).to({y:122.5143,alpha:0.6345},0).wait(1).to({y:120.5515,alpha:0.7499},0).wait(1).to({y:119.0405,alpha:0.8388},0).wait(1).to({y:117.851,alpha:0.9088},0).wait(1).to({y:117.0413,alpha:0.9564},0).wait(1).to({y:116.5816,alpha:0.9834},0).wait(1).to({y:116.3612,alpha:0.9964},0).wait(1).to({y:116.3,alpha:1},0).wait(61).to({y:116.2262,alpha:0.9963},0).wait(1).to({y:115.9652,alpha:0.9833},0).wait(1).to({y:115.4308,alpha:0.9565},0).wait(1).to({y:114.4628,alpha:0.9081},0).wait(1).to({y:112.6687,alpha:0.8184},0).wait(1).to({y:109.8041,alpha:0.6752},0).wait(1).to({y:106.5445,alpha:0.5122},0).wait(1).to({y:103.6109,alpha:0.3655},0).wait(1).to({y:101.3018,alpha:0.2501},0).wait(1).to({y:99.5241,alpha:0.1612},0).wait(1).to({y:98.1247,alpha:0.0912},0).wait(1).to({y:97.1721,alpha:0.0436},0).wait(1).to({y:96.6313,alpha:0.0166},0).wait(1).to({y:96.372,alpha:0.0036},0).wait(1).to({y:96.3,alpha:0},0).to({_off:true},1).wait(94));

	// promo
	this.instance_7 = new lib.promo_mc();
	this.instance_7.setTransform(295.65,116.65,0.4337,0.4337,0,0,0,0.1,0);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0,x:295.0622,alpha:0.0037},0).wait(1).to({x:293.1593,alpha:0.0167},0).wait(1).to({x:289.2635,alpha:0.0435},0).wait(1).to({x:282.207,alpha:0.0919},0).wait(1).to({x:269.1282,alpha:0.1816},0).wait(1).to({x:248.2446,alpha:0.3248},0).wait(1).to({x:224.4825,alpha:0.4878},0).wait(1).to({x:203.0965,alpha:0.6345},0).wait(1).to({x:186.263,alpha:0.7499},0).wait(1).to({x:173.3039,alpha:0.8388},0).wait(1).to({x:163.102,alpha:0.9088},0).wait(1).to({x:156.1575,alpha:0.9564},0).wait(1).to({x:152.2151,alpha:0.9834},0).wait(1).to({x:150.3252,alpha:0.9964},0).wait(1).to({regX:0.1,x:149.85,alpha:1},0).to({_off:true},99).wait(169));

	// background
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5050F").s().p("A4uTiMAAAgnDMAxdAAAMAAAAnDg");
	this.shape_36.setTransform(149.85,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-104.2,125,460.09999999999997,125);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 300,
	height: 250,
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