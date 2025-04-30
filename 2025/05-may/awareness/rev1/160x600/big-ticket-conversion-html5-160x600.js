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



(lib._160x600 = function() {
	this.initialize(img._160x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib._2ndprize = function() {
	this.initialize(img._2ndprize);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,247);


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
	this.instance.setTransform(-288,-870,1.4938,1.4938);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-288,-870,576.6,310.70000000000005), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgRAcIgBgMQAFACAFAAIAEgBQACgBABgEIgDAAQgFAAgEgDQgEgEADgGIAFgcIAMAAIgFAbQAAABAAAAQAAABABAAQAAAAAAAAQAAAAABAAIABAAIAFgdIAOAAIgJAqQgCAJgFAEQgEAEgHAAIgKgCg");
	this.shape.setTransform(42.5,6.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAeIAMg7IANAAIgNA7g");
	this.shape_1.setTransform(40.025,4.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAcIAMg5IAMAAIgDAPIACAAQAIAAACAEQADAEgCAHIgDANQgCAIgEAFQgEADgHAAQgGAAgIgCgAgCASIABAAIABgBQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIACgNQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_2.setTransform(37.1194,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAfIAJgqIAMAAIgJAqgAAAgSQAAgCAAgEQAAgCACgCQACgCADAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQgBAEgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_3.setTransform(34.6063,4.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAVIAEgNQAFACAEAAQAEAAAAgBIAAgCIgBgBIgBgBIgCAAQgIgFACgJQABgFAEgEQAEgEAGAAIALACIgDAMIgIgCQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAIAAABIACACIACABQAFACABACQACADgBAFQgBAHgFAEQgEAEgHAAQgGAAgGgCg");
	this.shape_4.setTransform(31.975,5.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBAWIAGgdQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBAAIgGAfIgNAAIAJgpQAIgCAHAAQAOAAgDANIgHAeg");
	this.shape_5.setTransform(28.6765,5.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAHIACgNQAEgPAOAAQAOAAgDAPIgDANQgDAQgOAAQgPAAAEgQgAAAgGIgDANQAAABAAABQAAAAABABQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBAAgBIADgNQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQAAABAAABg");
	this.shape_6.setTransform(25.3509,5.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAeIANg7IAOAAQAIAAACADQADAEgCAJIgDANQgCAHgEAEQgEAEgHAAIgBAAIgEAPgAAAADIAAAAIACgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAIACgNQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_7.setTransform(21.6694,6.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAVIAEgNQAFACAEAAQAEAAAAgBIAAgCIgBgBIgBgBIgCAAQgIgFACgJQABgFAEgEQAEgEAGAAIALACIgDAMIgIgCQgBAAgBAAQgBAAAAABQAAAAgBAAQAAABAAAAIAAABIACACIACABQAFACABACQACADgBAFQgBAHgFAEQgEAEgHAAQgGAAgGgCg");
	this.shape_8.setTransform(18.625,5.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNASQgDgEACgIIACgMQACgIAFgEQAEgEAHABQAHgBACAEQACAEgBAIIgCAKIgPAAIAAACQgBAFAFgBIAGAAIgBAMIgJABQgIAAgEgFgAABgHIgBAEIADAAIABgEIAAgCIgBgBQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAABg");
	this.shape_9.setTransform(15.5458,5.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAeIAAgXIgBAAIgFAXIgOAAIANg7IAOAAQAJAAADAEQACAFgBAIIgBAEQgCAIgFAEIABAagAAAgDIABAAIACgBIACgDIABgFIAAgDIgCgBIgBAAg");
	this.shape_10.setTransform(11.9031,4.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAcIAAgMQAFACAEAAIAGgBQABgBABgEIgCAAQgHAAgDgDQgDgEABgGIAGgcIAMAAIgEAbQgBABAAAAQAAABABAAQAAAAAAAAQABAAAAAAIAAAAIAHgdIAMAAIgJAqQgCAJgEAEQgEAEgIAAIgKgCg");
	this.shape_11.setTransform(7.35,6.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOATQgDgDABgHIABAAQABgHAEgCQAEgEAGABIADAAIAAgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIgDAAQgEgBgGACIAGgMIAEgBIAEAAQAJgBACAEQADAEgCAHIgFAbQgKADgFAAQgHAAgDgEgAgBAFIgBACIAAABQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAIAAAAIABgIIAAAAIgCABg");
	this.shape_12.setTransform(3.8757,5.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMAeIAMg7IANAAIgNA7g");
	this.shape_13.setTransform(1.475,4.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAeIANg7IANAAQAKAAADAEQACAFgBAIIgBAFQgCAIgFADQgFAEgIAAIAAAAIgFAWgAAAgCIABAAIACgBIABgDIACgGIAAgDIgCgBIgBAAg");
	this.shape_14.setTransform(-1.4469,4.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-4.8,0,50.699999999999996,11.3), null);


(lib.secondprize_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag8CzIAAh4Ih2AAIAAh1IB2AAIAAh4IB5AAIAAB4IB2AAIAAB1Ih2AAIAAB4g");
	this.shape.setTransform(6.875,211.95);

	this.instance = new lib._2ndprize();
	this.instance.setTransform(-139,292);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.secondprize_mc, new cjs.Rectangle(-139,169.4,278,369.6), null);


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
	this.instance.setTransform(-173,-829,1.2421,1.2421);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-173,-829,345.3,356.5), null);


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
	this.shape.graphics.f("#FFE400").s().p("AibFhIAArAIE1AAIAACWIiVAAIAAB4IB5AAIAACWIh5AAIAACFICXAAIAACXg");
	this.shape.setTransform(66.625,-346.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AibFhIAArAIE1AAIAACWIiVAAIAAB4IB5AAIAACWIh5AAIAACFICXAAIAACXg");
	this.shape_1.setTransform(31.975,-346.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AAdFhIg3kNIgMAAIAAENIiiAAIAArAICuAAQBvgBAsAyQArAzABBfIAAAzQAABng1AsIBRE3gAgmgtIAIAAQAVAAAIgKQAIgKAAgXIAAhEQAAgXgIgKQgIgKgVABIgIAAg");
	this.shape_2.setTransform(-8.9,-346.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AifFhIAArAIE/AAIAACWIifAAIAAB4ICEAAIAACWIiEAAIAAEcg");
	this.shape_3.setTransform(-48.45,-346.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AgsFmIAAoPIhJARIAAiXIDrg2IAALLg");
	this.shape_4.setTransform(68.475,-456.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AhPFhIAAohIhkAAIAAigIFnAAIAACgIhiAAIAAIhg");
	this.shape_5.setTransform(25.2,-455.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AibFhIAArBIE1AAIAACXIiVAAIAAB4IB5AAIAACWIh5AAIAACGICXAAIAACWg");
	this.shape_6.setTransform(-9.675,-455.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("Ai6CoIAAlOQAAhaA6g1QA6g2BbAAQBXAABPAtIg6CLQgogWgwAAQg/AAABBHIAAE0QAAAhAYAAQAMAAAGgFIAAj9ICZAAIAAFoQgwAcgkALQgkAMgwAAQjAAAAAjEg");
	this.shape_7.setTransform(-47.675,-456.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiICUIBfknICyAAIiIEng");
	this.shape_8.setTransform(130.15,-530.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiuFJIAqiQQBFAaAdAAQA4AAAAgsIAAgFQAAgUgOgVQgNgWgjgjIgfgeQgxgvgWgrQgWgqAAhDIAAgBQAAhcAvg0QAvg0BTAAQBEAABQAhIgpCIQg0gQgYgBQg2ABAAAsIAAADQAAAGACAHIAFALIAIAMIALAOIAPAPIAQARQAVAYAMAKQAzAzAWAoQAWAqAABHIAAABQAABggyA2QgyA2hSAAQhUAAhTgig");
	this.shape_9.setTransform(100.675,-565.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhQFhIAAoiIhjAAIAAifIFnAAIAACfIhiAAIAAIig");
	this.shape_10.setTransform(63.85,-565.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AibFhIAArBIE1AAIAACXIiVAAIAAB4IB5AAIAACWIh5AAIAACFICXAAIAACXg");
	this.shape_11.setTransform(28.975,-565.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAXFhIg/lEIAAFEIiiAAIAArBICiAAIAAFCIA+lCICqAAIhXFNIBiF0g");
	this.shape_12.setTransform(-11.275,-565.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAYFsQhjAAg0g2Qgzg2AAhqIAAkrQAAhqAzg2QA0g2BjAAIABAAQBMAABAAdIg6CDQgZgIgeAAIgBAAQg/AAAABNIAAENQAAAkATAVQAUAUAhAAIABAAQAcAAAggNIA6CCQhHAjhTAAg");
	this.shape_13.setTransform(-52.025,-565.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhQFhIAArBIChAAIAALBg");
	this.shape_14.setTransform(-83.225,-565.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhQFhIAAoiIhjAAIAAifIFnAAIAACfIhjAAIAAIig");
	this.shape_15.setTransform(-112.35,-565.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AivFnIAAiPQDJjhAAh2IAAgGQAAgmgTgQQgTgQgcAAQgZAAhBATIgyiFQBKgpBnAAQBWAAAwA/QAyA+ABBbIAAAEQgBAxgPAxQgPAxggAwQgfAwgWAdQgXAdgnAuICfAAIAACWg");
	this.shape_16.setTransform(79.5,-674.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhQFgIAAjIIiHn4ICoAAIAwDsIAwjsICmAAIiGH4IAADIg");
	this.shape_17.setTransform(25.9,-674.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiHE2QgzgvAAhcIAAoPIClAAIAAITQAAAeAVAAQAWAAAAgeIAAoTIClAAIAAIPQAABWgvAyQgwAyhbAAQhVAAgzgvg");
	this.shape_18.setTransform(-18.675,-673.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ai7FgIAArAICxAAQBXAAA0ArQA0ArAABXIAAASQAAA3gRAhQgRAhgpASQBTAcAAB1IAAArQgBBagxAwQgyAwhWAAgAgaDHIAKAAQATAAAHgJQAIgJAAgUIAAhFQgBgWgGgJQgIgKgTAAIgKAAgAgahNIAMAAQATgBAIgIQAHgKAAgUIAAgqQAAgVgHgKQgHgKgUAAIgMAAg");
	this.shape_19.setTransform(-62,-674.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-132.7,-728.8,281.5,456.49999999999994), null);


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
	this.instance.setTransform(-269,-769,2.206,2.206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-269,-769,538.3,103.70000000000005), null);


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
	this.instance.setTransform(-104,-835,1.89,1.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bt_logo, new cjs.Rectangle(-104,-835,207.9,119.10000000000002), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgdBiIAAhEIhFAAIAAg6IBFAAIAAhGIA6AAIAABGIBFAAIAAA6IhFAAIAABEg");
	this.shape.setTransform(-0.1,-54.1);

	this.instance = new lib.consolation();
	this.instance.setTransform(-73,-6,0.6669,0.6669);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bonus_prizes_mc, new cjs.Rectangle(-73,-83.5,146.7,119.5), null);


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
	this.instance.setTransform(-76,-9,0.6936,0.6936);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBiIAAhEIhFAAIAAg6IBFAAIAAhGIA6AAIAABGIBFAAIAAA6IhFAAIAABEg");
	this.shape.setTransform(-0.1,-54.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.big_win_mc, new cjs.Rectangle(-76,-83.5,152.6,116.8), null);


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
	this.instance = new lib._160x600();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_mc, new cjs.Rectangle(-80,-300,160,600), null);


// stage content:
(lib.bigticketconversionhtml5160x600 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(117.2,587.7,0.0157,0.0157,0,0,0,493.1,461.3);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(76.15,588.05,1.4697,1.4697,0,0,0,23.2,5.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAmIAAhKIASAAQAJAAAGAFQAGAHAAAKIAAAdQAAAKgGAGQgGAHgJAAgAgCAVIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBABAAIAAgEIAAggQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAgBAAIgBAAg");
	this.shape.setTransform(150.85,572.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAgAAIAAAPIgPAAIAAAOIAMAAIAAAPIgMAAIAAANIAQAAIAAARg");
	this.shape_1.setTransform(146.875,572.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAFAmIgBgPIgHAAIgCAPIgQAAIAJhKIAYAAIAKBKgAAAgMIgCATIAEAAIgCgTIAAgGg");
	this.shape_2.setTransform(142.525,572.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAmIgEgvIAAAvIgRAAIAAhKIAWAAIAEAtIAAgtIARAAIAABKg");
	this.shape_3.setTransform(136.425,572.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAmIAAhKIARAAIAABKg");
	this.shape_4.setTransform(132.775,572.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSAjIAFgQQAHADAEAAQAEAAABgEIAAgBIgCgFIgEgFIgEgEQgFgDgCgFQgDgFAAgGIAAgBQABgJAFgGQAFgGAHABQAIAAAIADIgEAOIgIgCQgFAAAAAGIAAABIAAABIAAABIABACIADACIABACIADADIAIAIQACAFAAAIQAAAKgEAFQgGAHgIgBQgIAAgKgDg");
	this.shape_5.setTransform(128.5,572.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAgAAIAAAPIgPAAIAAAOIAMAAIAAAPIgMAAIAAANIAQAAIAAARg");
	this.shape_6.setTransform(124.775,572.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAmIAAgQIAUgqIgSAAIAAgQIAkAAIAAAOIgUArIAUAAIAAARg");
	this.shape_7.setTransform(120.75,572.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAmIAAhKIARAAIAABKg");
	this.shape_8.setTransform(117.475,572.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AADAmIgFgdIgBAAIAAAdIgSAAIAAhKIATAAQALgBAEAGQAFAFABAKIAAAGQAAAKgGAEIAIAigAgDgEIABAAIACgBIABgDIAAgIIgBgDIgCgBIgBAAg");
	this.shape_9.setTransform(113.95,572.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAmIAAhKIATAAQALgBAEAGQAFAFAAAKIAAAHQAAAKgGAEQgFAFgJAAIgBAAIAAAcgAgBgDIAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIABgDIAAgJIgBgDQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_10.setTransform(109.275,572.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAwIAAhfIAPAAIAABfg");
	this.shape_11.setTransform(102,573.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAmIAAgVIgOg1IASAAIAEAYIAFgYIASAAIgOA1IAAAVg");
	this.shape_12.setTransform(94.625,572.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAQAAIAAA4IASAAIAAASg");
	this.shape_13.setTransform(90.1,572.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAmIAAhKIATAAQALgBAEAGQAFAFAAAKIAAAHQAAAKgGAEQgFAFgJAAIgBAAIAAAcgAgBgDIAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIABgDIAAgJIgBgDQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_14.setTransform(85.825,572.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAmIAAhKIATAAQALgBAEAGQAFAFAAAKIAAAHQAAAKgGAEQgFAFgJAAIgBAAIAAAcgAgBgDIAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIABgDIAAgJIgBgDQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_15.setTransform(81.325,572.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAFAmIgBgPIgHAAIgCAPIgQAAIAJhKIAYAAIAKBKgAAAgMIgCATIAEAAIgCgTIAAgGg");
	this.shape_16.setTransform(76.675,572.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSAjIAFgQQAHADADAAQAGAAAAgEIAAgBIgCgFIgEgFIgDgEQgGgDgCgFQgCgFAAgGIAAgBQAAgJAEgGQAFgGAJABQAGAAAJADIgEAOIgJgCQgEAAAAAGIAAABIAAABIABABIABACIACACIABACIADADIAIAIQACAFABAIQgBAKgFAFQgFAHgIgBQgJAAgJgDg");
	this.shape_17.setTransform(71.1,572.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEAQIgDgfIAPAAIgDAfg");
	this.shape_18.setTransform(67.975,570.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMAhQgGgGAAgLIAAgfQAAgLAGgGQAFgGAKABQAIAAAHADIgHANIgFgBQgGABAAAHIAAAcQAAAEABACQACACAEAAIAGgBIAGAOQgHADgJAAQgKAAgFgFg");
	this.shape_19.setTransform(64.95,572.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAiQgFgFgBgKIAAgJQAAgFADgEQADgCAEAAQgEgHABgGIAAgEQgBgLAEgFQADgDALAAQAGAAAEADQADAFAAALIAAAEQAAALgLADIAHAJIgBgJIAOAAIAAAEIAAAEIAAADIgBAEIAAADIgBACIgBADIAJAPIgRAAIgBgDQgFADgFAAQgMAAgGgEgAgIALIAAAGQAAADABACQABACAFAAIABgBIgIgNgAgFgWIAAABIAAACIAAAJIAAACQAEgBAAgEIAAgGIAAgDIgCgBIgCABg");
	this.shape_20.setTransform(59.9,572.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgIAmIAAg5IgKAAIAAgRIAlAAIAAARIgLAAIAAA5g");
	this.shape_21.setTransform(55.05,572.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgGAwIAAhfIANAAIAABfg");
	this.shape_22.setTransform(48.05,573.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSAhIAGgNQAFADAEAAQAFAAAAgHIAAgGQAAgJgIABQgEAAgFACIAFgpIAcAAIAAAQIgMAAIgBAJQAHABADAGQAEAEAAAJIAAAJQAAAKgGAGQgFAFgIAAQgJAAgJgFgAAAgLIABAAIAAAAIAAAAIgBAAIAAAAg");
	this.shape_23.setTransform(40.7,572.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLAmIAMg7IgSAAIAAgPIAjAAIAAAPIgNA7g");
	this.shape_24.setTransform(36.4,572.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAmIAAgPQAVgXAAgMIAAgBQAAgFgCgBIgEgBIgKABIgFgOQAIgEAKAAQAJAAAFAHQAFAGAAAKQAAAFgBAGIgFAJIgGAIIgHAIIARAAIAAAQg");
	this.shape_25.setTransform(32.475,572.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgRAjIAEgQQAHADADAAQAGAAgBgEIAAgBIgBgFIgFgFIgCgEQgGgDgCgFQgDgFABgGIAAgBQAAgJAEgGQAGgGAIABQAGAAAJADIgFAOIgIgCQgEAAAAAGIAAABIAAABIABABIABACIABACIACACIAEADIAIAIQACAFAAAIQAAAKgGAFQgFAHgIgBQgJAAgIgDg");
	this.shape_26.setTransform(27.2,572.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAgAAIAAAPIgPAAIAAAOIAMAAIAAAPIgMAAIAAANIAQAAIAAARg");
	this.shape_27.setTransform(23.475,572.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgIAmIAAhKIARAAIAABKg");
	this.shape_28.setTransform(20.425,572.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AADAmIgFgdIgBAAIAAAdIgRAAIAAhKIASAAQALgBAFAGQAEAFAAAKIAAAGQABAKgGAEIAJAigAgDgEIABAAIACgBIABgDIAAgIIgBgDIgCgBIgBAAg");
	this.shape_29.setTransform(16.9,572.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAgAAIAAAPIgPAAIAAAOIAMAAIAAAPIgMAAIAAANIAQAAIAAARg");
	this.shape_30.setTransform(12.725,572.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgRAjIAEgQQAHADADAAQAGAAgBgEIAAgBIgBgFIgFgFIgDgEQgFgDgCgFQgDgFABgGIAAgBQAAgJAEgGQAGgGAIABQAHAAAIADIgFAOIgIgCQgEAAAAAGIAAABIAAABIABABIABACIABACIACACIAEADIAIAIQACAFAAAIQAAAKgGAFQgFAHgIgBQgJAAgIgDg");
	this.shape_31.setTransform(8.85,572.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(445));

	// logo
	this.instance_2 = new lib.bt_logo();
	this.instance_2.setTransform(80,378.25,0.4091,0.4091);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(353).to({alpha:0},16).wait(76));

	// cta
	this.instance_3 = new lib.cta_mc();
	this.instance_3.setTransform(243.35,550.5,0.2872,0.2872,0,0,0,0,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(369).to({_off:false},0).wait(1).to({regX:0.1,regY:-717.2,x:242.85,y:344.35,alpha:0.0032},0).wait(1).to({x:241,y:344.15,alpha:0.0145},0).wait(1).to({x:237.3,y:343.75,alpha:0.0371},0).wait(1).to({x:230.8,y:343.05,alpha:0.077},0).wait(1).to({x:219.4,y:341.85,alpha:0.1467},0).wait(1).to({x:199.75,y:339.7,alpha:0.2672},0).wait(1).to({x:175.35,y:337.05,alpha:0.4164},0).wait(1).to({x:151.1,y:334.45,alpha:0.5648},0).wait(1).to({x:130.85,y:332.25,alpha:0.6887},0).wait(1).to({x:115,y:330.5,alpha:0.7859},0).wait(1).to({x:102.5,y:329.15,alpha:0.8625},0).wait(1).to({x:92.6,y:328.1,alpha:0.9229},0).wait(1).to({x:86.1,y:327.4,alpha:0.9628},0).wait(1).to({x:82.35,y:327,alpha:0.9857},0).wait(1).to({x:80.55,y:326.8,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:80,y:532.8,alpha:1},0).wait(60));

	// ticket
	this.instance_4 = new lib.ticket_mc();
	this.instance_4.setTransform(-119.45,470,0.399,0.399);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(353).to({_off:false},0).wait(1).to({regX:0.3,regY:-714.6,x:-118.7,y:184.85},0).wait(1).to({x:-116.45},0).wait(1).to({x:-111.9},0).wait(1).to({x:-103.95},0).wait(1).to({x:-90.05},0).wait(1).to({x:-66.05},0).wait(1).to({x:-36.25},0).wait(1).to({x:-6.65},0).wait(1).to({x:18.05},0).wait(1).to({x:37.45},0).wait(1).to({x:52.7},0).wait(1).to({x:64.75},0).wait(1).to({x:72.7},0).wait(1).to({x:77.3},0).wait(1).to({x:79.5},0).wait(1).to({regX:0.1,regY:0,x:80.05,y:470},0).wait(76));

	// bonus_prizes
	this.instance_5 = new lib.bonus_prizes_mc();
	this.instance_5.setTransform(79.05,403.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).wait(1).to({regX:0.4,regY:-14,x:79.45,y:389.4,alpha:0.0037},0).wait(1).to({y:389.15,alpha:0.0167},0).wait(1).to({y:388.6,alpha:0.0435},0).wait(1).to({y:387.65,alpha:0.0919},0).wait(1).to({y:385.85,alpha:0.1816},0).wait(1).to({y:383,alpha:0.3248},0).wait(1).to({y:379.7,alpha:0.4878},0).wait(1).to({y:376.8,alpha:0.6345},0).wait(1).to({y:374.5,alpha:0.7499},0).wait(1).to({y:372.7,alpha:0.8388},0).wait(1).to({y:371.3,alpha:0.9088},0).wait(1).to({y:370.35,alpha:0.9564},0).wait(1).to({y:369.8,alpha:0.9834},0).wait(1).to({y:369.55,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:79.05,y:383.5,alpha:1},0).wait(61).to({regX:0.4,regY:-14,x:79.45,y:369.4,alpha:0.9968},0).wait(1).to({y:369.2,alpha:0.9855},0).wait(1).to({y:368.75,alpha:0.9629},0).wait(1).to({y:367.95,alpha:0.923},0).wait(1).to({y:366.55,alpha:0.8533},0).wait(1).to({y:364.15,alpha:0.7328},0).wait(1).to({y:361.15,alpha:0.5836},0).wait(1).to({y:358.2,alpha:0.4352},0).wait(1).to({y:355.7,alpha:0.3113},0).wait(1).to({y:353.75,alpha:0.2141},0).wait(1).to({y:352.25,alpha:0.1375},0).wait(1).to({y:351,alpha:0.0771},0).wait(1).to({y:350.2,alpha:0.0372},0).wait(1).to({y:349.75,alpha:0.0143},0).wait(1).to({y:349.55,alpha:0.0031},0).wait(1).to({regX:0,regY:0,x:79.05,y:363.5,alpha:0},0).to({_off:true},264).wait(75));

	// bonus_prizes_copy
	this.instance_6 = new lib.big_win_mc();
	this.instance_6.setTransform(79.05,403.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90).to({_off:false},0).wait(1).to({regX:0.3,regY:-15.3,x:79.35,y:388.1,alpha:0.0032},0).wait(1).to({y:387.9,alpha:0.0145},0).wait(1).to({y:387.45,alpha:0.0371},0).wait(1).to({y:386.65,alpha:0.077},0).wait(1).to({y:385.25,alpha:0.1467},0).wait(1).to({y:382.85,alpha:0.2672},0).wait(1).to({y:379.85,alpha:0.4164},0).wait(1).to({y:376.9,alpha:0.5648},0).wait(1).to({y:374.4,alpha:0.6887},0).wait(1).to({y:372.45,alpha:0.7859},0).wait(1).to({y:370.95,alpha:0.8625},0).wait(1).to({y:369.7,alpha:0.9229},0).wait(1).to({y:368.9,alpha:0.9628},0).wait(1).to({y:368.45,alpha:0.9857},0).wait(1).to({y:368.25,alpha:0.9969},0).wait(1).to({regX:0,regY:0,x:79.05,y:383.5,alpha:1},0).wait(60).to({regX:0.3,regY:-15.3,x:79.35,y:368.1,alpha:0.9968},0).wait(1).to({y:367.9,alpha:0.9855},0).wait(1).to({y:367.45,alpha:0.9629},0).wait(1).to({y:366.65,alpha:0.923},0).wait(1).to({y:365.25,alpha:0.8533},0).wait(1).to({y:362.85,alpha:0.7328},0).wait(1).to({y:359.85,alpha:0.5836},0).wait(1).to({y:356.9,alpha:0.4352},0).wait(1).to({y:354.4,alpha:0.3113},0).wait(1).to({y:352.45,alpha:0.2141},0).wait(1).to({y:350.95,alpha:0.1375},0).wait(1).to({y:349.7,alpha:0.0771},0).wait(1).to({y:348.9,alpha:0.0372},0).wait(1).to({y:348.45,alpha:0.0143},0).wait(1).to({y:348.25,alpha:0.0031},0).wait(1).to({regX:0,regY:0,x:79.05,y:363.5,alpha:0},0).to({_off:true},189).wait(75));

	// sub_caption
	this.instance_7 = new lib.daily_caption_mc();
	this.instance_7.setTransform(78.6,572.85,0.5,0.5,0,0,0,0,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(262).to({_off:false},0).wait(1).to({regX:6.8,regY:-511.1,x:82,y:317.2,alpha:0.0032},0).wait(1).to({y:317.1,alpha:0.0145},0).wait(1).to({y:316.85,alpha:0.0371},0).wait(1).to({y:316.45,alpha:0.077},0).wait(1).to({y:315.75,alpha:0.1467},0).wait(1).to({y:314.55,alpha:0.2672},0).wait(1).to({y:313.05,alpha:0.4164},0).wait(1).to({y:311.6,alpha:0.5648},0).wait(1).to({y:310.35,alpha:0.6887},0).wait(1).to({y:309.35,alpha:0.7859},0).wait(1).to({y:308.6,alpha:0.8625},0).wait(1).to({y:308,alpha:0.9229},0).wait(1).to({y:307.6,alpha:0.9628},0).wait(1).to({y:307.35,alpha:0.9857},0).wait(1).to({y:307.25,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:78.6,y:562.85,alpha:1},0).wait(76).to({regX:6.8,regY:-511.1,x:82.5,y:307.25},0).wait(1).to({x:84.35},0).wait(1).to({x:88},0).wait(1).to({x:94.5},0).wait(1).to({x:105.9},0).wait(1).to({x:125.5},0).wait(1).to({x:149.85},0).wait(1).to({x:174},0).wait(1).to({x:194.2},0).wait(1).to({x:210.05},0).wait(1).to({x:222.5},0).wait(1).to({x:232.35},0).wait(1).to({x:238.85},0).wait(1).to({x:242.6},0).wait(1).to({x:244.4},0).wait(1).to({regX:0,regY:0.1,x:241.55,y:562.85},0).to({_off:true},17).wait(59));

	// second_prize
	this.instance_8 = new lib.secondprize_mc();
	this.instance_8.setTransform(-86.25,208.25,0.5432,0.5432,0,0,0,0.2,0.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(165).to({_off:false},0).wait(1).to({regX:0,regY:366.5,x:-85.8,y:407.25},0).wait(1).to({x:-83.95},0).wait(1).to({x:-80.2},0).wait(1).to({x:-73.6},0).wait(1).to({x:-62.1},0).wait(1).to({x:-42.25},0).wait(1).to({x:-17.6},0).wait(1).to({x:6.8},0).wait(1).to({x:27.25},0).wait(1).to({x:43.3},0).wait(1).to({x:55.95},0).wait(1).to({x:65.9},0).wait(1).to({x:72.5},0).wait(1).to({x:76.25},0).wait(1).to({x:78.1},0).wait(1).to({regX:0.2,regY:0.2,x:78.75,y:208.25},0).wait(82).to({regX:0,regY:366.5,x:79.15,y:407.25},0).wait(1).to({x:81.05},0).wait(1).to({x:84.8,y:407.3},0).wait(1).to({x:91.45,y:407.4},0).wait(1).to({x:103.05,y:407.55},0).wait(1).to({x:123.1,y:407.8},0).wait(1).to({x:148,y:408.1},0).wait(1).to({x:172.7,y:408.45},0).wait(1).to({x:193.35,y:408.7},0).wait(1).to({x:209.5,y:408.9},0).wait(1).to({x:222.25,y:409.1},0).wait(1).to({x:232.35,y:409.2},0).wait(1).to({x:239,y:409.3},0).wait(1).to({x:242.8,y:409.35},0).wait(1).to({x:244.65},0).wait(1).to({regX:0.2,regY:0.2,x:245.3,y:210.4},0).to({_off:true},17).wait(150));

	// promo
	this.instance_9 = new lib.promo_mc();
	this.instance_9.setTransform(220,472,0.4164,0.4164,0,0,0,0.1,0);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:-0.4,regY:-650.8,x:219.25,y:201.05,alpha:0.0037},0).wait(1).to({x:217.45,alpha:0.0167},0).wait(1).to({x:213.7,alpha:0.0435},0).wait(1).to({x:206.9,alpha:0.0919},0).wait(1).to({x:194.35,alpha:0.1816},0).wait(1).to({x:174.3,alpha:0.3248},0).wait(1).to({x:151.5,alpha:0.4878},0).wait(1).to({x:131,alpha:0.6345},0).wait(1).to({x:114.8,alpha:0.7499},0).wait(1).to({x:102.4,alpha:0.8388},0).wait(1).to({x:92.6,alpha:0.9088},0).wait(1).to({x:85.95,alpha:0.9564},0).wait(1).to({x:82.15,alpha:0.9834},0).wait(1).to({x:80.35,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0,x:80.05,y:472,alpha:1},0).wait(248).to({regX:-0.4,regY:-650.8,x:80.35,y:201.05},0).wait(1).to({x:82.15},0).wait(1).to({x:85.85},0).wait(1).to({x:92.3},0).wait(1).to({x:103.55},0).wait(1).to({x:123.05},0).wait(1).to({x:147.2},0).wait(1).to({x:171.2},0).wait(1).to({x:191.25},0).wait(1).to({x:206.95},0).wait(1).to({x:219.35},0).wait(1).to({x:229.1},0).wait(1).to({x:235.55},0).wait(1).to({x:239.25},0).wait(1).to({x:241.05},0).wait(1).to({regX:0.1,regY:0,x:241.8,y:472},0).to({_off:true},147).wait(20));

	// background
	this.instance_10 = new lib.background_mc();
	this.instance_10.setTransform(80,299.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(445));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-154.3,299.6,475,300);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_160x600.jpg", id:"_160x600"},
		{src:"images/_2ndprize.png", id:"_2ndprize"},
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