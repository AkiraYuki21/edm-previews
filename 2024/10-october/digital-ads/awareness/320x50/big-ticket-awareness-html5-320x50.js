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
	this.shape.graphics.f("#FFE400").s().p("AhPGeQgggZAAgxQAAgsAggbQAggbAvAAQAwAAAgAbQAgAbAAAsQAAAxggAZQggAZgwAAQgvAAgggZgAhiCUIAApKIDFAAIAAJKg");
	this.shape.setTransform(416.85,-20.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AiiF+Qgyg4AAh9IAAi7QAAh8Ayg4QAxg3BxAAIAYAAIAAjYIC9AAIAANOQh7AdhZAAQhyAAgxg4gAgQggQgIAMAAAmIAAC2QAAAlAIAMQAIANAVAAIALAAIAAkyIgLAAQgVAAgIAMg");
	this.shape_1.setTransform(370.725,-20.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AhdGxIAAthIC7AAIAANhg");
	this.shape_2.setTransform(332.475,-21.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AAAFKQjTABAAjuIAAi7QAAjrDTAAIABAAQDTAAAADrIAAC7QAADujTgBgAgXhjIAADHQAAA0AXAAIABAAQAXgBAAgzIAAjHQAAg0gXgBIgBAAQgXAAAAA1g");
	this.shape_3.setTransform(294.375,-9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AjlDOIAAmbQAAhvBIhBQBHhBBwAAQBqAABiA3IhHCrQgygcg7AAQhNAAABBXIAAF7QAAApAeAAQAOAAAIgFIAAk4IC8AAIAAG6Qg7AigtAPQgsAOg7AAQjsAAAAjxg");
	this.shape_4.setTransform(245.625,-21.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AiiF+Qgyg4AAh9IAAi7QAAh8Ayg4QAxg3BxAAIAYAAIAAjYIC9AAIAANOQh7AdhZAAQhyAAgxg4gAgQggQgIAMAAAmIAAC2QAAAlAIAMQAIANAVAAIALAAIAAkyIgLAAQgVAAgIAMg");
	this.shape_5.setTransform(179.975,-20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AAYFFIAAm3QAAghgbAAQgKAAgLACIAAHWIi9AAIAApgQCDgpBcAAQDLAAAADCIAAHHg");
	this.shape_6.setTransform(129.8,-10.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AihEYQgzgxAAheIAAgKQAAhdAzgxQAzgxBlAAIAhABIAAgZQAAgmgRgNQgQgNgwgBQg1ABhQAdIAzi4QAOgFAqgJQAqgIAgAAQB6AAAyA0QAyA1AABxIAAGXQiMAihSAAQhlAAgzgygAgNBGQgLAMAAAXIAAARQAAAZALANQAMAMAPAAIAKAAIAAhxIgKAAQgPAAgMALg");
	this.shape_7.setTransform(78.625,-9.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AAZGxIAAm3QAAghgbAAQgJAAgNACIAAHWIi8AAIAAthIC8AAIAADZIAhgBQDMAAABDCIAAHHg");
	this.shape_8.setTransform(14.65,-21.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AjHEyIARi2QBTAdA+AAQBAAAAAgcQAAgNgIgJQgJgHgWgKQgIgFgQgGIgSgHQiIg8AAiTQAAhPAyg4QAyg4BdAAQBRgCBVAbIgQCuQhIgWg0AAQgwAAAAAbQAAALAJAHQAIAGAXAMIAmASQBIAhAiApQAjAqAABNQAABeg3A6Qg4A6h1AAQhUAAhXgZg");
	this.shape_9.setTransform(-32.725,-9.582);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AihEYQgzgxAAheIAAgKQAAhdAzgxQAzgxBlAAIAhABIAAgZQAAgmgRgNQgQgNgwgBQg1ABhQAdIAzi4QAOgFAqgJQAqgIAgAAQB6AAAyA0QAyA1AABxIAAGXQiMAihSAAQhlAAgzgygAgNBGQgLAMAAAXIAAARQAAAZALANQAMAMAPAAIAKAAIAAhxIgKAAQgPAAgMALg");
	this.shape_10.setTransform(-80.525,-9.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AAeG/Qh6AAhAhCQg+hDgBiBIAAlxQABiBA+hDQBAhCB6AAIAAAAQBeAABPAkIhHCgQgfgKglAAIgBAAQhOAAAABfIAAFLQAAAsAYAZQAYAaApAAIABAAQAiAAAogRIBGCgQhWArhnAAg");
	this.shape_11.setTransform(-125.9,-21.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAZGxIAAm3QAAghgbAAQgJAAgNACIAAHWIi9AAIAAthIC9AAIAADZIAhgBQDNAAAADCIAAHHg");
	this.shape_12.setTransform(375.7,-161.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AB6GPQiKAAgygvQgzgvAAhkIAAkBIg4AAIAAirIA4AAIAAivIC8AAIAACvIBmAAIAACrIhmAAIAADPQAAAoASANQASAOAvAAIAUAAIAACxg");
	this.shape_13.setTransform(329.475,-158.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhdHDIAAptIC7AAIAAJtgAhBkXQgWgbAAgvQAAgsAWgbQAXgaApAAQApAAAXAaQAWAbAAAsQAAAvgWAbQgXAbgpAAQgpAAgXgbg");
	this.shape_14.setTransform(296.275,-163.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAfE3IgfmoIgeGoIjyAAIg9ptIC5AAIAbGmIAbmmIC8AAIAcGmIAbmmIC5AAIg9Jtg");
	this.shape_15.setTransform(244.925,-149.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiPEOQg/g+AAh+IAAiwQAAh5A0g5QA0g6BvAAQBmAAAwA6QAwA5AAB4IAACYIjhAAIAAAhQAABABZgBQAwABAqgLIARCrQhPARg9AAQh1gBhAg8gAgRhzIAAAyIAvAAIAAgyQAAgdgFgKQgEgMgPAAQgXAAAAAzg");
	this.shape_16.setTransform(169.425,-150.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhdGxIAAthIC7AAIAANhg");
	this.shape_17.setTransform(131.775,-161.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAeGxIhFkKIAAEKIi8AAIAAthIC8AAIAAHhIA6jrIDBAAIhcEcIBsFPg");
	this.shape_18.setTransform(93.025,-161.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AibFFIAApvQBigaBuAAIBnAAIAACxIhnAAIggABIAAHXg");
	this.shape_19.setTransform(49.275,-150.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AihEZQgzgyAAheIAAgKQAAhdAzgwQAzgyBlAAIAhABIAAgYQAAgngRgNQgQgOgwAAQg1AAhQAeIAzi4QAOgFAqgJQAqgIAgAAQB6AAAyA1QAyA0AABxIAAGXQiMAihSAAQhlAAgzgxgAgNBGQgLAMAAAWIAAASQAAAYALANQAMANAPAAIAKAAIAAhyIgKAAQgPAAgMAMg");
	this.shape_20.setTransform(4.775,-150.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AjUG7IAAtoQBpgNBrAAQByAAAxA4QAyA4AAB9IAAC7QAAB8gyA4QgxA4hzAAIgXAAIAADhgAgYApIALAAQAWAAAIgMQAIgNAAgkIAAi1QAAgngIgMQgIgMgWAAIgLAAg");
	this.shape_21.setTransform(-44.15,-139.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AjXGVIA0iyQBUAgAlAAQBFAAAAg2IAAgGQAAgZgRgaQgRgagqgsIgmgkQg+g8gagzQgbg0ABhSIAAgBQAAhyA5hAQA6g/BlAAQBUAABjAnIgzCnQg/gSgeAAQhDAAAAA2IAAADQAAAJACAHIAHAOIAKAPIAOAQIASATIATAWQAbAcAOANQA+A+AcAzQAbAyAABYIAAABQAAB1g+BDQg9BDhlAAQhnAAhngpg");
	this.shape_22.setTransform(-92.35,-161.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AB6GPQiKAAgygvQgzgvAAhkIAAkBIg4AAIAAirIA4AAIAAivIC8AAIAACvIBmAAIAACrIhmAAIAADPQAAAoASANQASAOAvAAIAUAAIAACxg");
	this.shape_23.setTransform(275.025,-298.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhdHEIAApuIC7AAIAAJugAhBkYQgWgaAAgvQAAgtAWgaQAXgbApAAQApAAAXAbQAWAaAAAtQAAAvgWAaQgXAbgpAAQgpAAgXgbg");
	this.shape_24.setTransform(241.825,-304.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiPEOQg/g+AAh9IAAixQAAh5A0g6QA0g5BvAAQBmAAAwA5QAwA6AAB4IAACYIjhAAIAAAiQAAA+BZABQAwgBAqgKIARCrQhPAQg9AAQh1AAhAg8gAgRhzIAAAxIAvAAIAAgxQAAgdgFgLQgEgLgPAAQgXAAAAAzg");
	this.shape_25.setTransform(190.275,-290.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAeGxIhFkKIAAEKIi8AAIAAthIC8AAIAAHhIA6jrIDBAAIhcEcIBsFPg");
	this.shape_26.setTransform(141.325,-302.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AihEYQgzgxAAheIAAgKQAAhdAzgwQAzgyBlAAIAhABIAAgZQAAgmgRgNQgQgOgwAAQg1ABhQAdIAzi4QAOgFAqgJQAqgIAgAAQB6AAAyA0QAyA1AABxIAAGXQiMAihSAAQhlAAgzgygAgNBGQgLAMAAAXIAAARQAAAYALANQAMANAPAAIAKAAIAAhxIgKAAQgPgBgMAMg");
	this.shape_27.setTransform(88.675,-290.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ACOGxIAAqIIgJBjIg7IlIiUAAIg8olIgIhjIAAKIIjAAAIAAthIEtAAIAdGaIAEBBIAFhBIAemaIEsAAIAANhg");
	this.shape_28.setTransform(27.5,-302.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-580.1,-369.6,1446.7,440.5), null);


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

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-156,-124,278,247), null);


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
	this.shape.setTransform(44.975,9.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AgLAVQgGgCgDgGQgDgGAAgHQAAgGADgGQADgFAFgDQAGgDAGAAQAKAAAHAGQAHAHAAAKQAAAKgHAHQgHAHgKAAQgFAAgGgDgAgHgKQgDAEAAAGQAAAHADAEQADADAEAAQAFAAADgDQADgEAAgHQAAgGgDgEQgDgDgFAAQgEAAgDADg");
	this.shape_1.setTransform(38.725,9.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AAMAgIgYgpIAAApIgNAAIAAg/IANAAIAZAqIAAgqIANAAIAAA/g");
	this.shape_2.setTransform(32.675,8.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AgTAgIgBgKIAFABQAFAAACgDQACgCABgEIgSguIAOAAIAKAgIAKggIANAAIgQAsIgEAIIgCAGIgDAEQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABAAAAIgHABIgHgBg");
	this.shape_3.setTransform(24.5,9.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AgNAWQgEgCgBgEQgCgEAAgGIAAgdIAMAAIAAAWIABALIACADIAFABQACAAADgBQACgCABgDQABgCAAgJIAAgUIAMAAIAAAuIgLAAIAAgHQgDADgEADQgDACgFAAQgEAAgEgCg");
	this.shape_4.setTransform(19.275,9.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AgaAgIAAg/IAaAAIALAAIAGADQADACACAEQACADAAAEQAAAFgCADQgDAEgEACQAFABAEAEQADAEAAAGQAAAEgCAEQgCAEgDADQgEACgFABIgPAAgAgNAVIAMAAIAIAAIAFgDQABgCABgDQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQgCgBgIAAIgLAAgAgNgGIAJAAIAIAAQAEAAABgCQACgCAAgDQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBgCgDAAIgKAAIgIAAg");
	this.shape_5.setTransform(13.4,8.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjnhJIHPAAQAVAAAOAPQAPAPAAAUIAAAvQAAAUgPAPQgOAPgVAAInPAAQgVAAgPgPQgOgPAAgUIAAgvQAAgUAOgPQAPgPAVAAg");
	this.shape_6.setTransform(28.225,7.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAD72E").s().p("AjnBKQgVAAgPgPQgOgPAAgUIAAgvQAAgUAOgPQAPgPAVAAIHPAAQAVAAAOAPQAPAPAAAUIAAAvQAAAUgPAPQgOAPgVAAg");
	this.shape_7.setTransform(28.225,7.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.button_mc, new cjs.Rectangle(-1,-1,58.5,16.8), null);


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
	this.instance.setTransform(169.75,-8.9,0.0137,0.0137,0,0,0,494.2,461.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAhIgBgPQAIADAEAAQAFAAABgBQACgCABgEIgDAAQgIAAgEgEQgDgEACgIIAGggIAPAAIgGAfQAAABAAABQAAAAAAABQABAAAAAAQAAAAABAAIABAAIAHgiIAPAAIgLAxQgCAKgFAGQgFAEgJAAIgMgCg");
	this.shape.setTransform(158.775,-7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAjIAOhFIAPAAIgOBFg");
	this.shape_1.setTransform(155.8,-9.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAhIAOhEIAPAAIgEASIACAAQAJAAADAEQADAFgCAJIgDAPQgCAKgFAFQgFAFgIAAQgHAAgKgDgAgCAVIABAAIABgBIACgEIADgPIAAgDIgCgBIgBAAg");
	this.shape_2.setTransform(152.39,-9.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAlIAKgyIAPAAIgLAygAABgWQgBgCAAgEQABgDACgCQACgDAEAAQADAAABADQACACgBADQgBAEgCACQgCACgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_3.setTransform(149.42,-9.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAZIAEgPQAHACAFAAQAEAAABgCIgBgCIgBgBIgCgBIgCgBQgJgEACgLQABgHAFgEQAFgFAHAAQAHAAAGACIgEAOQgGgCgEAAQgEAAAAADIAAABIADACIACABQAFADADACQACAEgBAGQgCAHgFAFQgGAFgJAAQgGAAgHgCg");
	this.shape_4.setTransform(146.325,-8.3292);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBAaIAHgjQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgCABIgHAkIgPAAIAKgwQAKgDAIgBQAQABgDAPIgIAkg");
	this.shape_5.setTransform(142.3806,-8.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAIIADgOQAEgUARAAQARAAgEAUIgDAOQgEATgQAAQgSAAAEgTgAAAgHIgDAPQAAABAAABQAAABAAAAQABABAAAAQAAAAABAAQABAAAAgEIAEgPQAAgBAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCAAgBAFg");
	this.shape_6.setTransform(138.4759,-8.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAkIAPhGIAQgBQAJAAADAEQADAGgCAKIgDAPQgCAIgFAFQgFAFgIAAIgCAAIgEASgAAAADIAAAAIACgBIACgCIADgPIAAgFIgCgBIgBAAg");
	this.shape_7.setTransform(134.165,-7.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAZIAEgPQAHACAFAAQAEAAABgCIgBgCIgBgBIgCgBIgCgBQgJgEACgLQABgHAFgEQAFgFAHAAQAHAAAGACIgEAOQgGgCgEAAQgEAAAAADIAAABIADACIACABQAFADADACQACAEgBAGQgCAHgFAFQgGAFgJAAQgGAAgHgCg");
	this.shape_8.setTransform(130.525,-8.3292);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAWQgFgFACgLIADgMQACgLAGgEQAFgFAIAAQAIAAADAFQADAFgCAJIgCALIgSAAIAAAEQgBAEAGAAIAHgBIgBAPIgLABQgJAAgEgFgAAAgIIAAADIADAAIABgDIAAgEIgBgBQgCAAgBAFg");
	this.shape_9.setTransform(126.9092,-8.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAjIAAgbIgCAAIgFAbIgQAAIAOhFIARAAQALAAADAFQAEAFgCAJIgBAFQgCAKgHAEIACAfgAAAgEIABAAIADgBIACgDIABgHIAAgDIgDgBIgBAAg");
	this.shape_10.setTransform(122.5864,-9.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAhIgBgPQAIADAEAAQAFAAABgBQACgCABgEIgDAAQgIAAgEgEQgDgEACgIIAGggIAPAAIgGAfQAAABAAABQAAAAAAABQABAAAAAAQAAAAABAAIABAAIAHgiIAPAAIgLAxQgCAKgFAGQgFAEgJAAIgMgCg");
	this.shape_11.setTransform(117.175,-7.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAXQgDgEABgIIABgBQABgHAFgDQAFgEAIAAIADAAIAAgCQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIgFgBQgEAAgHADIAHgPIAFgBIAFgBQAKAAADAEQADAFgBAJIgIAgQgLADgGAAQgIAAgEgEgAgBAGIgCACIAAACIAAADIACABIABAAIACgJIgBAAIgCABg");
	this.shape_12.setTransform(113.05,-8.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAjIAOhFIAPAAIgPBFg");
	this.shape_13.setTransform(110.15,-9.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAjIAOhFIAQAAQAMAAADAFQADAFgCAJIgBAGQgCAKgGAEQgGAEgJAAIgBAAIgFAagAAAgDIABAAIADgBIABgDIACgIIAAgDIgDgBIgBAAg");
	this.shape_14.setTransform(106.765,-9.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAhIAAgTIgMguIAPAAIAEAWIAFgWIAPAAIgMAuIAAATg");
	this.shape_15.setTransform(178.225,-23.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPAhIAAhBIAPAAIAAAyIAQAAIAAAPg");
	this.shape_16.setTransform(174.2,-23.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQAhIAAhBIAQAAQAJAAAEAEQAFAFAAAJIAAAGQAAAJgGAEQgFAEgHAAIgBAAIAAAYgAgBgDIABAAIABgBQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgHQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBgBIgBAAg");
	this.shape_17.setTransform(170.4,-23.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRAhIAAhBIAQAAQAKAAAFAEQADAFAAAJIAAAGQAAAJgEAEQgGAEgIAAIgBAAIAAAYgAgCgDIABAAIACgBQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgHQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgCgBIgBAAg");
	this.shape_18.setTransform(166.4,-23.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAFAhIgBgNIgGAAIgCANIgPAAIAJhBIAVAAIAJBBgAAAgLIgBARIADAAIgCgRIAAgFg");
	this.shape_19.setTransform(162.25,-23.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAfIAEgOIAJADQAFAAAAgEIAAgBIgBgEIgEgFIgDgDIgHgIQgCgEAAgGIAAAAQABgJAEgFQAEgEAHAAQAGAAAIADIgEAMIgHgBQgEAAAAAEIAAACIAAABIABABIABABIABACIABABIAEADIAGAIQADAEAAAHQgBAJgFAFQgEAFgHAAQgIAAgIgDg");
	this.shape_20.setTransform(157.35,-23.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEAOIgCgbIANAAIgDAbg");
	this.shape_21.setTransform(154.525,-25.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgLAdQgFgFAAgKIAAgbQAAgKAFgFQAFgFAIAAQAIAAAGACIgGANIgFgBQgFAAAAAHIAAAZQAAADABACQACACADAAIAGgBIAFAMQgHADgIAAQgIAAgFgFg");
	this.shape_22.setTransform(151.875,-23.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRAeQgGgEAAgKIAAgHQAAgFACgDQADgCAEAAQgDgHAAgEIAAgFQAAgJADgEQADgDAIAAQAHAAACADQAEAEAAAJIAAAEQgBAKgIADIAFAIIgBgIIANAAIAAAEIAAADIAAADIgBADIAAACIgBADIgCACIAJANIgPAAIgCgCQgEADgFAAQgKAAgEgEgAgIAKIAAAEQAAAEACACQABABADAAIACAAIgIgNgAgFgTIAAACIAAAHIAAADQAEgBAAgEIAAgFIgBgCIgBgBIgBAAIgBABg");
	this.shape_23.setTransform(147.35,-23.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGAhIAAgyIgKAAIAAgPIAhAAIAAAPIgKAAIAAAyg");
	this.shape_24.setTransform(143,-23.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgGAqIAAhTIANAAIAABTg");
	this.shape_25.setTransform(136.825,-22.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLAdQgFgFAAgJIAAgEQAAgHAEgEQgDgEAAgGIAAgFQAAgIAEgFQAFgFAGAAQAHAAAFAFQAEAFAAAIIAAAFQAAAGgDAEQAEAEAAAHIAAAEQAAAJgEAFQgFAFgIAAQgHAAgEgFgAgBAIIAAAKQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAIAAgKQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAABgAgBgRIAAAMIABABIAAAAIABAAIABgBIAAgMQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAABg");
	this.shape_26.setTransform(130.375,-23.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMAeQgEgFAAgIIAAgIQAAgGABgDIANghIANAAIgFAMIgFALIACAAQAOAAAAAQIAAAIQAAAJgEAGQgFAFgIAAQgHAAgFgEgAgBAEIAAAOQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAIAAgOQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAg");
	this.shape_27.setTransform(126.425,-23.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQAiIAAgOQASgUAAgLIAAgBQAAgDgBgCQgBAAAAAAQAAgBAAAAQgBAAgBAAQAAAAgBAAIgIABIgFgMQAHgEAJAAQAIAAAEAGQAFAGAAAIIAAABIgBAJIgFAIIgFAIIgGAHIAPAAIAAAOg");
	this.shape_28.setTransform(122.575,-23.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgPAfIADgOIAJADQAFAAAAgEIAAgBIgBgEIgEgFIgDgDIgHgIQgBgEAAgGIAAAAQgBgJAFgFQAEgEAHAAQAHAAAHADIgEAMIgHgBQgEAAAAAEIAAACIAAABIABABIABABIABACIABABIADADIAHAIQACAEAAAHQAAAJgEAFQgFAFgHAAQgIAAgHgDg");
	this.shape_29.setTransform(117.9,-23.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgOAhIAAhBIAdAAIAAAOIgPAAIAAALIAMAAIAAANIgMAAIAAANIAPAAIAAAOg");
	this.shape_30.setTransform(114.625,-23.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgHAhIAAhBIAOAAIAABBg");
	this.shape_31.setTransform(111.85,-23.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AACAhIgDgZIgCAAIAAAZIgPAAIAAhBIARAAQAJAAAEAEQAEAFAAAJIAAAFQAAAJgFAEIAIAdgAgDgDIABAAIACgBIABgDIAAgHQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgCgBIgBAAg");
	this.shape_32.setTransform(108.75,-23.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgOAhIAAhBIAdAAIAAAOIgPAAIAAALIAMAAIAAANIgMAAIAAANIAPAAIAAAOg");
	this.shape_33.setTransform(105.025,-23.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPAfIADgOIAKADQAEAAAAgEIAAgBIgCgEIgDgFIgDgDIgGgIQgCgEAAgGIAAAAQgBgJAFgFQAEgEAHAAQAGAAAIADIgEAMIgHgBQgEAAAAAEIAAACIAAABIAAABIACABIABACIACABIACADIAHAIQACAEAAAHQAAAJgEAFQgFAFgHAAQgIAAgHgDg");
	this.shape_34.setTransform(101.6,-23.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(99.6,-28.5,81,26.7);


// stage content:
(lib.bigticketawarenesshtml5320x50 = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(283));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(159.95,3.8,0.0852,0.0852,0,0,0,0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(189).to({alpha:0},16).wait(78));

	// Layer_1
	this.instance_2 = new lib.button_mc();
	this.instance_2.setTransform(172.75,33.15,1,1,0,0,0,28.2,7.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(205).to({_off:false},0).to({y:24.4,alpha:1},16).wait(62));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(83.35,22.5,0.0831,0.0831);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(189).to({_off:false},0).wait(1).to({regX:-1090,regY:25.1,x:-7.05,y:24.6,alpha:0.0032},0).wait(1).to({x:-6.15,alpha:0.0145},0).wait(1).to({x:-4.45,alpha:0.0371},0).wait(1).to({x:-1.4,alpha:0.077},0).wait(1).to({x:3.95,y:24.65,alpha:0.1467},0).wait(1).to({x:13.2,y:24.7,alpha:0.2672},0).wait(1).to({x:24.6,y:24.75,alpha:0.4164},0).wait(1).to({x:36,y:24.8,alpha:0.5648},0).wait(1).to({x:45.5,y:24.85,alpha:0.6887},0).wait(1).to({x:52.95,y:24.9,alpha:0.7859},0).wait(1).to({x:58.8,alpha:0.8625},0).wait(1).to({x:63.4,y:24.95,alpha:0.9229},0).wait(1).to({x:66.5,alpha:0.9628},0).wait(1).to({x:68.25,alpha:0.9857},0).wait(1).to({x:69.1,alpha:0.9969},0).wait(1).to({regX:0,regY:0,x:159.95,y:22.9,alpha:1},0).wait(78));

	// main_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(159.7,44.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:140.1,regY:-162.9,x:174.25,y:27.3,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:27.25,alpha:0.0435},0).wait(1).to({y:27.15,alpha:0.0919},0).wait(1).to({y:26.95,alpha:0.1816},0).wait(1).to({y:26.65,alpha:0.3248},0).wait(1).to({y:26.3,alpha:0.4878},0).wait(1).to({y:26,alpha:0.6345},0).wait(1).to({y:25.75,alpha:0.7499},0).wait(1).to({y:25.55,alpha:0.8388},0).wait(1).to({y:25.4,alpha:0.9088},0).wait(1).to({y:25.3,alpha:0.9564},0).wait(1).to({y:25.25,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:42.25,alpha:1},0).wait(145).to({regX:140.1,regY:-162.9,x:174.25,y:25.25,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:25.3,alpha:0.9565},0).wait(1).to({y:25.4,alpha:0.9081},0).wait(1).to({y:25.6,alpha:0.8184},0).wait(1).to({y:25.9,alpha:0.6752},0).wait(1).to({y:26.25,alpha:0.5122},0).wait(1).to({y:26.55,alpha:0.3655},0).wait(1).to({y:26.8,alpha:0.2501},0).wait(1).to({y:27,alpha:0.1612},0).wait(1).to({y:27.15,alpha:0.0912},0).wait(1).to({y:27.25,alpha:0.0436},0).wait(1).to({y:27.3,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:44.35,alpha:0},0).to({_off:true},1).wait(93));

	// second_prize
	this.instance_5 = new lib.second_prize_mc();
	this.instance_5.setTransform(102.1,29.75,0.1923,0.1923);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:-17,regY:-0.5,x:98.85,y:29.6,alpha:0.0037},0).wait(1).to({y:29.55,alpha:0.0167},0).wait(1).to({y:29.45,alpha:0.0435},0).wait(1).to({y:29.25,alpha:0.0919},0).wait(1).to({y:28.9,alpha:0.1816},0).wait(1).to({y:28.35,alpha:0.3248},0).wait(1).to({y:27.65,alpha:0.4878},0).wait(1).to({y:27.1,alpha:0.6345},0).wait(1).to({y:26.65,alpha:0.7499},0).wait(1).to({y:26.25,alpha:0.8388},0).wait(1).to({y:26,alpha:0.9088},0).wait(1).to({y:25.8,alpha:0.9564},0).wait(1).to({y:25.7,alpha:0.9834},0).wait(1).to({y:25.65,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:102.1,y:25.75,alpha:1},0).wait(62).to({regX:-17,regY:-0.5,x:98.85,y:25.65,alpha:0.9963},0).wait(1).to({y:25.8,alpha:0.9833},0).wait(1).to({y:26.05,alpha:0.9565},0).wait(1).to({y:26.55,alpha:0.9081},0).wait(1).to({y:27.45,alpha:0.8184},0).wait(1).to({y:28.85,alpha:0.6752},0).wait(1).to({y:30.5,alpha:0.5122},0).wait(1).to({y:31.95,alpha:0.3655},0).wait(1).to({y:33.1,alpha:0.2501},0).wait(1).to({y:34,alpha:0.1612},0).wait(1).to({y:34.7,alpha:0.0912},0).wait(1).to({y:35.2,alpha:0.0436},0).wait(1).to({y:35.45,alpha:0.0166},0).wait(1).to({y:35.6,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:102.1,y:35.75,alpha:0},0).to({_off:true},76).wait(18));

	// promo
	this.instance_6 = new lib.promo_mc();
	this.instance_6.setTransform(189.15,23.35,0.0867,0.0867,0,0,0,0.6,0.6);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:-666.6,regY:20.2,x:131.15,y:25.05,alpha:0.0037},0).wait(1).to({x:130.8,alpha:0.0167},0).wait(1).to({x:130,alpha:0.0435},0).wait(1).to({x:128.6,alpha:0.0919},0).wait(1).to({x:125.95,alpha:0.1816},0).wait(1).to({x:121.8,alpha:0.3248},0).wait(1).to({x:117.05,alpha:0.4878},0).wait(1).to({x:112.75,alpha:0.6345},0).wait(1).to({x:109.4,alpha:0.7499},0).wait(1).to({x:106.8,alpha:0.8388},0).wait(1).to({x:104.75,alpha:0.9088},0).wait(1).to({x:103.35,alpha:0.9564},0).wait(1).to({x:102.55,alpha:0.9834},0).wait(1).to({x:102.2,alpha:0.9964},0).wait(1).to({regX:0,regY:0.6,x:159.95,y:23.35,alpha:1},0).wait(83).to({alpha:0},15).to({_off:true},1).wait(169));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5050F").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160.025,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(94.9,18.4,225.20000000000002,41);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_2ndprize.jpg", id:"_2ndprize"},
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