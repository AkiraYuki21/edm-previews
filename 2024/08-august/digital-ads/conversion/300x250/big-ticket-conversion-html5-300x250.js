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



(lib._18 = function() {
	this.initialize(img._18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,18);


(lib._2ndprize = function() {
	this.initialize(img._2ndprize);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,247);


(lib.consolation = function() {
	this.initialize(img.consolation);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,83);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgUCqQgKgEgHgJQgGgJgBgOQABgSANgKQAMgKASAAQATAAANAKQAMAKAAASQABAOgHAJQgGAJgKAEQgKAEgMAAQgKAAgKgEgAgmA7IAAjoIBOAAIAADog");
	this.shape.setTransform(150.45,-9.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKCsIAAiuQAAgGgDgEQgDgDgEAAIgFAAIgEABIAAC6IhLAAIAAlXIBLAAIAABWIAHAAIAGAAQAmAAAVASQAVASABApIAAC0g");
	this.shape_1.setTransform(132.125,-10.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAwCeQgmAAgUgJQgVgJgHgRQgJgRABgZIAAhlIgWAAIAAhEIAWAAIAAhFIBKAAIAABFIAoAAIAABEIgoAAIAABSQAAAPAHAGQAHAFATAAIAIAAIAABGg");
	this.shape_2.setTransform(113.8,-8.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKCBIAAitQAAgHgDgDQgDgDgEgBIgFAAIgEABIAAC6IhLAAIAAjxQAZgIAXgEQAXgEARAAQAmAAAVASQAVASABApIAAC0g");
	this.shape_3.setTransform(95.925,-5.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAACDQgoAAgWgXQgVgXAAgwIAAhKQAAgwAVgWQAWgXAoAAIAAAAQApAAAVAXQAWAWAAAwIAABKQAAAwgWAXQgVAXgpAAgAgHg3QgCAFABALIAABPQgBALACAFQACAFAFgBIAAAAQAFAAADgFQABgFAAgKIAAhPQAAgLgBgFQgDgFgFAAIAAAAQgFAAgCAFg");
	this.shape_4.setTransform(76.1,-5.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA4CsIAAkBIgDAnIgXDaIg7AAIgXjaIgEgnIAAEBIhMAAIAAlXIB3AAIAMCjIABAZIACgZIAMijIB3AAIAAFXg");
	this.shape_5.setTransform(51.85,-10.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmCCQgSgCgXgGIAHhIQAQAFAOADQAPADANAAQALAAAHgCQAGgCAAgHQABgFgEgEQgDgDgIgEIgIgDIgJgEQgbgLgNgUQgOgUAAgeQAAgUAIgSQAIgQASgLQARgLAZAAQAKAAASACQASABAUAHIgGBEQgMgEgNgCQgMgCgMAAQgKAAgEADQgFACAAAGQAAAFAEACIALAHIAIAEIAIADQAQAHANAKQANAKAGAOQAHAOAAAVQABAXgKATQgJATgTALQgVALggAAIgEAAIgXgBg");
	this.shape_6.setTransform(23.2,-5.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglCzIAAj2IBLAAIAAD2gAgZhvQgJgKAAgSQAAgTAJgKQAJgKAQAAQAQAAAIAKQAKAKgBATQABASgKAKQgIALgQAAQgQAAgJgLg");
	this.shape_7.setTransform(8.9,-10.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAKCsIAAiuQAAgGgDgEQgDgDgEAAIgFAAIgEABIAAC6IhLAAIAAlXIBLAAIAABWIAHAAIAGAAQAmAAAVASQAVASABApIAAC0g");
	this.shape_8.setTransform(-6.725,-10.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmCsIAAkJIgwAAIAAhOICtAAIAABOIgvAAIAAEJg");
	this.shape_9.setTransform(-25.85,-10.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AgZCvIgXgEIgQgDIgUhJIAhAJQARADAMAAQAMAAAHgCQAGgBAEgIQADgHAAgRIgJAAIgBAAQgoAAgWgWQgVgYgBguIAAg6QABgzAVgYQAWgXApAAIAAAAIAmACIAuADIAAD6QAAAzgVAXQgXAYgtAAQgJAAgMgCgAgGhlQgDAFAAAPIAAA8QAAAPADAEQADAEAHAAIABAAIADAAIACAAIAAg1IAAg3IgEAAIgBAAIgBAAQgHAAgDAFg");
	this.shape_10.setTransform(-50.55,-1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AglCzIAAj2IBLAAIAAD2gAgZhvQgJgKAAgSQAAgTAJgKQAJgKAQAAQAQAAAIAKQAKAKgBATQABASgKAKQgIALgQAAQgQAAgJgLg");
	this.shape_11.setTransform(-65.7,-10.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AhbCsIAAlXIBXAAQAaAAAVAJQAVAIAMATQAMATAAAdIAAAJQABAZgJARQgJARgTAJQAUAHALAQQAJARAAAeIAAAVQAAAegMAUQgKAUgVAKQgUALgbAAgAgMBhIAFAAQAJAAADgFQAEgEgBgJIAAgiQABgKgEgFQgDgFgJAAIgFAAgAgMglIAGAAQAJAAADgFQAEgFAAgJIAAgVQAAgJgDgFQgDgFgKAAIgGAAg");
	this.shape_12.setTransform(-81.45,-10.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AAKCBIAAitQAAgHgDgDQgDgDgEgBIgFAAIgEABIAAC6IhLAAIAAjxQAZgIAXgEQAXgEARAAQAmAAAVASQAVASABApIAAC0g");
	this.shape_13.setTransform(-107.575,-5.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AglCzIAAj2IBKAAIAAD2gAgZhvQgJgKAAgSQAAgTAJgKQAIgKARAAQAQAAAJAKQAJAKAAATQAAASgJAKQgJALgQAAQgRAAgIgLg");
	this.shape_14.setTransform(-123.15,-10.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AAPCsIgPjOIgODOIhmAAIgZlXIBUAAIADEHIAXkHIA/AAIAWEHIAFkHIBTAAIgaFXg");
	this.shape_15.setTransform(-143.65,-10.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-160.1,-37.2,320.29999999999995,63.900000000000006), null);


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


(lib.other_prize_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-282,-342,2.1199,2.1199);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.other_prize_mc, new cjs.Rectangle(-282,-342,563.9,176), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgVCqQgJgEgHgJQgGgJAAgOQAAgSAMgKQANgKASAAQAUAAAMAKQANAKAAASQgBAOgFAJQgHAJgKAEQgKAEgMAAQgLAAgKgEgAgmA7IAAjoIBNAAIAADog");
	this.shape.setTransform(137.45,1.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaCqIgWgEIgQgEIgUhIIAiAIQAQAEAMgBQAMAAAHgCQAHgBACgIQADgHAAgRIgGABIgGAAQgVAAgSgHQgTgHgMgSQgLgSAAgfIAAidIBLAAIAACbQAAAIADACQADAEAFAAIADAAIAEgBIABhVIAAhTIBLAAIAAD0QAAAzgWAYQgVAYgugBQgJAAgNgBg");
	this.shape_1.setTransform(119.15,10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhABvQgTgUAAglIAAgEQAAgkATgTQAVgUAoAAIAFAAIAIABIAAgLQAAgOgHgGQgGgGgTABQgLAAgOADQgOAEgOAFIAUhJQAEgCAIgCIAUgEIAUgBQAgAAATAKQAUAJAIATQAIATAAAdIAAChQgXAGgVAEQgWADgVABQgoAAgVgUgAgEAcQgFAEAAAJIAAAIQAAAKAFAEQAEAFAFAAIAFAAIAAgsIgFAAQgFAAgEAEg");
	this.shape_2.setTransform(98.8014,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhACXQgUgWABgyIAAhKQgBgwAUgWQAUgXAsABIAKAAIAAhWIBKAAIAAFPIgqAJQgVACgUABQgtAAgUgXgAgGgNQgDAFAAAPIAABIQAAAPADAFQADAFAIgBIAFAAIAAh4IgFAAIgBAAQgHAAgDAEg");
	this.shape_3.setTransform(78.9244,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZCqIgXgEIgQgEIgUhIIAiAIQARAEALgBQAMAAAHgCQAHgBACgIQAEgHAAgRIgHABIgGAAQgVAAgSgHQgTgHgMgSQgKgSgBgfIAAidIBMAAIAACbQAAAIACACQADAEAFAAIADAAIAFgBIAAhVIAAhTIBLAAIAAD0QAAAzgVAYQgWAYgugBQgJAAgMgBg");
	this.shape_4.setTransform(59.05,10.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag9CBIAAj3QAOgEAWgCQAWgEAYAAIApAAIAABGIgpAAIgHAAIgGABIAAC6g");
	this.shape_5.setTransform(42.2,5.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag4BrQgZgYAAgyIAAhGQgBgwAWgXQAUgWAsAAQAoAAATAWQATAXAAAwIAAA7IhYAAIAAAOQgBALAIAHQAJAHASAAIASgBIASgEIAGBEQgQAEgOABQgPACgKAAQgtAAgagYgAgEg9QgCAFAAALIAAATIASAAIAAgTQAAgLgCgFQgCgFgFABIgBAAQgEAAgCAEg");
	this.shape_6.setTransform(25.2,5.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvB7Igqj2IBLAAIAQC1IANi1IBLAAIglD2g");
	this.shape_7.setTransform(5.425,5.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhLCsIAAlXICWAAIAABJIhIAAIAAA7IA7AAIAABJIg7AAIAABBIBJAAIAABJg");
	this.shape_8.setTransform(-12.95,0.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AgZCvIgXgDIgQgEIgUhJIAhAIQARAEAMAAQAMAAAHgBQAGgCAEgIQADgHAAgQIgJAAIgBAAQgogBgWgXQgVgWgBgvIAAg6QABgzAVgYQAWgXApAAIAAAAIAmABIAuAEIAAD6QAAAygVAYQgXAYgtAAQgJAAgMgCgAgGhlQgDAFAAAQIAAA6QAAAQADAFQADAEAHgBIABAAIADAAIACAAIAAg1IAAg3IgEAAIgBAAIgBAAQgHAAgDAFg");
	this.shape_9.setTransform(-37.5,9.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AglCzIAAj2IBLAAIAAD2gAgZhuQgJgKAAgUQAAgRAJgLQAJgKAQAAQAQAAAIAKQAKALgBARQABAUgKAKQgIAKgQABQgQgBgJgKg");
	this.shape_10.setTransform(-52.65,0.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AhbCsIAAlXIBXAAQAaAAAVAJQAVAIAMATQAMATAAAdIAAAJQABAZgJARQgJARgTAJQAUAHALAQQAJARAAAeIAAAVQAAAegMAUQgKAUgVAKQgUALgbAAgAgMBhIAFAAQAJAAADgFQAEgEgBgJIAAgiQABgKgEgFQgDgFgJAAIgFAAgAgMglIAGAAQAJAAADgFQAEgFAAgJIAAgVQAAgJgDgFQgDgFgKAAIgGAAg");
	this.shape_11.setTransform(-68.4,0.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AAKCBIAAitQAAgHgDgEQgDgDgEAAIgFAAIgEABIAAC6IhLAAIAAjxQAZgIAXgDQAXgFARAAQAmAAAVASQAVASABApIAAC0g");
	this.shape_12.setTransform(-94.525,5.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AglCzIAAj2IBKAAIAAD2gAgZhuQgJgKAAgUQAAgRAJgLQAIgKARAAQAQAAAJAKQAJALAAARQAAAUgJAKQgJAKgQABQgRgBgIgKg");
	this.shape_13.setTransform(-110.1,0.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AAPCsIgPjOIgODOIhmAAIgZlXIBUAAIADEHIAXkHIA/AAIAWEHIAFkHIBTAAIgaFXg");
	this.shape_14.setTransform(-130.6,0.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-147.1,-26.2,294.29999999999995,63.8), null);


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


(lib.consolation_caption_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgmB/QgRgBgWgHIAHhHQAPAGAOADQAOADANAAQAMAAAGgCQAGgDABgGQAAgFgEgDQgDgEgIgDIgIgEIgIgEQgbgLgNgSQgNgVAAgdQAAgUAIgRQAIgQAQgLQARgKAZgBQAKAAASACQASACATAGIgGBDIgYgFQgMgDgMAAQgKAAgEADQgFACAAAGQAAAEAEADIALAGIAIAEIAHAEQARAHAMAKQANAKAHAMQAGAOAAAVQAAAYgJASQgIASgUALQgUALgfAAIgFAAIgXgCg");
	this.shape.setTransform(206.275,-79.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8B/IAAjzIAkgHQAVgDAYAAIAoAAIAABFIgoAAIgHAAIgGABIAAC3g");
	this.shape_1.setTransform(191.075,-79.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2BpQgZgXgBgyIAAhEQAAgvAVgXQAUgWAqAAQAoAAATAWQATAXAAAvIAAA6IhXAAIAAANQAAAMAHAGQAJAHASAAIARgBIASgDIAGBCQgQAEgOABQgOACgKAAQgsAAgZgYgAgEg8QgCAFAAALIAAATIASAAIAAgTQAAgLgCgFQgCgEgFAAQgFAAgCAEg");
	this.shape_2.setTransform(174.3756,-79.6505);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJB/IAAirQAAgGgCgEQgDgDgFAAIgDAAIgFABIAAC3IhKAAIAAjtQAZgIAWgEQAYgEAQAAQAmAAAUASQAVASABAoIAACxg");
	this.shape_3.setTransform(155.05,-79.8757);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAJB/IAAirQABgGgDgEQgDgDgEAAIgFAAIgEABIAAC3IhJAAIAAjtQAYgIAWgEQAYgEAQAAQAmAAAVASQAUASAAAoIAACxg");
	this.shape_4.setTransform(135.05,-79.8757);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkCwIAAjyIBJAAIAADygAgYhtQgJgKAAgSQAAgSAJgKQAIgKAQAAQAQAAAIAKQAJAKAAASQAAASgJAKQgIALgQAAQgQAAgIgLg");
	this.shape_5.setTransform(119.7,-84.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPCpIgPjKIgNDKIhlAAIgYlRIBSAAIADECIAXkCIA9AAIAWECIAFkCIBSAAIgZFRg");
	this.shape_6.setTransform(99.6,-84.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2BpQgZgXgBgyIAAhEQAAgvAVgXQAUgWAqAAQAoAAATAWQATAXAAAvIAAA6IhXAAIAAANQAAAMAHAGQAJAHASAAIARgBIASgDIAGBCQgQAEgOABQgOACgKAAQgsAAgZgYgAgEg8QgCAFAAALIAAATIASAAIAAgTQAAgLgCgFQgCgEgFAAQgFAAgCAEg");
	this.shape_7.setTransform(70.0256,-79.6505);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag8B/IAAjzIAkgHQAVgDAYAAIAoAAIAABFIgoAAIgHAAIgGABIAAC3g");
	this.shape_8.setTransform(54.175,-79.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAACBQgnAAgVgXQgVgWgBgwIAAhIQABgvAVgXQAVgWAnAAIABAAQAnAAAVAWQAVAXABAvIAABIQgBAwgVAWQgVAXgnAAgAgGg2QgCAFAAALIAABNQAAALACAFQACAFAEgBIABAAQAEAAACgFQACgFAAgKIAAhNQAAgLgCgEQgCgGgEAAIgBAAQgEAAgCAFg");
	this.shape_9.setTransform(37.325,-79.6505);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA3CpIAAj8IgDAmIgXDWIg6AAIgXjWIgDgmIAAD8IhLAAIAAlRIB2AAIALCgIABAZIACgZIAMigIB1AAIAAFRg");
	this.shape_10.setTransform(13.475,-84.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AhXBIIAAg1ICvAAIAAA1gAhXgSIAAg1ICvAAIAAA1g");
	this.shape_11.setTransform(-16.325,-78.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AgmB/QgRgBgWgHIAHhHQAPAGAOADQAOADANAAQAMAAAGgCQAGgDABgGQAAgFgEgDQgDgEgIgDIgIgEIgIgEQgbgLgNgSQgNgVAAgdQAAgUAIgRQAIgQAQgLQARgKAZgBQAKAAASACQASACATAGIgGBDIgYgFQgMgDgMAAQgKAAgEADQgFACAAAGQAAAEAEADIALAGIAIAEIAHAEQARAHAMAKQANAKAHAMQAGAOAAAVQAAAYgJASQgIASgUALQgUALgfAAIgFAAIgXgCg");
	this.shape_12.setTransform(-40.325,-79.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("Ag2BpQgZgXgBgyIAAhEQAAgvAVgXQAUgWAqAAQAoAAATAWQATAXAAAvIAAA6IhXAAIAAANQAAAMAHAGQAJAHASAAIARgBIASgDIAGBCQgQAEgOABQgOACgKAAQgsAAgZgYgAgEg8QgCAFAAALIAAATIASAAIAAgTQAAgLgCgFQgCgEgFAAQgFAAgCAEg");
	this.shape_13.setTransform(-58.3244,-79.6505);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AhJB5IAAhEIBDhoIg9AAIAAhGICJAAIAABFIhCBpIBGAAIAABEg");
	this.shape_14.setTransform(-75.675,-79.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AgkCwIAAjyIBJAAIAADygAgYhtQgJgKAAgSQAAgSAJgKQAIgKAQAAQAQAAAIAKQAJAKAAASQAAASgJAKQgIALgQAAQgQAAgIgLg");
	this.shape_15.setTransform(-89.65,-84.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("Ag8B/IAAjzIAkgHQAVgDAYAAIAoAAIAABFIgoAAIgHAAIgGABIAAC3g");
	this.shape_16.setTransform(-101.475,-79.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("AhYCpIAAlRIBSAAQAkAAAVAMQAVAMAJAUQAIAWAAAcIAAAcQgBAlgMASQgMAUgWAIQgVAIgbgBIgFAAIAAB9gAgLgRIADAAQAJAAAEgEQAFgFAAgLIAAglQAAgLgFgFQgEgFgJAAIgDAAg");
	this.shape_17.setTransform(-118.9986,-84.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE400").s().p("Ag2BpQgZgXgBgyIAAhEQAAgvAVgXQAUgWAqAAQAoAAATAWQATAXAAAvIAAA6IhXAAIAAANQAAAMAHAGQAJAHASAAIARgBIASgDIAGBCQgQAEgOABQgOACgKAAQgsAAgZgYgAgEg8QgCAFAAALIAAATIASAAIAAgTQAAgLgCgFQgCgEgFAAQgFAAgCAEg");
	this.shape_18.setTransform(-143.9244,-79.6505);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE400").s().p("Ag8B/IAAjzIAkgHQAVgDAYAAIAoAAIAABFIgoAAIgHAAIgGABIAAC3g");
	this.shape_19.setTransform(-159.775,-79.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE400").s().p("AAACBQgnAAgVgXQgVgWgBgwIAAhIQABgvAVgXQAVgWAnAAIABAAQAnAAAVAWQAVAXABAvIAABIQgBAwgVAWQgVAXgnAAgAgGg2QgCAFAAALIAABNQAAALACAFQACAFAEgBIABAAQAEAAACgFQACgFAAgKIAAhNQAAgLgCgEQgCgGgEAAIgBAAQgEAAgCAFg");
	this.shape_20.setTransform(-176.625,-79.6505);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFE400").s().p("AA3CpIAAj8IgDAmIgXDWIg6AAIgXjWIgDgmIAAD8IhLAAIAAlRIB2AAIALCgIABAZIACgZIAMigIB1AAIAAFRg");
	this.shape_21.setTransform(-200.475,-84.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.consolation_caption_mc, new cjs.Rectangle(-216.2,-110.7,432.5,62.800000000000004), null);


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
	this.instance = new lib._18();
	this.instance.setTransform(281,233,0.735,0.735);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAsIgGgBIgEAAIgBgTIAJACIAGABIAGgBQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIADgHIgCABIgCAAQgFAAgFgCQgEgCgCgFQgCgFABgGIAJgqIATAAIgIApIAAACIADABIAAAAIABAAIAEgWIAFgWIATAAIgNA/QgDAOgGAGQgHAGgMAAIgFgBg");
	this.shape.setTransform(273.45,240.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAtIAShZIATAAIgTBZg");
	this.shape_1.setTransform(269.675,238.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAtIgLgCIAThXIASAAIgFAWIADAAQAMAAAEAFQAEAHgDALIgEAUQgDANgGAGQgHAFgKAAIgLAAgAgDAbIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBABAAIACgGIAEgSQABgDgBgBQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape_2.setTransform(265.2981,238.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAvIANhAIATAAIgOBAgAABgcQgBgDAAgFQABgEADgEQADgCAEAAQAEAAACACQACAEgBAEQgBAFgDADQgDACgEAAQgEAAgCgCg");
	this.shape_3.setTransform(261.52,237.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAiIgKgCIAFgTIAIACIAHABIAFAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIgCgCIgCgBIgCgBQgGgDgDgEQgCgGACgIQABgFADgFQADgEAFgDQAEgCAHAAIAHAAIAKACIgGASIgGgCIgGAAIgEAAIgCACIABADIADACIABABIACAAIAHAFQADACABADIAAAJQgCAHgDAEQgDAGgGACQgGAEgIAAIgHgBg");
	this.shape_4.setTransform(257.525,239.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAiIAJgtQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgCABIgBAAIgJAwIgUAAIAOg/IANgDIAJgBQALAAAEAFQAFAFgCAKIgKAvg");
	this.shape_5.setTransform(252.5058,239.1727);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAcQgDgGACgMIAEgTQADgMAGgHQAHgGAKABQALgBAFAGQADAHgCAMIgEATQgDAMgGAGQgIAGgJAAQgMAAgEgGgAABgOIgBAFIgDATIgBAFQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIABgEIADgTIABgFIgBgBQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAg");
	this.shape_6.setTransform(247.5,239.2231);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAuIAThaIAIAAIAHgBIAGAAQAMAAAEAGQAEAGgCANIgEATQgDAMgHAGQgGAGgLAAIgCAAIgFAXgAgBAEIABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIACgEIAEgTQABgEgBgBQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgCAAg");
	this.shape_7.setTransform(241.9231,240.3981);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAiIgKgCIAFgTIAIACIAHABIAFAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIgCgCIgCgBIgCgBQgGgDgDgEQgCgGACgIQABgFADgFQADgEAFgDQAEgCAHAAIAHAAIAKACIgGASIgGgCIgGAAIgEAAIgCACIABADIADACIABABIACAAIAHAFQADACABADIAAAJQgCAHgDAEQgDAGgGACQgGAEgIAAIgHgBg");
	this.shape_8.setTransform(237.275,239.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAcQgFgGACgNIAEgSQADgNAHgGQAGgGALABQAKgBAEAGQAEAGgDANIgDAPIgXAAIAAADQgBADACACQACACAEAAIAEAAIAFgBIgCASIgIABIgFAAQgNAAgFgGgAACgPIgCAEIAAAFIAEAAIABgFIABgEQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIgBAAIgBABg");
	this.shape_9.setTransform(232.6604,239.2231);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAtIAAgiIgCAAIgHAiIgUAAIAThZIAVAAQAKAAAFADQAEADACAGQABAFgCAIIgBAGQgCAHgCAFIgHAGIACAogAAAgFIABAAIAEgBIACgFIACgIQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_10.setTransform(227.1167,238.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAsIgGgBIgFAAIgBgTIAJACIAHABIAGgBQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAIADgHIgCABIgBAAQgHAAgDgCQgFgCgCgFQgDgFADgGIAIgqIATAAIgIApIAAACIACABIABAAIABAAIAEgWIAFgWIAUAAIgOA/QgCAOgIAGQgGAGgMAAIgFgBg");
	this.shape_11.setTransform(220.15,240.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAdQgEgFACgKIAAgBQACgJAHgFQAGgFAKAAIABAAIACAAIABgCQAAgEgBgCQgBgBgEAAIgHABIgIACIAJgTIAEgBIAEgBIAFAAQAJAAAEACQAFADABAFQABAFgBAHIgJAqIgMACIgLABQgKAAgFgFgAgCAHQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABIAAACQAAAAAAABQAAAAAAABQAAABAAAAQAAAAAAABIADABIABAAIABgMIgBAAIgCABg");
	this.shape_12.setTransform(214.8867,239.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAtIAShZIATAAIgTBZg");
	this.shape_13.setTransform(211.175,238.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeAtIAThZIAVAAQAKAAAFADQAEADABAGQACAFgCAIIgCAHQgCAKgEAFQgEAEgHADQgGACgGAAIgCAAIgHAhgAAAgEIABAAIADgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAgBIACgJQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBAAg");
	this.shape_14.setTransform(206.8571,238.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAqIAAgYIgQg7IATAAIAFAcIAGgcIATAAIgPA7IAAAYg");
	this.shape_15.setTransform(104.075,238.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAqIAAhTIATAAIAABAIATAAIAAATg");
	this.shape_16.setTransform(99.15,238.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAUAAQAJAAAFAEQAFACACAGQACAEAAAIIAAAHQAAAIgDAEQgDAFgFACQgGACgGAAIgBAAIAAAfgAgCgEIABAAIADgBIABgDIAAgJIgBgFIgDgBIgBAAg");
	this.shape_17.setTransform(94.38,238.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAUAAQAJAAAFAEQAFACACAGQACAEAAAIIAAAHQAAAIgDAEQgDAFgFACQgGACgGAAIgBAAIAAAfgAgCgEIABAAIADgBIABgDIAAgJIgBgFIgDgBIgBAAg");
	this.shape_18.setTransform(89.38,238.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAGAqIgBgQIgJAAIgBAQIgTAAIALhTIAbAAIALBTgAADAIIgDgWIAAgGIAAAGIgCAWIAFAAg");
	this.shape_19.setTransform(84.225,238.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKAqIgKgDIAGgRIAGACIAFABIAEgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgGIgDgEIgGgGIgEgHQgBgEAAgFIAAgBQAAgKAFgGQAGgGAJgBIAIABIAJADIgFAQIgFgBIgEgBQgDAAgBACQgBAAAAABQAAAAAAAAQAAABAAABQAAAAAAABIABAEIAEAGIADABIACACIAFAGIAFAHIAAALQAAAHgCAGQgDAFgEADQgFADgGAAIgKgBg");
	this.shape_20.setTransform(78.05,238.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEASIgEgjIARAAIgDAjg");
	this.shape_21.setTransform(74.6,236.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOAlQgGgHAAgMIAAgjQAAgMAGgGQAGgHALAAIAJABIAIADIgIAPIgCgBIgEAAQgDAAgCADQgBACAAAEIAAAfQAAAEABADQADACADAAIAEAAIADgBIAHAPIgJADIgJABQgLAAgGgGg");
	this.shape_22.setTransform(71.3,238.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWAmQgGgGAAgLIAAgKQAAgGADgEQACgCAFgBIgDgHIgBgGIAAgGQAAgHACgFQABgEAEgDQAEgCAIAAQAFAAADACQAEACABAFQACAFAAAHIAAAFIgBAGQgBAEgCACQgDADgEABIAHAKIgBgFIAAgFIAPAAIAAALIgBAIIgDAHIALAQIgTAAIgCgDIgFADIgGABQgNAAgGgFgAgKANIAAADIAAACQAAAFACACQACACAEAAIABAAIABgBIgKgPgAgFgYIgBADIAAAJIAAACIAAABIADgCIABgEIAAgGIAAgDIgCgBQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAg");
	this.shape_23.setTransform(65.625,238.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAqIAAhAIgLAAIAAgTIApAAIAAATIgMAAIAABAg");
	this.shape_24.setTransform(60.275,238.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHA1IAAhpIAPAAIAABpg");
	this.shape_25.setTransform(52.525,239.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKApQgFgDgDgFQgDgEAAgIIAAgJIABgFIAAgEIABgDIAIgVIAIgVIARAAIgGAPIgGAPIAAAAIABAAQAKAAAEAGQAFAFgBAJIAAAKQAAAIgCAFQgDAGgEADQgFADgHAAQgFAAgFgCgAAAADIgBACIAAARIABADIAAAAIACgBIAAgCIAAgRIAAgBIgCgBIAAAAg");
	this.shape_26.setTransform(44.5525,238.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKApQgFgDgDgFQgDgEAAgIIAAgJIABgFIAAgEIABgDIAIgVIAIgVIARAAIgGAPIgGAPIAAAAIABAAQAKAAAEAGQAFAFgBAJIAAAKQAAAIgCAFQgDAGgEADQgFADgHAAQgFAAgFgCgAAAADIgBACIAAARIABADIAAAAIACgBIAAgCIAAgRIAAgBIgCgBIAAAAg");
	this.shape_27.setTransform(39.6025,238.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUAqIAAgRIAMgNIAIgNQADgHAAgGIAAgBQAAgDgBgCQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAIgEgBIgGABIgFABIgGgPIAJgEQAGgBAGAAQAHAAAEADQAFAEADAGQACAFAAAHIAAABIgBAMQgCAEgEAFIgGAKIgHAJIASAAIAAARg");
	this.shape_28.setTransform(34.85,238.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgKAqIgKgDIAFgRIAHACIAFABIAEgBQAAgBABAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgGIgDgEIgGgGIgEgHQgBgEAAgFIAAgBQAAgKAFgGQAGgGAJgBIAIABIAJADIgFAQIgFgBIgEgBQgDAAgBACQgBAAAAABQAAAAAAAAQAAABAAABQAAAAAAABIABAEIAEAGIADABIACACIAFAGIAFAHIAAALQAAAHgCAGQgDAFgEADQgFADgGAAIgKgBg");
	this.shape_29.setTransform(29,238.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRAqIAAhTIAjAAIAAASIgRAAIAAAPIAOAAIAAAQIgOAAIAAAQIARAAIAAASg");
	this.shape_30.setTransform(24.875,238.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAqIAAhTIASAAIAABTg");
	this.shape_31.setTransform(21.5,238.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAEAqIgGggIgBAAIAAAgIgTAAIAAhTIAUAAQAIAAAGAEQAEACADAGQACAEAAAIIAAAGQgBAGgBAEQgCAEgDACIAJAlgAgDgFIAAAAIADgBIABgDIAAgIIgBgFIgDgBIAAAAg");
	this.shape_32.setTransform(17.55,238.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRAqIAAhTIAjAAIAAASIgRAAIAAAPIAOAAIAAAQIgOAAIAAAQIARAAIAAASg");
	this.shape_33.setTransform(12.975,238.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgKAqIgKgDIAGgRIAGACIAFABIAEgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgGIgDgEIgGgGIgEgHQgCgEAAgFIAAgBQABgKAFgGQAFgGAKgBIAIABIAJADIgFAQIgFgBIgEgBQgDAAgBACQgBAAAAABQAAAAAAAAQAAABAAABQgBAAAAABIACAEIAEAGIACABIADACIAFAGIAFAHIABALQgBAHgCAGQgDAFgEADQgGADgFAAIgKgBg");
	this.shape_34.setTransform(8.65,238.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(283));

	// footer_bg
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5050F").s().p("A4uBuIAAjbMAxdAAAIAADbg");
	this.shape_35.setTransform(149.9,238.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(283));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(149.85,19,0.4261,0.4261,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(250).to({alpha:0},16).wait(17));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(149.85,198.4,0.2992,0.2992,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(266).to({_off:false},0).wait(1).to({regX:-0.3,regY:87.2,x:149.7,y:224.35,alpha:0.0032},0).wait(1).to({y:224.15,alpha:0.0145},0).wait(1).to({y:223.75,alpha:0.0371},0).wait(1).to({y:223,alpha:0.077},0).wait(1).to({y:221.7,alpha:0.1467},0).wait(1).to({y:219.5,alpha:0.2672},0).wait(1).to({y:216.75,alpha:0.4164},0).wait(1).to({y:214,alpha:0.5648},0).wait(1).to({y:211.7,alpha:0.6887},0).wait(1).to({y:209.9,alpha:0.7859},0).wait(1).to({y:208.5,alpha:0.8625},0).wait(1).to({y:207.4,alpha:0.9229},0).wait(1).to({y:206.65,alpha:0.9628},0).wait(1).to({y:206.25,alpha:0.9857},0).wait(1).to({y:206.05,alpha:0.9969},0).wait(1).to({regX:0.1,regY:0.1,x:149.85,y:179.95,alpha:1},0).wait(1));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(-131.2,112.6,0.4156,0.4156,0,0,0,-0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(250).to({_off:false},0).wait(1).to({regX:-0.4,regY:0.3,x:-130.35,y:112.65},0).wait(1).to({x:-127.2},0).wait(1).to({x:-120.85,y:112.7},0).wait(1).to({x:-109.65,y:112.8},0).wait(1).to({x:-90.05,y:112.9},0).wait(1).to({x:-56.2,y:113.15},0).wait(1).to({x:-14.25,y:113.45},0).wait(1).to({x:27.4,y:113.75},0).wait(1).to({x:62.25,y:114},0).wait(1).to({x:89.55,y:114.2},0).wait(1).to({x:111.05,y:114.35},0).wait(1).to({x:128.05,y:114.45},0).wait(1).to({x:139.25,y:114.55},0).wait(1).to({x:145.7,y:114.6},0).wait(1).to({x:148.85},0).wait(1).to({regX:0.1,regY:0.1,x:149.85},0).wait(17));

	// main_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(148.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:-1.5,regY:-6.1,x:147.5,y:218.4,alpha:0.0037},0).wait(1).to({y:218.25,alpha:0.0167},0).wait(1).to({y:217.95,alpha:0.0435},0).wait(1).to({y:217.45,alpha:0.0919},0).wait(1).to({x:147.45,y:216.5,alpha:0.1816},0).wait(1).to({x:147.4,y:214.95,alpha:0.3248},0).wait(1).to({x:147.35,y:213.25,alpha:0.4878},0).wait(1).to({x:147.3,y:211.65,alpha:0.6345},0).wait(1).to({x:147.25,y:210.45,alpha:0.7499},0).wait(1).to({y:209.5,alpha:0.8388},0).wait(1).to({x:147.2,y:208.75,alpha:0.9088},0).wait(1).to({y:208.25,alpha:0.9564},0).wait(1).to({y:207.95,alpha:0.9834},0).wait(1).to({y:207.8,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:148.05,y:211.05,alpha:1},0).wait(60).to({x:148.4,y:211.25},0).wait(1).to({regX:-1.5,regY:-6.1,x:147.55,y:208,alpha:0.9963},0).wait(1).to({y:208.15,alpha:0.9833},0).wait(1).to({y:208.45,alpha:0.9565},0).wait(1).to({y:208.95,alpha:0.9081},0).wait(1).to({y:209.85,alpha:0.8184},0).wait(1).to({y:211.35,alpha:0.6752},0).wait(1).to({y:213.05,alpha:0.5122},0).wait(1).to({y:214.6,alpha:0.3655},0).wait(1).to({y:215.8,alpha:0.2501},0).wait(1).to({y:216.75,alpha:0.1612},0).wait(1).to({y:217.45,alpha:0.0912},0).wait(1).to({y:217.95,alpha:0.0436},0).wait(1).to({y:218.25,alpha:0.0166},0).wait(1).to({y:218.4,alpha:0.0036},0).wait(1).to({regX:0.1,regY:0.1,x:148.4,y:221.7,alpha:0},0).to({_off:true},1).wait(177));

	// other_prize
	this.instance_5 = new lib.other_prize_mc();
	this.instance_5.setTransform(149.85,221.1,0.3828,0.3828,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(173).to({_off:false},0).wait(1).to({regX:-0.1,regY:-254,x:149.75,y:123.8,alpha:0.0037},0).wait(1).to({y:123.65,alpha:0.0167},0).wait(1).to({y:123.35,alpha:0.0435},0).wait(1).to({y:122.75,alpha:0.0919},0).wait(1).to({y:121.75,alpha:0.1816},0).wait(1).to({y:120.1,alpha:0.3248},0).wait(1).to({y:118.25,alpha:0.4878},0).wait(1).to({y:116.55,alpha:0.6345},0).wait(1).to({y:115.25,alpha:0.7499},0).wait(1).to({y:114.2,alpha:0.8388},0).wait(1).to({y:113.4,alpha:0.9088},0).wait(1).to({y:112.85,alpha:0.9564},0).wait(1).to({y:112.55,alpha:0.9834},0).wait(1).to({y:112.4,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:149.85,y:209.65,alpha:1},0).wait(63).to({regX:-0.1,regY:-254,x:150.6,y:112.35},0).wait(1).to({x:153.75},0).wait(1).to({x:160.1,y:112.3},0).wait(1).to({x:171.25,y:112.2},0).wait(1).to({x:190.7,y:112},0).wait(1).to({x:224.35,y:111.75},0).wait(1).to({x:266,y:111.4},0).wait(1).to({x:307.45,y:111},0).wait(1).to({x:342.05,y:110.7},0).wait(1).to({x:369.2,y:110.5},0).wait(1).to({x:390.55,y:110.3},0).wait(1).to({x:407.45,y:110.15},0).wait(1).to({x:418.6,y:110.05},0).wait(1).to({x:425,y:110},0).wait(1).to({x:428.1},0).wait(1).to({regX:0.1,regY:0.1,x:429.1,y:207.25},0).wait(17));

	// consolation_caption
	this.instance_6 = new lib.consolation_caption_mc();
	this.instance_6.setTransform(148.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(173).to({_off:false},0).wait(1).to({regX:0.3,regY:-84.5,x:148.45,y:177.6,alpha:0.0037},0).wait(1).to({y:177.45,alpha:0.0167},0).wait(1).to({y:177.15,alpha:0.0435},0).wait(1).to({y:176.65,alpha:0.0919},0).wait(1).to({x:148.4,y:175.7,alpha:0.1816},0).wait(1).to({x:148.35,y:174.15,alpha:0.3248},0).wait(1).to({x:148.3,y:172.45,alpha:0.4878},0).wait(1).to({x:148.25,y:170.85,alpha:0.6345},0).wait(1).to({x:148.2,y:169.65,alpha:0.7499},0).wait(1).to({y:168.7,alpha:0.8388},0).wait(1).to({x:148.15,y:167.95,alpha:0.9088},0).wait(1).to({y:167.45,alpha:0.9564},0).wait(1).to({y:167.15,alpha:0.9834},0).wait(1).to({y:167,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:148.05,y:211.05,alpha:1},0).wait(62).to({x:148.4,y:211.25},0).wait(1).to({regX:0.3,regY:-84.5,x:149.4,y:167.2},0).wait(1).to({x:152.55},0).wait(1).to({x:158.85},0).wait(1).to({x:170.05},0).wait(1).to({x:189.55},0).wait(1).to({x:223.3},0).wait(1).to({x:265.05},0).wait(1).to({x:306.65},0).wait(1).to({x:341.3},0).wait(1).to({x:368.55},0).wait(1).to({x:389.95},0).wait(1).to({x:406.9},0).wait(1).to({x:418.05},0).wait(1).to({x:424.45},0).wait(1).to({x:427.6},0).wait(1).to({regX:0.1,regY:0.1,x:428.4,y:211.25},0).wait(17));

	// sub_caption
	this.instance_7 = new lib.daily_caption_mc();
	this.instance_7.setTransform(148.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(98).to({_off:false},0).wait(1).to({regX:-1.5,regY:4.8,x:147.5,y:224.1,alpha:0.0037},0).wait(1).to({y:223.95,alpha:0.0167},0).wait(1).to({y:223.65,alpha:0.0435},0).wait(1).to({y:223.15,alpha:0.0919},0).wait(1).to({x:147.45,y:222.2,alpha:0.1816},0).wait(1).to({x:147.4,y:220.65,alpha:0.3248},0).wait(1).to({x:147.35,y:218.95,alpha:0.4878},0).wait(1).to({x:147.3,y:217.35,alpha:0.6345},0).wait(1).to({x:147.25,y:216.15,alpha:0.7499},0).wait(1).to({y:215.2,alpha:0.8388},0).wait(1).to({x:147.2,y:214.45,alpha:0.9088},0).wait(1).to({y:213.95,alpha:0.9564},0).wait(1).to({y:213.65,alpha:0.9834},0).wait(1).to({y:213.5,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:148.05,y:211.05,alpha:1},0).wait(60).to({x:148.4,y:211.25},0).wait(1).to({regX:-1.5,regY:4.8,x:147.55,y:213.7,alpha:0.9963},0).wait(1).to({y:213.85,alpha:0.9833},0).wait(1).to({y:214.15,alpha:0.9565},0).wait(1).to({y:214.65,alpha:0.9081},0).wait(1).to({y:215.55,alpha:0.8184},0).wait(1).to({y:217.05,alpha:0.6752},0).wait(1).to({y:218.75,alpha:0.5122},0).wait(1).to({y:220.3,alpha:0.3655},0).wait(1).to({y:221.5,alpha:0.2501},0).wait(1).to({y:222.45,alpha:0.1612},0).wait(1).to({y:223.15,alpha:0.0912},0).wait(1).to({y:223.65,alpha:0.0436},0).wait(1).to({y:223.95,alpha:0.0166},0).wait(1).to({y:224.1,alpha:0.0036},0).wait(1).to({regX:0.1,regY:0.1,x:148.4,y:221.7,alpha:0},0).wait(95));

	// second_prize
	this.instance_8 = new lib.second_prize_mc();
	this.instance_8.setTransform(150,133.3);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(98).to({_off:false},0).wait(1).to({y:133.2373,alpha:0.0037},0).wait(1).to({y:133.0154,alpha:0.0167},0).wait(1).to({y:132.5612,alpha:0.0435},0).wait(1).to({y:131.7384,alpha:0.0919},0).wait(1).to({y:130.2134,alpha:0.1816},0).wait(1).to({y:127.7785,alpha:0.3248},0).wait(1).to({y:125.0078,alpha:0.4878},0).wait(1).to({y:122.5143,alpha:0.6345},0).wait(1).to({y:120.5515,alpha:0.7499},0).wait(1).to({y:119.0405,alpha:0.8388},0).wait(1).to({y:117.851,alpha:0.9088},0).wait(1).to({y:117.0413,alpha:0.9564},0).wait(1).to({y:116.5816,alpha:0.9834},0).wait(1).to({y:116.3612,alpha:0.9964},0).wait(1).to({y:116.3,alpha:1},0).wait(61).to({x:149.9989,y:116.2262,alpha:0.9963},0).wait(1).to({x:149.995,y:115.9652,alpha:0.9833},0).wait(1).to({x:149.987,y:115.4308,alpha:0.9565},0).wait(1).to({x:149.9724,y:114.4628,alpha:0.9081},0).wait(1).to({x:149.9455,y:112.6687,alpha:0.8184},0).wait(1).to({x:149.9026,y:109.8041,alpha:0.6752},0).wait(1).to({x:149.8537,y:106.5445,alpha:0.5122},0).wait(1).to({x:149.8097,y:103.6109,alpha:0.3655},0).wait(1).to({x:149.775,y:101.3018,alpha:0.2501},0).wait(1).to({x:149.7484,y:99.5241,alpha:0.1612},0).wait(1).to({x:149.7274,y:98.1247,alpha:0.0912},0).wait(1).to({x:149.7131,y:97.1721,alpha:0.0436},0).wait(1).to({x:149.705,y:96.6313,alpha:0.0166},0).wait(1).to({x:149.7011,y:96.372,alpha:0.0036},0).wait(1).to({x:149.7,y:96.3,alpha:0},0).to({_off:true},1).wait(94));

	// promo
	this.instance_9 = new lib.promo_mc();
	this.instance_9.setTransform(295.65,116.65,0.4337,0.4337,0,0,0,0.1,0);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:0,x:295.0622,alpha:0.0037},0).wait(1).to({x:293.1593,alpha:0.0167},0).wait(1).to({x:289.2635,alpha:0.0435},0).wait(1).to({x:282.207,alpha:0.0919},0).wait(1).to({x:269.1282,alpha:0.1816},0).wait(1).to({x:248.2446,alpha:0.3248},0).wait(1).to({x:224.4825,alpha:0.4878},0).wait(1).to({x:203.0965,alpha:0.6345},0).wait(1).to({x:186.263,alpha:0.7499},0).wait(1).to({x:173.3039,alpha:0.8388},0).wait(1).to({x:163.102,alpha:0.9088},0).wait(1).to({x:156.1575,alpha:0.9564},0).wait(1).to({x:152.2151,alpha:0.9834},0).wait(1).to({x:150.3252,alpha:0.9964},0).wait(1).to({regX:0.1,x:149.85,alpha:1},0).to({_off:true},99).wait(169));

	// background
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5050F").s().p("A4uTiMAAAgnDMAxdAAAMAAAAnDg");
	this.shape_36.setTransform(149.85,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-104.2,125,645.2,125);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_18.jpg", id:"_18"},
		{src:"images/_2ndprize.jpg", id:"_2ndprize"},
		{src:"images/consolation.jpg", id:"consolation"},
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