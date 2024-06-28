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


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._18();
	this.instance.setTransform(163,-16,0.5737,0.5737);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAjIgFgBIgDgBIgBgPIAHACIAFABIAEAAIADgDIACgEIgCAAIgBAAQgFAAgDgBQgEgCgBgEQgCgEACgFIAGggIAPAAIgGAfIAAACIACABIAAAAIABAAIADgRIAEgRIAPAAIgLAxQgBAKgGAGQgFAEgJAAIgEAAg");
	this.shape.setTransform(158.775,-7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAjIAOhFIAPAAIgOBFg");
	this.shape_1.setTransform(155.8,-9.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAjIgIgCIAOhEIAPAAIgEASIACAAQAJAAADAFQADAEgCAJIgDAPQgCAKgFAFQgFAFgIAAIgJgBgAgCAVIABAAIABgBIACgEIADgPIAAgDIgCgBIgBAAg");
	this.shape_2.setTransform(152.39,-9.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAlIAKgyIAPAAIgLAygAABgWQgBgCAAgEQABgDACgCQACgDAEAAQADAAABADQACACgBADQgBAEgCACQgCACgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_3.setTransform(149.42,-9.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAaIgIgBIAEgPIAGACIAGAAIADAAIACgCIgBgCIgBgBIgCgBIgCgBQgFgCgBgDQgCgEABgGQABgEACgEQADgDAEgDQADgCAFAAIAGAAIAHACIgEAOIgFgBIgFgBIgDABIgBACIAAABIADACIABAAIABABIAGAEIADADIAAAIQgBAFgDADQgDAEgEACQgFADgGAAIgFgBg");
	this.shape_4.setTransform(146.325,-8.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBAaIAHgjIAAgBIgCgBIgBAAIgBABIgHAkIgPAAIAKgwIAKgDIAIgBQAIAAAEAFQADADgCAIIgIAkg");
	this.shape_5.setTransform(142.39,-8.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAWQgEgFACgJIADgOQACgLAGgEQAFgFAIAAQAIAAADAFQAEAEgCALIgDAOQgCAJgGAFQgFAFgHAAQgJAAgDgFgAABgLIgBAEIgDAPIAAADIACABIABgBIAAgDIAEgPIAAgEIgBgBIgCABg");
	this.shape_6.setTransform(138.475,-8.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAkIAPhGIAGAAIAFAAIAFgBQAJAAADAFQADAEgCALIgDAPQgCAIgFAFQgFAFgIAAIgCAAIgEASgAAAADIAAAAIACgBIACgCIADgPIAAgFIgCgBIgBAAg");
	this.shape_7.setTransform(134.165,-7.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAaIgIgBIAEgPIAGACIAGAAIADAAIACgCIgBgCIgBgBIgCgBIgCgBQgFgCgBgDQgCgEABgGQABgEACgEQADgDAEgDQADgCAFAAIAGAAIAHACIgEAOIgFgBIgFgBIgDABIgBACIAAABIADACIABAAIABABIAGAEIADADIAAAIQgBAFgDADQgDAEgEACQgFADgGAAIgFgBg");
	this.shape_8.setTransform(130.525,-8.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAWQgFgFACgLIADgMQACgLAGgEQAFgFAIAAQAIAAADAFQADAFgCAJIgCALIgSAAIAAAEQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQACACADgBIAEAAIADgBIgBAPIgHABIgEAAQgJAAgEgFgAABgMIgBAEIAAADIADAAIABgDIAAgEIgBgBIgCABg");
	this.shape_9.setTransform(126.9092,-8.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAjIAAgbIgCAAIgFAbIgQAAIAOhFIARAAQAHAAAEACQAEADABAEQABAEgBAGIgBAFQgBAGgDAEQgCACgDACIACAfgAAAgEIABAAIADAAIACgEIABgHIAAgDIgDgBIgBAAg");
	this.shape_10.setTransform(122.595,-9.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAjIgFgBIgDgBIgBgPIAHACIAFABIAEAAIADgDIACgEIgCAAIgBAAQgFAAgDgBQgEgCgBgEQgCgEACgFIAGggIAPAAIgGAfIAAACIACABIAAAAIABAAIADgRIAEgRIAPAAIgLAxQgBAKgGAGQgFAEgJAAIgEAAg");
	this.shape_11.setTransform(117.175,-7.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAXQgDgFABgHIABgBQABgHAFgDQAFgEAHAAIACAAIABAAIABgCQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIgEgBIgFABIgGACIAHgPIADgBIADgBIAEAAQAHAAADACQAEACABAEIgBAKIgHAgIgJACIgIABQgIAAgEgEgAgBAGIgCACIAAACIAAADIACABIABAAIABgJIgBAAIgBABg");
	this.shape_12.setTransform(113.0583,-8.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAjIAOhFIAPAAIgPBFg");
	this.shape_13.setTransform(110.15,-9.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAjIAOhFIAQAAQAIAAAEACQAEADABAEQABAEgCAGIgBAGQgBAIgEADQgDAEgFACQgFABgFAAIgBAAIgFAagAAAgDIABAAIADgBIABgDIACgIIAAgDIgDgBIgBAAg");
	this.shape_14.setTransform(106.7813,-9.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAhIAAgTIgMguIAPAAIAEAWIAFgWIAPAAIgMAuIAAATg");
	this.shape_15.setTransform(178.275,-23.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPAhIAAhBIAPAAIAAAyIAQAAIAAAPg");
	this.shape_16.setTransform(174.3,-23.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAhIAAhBIARAAQAGAAAEACQAEACACAEQABAFABAFIAAAGQgBAHgCADQgDAEgDABQgFACgEAAIgBAAIAAAYgAgBgDIABAAIABAAIABgEIAAgHQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBgBIgBAAg");
	this.shape_17.setTransform(170.5,-23.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQAhIAAhBIAPAAQAHAAAEACQAEACACAEQABAFAAAFIAAAGQAAAHgCADQgDAEgEABQgEACgFAAIgBAAIAAAYgAgCgDIABAAIACAAIABgEIAAgHQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgCgBIgBAAg");
	this.shape_18.setTransform(166.5,-23.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAFAhIgBgNIgGAAIgCANIgPAAIAJhBIAVAAIAJBBgAACAGIgCgRIAAgFIAAAFIgBARIADAAg");
	this.shape_19.setTransform(162.35,-23.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgIAhIgHgCIADgOIAGACIAEABIACgBQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgCgEIgDgFIgDgDIgFgEIgCgGIgBgIIAAAAQgBgJAFgFQAEgEAHAAIAHAAIAHADIgEAMIgEgBIgDAAIgEABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIABAEIAFAEIABACIABABIAFAFIADAGIABAIQABAGgDAEQgCAFgEACQgDACgFAAIgIgBg");
	this.shape_20.setTransform(157.4,-23.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEAOIgCgbIANAAIgDAbg");
	this.shape_21.setTransform(154.625,-25.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgLAdQgFgFAAgKIAAgbQAAgKAFgFQAFgFAIAAIAIAAIAGACIgGANIgCgBIgDAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAACAAADIAAAZQAAADABACQACACADAAIADAAIADgBIAFAMQgDACgEAAIgIABQgIAAgFgFg");
	this.shape_22.setTransform(151.925,-23.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSAeQgEgEAAgJIAAgIQAAgFACgDQACgCAEAAIgDgGIgBgFIAAgFIABgJQACgEAEgCQACgBAHAAQADgBADACQADACABADQABAEAAAGIAAAEIgBAFQAAADgCACQgCACgEABIAHAIIgBgEIAAgEIALAAIAAAIIAAAHIgCAFIAJANIgQAAIgBgCIgFACIgEABQgKAAgGgEgAgIAKIAAACIAAACQAAAEABACQACABADAAIABAAIABAAIgIgNgAgEgTIAAACIAAAHIAAACIAAABIACgCIABgDIAAgFIgBgCIgBgBIgBABg");
	this.shape_23.setTransform(147.4,-23.28);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGAhIAAgyIgKAAIAAgPIAhAAIAAAPIgKAAIAAAyg");
	this.shape_24.setTransform(143.1,-23.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgGAqIAAhTIANAAIAABTg");
	this.shape_25.setTransform(136.875,-22.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIAhIgIgDIAGgNIADACIAFABQAAAAABAAQAAAAABAAQAAgBAAAAQAAAAAAgBIABgEIAAgFIAAgEQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBgBAAIgEgBIgEABIgEABIAEgkIAYAAIAAAOIgJAAIgBAJQAFAAAEAFQADAEAAAIIAAAIQAAAJgFAFQgFAFgHAAIgIgBgAAAgKIAAAAIABAAIgBAAIAAAAIAAAAg");
	this.shape_26.setTransform(130.375,-23.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAgQgEgCgCgDQgCgEAAgGIAAgIIAAgEIABgDIAAgCIAGgRIAHgQIANAAIgFAMIgFAMIABgBIABAAQAHAAAEAFQADAEAAAIIAAAHQAAAGgCAFQgCAEgEADQgDACgGAAQgEAAgEgCgAgBAEIAAAOIABACIAAAAIABgBIABgBIAAgOIgBgBIgBgBIAAAAIgBACg");
	this.shape_27.setTransform(126.375,-23.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQAiIAAgOIAJgLIAHgKQACgGAAgEIAAgBIgBgEIgBgCIgDAAIgFAAIgDABIgFgMIAHgDIAJgBQAFAAAEADQAEADACAEQACAFAAAFIAAABQAAAFgBAEIgEAIIgGAIIgGAHIAPAAIAAAOg");
	this.shape_28.setTransform(122.525,-23.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgIAhIgIgCIAFgOIAEACIAFABIADgBQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgEIgEgFIgDgDIgEgEIgEgGIgBgIIAAAAQABgJAEgFQAEgEAHAAIAHAAIAHADIgEAMIgEgBIgDAAIgEABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIABAEIADAEIACACIACABIAEAFIAEAGIABAIQgBAGgCAEQgCAFgEACQgDACgFAAIgIgBg");
	this.shape_29.setTransform(117.85,-23.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgOAhIAAhBIAcAAIAAAOIgOAAIAAALIAMAAIAAANIgMAAIAAANIAPAAIAAAOg");
	this.shape_30.setTransform(114.525,-23.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgGAhIAAhBIAOAAIAABBg");
	this.shape_31.setTransform(111.8,-23.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AADAhIgFgZIgBAAIAAAZIgPAAIAAhBIAQAAQAHAAAEACQAEACABAEQACAFAAAFIAAAFIgBAJIgEAEIAIAdgAgDgDIABAAIACgBIABgDIAAgHIgBgDIgCgBIgBAAg");
	this.shape_32.setTransform(108.65,-23.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgOAhIAAhBIAcAAIAAAOIgOAAIAAALIAMAAIAAANIgMAAIAAANIAPAAIAAAOg");
	this.shape_33.setTransform(104.975,-23.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgIAhIgIgCIAFgOIAEACIAFABIACgBQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgCgEIgDgFIgDgDIgFgEIgCgGIgBgIIAAAAQgBgJAFgFQAEgEAHAAIAHAAIAHADIgEAMIgEgBIgDAAIgEABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIABAEIAFAEIABACIABABIAFAFIADAGIABAIQABAGgDAEQgCAFgEACQgEACgEAAIgIgBg");
	this.shape_34.setTransform(101.5,-23.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(99.5,-28.5,81.19999999999999,26.7);


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
	this.instance.setTransform(-1786,-350,3.6063,3.6063);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-1786,-350,1392.1,750.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhBIDQgegNgTgbQgTgagBgpQACg3AlggQAmgeA5gBQA6ABAmAeQAlAgACA3QgBApgTAaQgTAbgeANQgeAMgkAAQgjAAgegMgAh2CyIAArAIDuAAIAALAg");
	this.shape.setTransform(415.925,-15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiMIKQg8gOg6gXIA+jWQAsARAkAMQAjALAeAAQAsAAATgQQAVgQAAgjIAAgGQABgcgWgiQgWghgzgxIgsgsQgrgqgfgoQgegpgQgzQgRgyAAhGIAAgDQACiHBEhMQBEhLB7gBQAwAAA5ANQA6AMA4AXIg9DHQgjgKgfgHQgegGgQAAQgoAAgVARQgVARAAAgIAAAEQABAbAXAbQAXAcAnAnIAXAYIAZAZQAsAqAfAoQAgApARAzQASA0AABMIAAACQgBBegiBEQghBEg9AjQg8AkhRAAQhEAAg9gNg");
	this.shape_1.setTransform(364.1,-16.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjlIIIAAwPIHJAAIAADeIjcAAIAACxICzAAIAADeIizAAIAADEIDeAAIAADeg");
	this.shape_2.setTransform(312.65,-16.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkNIIIAAjRIEfpeIj+AAIAAjgIH7AAIAADRIklJeIEjAAIAADgg");
	this.shape_3.setTransform(256.25,-16.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah2IIIAAwPIDtAAIAAQPg");
	this.shape_4.setTransform(210.875,-16.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArIIIhSmMIgRAAIAAGMIjvAAIAAwPIEAAAQBzABBBAjQBAAkAaBBQAZBAgBBXIAABLQAABQgUA2QgUA1glAfIB1HKgAg4hEIALAAQAfABANgOQANgOAAgjIAAhlQAAghgMgPQgMgPghAAIgLAAg");
	this.shape_5.setTransform(161.8,-16.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkRIIIAAwPID9AAQBzABBAAjQBBAkAZBBQAaBAgBBYIAABXQgBBvgmA8QglA+hCAYQhDAYhVgBIgPAAIAAF/gAgjg2IAJAAQAeAAANgOQAOgOgBgkIAAhwQABgigNgPQgNgPgfAAIgJAAg");
	this.shape_6.setTransform(97.2019,-16.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAhIIIAAmaIhBAAIAAGaIjuAAIAAwPIDuAAIAAGJIBBAAIAAmJIDuAAIAAQPg");
	this.shape_7.setTransform(18.4,-16.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiMIKQg8gOg5gXIA+jWQArARAkAMQAkALAdAAQArAAAVgQQAUgQAAgjIAAgGQABgcgWgiQgVghgzgxIgtgsQgrgqgfgoQgfgpgQgzQgQgyAAhGIAAgDQABiHBEhMQBFhLB7gBQAwAAA5ANQA5AMA5AXIg+DHQgjgKgdgHQgegGgRAAQgoAAgVARQgUARgBAgIAAAEQABAbAXAbQAXAcAnAnIAYAYIAYAZQAsAqAfAoQAgApARAzQARA0AABMIAAACQAABegiBEQghBEg9AjQg8AkhSAAQhDAAg9gNg");
	this.shape_8.setTransform(-38.35,-16.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABNIIIgTjLIhzAAIgTDLIjpAAICJwPIFZAAICJQPgAAjBfIgekWIgFhWIgEBWIgeEWIBFAAg");
	this.shape_9.setTransform(-99.025,-16.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAjIYQiUgBhKhPQhMhPABibIAAm7QgBibBMhPQBKhQCUAAIABAAQA9AAAyALQAyAKAvAWIhWC/QgTgFgXgDQgWgDgSAAIgCAAQguAAgZAdQgWAdAAA4IAAGNQAAA4AdAcQAeAeAwAAIABAAQAVAAAWgFQAVgEAZgLIBVC/Qg0Aag2ANQg2ANhDAAg");
	this.shape_10.setTransform(-157.65,-16.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AkSIIIAAwPID/AAQBUABBCAlQBDAkAmBFQAmBEABBfIAAGkQgBBhgmBGQgmBFhCAnQhDAlhSABgAgkEmIAJAAQAkABALgRQAKgRgBgqIAAnBQAAgogOgMQgNgNgdABIgJAAg");
	this.shape_11.setTransform(462.725,-168.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjlIIIAAwPIHJAAIAADeIjcAAIAACxICzAAIAADeIizAAIAADEIDeAAIAADeg");
	this.shape_12.setTransform(407.05,-168.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AjlIIIAAwPIHJAAIAADeIjcAAIAACxICzAAIAADeIizAAIAADEIDeAAIAADeg");
	this.shape_13.setTransform(355.95,-168.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ah2IIIAAskIiSAAIAAjrIIRAAIAADrIiSAAIAAMkg");
	this.shape_14.setTransform(302,-168.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDIIIhCqSIAAKSIjuAAIAAwPIE6AAIA/KDIAAqDIDuAAIAAQPg");
	this.shape_15.setTransform(240.15,-168.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABNIIIgTjLIhzAAIgTDLIjpAAICJwPIFZAAICJQPgAAjBfIgekWIgFhWIgEBWIgeEWIBFAAg");
	this.shape_16.setTransform(171.975,-168.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAsIIIhTmMIgRAAIAAGMIjuAAIAAwPID/AAQBzABBAAjQBBAkAZBBQAaBAgBBXIAABLQAABQgUA2QgUA1glAfIB2HKgAg4hEIAMAAQAeABANgOQANgOgBgjIAAhlQABghgMgPQgNgPgfAAIgMAAg");
	this.shape_17.setTransform(105.05,-168.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABNIIIgTjLIhzAAIgTDLIjpAAICJwPIFZAAICJQPgAAjBfIgekWIgFhWIgEBWIgeEWIBFAAg");
	this.shape_18.setTransform(38.075,-168.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiNHxQg/gdgkg+Qgjg8AAheIAAsJIDzAAIAAMPQAAAYAIAKQAIAKARAAQARAAAHgKQAIgLAAgXIAAsPIDzAAIAAMJQAABTgeA9QgeA+g+AiQg9AihbAAQhSAAg9gdg");
	this.shape_19.setTransform(-28.225,-168.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AjNHQQhHhKABiOIAAntQABhcAohAQAnhBBFgjQBGghBXgBQA9AAA/ARQBAARA5AfIhWDNQgdgPgigJQgigIghAAQgwAAgWAZQgXAZACA2IAAHHQAAAbAIAMQAKALARgBQAMAAAHgCQAGgCACgCIAAl3IDiAAIAAITQgrAYglARQgmARgpAJQgoAJgyAAQiQgBhFhIg");
	this.shape_20.setTransform(-90.1007,-168.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AkCIRIAAjTQBIhQBEhcQBEhbArhWQAshXABhGIAAgJQgBgpgPgWQgPgXgWgIQgWgJgXABQgnABgjAKIg7ARIhKjGQAsgYBEgRQBFgRBQgBQBZACA9ArQA8ArAgBIQAfBIABBWIAAAFQgBBOgYBIQgYBHgoBAQgoBAgtA5QgtA6gqAwIDqAAIAADeg");
	this.shape_21.setTransform(-167.55,-169.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhBIQIAAsJIhsAYIAAjeIFbhQIAAQfg");
	this.shape_22.setTransform(-221.325,-169.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFE400").s().p("Ah2IIIAAknIjHroID2AAIBJFbIBGlbID2AAIjHLoIAAEng");
	this.shape_23.setTransform(315.025,-321.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFE400").s().p("AAAIXQiJAAhFhKQhFhLAAiJIAAnvQABiSBIhHQBJhICBABIABAAQCJABBFBKQBFBKAACLIAAHvQgCCQhGBIQhIBGiBAAgAgZkrQgHALABAXIAAIUQgBAYAIAKQAIAKAQAAIAAAAQASAAAHgKQAHgLABgXIAAoUQAAgYgJgKQgJgLgPAAIgBAAQgRAAgHALg");
	this.shape_24.setTransform(250.45,-321.7007);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE400").s().p("Ah/H/Qg8gQg+ggIBWjOQAeAQAaAIQAaAIAYAAQAjAAAPgVQAPgWgCgwIAArUID0AAIAAL8QgBCKhIBLQhIBMh8ABQgxgBg7gQg");
	this.shape_25.setTransform(188.8,-320.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFE400").s().p("Ah2IIIAAknIjHroID2AAIBJFbIBGlbID2AAIjHLoIAAEng");
	this.shape_26.setTransform(115.025,-321.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFE400").s().p("AjyIIIAAwPIDuAAIAAMkID3AAIAADrg");
	this.shape_27.setTransform(52.5,-321.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFE400").s().p("AiNHxQg/gdgkg+Qgjg8AAheIAAsJIDzAAIAAMPQAAAYAIAKQAIAKARAAQARAAAHgKQAIgLAAgXIAAsPIDzAAIAAMJQAABTgeA9QgeA+g+AiQg9AihbAAQhSAAg9gdg");
	this.shape_28.setTransform(-8.325,-320.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFE400").s().p("Ah/H/Qg8gQg+ggIBXjOQAdAQAaAIQAaAIAXAAQAlAAAOgVQAPgWgBgwIAArUIDzAAIAAL8QgBCKhIBLQhIBMh8ABQgwgBg8gQg");
	this.shape_29.setTransform(-71.25,-320.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-596.9,-401.7,1446.6999999999998,495.4), null);


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
	this.instance.setTransform(-156,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-156,-124,278,247), null);


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
	this.instance.setTransform(-938,-260,1.9523,1.9523);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-938,-260,542.8,560.3), null);


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
	this.instance.setTransform(-389,-386,4.2179,4.2179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.other_prize_mc, new cjs.Rectangle(-389,-386,1122,350.1), null);


(lib.button_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CC0000").s().p("AAIAXIgIgdIgHAdIgMAAIgPgtIAMAAIAJAdIAIgdIALAAIAIAdIAJgdIAMAAIgPAtg");
	this.shape.setTransform(44.975,9.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AgLAVQgGgCgDgGQgDgGAAgHQAAgGADgGQADgFAFgDQAGgDAGAAQAKAAAHAGQAHAHAAAKQAAAKgHAHQgHAHgKAAQgFAAgGgDgAgHgKQgDAEAAAGQAAAHADAEQADADAEAAQAFAAADgDQADgEAAgHQAAgGgDgEQgDgDgFAAQgEAAgDADg");
	this.shape_1.setTransform(38.725,9.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AAMAgIgYgpIAAApIgNAAIAAg/IANAAIAZAqIAAgqIANAAIAAA/g");
	this.shape_2.setTransform(32.675,8.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AgTAgIgBgKIAFABQAFAAACgDQACgCABgEIgSguIAOAAIAKAgIAKggIANAAIgQAsIgEAIIgCAGIgDAEQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABAAAAIgHABIgHgBg");
	this.shape_3.setTransform(24.5,9.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AgNAWQgEgCgBgEQgCgEAAgGIAAgdIAMAAIAAAWIABALIACADIAFABQACAAADgBQACgCABgDQABgCAAgJIAAgUIAMAAIAAAuIgLAAIAAgHQgDADgEADQgDACgFAAQgEAAgEgCg");
	this.shape_4.setTransform(19.275,9.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AgaAgIAAg/IAaAAIALAAIAGADQADACACAEQACADAAAEQAAAFgCADQgDAEgEACQAFABAEAEQADAEAAAGQAAAEgCAEQgCAEgDADQgEACgFABIgPAAgAgNAVIAMAAIAIAAIAFgDQABgCABgDQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQgCgBgIAAIgLAAgAgNgGIAJAAIAIAAQAEAAABgCQACgCAAgDQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBgCgDAAIgKAAIgIAAg");
	this.shape_5.setTransform(13.4,8.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjnhJIHPAAQAVAAAOAPQAPAPAAAUIAAAvQAAAUgPAPQgOAPgVAAInPAAQgVAAgPgPQgOgPAAgUIAAgvQAAgUAOgPQAPgPAVAAg");
	this.shape_6.setTransform(28.225,7.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAD72E").s().p("AjnBKQgVAAgPgPQgOgPAAgUIAAgvQAAgUAOgPQAPgPAVAAIHPAAQAVAAAOAPQAPAPAAAUIAAAvQAAAUgPAPQgOAPgVAAg");
	this.shape_7.setTransform(28.225,7.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.button_mc, new cjs.Rectangle(-1,-1,58.5,16.8), null);


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
	this.instance.setTransform(-1697,50,5.3551,5.3551);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bt_logo, new cjs.Rectangle(-1697,50,589.0999999999999,337.4), null);


// stage content:
(lib.bigticketawarenesshtml5320x50 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(110.8,43.95,1.1257,1.1257);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(141));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(159.95,3.8,0.0852,0.0852,0,0,0,0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(108).to({alpha:0},16).wait(17));

	// Layer_1
	this.instance_2 = new lib.button_mc();
	this.instance_2.setTransform(172.75,33.15,1,1,0,0,0,28.2,7.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(124).to({_off:false},0).to({y:24.4,alpha:1},16).wait(1));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(83.35,22.5,0.0831,0.0831);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(108).to({_off:false},0).wait(1).to({regX:-1090,regY:25.1,x:-7.05,y:24.6},0).wait(1).to({x:-6.15},0).wait(1).to({x:-4.45},0).wait(1).to({x:-1.4},0).wait(1).to({x:3.95,y:24.65},0).wait(1).to({x:13.2,y:24.7},0).wait(1).to({x:24.6,y:24.75},0).wait(1).to({x:36,y:24.8},0).wait(1).to({x:45.5,y:24.85},0).wait(1).to({x:52.95,y:24.9},0).wait(1).to({x:58.8},0).wait(1).to({x:63.4,y:24.95},0).wait(1).to({x:66.5},0).wait(1).to({x:68.25},0).wait(1).to({x:69.1},0).wait(1).to({regX:0,regY:0,x:159.95,y:22.9},0).wait(17));

	// sub_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(159.7,44.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:125.8,regY:-169,x:172.75,y:26.65,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:26.6,alpha:0.0435},0).wait(1).to({y:26.5,alpha:0.0919},0).wait(1).to({y:26.3,alpha:0.1816},0).wait(1).to({y:26,alpha:0.3248},0).wait(1).to({y:25.65,alpha:0.4878},0).wait(1).to({y:25.35,alpha:0.6345},0).wait(1).to({y:25.1,alpha:0.7499},0).wait(1).to({y:24.9,alpha:0.8388},0).wait(1).to({y:24.75,alpha:0.9088},0).wait(1).to({y:24.65,alpha:0.9564},0).wait(1).to({y:24.6,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:42.25,alpha:1},0).wait(20).to({regX:125.8,regY:-169,x:172.75,y:24.6,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:24.65,alpha:0.9565},0).wait(1).to({y:24.75,alpha:0.9081},0).wait(1).to({y:24.95,alpha:0.8184},0).wait(1).to({y:25.25,alpha:0.6752},0).wait(1).to({y:25.6,alpha:0.5122},0).wait(1).to({y:25.9,alpha:0.3655},0).wait(1).to({y:26.15,alpha:0.2501},0).wait(1).to({y:26.35,alpha:0.1612},0).wait(1).to({y:26.5,alpha:0.0912},0).wait(1).to({y:26.6,alpha:0.0436},0).wait(1).to({y:26.65,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:44.35,alpha:0},0).wait(77));

	// other_prize
	this.instance_5 = new lib.other_prize_mc();
	this.instance_5.setTransform(159.95,44.2,0.0765,0.0765);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(57).to({_off:false},0).wait(1).to({regX:172,regY:-211,x:173.1,y:28,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:27.95,alpha:0.0435},0).wait(1).to({y:27.8,alpha:0.0919},0).wait(1).to({y:27.6,alpha:0.1816},0).wait(1).to({y:27.3,alpha:0.3248},0).wait(1).to({y:26.95,alpha:0.4878},0).wait(1).to({y:26.6,alpha:0.6345},0).wait(1).to({y:26.35,alpha:0.7499},0).wait(1).to({y:26.15,alpha:0.8388},0).wait(1).to({y:26,alpha:0.9088},0).wait(1).to({y:25.85,alpha:0.9564},0).wait(1).to({y:25.8,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0,regY:0.7,x:159.95,y:41.95,alpha:1},0).wait(37).to({regX:172,regY:-211,x:173.2,y:25.7,alpha:0.9968},0).wait(1).to({x:173.7,alpha:0.9855},0).wait(1).to({x:174.65,alpha:0.9629},0).wait(1).to({x:176.3,alpha:0.923},0).wait(1).to({x:179.2,y:25.65,alpha:0.8533},0).wait(1).to({x:184.25,y:25.6,alpha:0.7328},0).wait(1).to({x:190.5,y:25.5,alpha:0.5836},0).wait(1).to({x:196.7,y:25.45,alpha:0.4352},0).wait(1).to({x:201.9,y:25.4,alpha:0.3113},0).wait(1).to({x:205.95,y:25.35,alpha:0.2141},0).wait(1).to({x:209.15,y:25.3,alpha:0.1375},0).wait(1).to({x:211.7,y:25.25,alpha:0.0771},0).wait(1).to({x:213.35,alpha:0.0372},0).wait(1).to({x:214.35,alpha:0.0143},0).wait(1).to({x:214.8,alpha:0.0031},0).wait(1).to({regX:0,regY:0.7,x:201.8,y:41.45,alpha:0},0).wait(17));

	// second_prize
	this.instance_6 = new lib.second_prize_mc();
	this.instance_6.setTransform(102.1,29.75,0.1923,0.1923);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(57).to({_off:false},0).wait(1).to({regX:-17,regY:-0.5,x:98.85,y:29.6,alpha:0.0037},0).wait(1).to({y:29.55,alpha:0.0167},0).wait(1).to({y:29.45,alpha:0.0435},0).wait(1).to({y:29.25,alpha:0.0919},0).wait(1).to({y:28.9,alpha:0.1816},0).wait(1).to({y:28.35,alpha:0.3248},0).wait(1).to({y:27.65,alpha:0.4878},0).wait(1).to({y:27.1,alpha:0.6345},0).wait(1).to({y:26.65,alpha:0.7499},0).wait(1).to({y:26.25,alpha:0.8388},0).wait(1).to({y:26,alpha:0.9088},0).wait(1).to({y:25.8,alpha:0.9564},0).wait(1).to({y:25.7,alpha:0.9834},0).wait(1).to({y:25.65,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:102.1,y:25.75,alpha:1},0).wait(69));

	// promo
	this.instance_7 = new lib.promo_mc();
	this.instance_7.setTransform(189.15,23.35,0.0867,0.0867,0,0,0,0.6,0.6);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-666.6,regY:20.2,x:131.15,y:25.05,alpha:0.0037},0).wait(1).to({x:130.8,alpha:0.0167},0).wait(1).to({x:130,alpha:0.0435},0).wait(1).to({x:128.6,alpha:0.0919},0).wait(1).to({x:125.95,alpha:0.1816},0).wait(1).to({x:121.8,alpha:0.3248},0).wait(1).to({x:117.05,alpha:0.4878},0).wait(1).to({x:112.75,alpha:0.6345},0).wait(1).to({x:109.4,alpha:0.7499},0).wait(1).to({x:106.8,alpha:0.8388},0).wait(1).to({x:104.75,alpha:0.9088},0).wait(1).to({x:103.35,alpha:0.9564},0).wait(1).to({x:102.55,alpha:0.9834},0).wait(1).to({x:102.2,alpha:0.9964},0).wait(1).to({regX:0,regY:0.6,x:159.95,y:23.35,alpha:1},0).wait(42).to({alpha:0},15).to({_off:true},1).wait(68));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5050F").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160.025,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(141));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(94.9,18.4,225.20000000000002,37.800000000000004);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_18.jpg", id:"_18"},
		{src:"images/_2ndprize.jpg", id:"_2ndprize"},
		{src:"images/consolation.jpg", id:"consolation"},
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