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
	this.instance.setTransform(-193,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-193,-104,386,208), null);


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
	this.shape.graphics.f("#FFE400").s().p("AgUBuQgIgHAAgNQAAgMAIgHQAJgHALAAQAMAAAJAHQAJAHgBAMQABANgJAHQgJAGgMAAQgLAAgJgGgAgZAnIAAiaIAzAAIAACag");
	this.shape.setTransform(127.85,-2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("Ag4BrIAOgwQAWAKAKgBQARAAAAgOIAAgCQAAgGgEgHQgEgHgLgLIgKgKQgQgPgIgOQgHgOAAgVIAAgBQAAgeAQgRQAPgQAaAAQAWAAAaAKIgNAsQgRgEgIAAQgRAAAAAOIAAABIABAEIACADIACAFIADAEIAFAFIAFAFIALAMQAQAPAIANQAHAOAAAXIAAAAQAAAfgQASQgRASgaAAQgbAAgbgLg");
	this.shape_1.setTransform(116.425,-2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AAABzIgOiQIAACQIg1AAIAAjlIBEAAIAOCNIAAiNIA1AAIAADlg");
	this.shape_2.setTransform(102.825,-2.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AgZBzIAAjlIAzAAIAADlg");
	this.shape_3.setTransform(91.725,-2.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AAKBzIgKiKIgJCKIhEAAIgRjlIA4AAIADCwIAPiwIApAAIAPCwIADiwIA4AAIgRDlg");
	this.shape_4.setTransform(78.225,-2.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("Ag8A2IAAhrQAAgeATgRQATgRAdAAQAcAAAaAOIgTAtQgNgHgQAAQgTAAAAAXIAABkQAAAKAHAAIAGgBIAAhSIAyAAIAAB1QgQAIgMAEQgLAEgQAAQg+AAAAhAg");
	this.shape_5.setTransform(58.075,-2.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AgZBzIAAjlIAzAAIAADlg");
	this.shape_6.setTransform(47.675,-2.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("Ag8BzIAAjlIA5AAQAcAAARAOQARAOAAAcIAAAGQAAASgGALQgGALgMAFQAaAJAAAmIAAAOQAAAdgQAQQgQAQgcAAgAgIBBIADAAQAGAAACgDQADgDAAgGIAAgXQAAgHgDgDQgCgEgGABIgDAAgAgIgZIAEAAQAGAAACgCQADgDAAgHIAAgOQAAgHgDgDQgCgDgGAAIgEAAg");
	this.shape_7.setTransform(37.375,-2.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AAAB2QgdAAgPgQQgQgRAAgfIAAhsQAAgfAQgQQAQgQAcAAIABAAQAdAAAQAQQAPAQAAAfIAABsQAAAggQAQQgPAQgdAAgAgGg6IAAB1QAAAKAGgBIAAAAQAHABAAgKIAAh1QAAgJgHAAQgGAAAAAJg");
	this.shape_8.setTransform(19.775,-2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AgaBzIAAixIgfAAIAAg0IB0AAIAAA0IghAAIAACxg");
	this.shape_9.setTransform(6.9,-2.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaBzIAAixIgfAAIAAg0IB0AAIAAA0IghAAIAACxg");
	this.shape_10.setTransform(-8.75,-2.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgyBzIAAjlIBkAAIAAAxIgwAAIAAAnIAnAAIAAAwIgnAAIAAArIAxAAIAAAyg");
	this.shape_11.setTransform(-20.125,-2.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAHBzIgThqIAABqIg1AAIAAjlIA1AAIAABpIAThpIA3AAIgcBsIAgB5g");
	this.shape_12.setTransform(-33.175,-2.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgpBlQgQgSAAgiIAAhhQAAgiAQgSQASgRAfAAQAZAAAVAJIgTAqQgIgCgKAAIAAAAQgVAAAAAZIAABXQAAAMAGAGQAGAHALAAQAKAAAKgEIATAqQgXALgbAAQgfAAgSgRg");
	this.shape_13.setTransform(-46.4,-2.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZBzIAAjlIAzAAIAADlg");
	this.shape_14.setTransform(-56.575,-2.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaBzIAAixIgfAAIAAg0IB0AAIAAA0IghAAIAACxg");
	this.shape_15.setTransform(-66,-2.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAJBzIgRhYIgEAAIAABYIg0AAIAAjlIA4AAQAjABAPAPQAOARAAAfIAAAQQAAAigRANIAaBmgAgMgOIADAAQAHAAACgDQACgDAAgIIAAgWQAAgIgCgDQgCgDgHAAIgDAAg");
	this.shape_16.setTransform(-83.025,-2.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgrBlQgRgPAAgeIAAirIA2AAIAACsQAAAKAGgBQAHABAAgKIAAisIA2AAIAACrQAAAbgQARQgPAQgeAAQgbAAgQgPg");
	this.shape_17.setTransform(-97.625,-2.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAB2QgdAAgPgQQgQgRAAgfIAAhsQAAgfAQgQQAQgQAcAAIABAAQAdAAAQAQQAPAQAAAfIAABsQAAAggQAQQgPAQgdAAgAgGg6IAAB1QAAAKAGgBIAAAAQAHABAAgKIAAh1QAAgJgHAAQgGAAAAAJg");
	this.shape_18.setTransform(-111.775,-2.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZBzIAAhCIgsijIA2AAIAPBNIAPhNIA3AAIgsCjIAABCg");
	this.shape_19.setTransform(-126,-2.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-134.8,-21.2,269.6,43.5), null);


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
	this.instance.setTransform(-139,-123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-139,-123.5,278,247), null);


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
	this.shape.graphics.f("#FFE400").s().p("AgTBrQgJgHAAgMQAAgMAJgHQAHgHAMAAQAMAAAJAHQAIAHAAAMQAAAMgIAHQgJAGgMAAQgMAAgHgGgAgZAmIAAiWIAzAAIAACWg");
	this.shape.setTransform(104.45,-6.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("Ag6BwIAAjfIA3AAQAaAAASASQASASAAAeIAABaQAAAegSASQgSATgaAAgAgHA/IACAAQAHAAACgDQACgDAAgKIAAhfQAAgJgDgDQgCgCgGAAIgCAAg");
	this.shape_1.setTransform(92.425,-6.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AgzBwIAAjfIAzAAIAACsIA0AAIAAAzg");
	this.shape_2.setTransform(79.375,-6.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AAABzQgcAAgPgQQgQgQAAgeIAAhpQAAgfAQgPQAPgQAcAAIAAAAQAeAAAPAQQAPAQAAAeIAABpQgBAggPAPQgPAPgcAAgAgGg4IAABxQAAAKAGAAIAAAAQAHAAAAgKIAAhxQAAgJgHAAIAAAAQgGAAAAAJg");
	this.shape_3.setTransform(66.55,-6.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AAABzQgcAAgPgQQgQgQAAgeIAAhpQAAgfAQgPQAPgQAcAAIAAAAQAeAAAPAQQAPAQAAAeIAABpQgBAggPAPQgPAPgcAAgAgGg4IAABxQAAAKAGAAIAAAAQAHAAAAgKIAAhxQAAgJgHAAIAAAAQgGAAAAAJg");
	this.shape_4.setTransform(53.05,-6.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AAABzQgcAAgPgQQgPgQAAgeIAAhpQAAgfAPgPQAQgQAbAAIAAAAQAeAAAOAQQAPAQABAeIAABpQgBAggPAPQgPAPgcAAgAgGg4IAABxQAAAKAGAAIAAAAQAHAAAAgKIAAhxQAAgJgHAAIAAAAQgGAAAAAJg");
	this.shape_5.setTransform(39.5,-6.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("Ag7A1IAAhpQAAgdATgQQATgSAcABQAbAAAaAOIgTAsQgNgHgPAAQgTAAAAAWIAABiQAAAKAHAAQAEAAACgBIAAhQIAwAAIAABxQgPAJgMADQgLAEgPAAQg9ABAAg/g");
	this.shape_6.setTransform(26.5,-6.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AgwBwIAAjfIBhAAIAAAwIgvAAIAAAmIAnAAIAAAvIgnAAIAAAqIAwAAIAAAwg");
	this.shape_7.setTransform(10.95,-6.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AAJBwIgRhVIgDAAIAABVIg0AAIAAjfIA3AAQAjAAAOAQQAOAQAAAeIAAAQQAAAhgRANIAaBjgAgLgOIACAAQAHAAACgDQACgDAAgHIAAgWQAAgHgCgDQgCgDgHAAIgCAAg");
	this.shape_8.setTransform(-1.975,-6.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AgqBiQgQgPAAgdIAAimIA0AAIAACnQAAAKAGAAQAHAAAAgKIAAinIA0AAIAACmQAAAbgPAQQgPAQgdAAQgaAAgQgPg");
	this.shape_9.setTransform(-16.2,-6.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("Ag6BwIAAjfIA2AAQAjAAAOAQQAOAQAAAeIAAATQAAAhgRANQgQANgeAAIgCAAIAABTgAgGgLIABAAQAGAAACgDQADgDAAgHIAAgZQAAgHgDgDQgCgDgGAAIgBAAg");
	this.shape_10.setTransform(-29.95,-6.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAABwIgOiNIAACNIgzAAIAAjfIBCAAIAOCKIAAiKIAzAAIAADfg");
	this.shape_11.setTransform(-47.675,-6.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAQBwIgEgsIgYAAIgEAsIgyAAIAejfIBJAAIAeDfgAAAgmIgHA7IAOAAIgGg7IgBgTg");
	this.shape_12.setTransform(-62.325,-6.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgxBwIAAjfIBiAAIAAAwIgvAAIAAAmIAmAAIAAAvIgmAAIAAAqIAvAAIAAAwg");
	this.shape_13.setTransform(-74.75,-6.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAlBwIAAinIgDAaIgOCNIgnAAIgOiNIgDgaIAACnIgxAAIAAjfIBOAAIAHBqIAAAQIACgQIAIhqIBMAAIAADfg");
	this.shape_14.setTransform(-90,-6.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZBwIAAjfIAzAAIAADfg");
	this.shape_15.setTransform(-106.425,-6.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_sub_caption_mc, new cjs.Rectangle(-111.2,-24.2,222.5,42.5), null);


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
	this.instance.setTransform(-188,-22,1.5422,1.5422);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-188,-22,376.3,72.5), null);


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

	// footer
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(303.8,465.25,0.0213,0.0213,0,0,0,495.3,464.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAxIgCgWQALAEAIAAQAFAAADgCQABgCACgHIgEAAQgLAAgFgFQgGgGACgMIAKgwIAWAAIgIAvQAAABAAABQAAAAAAABQAAAAABABQAAAAABAAIABAAIAMgzIAWAAIgQBJQgCAPgJAIQgHAHgNAAQgKAAgIgDg");
	this.shape.setTransform(287.45,467.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVA0IAVhnIAWAAIgWBng");
	this.shape_1.setTransform(283.075,464.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAxIAVhkIAWAAIgGAZIADAAQAOAAAEAHQAFAHgDAOIgFAWQgDAPgIAHQgHAGgNAAQgKAAgOgDgAgEAfIABAAQABAAABAAQAAAAABAAQAAAAAAgBQAAAAAAAAQACgCAAgEIAFgWQABgDgBgCQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAgBAAIgBAAg");
	this.shape_2.setTransform(278.01,464.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUA2IAPhJIAWAAIgQBJgAABghQgBgDAAgGQABgFADgDQADgDAFAAQAFAAADADQACADgCAFQgBAGgDADQgEAEgFAAQgFAAgBgEg");
	this.shape_3.setTransform(273.7071,464.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAlIAHgWQAJAEAHAAQAHAAABgEIAAgCIgDgCIgCgCIgCgBQgPgHAEgQQACgKAHgHQAHgGALAAQAJgBAKAEIgGAUQgIgCgHAAQgFAAgBADIAAACIAEACIAEACQAIAEADAEQADAGgCAJQgDALgIAHQgIAHgNAAQgKAAgKgDg");
	this.shape_4.setTransform(269.075,465.6969);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAnIAKg0QAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAIgDAAIgLA3IgXAAIAQhIQAPgFAMAAQAYAAgFAXIgMA2g");
	this.shape_5.setTransform(263.3681,465.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAMIAFgWQAGgcAZgBQAZABgGAcIgFAWQgGAcgYAAQgaAAAGgcgAAAgLIgEAXQgCAHADgBQADABAAgHIAFgXQACgGgDAAQgDAAgBAGg");
	this.shape_6.setTransform(257.5759,465.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghA1IAWhnIAZgCQAOAAAEAHQAEAGgDAQIgFAWQgDAOgHAHQgHAGgNAAIgDAAIgGAbgAgBAFIABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQABgCABgEIAFgVQABgEgBgCQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_7.setTransform(251.185,467);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAlIAHgWQAJAEAHAAQAHAAABgEIAAgCIgDgCIgCgCIgCgBQgPgHAEgQQACgKAHgHQAHgGALAAQAJgBAKAEIgGAUQgIgCgHAAQgFAAgBADIAAACIAEACIAEACQAIAEADAEQADAGgCAJQgDALgIAHQgIAHgNAAQgKAAgKgDg");
	this.shape_8.setTransform(245.825,465.6969);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAgQgGgHADgPIAEgUQADgPAIgGQAIgIAMAAQAMAAAEAIQAFAGgDAPIgEARIgaAAIgBAEQgCAIAKgBIALgBIgCAVIgRACQgOAAgFgIgAAAgMIAAAFIAEAAIACgFIAAgGQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQgDAAgBAHg");
	this.shape_9.setTransform(240.56,465.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBA0IAAgoIgCAAIgIAoIgYAAIAWhnIAZAAQAQAAAEAHQAFAIgDAOIgBAHQgDAPgJAGIACAugAAAgGIACAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQACgCAAgDIACgKQABgEgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_10.setTransform(234.1563,464.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggAxIgBgWQALAEAHAAQAHAAABgCQADgCABgHIgEAAQgKAAgHgFQgFgGADgMIAKgwIAVAAIgIAvQAAABAAABQAAAAAAABQAAAAABABQAAAAABAAIACAAIAKgzIAXAAIgPBJQgEAPgHAIQgIAHgOAAQgIAAgKgDg");
	this.shape_11.setTransform(226.2,467.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAiQgFgGACgMIABgBQACgLAHgFQAHgGALAAIAEAAIABgDQABgEgCgCQgBgBgFAAQgGAAgLADIALgWIAHgCIAIAAQAPAAAEAGQAFAGgDAOIgKAvQgSAEgJAAQgMAAgEgFgAgDAIIgBAFIgBACIAAAEQABABAAAAQAAAAABAAQAAABABAAQAAAAAAAAIABAAIACgOIgBAAIgDABg");
	this.shape_12.setTransform(220.103,465.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVA0IAVhnIAWAAIgWBng");
	this.shape_13.setTransform(215.875,464.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjA0IAWhnIAYAAQARAAAEAHQAFAIgDAOIgBAJQgEAOgIAGQgKAHgNAAIgBAAIgIAmgAAAgFIABAAQADAAACgBIACgFIACgLQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIgEgBIgBAAg");
	this.shape_14.setTransform(210.8563,464.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKAyIAAgcIgUhHIAYAAIAGAhIAHghIAYAAIgUBHIAAAcg");
	this.shape_15.setTransform(131.25,466.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXAyIAAhjIAXAAIAABNIAYAAIAAAWg");
	this.shape_16.setTransform(125.175,466.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaAyIAAhjIAZAAQAPAAAGAHQAHAHAAANIAAAJQAAAOgIAGQgHAGgNAAIgBAAIAAAlgAgCgFIAAAAIAEgBIABgFIAAgLIgBgEQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBAAgBAAIAAAAg");
	this.shape_17.setTransform(119.425,466.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaAyIAAhjIAZAAQAPAAAGAHQAHAHAAANIAAAJQAAAOgIAGQgHAGgNAAIgBAAIAAAlgAgCgFIAAAAIAEgBIABgFIAAgLIgBgEQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBAAgBAAIAAAAg");
	this.shape_18.setTransform(113.375,466.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAHAyIgCgTIgJAAIgCATIgXAAIAOhjIAgAAIANBjgAAAgRIgDAaIAHAAIgDgaIgBgIg");
	this.shape_19.setTransform(107.1,466.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYAvIAGgVQAKAEAEAAQAHAAAAgGIAAgBQAAgDgCgDIgGgIIgEgEQgHgGgDgGQgEgGAAgKQAAgNAHgHQAHgIALAAQAKAAALAFIgGATIgLgCQgHAAAAAGIAAABIABACIAAABIABACIABACIACACIADADIAEAEQAIAHADAGQADAFAAALQAAANgHAIQgHAIgLAAQgMAAgMgFg");
	this.shape_20.setTransform(99.625,466.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGAWIgEgqIAVAAIgEAqg");
	this.shape_21.setTransform(95.4,463.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AADA0QgNAAgHgIQgIgHAAgQIAAgqQAAgPAIgHQAHgIANAAIABAAQAKAAAKAEIgJATQgDgCgFAAQgIAAAAAMIAAAlQAAAGACADQADACAFAAIAIgCIAJATQgLAFgLAAg");
	this.shape_22.setTransform(91.375,466.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgbAuQgIgHAAgOIAAgMQAAgHAEgEQADgEAGAAQgFgJAAgHIAAgHQAAgOAFgGQAFgGANAAQAKAAAEAGQAEAGAAAOIAAAGQAAAPgNAEIAJAMQgCgFAAgHIATAAIAAAGIAAAFIAAAFIgBAEIgBAEIgBAEIgCADIAOAUIgYAAIgCgEQgHAFgHAAQgQAAgHgGgAgMAQIAAAGQAAAGACACQACADAFAAIADgBIgMgTgAgGgeIgBACIAAACIAAAMIAAADQAFgBAAgGIAAgIIgBgDIgCgBIgBAAg");
	this.shape_23.setTransform(84.525,466.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKAyIAAhNIgPAAIAAgWIAzAAIAAAWIgOAAIAABNg");
	this.shape_24.setTransform(77.975,466.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJBAIAAh/IATAAIAAB/g");
	this.shape_25.setTransform(68.675,467.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgQA0IAIgTIAHgSIgCABQgWAAAAgZIAAgMQAAgOAHgIQAHgIALAAQAMAAAHAHQAHAGAAANIAAAMQAAAJgCAFIgTAzgAgBgaIAAAUQAAABAAABQAAAAAAABQABAAAAABQAAAAAAAAQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAgBIAAgUQAAgBAAgBQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAABAAABg");
	this.shape_26.setTransform(58.925,465.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgSAtQgHgGAAgNIAAgMQAAgJACgFIATgzIAVAAIgHATIgIASIACgBQAWAAAAAZIAAAMQAAAOgHAIQgHAIgMAAQgLAAgHgHgAgBAHIAAAUQAAABAAABQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAgBIAAgUQAAgBAAgBQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAABAAABg");
	this.shape_27.setTransform(52.975,466.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgYAzIAAgUQAbggABgQIAAgBQgBgGgCgCQgCgCgEAAQgEAAgJADIgHgTQALgGAOAAQAMAAAGAJQAIAJAAANIAAAAQAAAHgCAHQgDAGgEAHIgIALIgJALIAYAAIAAAVg");
	this.shape_28.setTransform(47.15,465.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgYAvIAGgVQAKAEAEAAQAHAAAAgGIAAgBQAAgDgCgDIgGgIIgEgEQgHgGgDgGQgEgGAAgKQAAgNAHgHQAHgIALAAQAKAAALAFIgGATIgLgCQgHAAAAAGIAAABIABACIAAABIABACIABACIACACIADADIAEAEQAIAHADAGQADAFAAALQAAANgHAIQgHAIgLAAQgMAAgMgFg");
	this.shape_29.setTransform(40.075,466.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWAyIAAhjIAsAAIAAAVIgVAAIAAARIARAAIAAAVIgRAAIAAATIAVAAIAAAVg");
	this.shape_30.setTransform(35.1,466.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLAyIAAhjIAXAAIAABjg");
	this.shape_31.setTransform(30.975,466.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAEAyIgHgmIgBAAIAAAmIgYAAIAAhjIAZAAQAPAAAHAHQAGAHAAANIAAAIQAAAOgIAGIAMAsgAgEgGIABAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBIAAgKQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgBAAg");
	this.shape_32.setTransform(26.225,466.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgWAyIAAhjIAsAAIAAAVIgVAAIAAARIARAAIAAAVIgRAAIAAATIAVAAIAAAVg");
	this.shape_33.setTransform(20.65,466.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgYAvIAGgVQAKAEAEAAQAHAAAAgGIAAgBQAAgDgCgDIgGgIIgEgEQgHgGgDgGQgEgGAAgKQAAgNAHgHQAHgIALAAQAKAAALAFIgGATIgLgCQgHAAAAAGIAAABIABACIAAABIABACIABACIACACIADADIAEAEQAIAHADAGQADAFAAALQAAANgHAIQgHAIgLAAQgMAAgMgFg");
	this.shape_34.setTransform(15.425,466.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(283));

	// footer_bg
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5050F").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_35.setTransform(160,467.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(283));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(160,36.5,0.8182,0.8182);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(189).to({alpha:0},16).wait(78));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(160,380.95,0.5745,0.5745,0,0,0,0,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(205).to({_off:false},0).wait(1).to({regX:0.1,regY:14.2,x:160.05,y:388.9,alpha:0.0032},0).wait(1).to({y:388.5,alpha:0.0145},0).wait(1).to({y:387.7,alpha:0.0371},0).wait(1).to({y:386.3,alpha:0.077},0).wait(1).to({y:383.85,alpha:0.1467},0).wait(1).to({y:379.55,alpha:0.2672},0).wait(1).to({y:374.3,alpha:0.4164},0).wait(1).to({y:369.05,alpha:0.5648},0).wait(1).to({y:364.65,alpha:0.6887},0).wait(1).to({y:361.2,alpha:0.7859},0).wait(1).to({y:358.5,alpha:0.8625},0).wait(1).to({y:356.35,alpha:0.9229},0).wait(1).to({y:354.95,alpha:0.9628},0).wait(1).to({y:354.15,alpha:0.9857},0).wait(1).to({y:353.75,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:160,y:345.55,alpha:1},0).wait(62));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(-164.95,220,0.7981,0.7981);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(189).to({_off:false},0).wait(1).to({x:-163.9045},0).wait(1).to({x:-160.2473},0).wait(1).to({x:-152.8876},0).wait(1).to({x:-139.9255},0).wait(1).to({x:-117.2756},0).wait(1).to({x:-78.1384},0).wait(1).to({x:-29.632},0).wait(1).to({x:18.5898},0).wait(1).to({x:58.8494},0).wait(1).to({x:90.4415},0).wait(1).to({x:115.3153},0).wait(1).to({x:134.9538},0).wait(1).to({x:147.9212},0).wait(1).to({x:155.3556},0).wait(1).to({x:158.9796},0).wait(1).to({x:160},0).wait(78));

	// main_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(157.2,425.65);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:-1.1,regY:-2.8,x:156.05,y:422.75,alpha:0.0037},0).wait(1).to({y:422.5,alpha:0.0167},0).wait(1).to({y:421.95,alpha:0.0435},0).wait(1).to({y:421,alpha:0.0919},0).wait(1).to({y:419.25,alpha:0.1816},0).wait(1).to({x:156,y:416.45,alpha:0.3248},0).wait(1).to({y:413.25,alpha:0.4878},0).wait(1).to({x:155.95,y:410.35,alpha:0.6345},0).wait(1).to({y:408.1,alpha:0.7499},0).wait(1).to({x:155.9,y:406.35,alpha:0.8388},0).wait(1).to({y:404.95,alpha:0.9088},0).wait(1).to({y:404.05,alpha:0.9564},0).wait(1).to({y:403.5,alpha:0.9834},0).wait(1).to({y:403.25,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:157,y:406,alpha:1},0).wait(68).to({x:157.2,y:405.65},0).wait(1).to({regX:-1.1,regY:-2.8,x:156.1,y:402.9,alpha:0.9963},0).wait(1).to({y:403.15,alpha:0.9833},0).wait(1).to({y:403.7,alpha:0.9565},0).wait(1).to({y:404.65,alpha:0.9081},0).wait(1).to({y:406.45,alpha:0.8184},0).wait(1).to({y:409.3,alpha:0.6752},0).wait(1).to({y:412.6,alpha:0.5122},0).wait(1).to({y:415.5,alpha:0.3655},0).wait(1).to({y:417.8,alpha:0.2501},0).wait(1).to({y:419.6,alpha:0.1612},0).wait(1).to({y:421,alpha:0.0912},0).wait(1).to({y:421.95,alpha:0.0436},0).wait(1).to({y:422.5,alpha:0.0166},0).wait(1).to({y:422.75,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:157.2,y:425.65,alpha:0},0).to({_off:true},1).wait(169));

	// sub_caption
	this.instance_5 = new lib.daily_sub_caption_mc();
	this.instance_5.setTransform(157.2,425.65);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:-0.8,regY:-6.2,x:156.35,y:419.35,alpha:0.0037},0).wait(1).to({y:419.1,alpha:0.0167},0).wait(1).to({y:418.55,alpha:0.0435},0).wait(1).to({y:417.6,alpha:0.0919},0).wait(1).to({y:415.85,alpha:0.1816},0).wait(1).to({x:156.3,y:413.05,alpha:0.3248},0).wait(1).to({y:409.85,alpha:0.4878},0).wait(1).to({x:156.25,y:406.95,alpha:0.6345},0).wait(1).to({y:404.7,alpha:0.7499},0).wait(1).to({x:156.2,y:402.95,alpha:0.8388},0).wait(1).to({y:401.55,alpha:0.9088},0).wait(1).to({y:400.65,alpha:0.9564},0).wait(1).to({y:400.1,alpha:0.9834},0).wait(1).to({y:399.85,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:157,y:406,alpha:1},0).wait(61).to({x:157.2,y:405.65},0).wait(1).to({regX:-0.8,regY:-6.2,x:156.4,y:399.5,alpha:0.9968},0).wait(1).to({y:399.7,alpha:0.9855},0).wait(1).to({y:400.15,alpha:0.9629},0).wait(1).to({y:400.95,alpha:0.923},0).wait(1).to({y:402.35,alpha:0.8533},0).wait(1).to({y:404.75,alpha:0.7328},0).wait(1).to({y:407.75,alpha:0.5836},0).wait(1).to({y:410.7,alpha:0.4352},0).wait(1).to({y:413.2,alpha:0.3113},0).wait(1).to({y:415.15,alpha:0.2141},0).wait(1).to({y:416.65,alpha:0.1375},0).wait(1).to({y:417.9,alpha:0.0771},0).wait(1).to({y:418.7,alpha:0.0372},0).wait(1).to({y:419.15,alpha:0.0143},0).wait(1).to({y:419.35,alpha:0.0031},0).wait(1).to({regX:0,regY:0,x:157.2,y:425.65,alpha:0},0).wait(93));

	// second_prize_mc
	this.instance_6 = new lib.second_prize_mc();
	this.instance_6.setTransform(164,254);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({y:253.9078,alpha:0.0037},0).wait(1).to({y:253.5815,alpha:0.0167},0).wait(1).to({y:252.9135,alpha:0.0435},0).wait(1).to({y:251.7035,alpha:0.0919},0).wait(1).to({y:249.4609,alpha:0.1816},0).wait(1).to({y:245.8801,alpha:0.3248},0).wait(1).to({y:241.8056,alpha:0.4878},0).wait(1).to({y:238.1386,alpha:0.6345},0).wait(1).to({y:235.2522,alpha:0.7499},0).wait(1).to({y:233.0302,alpha:0.8388},0).wait(1).to({y:231.2809,alpha:0.9088},0).wait(1).to({y:230.0901,alpha:0.9564},0).wait(1).to({y:229.4141,alpha:0.9834},0).wait(1).to({y:229.0901,alpha:0.9964},0).wait(1).to({y:229,alpha:1},0).wait(62).to({y:228.9035,alpha:0.9968},0).wait(1).to({y:228.5658,alpha:0.9855},0).wait(1).to({y:227.8864,alpha:0.9629},0).wait(1).to({y:226.6897,alpha:0.923},0).wait(1).to({y:224.5986,alpha:0.8533},0).wait(1).to({y:220.9854,alpha:0.7328},0).wait(1).to({y:216.5072,alpha:0.5836},0).wait(1).to({y:212.0553,alpha:0.4352},0).wait(1).to({y:208.3384,alpha:0.3113},0).wait(1).to({y:205.4218,alpha:0.2141},0).wait(1).to({y:203.1254,alpha:0.1375},0).wait(1).to({y:201.3123,alpha:0.0771},0).wait(1).to({y:200.1151,alpha:0.0372},0).wait(1).to({y:199.4288,alpha:0.0143},0).wait(1).to({y:199.0942,alpha:0.0031},0).wait(1).to({y:199,alpha:0},0).to({_off:true},1).wait(92));

	// promo
	this.instance_7 = new lib.promo_mc();
	this.instance_7.setTransform(439.95,224,0.8327,0.8327);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({x:438.9174,alpha:0.0037},0).wait(1).to({x:435.2636,alpha:0.0167},0).wait(1).to({x:427.7834,alpha:0.0435},0).wait(1).to({x:414.2342,alpha:0.0919},0).wait(1).to({x:389.1215,alpha:0.1816},0).wait(1).to({x:349.0231,alpha:0.3248},0).wait(1).to({x:303.3975,alpha:0.4878},0).wait(1).to({x:262.3345,alpha:0.6345},0).wait(1).to({x:230.0125,alpha:0.7499},0).wait(1).to({x:205.1298,alpha:0.8388},0).wait(1).to({x:185.5412,alpha:0.9088},0).wait(1).to({x:172.2071,alpha:0.9564},0).wait(1).to({x:164.6372,alpha:0.9834},0).wait(1).to({x:161.0084,alpha:0.9964},0).wait(1).to({x:160,alpha:1},0).wait(83).to({alpha:0},15).to({_off:true},1).wait(169));

	// background
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5050F").s().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/g");
	this.shape_36.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-159,240,714.7,240);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 320,
	height: 480,
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