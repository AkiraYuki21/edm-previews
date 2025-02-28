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
	this.shape.graphics.f("#FFE400").s().p("AgRAdQgJgDgEgHQgGgIAAgLQAAgOAKgJQALgIAPgBQAQABAKAIQALAJAAAOQAAALgFAIQgFAHgJADQgIAEgKAAQgJAAgIgEg");
	this.shape.setTransform(249.45,7.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AANCPIgNirIgLCrIhVAAIgVkdIBFAAIAEDbIATjbIA0AAIATDbIADjbIBFAAIgVEdg");
	this.shape_1.setTransform(232.175,-3.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AAACTQglAAgTgUQgTgVAAgmIAAiHQAAgoAUgUQAUgUAjABIAAAAQAmAAATAUQATAVAAAmIAACHQAAAogUAUQgUATgjAAgAgGhSQgCADAAAHIAACSQAAAGACADQACADAEAAIAAAAQAFAAACgDQACgDAAgGIAAiSQAAgHgCgDQgDgDgEAAIAAAAQgEAAgCADg");
	this.shape_2.setTransform(210.975,-3.5756);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AAACPIgSi0IAAC0IhCAAIAAkdIBWAAIARCwIAAiwIBCAAIAAEdg");
	this.shape_3.setTransform(192.725,-3.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_4.setTransform(171.15,-3.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("Ag+CPIAAkdIB9AAIAAA9Ig9AAIAAAxIAyAAIAAA8IgyAAIAAA2IA9AAIAAA9g");
	this.shape_5.setTransform(156.925,-3.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AAKCPIgZiDIAACDIhCAAIAAkdIBCAAIAACDIAYiDIBFAAIgkCHIApCWg");
	this.shape_6.setTransform(140.6,-3.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AAKCTQgoABgVgWQgVgXAAgqIAAh6QAAgqAVgWQAVgVAoAAIAAAAQARAAAOACQAOADAMAGIgXA1QgGgCgGAAIgLgCIAAAAQgNAAgHAJQgFAHAAAQIAABsQAAAQAHAIQAIAIANAAIABAAIALgBIANgEIAYA1QgPAGgPAEQgPADgSAAg");
	this.shape_7.setTransform(124.075,-3.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_8.setTransform(111.375,-3.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_9.setTransform(99.6,-3.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AAMCPIgWhtIgFAAIAABtIhCAAIAAkdIBHAAQAfAAASAKQARAKAIARQAGASAAAYIAAAVQAAAWgFAPQgGAOgKAIIAhB+gAgPgSIADAAQAJAAADgEQADgDAAgKIAAgcQAAgJgDgEQgDgEgJAAIgDAAg");
	this.shape_10.setTransform(78.3,-3.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AgmCJQgRgIgKgRQgKgQAAgbIAAjVIBDAAIAADXQAAAHACACQACADAEABQAFgBACgDQACgCAAgHIAAjXIBDAAIAADVQAAAYgIAQQgJARgQAJQgRAKgZAAQgWAAgRgIg");
	this.shape_11.setTransform(60.125,-3.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AAACTQglAAgTgUQgTgVAAgmIAAiHQAAgoAUgUQAUgUAjABIAAAAQAmAAATAUQATAVAAAmIAACHQAAAogUAUQgUATgjAAgAgGhSQgCADAAAHIAACSQAAAGACADQACADAEAAIAAAAQAFAAACgDQACgDAAgGIAAiSQAAgHgCgDQgDgDgEAAIAAAAQgEAAgCADg");
	this.shape_12.setTransform(42.425,-3.5756);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AgfCPIAAhRIg3jMIBDAAIATBgIAUhgIBDAAIg2DMIAABRg");
	this.shape_13.setTransform(24.65,-3.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_14.setTransform(3.45,-3.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("Ag+CPIAAkdIB9AAIAAA9Ig9AAIAAAxIAyAAIAAA8IgyAAIAAA2IA9AAIAAA9g");
	this.shape_15.setTransform(-10.725,-3.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("Ag4CAQgTgUAAgoIAAiHQAAgZALgSQALgSATgJQATgJAYgBQAQAAASAFQARAFAQAIIgYA5QgIgEgJgDQgJgCgKAAQgNAAgFAHQgGAHAAAPIAAB8QAAAIACADQADADAEAAIAFgBIADgBIAAhmIA+AAIAACRIgWALQgLAFgLACQgLADgOAAQgnAAgTgUg");
	this.shape_16.setTransform(-26.125,-3.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAdQgJgDgEgHQgGgIAAgLQABgOAJgJQALgIAPgBQAQABAKAIQALAJAAAOQAAALgFAIQgFAHgJADQgIAEgKAAQgIAAgJgEg");
	this.shape_17.setTransform(-44.2,7.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_18.setTransform(-56.4,-3.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_19.setTransform(-68.275,-3.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAVCPIgFg4IgfAAIgFA4IhAAAIAmkdIBdAAIAnEdgAAJAaIgIhMIgBgXIAAAXIgJBMIASAAg");
	this.shape_20.setTransform(-81.85,-3.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AANCPIgNirIgLCrIhVAAIgVkdIBFAAIAEDbIATjbIA0AAIATDbIADjbIBFAAIgVEdg");
	this.shape_21.setTransform(-103.625,-3.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAVCPIgFg4IgfAAIgFA4IhBAAIAmkdIBfAAIAlEdgAAKAaIgIhMIgCgXIgBAXIgHBMIASAAg");
	this.shape_22.setTransform(-125.45,-3.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgmCQQgRgEgPgGIARg8IAWAJQAJADAJAAQALAAAFgFQAGgEAAgKIAAgBQAAgIgGgJQgFgKgOgNIgMgMQgMgMgJgKQgIgMgFgNQgEgOAAgTIAAgBQAAgmATgUQATgVAhAAQANAAAQADQAQADAPAHIgQA3IgSgFIgNgCQgLAAgGAFQgFAFAAAJIAAABQAAAHAGAHIARATIAGAHIAHAGQAMAMAJAKQAJALAEAPQAFAOAAAVIAAAAQAAAagJATQgKATgQAKQgRAJgWAAQgSAAgRgDg");
	this.shape_23.setTransform(-146.725,-3.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAACPIgSi0IAAC0IhCAAIAAkdIBWAAIARCwIAAiwIBCAAIAAEdg");
	this.shape_24.setTransform(-163.725,-3.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_25.setTransform(-177.625,-3.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AANCPIgNirIgLCrIhVAAIgVkdIBFAAIAEDbIATjbIA0AAIATDbIADjbIBFAAIgVEdg");
	this.shape_26.setTransform(-194.525,-3.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag4CAQgTgUAAgoIAAiHQAAgZALgSQALgSATgJQATgJAYgBQAQAAASAFQARAFAQAIIgYA5QgIgEgJgDQgJgCgKAAQgNAAgFAHQgGAHAAAPIAAB8QAAAIACADQADADAEAAIAFgBIADgBIAAhmIA+AAIAACRIgWALQgLAFgLACQgLADgOAAQgnAAgTgUg");
	this.shape_27.setTransform(-219.625,-3.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_28.setTransform(-232.675,-3.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhMCPIAAkdIBIAAQAWAAASAHQARAHAKAQQAKAPAAAZIAAAHQABAVgHAPQgIAOgQAHQARAGAIANQAJAOAAAZIAAARQgBAZgJARQgJARgRAJQgRAIgXAAgAgKBRIAEAAQAHAAADgEQADgEAAgHIAAgdQAAgIgDgEQgCgEgIAAIgEAAgAgKgfIAFAAQAHAAADgEQADgEAAgHIAAgSQAAgIgCgEQgDgEgIAAIgFAAg");
	this.shape_29.setTransform(-245.525,-3.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-255.7,-26.2,511.4,53.7), null);


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
	this.shape.graphics.f("#FFE400").s().p("AgOAYQgHgDgEgGQgEgGgBgJQABgLAIgIQAJgGAMgBQANABAIAGQAJAIAAALQABAJgFAGQgEAGgHADQgHADgIAAQgHAAgHgDg");
	this.shape.setTransform(270.75,2.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AAAB2IgPiVIAACVIg2AAIAAjqIBGAAIAPCQIAAiQIA2AAIAADqg");
	this.shape_1.setTransform(259.05,-7.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AgaB2IAAjqIA1AAIAADqg");
	this.shape_2.setTransform(247.65,-7.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AAKB2IgKiNIgJCNIhGAAIgRjqIA5AAIADCzIAPizIAqAAIAQCzIADizIA5AAIgRDqg");
	this.shape_3.setTransform(233.85,-7.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AAAB5QgeAAgQgRQgPgRAAgfIAAhvQAAghAQgQQAQgQAdAAIAAAAQAfAAAQARQAPARAAAfIAABvQAAAhgQAQQgQAQgdAAgAgFhDQgBADAAAFIAAB3QAAAFABADQACADADgBIAAAAQAEABACgDQABgDAAgFIAAh3QAAgGgCgCQgCgCgDAAIAAAAQgDAAgCACg");
	this.shape_4.setTransform(212.675,-7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AgaB2IAAi1IghAAIAAg1IB3AAIAAA1IghAAIAAC1g");
	this.shape_5.setTransform(199.45,-7.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AgfB2QgOgDgMgGIAOgwQAJAEAJADQAIADAGgBQAKAAAEgDQAEgEAAgIIAAgBQABgHgFgHQgEgIgMgKIgKgKQgKgKgHgJQgHgIgDgMQgEgLAAgQIAAgBQAAgeAQgRQAPgRAbgBQALAAANADQANADANAFIgOAtIgPgEIgKgBQgKAAgEAEQgEADAAAIIAAAAQAAAHAFAGIAOAPIAFAGIAGAFQAJAJAHAJQAIAJADAMQAEAMAAAQIAAABQAAAVgHAPQgIAQgOAIQgNAIgSAAQgPAAgOgDg");
	this.shape_6.setTransform(183.425,-7.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AgzB2IAAjqIBmAAIAAAxIgxAAIAAApIAoAAIAAAxIgoAAIAAAsIAyAAIAAAzg");
	this.shape_7.setTransform(171.8,-7.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AAIB5QghAAgRgSQgRgSAAgjIAAhjQAAgjARgSQARgSAhAAIAAAAQANAAAMACQAMADAKAFIgTArIgKgCIgJgBIAAAAQgLAAgGAHQgDAGgBANIAABZQAAANAGAGQAGAHALAAIABAAIAJgBIALgEIAUArQgMAGgMADQgNADgPAAg");
	this.shape_8.setTransform(160.15,-7.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AAAB2IgOiVIAACVIg2AAIAAjqIBGAAIAOCQIAAiQIA1AAIAADqg");
	this.shape_9.setTransform(145.45,-7.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AARB2IgEguIgZAAIgFAuIg0AAIAfjqIBNAAIAfDqgAAIAVIgHg+IgBgTIAAATIgHA+IAPAAg");
	this.shape_10.setTransform(130.1,-7.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AAIB2IAAhdIgPAAIAABdIg1AAIAAjqIA1AAIAABZIAPAAIAAhZIA1AAIAADqg");
	this.shape_11.setTransform(115.5,-7.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AAHB5QggAAgRgSQgRgSAAgjIAAhjQAAgjARgSQARgSAgAAIABAAQANAAAMACQALADALAFIgTArIgKgCIgJgBIgBAAQgKAAgFAHQgFAGAAANIAABZQABANAFAGQAHAHALAAIAAAAIAKgBIAKgEIATArQgMAGgLADQgNADgPAAg");
	this.shape_12.setTransform(103.15,-7.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AgzB2IAAjqIBnAAIAAAxIgyAAIAAApIAoAAIAAAxIgoAAIAAAsIAyAAIAAAzg");
	this.shape_13.setTransform(87.1,-7.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AAKB2IgShaIgEAAIAABaIg2AAIAAjqIA6AAQAZAAAPAIQAOAIAGAOQAGAPAAATIAAASQAAASgFAMQgEALgJAHIAbBogAgMgPIADAAQAHABACgDQADgDAAgIIAAgYQAAgHgDgDQgCgEgHAAIgDAAg");
	this.shape_14.setTransform(73.525,-7.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AAAB5QgeAAgQgRQgPgRAAgfIAAhvQAAghAQgQQAQgQAdAAIAAAAQAfAAAQARQAPARAAAfIAABvQAAAhgQAQQgQAQgdAAgAgFhDQgBADAAAFIAAB3QAAAFABADQACADADgBIAAAAQAEABACgDQABgDAAgFIAAh3QAAgGgCgCQgCgCgDAAIAAAAQgDAAgCACg");
	this.shape_15.setTransform(58.875,-7.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("AAnB2IAAiwIgDAbIgQCVIgoAAIgQiVIgCgbIAACwIg0AAIAAjqIBSAAIAHBvIABARIACgRIAIhvIBRAAIAADqg");
	this.shape_16.setTransform(41.85,-7.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("AAHB2IAAhdIgNAAIAABdIg2AAIAAjqIA2AAIAABZIANAAIAAhZIA2AAIAADqg");
	this.shape_17.setTransform(21.15,-7.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE400").s().p("AgaB2IAAi1IghAAIAAg1IB3AAIAAA1IghAAIAAC1g");
	this.shape_18.setTransform(8.3,-7.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE400").s().p("AgaB2IAAjqIA1AAIAADqg");
	this.shape_19.setTransform(-1.45,-7.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE400").s().p("AAKB2IgKiNIgJCNIhGAAIgRjqIA5AAIADCzIAPizIAqAAIAQCzIADizIA5AAIgRDqg");
	this.shape_20.setTransform(-15.25,-7.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAHB2IAAhdIgOAAIAABdIg1AAIAAjqIA1AAIAABZIAOAAIAAhZIA2AAIAADqg");
	this.shape_21.setTransform(-36.3,-7.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAHB5QggAAgRgSQgQgSAAgjIAAhjQAAgjAQgSQARgSAgAAIABAAQAOAAALACQAMADAKAFIgUArIgJgCIgJgBIgBAAQgKAAgFAHQgFAGAAANIAABZQABANAFAGQAHAHALAAIAAAAIAKgBIAKgEIATArQgMAGgMADQgMADgPAAg");
	this.shape_22.setTransform(-48.6,-7.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAKB2IgShaIgEAAIAABaIg2AAIAAjqIA6AAQAZAAAPAIQAOAIAGAOQAGAPAAATIAAASQAAASgFAMQgEALgJAHIAbBogAgMgPIADAAQAHABACgDQADgDAAgIIAAgYQAAgHgDgDQgCgEgHAAIgDAAg");
	this.shape_23.setTransform(-62.975,-7.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AARB2IgEguIgZAAIgFAuIg0AAIAfjqIBNAAIAfDqgAAHAVIgGg+IgBgTIgBATIgGA+IAOAAg");
	this.shape_24.setTransform(-78.05,-7.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAmB2IAAiwIgCAbIgQCVIgnAAIgQiVIgCgbIAACwIg1AAIAAjqIBSAAIAIBvIAAARIABgRIAJhvIBRAAIAADqg");
	this.shape_25.setTransform(-95.55,-7.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgzB2IAAjqIBmAAIAAAxIgxAAIAAApIAoAAIAAAxIgoAAIAAAsIAyAAIAAAzg");
	this.shape_26.setTransform(-114.75,-7.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgaB2IAAi1IghAAIAAg1IB3AAIAAA1IghAAIAAC1g");
	this.shape_27.setTransform(-126.95,-7.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AARB2IgEguIgZAAIgEAuIg1AAIAfjqIBNAAIAfDqgAAIAVIgHg+IgBgTIAAATIgHA+IAPAAg");
	this.shape_28.setTransform(-140.65,-7.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAKB2IgShaIgEAAIAABaIg2AAIAAjqIA6AAQAZAAAPAIQAOAIAGAOQAGAPAAATIAAASQAAASgFAMQgEALgJAHIAbBogAgMgPIADAAQAHABACgDQADgDAAgIIAAgYQAAgHgDgDQgCgEgHAAIgDAAg");
	this.shape_29.setTransform(-155.775,-7.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag+B2IAAjqIA7AAQASAAAPAFQAOAHAIAMQAIANAAAUIAAAGQABASgHALQgFALgOAGQAPAFAGALQAHAMAAAUIAAAOQgBAUgHAPQgIAOgOAGQgNAIgTAAgAgIBCIADAAQAGABADgEQACgDAAgGIAAgYQAAgGgCgEQgCgCgHAAIgDAAgAgIgZIAEAAQAGAAADgDQACgEgBgGIAAgOQABgGgCgEQgCgEgHAAIgEAAg");
	this.shape_30.setTransform(-170.3,-7.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgzB2IAAjqIBmAAIAAAxIgxAAIAAApIAoAAIAAAxIgoAAIAAAsIAyAAIAAAzg");
	this.shape_31.setTransform(-182.95,-7.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag2B2IAAjqIA2AAIAAC0IA3AAIAAA2g");
	this.shape_32.setTransform(-195.65,-7.35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgzB2IAAjqIBmAAIAAAxIgxAAIAAApIAoAAIAAAxIgoAAIAAAsIAyAAIAAAzg");
	this.shape_33.setTransform(-207.45,-7.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAHB5QggAAgRgSQgQgSAAgjIAAhjQAAgjAQgSQARgSAgAAIABAAQAOAAALACQAMADAKAFIgUArIgJgCIgJgBIgBAAQgKAAgFAHQgFAGAAANIAABZQABANAFAGQAHAHALAAIAAAAIAKgBIAKgEIATArQgMAGgMADQgMADgPAAg");
	this.shape_34.setTransform(-219.15,-7.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag9B2IAAjqIA6AAQASAAAPAIQAPAJAIAPQAJAPAAAWIAABeQAAAVgJAQQgIAQgPAJQgPAJgSAAgAgHBCIACAAQAHABACgEQADgEAAgKIAAhkQAAgJgEgDQgDgDgFAAIgCAAg");
	this.shape_35.setTransform(-236.825,-7.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAAB2IgOiVIAACVIg2AAIAAjqIBFAAIAPCQIAAiQIA1AAIAADqg");
	this.shape_36.setTransform(-251.75,-7.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AARB2IgEguIgZAAIgEAuIg1AAIAfjqIBNAAIAfDqgAAIAVIgHg+IgBgTIAAATIgHA+IAPAAg");
	this.shape_37.setTransform(-267.1,-7.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-276.1,-26.2,552.3,44.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgRAsIgGgBIgFAAIgBgTIAJACIAHABIAGgBQAAAAABAAQAAAAABAAQAAgBAAAAQAAAAAAgBIADgHIgCABIgBAAQgHAAgDgCQgFgCgCgFQgDgEACgIIAJgpIATAAIgIApIAAACIACABIABAAIABAAIAEgWIAFgWIAUAAIgOBAQgCANgIAGQgGAGgMAAIgFgBg");
	this.shape.setTransform(270.1,240.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAtIAShZIATAAIgTBZg");
	this.shape_1.setTransform(266.325,237.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAtIgLgCIAThYIASAAIgFAXIADAAQAMAAAEAFQAEAHgDALIgEAUQgDANgGAGQgHAGgKgBIgLAAgAgDAbIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBABAAIACgGIAEgSQABgDgBgBQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape_2.setTransform(261.9481,237.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAvIANhAIATAAIgOBAgAABgcQgBgDAAgFQABgFADgDQADgCAEAAQAEAAACACQACADgBAFQgBAFgDADQgDACgEAAQgEAAgCgCg");
	this.shape_3.setTransform(258.17,237.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAiIgKgCIAFgTIAIACIAHABIAFAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgCgBIgCgBIgCgBQgGgDgDgEQgCgGACgIQABgFADgFQADgEAFgDQAEgDAHAAIAHABIAKACIgGASIgGgCIgGAAIgEAAIgCACIABADIADACIABABIACAAIAHAFQADACABADIAAAJQgCAHgDAFQgDAEgGADQgGAEgIAAIgHgBg");
	this.shape_4.setTransform(254.175,238.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAiIAJgtQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgCABIgBAAIgJAwIgUAAIAOg/IANgDIAJgBQALAAAEAFQAFAFgCAKIgKAvg");
	this.shape_5.setTransform(249.1558,238.8227);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAcQgFgGADgMIAEgTQADgMAGgHQAHgGAKABQAKgBAGAGQAEAHgDAMIgEATQgCAMgIAGQgHAGgJAAQgMAAgDgGgAABgOIgBAFIgDATIgBAFQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIAAgEIAFgTIAAgFIgBgBQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAg");
	this.shape_6.setTransform(244.15,238.8731);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAuIAThaIAIAAIAHgBIAGAAQAMAAAEAGQAEAGgCANIgEATQgDAMgHAGQgGAGgLAAIgCAAIgFAXgAgBAEIABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIACgEIAEgTQABgEgBgBQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgCAAg");
	this.shape_7.setTransform(238.5731,240.0481);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAiIgKgCIAFgTIAIACIAHABIAFAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgCgBIgCgBIgCgBQgGgDgDgEQgCgGACgIQABgFADgFQADgEAFgDQAEgDAHAAIAHABIAKACIgGASIgGgCIgGAAIgEAAIgCACIABADIADACIABABIACAAIAHAFQADACABADIAAAJQgCAHgDAFQgDAEgGADQgGAEgIAAIgHgBg");
	this.shape_8.setTransform(233.925,238.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAcQgFgGACgNIAEgSQADgNAHgGQAGgGALABQAKgBAEAGQAEAGgDANIgDAPIgXAAIAAADQgBADACACQACACAEAAIAEAAIAFgBIgCASIgIABIgFAAQgNAAgFgGgAACgPIgCAEIAAAFIAEAAIABgFIABgEQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIgBAAIgBABg");
	this.shape_9.setTransform(229.3104,238.8731);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAtIAAgiIgCAAIgHAiIgUAAIAThZIAVAAQAKAAAFADQAEADACAGQABAFgCAIIgBAGQgCAHgCAFIgHAGIACAogAAAgFIABAAIAEgBIACgFIACgIQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_10.setTransform(223.7667,237.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAsIgGgBIgFAAIgBgTIAJACIAIABIAEgBQABAAABAAQAAAAABAAQAAgBAAAAQAAAAABgBIACgHIgCABIgBAAQgHAAgDgCQgFgCgCgFQgCgEACgIIAIgpIATAAIgIApIAAACIACABIABAAIABAAIAEgWIAFgWIAUAAIgOBAQgDANgHAGQgGAGgMAAIgFgBg");
	this.shape_11.setTransform(216.8,240.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAdQgEgFACgKIAAgBQACgJAHgFQAGgFAKAAIABAAIACAAIABgCQAAgEgBgCQgBgBgEAAIgHABIgIACIAJgTIAEgBIAEgBIAFAAQAJAAAEACQAFADABAFQABAFgBAHIgJAqIgMACIgLABQgKAAgFgFgAgCAHQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABIAAACQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAABIADABIABAAIABgMIgBAAIgCABg");
	this.shape_12.setTransform(211.5367,238.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAtIAShZIATAAIgTBZg");
	this.shape_13.setTransform(207.825,237.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeAtIAThZIAVAAQAKAAAFADQAEADABAGQACAFgCAIIgCAHQgCAKgEAFQgEAEgHADQgGACgGAAIgCAAIgHAhgAAAgEIABAAIADgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAgBIACgJQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBAAg");
	this.shape_14.setTransform(203.5071,237.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAVAAQAFAAAFAEQAFADAEAFQADAGAAAHIAAAhQAAAHgDAGQgEAFgFADQgFADgFABgAgCAYIABAAQABAAAAgBQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgjQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgCgBIgBAAg");
	this.shape_15.setTransform(164.65,238.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRAqIAAhTIAjAAIAAASIgRAAIAAAPIAOAAIAAAQIgOAAIAAAQIARAAIAAASg");
	this.shape_16.setTransform(160.175,238.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAGAqIgBgQIgJAAIgBAQIgTAAIALhTIAbAAIALBTgAADAIIgDgWIAAgGIAAAGIgCAWIAFAAg");
	this.shape_17.setTransform(155.375,238.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAqIgEg0IAAA0IgTAAIAAhTIAYAAIAEAzIAAgzIATAAIAABTg");
	this.shape_18.setTransform(148.6,238.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAqIAAhTIASAAIAABTg");
	this.shape_19.setTransform(144.6,238.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKAqIgKgDIAGgRIAGACIAFABIAEgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgGIgEgEIgFgGIgEgHQgBgEgBgFIAAgBQABgKAGgGQAEgGAKgBIAIABIAJADIgFAQIgFgBIgEgBQgDAAgCACQAAAAAAABQAAAAAAAAQAAABAAABQgBAAAAABIABAEIAFAGIACABIACACIAGAGIAFAHIABALQAAAHgDAGQgCAFgFADQgGADgFAAIgKgBg");
	this.shape_20.setTransform(139.85,238.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAqIAAhTIAjAAIAAASIgRAAIAAAPIAOAAIAAAQIgOAAIAAAQIARAAIAAASg");
	this.shape_21.setTransform(135.725,238.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOAlQgGgHAAgMIAAgjQAAgMAGgGQAGgHALAAIAJABIAIADIgIAPIgCgBIgEAAQgDAAgCADQgBACAAAEIAAAfQAAAEABADQADACADAAIAEAAIADgBIAHAPIgJADIgJABQgLAAgGgGg");
	this.shape_22.setTransform(131.6,238.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAqIAAhTIASAAIAABTg");
	this.shape_23.setTransform(127.95,238.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAEAqIgGggIgBAAIAAAgIgTAAIAAhTIAUAAQAIAAAGAEQAEACACAGQACAEABAIIAAAGQAAAGgCAEQgCAEgCACIAJAlgAgDgFIABAAIACgBIABgDIAAgIIgBgFIgCgBIgBAAg");
	this.shape_24.setTransform(124,238.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAUAAQAJAAAFAEQAFACACAGQACAEAAAIIAAAHQAAAIgDAEQgDAFgFACQgGACgGAAIgBAAIAAAfgAgCgEIABAAIADgBIABgDIAAgJIgBgFIgDgBIgBAAg");
	this.shape_25.setTransform(118.88,238.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgHA1IAAhpIAPAAIAABpg");
	this.shape_26.setTransform(110.825,239.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAqIAAgYIgQg7IATAAIAFAcIAGgcIATAAIgPA7IAAAYg");
	this.shape_27.setTransform(102.675,238.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSAqIAAhTIASAAIAABAIATAAIAAATg");
	this.shape_28.setTransform(97.7,238.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAUAAQAJAAAFAEQAFACACAGQACAEAAAIIAAAHQAAAIgDAEQgDAFgFACQgGACgGAAIgBAAIAAAfgAgCgEIABAAIADgBIABgDIAAgJIgBgFIgDgBIgBAAg");
	this.shape_29.setTransform(92.93,238.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAUAAQAJAAAFAEQAFACACAGQACAEAAAIIAAAHQAAAIgDAEQgDAFgFACQgGACgGAAIgBAAIAAAfgAgCgEIABAAIADgBIABgDIAAgJIgBgFIgDgBIgBAAg");
	this.shape_30.setTransform(87.98,238.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAGAqIgBgQIgJAAIgBAQIgTAAIALhTIAbAAIALBTgAADAIIgDgWIAAgGIAAAGIgCAWIAFAAg");
	this.shape_31.setTransform(82.825,238.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgKAqIgJgDIAEgRIAHACIAFABIAEgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgGIgEgEIgFgGIgEgHQgBgEgBgFIAAgBQABgKAGgGQAFgGAIgBIAJABIAJADIgFAQIgFgBIgDgBQgEAAgCACQAAAAAAABQAAAAAAAAQAAABAAABQgBAAAAABIABAEIAGAGIACABIABACIAHAGIADAHIABALQAAAHgCAGQgDAFgFADQgFADgFAAIgKgBg");
	this.shape_32.setTransform(76.65,238.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEASIgEgjIARAAIgDAjg");
	this.shape_33.setTransform(73.15,236.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgOAlQgGgHAAgMIAAgjQAAgMAGgGQAGgHALAAIAJABIAIADIgIAPIgCgBIgEAAQgDAAgCADQgBACgBAEIAAAfQAAAEACADQACACAEAAIAEAAIADgBIAHAPIgJADIgJABQgLAAgGgGg");
	this.shape_34.setTransform(69.85,238.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWAmQgGgGAAgLIAAgKQAAgGADgEQACgCAFgBIgDgHIgBgGIAAgGQAAgHACgFQABgEAEgDQAEgCAIAAQAFAAADACQAEACABAFQACAFAAAHIAAAFIgBAGQgBAEgCACQgDADgEABIAHAKIgBgFIAAgFIAPAAIAAALIgBAIIgDAHIALAQIgTAAIgCgDIgFADIgGABQgNAAgGgFgAgKANIAAADIAAACQAAAFACACQACACAEAAIABAAIABgBIgKgPgAgFgYIgBADIAAAJIAAACIAAABIADgCIABgEIAAgGIAAgDIgCgBQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAg");
	this.shape_35.setTransform(64.225,238.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJAqIAAhAIgLAAIAAgTIApAAIAAATIgMAAIAABAg");
	this.shape_36.setTransform(58.825,238.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgHA1IAAhpIAPAAIAABpg");
	this.shape_37.setTransform(51.125,239.575);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgKAqIgKgEIAHgQIAEADIAGABQADAAABgCIABgFIAAgHIgBgDIgBgCIgEgBIgDAAIAAgNIACAAIAEgBIABgCIABgDIAAgEIgBgGQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAIgDABIgFADIgHgPQAFgDAFgBIAIgCQAJAAAGAGQAGAGAAALIAAACQAAAGgDAFQgCAEgFABQAGAAACAEQADAFAAAIIAAAEQAAALgGAGQgGAGgJAAIgKgBg");
	this.shape_38.setTransform(43.2,238.425);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgMAqIANhBIgTAAIAAgSIAlAAIAAASIgNBBg");
	this.shape_39.setTransform(38.775,238.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgUAqIAAgRIALgNIAJgNQADgHAAgGIAAgBQAAgDgCgCQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAIgDgBIgGABIgEABIgGgPIAJgEQAFgBAGAAQAGAAAGADQAEAEACAGQADAFABAHIAAABIgDAMQgBAEgEAFIgHAKIgHAJIATAAIAAARg");
	this.shape_40.setTransform(34.45,238.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgKAqIgKgDIAGgRIAGACIAFABIAEgBQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgGIgEgEIgFgGIgEgHQgBgEgBgFIAAgBQABgKAGgGQAFgGAIgBIAJABIAJADIgFAQIgFgBIgDgBQgEAAgCACQAAAAAAABQAAAAAAAAQAAABAAABQgBAAAAABIABAEIAGAGIABABIACACIAGAGIAEAHIACALQAAAHgDAGQgCAFgGADQgFADgFAAIgKgBg");
	this.shape_41.setTransform(28.6,238.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgRAqIAAhTIAjAAIAAASIgRAAIAAAPIAOAAIAAAQIgOAAIAAAQIARAAIAAASg");
	this.shape_42.setTransform(24.475,238.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgIAqIAAhTIARAAIAABTg");
	this.shape_43.setTransform(21.1,238.45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AADAqIgFggIgBAAIAAAgIgUAAIAAhTIAVAAQAIAAAFAEQAGACABAGQACAEAAAIIAAAGQAAAGgBAEQgCAEgCACIAJAlgAgDgFIABAAIACgBIABgDIAAgIIgBgFIgCgBIgBAAg");
	this.shape_44.setTransform(17.15,238.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgRAqIAAhTIAjAAIAAASIgRAAIAAAPIAOAAIAAAQIgOAAIAAAQIARAAIAAASg");
	this.shape_45.setTransform(12.575,238.45);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgKAqIgJgDIAEgRIAHACIAFABIAEgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgGIgEgEIgFgGIgEgHQgBgEgBgFIAAgBQABgKAGgGQAFgGAIgBIAJABIAJADIgFAQIgFgBIgDgBQgEAAgCACQAAAAAAABQAAAAAAAAQAAABAAABQgBAAAAABIABAEIAGAGIACABIABACIAHAGIADAHIABALQAAAHgCAGQgDAFgFADQgFADgFAAIgKgBg");
	this.shape_46.setTransform(8.25,238.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(283));

	// footer_bg
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A5050F").s().p("A4uBuIAAjbMAxdAAAIAADbg");
	this.shape_47.setTransform(149.9,238.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(283));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:0,regY:-3.6,x:148.3,y:219.75,alpha:0.0037},0).wait(1).to({y:219.6,alpha:0.0167},0).wait(1).to({y:219.3,alpha:0.0435},0).wait(1).to({y:218.8,alpha:0.0919},0).wait(1).to({x:148.25,y:217.85,alpha:0.1816},0).wait(1).to({x:148.2,y:216.3,alpha:0.3248},0).wait(1).to({x:148.15,y:214.6,alpha:0.4878},0).wait(1).to({x:148.1,y:213,alpha:0.6345},0).wait(1).to({x:148.05,y:211.8,alpha:0.7499},0).wait(1).to({y:210.85,alpha:0.8388},0).wait(1).to({x:148,y:210.1,alpha:0.9088},0).wait(1).to({y:209.6,alpha:0.9564},0).wait(1).to({y:209.3,alpha:0.9834},0).wait(1).to({y:209.15,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:148.05,y:211.05,alpha:1},0).wait(68).to({x:148.4,y:211.25},0).wait(1).to({regX:0,regY:-3.6,x:148.35,y:209.35,alpha:0.9963},0).wait(1).to({y:209.5,alpha:0.9833},0).wait(1).to({y:209.8,alpha:0.9565},0).wait(1).to({y:210.3,alpha:0.9081},0).wait(1).to({y:211.2,alpha:0.8184},0).wait(1).to({y:212.7,alpha:0.6752},0).wait(1).to({y:214.4,alpha:0.5122},0).wait(1).to({y:215.95,alpha:0.3655},0).wait(1).to({y:217.15,alpha:0.2501},0).wait(1).to({y:218.1,alpha:0.1612},0).wait(1).to({y:218.8,alpha:0.0912},0).wait(1).to({y:219.3,alpha:0.0436},0).wait(1).to({y:219.6,alpha:0.0166},0).wait(1).to({y:219.75,alpha:0.0036},0).wait(1).to({regX:0.1,regY:0.1,x:148.4,y:221.7,alpha:0},0).to({_off:true},1).wait(169));

	// sub_caption
	this.instance_5 = new lib.daily_caption_mc();
	this.instance_5.setTransform(148.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:-0.2,regY:-7.4,x:148.2,y:217.75,alpha:0.0037},0).wait(1).to({y:217.6,alpha:0.0167},0).wait(1).to({y:217.3,alpha:0.0435},0).wait(1).to({y:216.8,alpha:0.0919},0).wait(1).to({x:148.15,y:215.85,alpha:0.1816},0).wait(1).to({x:148.1,y:214.3,alpha:0.3248},0).wait(1).to({x:148.05,y:212.6,alpha:0.4878},0).wait(1).to({x:148,y:211,alpha:0.6345},0).wait(1).to({x:147.95,y:209.8,alpha:0.7499},0).wait(1).to({y:208.85,alpha:0.8388},0).wait(1).to({x:147.9,y:208.1,alpha:0.9088},0).wait(1).to({y:207.6,alpha:0.9564},0).wait(1).to({y:207.3,alpha:0.9834},0).wait(1).to({y:207.15,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:148.05,y:211.05,alpha:1},0).wait(60).to({x:148.4,y:211.25},0).wait(1).to({regX:-0.2,regY:-7.4,x:148.25,y:207.35,alpha:0.9963},0).wait(1).to({y:207.5,alpha:0.9833},0).wait(1).to({y:207.8,alpha:0.9565},0).wait(1).to({y:208.3,alpha:0.9081},0).wait(1).to({y:209.2,alpha:0.8184},0).wait(1).to({y:210.7,alpha:0.6752},0).wait(1).to({y:212.4,alpha:0.5122},0).wait(1).to({y:213.95,alpha:0.3655},0).wait(1).to({y:215.15,alpha:0.2501},0).wait(1).to({y:216.1,alpha:0.1612},0).wait(1).to({y:216.8,alpha:0.0912},0).wait(1).to({y:217.3,alpha:0.0436},0).wait(1).to({y:217.6,alpha:0.0166},0).wait(1).to({y:217.75,alpha:0.0036},0).wait(1).to({regX:0.1,regY:0.1,x:148.4,y:221.7,alpha:0},0).wait(95));

	// second_prize
	this.instance_6 = new lib.second_prize_mc();
	this.instance_6.setTransform(150,133.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({y:133.2373,alpha:0.0037},0).wait(1).to({y:133.0154,alpha:0.0167},0).wait(1).to({y:132.5612,alpha:0.0435},0).wait(1).to({y:131.7384,alpha:0.0919},0).wait(1).to({y:130.2134,alpha:0.1816},0).wait(1).to({y:127.7785,alpha:0.3248},0).wait(1).to({y:125.0078,alpha:0.4878},0).wait(1).to({y:122.5143,alpha:0.6345},0).wait(1).to({y:120.5515,alpha:0.7499},0).wait(1).to({y:119.0405,alpha:0.8388},0).wait(1).to({y:117.851,alpha:0.9088},0).wait(1).to({y:117.0413,alpha:0.9564},0).wait(1).to({y:116.5816,alpha:0.9834},0).wait(1).to({y:116.3612,alpha:0.9964},0).wait(1).to({y:116.3,alpha:1},0).wait(61).to({y:116.2262,alpha:0.9963},0).wait(1).to({y:115.9652,alpha:0.9833},0).wait(1).to({y:115.4308,alpha:0.9565},0).wait(1).to({y:114.4628,alpha:0.9081},0).wait(1).to({y:112.6687,alpha:0.8184},0).wait(1).to({y:109.8041,alpha:0.6752},0).wait(1).to({y:106.5445,alpha:0.5122},0).wait(1).to({y:103.6109,alpha:0.3655},0).wait(1).to({y:101.3018,alpha:0.2501},0).wait(1).to({y:99.5241,alpha:0.1612},0).wait(1).to({y:98.1247,alpha:0.0912},0).wait(1).to({y:97.1721,alpha:0.0436},0).wait(1).to({y:96.6313,alpha:0.0166},0).wait(1).to({y:96.372,alpha:0.0036},0).wait(1).to({y:96.3,alpha:0},0).to({_off:true},1).wait(94));

	// promo
	this.instance_7 = new lib.promo_mc();
	this.instance_7.setTransform(295.65,116.65,0.4337,0.4337,0,0,0,0.1,0);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0.3,regY:-7.4,x:295.2,y:113.45,alpha:0.0037},0).wait(1).to({x:293.3,alpha:0.0167},0).wait(1).to({x:289.4,alpha:0.0435},0).wait(1).to({x:282.35,alpha:0.0919},0).wait(1).to({x:269.25,alpha:0.1816},0).wait(1).to({x:248.35,alpha:0.3248},0).wait(1).to({x:224.6,alpha:0.4878},0).wait(1).to({x:203.2,alpha:0.6345},0).wait(1).to({x:186.4,alpha:0.7499},0).wait(1).to({x:173.45,alpha:0.8388},0).wait(1).to({x:163.25,alpha:0.9088},0).wait(1).to({x:156.3,alpha:0.9564},0).wait(1).to({x:152.35,alpha:0.9834},0).wait(1).to({x:150.45,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0,x:149.85,y:116.65,alpha:1},0).to({_off:true},99).wait(169));

	// background
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A5050F").s().p("A4uTiMAAAgnDMAxdAAAMAAAAnDg");
	this.shape_48.setTransform(149.85,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-104.2,125,469.9,125);
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