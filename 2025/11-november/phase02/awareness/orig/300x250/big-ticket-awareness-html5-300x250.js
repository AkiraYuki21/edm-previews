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


(lib._300x250 = function() {
	this.initialize(img._300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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
	this.instance.setTransform(-175,-269,0.9072,0.9072);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-175,-269,350.2,188.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Ag+CPIAAkdIB9AAIAAA9Ig9AAIAAAxIAyAAIAAA8IgyAAIAAA2IA9AAIAAA9g");
	this.shape.setTransform(170.05,-3.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhKCPIAAg5IBPimIhGAAIAAg+ICMAAIAAA5IhQCnIBPAAIAAA9g");
	this.shape_1.setTransform(154.45,-3.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_2.setTransform(141.975,-3.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMCPIgWhtIgFAAIAABtIhBAAIAAkdIBGAAQAsAAATAUQARAVAAAmIAAAVQAAAqgVARIAhB+gAgPgSIADAAQAJAAADgEQADgEAAgJIAAgcQAAgJgDgEQgDgEgJAAIgDAAg");
	this.shape_3.setTransform(128.45,-3.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhKCPIAAkdIBFAAQAsAAASAUQATAVgBAmIAAAYQABArgWARQgVARgmAAIgEAAIAABpgAgJgOIADAAQAHAAADgEQAFgEAAgKIAAgfQAAgJgFgEQgDgEgHAAIgDAAg");
	this.shape_4.setTransform(110.65,-3.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhLCPIAAkdIBHAAQAiAAAXAXQAXAXAAAmIAABzQAAAngXAYQgXAXgiAAgAgJBRIADAAQAIAAADgEQADgEAAgNIAAh6QAAgLgEgEQgDgDgHAAIgDAAg");
	this.shape_5.setTransform(88.825,-3.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAACPIgSi0IAAC0IhCAAIAAkdIBWAAIARCwIAAiwIBCAAIAAEdg");
	this.shape_6.setTransform(70.625,-3.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVCPIgFg4IgfAAIgFA4IhBAAIAmkdIBfAAIAlEdgAgBgyIgHBMIASAAIgIhMIgCgXg");
	this.shape_7.setTransform(51.85,-3.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMCPIgWhtIgFAAIAABtIhBAAIAAkdIBGAAQAsAAASAUQASAVAAAmIAAAVQAAAqgVARIAhB+gAgPgSIADAAQAJAAADgEQADgEAAgJIAAgcQAAgJgDgEQgDgEgJAAIgDAAg");
	this.shape_8.setTransform(33.4,-3.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhLBEIAAiHQAAglAYgWQAXgVAlAAQAjAAAgASIgYA5QgQgJgUAAQgYAAAAAcIAAB9QAAAOAJAAQAFAAADgCIAAhmIA+AAIAACRQgUALgPAFQgOAFgUAAQhNAAAAhQg");
	this.shape_9.setTransform(16.175,-3.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag+CPIAAkdIB9AAIAAA9Ig9AAIAAAxIAyAAIAAA8IgyAAIAAA2IA+AAIAAA9g");
	this.shape_10.setTransform(-3.75,-3.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_11.setTransform(-18.675,-3.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVCPIgFg4IgfAAIgFA4IhAAAIAmkdIBdAAIAnEdgAgBgyIgIBMIASAAIgIhMIgBgXg");
	this.shape_12.setTransform(-35.4,-3.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAvCPIAAjVIgDAgIgTC1IgxAAIgTi1IgDggIAADVIhAAAIAAkdIBkAAIAJCIIABAUIACgUIAKiIIBjAAIAAEdg");
	this.shape_13.setTransform(-56.775,-3.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_14.setTransform(-73.275,-3.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_15.setTransform(-85.075,-3.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhCCPIAAkdIBBAAIAADdIBEAAIAABAg");
	this.shape_16.setTransform(-100.65,-3.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag2B+QgVgTAAgmIAAjVIBDAAIAADXQAAAMAIAAQAJAAAAgMIAAjXIBDAAIAADVQAAAkgTAUQgTAUgmAAQghAAgVgTg");
	this.shape_17.setTransform(-117.375,-3.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag/CPIAAkdIB9AAIAAA9Ig8AAIAAAxIAxAAIAAA8IgxAAIAAA2IA+AAIAAA9g");
	this.shape_18.setTransform(-137.7,-3.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAJCPIAAhxIgRAAIAABxIhCAAIAAkdIBCAAIAABsIARAAIAAhsIBCAAIAAEdg");
	this.shape_19.setTransform(-153.625,-3.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_20.setTransform(-169.275,-3.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-178.2,-26.2,356.4,53.7), null);


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
	this.instance.setTransform(-82,-70,0.5815,0.5815);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-82,-70,164.6,143.7), null);


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
	this.instance.setTransform(-161,-174,1.1606,1.1606);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-161,-174,322.7,333.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgZCJQgLgJAAgQQAAgOALgJQAKgJAPAAQAQAAALAJQAKAJAAAOQAAAQgKAJQgLAIgQAAQgPAAgKgIgAggAxIAAjBIBBAAIAADBg");
	this.shape.setTransform(176.5,0.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKCPIgZiDIAACDIhDAAIAAkdIBDAAIAACDIAYiDIBFAAIgkCHIApCWg");
	this.shape_1.setTransform(160.75,0.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+CPIAAkdIB9AAIAAA9Ig9AAIAAAxIAyAAIAAA8IgyAAIAAA2IA9AAIAAA9g");
	this.shape_2.setTransform(144.4,0.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/CPIAAkdIB9AAIAAA9Ig8AAIAAAxIAxAAIAAA8IgxAAIAAA2IA9AAIAAA9g");
	this.shape_3.setTransform(130.3,0.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANCPIgNirIgLCrIhVAAIgVkdIBFAAIAEDbIATjbIA0AAIATDbIADjbIBFAAIgVEdg");
	this.shape_4.setTransform(110.375,0.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhCCPIAAkdIBBAAIAADdIBEAAIAABAg");
	this.shape_5.setTransform(85.15,0.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVCPIgFg4IgfAAIgFA4IhBAAIAmkdIBfAAIAlEdgAAAgyIgIBMIASAAIgIhMIgCgXg");
	this.shape_6.setTransform(68.15,0.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAACPIgSi0IAAC0IhCAAIAAkdIBWAAIARCwIAAiwIBCAAIAAEdg");
	this.shape_7.setTransform(49.375,0.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_8.setTransform(35.475,0.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhACPIAAkdICBAAIAAA9IhAAAIAAAxIA1AAIAAA8Ig1AAIAABzg");
	this.shape_9.setTransform(24.3,0.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag/CPIAAkdIB9AAIAAA9Ig8AAIAAAxIAyAAIAAA8IgyAAIAAA2IA9AAIAAA9g");
	this.shape_10.setTransform(5.45,0.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAJCPIAAhxIgRAAIAABxIhCAAIAAkdIBCAAIAABsIARAAIAAhsIBCAAIAAEdg");
	this.shape_11.setTransform(-10.475,0.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_12.setTransform(-26.125,0.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhGCGIARg7QAcALAMAAQAWgBAAgRIAAgCQAAgIgGgJQgFgJgOgOIgMgMQgUgTgJgRQgJgRAAgbIAAgBQAAglATgWQATgVAhABQAcAAAgAMIgQA4QgVgHgKABQgWAAAAASIAAABIABAFIACAFIADAEIAEAGIAGAGIAHAHIANAOQAVAUAJAQQAJARAAAdIAAAAQAAAngUAWQgVAXgggBQgiAAgigNg");
	this.shape_13.setTransform(-45.675,0.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhGCGIARg7QAcALAMAAQAWgBAAgRIAAgCQAAgIgGgJQgFgJgOgOIgMgMQgUgTgJgRQgJgRAAgbIAAgBQAAglATgWQATgVAhABQAcAAAgAMIgQA4QgVgHgKABQgWAAAAASIAAABIABAFIACAFIADAEIAEAGIAGAGIAHAHIANAOQAVAUAJAQQAJARAAAdIAAAAQAAAngUAWQgVAXgggBQgiAAgigNg");
	this.shape_14.setTransform(-60.625,0.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_15.setTransform(-72.425,0.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAvCPIAAjVIgDAgIgTC1IgxAAIgTi1IgDggIAADVIhAAAIAAkdIBkAAIAJCIIABAUIACgUIAKiIIBjAAIAAEdg");
	this.shape_16.setTransform(-88.925,0.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_17.setTransform(-113.125,0.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSA+IgMh7IA9AAIgLB7g");
	this.shape_18.setTransform(-125.125,-8.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAACPIgSi0IAAC0IhCAAIAAkdIBWAAIARCwIAAiwIBCAAIAAEdg");
	this.shape_19.setTransform(-139.225,0.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAACTQglAAgTgUQgTgVAAglIAAiIQAAgoAUgTQATgVAkABIAAAAQAmAAATAUQATAVAAAmIAACIQAAAngUAUQgTATgkAAgAgIhIIAACRQAAANAIAAIAAAAQAJAAAAgNIAAiRQAAgMgJAAIAAAAQgIAAAAAMg");
	this.shape_20.setTransform(-157.375,0.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhLCPIAAkdIBHAAQAiAAAXAXQAXAXAAAmIAABzQAAAngXAYQgXAXgiAAgAgJBRIADAAQAIAAADgEQADgEAAgNIAAh6QAAgLgEgEQgDgDgHAAIgDAAg");
	this.shape_21.setTransform(-174.725,0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-184.8,-22.6,369.6,53.7), null);


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
	this.instance.setTransform(-212,71,1.7397,1.7397);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-212,71,424.5,81.80000000000001), null);


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
	this.instance = new lib._300x250();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_mc, new cjs.Rectangle(-150,-125,300,250), null);


// stage content:
(lib.bigticketawarenesshtml5300x250 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(284.85,238.55,0.0192,0.0192,0,0,0,495.3,461.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcArIgBgTQAKADAGAAQAFAAADgCQACgBABgHIgDABQgKAAgFgFQgFgFACgLIAJgpIASAAIgHApQAAABAAABQAAAAAAABQABAAAAAAQABAAAAAAIACAAIAJgsIAUAAIgOBAQgCANgIAGQgGAGgMAAQgIAAgIgCg");
	this.shape.setTransform(270.1,240.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAtIAShZIATAAIgTBZg");
	this.shape_1.setTransform(266.325,237.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaArIAShYIATAAIgFAXIACAAQAMAAAEAFQAFAHgDALIgEAUQgDANgHAGQgGAGgLgBQgJAAgMgCgAgEAbIACAAIACgBIACgGIAEgSQABgDgBgBQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_2.setTransform(261.96,237.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAvIANhAIATAAIgOBAgAABgcQgBgDAAgFQABgFADgCQADgDAEAAQAEAAACADQACACgBAFQgBAFgDADQgDACgEAAQgEAAgCgCg");
	this.shape_3.setTransform(258.17,237.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAgIAFgTQAJADAGAAQAGAAAAgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgCgBIgCgBIgCgBQgMgGADgPQABgIAHgGQAGgFAJgBQAIABAJACIgGASQgHgCgFAAQgFAAgBACIABADIADACIADABQAHADADAEQACAFgBAHQgDALgGAFQgIAHgLAAQgJgBgIgCg");
	this.shape_4.setTransform(254.175,238.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAiIAJgtQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgDABIgJAwIgUAAIAOg/QANgEAJAAQAWAAgEAUIgKAvg");
	this.shape_5.setTransform(249.1564,238.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAKIAEgTQAFgYAVAAQAWAAgFAYIgEATQgFAYgVAAQgWAAAFgYgAAAgJIgDATQgCAGADAAQACAAAAgGIAFgTQABgGgCAAQgDAAgBAGg");
	this.shape_6.setTransform(244.15,238.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAuIAThaIAVgBQAMAAAEAFQAFAHgDAMIgEAUQgDAMgHAGQgGAGgLgBIgCAAIgFAYgAgBAEIABAAIADgBIACgFIAEgSQABgEgBgBQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgCAAg");
	this.shape_7.setTransform(238.585,240.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAgIAFgTQAJADAGAAQAGAAAAgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgCgBIgCgBIgCgBQgMgGADgPQABgIAHgGQAGgFAJgBQAIABAJACIgGASQgHgCgFAAQgFAAgBACIABADIADACIADABQAHADADAEQACAFgBAHQgDALgGAFQgIAHgLAAQgJgBgIgCg");
	this.shape_8.setTransform(233.925,238.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAcQgFgGACgNIAEgSQADgNAHgGQAGgFALAAQAKAAAEAFQAEAGgDANIgDAPIgXAAIAAADQgCAHAJAAIAJgBIgCASIgNABQgNAAgFgGgAAAgLIAAAFIAEAAIABgFIABgEIgCgBQgDAAgBAFg");
	this.shape_9.setTransform(229.3104,238.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAtIAAgiIgBAAIgHAiIgVAAIAThZIAVAAQAPAAAEAGQAEAGgDANIgBAGQgDANgHAFIABAogAAAgFIABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIACgFIABgIQAAgBAAAAQABgBAAgBQAAAAgBgBQAAAAAAAAIgDgBIgBAAg");
	this.shape_10.setTransform(223.7481,237.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcArIgBgTQAKADAHAAQAFAAACgCQABgBACgHIgDABQgKAAgFgFQgFgFADgLIAIgpIATAAIgIApQAAABAAABQAAAAAAABQABAAAAAAQABAAAAAAIACAAIAJgsIAUAAIgOBAQgDANgHAGQgGAGgMAAQgHAAgJgCg");
	this.shape_11.setTransform(216.8,240.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAdQgEgFACgKIAAgBQACgJAHgFQAGgFAKAAIADAAIABgCQABgEgCgCQgBgBgEAAQgGAAgJADIAJgTIAGgCIAHAAQANAAAEAFQAEAGgCALIgJAqQgPADgIAAQgKAAgFgFgAgCAHIgCAEIAAACIAAAEIADABIABAAIABgMIgBAAIgCABg");
	this.shape_12.setTransform(211.5397,238.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAtIAShZIATAAIgTBZg");
	this.shape_13.setTransform(207.825,237.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeAtIAThZIAVAAQAOAAAEAGQAFAGgDANIgBAHQgDANgIAFQgIAGgLAAIgBAAIgHAhgAAAgEIABAAIAEgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBABgBIACgJQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgBAAg");
	this.shape_14.setTransform(203.4946,237.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAVAAQAIAAAIAHQAGAHAAALIAAAhQAAALgGAHQgIAGgIABgAgCAYIABAAIACgCIABgEIAAgjIgBgFIgCgBIgBAAg");
	this.shape_15.setTransform(163.95,238.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRAqIAAhTIAjAAIAAASIgRAAIAAAPIAOAAIAAAQIgOAAIAAAQIASAAIAAASg");
	this.shape_16.setTransform(159.5,238.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAGAqIgBgQIgJAAIgBAQIgTAAIALhTIAbAAIALBTgAAAgOIgCAWIAFAAIgDgWIAAgGg");
	this.shape_17.setTransform(154.675,238.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAqIgFg0IAAA0IgTAAIAAhTIAZAAIAEAzIAAgzIAUAAIAABTg");
	this.shape_18.setTransform(147.9,238.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAqIAAhTIASAAIAABTg");
	this.shape_19.setTransform(143.9,238.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAnIAGgRQAHADAEAAQAFAAABgFIAAgBIgCgFIgFgGIgDgEQgGgFgCgFQgDgFgBgHIAAgBQABgKAFgHQAGgGAJAAQAIAAAJAEIgFAQIgJgCQgFAAAAAGIAAABIAAACIABABIABACIACACIABACIAFAEQAFAFADAEQACAFABAJQgBALgFAGQgGAHgJAAQgKAAgKgEg");
	this.shape_20.setTransform(139.15,238.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSAqIAAhTIAkAAIAAASIgSAAIAAAPIAPAAIAAAQIgPAAIAAAQIASAAIAAASg");
	this.shape_21.setTransform(135.05,238.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUAqIAAgRIAVgwIgTAAIAAgSIAnAAIAAARIgVAwIAVAAIAAASg");
	this.shape_22.setTransform(130.55,238.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAqIAAhTIATAAIAABTg");
	this.shape_23.setTransform(126.9,238.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAEAqIgGggIgBAAIAAAgIgTAAIAAhTIAUAAQAMABAGAFQAEAGAAAMIAAAGQAAALgFAFIAJAlgAgDgFIABAAIACgBIABgDIAAgIIgBgFIgCgBIgBAAg");
	this.shape_24.setTransform(123,238.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAUAAQANABAFAFQAFAGAAAMIAAAHQAAALgGAFQgGAFgLAAIgBAAIAAAfgAgCgEIABAAIADgBIABgDIAAgJIgBgFIgDgBIgBAAg");
	this.shape_25.setTransform(117.825,238.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgHA1IAAhpIAPAAIAABpg");
	this.shape_26.setTransform(109.825,239.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAqIAAgYIgQg7IATAAIAFAcIAGgcIATAAIgPA7IAAAYg");
	this.shape_27.setTransform(101.675,238.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSAqIAAhTIASAAIAABAIATAAIAAATg");
	this.shape_28.setTransform(96.7,238.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAUAAQANABAFAFQAFAGAAAMIAAAHQAAALgGAFQgGAFgLAAIgBAAIAAAfgAgCgEIABAAIADgBIABgDIAAgJIgBgFIgDgBIgBAAg");
	this.shape_29.setTransform(91.925,238.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAUAAQANABAFAFQAFAGAAAMIAAAHQAAALgGAFQgGAFgLAAIgBAAIAAAfgAgCgEIABAAIADgBIABgDIAAgJIgBgFIgDgBIgBAAg");
	this.shape_30.setTransform(86.975,238.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAGAqIgBgQIgJAAIgBAQIgTAAIALhTIAbAAIALBTgAAAgOIgCAWIAFAAIgDgWIAAgGg");
	this.shape_31.setTransform(81.825,238.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgTAnIAEgRQAJADADAAQAGAAgBgFIAAgBIgBgFIgEgGIgFgEQgFgFgDgFQgCgFAAgHIAAgBQgBgKAHgHQAFgGAIAAQAJAAAJAEIgFAQIgIgCQgGAAAAAGIAAABIAAACIAAABIACACIACACIACACIADAEQAGAFADAEQACAFAAAJQABALgGAGQgGAHgJAAQgJAAgKgEg");
	this.shape_32.setTransform(75.65,238.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEASIgEgjIARAAIgDAjg");
	this.shape_33.setTransform(72.15,236.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgOAlQgGgHAAgMIAAgjQAAgMAGgGQAGgHALAAQAJAAAIAEIgHAPIgHgBQgHAAAAAJIAAAfQAAAEACADQACACAEAAIAHgBIAHAPQgIAEgKAAQgLAAgGgGg");
	this.shape_34.setTransform(68.85,238.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWAlQgGgFAAgLIAAgKQAAgGADgEQACgCAFgBQgEgHAAgGIAAgGQAAgLAEgFQAEgFALAAQAIAAADAFQAEAFAAALIAAAFQAAANgLADIAHAKIgBgKIAPAAIAAAFIAAAEIAAAEIAAAEIgBADIgBADIgCADIALAQIgTAAIgCgDQgFAEgGAAQgNAAgGgGgAgKANIAAAFQAAAFACACQACACAEAAIACgBIgKgPgAgFgYIgBABIAAACIAAAJIAAADQAEgBAAgFIAAgGIAAgDIgCgBIgBABg");
	this.shape_35.setTransform(63.225,238.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJAqIAAhAIgLAAIAAgTIApAAIAAATIgMAAIAABAg");
	this.shape_36.setTransform(57.825,238.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgHA1IAAhpIAPAAIAABpg");
	this.shape_37.setTransform(50.075,239.575);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgEAqIAAg9IgJACIAAgSIAbgGIAABTg");
	this.shape_38.setTransform(43.975,238.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgPAlQgFgGgBgMIAAgFQAAgJAGgFQgEgFAAgIIAAgFQAAgLAFgGQAGgHAIAAQAJAAAFAHQAGAGAAALIAAAFQAAAIgDAFQAEAFAAAJIAAAFQABALgGAHQgGAGgKAAQgIAAgHgGgAgBAKIAAAMQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIAAgMQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAABAAAAgAgBgVIAAAOIABACIAAABIACgBIAAgCIAAgOQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABg");
	this.shape_39.setTransform(39.9,238.425);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgUAqIAAgRQAXgZAAgOIAAgBQAAgEgCgCQgCgCgDAAIgKACIgHgPQAKgFALAAQAKAAAFAHQAGAIABAKIAAABQAAAFgCAGQgCAFgEAGIgHAJIgGAJIASAAIAAARg");
	this.shape_40.setTransform(35.1,238.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgUAnIAGgRQAHADAEAAQAFAAABgFIAAgBIgCgFIgFgGIgDgEQgGgFgCgFQgEgFAAgHIAAgBQABgKAFgHQAGgGAJAAQAHAAAKAEIgFAQIgJgCQgFAAAAAGIAAABIAAACIABABIABACIACACIABACIAFAEQAGAFACAEQACAFABAJQgBALgFAGQgGAHgJAAQgKAAgKgEg");
	this.shape_41.setTransform(29.25,238.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgSAqIAAhTIAkAAIAAASIgRAAIAAAPIAOAAIAAAQIgOAAIAAAQIASAAIAAASg");
	this.shape_42.setTransform(25.2,238.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgJAqIAAhTIASAAIAABTg");
	this.shape_43.setTransform(21.75,238.45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AADAqIgFggIgCAAIAAAgIgTAAIAAhTIAVAAQAMABAGAFQAEAGAAAMIAAAGQABALgHAFIAJAlgAgEgFIABAAIADgBIABgDIAAgIIgBgFIgDgBIgBAAg");
	this.shape_44.setTransform(17.85,238.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgRAqIAAhTIAjAAIAAASIgRAAIAAAPIAOAAIAAAQIgOAAIAAAQIASAAIAAASg");
	this.shape_45.setTransform(13.25,238.45);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgTAnIAEgRQAJADADAAQAFAAAAgFIAAgBIgBgFIgFgGIgEgEQgFgFgDgFQgCgFAAgHIAAgBQAAgKAFgHQAGgGAIAAQAJAAAJAEIgFAQIgIgCQgGAAAAAGIAAABIAAACIABABIABACIACACIACACIADAEQAGAFADAEQADAFgBAJQABALgGAGQgGAHgJAAQgKAAgJgEg");
	this.shape_46.setTransform(8.95,238.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(304));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(149.85,19,0.4261,0.4261,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(209).to({alpha:0},16).wait(79));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(149.85,198.4,0.2992,0.2992,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(225).to({_off:false},0).wait(1).to({regX:0.2,regY:111.9,y:231.75,alpha:0.0032},0).wait(1).to({y:231.55,alpha:0.0145},0).wait(1).to({y:231.15,alpha:0.0371},0).wait(1).to({y:230.4,alpha:0.077},0).wait(1).to({y:229.1,alpha:0.1467},0).wait(1).to({y:226.9,alpha:0.2672},0).wait(1).to({y:224.15,alpha:0.4164},0).wait(1).to({y:221.4,alpha:0.5648},0).wait(1).to({y:219.1,alpha:0.6887},0).wait(1).to({y:217.3,alpha:0.7859},0).wait(1).to({y:215.9,alpha:0.8625},0).wait(1).to({y:214.8,alpha:0.9229},0).wait(1).to({y:214.05,alpha:0.9628},0).wait(1).to({y:213.65,alpha:0.9857},0).wait(1).to({y:213.45,alpha:0.9969},0).wait(1).to({regX:0.1,regY:0.1,y:179.95,alpha:1},0).wait(63));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(-131.2,112.6,0.4156,0.4156,0,0,0,-0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(209).to({_off:false},0).wait(1).to({regX:0.1,regY:-174.6,x:-130.15,y:40},0).wait(1).to({x:-127},0).wait(1).to({x:-120.65,y:40.05},0).wait(1).to({x:-109.45,y:40.15},0).wait(1).to({x:-89.85,y:40.25},0).wait(1).to({x:-56,y:40.5},0).wait(1).to({x:-14.05,y:40.8},0).wait(1).to({x:27.6,y:41.1},0).wait(1).to({x:62.45,y:41.35},0).wait(1).to({x:89.75,y:41.55},0).wait(1).to({x:111.25,y:41.7},0).wait(1).to({x:128.25,y:41.8},0).wait(1).to({x:139.45,y:41.9},0).wait(1).to({x:145.9,y:41.95},0).wait(1).to({x:149.05},0).wait(1).to({regY:0.1,x:149.85,y:114.6},0).wait(79));

	// main_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(148.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:-0.1,regY:-3.6,x:148.25,y:219.75,alpha:0.0037},0).wait(1).to({y:219.6,alpha:0.0167},0).wait(1).to({y:219.3,alpha:0.0435},0).wait(1).to({y:218.8,alpha:0.0919},0).wait(1).to({x:148.2,y:217.85,alpha:0.1816},0).wait(1).to({x:148.15,y:216.3,alpha:0.3248},0).wait(1).to({x:148.1,y:214.6,alpha:0.4878},0).wait(1).to({x:148.05,y:213,alpha:0.6345},0).wait(1).to({x:148,y:211.8,alpha:0.7499},0).wait(1).to({y:210.85,alpha:0.8388},0).wait(1).to({x:147.95,y:210.1,alpha:0.9088},0).wait(1).to({y:209.6,alpha:0.9564},0).wait(1).to({y:209.3,alpha:0.9834},0).wait(1).to({y:209.15,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:148.05,y:211.05,alpha:1},0).wait(68).to({x:148.4,y:211.25},0).wait(1).to({regX:-0.1,regY:-3.6,x:148.3,y:209.35,alpha:0.9963},0).wait(1).to({y:209.5,alpha:0.9833},0).wait(1).to({y:209.8,alpha:0.9565},0).wait(1).to({y:210.3,alpha:0.9081},0).wait(1).to({y:211.2,alpha:0.8184},0).wait(1).to({y:212.7,alpha:0.6752},0).wait(1).to({y:214.4,alpha:0.5122},0).wait(1).to({y:215.95,alpha:0.3655},0).wait(1).to({y:217.15,alpha:0.2501},0).wait(1).to({y:218.1,alpha:0.1612},0).wait(1).to({y:218.8,alpha:0.0912},0).wait(1).to({y:219.3,alpha:0.0436},0).wait(1).to({y:219.6,alpha:0.0166},0).wait(1).to({y:219.75,alpha:0.0036},0).wait(1).to({regX:0.1,regY:0.1,x:148.4,y:221.7,alpha:0},0).to({_off:true},74).wait(117));

	// sub_caption
	this.instance_5 = new lib.daily_caption_mc();
	this.instance_5.setTransform(148.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:-1.1,x:147.75,y:221.65,alpha:0.0037},0).wait(1).to({y:221.5,alpha:0.0167},0).wait(1).to({y:221.2,alpha:0.0435},0).wait(1).to({y:220.7,alpha:0.0919},0).wait(1).to({x:147.7,y:219.75,alpha:0.1816},0).wait(1).to({x:147.65,y:218.2,alpha:0.3248},0).wait(1).to({x:147.6,y:216.5,alpha:0.4878},0).wait(1).to({x:147.55,y:214.9,alpha:0.6345},0).wait(1).to({x:147.5,y:213.7,alpha:0.7499},0).wait(1).to({y:212.75,alpha:0.8388},0).wait(1).to({x:147.45,y:212,alpha:0.9088},0).wait(1).to({y:211.5,alpha:0.9564},0).wait(1).to({y:211.2,alpha:0.9834},0).wait(1).to({y:211.05,alpha:0.9964},0).wait(1).to({regX:0.1,x:148.05,alpha:1},0).wait(96).to({x:148.4,y:211.25},0).wait(1).to({regX:-1.1,x:147.8,alpha:0.9963},0).wait(1).to({y:211.4,alpha:0.9833},0).wait(1).to({y:211.7,alpha:0.9565},0).wait(1).to({y:212.2,alpha:0.9081},0).wait(1).to({y:213.1,alpha:0.8184},0).wait(1).to({y:214.6,alpha:0.6752},0).wait(1).to({y:216.3,alpha:0.5122},0).wait(1).to({y:217.85,alpha:0.3655},0).wait(1).to({y:219.05,alpha:0.2501},0).wait(1).to({y:220,alpha:0.1612},0).wait(1).to({y:220.7,alpha:0.0912},0).wait(1).to({y:221.2,alpha:0.0436},0).wait(1).to({y:221.5,alpha:0.0166},0).wait(1).to({y:221.65,alpha:0.0036},0).wait(1).to({regX:0.1,x:148.4,y:221.7,alpha:0},0).wait(80));

	// second_prize
	this.instance_6 = new lib.second_prize_mc();
	this.instance_6.setTransform(150,133.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({regX:0.3,regY:1.8,x:150.3,y:135,alpha:0.0037},0).wait(1).to({y:134.8,alpha:0.0167},0).wait(1).to({y:134.35,alpha:0.0435},0).wait(1).to({y:133.5,alpha:0.0919},0).wait(1).to({y:132,alpha:0.1816},0).wait(1).to({y:129.55,alpha:0.3248},0).wait(1).to({y:126.8,alpha:0.4878},0).wait(1).to({y:124.3,alpha:0.6345},0).wait(1).to({y:122.35,alpha:0.7499},0).wait(1).to({y:120.8,alpha:0.8388},0).wait(1).to({y:119.65,alpha:0.9088},0).wait(1).to({y:118.8,alpha:0.9564},0).wait(1).to({y:118.35,alpha:0.9834},0).wait(1).to({y:118.15,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:150,y:116.3,alpha:1},0).wait(97).to({regX:0.3,regY:1.8,scaleX:0.9988,scaleY:0.9988,x:150.5,y:118.15},0).wait(1).to({scaleX:0.9948,scaleY:0.9948,x:151.2,y:118.4},0).wait(1).to({scaleX:0.9864,scaleY:0.9864,x:152.7,y:118.9},0).wait(1).to({scaleX:0.9714,scaleY:0.9714,x:155.35,y:119.8},0).wait(1).to({scaleX:0.9434,scaleY:0.9434,x:160.35,y:121.5},0).wait(1).to({scaleX:0.8987,scaleY:0.8987,x:168.25,y:124.2},0).wait(1).to({scaleX:0.8479,scaleY:0.8479,x:177.3,y:127.35},0).wait(1).to({scaleX:0.8022,scaleY:0.8022,x:185.45,y:130.1},0).wait(1).to({scaleX:0.7662,scaleY:0.7662,x:191.85,y:132.3},0).wait(1).to({scaleX:0.7384,scaleY:0.7384,x:196.75,y:133.95},0).wait(1).to({scaleX:0.7166,scaleY:0.7166,x:200.6,y:135.3},0).wait(1).to({scaleX:0.7018,scaleY:0.7018,x:203.25,y:136.15},0).wait(1).to({scaleX:0.6933,scaleY:0.6933,x:204.75,y:136.7},0).wait(1).to({scaleX:0.6893,scaleY:0.6893,x:205.5,y:136.95},0).wait(1).to({regY:0.2,scaleX:0.6882,scaleY:0.6882,y:135.8},0).wait(80));

	// promo
	this.instance_7 = new lib.promo_mc();
	this.instance_7.setTransform(295.65,116.65,0.4337,0.4337,0,0,0,0.1,0);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0.3,regY:-7.4,x:295.2,y:113.45,alpha:0.0037},0).wait(1).to({x:293.3,alpha:0.0167},0).wait(1).to({x:289.4,alpha:0.0435},0).wait(1).to({x:282.35,alpha:0.0919},0).wait(1).to({x:269.25,alpha:0.1816},0).wait(1).to({x:248.35,alpha:0.3248},0).wait(1).to({x:224.6,alpha:0.4878},0).wait(1).to({x:203.2,alpha:0.6345},0).wait(1).to({x:186.4,alpha:0.7499},0).wait(1).to({x:173.45,alpha:0.8388},0).wait(1).to({x:163.25,alpha:0.9088},0).wait(1).to({x:156.3,alpha:0.9564},0).wait(1).to({x:152.35,alpha:0.9834},0).wait(1).to({x:150.45,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0,x:149.85,y:116.65,alpha:1},0).wait(83).to({alpha:0},15).wait(97).to({regX:0.3,regY:-7.4,scaleX:0.4332,scaleY:0.4332,x:149.7,y:113.5,alpha:0.0037},0).wait(1).to({scaleX:0.4316,scaleY:0.4316,x:148.8,y:113.8,alpha:0.0167},0).wait(1).to({scaleX:0.4282,scaleY:0.4282,x:147,y:114.4,alpha:0.0435},0).wait(1).to({scaleX:0.4221,scaleY:0.4221,x:143.75,y:115.55,alpha:0.0919},0).wait(1).to({scaleX:0.4107,scaleY:0.4107,x:137.65,y:117.55,alpha:0.1816},0).wait(1).to({scaleX:0.3925,scaleY:0.3925,x:128,y:120.8,alpha:0.3248},0).wait(1).to({scaleX:0.3719,scaleY:0.3719,x:117,y:124.5,alpha:0.4878},0).wait(1).to({scaleX:0.3533,scaleY:0.3533,x:107.1,y:127.85,alpha:0.6345},0).wait(1).to({scaleX:0.3386,scaleY:0.3386,x:99.3,y:130.45,alpha:0.7499},0).wait(1).to({scaleX:0.3274,scaleY:0.3274,x:93.3,y:132.5,alpha:0.8388},0).wait(1).to({scaleX:0.3185,scaleY:0.3185,x:88.6,y:134.1,alpha:0.9088},0).wait(1).to({scaleX:0.3125,scaleY:0.3125,x:85.4,y:135.15,alpha:0.9564},0).wait(1).to({scaleX:0.309,scaleY:0.309,x:83.55,y:135.75,alpha:0.9834},0).wait(1).to({scaleX:0.3074,scaleY:0.3074,x:82.7,y:136.1,alpha:0.9964},0).wait(1).to({regX:0.4,regY:0,scaleX:0.3069,scaleY:0.3069,x:82.4,y:138.45,alpha:1},0).wait(80));

	// background
	this.instance_8 = new lib.background_mc();
	this.instance_8.setTransform(149.85,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(304));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-53.9,125,419.59999999999997,125);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_2ndprize.png", id:"_2ndprize"},
		{src:"images/_300x250.jpg", id:"_300x250"},
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