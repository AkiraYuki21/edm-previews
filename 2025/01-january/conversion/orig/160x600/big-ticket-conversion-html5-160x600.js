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
	this.instance.setTransform(-288,-870,1.4938,1.4938);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-288,-870,576.6,310.70000000000005), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgMAeIgDgBIgCgBIgBgMIAFABIAFABIADgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAIACgEIgCAAIgBAAIgHgBQgCgCgBgDQgCgDACgEIAFgcIAMAAIgFAbIAAACIACAAIAAAAIABAAIACgOIADgPIAOAAIgJAqQgCAJgFAEQgEAEgHAAIgFAAg");
	this.shape.setTransform(42.5,6.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAeIAMg7IANAAIgNA7g");
	this.shape_1.setTransform(40.025,4.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAdIgHgBIAMg5IAMAAIgDAPIACAAQAIAAACADQADAEgCAIIgDANQgBAIgFAEQgEAEgHAAIgHgBgAgCASIABAAIABgBIACgDIACgNIAAgCIgCgBIAAAAg");
	this.shape_2.setTransform(37.1194,4.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAfIAJgqIAMAAIgJAqgAAAgSQAAgCAAgEIACgEQACgCADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQgBAEgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_3.setTransform(34.6167,4.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAWIgHgBIAEgNIAFACIAEAAIADAAIABgBIAAgCIgBgBIgBgBIgCAAQgEgCgCgDQgBgDABgGIADgGQACgDADgCQADgCAEAAIAFABIAGABIgDAMIgFgBIgDgBIgDABIgBABIAAACIACABIABAAIABABIAFADIACADIAAAGIgDAIQgCADgEACQgEACgEAAIgFgBg");
	this.shape_4.setTransform(31.975,5.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBAWIAGgdIgBgCIgBAAIgBAAIAAAAIgGAfIgNAAIAJgpIAIgCIAHAAQAGAAADADQADADgBAHIgHAeg");
	this.shape_5.setTransform(28.6625,5.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOATQgCgEABgJIADgMQACgIAEgEQAFgEAGAAQAHAAADAEQADAEgCAIIgCAMQgCAJgFAEQgEAEgGAAQgIAAgDgEgAABgJIgBADIgCANIAAACIABABIABgBIAAgCIADgNIAAgDIAAgBIgCABg");
	this.shape_6.setTransform(25.3469,5.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAeIANg7IAFAAIAFAAIAEAAQAIAAACADQADAEgCAJIgDANQgBAHgFAEQgEAEgHAAIgBAAIgEAPgAAAADIAAAAIACgBIACgCIACgNIAAgDIgCgBIAAAAg");
	this.shape_7.setTransform(21.6694,6.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAWIgHgBIAEgNIAFACIAEAAIADAAIABgBIAAgCIgBgBIgBgBIgCAAQgEgCgCgDQgBgDABgGIADgGQACgDADgCQADgCAEAAIAFABIAGABIgDAMIgFgBIgDgBIgDABIgBABIAAACIACABIABAAIABABIAFADIACADIAAAGIgDAIQgCADgEACQgEACgEAAIgFgBg");
	this.shape_8.setTransform(18.625,5.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNASQgDgEABgJIADgLQABgIAFgEQAFgEAGAAQAHAAADAEQACAEgCAIIgCAKIgOAAIgBACQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEABIADAAIADAAIgCALIgFABIgDABQgIAAgEgFgAABgKIgBADIAAADIADAAIABgDIAAgDIgBgBIgCABg");
	this.shape_9.setTransform(15.5571,5.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAeIAAgXIgBAAIgFAXIgOAAIANg7IAOAAQAGAAADACQAEACABAEIgBAJIgBAEIgDAIIgEAEIABAagAAAgDIABAAIACgBQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBIABgFQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgCgBIgBAAg");
	this.shape_10.setTransform(11.925,4.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLAeIgFgBIgCgBIAAgMIAFABIAEABIAEgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAIABgEIgBAAIgBAAIgHgBQgDgCgCgDQgBgDABgEIAGgcIAMAAIgEAbIAAACIABAAIAAAAIAAAAIAEgOIADgPIAMAAIgJAqQgCAJgEAEQgEAEgIAAIgDAAg");
	this.shape_11.setTransform(7.35,6.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOATQgDgDABgHIABAAQABgHAEgCQAEgEAGAAIABAAIACAAIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgDgBIgFABIgFABIAGgMIACgBIADgBIADAAQAGAAADACQADABABAEQABADgCAFIgFAbIgJACIgGABQgHgBgDgDgAgBAFIgBACIAAABQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAABAAIAAAAIABgIIgBAAIgBABg");
	this.shape_12.setTransform(3.8807,5.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMAeIAMg7IANAAIgNA7g");
	this.shape_13.setTransform(1.475,4.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAeIANg7IANAAQAHAAADACQADACABAEIAAAJIgBAFQgCAGgCADQgEADgDABQgFACgEAAIAAAAIgFAWgAAAgCIABAAIACgBIABgDIACgGIAAgDIgCgBIgBAAg");
	this.shape_14.setTransform(-1.4417,4.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-4.8,0,50.699999999999996,11.3), null);


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
	this.shape.graphics.f("#FFE400").s().p("ABFDTIAAk7IgEAwIgdELIhIAAIgckLIgFgwIAAE7IhdAAIAAmlICSAAIAPDIIABAfIACgfIAPjIICSAAIAAGlg");
	this.shape.setTransform(64.95,-268.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("Ag3DPQgagGgZgNIAjhPQAKAIANAEQAMAHASgBQAPAAAFgKQAGgLgBgQIAAgiQABgLgDgMQgEgKgKgIQgKgHgUAAQgNAAgMAEQgNAEgJAFIAYjqICgAAIAABZIg+AAIgGA3QAkADAVAdQATAcAAA2IAAA0QAAA3gdAfQgdAegyABQgbAAgagHgAAAhDIAEgBIAAAAg");
	this.shape_1.setTransform(33.9,-267.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AhoDWIAAhVQAdggAcglQAbglASgjQARgjABgcIAAgEQgBgRgGgJQgGgJgIgEQgKgDgIABQgRAAgOADIgXAIIgfhRQASgJAcgHQAcgHAggBQAkABAZASQAYARANAeQAMAdAAAjIAAACQAAAggKAdQgJAcgRAaQgQAagSAXQgSAXgRATIBeAAIAABag");
	this.shape_2.setTransform(9.25,-268.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AhvDTIAAmlIBoAAQAiABAaAPQAbAOAPAcQAQAcABAmIAACqQAAAngQAdQgQAcgbAPQgbAPggABgAgOB3IADAAQAOABAFgHQAEgHAAgRIAAi1QAAgRgGgFQgGgFgLABIgDAAg");
	this.shape_3.setTransform(-22.15,-268.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AhcDTIAAmlIC4AAIAABaIhZAAIAABIIBJAAIAABZIhJAAIAABQIBaAAIAABag");
	this.shape_4.setTransform(-44.725,-268.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AAfDTIgIhSIguAAIgHBSIhfAAIA4mlICLAAIA4GlgAAOAnIgMhwIgCgjIgBAjIgMBwIAbAAg");
	this.shape_5.setTransform(-69.175,-268.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AANDTIAAimIgZAAIAACmIhhAAIAAmlIBhAAIAACfIAZAAIAAifIBhAAIAAGlg");
	this.shape_6.setTransform(119.925,-326.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AgvDTIAAlGIg7AAIAAhfIDVAAIAABfIg7AAIAAFGg");
	this.shape_7.setTransform(96.925,-326.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AgvDTIAAmlIBfAAIAAGlg");
	this.shape_8.setTransform(79.475,-326.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AASDTIgSj9IgRD9Ih9AAIgfmlIBmAAIAFFDIAclDIBNAAIAcFDIAFlDIBmAAIgfGlg");
	this.shape_9.setTransform(54.65,-326.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AARDTIggihIgHAAIAAChIhhAAIAAmlIBoAAQAuABAaAOQAaAOAKAbQALAagBAjIAAAeQAAAhgIAWQgIAVgPAMIAwC6gAgWgbIAEAAQANAAAFgFQAFgGAAgOIAAgpQAAgNgFgHQgFgGgNABIgEAAg");
	this.shape_10.setTransform(15.925,-326.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AhcDTIAAmlIC4AAIAABaIhZAAIAABIIBJAAIAABZIhJAAIAABQIBaAAIAABag");
	this.shape_11.setTransform(-7.475,-326.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AASDTIgSj9IgRD9Ih9AAIgfmlIBmAAIAFFDIAclDIBNAAIAcFDIAFlDIBmAAIgfGlg");
	this.shape_12.setTransform(-36.8,-326.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("Ag4DTQgZgFgXgKIAZhXQASAIAPAFQAOAEAMAAQASAAAHgHQAJgGAAgOIAAgCQAAgMgJgOQgIgNgVgUIgSgSQgRgRgNgPQgMgSgHgTQgGgVAAgdIAAgBQAAg3AcgeQAbgeAygBQATAAAXAFQAYAFAXAJIgZBRIgbgHQgMgCgGAAQgRAAgIAHQgIAGAAANIAAACQAAALAJALIAZAbIAKAKIAKAKQARARANAQQANAQAHAWQAHAUAAAfIAAABQAAAmgOAbQgNAcgZAPQgZAOggAAQgbAAgZgGg");
	this.shape_13.setTransform(-66.225,-327);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AAADTIgbkKIAAEKIhhAAIAAmlIB/AAIAZEEIAAkEIBhAAIAAGlg");
	this.shape_14.setTransform(-91.225,-326.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AAfDTIgIhSIguAAIgHBSIhfAAIA4mlICLAAIA4GlgAAOAnIgMhwIgCgjIgBAjIgMBwIAbAAg");
	this.shape_15.setTransform(-118.875,-326.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhSC8QgdgeAAg6IAAjHQABglAPgaQAQgbAcgOQAdgNAjAAQAZgBAZAIQAaAGAXANIgjBUQgLgHgOgDQgOgDgOgBQgTAAgJALQgIAJAAAWIAAC5QAAALAEAEQADAEAHAAIAIgBIADgBIAAiXIBbAAIAADWQgRAKgPAGQgPAIgRADQgQADgVAAQg5AAgcgdg");
	this.shape_16.setTransform(89.85,-385.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAADTIgbkKIAAEKIhhAAIAAmlIB/AAIAZEEIAAkEIBhAAIAAGlg");
	this.shape_17.setTransform(63.025,-385.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgvDTIAAmlIBfAAIAAGlg");
	this.shape_18.setTransform(42.575,-385.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhhDTIAAmlIBgAAIAAFGIBjAAIAABfg");
	this.shape_19.setTransform(24.3,-385.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhiDTIAAmlIBhAAIAAFGIBkAAIAABfg");
	this.shape_20.setTransform(0.95,-385.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAfDTIgIhSIguAAIgHBSIhfAAIA4mlICLAAIA4GlgAAOAnIgMhwIgCgjIgBAjIgMBwIAbAAg");
	this.shape_21.setTransform(-24.025,-385.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAODZQg7AAgeggQgfggAAg/IAAizQAAg/AfggQAeggA7AAIABAAQAYAAAUAEQAVAEATAJIgjBOQgIgDgJgBIgQgBIgBAAQgTAAgJAMQgJAMAAAWIAAChQAAAWALAMQAMAMATAAIABAAQAJAAAIgCQAJgCAKgEIAjBNQgWALgWAFQgVAFgbAAg");
	this.shape_22.setTransform(-47.8,-385.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag4DTQgZgFgXgJIAZhYQASAIAPAEQAOAFAMAAQASAAAHgHQAJgGAAgOIAAgCQAAgMgJgNQgIgOgVgUIgSgSQgRgRgNgQQgMgQgHgVQgGgUAAgcIAAgBQAAg3AcgfQAbgfAyAAQATAAAXAFQAYAFAXAJIgZBRIgbgHQgMgCgGAAQgRAAgIAHQgIAGAAAOIAAABQAAALAJALIAZAbIAKAKIAKAKQARARANAPQANARAHAWQAHAUAAAfIAAAAQAAAngOAcQgNAbgZAOQgZAOggABQgbAAgZgGg");
	this.shape_23.setTransform(-77.825,-385.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgvDTIAAmlIBfAAIAAGlg");
	this.shape_24.setTransform(-95.225,-385.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhcDTIAAmlIC4AAIAABaIhZAAIAABIIBJAAIAABZIhJAAIAABQIBaAAIAABag");
	this.shape_25.setTransform(118.575,-444.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AARDTIggihIgHAAIAAChIhhAAIAAmlIBoAAQAuABAaAOQAaAOAKAbQALAagBAjIAAAeQAAAhgIAWQgIAVgPAMIAwC6gAgWgbIAEAAQANAAAFgFQAFgGAAgOIAAgpQAAgNgFgHQgFgGgNABIgEAAg");
	this.shape_26.setTransform(94.125,-444.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag5DKQgagMgOgZQgOgZAAgmIAAk6IBiAAIAAE8QAAAKAEAFQADADAGAAQAHAAADgEQADgEAAgKIAAk8IBjAAIAAE6QAAAigMAYQgNAagYAOQgZANglAAQghABgZgMg");
	this.shape_27.setTransform(67.35,-444.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgvDTIAAlGIg7AAIAAhfIDVAAIAABfIg7AAIAAFGg");
	this.shape_28.setTransform(43.075,-444.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag5DKQgZgMgOgZQgPgZAAgmIAAk6IBjAAIAAE8QAAAKADAFQADADAGAAQAHAAADgEQADgEAAgKIAAk8IBjAAIAAE6QAAAigNAYQgMAagZAOQgYANgmAAQggABgZgMg");
	this.shape_29.setTransform(18.8,-444.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhfDTIAAmlIC/AAIAABaIhfAAIAABIIBOAAIAABZIhOAAIAACqg");
	this.shape_30.setTransform(-4.575,-444.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AARDTIggihIgHAAIAAChIhhAAIAAmlIBoAAQAuABAaAOQAaAOAKAbQALAagBAjIAAAeQAAAhgIAWQgIAVgPAMIAwC6gAgWgbIAEAAQANAAAFgFQAFgGAAgOIAAgpQAAgNgFgHQgFgGgNABIgEAAg");
	this.shape_31.setTransform(-36.025,-444.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag5DKQgZgMgOgZQgPgZAAgmIAAk6IBiAAIAAE8QABAKADAFQADADAGAAQAHAAADgEQADgEAAgKIAAk8IBjAAIAAE6QAAAigMAYQgNAagYAOQgZANglAAQghABgZgMg");
	this.shape_32.setTransform(-62.8,-444.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAADZQg3AAgcgeQgcgeAAg4IAAjIQAAg7AegdQAegdAzAAIABAAQA3AAAcAfQAcAeAAA4IAADIQAAA7geAcQgdAdg0AAgAgKh5QgCAFAAAJIAADXQAAAKADAEQADAEAGAAIAAAAQAHAAADgEQAEgEAAgKIAAjXQgBgJgDgFQgEgEgGAAIAAAAQgGAAgEAEg");
	this.shape_33.setTransform(-88.85,-444.6004);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgvDTIAAh4IhRktIBkAAIAcCNIAdiNIBkAAIhREtIAAB4g");
	this.shape_34.setTransform(-114.975,-444.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-134.4,-477.9,268.9,255.09999999999997), null);


(lib.secondprize_mc = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.secondprize_mc, new cjs.Rectangle(-139,-123.5,278,247), null);


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
	this.shape.graphics.f("#FFE400").s().p("Ag3DPQgagGgZgOIAjhNQAKAGANAFQANAHARAAQAPgBAFgKQAGgKAAgQIAAgjQAAgMgDgLQgEgLgJgHQgKgHgVgBQgNABgMAEQgNAFgJAEIAYjqIChAAIAABaIg/AAIgGA2QAlADAUAcQATAdABA3IAAAyQgBA4gdAfQgdAfgyAAQgbAAgagHgAAAhDIAEgBIgBAAg");
	this.shape.setTransform(59.9,-326.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AhoDXIAAhWQAdghAcglQAbgkASgjQARgjABgdIAAgDQgBgRgGgJQgGgJgJgDQgIgEgKAAQgPABgPAEIgYAHIgehQQASgKAcgHQAcgHAggBQAkABAZASQAYARANAdQANAegBAiIAAADQABAfgLAdQgKAdgQAZQgQAbgSAXQgSAXgSAUIBgAAIAABag");
	this.shape_1.setTransform(35.25,-327.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("Ag5DKQgYgPgOgbQgNgagBgkIAAjDQABgkANgaQAOgbAYgPQAZgPAgAAQAhAAAZAPQAYAPAOAbQANAaABAkIAADDQgBAkgNAaQgOAbgYAPQgZAPghAAQggAAgZgPgAgHh6QgDAEAAAGIAADiQAAAGADACQADADACABIACAAQALAAAAgMIAAjiQAAgGgDgDQgCgCgDgBIgDgBQgEAAgDADg");
	this.shape_2.setTransform(10.875,-327.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AhoDXIAAhWQAdghAcglQAbgkASgjQARgjAAgdIAAgDQAAgRgGgJQgGgJgIgDQgKgEgIAAQgRABgOAEIgXAHIgfhQQASgKAcgHQAbgHAhgBQAjABAaASQAYARAMAdQANAeAAAiIAAADQAAAfgKAdQgJAdgRAZQgQAbgSAXQgSAXgRAUIBeAAIAABag");
	this.shape_3.setTransform(-13.6,-327.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AAADTIgbkKIAAEKIhhAAIAAmlIB/AAIAZEEIAAkEIBhAAIAAGlg");
	this.shape_4.setTransform(-46.275,-326.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AgvDTIAAmlIBfAAIAAGlg");
	this.shape_5.setTransform(-66.725,-326.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("Ag4DTQgZgFgXgJIAZhYQASAIAPAEQAOAFAMAAQASAAAHgHQAJgGAAgOIAAgCQAAgMgJgNQgIgOgVgUIgSgSQgRgRgNgQQgMgQgHgVQgGgUAAgcIAAgBQAAg3AcgfQAbgfAyAAQATAAAXAFQAYAFAXAJIgZBRIgbgHQgMgCgGAAQgRAAgIAHQgIAGAAAOIAAABQAAALAJALIAZAbIAKAKIAKAKQARARANAPQANARAHAWQAHAUAAAfIAAAAQAAAngOAcQgNAbgZAOQgZAOggABQgbAAgZgGg");
	this.shape_6.setTransform(102.825,-385.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("ABFDTIAAk7IgEAwIgdELIhHAAIgekLIgEgwIAAE7IhdAAIAAmlICTAAIANDIIACAfIADgfIAPjIICRAAIAAGlg");
	this.shape_7.setTransform(74,-385.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AAfDTIgIhSIguAAIgHBSIhfAAIA4mlICLAAIA4GlgAAOAnIgMhwIgCgjIgBAjIgMBwIAbAAg");
	this.shape_8.setTransform(42.575,-385.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AhcDTIAAmlIC4AAIAABaIhZAAIAABIIBJAAIAABZIhJAAIAABQIBaAAIAABag");
	this.shape_9.setTransform(19.075,-385.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AARDTIggihIgHAAIAAChIhhAAIAAmlIBoAAQAuABAaAOQAaAOAKAbQALAagBAjIAAAeQAAAhgIAWQgIAVgPAMIAwC6gAgWgbIAEAAQANAAAFgFQAFgGAAgOIAAgpQAAgNgFgHQgFgGgNABIgEAAg");
	this.shape_10.setTransform(-5.325,-385.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AhvDTIAAmlIBoAAQAiABAaAPQAbAOAPAcQAQAcABAmIAACqQAAAngQAdQgQAcgbAPQgbAPggABgAgOB3IADAAQAOABAFgHQAEgHAAgRIAAi1QAAgRgGgFQgGgFgLABIgDAAg");
	this.shape_11.setTransform(-31.6,-385.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AhSC8QgdgeAAg6IAAjHQAAglARgaQAPgbAcgOQAdgNAjAAQAZgBAZAIQAaAGAXANIgiBUQgMgHgOgDQgOgDgOgBQgTAAgIALQgKAJABAWIAAC5QAAALADAEQAEAEAHAAIAHgBIAEgBIAAiXIBbAAIAADWQgRAKgQAGQgPAIgQADQgRADgTAAQg7AAgbgdg");
	this.shape_12.setTransform(-62.85,-385.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AgvDTIAAmlIBfAAIAAGlg");
	this.shape_13.setTransform(-82.025,-385.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AhwDTIAAmlIBqAAQAhAAAaALQAaAKAOAXQAPAXAAAlIAAAKQAAAfgKAVQgKAVgYAKQAZAJAMAUQAMAVAAAkIAAAaQAAAlgOAZQgOAYgYANQgZANgiAAgAgPB3IAGAAQALAAAEgGQAFgGAAgKIAAgqQAAgMgEgGQgEgGgMAAIgGAAgAgPguIAHAAQAMAAAEgGQAEgGAAgLIAAgaQAAgLgEgGQgEgGgMAAIgHAAg");
	this.shape_14.setTransform(-100.975,-385.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AARDTIggihIgHAAIAAChIhhAAIAAmlIBoAAQAuABAaAOQAaAOAKAbQALAagBAjIAAAeQAAAhgIAWQgIAVgPAMIAwC6gAgWgbIAEAAQANAAAFgFQAFgGAAgOIAAgpQAAgNgFgHQgFgGgNABIgEAAg");
	this.shape_15.setTransform(111.375,-444.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAADZQg2AAgcgeQgdgeAAg4IAAjIQAAg7AegdQAegdAzAAIABAAQA3AAAcAfQAcAeAAA4IAADIQgBA7gdAcQgdAdg0AAgAgJh5QgDAFAAAJIAADXQAAAKADAEQAEAEAFAAIAAAAQAHAAADgEQADgEABgKIAAjXQAAgJgEgFQgEgEgGAAIAAAAQgHAAgCAEg");
	this.shape_16.setTransform(85.1,-444.6004);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhfDTIAAmlIC/AAIAABaIhfAAIAABIIBOAAIAABZIhOAAIAACqg");
	this.shape_17.setTransform(62.275,-444.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag4DTQgZgFgXgKIAZhWQASAHAPAEQAOAFAMAAQASAAAHgGQAJgHAAgOIAAgDQAAgLgJgOQgIgNgVgUIgSgSQgRgRgNgQQgMgRgHgTQgGgVAAgdIAAgBQAAg2AcgfQAbgeAygBQATAAAXAFQAYAFAXAJIgZBRIgbgGQgMgDgGAAQgRAAgIAGQgIAIAAAMIAAACQAAALAJALIAZAbIAKAKIAKAKQARARANAPQANARAHAVQAHAVAAAfIAAAAQAAAngOAbQgNAcgZAOQgZAOggABQgbAAgZgGg");
	this.shape_18.setTransform(33.375,-444.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAADTIgbkKIAAEKIhhAAIAAmlIB/AAIAZEEIAAkEIBhAAIAAGlg");
	this.shape_19.setTransform(8.375,-444.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgvDTIAAmlIBfAAIAAGlg");
	this.shape_20.setTransform(-12.075,-444.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASDTIgSj9IgSD9Ih8AAIgfmlIBmAAIAFFDIAclDIBNAAIAcFDIAFlDIBmAAIgfGlg");
	this.shape_21.setTransform(-36.9,-444.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhTC8QgcgdAAg6IAAjIQAAglARgaQAQgaAcgOQAcgOAjgBQAYAAAaAIQAaAGAXANIgjBUQgMgHgOgEQgNgDgOAAQgTABgIAJQgKAKABAXIAAC3QAAALADAFQAFAEAGAAIAHgBIAEgCIAAiXIBbAAIAADXQgRAKgQAGQgOAIgRADQgRAEgTAAQg7AAgcgeg");
	this.shape_22.setTransform(-73.9,-444.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgvDTIAAmlIBfAAIAAGlg");
	this.shape_23.setTransform(-93.075,-444.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhwDTIAAmlIBqAAQAhAAAaALQAaAKAOAXQAPAXAAAlIAAAKQAAAfgKAVQgKAVgYAKQAZAJAMAUQAMAVAAAkIAAAaQAAAlgOAZQgOAYgYANQgZANgiAAgAgPB3IAGAAQALAAAEgGQAFgGAAgKIAAgqQAAgMgEgGQgEgGgMAAIgGAAgAgPguIAHAAQAMAAAEgGQAEgGAAgLIAAgaQAAgLgEgGQgEgGgMAAIgHAAg");
	this.shape_24.setTransform(-112.075,-444.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-126.8,-477.9,253.7,196.29999999999995), null);


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
	this.instance.setTransform(-269,-769,2.206,2.206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-269,-769,538.3,103.70000000000005), null);


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
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(117.2,587.7,0.0157,0.0157,0,0,0,493.1,461.3);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(76.15,588.05,1.4697,1.4697,0,0,0,23.2,5.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAmIAAgVIgOg1IASAAIAEAYIAFgYIASAAIgOA1IAAAVg");
	this.shape.setTransform(121.975,572.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAQAAIAAA4IARAAIAAASg");
	this.shape_1.setTransform(117.45,572.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAmIAAhKIATAAQAHAAAFACQAEADACAFQACAEAAAGIAAAHQAAAHgDAEQgDAFgEACQgFABgFAAIgBAAIAAAcgAgBgDIAAAAIACgBIABgDIAAgJIgBgDQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_2.setTransform(113.175,572.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAmIAAhKIATAAQAHAAAFACQAEADACAFQACAEAAAGIAAAHQAAAHgDAEQgDAFgEACQgFABgFAAIgBAAIAAAcgAgBgDIAAAAIACgBIABgDIAAgJIgBgDQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_3.setTransform(108.625,572.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAFAmIgBgPIgHAAIgCAPIgQAAIAJhKIAYAAIAKBKgAACAHIgCgTIAAgGIAAAGIgCATIAEAAg");
	this.shape_4.setTransform(104.025,572.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAmIgJgDIAFgQIAFACIAFABQABAAABAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAIAAgBIgCgFIgEgFIgDgEIgGgEIgDgHIgCgIIAAgBQABgJAEgGQAFgGAJABIAHABIAIACIgEAOIgFgBIgDgBQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIABADIAFAGIABABIACACIAGAFIADAHIABAJQAAAHgCAEQgDAFgEADQgEADgFgBIgJAAg");
	this.shape_5.setTransform(98.45,572.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAQIgDgfIAPAAIgDAfg");
	this.shape_6.setTransform(95.275,570.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAhQgFgGAAgLIAAgfQAAgLAFgGQAGgGAKABIAIAAIAHADIgHANIgDgBIgDAAQgDAAgCADQAAACAAADIAAAcQAAAFABABQACACADAAIADAAIAEgBIAGAOIgIADIgIAAQgKAAgGgFg");
	this.shape_7.setTransform(92.325,572.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAiQgGgFAAgKIAAgJQABgFADgEQACgCAEAAIgDgHIgBgGIAAgEQAAgHABgFQACgEAEgBQAEgCAGAAQAEAAAEABQADACABAEQACAEAAAIIAAAEIgBAGIgDAEQgCADgFABIAHAJIgBgFIAAgEIAOAAIAAAKIgBAHQgBADgCADIAKAPIgRAAIgCgDIgEADIgGAAQgLAAgGgEgAgJALIAAADIAAADQAAADACACQACACADAAIABAAIABgBIgJgNgAgEgWIgBADIAAAJIAAABIAAABQAAAAABgBQAAAAABAAQAAAAAAAAQABgBAAAAIABgDIAAgGIgBgDIgBgBQAAAAgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_8.setTransform(87.2,572.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAmIAAg5IgLAAIAAgRIAlAAIAAARIgLAAIAAA5g");
	this.shape_9.setTransform(82.35,572.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHAwIAAhfIAOAAIAABfg");
	this.shape_10.setTransform(75.4,573.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAmIAAg3IgHABIAAgPIAYgGIAABLg");
	this.shape_11.setTransform(68.65,572.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLAmIALg7IgRAAIAAgPIAiAAIAAAPIgMA7g");
	this.shape_12.setTransform(65.15,572.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAmIAAgPIAKgNQAFgGADgGQADgFAAgFIAAgBQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgBgCIgDAAIgGAAIgEABIgFgOIAIgDIAKgBQAGAAAEADQAFADACAFQACAGAAAGQAAAGgCAFQgBAEgDAFIgGAJIgHAHIARAAIAAAQg");
	this.shape_13.setTransform(61.225,572.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJAmIgJgDIAFgQIAFACIAGABQAAAAABAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgBIgBgFIgEgFIgEgEIgFgEIgEgHIgBgIIAAgBQAAgJAGgGQAFgGAHABIAIABIAIACIgEAOIgFgBIgDgBQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIABADIAFAGIACABIABACIAGAFIADAHIABAJQABAHgDAEQgCAFgFADQgEADgFgBIgJAAg");
	this.shape_14.setTransform(55.95,572.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAgAAIAAAPIgPAAIAAAOIAMAAIAAAPIgMAAIAAANIAQAAIAAARg");
	this.shape_15.setTransform(52.225,572.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgIAmIAAhKIARAAIAABKg");
	this.shape_16.setTransform(49.175,572.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AADAmIgFgdIgBAAIAAAdIgSAAIAAhKIATAAQAIAAAEACQAEADADAFQACAEAAAGIAAAGQgBAGgBAEQgBACgDACIAIAigAgDgEIAAAAIADgBIABgDIAAgIIgBgDIgDgBIAAAAg");
	this.shape_17.setTransform(45.65,572.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAgAAIAAAPIgPAAIAAAOIAMAAIAAAPIgMAAIAAANIAQAAIAAARg");
	this.shape_18.setTransform(41.475,572.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAmIgJgDIAFgQIAFACIAGABQAAAAABAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAIAAgBIgCgFIgEgFIgEgEIgFgEIgEgHIgBgIIAAgBQABgJAFgGQAFgGAHABIAIABIAIACIgEAOIgFgBIgDgBQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIABADIAFAGIABABIACACIAGAFIADAHIABAJQAAAHgCAEQgDAFgEADQgEADgFgBIgJAAg");
	this.shape_19.setTransform(37.6,572.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(303));

	// footer_bg
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A5050F").s().p("AsfA/IAAh8IY/AAIAAB8g");
	this.shape_20.setTransform(80,593.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(303));

	// logo
	this.instance_2 = new lib.bt_logo();
	this.instance_2.setTransform(80,378.25,0.4091,0.4091);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(195).to({alpha:0},16).to({_off:true},76).wait(16));

	// cta
	this.instance_3 = new lib.cta_mc();
	this.instance_3.setTransform(243.35,550.5,0.2872,0.2872,0,0,0,0,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(211).to({_off:false},0).wait(1).to({regX:0.1,regY:-717.2,x:242.85,y:344.35,alpha:0.0032},0).wait(1).to({x:241,y:344.15,alpha:0.0145},0).wait(1).to({x:237.3,y:343.75,alpha:0.0371},0).wait(1).to({x:230.8,y:343.05,alpha:0.077},0).wait(1).to({x:219.4,y:341.85,alpha:0.1467},0).wait(1).to({x:199.75,y:339.7,alpha:0.2672},0).wait(1).to({x:175.35,y:337.05,alpha:0.4164},0).wait(1).to({x:151.1,y:334.45,alpha:0.5648},0).wait(1).to({x:130.85,y:332.25,alpha:0.6887},0).wait(1).to({x:115,y:330.5,alpha:0.7859},0).wait(1).to({x:102.5,y:329.15,alpha:0.8625},0).wait(1).to({x:92.6,y:328.1,alpha:0.9229},0).wait(1).to({x:86.1,y:327.4,alpha:0.9628},0).wait(1).to({x:82.35,y:327,alpha:0.9857},0).wait(1).to({x:80.55,y:326.8,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:80,y:532.8,alpha:1},0).wait(76));

	// ticket
	this.instance_4 = new lib.ticket_mc();
	this.instance_4.setTransform(-119.45,470,0.399,0.399);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(195).to({_off:false},0).wait(1).to({regX:0.3,regY:-714.6,x:-118.7,y:184.85},0).wait(1).to({x:-116.45},0).wait(1).to({x:-111.9},0).wait(1).to({x:-103.95},0).wait(1).to({x:-90.05},0).wait(1).to({x:-66.05},0).wait(1).to({x:-36.25},0).wait(1).to({x:-6.65},0).wait(1).to({x:18.05},0).wait(1).to({x:37.45},0).wait(1).to({x:52.7},0).wait(1).to({x:64.75},0).wait(1).to({x:72.7},0).wait(1).to({x:77.3},0).wait(1).to({x:79.5},0).wait(1).to({regX:0.1,regY:0,x:80.05,y:470},0).wait(92));

	// main_caption
	this.instance_5 = new lib.sub_caption_mc();
	this.instance_5.setTransform(78.6,572.85,0.5,0.5,0,0,0,0,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).wait(1).to({regX:-0.3,regY:-356.4,x:78.45,y:394.55,alpha:0.0037},0).wait(1).to({y:394.4,alpha:0.0167},0).wait(1).to({y:394.15,alpha:0.0435},0).wait(1).to({y:393.65,alpha:0.0919},0).wait(1).to({y:392.75,alpha:0.1816},0).wait(1).to({y:391.35,alpha:0.3248},0).wait(1).to({y:389.7,alpha:0.4878},0).wait(1).to({y:388.25,alpha:0.6345},0).wait(1).to({y:387.1,alpha:0.7499},0).wait(1).to({y:386.2,alpha:0.8388},0).wait(1).to({y:385.5,alpha:0.9088},0).wait(1).to({y:385,alpha:0.9564},0).wait(1).to({y:384.75,alpha:0.9834},0).wait(1).to({y:384.6,alpha:0.9964},0).wait(1).to({regX:0,regY:0.1,x:78.6,y:562.85,alpha:1},0).wait(60).to({y:572.85,alpha:0},16).to({_off:true},1).wait(196));

	// sub_caption
	this.instance_6 = new lib.daily_caption_mc();
	this.instance_6.setTransform(78.6,572.85,0.5,0.5,0,0,0,0,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90).to({_off:false},0).wait(1).to({regY:-385.8,y:379.85,alpha:0.0032},0).wait(1).to({y:379.75,alpha:0.0145},0).wait(1).to({y:379.5,alpha:0.0371},0).wait(1).to({y:379.1,alpha:0.077},0).wait(1).to({y:378.4,alpha:0.1467},0).wait(1).to({y:377.2,alpha:0.2672},0).wait(1).to({y:375.7,alpha:0.4164},0).wait(1).to({y:374.25,alpha:0.5648},0).wait(1).to({y:373,alpha:0.6887},0).wait(1).to({y:372,alpha:0.7859},0).wait(1).to({y:371.25,alpha:0.8625},0).wait(1).to({y:370.65,alpha:0.9229},0).wait(1).to({y:370.25,alpha:0.9628},0).wait(1).to({y:370,alpha:0.9857},0).wait(1).to({y:369.9,alpha:0.9969},0).wait(1).to({regY:0.1,y:562.85,alpha:1},0).wait(74).to({regY:-385.8,x:79.1,y:369.9},0).wait(1).to({x:80.95},0).wait(1).to({x:84.6},0).wait(1).to({x:91.1},0).wait(1).to({x:102.5},0).wait(1).to({x:122.1},0).wait(1).to({x:146.45},0).wait(1).to({x:170.6},0).wait(1).to({x:190.8},0).wait(1).to({x:206.65},0).wait(1).to({x:219.1},0).wait(1).to({x:228.95},0).wait(1).to({x:235.45},0).wait(1).to({x:239.2},0).wait(1).to({x:241},0).wait(1).to({regY:0.1,x:241.55,y:562.85},0).to({_off:true},17).wait(91));

	// second_prize
	this.instance_7 = new lib.secondprize_mc();
	this.instance_7.setTransform(-86.25,208.25,0.5432,0.5432,0,0,0,0.2,0.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(82).to({_off:false},0).wait(1).to({regX:0,regY:0,x:-85.8191,y:208.15},0).wait(1).to({x:-83.9621},0).wait(1).to({x:-80.2251},0).wait(1).to({x:-73.6433},0).wait(1).to({x:-62.1424},0).wait(1).to({x:-42.2697},0).wait(1).to({x:-17.6395},0).wait(1).to({x:6.8461},0).wait(1).to({x:27.2887},0).wait(1).to({x:43.3302},0).wait(1).to({x:55.9604},0).wait(1).to({x:65.9323},0).wait(1).to({x:72.5168},0).wait(1).to({x:76.2917},0).wait(1).to({x:78.1319},0).wait(1).to({regX:0.2,regY:0.2,x:78.75,y:208.25},0).wait(82).to({regX:0,regY:0,x:79.1859,y:208.1569},0).wait(1).to({x:81.0603,y:208.1811},0).wait(1).to({x:84.8325,y:208.2298},0).wait(1).to({x:91.4761,y:208.3156},0).wait(1).to({x:103.0851,y:208.4654},0).wait(1).to({x:123.1444,y:208.7244},0).wait(1).to({x:148.0059,y:209.0453},0).wait(1).to({x:172.7216,y:209.3644},0).wait(1).to({x:193.3562,y:209.6307},0).wait(1).to({x:209.5484,y:209.8398},0).wait(1).to({x:222.2973,y:210.0043},0).wait(1).to({x:232.3628,y:210.1343},0).wait(1).to({x:239.0092,y:210.2201},0).wait(1).to({x:242.8196,y:210.2693},0).wait(1).to({x:244.677,y:210.2932},0).wait(1).to({regX:0.2,regY:0.2,x:245.3,y:210.4},0).to({_off:true},17).wait(91));

	// promo
	this.instance_8 = new lib.promo_mc();
	this.instance_8.setTransform(220,472,0.4164,0.4164,0,0,0,0.1,0);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:-0.4,regY:-650.8,x:219.25,y:201.05,alpha:0.0037},0).wait(1).to({x:217.45,alpha:0.0167},0).wait(1).to({x:213.7,alpha:0.0435},0).wait(1).to({x:206.9,alpha:0.0919},0).wait(1).to({x:194.35,alpha:0.1816},0).wait(1).to({x:174.3,alpha:0.3248},0).wait(1).to({x:151.5,alpha:0.4878},0).wait(1).to({x:131,alpha:0.6345},0).wait(1).to({x:114.8,alpha:0.7499},0).wait(1).to({x:102.4,alpha:0.8388},0).wait(1).to({x:92.6,alpha:0.9088},0).wait(1).to({x:85.95,alpha:0.9564},0).wait(1).to({x:82.15,alpha:0.9834},0).wait(1).to({x:80.35,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0,x:80.05,y:472,alpha:1},0).wait(68).to({regX:-0.4,regY:-650.8,x:80.35,y:201.05},0).wait(1).to({x:82.15},0).wait(1).to({x:85.85},0).wait(1).to({x:92.3},0).wait(1).to({x:103.55},0).wait(1).to({x:123.05},0).wait(1).to({x:147.2},0).wait(1).to({x:171.2},0).wait(1).to({x:191.25},0).wait(1).to({x:206.95},0).wait(1).to({x:219.35},0).wait(1).to({x:229.1},0).wait(1).to({x:235.55},0).wait(1).to({x:239.25},0).wait(1).to({x:241.05},0).wait(1).to({regX:0.1,regY:0,x:241.8,y:472},0).to({_off:true},147).wait(58));

	// background
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A5050F").s().p("EgMfAu9MAAAhd5IY/AAMAAABd5g");
	this.shape_21.setTransform(80,299.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(303));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-154.3,299.1,475,301);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 160,
	height: 600,
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