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
	this.shape.graphics.f("#FFE400").s().p("AgPB9QgHgDgFgHQgEgGAAgKQgBgNAKgIQAJgIANAAQAOAAAJAIQAJAIAAANQAAAKgEAGQgFAHgHADQgHADgJAAQgIAAgHgDgAgcArIAAiqIA5AAIAACqg");
	this.shape.setTransform(232.65,-3.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AALB+IgUhgIgEAAIAABgIg6AAIAAj7IA+AAQAbAAAQAJQAPAJAHAPQAGAQgBAVIAAASQABAUgFAMQgFAMgJAIIAcBvgAgNgQIADAAQAHAAADgDQADgEAAgIIAAgYQAAgJgDgDQgDgDgHAAIgDAAg");
	this.shape_1.setTransform(218.6,-3.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("Ag3B+IAAj7IBuAAIAAA2Ig1AAIAAArIArAAIAAA1IgrAAIAAAwIA2AAIAAA1g");
	this.shape_2.setTransform(204.625,-3.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AApB+IAAi8IgCAdIgRCfIgrAAIgRifIgDgdIAAC8Ig3AAIAAj7IBXAAIAJB3IAAASIABgSIAJh3IBXAAIAAD7g");
	this.shape_3.setTransform(187.425,-3.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AApB+IAAi8IgCAdIgRCfIgrAAIgRifIgDgdIAAC8Ig3AAIAAj7IBXAAIAJB3IAAASIABgSIAJh3IBXAAIAAD7g");
	this.shape_4.setTransform(166.075,-3.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AghB5QgQgHgJgQQgIgOAAgXIAAi8IA7AAIAAC+QAAAFACADQACADADAAQAEAAACgDQACgDAAgFIAAi+IA7AAIAAC8QAAAUgIAPQgHAPgPAJQgOAHgWABQgUgBgOgGg");
	this.shape_5.setTransform(147.45,-3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AghB/QgPgEgOgFIAPg0IAUAHQAIADAHAAQALAAAEgEQAFgEAAgIIAAgCQAAgHgFgIQgFgIgMgMIgLgLQgKgKgIgJQgHgKgEgMQgEgMAAgRIAAgBQAAghARgSQAQgSAdgBQAMAAAOAEQAOADAOAFIgPAwIgQgEIgLgBQgKAAgFAEQgEAEAAAIIAAABQAAAGAFAHIAPAQIAFAGIAGAGQALAKAIAJQAHAKAEANQAFAMAAATQgBAXgIAQQgIARgOAIQgPAJgTAAQgQAAgPgDg");
	this.shape_6.setTransform(132.925,-3.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AghB/QgPgEgOgFIAPg0IAUAHQAIADAHAAQALAAAEgEQAFgEAAgIIAAgCQAAgHgFgIQgFgIgMgMIgLgLQgKgKgIgJQgHgKgEgMQgEgMAAgRIAAgBQAAghARgSQAQgSAdgBQAMAAAOAEQAOADAOAFIgPAwIgQgEIgLgBQgKAAgFAEQgEAEAAAIIAAABQAAAGAFAHIAPAQIAFAGIAGAGQALAKAIAJQAHAKAEANQAFAMAAATQgBAXgIAQQgIARgOAIQgPAJgTAAQgQAAgPgDg");
	this.shape_7.setTransform(115.775,-3.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AgcB+IAAj7IA5AAIAAD7g");
	this.shape_8.setTransform(105.425,-3.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AAIB+IAAhjIgPAAIAABjIg6AAIAAj7IA6AAIAABfIAPAAIAAhfIA6AAIAAD7g");
	this.shape_9.setTransform(94.075,-3.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AgcB+IAAjCIgjAAIAAg5IB/AAIAAA5IgjAAIAADCg");
	this.shape_10.setTransform(80.275,-3.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AgcB+IAAhHIgwi0IA8AAIARBUIAQhUIA8AAIgwC0IAABHg");
	this.shape_11.setTransform(61.65,-3.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AAACCQggAAgRgSQgRgSAAgiIAAh3QAAgjASgRQASgSAeAAIABAAQAhABAQASQARASAAAhIAAB3QAAAkgSARQgRARgfAAgAgFhIQgCADAAAGIAACAQAAAGACACQACADADAAIAAAAQAEAAACgDQACgDAAgFIAAiAQAAgGgCgDQgCgCgEAAQgDAAgCACg");
	this.shape_12.setTransform(46.025,-3.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AgeB8QgPgEgPgIIAVgyIAOAGQAGACAGAAQAJAAADgGQADgEAAgMIAAivIA7AAIAAC4QgBAigRASQgSATgdAAQgMAAgOgEg");
	this.shape_13.setTransform(31.125,-3.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AAAB+IgQifIAACfIg6AAIAAj7IBLAAIAPCbIAAibIA7AAIAAD7g");
	this.shape_14.setTransform(16.9,-3.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("Ag3B+IAAj7IBuAAIAAA2Ig1AAIAAArIArAAIAAA1IgrAAIAAAwIA2AAIAAA1g");
	this.shape_15.setTransform(2.625,-3.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("AAACCQggAAgRgSQgRgSAAgiIAAh3QAAgjASgRQASgSAeAAIABAAQAhABAQASQARASAAAhIAAB3QAAAkgSARQgRARgfAAgAgFhIQgCADAAAGIAACAQAAAGACACQACADADAAIAAAAQAEAAACgDQACgDAAgFIAAiAQAAgGgCgDQgCgCgEAAQgDAAgCACg");
	this.shape_16.setTransform(-15.525,-3.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("AgcB+IAAjCIgjAAIAAg5IB/AAIAAA5IgjAAIAADCg");
	this.shape_17.setTransform(-29.775,-3.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghB/QgPgEgOgFIAPg0IAUAHQAIADAHAAQALAAAEgEQAFgEAAgIIAAgCQAAgHgFgIQgFgIgMgMIgLgLQgKgKgIgJQgHgKgEgMQgEgMAAgRIAAgBQAAghARgSQAQgSAdgBQAMAAAOAEQAOADAOAFIgPAwIgQgEIgLgBQgKAAgFAEQgEAEAAAIIAAABQAAAGAFAHIAPAQIAFAGIAGAGQALAKAIAJQAHAKAEANQAFAMAAATQgBAXgIAQQgIARgOAIQgPAJgTAAQgQAAgPgDg");
	this.shape_18.setTransform(-46.925,-3.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcB+IAAhHIgwi0IA8AAIARBUIARhUIA7AAIgwC0IAABHg");
	this.shape_19.setTransform(-61.55,-3.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AATB+IgFgxIgbAAIgEAxIg5AAIAhj7IBTAAIAhD7gAAJAXIgIhCIgBgVIAAAVIgHBCIAQAAg");
	this.shape_20.setTransform(-77.625,-3.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AALB+IgLiXIgKCXIhKAAIgTj7IA9AAIADDAIARjAIAtAAIARDAIADjAIA9AAIgTD7g");
	this.shape_21.setTransform(-96.825,-3.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAB+IgQifIAACfIg6AAIAAj7IBMAAIAOCbIAAibIA7AAIAAD7g");
	this.shape_22.setTransform(-120.25,-3.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAACCQggAAgRgSQgRgSAAgiIAAh3QAAgjASgRQASgSAeAAIABAAQAhABAQASQARASAAAhIAAB3QAAAkgSARQgRARgfAAgAgFhIQgCADAAAGIAACAQAAAGACACQACADADAAIAAAAQAEAAACgDQACgDAAgFIAAiAQAAgGgCgDQgCgCgEAAQgDAAgCACg");
	this.shape_23.setTransform(-136.275,-3.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgcB+IAAj7IA5AAIAAD7g");
	this.shape_24.setTransform(-147.675,-3.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag6B+IAAj7IA6AAIAADCIA7AAIAAA5g");
	this.shape_25.setTransform(-158.625,-3.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag6B+IAAj7IA6AAIAADCIA7AAIAAA5g");
	this.shape_26.setTransform(-172.575,-3.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgcB+IAAj7IA5AAIAAD7g");
	this.shape_27.setTransform(-183.225,-3.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AApB+IAAi8IgCAdIgRCfIgrAAIgRifIgDgdIAAC8Ig3AAIAAj7IBXAAIAJB3IAAASIABgSIAJh3IBXAAIAAD7g");
	this.shape_28.setTransform(-197.725,-3.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AggB8QgQgEgPgIIAVgvQAGAFAHACQAIAEALAAQAIAAADgGQAEgHAAgJIAAgUQAAgIgCgGQgCgHgGgEQgGgFgMABQgIAAgHACIgNAGIAPiMIBfAAIAAA2IgmAAIgDAgQAWACAMARQALARABAgIAAAeQgBAigRASQgSATgdAAQgQAAgPgEgAACgoIAAgBIgCABIAAAAIAAAAIACAAg");
	this.shape_29.setTransform(-220.325,-3.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgPCAIAAi7IgaAFIAAg1IBTgUIAAD/g");
	this.shape_30.setTransform(-233.875,-3.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-240.1,-23.9,480.29999999999995,47.599999999999994), null);


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
	this.instance.setTransform(-133,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.other_prize_mc, new cjs.Rectangle(-133,-41.5,266,83), null);


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
	this.instance.setTransform(-343,-69,1.2495,1.2495);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lock_up_mc, new cjs.Rectangle(-343,-69,393.6,226.2), null);


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
	this.instance.setTransform(-177,-228,1.3516,1.3516);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hero_mc, new cjs.Rectangle(-177,-228,540.7,385.2), null);


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
	this.instance.setTransform(-199,19,1.6303,1.6303);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-199,19,397.8,76.7), null);


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
	this.instance.setTransform(285,241,0.3776,0.3776);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAWIgDgBIgCAAIAAgGIAEACIADAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAIABgEIABgCIgDAAQgFAAgCgCQgCgDABgEIAFgWIAFAAIgFAWIABADIADABIABAAIACgBIAFgZIAGAAIgHAhQgBAFgDADQgCACgFAAIgCAAg");
	this.shape.setTransform(281.075,245.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAXIAJgtIAGAAIgJAtg");
	this.shape_1.setTransform(279.4,244.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAXIgFgBIAJgsIAFAAIgDAOIADgBIACAAQAFAAACACQABAEgBADIgDANQgBAGgCACQgDACgEABIgFgBgAAAgDIgFAVIACAAIACAAIADgBIACgDIADgOQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgCAAIgBABg");
	this.shape_2.setTransform(277.3875,244.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAVIAGgeIAFAAIgGAegAABgPQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIADgCIACACIAAACIgBACIgDABIgCgBg");
	this.shape_3.setTransform(275.675,244.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHARIgEgCIACgFIADABIAEAAIACgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAAAIgBgEIgCgCIgBgBIgEgCQgCgCACgEQABgFADgCQACgCAEAAIADAAIAEACIgCAFIgDgBIgCAAIgFABIAAACQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIABACIADABIACABIACADIAAAFQgBAEgDADQgDACgEAAIgEAAg");
	this.shape_4.setTransform(273.85,244.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AABAQIAFgWQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBIgDgBIgCAAIgBABIgGAaIgFAAIAGgdIAFgCIAFAAQAFAAABACQACACgBAFIgFAWg");
	this.shape_5.setTransform(271.5917,244.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAOQgCgDABgFIADgLQABgFADgDQADgDAEAAQAFAAACADQABADgBAFIgDALQgBAFgCADQgDADgEAAQgFAAgCgDgAAAgJIgBADIgDANIAAAEIADABIACgBIACgEIADgNQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAAAABg");
	this.shape_6.setTransform(269.1804,244.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAXIAJgrIAFgBIAFgBQAFAAACADQABADgBAFIgDALQgBAFgCADQgDADgEAAIgCgBIgDAAIgCANgAgEAFIACAAIACABQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIADgNQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgCABIgCAAg");
	this.shape_7.setTransform(266.6125,245.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHARIgDgCIABgFIADABIAEAAIACgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAAAIgBgEIgCgCIgCgBIgDgCQgCgCACgEQABgFACgCQADgCAEAAIADAAIAEACIgCAFIgDgBIgCAAIgFABIAAACQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIABACIADABIACABIACADIAAAFQgBAEgDADQgDACgEAAIgEAAg");
	this.shape_8.setTransform(264.4,244.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJAOQgCgDACgGIACgKQABgGADgCQADgDAEAAQAEAAACADQACACgCAGIgBAHIgMAAIgBAEQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABAAAAAAIADgBIADgBIgBAFIgEABIgCABQgGAAgCgDgAAAgJIgBAEIgBADIAHAAIABgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBABQAAAAAAAAQAAAAAAABg");
	this.shape_9.setTransform(262.2304,244.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AADAXIgDgSIAAAAIgBAAIgDAAIgEASIgFAAIAJgtIAIAAQAFAAACABIADAEIAAAHIgBADIgDAHQgBACgDABIADAUgAgDAAIADAAIADAAIADgCQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIABgEIAAgEQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgEgBIgDAAg");
	this.shape_10.setTransform(259.7333,244.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAWIgDgBIgCAAIAAgGIAEACIADAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAIABgEIABgCIgDAAQgFAAgCgCQgCgDABgEIAFgWIAFAAIgFAWIABADIADABIABAAIACgBIAFgZIAGAAIgHAhQgBAFgDADQgCACgFAAIgCAAg");
	this.shape_11.setTransform(256.175,245.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJAOQgCgCABgFIAAgBQABgFADgBQADgDAEAAIACAAIABABIABgDQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgDAAIgEABIADgFIABgBIADAAIACgBQAFAAACADQACACgBAFIgFAVIgEABIgFABQgEAAgCgDgAgDACQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAAFQAAAAAAAAQAAABABAAQAAAAABAAQABAAAAAAIABAAIACAAIACgLIgBAAIgCAAIgEABg");
	this.shape_12.setTransform(253.8,244.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHAXIAJgtIAFAAIgIAtg");
	this.shape_13.setTransform(252.25,244.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNAXIAJgtIAIAAQAFAAACABQADACAAACIAAAHIgBADIgDAHQgBACgDABQgDACgEAAIgDAAIgEASgAgDAAIADAAIADAAIADgDQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIABgDIAAgEQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgEgBIgDAAg");
	this.shape_14.setTransform(250.3833,244.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEAXIAAgNIgJggIALAAIACAPIADgPIALAAIgJAgIAAANg");
	this.shape_15.setTransform(62.825,244.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKAXIAAgtIAKAAIAAAjIALAAIAAAKg");
	this.shape_16.setTransform(60.05,244.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIALAAQAEAAADACQADABABADIABAHIAAAEQAAAFgBABQgCADgDABIgGABIAAAAIAAARgAAAgBIABgBIABgCIAAgFIgBgCIgBgBg");
	this.shape_17.setTransform(57.375,244.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIALAAQAEAAADACQADABABADIABAHIAAAEQAAAFgBABQgCADgDABIgGABIAAAAIAAARgAAAgBIABgBIABgCIAAgFIgBgCIgBgBg");
	this.shape_18.setTransform(54.575,244.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAEAXIgBgJIgFAAIgBAJIgKAAIAHgtIANAAIAHAtgAACAEIgCgLIAAgEIAAAEIgBALIADAAg");
	this.shape_19.setTransform(51.75,244.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgFAXIgGgBIAEgKIADABIADABIACgBIABgCIgBgDIgDgEIgCgCIgDgDIgCgEIgBgFIAAAAQABgGADgDQADgEAEAAIAEABIAGABIgDAJIgDgBIgCAAIgCABIgBACIABADIACADIABABIABABIAEADIACAEIABAFQgBAFgBADQgCADgCABQgDACgDAAIgFgBg");
	this.shape_20.setTransform(48.25,244.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgDAKIgBgTIAJAAIgCATg");
	this.shape_21.setTransform(46.35,242.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHAUQgEgDAAgHIAAgTQAAgHAEgDQADgEAGAAIAFABIAEABIgEAJIgCgBIgBAAIgEABIAAAEIAAARQAAAAAAABQAAAAAAABQAAABAAAAQAAAAABABIADABIACAAIACgBIAEAJIgFABIgFABQgGAAgDgEg");
	this.shape_22.setTransform(44.475,244.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMAVQgDgDAAgGIAAgGQAAgDACgCQAAgBAAAAQABAAAAAAQABAAAAAAQABgBAAAAIgCgEIAAgDIAAgDIABgHQABgDACgBIAGgBIAFABQAAAAABABQAAAAABABQAAAAAAABQABAAAAABIAAAHIAAADIAAADIgBADIgFACIAFAFIgBgCIAAgDIAJAAIAAAGIgBAEIgBAEIAFAJIgLAAIAAgBIgDABIgDABQgHAAgEgDgAgFAHIAAACIAAABIABAEQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAIAAAAIgFgJgAgCgLIAAAFIAAAAIAAABIABgBIAAgCIAAgDIAAgCIgBAAIAAAAIAAACg");
	this.shape_23.setTransform(41.3,244.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAXIAAgjIgHAAIAAgKIAXAAIAAAKIgHAAIAAAjg");
	this.shape_24.setTransform(38.325,244.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEAdIAAg5IAJAAIAAA5g");
	this.shape_25.setTransform(34.025,244.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFAXIgGgCIAEgJIACACIAEAAIABgBIABgDIAAgDIAAgDIgBgCIgEgBIgCAAIgCACIACgZIARAAIAAAKIgHAAIgBAFQAEABADADQABADABAFIAAAGQgBAGgCAEQgEADgFAAIgFgBgAABgHIgBAAg");
	this.shape_26.setTransform(29.45,244.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFAXIgEgEIgCgHIAAgGIAAgCIABgDIAAgBIAEgLIAFgMIAJAAIgEAIIgDAJIABAAQAFAAADADQACADAAAFIAAAFQAAAEgBADIgEAFQgDACgEAAIgFgBgAAAADIAAAJIAAACIAAAAIABAAIAAgCIAAgJIAAgBIgBAAIAAAAIAAABg");
	this.shape_27.setTransform(26.675,244.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKAXIAAgJIAGgIIAEgGIACgHIAAgBIgBgDIgBgBIgBgBIgEABIgDABIgDgJIAFgCIAGgBQAEAAADACIADAGQACACAAAFIgBAGIgDAFIgDAGIgFAEIALAAIAAAKg");
	this.shape_28.setTransform(24,244.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgFAXIgGgBIAEgKIADABIADABIACgBIABgCIgBgDIgDgEIgCgCIgDgDIgCgEIgBgFIAAAAQAAgGAEgDQADgEAEAAIAEABIAGABIgDAJIgDgBIgCAAIgCABIgBACIABADIACADIABABIABABIADADIADAEIABAFQgBAFgBADQgBADgDABQgDACgDAAIgFgBg");
	this.shape_29.setTransform(20.7,244.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJAXIAAgtIATAAIAAAKIgJAAIAAAIIAIAAIAAAJIgIAAIAAAIIAJAAIAAAKg");
	this.shape_30.setTransform(18.425,244.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEAXIAAgtIAKAAIAAAtg");
	this.shape_31.setTransform(16.55,244.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AACAXIgDgRIAAAAIAAARIgLAAIAAgtIALAAQAFAAACACQADABABADQACADgBAEIAAADIAAAGIgDADIAFAUgAgBgCIAAAAIABgBIABgCIAAgEIgBgCIgBgBIAAAAg");
	this.shape_32.setTransform(14.325,244.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgJAXIAAgtIATAAIAAAKIgJAAIAAAIIAIAAIAAAJIgIAAIAAAIIAJAAIAAAKg");
	this.shape_33.setTransform(11.725,244.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgFAXIgGgBIADgKIAEABIADABIABgBIACgCIgCgDIgCgEIgBgCIgEgDIgCgEIgBgFIAAAAQAAgGAEgDQADgEAEAAIAEABIAGABIgDAJIgDgBIgCAAIgDABIAAACIAAADIADADIABABIABABIADADIADAEIABAFQAAAFgCADQgBADgDABQgDACgDAAIgFgBg");
	this.shape_34.setTransform(9.35,244.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(181));

	// footer_bg
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5050F").s().p("A4uBBIAAiBMAxdAAAIAACBg");
	this.shape_35.setTransform(149.9,243.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(181));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(149.85,19,0.4261,0.4261,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(148).to({alpha:0},16).wait(17));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(149.85,198.4,0.2992,0.2992,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(164).to({_off:false},0).wait(1).to({regX:-0.1,regY:57.3,x:149.75,y:215.4,alpha:0.0032},0).wait(1).to({y:215.2,alpha:0.0145},0).wait(1).to({y:214.8,alpha:0.0371},0).wait(1).to({y:214.05,alpha:0.077},0).wait(1).to({y:212.75,alpha:0.1467},0).wait(1).to({y:210.55,alpha:0.2672},0).wait(1).to({y:207.8,alpha:0.4164},0).wait(1).to({y:205.05,alpha:0.5648},0).wait(1).to({y:202.75,alpha:0.6887},0).wait(1).to({y:200.95,alpha:0.7859},0).wait(1).to({y:199.55,alpha:0.8625},0).wait(1).to({y:198.45,alpha:0.9229},0).wait(1).to({y:197.7,alpha:0.9628},0).wait(1).to({y:197.3,alpha:0.9857},0).wait(1).to({y:197.1,alpha:0.9969},0).wait(1).to({regX:0.1,regY:0.1,x:149.85,y:179.95,alpha:1},0).wait(1));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(-131.2,112.6,0.4156,0.4156,0,0,0,-0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(148).to({_off:false},0).wait(1).to({regX:-0.4,regY:0.3,x:-130.35,y:112.65},0).wait(1).to({x:-127.2},0).wait(1).to({x:-120.85,y:112.7},0).wait(1).to({x:-109.65,y:112.8},0).wait(1).to({x:-90.05,y:112.9},0).wait(1).to({x:-56.2,y:113.15},0).wait(1).to({x:-14.25,y:113.45},0).wait(1).to({x:27.4,y:113.75},0).wait(1).to({x:62.25,y:114},0).wait(1).to({x:89.55,y:114.2},0).wait(1).to({x:111.05,y:114.35},0).wait(1).to({x:128.05,y:114.45},0).wait(1).to({x:139.25,y:114.55},0).wait(1).to({x:145.7,y:114.6},0).wait(1).to({x:148.85},0).wait(1).to({regX:0.1,regY:0.1,x:149.85},0).wait(17));

	// sub_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(148.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55).to({_off:false},0).wait(1).to({regX:-1.1,regY:-3.8,x:147.8,y:219.6,alpha:0.0037},0).wait(1).to({y:219.45,alpha:0.0167},0).wait(1).to({y:219.15,alpha:0.0435},0).wait(1).to({y:218.65,alpha:0.0919},0).wait(1).to({y:217.75,alpha:0.1816},0).wait(1).to({y:216.25,alpha:0.3248},0).wait(1).to({y:214.55,alpha:0.4878},0).wait(1).to({y:213,alpha:0.6345},0).wait(1).to({y:211.8,alpha:0.7499},0).wait(1).to({y:210.85,alpha:0.8388},0).wait(1).to({y:210.15,alpha:0.9088},0).wait(1).to({y:209.65,alpha:0.9564},0).wait(1).to({y:209.35,alpha:0.9834},0).wait(1).to({y:209.2,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:148.4,y:211.25,alpha:1},0).wait(20).to({regX:-1.1,regY:-3.8,x:147.8,y:209.2,alpha:0.9963},0).wait(1).to({y:209.35,alpha:0.9833},0).wait(1).to({y:209.65,alpha:0.9565},0).wait(1).to({y:210.15,alpha:0.9081},0).wait(1).to({y:211.05,alpha:0.8184},0).wait(1).to({y:212.55,alpha:0.6752},0).wait(1).to({y:214.25,alpha:0.5122},0).wait(1).to({y:215.8,alpha:0.3655},0).wait(1).to({y:217,alpha:0.2501},0).wait(1).to({y:217.95,alpha:0.1612},0).wait(1).to({y:218.65,alpha:0.0912},0).wait(1).to({y:219.15,alpha:0.0436},0).wait(1).to({y:219.45,alpha:0.0166},0).wait(1).to({y:219.6,alpha:0.0036},0).wait(1).to({regX:0.1,regY:0.1,x:148.4,y:221.7,alpha:0},0).wait(77));

	// other_prize
	this.instance_5 = new lib.other_prize_mc();
	this.instance_5.setTransform(149.85,221.1,0.3828,0.3828,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(97).to({_off:false},0).wait(1).to({regX:0,regY:0,x:149.8,y:221.0078,alpha:0.0037},0).wait(1).to({y:220.8583,alpha:0.0167},0).wait(1).to({y:220.5524,alpha:0.0435},0).wait(1).to({y:219.9982,alpha:0.0919},0).wait(1).to({y:218.9711,alpha:0.1816},0).wait(1).to({y:217.3311,alpha:0.3248},0).wait(1).to({y:215.465,alpha:0.4878},0).wait(1).to({y:213.7855,alpha:0.6345},0).wait(1).to({y:212.4635,alpha:0.7499},0).wait(1).to({y:211.4458,alpha:0.8388},0).wait(1).to({y:210.6446,alpha:0.9088},0).wait(1).to({y:210.0993,alpha:0.9564},0).wait(1).to({y:209.7897,alpha:0.9834},0).wait(1).to({y:209.6412,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:149.85,y:209.65,alpha:1},0).wait(37).to({regX:0,regY:0,x:150.4733,y:209.5923},0).wait(1).to({x:152.8283,y:209.5653},0).wait(1).to({x:157.5675,y:209.5109},0).wait(1).to({x:165.9144,y:209.4152},0).wait(1).to({x:180.4997,y:209.2479},0).wait(1).to({x:205.7019,y:208.9588},0).wait(1).to({x:236.9374,y:208.6006},0).wait(1).to({x:267.9896,y:208.2444},0).wait(1).to({x:293.9146,y:207.9471},0).wait(1).to({x:314.2581,y:207.7137},0).wait(1).to({x:330.2755,y:207.53},0).wait(1).to({x:342.9216,y:207.385},0).wait(1).to({x:351.2719,y:207.2892},0).wait(1).to({x:356.0593,y:207.2343},0).wait(1).to({x:358.3929,y:207.2075},0).wait(1).to({regX:0.1,regY:0.1,x:359.1,y:207.25},0).wait(17));

	// promo
	this.instance_6 = new lib.promo_mc();
	this.instance_6.setTransform(295.65,116.65,0.4337,0.4337,0,0,0,0.1,0);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40).to({_off:false},0).wait(1).to({regX:0,x:295.0622,alpha:0.0037},0).wait(1).to({x:293.1593,alpha:0.0167},0).wait(1).to({x:289.2635,alpha:0.0435},0).wait(1).to({x:282.207,alpha:0.0919},0).wait(1).to({x:269.1282,alpha:0.1816},0).wait(1).to({x:248.2446,alpha:0.3248},0).wait(1).to({x:224.4825,alpha:0.4878},0).wait(1).to({x:203.0965,alpha:0.6345},0).wait(1).to({x:186.263,alpha:0.7499},0).wait(1).to({x:173.3039,alpha:0.8388},0).wait(1).to({x:163.102,alpha:0.9088},0).wait(1).to({x:156.1575,alpha:0.9564},0).wait(1).to({x:152.2151,alpha:0.9834},0).wait(1).to({x:150.3252,alpha:0.9964},0).wait(1).to({regX:0.1,x:149.85,alpha:1},0).wait(94).to({regX:0,x:150.5037,y:116.6564},0).wait(1).to({x:152.965,y:116.6789},0).wait(1).to({x:157.9183,y:116.7242},0).wait(1).to({x:166.6422,y:116.804},0).wait(1).to({x:181.8861,y:116.9434},0).wait(1).to({x:208.2265,y:117.1843},0).wait(1).to({x:240.8726,y:117.4829},0).wait(1).to({x:273.3272,y:117.7796},0).wait(1).to({x:300.423,y:118.0274},0).wait(1).to({x:321.6852,y:118.2219},0).wait(1).to({x:338.426,y:118.375},0).wait(1).to({x:351.6432,y:118.4958},0).wait(1).to({x:360.3707,y:118.5757},0).wait(1).to({x:365.3742,y:118.6214},0).wait(1).to({x:367.8132,y:118.6437},0).wait(1).to({regX:0.1,x:368.55,y:118.65},0).wait(17));

	// lock_up
	this.instance_7 = new lib.lock_up_mc();
	this.instance_7.setTransform(-18.65,73.45,0.3819,0.3819,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-146.2,regY:44.1,x:-73.65,y:90.25},0).wait(1).to({x:-74.7},0).wait(1).to({x:-65.5},0).wait(1).to({x:-49.2},0).wait(1).to({x:-32.15},0).wait(1).to({x:-14.75},0).wait(1).to({x:2.75},0).wait(1).to({x:20.25},0).wait(1).to({x:37.25},0).wait(1).to({x:53},0).wait(1).to({x:66.5},0).wait(1).to({x:76.95},0).wait(1).to({x:84.35},0).wait(1).to({x:89.2},0).wait(1).to({x:92.2},0).wait(1).to({regX:0.1,regY:0.1,x:149.85,y:73.45},0).wait(25).to({regX:-146.2,regY:44.1,x:93.25,y:90.25},0).wait(1).to({x:90.95},0).wait(1).to({x:86.15},0).wait(1).to({x:77.55},0).wait(1).to({x:61.5},0).wait(1).to({x:35.95},0).wait(1).to({x:6.85},0).wait(1).to({x:-19.3},0).wait(1).to({x:-39.9},0).wait(1).to({x:-55.75},0).wait(1).to({x:-68.2},0).wait(1).to({x:-76.7},0).wait(1).to({x:-81.55},0).wait(1).to({x:-83.85},0).wait(1).to({regX:-0.1,regY:0.1,x:-28.6,y:73.45},0).to({_off:true},1).wait(125));

	// hero_image
	this.instance_8 = new lib.hero_mc();
	this.instance_8.setTransform(376,187.45,0.4389,0.4389,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:93.3,regY:-35.4,x:415.8,y:171.85},0).wait(1).to({x:417.2},0).wait(1).to({x:404.85},0).wait(1).to({x:382.95},0).wait(1).to({x:360.05},0).wait(1).to({x:336.8},0).wait(1).to({x:313.3},0).wait(1).to({x:289.85},0).wait(1).to({x:267.05},0).wait(1).to({x:245.95},0).wait(1).to({x:227.85},0).wait(1).to({x:213.85},0).wait(1).to({x:203.95},0).wait(1).to({x:197.5},0).wait(1).to({x:193.4},0).wait(1).to({regX:0.1,regY:0.1,x:150.15,y:187.45},0).wait(25).to({regX:93.3,regY:-35.4,x:191.85,y:171.85},0).wait(1).to({x:194.8},0).wait(1).to({x:200.9},0).wait(1).to({x:211.85},0).wait(1).to({x:232.2},0).wait(1).to({x:264.7},0).wait(1).to({x:301.7},0).wait(1).to({x:334.95},0).wait(1).to({x:361.15},0).wait(1).to({x:381.3},0).wait(1).to({x:397.2},0).wait(1).to({x:408},0).wait(1).to({x:414.15},0).wait(1).to({x:417.05},0).wait(1).to({regX:0.2,regY:0.1,x:377,y:187.45},0).to({_off:true},1).wait(125));

	// background
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5050F").s().p("A4uTiMAAAgnDMAxdAAAMAAAAnDg");
	this.shape_36.setTransform(149.85,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(181));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-104.2,125,640.7,131.39999999999998);
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