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
	this.instance.setTransform(-1871,-530,4.7611,4.7611);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-1871,-530,1837.8,990.3), null);


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
	this.shape.graphics.f("#FFE400").s().p("AidMwQg/gxAAhhQAAhWA/g2QA/g1BeAAQBfAAA/A1QA/A2AABWQAABhg/AxQg/AzhfAAQheAAg/gzgAjDElIAAyHIGHAAIAASHg");
	this.shape.setTransform(1072.425,47.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("ABGNXIiHqLIgcAAIAAKLImIAAIAA6tIGkAAQEOAABrB6QBqB5AADoIAAB6QAAD7h+BtIDCLwgAhdhvIATAAQAzAAAUgZQAVgWAAg5IAAikQAAg5gVgYQgUgXgzABIgTAAg");
	this.shape_1.setTransform(976.875,46.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AB+NXIgflOIi9AAIgfFOImAAAIDh6tII5AAIDhatgAgIktIgwHKIBxAAIgwnKIgIiOg");
	this.shape_2.setTransform(866.625,46.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("Al6NXIAA6tILxAAIAAFtIlqAAIAAEjIEmAAIAAFuIkmAAIAAFDIFuAAIAAFsg");
	this.shape_3.setTransform(771.425,46.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AjCNXIAAnlIlIzIIGWAAIB2I8IB1o8IGUAAIlHTIIAAHlg");
	this.shape_4.setTransform(672.85,46.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("Al6NXIAA6tILxAAIAAFtIlqAAIAAEjIEmAAIAAFuIkmAAIAAFDIFuAAIAAFsg");
	this.shape_5.setTransform(551.125,46.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AA2NXIAAqjIhqAAIAAKjImJAAIAA6tIGJAAIAAKFIBqAAIAAqFIGIAAIAAatg");
	this.shape_6.setTransform(456.025,46.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AjDNXIAA0rIjwAAIAAmCINnAAIAAGCIjvAAIAAUrg");
	this.shape_7.setTransform(362.475,46.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AmDNXIAA6tIMHAAIAAFtImAAAIAAEjIE9AAIAAFuIk9AAIAAKvg");
	this.shape_8.setTransform(249.5,46.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AABNwQjgAAh0h5Qhyh7AAjjIAAsuQAAjrB2h4QB2h3DZAAIAEAAQDfAAByB6QByB7AADlIAAMuQAADrh2B3Qh1B1jWAAgAg0m0IAANrQAABIA0AAIABAAQA1AAAAhIIAAtrQAAhKg2ABIgCAAQgygBAABKg");
	this.shape_9.setTransform(152.7,46.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AA2NXIAAqjIhqAAIAAKjImJAAIAA6tIGJAAIAAKFIBqAAIAAqFIGIAAIAAatg");
	this.shape_10.setTransform(984.425,-200.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AmoMfIBmlgQCnBBBHgBQCKAAAAhrIAAgLQAAgwgig0Qgig1hVhUIhKhIQh4h3g1hnQg0hmAAigIAAgFQAAjfByh+QBxh9DKAAQClAADDBOIhlFKQh8gmg7AAQiGAAAABtIAAAFQAAAQAFAPQAFAOAIAOQAHALAOATIAbAfIAkAmIAmApQA1A5AcAaQB7B7A3BkQA1BkAACtIAAACQAADoh5CDQh6CEjJAAQjKAAjLhRg");
	this.shape_11.setTransform(891.025,-201.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AB+NXIgflOIi9AAIgfFOImAAAIDh6tII5AAIDhatgAgIktIgwHKIBxAAIgwnKIgIiOg");
	this.shape_12.setTransform(791.175,-200.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AA7NyQjyAAh9iDQh8iDAAj/IAArZQAAj/B8iDQB9iDDyAAIACAAQC5ABCbBGIiNE8Qg8gThKAAIgDAAQiaAAAAC7IAAKNQAABYAvAyQAxAxBQAAIACAAQBFAABOgfICLE7QirBUjJAAg");
	this.shape_13.setTransform(694.775,-201.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AB+NXIgflOIi9AAIgfFOImAAAIDh6tII5AAIDhatgAgIktIgwHKIBxAAIgwnKIgIiOg");
	this.shape_14.setTransform(562.425,-200.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AnFGWIAAsrQgBjcCPiAQCMiBDfAAQDQAADDBsIiOFSQhjg1h0AAQiZAAADCrIAALtQAABQA7AAQAcAAARgKIAAppIFyAAIAANqQh1BDhYAdQhXAdh0gBQnUAAABncg");
	this.shape_15.setTransform(459.25,-201.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("Al6NXIAA6tILxAAIAAFtIlqAAIAAEjIEmAAIAAFuIkmAAIAAFDIFuAAIAAFsg");
	this.shape_16.setTransform(367.525,-200.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("AEXNXIAA0AIgRDDIhzQ9IknAAIh0w9IgRjDIAAUAIl7AAIAA6tIJTAAIA4MqIAICBIALiBIA8sqIJPAAIAAatg");
	this.shape_17.setTransform(251.025,-200.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AjDNXIAA0rIjwAAIAAmCINnAAIAAGCIjvAAIAAUrg");
	this.shape_18.setTransform(1021.175,-448.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AmoMfIBmlhQCnBCBHAAQCKAAAAhrIAAgMQAAgwgig1Qgig0hVhVIhKhIQh4h2g1hnQg0hmAAihIAAgDQAAjgByh9QBxh+DKAAQClAADDBOIhlFJQh8gmg7AAQiGAAAABtIAAAHQAAAPAFAOQAFAPAIANQAHANAOASIAbAfIAkAmIAmAqQA1A4AcAZQB7B8A3BkQA1BkAACtIAAACQAADnh5CFQh6CDjJAAQjKAAjLhRg");
	this.shape_19.setTransform(931.875,-448.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Al6NXIAA6tILxAAIAAFsIlqAAIAAEkIEmAAIAAFtIkmAAIAAFDIFuAAIAAFtg");
	this.shape_20.setTransform(847.325,-448.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AnGGWIAAsrQAAjbCPiBQCMiBDfAAQDQAADCBsIiNFSQhig1h1gBQiYAAACCrIAALuQAABQA7AAQAcAAARgKIAAppIFzAAIAANqQh2BDhXAdQhYAdh1AAQnTgBAAncg");
	this.shape_21.setTransform(755.2,-448.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AnGGWIAAsrQABjbCNiBQCOiBDeAAQDRAADBBsIiNFSQhig1h1gBQiYAAACCrIAALuQAABQA8AAQAcAAAQgKIAAppIFzAAIAANqQh2BDhXAdQhYAdh1AAQnSgBgBncg");
	this.shape_22.setTransform(655.5,-448.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AjDNXIAA6tIGHAAIAAatg");
	this.shape_23.setTransform(577.85,-448.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AnINXIAA6tIGtAAQDWAAB+BnQB+BoAADVIAAAqQAACFgqBRQgrBRhhAqQDIBHAAEaIAABoQAADbh4B1Qh5B1jQAAgAhBHlIAYAAQAvgBASgWQASgWAAgyIAAinQAAg0gRgWQgQgYgyAAIgYAAgAhBi+IAfAAQAvAAASgWQASgWAAgxIAAhmQAAgzgRgXQgRgYgxAAIgfAAg");
	this.shape_24.setTransform(500.85,-448.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Al6NXIAA6tILxAAIAAFsIlqAAIAAEkIEmAAIAAFtIkmAAIAAFDIFuAAIAAFtg");
	this.shape_25.setTransform(381.425,-448.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA2NXIAAqiIhqAAIAAKiImJAAIAA6tIGJAAIAAKFIBqAAIAAqFIGIAAIAAatg");
	this.shape_26.setTransform(286.325,-448.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AjDNXIAA0rIjwAAIAAmCINnAAIAAGCIjvAAIAAUrg");
	this.shape_27.setTransform(192.775,-448.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-344.7,-579.6,1903.4,805.9000000000001), null);


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
	this.instance.setTransform(-1017,-496,3.1301,3.1301);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-1017,-496,870.2,898.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AidMwQg/gxAAhhQAAhWA/g2QA/g1BeAAQBfAAA/A1QA/A2AABWQAABhg/AxQg/AzhfAAQheAAg/gzgAjDElIAAyHIGHAAIAASHg");
	this.shape.setTransform(1087.025,-54.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA2NXIAAqiIhqAAIAAKiImJAAIAA6tIGJAAIAAKFIBqAAIAAqFIGIAAIAAatg");
	this.shape_1.setTransform(995.425,-55.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjDNXIAA0rIjwAAIAAmCINnAAIAAGCIjvAAIAAUrg");
	this.shape_2.setTransform(901.925,-55.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AACNwQjhAAhzh5Qh0h7AAjkIAAssQAAjtB2h3QB3h3DZAAIAEAAQDfAAByB6QBxB7ABDmIAAMsQAADth2B1Qh0B2jYAAgAg0m1IAANsQAABJA0gBIACAAQA0ABAAhJIAAtsQAAhIg2AAIgCAAQgyAAAABIg");
	this.shape_3.setTransform(805.5,-55.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AnINXIAA6tIGuAAQDVAAB/BnQB9BoAADVIAAAqQAACFgqBRQgrBRhhAqQDJBHAAEaIAABoQAADbh5B1Qh5B1jPAAgAhBHkIAYAAQAwAAARgWQASgWAAgyIAAinQAAg0gRgWQgRgYgxAAIgYAAgAhBi+IAfAAQAuAAATgWQASgWAAgxIAAhmQAAgzgRgYQgRgWgxAAIgfAAg");
	this.shape_4.setTransform(702.65,-55.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABGNXIiHqMIgcAAIAAKMImIAAIAA6tIGkAAQEOAABrB5QBqB6AADnIAAB7QAAD7h+BsIDCLxgAhdhwIATAAQAzAAAUgYQAVgWAAg4IAAimQAAg4gVgYQgUgWgzAAIgTAAg");
	this.shape_5.setTransform(568.325,-55.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AABNwQjgAAh0h5Qhyh7gBjkIAAssQAAjtB3h3QB2h3DZAAIADAAQDgAAByB6QByB7gBDmIAAMsQABDth2B1Qh1B2jWAAgAg0m1IAANsQAABJA0gBIABAAQA1ABAAhJIAAtsQAAhIg2AAIgCAAQgyAAAABIg");
	this.shape_6.setTransform(461.65,-55.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AnDNXIAA6tIGkAAQDSAACICJQCJCJAADmIAAKyQAADpiJCNQiICNjQAAgAg7HkIAPAAQA6AAAQgaQASgZAAhJIAAriQAAhBgWgTQgUgVgyABIgPAAg");
	this.shape_7.setTransform(1165.875,-346.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AmPNXIAA6tIGIAAIAAUrIGXAAIAAGCg");
	this.shape_8.setTransform(1065.925,-346.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AABNwQjgAAh0h5Qhyh7gBjjIAAsuQAAjrB3h4QB2h3DZAAIADAAQDgAAByB6QByB7gBDlIAAMuQABDrh2B2Qh1B2jWAAgAg0m0IAANrQAABIA0AAIABAAQA1AAAAhIIAAtrQAAhKg2ABIgCAAQgygBAABKg");
	this.shape_9.setTransform(967.9,-347.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AnFGWIAAsrQAAjcCNiAQCOiBDeAAQDQAADDBsIiOFSQhjg1h0AAQiZAAADCrIAALtQAABQA8AAQAbAAARgKIAAppIFyAAIAANqQh1BDhYAdQhXAdh0gBQnTAAAAncg");
	this.shape_10.setTransform(868.2,-346.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AjCNXIAAnlIlIzIIGVAAIB3I8IB0o8IGVAAIlHTIIAAHlg");
	this.shape_11.setTransform(734.65,-346.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AmPNXIAA6tIGIAAIAAUrIGXAAIAAGCg");
	this.shape_12.setTransform(631.875,-346.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AjDNXIAA6tIGHAAIAAatg");
	this.shape_13.setTransform(559.7,-346.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AB+NXIgflOIi9AAIgfFOImAAAIDh6tII5AAIDhatgAgIktIgwHKIBxAAIgwnKIgIiOg");
	this.shape_14.setTransform(478.525,-346.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AnDNXIAA6tIGkAAQDSAACICJQCJCJAADmIAAKyQAADpiJCNQiICNjQAAgAg7HkIAPAAQA6AAAQgaQASgZAAhJIAAriQAAhBgWgTQgUgVgyABIgPAAg");
	this.shape_15.setTransform(371.675,-346.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-182.8,-477.8,1903.3999999999999,602.2), null);


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
	this.instance.setTransform(212,-466,8.858,8.858);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(212,-466,2161.4,416.3), null);


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
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAnIAAgXIgPg2IASAAIAFAaIAFgaIASAAIgOA2IAAAXg");
	this.shape_15.setTransform(-21.85,-3.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRAnIAAhNIARAAIAAA7IASAAIAAASg");
	this.shape_16.setTransform(-26.45,-3.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTAnIAAhNIASAAQAMABAEAFQAFAGAAAKIAAAGQAAALgGAEQgFAFgKAAIgBAAIAAAdgAgCgDIABAAIACgBIABgEIAAgIIgBgEIgCgBIgBAAg");
	this.shape_17.setTransform(-30.825,-3.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTAnIAAhNIASAAQAMABAEAFQAFAGAAAKIAAAGQAAALgGAEQgFAFgKAAIgBAAIAAAdgAgCgDIABAAIACgBIABgEIAAgIIgBgEIgCgBIgBAAg");
	this.shape_18.setTransform(-35.475,-3.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAGAnIgCgQIgHAAIgCAQIgRAAIAKhNIAZAAIAKBNgAAAgNIgCAUIAFAAIgDgUIAAgGg");
	this.shape_19.setTransform(-40.25,-3.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSAkIAFgQQAHADADAAQAGAAAAgFIAAAAIgCgFIgEgGIgEgDIgHgJQgDgFAAgHIAAAAQAAgKAFgGQAGgGAIAAQAHAAAIAEIgEAPIgIgCQgFAAAAAFIAAACIAAABIAAABIACACIACABIABACIAEAEIAIAJQACAFAAAHQAAALgFAGQgGAGgIAAQgJAAgJgEg");
	this.shape_20.setTransform(-46,-3.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEARIgDghIAPAAIgDAhg");
	this.shape_21.setTransform(-49.225,-5.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNAiQgFgGgBgLIAAggQABgMAFgGQAGgGAKAAQAIAAAHAEIgGAOIgHgBQgGAAAAAIIAAAdQAAAEABACQADACADAAIAHgBIAHAOQgJAEgIAAQgKAAgGgGg");
	this.shape_22.setTransform(-52.3,-3.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUAjQgGgFAAgLIAAgJQAAgFACgEQADgCAEgBQgDgHAAgFIAAgFQgBgLAEgEQAEgFAKAAQAIAAADAFQADAEAAALIAAAFQAAALgLADIAIAJQgCgDAAgGIAOAAIAAAEIAAAFIAAADIAAADIgBADIgBADIgBADIAKAPIgSAAIgBgDQgFAEgGAAQgMAAgFgFgAgJAMIAAAFQAAAEABACQACACAEAAIACAAIgJgPgAgFgWIAAABIgBABIAAAJIAAADQAFgBAAgEIAAgHIgBgCIgBgBIgCABg");
	this.shape_23.setTransform(-57.55,-3.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHAnIAAg7IgMAAIAAgSIAnAAIAAASIgLAAIAAA7g");
	this.shape_24.setTransform(-62.55,-3.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHAxIAAhhIAPAAIAABhg");
	this.shape_25.setTransform(-69.675,-2.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgMAoIAGgPIAGgNIgDAAQgQAAAAgTIAAgJQAAgLAFgFQAGgHAIAAQAJABAFAEQAGAFAAAKIAAAJQAAAHgCAEQgDAMgMAbgAgBgUIAAAQQAAABAAAAQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgQQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAABAAAAg");
	this.shape_26.setTransform(-75.85,-3.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgOAjQgFgFAAgKIAAgJQAAgHACgEIAOgnIAQAAIgGAOIgFAOIABAAQARAAAAATIAAAJQAAAKgGAHQgFAGgJAAQgIAAgGgFgAgBAFIAAAQQAAAAAAABQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgQQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAABAAAAg");
	this.shape_27.setTransform(-80.45,-3.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSAnIAAgPQAVgYAAgNIAAgBQAAgEgCgBQgBgCgDAAIgKACIgGgPQAIgEALAAQAJAAAFAHQAGAHAAAJIAAABIgCALIgFAJIgGAJIgHAIIASAAIAAAQg");
	this.shape_28.setTransform(-84.925,-3.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgSAkIAEgQQAIADADAAQAFAAABgFIAAAAIgCgFIgFgGIgDgDIgHgJQgDgFAAgHIAAAAQAAgKAFgGQAFgGAJAAQAHAAAJAEIgFAPIgIgCQgFAAAAAFIAAACIAAABIABABIABACIABABIACACIAEAEIAIAJQACAFAAAHQAAALgGAGQgEAGgJAAQgJAAgJgEg");
	this.shape_29.setTransform(-90.35,-3.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQAnIAAhNIAhAAIAAARIgRAAIAAANIANAAIAAAPIgNAAIAAAPIARAAIAAARg");
	this.shape_30.setTransform(-94.1,-3.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgIAnIAAhNIARAAIAABNg");
	this.shape_31.setTransform(-97.275,-3.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AADAnIgFgeIgBAAIAAAeIgSAAIAAhNIATAAQALABAFAFQAFAGAAAKIAAAFQAAALgGAEIAJAjgAgDgEIABAAIACgBIABgEIAAgHIgBgEIgCgBIgBAAg");
	this.shape_32.setTransform(-100.925,-3.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgQAnIAAhNIAgAAIAAARIgPAAIAAANIAMAAIAAAPIgMAAIAAAPIAQAAIAAARg");
	this.shape_33.setTransform(-105.2,-3.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgSAkIAFgQQAHADADAAQAGAAgBgFIAAAAIgBgFIgEgGIgEgDIgIgJQgCgFAAgHIAAAAQAAgKAFgGQAGgGAHAAQAIAAAIAEIgEAPIgIgCQgFAAAAAFIAAACIAAABIAAABIACACIACABIABACIAEAEIAIAJQACAFAAAHQAAALgFAGQgGAGgIAAQgJAAgJgEg");
	this.shape_34.setTransform(-109.2,-3.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.5,-11,302.6,15.7);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(283));

	// ticket
	this.instance_1 = new lib.ticket_mc();
	this.instance_1.setTransform(83.35,47.5,0.0831,0.0831);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(189).to({_off:false},0).wait(1).to({regX:-952.1,regY:-34.8,x:4.45,y:44.6,alpha:0.0032},0).wait(1).to({x:5.35,alpha:0.0145},0).wait(1).to({x:7.05,alpha:0.0371},0).wait(1).to({x:10.1,alpha:0.077},0).wait(1).to({x:15.45,y:44.65,alpha:0.1467},0).wait(1).to({x:24.7,y:44.7,alpha:0.2672},0).wait(1).to({x:36.1,y:44.75,alpha:0.4164},0).wait(1).to({x:47.5,y:44.8,alpha:0.5648},0).wait(1).to({x:57,y:44.85,alpha:0.6887},0).wait(1).to({x:64.45,y:44.9,alpha:0.7859},0).wait(1).to({x:70.3,alpha:0.8625},0).wait(1).to({x:74.9,y:44.95,alpha:0.9229},0).wait(1).to({x:78,alpha:0.9628},0).wait(1).to({x:79.75,alpha:0.9857},0).wait(1).to({x:80.6,alpha:0.9969},0).wait(1).to({regX:0,regY:0,x:159.95,y:47.9,alpha:1},0).wait(78));

	// logo
	this.instance_2 = new lib.bt_logo();
	this.instance_2.setTransform(159.95,28.8,0.0852,0.0852,0,0,0,0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(189).to({alpha:0},16).wait(78));

	// cta
	this.instance_3 = new lib.cta_mc();
	this.instance_3.setTransform(159.95,64.7,0.0598,0.0598,0,0,0,0,0.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(205).to({_off:false},0).wait(1).to({regX:1292.7,regY:-257.8,x:237.25,y:49.2,alpha:0.0032},0).wait(1).to({y:49.15,alpha:0.0145},0).wait(1).to({y:49.1,alpha:0.0371},0).wait(1).to({y:48.95,alpha:0.077},0).wait(1).to({y:48.7,alpha:0.1467},0).wait(1).to({y:48.25,alpha:0.2672},0).wait(1).to({y:47.7,alpha:0.4164},0).wait(1).to({y:47.15,alpha:0.5648},0).wait(1).to({y:46.7,alpha:0.6887},0).wait(1).to({y:46.3,alpha:0.7859},0).wait(1).to({y:46.05,alpha:0.8625},0).wait(1).to({y:45.8,alpha:0.9229},0).wait(1).to({y:45.65,alpha:0.9628},0).wait(1).to({y:45.6,alpha:0.9857},0).wait(1).to({y:45.55,alpha:0.9969},0).wait(1).to({regX:0,regY:0.8,x:159.95,y:61,alpha:1},0).wait(62));

	// main_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(159.7,69.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:600.9,regY:-201.2,x:222.25,y:48.3,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:48.25,alpha:0.0435},0).wait(1).to({y:48.15,alpha:0.0919},0).wait(1).to({y:47.95,alpha:0.1816},0).wait(1).to({y:47.65,alpha:0.3248},0).wait(1).to({y:47.3,alpha:0.4878},0).wait(1).to({y:47,alpha:0.6345},0).wait(1).to({y:46.75,alpha:0.7499},0).wait(1).to({y:46.55,alpha:0.8388},0).wait(1).to({y:46.4,alpha:0.9088},0).wait(1).to({y:46.3,alpha:0.9564},0).wait(1).to({y:46.25,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:67.25,alpha:1},0).wait(69).to({regX:600.9,regY:-201.2,x:222.25,y:46.25,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:46.3,alpha:0.9565},0).wait(1).to({y:46.4,alpha:0.9081},0).wait(1).to({y:46.6,alpha:0.8184},0).wait(1).to({y:46.9,alpha:0.6752},0).wait(1).to({y:47.25,alpha:0.5122},0).wait(1).to({y:47.55,alpha:0.3655},0).wait(1).to({y:47.8,alpha:0.2501},0).wait(1).to({y:48,alpha:0.1612},0).wait(1).to({y:48.15,alpha:0.0912},0).wait(1).to({y:48.25,alpha:0.0436},0).wait(1).to({y:48.3,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:69.35,alpha:0},0).to({_off:true},1).wait(169));

	// sub_caption
	this.instance_5 = new lib.daily_caption_mc();
	this.instance_5.setTransform(159.7,69.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:768.8,regY:-201.3,x:239.7,y:48.3,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:48.25,alpha:0.0435},0).wait(1).to({y:48.15,alpha:0.0919},0).wait(1).to({y:47.95,alpha:0.1816},0).wait(1).to({y:47.65,alpha:0.3248},0).wait(1).to({y:47.3,alpha:0.4878},0).wait(1).to({y:47,alpha:0.6345},0).wait(1).to({y:46.75,alpha:0.7499},0).wait(1).to({y:46.55,alpha:0.8388},0).wait(1).to({y:46.4,alpha:0.9088},0).wait(1).to({y:46.3,alpha:0.9564},0).wait(1).to({y:46.25,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:67.25,alpha:1},0).wait(62).to({regX:768.8,regY:-201.3,x:239.7,y:46.25,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:46.3,alpha:0.9565},0).wait(1).to({y:46.4,alpha:0.9081},0).wait(1).to({y:46.6,alpha:0.8184},0).wait(1).to({y:46.9,alpha:0.6752},0).wait(1).to({y:47.25,alpha:0.5122},0).wait(1).to({y:47.55,alpha:0.3655},0).wait(1).to({y:47.8,alpha:0.2501},0).wait(1).to({y:48,alpha:0.1612},0).wait(1).to({y:48.15,alpha:0.0912},0).wait(1).to({y:48.25,alpha:0.0436},0).wait(1).to({y:48.3,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:69.35,alpha:0},0).wait(94));

	// second_prize_mc
	this.instance_6 = new lib.second_prize_mc();
	this.instance_6.setTransform(113.05,50.85,0.3125,0.3125,0,0,0,0.1,0);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({regX:0,x:113,y:50.8242,alpha:0.0037},0).wait(1).to({y:50.7328,alpha:0.0167},0).wait(1).to({y:50.5458,alpha:0.0435},0).wait(1).to({y:50.207,alpha:0.0919},0).wait(1).to({y:49.5791,alpha:0.1816},0).wait(1).to({y:48.5764,alpha:0.3248},0).wait(1).to({y:47.4356,alpha:0.4878},0).wait(1).to({y:46.4088,alpha:0.6345},0).wait(1).to({y:45.6006,alpha:0.7499},0).wait(1).to({y:44.9784,alpha:0.8388},0).wait(1).to({y:44.4886,alpha:0.9088},0).wait(1).to({y:44.1552,alpha:0.9564},0).wait(1).to({y:43.966,alpha:0.9834},0).wait(1).to({y:43.8752,alpha:0.9964},0).wait(1).to({regX:0.1,x:113.05,y:43.85,alpha:1},0).wait(62).to({regX:0,x:113,y:43.9238,alpha:0.9963},0).wait(1).to({y:44.1848,alpha:0.9833},0).wait(1).to({y:44.7192,alpha:0.9565},0).wait(1).to({y:45.6872,alpha:0.9081},0).wait(1).to({y:47.4813,alpha:0.8184},0).wait(1).to({y:50.3459,alpha:0.6752},0).wait(1).to({y:53.6055,alpha:0.5122},0).wait(1).to({y:56.5391,alpha:0.3655},0).wait(1).to({y:58.8482,alpha:0.2501},0).wait(1).to({y:60.6259,alpha:0.1612},0).wait(1).to({y:62.0253,alpha:0.0912},0).wait(1).to({y:62.9779,alpha:0.0436},0).wait(1).to({y:63.5187,alpha:0.0166},0).wait(1).to({y:63.778,alpha:0.0036},0).wait(1).to({regX:0.1,x:113.05,y:63.85,alpha:0},0).to({_off:true},1).wait(93));

	// promo
	this.instance_7 = new lib.promo_mc();
	this.instance_7.setTransform(238.6,48.35,0.0867,0.0867,0,0,0,0.6,0.6);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-581.9,regY:-46.8,x:187.8,y:44.25,alpha:0.0037},0).wait(1).to({x:186.75,alpha:0.0167},0).wait(1).to({x:184.65,alpha:0.0435},0).wait(1).to({x:180.85,alpha:0.0919},0).wait(1).to({x:173.8,alpha:0.1816},0).wait(1).to({x:162.55,alpha:0.3248},0).wait(1).to({x:149.7,alpha:0.4878},0).wait(1).to({x:138.15,alpha:0.6345},0).wait(1).to({x:129.1,alpha:0.7499},0).wait(1).to({x:122.1,alpha:0.8388},0).wait(1).to({x:116.6,alpha:0.9088},0).wait(1).to({x:112.85,alpha:0.9564},0).wait(1).to({x:110.75,alpha:0.9834},0).wait(1).to({x:109.7,alpha:0.9964},0).wait(1).to({regX:0,regY:0.6,x:159.95,y:48.35,alpha:1},0).wait(83).to({alpha:0},15).to({_off:true},1).wait(169));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5050F").s().p("A5JH+IAAv7MAyTAAAIAAP7g");
	this.shape.setTransform(160.025,50.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(87.9,49.1,250.99999999999997,53.4);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 320,
	height: 100,
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