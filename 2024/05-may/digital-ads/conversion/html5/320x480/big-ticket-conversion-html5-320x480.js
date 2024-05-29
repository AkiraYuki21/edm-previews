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
	this.shape.graphics.f("#FFE400").s().p("AgIBBQgDgCgDgDQgCgDAAgGQAAgGAFgEQAFgEAGAAQAHAAAFAEQAEAEABAGQAAAGgCADQgDADgEACQgDACgFAAQgEAAgEgCgAgOAWIAAhYIAdAAIAABYg");
	this.shape.setTransform(68.8,16.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AAFBCIgJgyIgCAAIAAAyIgeAAIAAiDIAgAAQAOAAAIAFQAIAEADAIQADAIAAAMIAAAJQAAAKgCAHQgDAGgEAEIAOA6gAgGgIIABAAQAEAAABgCQACgBgBgFIAAgMQABgFgCgCQgBgCgEABIgBAAg");
	this.shape_1.setTransform(61.375,16.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AgcBCIAAiDIA5AAIAAAcIgcAAIAAAXIAXAAIAAAbIgXAAIAAAZIAcAAIAAAcg");
	this.shape_2.setTransform(54.05,16.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AAWBCIAAhiIgCAPIgJBTIgVAAIgJhTIgCgPIAABiIgdAAIAAiDIAuAAIAEA+IAAAJIABgJIAEg+IAuAAIAACDg");
	this.shape_3.setTransform(45.075,16.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AAWBCIAAhiIgCAPIgJBTIgVAAIgJhTIgCgPIAABiIgdAAIAAiDIAuAAIAEA+IAAAJIABgJIAEg+IAuAAIAACDg");
	this.shape_4.setTransform(33.925,16.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AgRA/QgIgEgFgHQgEgJAAgLIAAhhIAfAAIAABiIABAEQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAIABgEIAAhiIAfAAIAABhQAAALgEAHQgEAIgHAEQgIAEgMABQgJAAgIgEg");
	this.shape_5.setTransform(24.2,16.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AgRBCIgPgEIAIgcIAKAEIAJACQAFAAACgDQACgCAAgEIAAgBQAAgDgCgFIgJgKIgFgGIgKgJQgEgFgCgHQgCgGAAgJIAAAAQAAgSAJgJQAJgKAOAAIAOACQAHABAHADIgIAaIgIgDIgGAAQgFAAgCACQgCACAAAEIAAABQAAADACADIAIAJIADADIADADIAJAKQAEAFADAGQACAHAAAKQAAAMgEAIQgFAJgHAEQgIAFgJAAQgJAAgIgCg");
	this.shape_6.setTransform(16.575,16.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AgRBCIgPgEIAIgcIAKAEIAJACQAFAAACgDQACgCAAgEIAAgBQAAgDgCgFIgJgKIgFgGIgKgJQgEgFgCgHQgCgGAAgJIAAAAQAAgSAJgJQAJgKAOAAIAOACQAHABAHADIgIAaIgIgDIgGAAQgFAAgCACQgCACAAAEIAAABQAAADACADIAIAJIADADIADADIAJAKQAEAFADAGQACAHAAAKQAAAMgEAIQgFAJgHAEQgIAFgJAAQgJAAgIgCg");
	this.shape_7.setTransform(7.575,16.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AgOBCIAAiDIAdAAIAACDg");
	this.shape_8.setTransform(2.15,16.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AAEBCIAAg0IgHAAIAAA0IgeAAIAAiDIAeAAIAAAyIAHAAIAAgyIAeAAIAACDg");
	this.shape_9.setTransform(-3.725,16.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AgOBCIAAhlIgTAAIAAgeIBDAAIAAAeIgTAAIAABlg");
	this.shape_10.setTransform(-10.95,16.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AgOBCIAAgmIgZhdIAfAAIAIAsIAJgsIAfAAIgZBdIAAAmg");
	this.shape_11.setTransform(-20.675,16.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AAABEQgQAAgKgKQgIgJAAgRIAAg+QAAgTAJgJQAJgJAQAAQASAAAIAKQAJAJAAASIAAA+QgBASgIAJQgKAJgQAAgAgCglIgBAEIAABDIABAEQAAABAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIABgEIAAhDIgBgEQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIAAAAQAAAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAg");
	this.shape_12.setTransform(-28.85,16.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AgPBBQgIgCgIgFIALgaIAHADIAHACQAEAAACgDQABgDAAgGIAAhbIAeAAIAABgQABARgKAKQgIAKgQAAQgFAAgIgCg");
	this.shape_13.setTransform(-36.7,16.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AAABCIgIhTIAABTIgeAAIAAiDIAnAAIAHBRIAAhRIAfAAIAACDg");
	this.shape_14.setTransform(-44.1,16.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AgcBCIAAiDIA5AAIAAAcIgcAAIAAAXIAXAAIAAAbIgXAAIAAAZIAcAAIAAAcg");
	this.shape_15.setTransform(-51.6,16.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("AAABEQgRAAgIgKQgJgJAAgRIAAg+QAAgTAJgJQAKgJAPAAQARAAAJAKQAJAJAAASIAAA+QAAASgKAJQgIAJgQAAgAgDglIAAAEIAABDIAAAEQABABAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIABgEIAAhDIgBgEQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIAAAAQAAAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAg");
	this.shape_16.setTransform(-61.1,16.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("AgOBCIAAhlIgSAAIAAgeIBBAAIAAAeIgSAAIAABlg");
	this.shape_17.setTransform(-68.5,16.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghB/QgPgEgOgFIAPg0IAUAHQAIADAHAAQALAAAEgEQAFgEAAgIIAAgCQAAgHgFgIQgFgIgMgMIgLgLQgKgKgIgJQgHgKgEgMQgEgMAAgRIAAgBQAAghARgSQAQgSAdgBQAMAAAOAEQAOADAOAFIgPAwIgQgEIgLgBQgKAAgFAEQgEAEAAAIIAAABQAAAGAFAHIAPAQIAFAGIAGAGQALAKAIAJQAHAKAEANQAFAMAAATQgBAXgIAQQgIARgOAIQgPAJgTAAQgQAAgPgDg");
	this.shape_18.setTransform(92.575,-11.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgbB+IAAhHIgxi0IA8AAIAQBUIARhUIA8AAIgwC0IAABHg");
	this.shape_19.setTransform(78,-11.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AATB+IgFgxIgbAAIgEAxIg5AAIAhj7IBTAAIAhD7gAAJAXIgIhCIgBgWIAAAWIgHBCIAQAAg");
	this.shape_20.setTransform(61.875,-11.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AALB+IgLiWIgKCWIhKAAIgTj7IA9AAIADDAIARjAIAtAAIARDAIADjAIA9AAIgTD7g");
	this.shape_21.setTransform(42.675,-11.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAB+IgQifIAACfIg6AAIAAj7IBMAAIAOCbIAAibIA7AAIAAD7g");
	this.shape_22.setTransform(19.25,-11.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAACCQggAAgRgSQgRgSAAgiIAAh3QAAgjASgRQASgSAeAAIABAAQAhABAQASQARASAAAhIAAB3QAAAkgSARQgRARgfAAgAgFhIQgCADAAAGIAACAQAAAGACACQACADADAAIAAAAQAEAAACgDQACgDAAgFIAAiAQAAgGgCgDQgCgCgEAAQgDAAgCACg");
	this.shape_23.setTransform(3.225,-11.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgcB+IAAj7IA5AAIAAD7g");
	this.shape_24.setTransform(-8.175,-11.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag6B+IAAj7IA6AAIAADCIA7AAIAAA5g");
	this.shape_25.setTransform(-19.125,-11.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag6B+IAAj7IA6AAIAADCIA7AAIAAA5g");
	this.shape_26.setTransform(-33.075,-11.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgcB+IAAj7IA5AAIAAD7g");
	this.shape_27.setTransform(-43.725,-11.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AApB+IAAi8IgCAdIgRCfIgrAAIgRifIgDgdIAAC8Ig3AAIAAj7IBXAAIAJB3IAAASIABgSIAJh3IBXAAIAAD7g");
	this.shape_28.setTransform(-58.225,-11.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AggB8QgQgEgPgIIAVgvQAGAFAHACQAIAEALAAQAIAAADgGQAEgHAAgJIAAgUQAAgIgCgGQgCgHgGgEQgGgFgMAAQgIAAgHADIgNAGIAPiMIBfAAIAAA2IgmAAIgDAgQAWACAMARQALARABAgIAAAeQgBAigRASQgSASgdABQgQAAgPgEgAACgoIAAgBIgCABIAAAAIAAAAIACAAg");
	this.shape_29.setTransform(-80.825,-10.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgPCAIAAi7IgaAFIAAg2IBTgTIAAD/g");
	this.shape_30.setTransform(-94.375,-11.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-100.6,-31.2,201.3,62.5), null);


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
	this.instance.setTransform(-157.5,-90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lock_up_mc, new cjs.Rectangle(-157.5,-90.5,315,181), null);


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
	this.instance.setTransform(-200,-142.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hero_mc, new cjs.Rectangle(-200,-142.5,400,285), null);


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
	this.instance.setTransform(-122,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-122,-23.5,244,47), null);


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
	this.instance = new lib._18();
	this.instance.setTransform(301,463,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAcIgEAAIgCgBIAAgHIAEABIAFABQAEAAABgCQACgCAAgDIABgDIgFABQgGAAgDgDQgCgDABgGIAHgdIAHAAIgGAdQAAABgBAAQAAABAAABQAAAAABAAQAAABAAAAIAEABIACAAIACAAIAHgiIAIAAIgKAsQgBAHgEADQgDADgGAAIgDgBg");
	this.shape.setTransform(297.525,468.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAeIALg7IAIAAIgMA7g");
	this.shape_1.setTransform(295.4,467.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAeIgGgBIAMg7IAHAAIgEASIADAAIADgBQAGABADADQACADgCAGIgDARQgBAGgEAEQgEADgFABIgHgBgAABgFIgBAAIgGAcIACAAIACABQACAAACgCQACgBAAgEIAEgRQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQgBAAAAAAQgBAAgBAAIgCABg");
	this.shape_2.setTransform(292.7821,467.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAcIAJgoIAGAAIgHAogAABgTIAAgDIABgEIADgBIAEABQAAAAAAABQAAAAABABQAAAAAAABQAAAAgBABIgCADQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAg");
	this.shape_3.setTransform(290.5583,467.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAVIgFgBIACgHIAEACIAEAAQADAAABgBQACgBACgDQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAIgCgDIgCgBQgDgCgCgCQgBgDAAgEQACgGAEgDQADgDAGAAIAEABIAEABIgCAHIgEgCIgDAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAADIABADIADABIAEACIACAEIAAAFQgBAHgEADQgEADgFAAIgFgBg");
	this.shape_4.setTransform(288.15,467.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AACAVIAGgeQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBAAAAIgEgBIgDAAIgBABIgIAiIgHAAIAJgnIAGgCIAGAAQAGAAADACQACADgBAGIgHAeg");
	this.shape_5.setTransform(285.1917,467.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMASQgCgDABgHIADgQQACgGADgDQAEgEAGAAQAHAAACAEQACADgCAGIgDAQQgBAHgEADQgDADgGABQgHgBgCgDgAAAgNQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIgEARQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABAAABAAQAAAAABAAQABAAAAAAQAAAAAAgBQABAAAAgBQACgBABgDIAEgRQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAg");
	this.shape_6.setTransform(282.0905,467.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAdIAMg3IAGgCIAHAAQAGAAACADQADADgCAHIgDAPQgBAHgEADQgEAEgFgBIgDAAIgDgBIgDARgAADgWIgCAAIgFAcIACABIACAAQAAAAABAAQABAAAAAAQABgBAAAAQAAAAABgBQACgBAAgDIAEgRQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBgBgBAAIgCABg");
	this.shape_7.setTransform(278.6781,468.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAVIgFgBIACgHIAEACIAEAAQADAAACgBQAAAAAAgBQABAAAAgBQABAAAAgBQAAAAAAgBQABgBAAAAQAAgBgBgBQAAAAAAAAQAAgBgBAAIgCgDIgCgBQgDgCgCgCQgCgDABgEQACgGAEgDQADgDAGAAIAEABIAEABIgDAHIgDgCIgDAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAADIABADIADABIAFACIABAEIAAAFQgBAHgEADQgEADgFAAIgFgBg");
	this.shape_8.setTransform(275.8,467.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMASQgCgEABgHIADgOQACgHAEgEQAEgDAFAAQAGAAACADQACAEgBAHIgCAJIgQAAIgBAFQgBAEABACQACACADAAIAEAAIAEgCIAAAGIgGACIgEABQgHgBgDgDgAAAgNIgCAFIgBAFIAJAAIABgFQABgDgBgCQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAg");
	this.shape_9.setTransform(272.979,467.9719);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAEAeIgEgYIgBAAIgBAAIgDAAIgGAYIgHAAIANg7IAKAAQAGAAAEACQADACAAADQABADgBAFIgBAFQgBAFgCAEQgDACgEACIAFAagAgEAAIAEAAIAEAAIADgDIACgFIABgGIABgFQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBIgEgBIgEAAg");
	this.shape_10.setTransform(269.8,467.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKAcIgEAAIgCgBIAAgHIAEABIAFABQAEAAABgCQACgCAAgDIABgDIgFABQgGAAgDgDQgCgDABgGIAHgdIAHAAIgGAdQAAABgBAAQAAABAAABQAAAAABAAQAAABAAAAIAEABIACAAIACAAIAHgiIAIAAIgKAsQgBAHgEADQgDADgGAAIgDgBg");
	this.shape_11.setTransform(265.225,468.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMASQgDgDACgGIAAgBQABgHAFgCQADgDAGAAIACAAIACAAIABgDQABgEgCgBQgBgCgEAAIgEAAIgFACIADgHIADgBIADgBIADAAQAHAAACADQACADgBAHIgGAcIgGABIgFABQgGAAgDgEgAgDACQgCACgBAEQgBAEABACQABAAAAABQABAAAAAAQABAAAAABQABAAABAAIABAAIACgBIADgOIgCgBIgCAAQgCAAgCACg");
	this.shape_12.setTransform(262.054,467.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJAeIALg7IAIAAIgLA7g");
	this.shape_13.setTransform(260.05,467.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAeIAMg7IAKAAQAGAAAEACQADACAAADQABADgBAFIgBAFQgBAFgDAEQgCADgDABQgFACgFAAIgEAAIgFAYgAgEAAIAEAAIAEgBQABAAABgBQAAAAABAAQAAgBAAAAQABAAAAgBIACgFIABgFIAAgFQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgGgBIgDAAg");
	this.shape_14.setTransform(257.6,467.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGAeIAAgRIgLgqIAOAAIADAUIAEgUIAOAAIgLAqIAAARg");
	this.shape_15.setTransform(81.225,466.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNAeIAAg7IANAAIAAAuIAOAAIAAANg");
	this.shape_16.setTransform(77.575,466.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAeIAAg7IAPAAQAGAAAEACQADACABAEQACADAAAGIAAAEQAAAHgDACQgCAEgDACQgEABgEAAIgBAAIAAAWgAgBgCIABAAIABgBIABgDIAAgGIgBgEIgBAAIgBAAg");
	this.shape_17.setTransform(74.1,466.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPAeIAAg7IAPAAQAGAAAEACQADACABAEQACADAAAGIAAAEQAAAHgDACQgCAEgDACQgEABgEAAIgBAAIAAAWgAgBgCIABAAIABgBIABgDIAAgGIgBgEIgBAAIgBAAg");
	this.shape_18.setTransform(70.5,466.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAFAeIgBgMIgGAAIgBAMIgOAAIAIg7IATAAIAIA7gAACAGIgCgQIAAgFIAAAFIgBAQIADAAg");
	this.shape_19.setTransform(66.75,466.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHAeIgHgCIAEgMIAEABIAEABIADgBIABgDIAAAAIgBgEIgDgFIgDgCIgEgEIgDgFIgBgHQAAgIAEgFQAEgEAGAAIAHABIAGACIgEALIgDgBIgDAAIgEABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIAAAAIAAADIAEAEIACABIABACIAEAEIADAFIABAHIAAABQAAAFgCAEQgCAEgDACQgEACgEAAIgHgBg");
	this.shape_20.setTransform(62.25,466.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgDANIgCgZIALAAIgCAZg");
	this.shape_21.setTransform(59.75,464.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgKAaQgEgEgBgJIAAgZQABgJAEgEQAEgFAIAAIAHABIAFABIgFAMIgCgBIgDAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABIAAAFIAAAWQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIADAAIADgBIAEALIgGACIgHABQgIAAgEgFg");
	this.shape_22.setTransform(57.35,466.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQAbQgEgEAAgIIAAgHQAAgEACgDQACgCADAAIgCgFIgBgEIAAgFQAAgFACgEQABgDADgCQADgBAFAAQADAAADABQADACABADIABAJIAAAEIgBAEQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAIgFADIAFAHIgBgDIAAgEIALAAIAAAIIAAAFIgDAGIAIALIgOAAIgBgCIgEACIgEABQgJAAgFgEgAgHAJIAAACIAAACQAAAEACABQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIABgBIAAAAIgHgLgAgDgRIgBACIAAAHIAAABIAAAAIADgBIAAgCIAAgFIAAgCIgBgBIgBABg");
	this.shape_23.setTransform(53.225,466.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGAeIAAguIgIAAIAAgNIAdAAIAAANIgIAAIAAAug");
	this.shape_24.setTransform(49.325,466.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAmIAAhLIALAAIAABLg");
	this.shape_25.setTransform(43.75,467.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgHAeIgHgDIAFgMIADACIAEABQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIABgDIAAgFIAAgEIgBgCIgFgBIgDABIgDABIADghIAWAAIAAANIgJAAIgBAIQAFAAADAEQADAFAAAGIAAAHQAAAJgEAEQgEAEgHAAIgHAAgAABgJIgBAAg");
	this.shape_26.setTransform(37.875,466.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHAdQgDgBgCgEQgCgDgBgGIAAgHIABgDIAAgDIABgCIAFgPIAGgPIAMAAIgEALIgFALIABAAIABAAQAGAAAEAEQADAEAAAGIAAAHQAAAGgCAEQgCAEgDACQgEACgFAAQgDAAgEgCgAAAACIAAACIAAAMIAAACIAAAAIABAAIABgCIAAgMIgBgBIgBgBIAAAAIAAAAg");
	this.shape_27.setTransform(34.225,466.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgOAfIAAgMIAIgKIAGgKQACgFAAgEIAAAAIgBgEIgBgCIgCAAIgFAAIgDABIgFgLIAHgCQAEgCAEAAQAFABADACQAEADACAEQACAEAAAFIAAAAQgBAFgBAEIgEAHIgEAHIgGAGIAOAAIAAANg");
	this.shape_28.setTransform(30.75,466.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgHAeIgHgCIAEgMIAEABIAEABIADgBIABgDIAAAAIgBgEIgDgFIgDgCIgEgEIgDgFIgBgHQAAgIAEgFQAEgEAGAAIAHABIAGACIgEALIgDgBIgDAAIgEABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIAAAAIAAADIAEAEIACABIABACIAEAEIADAFIABAHIAAABQAAAFgCAEQgBAEgEACQgEACgEAAIgHgBg");
	this.shape_29.setTransform(26.5,466.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgMAeIAAg7IAZAAIAAAMIgNAAIAAALIALAAIAAAMIgLAAIAAALIAOAAIAAANg");
	this.shape_30.setTransform(23.55,466.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgGAeIAAg7IANAAIAAA7g");
	this.shape_31.setTransform(21.05,466.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AADAeIgEgXIgBAAIAAAXIgOAAIAAg7IAPAAQAFAAAEACQAEACABAEQACADAAAGIAAAEIgBAIQgBABgDACIAHAbgAgCgDIAAAAIACgBIABgDIAAgFIgBgEIgCAAIAAAAg");
	this.shape_32.setTransform(18.225,466.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgMAeIAAg7IAZAAIAAAMIgNAAIAAALIALAAIAAAMIgLAAIAAALIAOAAIAAANg");
	this.shape_33.setTransform(14.9,466.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgHAeIgHgCIAEgMIAEABIAEABIADgBIABgDIAAAAIgBgEIgDgFIgDgCIgEgEIgDgFIgBgHQAAgIAEgFQAEgEAGAAIAHABIAGACIgEALIgDgBIgDAAIgEABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIAAAAIAAADIAEAEIACABIABACIAEAEIADAFIABAHIAAABQAAAFgCAEQgCAEgDACQgEACgEAAIgHgBg");
	this.shape_34.setTransform(11.75,466.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(181));

	// footer_bg
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5050F").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_35.setTransform(160,467.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(181));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(160,36.5,0.8182,0.8182);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(148).to({alpha:0},16).wait(17));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(160,380.95,0.5745,0.5745,0,0,0,0,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(164).to({_off:false},0).wait(1).to({regY:0,y:380.7861,alpha:0.0032},0).wait(1).to({y:380.3877,alpha:0.0145},0).wait(1).to({y:379.5859,alpha:0.0371},0).wait(1).to({y:378.1738,alpha:0.077},0).wait(1).to({y:375.7064,alpha:0.1467},0).wait(1).to({y:371.4428,alpha:0.2672},0).wait(1).to({y:366.1585,alpha:0.4164},0).wait(1).to({y:360.9052,alpha:0.5648},0).wait(1).to({y:356.5193,alpha:0.6887},0).wait(1).to({y:353.0777,alpha:0.7859},0).wait(1).to({y:350.3679,alpha:0.8625},0).wait(1).to({y:348.2285,alpha:0.9229},0).wait(1).to({y:346.8159,alpha:0.9628},0).wait(1).to({y:346.006,alpha:0.9857},0).wait(1).to({y:345.6112,alpha:0.9969},0).wait(1).to({regY:0.1,y:345.55,alpha:1},0).wait(1));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(-164.95,220,0.7981,0.7981);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(148).to({_off:false},0).wait(1).to({x:-163.9045},0).wait(1).to({x:-160.2473},0).wait(1).to({x:-152.8876},0).wait(1).to({x:-139.9255},0).wait(1).to({x:-117.2756},0).wait(1).to({x:-78.1384},0).wait(1).to({x:-29.632},0).wait(1).to({x:18.5898},0).wait(1).to({x:58.8494},0).wait(1).to({x:90.4415},0).wait(1).to({x:115.3153},0).wait(1).to({x:134.9538},0).wait(1).to({x:147.9212},0).wait(1).to({x:155.3556},0).wait(1).to({x:158.9796},0).wait(1).to({x:160},0).wait(17));

	// sub_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(157.2,425.65);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55).to({_off:false},0).wait(1).to({regX:0.1,regY:-0.5,x:157.3,y:425.05,alpha:0.0037},0).wait(1).to({y:424.8,alpha:0.0167},0).wait(1).to({y:424.25,alpha:0.0435},0).wait(1).to({y:423.3,alpha:0.0919},0).wait(1).to({y:421.5,alpha:0.1816},0).wait(1).to({y:418.65,alpha:0.3248},0).wait(1).to({y:415.35,alpha:0.4878},0).wait(1).to({y:412.45,alpha:0.6345},0).wait(1).to({y:410.15,alpha:0.7499},0).wait(1).to({y:408.35,alpha:0.8388},0).wait(1).to({y:406.95,alpha:0.9088},0).wait(1).to({y:406,alpha:0.9564},0).wait(1).to({y:405.45,alpha:0.9834},0).wait(1).to({y:405.2,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:157.2,y:405.65,alpha:1},0).wait(20).to({regX:0.1,regY:-0.5,x:157.3,y:405.2,alpha:0.9963},0).wait(1).to({y:405.45,alpha:0.9833},0).wait(1).to({y:406,alpha:0.9565},0).wait(1).to({y:406.95,alpha:0.9081},0).wait(1).to({y:408.75,alpha:0.8184},0).wait(1).to({y:411.6,alpha:0.6752},0).wait(1).to({y:414.9,alpha:0.5122},0).wait(1).to({y:417.8,alpha:0.3655},0).wait(1).to({y:420.1,alpha:0.2501},0).wait(1).to({y:421.9,alpha:0.1612},0).wait(1).to({y:423.3,alpha:0.0912},0).wait(1).to({y:424.25,alpha:0.0436},0).wait(1).to({y:424.8,alpha:0.0166},0).wait(1).to({y:425.05,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:157.2,y:425.65,alpha:0},0).wait(77));

	// other_prize
	this.instance_5 = new lib.other_prize_mc();
	this.instance_5.setTransform(160,424.5,0.7349,0.7349);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(97).to({_off:false},0).wait(1).to({y:424.4189,alpha:0.0037},0).wait(1).to({y:424.1317,alpha:0.0167},0).wait(1).to({y:423.5439,alpha:0.0435},0).wait(1).to({y:422.4791,alpha:0.0919},0).wait(1).to({y:420.5056,alpha:0.1816},0).wait(1).to({y:417.3545,alpha:0.3248},0).wait(1).to({y:413.769,alpha:0.4878},0).wait(1).to({y:410.542,alpha:0.6345},0).wait(1).to({y:408.002,alpha:0.7499},0).wait(1).to({y:406.0465,alpha:0.8388},0).wait(1).to({y:404.5072,alpha:0.9088},0).wait(1).to({y:403.4593,alpha:0.9564},0).wait(1).to({y:402.8644,alpha:0.9834},0).wait(1).to({y:402.5792,alpha:0.9964},0).wait(1).to({y:402.5,alpha:1},0).wait(37).to({x:160.8687},0).wait(1).to({x:163.9074},0).wait(1).to({x:170.0226},0).wait(1).to({x:180.7928},0).wait(1).to({x:199.6125},0).wait(1).to({x:232.1315},0).wait(1).to({x:272.4353},0).wait(1).to({x:312.5027},0).wait(1).to({x:345.9543},0).wait(1).to({x:372.204},0).wait(1).to({x:392.8716},0).wait(1).to({x:409.1892},0).wait(1).to({x:419.9638},0).wait(1).to({x:426.141},0).wait(1).to({x:429.1521},0).wait(1).to({x:430},0).wait(17));

	// promo
	this.instance_6 = new lib.promo_mc();
	this.instance_6.setTransform(439.95,224,0.8327,0.8327);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40).to({_off:false},0).wait(1).to({x:438.9174,alpha:0.0037},0).wait(1).to({x:435.2636,alpha:0.0167},0).wait(1).to({x:427.7834,alpha:0.0435},0).wait(1).to({x:414.2342,alpha:0.0919},0).wait(1).to({x:389.1215,alpha:0.1816},0).wait(1).to({x:349.0231,alpha:0.3248},0).wait(1).to({x:303.3975,alpha:0.4878},0).wait(1).to({x:262.3345,alpha:0.6345},0).wait(1).to({x:230.0125,alpha:0.7499},0).wait(1).to({x:205.1298,alpha:0.8388},0).wait(1).to({x:185.5412,alpha:0.9088},0).wait(1).to({x:172.2071,alpha:0.9564},0).wait(1).to({x:164.6372,alpha:0.9834},0).wait(1).to({x:161.0084,alpha:0.9964},0).wait(1).to({x:160,alpha:1},0).wait(94).to({x:160.9072},0).wait(1).to({x:164.0804},0).wait(1).to({x:170.4662},0).wait(1).to({x:181.7131},0).wait(1).to({x:201.3657},0).wait(1).to({x:235.3239},0).wait(1).to({x:277.4116},0).wait(1).to({x:319.2524},0).wait(1).to({x:354.1845},0).wait(1).to({x:381.596},0).wait(1).to({x:403.1783},0).wait(1).to({x:420.2181},0).wait(1).to({x:431.4696},0).wait(1).to({x:437.9202},0).wait(1).to({x:441.0646},0).wait(1).to({x:441.95},0).wait(17));

	// lock_up
	this.instance_7 = new lib.lock_up_mc();
	this.instance_7.setTransform(-115.5,141.05,0.7333,0.7333);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({x:-114.2526},0).wait(1).to({x:-115.9587},0).wait(1).to({x:-100.911},0).wait(1).to({x:-74.1978},0).wait(1).to({x:-46.2667},0).wait(1).to({x:-17.8821},0).wait(1).to({x:10.7914},0).wait(1).to({x:39.3875},0).wait(1).to({x:67.1799},0).wait(1).to({x:92.9259},0).wait(1).to({x:114.9923},0).wait(1).to({x:132.0989},0).wait(1).to({x:144.1429},0).wait(1).to({x:152.0516},0).wait(1).to({x:157.0127},0).wait(1).to({x:160},0).wait(25).to({x:158.9838},0).wait(1).to({x:155.3881},0).wait(1).to({x:148.0268},0).wait(1).to({x:134.693},0).wait(1).to({x:109.9795},0).wait(1).to({x:70.5185},0).wait(1).to({x:25.6181},0).wait(1).to({x:-14.7922},0).wait(1).to({x:-46.6004},0).wait(1).to({x:-71.0876},0).wait(1).to({x:-90.3648},0).wait(1).to({x:-103.487},0).wait(1).to({x:-110.9365},0).wait(1).to({x:-114.5076},0).wait(1).to({x:-115.5},0).to({_off:true},1).wait(125));

	// hero_image
	this.instance_8 = new lib.hero_mc();
	this.instance_8.setTransform(488.65,359.9,0.8428,0.8428,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:0,x:487.0648},0).wait(1).to({x:489.0961},0).wait(1).to({x:471.1809},0).wait(1).to({x:439.3772},0).wait(1).to({x:406.1235},0).wait(1).to({x:372.3298},0).wait(1).to({x:338.1921},0).wait(1).to({x:304.1467},0).wait(1).to({x:271.0581},0).wait(1).to({x:240.4059},0).wait(1).to({x:214.1345},0).wait(1).to({x:193.768},0).wait(1).to({x:179.4289},0).wait(1).to({x:170.0131},0).wait(1).to({x:164.1066},0).wait(1).to({regX:0.1,x:160.65},0).wait(25).to({regX:0,x:161.7598},0).wait(1).to({x:166.0408},0).wait(1).to({x:174.8049},0).wait(1).to({x:190.6796},0).wait(1).to({x:220.1026},0).wait(1).to({x:267.0834},0).wait(1).to({x:320.5401},0).wait(1).to({x:368.6511},0).wait(1).to({x:406.5207},0).wait(1).to({x:435.6742},0).wait(1).to({x:458.625},0).wait(1).to({x:474.2477},0).wait(1).to({x:483.1169},0).wait(1).to({x:487.3685},0).wait(1).to({regX:0.1,x:488.65},0).to({_off:true},1).wait(125));

	// background
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5050F").s().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/g");
	this.shape_36.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(181));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-159,240,816.6,240);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 320,
	height: 480,
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