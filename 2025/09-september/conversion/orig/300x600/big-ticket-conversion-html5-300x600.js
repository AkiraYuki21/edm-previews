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
p.nominalBounds = new cjs.Rectangle(0,0,251,247);


(lib._300x600 = function() {
	this.initialize(img._300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bigwin = function() {
	this.initialize(img.bigwin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,61);


(lib.consolation = function() {
	this.initialize(img.consolation);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,63);


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
	this.instance.setTransform(-179,-437,0.9257,0.9257);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-179,-437,357.4,192.6), null);


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
	this.instance.setTransform(-119,-117,0.9503,0.9503);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-119,-117,238.6,234.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgeCiQgNgKAAgTQAAgRANgLQANgKARAAQATAAAMAKQANALAAARQAAATgNAKQgMAKgTAAQgRAAgNgKgAgmA6IAAjlIBNAAIAADlg");
	this.shape.setTransform(127.9,-21.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAACpIgWjWIAADWIhNAAIAAlSIBlAAIAVDSIAAjSIBNAAIAAFSg");
	this.shape_1.setTransform(108.575,-21.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmCpIAAlSIBNAAIAAFSg");
	this.shape_2.setTransform(92.125,-21.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOCpIgOjLIgODLIhkAAIgZlSIBSAAIAEEEIAWkEIA+AAIAXEEIADkEIBTAAIgaFSg");
	this.shape_3.setTransform(72.2,-21.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAACuQgrABgXgYQgXgZAAgtIAAigQAAgvAYgYQAXgXAqAAIAAAAQAtAAAXAYQAWAYAAAuIAACgQAAAvgXAYQgXAXgrgBgAgKhWIAACuQAAANAKAAIAAAAQAKAAAAgNIAAiuQABgOgLAAIAAAAQgKAAAAAOg");
	this.shape_4.setTransform(41.65,-21.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmCpIAAkFIgvAAIAAhNICrAAIAABNIgvAAIAAEFg");
	this.shape_5.setTransform(22.5,-21.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhKCpIAAlSICUAAIAABJIhIAAIAAA6IA7AAIAABHIg7AAIAABAIBJAAIAABIg");
	this.shape_6.setTransform(0.3,-21.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAMCvQgvAAgZgaQgZgaAAgyIAAiQQAAgzAZgaQAZgaAvAAIAAAAQAlAAAfAOIgcA/QgMgEgPAAQgeAAAAAlIAACBQAAASAIAJQAKAKAQAAIAAAAQAOAAAPgGIAcA+QgiARgoAAg");
	this.shape_7.setTransform(-16.625,-21.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAACpIgWjWIAADWIhNAAIAAlSIBlAAIAVDSIAAjSIBNAAIAAFSg");
	this.shape_8.setTransform(-37.725,-21.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAZCpIgGhBIglAAIgGBBIhMAAIAslSIBxAAIAsFSgAgBg7IgKBaIAXAAIgKhaIgCgcg");
	this.shape_9.setTransform(-59.95,-21.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AALCpIAAiFIgVAAIAACFIhNAAIAAlSIBNAAIAACBIAVAAIAAiBIBNAAIAAFSg");
	this.shape_10.setTransform(-81.025,-21.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAMCvQgvAAgZgaQgZgaAAgyIAAiQQAAgzAZgaQAZgaAvAAIAAAAQAlAAAfAOIgcA/QgMgEgPAAQgeAAAAAlIAACBQAAASAIAJQAKAKAQAAIAAAAQAOAAAPgGIAcA+QgiARgoAAg");
	this.shape_11.setTransform(-98.875,-21.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAZCpIgGhBIglAAIgGBBIhMAAIAtlSIBvAAIAtFSgAgBg7IgJBaIAVAAIgKhaIgBgcg");
	this.shape_12.setTransform(-125.05,-21.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAOCpIgaiBIgGAAIAACBIhNAAIAAlRIBTAAQA1AAAVAXQAVAZAAAtIAAAZQAAAxgZAWIAmCUgAgSgWIAEAAQAKAAAEgEQAEgEAAgLIAAgiQAAgLgEgEQgEgEgKgBIgEAAg");
	this.shape_13.setTransform(108.275,-72.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAACvQgrAAgXgZQgXgYAAgtIAAigQAAgvAYgXQAXgZAqAAIAAAAQAtABAXAYQAWAZAAAtIAACgQAAAvgXAXQgXAYgrAAgAgKhVIAACsQAAAOAKABIAAAAQAKgBAAgOIAAisQABgPgLAAIAAAAQgKAAAAAPg");
	this.shape_14.setTransform(87.1,-72.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhMCpIAAlRICZAAIAABIIhNAAIAAA5IBAAAIAABIIhAAAIAACIg");
	this.shape_15.setTransform(68.8,-72.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAOCpIgOjKIgODKIhkAAIgZlRIBSAAIAEEDIAXkDIA9AAIAWEDIAFkDIBSAAIgaFRg");
	this.shape_16.setTransform(39.6,-72.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AABCvQgtAAgWgZQgXgYAAgtIAAigQAAgvAXgXQAYgZAqAAIABAAQAsABAWAYQAXAZAAAtIAACgQAAAvgXAXQgXAYgrAAgAgKhVIAACsQAAAOAKABIABAAQAJgBABgOIAAisQAAgPgLAAIAAAAQgKAAAAAPg");
	this.shape_17.setTransform(14.5,-72.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAACpIgWjVIAADVIhNAAIAAlRIBlAAIAVDQIAAjQIBNAAIAAFRg");
	this.shape_18.setTransform(-7.075,-72.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAOCpIgaiBIgGAAIAACBIhNAAIAAlRIBTAAQA1AAAVAXQAVAZAAAtIAAAZQAAAxgZAWIAmCUgAgSgWIAEAAQAKAAAEgEQAEgEAAgLIAAgiQAAgLgEgEQgEgEgKgBIgEAAg");
	this.shape_19.setTransform(-34.675,-72.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhKCpIAAlRICUAAIAABIIhIAAIAAA5IA7AAIAABIIg7AAIAABAIBJAAIAABIg");
	this.shape_20.setTransform(-53.5,-72.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgmCpIAAkFIgvAAIAAhMICrAAIAABMIgvAAIAAEFg");
	this.shape_21.setTransform(-71.1,-72.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAACpIgWjVIAADVIhNAAIAAlRIBlAAIAVDQIAAjQIBNAAIAAFRg");
	this.shape_22.setTransform(-91.275,-72.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhKCpIAAlRICVAAIAABIIhIAAIAAA5IA6AAIAABIIg6AAIAABAIBIAAIAABIg");
	this.shape_23.setTransform(-110.45,-72.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-137.6,-99.7,275.29999999999995,114.8), null);


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
	this.instance.setTransform(-207,-36,1.7004,1.7004);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-207,-36,414.9,79.9), null);


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


(lib.bonus_prizes_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgkB6IAAhVIhVAAIAAhIIBVAAIAAhXIBIAAIAABXIBWAAIAABIIhWAAIAABVg");
	this.shape.setTransform(-0.1,-45.7);

	this.instance = new lib.consolation();
	this.instance.setTransform(-94,-13,0.8574,0.8574);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bonus_prizes_mc, new cjs.Rectangle(-94,-81.9,188.7,122.9), null);


(lib.big_win_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bigwin();
	this.instance.setTransform(-110,-19);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkB6IAAhVIhVAAIAAhIIBVAAIAAhXIBIAAIAABXIBWAAIAABIIhWAAIAABVg");
	this.shape.setTransform(-0.1,-45.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.big_win_mc, new cjs.Rectangle(-110,-81.9,220,123.9), null);


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
	this.instance = new lib._300x600();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_mc, new cjs.Rectangle(-150,-300,300,600), null);


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
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(282.25,587.15,0.0178,0.0178,0,0,0,496.6,468.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAtIgBgUQAKADAGAAQAGAAADgCQABgBABgHIgDAAQgKAAgFgFQgGgFADgLIAJgrIAUAAIgIArQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAIACAAIAJguIAVAAIgOBCQgDAOgHAHQgHAGgNAAQgHAAgJgCg");
	this.shape.setTransform(268.75,588.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAvIAThdIAUAAIgUBdg");
	this.shape_1.setTransform(264.775,585.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAtIAThcIAUAAIgFAYIADAAQAMAAAEAGQAEAGgDANIgEAUQgDAOgHAGQgGAGgMAAQgJAAgNgDgAgDAdIABAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBQACgBAAgEIAFgUIAAgEQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIgBAAg");
	this.shape_2.setTransform(260.185,586.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAxIAOhDIATAAIgOBDgAABgdQgBgDAAgFQABgFADgDQADgDAFAAQAEAAACADQACADgBAFQgBAFgEADQgCACgFAAQgFAAgBgCg");
	this.shape_3.setTransform(256.2167,585.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAhIAGgTQAJADAGAAQAGAAABgDIAAgDIgCgBIgDgCIgCAAQgNgHADgPQACgJAHgGQAGgGAKAAQAJAAAIADIgFATQgIgDgFAAQgGAAgBADIABACIADACIAEACQAHAEACADQADAFgBAIQgCALgIAGQgHAGgMAAQgJAAgJgDg");
	this.shape_4.setTransform(252.025,587.2464);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAjIAJgvQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBAAIgCAAIgKAyIgVAAIAOhBQAPgFAKAAQAWABgFAVIgKAwg");
	this.shape_5.setTransform(246.8382,587.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAKIAEgTQAGgaAWAAQAXAAgGAaIgEATQgFAagWAAQgXAAAFgagAAAgJIgEAUQgBAFADABQACgBAAgFIAFgUQABgHgCAAQgDAAgBAHg");
	this.shape_6.setTransform(241.5834,587.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeAwIAUheQALgBAMAAQAMAAAEAGQAEAGgDAOIgEAUQgDANgHAGQgGAGgMAAIgCAAIgGAYgAAAAFIAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAgBQACgBAAgDIAFgUIAAgFQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIgBAAg");
	this.shape_7.setTransform(235.735,588.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAhIAGgTQAJADAGAAQAGAAABgDIAAgDIgCgBIgDgCIgCAAQgNgHADgPQACgJAHgGQAGgGAKAAQAJAAAIADIgFATQgIgDgFAAQgGAAgBADIABACIADACIAEACQAHAEACADQADAFgBAIQgCALgIAGQgHAGgMAAQgJAAgJgDg");
	this.shape_8.setTransform(230.875,587.2464);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAdQgFgGADgOIAEgSQACgOAHgFQAIgHALAAQALAAAEAHQADAFgCAOIgEAQIgXAAIgBADQgBAHAIAAQAGAAAEgBIgCATIgOABQgNAAgGgHgAABgLIgBAFIAFAAIABgFIABgFQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgCAAgBAGg");
	this.shape_9.setTransform(226.0491,587.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAvIAAgkIgCAAIgHAkIgWAAIAUhdIAWAAQAPAAAFAHQAEAGgCANIgCAHQgDANgIAGIACApgAAAgFIABAAIAEgBIADgFIACgJQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAgBAAIgBAAg");
	this.shape_10.setTransform(220.2696,585.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAtIgBgUQAKADAGAAQAGAAACgCQACgBABgHIgDAAQgKAAgFgFQgGgFADgLIAJgrIAUAAIgIArQAAABAAAAQAAABAAAAQABABAAAAQABAAABAAIABAAIAJguIAVAAIgOBCQgDAOgHAHQgHAGgNAAQgHAAgJgCg");
	this.shape_11.setTransform(213.05,588.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAeQgEgFACgKIAAgBQACgKAHgFQAHgFAKAAIAEAAIAAgDQABgEgCgBQgBgCgEAAQgGAAgKADIAKgUIAGgBIAIgBQANAAAEAGQAFAFgDANIgJArQgQAEgIAAQgLAAgFgGgAgCAIIgCADIAAACIAAAEIADACIABAAIACgNIgCAAIgCACg");
	this.shape_12.setTransform(207.5389,587.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTAvIAThdIAUAAIgUBdg");
	this.shape_13.setTransform(203.625,585.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfAvIAUhdIAWAAQAPAAAEAHQAEAGgCANIgCAIQgDANgIAGQgIAFgMAAIgBAAIgIAjgAAAgEIABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBIADgKQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIgBAAg");
	this.shape_14.setTransform(199.0481,585.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWArIAAhVIAVAAQAKAAAHAGQAHAHAAAMIAAAiQAAAMgHAIQgHAGgKAAgAgCAYIABAAIADgBIAAgEIAAgmIgBgDIgCgBIgBAAg");
	this.shape_15.setTransform(176.775,586.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSArIAAhVIAlAAIAAASIgSAAIAAAPIAOAAIAAARIgOAAIAAARIATAAIAAASg");
	this.shape_16.setTransform(172.1,586.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAGArIgBgRIgJAAIgBARIgUAAIALhVIAcAAIAMBVgAAAgOIgCAWIAFAAIgCgWIgBgIg");
	this.shape_17.setTransform(167.05,586.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAArIgFg2IAAA2IgUAAIAAhVIAaAAIAFA1IAAg1IAUAAIAABVg");
	this.shape_18.setTransform(159.925,586.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_19.setTransform(155.75,586.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVApIAFgSQAJADAEAAQAGAAAAgFIAAgBQAAgCgCgDIgFgHIgEgEQgGgFgDgFQgCgFAAgIIAAgBQAAgLAFgGQAGgHAKAAQAIAAAKAEIgFARIgKgCQgFAAAAAGIAAABIAAACIABABIABACIACACIACACIAEAEQAGAGADAFQADAFAAAIIAAABQAAALgHAHQgGAHgJAAQgKAAgLgEg");
	this.shape_20.setTransform(150.775,586.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTArIAAhVIAmAAIAAASIgTAAIAAAPIAQAAIAAARIgQAAIAAARIATAAIAAASg");
	this.shape_21.setTransform(146.5,586.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWArIAAgRIAYgyIgVAAIAAgSIAqAAIAAARIgYAxIAYAAIAAATg");
	this.shape_22.setTransform(141.725,586.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_23.setTransform(137.95,586.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAEArIgGggIgCAAIAAAgIgUAAIAAhVIAWAAQANAAAFAFQAGAHAAALIAAAHQAAAMgHAFIAKAmgAgEgFIABAAIADgBIABgEIAAgJIgBgDIgDgBIgBAAg");
	this.shape_24.setTransform(133.825,586.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWArIAAhVIAWAAQAMAAAFAFQAGAHAAALIAAAIQAAAMgGAFQgGAFgLABIgCAAIAAAfgAgCgEIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIABgEIAAgKIgBgDIgCgBIgBAAg");
	this.shape_25.setTransform(128.4,586.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIA3IAAhtIARAAIAABtg");
	this.shape_26.setTransform(120.025,587.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJArIAAgYIgRg9IAVAAIAFAdIAGgdIAVAAIgRA9IAAAYg");
	this.shape_27.setTransform(111.475,586.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUArIAAhVIAUAAIAABCIAVAAIAAATg");
	this.shape_28.setTransform(106.2,586.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWArIAAhVIAVAAQANAAAFAFQAGAHAAALIAAAIQAAAMgHAFQgFAFgMABIgBAAIAAAfgAgCgEIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBABAAIABgEIAAgKIgBgDIgDgBIgBAAg");
	this.shape_29.setTransform(101.25,586.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWArIAAhVIAVAAQANAAAFAFQAGAHAAALIAAAIQAAAMgGAFQgGAFgMABIgBAAIAAAfgAgCgEIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIABgEIAAgKIgBgDIgCgBIgBAAg");
	this.shape_30.setTransform(96,586.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAHArIgCgRIgIAAIgDARIgTAAIAMhVIAcAAIALBVgAAAgOIgCAWIAFAAIgDgWIAAgIg");
	this.shape_31.setTransform(90.6,586.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgVApIAFgSQAJADAEAAQAGAAAAgFIAAgBQAAgCgCgDIgFgHIgEgEQgGgFgDgFQgCgFAAgIIAAgBQAAgLAFgGQAGgHAKAAQAIAAAKAEIgFARIgKgCQgFAAAAAGIAAABIAAACIABABIABACIACACIACACIAEAEQAGAGADAFQADAFAAAIIAAABQAAALgHAHQgGAHgJAAQgKAAgLgEg");
	this.shape_32.setTransform(84.125,586.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFATIgDglIARAAIgDAlg");
	this.shape_33.setTransform(80.5,584.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPAmQgGgGAAgNIAAglQAAgNAGgGQAHgHALAAQAKAAAHAEIgHAQIgHgBQgHAAAAAJIAAAhQAAAEACADQACACAEAAIABAAIAHgBIAHAQQgJAEgKAAQgLAAgHgHg");
	this.shape_34.setTransform(77.025,586.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgXAnQgHgFAAgMIAAgLQAAgGADgEQADgDAFAAQgEgIAAgGIAAgGQAAgMAEgFQAEgFAMAAQAIAAAEAFQAEAFAAAMIAAAFQAAAOgMADIAHAKIgBgKIAQAAIAAAFIAAAFIAAADIAAAEIgBADIgBAEIgCADIAMARIgVAAIgBgDQgGAEgGAAQgOAAgGgGgAgKAOIAAAFQAAAFACACQACACAEAAIACAAIgKgRgAgFgaIgBABIAAADIAAAKIAAACQAEgBAAgEIAAgHIAAgDIgCgBIgBAAg");
	this.shape_35.setTransform(71.075,586.775);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJArIAAhCIgMAAIAAgTIArAAIAAATIgMAAIAABCg");
	this.shape_36.setTransform(65.425,586.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIA3IAAhtIARAAIAABtg");
	this.shape_37.setTransform(57.375,587.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgNAtIAGgQIAGgQIgBABQgUAAAAgWIAAgKQAAgMAGgHQAHgHAJAAQAKAAAHAGQAGAFAAAMIAAAKQAAAHgCAFIgRAsgAgBgXIAAASQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIAAgSQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAABAAAAg");
	this.shape_38.setTransform(48.975,586.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNArIAOhDIgUAAIAAgSIAnAAIAAASIgOBDg");
	this.shape_39.setTransform(44.025,586.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgVAsIAAgRQAYgbAAgPIAAgBQABgEgDgCQgCgCgDAAIgLACIgHgQQAKgFAMAAQAKAAAHAHQAFAIAAALIAAABQAAAGgCAGQgCAFgDAGIgHAKIgHAJIATAAIAAASg");
	this.shape_40.setTransform(39.45,586.725);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgVApIAFgSQAJADAEAAQAGAAAAgFIAAgBQAAgCgCgDIgFgHIgEgEQgGgFgDgFQgCgFAAgIIAAgBQAAgLAFgGQAGgHAKAAQAIAAAKAEIgFARIgKgCQgFAAAAAGIAAABIAAACIABABIABACIACACIACACIAEAEQAGAGADAFQADAFAAAIIAAABQAAALgHAHQgGAHgJAAQgKAAgLgEg");
	this.shape_41.setTransform(33.325,586.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgSArIAAhVIAlAAIAAASIgSAAIAAAPIAOAAIAAARIgOAAIAAARIATAAIAAASg");
	this.shape_42.setTransform(29,586.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_43.setTransform(25.45,586.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAEArIgGggIgCAAIAAAgIgUAAIAAhVIAWAAQANAAAFAFQAGAHAAALIAAAHQAAAMgHAFIAKAmgAgEgFIABAAIADgBIABgEIAAgJIgBgDIgDgBIgBAAg");
	this.shape_44.setTransform(21.325,586.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgSArIAAhVIAlAAIAAASIgSAAIAAAPIAPAAIAAARIgPAAIAAARIASAAIAAASg");
	this.shape_45.setTransform(16.5,586.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgVApIAFgSQAJADAEAAQAGAAAAgFIAAgBQAAgCgCgDIgFgHIgEgEQgGgFgDgFQgCgFAAgIIAAgBQAAgLAFgGQAGgHAKAAQAIAAAKAEIgFARIgKgCQgFAAAAAGIAAABIAAACIABABIABACIACACIACACIAEAEQAGAGADAFQADAFAAAIIAAABQAAALgHAHQgGAHgJAAQgKAAgLgEg");
	this.shape_46.setTransform(12.025,586.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(351));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(150,51.15,0.9088,0.9084);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(256).to({alpha:0},16).wait(79));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(150,547.15,0.5386,0.5386,0,0,0,0,0.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(272).to({_off:false},0).wait(1).to({regX:0.4,regY:4,x:150.2,y:549.1,alpha:0.0032},0).wait(1).to({y:548.9,alpha:0.0145},0).wait(1).to({y:548.5,alpha:0.0371},0).wait(1).to({y:547.75,alpha:0.077},0).wait(1).to({y:546.5,alpha:0.1467},0).wait(1).to({y:544.3,alpha:0.2672},0).wait(1).to({y:541.6,alpha:0.4164},0).wait(1).to({y:538.9,alpha:0.5648},0).wait(1).to({y:536.65,alpha:0.6887},0).wait(1).to({y:534.85,alpha:0.7859},0).wait(1).to({y:533.45,alpha:0.8625},0).wait(1).to({y:532.35,alpha:0.9229},0).wait(1).to({y:531.65,alpha:0.9628},0).wait(1).to({y:531.25,alpha:0.9857},0).wait(1).to({y:531.05,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:150,y:528.95,alpha:1},0).wait(63));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(-154.6,356.25,0.7482,0.7482);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(256).to({_off:false},0).wait(1).to({regX:-0.3,regY:-340.7,x:-153.8,y:101.35},0).wait(1).to({x:-150.35},0).wait(1).to({x:-143.45},0).wait(1).to({x:-131.3},0).wait(1).to({x:-110.1},0).wait(1).to({x:-73.4},0).wait(1).to({x:-27.9},0).wait(1).to({x:17.25},0).wait(1).to({x:55},0).wait(1).to({x:84.6},0).wait(1).to({x:107.9},0).wait(1).to({x:126.35},0).wait(1).to({x:138.5},0).wait(1).to({x:145.45},0).wait(1).to({x:148.85},0).wait(1).to({regX:0,regY:0,x:150,y:356.25},0).wait(79));

	// bonus_prizes
	this.instance_4 = new lib.bonus_prizes_mc();
	this.instance_4.setTransform(149.7,507.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:0.3,regY:-8.5,x:150,y:498.95,alpha:0.0037},0).wait(1).to({y:498.8,alpha:0.0167},0).wait(1).to({y:498.55,alpha:0.0435},0).wait(1).to({y:498.05,alpha:0.0919},0).wait(1).to({y:497.15,alpha:0.1816},0).wait(1).to({y:495.75,alpha:0.3248},0).wait(1).to({y:494.1,alpha:0.4878},0).wait(1).to({y:492.65,alpha:0.6345},0).wait(1).to({y:491.5,alpha:0.7499},0).wait(1).to({y:490.6,alpha:0.8388},0).wait(1).to({y:489.9,alpha:0.9088},0).wait(1).to({y:489.4,alpha:0.9564},0).wait(1).to({y:489.15,alpha:0.9834},0).wait(1).to({y:489,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:149.7,y:497.5,alpha:1},0).wait(69).to({regX:0.3,regY:-8.5,x:150,y:488.95,alpha:0.9963},0).wait(1).to({y:488.8,alpha:0.9833},0).wait(1).to({y:488.55,alpha:0.9565},0).wait(1).to({y:488.05,alpha:0.9081},0).wait(1).to({y:487.15,alpha:0.8184},0).wait(1).to({y:485.75,alpha:0.6752},0).wait(1).to({y:484.1,alpha:0.5122},0).wait(1).to({y:482.65,alpha:0.3655},0).wait(1).to({y:481.5,alpha:0.2501},0).wait(1).to({y:480.6,alpha:0.1612},0).wait(1).to({y:479.9,alpha:0.0912},0).wait(1).to({y:479.4,alpha:0.0436},0).wait(1).to({y:479.15,alpha:0.0166},0).wait(1).to({y:479,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:149.7,y:487.5,alpha:0},0).to({_off:true},1).wait(237));

	// bonus_prizes_copy
	this.instance_5 = new lib.big_win_mc();
	this.instance_5.setTransform(149.7,507.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regY:-8,y:499.45,alpha:0.0037},0).wait(1).to({y:499.3,alpha:0.0167},0).wait(1).to({y:499.05,alpha:0.0435},0).wait(1).to({y:498.55,alpha:0.0919},0).wait(1).to({y:497.65,alpha:0.1816},0).wait(1).to({y:496.25,alpha:0.3248},0).wait(1).to({y:494.6,alpha:0.4878},0).wait(1).to({y:493.15,alpha:0.6345},0).wait(1).to({y:492,alpha:0.7499},0).wait(1).to({y:491.1,alpha:0.8388},0).wait(1).to({y:490.4,alpha:0.9088},0).wait(1).to({y:489.9,alpha:0.9564},0).wait(1).to({y:489.65,alpha:0.9834},0).wait(1).to({y:489.5,alpha:0.9964},0).wait(1).to({regY:0,y:497.5,alpha:1},0).wait(69).to({regY:-8,y:489.45,alpha:0.9963},0).wait(1).to({y:489.3,alpha:0.9833},0).wait(1).to({y:489.05,alpha:0.9565},0).wait(1).to({y:488.55,alpha:0.9081},0).wait(1).to({y:487.65,alpha:0.8184},0).wait(1).to({y:486.25,alpha:0.6752},0).wait(1).to({y:484.6,alpha:0.5122},0).wait(1).to({y:483.15,alpha:0.3655},0).wait(1).to({y:482,alpha:0.2501},0).wait(1).to({y:481.1,alpha:0.1612},0).wait(1).to({y:480.4,alpha:0.0912},0).wait(1).to({y:479.9,alpha:0.0436},0).wait(1).to({y:479.65,alpha:0.0166},0).wait(1).to({y:479.5,alpha:0.0036},0).wait(1).to({regY:0,y:487.5,alpha:0},0).to({_off:true},1).wait(154));

	// sub_caption
	this.instance_6 = new lib.daily_caption_mc();
	this.instance_6.setTransform(147.35,549,0.9375,0.9375);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(181).to({_off:false},0).wait(1).to({regX:-1.4,regY:-47.2,x:146.05,y:504.65,alpha:0.0037},0).wait(1).to({y:504.4,alpha:0.0167},0).wait(1).to({y:503.9,alpha:0.0435},0).wait(1).to({y:503,alpha:0.0919},0).wait(1).to({y:501.3,alpha:0.1816},0).wait(1).to({y:498.65,alpha:0.3248},0).wait(1).to({y:495.6,alpha:0.4878},0).wait(1).to({y:492.85,alpha:0.6345},0).wait(1).to({y:490.65,alpha:0.7499},0).wait(1).to({y:489,alpha:0.8388},0).wait(1).to({y:487.7,alpha:0.9088},0).wait(1).to({y:486.8,alpha:0.9564},0).wait(1).to({y:486.3,alpha:0.9834},0).wait(1).to({y:486.05,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:147.35,y:530.25,alpha:1},0).wait(61).to({regX:-1.4,regY:-47.2,x:146.05,y:486.05,alpha:0.9963},0).wait(1).to({y:486.3,alpha:0.9833},0).wait(1).to({y:486.8,alpha:0.9565},0).wait(1).to({y:487.7,alpha:0.9081},0).wait(1).to({y:489.4,alpha:0.8184},0).wait(1).to({y:492.05,alpha:0.6752},0).wait(1).to({y:495.1,alpha:0.5122},0).wait(1).to({y:497.85,alpha:0.3655},0).wait(1).to({y:500.05,alpha:0.2501},0).wait(1).to({y:501.7,alpha:0.1612},0).wait(1).to({y:503,alpha:0.0912},0).wait(1).to({y:503.9,alpha:0.0436},0).wait(1).to({y:504.4,alpha:0.0166},0).wait(1).to({y:504.65,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:147.35,y:549,alpha:0},0).wait(80));

	// second_prize_mc
	this.instance_7 = new lib.second_prize_mc();
	this.instance_7.setTransform(149.75,300.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(181).to({_off:false},0).wait(1).to({regX:0.3,regY:0.4,x:150.05,y:300.8,alpha:0.0037},0).wait(1).to({y:300.45,alpha:0.0167},0).wait(1).to({y:299.75,alpha:0.0435},0).wait(1).to({y:298.5,alpha:0.0919},0).wait(1).to({x:150.1,y:296.15,alpha:0.1816},0).wait(1).to({y:292.45,alpha:0.3248},0).wait(1).to({x:150.15,y:288.2,alpha:0.4878},0).wait(1).to({x:150.2,y:284.4,alpha:0.6345},0).wait(1).to({x:150.25,y:281.4,alpha:0.7499},0).wait(1).to({x:150.3,y:279.05,alpha:0.8388},0).wait(1).to({y:277.25,alpha:0.9088},0).wait(1).to({y:276,alpha:0.9564},0).wait(1).to({y:275.3,alpha:0.9834},0).wait(1).to({y:274.95,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:150.05,y:274.5,alpha:1},0).wait(61).to({regX:0.3,regY:0.4,scaleX:0.9984,scaleY:0.9984,x:150.35,y:275.4},0).wait(1).to({scaleX:0.9927,scaleY:0.9927,x:150.4,y:277.3},0).wait(1).to({scaleX:0.9809,scaleY:0.9809,x:150.45,y:281.15},0).wait(1).to({scaleX:0.9597,scaleY:0.9597,x:150.6,y:288.2},0).wait(1).to({scaleX:0.9204,scaleY:0.9204,x:150.9,y:301.15},0).wait(1).to({scaleX:0.8576,scaleY:0.8576,x:151.3,y:321.9},0).wait(1).to({scaleX:0.7861,scaleY:0.7861,x:151.8,y:345.45},0).wait(1).to({scaleX:0.7218,scaleY:0.7218,x:152.25,y:366.7},0).wait(1).to({scaleX:0.6711,scaleY:0.6711,x:152.6,y:383.4},0).wait(1).to({scaleX:0.6322,scaleY:0.6322,x:152.85,y:396.25},0).wait(1).to({scaleX:0.6015,scaleY:0.6015,x:153.1,y:406.4},0).wait(1).to({scaleX:0.5806,scaleY:0.5806,x:153.2,y:413.3},0).wait(1).to({scaleX:0.5687,scaleY:0.5687,x:153.3,y:417.2},0).wait(1).to({scaleX:0.563,scaleY:0.563,y:419.1},0).wait(1).to({regX:0.6,scaleX:0.5615,scaleY:0.5615,x:153.25,y:419.4},0).wait(80));

	// promo
	this.instance_8 = new lib.promo_mc();
	this.instance_8.setTransform(412.45,360,0.7807,0.7807);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:-0.3,regY:-119.5,x:411.2,y:266.7,alpha:0.0037},0).wait(1).to({x:407.8,alpha:0.0167},0).wait(1).to({x:400.75,alpha:0.0435},0).wait(1).to({x:388.05,alpha:0.0919},0).wait(1).to({x:364.5,alpha:0.1816},0).wait(1).to({x:326.95,alpha:0.3248},0).wait(1).to({x:284.15,alpha:0.4878},0).wait(1).to({x:245.65,alpha:0.6345},0).wait(1).to({x:215.35,alpha:0.7499},0).wait(1).to({x:192.05,alpha:0.8388},0).wait(1).to({x:173.65,alpha:0.9088},0).wait(1).to({x:161.15,alpha:0.9564},0).wait(1).to({x:154.05,alpha:0.9834},0).wait(1).to({x:150.65,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:150,y:360,alpha:1},0).wait(166).to({alpha:0},15).wait(61).to({regX:-0.3,regY:-119.5,scaleX:0.7793,scaleY:0.7793,x:149.75,y:266.65,alpha:0.0037},0).wait(1).to({scaleX:0.7744,scaleY:0.7744,y:266.6,alpha:0.0167},0).wait(1).to({scaleX:0.7643,scaleY:0.7643,y:266.45,alpha:0.0435},0).wait(1).to({scaleX:0.7461,scaleY:0.7461,x:149.8,y:266.25,alpha:0.0919},0).wait(1).to({scaleX:0.7123,scaleY:0.7123,y:265.8,alpha:0.1816},0).wait(1).to({scaleX:0.6583,scaleY:0.6583,x:149.85,y:265.1,alpha:0.3248},0).wait(1).to({scaleX:0.5968,scaleY:0.5968,y:264.35,alpha:0.4878},0).wait(1).to({scaleX:0.5415,scaleY:0.5415,x:149.95,y:263.6,alpha:0.6345},0).wait(1).to({scaleX:0.498,scaleY:0.498,y:263.05,alpha:0.7499},0).wait(1).to({scaleX:0.4645,scaleY:0.4645,y:262.6,alpha:0.8388},0).wait(1).to({scaleX:0.4381,scaleY:0.4381,x:150,y:262.3,alpha:0.9088},0).wait(1).to({scaleX:0.4202,scaleY:0.4202,y:262.05,alpha:0.9564},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:150.05,y:261.9,alpha:0.9834},0).wait(1).to({scaleX:0.4051,scaleY:0.4051,y:261.85,alpha:0.9964},0).wait(1).to({regX:0.4,regY:0,scaleX:0.4037,scaleY:0.4037,x:150.2,y:310.1,alpha:1},0).wait(80));

	// background
	this.instance_9 = new lib.background_mc();
	this.instance_9.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(351));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-138.5,300,690.2,300);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_2ndprize.png", id:"_2ndprize"},
		{src:"images/_300x600.jpg", id:"_300x600"},
		{src:"images/bigwin.png", id:"bigwin"},
		{src:"images/consolation.png", id:"consolation"},
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