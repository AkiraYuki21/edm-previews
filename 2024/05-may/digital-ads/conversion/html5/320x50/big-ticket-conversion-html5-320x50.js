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
	this.instance.setTransform(104.2,-4.15,0.3476,0.3476);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAVIgCgBIgCgBIAAgFIADABIADAAIAFAAIAAgEIABgDIgDABQgFAAgBgCQgCgCABgEIAEgVIAFAAIgEAVQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABIADABIABgBIACAAIAFgYIAFAAIgHAfQgBAFgCACQgCADgFAAIgCAAg");
	this.shape.setTransform(102.125,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAVIAIgpIAFAAIgIApg");
	this.shape_1.setTransform(100.6,-0.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAVIgEgBIAJgpIAEAAIgDAOIACgBIACgBQAFAAABADQACACgBAFIgDALQAAAFgDACQgDACgDABIgFgBgAAAgDIgEATIACABIABAAIACgBIACgDIADgNQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIgCgBIgCAAIgBABg");
	this.shape_2.setTransform(98.7321,-0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAUIAGgdIAEAAIgFAdgAAAgNIAAgDIABgCIADgBIACABQAAAAAAAAQAAABABAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgCAAIgDAAg");
	this.shape_3.setTransform(97.1583,-0.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAPIgEgBIACgEIADAAIADABIADgBIABgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgCgCIgBgBQgDgBgBgBIAAgFQABgEADgCQACgCAEAAIADAAIADABIgCAFIgCgBIgDgBIgDABIgBADIAAACIABACIACABIADABIACADIgBAEQAAAEgDACQgDACgEAAIgDAAg");
	this.shape_4.setTransform(95.475,0.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AABAPIAFgVQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIgCgBIgCAAIgBABIgFAYIgFAAIAGgbIAEgCIAEAAQAFAAABACQACACgBAEIgFAVg");
	this.shape_5.setTransform(93.42,0.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJANQgBgDABgEIACgLQABgFADgCQACgCAEAAQAFAAACACQABACgBAFIgCALQgBAEgDADQgCACgEAAQgFAAgCgCgAAAgJIgBADIgDAMIAAAEIADABIACgBIACgEIACgMQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgDgBIgCABg");
	this.shape_6.setTransform(91.225,0.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAVIAJgoIADgBIAFAAQAFAAABACQACADgBAFIgDAKQAAAFgDACQgDADgDAAIgCgBIgCAAIgDAMgAAAgPIgDATIACABIABAAIACgBIACgDIADgMQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAIgCgBIgCAAIgCAAg");
	this.shape_7.setTransform(88.8071,0.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAPIgEgBIACgEIADAAIADABIADgBIABgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgCgCIgBgBQgDgBgBgBIAAgFQABgEADgCQACgCAEAAIADAAIADABIgCAFIgCgBIgDgBIgDABIgBADIAAACIABACIACABIADABIACADIgBAEQAAAEgDACQgDACgEAAIgDAAg");
	this.shape_8.setTransform(86.725,0.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIANQgCgDABgFIACgKQABgFADgCQADgDADABQAEgBACADQACACgBAFIgCAGIgLAAIgBAEIAAAEQABABAAAAQABAAAAAAQABABAAAAQABAAAAAAIACgBIADgBIAAAFIgEABIgCAAQgFAAgCgCgAAAgJIgBAEIgBADIAGAAIABgDQABgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgDgBIgCABg");
	this.shape_9.setTransform(84.7533,0.1708);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AACAVIgCgRIAAAAIgBAAIgDAAIgDARIgFAAIAJgpIAGAAIAHABQACABABADIgBAGIAAADIgDAGIgEADIADASgAgDAAIADAAIADAAIACgCIACgDIAAgEIAAgEIgBgCIgEgBIgCAAg");
	this.shape_10.setTransform(82.5083,-0.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAVIgCgBIgCgBIAAgFIADABIADAAIAFAAIAAgEIABgDIgDABQgFAAgBgCQgCgCABgEIAEgVIAFAAIgEAVQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABIADABIABgBIACAAIAFgYIAFAAIgHAfQgBAFgCACQgCADgFAAIgCAAg");
	this.shape_11.setTransform(79.225,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIANQgCgCABgFIAAgBQABgEADgBQADgDADAAIACABIABAAIABgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgDABIgDABIACgFIACgBIACAAIACAAQAFAAABACQACACgBAFIgEATIgFABIgDAAQgEAAgCgCgAgCACIgCAEIAAAEQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAIAAAAIACAAIACgKIgCgBIgBAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_12.setTransform(77.0467,0.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAVIAIgpIAFAAIgIApg");
	this.shape_13.setTransform(75.6,-0.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMAVIAJgpIAGAAIAHABQACABABADIgBAGIAAADIgDAGQgBACgDABQgDABgDAAIgDAAIgDARgAgDAAIADAAIADAAIACgDIACgDIAAgDIAAgEIgBgCIgEgBIgCAAg");
	this.shape_14.setTransform(73.8583,-0.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEAVIAAgMIgIgdIAKAAIACAOIADgOIAKAAIgIAdIAAAMg");
	this.shape_15.setTransform(-60.35,-0.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJAVIAAgpIAJAAIAAAgIAKAAIAAAJg");
	this.shape_16.setTransform(-62.95,-0.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKAVIAAgpIAKAAQAEAAADABQACACABACIABAGIAAAEQAAAFgBABQgCADgDABIgFABIAAAAIAAAPgAAAgBIABgBIAAgCIAAgFIAAgCIgBAAg");
	this.shape_17.setTransform(-65.375,-0.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKAVIAAgpIAKAAQAEAAADABQACACABACIABAGIAAAEQAAAFgBABQgCADgDABIgFABIAAAAIAAAPgAAAgBIABgBIAAgCIAAgFIAAgCIgBAAg");
	this.shape_18.setTransform(-67.925,-0.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AADAVIgBgIIgDAAIgBAIIgKAAIAGgpIANAAIAGApgAABAEIgBgLIAAgDIAAADIAAALIABAAg");
	this.shape_19.setTransform(-70.575,-0.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgFAWIgEgCIACgJIAEACIACAAIABgBIABgCIgBgCIgBgEIgCgCIgEgDIgBgDIgBgFQAAgGADgDQADgDAEAAIAEABIAFABIgCAJIgDgBIgCAAIgDAAIAAACIAAACIADADIABABIABABIADACIACAFIAAAEIgBAHIgDAEQgDACgDAAIgFAAg");
	this.shape_20.setTransform(-73.75,-0.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgCAJIgCgRIAJAAIgCARg");
	this.shape_21.setTransform(-75.525,-1.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHATQgDgDAAgHIAAgRQAAgHADgDQAEgDAFAAIAEABIAEABIgDAIIgCAAIgCAAIgDABIAAADIAAAPQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAIACAAIABgBIAEAIIgEACIgFAAQgFAAgEgDg");
	this.shape_22.setTransform(-77.275,-0.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgLATQgDgDAAgFIAAgFQAAgDABgDIAFgBIgCgDIgBgDIAAgDIABgHIADgDIAGgBIAEABIADADIAAAHIAAACIAAAEIgCADQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIAEAFIgBgCIAAgDIAIAAIAAAGIAAADIgCAEIAGAJIgKAAIgBgCIgDACIgCAAQgHAAgDgDgAgFAHIAAABIAAABIABAEIAEABIAAAAIAAAAIgFgIgAgCgKIAAAEIAAABIAAABIABgBIABgCIAAgDIAAgCIgBAAIgBAAIAAACg");
	this.shape_23.setTransform(-80.15,-0.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAVIAAggIgGAAIAAgJIAVAAIAAAJIgGAAIAAAgg");
	this.shape_24.setTransform(-82.925,-0.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_25.setTransform(-86.875,-0.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFAVIgFgCIAEgIIACABIADABIABgBIABgDIAAgEIAAgCIgBgBIgDgBIgCAAIgDABIADgXIAPAAIAAAJIgGAAIgBAGQAEAAACADQACADAAAEIAAAGQAAAGgDADQgDACgFAAIgFAAgAABgGIgBAAg");
	this.shape_26.setTransform(-91.075,-0.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFAVIgEgEQgBgCAAgEIAAgFIAAgCIAAgDIABgBIAEgKIAEgLIAIAAIgDAIIgDAHIAAAAIABAAQAFABACADQACACAAAFIAAAEQAAAFgBACQgCADgCABQgDACgDAAIgFgBgAAAADIAAAIIAAACIAAAAIABAAIAAgCIAAgIIAAgBIgBgBIAAAAIAAACg");
	this.shape_27.setTransform(-93.625,-0.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgJAWIAAgJIAFgHIAEgGQACgEAAgDIAAAAIgBgDIgBgBIgCAAIgDAAIgCABIgDgIIAEgCIAGgBQADAAADACQADACABADQABADAAADIAAABIgBAGIgCAEIgEAFIgDAFIAJAAIAAAJg");
	this.shape_28.setTransform(-96.1,-0.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgEAWIgGgCIADgJIAEACIACAAIABgBIACgCIgCgCIgCgEIgBgCIgDgDIgCgDIgBgFQAAgGADgDQADgDAEAAIAEABIAFABIgDAJIgCgBIgCAAIgDAAIAAACIAAACIADADIABABIABABIADACIACAFIABAEIgCAHIgEAEQgCACgDAAIgEAAg");
	this.shape_29.setTransform(-99.1,-0.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJAVIAAgpIASAAIAAAJIgJAAIAAAHIAIAAIAAAIIgIAAIAAAIIAJAAIAAAJg");
	this.shape_30.setTransform(-101.2,-0.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEAVIAAgpIAJAAIAAApg");
	this.shape_31.setTransform(-102.95,-0.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AACAVIgDgQIAAAAIAAAQIgKAAIAAgpIAKAAQAEAAADABQACACABACIABAGIAAADIAAAGIgDACIAFATgAgBgCIAAAAIABAAIAAgCIAAgFIAAgCIgBAAIAAAAg");
	this.shape_32.setTransform(-104.975,-0.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgIAVIAAgpIASAAIAAAJIgJAAIAAAHIAHAAIAAAIIgHAAIAAAIIAJAAIAAAJg");
	this.shape_33.setTransform(-107.35,-0.725);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAWIgGgCIADgJIAEACIACAAIABgBIABgCIgBgCIgCgEIgBgCIgEgDIgBgDIgBgFQAAgGADgDQADgDAEAAIAEABIAFABIgDAJIgCgBIgCAAIgDAAIAAACIAAACIADADIABABIABABIADACIACAFIAAAEIgBAHIgDAEQgDACgDAAIgEAAg");
	this.shape_34.setTransform(-109.55,-0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.8,-4.1,221.6,8.3);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(104.2,-4.15,0.3476,0.3476);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAVIgCgBIgCgBIAAgFIADABIADAAIAFAAIAAgEIABgDIgDABQgFAAgBgCQgCgCABgEIAEgVIAFAAIgEAVQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABIADABIABgBIACAAIAFgYIAFAAIgHAfQgBAFgCACQgCADgFAAIgCAAg");
	this.shape.setTransform(102.125,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAVIAIgpIAFAAIgIApg");
	this.shape_1.setTransform(100.6,-0.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAVIgEgBIAJgpIAEAAIgDAOIACgBIACgBQAFAAABADQACACgBAFIgDALQAAAFgDACQgDACgDABIgFgBgAAAgDIgEATIACABIABAAIACgBIACgDIADgNQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIgCgBIgCAAIgBABg");
	this.shape_2.setTransform(98.7321,-0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAUIAGgdIAEAAIgFAdgAAAgNIAAgDIABgCIADgBIACABQAAAAAAAAQAAABABAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgCAAIgDAAg");
	this.shape_3.setTransform(97.1583,-0.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAPIgEgBIACgEIADAAIADABIADgBIABgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgCgCIgBgBQgDgBgBgBIAAgFQABgEADgCQACgCAEAAIADAAIADABIgCAFIgCgBIgDgBIgDABIgBADIAAACIABACIACABIADABIACADIgBAEQAAAEgDACQgDACgEAAIgDAAg");
	this.shape_4.setTransform(95.475,0.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AABAPIAFgVQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIgCgBIgCAAIgBABIgFAYIgFAAIAGgbIAEgCIAEAAQAFAAABACQACACgBAEIgFAVg");
	this.shape_5.setTransform(93.42,0.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJANQgBgDABgEIACgLQABgFADgCQACgCAEAAQAFAAACACQABACgBAFIgCALQgBAEgDADQgCACgEAAQgFAAgCgCgAAAgJIgBADIgDAMIAAAEIADABIACgBIACgEIACgMQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgDgBIgCABg");
	this.shape_6.setTransform(91.225,0.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAVIAJgoIADgBIAFAAQAFAAABACQACADgBAFIgDAKQAAAFgDACQgDADgDAAIgCgBIgCAAIgDAMgAAAgPIgDATIACABIABAAIACgBIACgDIADgMQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAIgCgBIgCAAIgCAAg");
	this.shape_7.setTransform(88.8071,0.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAPIgEgBIACgEIADAAIADABIADgBIABgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgCgCIgBgBQgDgBgBgBIAAgFQABgEADgCQACgCAEAAIADAAIADABIgCAFIgCgBIgDgBIgDABIgBADIAAACIABACIACABIADABIACADIgBAEQAAAEgDACQgDACgEAAIgDAAg");
	this.shape_8.setTransform(86.725,0.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIANQgCgDABgFIACgKQABgFADgCQADgDADABQAEgBACADQACACgBAFIgCAGIgLAAIgBAEIAAAEQABABAAAAQABAAAAAAQABABAAAAQABAAAAAAIACgBIADgBIAAAFIgEABIgCAAQgFAAgCgCgAAAgJIgBAEIgBADIAGAAIABgDQABgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgDgBIgCABg");
	this.shape_9.setTransform(84.7533,0.1708);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AACAVIgCgRIAAAAIgBAAIgDAAIgDARIgFAAIAJgpIAGAAIAHABQACABABADIgBAGIAAADIgDAGIgEADIADASgAgDAAIADAAIADAAIACgCIACgDIAAgEIAAgEIgBgCIgEgBIgCAAg");
	this.shape_10.setTransform(82.5083,-0.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAVIgCgBIgCgBIAAgFIADABIADAAIAFAAIAAgEIABgDIgDABQgFAAgBgCQgCgCABgEIAEgVIAFAAIgEAVQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABIADABIABgBIACAAIAFgYIAFAAIgHAfQgBAFgCACQgCADgFAAIgCAAg");
	this.shape_11.setTransform(79.225,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIANQgCgCABgFIAAgBQABgEADgBQADgDADAAIACABIABAAIABgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgDABIgDABIACgFIACgBIACAAIACAAQAFAAABACQACACgBAFIgEATIgFABIgDAAQgEAAgCgCgAgCACIgCAEIAAAEQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAIAAAAIACAAIACgKIgCgBIgBAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_12.setTransform(77.0467,0.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAVIAIgpIAFAAIgIApg");
	this.shape_13.setTransform(75.6,-0.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMAVIAJgpIAGAAIAHABQACABABADIgBAGIAAADIgDAGQgBACgDABQgDABgDAAIgDAAIgDARgAgDAAIADAAIADAAIACgDIACgDIAAgDIAAgEIgBgCIgEgBIgCAAg");
	this.shape_14.setTransform(73.8583,-0.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEAVIAAgMIgIgdIAKAAIACAOIADgOIAKAAIgIAdIAAAMg");
	this.shape_15.setTransform(-60.35,-0.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJAVIAAgpIAJAAIAAAgIAKAAIAAAJg");
	this.shape_16.setTransform(-62.95,-0.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKAVIAAgpIAKAAQAEAAADABQACACABACIABAGIAAAEQAAAFgBABQgCADgDABIgFABIAAAAIAAAPgAAAgBIABgBIAAgCIAAgFIAAgCIgBAAg");
	this.shape_17.setTransform(-65.375,-0.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKAVIAAgpIAKAAQAEAAADABQACACABACIABAGIAAAEQAAAFgBABQgCADgDABIgFABIAAAAIAAAPgAAAgBIABgBIAAgCIAAgFIAAgCIgBAAg");
	this.shape_18.setTransform(-67.925,-0.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AADAVIgBgIIgDAAIgBAIIgKAAIAGgpIANAAIAGApgAABAEIgBgLIAAgDIAAADIAAALIABAAg");
	this.shape_19.setTransform(-70.575,-0.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgFAWIgEgCIACgJIAEACIACAAIABgBIABgCIgBgCIgBgEIgCgCIgEgDIgBgDIgBgFQAAgGADgDQADgDAEAAIAEABIAFABIgCAJIgDgBIgCAAIgDAAIAAACIAAACIADADIABABIABABIADACIACAFIAAAEIgBAHIgDAEQgDACgDAAIgFAAg");
	this.shape_20.setTransform(-73.75,-0.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgCAJIgCgRIAJAAIgCARg");
	this.shape_21.setTransform(-75.525,-1.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHATQgDgDAAgHIAAgRQAAgHADgDQAEgDAFAAIAEABIAEABIgDAIIgCAAIgCAAIgDABIAAADIAAAPQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAIACAAIABgBIAEAIIgEACIgFAAQgFAAgEgDg");
	this.shape_22.setTransform(-77.275,-0.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgLATQgDgDAAgFIAAgFQAAgDABgDIAFgBIgCgDIgBgDIAAgDIABgHIADgDIAGgBIAEABIADADIAAAHIAAACIAAAEIgCADQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIAEAFIgBgCIAAgDIAIAAIAAAGIAAADIgCAEIAGAJIgKAAIgBgCIgDACIgCAAQgHAAgDgDgAgFAHIAAABIAAABIABAEIAEABIAAAAIAAAAIgFgIgAgCgKIAAAEIAAABIAAABIABgBIABgCIAAgDIAAgCIgBAAIgBAAIAAACg");
	this.shape_23.setTransform(-80.15,-0.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAVIAAggIgGAAIAAgJIAVAAIAAAJIgGAAIAAAgg");
	this.shape_24.setTransform(-82.925,-0.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDAbIAAg1IAHAAIAAA1g");
	this.shape_25.setTransform(-86.875,-0.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFAVIgFgCIAEgIIACABIADABIABgBIABgDIAAgEIAAgCIgBgBIgDgBIgCAAIgDABIADgXIAPAAIAAAJIgGAAIgBAGQAEAAACADQACADAAAEIAAAGQAAAGgDADQgDACgFAAIgFAAgAABgGIgBAAg");
	this.shape_26.setTransform(-91.075,-0.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFAVIgEgEQgBgCAAgEIAAgFIAAgCIAAgDIABgBIAEgKIAEgLIAIAAIgDAIIgDAHIAAAAIABAAQAFABACADQACACAAAFIAAAEQAAAFgBACQgCADgCABQgDACgDAAIgFgBgAAAADIAAAIIAAACIAAAAIABAAIAAgCIAAgIIAAgBIgBgBIAAAAIAAACg");
	this.shape_27.setTransform(-93.625,-0.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgJAWIAAgJIAFgHIAEgGQACgEAAgDIAAAAIgBgDIgBgBIgCAAIgDAAIgCABIgDgIIAEgCIAGgBQADAAADACQADACABADQABADAAADIAAABIgBAGIgCAEIgEAFIgDAFIAJAAIAAAJg");
	this.shape_28.setTransform(-96.1,-0.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgEAWIgGgCIADgJIAEACIACAAIABgBIACgCIgCgCIgCgEIgBgCIgDgDIgCgDIgBgFQAAgGADgDQADgDAEAAIAEABIAFABIgDAJIgCgBIgCAAIgDAAIAAACIAAACIADADIABABIABABIADACIACAFIABAEIgCAHIgEAEQgCACgDAAIgEAAg");
	this.shape_29.setTransform(-99.1,-0.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJAVIAAgpIASAAIAAAJIgJAAIAAAHIAIAAIAAAIIgIAAIAAAIIAJAAIAAAJg");
	this.shape_30.setTransform(-101.2,-0.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEAVIAAgpIAJAAIAAApg");
	this.shape_31.setTransform(-102.95,-0.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AACAVIgDgQIAAAAIAAAQIgKAAIAAgpIAKAAQAEAAADABQACACABACIABAGIAAADIAAAGIgDACIAFATgAgBgCIAAAAIABAAIAAgCIAAgFIAAgCIgBAAIAAAAg");
	this.shape_32.setTransform(-104.975,-0.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgIAVIAAgpIASAAIAAAJIgJAAIAAAHIAHAAIAAAIIgHAAIAAAIIAJAAIAAAJg");
	this.shape_33.setTransform(-107.35,-0.725);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAWIgGgCIADgJIAEACIACAAIABgBIABgCIgBgCIgCgEIgBgCIgEgDIgBgDIgBgFQAAgGADgDQADgDAEAAIAEABIAFABIgDAJIgCgBIgCAAIgDAAIAAACIAAACIADADIABABIABABIADACIACAFIAAAEIgBAHIgDAEQgDACgDAAIgEAAg");
	this.shape_34.setTransform(-109.55,-0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.8,-4.1,221.6,8.3);


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
	this.shape.graphics.f("#FFE400").s().p("AgsFaQgUgJgNgSQgMgRAAgcQABglAZgVQAZgVAmAAQAnAAAZAVQAaAVAAAlQAAAcgMARQgNASgUAJQgVAIgYAAQgXAAgVgIgAhPB4IAAnZICgAAIAAHZg");
	this.shape.setTransform(586.3,-133.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AAdFdIg3kKIgLAAIAAEKIigAAIAAq5ICrAAQBNAAArAYQArAYASAsQARArgBA6IAAAyQAAA2gOAlQgNAigYAWIBPEzgAglgtIAHAAQAVABAJgLQAIgIgBgYIAAhEQABgWgIgKQgIgKgWAAIgHAAg");
	this.shape_1.setTransform(547.3,-133.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AiZFdIAAq5IEyAAIAACUIiTAAIAAB3IB3AAIAACVIh3AAIAACEICUAAIAACVg");
	this.shape_2.setTransform(508.55,-133.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("ABzFdIAAoLIgIBQIgvG7Ih4AAIgvm7IgHhQIAAILIibAAIAAq5IDzAAIAXFKIADA0IAEg0IAZlKIDxAAIAAK5g");
	this.shape_3.setTransform(460.95,-133.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("ABzFdIAAoLIgHBQIgwG7Ih4AAIgvm7IgHhQIAAILIibAAIAAq5IDzAAIAXFKIADA0IAEg0IAZlKIDxAAIAAK5g");
	this.shape_4.setTransform(401.8,-133.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AhfFOQgpgUgYgpQgYgpgBg/IAAoKICkAAIAAIPQAAAPAGAHQAFAHALAAQALAAAFgIQAFgGAAgPIAAoPICjAAIAAIKQAAA3gUAqQgUApgqAXQgoAXg9ABQg3gBgqgTg");
	this.shape_5.setTransform(350.3,-133.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AhdFeQgqgIglgRIApiQQAeANAXAHQAYAIAUAAQAdAAANgLQAPgLAAgXIAAgEQAAgTgPgXQgOgWgighIgegdQgdgdgUgbQgVgbgLghQgLgjAAguIAAgCQABhbAtgzQAvgzBRAAQAhAAAmAIQAnAIAmAPIgqCGQgXgHgUgEQgVgEgKAAQgcAAgOAMQgNALAAAWIAAACQAAASAQATQAQASAZAbIAQAQIARARQAdAcAVAaQAVAcAMAiQALAjAAAzIAAAAQAABBgWAtQgXAtgoAYQgpAYg3ABQgtAAgogKg");
	this.shape_6.setTransform(310.1,-133.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AhdFeQgpgIgmgRIApiQQAeANAXAHQAYAIAUAAQAdAAANgLQAPgLAAgXIAAgEQAAgTgPgXQgOgWgighIgegdQgdgdgUgbQgVgbgLghQgLgjAAguIAAgCQABhbAtgzQAugzBTAAQAgAAAmAIQAnAIAmAPIgqCGQgXgHgUgEQgVgEgKAAQgcAAgOAMQgNALAAAWIAAACQAAASAQATQAQASAZAbIAQAQIARARQAdAcAVAaQAWAcALAiQAMAjgBAzIAAAAQAABBgWAtQgXAtgoAYQgqAYg2ABQgtAAgogKg");
	this.shape_7.setTransform(262.5,-133.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AhPFdIAAq5ICfAAIAAK5g");
	this.shape_8.setTransform(233.725,-133.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AAWFdIAAkTIgrAAIAAETIigAAIAAq5ICgAAIAAEHIArAAIAAkHICgAAIAAK5g");
	this.shape_9.setTransform(202.35,-133.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AhPFdIAAocIhiAAIAAidIFjAAIAACdIhiAAIAAIcg");
	this.shape_10.setTransform(164.2,-133.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AhPFdIAAjGIiFnzIClAAIAwDpIAvjpIClAAIiFHzIAADGg");
	this.shape_11.setTransform(112.575,-133.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AAAFoQhcgBgugxQgugygBhdIAAlMQABhiAxgwQAwgwBXABIABAAQBcAAAuAyQAuAyABBdIAAFMQgCBhgwAwQgvAwhXAAgAgRjJQgEAIAAAQIAAFlQAAAPAFAHQAFAHALAAIAAAAQALAAAGgHQAFgHAAgPIAAllQAAgQgFgIQgHgHgKAAIAAAAQgMAAgFAHg");
	this.shape_12.setTransform(69.25,-133.8003);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AhVFXQgogLgqgVIA6iLQAVALARAGQARAFAQAAQAYAAAKgPQAJgOgBggIAAnmICkAAIAAIBQgBBcgwAzQgwAyhUABQggAAgogLg");
	this.shape_13.setTransform(27.85,-133.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AgBFdIgsm6IAAG6IihAAIAAq5IDSAAIArGvIAAmvICgAAIAAK5g");
	this.shape_14.setTransform(-11.575,-133.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AiaFdIAAq5IEzAAIAACUIiTAAIAAB3IB3AAIAACVIh3AAIAACEICUAAIAACVg");
	this.shape_15.setTransform(-51.15,-133.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("AAAFoQhcgBgugxQgugyAAhdIAAlMQABhiAvgwQAygwBWABIABAAQBcAAAuAyQAvAyAABdIAAFMQgBBhgxAwQgwAwhWAAgAgRjJQgEAIAAAQIAAFlQAAAPAFAHQAFAHALAAIAAAAQAMAAAEgHQAGgHAAgPIAAllQAAgQgGgIQgFgHgLAAIgBAAQgKAAgGAHg");
	this.shape_16.setTransform(-101.45,-133.8003);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("AhPFdIAAocIhiAAIAAidIFjAAIAACdIhiAAIAAIcg");
	this.shape_17.setTransform(-140.85,-133.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AheFeQgpgIgmgRIAqiQQAdANAYAHQAZAIATAAQAdAAAOgLQAOgLgBgXIAAgEQAAgTgOgXQgOgWgighIgegdQgdgcgVgcQgUgbgLghQgLgjAAguIAAgCQABhcAugyQAtgzBSgBQAhABAmAIQAnAIAlAQIgoCFQgYgGgUgFQgVgEgKAAQgbAAgPALQgNAMAAAWIAAACQABASAOASQAQATAaAaIAQARIARARQAdAbAVAbQAVAcAMAiQAMAjgBAzIAAAAQAABBgWAtQgXAtgpAYQgpAYg1ABQguAAgpgKg");
	this.shape_18.setTransform(478.55,-247.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhPFdIAAjGIiFnzIClAAIAwDpIAvjpIClAAIiFHzIAADGg");
	this.shape_19.setTransform(438.125,-246.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA0FdIgNiIIhNAAIgNCIIicAAIBcq5IDnAAIBcK5gAAYBAIgVi6IgDg7IgCA7IgVC6IAvAAg");
	this.shape_20.setTransform(393.35,-246.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAeFdIgemjIgdGjIjOAAIg1q5ICqAAIAIIXIAvoXICAAAIAuIXIAIoXICpAAIg0K5g");
	this.shape_21.setTransform(340.25,-246.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgBFdIgsm6IAAG6IihAAIAAq5IDSAAIArGvIAAmvICgAAIAAK5g");
	this.shape_22.setTransform(275.275,-246.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAFoQhbgBgvgyQgugxgBhdIAAlMQAChiAwgwQAxgwBWABIABAAQBcAAAuAyQAuAyABBdIAAFMQgBBigxAvQgvAwhXAAgAgRjJQgEAIAAAQIAAFlQAAAPAFAHQAFAHALAAIAAAAQAMAAAFgIQAFgGAAgPIAAllQAAgQgFgIQgHgHgKAAIAAAAQgMAAgFAHg");
	this.shape_23.setTransform(230.9,-247.1003);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhPFdIAAq5ICfAAIAAK5g");
	this.shape_24.setTransform(199.175,-246.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiiFdIAAq5ICgAAIAAIcIClAAIAACdg");
	this.shape_25.setTransform(168.825,-246.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AiiFdIAAq5ICgAAIAAIcIClAAIAACdg");
	this.shape_26.setTransform(130.175,-246.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhPFdIAAq5ICfAAIAAK5g");
	this.shape_27.setTransform(100.725,-246.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ABzFdIAAoLIgIBQIgvG7Ih3AAIgwm7IgHhQIAAILIibAAIAAq5IDzAAIAXFKIADA0IAEg0IAZlKIDxAAIAAK5g");
	this.shape_28.setTransform(60.55,-246.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhcFXQgrgLgogVIA5iCQAPAMAWAJQAWAJAcAAQAZAAAJgSQAKgRAAgaIAAg6QAAgTgGgSQgGgSgQgMQgRgMghgBQgWABgUAHQgVAHgPAJIApmFIEJAAIAACUIhoAAIgJBaQA8AFAhAvQAhAwAABaIAABVQgBBcgwAzQgwAyhTABQgtAAgrgLgAAAhwIgBAAIABAAIAHgBIgBAAIgGABIAAAAg");
	this.shape_29.setTransform(-2.075,-246.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgrFiIAAoJIhJAQIAAiVIDpg1IAALDg");
	this.shape_30.setTransform(-39.575,-247.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-263.8,-300.9,971.5,240.99999999999997), null);


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
	this.instance.setTransform(-840,-260,1.9523,1.9523);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-840,-260,542.8,560.3), null);


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
	this.instance.setTransform(-125,-393,3.6774,3.6774);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.other_prize_mc, new cjs.Rectangle(-125,-393,978.2,305.2), null);


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
	this.instance.setTransform(-936,-163,3.2579,3.2579);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lock_up_mc, new cjs.Rectangle(-936,-163,1026.3,589.7), null);


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
	this.instance.setTransform(621,-410,2.6808,2.6808);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hero_mc, new cjs.Rectangle(621,-410,1072.3,764.1), null);


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
	this.instance.setTransform(-257,-317,5.569,5.569);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-257,-317,1358.9,261.8), null);


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
(lib.bigticketconversionhtml5320x50 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(123.8,43.15);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(123.8,43.15);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:1},16).wait(165));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},16).wait(132).to({startPosition:0},0).to({alpha:0},16).wait(17));

	// logo
	this.instance_2 = new lib.bt_logo();
	this.instance_2.setTransform(159.95,3.8,0.0852,0.0852,0,0,0,0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(148).to({alpha:0},16).wait(17));

	// cta
	this.instance_3 = new lib.cta_mc();
	this.instance_3.setTransform(159.95,39.7,0.0598,0.0598,0,0,0,0,0.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(164).to({_off:false},0).wait(1).to({regX:422.4,regY:-186.1,x:185.2,y:28.45,alpha:0.0032},0).wait(1).to({y:28.4,alpha:0.0145},0).wait(1).to({y:28.35,alpha:0.0371},0).wait(1).to({y:28.2,alpha:0.077},0).wait(1).to({y:27.95,alpha:0.1467},0).wait(1).to({y:27.5,alpha:0.2672},0).wait(1).to({y:26.95,alpha:0.4164},0).wait(1).to({y:26.4,alpha:0.5648},0).wait(1).to({y:25.95,alpha:0.6887},0).wait(1).to({y:25.55,alpha:0.7859},0).wait(1).to({y:25.3,alpha:0.8625},0).wait(1).to({y:25.05,alpha:0.9229},0).wait(1).to({y:24.9,alpha:0.9628},0).wait(1).to({y:24.85,alpha:0.9857},0).wait(1).to({y:24.8,alpha:0.9969},0).wait(1).to({regX:0,regY:0.8,x:159.95,y:36,alpha:1},0).wait(1));

	// ticket
	this.instance_4 = new lib.ticket_mc();
	this.instance_4.setTransform(83.35,22.5,0.0831,0.0831);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(148).to({_off:false},0).wait(1).to({regX:-1090,regY:25.1,x:-7.05,y:24.6},0).wait(1).to({x:-6.15},0).wait(1).to({x:-4.45},0).wait(1).to({x:-1.4},0).wait(1).to({x:3.95,y:24.65},0).wait(1).to({x:13.2,y:24.7},0).wait(1).to({x:24.6,y:24.75},0).wait(1).to({x:36,y:24.8},0).wait(1).to({x:45.5,y:24.85},0).wait(1).to({x:52.95,y:24.9},0).wait(1).to({x:58.8},0).wait(1).to({x:63.4,y:24.95},0).wait(1).to({x:66.5},0).wait(1).to({x:68.25},0).wait(1).to({x:69.1},0).wait(1).to({regX:0,regY:0,x:159.95,y:22.9},0).wait(17));

	// sub_caption
	this.instance_5 = new lib.sub_caption_mc();
	this.instance_5.setTransform(159.7,44.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55).to({_off:false},0).wait(1).to({regX:218.4,regY:-190.4,x:182.4,y:24.4,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:24.35,alpha:0.0435},0).wait(1).to({y:24.25,alpha:0.0919},0).wait(1).to({y:24.05,alpha:0.1816},0).wait(1).to({y:23.75,alpha:0.3248},0).wait(1).to({y:23.4,alpha:0.4878},0).wait(1).to({y:23.1,alpha:0.6345},0).wait(1).to({y:22.85,alpha:0.7499},0).wait(1).to({y:22.65,alpha:0.8388},0).wait(1).to({y:22.5,alpha:0.9088},0).wait(1).to({y:22.4,alpha:0.9564},0).wait(1).to({y:22.35,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:42.25,alpha:1},0).wait(20).to({regX:218.4,regY:-190.4,x:182.4,y:22.35,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:22.4,alpha:0.9565},0).wait(1).to({y:22.5,alpha:0.9081},0).wait(1).to({y:22.7,alpha:0.8184},0).wait(1).to({y:23,alpha:0.6752},0).wait(1).to({y:23.35,alpha:0.5122},0).wait(1).to({y:23.65,alpha:0.3655},0).wait(1).to({y:23.9,alpha:0.2501},0).wait(1).to({y:24.1,alpha:0.1612},0).wait(1).to({y:24.25,alpha:0.0912},0).wait(1).to({y:24.35,alpha:0.0436},0).wait(1).to({y:24.4,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:44.35,alpha:0},0).wait(77));

	// other_prize
	this.instance_6 = new lib.other_prize_mc();
	this.instance_6.setTransform(159.95,44.2,0.0765,0.0765);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(97).to({_off:false},0).wait(1).to({regX:364.1,regY:-240.4,x:187.8,y:25.75,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:25.7,alpha:0.0435},0).wait(1).to({y:25.55,alpha:0.0919},0).wait(1).to({y:25.35,alpha:0.1816},0).wait(1).to({y:25.05,alpha:0.3248},0).wait(1).to({y:24.7,alpha:0.4878},0).wait(1).to({y:24.35,alpha:0.6345},0).wait(1).to({y:24.1,alpha:0.7499},0).wait(1).to({y:23.9,alpha:0.8388},0).wait(1).to({y:23.75,alpha:0.9088},0).wait(1).to({y:23.6,alpha:0.9564},0).wait(1).to({y:23.55,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0,regY:0.7,x:159.95,y:41.95,alpha:1},0).wait(37).to({regX:364.1,regY:-240.4,x:187.9,y:23.45,alpha:0.9968},0).wait(1).to({x:188.4,alpha:0.9855},0).wait(1).to({x:189.35,alpha:0.9629},0).wait(1).to({x:191,alpha:0.923},0).wait(1).to({x:193.9,y:23.4,alpha:0.8533},0).wait(1).to({x:198.95,y:23.35,alpha:0.7328},0).wait(1).to({x:205.2,y:23.25,alpha:0.5836},0).wait(1).to({x:211.4,y:23.2,alpha:0.4352},0).wait(1).to({x:216.6,y:23.15,alpha:0.3113},0).wait(1).to({x:220.65,y:23.1,alpha:0.2141},0).wait(1).to({x:223.85,y:23.05,alpha:0.1375},0).wait(1).to({x:226.4,y:23,alpha:0.0771},0).wait(1).to({x:228.05,alpha:0.0372},0).wait(1).to({x:229.05,alpha:0.0143},0).wait(1).to({x:229.5,alpha:0.0031},0).wait(1).to({regX:0,regY:0.7,x:201.8,y:41.45,alpha:0},0).wait(17));

	// promo
	this.instance_7 = new lib.promo_mc();
	this.instance_7.setTransform(189.15,23.35,0.0867,0.0867,0,0,0,0.6,0.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40).to({_off:false},0).wait(1).to({regX:-568.6,regY:20.2,x:139.65,y:25.05,alpha:0.0037},0).wait(1).to({x:139.3,alpha:0.0167},0).wait(1).to({x:138.5,alpha:0.0435},0).wait(1).to({x:137.1,alpha:0.0919},0).wait(1).to({x:134.45,alpha:0.1816},0).wait(1).to({x:130.3,alpha:0.3248},0).wait(1).to({x:125.55,alpha:0.4878},0).wait(1).to({x:121.25,alpha:0.6345},0).wait(1).to({x:117.9,alpha:0.7499},0).wait(1).to({x:115.3,alpha:0.8388},0).wait(1).to({x:113.25,alpha:0.9088},0).wait(1).to({x:111.85,alpha:0.9564},0).wait(1).to({x:111.05,alpha:0.9834},0).wait(1).to({x:110.7,alpha:0.9964},0).wait(1).to({regX:0,regY:0.6,x:159.95,y:23.35,alpha:1},0).wait(94).to({regX:-568.6,regY:20.2,x:110.75,y:25.05,alpha:0.9968},0).wait(1).to({x:111.25,alpha:0.9855},0).wait(1).to({x:112.25,alpha:0.9629},0).wait(1).to({x:114,alpha:0.923},0).wait(1).to({x:117.05,y:25.1,alpha:0.8533},0).wait(1).to({x:122.3,y:25.15,alpha:0.7328},0).wait(1).to({x:128.85,y:25.2,alpha:0.5836},0).wait(1).to({x:135.35,y:25.25,alpha:0.4352},0).wait(1).to({x:140.75,y:25.3,alpha:0.3113},0).wait(1).to({x:145,y:25.35,alpha:0.2141},0).wait(1).to({x:148.35,alpha:0.1375},0).wait(1).to({x:151,y:25.4,alpha:0.0771},0).wait(1).to({x:152.75,alpha:0.0372},0).wait(1).to({x:153.75,alpha:0.0143},0).wait(1).to({x:154.25,alpha:0.0031},0).wait(1).to({regX:0.6,regY:0.6,x:203.7,y:23.75,alpha:0},0).wait(17));

	// lock_up
	this.instance_8 = new lib.lock_up_mc();
	this.instance_8.setTransform(126.25,14.7,0.0764,0.0764,0,0,0,0,0.7);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:-422.9,regY:131.8,x:94.1,y:24.7,alpha:0.0045},0).wait(1).to({x:93.85,alpha:0},0).wait(1).to({x:95.7,alpha:0.053},0).wait(1).to({x:99,alpha:0.1499},0).wait(1).to({x:102.4,alpha:0.2513},0).wait(1).to({x:105.85,alpha:0.3543},0).wait(1).to({x:109.35,alpha:0.4584},0).wait(1).to({x:112.85,alpha:0.5622},0).wait(1).to({x:116.25,alpha:0.6631},0).wait(1).to({x:119.4,alpha:0.7565},0).wait(1).to({x:122.1,alpha:0.8366},0).wait(1).to({x:124.2,alpha:0.8987},0).wait(1).to({x:125.7,alpha:0.9424},0).wait(1).to({x:126.65,alpha:0.9711},0).wait(1).to({x:127.25,alpha:0.9892},0).wait(1).to({regX:0,regY:0.7,x:159.95,y:14.7,alpha:1},0).wait(25).to({regX:-422.9,regY:131.8,x:127.5,y:24.7,alpha:0.9963},0).wait(1).to({x:127.05,alpha:0.9833},0).wait(1).to({x:126.1,alpha:0.9565},0).wait(1).to({x:124.35,alpha:0.9081},0).wait(1).to({x:121.15,alpha:0.8184},0).wait(1).to({x:116.05,alpha:0.6752},0).wait(1).to({x:110.25,alpha:0.5122},0).wait(1).to({x:105,alpha:0.3655},0).wait(1).to({x:100.9,alpha:0.2501},0).wait(1).to({x:97.7,alpha:0.1612},0).wait(1).to({x:95.25,alpha:0.0912},0).wait(1).to({x:93.55,alpha:0.0436},0).wait(1).to({x:92.55,alpha:0.0166},0).wait(1).to({x:92.1,alpha:0.0036},0).wait(1).to({regX:0.7,regY:0.7,x:124.3,y:14.7,alpha:0},0).to({_off:true},1).wait(125));

	// hero_image
	this.instance_9 = new lib.hero_mc();
	this.instance_9.setTransform(230.7,36.8,0.0878,0.0878,0,0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:1157.2,regY:-28,x:331.85,y:34.3},0).wait(1).to({x:332.3,y:34.25},0).wait(1).to({x:328.45,y:34.3},0).wait(1).to({x:321.6,y:34.4},0).wait(1).to({x:314.4,y:34.45},0).wait(1).to({x:307.15,y:34.5},0).wait(1).to({x:299.8,y:34.6},0).wait(1).to({x:292.45,y:34.65},0).wait(1).to({x:285.35,y:34.75},0).wait(1).to({x:278.75,y:34.8},0).wait(1).to({x:273.05,y:34.85},0).wait(1).to({x:268.7,y:34.9},0).wait(1).to({x:265.6,y:34.95},0).wait(1).to({x:263.55},0).wait(1).to({x:262.3},0).wait(1).to({regX:0.6,regY:0.6,x:160.05,y:37.5},0).wait(165));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5050F").s().p("A5JD6IAAnzMAyTAAAIAAHzg");
	this.shape.setTransform(160.025,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(181));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(94.9,18.4,284.4,50.199999999999996);
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