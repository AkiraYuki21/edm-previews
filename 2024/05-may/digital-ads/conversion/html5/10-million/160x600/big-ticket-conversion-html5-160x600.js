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


(lib.consolation = function() {
	this.initialize(img.consolation);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,83);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,47);


(lib.hero = function() {
	this.initialize(img.hero);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,285);


(lib.lockup = function() {
	this.initialize(img.lockup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,181);


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
	this.instance.setTransform(-193,-819);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-193,-819,386,208), null);


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
	this.shape.graphics.f("#FFE400").s().p("AgKBXQgFgCgDgFQgEgEAAgHQABgJAGgGQAGgFAJAAQAKAAAGAFQAHAGAAAJQAAAHgDAEQgEAFgFACQgFACgGAAQgFAAgFgCgAgTAeIAAh2IAnAAIAAB2g");
	this.shape.setTransform(92.025,-414.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AAHBYIgMhDIgEAAIAABDIgoAAIAAivIAsAAQASAAALAGQALAGAEALQAEALAAAPIAAAMQAAAOgDAJQgDAIgHAFIAUBOgAgJgLIACAAQAGAAABgCQACgDAAgFIAAgRQAAgGgCgDQgBgCgGAAIgCAAg");
	this.shape_1.setTransform(82.15,-414.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AgmBYIAAivIBNAAIAAAmIglAAIAAAdIAeAAIAAAlIgeAAIAAAiIAlAAIAAAlg");
	this.shape_2.setTransform(72.35,-414.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AAdBYIAAiDIgCAUIgMBvIgdAAIgMhvIgCgUIAACDIgnAAIAAivIA9AAIAGBTIAAAMIABgMIAGhTIA9AAIAACvg");
	this.shape_3.setTransform(60.375,-414.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AAdBYIAAiDIgCAUIgMBvIgdAAIgMhvIgCgUIAACDIgnAAIAAivIA9AAIAGBTIAAAMIABgMIAGhTIA9AAIAACvg");
	this.shape_4.setTransform(45.425,-414.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AgXBUQgKgFgHgKQgFgKgBgQIAAiDIAqAAIAACEQgBAEACACQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAAAIABgGIAAiEIAqAAIAACDQAAAOgGAKQgEAKgLAHQgKAFgPAAQgNAAgLgFg");
	this.shape_5.setTransform(32.4,-414.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AgXBZIgUgHIAKgkIAOAFIALACQAIAAACgDQAEgDgBgGIAAgBQABgEgEgGIgLgOIgIgHQgHgHgGgHQgEgGgEgJQgCgJAAgMIAAAAQAAgXALgNQAMgMAUAAQAIAAAKACQAJABAKAFIgKAhIgLgDIgIAAQgHAAgDACQgDADAAAFIAAABQAAAFADAEIAKALIAEAFIAFAEIAMANQAGAHADAJQADAIAAANQAAAQgGAMQgGAMgKAFQgLAHgMAAQgMAAgKgCg");
	this.shape_6.setTransform(22.25,-414.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AgXBZIgUgHIAKgkIAOAFIALACQAHAAADgDQADgDAAgGIAAgBQAAgEgDgGIgLgOIgIgHQgHgHgGgHQgEgGgDgJQgDgJAAgMIAAAAQAAgXAMgNQALgMAUAAQAIAAAKACQAKABAJAFIgKAhIgLgDIgIAAQgHAAgDACQgDADAAAFIAAABQAAAFADAEIAKALIAFAFIAEAEIAMANQAGAHADAJQADAIAAANQgBAQgFAMQgFAMgLAFQgLAHgMAAQgMAAgKgCg");
	this.shape_7.setTransform(10.2,-414.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AgTBYIAAivIAnAAIAACvg");
	this.shape_8.setTransform(2.925,-414.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AAGBYIAAhGIgKAAIAABGIgpAAIAAivIApAAIAABDIAKAAIAAhDIAoAAIAACvg");
	this.shape_9.setTransform(-5.025,-414.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AgTBYIAAiHIgZAAIAAgoIBZAAIAAAoIgZAAIAACHg");
	this.shape_10.setTransform(-14.65,-414.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AgTBYIAAgyIgih9IAqAAIALA6IAMg6IAqAAIghB9IAAAyg");
	this.shape_11.setTransform(-27.65,-414.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AAABbQgWAAgMgNQgMgMAAgYIAAhTQABgYAMgMQAMgNAVABQAYAAALAMQAMANAAAXIAABTQAAAZgMAMQgMAMgWAAgAgDgyIgBAGIAABaIABAFQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQACgCAAgDIAAhaQAAgEgCgCQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAgBAAIAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAg");
	this.shape_12.setTransform(-38.575,-414.251);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AgVBXQgKgDgKgGIAOgjIAKAFIAIABQAGAAADgEQABgDAAgIIAAh6IApAAIAACAQAAAYgMAMQgMANgUAAQgJAAgKgCg");
	this.shape_13.setTransform(-49.025,-414.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AAABYIgLhuIAABuIgoAAIAAivIA0AAIALBsIAAhsIAoAAIAACvg");
	this.shape_14.setTransform(-58.975,-414.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AgmBYIAAivIBMAAIAAAmIglAAIAAAdIAeAAIAAAlIgeAAIAAAiIAmAAIAAAlg");
	this.shape_15.setTransform(-69,-414.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("AAABbQgWAAgMgNQgMgMAAgYIAAhTQABgYAMgMQAMgNAVABQAYAAALAMQAMANAAAXIAABTQAAAZgMAMQgMAMgWAAgAgDgyIgBAGIAABaIABAFQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQACgCAAgDIAAhaQAAgEgCgCQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAgBAAIAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAg");
	this.shape_16.setTransform(-81.725,-414.251);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("AgTBYIAAiHIgZAAIAAgoIBZAAIAAAoIgZAAIAACHg");
	this.shape_17.setTransform(-91.65,-414.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgtCpQgTgEgTgIIAUhFIAaAJQAMAEAJAAQAOAAAGgFQAHgGAAgLIAAgCQAAgJgHgLQgGgLgRgQIgOgOQgOgNgKgNQgKgNgFgQQgGgRAAgWIAAgBQABgsAWgZQAWgYAngBQAQAAASAEQATAFASAHIgUBBIgVgGIgPgCQgNAAgHAGQgGAFAAALIAAABQABAIAGAJIAUAWIAIAIIAIAIQAOAOAKAMQALANAFARQAGARAAAYIAAABQAAAfgLAVQgLAWgUAMQgTALgaABQgWAAgUgFg");
	this.shape_18.setTransform(123.525,-450.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgmCoIAAhfIhAjwIBPAAIAYBwIAWhwIBQAAIhADwIAABfg");
	this.shape_19.setTransform(104.05,-450.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAZCoIgGhCIglAAIgGBCIhMAAIAtlPIBvAAIAtFPgAALAfIgJhaIgCgbIgBAbIgKBaIAWAAg");
	this.shape_20.setTransform(82.45,-450.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAOCoIgOjJIgODJIhjAAIgZlPIBRAAIAEECIAXkCIA9AAIAWECIAEkCIBSAAIgZFPg");
	this.shape_21.setTransform(56.775,-450.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAACoIgWjUIAADUIhNAAIAAlPIBlAAIAVDPIAAjPIBNAAIAAFPg");
	this.shape_22.setTransform(25.425,-450.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAACuQgrgBgXgYQgXgYAAgsIAAigQABgwAYgXQAXgXApAAIAAAAQAtABAWAYQAXAYAAAtIAACgQgBAvgXAXQgXAXgqAAgAgHhgQgDADABAIIAACsQgBAHADAEQADADAEAAIAAAAQAGAAACgEQADgDgBgHIAAisQABgIgDgDQgDgEgFAAIAAAAQgFAAgCAEg");
	this.shape_23.setTransform(4,-450.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AglCoIAAlPIBLAAIAAFPg");
	this.shape_24.setTransform(-11.3,-450.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhOCoIAAlPIBNAAIAAEEIBQAAIAABLg");
	this.shape_25.setTransform(-25.925,-450.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhOCoIAAlPIBNAAIAAEEIBQAAIAABLg");
	this.shape_26.setTransform(-44.625,-450.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgmCoIAAlPIBNAAIAAFPg");
	this.shape_27.setTransform(-58.85,-450.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AA3CoIAAj7IgDAnIgXDUIg5AAIgXjUIgDgnIAAD7IhLAAIAAlPIB1AAIALCfIABAYIACgYIAMifIB0AAIAAFPg");
	this.shape_28.setTransform(-78.225,-450.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgtCiQgUgMgLgWQgKgVgBgdIAAibQABgdAKgWQALgVAUgMQATgMAaAAQAbAAATAMQAUAMALAVQALAWAAAdIAACbQAAAdgLAVQgLAWgUAMQgTALgbABQgagBgTgLgAgFhhQgDACAAAFIAAC1QAAAFADACQAAAAABABQAAAAABABQAAAAABAAQAAAAABAAIABABQAJAAAAgKIAAi1QAAgEgCgCIgFgDIgCgBQgDAAgCADg");
	this.shape_29.setTransform(-107.925,-450.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgVCrIAAj7IgiAIIAAhIIBvgaIAAFVg");
	this.shape_30.setTransform(-125.825,-451.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-134.2,-477.9,268.5,83.69999999999999), null);


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
	this.instance.setTransform(-173,-829,1.2421,1.2421);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-173,-829,345.3,356.5), null);


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
	this.instance.setTransform(-187,-670,1.4094,1.4094);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.other_prize_mc, new cjs.Rectangle(-187,-670,374.9,117), null);


(lib.lock_up_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.lockup();
	this.instance.setTransform(-215,-813,1.3638,1.3638);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lock_up_mc, new cjs.Rectangle(-215,-813,429.6,246.89999999999998), null);


(lib.hero_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.hero();
	this.instance.setTransform(-411,-334,1.5582,1.5582);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hero_mc, new cjs.Rectangle(-411,-334,623.3,444.1), null);


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
	this.instance.setTransform(-206,-984,1.6852,1.6852);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-206,-984,411.2,79.20000000000005), null);


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
	this.instance.setTransform(-104,-835,1.89,1.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bt_logo, new cjs.Rectangle(-104,-835,207.9,119.10000000000002), null);


// stage content:
(lib.bigticketconversionhtml5160x600 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(151,592,0.25,0.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAPIgCgBIgCgBIAAgDIADABIACAAIADgBIAAgCIAAgCIgBABQgEAAgBgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAEgPIADAAIgCAPIAAABIABABIABAAIABgBIAEgQIADAAIgEAWQgBAEgCABQgBACgDAAIgBAAg");
	this.shape.setTransform(148.75,594.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAPIAGgdIADAAIgGAdg");
	this.shape_1.setTransform(147.7,593.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAPIgEgBIAHgcIACAAIgCAJIACgBIABAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQACACgBACIgCAIIgCAFQgCACgCAAIgDAAgAgDALIACABIABAAIACgBIABgCIABgJIAAgCIgCAAIgBAAIgBAAg");
	this.shape_2.setTransform(146.395,593.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAOIAEgUIADAAIgDAUgAABgJQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIABgBIACgBIABABIABABIgBACIgCAAIgBAAg");
	this.shape_3.setTransform(145.275,593.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAKIgDAAIACgDIABABIACAAIACgBQABAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAIgBgCIgBAAIgCgBIAAgEIACgEQABgCADAAIADABIACAAIgCADIgCgBIgBAAIgDABIAAACIAAACIABABIABABIACAAIACACIgBADQAAADgDABQgBACgDAAIgCgBg");
	this.shape_4.setTransform(144.075,593.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AABALIADgPIgBgCIgBAAIgBAAIgBAAIgEARIgDAAIAEgUIADAAIADgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIgEAPg");
	this.shape_5.setTransform(142.6063,593.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFAJQgCgCABgDIACgHQAAgDACgCQACgCADAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABABQABACgBADIgBAHIgDAFQgCACgCAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAgBAAAAgAAAgGIgBACIgCAIIABADIACABIABgBIABgDIACgIIAAgCIgCgBIgCABg");
	this.shape_6.setTransform(141.0383,593.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAPIAGgcIADAAIADgBQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAQABACgBADIgBAHIgDAFQgBACgDAAIgBAAIgCAAIgBAIgAAAgKIgCANIABABIABAAIACgBIABgCIACgIIAAgDIgCAAIgBAAIgCAAg");
	this.shape_7.setTransform(139.3583,594.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEAKIgDAAIACgDIABABIACAAIACgBQABAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAgBAAIgBgCIgBAAIgCgBIAAgEIACgEQABgCADAAIADABIACAAIgCADIgCgBIgBAAIgDABIAAACIAAACIABABIABABIACAAIACACIgBADQAAADgDABQgBACgDAAIgCgBg");
	this.shape_8.setTransform(137.925,593.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFAJQgCgCABgEIACgGIACgFQACgCACAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQACACgBADIgBAEIgIAAIAAACQAAABAAABQAAAAAAABQAAAAAAAAQAAAAAAABIACABIACAAIACgBIAAADIgDAAIgBABQgEAAgBgCgAAAgGIgBADIAAACIAEAAIABgCIAAgDQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBgBAAIgCABg");
	this.shape_9.setTransform(136.475,593.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AACAPIgCgMIAAAAIAAAAIgCAAIgDAMIgDAAIAGgdIAFAAIAEABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAAEIgBACIgBAEIgDACIACANgAgCAAIACAAIACAAIACgBIABgDIAAgCIAAgDIgBgBIgCAAIgCAAg");
	this.shape_10.setTransform(134.875,593.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgFAPIgBgBIgBgBIAAgDIABABIADAAIADgBIAAgCIABgCIgCABQgDAAgCgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAEgPIADAAIgDAPIAAABIADABIAAAAIABgBIAEgQIAEAAIgGAWQAAAEgCABQgBACgDAAIgCAAg");
	this.shape_11.setTransform(132.6,594.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFAJQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBIAAAAQAAgEACAAQACgBADAAIABAAIABAAIAAgCQAAAAAAgBQABAAAAAAQAAgBgBAAQAAAAAAgBIgCgBIgCABIgDAAIACgDIABAAIABAAIACgBQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQACABgBADIgDAOIgDAAIgCABQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAgBAAAAgAgCABIgBADIAAADIACABIABAAIABAAIABgIIgBAAIgBAAIgCABg");
	this.shape_12.setTransform(131.05,593.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEAPIAGgdIADAAIgGAdg");
	this.shape_13.setTransform(130.05,593.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIAPIAGgdIAFAAIAEABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIAAAEIgBABIgBAFIgDACIgEABIgCAAIgDAMgAgBAAIABAAIACAAIACgBIABgDIAAgCIAAgDIgBgBIgCAAIgCAAg");
	this.shape_14.setTransform(128.775,593.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDAPIAAgJIgFgUIAHAAIABAKIACgKIAHAAIgGAUIAAAJg");
	this.shape_15.setTransform(40.625,593.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAPIAAgdIAGAAIAAAWIAHAAIAAAHg");
	this.shape_16.setTransform(38.8,593.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHAPIAAgdIAHAAIAEABIAEADIAAAEIAAADIgBAEIgDACIgEABIAAAAIAAALgAAAgBIAAAAIABAAIAAgBIAAgEIAAgBIgBgBIAAAAg");
	this.shape_17.setTransform(37.1,593.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHAPIAAgdIAHAAIAEABIAEADIAAAEIAAADIgBAEIgDACIgEABIAAAAIAAALgAAAgBIAAAAIABAAIAAgBIAAgEIAAgBIgBgBIAAAAg");
	this.shape_18.setTransform(35.3,593.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AADAPIgBgGIgDAAIAAAGIgHAAIAEgdIAJAAIAEAdgAABADIAAgHIgBgDIAAADIAAAHIABAAg");
	this.shape_19.setTransform(33.4,593.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgDAPIgEgBIACgHIADABIABABIABgBIABgBIgBgCIgBgCIgBgCIgCgBIgCgCIAAgEIAAgBQAAgDACgCQACgCACAAIAEAAIADABIgCAFIgCAAIgCAAIgBAAIAAACIAAACIACACIAAAAIACABIACABIABADIABAEIgBAFIgDADIgEAAIgDAAg");
	this.shape_20.setTransform(31.2,593.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgBAHIgBgNIAFAAIgBANg");
	this.shape_21.setTransform(29.925,592.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEANQgDgCAAgEIAAgMQAAgFADgCQACgCADAAIADAAIADABIgCAFIgCAAIgBAAIgCAAIAAADIAAALIAAACIADABIABAAIABgBIADAGIgDABIgEAAQgDAAgCgCg");
	this.shape_22.setTransform(28.725,593.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgHAOQgDgDAAgEIAAgDIABgEQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIgBgDIAAgCIAAgCIAAgEIACgDIAEAAIADAAIACADIAAAEIAAACIAAACIgBACIgDABIADAEIgBgCIAAgCIAGAAIAAAEIAAADIgBACIAEAGIgHAAIgBgBIgCABIgCAAQgEAAgCgBgAAAAJIgDgFIAAABIAAABIAAABIABACIACAAIAAAAIAAAAgAgBgIIAAABIAAADIAAABIAAAAIABAAIAAgCIAAgCIAAgBIgBgBIAAABg");
	this.shape_23.setTransform(26.675,593.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgCAPIAAgXIgFAAIAAgGIAPAAIAAAGIgEAAIAAAXg");
	this.shape_24.setTransform(24.675,593.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCATIAAglIAFAAIAAAlg");
	this.shape_25.setTransform(21.9,593.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAAAPIAAgHIgIAAIAGgWIAJAAIAAAQIACAAIAAAGIgCAAIAAAHgAAAACIAAAAIAAgKg");
	this.shape_26.setTransform(18.95,593.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDAPIgDgDIgBgFIAAgDIAAgBIABgCIAAgBIACgHIADgHIAGAAIgCAFIgCAFIAAAAQADAAACACQACACAAADIAAAEIgBAEIgDAEIgEAAIgDAAgAAAACIAAAGIAAABIAAAAIABgBIAAAAIAAgGIAAgBIgBAAIAAAAIAAABg");
	this.shape_27.setTransform(17.1,593.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHAPIAAgGIAFgFIACgEIABgFIgBgCIAAgBIgBAAIgCABIgCAAIgCgGIAEgBIADAAIAEABIADADIABAFIgBAEIgCADIgDAEIgCADIAHAAIAAAGg");
	this.shape_28.setTransform(15.35,593.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDAPIgDgBIABgHIACABIADABIAAgBIABgBIgBgCIgBgCIgBgCIgDgBIgBgCIAAgEIAAgBQAAgDACgCQACgCADAAIACAAIADABIgBAFIgCAAIgBAAIgCAAIAAACIAAACIACACIABAAIAAABIACABIACADIABAEIgCAFIgDADIgDAAIgDAAg");
	this.shape_29.setTransform(13.25,593.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGAPIAAgdIANAAIAAAGIgHAAIAAAGIAFAAIAAAFIgFAAIAAAFIAHAAIAAAHg");
	this.shape_30.setTransform(11.725,593.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCAPIAAgdIAGAAIAAAdg");
	this.shape_31.setTransform(10.5,593.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AACAPIgCgLIgBAAIAAALIgGAAIAAgdIAHAAIAEABIADADIAAAEIAAADIAAADIgCABIAEAOgAgBgBIABAAIAAgBIABgBIAAgDIgBgBIAAgBIgBAAg");
	this.shape_32.setTransform(9.1,593.35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgGAPIAAgdIANAAIAAAGIgHAAIAAAGIAFAAIAAAFIgFAAIAAAFIAHAAIAAAHg");
	this.shape_33.setTransform(7.425,593.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgDAPIgEgBIACgHIADABIACABIAAgBIABgBIgBgCIgBgCIgBgCIgDgBIgBgCIAAgEIAAgBQAAgDACgCQACgCACAAIADAAIAEABIgCAFIgCAAIgCAAIgBAAIAAACIAAACIACACIAAAAIABABIADABIABADIABAEIgBAFIgEADIgDAAIgDAAg");
	this.shape_34.setTransform(5.9,593.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(181));

	// footer_bg
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5050F").s().p("AsfA/IAAh8IY/AAIAAB8g");
	this.shape_35.setTransform(80,593.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(181));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(80,378.25,0.4091,0.4091);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(148).to({alpha:0},16).wait(17));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(80,550.5,0.2872,0.2872,0,0,0,0,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(164).to({_off:false},0).wait(1).to({regX:-0.4,regY:-944.4,x:79.9,y:279.1,alpha:0.0032},0).wait(1).to({y:278.9,alpha:0.0145},0).wait(1).to({y:278.5,alpha:0.0371},0).wait(1).to({y:277.8,alpha:0.077},0).wait(1).to({y:276.6,alpha:0.1467},0).wait(1).to({y:274.45,alpha:0.2672},0).wait(1).to({y:271.8,alpha:0.4164},0).wait(1).to({y:269.2,alpha:0.5648},0).wait(1).to({y:267,alpha:0.6887},0).wait(1).to({y:265.25,alpha:0.7859},0).wait(1).to({y:263.9,alpha:0.8625},0).wait(1).to({y:262.85,alpha:0.9229},0).wait(1).to({y:262.15,alpha:0.9628},0).wait(1).to({y:261.75,alpha:0.9857},0).wait(1).to({y:261.55,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:80,y:532.8,alpha:1},0).wait(1));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(-82.45,470,0.399,0.399);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(148).to({_off:false},0).wait(1).to({regY:-715,x:-81.9,y:184.7},0).wait(1).to({x:-80.05},0).wait(1).to({x:-76.4},0).wait(1).to({x:-69.9},0).wait(1).to({x:-58.6},0).wait(1).to({x:-39},0).wait(1).to({x:-14.75},0).wait(1).to({x:9.3},0).wait(1).to({x:29.45},0).wait(1).to({x:45.25},0).wait(1).to({x:57.7},0).wait(1).to({x:67.5},0).wait(1).to({x:74},0).wait(1).to({x:77.7},0).wait(1).to({x:79.5},0).wait(1).to({regX:0.1,regY:0,x:80.05,y:470},0).wait(17));

	// sub_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(78.6,572.85,0.5,0.5,0,0,0,0,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55).to({_off:false},0).wait(1).to({regX:0.2,regY:-436.7,x:78.7,y:354.4,alpha:0.0037},0).wait(1).to({y:354.25,alpha:0.0167},0).wait(1).to({y:354,alpha:0.0435},0).wait(1).to({y:353.5,alpha:0.0919},0).wait(1).to({y:352.6,alpha:0.1816},0).wait(1).to({y:351.2,alpha:0.3248},0).wait(1).to({y:349.55,alpha:0.4878},0).wait(1).to({y:348.1,alpha:0.6345},0).wait(1).to({y:346.95,alpha:0.7499},0).wait(1).to({y:346.05,alpha:0.8388},0).wait(1).to({y:345.35,alpha:0.9088},0).wait(1).to({y:344.85,alpha:0.9564},0).wait(1).to({y:344.6,alpha:0.9834},0).wait(1).to({y:344.45,alpha:0.9964},0).wait(1).to({regX:0,regY:0.1,x:78.6,y:562.85,alpha:1},0).wait(20).to({regX:0.2,regY:-436.7,x:78.7,y:344.45,alpha:0.9963},0).wait(1).to({y:344.6,alpha:0.9833},0).wait(1).to({y:344.85,alpha:0.9565},0).wait(1).to({y:345.35,alpha:0.9081},0).wait(1).to({y:346.25,alpha:0.8184},0).wait(1).to({y:347.65,alpha:0.6752},0).wait(1).to({y:349.3,alpha:0.5122},0).wait(1).to({y:350.75,alpha:0.3655},0).wait(1).to({y:351.9,alpha:0.2501},0).wait(1).to({y:352.8,alpha:0.1612},0).wait(1).to({y:353.5,alpha:0.0912},0).wait(1).to({y:354,alpha:0.0436},0).wait(1).to({y:354.25,alpha:0.0166},0).wait(1).to({y:354.4,alpha:0.0036},0).wait(1).to({regX:0,regY:0.1,x:78.6,y:572.85,alpha:0},0).wait(77));

	// other_prize
	this.instance_5 = new lib.other_prize_mc();
	this.instance_5.setTransform(80,572.25,0.3675,0.3675);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(97).to({_off:false},0).wait(1).to({regX:0.4,regY:-611.5,x:80.15,y:347.5,alpha:0.0037},0).wait(1).to({y:347.35,alpha:0.0167},0).wait(1).to({y:347.05,alpha:0.0435},0).wait(1).to({y:346.5,alpha:0.0919},0).wait(1).to({y:345.55,alpha:0.1816},0).wait(1).to({y:343.95,alpha:0.3248},0).wait(1).to({y:342.15,alpha:0.4878},0).wait(1).to({y:340.55,alpha:0.6345},0).wait(1).to({y:339.3,alpha:0.7499},0).wait(1).to({y:338.3,alpha:0.8388},0).wait(1).to({y:337.55,alpha:0.9088},0).wait(1).to({y:337,alpha:0.9564},0).wait(1).to({y:336.7,alpha:0.9834},0).wait(1).to({y:336.55,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:80,y:561.25,alpha:1},0).wait(37).to({regX:0.4,regY:-611.5,x:80.65,y:336.55},0).wait(1).to({x:82.4},0).wait(1).to({x:86},0).wait(1).to({x:92.3},0).wait(1).to({x:103.35},0).wait(1).to({x:122.45},0).wait(1).to({x:146.1},0).wait(1).to({x:169.6},0).wait(1).to({x:189.2},0).wait(1).to({x:204.6},0).wait(1).to({x:216.75},0).wait(1).to({x:226.3},0).wait(1).to({x:232.65},0).wait(1).to({x:236.25},0).wait(1).to({x:238.05},0).wait(1).to({regX:0,regY:0,x:238.4,y:561.25},0).wait(17));

	// promo
	this.instance_6 = new lib.promo_mc();
	this.instance_6.setTransform(220,472,0.4164,0.4164,0,0,0,0.1,0);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40).to({_off:false},0).wait(1).to({regX:-0.4,regY:-650.8,x:219.25,y:201.05,alpha:0.0037},0).wait(1).to({x:217.45,alpha:0.0167},0).wait(1).to({x:213.7,alpha:0.0435},0).wait(1).to({x:206.9,alpha:0.0919},0).wait(1).to({x:194.35,alpha:0.1816},0).wait(1).to({x:174.3,alpha:0.3248},0).wait(1).to({x:151.5,alpha:0.4878},0).wait(1).to({x:131,alpha:0.6345},0).wait(1).to({x:114.8,alpha:0.7499},0).wait(1).to({x:102.4,alpha:0.8388},0).wait(1).to({x:92.6,alpha:0.9088},0).wait(1).to({x:85.95,alpha:0.9564},0).wait(1).to({x:82.15,alpha:0.9834},0).wait(1).to({x:80.35,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0,x:80.05,y:472,alpha:1},0).wait(94).to({regX:-0.4,regY:-650.8,x:80.35,y:201.05},0).wait(1).to({x:82.15},0).wait(1).to({x:85.85},0).wait(1).to({x:92.3},0).wait(1).to({x:103.55},0).wait(1).to({x:123.05},0).wait(1).to({x:147.2},0).wait(1).to({x:171.2},0).wait(1).to({x:191.25},0).wait(1).to({x:206.95},0).wait(1).to({x:219.35},0).wait(1).to({x:229.1},0).wait(1).to({x:235.55},0).wait(1).to({x:239.25},0).wait(1).to({x:241.05},0).wait(1).to({regX:0.1,regY:0,x:241.8,y:472},0).wait(17));

	// lock_up
	this.instance_7 = new lib.lock_up_mc();
	this.instance_7.setTransform(-78.65,430.55,0.3667,0.3667,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-0.2,regY:-689.6,x:-78,y:177.65},0).wait(1).to({x:-79},0).wait(1).to({x:-70.3},0).wait(1).to({x:-54.95},0).wait(1).to({x:-38.85},0).wait(1).to({x:-22.5},0).wait(1).to({x:-6},0).wait(1).to({x:10.45},0).wait(1).to({x:26.45},0).wait(1).to({x:41.3},0).wait(1).to({x:54},0).wait(1).to({x:63.85},0).wait(1).to({x:70.8},0).wait(1).to({x:75.35},0).wait(1).to({x:78.2},0).wait(1).to({regX:0.1,regY:0.1,x:80.05,y:430.55},0).wait(25).to({regX:-0.2,regY:-689.6,x:79.35,y:177.65},0).wait(1).to({x:77.25},0).wait(1).to({x:73.05},0).wait(1).to({x:65.35},0).wait(1).to({x:51.1},0).wait(1).to({x:28.4},0).wait(1).to({x:2.5},0).wait(1).to({x:-20.7},0).wait(1).to({x:-39.05},0).wait(1).to({x:-53.15},0).wait(1).to({x:-64.25},0).wait(1).to({x:-71.8},0).wait(1).to({x:-76.1},0).wait(1).to({x:-78.15},0).wait(1).to({regX:0.1,regY:0.1,x:-78.65,y:430.55},0).to({_off:true},1).wait(125));

	// hero_image
	this.instance_8 = new lib.hero_mc();
	this.instance_8.setTransform(329.05,541.1,0.4214,0.4214,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:-99.4,regY:-112,x:285.9,y:493.85},0).wait(1).to({x:287.45,y:493.9},0).wait(1).to({x:273.85,y:493.8},0).wait(1).to({x:249.75,y:493.7},0).wait(1).to({x:224.55,y:493.6},0).wait(1).to({x:198.9,y:493.45},0).wait(1).to({x:173,y:493.35},0).wait(1).to({x:147.2,y:493.25},0).wait(1).to({x:122.1,y:493.1},0).wait(1).to({x:98.85,y:493},0).wait(1).to({x:78.95,y:492.9},0).wait(1).to({x:63.5,y:492.85},0).wait(1).to({x:52.65,y:492.8},0).wait(1).to({x:45.5,y:492.75},0).wait(1).to({x:41},0).wait(1).to({regX:0.2,regY:0,x:80.35,y:539.95},0).wait(165));

	// background
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5050F").s().p("EgMfAu9MAAAhd5IY/AAMAAABd5g");
	this.shape_36.setTransform(80,299.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(181));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-79.4,299.1,498.20000000000005,301);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_18.jpg", id:"_18"},
		{src:"images/consolation.jpg", id:"consolation"},
		{src:"images/cta.jpg", id:"cta"},
		{src:"images/hero.jpg", id:"hero"},
		{src:"images/lockup.jpg", id:"lockup"},
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