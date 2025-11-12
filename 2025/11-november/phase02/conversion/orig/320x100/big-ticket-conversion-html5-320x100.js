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
p.nominalBounds = new cjs.Rectangle(0,0,283,247);


(lib._320x100 = function() {
	this.initialize(img._320x100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,100);


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
	this.instance.setTransform(-1847,-481,3.1379,3.1379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-1847,-481,1211.2,652.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AnFGWIAAsrQAAjcCNiAQCOiBDeAAQDQAADDBsIiOFSQhjg1h0AAQiYAAACCrIAALtQAABQA7AAQAcAAARgKIAAppIFyAAIAANqQh1BDhYAdQhXAdh0gBQnTAAAAncg");
	this.shape.setTransform(1256.55,-147.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFNXIhsw7IAAQ7ImIAAIAA6tIIEAAIBoQiIAAwiIGHAAIAAatg");
	this.shape_1.setTransform(1147.875,-146.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjDNXIAA6tIGHAAIAAatg");
	this.shape_2.setTransform(1065.05,-146.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA3NXIiasRIAAMRImIAAIAA6tIGIAAIAAMMICYsMIGdAAIjUMnIDuOGg");
	this.shape_3.setTransform(985.65,-146.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA7NyQjyAAh9iDQh8iDAAj/IAArZQAAj/B8iDQB9iDDyAAIACAAQC5ABCbBGIiNE8Qg8gThKAAIgDAAQiaAAAAC7IAAKNQAABYAvAyQAxAxBQAAIACAAQBFAABOgfICLE7QirBUjJAAg");
	this.shape_4.setTransform(886.825,-147.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjDNXIAA6tIGHAAIAAatg");
	this.shape_5.setTransform(811.25,-146.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjDNXIAA0rIjwAAIAAmCINnAAIAAGCIjvAAIAAUrg");
	this.shape_6.setTransform(740.625,-146.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AmoMfIBmlgQCnBBBHgBQCKAAAAhrIAAgLQAAgwgig0Qgig1hVhUIhKhIQh4h3g1hnQg0hmAAigIAAgFQAAjfByh+QBxh9DKAAQClAADDBOIhlFKQh8gmg7AAQiGAAAABtIAAAFQAAAQAFAPQAFAOAIAOQAHALAOATIAbAfIAkAmIAmApQA1A5AcAaQB7B7A3BkQA1BkAACtIAAACQAADoh5CDQh6CEjJAAQjKAAjLhRg");
	this.shape_7.setTransform(623.925,-147.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhxFvIhIrdIFzAAIhFLdg");
	this.shape_8.setTransform(552.225,-195.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA4NXIibsRIAAMRImIAAIAA6tIGIAAIAAMMICZsMIGbAAIjTMnIDuOGg");
	this.shape_9.setTransform(471.7,-146.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA7NyQjyAAh9iDQh8iDAAj/IAArZQAAj/B8iDQB9iDDyAAIACAAQC5ABCbBGIiNE8Qg8gThKAAIgDAAQiaAAAAC7IAAKNQAABYAvAyQAxAxBQAAIACAAQBFAABOgfICLE7QirBUjJAAg");
	this.shape_10.setTransform(372.825,-147.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AABNwQjgAAh0h5Qhyh7AAjjIAAsuQAAjrB2h4QB2h3DZAAIAEAAQDfAAByB6QByB7AADlIAAMuQAADrh2B2Qh1B2jWAAgAg0m0IAANrQAABIA0AAIABAAQA1AAAAhIIAAtrQAAhKg2ABIgCAAQgygBAABKg");
	this.shape_11.setTransform(271.5,-147.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AmPNXIAA6tIGIAAIAAUrIGXAAIAAGCg");
	this.shape_12.setTransform(171.325,-146.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA7NyQjyAAh9iDQh8iDAAj/IAArZQAAj/B8iDQB9iDDyAAIACAAQC5ABCbBGIiNE8Qg8gThKAAIgDAAQiaAAAAC7IAAKNQAABYAvAyQAxAxBQAAIACAAQBFAABOgfICLE7QirBUjJAAg");
	this.shape_13.setTransform(83.825,-147.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-282.3,-278,1903.3999999999999,310.8), null);


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
	this.instance.setTransform(-136,-120,0.9918,0.9918);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-136,-120,280.7,245), null);


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
	this.instance.setTransform(-1107,-496,3.1301,3.1301);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-1107,-496,870.2,898.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AjqM8QhAgxAAhgQAAhXBAg2QA/g1BfAAQBeAAA/A1QBAA2AABXQAABghAAxQg/AzheAAQhfAAg/gzgAj4ElIgCj1QBihrBEhsQBFhtAAhBIAAgIQAAg6gugoQgugohCAAQhHAAhiA2IBQmmQBogXBJAAQDKAABwBnQByBnAAC3IAAAXQAABDgOBCQgOBCgOAqQgNAsgiA5QgiA5gOAWQgPAXgqA0QgqA2gEAGIAADLg");
	this.shape.setTransform(1166.025,-169.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFNXIhsw7IAAQ7ImIAAIAA6tIIEAAIBoQhIAAwhIGHAAIAAatg");
	this.shape_1.setTransform(1068.525,-169.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjDNXIAA6tIGHAAIAAatg");
	this.shape_2.setTransform(985.7,-169.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlJLwQh9hyAAjgIAAz+IGRAAIAAUJQAABIA2AAQA0AAAAhIIAA0JIGRAAIAAT+QAADRhzB6QhzB4jeAAQjOAAh9hxg");
	this.shape_3.setTransform(878.6,-168.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AABNwQjgAAh0h5Qhyh7gBjkIAAssQABjtB1h3QB3h3DZAAIADAAQDgAAByB6QByB7gBDmIAAMsQAADth1B1Qh1B2jXAAgAg0m1IAANsQAABJA0gBIABAAQA1ABAAhJIAAtsQAAhIg2AAIgCAAQgyAAAABIg");
	this.shape_4.setTransform(772.95,-170);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjCNXIAAnlIlIzIIGVAAIB3I7IB1o7IGUAAIlHTIIAAHlg");
	this.shape_5.setTransform(666.8,-169.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Al6NXIAA6tILxAAIAAFsIlqAAIAAEkIEmAAIAAFtIkmAAIAAFDIFuAAIAAFtg");
	this.shape_6.setTransform(545.075,-169.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABGNXIiHqMIgcAAIAAKMImIAAIAA6tIGkAAQEOAABrB5QBqB6AADnIAAB7QAAD7h+BsIDCLxgAhdhwIATAAQAzAAAUgYQAVgWAAg4IAAimQAAg4gVgYQgUgWgzAAIgTAAg");
	this.shape_7.setTransform(446.025,-169.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AB+NXIgflNIi9AAIgfFNImAAAIDh6tII5AAIDhatgAgIktIgwHKIBxAAIgwnKIgIiOg");
	this.shape_8.setTransform(335.825,-169.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(0,-300.7,1489.4,310.8), null);


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
	this.instance.setTransform(-2513,74,6.5299,6.5299);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-2513,74,1593.3,306.9), null);


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
	this.instance.setTransform(-1787,50,5.3551,5.3551);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bt_logo, new cjs.Rectangle(-1787,50,589.0999999999999,337.4), null);


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
	this.instance = new lib._320x100();
	this.instance.setTransform(-160,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_mc, new cjs.Rectangle(-160,-50,320,100), null);


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
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(183.4,-3.75,0.0157,0.0157,0,0,0,493.1,461.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAlIgBgRQAIADAFAAQAFAAACgBQABgBABgGIgDAAQgIAAgEgEQgEgEABgJIAIgkIAQAAIgGAjQAAABAAABQAAAAAAABQAAAAAAAAQABAAAAAAIABAAIAIgmIARAAIgLA3QgDALgGAGQgFAFgKAAQgGAAgHgCg");
	this.shape.setTransform(170.9,-1.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAnIAQhNIAQAAIgQBNg");
	this.shape_1.setTransform(167.65,-4.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAlIAPhLIAQAAIgEATIACAAQAKAAAEAFQADAFgCAKIgEARQgCALgFAFQgGAFgJAAQgIAAgKgCgAgDAXIABAAIACgBIACgEIADgQIAAgEIgCgBIgBAAg");
	this.shape_2.setTransform(163.8521,-4.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPApIAMg3IAQAAIgMA3gAAAgYQAAgCAAgEQABgFACgCQADgDADABQAEgBACADQABACgBAFQgBAEgCACQgDACgEABQgDgBgCgCg");
	this.shape_3.setTransform(160.62,-4.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAcIAFgRQAHADAFAAQAFAAABgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgBgCIgCgBIgCgBQgKgFACgMQACgHAFgFQAFgFAIAAQAHgBAHADIgEAPQgGgCgFAAQgEAAgBADQAAAAAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIACACIAEACQAFADADACQACAEgCAHQgBAJgGAFQgGAFgKAAQgHAAgIgCg");
	this.shape_4.setTransform(157.125,-3.0542);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAdIAHgmQABgBAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCAAIgIApIgRAAIAMg1QALgEAIAAQASAAgDARIgJAog");
	this.shape_5.setTransform(152.8535,-3.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAIIAEgPQAEgWASAAQATAAgEAWIgEAPQgEAWgSAAQgTAAAEgWgAAAgIIgDARQgBABAAABQAAABAAABQABAAAAAAQAAABABAAQACAAAAgFIAEgRQABgFgCAAQgCAAgBAFg");
	this.shape_6.setTransform(148.55,-3.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAoIARhNIASgCQAKAAADAFQAEAGgDALIgDAQQgCALgGAFQgFAFgJAAIgCAAIgFAUgAAAAEIAAAAIADgBIABgEIADgQIABgFIgDgBIAAAAg");
	this.shape_7.setTransform(143.7521,-2.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAcIAFgRQAHADAFAAQAFAAABgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIgBgCIgCgBIgCgBQgKgFACgMQACgHAFgFQAFgFAIAAQAHgBAHADIgEAPQgGgCgFAAQgEAAgBADQAAAAAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIACACIAEACQAFADADACQACAEgCAHQgBAJgGAFQgGAFgKAAQgHAAgIgCg");
	this.shape_8.setTransform(139.725,-3.0542);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAYQgFgFADgMIADgOQACgLAGgFQAFgGAJAAQAKAAADAGQADAFgCALIgDAMIgTAAIgBADQgBAGAHAAIAJgBIgCAPIgMACQgKAAgFgGgAAAgJIAAAEIADAAIABgEIABgEQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAQgCAAgBAFg");
	this.shape_9.setTransform(135.7667,-3.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAnIAAgeIgBAAIgGAeIgSAAIAQhNIASAAQANAAADAGQAEAFgCALIgBAFQgDALgHAFIACAigAAAgEIABAAIAEgBIABgEIACgHIAAgEQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_10.setTransform(131.0231,-4.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAlIgBgRQAIADAGAAQAEAAABgBQACgBABgGIgDAAQgIAAgEgEQgEgEACgJIAHgkIAQAAIgGAjQAAABAAABQAAAAAAABQAAAAAAAAQABAAABAAIAAAAIAJgmIAQAAIgMA3QgCALgFAGQgGAFgKAAQgHAAgGgCg");
	this.shape_11.setTransform(125.05,-1.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAZQgDgEACgJIAAAAQACgJAFgEQAFgEAIAAIADAAIABgCQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQgBgBgDAAQgFAAgHADIAHgQIAGgCIAFgBQALAAAEAFQADAFgCAKIgHAkQgNADgHAAQgJgBgEgEgAgCAGIgBADIgBACQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAIABAAIABgKIgBAAIgCABg");
	this.shape_12.setTransform(120.475,-3.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPAnIAPhNIARAAIgQBNg");
	this.shape_13.setTransform(117.3,-4.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAnIAQhNIASAAQAMAAAEAGQAEAFgDALIgBAGQgCALgHAFQgGAEgKAAIgBAAIgGAdgAAAgDIABAAIADgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBIABgIIAAgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_14.setTransform(113.5521,-4.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAmIAAhLIASAAQAJAAAGAFQAGAHAAAKIAAAfQAAAKgGAGQgGAHgIgBgAgCAWIABAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAggIgBgEIgCAAIgBAAg");
	this.shape_15.setTransform(28.825,-4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgQAmIAAhLIAgAAIAAAQIgPAAIAAANIANAAIAAAQIgNAAIAAAOIAQAAIAAAQg");
	this.shape_16.setTransform(24.75,-4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAFAmIgBgOIgIAAIgBAOIgRAAIAKhLIAZAAIAKBLgAAAgMIgCATIAFAAIgDgTIAAgHg");
	this.shape_17.setTransform(20.25,-4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAmIgEgvIAAAvIgSAAIAAhLIAWAAIAFAuIAAguIASAAIAABLg");
	this.shape_18.setTransform(13.975,-4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIAmIAAhLIARAAIAABLg");
	this.shape_19.setTransform(10.225,-4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSAkIAEgQQAIADADAAQAFAAAAgFIAAAAIgBgFIgFgGIgDgDIgIgJQgCgFAAgHIAAAAQAAgKAFgGQAFgGAIAAQAIAAAJAEIgFAPIgIgCQgFAAAAAFIAAACIAAABIAAABIACACIABABIACACIAEAEIAIAJQACAFAAAHQAAALgGAGQgEAGgJAAQgJAAgJgEg");
	this.shape_20.setTransform(5.8,-4.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAmIAAhLIAgAAIAAAQIgQAAIAAANIAOAAIAAAQIgOAAIAAAOIARAAIAAAQg");
	this.shape_21.setTransform(2.05,-4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgTAmIAAgPIAVgsIgSAAIAAgQIAkAAIAAAPIgVAsIAVAAIAAAQg");
	this.shape_22.setTransform(-2.15,-4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgIAmIAAhLIARAAIAABLg");
	this.shape_23.setTransform(-5.525,-4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AADAmIgFgdIgBAAIAAAdIgSAAIAAhLIATAAQALgBAFAGQAFAFAAALIAAAGQAAAKgGAFIAJAhgAgDgEIABAAIACgBIABgEIAAgHIgBgDIgCgBIgBAAg");
	this.shape_24.setTransform(-9.175,-4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgTAmIAAhLIASAAQAMgBAEAGQAFAFAAALIAAAHQAAAKgGAFQgFAEgKAAIgBAAIAAAcgAgCgDIABAAIACgBIABgEIAAgIIgBgDIgCgBIgBAAg");
	this.shape_25.setTransform(-13.925,-4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgHAxIAAhhIAPAAIAABhg");
	this.shape_26.setTransform(-21.375,-2.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAmIAAgVIgPg2IASAAIAFAaIAFgaIASAAIgOA2IAAAVg");
	this.shape_27.setTransform(-28.95,-4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRAmIAAhLIARAAIAAA6IASAAIAAARg");
	this.shape_28.setTransform(-33.6,-4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgTAmIAAhLIASAAQAMgBAEAGQAFAFAAALIAAAHQAAAKgGAFQgFAEgKAAIgBAAIAAAcgAgCgDIABAAIACgBIABgEIAAgIIgBgDIgCgBIgBAAg");
	this.shape_29.setTransform(-37.975,-4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgTAmIAAhLIASAAQAMgBAEAGQAFAFAAALIAAAHQAAAKgGAFQgFAEgKAAIgBAAIAAAcgAgCgDIABAAIACgBIABgEIAAgIIgBgDIgCgBIgBAAg");
	this.shape_30.setTransform(-42.575,-4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAFAmIgBgOIgIAAIgBAOIgRAAIAKhLIAYAAIALBLgAAAgMIgBATIADAAIgCgTIAAgHg");
	this.shape_31.setTransform(-47.4,-4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgSAkIAEgQQAIADADAAQAFAAAAgFIAAAAIgBgFIgFgGIgDgDIgIgJQgCgFAAgHIAAAAQAAgKAFgGQAFgGAIAAQAIAAAJAEIgFAPIgIgCQgFAAAAAFIAAACIAAABIAAABIACACIABABIACACIAEAEIAIAJQACAFAAAHQAAALgGAGQgEAGgJAAQgJAAgJgEg");
	this.shape_32.setTransform(-53.15,-4.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEAQIgDgfIAPAAIgDAfg");
	this.shape_33.setTransform(-56.325,-6.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNAiQgGgGAAgLIAAggQAAgMAGgGQAGgGAKAAQAIAAAHAEIgGAOIgHgBQgFAAgBAIIAAAdQAAAEACACQACACADAAIAHgBIAHAOQgJAEgIAAQgKAAgGgGg");
	this.shape_34.setTransform(-59.4,-4.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUAjQgGgFAAgLIAAgJQAAgFACgEQADgCAEgBQgDgHAAgFIAAgFQgBgLAEgEQAEgFAKAAQAIAAACAFQAEAEAAALIAAAFQAAALgLADIAHAJQgBgDAAgGIAOAAIAAAEIAAAFIAAADIAAADIgBADIgBADIgBADIAKAPIgSAAIgCgDQgEAEgGAAQgMAAgFgFgAgJAMIAAAFQAAAEABACQACACAEAAIACAAIgJgPgAgEgWIgBABIgBABIAAAJIAAADQAFgBAAgEIAAgHIgBgCIgBgBIgBABg");
	this.shape_35.setTransform(-64.65,-4.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgIAmIAAg6IgKAAIAAgRIAlAAIAAARIgKAAIAAA6g");
	this.shape_36.setTransform(-69.7,-4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgHAxIAAhhIAPAAIAABhg");
	this.shape_37.setTransform(-76.825,-2.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgEAnIAAg5IgIACIAAgQIAZgGIAABNg");
	this.shape_38.setTransform(-82.525,-4.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgOAiQgFgGAAgKIAAgFQAAgIAFgFQgDgFAAgHIAAgFQAAgKAEgGQAFgGAIAAQAIAAAFAGQAFAGABAKIAAAFQAAAHgEAFQAFAFAAAIIAAAFQAAAKgGAGQgFAGgJAAQgIAAgGgGgAgBAJIAAAMQAAAAAAABQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgMQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAABAAAAgAgBgUIAAAOIAAACIABAAIACAAIAAgCIAAgOQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAg");
	this.shape_39.setTransform(-86.3,-4.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgSAnIAAgPQAVgYAAgNIAAgBQAAgEgCgBQgBgCgDAAIgKACIgGgPQAIgEALAAQAJAAAFAHQAGAHAAAJIAAABIgCALIgFAJIgGAJIgHAIIASAAIAAAQg");
	this.shape_40.setTransform(-90.725,-4.075);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgSAkIAFgQQAHADADAAQAGAAgBgFIAAAAIgBgFIgEgGIgEgDIgIgJQgCgFAAgHIAAAAQAAgKAFgGQAGgGAHAAQAIAAAIAEIgEAPIgIgCQgFAAAAAFIAAACIAAABIAAABIACACIACABIABACIAEAEIAIAJQACAFAAAHQAAALgFAGQgGAGgIAAQgJAAgJgEg");
	this.shape_41.setTransform(-96.15,-4.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgQAmIAAhLIAhAAIAAAQIgRAAIAAANIANAAIAAAQIgNAAIAAAOIARAAIAAAQg");
	this.shape_42.setTransform(-99.95,-4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgIAmIAAhLIARAAIAABLg");
	this.shape_43.setTransform(-103.125,-4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AADAmIgFgdIgBAAIAAAdIgSAAIAAhLIATAAQALgBAFAGQAFAFAAALIAAAGQAAAKgGAFIAJAhgAgDgEIABAAIACgBIABgEIAAgHIgBgDIgCgBIgBAAg");
	this.shape_44.setTransform(-106.775,-4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgQAmIAAhLIAgAAIAAAQIgQAAIAAANIAOAAIAAAQIgOAAIAAAOIARAAIAAAQg");
	this.shape_45.setTransform(-111,-4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgSAkIAFgQQAHADADAAQAGAAgBgFIAAAAIgBgFIgEgGIgEgDIgIgJQgCgFAAgHIAAAAQAAgKAFgGQAGgGAHAAQAIAAAIAEIgEAPIgIgCQgFAAAAAFIAAACIAAABIAAABIACACIACABIABACIAEAEIAIAJQACAFAAAHQAAALgFAGQgGAGgIAAQgJAAgJgEg");
	this.shape_46.setTransform(-115.05,-4.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.3,-11,308.4,15.2);


// stage content:
(lib.bigticketconversionhtml5320x100 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(123.8,95.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(303));

	// ticket
	this.instance_1 = new lib.ticket_mc();
	this.instance_1.setTransform(83.35,47.5,0.0831,0.0831);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(209).to({_off:false},0).wait(1).to({regX:-1241.4,regY:-154.7,x:-19.6,y:34.65,alpha:0.0032},0).wait(1).to({x:-18.7,alpha:0.0145},0).wait(1).to({x:-17,alpha:0.0371},0).wait(1).to({x:-13.95,alpha:0.077},0).wait(1).to({x:-8.6,y:34.7,alpha:0.1467},0).wait(1).to({x:0.65,y:34.75,alpha:0.2672},0).wait(1).to({x:12.05,y:34.8,alpha:0.4164},0).wait(1).to({x:23.45,y:34.85,alpha:0.5648},0).wait(1).to({x:32.95,y:34.9,alpha:0.6887},0).wait(1).to({x:40.4,y:34.95,alpha:0.7859},0).wait(1).to({x:46.25,alpha:0.8625},0).wait(1).to({x:50.85,y:35,alpha:0.9229},0).wait(1).to({x:53.95,alpha:0.9628},0).wait(1).to({x:55.7,alpha:0.9857},0).wait(1).to({x:56.55,alpha:0.9969},0).wait(1).to({regX:0,regY:0,x:159.95,y:47.9,alpha:1},0).wait(78));

	// logo
	this.instance_2 = new lib.bt_logo();
	this.instance_2.setTransform(159.95,28.8,0.0852,0.0852,0,0,0,0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(209).to({alpha:0},16).wait(78));

	// cta
	this.instance_3 = new lib.cta_mc();
	this.instance_3.setTransform(159.95,64.7,0.0598,0.0598,0,0,0,0,0.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(225).to({_off:false},0).wait(1).to({regX:-1716.3,regY:227.5,x:57.3,y:78.2,alpha:0.0032},0).wait(1).to({y:78.15,alpha:0.0145},0).wait(1).to({y:78.1,alpha:0.0371},0).wait(1).to({y:77.95,alpha:0.077},0).wait(1).to({y:77.7,alpha:0.1467},0).wait(1).to({y:77.25,alpha:0.2672},0).wait(1).to({y:76.7,alpha:0.4164},0).wait(1).to({y:76.15,alpha:0.5648},0).wait(1).to({y:75.7,alpha:0.6887},0).wait(1).to({y:75.3,alpha:0.7859},0).wait(1).to({y:75.05,alpha:0.8625},0).wait(1).to({y:74.8,alpha:0.9229},0).wait(1).to({y:74.65,alpha:0.9628},0).wait(1).to({y:74.6,alpha:0.9857},0).wait(1).to({y:74.55,alpha:0.9969},0).wait(1).to({regX:0,regY:0.8,x:159.95,y:61,alpha:1},0).wait(62));

	// main_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(159.7,69.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:671.2,regY:-147.1,x:229.55,y:53.95,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:53.9,alpha:0.0435},0).wait(1).to({y:53.8,alpha:0.0919},0).wait(1).to({y:53.6,alpha:0.1816},0).wait(1).to({y:53.3,alpha:0.3248},0).wait(1).to({y:52.95,alpha:0.4878},0).wait(1).to({y:52.65,alpha:0.6345},0).wait(1).to({y:52.4,alpha:0.7499},0).wait(1).to({y:52.2,alpha:0.8388},0).wait(1).to({y:52.05,alpha:0.9088},0).wait(1).to({y:51.95,alpha:0.9564},0).wait(1).to({y:51.9,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:67.25,alpha:1},0).wait(69).to({regX:671.2,regY:-147.1,x:229.55,y:51.9,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:51.95,alpha:0.9565},0).wait(1).to({y:52.05,alpha:0.9081},0).wait(1).to({y:52.25,alpha:0.8184},0).wait(1).to({y:52.55,alpha:0.6752},0).wait(1).to({y:52.9,alpha:0.5122},0).wait(1).to({y:53.2,alpha:0.3655},0).wait(1).to({y:53.45,alpha:0.2501},0).wait(1).to({y:53.65,alpha:0.1612},0).wait(1).to({y:53.8,alpha:0.0912},0).wait(1).to({y:53.9,alpha:0.0436},0).wait(1).to({y:53.95,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:69.35,alpha:0},0).to({_off:true},1).wait(189));

	// sub_caption
	this.instance_5 = new lib.daily_caption_mc();
	this.instance_5.setTransform(159.7,69.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:742.5,regY:-169.8,x:236.95,y:51.55,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:51.5,alpha:0.0435},0).wait(1).to({y:51.4,alpha:0.0919},0).wait(1).to({y:51.2,alpha:0.1816},0).wait(1).to({y:50.9,alpha:0.3248},0).wait(1).to({y:50.55,alpha:0.4878},0).wait(1).to({y:50.25,alpha:0.6345},0).wait(1).to({y:50,alpha:0.7499},0).wait(1).to({y:49.8,alpha:0.8388},0).wait(1).to({y:49.65,alpha:0.9088},0).wait(1).to({y:49.55,alpha:0.9564},0).wait(1).to({y:49.5,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:67.25,alpha:1},0).wait(97).to({regX:742.5,regY:-169.8,x:236.95,y:49.5,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:49.55,alpha:0.9565},0).wait(1).to({y:49.65,alpha:0.9081},0).wait(1).to({y:49.85,alpha:0.8184},0).wait(1).to({y:50.15,alpha:0.6752},0).wait(1).to({y:50.5,alpha:0.5122},0).wait(1).to({y:50.8,alpha:0.3655},0).wait(1).to({y:51.05,alpha:0.2501},0).wait(1).to({y:51.25,alpha:0.1612},0).wait(1).to({y:51.4,alpha:0.0912},0).wait(1).to({y:51.5,alpha:0.0436},0).wait(1).to({y:51.55,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:69.35,alpha:0},0).to({_off:true},1).wait(78));

	// second_prize_mc
	this.instance_6 = new lib.second_prize_mc();
	this.instance_6.setTransform(113.05,50.85,0.3125,0.3125,0,0,0,0.1,0);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({regX:4.3,regY:2.5,x:114.35,y:51.6,alpha:0.0037},0).wait(1).to({y:51.5,alpha:0.0167},0).wait(1).to({y:51.3,alpha:0.0435},0).wait(1).to({y:51,alpha:0.0919},0).wait(1).to({y:50.35,alpha:0.1816},0).wait(1).to({y:49.35,alpha:0.3248},0).wait(1).to({y:48.2,alpha:0.4878},0).wait(1).to({y:47.2,alpha:0.6345},0).wait(1).to({y:46.4,alpha:0.7499},0).wait(1).to({y:45.75,alpha:0.8388},0).wait(1).to({y:45.25,alpha:0.9088},0).wait(1).to({y:44.95,alpha:0.9564},0).wait(1).to({y:44.75,alpha:0.9834},0).wait(1).to({y:44.65,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0,x:113.05,y:43.85,alpha:1},0).wait(97).to({regX:4.3,regY:2.5,x:114.85,y:44.65},0).wait(1).to({scaleX:0.3123,scaleY:0.3123,x:116.75},0).wait(1).to({scaleX:0.312,scaleY:0.312,x:120.7,y:44.7},0).wait(1).to({scaleX:0.3115,scaleY:0.3115,x:127.75,y:44.75},0).wait(1).to({scaleX:0.3105,scaleY:0.3105,x:140.85,y:44.85},0).wait(1).to({scaleX:0.309,scaleY:0.309,x:161.8,y:45},0).wait(1).to({scaleX:0.3072,scaleY:0.3072,x:185.6,y:45.2},0).wait(1).to({scaleX:0.3056,scaleY:0.3056,x:207.05,y:45.4},0).wait(1).to({scaleX:0.3043,scaleY:0.3043,x:223.9,y:45.55},0).wait(1).to({scaleX:0.3033,scaleY:0.3033,x:236.9,y:45.65},0).wait(1).to({scaleX:0.3026,scaleY:0.3026,x:247.15,y:45.75},0).wait(1).to({scaleX:0.302,scaleY:0.302,x:254.1,y:45.8},0).wait(1).to({scaleX:0.3017,scaleY:0.3017,x:258.05,y:45.85},0).wait(1).to({scaleX:0.3016,scaleY:0.3016,x:259.95},0).wait(1).to({regX:0.5,regY:0,x:259.25,y:45.15},0).wait(79));

	// promo
	this.instance_7 = new lib.promo_mc();
	this.instance_7.setTransform(238.6,48.35,0.0867,0.0867,0,0,0,0.6,0.6);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-671.9,regY:-46.8,x:180,y:44.25,alpha:0.0037},0).wait(1).to({x:178.95,alpha:0.0167},0).wait(1).to({x:176.85,alpha:0.0435},0).wait(1).to({x:173.05,alpha:0.0919},0).wait(1).to({x:166,alpha:0.1816},0).wait(1).to({x:154.75,alpha:0.3248},0).wait(1).to({x:141.9,alpha:0.4878},0).wait(1).to({x:130.35,alpha:0.6345},0).wait(1).to({x:121.3,alpha:0.7499},0).wait(1).to({x:114.3,alpha:0.8388},0).wait(1).to({x:108.8,alpha:0.9088},0).wait(1).to({x:105.05,alpha:0.9564},0).wait(1).to({x:102.95,alpha:0.9834},0).wait(1).to({x:101.9,alpha:0.9964},0).wait(1).to({regX:0,regY:0.6,x:159.95,y:48.35,alpha:1},0).wait(83).to({alpha:0},15).wait(96).to({regX:-582.2,regY:-46.7,x:109.45,y:44.25},0).wait(1).to({regX:-671.9,regY:-46.8,x:101.55,y:44.2},0).wait(1).to({x:101.6},0).wait(1).to({x:103.1,y:44.25,alpha:0.0206},0).wait(1).to({scaleX:0.0865,scaleY:0.0865,x:107.05,y:44.3,alpha:0.075},0).wait(1).to({scaleX:0.0863,scaleY:0.0863,x:112,y:44.4,alpha:0.1453},0).wait(1).to({scaleX:0.0861,scaleY:0.0861,x:118.45,y:44.5,alpha:0.2353},0).wait(1).to({scaleX:0.0857,scaleY:0.0857,x:126.6,y:44.65,alpha:0.3498},0).wait(1).to({scaleX:0.0853,scaleY:0.0853,x:136.3,y:44.8,alpha:0.4866},0).wait(1).to({scaleX:0.0849,scaleY:0.0849,x:146.35,y:45.05,alpha:0.6273},0).wait(1).to({scaleX:0.0846,scaleY:0.0846,x:155.05,y:45.15,alpha:0.7499},0).wait(1).to({scaleX:0.0843,scaleY:0.0843,x:162.05,y:45.25,alpha:0.848},0).wait(1).to({scaleX:0.0841,scaleY:0.0841,x:167.55,y:45.35,alpha:0.9252},0).wait(1).to({scaleX:0.0839,scaleY:0.0839,x:171.85,y:45.4,alpha:0.9846},0).wait(1).to({x:172.95,y:45.5,alpha:1},0).wait(1).to({regX:-581.9,regY:-45.9,x:180.45},0).wait(79));

	// background
	this.instance_8 = new lib.background_mc();
	this.instance_8.setTransform(160,50.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(303));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(89.9,50.1,238.6,49.99999999999999);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 320,
	height: 100,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_2ndprize.png", id:"_2ndprize"},
		{src:"images/_320x100.jpg", id:"_320x100"},
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