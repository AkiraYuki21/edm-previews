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
	this.shape.graphics.f("#FFFFFF").s().p("AgZCvIgXgEIgQgDIgUhJIAiAJQARADALAAQAMAAAHgCQAHgBACgIQADgHABgRIgJAAIgBAAQgoAAgWgWQgWgYAAguIAAg6QAAgzAWgYQAWgXApAAIAAAAIAnACIAtADIAAD6QAAAzgVAXQgWAYguAAQgKAAgLgCgAgFhlQgEAFAAAPIAAA8QAAAPADAEQADAEAHAAIABAAIACAAIADAAIAAg1IAAg3IgEAAIgBAAIgBAAQgHAAgCAFg");
	this.shape.setTransform(111.6,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglCzIAAj2IBKAAIAAD2gAgZhvQgJgKAAgSQAAgTAJgKQAIgKARAAQAQAAAJAKQAJAKAAATQAAASgJAKQgJALgQAAQgRAAgIgLg");
	this.shape_1.setTransform(96.45,-10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhbCsIAAlXIBXAAQAaAAAVAJQAVAIAMATQAMATAAAdIAAAJQAAAZgIARQgIARgUAJQAVAHAJAQQAKARAAAeIAAAVQAAAegMAUQgLAUgTAKQgVALgbAAgAgMBhIAEAAQAKAAAEgFQADgEgBgJIAAgiQABgKgDgFQgDgFgLAAIgEAAgAgMglIAGAAQAJAAAEgFQADgFAAgJIAAgVQAAgJgDgFQgDgFgKAAIgGAAg");
	this.shape_2.setTransform(80.7,-10.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKCBIAAitQAAgHgDgDQgDgDgEgBIgFAAIgEABIAAC6IhLAAIAAjxQAZgIAXgEQAXgEARAAQAmAAAVASQAVASABApIAAC0g");
	this.shape_3.setTransform(54.575,-5.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkCzIAAj2IBKAAIAAD2gAgZhvQgJgKAAgSQAAgTAJgKQAJgKAQAAQAQAAAJAKQAIAKABATQgBASgIAKQgJALgQAAQgQAAgJgLg");
	this.shape_4.setTransform(39,-10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPCsIgPjOIgODOIhmAAIgZlXIBUAAIAEEHIAWkHIA/AAIAWEHIAFkHIBTAAIgaFXg");
	this.shape_5.setTransform(18.5,-10.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AhUCwIAAlaIAdgCIAfgCIAYgBQAtAAAUAXQAUAWgBAxIAABKQABAwgUAXQgUAXgtAAIgJAAIAABZgAgJAQIAEAAQAIABAEgFQADgFAAgOIAAhIQAAgQgDgFQgEgFgIABIgEAAg");
	this.shape_6.setTransform(-11.7994,-1.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AguCkQgVgJgLgVQgMgUAAgfIAAkAIBQAAIAAECQAAAIADAEQADADAEAAQAGAAACgDQADgFAAgHIAAkCIBQAAIAAEAQAAAbgKAVQgKAUgUALQgUAMgeAAQgbAAgUgKg");
	this.shape_7.setTransform(-32.775,-9.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AhUCwIAAlaIAdgCIAfgCIAYgBQAtAAAUAXQAUAWgBAxIAABKQABAwgUAXQgUAXgtAAIgJAAIAABZgAgJAQIAEAAQAIABAEgFQADgFAAgOIAAhIQAAgQgDgFQgEgFgIABIgEAAg");
	this.shape_8.setTransform(-58.7994,-1.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("Ag3BrQgagYAAgyIAAhGQgBgwAVgXQAWgWAqAAQApAAATAWQATAXAAAwIAAA7IhZAAIAAAOQABALAHAHQAJAHASAAIASgBIASgEIAHBEQgRAEgPABQgOACgKAAQgtAAgZgYgAgEg9QgCAFgBALIAAATIATAAIAAgTQAAgLgCgFQgCgFgGABIAAAAQgEAAgCAEg");
	this.shape_9.setTransform(-78.45,-5.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AAwCeQgmAAgUgJQgVgJgIgRQgHgRAAgZIAAhlIgWAAIAAhEIAWAAIAAhFIBKAAIAABFIAoAAIAABEIgoAAIAABSQAAAPAHAGQAIAFARAAIAJAAIAABGg");
	this.shape_10.setTransform(-96.1,-8.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AguCtQgTgFgUgIIAVhGQAOAGAMADQAMAEAKAAQAOAAAGgGQAHgFAAgLIAAgCQAAgKgHgLQgHgLgQgQIgPgPQgOgOgLgMQgKgNgFgRQgFgRAAgXIAAgBQAAgtAXgYQAWgaAoAAQAQAAATAEQATAFASAHIgUBCIgVgGIgQgCQgNAAgGAGQgHAFAAALIAAACQAAAIAIAJIAUAWIAHAIIAJAIQAPAPAKAMQAKAOAFAQQAHASgBAYIAAABQABAfgLAXQgMAXgUALQgUAMgaAAQgWAAgVgEg");
	this.shape_11.setTransform(-112.85,-10.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-123.2,-37.2,246.5,63.900000000000006), null);


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
	this.instance.setTransform(-345,-307,2.5917,2.5917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.other_prize_mc, new cjs.Rectangle(-345,-307,689.4,215.1), null);


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
	this.shape.graphics.f("#FFE400").s().p("AgqCMQgSgBgZgIIAHhOQARAHAQACQAPAEAPAAQAMAAAHgCQAHgDABgHQAAgGgEgEQgEgDgIgEIgJgEIgKgEQgdgNgOgUQgPgWAAghQAAgVAJgTQAJgTASgLQASgMAcAAQALAAAUACQAUACAVAHIgHBKQgOgEgNgDQgNgDgNAAQgLABgEADQgGADAAAFQAAAGAFACIAMAIIAIAEIAJADQASAJAOAKQANALAIAOQAHAQAAAXQAAAagKATQgJAVgWAMQgWAMgjAAIgEAAIgagCg");
	this.shape.setTransform(217.125,-6.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("Ag8B0QgbgagBg3IAAhLQAAg0AXgZQAWgYAvAAQAsAAAUAYQAVAZAAA0IAABAIhgAAIAAAPQAAAMAIAHQAKAIATAAIAUgCIATgDIAHBKIghAFIgbACIgCAAQgvAAgbgagAgEhCQgDAFAAAMIAAAVIAUAAIAAgVQAAgMgCgFQgCgFgGAAQgFAAgCAFg");
	this.shape_1.setTransform(197.2995,-6.8495);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AhQCGIAAhMIBJhzIhDAAIAAhMICXAAIAABLIhIB0IBMAAIAABMg");
	this.shape_2.setTransform(178.125,-6.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AgnDCIAAkLIBQAAIAAELgAgch4QgJgLAAgUQAAgUAJgLQALgLARAAQARAAAKALQAKALgBAUQABAUgKALQgKAMgRAAQgRAAgLgMg");
	this.shape_3.setTransform(162.8,-12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AhCCMIAAkLQAPgFAZgDQAXgEAaAAIAsAAIAABMIgsAAIgHAAIgGABIAADKg");
	this.shape_4.setTransform(149.7,-7.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AhhC6IAAlzIBaAAQApAAAXANQAXANAJAXQAJAXAAAfIAAAfQAAAogOAVQgNAWgYAJQgYAJgegBIgFAAIAACJgAgMgTIADAAQAKAAAFgFQAFgFAAgMIAAgpQAAgMgFgFQgEgGgLABIgDAAg");
	this.shape_5.setTransform(130.425,-11.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AgcC4IgYgEIgRgEIgWhPQASAGASADQATAEANAAQANAAAHgCQAHgCADgIQADgIABgSIgIABIgGAAQgXAAgVgIQgTgIgMgUQgMgTgBghIAAiqIBRAAIAACoQABAHADAEQACADAGAAIAEAAIAFgBIAAhbIAAhaIBRAAIAAEIQAAA3gXAaQgXAagzAAQgKAAgNgCg");
	this.shape_6.setTransform(102.25,-1.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AgnC6IAAlzIBQAAIAAFzg");
	this.shape_7.setTransform(85.3,-11.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AANC6IgdhyIAAByIhRAAIAAlzIBRAAIAADOIAYhkIBTAAIgoB5IAvCQg");
	this.shape_8.setTransform(68.65,-11.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("Ag8B0QgbgagBg3IAAhLQAAg0AXgZQAWgYAvAAQAsAAAUAYQAVAZAAA0IAABAIhgAAIAAAPQAAAMAIAHQAKAIATAAIAUgCIATgDIAHBKIghAFIgbACIgCAAQgvAAgbgagAgEhCQgDAFAAAMIAAAVIAUAAIAAgVQAAgMgCgFQgCgFgGAAQgFAAgCAFg");
	this.shape_9.setTransform(46.7495,-6.8495);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("Ag8B0QgbgagBg3IAAhLQAAg0AXgZQAWgYAvAAQAsAAAUAYQAVAZAAA0IAABAIhgAAIAAAPQAAAMAIAHQAKAIATAAIAUgCIATgDIAHBKIghAFIgbACIgCAAQgvAAgbgagAgEhCQgDAFAAAMIAAAVIAUAAIAAgVQAAgMgCgFQgCgFgGAAQgFAAgCAFg");
	this.shape_10.setTransform(26.1995,-6.8495);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AAQC6IgQjfIgPDfIhuAAIgclzIBbAAIAEEdIAZkdIBEAAIAYEdIAFkdIBaAAIgcFzg");
	this.shape_11.setTransform(-0.375,-11.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhFCkQgWgYABg2IAAhQQgBgzAWgaQAVgYAwAAIAKAAIAAhdIBSAAIAAFsQgXAFgXAEQgXADgWAAIgBABQgwAAgVgZgAgGgNQgEAFAAAQIAABOQAAAQAEAFQADAGAJgBIAEAAIAAiDIgEAAQgJAAgDAGg");
	this.shape_12.setTransform(-33.6506,-11.4995);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag8B0QgbgagBg3IAAhLQAAg0AXgZQAWgYAvAAQAsAAAUAYQAVAZAAA0IAABAIhgAAIAAAPQAAAMAIAHQAKAIATAAIAUgCIATgDIAHBKIghAFIgbACIgCAAQgvAAgbgagAgEhCQgDAFAAAMIAAAVIAUAAIAAgVQAAgMgCgFQgCgFgGAAQgFAAgCAFg");
	this.shape_13.setTransform(-54.4505,-6.8495);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag8B0QgbgagBg3IAAhLQAAg0AXgZQAWgYAvAAQAsAAAUAYQAVAZAAA0IAABAIhgAAIAAAPQAAAMAIAHQAKAIATAAIAUgCIATgDIAHBKIghAFIgbACIgCAAQgvAAgbgagAgEhCQgDAFAAAMIAAAVIAUAAIAAgVQAAgMgCgFQgCgFgGAAQgFAAgCAFg");
	this.shape_14.setTransform(-75.0005,-6.8495);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA1CsQgqAAgWgKQgWgKgJgTQgIgSAAgbIAAhuIgYAAIAAhJIAYAAIAAhLIBRAAIAABLIArAAIAABJIgrAAIAABZQgBAQAIAHQAIAFAUAAIAJAAIAABNg");
	this.shape_15.setTransform(-94.125,-10.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AALCMIAAi8QAAgIgDgDQgDgEgGAAIgEABIgFAAIAADKIhRAAIAAkFQAbgJAZgEQAZgFASAAQAqAAAXAUQAWAUABAsIAADDg");
	this.shape_16.setTransform(-113.525,-7.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhFB4QgVgVAAgoIAAgEQAAgoAVgUQAWgWAsAAIAFAAIAIABIAAgLQABgQgIgGQgHgGgUAAQgMAAgPAEQgPADgPAGIAWhPIANgEIAVgEIAWgCQAjAAAVALQAVAKAIAVQAJAVAAAfIAACuQgZAHgXAEQgXAEgXAAQgsAAgWgWgAgFAeQgEAFgBAKIAAAIQABALAEAFQAFAFAGAAIAEAAIAAgxIgEAAQgGAAgFAFg");
	this.shape_17.setTransform(-135.475,-6.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhCCMIAAkLQAPgFAYgDQAYgEAaAAIAsAAIAABMIgsAAIgIAAIgGABIAADKg");
	this.shape_18.setTransform(-153.2,-7.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhFB4QgVgVAAgoIAAgEQAAgoAVgUQAWgWAsAAIAFAAIAIABIAAgLQABgQgIgGQgHgGgUAAQgMAAgPAEQgPADgPAGIAWhPIANgEIAVgEIAWgCQAjAAAVALQAVAKAIAVQAJAVAAAfIAACuQgZAHgXAEQgXAEgXAAQgsAAgWgWgAgFAeQgEAFgBAKIAAAIQABALAEAFQAFAFAGAAIAEAAIAAgxIgEAAQgGAAgFAFg");
	this.shape_19.setTransform(-172.225,-6.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhEB0QgXgUAAgsIAAi7IBRAAIAAC1QAAAHADADQADAEAFAAIAFAAIAFgBIAAjCIBRAAIAAD9QgXAIgXAFQgXAFgaAAIgCAAQgpAAgWgUg");
	this.shape_20.setTransform(-193.725,-6.2494);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhJCmQgZgaAAgzIAAiwQAAghAPgXQAOgXAYgNQAZgMAfAAQAWAAAXAGQAWAGAVALIgfBKQgKgGgNgDQgMgDgMAAQgRAAgHAJQgIAJAAAUIAACiQAAAKADAEQAEAEAGgBIAGAAIADgCIAAiFIBRAAIAAC9QgPAJgOAGQgNAGgPADQgOADgSAAQgzAAgZgag");
	this.shape_21.setTransform(-215.2255,-11.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-227.9,-40.8,455.9,68.9), null);


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
(lib.bigticketawarenesshtml5300x250 = function(mode,startPosition,loop,reversed) {
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
	this.shape_26.graphics.f("#FFFFFF").s().p("AgMAqIANhBIgTAAIAAgSIAlAAIAAASIgNBBg");
	this.shape_26.setTransform(44.425,238.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKApQgFgDgDgFQgDgEAAgIIAAgJIABgFIAAgEIABgDIAIgVIAIgVIARAAIgGAPIgGAPIAAAAIABAAQAKAAAEAGQAFAFgBAJIAAAKQAAAIgCAFQgDAGgEADQgFADgHAAQgFAAgFgCgAAAADIgBACIAAARIABADIAAAAIACgBIAAgCIAAgRIAAgBIgCgBIAAAAg");
	this.shape_27.setTransform(39.9525,238.425);

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

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:-0.7,regY:-6.1,x:147.95,y:218.4,alpha:0.0037},0).wait(1).to({y:218.25,alpha:0.0167},0).wait(1).to({y:217.95,alpha:0.0435},0).wait(1).to({y:217.45,alpha:0.0919},0).wait(1).to({x:147.9,y:216.5,alpha:0.1816},0).wait(1).to({x:147.85,y:214.95,alpha:0.3248},0).wait(1).to({x:147.8,y:213.25,alpha:0.4878},0).wait(1).to({x:147.75,y:211.65,alpha:0.6345},0).wait(1).to({x:147.7,y:210.45,alpha:0.7499},0).wait(1).to({y:209.5,alpha:0.8388},0).wait(1).to({x:147.65,y:208.75,alpha:0.9088},0).wait(1).to({y:208.25,alpha:0.9564},0).wait(1).to({y:207.95,alpha:0.9834},0).wait(1).to({y:207.8,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:148.05,y:211.05,alpha:1},0).wait(68).to({x:148.4,y:211.25},0).wait(1).to({regX:-0.7,regY:-6.1,x:148,y:208,alpha:0.9963},0).wait(1).to({y:208.15,alpha:0.9833},0).wait(1).to({y:208.45,alpha:0.9565},0).wait(1).to({y:208.95,alpha:0.9081},0).wait(1).to({y:209.85,alpha:0.8184},0).wait(1).to({y:211.35,alpha:0.6752},0).wait(1).to({y:213.05,alpha:0.5122},0).wait(1).to({y:214.6,alpha:0.3655},0).wait(1).to({y:215.8,alpha:0.2501},0).wait(1).to({y:216.75,alpha:0.1612},0).wait(1).to({y:217.45,alpha:0.0912},0).wait(1).to({y:217.95,alpha:0.0436},0).wait(1).to({y:218.25,alpha:0.0166},0).wait(1).to({y:218.4,alpha:0.0036},0).wait(1).to({regX:0.1,regY:0.1,x:148.4,y:221.7,alpha:0},0).to({_off:true},1).wait(169));

	// other_prize
	this.instance_5 = new lib.other_prize_mc();
	this.instance_5.setTransform(149.85,221.1,0.3828,0.3828,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(173).to({_off:false},0).wait(1).to({regX:-0.3,regY:-199.4,x:149.7,y:144.7,alpha:0.0037},0).wait(1).to({y:144.55,alpha:0.0167},0).wait(1).to({y:144.25,alpha:0.0435},0).wait(1).to({y:143.65,alpha:0.0919},0).wait(1).to({y:142.65,alpha:0.1816},0).wait(1).to({y:141,alpha:0.3248},0).wait(1).to({y:139.15,alpha:0.4878},0).wait(1).to({y:137.45,alpha:0.6345},0).wait(1).to({y:136.15,alpha:0.7499},0).wait(1).to({y:135.1,alpha:0.8388},0).wait(1).to({y:134.3,alpha:0.9088},0).wait(1).to({y:133.75,alpha:0.9564},0).wait(1).to({y:133.45,alpha:0.9834},0).wait(1).to({y:133.3,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:149.85,y:209.65,alpha:1},0).wait(63).to({regX:-0.3,regY:-199.4,x:150.65,y:133.25},0).wait(1).to({x:154.1},0).wait(1).to({x:161.1,y:133.2},0).wait(1).to({x:173.35,y:133.1},0).wait(1).to({x:194.75,y:132.9},0).wait(1).to({x:231.75,y:132.65},0).wait(1).to({x:277.6,y:132.3},0).wait(1).to({x:323.2,y:131.9},0).wait(1).to({x:361.3,y:131.6},0).wait(1).to({x:391.15,y:131.4},0).wait(1).to({x:414.65,y:131.2},0).wait(1).to({x:433.25,y:131.05},0).wait(1).to({x:445.5,y:130.95},0).wait(1).to({x:452.55,y:130.9},0).wait(1).to({x:455.95},0).wait(1).to({regX:0.1,regY:0.1,x:457.1,y:207.25},0).wait(17));

	// sub_caption
	this.instance_6 = new lib.daily_caption_mc();
	this.instance_6.setTransform(148.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({regX:0.3,regY:-7.3,x:148.45,y:217.8,alpha:0.0037},0).wait(1).to({y:217.65,alpha:0.0167},0).wait(1).to({y:217.35,alpha:0.0435},0).wait(1).to({y:216.85,alpha:0.0919},0).wait(1).to({x:148.4,y:215.9,alpha:0.1816},0).wait(1).to({x:148.35,y:214.35,alpha:0.3248},0).wait(1).to({x:148.3,y:212.65,alpha:0.4878},0).wait(1).to({x:148.25,y:211.05,alpha:0.6345},0).wait(1).to({x:148.2,y:209.85,alpha:0.7499},0).wait(1).to({y:208.9,alpha:0.8388},0).wait(1).to({x:148.15,y:208.15,alpha:0.9088},0).wait(1).to({y:207.65,alpha:0.9564},0).wait(1).to({y:207.35,alpha:0.9834},0).wait(1).to({y:207.2,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:148.05,y:211.05,alpha:1},0).wait(60).to({x:148.4,y:211.25},0).wait(1).to({regX:0.3,regY:-7.3,x:148.5,y:207.4,alpha:0.9963},0).wait(1).to({y:207.55,alpha:0.9833},0).wait(1).to({y:207.85,alpha:0.9565},0).wait(1).to({y:208.35,alpha:0.9081},0).wait(1).to({y:209.25,alpha:0.8184},0).wait(1).to({y:210.75,alpha:0.6752},0).wait(1).to({y:212.45,alpha:0.5122},0).wait(1).to({y:214,alpha:0.3655},0).wait(1).to({y:215.2,alpha:0.2501},0).wait(1).to({y:216.15,alpha:0.1612},0).wait(1).to({y:216.85,alpha:0.0912},0).wait(1).to({y:217.35,alpha:0.0436},0).wait(1).to({y:217.65,alpha:0.0166},0).wait(1).to({y:217.8,alpha:0.0036},0).wait(1).to({regX:0.1,regY:0.1,x:148.4,y:221.7,alpha:0},0).wait(95));

	// second_prize
	this.instance_7 = new lib.second_prize_mc();
	this.instance_7.setTransform(150,133.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(98).to({_off:false},0).wait(1).to({y:133.2373,alpha:0.0037},0).wait(1).to({y:133.0154,alpha:0.0167},0).wait(1).to({y:132.5612,alpha:0.0435},0).wait(1).to({y:131.7384,alpha:0.0919},0).wait(1).to({y:130.2134,alpha:0.1816},0).wait(1).to({y:127.7785,alpha:0.3248},0).wait(1).to({y:125.0078,alpha:0.4878},0).wait(1).to({y:122.5143,alpha:0.6345},0).wait(1).to({y:120.5515,alpha:0.7499},0).wait(1).to({y:119.0405,alpha:0.8388},0).wait(1).to({y:117.851,alpha:0.9088},0).wait(1).to({y:117.0413,alpha:0.9564},0).wait(1).to({y:116.5816,alpha:0.9834},0).wait(1).to({y:116.3612,alpha:0.9964},0).wait(1).to({y:116.3,alpha:1},0).wait(61).to({y:116.2262,alpha:0.9963},0).wait(1).to({y:115.9652,alpha:0.9833},0).wait(1).to({y:115.4308,alpha:0.9565},0).wait(1).to({y:114.4628,alpha:0.9081},0).wait(1).to({y:112.6687,alpha:0.8184},0).wait(1).to({y:109.8041,alpha:0.6752},0).wait(1).to({y:106.5445,alpha:0.5122},0).wait(1).to({y:103.6109,alpha:0.3655},0).wait(1).to({y:101.3018,alpha:0.2501},0).wait(1).to({y:99.5241,alpha:0.1612},0).wait(1).to({y:98.1247,alpha:0.0912},0).wait(1).to({y:97.1721,alpha:0.0436},0).wait(1).to({y:96.6313,alpha:0.0166},0).wait(1).to({y:96.372,alpha:0.0036},0).wait(1).to({y:96.3,alpha:0},0).to({_off:true},1).wait(94));

	// promo
	this.instance_8 = new lib.promo_mc();
	this.instance_8.setTransform(295.65,116.65,0.4337,0.4337,0,0,0,0.1,0);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:0,x:295.0622,alpha:0.0037},0).wait(1).to({x:293.1593,alpha:0.0167},0).wait(1).to({x:289.2635,alpha:0.0435},0).wait(1).to({x:282.207,alpha:0.0919},0).wait(1).to({x:269.1282,alpha:0.1816},0).wait(1).to({x:248.2446,alpha:0.3248},0).wait(1).to({x:224.4825,alpha:0.4878},0).wait(1).to({x:203.0965,alpha:0.6345},0).wait(1).to({x:186.263,alpha:0.7499},0).wait(1).to({x:173.3039,alpha:0.8388},0).wait(1).to({x:163.102,alpha:0.9088},0).wait(1).to({x:156.1575,alpha:0.9564},0).wait(1).to({x:152.2151,alpha:0.9834},0).wait(1).to({x:150.3252,alpha:0.9964},0).wait(1).to({regX:0.1,x:149.85,alpha:1},0).to({_off:true},99).wait(169));

	// background
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5050F").s().p("A4uTiMAAAgnDMAxdAAAMAAAAnDg");
	this.shape_36.setTransform(149.85,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-104.2,125,693.1,125);
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