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



(lib._160x600 = function() {
	this.initialize(img._160x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib._2ndprize = function() {
	this.initialize(img._2ndprize);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,283,247);


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
	this.instance.setTransform(-288,-1010,1.4938,1.4938);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-288,-1010,576.6,310.70000000000005), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgRAcIgBgMQAFACAFAAIAEgBQACgBABgEIgDAAQgFAAgEgDQgEgEADgGIAFgcIAMAAIgFAbQAAABAAAAQAAABABAAQAAAAAAAAQAAAAABAAIABAAIAFgdIAOAAIgJAqQgCAJgFAEQgEAEgHAAIgKgCg");
	this.shape.setTransform(42.5,6.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAeIAMg7IANAAIgNA7g");
	this.shape_1.setTransform(40.025,4.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAcIAMg5IAMAAIgDAPIACAAQAIAAACAEQADAEgCAHIgDANQgCAIgEAFQgEADgHAAQgGAAgIgCgAgCASIABAAIABgBQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIACgNQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_2.setTransform(37.1194,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAfIAJgqIAMAAIgJAqgAAAgSQAAgCAAgEQAAgCACgCQACgCADAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQgBAEgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_3.setTransform(34.6063,4.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAVIAEgNQAFACAEAAQAEAAAAgBIAAgCIgBgBIgBgBIgCAAQgIgFACgJQABgFAEgEQAEgEAGAAIALACIgDAMIgIgCQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAIAAABIACACIACABQAFACABACQACADgBAFQgBAHgFAEQgEAEgHAAQgGAAgGgCg");
	this.shape_4.setTransform(31.975,5.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBAWIAGgdQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBAAIgGAfIgNAAIAJgpQAIgCAHAAQAOAAgDANIgHAeg");
	this.shape_5.setTransform(28.6765,5.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAHIACgNQAEgPAOAAQAOAAgDAPIgDANQgDAQgOAAQgPAAAEgQgAAAgGIgDANQAAABAAABQAAAAABABQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBAAgBIADgNQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQAAABAAABg");
	this.shape_6.setTransform(25.3509,5.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAeIANg7IAOAAQAIAAACADQADAEgCAJIgDANQgCAHgEAEQgEAEgHAAIgBAAIgEAPgAAAADIAAAAIACgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAIACgNQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_7.setTransform(21.6694,6.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAVIAEgNQAFACAEAAQAEAAAAgBIAAgCIgBgBIgBgBIgCAAQgIgFACgJQABgFAEgEQAEgEAGAAIALACIgDAMIgIgCQgBAAgBAAQgBAAAAABQAAAAgBAAQAAABAAAAIAAABIACACIACABQAFACABACQACADgBAFQgBAHgFAEQgEAEgHAAQgGAAgGgCg");
	this.shape_8.setTransform(18.625,5.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNASQgDgEACgIIACgMQACgIAFgEQAEgEAHABQAHgBACAEQACAEgBAIIgCAKIgPAAIAAACQgBAFAFgBIAGAAIgBAMIgJABQgIAAgEgFgAABgHIgBAEIADAAIABgEIAAgCIgBgBQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAABg");
	this.shape_9.setTransform(15.5458,5.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAeIAAgXIgBAAIgFAXIgOAAIANg7IAOAAQAJAAADAEQACAFgBAIIgBAEQgCAIgFAEIABAagAAAgDIABAAIACgBIACgDIABgFIAAgDIgCgBIgBAAg");
	this.shape_10.setTransform(11.9031,4.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAcIAAgMQAFACAEAAIAGgBQABgBABgEIgCAAQgHAAgDgDQgDgEABgGIAGgcIAMAAIgEAbQgBABAAAAQAAABABAAQAAAAAAAAQABAAAAAAIAAAAIAHgdIAMAAIgJAqQgCAJgEAEQgEAEgIAAIgKgCg");
	this.shape_11.setTransform(7.35,6.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOATQgDgDABgHIABAAQABgHAEgCQAEgEAGABIADAAIAAgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIgDAAQgEgBgGACIAGgMIAEgBIAEAAQAJgBACAEQADAEgCAHIgFAbQgKADgFAAQgHAAgDgEgAgBAFIgBACIAAABQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAIAAAAIABgIIAAAAIgCABg");
	this.shape_12.setTransform(3.8757,5.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMAeIAMg7IANAAIgNA7g");
	this.shape_13.setTransform(1.475,4.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAeIANg7IANAAQAKAAADAEQACAFgBAIIgBAFQgCAIgFADQgFAEgIAAIAAAAIgFAWgAAAgCIABAAIACgBIABgDIACgGIAAgDIgCgBIgBAAg");
	this.shape_14.setTransform(-1.4469,4.775);

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
	this.shape.graphics.f("#FFFFFF").s().p("AhoDtIAAnaIDQAAIAABmIhkAAIAABRIBRAAIAABlIhRAAIAABZIBlAAIAABlg");
	this.shape.setTransform(54.825,-209.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah7DtIAAhfICDkUIhzAAIAAhnIDnAAIAABgIiGEUICFAAIAABmg");
	this.shape_1.setTransform(29.025,-209.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1DtIAAnaIBsAAIAAHag");
	this.shape_2.setTransform(8.3,-209.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATDtIgli1IgHAAIAAC1IhtAAIAAnaIB0AAQBLAAAeAiQAeAigBBAIAAAjQAABFgjAeIA2DQgAgZgfIAFAAQAOAAAGgGQAFgGAAgQIAAguQAAgQgFgGQgGgGgOAAIgFAAg");
	this.shape_3.setTransform(-14.15,-209.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah8DtIAAnaIB0AAQBKAAAeAiQAdAiAABAIAAAoQAABHgjAcQgjAdg/AAIgHAAIAACugAgPgYIAEAAQANgBAGgGQAGgHAAgPIAAg0QAAgQgGgGQgGgGgNAAIgEAAg");
	this.shape_4.setTransform(-43.7,-209.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah9DtIAAnaIB1AAQA6AAAmAnQAmAlAABAIAAC/QAABBgmAoQgmAmg6AAgAgQCHIAEAAQAQAAAEgIQAFgHAAgUIAAjMQAAgTgGgFQgGgFgNAAIgEAAg");
	this.shape_5.setTransform(64.325,-286.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAADtIgfkrIAAErIhtAAIAAnaICPAAIAdElIAAklIBtAAIAAHag");
	this.shape_6.setTransform(34.15,-286.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAjDtIgIhcIg0AAIgJBcIhrAAIA/naICdAAIA/HagAgBhTIgOB/IAfAAIgNh/IgDgog");
	this.shape_7.setTransform(2.975,-286.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AATDtIgli1IgHAAIAAC1IhtAAIAAnaIB0AAQBLAAAeAiQAeAigBBAIAAAjQAABFgjAdIA2DRgAgZgfIAFAAQAOABAGgHQAFgGAAgQIAAguQAAgPgFgHQgGgGgOAAIgFAAg");
	this.shape_8.setTransform(-27.65,-286.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah9BxIAAjhQAAg9AngjQAngkA9AAQA6AAA2AeIgnBeQgbgPghAAQgpAAAAAvIAADQQAAAWAQAAQAIAAAEgDIAAiqIBnAAIAADyQggASgZAIQgYAIggAAQiBAAAAiEg");
	this.shape_9.setTransform(-56.225,-286.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhoDtIAAnZIDQAAIAABlIhkAAIAABRIBRAAIAABkIhRAAIAABaIBlAAIAABlg");
	this.shape_10.setTransform(100.225,-363.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag1DtIAAlvIhDAAIAAhqIDxAAIAABqIhCAAIAAFvg");
	this.shape_11.setTransform(75.525,-363.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAjDtIgIhcIg0AAIgJBcIhrAAIA/nZICdAAIA/HZgAgBhTIgOB/IAfAAIgNh/IgDgog");
	this.shape_12.setTransform(47.725,-363.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABODtIAAliIgFA2IggEsIhRAAIghksIgEg2IAAFiIhqAAIAAnZICmAAIAPDhIACAjIADgjIARjhICkAAIAAHZg");
	this.shape_13.setTransform(12.275,-363.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag2DtIAAnZIBsAAIAAHZg");
	this.shape_14.setTransform(-15.05,-363.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag1DtIAAlvIhDAAIAAhqIDxAAIAABqIhCAAIAAFvg");
	this.shape_15.setTransform(-34.675,-363.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhuDtIAAnZIBtAAIAAFuIBwAAIAABrg");
	this.shape_16.setTransform(-60.55,-363.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhbDRQgiggAAg+IAAliIBvAAIAAFlQAAAUAOAAQAPAAAAgUIAAllIBvAAIAAFiQAAA6ggAiQggAhg9AAQg5AAgjgfg");
	this.shape_17.setTransform(-88.375,-363.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhoDtIAAnZIDQAAIAABlIhkAAIAABRIBRAAIAABkIhRAAIAABaIBlAAIAABlg");
	this.shape_18.setTransform(30.875,-440.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAPDtIAAi7IgdAAIAAC7IhtAAIAAnZIBtAAIAACzIAdAAIAAizIBtAAIAAHZg");
	this.shape_19.setTransform(4.45,-440.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag1DtIAAluIhDAAIAAhrIDxAAIAABrIhCAAIAAFug");
	this.shape_20.setTransform(-21.525,-440.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-105.3,-477.9,218.7,318.79999999999995), null);


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
	this.instance.setTransform(-109,-127,1.0211,1.0211);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.secondprize_mc, new cjs.Rectangle(-109,-127,289,252.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgrDnQgSgOAAgcQAAgYASgPQARgPAagBQAaABATAPQARAPABAYQgBAcgRAOQgTANgaAAQgaAAgRgNgAg2BSIAAlGIBuAAIAAFGg");
	this.shape.setTransform(60.6,-186.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQDxIgrjdIAADdIhvAAIAAnhIBvAAIAADcIAqjcIB0AAIg7DjIBDD+g");
	this.shape_1.setTransform(34.025,-186.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhqDxIAAnhIDUAAIAABmIhmAAIAABTIBTAAIAABmIhTAAIAABbIBnAAIAABng");
	this.shape_2.setTransform(6.45,-186.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhqDxIAAnhIDUAAIAABmIhmAAIAABTIBTAAIAABmIhTAAIAABbIBnAAIAABng");
	this.shape_3.setTransform(-17.35,-186.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVDxIgVkhIgUEhIiPAAIgjnhIB1AAIAFFxIAglxIBZAAIAgFxIAFlxIB1AAIgjHhg");
	this.shape_4.setTransform(-50.875,-186.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhwDxIAAnhIBvAAIAAF0IByAAIAABtg");
	this.shape_5.setTransform(50.8,-257.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjDxIgIheIg1AAIgJBeIhsAAIA/nhICgAAIBAHhgAgBhUIgOCAIAfAAIgOiAIgCgpg");
	this.shape_6.setTransform(22.2,-257.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAADxIgfkxIAAExIhvAAIAAnhICRAAIAeEpIAAkpIBuAAIAAHhg");
	this.shape_7.setTransform(-9.5,-257.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2DxIAAnhIBtAAIAAHhg");
	this.shape_8.setTransform(-32.9,-257.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhtDxIAAnhIDbAAIAABmIhtAAIAABTIBaAAIAABmIhaAAIAADCg");
	this.shape_9.setTransform(-51.725,-257.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhqDxIAAnhIDUAAIAABmIhmAAIAABTIBTAAIAABmIhTAAIAABbIBnAAIAABng");
	this.shape_10.setTransform(84.1,-328.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAPDxIAAi+IgdAAIAAC+IhvAAIAAnhIBvAAIAAC2IAdAAIAAi2IBvAAIAAHhg");
	this.shape_11.setTransform(57.275,-328.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag2DxIAAl1IhEAAIAAhsID1AAIAABsIhEAAIAAF1g");
	this.shape_12.setTransform(30.875,-328.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah3DiIAdhkQAvATATAAQAngBAAgeIAAgDQAAgOgKgOQgIgQgYgXIgWgVQghghgPgdQgPgcAAguIAAgBQAAg/AhgjQAfgkA5AAQAuAAA4AXIgdBdQgjgLgRAAQglAAAAAeIAAACQAAAEABAEIAEAIIAFAJIAIAJIAKAKIALANQAOAQAJAGQAiAjAQAcQAPAcAAAxIAAABQAABBgjAlQghAlg5AAQg5AAg5gWg");
	this.shape_13.setTransform(-2.05,-328.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ah3DiIAdhkQAvATATAAQAngBAAgeIAAgDQAAgOgKgOQgIgQgYgXIgWgVQghghgPgdQgPgcAAguIAAgBQAAg/AhgjQAfgkA5AAQAuAAA3AXIgcBdQgjgLgRAAQglAAAAAeIAAACQAAAEABAEIAEAIIAFAJIAIAJIAKAKIALANQAOAQAJAGQAiAjAQAcQAPAcAAAxIAAABQAABBgjAlQghAlg5AAQg5AAg5gWg");
	this.shape_14.setTransform(-27.25,-328.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag2DxIAAnhIBtAAIAAHhg");
	this.shape_15.setTransform(-47.2,-328.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABPDxIAAlpIgFA4IggExIhTAAIghkxIgEg4IAAFpIhsAAIAAnhICoAAIAQDkIACAkIADgkIARjkICnAAIAAHhg");
	this.shape_16.setTransform(-74.975,-328.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag2DxIAAl1IhEAAIAAhsID1AAIAABsIhEAAIAAF1g");
	this.shape_17.setTransform(52.925,-398.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AggBoIgTjOIBoAAIgUDOg");
	this.shape_18.setTransform(32.6,-412.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgBDxIgekxIAAExIhvAAIAAnhICRAAIAdEpIAAkpIBvAAIAAHhg");
	this.shape_19.setTransform(8.9,-398.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAAD4Qg+ABgggjQgigjAAhAIAAjlQABhCAhgiQAighA8gBIABAAQA/ABAgAiQAgAiABBBIAADlQAABDgiAhQggAig+gBgAgOh7IAAD3QAAAVAOAAIAAAAQAPAAAAgVIAAj3QAAgVgPABIAAAAQgOgBAAAVg");
	this.shape_20.setTransform(-21.8,-398.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ah/DxIAAnhIB3AAQA7AAAmAmQAnAnAABBIAADCQAABCgnAnQgmAog6AAgAgQCJIAFAAQAPAAAFgIQAFgHAAgVIAAjPQAAgTgGgFQgGgGgNAAIgFAAg");
	this.shape_21.setTransform(-50.975,-398.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-97.3,-436.8,194.7,301.6), null);


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
	this.instance.setTransform(-269,-167,2.206,2.206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-269,-167,538.3,103.7), null);


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


(lib.background_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._160x600();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_mc, new cjs.Rectangle(-80,-300,160,600), null);


// stage content:
(lib.bigticketawarenesshtml5160x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgTAmIAAhKIATAAQAIAAAGAFQAGAHAAAKIAAAdQAAAKgGAGQgGAHgIAAgAgBAVIAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIABgEIAAggQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape.setTransform(150.45,572.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAgAAIAAAPIgPAAIAAAOIAMAAIAAAPIgMAAIAAANIAQAAIAAARg");
	this.shape_1.setTransform(146.425,572.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAFAmIgBgPIgHAAIgCAPIgQAAIAJhKIAYAAIAKBKgAAAgMIgCATIAEAAIgCgTIAAgGg");
	this.shape_2.setTransform(142.125,572.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAmIgEgvIAAAvIgRAAIAAhKIAWAAIAEAtIAAgtIARAAIAABKg");
	this.shape_3.setTransform(135.975,572.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAmIAAhKIARAAIAABKg");
	this.shape_4.setTransform(132.375,572.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAjIAEgQQAHADADAAQAGAAgBgEIAAgBIgBgFIgFgFIgDgEQgFgDgCgFQgDgFABgGIAAgBQAAgJAEgGQAFgGAJABQAHAAAIADIgFAOIgIgCQgEAAAAAGIAAABIAAABIABABIABACIABACIACACIAEADIAIAIQACAFAAAIQAAAKgGAFQgFAHgIgBQgJAAgIgDg");
	this.shape_5.setTransform(128.1,572.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAgAAIAAAPIgPAAIAAAOIAMAAIAAAPIgMAAIAAANIAQAAIAAARg");
	this.shape_6.setTransform(124.375,572.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAmIAAgQIATgqIgRAAIAAgQIAkAAIAAAOIgVArIAUAAIAAARg");
	this.shape_7.setTransform(120.35,572.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAmIAAhKIARAAIAABKg");
	this.shape_8.setTransform(117.025,572.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AADAmIgFgdIgBAAIAAAdIgSAAIAAhKIATAAQALgBAEAGQAFAFABAKIAAAGQAAAKgGAEIAJAigAgDgEIABAAIACgBIABgDIAAgIIgBgDIgCgBIgBAAg");
	this.shape_9.setTransform(113.5,572.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAmIAAhKIATAAQALgBAEAGQAFAFAAAKIAAAHQAAAKgGAEQgFAFgJAAIgBAAIAAAcgAgBgDIAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIABgDIAAgJIgBgDQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_10.setTransform(108.825,572.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGAwIAAhfIANAAIAABfg");
	this.shape_11.setTransform(101.6,573.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAmIAAgVIgOg1IASAAIAEAYIAFgYIASAAIgOA1IAAAVg");
	this.shape_12.setTransform(94.175,572.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAQAAIAAA4IASAAIAAASg");
	this.shape_13.setTransform(89.65,572.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAmIAAhKIATAAQALgBAEAGQAFAFAAAKIAAAHQAAAKgGAEQgFAFgJAAIgBAAIAAAcgAgBgDIAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIABgDIAAgJIgBgDQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_14.setTransform(85.375,572.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAmIAAhKIATAAQALgBAEAGQAFAFAAAKIAAAHQAAAKgGAEQgFAFgJAAIgBAAIAAAcgAgBgDIAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIABgDIAAgJIgBgDQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_15.setTransform(80.875,572.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAFAmIgBgPIgHAAIgCAPIgQAAIAJhKIAYAAIAKBKgAAAgMIgCATIAEAAIgCgTIAAgGg");
	this.shape_16.setTransform(76.275,572.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSAjIAFgQQAHADAEAAQAEAAAAgEIAAgBIgBgFIgEgFIgEgEQgFgDgCgFQgCgFgBgGIAAgBQAAgJAGgGQAFgGAHABQAIAAAIADIgFAOIgHgCQgFAAAAAGIAAABIAAABIAAABIABACIACACIACACIADADIAJAIQABAFAAAIQAAAKgEAFQgGAHgIgBQgIAAgKgDg");
	this.shape_17.setTransform(70.7,572.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEAQIgDgfIAPAAIgDAfg");
	this.shape_18.setTransform(67.525,570.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNAhQgFgGAAgLIAAgfQAAgLAFgGQAGgGAKABQAIAAAHADIgHANIgGgBQgFABAAAHIAAAcQAAAEABACQACACADAAIAHgBIAGAOQgIADgIAAQgKAAgGgFg");
	this.shape_19.setTransform(64.55,572.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAiQgFgFgBgKIAAgJQAAgFADgEQADgCAEAAQgEgHABgGIAAgEQgBgLAEgFQADgDALAAQAGAAAEADQADAFAAALIAAAEQAAALgLADIAHAJIgBgJIAOAAIAAAEIAAAEIAAADIgBAEIAAADIgBACIgBADIAJAPIgRAAIgBgDQgFADgFAAQgMAAgGgEgAgJALIAAAGQABADABACQABACAFAAIABgBIgJgNgAgFgWIAAABIAAACIAAAJIAAACQAEgBAAgEIAAgGIAAgDIgCgBIgCABg");
	this.shape_20.setTransform(59.45,572.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgIAmIAAg5IgKAAIAAgRIAlAAIAAARIgLAAIAAA5g");
	this.shape_21.setTransform(54.6,572.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHAwIAAhfIAPAAIAABfg");
	this.shape_22.setTransform(47.65,573.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEAmIAAg3IgHACIAAgQIAXgGIAABLg");
	this.shape_23.setTransform(40.9,572.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgNAhQgGgGABgJIAAgGQAAgHAEgFQgDgFAAgHIAAgEQAAgLAFgFQAFgGAHABQAJgBAEAGQAGAFAAALIAAAEQgBAHgDAFQAEAFAAAHIAAAGQABAKgGAFQgFAFgJAAQgHAAgGgFgAAAAJIAAALQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgLQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABgAAAgTIAAANIAAABIAAABIABgBIABgBIAAgNQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABg");
	this.shape_24.setTransform(37.2,572.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAmIAAgPQAVgXAAgMIAAgBQAAgFgCgBIgEgBIgKABIgFgOQAIgEAKAAQAJAAAFAHQAFAGAAAKQAAAFgBAGIgFAJIgGAIIgHAIIARAAIAAAQg");
	this.shape_25.setTransform(32.875,572.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgSAjIAFgQQAHADAEAAQAEAAAAgEIAAgBIgBgFIgEgFIgEgEQgFgDgCgFQgCgFgBgGIAAgBQAAgJAGgGQAFgGAHABQAIAAAIADIgEAOIgIgCQgFAAAAAGIAAABIAAABIAAABIABACIADACIABACIADADIAIAIQACAFAAAIQAAAKgEAFQgGAHgIgBQgIAAgKgDg");
	this.shape_26.setTransform(27.6,572.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAgAAIAAAPIgPAAIAAAOIAMAAIAAAPIgMAAIAAANIAQAAIAAARg");
	this.shape_27.setTransform(23.925,572.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgIAmIAAhKIARAAIAABKg");
	this.shape_28.setTransform(20.825,572.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AADAmIgFgdIgBAAIAAAdIgSAAIAAhKIATAAQALgBAEAGQAGAFAAAKIAAAGQgBAKgFAEIAIAigAgDgEIABAAIACgBIABgDIAAgIIgBgDIgCgBIgBAAg");
	this.shape_29.setTransform(17.3,572.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAgAAIAAAPIgPAAIAAAOIAMAAIAAAPIgMAAIAAANIAQAAIAAARg");
	this.shape_30.setTransform(13.175,572.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgRAjIAEgQQAHADADAAQAGAAgBgEIAAgBIgBgFIgFgFIgCgEQgGgDgCgFQgDgFABgGIAAgBQAAgJAEgGQAGgGAHABQAIAAAIADIgFAOIgIgCQgEAAAAAGIAAABIAAABIABABIAAACIACACIACACIAEADIAIAIQACAFAAAIQAAAKgGAFQgFAHgIgBQgJAAgIgDg");
	this.shape_31.setTransform(9.3,572.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(319));

	// logo
	this.instance_2 = new lib.bt_logo();
	this.instance_2.setTransform(80,378.25,0.4091,0.4091);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(211).to({alpha:0},16).wait(92));

	// cta
	this.instance_3 = new lib.cta_mc();
	this.instance_3.setTransform(243.35,550.5,0.2872,0.2872,0,0,0,0,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(227).to({_off:false},0).wait(1).to({regX:0.1,regY:-115.2,x:242.85,y:517.25,alpha:0.0032},0).wait(1).to({x:241,y:517.05,alpha:0.0145},0).wait(1).to({x:237.3,y:516.65,alpha:0.0371},0).wait(1).to({x:230.8,y:515.95,alpha:0.077},0).wait(1).to({x:219.4,y:514.75,alpha:0.1467},0).wait(1).to({x:199.75,y:512.6,alpha:0.2672},0).wait(1).to({x:175.35,y:509.95,alpha:0.4164},0).wait(1).to({x:151.1,y:507.35,alpha:0.5648},0).wait(1).to({x:130.85,y:505.15,alpha:0.6887},0).wait(1).to({x:115,y:503.4,alpha:0.7859},0).wait(1).to({x:102.5,y:502.05,alpha:0.8625},0).wait(1).to({x:92.6,y:501,alpha:0.9229},0).wait(1).to({x:86.1,y:500.3,alpha:0.9628},0).wait(1).to({x:82.35,y:499.9,alpha:0.9857},0).wait(1).to({x:80.55,y:499.7,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:80,y:532.8,alpha:1},0).wait(76));

	// ticket
	this.instance_4 = new lib.ticket_mc();
	this.instance_4.setTransform(-119.45,470,0.399,0.399);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(211).to({_off:false},0).wait(1).to({regX:0.3,regY:-854.6,x:-118.7,y:129},0).wait(1).to({x:-116.45},0).wait(1).to({x:-111.9},0).wait(1).to({x:-103.95},0).wait(1).to({x:-90.05},0).wait(1).to({x:-66.05},0).wait(1).to({x:-36.25},0).wait(1).to({x:-6.65},0).wait(1).to({x:18.05},0).wait(1).to({x:37.45},0).wait(1).to({x:52.7},0).wait(1).to({x:64.75},0).wait(1).to({x:72.7},0).wait(1).to({x:77.3},0).wait(1).to({x:79.5},0).wait(1).to({regX:0.1,regY:0,x:80.05,y:470},0).wait(92));

	// main_caption
	this.instance_5 = new lib.sub_caption_mc();
	this.instance_5.setTransform(78.6,572.85,0.5,0.5,0,0,0,0,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).wait(1).to({regX:4.9,regY:-325.2,x:81.05,y:410.15,alpha:0.0032},0).wait(1).to({y:410.05,alpha:0.0145},0).wait(1).to({y:409.8,alpha:0.0371},0).wait(1).to({y:409.4,alpha:0.077},0).wait(1).to({y:408.7,alpha:0.1467},0).wait(1).to({y:407.5,alpha:0.2672},0).wait(1).to({y:406,alpha:0.4164},0).wait(1).to({y:404.55,alpha:0.5648},0).wait(1).to({y:403.3,alpha:0.6887},0).wait(1).to({y:402.3,alpha:0.7859},0).wait(1).to({y:401.55,alpha:0.8625},0).wait(1).to({y:400.95,alpha:0.9229},0).wait(1).to({y:400.55,alpha:0.9628},0).wait(1).to({y:400.3,alpha:0.9857},0).wait(1).to({y:400.2,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:78.6,y:562.85,alpha:1},0).wait(59).to({y:572.85,alpha:0},16).to({_off:true},70).wait(143));

	// sub_caption
	this.instance_6 = new lib.daily_caption_mc();
	this.instance_6.setTransform(78.6,572.85,0.5,0.5,0,0,0,0,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({regX:0.6,regY:-292.9,x:78.9,y:426.3,alpha:0.0032},0).wait(1).to({y:426.2,alpha:0.0145},0).wait(1).to({y:425.95,alpha:0.0371},0).wait(1).to({y:425.55,alpha:0.077},0).wait(1).to({y:424.85,alpha:0.1467},0).wait(1).to({y:423.65,alpha:0.2672},0).wait(1).to({y:422.15,alpha:0.4164},0).wait(1).to({y:420.7,alpha:0.5648},0).wait(1).to({y:419.45,alpha:0.6887},0).wait(1).to({y:418.45,alpha:0.7859},0).wait(1).to({y:417.7,alpha:0.8625},0).wait(1).to({y:417.1,alpha:0.9229},0).wait(1).to({y:416.7,alpha:0.9628},0).wait(1).to({y:416.45,alpha:0.9857},0).wait(1).to({y:416.35,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:78.6,y:562.85,alpha:1},0).wait(98).to({regX:0.6,regY:-292.9,x:79.4,y:416.35},0).wait(1).to({x:81.25},0).wait(1).to({x:84.9},0).wait(1).to({x:91.4},0).wait(1).to({x:102.8},0).wait(1).to({x:122.4},0).wait(1).to({x:146.75},0).wait(1).to({x:170.9},0).wait(1).to({x:191.1},0).wait(1).to({x:206.95},0).wait(1).to({x:219.4},0).wait(1).to({x:229.25},0).wait(1).to({x:235.75},0).wait(1).to({x:239.5},0).wait(1).to({x:241.3},0).wait(1).to({regX:0,regY:0.1,x:241.55,y:562.85},0).to({_off:true},17).wait(75));

	// second_prize
	this.instance_7 = new lib.secondprize_mc();
	this.instance_7.setTransform(-106.25,208.25,0.5432,0.5432,0,0,0,0.2,0.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90).to({_off:false},0).wait(1).to({regX:35.5,regY:-0.9,x:-86.5,y:207.65},0).wait(1).to({x:-84.6},0).wait(1).to({x:-80.8},0).wait(1).to({x:-74.1},0).wait(1).to({x:-62.4},0).wait(1).to({x:-42.15},0).wait(1).to({x:-17.05},0).wait(1).to({x:7.85},0).wait(1).to({x:28.65},0).wait(1).to({x:44.95},0).wait(1).to({x:57.8},0).wait(1).to({x:68},0).wait(1).to({x:74.7},0).wait(1).to({x:78.5},0).wait(1).to({x:80.4},0).wait(1).to({regX:0.2,regY:0.2,x:61.75,y:208.25},0).wait(106).to({regX:35.5,regY:-0.9,scaleX:0.543,scaleY:0.543,x:80.95},0).wait(1).to({scaleX:0.5424,scaleY:0.5424,y:210.5},0).wait(1).to({scaleX:0.5411,scaleY:0.5411,y:215},0).wait(1).to({scaleX:0.5388,scaleY:0.5388,x:81.05,y:222.95},0).wait(1).to({scaleX:0.5349,scaleY:0.5349,x:81.15,y:236.8},0).wait(1).to({scaleX:0.5281,scaleY:0.5281,x:81.3,y:260.75},0).wait(1).to({scaleX:0.5197,scaleY:0.5197,x:81.55,y:290.5},0).wait(1).to({scaleX:0.5113,scaleY:0.5113,x:81.75,y:320},0).wait(1).to({scaleX:0.5043,scaleY:0.5043,x:81.95,y:344.65},0).wait(1).to({scaleX:0.4988,scaleY:0.4988,x:82.05,y:364},0).wait(1).to({scaleX:0.4945,scaleY:0.4945,x:82.2,y:379.2},0).wait(1).to({scaleX:0.491,scaleY:0.491,x:82.3,y:391.25},0).wait(1).to({scaleX:0.4888,scaleY:0.4888,x:82.35,y:399.2},0).wait(1).to({scaleX:0.4875,scaleY:0.4875,y:403.75},0).wait(1).to({scaleX:0.4869,scaleY:0.4869,x:82.4,y:405.95},0).wait(1).to({regX:0.6,regY:0.7,scaleX:0.4867,scaleY:0.4867,x:65.25,y:407.15},0).wait(92));

	// promo
	this.instance_8 = new lib.promo_mc();
	this.instance_8.setTransform(220,472,0.4164,0.4164,0,0,0,0.1,0);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:-0.4,regY:-650.8,x:219.25,y:201.05,alpha:0.0037},0).wait(1).to({x:217.45,alpha:0.0167},0).wait(1).to({x:213.7,alpha:0.0435},0).wait(1).to({x:206.9,alpha:0.0919},0).wait(1).to({x:194.35,alpha:0.1816},0).wait(1).to({x:174.3,alpha:0.3248},0).wait(1).to({x:151.5,alpha:0.4878},0).wait(1).to({x:131,alpha:0.6345},0).wait(1).to({x:114.8,alpha:0.7499},0).wait(1).to({x:102.4,alpha:0.8388},0).wait(1).to({x:92.6,alpha:0.9088},0).wait(1).to({x:85.95,alpha:0.9564},0).wait(1).to({x:82.15,alpha:0.9834},0).wait(1).to({x:80.35,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0,x:80.05,y:472,alpha:1},0).wait(76).to({regX:-0.4,regY:-650.8,x:80.35,y:201.05},0).wait(1).to({x:82.15},0).wait(1).to({x:85.85},0).wait(1).to({x:92.3},0).wait(1).to({x:103.55},0).wait(1).to({x:123.05},0).wait(1).to({x:147.2},0).wait(1).to({x:171.2},0).wait(1).to({x:191.25},0).wait(1).to({x:206.95},0).wait(1).to({x:219.35},0).wait(1).to({x:229.1},0).wait(1).to({x:235.55},0).wait(1).to({x:239.25},0).wait(1).to({x:241.05},0).wait(1).to({regX:0.1,regY:0,x:241.8,y:472},0).wait(106).to({regX:-0.4,regY:-650.8,scaleX:0.4161,scaleY:0.4161,x:241.05,y:201.25},0).wait(1).to({scaleX:0.4153,scaleY:0.4153,x:239.25,y:201.9},0).wait(1).to({scaleX:0.4137,scaleY:0.4137,x:235.6,y:203.3},0).wait(1).to({scaleX:0.4109,scaleY:0.4109,x:229.2,y:205.8},0).wait(1).to({scaleX:0.4059,scaleY:0.4059,x:218,y:210.15},0).wait(1).to({scaleX:0.3973,scaleY:0.3973,x:198.65,y:217.65},0).wait(1).to({scaleX:0.3866,scaleY:0.3866,x:174.7,y:227},0).wait(1).to({scaleX:0.376,scaleY:0.376,x:150.85,y:236.25},0).wait(1).to({scaleX:0.3671,scaleY:0.3671,x:130.95,y:244},0).wait(1).to({scaleX:0.3602,scaleY:0.3602,x:115.35,y:250.05},0).wait(1).to({scaleX:0.3547,scaleY:0.3547,x:103.05,y:254.85},0).wait(1).to({scaleX:0.3504,scaleY:0.3504,x:93.3,y:258.6},0).wait(1).to({scaleX:0.3475,scaleY:0.3475,x:86.9,y:261.1},0).wait(1).to({scaleX:0.3459,scaleY:0.3459,x:83.25,y:262.55},0).wait(1).to({scaleX:0.3451,scaleY:0.3451,x:81.45,y:263.25},0).wait(1).to({regX:0.1,regY:0,scaleX:0.3449,scaleY:0.3449,x:81.15,y:487.9},0).wait(92));

	// background
	this.instance_9 = new lib.background_mc();
	this.instance_9.setTransform(80,299.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(319));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-154.3,299.6,475,300);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_160x600.jpg", id:"_160x600"},
		{src:"images/_2ndprize.png", id:"_2ndprize"},
		{src:"images/cta.png", id:"cta"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/promo.png", id:"promo"},
		{src:"images/ticket.png", id:"ticket"}
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