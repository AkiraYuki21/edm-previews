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
	this.instance.setTransform(-1119,-235,2.4955,2.4955);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-1119,-235,963.3,519.1), null);


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
	this.shape.graphics.f("#FFE400").s().p("Ag9BjQgcgMgSgYQgRgZgBgmQACgzAigdQAkgeA1AAQA3AAAjAeQAjAdABAzQAAAmgSAZQgSAYgcAMQgdAMghAAQggAAgdgMg");
	this.shape.setTransform(626.1,-68.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AAoHmIhMlyIgQAAIAAFyIjgAAIAAvLIDwAAQBrAAA8AhQA9AiAYA8QAYA8gBBSIAABGQAABLgTAzQgTAxgjAdIBvGsgAg0g/IAKAAQAdABAMgOQAMgNAAghIAAheQAAgfgLgOQgMgOgeAAIgKAAg");
	this.shape_1.setTransform(578.675,-107.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AjWHmIAAvLIGrAAIAADPIjNAAIAAClICnAAIAADQIinAAIAAC4IDQAAIAADPg");
	this.shape_2.setTransform(524.65,-107.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AjAGxQhChEABiGIAAnNQAAhWAmg8QAlg9BAggQBBggBSAAQA5AAA7AQQA8AQA1AcIhQDBQgbgPgggIQgggHgfAAQgtAAgVAYQgVAXACAyIAAGrQAAAYAIALQAJALAQgBQALAAAGgCIAIgEIAAleIDTAAIAAHwQgoAXgjAQQgjAPgmAJQgmAIguAAQiHAAhBhFg");
	this.shape_3.setTransform(472.2743,-107.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AjAGxQhChEABiGIAAnNQAAhWAmg8QAlg9BAggQBBggBSAAQA5AAA7AQQA8AQA1AcIhQDBQgbgPgggIQgggHgfAAQgtAAgVAYQgVAXACAyIAAGrQAAAYAIALQAJALAQgBQALAAAGgCIAIgEIAAleIDTAAIAAHwQgoAXgjAQQgjAPgmAJQgmAIguAAQiHAAhBhFg");
	this.shape_4.setTransform(415.5243,-107.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AhvHmIAAvLIDfAAIAAPLg");
	this.shape_5.setTransform(371.275,-107.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AkDHmIAAvLID0AAQBNAAA8AYQA7AYAjA0QAhA1ABBUIAAAZQABBJgYAvQgZAwg3AYQA6AUAcAwQAbAxABBUIAAA6QgBBVggA5QgfA6g5AdQg5AdhOAAgAgkEUIANAAQAcAAAKgPQAKgNAAgZIAAhhQAAgbgJgOQgKgOgdAAIgNAAgAgkhsIARAAQAbAAALgOQAJgNAAgaIAAg7QAAgbgJgNQgJgPgdAAIgRAAg");
	this.shape_6.setTransform(327.45,-107.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AgDHmIg9poIAAJoIjfAAIAAvLIElAAIA7JZIAApZIDgAAIAAPLg");
	this.shape_7.setTransform(249.85,-107.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AhvHmIAAvLIDfAAIAAPLg");
	this.shape_8.setTransform(202.675,-107.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AAqHmIgqpIIgpJIIkgAAIhIvLIDsAAIALLqIBArqIC0AAIBBLqIALrqIDsAAIhIPLg");
	this.shape_9.setTransform(145.35,-107.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag9BjQgcgMgRgYQgSgYgBgnQABgzAkgdQAigeA2AAQA3AAAjAeQAjAdABAzQAAAngSAYQgRAYgcAMQgeAMghAAQggAAgdgMg");
	this.shape_10.setTransform(609.95,-203.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjAGyQhChEABiHIAAnNQAAhWAmg8QAlg9BAggQBBggBSAAQA5AAA7AQQA8AQA1AcIhQDBQgbgPgggIQgggHgfAAQgtAAgVAXQgVAYACAyIAAGrQAAAZAIAKQAJAKAQAAQALAAAGgCIAIgEIAAlfIDTAAIAAHxQgoAXgjAQQgjAPgmAJQgmAIguAAQiHAAhBhEg");
	this.shape_11.setTransform(566.5243,-242.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhvHmIAAvMIDfAAIAAPMg");
	this.shape_12.setTransform(522.275,-242.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AkDHmIAAvMID1AAQBMAAA8AZQA7AYAjA0QAhA1ABBUIAAAZQABBIgYAxQgYAvg4AYQA6AUAcAwQAcAxAABUIAAA6QgBBVggA5QgfA6g5AdQg6AehNgBgAgkEUIAOAAQAbAAAKgPQAKgNgBgZIAAhhQABgbgKgOQgIgOgdAAIgOAAgAgkhsIARAAQAbAAALgOQAJgNAAgaIAAg6QAAgbgJgPQgJgOgdAAIgRAAg");
	this.shape_13.setTransform(478.45,-242.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ACfHmIAArYIgJBvIhCJpIioAAIhBppIgKhvIAALYIjYAAIAAvMIFSAAIAhHNIAEBJIAGhJIAinNIFQAAIAAPMg");
	this.shape_14.setTransform(392.05,-242.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABIHmIgSi+IhrAAIgSC+IjaAAICAvMIFDAAICAPMgAAhBZIgckEIgFhRIgEBRIgbEEIBAAAg");
	this.shape_15.setTransform(319.375,-242.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjWHmIAAvMIGrAAIAADPIjNAAIAACmICnAAIAADQIinAAIAAC4IDQAAIAADPg");
	this.shape_16.setTransform(265.15,-242.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAoHmIhMlyIgQAAIAAFyIjgAAIAAvMIDwAAQBrABA8AhQA9AiAYA8QAYA8gBBSIAABGQAABLgTAzQgTAxgjAdIBvGsgAg0g/IAKAAQAdAAAMgNQAMgNAAghIAAheQAAgfgLgOQgMgOgeAAIgKAAg");
	this.shape_17.setTransform(208.775,-242.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AkBHmIAAvMIDwAAQBOABA+AjQA+AiAkBAQAkBAABBZIAAGJQgBBbgkBBQgkBBg+AkQg+AjhNAAgAghEUIAIAAQAiAAAJgQQAKgPgBgoIAAmkQAAgmgNgLQgNgMgaABIgIAAg");
	this.shape_18.setTransform(148.175,-242.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(100.7,-316.7,543.8,311.8), null);


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
	this.instance.setTransform(-577,-258,1.9117,1.9117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-577,-258,531.5,548.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhbGRIAAjjIiZo+IC+AAIA3EMIA2kMIC+AAIiZI+IAADjg");
	this.shape.setTransform(829.4,-118.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA7GRIgOicIhZAAIgOCcIi0AAIBpshIELAAIBpMhgAAbBKIgXjWIgEhDIgDBDIgXDWIA1AAg");
	this.shape_1.setTransform(778,-118.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAjGRIgjniIgiHiIjtAAIg7shIDCAAIAJJnIA2pnICTAAIA1JnIAJpnIDDAAIg7Mhg");
	this.shape_2.setTransform(717,-118.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA7GRIgPicIhYAAIgOCcIi0AAIBqshIEJAAIBqMhgAAbBKIgXjWIgEhDIgDBDIgXDWIA1AAg");
	this.shape_3.setTransform(656,-118.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhbGRIAApsIhwAAIAAi1IGXAAIAAC1IhwAAIAAJsg");
	this.shape_4.setTransform(596.325,-118.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AixGRIAAshIFgAAIAACrIioAAIAACIICJAAIAACrIiJAAIAACYICrAAIAACrg");
	this.shape_5.setTransform(556.6,-118.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaGRIhIlwIAAFwIi4AAIAAshIC4AAIAAFuIBHluIDBAAIhjF6IBwGng");
	this.shape_6.setTransform(510.825,-118.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAbGdQhxAAg6g9Qg6g9AAh4IAAlVQAAh4A6g9QA6g9BxAAIABAAQAvAAAmAIQAnAIAkARIhCCTQgPgEgRgCQgSgCgNAAIgCAAQgkAAgSAWQgSAXAAArIAAEyQABArAWAWQAWAWAmAAIAAAAQARAAARgDQAQgDAUgIIBBCTQgoAUgqAKQgqAJgzAAg");
	this.shape_7.setTransform(464.475,-118.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhbGRIAAshIC3AAIAAMhg");
	this.shape_8.setTransform(429,-118.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhbGRIAApsIhwAAIAAi1IGXAAIAAC1IhwAAIAAJsg");
	this.shape_9.setTransform(395.875,-118.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA7GRIgPicIhXAAIgPCcIi0AAIBqshIEJAAIBqMhgAAbBKIgXjWIgEhDIgDBDIgXDWIA1AAg");
	this.shape_10.setTransform(336.15,-118.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhbGRIAApsIhwAAIAAi1IGXAAIAAC1IhwAAIAAJsg");
	this.shape_11.setTransform(276.475,-118.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhsGSQgugKgtgSIAwilQAiAOAcAIQAcAJAWAAQAiAAAOgMQAQgNAAgaIAAgFQABgWgRgaQgQgZgngmIgjgiQghghgXgeQgYgggMgnQgOgnAAg2IAAgCQABhpA1g6QA1g6BfgBQAlAAAsAKQAsAKAsARIgwCaQgbgIgXgFQgXgFgNAAQgfAAgQANQgPANAAAZIAAADQAAAVASAVQARAVAeAeIASATIAUAUQAhAgAYAeQAZAgANAoQANAnAAA7IAAABQAABKgaA0QgZA0gwAbQguAbg/ABQg0AAgvgLg");
	this.shape_12.setTransform(234.6,-118.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhtGAQgwgXgcgvQgbgwAAhHIAApYIC8AAIAAJcQAAATAGAHQAGAJANgBQANAAAGgIQAFgIAAgSIAApcIC8AAIAAJYQAAA/gYAvQgXAwgvAaQgvAbhGAAQg/AAgwgWg");
	this.shape_13.setTransform(188.425,-118.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhiGKQgugMgwgZIBDifQAXAMAUAHQATAGATAAQAbAAAMgRQAKgRAAgkIAAovIC8AAIAAJOQgBBqg4A6Qg3A6hgABQglAAgugNg");
	this.shape_14.setTransform(139.925,-118.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhrGSQgwgKgrgSIAvilQAiAOAcAIQAbAJAXAAQAhAAAQgMQAQgNAAgaIAAgFQAAgWgRgaQgQgZgngmIgigiQgighgYgeQgXgggNgnQgNgnAAg2IAAgCQABhpA2g6QA0g6BegBQAlAAAsAKQAtAKArARIgvCaQgbgIgXgFQgXgFgNAAQgfAAgQANQgQANAAAZIAAADQABAVARAVQATAVAdAeIATATIATAUQAhAgAYAeQAZAgANAoQANAnAAA7IAAABQAABKgaA0QgaA0guAbQgwAbg9ABQg1AAgugLg");
	this.shape_15.setTransform(87.6,-118.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhbGRIAAshIC3AAIAAMhg");
	this.shape_16.setTransform(54.5,-118.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("AAaGRIhIlwIAAFwIi4AAIAAshIC4AAIAAFuIBHluIDBAAIhjF6IBwGng");
	this.shape_17.setTransform(839.425,-234.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE400").s().p("AA7GRIgPicIhYAAIgOCcIi0AAIBqshIEJAAIBqMhgAAbBKIgXjWIgEhDIgDBDIgXDWIA1AAg");
	this.shape_18.setTransform(786.5,-234.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE400").s().p("AiwGRIAAshIFgAAIAACrIiqAAIAACIICKAAIAACrIiKAAIAACYICrAAIAACrg");
	this.shape_19.setTransform(741.85,-234.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE400").s().p("AAhGRIg/kyIgNAAIAAEyIi4AAIAAshIDFAAQBYAAAyAcQAyAcAUAyQAUAxgBBDIAAA5QAAA/gQAqQgPAogdAYIBbFhgAgrg0IAJAAQAXAAALgLQAJgKAAgbIAAhOQAAgagJgLQgKgMgYABIgJAAg");
	this.shape_20.setTransform(695.325,-234.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFE400").s().p("AhbGRIAApsIhwAAIAAi1IGXAAIAAC1IhwAAIAAJsg");
	this.shape_21.setTransform(648.675,-234.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFE400").s().p("AhrGSQgwgKgrgSIAwilQAhAOAcAIQAbAJAXAAQAhAAAQgMQAQgNAAgaIAAgFQAAgWgRgaQgQgZgogmIghgiQgighgYgeQgXgggNgnQgNgnABg2IAAgCQAAhpA2g6QA0g6BegBQAmAAArAKQAtAKArARIgvCaQgbgIgXgFQgXgFgNAAQgfAAgQANQgQANAAAZIAAADQABAVARAVQATAVAdAeIATATIATAUQAhAgAYAeQAZAgANAoQAOAnAAA7IAAABQgBBKgaA0QgaA0guAbQgwAbg9ABQg1AAgugLg");
	this.shape_22.setTransform(606.8,-234.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFE400").s().p("AieFlQg2g4AAhuIAAl8QABhHAfgxQAegzA1gaQA2gaBDgBQAvAAAxAOQAxANAsAYIhCCeQgXgMgagGQgagHgaAAQglAAgRAUQgRATABApIAAFfQAAAVAHAJQAHAJANgBQAJAAAFgCIAHgDIAAkgICuAAIAAGYQghATgdANQgdANgfAHQgfAHgnAAQhvAAg1g5g");
	this.shape_23.setTransform(550.5748,-234.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFE400").s().p("AgCGRIgyn7IAAH7Ii5AAIAAshIDyAAIAxHvIAAnvIC3AAIAAMhg");
	this.shape_24.setTransform(499.6,-234.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE400").s().p("AhbGRIAAshIC3AAIAAMhg");
	this.shape_25.setTransform(460.75,-234.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFE400").s().p("AgCGRIgzn7IAAH7Ii3AAIAAshIDxAAIAwHvIAAnvIC5AAIAAMhg");
	this.shape_26.setTransform(421.9,-234.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFE400").s().p("AgCGRIgzn7IAAH7Ii3AAIAAshIDxAAIAxHvIAAnvIC3AAIAAMhg");
	this.shape_27.setTransform(368.5,-234.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFE400").s().p("AhbGRIAAshIC3AAIAAMhg");
	this.shape_28.setTransform(329.6,-234.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFE400").s().p("AAjGRIgjniIgiHiIjtAAIg7shIDDAAIAJJnIA0pnICUAAIA2JnIAJpnIDCAAIg7Mhg");
	this.shape_29.setTransform(282.35,-234.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFE400").s().p("AAhGRIg/kyIgNAAIAAEyIi4AAIAAshIDFAAQBYAAAyAcQAyAcAUAyQAUAxgBBDIAAA5QAAA/gQAqQgPAogdAYIBbFhgAgrg0IAJAAQAXAAALgLQAJgKAAgbIAAhOQAAgagJgLQgKgMgYABIgJAAg");
	this.shape_30.setTransform(208.625,-234.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFE400").s().p("AhtGAQgwgXgcgvQgbgwAAhHIAApYIC8AAIAAJcQAAATAGAHQAGAJANgBQANAAAGgIQAFgIAAgSIAApcIC8AAIAAJYQAAA/gYAvQgXAwgvAaQgvAbhGAAQg/AAgwgWg");
	this.shape_31.setTransform(157.625,-233.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFE400").s().p("AABGdQhqgBg1g5Qg2g5AAhqIAAl+QABhxA4g2QA4g3BjAAIACAAQBpABA1A5QA1A5AABrIAAF+QgBBwg3A2Qg3A3hkAAgAgTjnQgFAJAAASIAAGaQAAASAGAIQAGAIAMAAIABAAQANAAAFgIQAGgIAAgSIAAmaQAAgSgGgJQgHgIgMAAIAAAAQgNAAgGAIg");
	this.shape_32.setTransform(108.075,-234.6252);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFE400").s().p("AhbGRIAAjjIiZo+IC+AAIA3EMIA2kMIC+AAIiZI+IAADjg");
	this.shape_33.setTransform(58.3,-234.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_sub_caption_mc, new cjs.Rectangle(31.3,-295.7,834.7,260.9), null);


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
	this.instance.setTransform(140,-293,4.508,4.508);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(140,-293,1100,211.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgWA4IgHgBIgFgBIgCgZIALADIAIACIAIgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAgBIADgIIgDAAIgCAAQgHABgFgDQgGgDgCgGQgDgFACgKIALgzIAYAAIgKAyIAAAEIADABIABAAIABAAIAGgcIAFgbIAZAAIgRBPQgEARgIAIQgIAHgPAAIgHAAg");
	this.shape.setTransform(931,237.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYA5IAYhxIAZAAIgZBxg");
	this.shape_1.setTransform(926.25,234.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUA5IgNgEIAXhuIAYAAIgGAdIADAAQAPAAAFAHQAFAIgDAPIgGAYQgDARgIAHQgIAIgPAAIgNgBgAgEAiIABAAQABAAAAAAQABAAABAAQAAAAAAgBQAAAAAAgBIADgGIAFgXQABgFgBgBQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_2.setTransform(920.71,234.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWA7IARhQIAYAAIgRBQgAABgkQgBgDAAgGQABgHAEgCQADgEAGAAQAFAAACAEQADACgCAHQgBAGgEADQgDADgGABQgFgBgCgDg");
	this.shape_3.setTransform(915.9531,234.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTArIgMgDIAHgXIAJACIAJABIAGAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAIAAgDIgDgDIgCgBIgDgBQgIgEgDgFQgDgHACgKQABgHAEgFQAEgGAGgDQAGgEAJAAIAJAAIALADIgGAXIgIgCIgIgBIgFABIgCADIABACIADACIADABIACACIAIAFQAEADABAEQACAFgCAHQgBAIgFAGQgEAGgHAEQgIADgKAAIgDAAIgGAAg");
	this.shape_4.setTransform(910.925,235.7833);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAqIALg4QAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIgCgBIgCAAIgBABIgMA8IgZAAIARhPIARgDIANgBQAMAAAGAFQAGAHgDANIgNA6g");
	this.shape_5.setTransform(904.675,235.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAkQgFgIACgQIAGgXQADgQAJgIQAJgHAMAAQAOAAAFAHQAFAIgDAQIgFAXQgDAQgJAIQgJAHgMAAQgOAAgFgHgAABgRIgBAFIgFAZIAAAFQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIAAgFIAGgZIAAgFQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBABg");
	this.shape_6.setTransform(898.3172,235.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglA6IAYhyIAKgBIAKAAIAIAAQAPAAAFAHQAEAIgDAQIgFAYQgDAQgJAHQgIAIgOAAIgDAAIgGAdgAgBAFIABAAQAAAAABAAQAAAAABAAQABAAAAgBQABAAAAgBIADgFIAEgXQACgGgCgBQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_7.setTransform(891.36,237.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTArIgMgDIAHgXIAJACIAJABIAGAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAIAAgDIgDgDIgCgBIgDgBQgIgEgDgFQgDgHACgKQABgHAEgFQAEgGAGgDQAGgEAJAAIAJAAIALADIgGAXIgIgCIgIgBIgFABIgCADIABACIADACIADABIACACIAIAFQAEADABAEQACAFgCAHQgBAIgFAGQgEAGgHAEQgIADgKAAIgDAAIgGAAg");
	this.shape_8.setTransform(885.525,235.7833);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAjQgHgIADgQIAFgWQADgQAJgIQAJgHANAAQAOAAAEAHQAFAIgDAPIgFATIgcAAIgBAFQgBAEACACQADACAFAAIAGAAIAGgBIgDAWIgKACIgHAAQgQAAgGgIgAACgTIgBAFIgBAGIAFAAIACgGIAAgFQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBAAIgCACg");
	this.shape_9.setTransform(879.74,235.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBA5IAAgrIgCAAIgJArIgaAAIAYhxIAbAAQAMABAGADQAGAEACAHQABAHgCAKIgCAIQgCAJgDAGQgDAEgFAEIACAygAAAgGIACAAQADAAACgCQABgBABgEIACgLQABgEgBgBQAAgBAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgCAAg");
	this.shape_10.setTransform(872.7281,234.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWA4IgIgBIgEgBIgCgZIALADIAJACIAGgBQADAAACgDIACgIIgCAAIgCAAQgHABgHgDQgFgDgCgGQgDgFACgKIALgzIAYAAIgKAyIAAAEIADABIABAAIABAAIAGgcIAGgbIAYAAIgRBPQgEARgIAIQgIAHgPAAIgHAAg");
	this.shape_11.setTransform(864,237.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAlQgFgHACgMIABgBQACgMAIgGQAIgGANgBIABAAIADABIAAgEQACgFgCgBQgCgCgFAAIgJABIgKADIAMgYIAEgBIAGgCIAHAAQALAAAFADQAGADABAGQACAHgCAJIgLA1IgQADIgNABQgOAAgFgGgAgCAJQgCACgBADIAAACQgBADABACQABAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIABAAIACgPIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_12.setTransform(857.4109,235.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXA5IAXhxIAYAAIgXBxg");
	this.shape_13.setTransform(852.75,234.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmA5IAYhxIAaAAQANABAGADQAGAEABAHQACAHgCAKIgCAJQgDANgGAFQgFAHgHACQgJADgIAAIgBAAIgJAqgAAAgFIABAAQADAAACgBQACgCABgEIACgMQABgEgBgBQgBgCgEAAIgBAAg");
	this.shape_14.setTransform(847.2571,234.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAXAAQAHAAAGAEQAGADADAGQAEAGAAAIIAAAmQAAAIgEAHQgDAGgGADQgGAEgHAAgAgCAbIABAAQABAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAIABgFIAAgoQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAIgCgBIgBAAg");
	this.shape_15.setTransform(191.825,236.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAvIAAhdIApAAIAAAUIgUAAIAAAQIAQAAIAAATIgQAAIAAASIAUAAIAAAUg");
	this.shape_16.setTransform(186.775,236.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAHAvIgCgSIgJAAIgCASIgVAAIAMhdIAeAAIANBdgAADAJIgCgYIgBgIIAAAIIgDAYIAGAAg");
	this.shape_17.setTransform(181.35,236.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAvIgFg7IAAA7IgWAAIAAhdIAcAAIAFA5IAAg5IAWAAIAABdg");
	this.shape_18.setTransform(173.675,236.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKAvIAAhdIAVAAIAABdg");
	this.shape_19.setTransform(169.125,236.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMAvIgKgDIAFgTIAHACIAHABQADAAABgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAAAQAAgDgCgDIgFgHIgFgEIgGgHQgDgEgCgEQgBgFAAgGQAAgNAHgGQAFgHALAAIAJABQAGABAFACIgGASIgGgBIgEgBQgEAAgCACQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIAAAAQAAADABACIAGAGIACACIADADIAGAGIAFAJQABAEABAHQAAAJgDAGQgEAGgFADQgGADgGAAIgMgBg");
	this.shape_20.setTransform(163.7,236.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUAvIAAhdIApAAIAAAUIgUAAIAAAQIAQAAIAAATIgQAAIAAASIAUAAIAAAUg");
	this.shape_21.setTransform(159.075,236.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgQApQgHgHAAgOIAAgnQAAgOAHgIQAHgHAMAAIAKABIAJAEIgIARIgDgBIgEgBQgEABgDADQgBACAAAFIAAAjQAAAFACACQADADAEAAIAAAAIAEAAIAEgBIAIAQQgFADgFABQgFABgGAAQgMAAgHgHg");
	this.shape_22.setTransform(154.375,236.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAvIAAhdIAVAAIAABdg");
	this.shape_23.setTransform(150.225,236.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAEAvIgHgkIgBAAIAAAkIgWAAIAAhdIAXAAQAKAAAGAEQAFACADAHQACAFAAAIIAAAHQAAAHgCAFQgCAEgDACIALAqgAgEgFIABAAQAAAAABAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIAAgJIgBgEIgDgBIgBAAg");
	this.shape_24.setTransform(145.775,236.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAXAAQAKAAAFAEQAGACACAHQADAFAAAIIAAAIQAAAKgEAFQgDAFgGADQgGABgHAAIgBAAIAAAjgAgCgEIABAAIACgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAgBIAAgKIgBgEIgDgBIgBAAg");
	this.shape_25.setTransform(139.975,236.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJA8IAAh3IASAAIAAB3g");
	this.shape_26.setTransform(130.85,237.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKAvIAAgaIgShDIAXAAIAFAgIAHggIAWAAIgSBDIAAAag");
	this.shape_27.setTransform(121.575,236.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAvIAAhdIAVAAIAABIIAWAAIAAAVg");
	this.shape_28.setTransform(115.95,236.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAXAAQAKAAAFAEQAGACACAHQADAFAAAIIAAAIQAAAKgEAFQgDAFgGADQgGABgHAAIgBAAIAAAjgAgCgEIABAAIACgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAgBIAAgKIgBgEIgDgBIgBAAg");
	this.shape_29.setTransform(110.575,236.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAXAAQAKAAAFAEQAGACACAHQADAFAAAIIAAAIQAAAKgEAFQgDAFgGADQgGABgHAAIgBAAIAAAjgAgCgEIABAAIACgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAgBIAAgKIgBgEIgDgBIgBAAg");
	this.shape_30.setTransform(104.975,236.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAHAvIgCgSIgKAAIgBASIgVAAIAMhdIAeAAIANBdgAADAJIgCgYIgBgIIAAAIIgDAYIAGAAg");
	this.shape_31.setTransform(99.1,236.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgMAvIgLgDIAGgTIAIACIAFABQAEAAABgBQAAgBABAAQAAgBABAAQAAgBAAAAQAAgBAAgBIAAAAQAAgDgCgDIgGgHIgDgEIgHgHQgDgEgBgEQgCgFAAgGQAAgNAGgGQAHgHAKAAIAJABQAGABAEACIgFASIgGgBIgEgBQgEAAgBACQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAAAQAAADABACIAFAGIADACIACADIAHAGIAEAJQABAEAAAHQAAAJgDAGQgDAGgFADQgGADgGAAIgMgBg");
	this.shape_32.setTransform(92.1,236.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFAUIgEgnIATAAIgDAng");
	this.shape_33.setTransform(88.175,233.675);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgQApQgHgHAAgOIAAgnQAAgOAHgIQAHgHAMAAIAKABIAJAEIgIARIgDgBIgEgBQgEABgDADQgBACAAAFIAAAjQAAAFACACQADADAEAAIAAAAIAEAAIAEgBIAIAQQgFADgFABQgFABgGAAQgMAAgHgHg");
	this.shape_34.setTransform(84.425,236.35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZAqQgHgGAAgMIAAgMQAAgGADgFQAEgDAFAAIgEgIIgBgHIAAgHQAAgIABgFQADgGAEgCQAFgCAJAAQAFAAAEACQAEACABAFQADAGAAAIIAAAGIgBAHQgCAEgDADQgCADgFABIAIALIgBgFIAAgGIARAAIAAAMIgBAJIgDAIIAMASIgWAAIgCgDIgGADIgGABQgPAAgHgGgAgLAPIAAADIAAADQAAAFACACQACADAFAAIABgBIABAAIgLgSgAgGgbIgBADIAAAKIAAACIAAABIAEgBIABgFIAAgHIAAgDIgCgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABg");
	this.shape_35.setTransform(78,236.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKAvIAAhHIgNAAIAAgWIAvAAIAAAWIgNAAIAABHg");
	this.shape_36.setTransform(71.9,236.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIA8IAAh3IASAAIAAB3g");
	this.shape_37.setTransform(63.2,237.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgLAvQgGgBgGgEIAIgRIAFADIAHABQADAAABgCIABgGIAAgIIgBgDIgBgDIgFAAIgDAAIAAgPIADAAIAEgBIABgDIABgDIAAgFQAAgDgBgDQgBgDgDAAIgFABIgFAEIgHgSQAFgDAGgBIAJgCQALAAAGAHQAHAHAAAMIAAACQAAAHgDAGQgDAEgGABQAHABADAEQADAGAAAJIAAAEQAAAMgHAHQgGAIgLgBQgGAAgFgBg");
	this.shape_38.setTransform(55.675,236.35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgOAvIAPhJIgWAAIAAgUIArAAIAAAUIgQBJg");
	this.shape_39.setTransform(50.75,236.35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgWAwIAAgTIAMgQIAKgPQAEgIAAgGIAAgBQgBgEgBgCQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAgBAAIgDgBIgHABIgGABIgGgSIAKgDQAGgCAHAAQAIAAAFAEQAGAEADAHQACAGAAAIIAAAAQAAAHgCAHQgCAFgEAGIgIALIgIAKIAWAAIAAAUg");
	this.shape_40.setTransform(45.8,236.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMAvIgKgDIAFgTIAHACIAHABQADAAABgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAAAQAAgDgCgDIgFgHIgFgEIgGgHQgDgEgCgEQgBgFAAgGQAAgNAHgGQAFgHALAAIAJABQAGABAFACIgGASIgGgBIgEgBQgEAAgBACQgBAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIAAAAQAAADACACIAFAGIACACIADADIAGAGIAFAJQACAEgBAHQAAAJgCAGQgEAGgFADQgGADgGAAIgMgBg");
	this.shape_41.setTransform(39.15,236.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgUAvIAAhdIApAAIAAAUIgUAAIAAAQIAQAAIAAATIgQAAIAAASIAUAAIAAAUg");
	this.shape_42.setTransform(34.525,236.35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgKAvIAAhdIAVAAIAABdg");
	this.shape_43.setTransform(30.675,236.35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAEAvIgHgkIgBAAIAAAkIgWAAIAAhdIAXAAQAKAAAGAEQAFACADAHQACAFAAAIIAAAHQAAAHgCAFQgCAEgDACIALAqgAgEgFIABAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgJIgBgEIgDgBIgBAAg");
	this.shape_44.setTransform(26.225,236.35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgUAvIAAhdIApAAIAAAUIgUAAIAAAQIAQAAIAAATIgQAAIAAASIAUAAIAAAUg");
	this.shape_45.setTransform(21.025,236.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgLAvIgMgDIAGgTIAIACIAFABQAEAAABgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIAAAAQAAgDgCgDIgGgHIgDgEIgHgHQgDgEgBgEQgCgFAAgGQAAgNAGgGQAHgHAJAAIAKABQAFABAFACIgFASIgGgBIgEgBQgEAAgCACQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAAAQAAADAAACIAGAGIADACIABADIAIAGIAEAJQACAEAAAHQgBAJgDAGQgDAGgFADQgGADgGAAIgLgBg");
	this.shape_46.setTransform(16.15,236.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(283));

	// footer_bg
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A5050F").s().p("EgjWAB9IAAj5IAxAAMBFOAAAIAuAAIAAD5g");
	this.shape_47.setTransform(745.975,237.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(283));

	// ticket
	this.instance_1 = new lib.ticket_mc();
	this.instance_1.setTransform(101.85,112.6,0.4156,0.4156,0,0,0,-0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(188).to({_off:false},0).wait(1).to({regX:-637.4,regY:24.5,x:-161.85,y:122.75},0).wait(1).to({x:-157.55},0).wait(1).to({x:-148.85,y:122.8},0).wait(1).to({x:-133.6,y:122.9},0).wait(1).to({x:-106.9,y:123},0).wait(1).to({x:-60.75,y:123.25},0).wait(1).to({x:-3.6,y:123.55},0).wait(1).to({x:53.25,y:123.85},0).wait(1).to({x:100.7,y:124.1},0).wait(1).to({x:137.95,y:124.3},0).wait(1).to({x:167.25,y:124.45},0).wait(1).to({x:190.4,y:124.55},0).wait(1).to({x:205.65,y:124.65},0).wait(1).to({x:214.45,y:124.7},0).wait(1).to({x:218.7},0).wait(1).to({regX:0.1,regY:0.1,x:484.85,y:114.6},0).wait(79));

	// logo
	this.instance_2 = new lib.bt_logo();
	this.instance_2.setTransform(484.85,19,0.4261,0.4261,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(188).to({alpha:0},16).wait(79));

	// cta
	this.instance_3 = new lib.cta_mc();
	this.instance_3.setTransform(484.85,198.4,0.2992,0.2992,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(204).to({_off:false},0).wait(1).to({regX:690,regY:-187.1,x:691.25,y:142.25,alpha:0.0032},0).wait(1).to({y:142.05,alpha:0.0145},0).wait(1).to({y:141.65,alpha:0.0371},0).wait(1).to({y:140.9,alpha:0.077},0).wait(1).to({y:139.6,alpha:0.1467},0).wait(1).to({y:137.4,alpha:0.2672},0).wait(1).to({y:134.65,alpha:0.4164},0).wait(1).to({y:131.9,alpha:0.5648},0).wait(1).to({y:129.6,alpha:0.6887},0).wait(1).to({y:127.8,alpha:0.7859},0).wait(1).to({y:126.4,alpha:0.8625},0).wait(1).to({y:125.3,alpha:0.9229},0).wait(1).to({y:124.55,alpha:0.9628},0).wait(1).to({y:124.15,alpha:0.9857},0).wait(1).to({y:123.95,alpha:0.9969},0).wait(1).to({regX:0.1,regY:0.1,x:484.85,y:179.95,alpha:1},0).wait(63));

	// main_sub_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(483.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.daily_sub_caption_mc();
	this.instance_5.setTransform(483.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},68).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(169));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:371.9,regY:-174.8,x:677,y:130.55,alpha:0.0037},0).wait(1).to({y:130.4,alpha:0.0167},0).wait(1).to({y:130.1,alpha:0.0435},0).wait(1).to({y:129.6,alpha:0.0919},0).wait(1).to({x:676.95,y:128.65,alpha:0.1816},0).wait(1).to({x:676.9,y:127.1,alpha:0.3248},0).wait(1).to({x:676.85,y:125.4,alpha:0.4878},0).wait(1).to({x:676.8,y:123.8,alpha:0.6345},0).wait(1).to({x:676.75,y:122.6,alpha:0.7499},0).wait(1).to({y:121.65,alpha:0.8388},0).wait(1).to({x:676.7,y:120.9,alpha:0.9088},0).wait(1).to({y:120.4,alpha:0.9564},0).wait(1).to({y:120.1,alpha:0.9834},0).wait(1).to({y:119.95,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:483.05,y:211.05,alpha:1},0).wait(68).to({x:483.4,y:211.25},0).wait(1).to({regX:371.9,regY:-174.8,x:677.05,y:120.15,alpha:0.9963},0).wait(1).to({y:120.3,alpha:0.9833},0).wait(1).to({y:120.6,alpha:0.9565},0).wait(1).to({y:121.1,alpha:0.9081},0).wait(1).to({y:122,alpha:0.8184},0).wait(1).to({y:123.5,alpha:0.6752},0).wait(1).to({y:125.2,alpha:0.5122},0).wait(1).to({y:126.75,alpha:0.3655},0).wait(1).to({y:127.95,alpha:0.2501},0).wait(1).to({y:128.9,alpha:0.1612},0).wait(1).to({y:129.6,alpha:0.0912},0).wait(1).to({y:130.1,alpha:0.0436},0).wait(1).to({y:130.4,alpha:0.0166},0).wait(1).to({y:130.55,alpha:0.0036},0).to({_off:true},1).wait(170));

	// su_sub_caption
	this.instance_6 = new lib.daily_sub_caption_mc();
	this.instance_6.setTransform(483.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({regX:448.1,regY:-176.7,x:716.7,y:129.55,alpha:0.0037},0).wait(1).to({y:129.4,alpha:0.0167},0).wait(1).to({y:129.1,alpha:0.0435},0).wait(1).to({y:128.6,alpha:0.0919},0).wait(1).to({x:716.65,y:127.65,alpha:0.1816},0).wait(1).to({x:716.6,y:126.1,alpha:0.3248},0).wait(1).to({x:716.55,y:124.4,alpha:0.4878},0).wait(1).to({x:716.5,y:122.8,alpha:0.6345},0).wait(1).to({x:716.45,y:121.6,alpha:0.7499},0).wait(1).to({y:120.65,alpha:0.8388},0).wait(1).to({x:716.4,y:119.9,alpha:0.9088},0).wait(1).to({y:119.4,alpha:0.9564},0).wait(1).to({y:119.1,alpha:0.9834},0).wait(1).to({y:118.95,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:483.05,y:211.05,alpha:1},0).wait(60).to({x:483.4,y:211.25},0).wait(1).to({regX:448.1,regY:-176.7,x:716.75,y:119.15,alpha:0.9968},0).wait(1).to({y:119.3,alpha:0.9855},0).wait(1).to({y:119.5,alpha:0.9629},0).wait(1).to({y:119.95,alpha:0.923},0).wait(1).to({y:120.65,alpha:0.8533},0).wait(1).to({y:121.9,alpha:0.7328},0).wait(1).to({y:123.5,alpha:0.5836},0).wait(1).to({y:125.05,alpha:0.4352},0).wait(1).to({y:126.3,alpha:0.3113},0).wait(1).to({y:127.35,alpha:0.2141},0).wait(1).to({y:128.15,alpha:0.1375},0).wait(1).to({y:128.75,alpha:0.0771},0).wait(1).to({y:129.2,alpha:0.0372},0).wait(1).to({y:129.45,alpha:0.0143},0).wait(1).to({y:129.55,alpha:0.0031},0).wait(1).to({regX:0.1,regY:0.1,x:483.4,y:221.7,alpha:0},0).to({_off:true},1).wait(93));

	// second_prize_mc
	this.instance_7 = new lib.second_prize_mc();
	this.instance_7.setTransform(330,148.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(98).to({_off:false},0).wait(1).to({y:148.0262,alpha:0.0037},0).wait(1).to({y:147.7652,alpha:0.0167},0).wait(1).to({y:147.2308,alpha:0.0435},0).wait(1).to({y:146.2628,alpha:0.0919},0).wait(1).to({y:144.4687,alpha:0.1816},0).wait(1).to({y:141.6041,alpha:0.3248},0).wait(1).to({y:138.3445,alpha:0.4878},0).wait(1).to({y:135.4109,alpha:0.6345},0).wait(1).to({y:133.1018,alpha:0.7499},0).wait(1).to({y:131.3241,alpha:0.8388},0).wait(1).to({y:129.9247,alpha:0.9088},0).wait(1).to({y:128.9721,alpha:0.9564},0).wait(1).to({y:128.4313,alpha:0.9834},0).wait(1).to({y:128.172,alpha:0.9964},0).wait(1).to({y:128.1,alpha:1},0).wait(61).to({y:128.248,alpha:0.9968},0).wait(1).to({y:128.7657,alpha:0.9855},0).wait(1).to({y:129.8076,alpha:0.9629},0).wait(1).to({y:131.6425,alpha:0.923},0).wait(1).to({y:134.8488,alpha:0.8533},0).wait(1).to({y:140.3891,alpha:0.7328},0).wait(1).to({y:147.2556,alpha:0.5836},0).wait(1).to({y:154.0819,alpha:0.4352},0).wait(1).to({y:159.7811,alpha:0.3113},0).wait(1).to({y:164.2533,alpha:0.2141},0).wait(1).to({y:167.7744,alpha:0.1375},0).wait(1).to({y:170.5545,alpha:0.0771},0).wait(1).to({y:172.3901,alpha:0.0372},0).wait(1).to({y:173.4425,alpha:0.0143},0).wait(1).to({y:173.9556,alpha:0.0031},0).wait(1).to({y:174.1,alpha:0},0).to({_off:true},1).wait(93));

	// promo
	this.instance_8 = new lib.promo_mc();
	this.instance_8.setTransform(630.65,116.65,0.4337,0.4337,0,0,0,0.1,0);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:-311.3,regY:16.3,x:495.05,y:123.7,alpha:0.0037},0).wait(1).to({x:493.15,alpha:0.0167},0).wait(1).to({x:489.25,alpha:0.0435},0).wait(1).to({x:482.2,alpha:0.0919},0).wait(1).to({x:469.1,alpha:0.1816},0).wait(1).to({x:448.2,alpha:0.3248},0).wait(1).to({x:424.45,alpha:0.4878},0).wait(1).to({x:403.05,alpha:0.6345},0).wait(1).to({x:386.25,alpha:0.7499},0).wait(1).to({x:373.3,alpha:0.8388},0).wait(1).to({x:363.1,alpha:0.9088},0).wait(1).to({x:356.15,alpha:0.9564},0).wait(1).to({x:352.2,alpha:0.9834},0).wait(1).to({x:350.3,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0,x:484.85,y:116.65,alpha:1},0).wait(83).to({alpha:0},15).to({_off:true},1).wait(169));

	// background
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A5050F").s().p("EhLyATiMAAAgnDMCXmAAAMAAAAnDg");
	this.shape_48.setTransform(484.85,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(121.8,125,850.5,172.60000000000002);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 970,
	height: 250,
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