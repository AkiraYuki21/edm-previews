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
	this.instance.setTransform(-296,-159,1.5317,1.5317);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-296,-159,591.3,318.6), null);


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
	this.shape.graphics.f("#FFE400").s().p("AgXB7QgJgIAAgOQAAgNAJgIQAKgIANAAQAOAAAKAIQAJAIAAANQAAAOgJAIQgKAIgOgBQgNABgKgIgAgcAsIAAiuIA6AAIAACug");
	this.shape.setTransform(251.625,-16.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AAHBhIAAiCQAAgKgHAAIgGABIAACLIg5AAIAAi1QAngMAbAAQA9AAAAA6IAACHg");
	this.shape_1.setTransform(237.875,-13.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("Ag+AcIAAg3QAAhGA+AAQA/AAAABGIAAA3QAABGg/AAQg+AAAAhGgAgGgdIAAA7QAAAPAGAAQAHAAAAgPIAAg7QAAgPgHAAQgGAAAAAPg");
	this.shape_2.setTransform(223.025,-13.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AgbCGIAAi4IA3AAIAAC4gAgShSQgHgIAAgOQAAgOAHgHQAGgIAMAAQAMAAAHAIQAGAHAAAOQAAAOgGAIQgHAHgMAAQgMAAgGgHg");
	this.shape_3.setTransform(211.675,-17.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AgbCBIAAkBIA3AAIAAEBg");
	this.shape_4.setTransform(203.525,-16.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AgbCBIAAkBIA3AAIAAEBg");
	this.shape_5.setTransform(195.325,-16.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AgbCGIAAi4IA3AAIAAC4gAgShSQgHgIAAgOQAAgOAHgHQAGgIAMAAQAMAAAHAIQAGAHAAAOQAAAOgGAIQgHAHgMAAQgMAAgGgHg");
	this.shape_6.setTransform(187.175,-17.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AAqCBIAAjAIgDAdIgRCjIgsAAIgRijIgDgdIAADAIg5AAIAAkBIBaAAIAIB6IABATIABgTIAKh6IBZAAIAAEBg");
	this.shape_7.setTransform(172.225,-16.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AgwBxQgSgUAAghIAAh3QAAghASgTQATgVAdAAQAeAAASAVQATATAAAhIAAB3QAAAhgTAUQgSATgeABQgdgBgTgTgAgFhEIAACKQgBADACACQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAIABAAQAHAAAAgHIAAiKQAAgDgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAIgCgBQgFAAAAAIg");
	this.shape_8.setTransform(149.5,-16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("Ag/CDIAAg0QBIhSAAgrIAAgCQAAgOgHgGQgGgFgKgBQgJAAgYAIIgSgyQAbgOAlAAQAfAAASAWQASAXAAAiIAAABQAAASgFASQgGARgLASIgUAcIgWAbIA6AAIAAA3g");
	this.shape_9.setTransform(134.625,-16.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AhDCBIAAkBIA/AAQAfAAAUAVQAVAUAAAjIAABnQAAAjgVAVQgUAWgfAAgAgIBJIACAAQAIAAACgEQADgEAAgLIAAhuQAAgKgDgDQgDgDgHAAIgCAAg");
	this.shape_10.setTransform(115.475,-16.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("Ag4CBIAAkBIBwAAIAAA3Ig2AAIAAAsIAsAAIAAA2IgsAAIAAAxIA3AAIAAA3g");
	this.shape_11.setTransform(101.65,-16.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AATCBIgFgzIgbAAIgFAzIg6AAIAikBIBVAAIAiEBgAAAgtIgIBFIARAAIgIhFIgBgVg");
	this.shape_12.setTransform(86.675,-16.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AgvByQgPgRgBglIAAg4QABgkAPgRQAOgQAhAAIAHAAIAAhAIA4AAIAAD7QgkAIgbAAQghAAgOgQgAgEgJQgCAEgBAKIAAA2QABALACAEQADAEAFAAIADAAIAAhaIgDAAQgFAAgDADg");
	this.shape_13.setTransform(66.65,-16.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AAHBhIAAiCQAAgKgHAAIgGABIAACLIg5AAIAAi1QAngMAbAAQA9AAAAA6IAACHg");
	this.shape_14.setTransform(51.725,-13.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AgvBUQgPgPAAgcIAAgDQAAgcAPgNQAPgPAegBIAJABIAAgIQAAgLgFgEQgEgEgOAAQgQAAgYAJIAPg3QAEgCANgCQANgCAJAAQAkAAAOAPQAPAQAAAiIAAB4QgpAKgYAAQgeAAgPgOgAgDAVQgDADAAAHIAAAFQAAAHADAFQADADAEAAIADAAIAAgiIgDAAQgEAAgDAEg");
	this.shape_15.setTransform(36.525,-13.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("AgwByQgPgRAAglIAAg4QAAgkAPgRQAPgQAhAAIAHAAIAAhAIA5AAIAAD7QglAIgaAAQgiAAgPgQgAgEgJQgCAEAAAKIAAA2QAAALACAEQADAEAFAAIADAAIAAhaIgDAAQgFAAgDADg");
	this.shape_16.setTransform(17.55,-16.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("AgbCBIAAkBIA3AAIAAEBg");
	this.shape_17.setTransform(6.175,-16.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE400").s().p("Ag+AcIAAg3QAAhGA+AAQA/AAAABGIAAA3QAABGg/AAQg+AAAAhGgAgGgdIAAA7QAAAPAGAAQAHAAAAgPIAAg7QAAgPgHAAQgGAAAAAPg");
	this.shape_18.setTransform(-5.175,-13.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE400").s().p("AhDA9IAAh5QAAgiAVgTQAVgTAhAAQAgAAAdAQIgWAzQgOgIgSAAQgWAAAAAZIAABxQAAAMAIAAQAEAAADgCIAAhcIA3AAIAACDQgRAKgNAFQgOAEgRAAQhFAAAAhIg");
	this.shape_19.setTransform(-19.65,-16.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAHBhIAAiCQAAgKgHAAIgGABIAACLIg5AAIAAi1QAngMAbAAQA9AAAAA6IAACHg");
	this.shape_20.setTransform(-39.175,-13.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgbCGIAAi4IA3AAIAAC4gAgShSQgHgIAAgOQAAgOAHgHQAGgIAMAAQAMAAAHAIQAGAHAAAOQAAAOgGAIQgHAHgMAAQgMAAgGgHg");
	this.shape_21.setTransform(-50.925,-17.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAKBdIgKh+IgJB+IhHAAIgTi5IA4AAIAIB9IAIh9IA3AAIAJB9IAHh9IA4AAIgTC5g");
	this.shape_22.setTransform(-66.15,-12.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag+AcIAAg3QAAhGA+AAQA/AAAABGIAAA3QAABGg/AAQg+AAAAhGgAgGgdIAAA7QAAAPAGAAQAHAAAAgPIAAg7QAAgPgHAAQgGAAAAAPg");
	this.shape_23.setTransform(-88.725,-13.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAlB3QgpAAgPgOQgPgOAAgeIAAhMIgRAAIAAgzIARAAIAAg0IA3AAIAAA0IAfAAIAAAzIgfAAIAAA9QAAAMAGAEQAFAEAOAAIAGAAIAAA1g");
	this.shape_24.setTransform(-102.125,-15.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgqBQQgTgSAAglIAAg0QAAgkAQgRQAPgRAgAAQAfAAAOARQAPARAAAkIAAAsIhDAAIAAAKQAAATAaAAQAOAAANgEIAFAzQgYAFgSAAQgiAAgTgSgAgEghIAAAOIANAAIAAgOQAAgJgCgDQgBgEgEAAQgGAAAAAQg");
	this.shape_25.setTransform(-119.075,-13.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgpBQQgQgTgBgkIAAgxQABhKA+ABQAaAAAYAHIgFA0QgSgHgMAAQgNAAgEAFQgEAFAAAJIAAA1QAAATAYAAQAOAAARgDIAEAyQgaAGgXAAQggAAgSgTg");
	this.shape_26.setTransform(-132.1,-13.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAHBhIAAiCQAAgKgHAAIgGABIAACLIg5AAIAAi1QAngMAbAAQA9AAAAA6IAACHg");
	this.shape_27.setTransform(-146.525,-13.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgvBUQgPgPAAgcIAAgDQAAgcAPgNQAPgPAegBIAJABIAAgIQAAgLgFgEQgEgEgOAAQgQAAgYAJIAPg3QAEgCANgCQANgCAJAAQAkAAAOAPQAPAQAAAiIAAB4QgpAKgYAAQgeAAgPgOgAgDAVQgDADAAAHIAAAFQAAAHADAFQADADAEAAIADAAIAAgiIgDAAQgEAAgDAEg");
	this.shape_28.setTransform(-161.775,-13.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAHCBIAAiCQAAgKgHAAIgGABIAACLIg5AAIAAkBIA5AAIAABBIAJgBQA9AAAAA6IAACHg");
	this.shape_29.setTransform(-176.675,-16.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgoBQQgSgTABgkIAAgxQAAhKA/ABQAZAAAYAHIgFA0QgSgHgNAAQgMAAgEAFQgEAFAAAJIAAA1QAAATAYAAQAOAAAQgDIAGAyQgcAGgWAAQggAAgRgTg");
	this.shape_30.setTransform(-190.2,-13.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgtBhIAAi5QAdgIAgAAIAeAAIAAA1IgeAAIgKAAIAACMg");
	this.shape_31.setTransform(-206.075,-13.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag/AlIAAiCIA5AAIAAB9QAAAKAHAAIAGgBIAAiGIA5AAIAACvQgoAMgaAAQg9AAAAg5g");
	this.shape_32.setTransform(-219.275,-12.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag+AcIAAg3QAAhGA+AAQA/AAAABGIAAA3QAABGg/AAQg+AAAAhGgAgGgdIAAA7QAAAPAGAAQAHAAAAgPIAAg7QAAgPgHAAQgGAAAAAPg");
	this.shape_33.setTransform(-234.125,-13.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgcCBIAAhJIgyi4IA9AAIARBWIAShWIA9AAIgyC4IAABJg");
	this.shape_34.setTransform(-249.6,-16.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-259.2,-37.2,518.5,48.6), null);


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
	this.instance.setTransform(-78,-69.3,0.5612,0.5612);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-78,-69.3,156,138.6), null);


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
	this.instance.setTransform(-266,36,2.1782,2.1782);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-266,36,531.5,102.4), null);


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
(lib.bigticketconversionhtml5300x250 = function(mode,startPosition,loop,reversed) {
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
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAqIAAgYIgQg7IATAAIAFAcIAGgcIATAAIgPA7IAAAYg");
	this.shape_15.setTransform(104.075,238.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAqIAAhTIATAAIAABAIATAAIAAATg");
	this.shape_16.setTransform(99.15,238.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAUAAQANABAFAFQAFAGAAAMIAAAHQAAALgGAFQgGAFgLAAIgBAAIAAAfgAgCgEIABAAIADgBIABgDIAAgJIgBgFIgDgBIgBAAg");
	this.shape_17.setTransform(94.375,238.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAUAAQANABAFAFQAFAGAAAMIAAAHQAAALgGAFQgGAFgLAAIgBAAIAAAfgAgCgEIABAAIADgBIABgDIAAgJIgBgFIgDgBIgBAAg");
	this.shape_18.setTransform(89.375,238.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAGAqIgBgQIgJAAIgBAQIgTAAIALhTIAbAAIALBTgAAAgOIgCAWIAFAAIgDgWIAAgGg");
	this.shape_19.setTransform(84.225,238.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAnIAGgRQAIADADAAQAFAAAAgFIAAgBIgBgFIgFgGIgDgEQgGgFgCgFQgDgFAAgHIAAgBQAAgKAFgHQAGgGAJAAQAHAAAKAEIgFAQIgJgCQgFAAAAAGIAAABIAAACIABABIABACIACACIABACIAFAEQAFAFADAEQACAFAAAJQAAALgFAGQgGAHgJAAQgKAAgKgEg");
	this.shape_20.setTransform(78.05,238.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEASIgEgjIARAAIgDAjg");
	this.shape_21.setTransform(74.6,236.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOAlQgGgHAAgMIAAgjQAAgMAGgGQAGgHALAAQAJAAAIAEIgIAPIgGgBQgHAAABAJIAAAfQAAAEABADQACACAEAAIAHgBIAHAPQgIAEgKAAQgLAAgGgGg");
	this.shape_22.setTransform(71.3,238.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWAlQgGgFAAgLIAAgKQAAgGADgEQACgCAFgBQgEgHAAgGIAAgGQAAgLAEgFQAEgFALAAQAIAAADAFQAEAFAAALIAAAFQAAANgLADIAHAKIgBgKIAPAAIAAAFIAAAEIAAAEIAAAEIgBADIgBADIgCADIALAQIgTAAIgCgDQgFAEgGAAQgNAAgGgGgAgKANIAAAFQAAAFACACQACACAEAAIACgBIgKgPgAgFgYIgBABIAAACIAAAJIAAADQAEgBAAgFIAAgGIAAgDIgCgBIgBABg");
	this.shape_23.setTransform(65.625,238.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAqIAAhAIgLAAIAAgTIApAAIAAATIgMAAIAABAg");
	this.shape_24.setTransform(60.275,238.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHA1IAAhpIAPAAIAABpg");
	this.shape_25.setTransform(52.525,239.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOAlQgHgGAAgMIAAgFQABgJAFgFQgEgFAAgIIAAgFQAAgLAGgGQAFgHAIAAQAJAAAFAHQAGAGAAALIAAAFQAAAIgEAFQAGAFAAAJIAAAFQgBALgFAHQgGAGgKAAQgJAAgFgGgAgBAKIAAAMQAAABAAAAQAAABABAAQAAAAAAABQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIAAgMQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAABAAAAgAgBgVIAAAOIAAACIABABIACgBIABgCIAAgOQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABg");
	this.shape_26.setTransform(44.55,238.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgOAlQgHgFAAgLIAAgJQAAgIACgEIAQgqIARAAIgGAPIgGAPIACAAQARAAABAUIAAAKQgBALgFAHQgGAHgKAAQgJAAgFgGgAgBAFIAAARQAAABAAAAQAAABABAAQAAAAAAABQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIAAgRQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAABAAAAg");
	this.shape_27.setTransform(39.6,238.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUAqIAAgRQAXgZAAgOIAAgBQAAgEgCgCQgBgCgEAAIgLACIgGgPQAKgFALAAQAJAAAGAHQAGAIAAAKIAAABQAAAFgBAGQgCAFgEAGIgGAJIgHAJIASAAIAAARg");
	this.shape_28.setTransform(34.85,238.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgUAnIAFgRQAJADADAAQAFAAABgFIAAgBIgCgFIgFgGIgDgEQgGgFgCgFQgDgFAAgHIAAgBQAAgKAFgHQAGgGAJAAQAHAAAKAEIgFAQIgJgCQgFAAAAAGIAAABIAAACIABABIABACIACACIABACIAFAEQAFAFADAEQACAFAAAJQAAALgFAGQgGAHgJAAQgKAAgKgEg");
	this.shape_29.setTransform(29,238.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSAqIAAhTIAkAAIAAASIgSAAIAAAPIAPAAIAAAQIgPAAIAAAQIASAAIAAASg");
	this.shape_30.setTransform(24.9,238.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAqIAAhTIASAAIAABTg");
	this.shape_31.setTransform(21.5,238.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAEAqIgGggIgBAAIAAAgIgTAAIAAhTIAUAAQAMABAFAFQAGAGAAAMIAAAGQAAALgHAFIAJAlgAgDgFIAAAAIADgBIABgDIAAgIIgBgFIgDgBIAAAAg");
	this.shape_32.setTransform(17.55,238.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRAqIAAhTIAjAAIAAASIgRAAIAAAPIAOAAIAAAQIgOAAIAAAQIARAAIAAASg");
	this.shape_33.setTransform(13,238.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgUAnIAGgRQAHADAEAAQAFAAABgFIAAgBIgCgFIgFgGIgDgEQgGgFgCgFQgDgFgBgHIAAgBQABgKAFgHQAGgGAJAAQAIAAAJAEIgFAQIgJgCQgFAAAAAGIAAABIAAACIABABIABACIACACIABACIAFAEQAFAFADAEQACAFABAJQgBALgFAGQgGAHgJAAQgKAAgKgEg");
	this.shape_34.setTransform(8.65,238.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(283));

	// footer_bg
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5050F").s().p("A4uBuIAAjbMAxdAAAIAADbg");
	this.shape_35.setTransform(149.9,238.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(283));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(149.85,19,0.4261,0.4261,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(188).to({alpha:0},16).wait(79));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(149.85,198.4,0.2992,0.2992,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(204).to({_off:false},0).wait(1).to({regX:-0.3,regY:87.2,x:149.7,y:224.35,alpha:0.0032},0).wait(1).to({y:224.15,alpha:0.0145},0).wait(1).to({y:223.75,alpha:0.0371},0).wait(1).to({y:223,alpha:0.077},0).wait(1).to({y:221.7,alpha:0.1467},0).wait(1).to({y:219.5,alpha:0.2672},0).wait(1).to({y:216.75,alpha:0.4164},0).wait(1).to({y:214,alpha:0.5648},0).wait(1).to({y:211.7,alpha:0.6887},0).wait(1).to({y:209.9,alpha:0.7859},0).wait(1).to({y:208.5,alpha:0.8625},0).wait(1).to({y:207.4,alpha:0.9229},0).wait(1).to({y:206.65,alpha:0.9628},0).wait(1).to({y:206.25,alpha:0.9857},0).wait(1).to({y:206.05,alpha:0.9969},0).wait(1).to({regX:0.1,regY:0.1,x:149.85,y:179.95,alpha:1},0).wait(63));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(-131.2,112.6,0.4156,0.4156,0,0,0,-0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(188).to({_off:false},0).wait(1).to({regX:-0.4,regY:0.3,x:-130.35,y:112.65},0).wait(1).to({x:-127.2},0).wait(1).to({x:-120.85,y:112.7},0).wait(1).to({x:-109.65,y:112.8},0).wait(1).to({x:-90.05,y:112.9},0).wait(1).to({x:-56.2,y:113.15},0).wait(1).to({x:-14.25,y:113.45},0).wait(1).to({x:27.4,y:113.75},0).wait(1).to({x:62.25,y:114},0).wait(1).to({x:89.55,y:114.2},0).wait(1).to({x:111.05,y:114.35},0).wait(1).to({x:128.05,y:114.45},0).wait(1).to({x:139.25,y:114.55},0).wait(1).to({x:145.7,y:114.6},0).wait(1).to({x:148.85},0).wait(1).to({regX:0.1,regY:0.1,x:149.85},0).wait(79));

	// main_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(148.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:-1.3,regY:-16.9,x:147.6,y:212.8,alpha:0.0037},0).wait(1).to({y:212.65,alpha:0.0167},0).wait(1).to({y:212.35,alpha:0.0435},0).wait(1).to({y:211.85,alpha:0.0919},0).wait(1).to({x:147.55,y:210.9,alpha:0.1816},0).wait(1).to({x:147.5,y:209.35,alpha:0.3248},0).wait(1).to({x:147.45,y:207.65,alpha:0.4878},0).wait(1).to({x:147.4,y:206.05,alpha:0.6345},0).wait(1).to({x:147.35,y:204.85,alpha:0.7499},0).wait(1).to({y:203.9,alpha:0.8388},0).wait(1).to({x:147.3,y:203.15,alpha:0.9088},0).wait(1).to({y:202.65,alpha:0.9564},0).wait(1).to({y:202.35,alpha:0.9834},0).wait(1).to({y:202.2,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:148.05,y:211.05,alpha:1},0).wait(143).to({x:148.4,y:211.25},0).wait(1).to({regX:-1.3,regY:-16.9,x:147.65,y:202.4,alpha:0.9963},0).wait(1).to({y:202.55,alpha:0.9833},0).wait(1).to({y:202.85,alpha:0.9565},0).wait(1).to({y:203.35,alpha:0.9081},0).wait(1).to({y:204.25,alpha:0.8184},0).wait(1).to({y:205.75,alpha:0.6752},0).wait(1).to({y:207.45,alpha:0.5122},0).wait(1).to({y:209,alpha:0.3655},0).wait(1).to({y:210.2,alpha:0.2501},0).wait(1).to({y:211.15,alpha:0.1612},0).wait(1).to({y:211.85,alpha:0.0912},0).wait(1).to({y:212.35,alpha:0.0436},0).wait(1).to({y:212.65,alpha:0.0166},0).wait(1).to({y:212.8,alpha:0.0036},0).wait(1).to({regX:0.1,regY:0.1,x:148.4,y:221.7,alpha:0},0).to({_off:true},1).wait(94));

	// second_prize
	this.instance_5 = new lib.second_prize_mc();
	this.instance_5.setTransform(150,133.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({y:133.2373,alpha:0.0037},0).wait(1).to({y:133.0154,alpha:0.0167},0).wait(1).to({y:132.5612,alpha:0.0435},0).wait(1).to({y:131.7384,alpha:0.0919},0).wait(1).to({y:130.2134,alpha:0.1816},0).wait(1).to({y:127.7785,alpha:0.3248},0).wait(1).to({y:125.0078,alpha:0.4878},0).wait(1).to({y:122.5143,alpha:0.6345},0).wait(1).to({y:120.5515,alpha:0.7499},0).wait(1).to({y:119.0405,alpha:0.8388},0).wait(1).to({y:117.851,alpha:0.9088},0).wait(1).to({y:117.0413,alpha:0.9564},0).wait(1).to({y:116.5816,alpha:0.9834},0).wait(1).to({y:116.3612,alpha:0.9964},0).wait(1).to({y:116.3,alpha:1},0).wait(61).to({y:116.2262,alpha:0.9963},0).wait(1).to({y:115.9652,alpha:0.9833},0).wait(1).to({y:115.4308,alpha:0.9565},0).wait(1).to({y:114.4628,alpha:0.9081},0).wait(1).to({y:112.6687,alpha:0.8184},0).wait(1).to({y:109.8041,alpha:0.6752},0).wait(1).to({y:106.5445,alpha:0.5122},0).wait(1).to({y:103.6109,alpha:0.3655},0).wait(1).to({y:101.3018,alpha:0.2501},0).wait(1).to({y:99.5241,alpha:0.1612},0).wait(1).to({y:98.1247,alpha:0.0912},0).wait(1).to({y:97.1721,alpha:0.0436},0).wait(1).to({y:96.6313,alpha:0.0166},0).wait(1).to({y:96.372,alpha:0.0036},0).wait(1).to({y:96.3,alpha:0},0).to({_off:true},1).wait(94));

	// promo
	this.instance_6 = new lib.promo_mc();
	this.instance_6.setTransform(295.65,116.65,0.4337,0.4337,0,0,0,0.1,0);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0,x:295.0622,alpha:0.0037},0).wait(1).to({x:293.1593,alpha:0.0167},0).wait(1).to({x:289.2635,alpha:0.0435},0).wait(1).to({x:282.207,alpha:0.0919},0).wait(1).to({x:269.1282,alpha:0.1816},0).wait(1).to({x:248.2446,alpha:0.3248},0).wait(1).to({x:224.4825,alpha:0.4878},0).wait(1).to({x:203.0965,alpha:0.6345},0).wait(1).to({x:186.263,alpha:0.7499},0).wait(1).to({x:173.3039,alpha:0.8388},0).wait(1).to({x:163.102,alpha:0.9088},0).wait(1).to({x:156.1575,alpha:0.9564},0).wait(1).to({x:152.2151,alpha:0.9834},0).wait(1).to({x:150.3252,alpha:0.9964},0).wait(1).to({regX:0.1,x:149.85,alpha:1},0).to({_off:true},99).wait(169));

	// background
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5050F").s().p("A4uTiMAAAgnDMAxdAAAMAAAAnDg");
	this.shape_36.setTransform(149.85,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-104.2,125,460.09999999999997,125);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 300,
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