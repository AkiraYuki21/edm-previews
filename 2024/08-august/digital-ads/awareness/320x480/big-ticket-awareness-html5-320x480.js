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
	this.shape.graphics.f("#FFFFFF").s().p("AAICEIAAiFQAAgFgCgDQgCgCgEAAIgDAAIgEABIAACOIg5AAIAAkHIA5AAIAABCIAGAAIAEAAQAdAAAQAOQARAOAAAfIAACKg");
	this.shape.setTransform(107.6,-7.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAlB5QgdAAgPgHQgQgHgGgNQgGgNAAgTIAAhNIgRAAIAAg0IARAAIAAg1IA5AAIAAA1IAeAAIAAA0IgeAAIAAA+QgBAMAGAEQAGAFAOgBIAGAAIAAA2g");
	this.shape_1.setTransform(93.525,-6.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAHBjIAAiFQAAgFgBgCQgCgDgEAAIgDABIgEAAIAACOIg5AAIAAi5QATgFARgEQASgDANAAQAdAAARAOQAQAPAAAeIAACKg");
	this.shape_2.setTransform(79.8,-3.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvBTQgQgSAAglIAAg4QAAgkAQgSQARgSAeAAQAgAAAQASQAQASAAAkIAAA4QAAAlgQASQgQASggAAQgeAAgRgSgAgFgqQgBAEAAAJIAAA7QAAAJABAEQACADADAAQAEAAACgEQABgDAAgJIAAg7QAAgJgBgDQgCgEgEgBQgDAAgCAEg");
	this.shape_3.setTransform(64.575,-3.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AArCEIAAjFIgDAeIgSCnIgsAAIgSinIgCgeIAADFIg7AAIAAkHIBcAAIAIB9IABATIACgTIAJh9IBbAAIAAEHg");
	this.shape_4.setTransform(46,-7.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdBjQgNgBgSgFIAFg3QAMAEALACQALADAKAAQAJAAAFgCQAFgCAAgFQAAgEgCgCIgJgGIgGgCIgHgDQgUgJgLgOQgKgQAAgXQAAgPAGgOQAGgNANgIQANgIAUAAQAIgBAOACQANABAPAFIgEA1IgTgFQgKgCgJAAQgHAAgDACQgEADAAAEQAAADADACIAIAFIAGADIAGADQANAGAKAHQAJAIAGAKQAFALAAAQQAAASgHAOQgHAPgPAIQgQAJgYAAIgVgCg");
	this.shape_5.setTransform(24.0267,-3.7062);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcCJIAAi8IA5AAIAAC8gAgThUQgHgIAAgPQAAgNAHgIQAHgIAMAAQAMAAAHAIQAHAIAAANQAAAPgHAIQgHAIgMAAQgMAAgHgIg");
	this.shape_6.setTransform(13.075,-7.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAICEIAAiFQgBgFgCgDQgCgCgDAAIgDAAIgDABIAACOIg6AAIAAkHIA6AAIAABCIAFAAIAEAAQAeAAAPAOQARAOAAAfIAACKg");
	this.shape_7.setTransform(1.1,-7.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdCEIAAjLIglAAIAAg8ICFAAIAAA8IglAAIAADLg");
	this.shape_8.setTransform(-13.625,-7.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AgTCGIgSgCIgMgDIgPg4IAaAHQANACAJAAQAJAAAFgBQAFgBACgGQACgGAAgMIgGAAIgBAAQgfAAgQgSQgRgSAAgjIAAgtQAAgnARgSQAQgSAfAAIABAAIAdACIAjACIAAC/QAAAogRASQgQASgjAAIgQgCgAgEhNQgDAEABAMIAAAtQgBAMADADQACADAFAAIABAAIACAAIABAAIAAgpIAAgqIgCAAIgBAAQgGAAgCAEg");
	this.shape_9.setTransform(-32.4993,-0.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AgcCJIAAi8IA5AAIAAC8gAgThUQgHgIAAgPQAAgNAHgIQAHgIAMAAQAMAAAHAIQAHAIAAANQAAAPgHAIQgHAIgMAAQgMAAgHgIg");
	this.shape_10.setTransform(-44.125,-7.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AhGCEIAAkHIBDAAQAUAAAQAHQAQAGAKAPQAIAOABAXIAAAGQAAAUgGANQgHANgPAGQAPAGAIAMQAHANABAXIAAAQQAAAXgJAPQgIAQgQAIQgPAIgWAAgAgJBLIAEAAQAGAAADgEQADgEAAgHIAAgaQAAgHgCgEQgDgEgHAAIgEAAgAgJgcIAEAAQAIAAACgEQADgEAAgHIAAgQQAAgHgCgEQgDgEgIAAIgEAAg");
	this.shape_11.setTransform(-56.2,-7.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AAHBjIAAiFQAAgFgBgCQgCgDgEAAIgDABIgEAAIAACOIg5AAIAAi5QATgFARgEQASgDANAAQAdAAARAOQAQAPAAAeIAACKg");
	this.shape_12.setTransform(-76.25,-3.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AgcCJIAAi8IA5AAIAAC8gAgThUQgHgIAAgPQAAgNAHgIQAHgIAMAAQAMAAAHAIQAHAIAAANQAAAPgHAIQgHAIgMAAQgMAAgHgIg");
	this.shape_13.setTransform(-88.175,-7.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AALCEIgLieIgKCeIhOAAIgUkHIBAAAIADDKIASjKIAvAAIASDKIADjKIBAAAIgUEHg");
	this.shape_14.setTransform(-103.925,-7.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-116.9,-28.2,233.8,49.599999999999994), null);


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
	this.instance.setTransform(-139,-123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-139,-123.5,278,247), null);


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


(lib.daily_sub_caption_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFE400").s().p("AgaBZQgMgCgPgEIAEgxQALAEAKACQAKACAJAAQAIAAAEgCQAEgBAAgFQABgDgDgDIgHgFIgGgCIgGgCQgSgIgJgNQgKgOAAgVQAAgNAGgMQAGgMALgHQAMgHARAAQAHgBAMACQANABANAEIgEAvIgRgEQgIgCgJAAQgGAAgDACQgDACAAAEQAAADADACIAHAEIAFADIAFACQAMAGAIAGQAJAHAFAJQAEAJAAAPQABAQgHANQgGANgNAHQgOAIgWAAIgTgBg");
	this.shape.setTransform(131.2768,2.7938);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AglBJQgSgQAAgjIAAgvQAAggAOgQQAOgQAdAAQAcAAANAQQANAPAAAhIAAAoIg8AAIAAAKQAAAHAFAFQAGAFAMAAIAMgBIANgCIAEAuIgVAEIgRABQgeAAgRgRgAgCgpQgCADAAAIIAAANIAMAAIAAgNQAAgIgBgDQgBgDgEAAQgDAAgBADg");
	this.shape_1.setTransform(118.7992,2.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AgyBVIAAgxIAuhHIgqAAIAAgwIBfAAIAAAvIguBIIAwAAIAAAxg");
	this.shape_2.setTransform(106.725,2.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AgZB6IAAioIAzAAIAACogAgRhLQgGgHAAgNQAAgMAGgHQAGgHALAAQALAAAGAHQAGAHAAAMQAAANgGAHQgGAHgLAAQgLAAgGgHg");
	this.shape_3.setTransform(97.025,-0.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AgpBYIAAioQAJgDAPgCQAPgCAQAAIAcAAIAAAwIgcAAIgEAAIgEAAIAAB/g");
	this.shape_4.setTransform(88.775,2.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("Ag9B2IAAjqIA5AAQAaAAAOAIQAOAIAHAOQAFAPAAAUIAAATQAAAZgJANQgJAOgOAFQgPAHgTgBIgDAAIAABXgAgHgMIACAAQAGAAADgCQADgEAAgHIAAgaQAAgIgDgDQgDgDgGgBIgCAAg");
	this.shape_5.setTransform(76.6,-0.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AAGB2IAAh3QABgEgCgCQgCgCgDgBIgDAAIgCABIAAB/Ig0AAIAAjqIA0AAIAAA6IAEAAIAEAAQAaAAAOAMQAOANABAcIAAB7g");
	this.shape_6.setTransform(58.85,-0.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AgaBZQgMgCgPgEIAEgxQALAEAKACQAKACAJAAQAIAAAEgCQAEgBAAgFQABgDgDgDIgHgFIgGgCIgGgCQgSgIgJgNQgKgOAAgVQAAgNAGgMQAGgMALgHQAMgHARAAQAHgBAMACQANABANAEIgEAvIgRgEQgIgCgJAAQgGAAgDACQgDACAAAEQAAADADACIAHAEIAFADIAFACQAMAGAIAGQAJAHAFAJQAEAJAAAPQABAQgHANQgGANgNAHQgOAIgWAAIgTgBg");
	this.shape_7.setTransform(45.9768,2.7938);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AgrBMQgOgOAAgZIAAgCQAAgaAOgMQANgOAcAAIAEAAIAEAAIAAgGQABgKgFgEQgEgEgMAAQgJABgJACIgTAFIAOgxIAIgDIAOgDIANgBQAWABANAGQAOAHAFAMQAFAOAAAUIAABtIgeAHQgPACgOAAQgcABgNgOgAgDATQgDADAAAGIAAAFQAAAHADAEQADACADAAIADAAIAAgeIgDAAQgDAAgDADg");
	this.shape_8.setTransform(33.05,2.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AAHB5QggAAgRgSQgRgSAAgjIAAhjQAAgjARgSQARgSAgAAIABAAQANAAAMACQALADALAFIgTArIgKgCIgJgBIgBAAQgKAAgFAHQgFAGAAANIAABZQABANAFAGQAHAHALAAIAAAAIAKgBIAKgEIATArQgMAGgLADQgNADgPAAg");
	this.shape_9.setTransform(20.8,-0.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AgRB0IgPgCIgMgDIgNgyIAXAGQALACAIAAQAJABAFgCQADgBACgFQACgFAAgLIgEAAIgDAAQgPAAgNgFQgMgFgIgMQgIgMAAgVIAAhrIAzAAIAABqQAAAFACACQACACADAAIADAAIACgBIABg5IAAg5IAzAAIAACmQAAAjgPAQQgOAQgfAAIgPgBg");
	this.shape_10.setTransform(3.2508,6.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AgZB2IAAjqIAzAAIAADqg");
	this.shape_11.setTransform(-7.425,-0.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AgZB6IAAioIAzAAIAACogAgRhLQgGgHAAgNQAAgMAGgHQAGgHALAAQALAAAGAHQAGAHAAAMQAAANgGAHQgGAHgLAAQgLAAgGgHg");
	this.shape_12.setTransform(-14.875,-0.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AgrBMQgNgOAAgZIAAgCQAAgaANgMQAOgOAcAAIACAAIAGAAIAAgGQgBgKgEgEQgEgEgNAAQgHABgKACIgTAFIAOgxIAIgDIANgDIAPgBQAVABANAGQANAHAGAMQAGAOAAAUIAABtIgfAHQgPACgNAAQgcABgOgOgAgCATQgDADgBAGIAAAFQABAHADAEQACACAEAAIADAAIAAgeIgDAAQgEAAgCADg");
	this.shape_13.setTransform(-25.5,2.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("Ag9B2IAAjqIA6AAQASAAAPAIQAPAJAIAPQAJAPAAAWIAABeQAAAWgJAPQgIARgPAIQgPAJgSAAgAgHBCIACAAQAHAAACgDQADgEAAgKIAAhkQAAgJgEgDQgDgCgFgBIgCAAg");
	this.shape_14.setTransform(-39.275,-0.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAIB2IgRhIIAABIIg0AAIAAjqIA0AAIAACBIAOg/IA0AAIgZBNIAeBbg");
	this.shape_15.setTransform(-56.85,-0.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggBxQgNgJgIgOQgHgPAAgVIAAhsQAAgTAHgQQAIgOANgIQAOgJASAAQATAAANAJQANAIAJAOQAHAQAAATIAABsQAAAVgHAPQgJAOgNAJQgNAIgTAAQgSAAgOgIgAgEhEQgBADAAADIAAB9QAAABAAABQAAABAAAAQABABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAIAAABQAGAAAAgIIAAh9QAAgDgCgCIgDgCIgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_16.setTransform(-71.15,-0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgeB0QgPgEgNgHIATgsQAFAEAHADQAIADAJAAQAJAAACgGQADgGAAgIIAAgUQAAgGgBgGQgDgGgEgFQgGgEgLAAQgHAAgIADIgMAFIAPiCIBYAAIAAAyIgjAAIgDAeQAUACALAQQALAQAAAdIAAAdQAAAfgQARQgQARgcAAQgOAAgPgDgAAAglIADAAIgBAAg");
	this.shape_17.setTransform(-85.5,-0.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag9B2IAAjqIA6AAQASAAAPAIQAPAJAIAPQAJAPAAAWIAABeQAAAWgJAPQgIARgPAIQgPAJgSAAgAgHBCIACAAQAHAAACgDQADgEAAgKIAAhkQAAgJgEgDQgDgCgFgBIgCAAg");
	this.shape_18.setTransform(-103.425,-0.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgzB2IAAjqIBmAAIAAAxIgxAAIAAApIAoAAIAAAxIgoAAIAAAsIAyAAIAAAzg");
	this.shape_19.setTransform(-116,-0.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AARB2IgEguIgZAAIgEAuIg1AAIAfjqIBNAAIAfDqgAAHAVIgGg+IgBgTIgBATIgGA+IAOAAg");
	this.shape_20.setTransform(-129.6,-0.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_sub_caption_mc, new cjs.Rectangle(-138.6,-19.2,277.29999999999995,44.5), null);


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
	this.instance.setTransform(-188,-22,1.5422,1.5422);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-188,-22,376.3,72.5), null);


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
(lib.bigticketawarenesshtml5320x480 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(297,459,0.8603,0.8603);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAzIgHgBIgEgBIgCgWIAKADIAIABIAGgBIAEgDIACgHIgCAAIgCAAQgHAAgFgCQgEgCgDgGQgDgFACgIIAKgwIAXAAIgJAvIAAADIACABIABAAIAAAAIAHgaIAEgZIAXAAIgQBJQgCAPgJAIQgHAHgNAAIgHgBg");
	this.shape.setTransform(290.4,467.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVA0IAVhnIAWAAIgWBng");
	this.shape_1.setTransform(286.025,464.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAzIgMgCIAVhkIAWAAIgGAZIADAAQAOAAAEAHQAFAHgDAOIgFAWQgDAOgIAIQgHAGgNAAIgMgBgAgEAfIABAAQABAAABAAQAAAAABAAQAAgBAAAAQAAAAAAAAQACgCAAgFIAFgVQABgDgBgCQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBAAg");
	this.shape_2.setTransform(280.96,464.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUA2IAPhJIAWAAIgQBJgAABghQgBgCAAgHQABgFADgDQADgDAFAAQAFAAADADQACADgCAFQgBAHgDACQgEAEgFAAQgFAAgBgEg");
	this.shape_3.setTransform(276.6571,464.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAnIgMgCIAHgWIAJADIAHAAIAGAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAgBAAAAIAAgDIgDgCIgCgBIgCgBQgIgEgCgEQgDgHACgJQABgFADgGQAEgFAGgDQAFgDAIAAIAIAAIALADIgGAUIgIgCIgHAAIgEAAIgCADIAAACIAEACIACABIACACQAFABACAEQAEACABADQABAFgBAHQgCAGgDAGQgEAGgHADQgHAEgJgBIgIAAg");
	this.shape_4.setTransform(272.025,465.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAnIAKg0IAAgDIgCAAIgCAAIgBAAIgLA3IgXAAIAQhIIAPgDIAMgCQALAAAFAFQAFAGgCAMIgMA2g");
	this.shape_5.setTransform(266.3167,465.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAhQgFgHADgPIAFgVQADgPAIgHQAIgHAMAAQAMAAAFAHQAFAHgDAPIgFAVQgDAPgIAHQgIAHgLAAQgNAAgFgHgAABgQIgBAFIgEAXIgBAFQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAABAAIAAgFIAFgXIABgFQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_6.setTransform(260.525,465.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghA1IAWhnIAJgBIAIAAIAIgBQAOAAAEAHQAEAHgDAPIgFAWQgDANgHAIQgIAGgMAAIgDAAIgGAbgAgBAFIABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQABgCABgEIAFgVQABgEgBgCQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_7.setTransform(254.135,467);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAnIgMgCIAHgWIAJADIAHAAIAGAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAgBAAAAIAAgDIgDgCIgCgBIgCgBQgIgEgCgEQgDgHACgJQABgFADgGQAEgFAGgDQAFgDAIAAIAIAAIALADIgGAUIgIgCIgHAAIgEAAIgCADIAAACIAEACIACABIACACQAFABACAEQAEACABADQABAFgBAHQgCAGgDAGQgEAGgHADQgHAEgJgBIgIAAg");
	this.shape_8.setTransform(248.775,465.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAgQgFgHADgPIAEgUQADgPAIgHQAIgHAMAAQAMAAAEAHQAFAHgDAPIgEARIgaAAIgBAEQgBADACACQACACAFAAIAGAAIAFgBIgCAVIgKABIgHABQgNAAgHgIgAACgSIgCAFIAAAGIAEAAIACgGIAAgFQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAg");
	this.shape_9.setTransform(243.5071,465.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBA0IAAgoIgCAAIgIAoIgYAAIAWhnIAZAAQALAAAFAEQAGADABAHQACAGgDAJIgBAHQgCAIgDAGQgDAEgEADIACAugAAAgGIABAAQABAAABAAQABAAAAAAQABAAAAgBQAAAAABAAQACgCAAgDIACgKQABgEgBgBQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_10.setTransform(237.1281,464.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUAzIgGgBIgGgBIgBgWIAKADIAJABIAGgBIADgDIACgHIgCAAIgCAAQgGAAgGgCQgFgCgCgGQgDgFADgIIAKgwIAVAAIgIAvIgBADIADABIABAAIABAAIAFgaIAGgZIAWAAIgPBJQgEAPgIAIQgHAHgOAAIgGgBg");
	this.shape_11.setTransform(229.15,467.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAiQgFgHACgLIABgBQACgLAHgFQAHgGALAAIACAAIACAAIABgDQABgEgCgCQgBgCgFABIgIAAIgJADIALgWIAEgBIAFgBIAGAAQAKAAAFACQAGADABAGQABAGgCAIIgKAwIgOADIgNABQgMAAgEgFgAgCAIQgBAAAAABQAAAAAAABQgBAAAAABQAAABAAAAIgBADQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAIABAAIACgNIgBAAIgCABg");
	this.shape_12.setTransform(223.0642,465.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVA0IAVhnIAWAAIgWBng");
	this.shape_13.setTransform(218.825,464.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjA0IAWhnIAYAAQALAAAGAEQAGADABAHQABAGgCAJIgBAJQgDALgFAFQgFAGgHACQgHADgIAAIgBAAIgIAmgAAAgFIABAAIAFgBIACgFIACgLQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_14.setTransform(213.8167,464.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLAyIAAgcIgThHIAYAAIAGAhIAHghIAYAAIgUBHIAAAcg");
	this.shape_15.setTransform(131.275,466.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXAyIAAhjIAXAAIAABNIAYAAIAAAWg");
	this.shape_16.setTransform(125.175,466.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaAyIAAhjIAZAAQAKAAAGADQAHAEACAGQADAGAAAIIAAAJQgBALgDAFQgEAGgGACQgHACgHAAIgBAAIAAAlgAgCgEIAAAAQABAAABAAQAAAAAAgBQAAAAABAAQAAAAABgBIABgFIAAgLIgBgEQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBAAgBAAIAAAAg");
	this.shape_17.setTransform(119.425,466.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaAyIAAhjIAZAAQAKAAAGADQAHAEACAGQADAGAAAIIAAAJQgBALgDAFQgEAGgGACQgHACgHAAIgBAAIAAAlgAgCgEIAAAAQABAAABAAQAAAAAAgBQAAAAABAAQAAAAABgBIABgFIAAgLIgBgEQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBAAgBAAIAAAAg");
	this.shape_18.setTransform(113.375,466.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAHAyIgCgTIgJAAIgCATIgXAAIAOhjIAgAAIANBjgAAEAJIgDgaIgBgIIAAAIIgDAaIAHAAg");
	this.shape_19.setTransform(107.1,466.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNAyIgLgDIAGgVIAIADIAGABQAEAAABgCQACgBAAgEIAAAAQAAgDgCgDIgGgIIgEgEIgHgIQgDgEgCgEQgCgFAAgHQABgNAGgHQAHgIALAAIAKABIALAEIgGATIgGgBIgFgBQgEAAgCACQAAAAAAAAQAAABAAAAQgBABAAABQAAAAAAABIAAAAQAAADACADIAGAHIACACIACACIAIAHQADAEABAFQACAFAAAHQAAAKgDAGQgDAHgGADQgGADgHABQgHAAgGgCg");
	this.shape_20.setTransform(99.625,466.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGAWIgEgqIAVAAIgEAqg");
	this.shape_21.setTransform(95.4,463.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AADA0QgNAAgIgIQgHgHAAgQIAAgqQAAgPAHgHQAIgIANAAIAAAAIALABIAKADIgJATIgEgBIgEgBQgEABgDADQgBACAAAGIAAAlQAAAFACAEQADACAEAAIAEAAIAFgCIAJATIgLADQgFACgHAAg");
	this.shape_22.setTransform(91.4,466.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgbAuQgIgHAAgOIAAgMQABgHADgFQAEgDAFgBIgEgJIgBgGIAAgHQAAgKACgFQACgGAFgDQAFgCAJAAQAHAAADACQAFADACAFQABAGAAAKIAAAGIAAAHQgBAEgEADQgDADgFACIAJAMIgCgFIAAgHIATAAIAAAMIgBAKIgDAJIAMATIgXAAIgCgDIgGADIgHACQgRAAgHgGgAgMAQIAAADIAAADQAAAFACADQADACAFAAIABAAIABAAIgMgTgAgGgeIgBAEIAAALIAAACIAAABIAEgCIABgEIAAgIIAAgEIgCgBIgCABg");
	this.shape_23.setTransform(84.5,466.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKAyIAAhNIgPAAIAAgWIAzAAIAAAWIgOAAIAABNg");
	this.shape_24.setTransform(77.975,466.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJBAIAAh/IATAAIAAB/g");
	this.shape_25.setTransform(68.675,467.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNAxQgFgDgEgGQgDgFAAgJIAAgMIAAgFIABgGIABgDIAJgaIAKgZIAVAAIgHASIgIASIABAAIABAAQAMAAAFAHQAFAHAAALIAAAMQAAAJgDAGQgDAHgGAEQgFADgJABQgHAAgGgDgAgCAHIAAAUIABACIABABIACgBIABgCIAAgUIgBgDIgCgBIgBAAIgBAEg");
	this.shape_26.setTransform(58.95,466.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMAxQgGgDgEgGQgDgFAAgJIAAgMIAAgFIABgGIABgDIAJgaIAKgZIAVAAIgIASIgHASIABAAIABAAQAMAAAFAHQAFAHAAALIAAAMQAAAJgDAGQgDAHgGAEQgFADgJABQgHAAgFgDgAgCAHIAAAUIABACIABABIACgBIABgCIAAgUIgBgDIgCgBIgBAAIgBAEg");
	this.shape_27.setTransform(53,466.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgYAzIAAgUIANgRQAHgJAEgHQADgJABgGIAAgBQgBgEgBgCQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAAAgBAAIgEgBIgHABIgGACIgHgUIALgDQAHgCAHAAQAIAAAGAEQAGAEADAHQADAHAAAJIAAAAQAAAIgCAHIgHAMIgIAMIgJAKIAYAAIAAAVg");
	this.shape_28.setTransform(47.15,465.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNAyIgLgDIAGgVIAIADIAGABQAEAAABgCQACgBAAgEIAAAAQAAgDgCgDIgGgIIgEgEIgHgIQgDgEgCgEQgCgFAAgHQABgNAGgHQAHgIALAAIAKABIALAEIgGATIgGgBIgFgBQgEAAgCACQAAAAAAAAQAAABAAAAQgBABAAABQAAAAAAABIAAAAQAAADACADIAGAHIACACIACACIAIAHQADAEABAFQACAFAAAHQAAAKgDAGQgDAHgGADQgGADgHABQgHAAgGgCg");
	this.shape_29.setTransform(40.075,466.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWAyIAAhjIAsAAIAAAVIgVAAIAAARIARAAIAAAVIgRAAIAAATIAVAAIAAAVg");
	this.shape_30.setTransform(35.1,466.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLAyIAAhjIAXAAIAABjg");
	this.shape_31.setTransform(30.975,466.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAEAyIgHgmIgBAAIAAAmIgYAAIAAhjIAZAAQAKAAAHADQAGAEACAGQADAGAAAIIAAAIQAAAHgCAGQgCAEgEADIAMAsgAgEgGIABAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBIAAgKQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgBAAg");
	this.shape_32.setTransform(26.225,466.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgWAyIAAhjIAsAAIAAAVIgVAAIAAARIARAAIAAAVIgRAAIAAATIAVAAIAAAVg");
	this.shape_33.setTransform(20.65,466.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNAyIgLgDIAGgVIAIADIAGABQAEAAABgCQACgBAAgEIAAAAQAAgDgCgDIgGgIIgEgEIgHgIQgDgEgCgEQgCgFAAgHQABgNAGgHQAHgIALAAIAKABIALAEIgGATIgGgBIgFgBQgEAAgCACQAAAAAAAAQAAABAAAAQgBABAAABQAAAAAAABIAAAAQAAADACADIAGAHIACACIACACIAIAHQADAEABAFQACAFAAAHQAAAKgDAGQgDAHgGADQgGADgHABQgHAAgGgCg");
	this.shape_34.setTransform(15.425,466.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(283));

	// footer_bg
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5050F").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_35.setTransform(160,467.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(283));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(160,36.5,0.8182,0.8182);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(250).to({alpha:0},16).wait(17));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(160,380.95,0.5745,0.5745,0,0,0,0,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(266).to({_off:false},0).wait(1).to({regX:0.1,regY:14.2,x:160.05,y:388.9,alpha:0.0032},0).wait(1).to({y:388.5,alpha:0.0145},0).wait(1).to({y:387.7,alpha:0.0371},0).wait(1).to({y:386.3,alpha:0.077},0).wait(1).to({y:383.85,alpha:0.1467},0).wait(1).to({y:379.55,alpha:0.2672},0).wait(1).to({y:374.3,alpha:0.4164},0).wait(1).to({y:369.05,alpha:0.5648},0).wait(1).to({y:364.65,alpha:0.6887},0).wait(1).to({y:361.2,alpha:0.7859},0).wait(1).to({y:358.5,alpha:0.8625},0).wait(1).to({y:356.35,alpha:0.9229},0).wait(1).to({y:354.95,alpha:0.9628},0).wait(1).to({y:354.15,alpha:0.9857},0).wait(1).to({y:353.75,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:160,y:345.55,alpha:1},0).wait(1));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(-164.95,220,0.7981,0.7981);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(250).to({_off:false},0).wait(1).to({x:-163.9045},0).wait(1).to({x:-160.2473},0).wait(1).to({x:-152.8876},0).wait(1).to({x:-139.9255},0).wait(1).to({x:-117.2756},0).wait(1).to({x:-78.1384},0).wait(1).to({x:-29.632},0).wait(1).to({x:18.5898},0).wait(1).to({x:58.8494},0).wait(1).to({x:90.4415},0).wait(1).to({x:115.3153},0).wait(1).to({x:134.9538},0).wait(1).to({x:147.9212},0).wait(1).to({x:155.3556},0).wait(1).to({x:158.9796},0).wait(1).to({x:160},0).wait(17));

	// main_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(157.2,425.65);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:-0.4,regY:-4.1,x:156.75,y:421.45,alpha:0.0037},0).wait(1).to({y:421.2,alpha:0.0167},0).wait(1).to({y:420.65,alpha:0.0435},0).wait(1).to({y:419.7,alpha:0.0919},0).wait(1).to({y:417.95,alpha:0.1816},0).wait(1).to({x:156.7,y:415.15,alpha:0.3248},0).wait(1).to({y:411.95,alpha:0.4878},0).wait(1).to({x:156.65,y:409.05,alpha:0.6345},0).wait(1).to({y:406.8,alpha:0.7499},0).wait(1).to({x:156.6,y:405.05,alpha:0.8388},0).wait(1).to({y:403.65,alpha:0.9088},0).wait(1).to({y:402.75,alpha:0.9564},0).wait(1).to({y:402.2,alpha:0.9834},0).wait(1).to({y:401.95,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:157,y:406,alpha:1},0).wait(60).to({x:157.2,y:405.65},0).wait(1).to({regX:-0.4,regY:-4.1,x:156.8,y:401.6,alpha:0.9963},0).wait(1).to({y:401.85,alpha:0.9833},0).wait(1).to({y:402.4,alpha:0.9565},0).wait(1).to({y:403.35,alpha:0.9081},0).wait(1).to({y:405.15,alpha:0.8184},0).wait(1).to({y:408,alpha:0.6752},0).wait(1).to({y:411.3,alpha:0.5122},0).wait(1).to({y:414.2,alpha:0.3655},0).wait(1).to({y:416.5,alpha:0.2501},0).wait(1).to({y:418.3,alpha:0.1612},0).wait(1).to({y:419.7,alpha:0.0912},0).wait(1).to({y:420.65,alpha:0.0436},0).wait(1).to({y:421.2,alpha:0.0166},0).wait(1).to({y:421.45,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:157.2,y:425.65,alpha:0},0).to({_off:true},1).wait(177));

	// other_prize
	this.instance_5 = new lib.other_prize_mc();
	this.instance_5.setTransform(160,424.5,0.7349,0.7349);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(174).to({_off:false},0).wait(1).to({y:424.4292,alpha:0.0032},0).wait(1).to({y:424.1816,alpha:0.0145},0).wait(1).to({y:423.6833,alpha:0.0371},0).wait(1).to({y:422.8058,alpha:0.077},0).wait(1).to({y:421.2723,alpha:0.1467},0).wait(1).to({y:418.6226,alpha:0.2672},0).wait(1).to({y:415.3386,alpha:0.4164},0).wait(1).to({y:412.0739,alpha:0.5648},0).wait(1).to({y:409.3482,alpha:0.6887},0).wait(1).to({y:407.2093,alpha:0.7859},0).wait(1).to({y:405.5253,alpha:0.8625},0).wait(1).to({y:404.1957,alpha:0.9229},0).wait(1).to({y:403.3178,alpha:0.9628},0).wait(1).to({y:402.8144,alpha:0.9857},0).wait(1).to({y:402.5691,alpha:0.9969},0).wait(1).to({y:402.5,alpha:1},0).wait(61).to({x:160.8687},0).wait(1).to({x:163.9074},0).wait(1).to({x:170.0226},0).wait(1).to({x:180.7928},0).wait(1).to({x:199.6125},0).wait(1).to({x:232.1315},0).wait(1).to({x:272.4353},0).wait(1).to({x:312.5027},0).wait(1).to({x:345.9543},0).wait(1).to({x:372.204},0).wait(1).to({x:392.8716},0).wait(1).to({x:409.1892},0).wait(1).to({x:419.9638},0).wait(1).to({x:426.141},0).wait(1).to({x:429.1521},0).wait(1).to({x:430},0).wait(17));

	// sub_caption
	this.instance_6 = new lib.daily_sub_caption_mc();
	this.instance_6.setTransform(157.2,425.65);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({regX:0.1,regY:2.4,x:157.25,y:427.95,alpha:0.0037},0).wait(1).to({y:427.7,alpha:0.0167},0).wait(1).to({y:427.15,alpha:0.0435},0).wait(1).to({y:426.2,alpha:0.0919},0).wait(1).to({y:424.45,alpha:0.1816},0).wait(1).to({x:157.2,y:421.65,alpha:0.3248},0).wait(1).to({y:418.45,alpha:0.4878},0).wait(1).to({x:157.15,y:415.55,alpha:0.6345},0).wait(1).to({y:413.3,alpha:0.7499},0).wait(1).to({x:157.1,y:411.55,alpha:0.8388},0).wait(1).to({y:410.15,alpha:0.9088},0).wait(1).to({y:409.25,alpha:0.9564},0).wait(1).to({y:408.7,alpha:0.9834},0).wait(1).to({y:408.45,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:157,y:406,alpha:1},0).wait(61).to({x:157.2,y:405.65},0).wait(1).to({regX:0.1,regY:2.4,x:157.3,y:408.1,alpha:0.9968},0).wait(1).to({y:408.3,alpha:0.9855},0).wait(1).to({y:408.75,alpha:0.9629},0).wait(1).to({y:409.55,alpha:0.923},0).wait(1).to({y:410.95,alpha:0.8533},0).wait(1).to({y:413.35,alpha:0.7328},0).wait(1).to({y:416.35,alpha:0.5836},0).wait(1).to({y:419.3,alpha:0.4352},0).wait(1).to({y:421.8,alpha:0.3113},0).wait(1).to({y:423.75,alpha:0.2141},0).wait(1).to({y:425.25,alpha:0.1375},0).wait(1).to({y:426.5,alpha:0.0771},0).wait(1).to({y:427.3,alpha:0.0372},0).wait(1).to({y:427.75,alpha:0.0143},0).wait(1).to({y:427.95,alpha:0.0031},0).wait(1).to({regX:0,regY:0,x:157.2,y:425.65,alpha:0},0).wait(93));

	// second_prize_mc
	this.instance_7 = new lib.second_prize_mc();
	this.instance_7.setTransform(164,254);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(98).to({_off:false},0).wait(1).to({y:253.9078,alpha:0.0037},0).wait(1).to({y:253.5815,alpha:0.0167},0).wait(1).to({y:252.9135,alpha:0.0435},0).wait(1).to({y:251.7035,alpha:0.0919},0).wait(1).to({y:249.4609,alpha:0.1816},0).wait(1).to({y:245.8801,alpha:0.3248},0).wait(1).to({y:241.8056,alpha:0.4878},0).wait(1).to({y:238.1386,alpha:0.6345},0).wait(1).to({y:235.2522,alpha:0.7499},0).wait(1).to({y:233.0302,alpha:0.8388},0).wait(1).to({y:231.2809,alpha:0.9088},0).wait(1).to({y:230.0901,alpha:0.9564},0).wait(1).to({y:229.4141,alpha:0.9834},0).wait(1).to({y:229.0901,alpha:0.9964},0).wait(1).to({y:229,alpha:1},0).wait(138).to({x:164.9886},0).wait(1).to({x:168.4465},0).wait(1).to({x:175.4054},0).wait(1).to({x:187.6614},0).wait(1).to({x:209.0776},0).wait(1).to({x:246.0829},0).wait(1).to({x:291.9472},0).wait(1).to({x:337.5424},0).wait(1).to({x:375.6091},0).wait(1).to({x:405.4803},0).wait(1).to({x:428.9992},0).wait(1).to({x:447.568},0).wait(1).to({x:459.8292},0).wait(1).to({x:466.8586},0).wait(1).to({x:470.2852},0).wait(1).to({x:471.25},0).wait(17));

	// promo
	this.instance_8 = new lib.promo_mc();
	this.instance_8.setTransform(439.95,224,0.8327,0.8327);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({x:438.9174,alpha:0.0037},0).wait(1).to({x:435.2636,alpha:0.0167},0).wait(1).to({x:427.7834,alpha:0.0435},0).wait(1).to({x:414.2342,alpha:0.0919},0).wait(1).to({x:389.1215,alpha:0.1816},0).wait(1).to({x:349.0231,alpha:0.3248},0).wait(1).to({x:303.3975,alpha:0.4878},0).wait(1).to({x:262.3345,alpha:0.6345},0).wait(1).to({x:230.0125,alpha:0.7499},0).wait(1).to({x:205.1298,alpha:0.8388},0).wait(1).to({x:185.5412,alpha:0.9088},0).wait(1).to({x:172.2071,alpha:0.9564},0).wait(1).to({x:164.6372,alpha:0.9834},0).wait(1).to({x:161.0084,alpha:0.9964},0).wait(1).to({x:160,alpha:1},0).wait(83).to({alpha:0},15).to({_off:true},1).wait(169));

	// background
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5050F").s().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/g");
	this.shape_36.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-159,240,769.3,240);
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