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


(lib._320x50 = function() {
	this.initialize(img._320x50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.bigwin = function() {
	this.initialize(img.bigwin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,61);


(lib.consolation = function() {
	this.initialize(img.consolation);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,63);


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
	this.instance.setTransform(-1858,-246,2.6076,2.6076);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-1858,-246,1006.5,542.4), null);


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

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-156,-124,251,247), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Ah8BzQgzgoAAhLQAAhFAzgqQAygqBKAAQBLAAAyAqQAzAqAABFQAABLgzAoQgyAnhLAAQhKAAgygng");
	this.shape.setTransform(672.325,-27.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlPJ4IBQkXQCEA0A5AAQBsAAABhVIAAgJQgBgmgbgqQgagphDhDIg7g5QhfhdgqhSQgqhRAAh/IAAgDQAAixBbhkQBahjCgAAQCCAACbA+IhQEFQhjgfguABQhqgBAABXIAAAFQAAAMAEAMQAEALAFAKQAGALALAOIAWAYIAdAfIAdAgQAqAtAWAVQBiBhArBPQArBPAACJIAAACQAAC3hhBpQhgBoieAAQihAAighBg");
	this.shape_1.setTransform(614.5,-82.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkrKlIAA1JIJUAAIAAEhIkfAAIAADmIDpAAIAAEhIjpAAIAAEAIEiAAIAAEhg");
	this.shape_2.setTransform(547.5,-81.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAvK6QjAAAhihnQhjhoAAjKIAApAQAAjLBjhnQBihoDAAAIABAAQCTAAB7A3IhwD7QgwgPg6AAIgCAAQh6AAAACUIAAIFQAABGAlAnQAmAnBAAAIACAAQA2ABA+gaIBuD5QiHBDigAAg");
	this.shape_3.setTransform(479.825,-82.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDKlIhWtZIAANZIk3AAIAA1JIGZAAIBSNFIAAtFIE2AAIAAVJg");
	this.shape_4.setTransform(395.475,-81.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABkKlIgZkIIiVAAIgZEIIkwAAICz1JIHBAAICzVJgAgGjuIgmFqIBZAAIgmlqIgHhxg");
	this.shape_5.setTransform(306.675,-81.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAqKlIAAoWIhTAAIAAIWIk3AAIAA1JIE3AAIAAH/IBTAAIAAn/IE3AAIAAVJg");
	this.shape_6.setTransform(222.625,-81.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAvK6QjAAAhihnQhjhoAAjKIAApAQAAjLBjhnQBihoDAAAIABAAQCTAAB7A3IhwD7QgwgPg6AAIgCAAQh6AAAACUIAAIFQAABGAlAnQAmAnBAAAIACAAQA2ABA+gaIBuD5QiHBDigAAg");
	this.shape_7.setTransform(151.275,-82.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AkrKlIAA1JIJUAAIAAEhIkfAAIAADmIDpAAIAAEhIjpAAIAAEAIEiAAIAAEhg");
	this.shape_8.setTransform(58.65,-81.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA4KlIhsoEIgWAAIAAIEIk2AAIAA1JIFMAAQDXAABUBgQBUBgAAC4IAABhQAADGhkBWICaJUgAhKhYIAQAAQAoAAAQgTQAQgSAAgtIAAiCQAAgtgQgTQgQgSgoAAIgQAAg");
	this.shape_9.setTransform(-19.825,-81.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AABK5QixAAhchhQhbhhAAizIAAqEQAAi7BeheQBdhfCsAAIADAAQCwAABbBhQBaBhAAC2IAAKEQAAC6hdBeQhcBdiqAAgAgplaIAAK2QAAA5ApAAIABAAQAqAAAAg5IAAq2QAAg5grAAIgBAAQgoAAAAA5g");
	this.shape_10.setTransform(-104.35,-82.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ADdKlIAAv2IgNCbIhcNbIjpAAIhctbIgNibIAAP2IktAAIAA1JIHYAAIAsKBIAHBmIAIhmIAwqBIHUAAIAAVJg");
	this.shape_11.setTransform(-202.675,-81.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah8BzQgzgoAAhLQAAhFAzgqQAygqBKAAQBLAAAyAqQAzAqAABFQAABLgzAoQgyAnhLAAQhKAAgygng");
	this.shape_12.setTransform(615.325,-194.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AlQJ4IBRkXQCEA0A5AAQBsAAAAhUIAAgJQAAgngbgpQgbgqhChDIg7g5QhfhegqhRQgqhQAAiAIAAgDQAAixBbhjQBahkCfAAQCCAACcA+IhQEFQhjgegugBQhqABAABWIAAAFQAAAMAEAMQAEALAFAKQAHAKAKAPIAWAZIAcAdIAeAiQAqAsAWAUQBiBiArBPQArBPAACJIAAACQgBC3hgBpQhgBoieAAQihAAihhBg");
	this.shape_13.setTransform(557.45,-249.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AkrKlIAA1JIJUAAIAAEhIkeAAIAADmIDoAAIAAEhIjoAAIAAEAIEhAAIAAEhg");
	this.shape_14.setTransform(490.5,-248.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AlfKlIAAkQIF3sVIlMAAIAAkkIKUAAIAAEQIl9MVIF7AAIAAEkg");
	this.shape_15.setTransform(416.95,-248.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiaKlIAA1JIE1AAIAAVJg");
	this.shape_16.setTransform(357.825,-248.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA4KlIhsoEIgWAAIAAIEIk2AAIAA1JIFMAAQDXAABUBgQBUBgAAC4IAABhQAADGhkBWICaJUgAhKhYIAQAAQAoAAAQgTQAQgSAAgtIAAiCQAAgtgQgTQgQgSgoAAIgQAAg");
	this.shape_17.setTransform(293.825,-248.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AlkKlIAA1JIFKAAQDWAABVBgQBUBgAAC4IAABxQAADMhkBQQhjBRi4AAIgTAAIAAHzgAgthIIAMAAQAnAAAQgSQASgTAAgtIAAiSQAAgtgSgTQgQgSgnAAIgMAAg");
	this.shape_18.setTransform(209.675,-248.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AkrKlIAA1JIJUAAIAAEhIkeAAIAADmIDoAAIAAEhIjoAAIAAEAIEhAAIAAEhg");
	this.shape_19.setTransform(115.65,-248.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA4KlIhsoEIgWAAIAAIEIk2AAIAA1JIFMAAQDXAABUBgQBUBgAAC4IAABhQAADGhkBWICaJUgAhKhYIAQAAQAoAAAQgTQAQgSAAgtIAAiCQAAgtgQgTQgQgSgoAAIgQAAg");
	this.shape_20.setTransform(37.175,-248.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AACK5QiyAAhbhgQhchiAAi0IAAqDQAAi7BehfQBeheCrAAIADAAQCwAABbBhQBaBhAAC2IAAKDQAAC7hdBeQhcBdiqAAgAgplZIAAK1QAAA5ApAAIACAAQApAAAAg5IAAq1QAAg7grAAIgBAAQgoAAAAA7g");
	this.shape_21.setTransform(-47.35,-249.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ADdKlIAAv2IgNCbIhcNbIjpAAIhctbIgNibIAAP2IktAAIAA1JIHYAAIAsKBIAHBmIAIhmIAwqBIHUAAIAAVJg");
	this.shape_22.setTransform(-145.675,-248.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-312.1,-352.6,1059.2,413), null);


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
	this.shape.setTransform(157.975,1.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AgLAVQgGgCgDgGQgDgGAAgHQAAgGADgGQADgFAFgDQAGgDAGAAQAKAAAHAGQAHAHAAAKQAAAKgHAHQgHAHgKAAQgFAAgGgDgAgHgKQgDAEAAAGQAAAHADAEQADADAEAAQAFAAADgDQADgEAAgHQAAgGgDgEQgDgDgFAAQgEAAgDADg");
	this.shape_1.setTransform(151.725,1.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AAMAgIgYgpIAAApIgNAAIAAg/IANAAIAZAqIAAgqIANAAIAAA/g");
	this.shape_2.setTransform(145.675,0.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AgTAgIgBgKIAGABQADAAACgDQADgCABgEIgSguIANAAIAKAgIAMggIAMAAIgRAsIgCAIIgEAGIgCAEQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABAAAAIgHABIgHgBg");
	this.shape_3.setTransform(137.5,1.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AgNAWQgEgCgBgEQgCgEAAgGIAAgdIAMAAIAAAWIABALIACADIAFABQACAAADgBIADgFQABgCAAgJIAAgUIAMAAIAAAuIgLAAIAAgHQgDADgEADQgDACgFAAQgEAAgEgCg");
	this.shape_4.setTransform(132.275,1.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AgaAgIAAg/IAaAAIAKAAIAHADQADACACAEQACADAAAEQAAAFgDADQgCAEgEACQAGABADAEQADAEAAAGQAAAEgCAEQgCAEgEADQgDACgGABIgOAAgAgNAVIAMAAIAIAAIAFgDQABgCAAgDQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBgCgDgBQgDgBgHAAIgLAAgAgNgGIAIAAIAJAAQADAAACgCQACgCAAgDQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBgCgEAAIgKAAIgHAAg");
	this.shape_5.setTransform(126.4,0.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjnhJIHPAAQAVAAAOAPQAPAPAAAUIAAAvQAAAUgPAPQgOAPgVAAInPAAQgVAAgPgPQgOgPAAgUIAAgvQAAgUAOgPQAPgPAVAAg");
	this.shape_6.setTransform(141.225,-0.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAD72E").s().p("AjnBKQgVAAgPgPQgOgPAAgUIAAgvQAAgUAOgPQAPgPAVAAIHPAAQAVAAAOAPQAPAPAAAUIAAAvQAAAUgPAPQgOAPgVAAg");
	this.shape_7.setTransform(141.225,-0.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.button_mc, new cjs.Rectangle(112,-9,58.5,16.8), null);


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


(lib.bonuse_prizes_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgMArIAAgeIgfAAIAAgZIAfAAIAAgeIAZAAIAAAeIAeAAIAAAZIgeAAIAAAeg");
	this.shape.setTransform(18.6,-16.1);

	this.instance = new lib.consolation();
	this.instance.setTransform(-30,-7,0.4274,0.4274);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bonuse_prizes_mc, new cjs.Rectangle(-30,-30.9,94.1,50.9), null);


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
	this.instance.setTransform(-36,-9,0.4814,0.4814);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAuIAAggIghAAIAAgaIAhAAIAAghIAaAAIAAAhIAgAAIAAAaIggAAIAAAgg");
	this.shape.setTransform(17.475,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.big_win_mc, new cjs.Rectangle(-36,-32.1,105.9,52.5), null);


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
	this.instance = new lib._320x50();
	this.instance.setTransform(-160,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_mc, new cjs.Rectangle(-160,-25,320,50), null);


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
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(180.2,-0.45,0.0069,0.0069,0,0,0,501.4,443.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKARIgBgIIAGABIADAAIABgDIgBAAQgEAAgCgCQgBgCABgEIADgQIAHAAIgDAQQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAAAIAEgRIAIAAIgGAYQgBAGgDACQgCADgEAAIgGgBg");
	this.shape.setTransform(174.425,0.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHASIAHgjIAHAAIgHAjg");
	this.shape_1.setTransform(172.95,-0.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKARIAIgiIAGAAIgCAJIABAAQAFgBACADQABADgBADIgBAIQgBAGgDACQgDACgDAAIgJgBgAgBAKIABAAIAAAAIABgCIABgIIAAAAIgBgBIAAAAg");
	this.shape_2.setTransform(171.17,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGATIAFgZIAHAAIgGAZgAAAgKQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgCIADgBIACABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIgCAEIgDABIgCgBg");
	this.shape_3.setTransform(169.7083,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJANIACgIIAGABQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAIAAgBIgBAAIgBgBIAAAAQgFgDABgFQABgDACgCQACgCAEAAQADgBADACIgCAHIgFgBQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABIAAABIABAAIACABIADACQACACgBADQgBAEgDACQgCADgEAAIgHgBg");
	this.shape_4.setTransform(168.075,-0.0562);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAAOIADgRQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIgBAAIgDATIgIAAIAFgZQAFgBAEAAQAIgBgBAJIgEASg");
	this.shape_5.setTransform(166.1363,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAEIABgHQACgKAIAAQAJAAgCAKIgCAHQgCAKgIAAQgIAAACgKgAAAgDIgBAHQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIACgHQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABg");
	this.shape_6.setTransform(164.1491,-0.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLASIAIgjIAHAAQAFAAACACQABADgBAFIgBAHQgBAFgDACQgDACgDAAIgBAAIgCAJgAAAACIAAAAIABgBIABgBIABgHIAAgCIgBgBIAAAAg");
	this.shape_7.setTransform(161.97,0.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJANIACgIIAGABQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAIAAgBIgBAAIgBgBIAAAAQgFgDABgFQABgDACgCQACgCAEAAQADgBADACIgCAHIgFgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABIAAABIABAAIACABIADACQACACgBADQgBAEgDACQgCADgEAAIgHgBg");
	this.shape_8.setTransform(160.075,-0.0562);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHALQgCgCABgGIABgGQABgFADgCQACgDAEAAQAEAAACADQABACgBAFIgBAFIgIAAIgBACQAAAAAAABQAAAAABABQAAAAAAAAQABAAABAAIADAAIgBAHIgEABQgFAAgCgDgAAAgEIAAACIACAAIAAgCIAAgBIgBgBQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAg");
	this.shape_9.setTransform(158.2783,-0.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAASIAAgOIAAAAIgDAOIgIAAIAHgjIAIAAQAFAAACADQACACgBAFIgBADQgBAEgDACIABAQgAAAgBIAAAAIACgBIABgCIABgDIgBgCIgBAAIAAAAg");
	this.shape_10.setTransform(156.07,-0.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKARIgBgIIAGABIADAAIABgDIgBAAQgEAAgCgCQgBgCABgEIADgQIAHAAIgDAQQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAAAAIAEgRIAIAAIgGAYQgBAGgDACQgCADgEAAIgGgBg");
	this.shape_11.setTransform(153.325,0.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIALQgBgCAAgDIAAgBQABgDADgCQACgCADAAIACAAIAAgBIAAgCIgCgBIgGABIAEgHIACgBIACAAQAFABACACQACACgBAEIgEAQIgIABQgEAAgCgCgAAAADIgBABIAAABIAAACIABAAIAAAAIAAgFIAAAAIAAABg");
	this.shape_12.setTransform(151.2388,-0.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHASIAHgjIAIAAIgIAjg");
	this.shape_13.setTransform(149.8,-0.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLASIAHgjIAIAAQAFAAACADQACACgBAFIgBADQgBAEgDACQgDADgEAAIgBAAIgCANgAAAgBIAAAAIACAAIAAgCIABgEIAAgCIgBAAIAAAAg");
	this.shape_14.setTransform(148.07,-0.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJASIAAgjIAJAAQAEAAACADQADADAAAEIAAAOQAAAFgDADQgCADgEAAgAgBAKIABAAIAAAAIABgCIAAgPIgBgBIAAgBIgBAAg");
	this.shape_15.setTransform(182.05,-9.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHASIAAgjIAPAAIAAAIIgIAAIAAAGIAGAAIAAAGIgGAAIAAAHIAIAAIAAAIg");
	this.shape_16.setTransform(180.125,-9.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AACASIAAgHIgDAAIgBAHIgIAAIAFgjIALAAIAFAjgAAAgGIAAAJIABAAIgBgJIAAgCg");
	this.shape_17.setTransform(178.075,-9.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAASIgBgWIAAAWIgIAAIAAgjIAJAAIACAVIAAgVIAIAAIAAAjg");
	this.shape_18.setTransform(175.1,-9.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDASIAAgjIAHAAIAAAjg");
	this.shape_19.setTransform(173.4,-9.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgIARIACgHIAFAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgBIgBgCIgCgDIgBgCIgDgDIgCgFQAAgFADgDQACgDADABIAIABIgCAHIgEAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIAAAAIAAABIAAAAIAAABIACABIAAABIACACIADADQACACAAAEQAAAFgDADQgDADgDAAQgEAAgEgCg");
	this.shape_20.setTransform(171.35,-9.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHASIAAgjIAPAAIAAAIIgIAAIAAAGIAGAAIAAAGIgGAAIAAAHIAIAAIAAAIg");
	this.shape_21.setTransform(169.575,-9.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIASIAAgHIAJgUIgIAAIAAgIIAQAAIAAAIIgJATIAJAAIAAAIg");
	this.shape_22.setTransform(167.625,-9.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgDASIAAgjIAHAAIAAAjg");
	this.shape_23.setTransform(166.05,-9.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AACASIgDgOIAAAAIAAAOIgIAAIAAgjIAIAAQAGAAABACQADADAAAFIAAACQAAAFgDACIAEAQgAgBgBIAAAAIABgBIABgCIAAgDIgBgBIgBgBIAAAAg");
	this.shape_24.setTransform(164.35,-9.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIASIAAgjIAIAAQAFAAACACQACADAAAFIAAADQAAAEgCACQgDADgEAAIAAAAIAAANgAAAgBIAAAAIABAAIAAgCIAAgEIAAgBIgBgBIAAAAg");
	this.shape_25.setTransform(162.125,-9.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCAXIAAgtIAGAAIAAAtg");
	this.shape_26.setTransform(158.65,-8.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDASIAAgKIgHgZIAIAAIACAMIADgMIAIAAIgHAZIAAAKg");
	this.shape_27.setTransform(155.15,-9.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHASIAAgjIAHAAIAAAbIAIAAIAAAIg");
	this.shape_28.setTransform(152.975,-9.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgIASIAAgjIAIAAQAFAAACACQACADAAAFIAAADQAAAEgCACQgDADgEAAIAAAAIAAANgAAAgBIAAAAIABAAIAAgCIAAgEIAAgBIgBgBIAAAAg");
	this.shape_29.setTransform(150.925,-9.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgIASIAAgjIAIAAQAFAAACACQACADAAAFIAAADQAAAEgCACQgDADgEAAIAAAAIAAANgAAAgBIAAAAIABAAIAAgCIAAgEIAAgBIgBgBIAAAAg");
	this.shape_30.setTransform(148.775,-9.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AACASIAAgHIgDAAIgBAHIgIAAIAFgjIALAAIAFAjgAAAgGIAAAJIABAAIgBgJIAAgCg");
	this.shape_31.setTransform(146.575,-9.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIARIACgHIAFAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgBIgBgCIgCgDIgBgCIgDgDIgCgFQAAgFADgDQACgDADABIAIABIgCAHIgEAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIAAAAIAAABIAAAAIAAABIACABIAAABIACACIADADQACACAAAEQAAAFgDADQgDADgDAAQgEAAgEgCg");
	this.shape_32.setTransform(143.9,-9.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgBAIIgCgPIAHAAIgCAPg");
	this.shape_33.setTransform(142.375,-10.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgFAQQgDgDAAgFIAAgPQAAgFADgDQACgCAEAAQAEgBAEACIgEAHIgCgBQgDAAAAAEIAAANIAAADIADABIADgBIADAHQgDACgFAAQgEgBgCgCg");
	this.shape_34.setTransform(140.95,-9.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgJAQQgCgCgBgFIAAgFIABgDIADgBIgBgGIAAgCQAAgGABgCQADgBAEAAQADAAACABQABACAAAGIAAACQAAAFgFABIAEAEIgBgEIAGAAIAAACIAAACIAAABIAAACIAAACIgBABIAAABIAFAHIgJAAIAAgBQgDACgCAAQgGgBgCgCgAgDAFIAAADIAAACIACABIABAAIgDgHgAgCgJIAAABIAAADIAAABQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgCIgBgCIAAAAIgBAAIAAABg");
	this.shape_35.setTransform(138.5,-9.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDASIAAgaIgFAAIAAgJIARAAIAAAJIgFAAIAAAag");
	this.shape_36.setTransform(136.175,-9.15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgCAXIAAgtIAFAAIAAAtg");
	this.shape_37.setTransform(132.8,-8.675);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgFASIAFgbIgHAAIAAgIIAPAAIAAAIIgGAbg");
	this.shape_38.setTransform(130.025,-9.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgFASIAFgbIgHAAIAAgIIAPAAIAAAIIgGAbg");
	this.shape_39.setTransform(128.175,-9.15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgIASIAAgHQAJgLAAgFIAAgBIgBgDIgBAAIgFABIgCgHQADgCAFAAQAEAAADADQACADAAAFIgBAFIgCAEIgDAEIgDAEIAIAAIAAAHg");
	this.shape_40.setTransform(126.325,-9.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgIARIACgHIAFAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgBIgBgCIgBgDIgCgCIgEgDIgBgFQABgFACgDQACgDADABIAIABIgCAHIgEAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIAAAAIAAABIAAAAIAAABIABABIABABIACACIAEADQABACAAAEQAAAFgDADQgDADgDAAQgEAAgEgCg");
	this.shape_41.setTransform(123.8,-9.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgHASIAAgjIAPAAIAAAIIgIAAIAAAGIAGAAIAAAGIgGAAIAAAHIAIAAIAAAIg");
	this.shape_42.setTransform(122.025,-9.15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgDASIAAgjIAHAAIAAAjg");
	this.shape_43.setTransform(120.55,-9.15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AABASIgBgOIgBAAIAAAOIgIAAIAAgjIAJAAQAEAAADACQACADAAAFIAAACQAAAFgDACIAEAQgAgBgBIABAAIAAgBIAAgCIAAgDIAAgBIAAgBIgBAAg");
	this.shape_44.setTransform(118.85,-9.15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgHASIAAgjIAPAAIAAAIIgIAAIAAAGIAGAAIAAAGIgGAAIAAAHIAIAAIAAAIg");
	this.shape_45.setTransform(116.875,-9.15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgIARIACgHIAFAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgBIgBgCIgCgDIgBgCIgEgDIgBgFQAAgFADgDQACgDADABIAIABIgCAHIgEAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIAAAAIAAABIAAAAIAAABIABABIABABIACACIADADQACACAAAEQAAAFgDADQgCADgEAAQgEAAgEgCg");
	this.shape_46.setTransform(115,-9.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(113.8,-12.1,69.7,15.399999999999999);


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
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(110.8,43.95,1.1257,1.1257);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(366));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(159.95,3.8,0.0852,0.0852,0,0,0,0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(272).to({alpha:0},16).wait(78));

	// Layer_1
	this.instance_2 = new lib.button_mc();
	this.instance_2.setTransform(172.75,33.15,1,1,0,0,0,28.2,7.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(288).to({_off:false},0).to({y:24.4,alpha:1},16).wait(62));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(83.35,22.5,0.0831,0.0831);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(272).to({_off:false},0).wait(1).to({regX:-1354.7,regY:25.2,x:-29,y:24.6,alpha:0.0032},0).wait(1).to({x:-28.1,alpha:0.0145},0).wait(1).to({x:-26.4,alpha:0.0371},0).wait(1).to({x:-23.35,alpha:0.077},0).wait(1).to({x:-18,y:24.65,alpha:0.1467},0).wait(1).to({x:-8.75,y:24.7,alpha:0.2672},0).wait(1).to({x:2.65,y:24.75,alpha:0.4164},0).wait(1).to({x:14.05,y:24.8,alpha:0.5648},0).wait(1).to({x:23.55,y:24.85,alpha:0.6887},0).wait(1).to({x:31,y:24.9,alpha:0.7859},0).wait(1).to({x:36.85,alpha:0.8625},0).wait(1).to({x:41.45,y:24.95,alpha:0.9229},0).wait(1).to({x:44.55,alpha:0.9628},0).wait(1).to({x:46.3,alpha:0.9857},0).wait(1).to({x:47.15,alpha:0.9969},0).wait(1).to({regX:0,regY:0,x:159.95,y:22.9,alpha:1},0).wait(78));

	// bonus_prizes
	this.instance_4 = new lib.bonuse_prizes_mc();
	this.instance_4.setTransform(163.9,28.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:17,regY:-0.3,x:180.9,y:28.15,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:28.05,alpha:0.0435},0).wait(1).to({y:27.95,alpha:0.0919},0).wait(1).to({y:27.7,alpha:0.1816},0).wait(1).to({y:27.35,alpha:0.3248},0).wait(1).to({y:26.95,alpha:0.4878},0).wait(1).to({y:26.6,alpha:0.6345},0).wait(1).to({y:26.3,alpha:0.7499},0).wait(1).to({y:26.1,alpha:0.8388},0).wait(1).to({y:25.9,alpha:0.9088},0).wait(1).to({y:25.8,alpha:0.9564},0).wait(1).to({y:25.7,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:163.9,y:26,alpha:1},0).wait(69).to({regX:17,regY:-0.3,x:180.9,y:25.65,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:25.55,alpha:0.9565},0).wait(1).to({y:25.45,alpha:0.9081},0).wait(1).to({y:25.2,alpha:0.8184},0).wait(1).to({y:24.85,alpha:0.6752},0).wait(1).to({y:24.45,alpha:0.5122},0).wait(1).to({y:24.1,alpha:0.3655},0).wait(1).to({y:23.8,alpha:0.2501},0).wait(1).to({y:23.6,alpha:0.1612},0).wait(1).to({y:23.4,alpha:0.0912},0).wait(1).to({y:23.3,alpha:0.0436},0).wait(1).to({y:23.2,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:163.9,y:23.5,alpha:0},0).to({_off:true},1).wait(252));

	// bonus_prizes_copy
	this.instance_5 = new lib.big_win_mc();
	this.instance_5.setTransform(163.9,28.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:17,regY:-0.4,x:180.9,y:28.05,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:27.95,alpha:0.0435},0).wait(1).to({y:27.85,alpha:0.0919},0).wait(1).to({y:27.6,alpha:0.1816},0).wait(1).to({y:27.25,alpha:0.3248},0).wait(1).to({y:26.85,alpha:0.4878},0).wait(1).to({y:26.5,alpha:0.6345},0).wait(1).to({y:26.2,alpha:0.7499},0).wait(1).to({y:26,alpha:0.8388},0).wait(1).to({y:25.8,alpha:0.9088},0).wait(1).to({y:25.7,alpha:0.9564},0).wait(1).to({y:25.6,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:163.9,y:26,alpha:1},0).wait(69).to({regX:17,regY:-0.4,x:180.9,y:25.55,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:25.45,alpha:0.9565},0).wait(1).to({y:25.35,alpha:0.9081},0).wait(1).to({y:25.1,alpha:0.8184},0).wait(1).to({y:24.75,alpha:0.6752},0).wait(1).to({y:24.35,alpha:0.5122},0).wait(1).to({y:24,alpha:0.3655},0).wait(1).to({y:23.7,alpha:0.2501},0).wait(1).to({y:23.5,alpha:0.1612},0).wait(1).to({y:23.3,alpha:0.0912},0).wait(1).to({y:23.2,alpha:0.0436},0).wait(1).to({y:23.1,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:163.9,y:23.5,alpha:0},0).to({_off:true},1).wait(169));

	// sub_caption
	this.instance_6 = new lib.daily_caption_mc();
	this.instance_6.setTransform(159.7,44.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(181).to({_off:false},0).wait(1).to({regX:217.4,regY:-165.6,x:182.3,y:27,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:26.95,alpha:0.0435},0).wait(1).to({y:26.85,alpha:0.0919},0).wait(1).to({y:26.65,alpha:0.1816},0).wait(1).to({y:26.35,alpha:0.3248},0).wait(1).to({y:26,alpha:0.4878},0).wait(1).to({y:25.7,alpha:0.6345},0).wait(1).to({y:25.45,alpha:0.7499},0).wait(1).to({y:25.25,alpha:0.8388},0).wait(1).to({y:25.1,alpha:0.9088},0).wait(1).to({y:25,alpha:0.9564},0).wait(1).to({y:24.95,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:42.25,alpha:1},0).wait(62).to({regX:217.4,regY:-165.6,x:182.3,y:24.95,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:25,alpha:0.9565},0).wait(1).to({y:25.1,alpha:0.9081},0).wait(1).to({y:25.3,alpha:0.8184},0).wait(1).to({y:25.6,alpha:0.6752},0).wait(1).to({y:25.95,alpha:0.5122},0).wait(1).to({y:26.25,alpha:0.3655},0).wait(1).to({y:26.5,alpha:0.2501},0).wait(1).to({y:26.7,alpha:0.1612},0).wait(1).to({y:26.85,alpha:0.0912},0).wait(1).to({y:26.95,alpha:0.0436},0).wait(1).to({y:27,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:44.35,alpha:0},0).wait(94));

	// second_prize
	this.instance_7 = new lib.second_prize_mc();
	this.instance_7.setTransform(102.1,29.75,0.1923,0.1923);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(181).to({_off:false},0).wait(1).to({regX:-30.5,regY:-0.5,x:96.25,y:29.6,alpha:0.0037},0).wait(1).to({y:29.55,alpha:0.0167},0).wait(1).to({y:29.45,alpha:0.0435},0).wait(1).to({y:29.25,alpha:0.0919},0).wait(1).to({y:28.9,alpha:0.1816},0).wait(1).to({y:28.35,alpha:0.3248},0).wait(1).to({y:27.65,alpha:0.4878},0).wait(1).to({y:27.1,alpha:0.6345},0).wait(1).to({y:26.65,alpha:0.7499},0).wait(1).to({y:26.25,alpha:0.8388},0).wait(1).to({y:26,alpha:0.9088},0).wait(1).to({y:25.8,alpha:0.9564},0).wait(1).to({y:25.7,alpha:0.9834},0).wait(1).to({y:25.65,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:102.1,y:25.75,alpha:1},0).wait(61).to({regX:-20.8,x:98.1},0).wait(1).to({regX:-30.5,regY:-0.5,x:96.05,y:25.65},0).wait(1).to({x:96.15},0).wait(1).to({scaleX:0.1921,scaleY:0.1921,x:98.35,y:25.6},0).wait(1).to({scaleX:0.1917,scaleY:0.1917,x:104},0).wait(1).to({scaleX:0.191,scaleY:0.191,x:111.3,y:25.55},0).wait(1).to({scaleX:0.1903,scaleY:0.1903,x:120.7,y:25.5},0).wait(1).to({scaleX:0.1893,scaleY:0.1893,x:132.65,y:25.4},0).wait(1).to({scaleX:0.1881,scaleY:0.1881,x:146.85,y:25.35},0).wait(1).to({scaleX:0.1869,scaleY:0.1869,x:161.5,y:25.25},0).wait(1).to({scaleX:0.1858,scaleY:0.1858,x:174.3,y:25.2},0).wait(1).to({scaleX:0.185,scaleY:0.185,x:184.45,y:25.1},0).wait(1).to({scaleX:0.1843,scaleY:0.1843,x:192.55,y:25.05},0).wait(1).to({scaleX:0.1838,scaleY:0.1838,x:198.7},0).wait(1).to({scaleX:0.1837,scaleY:0.1837,x:200.35,y:25},0).wait(1).to({regX:-20.7,regY:0,x:202.1,y:25.15},0).wait(94));

	// promo
	this.instance_8 = new lib.promo_mc();
	this.instance_8.setTransform(189.15,23.35,0.0867,0.0867,0,0,0,0.6,0.6);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:-666.6,regY:20.2,x:131.15,y:25.05,alpha:0.0037},0).wait(1).to({x:130.8,alpha:0.0167},0).wait(1).to({x:130,alpha:0.0435},0).wait(1).to({x:128.6,alpha:0.0919},0).wait(1).to({x:125.95,alpha:0.1816},0).wait(1).to({x:121.8,alpha:0.3248},0).wait(1).to({x:117.05,alpha:0.4878},0).wait(1).to({x:112.75,alpha:0.6345},0).wait(1).to({x:109.4,alpha:0.7499},0).wait(1).to({x:106.8,alpha:0.8388},0).wait(1).to({x:104.75,alpha:0.9088},0).wait(1).to({x:103.35,alpha:0.9564},0).wait(1).to({x:102.55,alpha:0.9834},0).wait(1).to({x:102.2,alpha:0.9964},0).wait(1).to({regX:0,regY:0.6,x:159.95,y:23.35,alpha:1},0).wait(166).to({alpha:0},15).wait(61).to({regX:-667,regY:20.2,x:102.1,y:25.05},0).wait(1).to({regX:-666.6,x:102.05},0).wait(1).to({x:102.1},0).wait(1).to({x:102.8,y:25,alpha:0.0206},0).wait(1).to({scaleX:0.0866,scaleY:0.0866,x:104.65,alpha:0.075},0).wait(1).to({scaleX:0.0865,scaleY:0.0865,x:106.95,alpha:0.1453},0).wait(1).to({scaleX:0.0863,scaleY:0.0863,x:110,alpha:0.2353},0).wait(1).to({scaleX:0.0861,scaleY:0.0861,x:113.8,alpha:0.3498},0).wait(1).to({scaleX:0.0858,scaleY:0.0858,x:118.4,alpha:0.4866},0).wait(1).to({scaleX:0.0856,scaleY:0.0856,x:123.1,alpha:0.6273},0).wait(1).to({scaleX:0.0853,scaleY:0.0853,x:127.2,y:24.95,alpha:0.7499},0).wait(1).to({scaleX:0.0852,scaleY:0.0852,x:130.55,y:24.9,alpha:0.848},0).wait(1).to({scaleX:0.085,scaleY:0.085,x:133.1,alpha:0.9252},0).wait(1).to({scaleX:0.0849,scaleY:0.0849,x:135.1,alpha:0.9846},0).wait(1).to({x:135.65,alpha:1},0).wait(1).to({regX:-666.9,regY:21.2,x:135.6,y:24.95},0).wait(94));

	// background
	this.instance_9 = new lib.background_mc();
	this.instance_9.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(366));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(88.9,16.4,231.1,37);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_2ndprize.png", id:"_2ndprize"},
		{src:"images/_320x50.jpg", id:"_320x50"},
		{src:"images/bigwin.png", id:"bigwin"},
		{src:"images/consolation.png", id:"consolation"},
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