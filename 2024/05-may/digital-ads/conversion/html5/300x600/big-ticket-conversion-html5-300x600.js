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
	this.shape.graphics.f("#FFE400").s().p("AgIBLQgFgDgDgEQgCgDAAgGQAAgIAFgEQAGgFAHAAQAJAAAFAFQAFAEAAAIQAAAGgCADQgDAEgFADQgDABgGAAQgEAAgEgBgAgQAaIAAhlIAiAAIAABlg");
	this.shape.setTransform(78.25,-28.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AAGBLIgLg5IgCAAIAAA5IgiAAIAAiVIAkAAQAQAAAKAGQAJAEADAKQAEAJAAANIAAALQAAALgDAIQgDAHgGAEIARBCgAgHgJIACAAQAEABABgDQACgCAAgFIAAgOQAAgFgCgCQgBgCgEAAIgCAAg");
	this.shape_1.setTransform(69.85,-28.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AggBLIAAiVIBBAAIAAAgIggAAIAAAZIAaAAIAAAfIgaAAIAAAdIAgAAIAAAgg");
	this.shape_2.setTransform(61.525,-28.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AAYBLIAAhwIgBASIgKBeIgZAAIgKheIgBgSIAABwIgiAAIAAiVIA0AAIAFBHIAAAKIABgKIAFhHIA0AAIAACVg");
	this.shape_3.setTransform(51.3,-28.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AAYBLIAAhwIgBASIgKBeIgZAAIgKheIgBgSIAABwIgiAAIAAiVIA0AAIAFBHIAAAKIABgKIAFhHIA0AAIAACVg");
	this.shape_4.setTransform(38.6,-28.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AgUBHQgJgDgFgKQgFgIAAgNIAAhwIAjAAIAABxIABAEQABAAAAABQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIABgEIAAhxIAjAAIAABwQAAALgFAJQgEAJgJAFQgJAFgNAAQgLAAgJgFg");
	this.shape_5.setTransform(27.575,-28.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AgTBLQgJgCgIgDIAIgfIAMAEIAJACQAHAAACgDQADgCAAgFIAAgBQAAgEgDgFIgKgLIgGgHIgLgLQgEgGgDgHQgCgHAAgKIAAgBQAAgTAKgLQAKgLARAAQAGAAAJACQAIABAIAEIgJAcIgJgCIgHgBQgGAAgDADQgCACAAAFIAAAAQAAAEADAEIAJAKIADADIAEAEIALALQAEAGADAHQACAHAAALIAAABQAAANgFAKQgFAKgIAFQgJAFgLAAQgKAAgIgCg");
	this.shape_6.setTransform(18.925,-28.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AgTBLQgJgCgIgDIAIgfIAMAEIAJACQAHAAACgDQADgCAAgFIAAgBQAAgEgDgFIgKgLIgGgHIgLgLQgEgGgDgHQgCgHAAgKIAAgBQAAgTAKgLQAKgLARAAQAGAAAJACQAIABAIAEIgJAcIgJgCIgHgBQgGAAgDADQgCACAAAFIAAAAQAAAEADAEIAJAKIADADIAEAEIALALQAEAGADAHQACAHAAALIAAABQAAANgFAKQgFAKgIAFQgJAFgLAAQgKAAgIgCg");
	this.shape_7.setTransform(8.675,-28.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AgQBLIAAiVIAhAAIAACVg");
	this.shape_8.setTransform(2.475,-28.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AAFBLIAAg7IgJAAIAAA7IgiAAIAAiVIAiAAIAAA4IAJAAIAAg4IAiAAIAACVg");
	this.shape_9.setTransform(-4.275,-28.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AgQBLIAAhzIgVAAIAAgiIBLAAIAAAiIgVAAIAABzg");
	this.shape_10.setTransform(-12.475,-28.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AgQBLIAAgrIgdhqIAkAAIAJAyIAKgyIAkAAIgdBqIAAArg");
	this.shape_11.setTransform(-23.525,-28.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AAABNQgTAAgKgLQgKgKAAgUIAAhHQABgVAKgKQAKgKASAAQAUAAAKALQAKAKAAAUIAABHQAAAVgLAKQgKAKgSAAgAgDgqIgBAFIAABMQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBIABgEIAAhMIgBgFQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABg");
	this.shape_12.setTransform(-32.825,-28.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AgRBKQgJgDgJgEIAMgeIAJADIAHACQAFAAACgEQABgDAAgGIAAhoIAjAAIAABtQAAAUgLALQgJALgSAAQgHAAgIgCg");
	this.shape_13.setTransform(-41.75,-28.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AAABLIgJheIAABeIgjAAIAAiVIAtAAIAJBcIAAhcIAiAAIAACVg");
	this.shape_14.setTransform(-50.15,-28.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AggBLIAAiVIBBAAIAAAgIggAAIAAAZIAaAAIAAAfIgaAAIAAAdIAgAAIAAAgg");
	this.shape_15.setTransform(-58.675,-28.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("AAABNQgTAAgKgLQgKgKAAgUIAAhHQABgVAKgKQAKgKASAAQAUAAAKALQAKAKAAAUIAABHQAAAVgLAKQgKAKgSAAgAgDgqIgBAFIAABMQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBIABgEIAAhMIgBgFQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABg");
	this.shape_16.setTransform(-69.525,-28.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("AgQBLIAAhzIgVAAIAAgiIBLAAIAAAiIgVAAIAABzg");
	this.shape_17.setTransform(-77.975,-28.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgmCQQgRgEgPgGIARg8IAWAIQAKAEAIAAQAMAAAEgEQAGgFAAgKIAAgBQAAgIgGgKQgFgIgOgOIgMgMQgMgMgJgKQgIgMgEgOQgFgNAAgUIAAAAQAAgmATgUQATgVAhgBQANAAAQAEQAQAEAQAGIgRA2IgSgEIgNgCQgLAAgGAFQgFAFAAAIIAAABQAAAIAGAHIARATIAHAHIAGAHQAMALAJAKQAJALAEAPQAFAOAAAVIAAAAQAAAbgJASQgJATgRAKQgRAJgVAAQgTABgRgEg");
	this.shape_18.setTransform(105.375,-59.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AggCPIAAhRIg3jNIBEAAIATBgIAUhgIBEAAIg3DNIAABRg");
	this.shape_19.setTransform(88.775,-59.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAVCPIgFg4IgfAAIgFA4IhBAAIAmkeIBfAAIAlEegAAKAaIgIhLIgCgZIAAAZIgIBLIASAAg");
	this.shape_20.setTransform(70.4,-59.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AANCPIgNirIgMCrIhUAAIgWkeIBGAAIADDcIAUjcIAzAAIAUDcIADjcIBGAAIgWEeg");
	this.shape_21.setTransform(48.6,-59.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAACPIgSi1IAAC1IhCAAIAAkeIBWAAIARCxIAAixIBCAAIAAEeg");
	this.shape_22.setTransform(21.95,-59.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAACUQglAAgTgVQgTgUAAgmIAAiIQAAgoAUgUQAUgUAjABIABAAQAlAAATAUQATAVAAAmIAACIQAAAogUATQgTAUgkAAgAgGhSQgCAEAAAGIAACSQAAAGACADQACADAEAAIAAAAQAFAAACgDQACgDAAgGIAAiSQAAgHgCgDQgDgDgEAAQgEAAgCADg");
	this.shape_23.setTransform(3.725,-59.5506);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AggCPIAAkeIBBAAIAAEeg");
	this.shape_24.setTransform(-9.3,-59.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhCCPIAAkeIBCAAIAADeIBDAAIAABAg");
	this.shape_25.setTransform(-21.75,-59.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhCCPIAAkeIBCAAIAADeIBDAAIAABAg");
	this.shape_26.setTransform(-37.65,-59.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AggCPIAAkeIBBAAIAAEeg");
	this.shape_27.setTransform(-49.7,-59.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAvCPIAAjWIgDAhIgUC1IgwAAIgUi1IgDghIAADWIg/AAIAAkeIBkAAIAJCJIABAUIACgUIAKiJIBjAAIAAEeg");
	this.shape_28.setTransform(-66.25,-59.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AglCNQgSgEgQgJIAXg2QAGAFAJAEQAJAEAMAAQAKAAADgIQAEgHAAgKIAAgYQAAgIgCgHQgCgIgGgFQgHgFgOAAQgJAAgIADIgPAHIARigIBsAAIAAA9IgrAAIgEAlQAZACAOAUQANATAAAlIAAAjQAAAmgUAVQgUAUghABQgSAAgSgFgAAAgtIADgBIgDABg");
	this.shape_29.setTransform(-91.975,-59.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRCRIAAjVIgeAGIAAg9IBfgWIAAEig");
	this.shape_30.setTransform(-107.35,-59.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-114.5,-82.5,229,71.1), null);


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
	this.instance.setTransform(-158,-282,1.1338,1.1338);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-158,-282,315.2,325.4), null);


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
	this.instance.setTransform(-133,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.other_prize_mc, new cjs.Rectangle(-133,-96,266,83), null);


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
	this.instance.setTransform(-181,-256,1.1479,1.1479);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lock_up_mc, new cjs.Rectangle(-181,-256,361.6,207.8), null);


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
	this.instance.setTransform(-273,-253,1.3197,1.3197);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hero_mc, new cjs.Rectangle(-273,-253,527.9,376.1), null);


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
	this.instance.setTransform(-122,-230);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-122,-230,244,47), null);


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
	this.instance = new lib._18();
	this.instance.setTransform(282,584,0.4688,0.4688);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAbIgCgBIgDgBIAAgGIAEABIAFABQADAAACgCIABgFIABgCIgEAAQgGAAgCgDQgDgDABgFIAGgbIAHAAIgGAbQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIADABIACAAIACgBIAHgfIAHAAIgJApQgBAGgEADQgCADgHAAIgDAAg");
	this.shape.setTransform(278.925,589.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAcIALg3IAGAAIgLA3g");
	this.shape_1.setTransform(276.925,587.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAcIgGgBIAMg3IAGAAIgEARIADAAIADAAQAGAAACADQACADgBAFIgEAQQgBAGgDADQgEADgFABIgGgBgAAAgFIgGAbIACAAIACAAQACAAACgBIACgEIAEgRIAAgEQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgCAAIgBAAg");
	this.shape_2.setTransform(274.4917,587.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIAaIAIgmIAGAAIgHAmgAABgSQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIACgDIACgBIADABIAAADIgBADQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAg");
	this.shape_3.setTransform(272.4125,588.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAUIgEgBIACgGIADABIAEAAQADABABgCQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIgCgCIgCgBQgDgCgCgCQgBgCABgEQABgGAEgCQADgEAFAAIAEABIAEACIgCAFIgEgBIgDgBQgBABAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIACABIADACQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAIgBAGQgBAGgDADQgEADgFAAIgFgBg");
	this.shape_4.setTransform(270.15,588.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AACAUIAGgcQAAgBAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgEgBIgCAAIgBABIgHAgIgHAAIAIglIAGgBIAFgBQAHAAACACQACAEgCAFIgGAcg");
	this.shape_5.setTransform(267.3821,588.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMARQgCgDACgGIADgPQABgGADgDQAEgDAFAAQAHAAABADQADADgBAGIgEAPQgBAGgEADQgDADgFAAQgHAAgCgDgAAAgMQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABIgEAQIAAAEQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAIACgEIAEgQIAAgFQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAg");
	this.shape_6.setTransform(264.4698,588.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAcIALg1IAFgBIAGgBQAGAAACADQACAEgBAGIgDAOQgBAGgEADQgDAEgFAAIgDgBIgDAAIgDAQgAAAgUIgEAaIACAAIACABQACAAACgCQAAAAAAgBQABAAAAgBQAAAAAAgBQABgBAAAAIADgQIAAgEQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgCAAIgDABg");
	this.shape_7.setTransform(261.2821,589.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAUIgEgBIACgGIADABIAEAAQAEABABgCQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIgCgCIgDgBQgDgCAAgCQgCgCABgEQABgGAEgCQADgEAFAAIAEABIAEACIgCAFIgDgBIgEgBQgBABAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIABABIAFACQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAIAAAGQgBAGgFADQgDADgFAAIgFgBg");
	this.shape_8.setTransform(258.6,588.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLARQgCgEABgGIADgNQABgHAEgDQADgDAFAAQAGAAACADQACADgCAHIgCAIIgPAAIgBAFQAAAEABACQACABADAAIADAAIAEgBIAAAFIgFACIgEAAQgHAAgCgDgAAAgMIgCAFIgBAFIAJAAIABgFIAAgFQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAAAABQAAAAAAAAg");
	this.shape_9.setTransform(255.9554,588.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAEAcIgDgWIgBAAIgBAAIgDAAIgGAWIgGAAIAMg3IAJAAQAGAAACACQADABABAEIgBAIIAAAEQgBAEgCAEQgCACgEACIAEAYgAgEAAIAEAAIAEAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBIABgEIACgFIABgGIgDgCIgEgBIgEAAg");
	this.shape_10.setTransform(252.9,587.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKAbIgCgBIgDgBIAAgGIAEABIAFABQADAAACgCIABgFIABgCIgEAAQgGAAgCgDQgDgDABgFIAGgbIAHAAIgGAbQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIADABIACAAIACgBIAHgfIAHAAIgJApQgBAGgEADQgCADgHAAIgDAAg");
	this.shape_11.setTransform(248.625,589.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLARQgDgDABgGIAAgBQACgGAEgCQADgCAFAAIACAAIACAAIABgDQABgEgCgBQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgEABIgFABIAEgGIACgBIADgBIADAAQAGAAACADQACADgBAGIgGAaIgFABIgFAAQgGAAgCgDgAgDACIgDAGQAAADABACQAAABABAAQAAAAAAAAQABABABAAQAAAAABAAIABAAIABAAIADgOIgCAAIgBAAQgCAAgCABg");
	this.shape_12.setTransform(245.7024,588.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIAcIALg3IAGAAIgLA3g");
	this.shape_13.setTransform(243.825,587.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAcIALg3IAKAAQAGAAADACQADABABAEIgBAIIgBADQgBAGgDADQgBACgEACQgDABgFAAIgEAAIgEAXgAgEAAIAEAAIAEgBIAEgDIABgFIABgDIABgGIgCgCIgGgBIgDAAg");
	this.shape_14.setTransform(241.5,587.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFAcIAAgQIgLgnIANAAIADATIAEgTIANAAIgKAnIAAAQg");
	this.shape_15.setTransform(76.075,587.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMAcIAAg3IAMAAIAAAqIANAAIAAANg");
	this.shape_16.setTransform(72.675,587.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOAcIAAg3IAOAAQAFAAADACQAEACACADQABAEAAAEIAAAFQAAAGgCADQgCADgEABQgEACgDgBIgBAAIAAAVgAgBgCIAAAAIACgBIAAgCIAAgHIAAgCQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_17.setTransform(69.45,587.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOAcIAAg3IAOAAQAFAAADACQAEACACADQABAEAAAEIAAAFQAAAGgCADQgDADgDABQgEACgDgBIgBAAIAAAVgAgBgCIAAAAIACgBIABgCIAAgHIgBgCQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_18.setTransform(66.05,587.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAEAcIgBgLIgFAAIgBALIgNAAIAIg3IARAAIAIA3gAACAFIgCgOIAAgFIAAAFIgBAOIADAAg");
	this.shape_19.setTransform(62.525,587.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHAdIgGgCIADgMIAFACIADAAIADgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBIAAAAIgBgDIgDgFIgDgCIgEgDIgCgGIgBgGIAAgBQAAgGAEgFQADgEAGAAIAGABIAGACIgDAKIgEAAIgCgBIgEABIAAADIAAADIAEADIABACIABABIAEAEIADAFIABAHIgCAIQgCAEgDADQgDABgEAAIgHAAg");
	this.shape_20.setTransform(58.375,587.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgDAMIgCgXIALAAIgCAXg");
	this.shape_21.setTransform(56,585.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJAZQgEgFAAgIIAAgXQAAgJAEgEQAEgEAHAAIAGAAIAFACIgEALIgDgBIgCAAQAAAAgBAAQgBAAAAAAQgBAAAAABQAAAAgBABIAAAEIAAAVQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIAAAAIACAAIADgBIAEAKIgFACIgHABQgHAAgEgEg");
	this.shape_22.setTransform(53.725,587.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPAaQgEgEAAgIIAAgGQAAgEACgDQACgCADAAIgCgFIgBgDIAAgFQAAgFABgDQACgDADgBQACgCAFAAQADAAACACQADABABADIABAIIAAADIAAAFIgDAEIgEACIAFAHIgCgEIAAgDIALAAIAAAHIAAAFIgDAGIAIALIgNAAIgBgCIgFACIgDAAQgJAAgEgDgAgHAJIAAACIAAABQAAABABABQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAIABAAIAAgBIgHgKgAgEgQIAAACIAAAHIAAABIAAAAIADgBIABgCIAAgFIgBgCIgBAAIgCAAg");
	this.shape_23.setTransform(49.9,587.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFAcIAAgqIgIAAIAAgNIAbAAIAAANIgHAAIAAAqg");
	this.shape_24.setTransform(46.225,587.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_25.setTransform(40.95,588.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgHAcIgGgDIAEgKIADABIAEABIACgBIABgEIAAgFIgBgDIAAgCIgFgBIgDABIgDABIADgfIAVAAIAAAMIgIAAIgBAIQAFAAACAEQADAEAAAGIAAAHQAAAHgEAEQgEAFgGAAIgHgBgAAAgIIAAAAg");
	this.shape_26.setTransform(35.475,587.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHAcQgDgCgCgDQgCgEAAgFIAAgGIABgDIAAgDIABgCIAFgOIAFgOIAMAAIgFAKIgEALIABAAIAAAAQAHgBADAEQADAEAAAGIAAAGQAAAFgCAEQgCAEgDACQgDACgFAAQgDAAgEgBgAAAADIAAABIAAALIAAACIAAAAIABAAIABgCIAAgLIgBgBIgBgBIAAABg");
	this.shape_27.setTransform(32.075,587.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgNAdIAAgMIAIgJIAFgJQACgEAAgEIAAgBIgBgDIgBgCIgDAAIgDAAIgEABIgDgLIAGgCIAHgBQAFAAADADIAFAGQACAEgBAFQABAEgCAEQgBADgCADIgFAHIgEAGIAMAAIAAAMg");
	this.shape_28.setTransform(28.8,587.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgHAdIgGgCIADgMIAFACIADAAIADgBIABgDIAAAAIgBgDIgDgFIgDgCIgEgDIgCgGIgBgGIAAgBQAAgGAEgFQADgEAGAAIAGABIAGACIgDAKIgEAAIgCgBIgEABIAAADIAAADIAEADIABACIABABIAEAEIADAFIABAHIgCAIQgCAEgDADQgDABgEAAIgHAAg");
	this.shape_29.setTransform(24.825,587.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLAcIAAg3IAXAAIAAAMIgMAAIAAAJIAKAAIAAAMIgKAAIAAAKIAMAAIAAAMg");
	this.shape_30.setTransform(22,587.475);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgFAcIAAg3IALAAIAAA3g");
	this.shape_31.setTransform(19.7,587.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AACAcIgDgVIgBAAIAAAVIgNAAIAAg3IAOAAQAFAAAEACQADACABADQACAEAAAEIAAAEIgBAIQgBACgCABIAGAZgAgCgDIABAAIABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAgGQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBAAg");
	this.shape_32.setTransform(17.05,587.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgLAcIAAg3IAXAAIAAAMIgMAAIAAAJIAKAAIAAAMIgKAAIAAAKIAMAAIAAAMg");
	this.shape_33.setTransform(13.9,587.475);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgHAdIgGgCIADgMIAFACIADAAIADgBIABgDIAAAAIgBgDIgDgFIgDgCIgEgDIgCgGIgBgGIAAgBQAAgGAEgFQADgEAGAAIAGABIAGACIgDAKIgEAAIgCgBIgEABIAAADIAAADIAEADIABACIABABIAEAEIADAFIABAHIgCAIQgCAEgDADQgDABgEAAIgHAAg");
	this.shape_34.setTransform(10.975,587.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(181));

	// footer_bg
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5050F").s().p("A3bB1IAAjpMAu3AAAIAADpg");
	this.shape_35.setTransform(150,588.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(181));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(150,51.15,0.9088,0.9084);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(148).to({alpha:0},16).wait(17));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(150,507.15,0.5386,0.5386,0,0,0,0,0.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(164).to({_off:false},0).wait(1).to({regY:-206.5,y:395.7,alpha:0.0032},0).wait(1).to({y:395.35,alpha:0.0145},0).wait(1).to({y:394.6,alpha:0.0371},0).wait(1).to({y:393.25,alpha:0.077},0).wait(1).to({y:390.95,alpha:0.1467},0).wait(1).to({y:386.95,alpha:0.2672},0).wait(1).to({y:382,alpha:0.4164},0).wait(1).to({y:377.05,alpha:0.5648},0).wait(1).to({y:372.95,alpha:0.6887},0).wait(1).to({y:369.75,alpha:0.7859},0).wait(1).to({y:367.2,alpha:0.8625},0).wait(1).to({y:365.2,alpha:0.9229},0).wait(1).to({y:363.85,alpha:0.9628},0).wait(1).to({y:363.1,alpha:0.9857},0).wait(1).to({y:362.75,alpha:0.9969},0).wait(1).to({regY:0.1,y:473.95,alpha:1},0).wait(1));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(-154.6,356.25,0.7482,0.7482);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(148).to({_off:false},0).wait(1).to({regY:-155,x:-153.6,y:240.3},0).wait(1).to({x:-150.15},0).wait(1).to({x:-143.25},0).wait(1).to({x:-131.1},0).wait(1).to({x:-109.9},0).wait(1).to({x:-73.2},0).wait(1).to({x:-27.7},0).wait(1).to({x:17.45},0).wait(1).to({x:55.2},0).wait(1).to({x:84.8},0).wait(1).to({x:108.1},0).wait(1).to({x:126.55},0).wait(1).to({x:138.7},0).wait(1).to({x:145.65},0).wait(1).to({x:149.05},0).wait(1).to({regY:0,x:150,y:356.25},0).wait(17));

	// sub_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(147.35,549,0.9375,0.9375);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55).to({_off:false},0).wait(1).to({regX:0.2,regY:-47.5,x:147.55,y:504.35,alpha:0.0037},0).wait(1).to({y:504.1,alpha:0.0167},0).wait(1).to({y:503.6,alpha:0.0435},0).wait(1).to({y:502.7,alpha:0.0919},0).wait(1).to({y:501,alpha:0.1816},0).wait(1).to({y:498.35,alpha:0.3248},0).wait(1).to({y:495.3,alpha:0.4878},0).wait(1).to({y:492.55,alpha:0.6345},0).wait(1).to({y:490.35,alpha:0.7499},0).wait(1).to({y:488.7,alpha:0.8388},0).wait(1).to({y:487.4,alpha:0.9088},0).wait(1).to({y:486.5,alpha:0.9564},0).wait(1).to({y:486,alpha:0.9834},0).wait(1).to({y:485.75,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:147.35,y:530.25,alpha:1},0).wait(20).to({regX:0.2,regY:-47.5,x:147.55,y:485.75,alpha:0.9963},0).wait(1).to({y:486,alpha:0.9833},0).wait(1).to({y:486.5,alpha:0.9565},0).wait(1).to({y:487.4,alpha:0.9081},0).wait(1).to({y:489.1,alpha:0.8184},0).wait(1).to({y:491.75,alpha:0.6752},0).wait(1).to({y:494.8,alpha:0.5122},0).wait(1).to({y:497.55,alpha:0.3655},0).wait(1).to({y:499.75,alpha:0.2501},0).wait(1).to({y:501.4,alpha:0.1612},0).wait(1).to({y:502.7,alpha:0.0912},0).wait(1).to({y:503.6,alpha:0.0436},0).wait(1).to({y:504.1,alpha:0.0166},0).wait(1).to({y:504.35,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:147.35,y:549,alpha:0},0).wait(77));

	// other_prize
	this.instance_5 = new lib.other_prize_mc();
	this.instance_5.setTransform(150,547.95,0.689,0.689);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(97).to({_off:false},0).wait(1).to({regY:-54.5,y:510.3,alpha:0.0037},0).wait(1).to({y:510.05,alpha:0.0167},0).wait(1).to({y:509.5,alpha:0.0435},0).wait(1).to({y:508.5,alpha:0.0919},0).wait(1).to({y:506.65,alpha:0.1816},0).wait(1).to({y:503.7,alpha:0.3248},0).wait(1).to({y:500.3,alpha:0.4878},0).wait(1).to({y:497.3,alpha:0.6345},0).wait(1).to({y:494.9,alpha:0.7499},0).wait(1).to({y:493.1,alpha:0.8388},0).wait(1).to({y:491.65,alpha:0.9088},0).wait(1).to({y:490.65,alpha:0.9564},0).wait(1).to({y:490.1,alpha:0.9834},0).wait(1).to({y:489.85,alpha:0.9964},0).wait(1).to({regY:0,y:527.3,alpha:1},0).wait(37).to({regY:-54.5,x:150.8,y:489.75},0).wait(1).to({x:153.65},0).wait(1).to({x:159.35},0).wait(1).to({x:169.45},0).wait(1).to({x:187.1},0).wait(1).to({x:217.6},0).wait(1).to({x:255.4},0).wait(1).to({x:292.95},0).wait(1).to({x:324.3},0).wait(1).to({x:348.9},0).wait(1).to({x:368.3},0).wait(1).to({x:383.6},0).wait(1).to({x:393.7},0).wait(1).to({x:399.5},0).wait(1).to({x:402.3},0).wait(1).to({regY:0,x:403.1,y:527.3},0).wait(17));

	// promo
	this.instance_6 = new lib.promo_mc();
	this.instance_6.setTransform(412.45,360,0.7807,0.7807);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40).to({_off:false},0).wait(1).to({regX:-0.4,regY:-119.3,x:411.15,y:266.85,alpha:0.0037},0).wait(1).to({x:407.75,alpha:0.0167},0).wait(1).to({x:400.7,alpha:0.0435},0).wait(1).to({x:388,alpha:0.0919},0).wait(1).to({x:364.45,alpha:0.1816},0).wait(1).to({x:326.9,alpha:0.3248},0).wait(1).to({x:284.1,alpha:0.4878},0).wait(1).to({x:245.6,alpha:0.6345},0).wait(1).to({x:215.3,alpha:0.7499},0).wait(1).to({x:192,alpha:0.8388},0).wait(1).to({x:173.6,alpha:0.9088},0).wait(1).to({x:161.1,alpha:0.9564},0).wait(1).to({x:154,alpha:0.9834},0).wait(1).to({x:150.6,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:150,y:360,alpha:1},0).wait(94).to({regX:-0.4,regY:-119.3,x:150.55,y:266.85},0).wait(1).to({x:153.5},0).wait(1).to({x:159.5},0).wait(1).to({x:170.05},0).wait(1).to({x:188.45},0).wait(1).to({x:220.3},0).wait(1).to({x:259.75},0).wait(1).to({x:299},0).wait(1).to({x:331.75},0).wait(1).to({x:357.45},0).wait(1).to({x:377.7},0).wait(1).to({x:393.7},0).wait(1).to({x:404.25},0).wait(1).to({x:410.25},0).wait(1).to({x:413.2},0).wait(1).to({regX:0.1,regY:0,x:414.4,y:360},0).to({_off:true},1).wait(16));

	// lock_up
	this.instance_7 = new lib.lock_up_mc();
	this.instance_7.setTransform(-108.25,282.2,0.6875,0.6875);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-0.2,regY:-152.1,x:-107.2,y:177.65},0).wait(1).to({x:-108.8},0).wait(1).to({x:-94.7},0).wait(1).to({x:-69.65},0).wait(1).to({x:-43.45},0).wait(1).to({x:-16.85},0).wait(1).to({x:9.95},0).wait(1).to({x:36.8},0).wait(1).to({x:62.85},0).wait(1).to({x:87},0).wait(1).to({x:107.65},0).wait(1).to({x:123.7},0).wait(1).to({x:135},0).wait(1).to({x:142.4},0).wait(1).to({x:147.05},0).wait(1).to({regX:0,regY:0,x:150,y:282.2},0).wait(25).to({regX:-0.2,regY:-152.1,x:148.85,y:177.65},0).wait(1).to({x:145.5},0).wait(1).to({x:138.6},0).wait(1).to({x:126.1},0).wait(1).to({x:102.95},0).wait(1).to({x:65.95},0).wait(1).to({x:23.85},0).wait(1).to({x:-14},0).wait(1).to({x:-43.8},0).wait(1).to({x:-66.75},0).wait(1).to({x:-84.85},0).wait(1).to({x:-97.15},0).wait(1).to({x:-104.15},0).wait(1).to({x:-107.5},0).wait(1).to({regX:0,regY:0,x:-108.25,y:282.2},0).to({_off:true},1).wait(125));

	// hero_image
	this.instance_8 = new lib.hero_mc();
	this.instance_8.setTransform(458.1,487.4,0.7901,0.7901,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:-9.1,regY:-64.9,x:449.4,y:436.1},0).wait(1).to({x:451.3},0).wait(1).to({x:434.5},0).wait(1).to({x:404.7},0).wait(1).to({x:373.5},0).wait(1).to({x:341.8},0).wait(1).to({x:309.8},0).wait(1).to({x:277.9},0).wait(1).to({x:246.9},0).wait(1).to({x:218.15},0).wait(1).to({x:193.5},0).wait(1).to({x:174.4},0).wait(1).to({x:160.95},0).wait(1).to({x:152.15},0).wait(1).to({x:146.6},0).wait(1).to({regX:0.1,regY:0,x:150.6,y:487.4},0).wait(25).to({regX:-9.1,regY:-64.9,x:144.4,y:436.1},0).wait(1).to({x:148.4},0).wait(1).to({x:156.65},0).wait(1).to({x:171.5},0).wait(1).to({x:199.1},0).wait(1).to({x:243.15},0).wait(1).to({x:293.25},0).wait(1).to({x:338.35},0).wait(1).to({x:373.85},0).wait(1).to({x:401.2},0).wait(1).to({x:422.7},0).wait(1).to({x:437.35},0).wait(1).to({x:445.7},0).wait(1).to({x:449.65},0).wait(1).to({regX:0.1,regY:0,x:458.1,y:487.4},0).to({_off:true},1).wait(125));

	// background
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5050F").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_36.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(181));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-149,300,808.8,300);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 300,
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