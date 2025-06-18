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


(lib._300x50 = function() {
	this.initialize(img._300x50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,50);


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
	this.instance.setTransform(-1758,-235,2.5071,2.5071);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-1758,-235,967.8,521.5), null);


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
	this.instance.setTransform(-32,-24,0.1959,0.1959);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-32,-24,49.2,48.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AiBB3Qg1gpAAhPQAAhGA1gtQA0grBNAAQBPAAAzArQA1AtAABGQAABPg1ApQgzAphPAAQhNAAg0gpg");
	this.shape.setTransform(680.725,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AldKSIBUkiQCJA1A7AAQBxAAAAhYIAAgJQAAgogcgrQgbgshGhFIg9g7QhjhigrhUQgshUAAiFIAAgDQAAi4BehnQBehoClAAQCIAAChBBIhTEPQhngfgwAAQhuAAAABZIAAAGQAAAMAEAMQAFAMAGALQAFAKAMAPIAWAaIAeAfIAfAiQAsAvAWAVQBmBlAtBTQAsBSAACOIAAACQAAC/hkBsQhkBtilAAQinAAinhDg");
	this.shape_1.setTransform(620.55,-55.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ak3LAIAA1/IJrAAIAAEsIkpAAIAADwIDyAAIAAEtIjyAAIAAEKIEtAAIAAEsg");
	this.shape_2.setTransform(551,-55.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAwLWQjGAAhnhrQhnhsAAjTIAApXQAAjTBnhsQBnhrDGAAIACAAQCYAACBA6Ih0EEQgzgQg8AAIgCAAQh/AAAACbIAAIZQAABJAnApQAnApBCgBIADAAQA4ABBAgbIBzEDQiNBGimAAg");
	this.shape_3.setTransform(480.65,-55.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgELAIhZt7IAAN7IlDAAIAA1/IGpAAIBWNmIAAtmIFCAAIAAV/g");
	this.shape_4.setTransform(392.875,-55.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABoLAIgakSIibAAIgaESIk8AAIC61/IHTAAIC6V/gAgGj4IgoF5IBdAAIgol5IgHh1g");
	this.shape_5.setTransform(300.575,-55.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAsLAIAAorIhYAAIAAIrIlCAAIAA1/IFCAAIAAIUIBYAAIAAoUIFDAAIAAV/g");
	this.shape_6.setTransform(213.2,-55.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAwLWQjGAAhnhrQhnhsAAjTIAApXQAAjTBnhsQBnhrDGAAIACAAQCYAACBA6Ih0EEQgygQg+AAIgBAAQh/AAAACbIAAIZQAABJAmApQAoApBCgBIACAAQA5ABBBgbIByEDQiNBGimAAg");
	this.shape_7.setTransform(139,-55.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ak3LAIAA1/IJrAAIAAEsIkpAAIAADwIDxAAIAAEtIjxAAIAAEKIEtAAIAAEsg");
	this.shape_8.setTransform(42.7,-55.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA7LAIhxoZIgWAAIAAIZIlDAAIAA1/IFZAAQDfAABZBkQBWBkABC/IAABkQAADOhpBaIChJsgAhMhbIAPAAQArgBAQgTQARgTAAgvIAAiHQAAgugRgUQgQgTgrAAIgPAAg");
	this.shape_9.setTransform(-38.9,-55.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AABLVQi4AAhfhkQhfhlAAi8IAAqdQAAjCBhhiQBihjCyAAIADAAQC4AABeBlQBdBlAAC9IAAKdQAADDhgBhQhgBhixAAgAgqlnIAALRQAAA7AqAAIABAAQAsAAAAg7IAArRQAAg8gtAAIgBAAQgpAAAAA8g");
	this.shape_10.setTransform(-126.825,-55.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ADmLAIAAweIgOChIhfN9IjyAAIhgt9IgOihIAAQeIk5AAIAA1/IHqAAIAvKbIAHBqIAIhqIAyqbIHnAAIAAV/g");
	this.shape_11.setTransform(-228.975,-55.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiBB3Qg1gpAAhPQAAhGA1gtQA0grBNAAQBPAAAzArQA1AtAABGQAABPg1ApQgzAphPAAQhNAAg0gpg");
	this.shape_12.setTransform(621.475,-201.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AldKSIBUkiQCJA1A6AAQByAAAAhYIAAgJQAAgogcgrQgcgshFhFIg9g7QhjhigshUQgrhUAAiFIAAgDQAAi4BehnQBdhoCmAAQCIAAChBBIhTEPQhmgfgxAAQhuAAAABZIAAAGQAAAMAEAMQAEAMAGALQAHAKALAPIAWAaIAeAfIAfAiQArAvAYAVQBlBlAtBTQAsBSAACOIAAACQAAC/hkBsQhkBtilAAQinAAinhDg");
	this.shape_13.setTransform(561.3,-257.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ak3LAIAA1/IJrAAIAAEsIkpAAIAADwIDyAAIAAEtIjyAAIAAEKIEtAAIAAEsg");
	this.shape_14.setTransform(491.7,-257.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AltLAIAAkbIGFs1IlYAAIAAkvIKuAAIAAEbImMM0IGLAAIAAEwg");
	this.shape_15.setTransform(415.25,-257.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AihLAIAA1/IFCAAIAAV/g");
	this.shape_16.setTransform(353.75,-257.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA7LAIhxoZIgXAAIAAIZIlCAAIAA1/IFZAAQDgAABYBkQBWBkAAC/IAABkQAADPhnBZICgJsgAhNhbIAQAAQAqgBARgTQARgTAAgvIAAiHQAAgugRgUQgRgTgqAAIgQAAg");
	this.shape_17.setTransform(287.15,-257.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AlyLAIAA1/IFWAAQDfAABZBkQBXBkAAC/IAAB1QAADWhoBSQhnBUjAAAIgTAAIAAIHgAgvhLIANAAQApAAARgTQARgTAAgvIAAiYQAAgugRgUQgRgTgpAAIgNAAg");
	this.shape_18.setTransform(199.7,-257.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ak3LAIAA1/IJrAAIAAEsIkpAAIAADwIDyAAIAAEtIjyAAIAAEKIEtAAIAAEsg");
	this.shape_19.setTransform(102,-257.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA6LAIhvoZIgYAAIAAIZIlDAAIAA1/IFbAAQDfAABXBkQBYBkAAC/IAABkQAADPhpBZICgJsgAhNhbIARAAQAqgBAQgTQARgTAAgvIAAiHQAAgugRgUQgQgTgqAAIgRAAg");
	this.shape_20.setTransform(20.35,-257.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AABLVQi4AAhfhkQhfhlAAi8IAAqdQAAjCBhhiQBihjCyAAIADAAQC4AABeBlQBdBlAAC9IAAKdQAADDhgBhQhgBhixAAgAgqlnIAALRQAAA7AqAAIABAAQAsAAAAg7IAArRQAAg8gtAAIgBAAQgpAAAAA8g");
	this.shape_21.setTransform(-67.525,-257.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ADmLAIAAweIgOChIhfN9IjyAAIhgt9IgOihIAAQeIk5AAIAA1/IHqAAIAvKbIAHBqIAIhqIAyqbIHnAAIAAV/g");
	this.shape_22.setTransform(-169.725,-257.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-324,-365.3,1063.7,457.6), null);


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
	this.shape.setTransform(147.975,1.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AgLAVQgGgCgDgGQgDgGAAgHQAAgGADgGQADgFAFgDQAGgDAGAAQAKAAAHAGQAHAHAAAKQAAAKgHAHQgHAHgKAAQgFAAgGgDgAgHgKQgDAEAAAGQAAAHADAEQADADAEAAQAFAAADgDQADgEAAgHQAAgGgDgEQgDgDgFAAQgEAAgDADg");
	this.shape_1.setTransform(141.725,1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AAMAgIgYgpIAAApIgNAAIAAg/IANAAIAZAqIAAgqIANAAIAAA/g");
	this.shape_2.setTransform(135.675,0.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AgTAgIgBgKIAFABQAFAAABgDQADgCABgEIgSguIANAAIAKAgIALggIANAAIgQAsIgDAIIgEAGIgCAEQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABgBAAIgGABIgHgBg");
	this.shape_3.setTransform(127.5,2.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AgNAWQgEgCgBgEQgCgEAAgGIAAgdIAMAAIAAAWIABALIACADIAFABQACAAADgBIADgFQABgCAAgJIAAgUIAMAAIAAAuIgLAAIAAgHQgDADgEADQgDACgFAAQgEAAgEgCg");
	this.shape_4.setTransform(122.275,1.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AgaAgIAAg/IAaAAIAKAAIAHADQADACACAEQACADAAAEQAAAFgDADQgCAEgEACQAFABAEAEQADAEAAAGQAAAEgCAEQgCAEgEADQgDACgGABIgOAAgAgNAVIAMAAIAIAAIAFgDQABgCAAgDQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBgCgDgBQgCgBgJAAIgKAAgAgNgGIAIAAIAJAAQAEAAACgCQABgCAAgDQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgCgCgEAAIgKAAIgHAAg");
	this.shape_5.setTransform(116.4,0.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjnhJIHPAAQAVAAAOAPQAPAPAAAUIAAAvQAAAUgPAPQgOAPgVAAInPAAQgVAAgPgPQgOgPAAgUIAAgvQAAgUAOgPQAPgPAVAAg");
	this.shape_6.setTransform(131.225,-0.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAD72E").s().p("AjnBKQgVAAgPgPQgOgPAAgUIAAgvQAAgUAOgPQAPgPAVAAIHPAAQAVAAAOAPQAPAPAAAUIAAAvQAAAUgPAPQgOAPgVAAg");
	this.shape_7.setTransform(131.225,-0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.button_mc, new cjs.Rectangle(102,-8.7,58.5,16.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgOAzIAAgkIgjAAIAAgdIAjAAIAAgkIAdAAIAAAkIAjAAIAAAdIgjAAIAAAkg");
	this.shape.setTransform(10.35,-14);

	this.instance = new lib.consolation();
	this.instance.setTransform(-32,-4,0.4001,0.4001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bonus_prizes_mc, new cjs.Rectangle(-32,-30.5,88,51.7), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAzIAAgkIgkAAIAAgdIAkAAIAAgjIAdAAIAAAjIAjAAIAAAdIgjAAIAAAkg");
	this.shape.setTransform(12.8,-14.25);

	this.instance = new lib.bigwin();
	this.instance.setTransform(-37,-4,0.4511,0.4511);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.big_win_mc, new cjs.Rectangle(-37,-30.8,99.3,54.3), null);


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
	this.instance = new lib._300x50();
	this.instance.setTransform(-150,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_mc, new cjs.Rectangle(-150,-25,300,50), null);


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
	this.instance.setTransform(176.6,-0.3,0.011,0.011,0,0,0,502,433.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAYIgBgLIAIACIAEgBIACgFIgCABQgFAAgDgDQgCgDABgFIAFgWIAJAAIgEAWQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAIAAAAIAFgXIALAAIgHAhQgCAIgEAEQgDACgGAAIgIAAg");
	this.shape.setTransform(168.175,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAZIAJgxIAKAAIgKAxg");
	this.shape_1.setTransform(166.1,-0.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAYIALgwIAJAAIgDANIACAAQAGAAADACQACAEgCAGIgCALQgCAGgDAEQgDADgGAAIgMgBgAgBAPIABAAIAAAAIABgDIADgLIAAgCIgCgBIgBAAg");
	this.shape_2.setTransform(163.6821,-0.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAaIAIgjIAJAAIgHAjgAAAgPIAAgEIACgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABIAAAEQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_3.setTransform(161.6375,-0.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNASIADgLIAIACQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIgBgBIAAgBIgBgBIgBAAQgHgDACgIQABgEADgDQADgEAFAAIAJACIgDAKIgHgCQAAAAgBAAQgBAAAAABQAAAAgBAAQAAAAAAABIAAABIACABIACABQADACACABQABADAAAEQgCAFgDAEQgEADgGAAIgJgBg");
	this.shape_4.setTransform(159.475,-0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAASIAEgYQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgCAAIgEAaIgLAAIAHghQAHgDAFABQAMgBgCALIgGAZg");
	this.shape_5.setTransform(156.6898,-0.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMAFIACgJQADgOALAAQAMAAgDAOIgCAJQgDAOgLAAQgMAAADgOgAAAgFIgCALQAAAAAAABQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAIADgLQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABg");
	this.shape_6.setTransform(153.975,-0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAZIAKgxIALAAQAHAAACADQACADgBAHIgDALQgBAGgDADQgEADgFAAIgCAAIgDANgAAAACIAAAAIACAAIABgCIACgLIAAgCIgBgBIgBAAg");
	this.shape_7.setTransform(150.9321,0.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNASIADgLIAIACQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIgBgBIAAgBIgBgBIgBAAQgHgDACgIQABgEADgDQADgEAFAAIAJACIgDAKIgHgCQAAAAgBAAQgBAAAAABQAAAAgBAAQAAAAAAABIAAABIACABIACABQADACACABQABADAAAEQgCAFgDAEQgEADgGAAIgJgBg");
	this.shape_8.setTransform(148.425,-0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAPQgCgDABgHIACgJQACgHADgEQAEgDAFAAQAGAAACADQACAEgBAHIgCAHIgMAAIgBACQAAAEAEAAIAFgBIgBAKIgHABQgHAAgDgEgAAAgGIAAADIACAAIABgDIAAgCQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAABAAAAg");
	this.shape_9.setTransform(145.875,-0.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAZIAAgTIgBAAIgEATIgLAAIAKgxIALAAQAIAAACAEQADADgCAHIgBAEQgBAGgFADIACAWgAAAgCIAAAAIACgBIACgCIABgFQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAIgCgBIAAAAg");
	this.shape_10.setTransform(142.8531,-0.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAYIgBgLIAIACIAEgBIACgFIgCABQgFAAgDgDQgCgDABgFIAFgWIAJAAIgEAWQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAIAAAAIAFgXIALAAIgHAhQgCAIgEAEQgDACgGAAIgIAAg");
	this.shape_11.setTransform(139.075,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAQQgCgDABgFIABgBQABgFADgCQADgDAFAAIACAAIABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIgDgBQgDAAgEACIAFgKIADgBIADgBQAHAAACADQADADgCAHIgEAWIgMACQgGAAgDgDgAgBAEIgBACIAAABIAAACIACABIAAAAIABgHIgBAAIgBABg");
	this.shape_12.setTransform(136.1615,-0.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJAZIAJgxIAKAAIgKAxg");
	this.shape_13.setTransform(134.15,-0.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAZIALgxIALAAQAHAAACAEQADADgCAHIgBAEQgBAHgFADQgEADgFAAIgBAAIgEASgAAAgCIAAAAIADAAIABgDIABgFIAAgCIgCgBIgBAAg");
	this.shape_14.setTransform(131.75,-0.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIASIAAgjIAIAAQADAAAEADQACADAAAFIAAANQAAAFgCADQgEADgDAAgAAAAKIAAAAIAAAAIABgCIAAgPIgBgBIAAgBIAAAAg");
	this.shape_15.setTransform(180.4,-9.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHASIAAgjIAPAAIAAAIIgIAAIAAAGIAGAAIAAAGIgGAAIAAAIIAIAAIAAAHg");
	this.shape_16.setTransform(178.475,-9.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AACASIAAgHIgDAAIgBAHIgIAAIAFgjIALAAIAFAjgAAAgGIAAAJIABAAIgBgJIAAgCg");
	this.shape_17.setTransform(176.375,-9.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAASIgCgWIAAAWIgHAAIAAgjIAJAAIACAVIAAgVIAJAAIAAAjg");
	this.shape_18.setTransform(173.45,-9.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDASIAAgjIAHAAIAAAjg");
	this.shape_19.setTransform(171.7,-9.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgIARIACgHIAFABQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgBIAAgCIgDgDIgBgBIgDgEIgBgFQAAgFACgDQACgCAEAAIAHABIgCAHIgEAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIAAABIAAAAIAAAAIABABIABABIAAABIACABIADAEQACADAAADQAAAFgDACQgDAEgDAAQgEAAgEgCg");
	this.shape_20.setTransform(169.65,-9.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHASIAAgjIAPAAIAAAIIgIAAIAAAGIAGAAIAAAGIgGAAIAAAIIAIAAIAAAHg");
	this.shape_21.setTransform(167.875,-9.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIASIAAgHIAJgUIgIAAIAAgIIAQAAIAAAIIgJAUIAJAAIAAAHg");
	this.shape_22.setTransform(165.925,-9.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgDASIAAgjIAHAAIAAAjg");
	this.shape_23.setTransform(164.4,-9.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AABASIgCgOIAAAAIAAAOIgIAAIAAgjIAIAAQAGAAABACQADADAAAFIAAACQAAAFgDACIAEAQgAgBgCIAAAAIABAAIAAgCIAAgDIAAgBIgBgBIAAAAg");
	this.shape_24.setTransform(162.7,-9.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIASIAAgjIAIAAQAFAAACACQACADAAAFIAAADQAAAEgCACQgDADgEAAIAAAAIAAANgAAAgBIAAAAIABgBIAAgBIAAgEIAAgBIgBgBIAAAAg");
	this.shape_25.setTransform(160.475,-9.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgDAXIAAgtIAHAAIAAAtg");
	this.shape_26.setTransform(156.95,-8.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDASIAAgKIgHgZIAIAAIACAMIADgMIAIAAIgHAZIAAAKg");
	this.shape_27.setTransform(153.45,-9.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHASIAAgjIAHAAIAAAbIAIAAIAAAIg");
	this.shape_28.setTransform(151.325,-9.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgIASIAAgjIAIAAQAFAAACACQACADAAAFIAAADQAAAEgCACQgDADgEAAIAAAAIAAANgAAAgBIAAAAIABgBIAAgBIAAgEIAAgBIgBgBIAAAAg");
	this.shape_29.setTransform(149.275,-9.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgIASIAAgjIAIAAQAFAAACACQACADAAAFIAAADQAAAEgCACQgDADgEAAIAAAAIAAANgAAAgBIAAAAIABgBIAAgBIAAgEIAAgBIgBgBIAAAAg");
	this.shape_30.setTransform(147.125,-9.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AACASIAAgHIgDAAIgBAHIgIAAIAFgjIALAAIAFAjgAAAgGIAAAJIABAAIgBgJIAAgCg");
	this.shape_31.setTransform(144.875,-9.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIARIACgHIAFABQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgBIAAgCIgDgDIgBgBIgDgEIgBgFQAAgFACgDQACgCAEAAIAHABIgCAHIgEAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIAAABIAAAAIAAAAIABABIABABIAAABIACABIADAEQACADAAADQAAAFgDACQgDAEgDAAQgEAAgEgCg");
	this.shape_32.setTransform(142.2,-9.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgBAIIgCgPIAHAAIgCAPg");
	this.shape_33.setTransform(140.725,-10.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgFAQQgDgDAAgFIAAgOQAAgGADgDQACgCAEAAQAEAAADABIgCAHIgDgBQgDAAAAAEIAAANIAAADIADABIADgBIADAHQgDACgFAAQgEgBgCgCg");
	this.shape_34.setTransform(139.3,-9.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgJAQQgCgCAAgFIAAgFIABgDIACgBIgBgGIAAgCQAAgGABgBQACgCAFAAQADAAABACQACABAAAGIAAACQAAAFgFABIADAEIAAgEIAGAAIAAACIAAACIAAABIAAACIAAACIgBABIAAABIAEAHIgIAAIgBgBQgCACgCAAQgFgBgDgCgAgDAFIAAADIAAADIADAAIAAAAIgDgHgAgCgJIAAABIAAADIAAABQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgCIAAgCIgBAAIAAAAIgBABg");
	this.shape_35.setTransform(136.85,-9.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDASIAAgaIgFAAIAAgJIARAAIAAAJIgFAAIAAAag");
	this.shape_36.setTransform(134.475,-9.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgDAXIAAgtIAGAAIAAAtg");
	this.shape_37.setTransform(131.15,-8.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgFASIAFgbIgHAAIAAgIIAPAAIAAAIIgGAbg");
	this.shape_38.setTransform(127.825,-9.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgFASIAFgbIgHAAIAAgIIAPAAIAAAIIgGAbg");
	this.shape_39.setTransform(125.975,-9.25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgIASIAAgHQAJgLAAgFIAAgBIgBgDIgBAAIgFABIgCgHQADgCAFAAQAEAAADADQACADAAAFIgBAFIgCAEIgDAEIgDAEIAIAAIAAAHg");
	this.shape_40.setTransform(124.075,-9.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgIARIACgHIAFABQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgBIgBgCIgBgDIgCgBIgEgEIgBgFQABgFACgDQACgCADAAIAIABIgCAHIgEAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIAAABIAAAAIAAAAIAAABIABABIABABIACABIAEAEQABADAAADQAAAFgDACQgDAEgDAAQgEAAgEgCg");
	this.shape_41.setTransform(121.55,-9.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgHASIAAgjIAPAAIAAAIIgIAAIAAAGIAGAAIAAAGIgGAAIAAAIIAIAAIAAAHg");
	this.shape_42.setTransform(119.775,-9.25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgDASIAAgjIAHAAIAAAjg");
	this.shape_43.setTransform(118.3,-9.25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AABASIgBgOIgBAAIAAAOIgIAAIAAgjIAJAAQAEAAADACQACADAAAFIAAACQAAAFgDACIAEAQgAgBgCIABAAIAAAAIAAgCIAAgDIAAgBIAAgBIgBAAg");
	this.shape_44.setTransform(116.6,-9.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgHASIAAgjIAPAAIAAAIIgIAAIAAAGIAGAAIAAAGIgGAAIAAAIIAIAAIAAAHg");
	this.shape_45.setTransform(114.625,-9.25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgIARIACgHIAFABQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgBIAAgCIgCgDIgCgBIgEgEIAAgFQgBgFADgDQACgCAEAAIAHABIgCAHIgEAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIAAABIAAAAIAAAAIABABIAAABIABABIACABIAEAEQABADAAADQAAAFgDACQgCAEgEAAQgEAAgEgCg");
	this.shape_46.setTransform(112.8,-9.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(111.6,-12.2,70.30000000000001,17.299999999999997);


// stage content:
(lib.bigticketconversionhtml5300x50 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(113.8,43.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(343));

	// ticket
	this.instance_1 = new lib.ticket_mc();
	this.instance_1.setTransform(73.35,22.5,0.0831,0.0831);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(232).to({_off:false},0).wait(1).to({regX:-1274.1,regY:25.7,x:-32.35,y:24.65,alpha:0.0032},0).wait(1).to({x:-31.45,alpha:0.0145},0).wait(1).to({x:-29.75,alpha:0.0371},0).wait(1).to({x:-26.7,alpha:0.077},0).wait(1).to({x:-21.35,y:24.7,alpha:0.1467},0).wait(1).to({x:-12.1,y:24.75,alpha:0.2672},0).wait(1).to({x:-0.7,y:24.8,alpha:0.4164},0).wait(1).to({x:10.7,y:24.85,alpha:0.5648},0).wait(1).to({x:20.2,y:24.9,alpha:0.6887},0).wait(1).to({x:27.65,y:24.95,alpha:0.7859},0).wait(1).to({x:33.5,alpha:0.8625},0).wait(1).to({x:38.1,y:25,alpha:0.9229},0).wait(1).to({x:41.2,alpha:0.9628},0).wait(1).to({x:42.95,alpha:0.9857},0).wait(1).to({x:43.8,alpha:0.9969},0).wait(1).to({regX:0,regY:0,x:149.95,y:22.9,alpha:1},0).wait(95));

	// logo
	this.instance_2 = new lib.bt_logo();
	this.instance_2.setTransform(149.95,3.8,0.0852,0.0852,0,0,0,0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(232).to({alpha:0},16).wait(95));

	// cta
	this.instance_3 = new lib.button_mc();
	this.instance_3.setTransform(162.75,33.15,1,1,0,0,0,28.2,7.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(248).to({_off:false},0).to({y:24.4,alpha:1},16).wait(79));

	// bonus_prizes
	this.instance_4 = new lib.bonus_prizes_mc();
	this.instance_4.setTransform(156.9,28.75);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:12,regY:1.1,x:168.9,y:29.8,alpha:0.0037},0).wait(1).to({y:29.75,alpha:0.0167},0).wait(1).to({y:29.6,alpha:0.0435},0).wait(1).to({y:29.35,alpha:0.0919},0).wait(1).to({y:28.9,alpha:0.1816},0).wait(1).to({y:28.2,alpha:0.3248},0).wait(1).to({y:27.4,alpha:0.4878},0).wait(1).to({y:26.65,alpha:0.6345},0).wait(1).to({y:26.1,alpha:0.7499},0).wait(1).to({y:25.65,alpha:0.8388},0).wait(1).to({y:25.3,alpha:0.9088},0).wait(1).to({y:25.05,alpha:0.9564},0).wait(1).to({y:24.9,alpha:0.9834},0).wait(1).to({y:24.85,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:156.9,y:23.75,alpha:1},0).wait(61).to({regX:12,regY:1.1,x:168.9,y:24.8,alpha:0.9963},0).wait(1).to({y:24.75,alpha:0.9833},0).wait(1).to({y:24.6,alpha:0.9565},0).wait(1).to({y:24.35,alpha:0.9081},0).wait(1).to({y:23.9,alpha:0.8184},0).wait(1).to({y:23.2,alpha:0.6752},0).wait(1).to({y:22.4,alpha:0.5122},0).wait(1).to({y:21.65,alpha:0.3655},0).wait(1).to({y:21.1,alpha:0.2501},0).wait(1).to({y:20.65,alpha:0.1612},0).wait(1).to({y:20.3,alpha:0.0912},0).wait(1).to({y:20.05,alpha:0.0436},0).wait(1).to({y:19.9,alpha:0.0166},0).wait(1).to({y:19.85,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:156.9,y:18.75,alpha:0},0).to({_off:true},1).wait(237));

	// bonus_prizes_copy
	this.instance_5 = new lib.big_win_mc();
	this.instance_5.setTransform(156.9,28.75);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90).to({_off:false},0).wait(1).to({regX:12.6,regY:2.1,x:169.5,y:30.8,alpha:0.0037},0).wait(1).to({y:30.75,alpha:0.0167},0).wait(1).to({y:30.6,alpha:0.0435},0).wait(1).to({y:30.35,alpha:0.0919},0).wait(1).to({y:29.9,alpha:0.1816},0).wait(1).to({y:29.2,alpha:0.3248},0).wait(1).to({y:28.4,alpha:0.4878},0).wait(1).to({y:27.65,alpha:0.6345},0).wait(1).to({y:27.1,alpha:0.7499},0).wait(1).to({y:26.65,alpha:0.8388},0).wait(1).to({y:26.3,alpha:0.9088},0).wait(1).to({y:26.05,alpha:0.9564},0).wait(1).to({y:25.9,alpha:0.9834},0).wait(1).to({y:25.85,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:156.9,y:23.75,alpha:1},0).wait(61).to({regX:12.6,regY:2.1,x:169.5,y:25.8,alpha:0.9963},0).wait(1).to({y:25.75,alpha:0.9833},0).wait(1).to({y:25.6,alpha:0.9565},0).wait(1).to({y:25.35,alpha:0.9081},0).wait(1).to({y:24.9,alpha:0.8184},0).wait(1).to({y:24.2,alpha:0.6752},0).wait(1).to({y:23.4,alpha:0.5122},0).wait(1).to({y:22.65,alpha:0.3655},0).wait(1).to({y:22.1,alpha:0.2501},0).wait(1).to({y:21.65,alpha:0.1612},0).wait(1).to({y:21.3,alpha:0.0912},0).wait(1).to({y:21.05,alpha:0.0436},0).wait(1).to({y:20.9,alpha:0.0166},0).wait(1).to({y:20.85,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:156.9,y:18.75,alpha:0},0).to({_off:true},1).wait(162));

	// sub_caption
	this.instance_6 = new lib.daily_caption_mc();
	this.instance_6.setTransform(149.7,44.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(165).to({_off:false},0).wait(1).to({regX:207.8,regY:-156.8,x:171.3,y:27.9,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:27.85,alpha:0.0435},0).wait(1).to({y:27.75,alpha:0.0919},0).wait(1).to({y:27.55,alpha:0.1816},0).wait(1).to({y:27.25,alpha:0.3248},0).wait(1).to({y:26.9,alpha:0.4878},0).wait(1).to({y:26.6,alpha:0.6345},0).wait(1).to({y:26.35,alpha:0.7499},0).wait(1).to({y:26.15,alpha:0.8388},0).wait(1).to({y:26,alpha:0.9088},0).wait(1).to({y:25.9,alpha:0.9564},0).wait(1).to({y:25.85,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:149.7,y:42.25,alpha:1},0).wait(53).to({regX:207.8,regY:-156.8,x:171.3,y:25.85,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:25.9,alpha:0.9565},0).wait(1).to({y:26,alpha:0.9081},0).wait(1).to({y:26.2,alpha:0.8184},0).wait(1).to({y:26.5,alpha:0.6752},0).wait(1).to({y:26.85,alpha:0.5122},0).wait(1).to({y:27.15,alpha:0.3655},0).wait(1).to({y:27.4,alpha:0.2501},0).wait(1).to({y:27.6,alpha:0.1612},0).wait(1).to({y:27.75,alpha:0.0912},0).wait(1).to({y:27.85,alpha:0.0436},0).wait(1).to({y:27.9,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:149.7,y:44.35,alpha:0},0).wait(96));

	// second_prize
	this.instance_7 = new lib.second_prize_mc();
	this.instance_7.setTransform(92.95,32.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(165).to({_off:false},0).wait(1).to({regX:-7.4,regY:0.2,x:85.55,y:32.35,alpha:0.0037},0).wait(1).to({y:32.25,alpha:0.0167},0).wait(1).to({y:32.05,alpha:0.0435},0).wait(1).to({y:31.75,alpha:0.0919},0).wait(1).to({y:31.1,alpha:0.1816},0).wait(1).to({x:85.6,y:30.1,alpha:0.3248},0).wait(1).to({x:85.65,y:28.95,alpha:0.4878},0).wait(1).to({x:85.7,y:27.95,alpha:0.6345},0).wait(1).to({y:27.15,alpha:0.7499},0).wait(1).to({x:85.75,y:26.5,alpha:0.8388},0).wait(1).to({y:26,alpha:0.9088},0).wait(1).to({y:25.7,alpha:0.9564},0).wait(1).to({y:25.5,alpha:0.9834},0).wait(1).to({y:25.4,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:93.2,y:25.2,alpha:1},0).wait(53).to({regX:-7.4,regY:0.2,scaleX:0.9998,scaleY:0.9998,x:86.15,y:25.35},0).wait(1).to({scaleX:0.999,scaleY:0.999,x:87.5},0).wait(1).to({scaleX:0.9975,scaleY:0.9975,x:90.25},0).wait(1).to({scaleX:0.9947,scaleY:0.9947,x:95.25},0).wait(1).to({scaleX:0.9894,scaleY:0.9894,x:104.55},0).wait(1).to({scaleX:0.9811,scaleY:0.9811,x:119.3},0).wait(1).to({scaleX:0.9716,scaleY:0.9716,x:136.1},0).wait(1).to({scaleX:0.9631,scaleY:0.9631,x:151.25},0).wait(1).to({scaleX:0.9564,scaleY:0.9564,x:163.15},0).wait(1).to({scaleX:0.9512,scaleY:0.9512,x:172.35},0).wait(1).to({scaleX:0.9472,scaleY:0.9472,x:179.6},0).wait(1).to({scaleX:0.9444,scaleY:0.9444,x:184.5,y:25.3},0).wait(1).to({scaleX:0.9428,scaleY:0.9428,x:187.25},0).wait(1).to({scaleX:0.9421,scaleY:0.9421,x:188.65},0).wait(1).to({regX:0,regY:0,scaleX:0.9419,scaleY:0.9419,x:195.95,y:25.1},0).wait(96));

	// promo
	this.instance_8 = new lib.promo_mc();
	this.instance_8.setTransform(179.15,23.35,0.0867,0.0867,0,0,0,0.6,0.6);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:-666.6,regY:20.2,x:121.15,y:25.05,alpha:0.0037},0).wait(1).to({x:120.8,alpha:0.0167},0).wait(1).to({x:120,alpha:0.0435},0).wait(1).to({x:118.6,alpha:0.0919},0).wait(1).to({x:115.95,alpha:0.1816},0).wait(1).to({x:111.8,alpha:0.3248},0).wait(1).to({x:107.05,alpha:0.4878},0).wait(1).to({x:102.75,alpha:0.6345},0).wait(1).to({x:99.4,alpha:0.7499},0).wait(1).to({x:96.8,alpha:0.8388},0).wait(1).to({x:94.75,alpha:0.9088},0).wait(1).to({x:93.35,alpha:0.9564},0).wait(1).to({x:92.55,alpha:0.9834},0).wait(1).to({x:92.2,alpha:0.9964},0).wait(1).to({regX:0,regY:0.6,x:149.95,y:23.35,alpha:1},0).wait(151).to({regX:-666.6,regY:20.2,x:92.15,y:25,alpha:0.9963},0).wait(1).to({y:24.9,alpha:0.9833},0).wait(1).to({y:24.7,alpha:0.9565},0).wait(1).to({y:24.3,alpha:0.9081},0).wait(1).to({y:23.6,alpha:0.8184},0).wait(1).to({y:22.5,alpha:0.6752},0).wait(1).to({y:21.2,alpha:0.5122},0).wait(1).to({y:20.05,alpha:0.3655},0).wait(1).to({y:19.15,alpha:0.2501},0).wait(1).to({y:18.45,alpha:0.1612},0).wait(1).to({y:17.9,alpha:0.0912},0).wait(1).to({y:17.5,alpha:0.0436},0).wait(1).to({y:17.3,alpha:0.0166},0).wait(1).to({y:17.2,alpha:0.0036},0).wait(1).to({regX:0,regY:0.6,x:149.95,y:15.5,alpha:0},0).wait(53).to({regX:-666.6,regY:20.2,x:92.25,y:17.2,alpha:0.0037},0).wait(1).to({x:92.65,y:17.3,alpha:0.0167},0).wait(1).to({x:93.5,y:17.5,alpha:0.0435},0).wait(1).to({x:95,y:17.9,alpha:0.0919},0).wait(1).to({x:97.85,y:18.65,alpha:0.1816},0).wait(1).to({x:102.35,y:19.75,alpha:0.3248},0).wait(1).to({x:107.5,y:21.1,alpha:0.4878},0).wait(1).to({x:112.1,y:22.25,alpha:0.6345},0).wait(1).to({x:115.75,y:23.15,alpha:0.7499},0).wait(1).to({x:118.55,y:23.9,alpha:0.8388},0).wait(1).to({x:120.75,y:24.45,alpha:0.9088},0).wait(1).to({x:122.25,y:24.85,alpha:0.9564},0).wait(1).to({x:123.1,y:25.05,alpha:0.9834},0).wait(1).to({x:123.5,y:25.15,alpha:0.9964},0).wait(1).to({regX:0,regY:0.6,x:181.45,y:23.5,alpha:1},0).wait(96));

	// background
	this.instance_9 = new lib.background_mc();
	this.instance_9.setTransform(150,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(343));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(77.3,13,222.7,43.6);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 300,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_2ndprize.png", id:"_2ndprize"},
		{src:"images/_300x50.jpg", id:"_300x50"},
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