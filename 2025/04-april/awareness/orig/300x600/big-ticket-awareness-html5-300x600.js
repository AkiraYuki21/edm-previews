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


(lib._300x600 = function() {
	this.initialize(img._300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.consolation = function() {
	this.initialize(img.consolation);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,481,157);


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
	this.instance.setTransform(-193,-259);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-193,-259,386,208), null);


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
	this.instance.setTransform(-145.75,-129.5,1.0486,1.0486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-145.7,-129.5,291.5,259), null);


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
	this.instance.setTransform(-179,-304,1.2855,1.2855);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-179,-304,357.4,369), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgeCiQgNgKAAgTQAAgRANgLQANgKARAAQATAAAMAKQANALAAARQAAATgNAKQgMAKgTAAQgRAAgNgKgAgmA6IAAjlIBNAAIAADlg");
	this.shape.setTransform(68.05,-9.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhTCeIAUhGQAhANAOABQAbgBAAgUIAAgDQAAgKgHgKQgGgKgRgRIgOgPQgYgWgLgUQgKgVAAgfIAAgBQAAgsAXgaQAWgZAnAAQAhAAAnAQIgUBBQgZgHgMAAQgZAAAAAWIAAABIABAGIACAFIAEAHIAFAGIAHAHIAIAIIAPAQQAZAYALAUQAKAUAAAiIAAAAQAAAvgYAZQgYAagnABQgogBgogQg");
	this.shape_1.setTransform(51.125,-9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAACqIgWjWIAADWIhNAAIAAlSIBlAAIAVDQIAAjQIBNAAIAAFSg");
	this.shape_2.setTransform(31.025,-9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmCqIAAlSIBNAAIAAFSg");
	this.shape_3.setTransform(14.575,-9.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPCqIgPjLIgODLIhkAAIgZlSIBSAAIAEEDIAXkDIA9AAIAXEDIADkDIBTAAIgZFSg");
	this.shape_4.setTransform(-5.35,-9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhZBQIAAigQAAgrAcgZQAcgaArAAQAqAAAmAVIgcBEQgTgLgYAAQgdAAABAiIAACUQgBAPALAAQAGAAADgCIAAh5IBKAAIAACtQgXANgSAFQgRAGgXAAQhcAAAAhfg");
	this.shape_5.setTransform(-35.15,-9.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmCqIAAlSIBNAAIAAFSg");
	this.shape_6.setTransform(-50.575,-9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhaCqIAAlSIBVAAQAqgBAZAVQAZAVAAAqIAAAIQAAAbgIAQQgJAPgTAJQAoANAAA4IAAAVQAAArgYAXQgYAYgpAAgAgMBgIAFAAQAIAAAEgEQADgEAAgLIAAghQAAgKgDgFQgDgEgJAAIgFAAgAgMglIAGAAQAIAAAEgEQAEgFAAgJIAAgVQAAgKgEgEQgDgEgJgBIgGAAg");
	this.shape_7.setTransform(-65.825,-9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMCvQgvAAgZgaQgZgaAAgyIAAiQQAAgzAZgaQAZgaAvAAIAAAAQAlAAAfAOIgcA/QgMgEgPAAQgeAAAAAlIAACBQAAASAIAJQAKAKAQAAIAAAAQAOAAAPgGIAcA+QgiARgoAAg");
	this.shape_8.setTransform(74.225,-57.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmCqIAAlSIBNAAIAAFSg");
	this.shape_9.setTransform(59.275,-56.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmCqIAAkGIgvAAIAAhMICsAAIAABMIgwAAIAAEGg");
	this.shape_10.setTransform(45.25,-56.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhTCeIAUhGQAhANAOABQAbgBAAgUIAAgDQAAgKgHgKQgGgKgRgRIgOgPQgYgWgLgUQgKgVAAgfIAAgBQAAgsAXgaQAWgZAnAAQAhAAAnAQIgUBBQgZgHgMAAQgZAAAAAWIAAABIABAGIACAFIAEAHIAFAGIAHAHIAIAIIAPAQQAZAYALAUQAKAUAAAiIAAAAQAAAvgYAZQgYAagnAAQgoAAgogQg");
	this.shape_11.setTransform(27.575,-57.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAZCqIgGhDIglAAIgGBDIhMAAIAtlSIBvAAIAtFSgAgBg7IgJBaIAVAAIgKhaIgBgcg");
	this.shape_12.setTransform(7.8,-56.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmCqIAAkGIgwAAIAAhMICsAAIAABMIgvAAIAAEGg");
	this.shape_13.setTransform(-12.05,-56.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAACqIgWjWIAADWIhNAAIAAlSIBlAAIAVDQIAAjQIBNAAIAAFSg");
	this.shape_14.setTransform(-32.175,-56.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAZCqIgGhDIglAAIgGBDIhMAAIAtlSIBvAAIAtFSgAgBg7IgJBaIAVAAIgKhaIgBgcg");
	this.shape_15.setTransform(-54.4,-56.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhMCqIAAlSICZAAIAABIIhNAAIAAA5IA/AAIAABIIg/AAIAACJg");
	this.shape_16.setTransform(-73.45,-56.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-84.1,-83.8,168.2,110.69999999999999), null);


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
	this.instance.setTransform(-207,-246,1.7004,1.7004);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-207,-246,414.9,79.9), null);


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
	this.instance = new lib.consolation();
	this.instance.setTransform(-105.7,-34.5,0.4395,0.4395);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bonus_prizes_mc, new cjs.Rectangle(-105.7,-34.5,211.4,69), null);


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
	this.instance = new lib._300x600();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_mc, new cjs.Rectangle(-150,-300,300,600), null);


// stage content:
(lib.bigticketawarenesshtml5300x600 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(282.25,587.15,0.0178,0.0178,0,0,0,496.6,468.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAtIgBgUQAKADAGAAQAGAAADgCQABgBABgHIgDAAQgKAAgFgFQgGgFADgLIAJgrIAUAAIgIArQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAIACAAIAJguIAVAAIgOBCQgDAOgHAHQgHAGgNAAQgHAAgJgCg");
	this.shape.setTransform(268.75,588.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAvIAThdIAUAAIgUBdg");
	this.shape_1.setTransform(264.775,585.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAtIAThcIAUAAIgFAYIADAAQAMAAAEAGQAEAGgDANIgEAUQgDAOgHAGQgGAGgMAAQgJAAgNgDgAgDAdIABAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBQACgBAAgEIAFgUIAAgEQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIgBAAg");
	this.shape_2.setTransform(260.185,586.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAxIAOhDIATAAIgOBDgAABgdQgBgDAAgFQABgFADgDQADgDAFAAQAEAAACADQACADgBAFQgBAFgEADQgCACgFAAQgFAAgBgCg");
	this.shape_3.setTransform(256.2167,585.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAhIAGgTQAJADAGAAQAGAAABgDIAAgDIgCgBIgDgCIgCAAQgNgHADgPQACgJAHgGQAGgGAKAAQAJAAAIADIgFATQgIgDgFAAQgGAAgBADIABACIADACIAEACQAHAEACADQADAFgBAIQgCALgIAGQgHAGgMAAQgJAAgJgDg");
	this.shape_4.setTransform(252.025,587.2464);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAjIAJgvQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBAAIgCAAIgKAyIgVAAIAOhBQAPgFAKAAQAWABgFAVIgKAwg");
	this.shape_5.setTransform(246.8382,587.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAKIAEgTQAGgaAWAAQAXAAgGAaIgEATQgFAagWAAQgXAAAFgagAAAgJIgEAUQgBAFADABQACgBAAgFIAFgUQABgHgCAAQgDAAgBAHg");
	this.shape_6.setTransform(241.5834,587.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeAwIAUheQALgBAMAAQAMAAAEAGQAEAGgDAOIgEAUQgDANgHAGQgGAGgMAAIgCAAIgGAYgAAAAFIAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAgBQACgBAAgDIAFgUIAAgFQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIgBAAg");
	this.shape_7.setTransform(235.735,588.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAhIAGgTQAJADAGAAQAGAAABgDIAAgDIgCgBIgDgCIgCAAQgNgHADgPQACgJAHgGQAGgGAKAAQAJAAAIADIgFATQgIgDgFAAQgGAAgBADIABACIADACIAEACQAHAEACADQADAFgBAIQgCALgIAGQgHAGgMAAQgJAAgJgDg");
	this.shape_8.setTransform(230.875,587.2464);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAdQgFgGADgOIAEgSQACgOAHgFQAIgHALAAQALAAAEAHQADAFgCAOIgEAQIgXAAIgBADQgBAHAIAAQAGAAAEgBIgCATIgOABQgNAAgGgHgAABgLIgBAFIAFAAIABgFIABgFQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgCAAgBAGg");
	this.shape_9.setTransform(226.0491,587.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAvIAAgkIgCAAIgHAkIgWAAIAUhdIAWAAQAPAAAFAHQAEAGgCANIgCAHQgDANgIAGIACApgAAAgFIABAAIAEgBIADgFIACgJQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAgBAAIgBAAg");
	this.shape_10.setTransform(220.2696,585.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAtIgBgUQAKADAGAAQAGAAACgCQACgBABgHIgDAAQgKAAgFgFQgGgFADgLIAJgrIAUAAIgIArQAAABAAAAQAAABAAAAQABABAAAAQABAAABAAIABAAIAJguIAVAAIgOBCQgDAOgHAHQgHAGgNAAQgHAAgJgCg");
	this.shape_11.setTransform(213.05,588.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAeQgEgFACgKIAAgBQACgKAHgFQAHgFAKAAIAEAAIAAgDQABgEgCgBQgBgCgEAAQgGAAgKADIAKgUIAGgBIAIgBQANAAAEAGQAFAFgDANIgJArQgQAEgIAAQgLAAgFgGgAgCAIIgCADIAAACIAAAEIADACIABAAIACgNIgCAAIgCACg");
	this.shape_12.setTransform(207.5389,587.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTAvIAThdIAUAAIgUBdg");
	this.shape_13.setTransform(203.625,585.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfAvIAUhdIAWAAQAPAAAEAHQAEAGgCANIgCAIQgDANgIAGQgIAFgMAAIgBAAIgIAjgAAAgEIABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBIADgKQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIgBAAg");
	this.shape_14.setTransform(199.0481,585.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWArIAAhVIAVAAQAKAAAHAGQAHAHAAAMIAAAiQAAAMgHAIQgHAGgKAAgAgCAYIABAAIADgBIAAgEIAAgmIgBgDIgCgBIgBAAg");
	this.shape_15.setTransform(177.125,586.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTArIAAhVIAmAAIAAASIgSAAIAAAPIAOAAIAAARIgOAAIAAARIATAAIAAASg");
	this.shape_16.setTransform(172.45,586.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAGArIgBgRIgJAAIgBARIgUAAIAMhVIAbAAIAMBVgAAAgOIgCAWIAFAAIgCgWIgBgIg");
	this.shape_17.setTransform(167.4,586.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAArIgFg2IAAA2IgUAAIAAhVIAaAAIAFA1IAAg1IAUAAIAABVg");
	this.shape_18.setTransform(160.275,586.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_19.setTransform(156.05,586.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVApIAFgSQAJADAEAAQAGAAAAgFIAAgBQAAgCgCgDIgFgHIgEgEQgGgFgDgFQgCgFAAgIIAAgBQAAgLAFgGQAGgHAKAAQAIAAAKAEIgFARIgKgCQgFAAAAAGIAAABIAAACIABABIABACIACACIACACIAEAEQAGAGADAFQADAFAAAIIAAABQAAALgHAHQgGAHgJAAQgKAAgLgEg");
	this.shape_20.setTransform(151.125,586.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTArIAAhVIAmAAIAAASIgSAAIAAAPIAOAAIAAARIgOAAIAAARIATAAIAAASg");
	this.shape_21.setTransform(146.8,586.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWArIAAgRIAYgyIgVAAIAAgSIAqAAIAAARIgYAxIAYAAIAAATg");
	this.shape_22.setTransform(142.075,586.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_23.setTransform(138.25,586.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAEArIgGggIgCAAIAAAgIgUAAIAAhVIAWAAQANAAAFAFQAGAHAAALIAAAHQAAAMgHAFIAKAmgAgEgFIABAAIADgBIABgEIAAgJIgBgDIgDgBIgBAAg");
	this.shape_24.setTransform(134.175,586.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWArIAAhVIAWAAQAMAAAGAFQAFAHAAALIAAAIQAAAMgGAFQgHAFgKABIgCAAIAAAfgAgCgEIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIABgEIAAgKIgBgDIgCgBIgBAAg");
	this.shape_25.setTransform(128.75,586.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIA3IAAhtIARAAIAABtg");
	this.shape_26.setTransform(120.375,587.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJArIAAgYIgRg9IAVAAIAFAdIAGgdIAVAAIgRA9IAAAYg");
	this.shape_27.setTransform(111.775,586.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUArIAAhVIAUAAIAABCIAVAAIAAATg");
	this.shape_28.setTransform(106.55,586.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWArIAAhVIAWAAQAMAAAGAFQAFAHAAALIAAAIQAAAMgGAFQgHAFgKABIgCAAIAAAfgAgCgEIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIABgEIAAgKIgBgDIgCgBIgBAAg");
	this.shape_29.setTransform(101.55,586.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWArIAAhVIAWAAQAMAAAFAFQAGAHAAALIAAAIQAAAMgGAFQgHAFgKABIgCAAIAAAfgAgCgEIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIABgEIAAgKIgBgDIgCgBIgBAAg");
	this.shape_30.setTransform(96.35,586.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAGArIgBgRIgJAAIgBARIgUAAIAMhVIAbAAIAMBVgAAAgOIgCAWIAFAAIgCgWIgBgIg");
	this.shape_31.setTransform(90.9,586.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgVApIAFgSQAJADAEAAQAGAAAAgFIAAgBQAAgCgCgDIgFgHIgEgEQgGgFgDgFQgCgFAAgIIAAgBQAAgLAFgGQAGgHAKAAQAIAAAKAEIgFARIgKgCQgFAAAAAGIAAABIAAACIABABIABACIACACIACACIAEAEQAGAGADAFQADAFAAAIIAAABQAAALgHAHQgGAHgJAAQgKAAgLgEg");
	this.shape_32.setTransform(84.475,586.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFATIgDglIASAAIgEAlg");
	this.shape_33.setTransform(80.85,584.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPAmQgGgGAAgNIAAglQAAgNAGgGQAHgHALAAQAKAAAHAEIgHAQIgHgBQgHAAAAAJIAAAhQAAAEACADQACACAEAAIABAAIAHgBIAHAQQgJAEgKAAQgLAAgHgHg");
	this.shape_34.setTransform(77.325,586.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgXAnQgHgFAAgMIAAgLQAAgGADgEQADgDAFAAQgEgIAAgGIAAgGQAAgMAEgFQAEgFAMAAQAIAAAEAFQAEAFAAAMIAAAFQAAAOgMADIAHAKIgBgKIAQAAIAAAFIAAAFIAAADIAAAEIgBADIgBAEIgCADIAMARIgVAAIgBgDQgGAEgGAAQgOAAgGgGgAgKAOIAAAFQAAAFACACQACACAEAAIACAAIgKgRgAgFgaIgBABIAAADIAAAKIAAACQAEgBAAgEIAAgHIAAgDIgCgBIgBAAg");
	this.shape_35.setTransform(71.375,586.775);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJArIAAhCIgMAAIAAgTIArAAIAAATIgMAAIAABCg");
	this.shape_36.setTransform(65.725,586.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIA3IAAhtIARAAIAABtg");
	this.shape_37.setTransform(57.675,587.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AABArIAAgUIgZAAIARhBIAcAAIAAAwIAEAAIAAARIgEAAIAAAUgAgEAGIAFAAIAAgeg");
	this.shape_38.setTransform(49.15,586.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNArIAOhDIgUAAIAAgSIAnAAIAAASIgOBDg");
	this.shape_39.setTransform(44.025,586.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgVAsIAAgRQAYgbAAgPIAAgBQABgEgDgCQgCgCgDAAIgLACIgHgQQAKgFAMAAQAKAAAHAHQAFAIAAALIAAABQAAAGgCAGQgCAFgDAGIgHAKIgHAJIATAAIAAASg");
	this.shape_40.setTransform(39.45,586.725);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgVApIAFgSQAJADAEAAQAGAAAAgFIAAgBQAAgCgCgDIgFgHIgEgEQgGgFgDgFQgCgFAAgIIAAgBQAAgLAFgGQAGgHAKAAQAIAAAKAEIgFARIgKgCQgFAAAAAGIAAABIAAACIABABIABACIACACIACACIAEAEQAGAGADAFQADAFAAAIIAAABQAAALgHAHQgGAHgJAAQgKAAgLgEg");
	this.shape_41.setTransform(33.325,586.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgSArIAAhVIAlAAIAAASIgSAAIAAAPIAOAAIAAARIgOAAIAAARIATAAIAAASg");
	this.shape_42.setTransform(29,586.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_43.setTransform(25.45,586.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAEArIgGggIgCAAIAAAgIgUAAIAAhVIAWAAQANAAAFAFQAGAHAAALIAAAHQAAAMgHAFIAKAmgAgEgFIABAAIADgBIABgEIAAgJIgBgDIgDgBIgBAAg");
	this.shape_44.setTransform(21.325,586.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgSArIAAhVIAlAAIAAASIgSAAIAAAPIAPAAIAAARIgPAAIAAARIASAAIAAASg");
	this.shape_45.setTransform(16.5,586.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgVApIAFgSQAJADAEAAQAGAAAAgFIAAgBQAAgCgCgDIgFgHIgEgEQgGgFgDgFQgCgFAAgIIAAgBQAAgLAFgGQAGgHAKAAQAIAAAKAEIgFARIgKgCQgFAAAAAGIAAABIAAACIABABIABACIACACIACACIAEAEQAGAGADAFQADAFAAAIIAAABQAAALgHAHQgGAHgJAAQgKAAgLgEg");
	this.shape_46.setTransform(12.025,586.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(283));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(150,51.15,0.9088,0.9084);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(188).to({alpha:0},16).wait(79));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(150,507.15,0.5386,0.5386,0,0,0,0,0.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(204).to({_off:false},0).wait(1).to({regX:0.4,regY:-206,x:150.2,y:395.95,alpha:0.0032},0).wait(1).to({y:395.6,alpha:0.0145},0).wait(1).to({y:394.85,alpha:0.0371},0).wait(1).to({y:393.5,alpha:0.077},0).wait(1).to({y:391.2,alpha:0.1467},0).wait(1).to({y:387.2,alpha:0.2672},0).wait(1).to({y:382.25,alpha:0.4164},0).wait(1).to({y:377.3,alpha:0.5648},0).wait(1).to({y:373.2,alpha:0.6887},0).wait(1).to({y:370,alpha:0.7859},0).wait(1).to({y:367.45,alpha:0.8625},0).wait(1).to({y:365.45,alpha:0.9229},0).wait(1).to({y:364.1,alpha:0.9628},0).wait(1).to({y:363.35,alpha:0.9857},0).wait(1).to({y:363,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:150,y:473.95,alpha:1},0).wait(63));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(-154.6,356.25,0.7482,0.7482);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(188).to({_off:false},0).wait(1).to({regY:-155,x:-153.6,y:240.3},0).wait(1).to({x:-150.15},0).wait(1).to({x:-143.25},0).wait(1).to({x:-131.1},0).wait(1).to({x:-109.9},0).wait(1).to({x:-73.2},0).wait(1).to({x:-27.7},0).wait(1).to({x:17.45},0).wait(1).to({x:55.2},0).wait(1).to({x:84.8},0).wait(1).to({x:108.1},0).wait(1).to({x:126.55},0).wait(1).to({x:138.7},0).wait(1).to({x:145.65},0).wait(1).to({x:149.05},0).wait(1).to({regY:0,x:150,y:356.25},0).wait(79));

	// bonus_prizes
	this.instance_4 = new lib.bonus_prizes_mc();
	this.instance_4.setTransform(149.7,507.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({y:507.4631,alpha:0.0037},0).wait(1).to({y:507.3326,alpha:0.0167},0).wait(1).to({y:507.0654,alpha:0.0435},0).wait(1).to({y:506.5814,alpha:0.0919},0).wait(1).to({y:505.6844,alpha:0.1816},0).wait(1).to({y:504.252,alpha:0.3248},0).wait(1).to({y:502.6223,alpha:0.4878},0).wait(1).to({y:501.1555,alpha:0.6345},0).wait(1).to({y:500.0009,alpha:0.7499},0).wait(1).to({y:499.1121,alpha:0.8388},0).wait(1).to({y:498.4123,alpha:0.9088},0).wait(1).to({y:497.936,alpha:0.9564},0).wait(1).to({y:497.6656,alpha:0.9834},0).wait(1).to({y:497.536,alpha:0.9964},0).wait(1).to({y:497.5,alpha:1},0).wait(69).to({y:497.4631,alpha:0.9963},0).wait(1).to({y:497.3326,alpha:0.9833},0).wait(1).to({y:497.0654,alpha:0.9565},0).wait(1).to({y:496.5814,alpha:0.9081},0).wait(1).to({y:495.6844,alpha:0.8184},0).wait(1).to({y:494.252,alpha:0.6752},0).wait(1).to({y:492.6223,alpha:0.5122},0).wait(1).to({y:491.1555,alpha:0.3655},0).wait(1).to({y:490.0009,alpha:0.2501},0).wait(1).to({y:489.1121,alpha:0.1612},0).wait(1).to({y:488.4123,alpha:0.0912},0).wait(1).to({y:487.936,alpha:0.0436},0).wait(1).to({y:487.6656,alpha:0.0166},0).wait(1).to({y:487.536,alpha:0.0036},0).wait(1).to({y:487.5,alpha:0},0).to({_off:true},1).wait(169));

	// sub_caption
	this.instance_5 = new lib.daily_caption_mc();
	this.instance_5.setTransform(147.35,549,0.9375,0.9375);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:0.8,regY:-33.4,x:148.1,y:517.6,alpha:0.0037},0).wait(1).to({y:517.35,alpha:0.0167},0).wait(1).to({y:516.85,alpha:0.0435},0).wait(1).to({y:515.95,alpha:0.0919},0).wait(1).to({y:514.25,alpha:0.1816},0).wait(1).to({y:511.6,alpha:0.3248},0).wait(1).to({y:508.55,alpha:0.4878},0).wait(1).to({y:505.8,alpha:0.6345},0).wait(1).to({y:503.6,alpha:0.7499},0).wait(1).to({y:501.95,alpha:0.8388},0).wait(1).to({y:500.65,alpha:0.9088},0).wait(1).to({y:499.75,alpha:0.9564},0).wait(1).to({y:499.25,alpha:0.9834},0).wait(1).to({y:499,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:147.35,y:530.25,alpha:1},0).wait(61).to({regX:0.8,regY:-33.4,x:148.1,y:499,alpha:0.9963},0).wait(1).to({y:499.25,alpha:0.9833},0).wait(1).to({y:499.75,alpha:0.9565},0).wait(1).to({y:500.65,alpha:0.9081},0).wait(1).to({y:502.35,alpha:0.8184},0).wait(1).to({y:505,alpha:0.6752},0).wait(1).to({y:508.05,alpha:0.5122},0).wait(1).to({y:510.8,alpha:0.3655},0).wait(1).to({y:513,alpha:0.2501},0).wait(1).to({y:514.65,alpha:0.1612},0).wait(1).to({y:515.95,alpha:0.0912},0).wait(1).to({y:516.85,alpha:0.0436},0).wait(1).to({y:517.35,alpha:0.0166},0).wait(1).to({y:517.6,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:147.35,y:549,alpha:0},0).wait(95));

	// second_prize_mc
	this.instance_6 = new lib.second_prize_mc();
	this.instance_6.setTransform(149.75,300.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({x:149.7511,y:300.4041,alpha:0.0037},0).wait(1).to({x:149.755,y:300.0648,alpha:0.0167},0).wait(1).to({x:149.763,y:299.37,alpha:0.0435},0).wait(1).to({x:149.7776,y:298.1117,alpha:0.0919},0).wait(1).to({x:149.8045,y:295.7794,alpha:0.1816},0).wait(1).to({x:149.8474,y:292.0553,alpha:0.3248},0).wait(1).to({x:149.8963,y:287.8179,alpha:0.4878},0).wait(1).to({x:149.9403,y:284.0042,alpha:0.6345},0).wait(1).to({x:149.975,y:281.0023,alpha:0.7499},0).wait(1).to({x:150.0016,y:278.6914,alpha:0.8388},0).wait(1).to({x:150.0226,y:276.8721,alpha:0.9088},0).wait(1).to({x:150.0369,y:275.6337,alpha:0.9564},0).wait(1).to({x:150.045,y:274.9307,alpha:0.9834},0).wait(1).to({x:150.0489,y:274.5937,alpha:0.9964},0).wait(1).to({x:150.05,y:274.5,alpha:1},0).wait(61).to({y:274.3893,alpha:0.9963},0).wait(1).to({y:273.9978,alpha:0.9833},0).wait(1).to({y:273.1962,alpha:0.9565},0).wait(1).to({y:271.7442,alpha:0.9081},0).wait(1).to({y:269.0531,alpha:0.8184},0).wait(1).to({y:264.7561,alpha:0.6752},0).wait(1).to({y:259.8668,alpha:0.5122},0).wait(1).to({y:255.4664,alpha:0.3655},0).wait(1).to({y:252.0027,alpha:0.2501},0).wait(1).to({y:249.3362,alpha:0.1612},0).wait(1).to({y:247.237,alpha:0.0912},0).wait(1).to({y:245.8081,alpha:0.0436},0).wait(1).to({y:244.9969,alpha:0.0166},0).wait(1).to({y:244.6081,alpha:0.0036},0).wait(1).to({y:244.5,alpha:0},0).to({_off:true},1).wait(94));

	// promo
	this.instance_7 = new lib.promo_mc();
	this.instance_7.setTransform(412.45,360,0.7807,0.7807);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-0.3,regY:-119.5,x:411.2,y:266.7,alpha:0.0037},0).wait(1).to({x:407.8,alpha:0.0167},0).wait(1).to({x:400.75,alpha:0.0435},0).wait(1).to({x:388.05,alpha:0.0919},0).wait(1).to({x:364.5,alpha:0.1816},0).wait(1).to({x:326.95,alpha:0.3248},0).wait(1).to({x:284.15,alpha:0.4878},0).wait(1).to({x:245.65,alpha:0.6345},0).wait(1).to({x:215.35,alpha:0.7499},0).wait(1).to({x:192.05,alpha:0.8388},0).wait(1).to({x:173.65,alpha:0.9088},0).wait(1).to({x:161.15,alpha:0.9564},0).wait(1).to({x:154.05,alpha:0.9834},0).wait(1).to({x:150.65,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:150,y:360,alpha:1},0).wait(83).to({alpha:0},15).to({_off:true},1).wait(169));

	// background
	this.instance_8 = new lib.background_mc();
	this.instance_8.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-149,300,700.7,300);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_2ndprize.png", id:"_2ndprize"},
		{src:"images/_300x600.jpg", id:"_300x600"},
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