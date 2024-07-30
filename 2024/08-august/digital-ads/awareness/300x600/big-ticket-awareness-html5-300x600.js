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
	this.shape.graphics.f("#FFFFFF").s().p("AAJCWIAAiYQAAgFgDgDQgCgDgEABIgEAAIgEAAIAACiIhBAAIAAkrIBBAAIAABLIAHAAIAEAAQAiAAASAQQATAQAAAkIAACcg");
	this.shape.setTransform(122.425,-41.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqCKQghAAgRgIQgSgIgHgOQgHgQAAgVIAAhYIgTAAIAAg8IATAAIAAg8IBBAAIAAA8IAjAAIAAA8IgjAAIAABHQAAANAGAFQAGAFAQgBIAHAAIAAA+g");
	this.shape_1.setTransform(106.425,-40.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJBxIAAiYQAAgFgDgDQgCgDgEAAIgEAAIgEAAIAACjIhBAAIAAjTQAWgGAUgEQAUgDAOAAQAiAAASAPQATARAAAjIAACdg");
	this.shape_2.setTransform(90.825,-37.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAByQgjAAgSgTQgTgVAAgqIAAhAQAAgqATgTQASgVAjABIABAAQAjgBATAVQASATAAAqIAABAQAAAqgSAVQgTATgjAAgAgFgwQgCAFAAAJIAABEQAAAKACAFQACADADAAIABAAQAEAAACgEQACgEAAgKIAAhEQAAgJgCgEQgCgFgEAAIgBAAQgDAAgCAEg");
	this.shape_3.setTransform(73.475,-37.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxCWIAAjgIgDAjIgVC9IgyAAIgUi9IgDgjIAADgIhDAAIAAkrIBpAAIAKCOIAAAWIABgWIAMiOIBnAAIAAErg");
	this.shape_4.setTransform(52.35,-41.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghBxQgQgBgTgGIAFg/QAOAFANACQAMADAMAAQAKAAAFgBQAGgDAAgFQAAgFgDgDQgDgDgHgDIgHgDIgHgEQgYgJgLgRQgMgSAAgaQAAgRAHgPQAHgQAPgJQAPgJAWgBIAYACQAQACARAFIgFA9QgLgEgLgCQgKgDgLABQgIgBgEADQgEADAAAEQAAAEAEADIAJAFIAHAEIAGADQAPAHALAIQALAJAGALQAGAMAAATQAAAVgIAQQgHAQgSAJQgSALgbAAIgYgCg");
	this.shape_5.setTransform(27.325,-37.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggCcIAAjWIBBAAIAADWgAgWhgQgIgJABgRQgBgPAIgJQAIgJAOAAQAOAAAHAJQAIAJAAAPQAAARgIAJQgHAJgOAAQgOAAgIgJg");
	this.shape_6.setTransform(14.9,-42.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAJCWIAAiYQAAgFgDgDQgCgDgEABIgEAAIgEAAIAACiIhBAAIAAkrIBBAAIAABLIAHAAIAEAAQAiAAASAQQATAQAAAkIAACcg");
	this.shape_7.setTransform(1.225,-41.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiCWIAAjnIgqAAIAAhEICYAAIAABEIgpAAIAADng");
	this.shape_8.setTransform(-15.45,-41.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AgWCZIgUgDIgOgDIgRhAQAOAFAPACQAPADAKAAIARgBQAFgCADgGQACgGAAgPIgIAAIAAAAQgjABgTgVQgTgUAAgpIAAgyQAAgtATgUQATgUAjAAIAjABIAnADIAADaQAAAsgTAVQgTAUgoAAIgSgBgAgFhYQgCAFgBANIAAA0QABANACAEQACADAHAAIABAAIACAAIABAAIABguIAAgwIgEAAIgCAAQgFAAgDAEg");
	this.shape_9.setTransform(-36.95,-33.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AggCcIAAjWIBAAAIAADWgAgWhgQgIgJAAgRQAAgPAIgJQAIgJAOAAQAOAAAHAJQAJAJgBAPQABARgJAJQgHAJgOAAQgOAAgIgJg");
	this.shape_10.setTransform(-50.2,-42.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AhPCWIAAkrIBLAAQAXAAASAIQATAHAKAQQALAQAAAbIAAAHQAAAXgHAOQgIAPgRAHQASAHAJAOQAIAOAAAaIAAASQAAAbgKARQgJASgSAJQgSAJgXAAgAgKBVIAEAAQAIAAADgFQADgEgBgHIAAgeQABgIgDgFQgDgEgIAAIgEAAgAgKggIAFAAQAIAAADgFQADgEAAgHIAAgTQAAgIgDgFQgDgEgIAAIgFAAg");
	this.shape_11.setTransform(-63.925,-41.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AAJBxIAAiYQAAgFgDgDQgCgDgEAAIgEAAIgEAAIAACjIhBAAIAAjTQAWgGAUgEQAUgDAOAAQAiAAASAPQATARAAAjIAACdg");
	this.shape_12.setTransform(-86.725,-37.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AgfCcIAAjWIA/AAIAADWgAgWhgQgHgJgBgRQABgPAHgJQAIgJAOAAQAOAAAIAJQAHAJABAPQgBARgHAJQgIAJgOAAQgOAAgIgJg");
	this.shape_13.setTransform(-100.35,-42.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AANCWIgNi0IgMC0IhZAAIgWkrIBJAAIADDlIAUjlIA3AAIAUDlIADjlIBJAAIgWErg");
	this.shape_14.setTransform(-118.225,-41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-133,-65.5,266,56.5), null);


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
	this.instance.setTransform(-145.75,-129.5,1.0486,1.0486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-145.7,-129.5,291.5,259), null);


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
	this.instance.setTransform(-179,-304,1.2855,1.2855);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-179,-304,357.4,369), null);


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
	this.shape.graphics.f("#FFE400").s().p("AggBvQgPgCgUgFIAGg+QANAFANACQAMADALAAQAKAAAFgCQAGgCAAgFQAAgFgDgDIgJgGIgHgDIgIgDQgWgKgMgQQgLgRAAgaQAAgRAGgPQAHgOAPgJQAOgJAWgBQAJAAAPACQAQABAQAGIgFA7IgVgGQgKgCgLAAQgIAAgDACQgFADAAAEQAAAEAEADIAJAFIAHADIAGAEQAPAGALAIQAKAJAGALQAGAMAAASQAAAUgIAQQgHAQgRAJQgSAKgbAAIgXgBg");
	this.shape.setTransform(107.1765,-23.805);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AgvBbQgWgUAAgrIAAg7QAAgpARgUQASgTAlAAQAiAAARATQAQAUAAApIAAAyIhMAAIAAAMQAAAJAHAGQAHAGAQAAIAPgBIAPgDIAGA6IgaAFIgVABIgCAAQglAAgVgVgAgEg0QgBAEAAAKIAAAQIAPAAIAAgQQAAgKgCgEQgBgEgFAAQgEAAgCAEg");
	this.shape_1.setTransform(91.5507,-23.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("Ag/BpIAAg7IA5hbIg1AAIAAg7IB4AAIAAA7Ig6BaIA9AAIAAA8g");
	this.shape_2.setTransform(76.55,-23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AgfCZIAAjSIA/AAIAADSgAgVheQgIgJAAgQQAAgPAIgJQAHgJAOAAQANAAAIAJQAHAJAAAPQAAAQgHAJQgIAJgNAAQgOAAgHgJg");
	this.shape_3.setTransform(64.4,-28.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("Ag0BuIAAjSQANgDASgEQATgCAUAAIAjAAIAAA8IgjAAIgGAAIgFAAIAACfg");
	this.shape_4.setTransform(54.075,-24.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AhMCTIAAklIBHAAQAgABASAKQASAKAHASQAHASAAAZIAAAYQAAAggLAQQgKARgTAHQgTAHgXAAIgEAAIAABsgAgJgPIACAAQAIABAEgEQAEgEgBgKIAAggQABgKgEgEQgEgEgIAAIgCAAg");
	this.shape_5.setTransform(38.925,-27.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AAICTIAAiUQAAgGgCgDQgCgCgEAAIgEAAIgDAAIAACfIhAAAIAAklIBAAAIAABKIAGAAIAEAAQAhgBASAQQASAQAAAiIAACag");
	this.shape_6.setTransform(16.775,-27.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AggBvQgPgCgUgFIAGg+QANAFANACQAMADALAAQAKAAAFgCQAGgCAAgFQAAgFgDgDIgJgGIgHgDIgIgDQgWgKgMgQQgLgRAAgaQAAgRAGgPQAHgOAPgJQAOgJAWgBQAJAAAPACQAQABAQAGIgFA7IgVgGQgKgCgLAAQgIAAgDACQgFADAAAEQAAAEAEADIAJAFIAHADIAGAEQAPAGALAIQAKAJAGALQAGAMAAASQAAAUgIAQQgHAQgRAJQgSAKgbAAIgXgBg");
	this.shape_7.setTransform(0.7265,-23.805);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("Ag2BfQgRgRAAggIAAgDQAAgfARgQQARgRAjAAIAEAAIAGAAIAAgIQABgNgGgEQgFgFgQAAQgKAAgMADQgMADgLAEIARg+IAKgDIARgDIARgCQAbAAARAJQAQAIAHAQQAHARAAAYIAACJIgmAJQgSADgSAAQgjAAgRgRgAgDAYQgEAEAAAIIAAAGQAAAIAEAEQADAEAFAAIADAAIAAgmIgDAAQgFAAgDAEg");
	this.shape_8.setTransform(-15.4733,-23.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AAKCXQgpAAgVgXQgVgWAAgsIAAh8QAAgsAVgWQAVgWApAAIAAAAQARAAAPADQAOADANAGIgYA2QgGgCgGgBIgLgBIgBAAQgNAAgHAJQgGAIAAAQIAABvQABAQAHAIQAIAIAOAAIAAAAIAMgBIANgFIAYA2QgOAIgQAEQgPADgTAAg");
	this.shape_9.setTransform(-30.825,-27.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AgDCSIgTgBIgTgDIgNgDIgRg+QAOAEAOADQAOADALAAQAKAAAGgCQAFgBADgHQACgGAAgOIgGABIgEAAQgTAAgPgHQgQgGgKgPQgJgPAAgaIAAiGIBAAAIAACEQAAAGACADQADACADAAIAEAAIADAAIABhIIAAhHIA/AAIAADQQABArgTAVQgSATglAAIgCAAg");
	this.shape_10.setTransform(-52.7,-19.5244);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AgfCTIAAklIA/AAIAAElg");
	this.shape_11.setTransform(-66,-27.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AgfCZIAAjSIA/AAIAADSgAgWheQgHgJAAgQQAAgPAHgJQAJgJANAAQANAAAIAJQAHAJAAAPQAAAQgHAJQgIAJgNAAQgNAAgJgJg");
	this.shape_12.setTransform(-75.3,-28.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("Ag2BfQgRgRAAggIAAgDQAAgfARgQQARgRAjAAIAEAAIAGAAIAAgIQABgNgGgEQgFgFgQAAQgKAAgMADQgMADgLAEIARg+IAKgDIARgDIARgCQAbAAARAJQAQAIAHAQQAHARAAAYIAACJIgmAJQgSADgSAAQgjAAgRgRgAgDAYQgEAEAAAIIAAAGQAAAIAEAEQADAEAFAAIADAAIAAgmIgDAAQgFAAgDAEg");
	this.shape_13.setTransform(-88.5733,-23.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AhNCTIAAklIBIAAQAXABATAKQATAKAKAUQAMATAAAbIAAB2QAAAbgMAUQgKATgTALQgTALgXAAgAgJBTIACAAQAJAAAEgEQACgFAAgMIAAh+QAAgLgEgEQgEgDgHAAIgCAAg");
	this.shape_14.setTransform(-105.7,-27.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAKCTIgWhaIAABaIhAAAIAAklIBAAAIAACjIAThPIBBAAIggBfIAlByg");
	this.shape_15.setTransform(45.975,-71.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgnCNQgRgLgKgSQgJgTAAgZIAAiHQAAgZAJgTQAKgSARgLQARgKAWAAQAXAAARAKQARALAKASQAJATAAAZIAACHQAAAZgJATQgKASgRALQgRAKgXAAQgWAAgRgKgAgFhUQgCACAAAFIAACcQABAFABABQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAIABABQAIAAAAgJIAAicQgBgEgBgDIgEgCIgCAAQgDgBgCADg");
	this.shape_16.setTransform(28.075,-71.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgmCQQgSgEgRgKIAYg2QAGAFAKAEQAJADAMABQAKAAADgIQAFgHgBgLIAAgYQABgIgDgIQgCgIgHgFQgHgEgOgBQgJABgIADIgQAGIASijIBvAAIAAA+IgsAAIgEAnQAZACAOATQAOAUAAAlIAAAkQAAAngVAVQgUAWgiAAQgTAAgSgFgAAAguIADAAIAAgBg");
	this.shape_17.setTransform(10.175,-71.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhNCTIAAklIBIAAQAXABATAKQATAKAKAUQAMATAAAbIAAB2QAAAbgMAUQgKATgTALQgTALgXAAgAgJBTIACAAQAJAAAEgEQACgFAAgMIAAh+QAAgLgEgEQgEgDgHAAIgCAAg");
	this.shape_18.setTransform(-12.2,-71.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhACTIAAklICAAAIAAA/Ig+AAIAAAyIAzAAIAAA+IgzAAIAAA3IA/AAIAAA/g");
	this.shape_19.setTransform(-27.875,-71.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAWCTIgGg5IgfAAIgGA5IhBAAIAmklIBhAAIAmElgAAKAbIgIhOIgCgYIgBAYIgIBOIATAAg");
	this.shape_20.setTransform(-45,-71.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-116.2,-95.3,232.5,99.39999999999999), null);


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
	this.instance.setTransform(-207,-246,1.7004,1.7004);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-207,-246,414.9,79.9), null);


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
(lib.bigticketawarenesshtml5300x600 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(278,577,0.9375,0.9375);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWA4IgHgCIgFgBIgCgYIALADIAJABIAHAAQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIACgIIgCAAIgBAAQgIAAgGgCQgFgDgCgGQgDgGACgJIALgzIAYAAIgKAzIAAADIADABIABAAIABAAIAGgcIAFgbIAZAAIgRBPQgDARgJAIQgIAHgPAAIgHAAg");
	this.shape.setTransform(272.45,587.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXA5IAXhxIAYAAIgYBxg");
	this.shape_1.setTransform(267.65,584.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUA4IgNgDIAXhtIAXAAIgFAcIADAAQAPAAAFAHQAFAIgEAPIgFAYQgDAQgIAIQgJAHgOAAIgNgBgAgFAiIACAAQABAAAAAAQABAAABAAQAAAAAAgBQAAAAAAAAIACgHIAFgYQACgEgBgBQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_2.setTransform(262.1516,584.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWA7IARhQIAXAAIgRBQgAABgkQgCgDABgGQABgGAEgEQADgDAFAAQAGAAACADQADAEgCAGQgBAGgEADQgDAEgGAAQgFAAgCgEg");
	this.shape_3.setTransform(257.4531,584.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAqIgMgCIAHgYIAJADIAJABIAGgBQAAAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAgDIgDgCIgDgBIgCgBQgIgEgDgGQgDgGACgKQABgHAEgGQAEgFAGgEQAFgDAJAAIAJAAIAMADIgGAXIgIgCIgIgBIgFABIgCACIABADIADACIACABIADABQAFADADADQAEADABAEQABAFgBAHQgCAHgEAGQgEAHgIADQgHAEgKAAIgDAAIgGgBg");
	this.shape_4.setTransform(252.425,585.9583);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDArIALg5IAAgDIgCgBIgCAAIgBAAIgMA9IgZAAIARhPIARgEIAMgCQANAAAGAHQAFAFgCAOIgNA7g");
	this.shape_5.setTransform(246.1641,585.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAkQgFgIACgQIAGgXQADgQAJgIQAJgHAMAAQAOAAAFAHQAFAIgDAQIgFAXQgDAQgJAIQgJAHgMAAQgOAAgFgHgAABgRQgBABAAAEIgFAZIAAAFQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAIADgCIAAgFIAGgZIAAgFQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAgBABg");
	this.shape_6.setTransform(239.8639,585.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglA6IAYhxIAKgBIAJAAIAJgBQAOAAAGAIQAEAHgDAQIgGAZQgCAPgJAHQgIAIgOAAIgDAAIgGAdgAgBAGIABAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBIACgGIAFgXQABgFgBgCQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgCAAg");
	this.shape_7.setTransform(232.9016,587.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAqIgMgCIAHgYIAJADIAJABIAGgBQAAAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAgDIgDgCIgDgBIgCgBQgIgEgDgGQgDgGACgKQABgHAEgGQAEgFAGgEQAFgDAJAAIAJAAIAMADIgGAXIgIgCIgIgBIgFABIgCACIABADIADACIACABIADABQAFADADADQAEADABAEQABAFgBAHQgCAHgEAGQgEAHgIADQgHAEgKAAIgDAAIgGgBg");
	this.shape_8.setTransform(227.075,585.9583);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAjQgHgIADgQIAFgWQADgQAJgIQAJgHANAAQANAAAFAHQAFAIgEAQIgEASIgdAAIAAAFQgBAEACACQADACAFAAIAGAAIAGgBIgDAWIgKACIgIAAQgPAAgGgIgAACgTIgBAFIgBAGIAFAAIACgGIAAgFQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIgDACg");
	this.shape_9.setTransform(221.3247,585.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBA5IAAgrIgCAAIgJArIgaAAIAXhxIAbAAQANAAAGAFQAGADACAIQABAGgCAKIgCAIQgCAJgDAFQgEAFgEAEIACAygAAAgGIACAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQACgBABgEIACgLQABgEgBgCQAAAAgBAAQAAAAAAgBQgBAAgBAAQAAAAgBAAIgCAAg");
	this.shape_10.setTransform(214.3667,584.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWA4IgHgCIgGgBIgBgYIAKADIAJABIAIAAQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIADgIIgDAAIgCAAQgHAAgFgCQgGgDgCgGQgDgGACgJIALgzIAYAAIgJAzIAAADIACABIABAAIAAAAIAHgcIAFgbIAZAAIgRBPQgDARgJAIQgIAHgPAAIgHAAg");
	this.shape_11.setTransform(205.7,587.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAkQgFgGADgMIAAgBQADgMAHgGQAJgGAMgBIACAAIACAAIABgCQABgGgCgCQgCgCgFABIgJABIgJACIALgXIAFgCIAFgBIAHAAQALAAAGADQAGADABAHQABAGgCAJIgLA0IgPAEIgOABQgNAAgGgHgAgCAJQgCABgBAEIAAACQgBADACACQAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIACAAIACgPIgCAAIgCABg");
	this.shape_12.setTransform(199.0405,585.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXA5IAXhxIAYAAIgXBxg");
	this.shape_13.setTransform(194.4,584.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmA5IAXhxIAbAAQAMAAAHAFQAGADABAIQACAGgDAKIgCAKQgCAMgGAFQgFAHgIADQgIACgIAAIgCAAIgIAqgAAAgFIABAAQADAAACgBQACgCAAgEIADgMQABgEgBgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAgBAAIgBAAg");
	this.shape_14.setTransform(188.9531,584.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLA0IAAgdIgUhKIAZAAIAGAjIAHgjIAZAAIgUBKIAAAdg");
	this.shape_15.setTransform(128.475,586.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXA0IAAhnIAXAAIAABQIAYAAIAAAXg");
	this.shape_16.setTransform(122.175,586.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbA0IAAhnIAaAAQALAAAGAEQAGADADAHQADAGgBAJIAAAJQAAALgDAFQgFAGgGADQgGACgIAAIgCAAIAAAmgAgDgEIABAAQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAgBQACgBAAgEIAAgLQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAgBAAIgBAAg");
	this.shape_17.setTransform(116.25,586.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaA0IAAhnIAYAAQAMAAAGAEQAGADADAHQACAGABAJIAAAJQgBALgEAFQgEAGgGADQgHACgIAAIgBAAIAAAmgAgDgEIABAAQABAAAAAAQABAAAAgBQAAAAABAAQAAAAABgBQABgBAAgEIAAgLQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBAAgBAAIgBAAg");
	this.shape_18.setTransform(110,586.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAIA0IgCgUIgLAAIgCAUIgXAAIAOhnIAhAAIAOBngAADAKIgDgbIAAgJIAAAJIgDAbIAGAAg");
	this.shape_19.setTransform(103.475,586.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNA0IgMgDIAGgWIAIADIAHABQAEAAABgCQACgBAAgEIAAAAQAAgDgCgDIgGgJIgFgEIgHgHQgDgFgCgFQgBgFAAgHQAAgOAHgHQAGgIAMAAIAKABIAMAEIgGAUIgHgCIgFAAQgEAAgCABQgBACAAADIAAABQAAACACADIAGAHIACACIADADIAHAHIAFAJQACAGAAAHQAAAKgEAHQgDAGgGAEQgGAEgHAAQgHAAgGgCg");
	this.shape_20.setTransform(95.725,586.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGAWIgFgsIAXAAIgFAsg");
	this.shape_21.setTransform(91.35,583.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAuQgIgIAAgQIAAgrQAAgQAIgIQAHgIAPAAIALABIAJADIgJAUIgDgBIgFAAQgEAAgDADQgBACAAAGIAAAnQAAAGACACQADADAEAAIAFAAIAEgCIAJAUIgLADQgFACgGAAQgPAAgHgIg");
	this.shape_22.setTransform(87.2,586.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgcAvQgIgHAAgOIAAgMQAAgIAEgFQADgDAGgBIgEgJIgBgHIAAgHQAAgKACgGQACgGAFgCQAFgDAKAAQAGAAAEADQAFACACAGQACAGAAAKIAAAGIgBAHQgCAEgDAEQgDADgFACIAJAMIgBgGIgBgGIATAAIAAANIgBAKIgDAJIAOAUIgZAAIgCgEIgHAEQgDACgEAAQgRAAgHgHgAgNAQIAAADIAAAEQAAAGADACQACADAFAAIACgBIABAAIgNgUgAgHgfIgBAEIAAAMIAAABIAAACIAEgCQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgIIgBgEIgCgBIgCABg");
	this.shape_23.setTransform(80.125,586.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLA0IAAhPIgPAAIAAgYIA1AAIAAAYIgPAAIAABPg");
	this.shape_24.setTransform(73.325,586.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJBDIAAiFIAUAAIAACFg");
	this.shape_25.setTransform(63.65,587.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNAzQgGgDgEgGQgDgGAAgJIAAgNIAAgFIABgGIABgEIAKgaIAKgaIAVAAIgHATIgIATIABAAIACAAQALAAAFAHQAGAHAAALIAAANQAAAJgDAHQgEAHgFAEQgHAEgIAAQgHAAgGgDgAAAAEQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIAAAVIABADIAAAAIACgBIAAgCIAAgVIAAgDIgCgBIAAABg");
	this.shape_26.setTransform(53.6,586.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgNAzQgGgDgDgGQgEgGAAgJIAAgNIAAgFIABgGIABgEIAKgaIAKgaIAVAAIgHATIgIATIABAAIACAAQALAAAGAHQAFAHAAALIAAANQAAAJgDAHQgEAHgFAEQgHAEgIAAQgHAAgGgDgAgBAEQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIAAAVIAAADIABAAIACgBIAAgCIAAgVIAAgDIgCgBIgBABg");
	this.shape_27.setTransform(47.4,586.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgZA1IAAgVIAOgRQAHgKAEgHQADgJABgHIAAgBIgCgHIgDgCIgEgBIgIABIgGACIgHgUIAMgFQAGgBAIAAQAJAAAFAFQAHAEACAHQAEAHAAAJIAAABQAAAHgDAHQgCAHgEAGIgIAMIgJALIAXAAIAAAWg");
	this.shape_28.setTransform(41.4,586.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNA0IgMgDIAGgWIAIADIAHABQAEAAABgCQACgBAAgEIAAAAQAAgDgCgDIgGgJIgFgEIgHgHQgDgFgCgFQgBgFAAgHQAAgOAHgHQAGgIAMAAIAKABIAMAEIgGAUIgHgCIgFAAQgEAAgCABQgBACAAADIAAABQAAACACADIAGAHIACACIADADIAHAHIAFAJQACAGAAAHQAAAKgEAHQgDAGgGAEQgGAEgHAAQgHAAgGgCg");
	this.shape_29.setTransform(34.075,586.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWA0IAAhnIAsAAIAAAWIgVAAIAAASIASAAIAAAVIgSAAIAAAUIAWAAIAAAWg");
	this.shape_30.setTransform(28.9,586.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLA0IAAhnIAXAAIAABng");
	this.shape_31.setTransform(24.625,586.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAFA0IgIgnIgCAAIAAAnIgYAAIAAhnIAaAAQALAAAGAEQAHADACAHQADAGgBAJIAAAHQAAAIgCAGQgCAEgDADIAMAugAgFgGIACAAQAAAAABAAQABAAAAAAQABAAAAgBQAAAAAAAAIABgFIAAgKIgBgFQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgCAAg");
	this.shape_32.setTransform(19.7,586.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgWA0IAAhnIAsAAIAAAWIgVAAIAAASIASAAIAAAVIgSAAIAAAUIAWAAIAAAWg");
	this.shape_33.setTransform(13.95,586.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNA0IgMgDIAGgWIAIADIAHABQAEAAABgCQACgBAAgEIAAAAQAAgDgCgDIgGgJIgFgEIgHgHQgDgFgCgFQgBgFAAgHQAAgOAHgHQAGgIAMAAIAKABIAMAEIgGAUIgHgCIgFAAQgEAAgCABQgBACAAADIAAABQAAACACADIAGAHIACACIADADIAHAHIAFAJQACAGAAAHQAAAKgEAHQgDAGgGAEQgGAEgHAAQgHAAgGgCg");
	this.shape_34.setTransform(8.525,586.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(283));

	// footer_bg
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5050F").s().p("A3bCIIAAkPMAu3AAAIAAEPg");
	this.shape_35.setTransform(150,586.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(283));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(150,51.15,0.9088,0.9084);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(250).to({alpha:0},16).wait(17));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(150,507.15,0.5386,0.5386,0,0,0,0,0.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(266).to({_off:false},0).wait(1).to({regX:0.4,regY:-206,x:150.2,y:395.95,alpha:0.0032},0).wait(1).to({y:395.6,alpha:0.0145},0).wait(1).to({y:394.85,alpha:0.0371},0).wait(1).to({y:393.5,alpha:0.077},0).wait(1).to({y:391.2,alpha:0.1467},0).wait(1).to({y:387.2,alpha:0.2672},0).wait(1).to({y:382.25,alpha:0.4164},0).wait(1).to({y:377.3,alpha:0.5648},0).wait(1).to({y:373.2,alpha:0.6887},0).wait(1).to({y:370,alpha:0.7859},0).wait(1).to({y:367.45,alpha:0.8625},0).wait(1).to({y:365.45,alpha:0.9229},0).wait(1).to({y:364.1,alpha:0.9628},0).wait(1).to({y:363.35,alpha:0.9857},0).wait(1).to({y:363,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:150,y:473.95,alpha:1},0).wait(1));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(-154.6,356.25,0.7482,0.7482);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(250).to({_off:false},0).wait(1).to({regY:-155,x:-153.6,y:240.3},0).wait(1).to({x:-150.15},0).wait(1).to({x:-143.25},0).wait(1).to({x:-131.1},0).wait(1).to({x:-109.9},0).wait(1).to({x:-73.2},0).wait(1).to({x:-27.7},0).wait(1).to({x:17.45},0).wait(1).to({x:55.2},0).wait(1).to({x:84.8},0).wait(1).to({x:108.1},0).wait(1).to({x:126.55},0).wait(1).to({x:138.7},0).wait(1).to({x:145.65},0).wait(1).to({x:149.05},0).wait(1).to({regY:0,x:150,y:356.25},0).wait(17));

	// main_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(147.35,549,0.9375,0.9375);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:-0.4,regY:-38,x:147,y:513.3,alpha:0.0037},0).wait(1).to({y:513.05,alpha:0.0167},0).wait(1).to({y:512.55,alpha:0.0435},0).wait(1).to({y:511.65,alpha:0.0919},0).wait(1).to({y:509.95,alpha:0.1816},0).wait(1).to({y:507.3,alpha:0.3248},0).wait(1).to({y:504.25,alpha:0.4878},0).wait(1).to({y:501.5,alpha:0.6345},0).wait(1).to({y:499.3,alpha:0.7499},0).wait(1).to({y:497.65,alpha:0.8388},0).wait(1).to({y:496.35,alpha:0.9088},0).wait(1).to({y:495.45,alpha:0.9564},0).wait(1).to({y:494.95,alpha:0.9834},0).wait(1).to({y:494.7,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:147.35,y:530.25,alpha:1},0).wait(61).to({regX:-0.4,regY:-38,x:147,y:494.7,alpha:0.9963},0).wait(1).to({y:494.95,alpha:0.9833},0).wait(1).to({y:495.45,alpha:0.9565},0).wait(1).to({y:496.35,alpha:0.9081},0).wait(1).to({y:498.05,alpha:0.8184},0).wait(1).to({y:500.7,alpha:0.6752},0).wait(1).to({y:503.75,alpha:0.5122},0).wait(1).to({y:506.5,alpha:0.3655},0).wait(1).to({y:508.7,alpha:0.2501},0).wait(1).to({y:510.35,alpha:0.1612},0).wait(1).to({y:511.65,alpha:0.0912},0).wait(1).to({y:512.55,alpha:0.0436},0).wait(1).to({y:513.05,alpha:0.0166},0).wait(1).to({y:513.3,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:147.35,y:549,alpha:0},0).to({_off:true},1).wait(177));

	// other_prize
	this.instance_5 = new lib.other_prize_mc();
	this.instance_5.setTransform(150,547.95,0.689,0.689);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(173).to({_off:false},0).wait(1).to({regY:-54.5,y:510.3,alpha:0.0037},0).wait(1).to({y:510.05,alpha:0.0167},0).wait(1).to({y:509.5,alpha:0.0435},0).wait(1).to({y:508.5,alpha:0.0919},0).wait(1).to({y:506.65,alpha:0.1816},0).wait(1).to({y:503.7,alpha:0.3248},0).wait(1).to({y:500.3,alpha:0.4878},0).wait(1).to({y:497.3,alpha:0.6345},0).wait(1).to({y:494.9,alpha:0.7499},0).wait(1).to({y:493.1,alpha:0.8388},0).wait(1).to({y:491.65,alpha:0.9088},0).wait(1).to({y:490.65,alpha:0.9564},0).wait(1).to({y:490.1,alpha:0.9834},0).wait(1).to({y:489.85,alpha:0.9964},0).wait(1).to({regY:0,y:527.3,alpha:1},0).wait(63).to({regY:-54.5,x:150.8,y:489.75},0).wait(1).to({x:153.65},0).wait(1).to({x:159.35},0).wait(1).to({x:169.45},0).wait(1).to({x:187.1},0).wait(1).to({x:217.6},0).wait(1).to({x:255.4},0).wait(1).to({x:292.95},0).wait(1).to({x:324.3},0).wait(1).to({x:348.9},0).wait(1).to({x:368.3},0).wait(1).to({x:383.6},0).wait(1).to({x:393.7},0).wait(1).to({x:399.5},0).wait(1).to({x:402.3},0).wait(1).to({regY:0,x:403.1,y:527.3},0).wait(17));

	// sub_caption
	this.instance_6 = new lib.daily_caption_mc();
	this.instance_6.setTransform(147.35,549,0.9375,0.9375);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({regX:0.3,regY:-45.9,x:147.65,y:505.85,alpha:0.0037},0).wait(1).to({y:505.6,alpha:0.0167},0).wait(1).to({y:505.1,alpha:0.0435},0).wait(1).to({y:504.2,alpha:0.0919},0).wait(1).to({y:502.5,alpha:0.1816},0).wait(1).to({y:499.85,alpha:0.3248},0).wait(1).to({y:496.8,alpha:0.4878},0).wait(1).to({y:494.05,alpha:0.6345},0).wait(1).to({y:491.85,alpha:0.7499},0).wait(1).to({y:490.2,alpha:0.8388},0).wait(1).to({y:488.9,alpha:0.9088},0).wait(1).to({y:488,alpha:0.9564},0).wait(1).to({y:487.5,alpha:0.9834},0).wait(1).to({y:487.25,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:147.35,y:530.25,alpha:1},0).wait(61).to({regX:0.3,regY:-45.9,x:147.65,y:487.25,alpha:0.9963},0).wait(1).to({y:487.5,alpha:0.9833},0).wait(1).to({y:488,alpha:0.9565},0).wait(1).to({y:488.9,alpha:0.9081},0).wait(1).to({y:490.6,alpha:0.8184},0).wait(1).to({y:493.25,alpha:0.6752},0).wait(1).to({y:496.3,alpha:0.5122},0).wait(1).to({y:499.05,alpha:0.3655},0).wait(1).to({y:501.25,alpha:0.2501},0).wait(1).to({y:502.9,alpha:0.1612},0).wait(1).to({y:504.2,alpha:0.0912},0).wait(1).to({y:505.1,alpha:0.0436},0).wait(1).to({y:505.6,alpha:0.0166},0).wait(1).to({y:505.85,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:147.35,y:549,alpha:0},0).wait(95));

	// second_prize_mc
	this.instance_7 = new lib.second_prize_mc();
	this.instance_7.setTransform(149.75,300.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(98).to({_off:false},0).wait(1).to({x:149.7511,y:300.4041,alpha:0.0037},0).wait(1).to({x:149.755,y:300.0648,alpha:0.0167},0).wait(1).to({x:149.763,y:299.37,alpha:0.0435},0).wait(1).to({x:149.7776,y:298.1117,alpha:0.0919},0).wait(1).to({x:149.8045,y:295.7794,alpha:0.1816},0).wait(1).to({x:149.8474,y:292.0553,alpha:0.3248},0).wait(1).to({x:149.8963,y:287.8179,alpha:0.4878},0).wait(1).to({x:149.9403,y:284.0042,alpha:0.6345},0).wait(1).to({x:149.975,y:281.0023,alpha:0.7499},0).wait(1).to({x:150.0016,y:278.6914,alpha:0.8388},0).wait(1).to({x:150.0226,y:276.8721,alpha:0.9088},0).wait(1).to({x:150.0369,y:275.6337,alpha:0.9564},0).wait(1).to({x:150.045,y:274.9307,alpha:0.9834},0).wait(1).to({x:150.0489,y:274.5937,alpha:0.9964},0).wait(1).to({x:150.05,y:274.5,alpha:1},0).wait(138).to({x:151.0667},0).wait(1).to({x:154.6231},0).wait(1).to({x:161.7802},0).wait(1).to({x:174.3853},0).wait(1).to({x:196.4113},0).wait(1).to({x:234.4705},0).wait(1).to({x:281.6409},0).wait(1).to({x:328.5346},0).wait(1).to({x:367.6854},0).wait(1).to({x:398.4073},0).wait(1).to({x:422.596},0).wait(1).to({x:441.6936},0).wait(1).to({x:454.3039},0).wait(1).to({x:461.5335},0).wait(1).to({x:465.0577},0).wait(1).to({x:466.05},0).wait(17));

	// promo
	this.instance_8 = new lib.promo_mc();
	this.instance_8.setTransform(412.45,360,0.7807,0.7807);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:-0.3,regY:-119.5,x:411.2,y:266.7,alpha:0.0037},0).wait(1).to({x:407.8,alpha:0.0167},0).wait(1).to({x:400.75,alpha:0.0435},0).wait(1).to({x:388.05,alpha:0.0919},0).wait(1).to({x:364.5,alpha:0.1816},0).wait(1).to({x:326.95,alpha:0.3248},0).wait(1).to({x:284.15,alpha:0.4878},0).wait(1).to({x:245.65,alpha:0.6345},0).wait(1).to({x:215.35,alpha:0.7499},0).wait(1).to({x:192.05,alpha:0.8388},0).wait(1).to({x:173.65,alpha:0.9088},0).wait(1).to({x:161.15,alpha:0.9564},0).wait(1).to({x:154.05,alpha:0.9834},0).wait(1).to({x:150.65,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:150,y:360,alpha:1},0).wait(83).to({alpha:0},15).to({_off:true},1).wait(169));

	// background
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5050F").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_36.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-149,300,760.8,300.1);
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