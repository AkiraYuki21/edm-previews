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


(lib._970x250 = function() {
	this.initialize(img._970x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


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
	this.shape.graphics.f("#FFFFFF").s().p("AjFG+IAAt7IGJAAIAAC+Ii9AAIAACYICZAAIAAC+IiZAAIAACpIC/AAIAAC+g");
	this.shape.setTransform(655.6,-106.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjnG+IAAizID2oIIjaAAIAAjAIGzAAIAAC0Ij7IGID6AAIAADBg");
	this.shape_1.setTransform(607.15,-106.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhlG+IAAt7IDLAAIAAN7g");
	this.shape_2.setTransform(568.225,-106.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAlG+IhHlUIgOAAIAAFUIjNAAIAAt7IDbAAQCNAAA4A/QA3BAAAB4IAABAQAACDhCA4IBmGJgAgwg6IAKAAQAaAAALgMQAKgMAAgdIAAhXQAAgdgKgNQgLgLgaAAIgKAAg");
	this.shape_3.setTransform(526.075,-106.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjqG+IAAt7IDZAAQCNAAA4A/QA3BAAAB4IAABLQAACHhCA0QhBA2h5gBIgMAAIAAFJgAgdgvIAIAAQAZAAALgMQALgMAAgeIAAhhQAAgdgLgNQgLgLgZAAIgIAAg");
	this.shape_4.setTransform(470.625,-106.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjrG+IAAt7IDbAAQBtAABIBIQBHBGAAB5IAAFoQAAB5hHBKQhIBJhsAAgAgeD8IAIAAQAdAAAIgNQAKgNAAgnIAAmAQAAgigLgKQgLgKgZAAIgIAAg");
	this.shape_5.setTransform(402.65,-106.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCG+Ig4o0IAAI0IjNAAIAAt7IENAAIA2InIAAonIDMAAIAAN7g");
	this.shape_6.setTransform(346.025,-106.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABCG+IgQiuIhjAAIgQCuIjIAAIB1t7IEoAAIB2N7gAgEicIgZDuIA7AAIgajuIgEhLg");
	this.shape_7.setTransform(287.525,-106.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAlG+IhHlUIgOAAIAAFUIjNAAIAAt7IDbAAQCNAAA4A/QA3BAAAB4IAABAQAACDhCA4IBmGJgAgwg6IAKAAQAaAAALgMQAKgMAAgdIAAhXQAAgdgKgNQgLgLgaAAIgKAAg");
	this.shape_8.setTransform(230.075,-106.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjsDUIAAmnQAAhyBKhEQBKhDBzABQBtAABlA3IhKCxQgzgcg9AAQhPAAABBZIAAGGQAAArAfAAQAPAAAIgGIAAlBIDBAAIAAHHQg9AjgtAQQguAPg9gBQjzAAAAj4g");
	this.shape_9.setTransform(176.35,-106.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjFG+IAAt7IGJAAIAAC+Ii9AAIAACYICZAAIAAC+IiZAAIAACpIC+AAIAAC+g");
	this.shape_10.setTransform(672,-227);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhlG+IAAqyIh+AAIAAjJIHHAAIAADJIh+AAIAAKyg");
	this.shape_11.setTransform(625.625,-227);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABCG+IgQiuIhjAAIgQCuIjIAAIB1t7IEoAAIB2N7gAgEicIgZDuIA7AAIgajuIgEhLg");
	this.shape_12.setTransform(573.475,-227);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ACSG+IAAqbIgJBmIg9I1IiZAAIg9o1IgIhmIAAKbIjGAAIAAt7IE2AAIAeGnIAEBCIAFhCIAgmnIE0AAIAAN7g");
	this.shape_13.setTransform(506.9,-227);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhlG+IAAt7IDLAAIAAN7g");
	this.shape_14.setTransform(455.575,-227);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhlG+IAAqyIh+AAIAAjJIHHAAIAADJIh+AAIAAKyg");
	this.shape_15.setTransform(418.725,-227);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjQG+IAAt7IDNAAIAAKxIDTAAIAADKg");
	this.shape_16.setTransform(370.15,-227);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AirGIQhBg7AAh1IAAqaIDRAAIAAKgQAAAlAbAAQAcAAAAglIAAqgIDRAAIAAKaQAABtg8BAQg8A+h0AAQhrAAhBg7g");
	this.shape_17.setTransform(317.925,-226.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AjFG+IAAt7IGJAAIAAC+Ii9AAIAACYICZAAIAAC+IiZAAIAACpIC/AAIAAC+g");
	this.shape_18.setTransform(254.65,-227);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAcG+IAAlgIg3AAIAAFgIjNAAIAAt7IDNAAIAAFQIA3AAIAAlQIDMAAIAAN7g");
	this.shape_19.setTransform(205,-227);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhlG+IAAqyIh+AAIAAjJIHHAAIAADJIh+AAIAAKyg");
	this.shape_20.setTransform(156.225,-227);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(130.9,-295.6,564.1,283), null);


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
	this.instance.setTransform(-121,-117,0.9361,0.9361);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-121,-117,264.9,231.2), null);


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
	this.instance.setTransform(-571,-250,1.8697,1.8697);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-571,-250,519.8,536.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhOGaQgggZAAgwQAAgsAggaQAfgbAvAAQAwAAAgAbQAfAaAAAsQAAAwgfAZQggAagwAAQgvAAgfgagAhhCTIAApFIDEAAIAAJFg");
	this.shape.setTransform(742.325,-103.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcGtIhNmKIAAGKIjFAAIAAtZIDFAAIAAGHIBMmHIDPAAIhqGVIB3HEg");
	this.shape_1.setTransform(695.025,-104.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai9GtIAAtZIF5AAIAAC2Ii1AAIAACTICTAAIAAC3IiTAAIAACjIC3AAIAAC2g");
	this.shape_2.setTransform(645.975,-104.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ai9GtIAAtZIF5AAIAAC2Ii1AAIAACTICTAAIAAC3IiTAAIAACjIC3AAIAAC2g");
	this.shape_3.setTransform(603.675,-104.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAlGtIgloDIgkIDIj+AAIhAtZIDRAAIAKKSIA5qSICeAAIA4KSIAKqSIDRAAIhANZg");
	this.shape_4.setTransform(543.9,-104.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjIGtIAAtZIDFAAIAAKYIDMAAIAADBg");
	this.shape_5.setTransform(468.2,-104.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA/GtIgPinIhfAAIgPCnIjBAAIBxtZIEdAAIByNZgAgDiXIgYDmIA3AAIgXjmIgFhHg");
	this.shape_6.setTransform(417.2,-104.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCGtIg2ofIAAIfIjFAAIAAtZIECAAIA1ISIAAoSIDEAAIAANZg");
	this.shape_7.setTransform(360.825,-104.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhiGtIAAtZIDEAAIAANZg");
	this.shape_8.setTransform(319.2,-104.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjCGtIAAtZIGFAAIAAC2IjBAAIAACTICfAAIAAC3IifAAIAAFZg");
	this.shape_9.setTransform(285.65,-104.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai9GtIAAtZIF5AAIAAC2Ii1AAIAACTICTAAIAAC3IiTAAIAACjIC3AAIAAC2g");
	this.shape_10.setTransform(229.125,-104.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAbGtIAAlSIg0AAIAAFSIjGAAIAAtZIDGAAIAAFEIA0AAIAAlEIDFAAIAANZg");
	this.shape_11.setTransform(181.35,-104.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhhGtIAAqYIh6AAIAAjBIG2AAIAADBIh4AAIAAKYg");
	this.shape_12.setTransform(134.4,-104.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AjVGRIA0ixQBTAhAkAAQBFAAAAg2IAAgGQAAgYgRgaQgRgbgqgqIgmgkQg8g7gag0QgagzAAhRIAAgCQAAhwA4g/QA5g/BmAAQBSAABjAnIgzClQg/gTgdAAQhDAAAAA3IAAADQAAAIADAHIAGAOIAKAQIANAPIASATIAUAVQAaAdAOAMQA/A+AbAyQAbAyAABXIAAABQgBB1g8BCQg+BChkAAQhmAAhmgpg");
	this.shape_13.setTransform(632.65,-230.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjUGRIAzixQBUAhAjAAQBFAAAAg2IAAgGQAAgYgRgaQgRgbgqgqIglgkQg9g7gbg0QgagzAAhRIAAgCQAAhwA6g/QA5g/BkAAQBTAABiAnIgyClQg/gTgdAAQhDAAAAA3IAAADQAAAIACAHIAHAOIAKAQIAOAPIASATIATAVQAaAdAOAMQA/A+AaAyQAbAyAABXIAAABQAAB1g8BCQg+BChkAAQhmAAhlgpg");
	this.shape_14.setTransform(587.8,-230.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhhGtIAAtaIDEAAIAANag");
	this.shape_15.setTransform(552.35,-230.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACNGtIAAqCIgJBiIg6IgIiUAAIg6ogIgIhiIAAKCIi/AAIAAtaIErAAIAcGXIAEBAIAFhAIAfmXIEoAAIAANag");
	this.shape_16.setTransform(502.975,-230.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhiGtIAAqXIh4AAIAAjDIG2AAIAADDIh5AAIAAKXg");
	this.shape_17.setTransform(430.35,-230.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag4C4IgklvIC5AAIgiFvg");
	this.shape_18.setTransform(394.25,-254.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgCGtIg2ofIAAIfIjFAAIAAtaIECAAIA1ITIAAoTIDEAAIAANag");
	this.shape_19.setTransform(352.025,-230.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AABG6QhxAAg5g9Qg7g9AAhzIAAmYQABh2A7g8QA8g8BsAAIACAAQBwAAA6A9QA5A+AABzIAAGYQAAB3g8A7Qg6A7hsAAgAgZjbIAAG4QgBAkAaAAIABAAQAaAAAAgkIAAm4QAAglgbAAIgBAAQgZAAABAlg");
	this.shape_20.setTransform(297.45,-230.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AjiGtIAAtaIDTAAQBpAABFBFQBEBFAAB0IAAFaQAAB1hEBHQhFBGhoAAgAgdD0IAIAAQAcgBAIgNQAJgMAAglIAAlyQAAghgLgKQgKgKgYAAIgIAAg");
	this.shape_21.setTransform(245.525,-230.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_sub_caption_mc, new cjs.Rectangle(110.5,-295.7,653.8,281.2), null);


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
	this.shape_15.setTransform(191.775,236.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAvIAAhdIApAAIAAAUIgUAAIAAAQIAQAAIAAATIgQAAIAAASIAUAAIAAAUg");
	this.shape_16.setTransform(186.725,236.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAHAvIgCgSIgKAAIgBASIgVAAIAMhdIAfAAIAMBdgAAAgPIgCAYIAFAAIgDgYIAAgIg");
	this.shape_17.setTransform(181.3,236.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAvIgFg7IAAA7IgWAAIAAhdIAcAAIAFA5IAAg5IAWAAIAABdg");
	this.shape_18.setTransform(173.625,236.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKAvIAAhdIAVAAIAABdg");
	this.shape_19.setTransform(169.075,236.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWAsIAFgTQAKADAEAAQAGAAAAgGIAAAAQAAgDgCgDIgFgHIgFgEQgGgGgDgGQgDgFAAgJQAAgNAHgGQAFgHALAAQAIAAAMAEIgGASIgKgCQgHAAAAAGIAAAAIAAACIABABIAAACIACACIACACIACACIAFAFQAGAGAEAFQADAGAAAJQAAANgIAHQgGAHgKAAQgLAAgLgEg");
	this.shape_20.setTransform(163.7,236.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUAvIAAhdIApAAIAAAUIgUAAIAAAQIAQAAIAAATIgQAAIAAASIAUAAIAAAUg");
	this.shape_21.setTransform(159.025,236.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXAvIAAgTIAZg1IgWAAIAAgVIAsAAIAAATIgZA2IAZAAIAAAUg");
	this.shape_22.setTransform(153.925,236.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAvIAAhdIAVAAIAABdg");
	this.shape_23.setTransform(149.825,236.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAEAvIgHgkIgBAAIAAAkIgWAAIAAhdIAXAAQAOAAAGAGQAGAIAAAMIAAAHQAAANgHAFIALAqgAgEgFIABAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgJIgBgEIgDgBIgBAAg");
	this.shape_24.setTransform(145.375,236.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAXAAQAOAAAGAGQAGAIAAAMIAAAIQAAANgHAGQgHAFgMAAIgBAAIAAAjgAgCgEIABAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAgBAAgBIAAgKQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBAAIgCgBIgBAAg");
	this.shape_25.setTransform(139.575,236.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIA8IAAh3IARAAIAAB3g");
	this.shape_26.setTransform(130.45,237.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKAvIAAgaIgShDIAXAAIAFAgIAHggIAWAAIgSBDIAAAag");
	this.shape_27.setTransform(121.175,236.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAvIAAhdIAVAAIAABIIAWAAIAAAVg");
	this.shape_28.setTransform(115.55,236.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAXAAQAOAAAGAGQAGAIAAAMIAAAIQAAANgHAGQgHAFgMAAIgBAAIAAAjgAgCgEIABAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAgBAAgBIAAgKQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBAAIgCgBIgBAAg");
	this.shape_29.setTransform(110.175,236.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAXAAQAOAAAGAGQAGAIAAAMIAAAIQAAANgHAGQgHAFgMAAIgBAAIAAAjgAgCgEIABAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAgBAAgBIAAgKQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBAAIgCgBIgBAAg");
	this.shape_30.setTransform(104.575,236.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAHAvIgCgSIgJAAIgCASIgVAAIAMhdIAfAAIAMBdgAAAgPIgCAYIAFAAIgDgYIAAgIg");
	this.shape_31.setTransform(98.7,236.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgWAsIAFgTQAKADAEAAQAGAAAAgGIAAAAQAAgDgCgDIgFgHIgFgEQgGgGgDgGQgDgFAAgJQAAgNAHgGQAFgHALAAQAIAAAMAEIgGASIgKgCQgHAAAAAGIAAAAIAAACIABABIAAACIACACIACACIACACIAFAFQAGAGAEAFQACAGAAAJQABANgIAHQgGAHgKAAQgLAAgLgEg");
	this.shape_32.setTransform(91.7,236.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFAUIgEgnIATAAIgDAng");
	this.shape_33.setTransform(87.775,233.675);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgQApQgHgHAAgOIAAgnQAAgOAHgIQAHgHAMAAQALAAAIAFIgIARIgHgCQgIAAAAALIAAAjQAAAEACADQADADAEAAIAAAAIAIgBIAIAQQgKAGgLgBQgMAAgHgHg");
	this.shape_34.setTransform(84.025,236.35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZAqQgHgGAAgMIAAgMQAAgGADgFQADgDAFAAQgEgJAAgGIAAgHQAAgNAEgFQAFgFAMAAQAJAAAFAFQADAFAAANIAAAGQAAAOgMAEIAIALQgBgEAAgHIARAAIAAAFIAAAFIAAAFIgBAEIAAADIgCAEIgBADIAMASIgWAAIgBgDQgHAEgHAAQgOAAgHgGgAgLAPIAAAGQAAAFACACQACACAEAAIADAAIgLgSgAgGgcIAAABIAAADIAAAKIAAADQAEgBAAgFIAAgHIgBgDIgBgBIgCAAg");
	this.shape_35.setTransform(77.6,236.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJAvIAAhHIgOAAIAAgWIAvAAIAAAWIgNAAIAABHg");
	this.shape_36.setTransform(71.5,236.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgJA8IAAh3IASAAIAAB3g");
	this.shape_37.setTransform(62.8,237.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgFAwIAAhGIgJADIAAgUIAdgIIAABfg");
	this.shape_38.setTransform(55.8,236.275);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgRApQgGgGgBgNIAAgGQAAgKAHgGQgFgGAAgJIAAgGQAAgMAGgHQAHgHAJAAQAKAAAHAHQAFAHAAAMIAAAGQAAAJgEAGQAGAGABAKIAAAGQgBAMgGAHQgHAHgLAAQgKAAgHgHgAgBALIAAAOQAAABAAABQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAgBIAAgOQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABgAgBgYIAAAQIAAADIABAAIACgBIAAgCIAAgQQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAABg");
	this.shape_39.setTransform(51.25,236.325);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},311).wait(1));

	// ticket
	this.instance_1 = new lib.ticket_mc();
	this.instance_1.setTransform(101.85,112.6,0.4156,0.4156,0,0,0,-0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(217).to({_off:false},0).wait(1).to({regX:-873,regY:24.9,x:-259.75,y:122.9,alpha:0.0032},0).wait(1).to({x:-255.45,alpha:0.0145},0).wait(1).to({x:-246.75,y:122.95,alpha:0.0371},0).wait(1).to({x:-231.5,y:123.05,alpha:0.077},0).wait(1).to({x:-204.8,y:123.15,alpha:0.1467},0).wait(1).to({x:-158.65,y:123.4,alpha:0.2672},0).wait(1).to({x:-101.5,y:123.7,alpha:0.4164},0).wait(1).to({x:-44.65,y:124,alpha:0.5648},0).wait(1).to({x:2.8,y:124.25,alpha:0.6887},0).wait(1).to({x:40.05,y:124.45,alpha:0.7859},0).wait(1).to({x:69.35,y:124.6,alpha:0.8625},0).wait(1).to({x:92.5,y:124.7,alpha:0.9229},0).wait(1).to({x:107.75,y:124.8,alpha:0.9628},0).wait(1).to({x:116.55,y:124.85,alpha:0.9857},0).wait(1).to({x:120.8,alpha:0.9969},0).wait(1).to({regX:0.1,regY:0.1,x:484.85,y:114.6,alpha:1},0).wait(79));

	// logo
	this.instance_2 = new lib.bt_logo();
	this.instance_2.setTransform(484.85,19,0.4261,0.4261,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(217).to({alpha:0},16).wait(79));

	// cta
	this.instance_3 = new lib.cta_mc();
	this.instance_3.setTransform(484.85,198.4,0.2992,0.2992,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(233).to({_off:false},0).wait(1).to({regX:1185.2,regY:-186.8,x:839.4,y:142.35,alpha:0.0032},0).wait(1).to({y:142.15,alpha:0.0145},0).wait(1).to({y:141.75,alpha:0.0371},0).wait(1).to({y:141,alpha:0.077},0).wait(1).to({y:139.7,alpha:0.1467},0).wait(1).to({y:137.5,alpha:0.2672},0).wait(1).to({y:134.75,alpha:0.4164},0).wait(1).to({y:132,alpha:0.5648},0).wait(1).to({y:129.7,alpha:0.6887},0).wait(1).to({y:127.9,alpha:0.7859},0).wait(1).to({y:126.5,alpha:0.8625},0).wait(1).to({y:125.4,alpha:0.9229},0).wait(1).to({y:124.65,alpha:0.9628},0).wait(1).to({y:124.25,alpha:0.9857},0).wait(1).to({y:124.05,alpha:0.9969},0).wait(1).to({regX:0.1,regY:0.1,x:484.85,y:179.95,alpha:1},0).wait(63));

	// main_sub_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(483.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.daily_sub_caption_mc();
	this.instance_5.setTransform(483.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},68).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},79).wait(120));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:412.6,regY:-166.1,x:698.2,y:135.1,alpha:0.0037},0).wait(1).to({y:134.95,alpha:0.0167},0).wait(1).to({y:134.65,alpha:0.0435},0).wait(1).to({y:134.15,alpha:0.0919},0).wait(1).to({x:698.15,y:133.2,alpha:0.1816},0).wait(1).to({x:698.1,y:131.65,alpha:0.3248},0).wait(1).to({x:698.05,y:129.95,alpha:0.4878},0).wait(1).to({x:698,y:128.35,alpha:0.6345},0).wait(1).to({x:697.95,y:127.15,alpha:0.7499},0).wait(1).to({y:126.2,alpha:0.8388},0).wait(1).to({x:697.9,y:125.45,alpha:0.9088},0).wait(1).to({y:124.95,alpha:0.9564},0).wait(1).to({y:124.65,alpha:0.9834},0).wait(1).to({y:124.5,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:483.05,y:211.05,alpha:1},0).wait(68).to({x:483.4,y:211.25},0).wait(1).to({regX:412.6,regY:-166.1,x:698.25,y:124.7,alpha:0.9963},0).wait(1).to({y:124.85,alpha:0.9833},0).wait(1).to({y:125.15,alpha:0.9565},0).wait(1).to({y:125.65,alpha:0.9081},0).wait(1).to({y:126.55,alpha:0.8184},0).wait(1).to({y:128.05,alpha:0.6752},0).wait(1).to({y:129.75,alpha:0.5122},0).wait(1).to({y:131.3,alpha:0.3655},0).wait(1).to({y:132.5,alpha:0.2501},0).wait(1).to({y:133.45,alpha:0.1612},0).wait(1).to({y:134.15,alpha:0.0912},0).wait(1).to({y:134.65,alpha:0.0436},0).wait(1).to({y:134.95,alpha:0.0166},0).wait(1).to({y:135.1,alpha:0.0036},0).to({_off:true},1).wait(199));

	// su_sub_caption
	this.instance_6 = new lib.daily_sub_caption_mc();
	this.instance_6.setTransform(483.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({regX:433,regY:-167.4,x:708.8,y:134.4,alpha:0.0037},0).wait(1).to({y:134.25,alpha:0.0167},0).wait(1).to({y:133.95,alpha:0.0435},0).wait(1).to({y:133.45,alpha:0.0919},0).wait(1).to({x:708.75,y:132.5,alpha:0.1816},0).wait(1).to({x:708.7,y:130.95,alpha:0.3248},0).wait(1).to({x:708.65,y:129.25,alpha:0.4878},0).wait(1).to({x:708.6,y:127.65,alpha:0.6345},0).wait(1).to({x:708.55,y:126.45,alpha:0.7499},0).wait(1).to({y:125.5,alpha:0.8388},0).wait(1).to({x:708.5,y:124.75,alpha:0.9088},0).wait(1).to({y:124.25,alpha:0.9564},0).wait(1).to({y:123.95,alpha:0.9834},0).wait(1).to({y:123.8,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:483.05,y:211.05,alpha:1},0).wait(104).to({x:483.4,y:211.25},0).wait(1).to({regX:433,regY:-167.4,x:708.85,y:124,alpha:0.9968},0).wait(1).to({y:124.15,alpha:0.9855},0).wait(1).to({y:124.35,alpha:0.9629},0).wait(1).to({y:124.8,alpha:0.923},0).wait(1).to({y:125.5,alpha:0.8533},0).wait(1).to({y:126.75,alpha:0.7328},0).wait(1).to({y:128.35,alpha:0.5836},0).wait(1).to({y:129.9,alpha:0.4352},0).wait(1).to({y:131.15,alpha:0.3113},0).wait(1).to({y:132.2,alpha:0.2141},0).wait(1).to({y:133,alpha:0.1375},0).wait(1).to({y:133.6,alpha:0.0771},0).wait(1).to({y:134.05,alpha:0.0372},0).wait(1).to({y:134.3,alpha:0.0143},0).wait(1).to({y:134.4,alpha:0.0031},0).wait(1).to({regX:0.1,regY:0.1,x:483.4,y:221.7,alpha:0},0).to({_off:true},1).wait(78));

	// second_prize_mc
	this.instance_7 = new lib.second_prize_mc();
	this.instance_7.setTransform(330,148.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(98).to({_off:false},0).wait(1).to({regX:11.5,regY:-1.4,x:341.5,y:146.6,alpha:0.0037},0).wait(1).to({y:146.35,alpha:0.0167},0).wait(1).to({y:145.8,alpha:0.0435},0).wait(1).to({y:144.85,alpha:0.0919},0).wait(1).to({y:143.05,alpha:0.1816},0).wait(1).to({y:140.2,alpha:0.3248},0).wait(1).to({y:136.9,alpha:0.4878},0).wait(1).to({y:134,alpha:0.6345},0).wait(1).to({y:131.7,alpha:0.7499},0).wait(1).to({y:129.9,alpha:0.8388},0).wait(1).to({y:128.5,alpha:0.9088},0).wait(1).to({y:127.55,alpha:0.9564},0).wait(1).to({y:127,alpha:0.9834},0).wait(1).to({y:126.75,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:330,y:128.1,alpha:1},0).wait(105).to({regX:11.5,regY:-1.4,scaleX:1.0001,scaleY:1.0001,x:342.3,y:126.65},0).wait(1).to({scaleX:1.0003,scaleY:1.0003,x:345.2},0).wait(1).to({scaleX:1.0008,scaleY:1.0008,x:351.05,y:126.55},0).wait(1).to({scaleX:1.0016,scaleY:1.0016,x:361.3,y:126.4},0).wait(1).to({scaleX:1.003,scaleY:1.003,x:379.3,y:126.15},0).wait(1).to({scaleX:1.0055,scaleY:1.0055,x:410.35,y:125.75},0).wait(1).to({scaleX:1.0085,scaleY:1.0085,x:448.85,y:125.25},0).wait(1).to({scaleX:1.0115,scaleY:1.0115,x:487.1,y:124.75},0).wait(1).to({scaleX:1.0141,scaleY:1.0141,x:519,y:124.3},0).wait(1).to({scaleX:1.0161,scaleY:1.0161,x:544.1,y:123.95},0).wait(1).to({scaleX:1.0176,scaleY:1.0176,x:563.8,y:123.7},0).wait(1).to({scaleX:1.0189,scaleY:1.0189,x:579.4,y:123.45},0).wait(1).to({scaleX:1.0197,scaleY:1.0197,x:589.7,y:123.3},0).wait(1).to({scaleX:1.0202,scaleY:1.0202,x:595.6,y:123.25},0).wait(1).to({scaleX:1.0204,scaleY:1.0204,x:598.45,y:123.2},0).wait(1).to({regX:0.1,regY:0.1,x:587.55,y:124.6},0).wait(79));

	// promo
	this.instance_8 = new lib.promo_mc();
	this.instance_8.setTransform(630.65,116.65,0.4337,0.4337,0,0,0,0.1,0);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:-311.1,regY:18.3,x:495.15,y:124.6,alpha:0.0037},0).wait(1).to({x:493.25,alpha:0.0167},0).wait(1).to({x:489.35,alpha:0.0435},0).wait(1).to({x:482.3,alpha:0.0919},0).wait(1).to({x:469.2,alpha:0.1816},0).wait(1).to({x:448.3,alpha:0.3248},0).wait(1).to({x:424.55,alpha:0.4878},0).wait(1).to({x:403.15,alpha:0.6345},0).wait(1).to({x:386.35,alpha:0.7499},0).wait(1).to({x:373.4,alpha:0.8388},0).wait(1).to({x:363.2,alpha:0.9088},0).wait(1).to({x:356.25,alpha:0.9564},0).wait(1).to({x:352.3,alpha:0.9834},0).wait(1).to({x:350.4,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0,x:484.85,y:116.65,alpha:1},0).wait(83).to({alpha:0},15).wait(104).to({alpha:1},16).wait(79));

	// background
	this.instance_9 = new lib.background();
	this.instance_9.setTransform(484.85,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(312));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(118.5,125,851.4,137.3);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_2ndprize.png", id:"_2ndprize"},
		{src:"images/_970x250.jpg", id:"_970x250"},
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