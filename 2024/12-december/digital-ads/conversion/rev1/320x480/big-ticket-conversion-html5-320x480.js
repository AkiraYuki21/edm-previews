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
	this.instance.setTransform(-193,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-193,-104,386,208), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgRCOQgIgEgGgHQgFgHAAgMQAAgPALgIQAKgJAPAAQAQAAALAJQAKAIAAAPQAAAMgFAHQgGAHgHAEQgJADgKAAQgIAAgJgDgAggAxIAAjBIBBAAIAADBg");
	this.shape.setTransform(56,20.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag4CAQgTgUAAgoIAAiHQAAgZALgSQALgSATgJQATgJAYgBQAQAAASAFQARAFAQAIIgYA5QgIgEgJgDQgJgCgKAAQgNAAgFAHQgGAHAAAPIAAB8QAAAIACADQADADAEAAIAFgBIADgBIAAhmIA+AAIAACRIgWALQgLAFgLACQgLADgOAAQgnAAgTgUg");
	this.shape_1.setTransform(41.175,20.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_2.setTransform(28.175,20.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMCPIAAkdIBIAAQAWAAASAHQARAHAKAQQAKAPAAAZIAAAHQABAVgHAPQgIAOgQAHQARAGAIANQAJAOAAAZIAAARQgBAZgJARQgJARgRAJQgRAIgXAAgAgKBRIAEAAQAHAAADgEQADgEAAgHIAAgdQAAgIgDgEQgCgEgIAAIgEAAgAgKgfIAFAAQAHAAADgEQADgEAAgHIAAgSQAAgIgCgEQgDgEgIAAIgFAAg");
	this.shape_3.setTransform(15.275,20.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAACPIgSi0IAAC0IhCAAIAAkdIBWAAIARCwIAAiwIBCAAIAAEdg");
	this.shape_4.setTransform(-7.575,20.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_5.setTransform(-21.475,20.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANCPIgNirIgLCrIhVAAIgVkdIBFAAIAEDbIATjbIA0AAIATDbIADjbIBFAAIgVEdg");
	this.shape_6.setTransform(-38.325,20.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEE400").s().p("Ag3A8IAnh3IBIAAIg3B3g");
	this.shape_7.setTransform(102.15,-5.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEE400").s().p("AAMCPIgWhtIgFAAIAABtIhCAAIAAkdIBHAAQAfAAASAKQASAKAGARQAIASgBAYIAAAVQAAAWgGAPQgFAOgKAIIAgB+gAgPgSIAEAAQAIAAADgEQADgDAAgKIAAgcQAAgJgDgEQgDgEgIAAIgEAAg");
	this.shape_8.setTransform(88.45,-19.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEE400").s().p("Ag+CPIAAkdIB9AAIAAA9Ig9AAIAAAxIAyAAIAAA8IgyAAIAAA2IA9AAIAAA9g");
	this.shape_9.setTransform(72.525,-19.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEE400").s().p("AhMCPIAAkdIBIAAQAWAAASAHQARAHAKAQQAKAPAAAZIAAAHQABAVgHAPQgIAOgQAHQARAGAIANQAJAOAAAZIAAARQgBAZgJARQgJARgRAJQgRAIgXAAgAgKBRIAEAAQAHAAADgEQADgEAAgHIAAgdQAAgIgDgEQgCgEgIAAIgEAAgAgKgfIAFAAQAHAAADgEQADgEAAgHIAAgSQAAgIgCgEQgDgEgIAAIgFAAg");
	this.shape_10.setTransform(56.625,-19.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEE400").s().p("AAvCPIAAjVIgDAgIgTC1IgxAAIgTi1IgDggIAADVIhAAAIAAkdIBkAAIAJCHIABAVIACgVIAKiHIBjAAIAAEdg");
	this.shape_11.setTransform(35.725,-19.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEE400").s().p("Ag+CPIAAkdIB9AAIAAA9Ig9AAIAAAxIAyAAIAAA8IgyAAIAAA2IA9AAIAAA9g");
	this.shape_12.setTransform(16.925,-19.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEE400").s().p("AAKCTQgoAAgVgVQgVgXAAgqIAAh6QAAgqAVgWQAVgVAogBIAAAAQARAAAOADQAOADAMAGIgXA1QgGgCgGgBIgLgBIAAAAQgNAAgHAJQgFAHAAAQIAABtQAAAPAHAIQAIAIANAAIABAAIALgBIANgEIAYA1QgPAGgPAEQgPAEgSgBg");
	this.shape_13.setTransform(2.625,-19.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEE400").s().p("Ag+CPIAAkdIB9AAIAAA9Ig9AAIAAAxIAyAAIAAA8IgyAAIAAA2IA9AAIAAA9g");
	this.shape_14.setTransform(-12.425,-19.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEE400").s().p("AhLCPIAAkdIBHAAQAWAAASAKQASAKALATQALATAAAaIAABzQAAAbgLATQgLATgSALQgSAKgWAAgAgJBRIACAAQAKAAACgEQADgFAAgMIAAh6QAAgMgEgDQgEgDgHAAIgCAAg");
	this.shape_15.setTransform(-28.425,-19.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEE400").s().p("AgmCQQgRgEgPgGIARg8IAWAJQAJADAJAAQALAAAFgFQAGgEAAgKIAAgBQAAgIgGgJQgFgKgOgNIgMgMQgMgMgJgKQgIgMgFgNQgEgOAAgTIAAgBQAAgmATgUQATgVAhAAQANAAAQADQAQADAPAHIgQA3IgSgFIgNgCQgLAAgGAFQgFAFAAAJIAAABQAAAHAGAHIARATIAGAHIAHAGQAMAMAJAKQAJALAEAPQAFAOAAAVIAAAAQAAAagJATQgKATgQAKQgRAJgWAAQgSAAgRgDg");
	this.shape_16.setTransform(-49.075,-19.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEE400").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_17.setTransform(-60.925,-19.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEE400").s().p("AAJCPIAAhxIgRAAIAABxIhCAAIAAkdIBCAAIAABsIARAAIAAhsIBCAAIAAEdg");
	this.shape_18.setTransform(-73.775,-19.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEE400").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_19.setTransform(-89.45,-19.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-98.4,-42.2,208.8,93.30000000000001), null);


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
	this.instance.setTransform(-139,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-139,-143.5,278,287), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgRCOQgJgEgEgHQgGgHAAgMQAAgPAKgIQALgJAPAAQAQAAAKAJQALAIAAAPQAAAMgFAHQgFAHgJAEQgIADgKAAQgJAAgIgDgAgfAxIAAjBIBAAAIAADBg");
	this.shape.setTransform(113.1,-10.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_1.setTransform(98.85,-10.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_2.setTransform(86.975,-10.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVCPIgFg4IgfAAIgFA4IhAAAIAmkdIBdAAIAnEdgAAJAaIgIhMIgBgXIAAAXIgJBMIASAAg");
	this.shape_3.setTransform(73.4,-10.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANCPIgNirIgLCrIhVAAIgVkdIBFAAIAEDbIATjbIA0AAIATDbIADjbIBFAAIgVEdg");
	this.shape_4.setTransform(51.625,-10.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVCPIgFg4IgfAAIgFA4IhAAAIAmkdIBdAAIAnEdgAAJAaIgIhMIgBgXIgBAXIgIBMIASAAg");
	this.shape_5.setTransform(29.85,-10.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEE400").s().p("Ag3A8IAnh3IBHAAIg3B3g");
	this.shape_6.setTransform(9.25,3.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEE400").s().p("AgmCQQgRgEgPgGIARg8IAWAJQAJADAJAAQALAAAFgFQAGgEAAgKIAAgBQAAgIgGgJQgFgKgOgNIgMgMQgMgMgJgKQgIgMgFgNQgEgOAAgTIAAgBQAAgmATgUQATgVAhAAQANAAAQADQAQADAPAHIgQA3IgSgFIgNgCQgLAAgGAFQgFAFAAAJIAAABQAAAHAGAHIARATIAGAHIAHAGQAMAMAJAKQAJALAEAPQAFAOAAAVIAAAAQAAAagJATQgKATgQAKQgRAJgWAAQgSAAgRgDg");
	this.shape_7.setTransform(-2.725,-10.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEE400").s().p("AAACPIgSi0IAAC0IhCAAIAAkdIBWAAIARCwIAAiwIBCAAIAAEdg");
	this.shape_8.setTransform(-19.775,-10.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEE400").s().p("AAACTQglAAgTgUQgTgVAAgmIAAiHQAAgoAUgUQAUgUAjABIAAAAQAmAAATAUQATAVAAAmIAACHQAAAogUAUQgUATgjAAgAgGhSQgCADAAAHIAACSQAAAGACADQACADAEAAIAAAAQAFAAACgDQACgDAAgGIAAiSQAAgHgCgDQgDgDgEAAIAAAAQgEAAgCADg");
	this.shape_9.setTransform(-37.925,-10.5756);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEE400").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_10.setTransform(-50.975,-10.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEE400").s().p("AhCCPIAAkdIBCAAIAADdIBDAAIAABAg");
	this.shape_11.setTransform(-63.4,-10.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEE400").s().p("AhCCPIAAkdIBCAAIAADdIBDAAIAABAg");
	this.shape_12.setTransform(-79.25,-10.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEE400").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_13.setTransform(-91.375,-10.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEE400").s().p("AAvCPIAAjVIgDAgIgTC1IgxAAIgTi1IgDggIAADVIhAAAIAAkdIBkAAIAJCHIABAVIACgVIAKiHIBjAAIAAEdg");
	this.shape_14.setTransform(-107.825,-10.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_sub_caption_mc, new cjs.Rectangle(-121.4,-33.2,242.9,53.7), null);


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
	this.instance.setTransform(-188,-22,1.5422,1.5422);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-188,-22,376.3,72.5), null);


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


// stage content:
(lib.bigticketconversionhtml5320x480 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(303.8,465.25,0.0213,0.0213,0,0,0,495.3,464.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAzIgHgBIgEgBIgCgWIAKADIAJABIAFgBIAEgDIACgHIgCAAIgCAAQgGAAgGgCQgEgCgDgGQgCgFABgIIAKgwIAWAAIgIAvIAAADIACABIABAAIAAAAIAGgaIAGgZIAWAAIgQBJQgCAPgJAIQgHAHgNAAIgHgBg");
	this.shape.setTransform(287.45,467.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVA0IAVhnIAWAAIgWBng");
	this.shape_1.setTransform(283.075,464.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAzIgMgCIAVhkIAWAAIgGAZIADAAQAOAAAEAHQAFAHgDAOIgFAWQgDAOgIAIQgHAGgNAAIgMgBgAgEAfIABAAQABAAABAAQAAAAABAAQAAgBAAAAQAAAAAAAAQACgCAAgFIAFgVQABgDgBgCQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBAAg");
	this.shape_2.setTransform(278.01,464.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUA2IAPhJIAWAAIgQBJgAABghQgBgCAAgHQABgFADgDQADgDAFAAQAFAAADADQACADgCAFQgBAHgDACQgEAEgFAAQgFAAgBgEg");
	this.shape_3.setTransform(273.7071,464.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAnIgMgCIAHgWIAJADIAHAAIAGAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAgBAAAAIAAgDIgDgCIgCgBIgCgBQgIgEgCgEQgDgHACgJQABgFADgGQAEgFAGgDQAFgDAIAAIAIAAIALADIgGAUIgIgCIgHAAIgEAAIgCADIAAACIAEACIACABIACACQAFABACAEQAEACABADQABAFgBAHQgCAGgDAGQgEAGgHADQgHAEgJgBIgIAAg");
	this.shape_4.setTransform(269.075,465.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAnIAKg0IAAgDIgCAAIgCAAIgBAAIgLA3IgXAAIAQhIIAPgDIAMgCQALAAAFAFQAFAGgCAMIgMA2g");
	this.shape_5.setTransform(263.3667,465.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAhQgFgHADgPIAFgVQADgPAIgHQAIgHAMAAQAMAAAFAHQAFAHgDAPIgFAVQgDAPgIAHQgIAHgLAAQgNAAgFgHgAABgQIgBAFIgEAXIgBAFQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAIAAgFIAFgXIABgFQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_6.setTransform(257.575,465.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghA1IAWhnIAJgBIAIAAIAIgBQAOAAAEAHQAEAHgDAPIgFAWQgDANgHAIQgIAGgMAAIgDAAIgGAbgAgBAFIABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQABgCABgEIAFgVQABgEgBgCQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_7.setTransform(251.185,467);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAnIgMgCIAHgWIAJADIAHAAIAGAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAgBAAAAIAAgDIgDgCIgCgBIgCgBQgIgEgCgEQgDgHACgJQABgFADgGQAEgFAGgDQAFgDAIAAIAIAAIALADIgGAUIgIgCIgHAAIgEAAIgCADIAAACIAEACIACABIACACQAFABACAEQAEACABADQABAFgBAHQgCAGgDAGQgEAGgHADQgHAEgJgBIgIAAg");
	this.shape_8.setTransform(245.825,465.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAgQgFgHADgPIAEgUQADgPAIgHQAIgHAMAAQAMAAAEAHQAFAHgDAPIgEARIgaAAIgBAEQgBADACACQACACAFAAIAGAAIAFgBIgCAVIgKABIgHABQgNAAgHgIgAACgSIgCAFIAAAGIAEAAIACgGIAAgFQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAg");
	this.shape_9.setTransform(240.5571,465.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBA0IAAgoIgCAAIgIAoIgYAAIAWhnIAZAAQALAAAFAEQAGADABAHQACAGgDAJIgBAHQgCAIgDAGQgDAEgEADIACAugAAAgGIABAAQABAAABAAQABAAAAAAQABAAAAgBQAAAAABAAQACgCAAgDIACgKQABgEgBgBQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_10.setTransform(234.1781,464.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUAzIgGgBIgGgBIgBgWIAKADIAIABIAHgBIADgDIACgHIgCAAIgCAAQgGAAgFgCQgFgCgDgGQgCgFACgIIAKgwIAVAAIgIAvIgBADIADABIABAAIABAAIAGgaIAEgZIAXAAIgPBJQgEAPgHAIQgIAHgOAAIgGgBg");
	this.shape_11.setTransform(226.2,467.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAiQgFgHACgLIABgBQACgLAHgFQAHgGALAAIACAAIACAAIABgDQABgEgCgCQgBgCgFABIgIAAIgJADIALgWIAEgBIAFgBIAGAAQAKAAAFACQAGADABAGQABAGgCAIIgKAwIgOADIgNABQgMAAgEgFgAgCAIQgBAAAAABQAAAAAAABQgBAAAAABQAAABAAAAIgBADQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAIABAAIACgNIgBAAIgCABg");
	this.shape_12.setTransform(220.1142,465.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVA0IAVhnIAWAAIgWBng");
	this.shape_13.setTransform(215.875,464.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjA0IAWhnIAYAAQALAAAGAEQAGADABAHQABAGgCAJIgBAJQgDALgFAFQgFAGgHACQgHADgIAAIgBAAIgIAmgAAAgFIABAAIAFgBIACgFIACgLQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_14.setTransform(210.8667,464.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLAyIAAgcIgThHIAYAAIAGAhIAHghIAYAAIgUBHIAAAcg");
	this.shape_15.setTransform(130.875,466.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXAyIAAhjIAXAAIAABNIAYAAIAAAWg");
	this.shape_16.setTransform(124.825,466.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaAyIAAhjIAZAAQAKAAAGADQAHAEACAGQADAGAAAIIAAAJQgBALgDAFQgEAGgGACQgHACgHAAIgBAAIAAAlgAgCgEIAAAAQABAAABAAQAAAAAAgBQAAAAABAAQAAAAABgBIABgFIAAgLIgBgEQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBAAgBAAIAAAAg");
	this.shape_17.setTransform(119.025,466.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaAyIAAhjIAZAAQAKAAAGADQAHAEACAGQADAGAAAIIAAAJQgBALgDAFQgEAGgGACQgHACgHAAIgBAAIAAAlgAgCgEIAAAAQABAAABAAQAAAAAAgBQAAAAABAAQAAAAABgBIABgFIAAgLIgBgEQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBAAgBAAIAAAAg");
	this.shape_18.setTransform(112.975,466.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAIAyIgCgTIgLAAIgCATIgWAAIANhjIAhAAIANBjgAADAJIgDgaIAAgIIAAAIIgCAaIAFAAg");
	this.shape_19.setTransform(106.7,466.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNAyIgLgDIAGgVIAIADIAGABQAEAAABgCQACgBAAgEIAAAAQAAgDgCgDIgGgIIgEgEIgHgIQgDgEgCgEQgCgFAAgHQABgNAGgHQAHgIALAAIAKABIALAEIgGATIgGgBIgFgBQgEAAgCACQAAAAAAAAQAAABAAAAQAAABgBABQAAAAAAABIAAAAQAAADACADIAGAHIACACIACACIAIAHQADAEABAFQACAFAAAHQAAAKgDAGQgDAHgGADQgGADgHABQgHAAgGgCg");
	this.shape_20.setTransform(99.225,466.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGAWIgEgqIAVAAIgEAqg");
	this.shape_21.setTransform(95.05,463.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AADA0QgNAAgIgIQgGgHgBgQIAAgqQABgPAGgHQAIgIANAAIABAAIAKABIAKADIgJATIgEgBIgEgBQgEABgDADQgBACAAAGIAAAlQAAAFACAEQADACAEAAIAFAAIAEgCIAIATIgKADQgFACgGAAg");
	this.shape_22.setTransform(91.05,466.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgbAuQgIgHABgOIAAgMQAAgHADgFQAEgDAFgBIgEgJIgBgGIAAgHQAAgKACgFQACgGAFgDQAFgCAJAAQAHAAADACQAFADACAFQABAGAAAKIAAAGIgBAHQAAAEgDADQgDADgGACIAJAMIgCgFIAAgHIATAAIAAAMIgBAKIgDAJIAMATIgXAAIgCgDIgGADIgIACQgQAAgHgGgAgMAQIAAADIAAADQAAAFACADQACACAFAAIACAAIABAAIgMgTgAgGgeIgBAEIAAALIAAACIAAABIAEgCIABgEIAAgIIgBgEIgBgBIgCABg");
	this.shape_23.setTransform(84.15,466.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKAyIAAhNIgPAAIAAgWIAzAAIAAAWIgOAAIAABNg");
	this.shape_24.setTransform(77.575,466.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJBAIAAh/IATAAIAAB/g");
	this.shape_25.setTransform(68.275,467.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNAwQgFgEgEgGQgDgGAAgJIAAguQAAgIADgGQAEgHAFgEQAGgDAHAAQAIAAAGADQAGAEADAHQADAGAAAIIAAAuQAAAJgDAGQgDAGgGAEQgGADgIABQgHgBgGgDgAgBgcIAAACIAAA1IAAACIABABIAAAAQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAg1IAAgCIgCgBIAAAAIgBABg");
	this.shape_26.setTransform(58.55,466.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPAyIAQhOIgXAAIAAgVIAtAAIAAAVIgQBOg");
	this.shape_27.setTransform(52.875,466.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgYAzIAAgUIAOgRQAGgJAEgHQAEgJgBgGIAAgBQABgEgCgCQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAAAIgFgBIgHABIgGACIgHgUIALgDQAGgCAIAAQAIAAAGAEQAGAEADAHQADAHAAAJIAAAAQAAAIgDAHIgFAMIgJAMIgIAKIAWAAIAAAVg");
	this.shape_28.setTransform(47.55,465.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNAyIgLgDIAGgVIAIADIAGABQAEAAABgCQACgBAAgEIAAAAQAAgDgCgDIgGgIIgEgEIgHgIQgDgEgCgEQgCgFAAgHQABgNAGgHQAHgIALAAIAKABIALAEIgGATIgGgBIgFgBQgEAAgCACQAAAAAAAAQAAABAAAAQAAABgBABQAAAAAAABIAAAAQAAADACADIAGAHIACACIACACIAIAHQADAEABAFQACAFAAAHQAAAKgDAGQgDAHgGADQgGADgHABQgHAAgGgCg");
	this.shape_29.setTransform(40.475,466.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWAyIAAhjIAsAAIAAAVIgVAAIAAARIARAAIAAAVIgRAAIAAATIAVAAIAAAVg");
	this.shape_30.setTransform(35.5,466.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLAyIAAhjIAXAAIAABjg");
	this.shape_31.setTransform(31.375,466.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAEAyIgHgmIgBAAIAAAmIgYAAIAAhjIAZAAQAKAAAHADQAGAEACAGQADAGAAAIIAAAIQAAAHgCAGQgCAEgEADIAMAsgAgEgGIABAAQAAAAABAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBIAAgKQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgBAAg");
	this.shape_32.setTransform(26.625,466.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgVAyIAAhjIArAAIAAAVIgVAAIAAARIARAAIAAAVIgRAAIAAATIAWAAIAAAVg");
	this.shape_33.setTransform(21.05,466.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNAyIgLgDIAGgVIAIADIAGABQAEAAABgCQACgBAAgEIAAAAQAAgDgCgDIgGgIIgEgEIgHgIQgDgEgCgEQgCgFAAgHQABgNAGgHQAHgIALAAIAKABIALAEIgGATIgGgBIgFgBQgEAAgCACQAAAAAAAAQAAABAAAAQgBABAAABQAAAAAAABIAAAAQAAADACADIAGAHIACACIACACIAIAHQADAEABAFQACAFAAAHQAAAKgDAGQgDAHgGADQgGADgHABQgHAAgGgCg");
	this.shape_34.setTransform(15.775,466.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(283));

	// footer_bg
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5050F").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_35.setTransform(160,467.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(283));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(160,36.5,0.8182,0.8182);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(189).to({alpha:0},16).wait(78));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(160,380.95,0.5745,0.5745,0,0,0,0,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(205).to({_off:false},0).wait(1).to({regX:0.1,regY:14.2,x:160.05,y:388.9,alpha:0.0032},0).wait(1).to({y:388.5,alpha:0.0145},0).wait(1).to({y:387.7,alpha:0.0371},0).wait(1).to({y:386.3,alpha:0.077},0).wait(1).to({y:383.85,alpha:0.1467},0).wait(1).to({y:379.55,alpha:0.2672},0).wait(1).to({y:374.3,alpha:0.4164},0).wait(1).to({y:369.05,alpha:0.5648},0).wait(1).to({y:364.65,alpha:0.6887},0).wait(1).to({y:361.2,alpha:0.7859},0).wait(1).to({y:358.5,alpha:0.8625},0).wait(1).to({y:356.35,alpha:0.9229},0).wait(1).to({y:354.95,alpha:0.9628},0).wait(1).to({y:354.15,alpha:0.9857},0).wait(1).to({y:353.75,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:160,y:345.55,alpha:1},0).wait(62));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(-164.95,220,0.7981,0.7981);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(189).to({_off:false},0).wait(1).to({x:-163.9045},0).wait(1).to({x:-160.2473},0).wait(1).to({x:-152.8876},0).wait(1).to({x:-139.9255},0).wait(1).to({x:-117.2756},0).wait(1).to({x:-78.1384},0).wait(1).to({x:-29.632},0).wait(1).to({x:18.5898},0).wait(1).to({x:58.8494},0).wait(1).to({x:90.4415},0).wait(1).to({x:115.3153},0).wait(1).to({x:134.9538},0).wait(1).to({x:147.9212},0).wait(1).to({x:155.3556},0).wait(1).to({x:158.9796},0).wait(1).to({x:160},0).wait(78));

	// main_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(157.2,425.65);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:5.5,regY:0.3,x:162.65,y:425.85,alpha:0.0037},0).wait(1).to({y:425.6,alpha:0.0167},0).wait(1).to({y:425.05,alpha:0.0435},0).wait(1).to({y:424.05,alpha:0.0919},0).wait(1).to({y:422.2,alpha:0.1816},0).wait(1).to({x:162.6,y:419.2,alpha:0.3248},0).wait(1).to({y:415.85,alpha:0.4878},0).wait(1).to({x:162.55,y:412.8,alpha:0.6345},0).wait(1).to({y:410.45,alpha:0.7499},0).wait(1).to({x:162.5,y:408.6,alpha:0.8388},0).wait(1).to({y:407.15,alpha:0.9088},0).wait(1).to({y:406.2,alpha:0.9564},0).wait(1).to({y:405.6,alpha:0.9834},0).wait(1).to({y:405.35,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:157,y:405,alpha:1},0).wait(68).to({x:157.2,y:405.65},0).wait(1).to({regX:5.5,regY:0.3,x:162.7,y:406,alpha:0.9963},0).wait(1).to({y:406.25,alpha:0.9833},0).wait(1).to({y:406.8,alpha:0.9565},0).wait(1).to({y:407.75,alpha:0.9081},0).wait(1).to({y:409.55,alpha:0.8184},0).wait(1).to({y:412.4,alpha:0.6752},0).wait(1).to({y:415.7,alpha:0.5122},0).wait(1).to({y:418.6,alpha:0.3655},0).wait(1).to({y:420.9,alpha:0.2501},0).wait(1).to({y:422.7,alpha:0.1612},0).wait(1).to({y:424.1,alpha:0.0912},0).wait(1).to({y:425.05,alpha:0.0436},0).wait(1).to({y:425.6,alpha:0.0166},0).wait(1).to({y:425.85,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:157.2,y:425.65,alpha:0},0).to({_off:true},1).wait(169));

	// sub_caption
	this.instance_5 = new lib.daily_sub_caption_mc();
	this.instance_5.setTransform(157.2,425.65);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:-1.1,regY:-7.8,x:156.05,y:417.75,alpha:0.0037},0).wait(1).to({y:417.5,alpha:0.0167},0).wait(1).to({y:416.95,alpha:0.0435},0).wait(1).to({y:416,alpha:0.0919},0).wait(1).to({y:414.25,alpha:0.1816},0).wait(1).to({x:156,y:411.45,alpha:0.3248},0).wait(1).to({y:408.25,alpha:0.4878},0).wait(1).to({x:155.95,y:405.35,alpha:0.6345},0).wait(1).to({y:403.1,alpha:0.7499},0).wait(1).to({x:155.9,y:401.35,alpha:0.8388},0).wait(1).to({y:399.95,alpha:0.9088},0).wait(1).to({y:399.05,alpha:0.9564},0).wait(1).to({y:398.5,alpha:0.9834},0).wait(1).to({y:398.25,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:157,y:406,alpha:1},0).wait(61).to({x:157.2,y:405.65},0).wait(1).to({regX:-1.1,regY:-7.8,x:156.1,y:397.9,alpha:0.9968},0).wait(1).to({y:398.1,alpha:0.9855},0).wait(1).to({y:398.55,alpha:0.9629},0).wait(1).to({y:399.35,alpha:0.923},0).wait(1).to({y:400.75,alpha:0.8533},0).wait(1).to({y:403.15,alpha:0.7328},0).wait(1).to({y:406.15,alpha:0.5836},0).wait(1).to({y:409.1,alpha:0.4352},0).wait(1).to({y:411.6,alpha:0.3113},0).wait(1).to({y:413.55,alpha:0.2141},0).wait(1).to({y:415.05,alpha:0.1375},0).wait(1).to({y:416.3,alpha:0.0771},0).wait(1).to({y:417.1,alpha:0.0372},0).wait(1).to({y:417.55,alpha:0.0143},0).wait(1).to({y:417.75,alpha:0.0031},0).wait(1).to({regX:0,regY:0,x:157.2,y:425.65,alpha:0},0).wait(93));

	// second_prize_mc
	this.instance_6 = new lib.second_prize_mc();
	this.instance_6.setTransform(164,254);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({y:253.9078,alpha:0.0037},0).wait(1).to({y:253.5815,alpha:0.0167},0).wait(1).to({y:252.9135,alpha:0.0435},0).wait(1).to({y:251.7035,alpha:0.0919},0).wait(1).to({y:249.4609,alpha:0.1816},0).wait(1).to({y:245.8801,alpha:0.3248},0).wait(1).to({y:241.8056,alpha:0.4878},0).wait(1).to({y:238.1386,alpha:0.6345},0).wait(1).to({y:235.2522,alpha:0.7499},0).wait(1).to({y:233.0302,alpha:0.8388},0).wait(1).to({y:231.2809,alpha:0.9088},0).wait(1).to({y:230.0901,alpha:0.9564},0).wait(1).to({y:229.4141,alpha:0.9834},0).wait(1).to({y:229.0901,alpha:0.9964},0).wait(1).to({y:229,alpha:1},0).wait(62).to({y:228.9035,alpha:0.9968},0).wait(1).to({y:228.5658,alpha:0.9855},0).wait(1).to({y:227.8864,alpha:0.9629},0).wait(1).to({y:226.6897,alpha:0.923},0).wait(1).to({y:224.5986,alpha:0.8533},0).wait(1).to({y:220.9854,alpha:0.7328},0).wait(1).to({y:216.5072,alpha:0.5836},0).wait(1).to({y:212.0553,alpha:0.4352},0).wait(1).to({y:208.3384,alpha:0.3113},0).wait(1).to({y:205.4218,alpha:0.2141},0).wait(1).to({y:203.1254,alpha:0.1375},0).wait(1).to({y:201.3123,alpha:0.0771},0).wait(1).to({y:200.1151,alpha:0.0372},0).wait(1).to({y:199.4288,alpha:0.0143},0).wait(1).to({y:199.0942,alpha:0.0031},0).wait(1).to({y:199,alpha:0},0).to({_off:true},1).wait(92));

	// promo
	this.instance_7 = new lib.promo_mc();
	this.instance_7.setTransform(439.95,224,0.8327,0.8327);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({x:438.9174,alpha:0.0037},0).wait(1).to({x:435.2636,alpha:0.0167},0).wait(1).to({x:427.7834,alpha:0.0435},0).wait(1).to({x:414.2342,alpha:0.0919},0).wait(1).to({x:389.1215,alpha:0.1816},0).wait(1).to({x:349.0231,alpha:0.3248},0).wait(1).to({x:303.3975,alpha:0.4878},0).wait(1).to({x:262.3345,alpha:0.6345},0).wait(1).to({x:230.0125,alpha:0.7499},0).wait(1).to({x:205.1298,alpha:0.8388},0).wait(1).to({x:185.5412,alpha:0.9088},0).wait(1).to({x:172.2071,alpha:0.9564},0).wait(1).to({x:164.6372,alpha:0.9834},0).wait(1).to({x:161.0084,alpha:0.9964},0).wait(1).to({x:160,alpha:1},0).wait(83).to({alpha:0},15).to({_off:true},1).wait(169));

	// background
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5050F").s().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/g");
	this.shape_36.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-159,240,714.7,240);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 320,
	height: 480,
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