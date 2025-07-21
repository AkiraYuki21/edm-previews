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



(lib._970x250 = function() {
	this.initialize(img._970x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


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
	this.instance.setTransform(-1127,-112,1.3162,1.3162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-1127,-112,508.1,273.8), null);


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
	this.instance.setTransform(-531,-209,1.5806,1.5806);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-531,-209,439.4,453.6), null);


(lib.other_prizes_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-109,12.5);

	this.instance_1 = new lib.bigwin();
	this.instance_1.setTransform(-111,-75.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.other_prizes_mc, new cjs.Rectangle(-111,-75.5,222,151), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhEFjQgcgVABgrQgBglAcgYQAcgWAoAAQApAAAcAWQAbAYAAAlQAAArgbAVQgcAXgpAAQgoAAgcgXgAhUB/IAAn3ICpAAIAAH3g");
	this.shape.setTransform(488.9,-109.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai4FcIAtiaQBIAdAfAAQA7AAAAgvIAAgFQABgVgQgXQgOgXgkgkIghggQg0gzgXgtQgXgsAAhGIAAgCQAAhhAyg3QAxg2BXAAQBIAABVAiIgrCPQg2gQgaAAQg6AAAAAvIAAADQAAAHACAGIAGAMIAIANIAMAOIAQAQIAQASIAkAkQA1A1AYAsQAXArAABMIAAABQAABkg1A6Qg1A5hWAAQhZAAhYgjg");
	this.shape_1.setTransform(451.8,-110.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCF0IgvnXIAAHXIiqAAIAArnIDgAAIAtHLIAAnLICqAAIAALng");
	this.shape_2.setTransform(407.575,-110.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhUF0IAArnICpAAIAALng");
	this.shape_3.setTransform(371.475,-110.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAgF0Iggm/IgfG/IjdAAIg3rnIC1AAIAII7IAyo7ICJAAIAxI7IAJo7IC1AAIg3Lng");
	this.shape_4.setTransform(327.6,-110.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjEF0IAArnIC2AAQBcAAA7A7QA8A8AABkIAAEsQAABlg8A+Qg7A9hbAAgAgZDTIAHAAQAYAAAHgLQAHgMAAgfIAAlBQABgcgKgJQgJgJgUAAIgHAAg");
	this.shape_5.setTransform(668.55,-215.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AikF0IAArnIFHAAIAACeIieAAIAAB/ICAAAIAACfIiAAAIAACNICgAAIAACeg");
	this.shape_6.setTransform(628.75,-215.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AikF0IAArnIFHAAIAACeIidAAIAAB/ICAAAIAACfIiAAAIAACNICfAAIAACeg");
	this.shape_7.setTransform(592.15,-215.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhUF0IAAo/IhpAAIAAioIF7AAIAACoIhoAAIAAI/g");
	this.shape_8.setTransform(553.4,-215.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCF0IgvnXIAAHXIiqAAIAArnIDgAAIAtHLIAAnLICqAAIAALng");
	this.shape_9.setTransform(509.175,-215.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA3F0IgOiRIhRAAIgOCRIinAAIBirnID3AAIBiLngAgDiDIgVDHIAxAAIgVjHIgEg9g");
	this.shape_10.setTransform(460.35,-215.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAfF0Ig7kcIgMAAIAAEcIirAAIAArnIC3AAQB1AAAvA1QAuA0AABlIAAA2QAABtg3AvIBVFHgAgogwIAIAAQAWAAAJgKQAJgKAAgZIAAhIQAAgYgJgLQgJgKgWAAIgIAAg");
	this.shape_11.setTransform(412.375,-215.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA3F0IgOiRIhRAAIgOCRIinAAIBirnID3AAIBiLngAgDiDIgVDHIAxAAIgVjHIgEg9g");
	this.shape_12.setTransform(364.4,-215.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiPFHQg2gxAAhiIAAosICuAAIAAIxQAAAfAXAAQAXAAAAgfIAAoxICvAAIAAIsQAABbgyA1QgzA1hgAAQhaAAg2gyg");
	this.shape_13.setTransform(316.925,-215.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjFCxIAAlhQAAhfA+g4QA9g4BhAAQBbAABUAvIg9CTQgsgYgyAAQhCAAABBLIAAFGQAAAjAZAAQAMAAAIgFIAAkMIChAAIAAF8QgzAdgmANQgmAMgzAAQjLAAAAjPg");
	this.shape_14.setTransform(272.575,-215.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhUF0IAAo/IhpAAIAAioIF7AAIAACoIhpAAIAAI/g");
	this.shape_15.setTransform(218.65,-215.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AABF/QhhAAgzg1Qgyg1AAhjIAAliQAAhmA0g0QAzg0BeAAIACAAQBhAAAyA1QAxA1AABkIAAFiQAABngzAzQgzAzheAAgAgWi+IAAF9QAAAgAWAAIABAAQAXAAAAggIAAl9QAAgfgYAAIAAAAQgWAAAAAfg");
	this.shape_16.setTransform(176.625,-215.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAYF0IAAklIgvAAIAAElIiqAAIAArnICqAAIAAEZIAvAAIAAkZICqAAIAALng");
	this.shape_17.setTransform(131.9,-215.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_sub_caption_mc, new cjs.Rectangle(109.2,-272.7,583.3,240.6), null);


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
	this.instance.setTransform(826,-256,2.9446,2.9446);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(826,-256,718.5,138.4), null);


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
	this.instance.setTransform(-1083,161,2.5791,2.5791);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bt_logo, new cjs.Rectangle(-1083,161,283.70000000000005,162.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhOEKIAAi7Ii7AAIAAicIC7AAIAAi8ICcAAIAAC8IC8AAIAACcIi8AAIAAC7g");
	this.shape.setTransform(-238.775,9.275);

	this.instance = new lib.consolation();
	this.instance.setTransform(-105,-44,1.7,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bonus_prizes_mc, new cjs.Rectangle(-273.7,-67,542.7,145), null);


(lib.big_win_prizes_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-104,-47,1.7273,1.7273);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhOEKIAAi7Ii7AAIAAicIC7AAIAAi8ICcAAIAAC8IC8AAIAACcIi8AAIAAC7g");
	this.shape.setTransform(-238.775,9.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.big_win_prizes_mc, new cjs.Rectangle(-273.7,-67,549.7,145), null);


(lib.background = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._970x250();
	this.instance.setTransform(-485,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(-485,-125,970,250), null);


// stage content:
(lib.bigticketawarenesshtml5970x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0_ai
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(951.35,233.65,0.0278,0.0278,0,0,0,491.2,460.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiA2IgCgZQAMAEAHABQAHgBACgCQADgBACgIIgFAAQgMAAgGgGQgGgGADgOIALgzIAYAAIgKAyQgBAFAEAAIACAAIALg3IAZAAIgRBPQgEARgIAIQgIAHgPAAQgJAAgKgCg");
	this.shape.setTransform(931,237.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYA5IAYhxIAZAAIgZBxg");
	this.shape_1.setTransform(926.25,234.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghA1IAXhuIAYAAIgGAdIADAAQAPAAAFAHQAFAIgDAPIgGAYQgDARgIAHQgIAIgPAAQgLAAgPgFgAgEAiIABAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBIADgGIAFgXQABgFgBgBQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_2.setTransform(920.7221,234.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWA7IARhQIAYAAIgRBQgAABgkQgBgDAAgGQABgGAEgDQAEgEAFAAQAFAAACAEQADADgCAGQgBAGgEADQgDAEgGAAQgFAAgCgEg");
	this.shape_3.setTransform(915.9531,234.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAoIAGgYQALAEAHAAQAIAAABgDIgBgDIgCgDIgDgBIgCgBQgQgIADgSQACgLAJgHQAIgHALAAQALAAALADIgIAXQgJgDgGAAQgHAAgBAEIABACIAEACIAEADQAKAEADAEQADAGgCAKQgCAMgKAIQgIAHgPAAQgLAAgKgDg");
	this.shape_4.setTransform(910.95,235.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAqIALg4QABgEgEgBIgDABIgMA8IgZAAIARhPQARgEANAAQAaAAgFAZIgNA6g");
	this.shape_5.setTransform(904.6723,235.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeAMIAGgXQAGgfAbAAQAcAAgHAfIgFAXQgHAfgaAAQgcAAAGgfgAAAgMIgFAZQgBAHADAAQADAAAAgHIAGgZQABgHgDAAQgDAAgBAHg");
	this.shape_6.setTransform(898.3009,235.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglA6IAYhyIAcgBQAPAAAFAHQAFAIgEAQIgFAYQgDAQgJAHQgIAIgOAAIgDAAIgGAdgAgBAFIABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIADgFIAEgXQACgGgCgBQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_7.setTransform(891.3721,237.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggAoIAHgYQAKAEAIAAQAIAAABgDIgBgDIgCgDIgDgBIgCgBQgRgIAFgSQACgLAIgHQAIgHALAAQALAAALADIgHAXQgKgDgGAAQgHAAgBAEIABACIAEACIAEADQAJAEAEAEQADAGgCAKQgCAMgKAIQgJAHgOAAQgLAAgLgDg");
	this.shape_8.setTransform(885.55,235.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAjQgHgIADgQIAFgWQADgQAJgIQAJgHANAAQAOAAAEAHQAFAIgDAPIgFATIgcAAIgBAFQgCAIALAAIAMgBIgDAWQgKACgHAAQgQAAgGgIgAABgOIgBAGIAFAAIACgGIAAgFQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQgDAAgBAHg");
	this.shape_9.setTransform(879.7267,235.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBA5IAAgrIgCAAIgJArIgaAAIAYhxIAbAAQASAAAFAIQAFAJgDAPIgCAIQgDAQgKAHIACAygAAAgGIACAAQADAAACgCQABgBABgEIACgLQABgEgBgBQAAgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAIgCAAg");
	this.shape_10.setTransform(872.7181,234.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiA2IgCgZQAMAEAIABQAGgBADgCQACgBACgIIgEAAQgMAAgGgGQgHgGADgOIALgzIAYAAIgKAyQgBAFAEAAIACAAIAMg3IAYAAIgRBPQgEARgIAIQgIAHgPAAQgKAAgJgCg");
	this.shape_11.setTransform(864,237.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAlQgFgHACgMIABgBQACgNAIgFQAIgHANAAIAEABIAAgEQABgFgBgBQgCgCgFAAQgHAAgMAEIAMgYIAIgCIAJgBQAQAAAFAHQAFAHgDAOIgLA1QgUAEgJAAQgOAAgFgGgAgDAJQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAABIAAACQgBADABACQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIABAAIACgOIgBAAQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_12.setTransform(857.4172,235.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXA5IAXhxIAYAAIgXBxg");
	this.shape_13.setTransform(852.75,234.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmA5IAYhxIAaAAQASAAAGAIQAFAJgDAPIgCAJQgEARgKAGQgJAHgPAAIgBAAIgJAqgAAAgFIABAAQADAAACgCQACgBABgEIACgMQABgEgBgBQgBgCgEAAIgBAAg");
	this.shape_14.setTransform(847.2681,234.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAXAAQALAAAHAHQAIAIAAANIAAAlQAAAMgIAJQgHAHgLAAgAgCAbIABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAQABgBAAgEIAAgoQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAIgCgBIgBAAg");
	this.shape_15.setTransform(192.575,236.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAvIAAhdIApAAIAAAUIgUAAIAAAQIAQAAIAAATIgQAAIAAASIAUAAIAAAUg");
	this.shape_16.setTransform(187.575,236.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAHAvIgCgSIgJAAIgCASIgVAAIAMhdIAeAAIANBdgAAAgPIgCAYIAFAAIgDgYIAAgIg");
	this.shape_17.setTransform(182.15,236.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAvIgFg7IAAA7IgWAAIAAhdIAcAAIAFA5IAAg5IAWAAIAABdg");
	this.shape_18.setTransform(174.425,236.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKAvIAAhdIAVAAIAABdg");
	this.shape_19.setTransform(169.875,236.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWAsIAFgTQAJADAFAAQAGAAAAgGIAAAAQAAgDgCgDIgFgHIgFgEQgGgGgDgGQgDgFAAgJQAAgNAHgGQAGgHAJAAQAKAAALAEIgGASIgKgCQgGAAgBAGIAAAAIAAACIABABIAAACIACACIACACIACACIAEAFQAHAGAEAFQADAGAAAJQAAANgIAHQgGAHgKAAQgLAAgLgEg");
	this.shape_20.setTransform(164.5,236.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUAvIAAhdIApAAIAAAUIgUAAIAAAQIAQAAIAAATIgQAAIAAASIAUAAIAAAUg");
	this.shape_21.setTransform(159.875,236.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXAvIAAgTIAZg1IgWAAIAAgVIAsAAIAAATIgZA2IAZAAIAAAUg");
	this.shape_22.setTransform(154.775,236.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAvIAAhdIAVAAIAABdg");
	this.shape_23.setTransform(150.675,236.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAEAvIgHgkIgBAAIAAAkIgWAAIAAhdIAXAAQAOAAAGAGQAGAIAAAMIAAAHQAAANgHAFIALAqgAgEgFIABAAQAAAAABAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIAAgJIgBgEIgDgBIgBAAg");
	this.shape_24.setTransform(146.225,236.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAXAAQAOAAAGAGQAGAIAAAMIAAAIQAAANgHAGQgHAFgMAAIgBAAIAAAjgAgCgEIABAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAgBAAgBIAAgKQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBAAIgCgBIgBAAg");
	this.shape_25.setTransform(140.375,236.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJA8IAAh3IASAAIAAB3g");
	this.shape_26.setTransform(131.3,237.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKAvIAAgaIgShDIAXAAIAFAgIAHggIAWAAIgSBDIAAAag");
	this.shape_27.setTransform(122.025,236.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAvIAAhdIAVAAIAABIIAWAAIAAAVg");
	this.shape_28.setTransform(116.4,236.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAXAAQAOAAAGAGQAGAIAAAMIAAAIQAAANgHAGQgHAFgMAAIgBAAIAAAjgAgCgEIABAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAgBAAgBIAAgKQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBAAIgCgBIgBAAg");
	this.shape_29.setTransform(111.025,236.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAXAAQAOAAAGAGQAGAIAAAMIAAAIQAAANgHAGQgHAFgMAAIgBAAIAAAjgAgCgEIABAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAgBAAgBIAAgKQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBAAIgCgBIgBAAg");
	this.shape_30.setTransform(105.375,236.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAHAvIgCgSIgJAAIgCASIgVAAIAMhdIAeAAIANBdgAAAgPIgDAYIAGAAIgCgYIgBgIg");
	this.shape_31.setTransform(99.55,236.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgXAsIAGgTQAKADADAAQAHAAAAgGIAAAAQAAgDgCgDIgGgHIgDgEQgHgGgDgGQgDgFAAgJQAAgNAGgGQAHgHAJAAQAKAAAKAEIgFASIgKgCQgHAAABAGIAAAAIAAACIAAABIABACIABACIACACIACACIAEAFQAIAGACAFQADAGAAAJQAAANgGAHQgHAHgKAAQgLAAgMgEg");
	this.shape_32.setTransform(92.55,236.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFAUIgEgnIATAAIgDAng");
	this.shape_33.setTransform(88.575,233.675);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgQApQgHgHAAgOIAAgnQAAgOAHgIQAHgHAMAAQALAAAIAFIgIARIgHgCQgIAAAAALIAAAjQAAAEACADQADADAEAAIAAAAIAIgBIAIAQQgKAGgLgBQgMAAgHgHg");
	this.shape_34.setTransform(84.825,236.35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZAqQgHgGAAgMIAAgMQAAgGADgFQAEgDAFAAQgFgJAAgGIAAgHQAAgNAFgFQAEgFANAAQAIAAAEAFQAFAFAAANIAAAGQAAAOgNAEIAIALQgBgEgBgHIASAAIAAAFIAAAFIAAAFIAAAEIgBADIgBAEIgCADIAMASIgWAAIgCgDQgGAEgGAAQgQAAgGgGgAgLAPIAAAGQAAAFACACQACACAFAAIACAAIgLgSgAgGgcIgBABIAAADIAAAKIAAADQAFgBAAgFIAAgHIAAgDIgCgBIgCAAg");
	this.shape_35.setTransform(78.45,236.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKAvIAAhHIgNAAIAAgWIAvAAIAAAWIgNAAIAABHg");
	this.shape_36.setTransform(72.35,236.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgJA8IAAh3IASAAIAAB3g");
	this.shape_37.setTransform(63.6,237.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgRApQgHgGABgNIAAgGQAAgKAFgGQgEgGAAgJIAAgGQAAgMAGgHQAHgHAJAAQAKAAAGAHQAHAHAAAMIAAAGQAAAJgFAGQAHAGAAAKIAAAGQAAAMgIAHQgGAHgLAAQgKAAgHgHgAgCALIAAAOQABABAAABQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAgBIAAgOQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAgBABgAgCgYIAAAQIABADIABAAIACgBIABgCIAAgQQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAABgBABg");
	this.shape_38.setTransform(56.05,236.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgOAvIAPhJIgWAAIAAgUIArAAIAAAUIgQBJg");
	this.shape_39.setTransform(50.75,236.35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgWAwIAAgTQAagdAAgQIAAgBQgBgFgCgCQgBgCgEAAIgNACIgGgRQAKgGANAAQALAAAGAIQAHAJAAAMIAAAAQAAAHgCAHQgCAFgEAGIgHALIgJAKIAWAAIAAAUg");
	this.shape_40.setTransform(45.8,236.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgWAsIAFgTQAKADAEAAQAGAAAAgGIAAAAQAAgDgCgDIgFgHIgFgEQgGgGgDgGQgDgFAAgJQAAgNAHgGQAFgHALAAQAIAAAMAEIgGASIgKgCQgHAAAAAGIAAAAIAAACIABABIABACIABACIACACIACACIAFAFQAHAGADAFQACAGAAAJQABANgIAHQgGAHgKAAQgLAAgLgEg");
	this.shape_41.setTransform(39.15,236.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgUAvIAAhdIApAAIAAAUIgUAAIAAAQIAQAAIAAATIgQAAIAAASIAUAAIAAAUg");
	this.shape_42.setTransform(34.525,236.35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgKAvIAAhdIAVAAIAABdg");
	this.shape_43.setTransform(30.675,236.35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAEAvIgHgkIgBAAIAAAkIgWAAIAAhdIAXAAQAOAAAGAGQAGAIAAAMIAAAHQAAANgHAFIALAqgAgEgFIABAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgJIgBgEIgDgBIgBAAg");
	this.shape_44.setTransform(26.225,236.35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgUAvIAAhdIApAAIAAAUIgUAAIAAAQIAQAAIAAATIgQAAIAAASIAUAAIAAAUg");
	this.shape_45.setTransform(21.025,236.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgXAsIAGgTQAJADAEAAQAHAAAAgGIAAAAQAAgDgCgDIgGgHIgDgEQgHgGgDgGQgDgFAAgJQAAgNAGgGQAHgHAJAAQAKAAAKAEIgFASIgKgCQgGAAAAAGIAAAAIAAACIAAABIAAACIACACIACACIACACIAEAFQAIAGACAFQADAGABAJQgBANgGAHQgHAHgKAAQgLAAgMgEg");
	this.shape_46.setTransform(16.15,236.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(367));

	// ticket
	this.instance_1 = new lib.ticket_mc();
	this.instance_1.setTransform(101.85,112.6,0.4156,0.4156,0,0,0,-0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(272).to({_off:false},0).wait(1).to({regX:-873,regY:24.9,x:-259.75,y:122.9,alpha:0.0032},0).wait(1).to({x:-255.45,alpha:0.0145},0).wait(1).to({x:-246.75,y:122.95,alpha:0.0371},0).wait(1).to({x:-231.5,y:123.05,alpha:0.077},0).wait(1).to({x:-204.8,y:123.15,alpha:0.1467},0).wait(1).to({x:-158.65,y:123.4,alpha:0.2672},0).wait(1).to({x:-101.5,y:123.7,alpha:0.4164},0).wait(1).to({x:-44.65,y:124,alpha:0.5648},0).wait(1).to({x:2.8,y:124.25,alpha:0.6887},0).wait(1).to({x:40.05,y:124.45,alpha:0.7859},0).wait(1).to({x:69.35,y:124.6,alpha:0.8625},0).wait(1).to({x:92.5,y:124.7,alpha:0.9229},0).wait(1).to({x:107.75,y:124.8,alpha:0.9628},0).wait(1).to({x:116.55,y:124.85,alpha:0.9857},0).wait(1).to({x:120.8,alpha:0.9969},0).wait(1).to({regX:0.1,regY:0.1,x:484.85,y:114.6,alpha:1},0).wait(79));

	// logo
	this.instance_2 = new lib.bt_logo();
	this.instance_2.setTransform(484.85,19,0.4261,0.4261,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(272).to({alpha:0},16).wait(79));

	// cta
	this.instance_3 = new lib.cta_mc();
	this.instance_3.setTransform(484.85,198.4,0.2992,0.2992,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(288).to({_off:false},0).wait(1).to({regX:1185.2,regY:-186.8,x:839.4,y:142.35,alpha:0.0032},0).wait(1).to({y:142.15,alpha:0.0145},0).wait(1).to({y:141.75,alpha:0.0371},0).wait(1).to({y:141,alpha:0.077},0).wait(1).to({y:139.7,alpha:0.1467},0).wait(1).to({y:137.5,alpha:0.2672},0).wait(1).to({y:134.75,alpha:0.4164},0).wait(1).to({y:132,alpha:0.5648},0).wait(1).to({y:129.7,alpha:0.6887},0).wait(1).to({y:127.9,alpha:0.7859},0).wait(1).to({y:126.5,alpha:0.8625},0).wait(1).to({y:125.4,alpha:0.9229},0).wait(1).to({y:124.65,alpha:0.9628},0).wait(1).to({y:124.25,alpha:0.9857},0).wait(1).to({y:124.05,alpha:0.9969},0).wait(1).to({regX:0.1,regY:0.1,x:484.85,y:179.95,alpha:1},0).wait(63));

	// other_prizes
	this.instance_4 = new lib.other_prizes_mc();
	this.instance_4.setTransform(585,192.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(272).to({_off:false},0).wait(1).to({y:192.2909,alpha:0.0032},0).wait(1).to({y:191.5593,alpha:0.0145},0).wait(1).to({y:190.0872,alpha:0.0371},0).wait(1).to({y:187.4943,alpha:0.077},0).wait(1).to({y:182.9637,alpha:0.1467},0).wait(1).to({y:175.135,alpha:0.2672},0).wait(1).to({y:165.4322,alpha:0.4164},0).wait(1).to({y:155.7864,alpha:0.5648},0).wait(1).to({y:147.7332,alpha:0.6887},0).wait(1).to({y:141.4139,alpha:0.7859},0).wait(1).to({y:136.4383,alpha:0.8625},0).wait(1).to({y:132.51,alpha:0.9229},0).wait(1).to({y:129.9161,alpha:0.9628},0).wait(1).to({y:128.429,alpha:0.9857},0).wait(1).to({y:127.7041,alpha:0.9969},0).wait(1).to({y:127.5,alpha:1},0).wait(79));

	// bonus_prizes_copy
	this.instance_5 = new lib.bonus_prizes_mc();
	this.instance_5.setTransform(727,118.7,0.6495,0.6495,0,0,0,0.1,0);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).wait(1).to({regX:1.8,regY:9.5,x:727.9,y:124.85,alpha:0.0037},0).wait(1).to({x:727.35,alpha:0.0167},0).wait(1).to({x:726.25,alpha:0.0435},0).wait(1).to({x:724.2,alpha:0.0919},0).wait(1).to({x:720.45,alpha:0.1816},0).wait(1).to({x:714.45,alpha:0.3248},0).wait(1).to({x:707.6,alpha:0.4878},0).wait(1).to({x:701.45,alpha:0.6345},0).wait(1).to({x:696.6,alpha:0.7499},0).wait(1).to({x:692.85,alpha:0.8388},0).wait(1).to({x:689.9,alpha:0.9088},0).wait(1).to({x:687.9,alpha:0.9564},0).wait(1).to({x:686.75,alpha:0.9834},0).wait(1).to({x:686.25,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0,x:685,y:118.7,alpha:1},0).wait(69).to({regX:1.8,regY:9.5,x:686.1,y:124.85,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:0.9081},0).wait(1).to({alpha:0.8184},0).wait(1).to({alpha:0.6752},0).wait(1).to({alpha:0.5122},0).wait(1).to({alpha:0.3655},0).wait(1).to({alpha:0.2501},0).wait(1).to({alpha:0.1612},0).wait(1).to({alpha:0.0912},0).wait(1).to({alpha:0.0436},0).wait(1).to({alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.1,regY:0,x:685,y:118.7,alpha:0},0).to({_off:true},1).wait(253));

	// bonus_prizes
	this.instance_6 = new lib.big_win_prizes_mc();
	this.instance_6.setTransform(727,118.7,0.6495,0.6495,0,0,0,0.1,0);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.bonus_prizes_mc();
	this.instance_7.setTransform(685,98.7,0.6495,0.6495,0,0,0,0.1,0);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},98).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},68).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(170));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({regX:5.3,regY:5.7,x:730.2,y:122.4,alpha:0.0037},0).wait(1).to({x:729.65,alpha:0.0167},0).wait(1).to({x:728.55,alpha:0.0435},0).wait(1).to({x:726.5,alpha:0.0919},0).wait(1).to({x:722.75,alpha:0.1816},0).wait(1).to({x:716.75,alpha:0.3248},0).wait(1).to({x:709.9,alpha:0.4878},0).wait(1).to({x:703.75,alpha:0.6345},0).wait(1).to({x:698.9,alpha:0.7499},0).wait(1).to({x:695.15,alpha:0.8388},0).wait(1).to({x:692.2,alpha:0.9088},0).wait(1).to({x:690.2,alpha:0.9564},0).wait(1).to({x:689.05,alpha:0.9834},0).wait(1).to({x:688.55,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0,x:685,y:118.7,alpha:1},0).wait(69).to({regX:5.3,regY:5.7,x:688.4,y:122.3,alpha:0.9963},0).wait(1).to({y:122.05,alpha:0.9833},0).wait(1).to({y:121.5,alpha:0.9565},0).wait(1).to({y:120.55,alpha:0.9081},0).wait(1).to({y:118.75,alpha:0.8184},0).wait(1).to({y:115.9,alpha:0.6752},0).wait(1).to({y:112.6,alpha:0.5122},0).wait(1).to({y:109.7,alpha:0.3655},0).wait(1).to({y:107.4,alpha:0.2501},0).wait(1).to({y:105.6,alpha:0.1612},0).wait(1).to({y:104.2,alpha:0.0912},0).wait(1).to({y:103.25,alpha:0.0436},0).wait(1).to({y:102.7,alpha:0.0166},0).wait(1).to({y:102.45,alpha:0.0036},0).to({_off:true},1).wait(171));

	// su_sub_caption
	this.instance_8 = new lib.daily_sub_caption_mc();
	this.instance_8.setTransform(483.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(181).to({_off:false},0).wait(1).to({regX:400.4,regY:-163.1,x:691.85,y:136.65,alpha:0.0037},0).wait(1).to({y:136.5,alpha:0.0167},0).wait(1).to({y:136.2,alpha:0.0435},0).wait(1).to({y:135.7,alpha:0.0919},0).wait(1).to({x:691.8,y:134.75,alpha:0.1816},0).wait(1).to({x:691.75,y:133.2,alpha:0.3248},0).wait(1).to({x:691.7,y:131.5,alpha:0.4878},0).wait(1).to({x:691.65,y:129.9,alpha:0.6345},0).wait(1).to({x:691.6,y:128.7,alpha:0.7499},0).wait(1).to({y:127.75,alpha:0.8388},0).wait(1).to({x:691.55,y:127,alpha:0.9088},0).wait(1).to({y:126.5,alpha:0.9564},0).wait(1).to({y:126.2,alpha:0.9834},0).wait(1).to({y:126.05,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:483.05,y:211.05,alpha:1},0).wait(60).to({x:483.4,y:211.25},0).wait(1).to({regX:400.4,regY:-163.1,x:691.9,y:126.25,alpha:0.9968},0).wait(1).to({y:126.4,alpha:0.9855},0).wait(1).to({y:126.6,alpha:0.9629},0).wait(1).to({y:127.05,alpha:0.923},0).wait(1).to({y:127.75,alpha:0.8533},0).wait(1).to({y:129,alpha:0.7328},0).wait(1).to({y:130.6,alpha:0.5836},0).wait(1).to({y:132.15,alpha:0.4352},0).wait(1).to({y:133.4,alpha:0.3113},0).wait(1).to({y:134.45,alpha:0.2141},0).wait(1).to({y:135.25,alpha:0.1375},0).wait(1).to({y:135.85,alpha:0.0771},0).wait(1).to({y:136.3,alpha:0.0372},0).wait(1).to({y:136.55,alpha:0.0143},0).wait(1).to({y:136.65,alpha:0.0031},0).wait(1).to({regX:0.1,regY:0.1,x:483.4,y:221.7,alpha:0},0).to({_off:true},1).wait(94));

	// promo
	this.instance_9 = new lib.promo_mc();
	this.instance_9.setTransform(630.65,116.65,0.4337,0.4337,0,0,0,0.1,0);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:-311.3,regY:17.8,x:495.05,y:124.35,alpha:0.0037},0).wait(1).to({x:493.15,alpha:0.0167},0).wait(1).to({x:489.25,alpha:0.0435},0).wait(1).to({x:482.2,alpha:0.0919},0).wait(1).to({x:469.1,alpha:0.1816},0).wait(1).to({x:448.2,alpha:0.3248},0).wait(1).to({x:424.45,alpha:0.4878},0).wait(1).to({x:403.05,alpha:0.6345},0).wait(1).to({x:386.25,alpha:0.7499},0).wait(1).to({x:373.3,alpha:0.8388},0).wait(1).to({x:363.1,alpha:0.9088},0).wait(1).to({x:356.15,alpha:0.9564},0).wait(1).to({x:352.2,alpha:0.9834},0).wait(1).to({x:350.3,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0,x:484.85,y:116.65,alpha:1},0).wait(352));

	// background
	this.instance_10 = new lib.background();
	this.instance_10.setTransform(484.85,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(367));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(118.5,125,851.4,143);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_970x250.jpg", id:"_970x250"},
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