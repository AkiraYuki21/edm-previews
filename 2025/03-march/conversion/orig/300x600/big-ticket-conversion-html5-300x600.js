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
	this.instance.setTransform(-193,-259);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-193,-259,386,208), null);


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
	this.shape.graphics.f("#FFE400").s().p("AgQAbQgHgDgFgHQgFgHAAgKQABgNAJgIQAJgHAOgBQAPABAJAHQAJAIABANQAAAKgFAHQgFAHgHADQgIADgJAAQgIAAgIgDg");
	this.shape.setTransform(127.175,-10.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AALCCIgLicIgKCcIhOAAIgTkDIA/AAIADDHIASjHIAvAAIARDHIADjHIBAAAIgUEDg");
	this.shape_1.setTransform(111.475,-21.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AAACGQghAAgSgTQgRgSAAgjIAAh7QAAglASgSQATgRAfAAIABAAQAiAAARATQARASAAAjIAAB7QAAAlgSARQgSASggAAgAgFhKQgCACAAAGIAACFQAAAGACACQACADADAAQAFAAABgDQACgCAAgGIAAiFQAAgGgCgCQgCgDgEAAIAAAAQgEAAgBADg");
	this.shape_2.setTransform(92.125,-21.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AAACCIgQikIAACkIg8AAIAAkDIBOAAIAPCgIAAigIA8AAIAAEDg");
	this.shape_3.setTransform(75.575,-21.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AgdCCIAAjJIglAAIAAg6ICEAAIAAA6IgkAAIAADJg");
	this.shape_4.setTransform(55.9,-21.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("Ag5CCIAAkDIByAAIAAA3Ig3AAIAAAtIAtAAIAAA2IgtAAIAAAyIA4AAIAAA3g");
	this.shape_5.setTransform(43.025,-21.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AAICCIgWh3IAAB3Ig8AAIAAkDIA8AAIAAB3IAWh3IA/AAIggB7IAkCIg");
	this.shape_6.setTransform(28.15,-21.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AAJCGQgkAAgTgUQgTgUAAgmIAAhvQAAgmATgUQATgUAkAAIAAAAQAPAAANACQANADALAFIgVAwIgLgCIgKAAIAAAAQgMAAgGAHQgFAHAAAOIAABjQAAAOAHAHQAHAHAMAAIALgBIAMgDIAVAvQgNAHgOADQgNADgRAAg");
	this.shape_7.setTransform(13.075,-21.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AgdCCIAAkDIA7AAIAAEDg");
	this.shape_8.setTransform(1.55,-21.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AgdCCIAAjJIgkAAIAAg6ICEAAIAAA6IglAAIAADJg");
	this.shape_9.setTransform(-9.2,-21.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AALCCIgUhjIgEAAIAABjIg8AAIAAkDIBAAAQAcAAARAJQAPAJAHAQQAGAQAAAWIAAASQAAAVgFANQgFANgJAIIAdBygAgNgQIACAAQAIAAADgEQADgDAAgJIAAgZQAAgJgDgDQgCgEgJAAIgCAAg");
	this.shape_10.setTransform(-28.6,-21.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AgjB9QgPgIgJgQQgJgPAAgXIAAjCIA9AAIAADDQAAAGACADQACACADAAQAEAAACgCQACgDAAgGIAAjDIA9AAIAADCQAAAVgHAPQgIAQgPAIQgQAJgXAAQgTAAgQgHg");
	this.shape_11.setTransform(-45.175,-21.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AAACGQghAAgSgTQgRgSAAgjIAAh7QAAglASgSQATgRAfAAIABAAQAiAAARATQARASAAAjIAAB7QAAAlgSARQgSASggAAgAgFhKQgCACAAAGIAACFQAAAGACACQACADADAAQAFAAABgDQACgCAAgGIAAiFQAAgGgCgCQgCgDgEAAIAAAAQgEAAgBADg");
	this.shape_12.setTransform(-61.325,-21.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AgdCCIAAhKIgyi5IA+AAIARBXIAShXIA+AAIgyC5IAABKg");
	this.shape_13.setTransform(-77.45,-21.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AgdCCIAAjJIglAAIAAg6ICFAAIAAA6IglAAIAADJg");
	this.shape_14.setTransform(-96.75,-21.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("Ag5CCIAAkDIByAAIAAA3Ig3AAIAAAtIAtAAIAAA2IgtAAIAAAyIA4AAIAAA3g");
	this.shape_15.setTransform(-109.675,-21.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("AgzB0QgRgSAAgkIAAh7QAAgXAKgQQAKgQARgJQASgIAVAAQAPAAAQADQAQAFAOAIIgVAzQgHgEgJgCQgIgCgJAAQgMAAgFAGQgFAHAAANIAABxQAAAHACADQADADADAAIAFgBIACgBIAAhdIA5AAIAACFIgVAKQgJAEgKACQgKACgNABQgjAAgSgTg");
	this.shape_16.setTransform(-123.725,-21.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdCCIAAjJIglAAIAAg6ICEAAIAAA6IgkAAIAADJg");
	this.shape_17.setTransform(86.6,-59.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgdCCIAAkDIA7AAIAAEDg");
	this.shape_18.setTransform(75.85,-59.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AATCCIgFgzIgcAAIgEAzIg7AAIAjkDIBVAAIAjEDgAAJAYIgIhFIgBgWIAAAWIgIBFIARAAg");
	this.shape_19.setTransform(63.475,-59.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AALCCIgLicIgKCcIhOAAIgTkDIA/AAIADDHIASjHIAvAAIARDHIADjHIBAAAIgUEDg");
	this.shape_20.setTransform(43.675,-59.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AATCCIgFgzIgcAAIgEAzIg7AAIAjkDIBVAAIAjEDgAAJAYIgIhFIgBgWIAAAWIgIBFIARAAg");
	this.shape_21.setTransform(23.825,-59.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgjCDQgPgEgOgGIAPg1IAVAHQAIADAIAAQALAAAEgEQAFgEABgJIAAgBQgBgIgFgIQgFgIgNgNIgLgLQgLgKgHgJQgIgLgEgMQgEgNAAgSIAAAAQABgiAQgTQARgTAeAAQAMAAAPADQAPADAOAGIgQAyIgQgFIgLgBQgLAAgFAEQgFAEAAAIIAAABQABAHAEAHIAQARIAGAGIAGAGQALALAIAJQAIAKAFANQAEANAAATQAAAYgJARQgIARgPAJQgQAJgTAAQgRAAgQgDg");
	this.shape_22.setTransform(4.45,-59.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAACCIgQikIAACkIg8AAIAAkDIBOAAIAPCgIAAigIA8AAIAAEDg");
	this.shape_23.setTransform(-11.025,-59.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdCCIAAkDIA7AAIAAEDg");
	this.shape_24.setTransform(-23.7,-59.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AALCCIgLicIgKCcIhOAAIgTkDIA/AAIADDHIASjHIAvAAIARDHIADjHIBAAAIgUEDg");
	this.shape_25.setTransform(-39.025,-59.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgzB0QgRgTAAgjIAAh7QAAgXAKgQQAKgRARgIQASgJAVAAQAPAAAQAFQAQAEAOAHIgVA0QgHgEgJgCQgIgCgJAAQgMAAgFAHQgFAFAAAOIAAByQAAAGACADQADADADAAIAFgBIACgBIAAhdIA5AAIAACEIgVAKQgJAFgKACQgKADgNgBQgjAAgSgSg");
	this.shape_26.setTransform(-61.925,-59.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgdCCIAAkDIA7AAIAAEDg");
	this.shape_27.setTransform(-73.8,-59.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhFCCIAAkDIBCAAQAUAAAQAGQAQAHAJAOQAJAOAAAWIAAAHQAAATgGANQgHANgPAGQAQAGAHAMQAIANAAAWIAAAQQAAAXgJAPQgIAQgPAHQgQAIgVAAgAgJBKIAEAAQAGAAADgEQADgEAAgGIAAgaQAAgHgDgEQgCgEgHAAIgEAAgAgJgcIAFAAQAGAAADgEQADgEAAgGIAAgQQAAgHgDgEQgCgEgHAAIgFAAg");
	this.shape_28.setTransform(-85.525,-59.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-133.2,-80.7,266.5,87.8), null);


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
	this.shape.graphics.f("#FFE400").s().p("AgQAbQgHgDgFgHQgFgHAAgKQABgNAJgIQAJgHAOgBQAPABAJAHQAJAIABANQAAAKgFAHQgFAHgHADQgIADgJAAQgIAAgIgDg");
	this.shape.setTransform(40.825,-0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AAACCIgQikIAACkIg8AAIAAkDIBOAAIAPCgIAAigIA8AAIAAEDg");
	this.shape_1.setTransform(27.825,-10.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AgdCCIAAkDIA7AAIAAEDg");
	this.shape_2.setTransform(15.15,-10.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AALCCIgLicIgKCcIhOAAIgTkDIA/AAIADDHIASjHIAvAAIARDHIADjHIBAAAIgUEDg");
	this.shape_3.setTransform(-0.175,-10.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AAACGQghAAgSgTQgRgSAAgjIAAh7QAAglASgSQATgRAfAAIABAAQAiAAARATQARASAAAjIAAB7QAAAlgSARQgSASggAAgAgFhKQgCACAAAGIAACFQAAAGACACQACADADAAQAFAAABgDQACgCAAgGIAAiFQAAgGgCgCQgCgDgEAAIAAAAQgEAAgBADg");
	this.shape_4.setTransform(-23.675,-10.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AgcCCIAAjJIgmAAIAAg6ICEAAIAAA6IgkAAIAADJg");
	this.shape_5.setTransform(-38.4,-10.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AgjCDQgOgEgPgGIAQg1IAUAHQAJADAHAAQALAAAEgEQAFgEAAgJIAAgBQAAgIgFgIQgEgIgOgNIgLgLQgLgKgHgJQgIgLgEgMQgEgNAAgSIAAAAQABgiAQgTQASgTAeAAQAMAAAOADQAPADAOAGIgQAyIgQgFIgMgBQgKAAgFAEQgFAEABAIIAAABQAAAHAEAHIAQARIAGAGIAGAGQALALAIAJQAIAKAFANQAEANAAATQAAAYgJARQgIARgPAJQgPAJgUAAQgRAAgQgDg");
	this.shape_6.setTransform(112.65,-44.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("Ag5CCIAAkDIByAAIAAA3Ig3AAIAAAtIAtAAIAAA2IgtAAIAAAyIA4AAIAAA3g");
	this.shape_7.setTransform(99.725,-44.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AAJCGQgkAAgTgUQgTgUAAgmIAAhvQAAgmATgUQATgUAkAAIAAAAQAPAAANACQANADALAFIgVAwIgLgCIgKAAIAAAAQgMAAgGAHQgFAHAAAOIAABjQAAAOAHAHQAHAHAMAAIALgBIAMgDIAVAvQgNAHgOADQgNADgRAAg");
	this.shape_8.setTransform(86.725,-44.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AAACCIgQikIAACkIg8AAIAAkDIBOAAIAPCgIAAigIA8AAIAAEDg");
	this.shape_9.setTransform(70.475,-44.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AATCCIgFgzIgcAAIgEAzIg7AAIAjkDIBVAAIAjEDgAAJAYIgIhFIgBgWIAAAWIgIBFIARAAg");
	this.shape_10.setTransform(53.375,-44.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AAICCIAAhnIgQAAIAABnIg7AAIAAkDIA7AAIAABiIAQAAIAAhiIA8AAIAAEDg");
	this.shape_11.setTransform(37.25,-44.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AAJCGQgkAAgTgUQgTgUAAgmIAAhvQAAgmATgUQATgUAkAAIAAAAQAPAAANACQANADALAFIgVAwIgLgCIgKAAIAAAAQgMAAgGAHQgFAHAAAOIAABjQAAAOAHAHQAHAHAMAAIALgBIAMgDIAVAvQgNAHgOADQgNADgRAAg");
	this.shape_12.setTransform(23.475,-44.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("Ag5CCIAAkDIByAAIAAA3Ig3AAIAAAtIAtAAIAAA2IgtAAIAAAyIA4AAIAAA3g");
	this.shape_13.setTransform(5.625,-44.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AALCCIgUhjIgEAAIAABjIg8AAIAAkDIBAAAQAcAAARAJQAPAJAHAQQAGAQAAAWIAAASQAAAVgFANQgFANgJAIIAdBygAgNgQIADAAQAHAAADgEQADgDAAgJIAAgZQAAgJgDgDQgDgEgHAAIgDAAg");
	this.shape_14.setTransform(-9.5,-44.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AAACGQghAAgSgTQgRgSAAgjIAAh7QAAglASgSQATgRAfAAIABAAQAiAAARATQARASAAAjIAAB7QAAAlgSARQgSASggAAgAgFhKQgCACAAAGIAACFQAAAGACACQACADADAAQAFAAABgDQACgCAAgGIAAiFQAAgGgCgCQgCgDgEAAIAAAAQgEAAgBADg");
	this.shape_15.setTransform(-25.725,-44.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("AArCCIAAjCIgDAeIgRCkIgtAAIgRikIgDgeIAADCIg6AAIAAkDIBbAAIAJB7IAAATIACgTIAJh7IBaAAIAAEDg");
	this.shape_16.setTransform(-44.675,-44.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("AAICCIAAhnIgPAAIAABnIg8AAIAAkDIA8AAIAABiIAPAAIAAhiIA8AAIAAEDg");
	this.shape_17.setTransform(-67.65,-44.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE400").s().p("AgdCCIAAjJIglAAIAAg6ICFAAIAAA6IglAAIAADJg");
	this.shape_18.setTransform(-81.9,-44.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE400").s().p("AgdCCIAAkDIA7AAIAAEDg");
	this.shape_19.setTransform(-92.65,-44.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE400").s().p("AALCCIgLicIgKCcIhOAAIgTkDIA/AAIADDHIASjHIAvAAIARDHIADjHIBAAAIgUEDg");
	this.shape_20.setTransform(-108.025,-44.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAICCIAAhnIgQAAIAABnIg7AAIAAkDIA7AAIAABiIAQAAIAAhiIA8AAIAAEDg");
	this.shape_21.setTransform(128.6,-77.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAJCGQgkAAgTgUQgTgUAAgmIAAhvQAAgmATgUQATgUAkAAIAAAAQAPAAANACQANADALAFIgVAwIgLgCIgKAAIAAAAQgMAAgGAHQgFAHAAAOIAABjQAAAOAHAHQAHAHAMAAIALgBIAMgDIAVAvQgNAHgOADQgNADgRAAg");
	this.shape_22.setTransform(114.875,-77.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AALCCIgUhjIgEAAIAABjIg8AAIAAkDIBAAAQAcAAAQAJQARAJAGAQQAHAQgBAWIAAASQAAAVgFANQgFANgKAIIAeBygAgNgQIACAAQAJAAACgEQADgDAAgJIAAgZQAAgJgDgDQgCgEgJAAIgCAAg");
	this.shape_23.setTransform(98.9,-77.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AATCCIgFgzIgcAAIgEAzIg7AAIAjkDIBVAAIAjEDgAAJAYIgIhFIgBgWIAAAWIgIBFIARAAg");
	this.shape_24.setTransform(82.125,-77.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AArCCIAAjCIgDAeIgRCkIgtAAIgRikIgDgeIAADCIg6AAIAAkDIBbAAIAJB7IAAATIACgTIAJh7IBaAAIAAEDg");
	this.shape_25.setTransform(62.625,-77.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag5CCIAAkDIByAAIAAA3Ig3AAIAAAtIAtAAIAAA2IgtAAIAAAyIA4AAIAAA3g");
	this.shape_26.setTransform(41.325,-77.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgdCCIAAjJIglAAIAAg6ICFAAIAAA6IglAAIAADJg");
	this.shape_27.setTransform(27.8,-77.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AATCCIgFgzIgcAAIgEAzIg7AAIAjkDIBVAAIAjEDgAAJAYIgIhFIgBgWIAAAWIgIBFIARAAg");
	this.shape_28.setTransform(12.575,-77.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AALCCIgUhjIgEAAIAABjIg8AAIAAkDIBAAAQAcAAAQAJQAQAJAHAQQAHAQgBAWIAAASQAAAVgFANQgFANgKAIIAeBygAgNgQIACAAQAJAAACgEQADgDAAgJIAAgZQAAgJgDgDQgCgEgJAAIgCAAg");
	this.shape_29.setTransform(-4.25,-77.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhFCCIAAkDIBCAAQAUAAAQAGQAQAHAJAOQAJAOAAAWIAAAHQAAATgGANQgHANgPAGQAQAGAHAMQAIANAAAWIAAAQQAAAXgJAPQgIAQgPAHQgQAIgVAAgAgJBKIAEAAQAGAAADgEQADgEAAgGIAAgaQAAgHgDgEQgCgEgHAAIgEAAgAgJgcIAFAAQAGAAADgEQADgEAAgGIAAgQQAAgHgDgEQgCgEgHAAIgFAAg");
	this.shape_30.setTransform(-20.375,-77.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag5CCIAAkDIByAAIAAA3Ig3AAIAAAtIAtAAIAAA2IgtAAIAAAyIA4AAIAAA3g");
	this.shape_31.setTransform(-34.425,-77.675);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag8CCIAAkDIA8AAIAADIIA9AAIAAA7g");
	this.shape_32.setTransform(-48.5,-77.675);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag5CCIAAkDIByAAIAAA3Ig3AAIAAAtIAtAAIAAA2IgtAAIAAAyIA4AAIAAA3g");
	this.shape_33.setTransform(-61.675,-77.675);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAJCGQgkAAgTgUQgTgUAAgmIAAhvQAAgmATgUQATgUAkAAIAAAAQAPAAANACQANADALAFIgVAwIgLgCIgKAAIAAAAQgMAAgGAHQgFAHAAAOIAABjQAAAOAHAHQAHAHAMAAIALgBIAMgDIAVAvQgNAHgOADQgNADgRAAg");
	this.shape_34.setTransform(-74.675,-77.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhECCIAAkDIBAAAQAUAAARAJQAQAJAKARQAKARAAAYIAABpQAAAYgKASQgJARgRAKQgQAJgVAAgAgIBKIACAAQAJAAACgEQADgFAAgKIAAhwQAAgKgEgDQgEgDgGAAIgCAAg");
	this.shape_35.setTransform(-94.3,-77.675);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAACCIgQikIAACkIg8AAIAAkDIBOAAIAPCgIAAigIA8AAIAAEDg");
	this.shape_36.setTransform(-110.825,-77.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AATCCIgFgzIgcAAIgEAzIg7AAIAjkDIBVAAIAjEDgAAJAYIgIhFIgBgWIAAAWIgIBFIARAAg");
	this.shape_37.setTransform(-127.875,-77.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-138,-98.8,276,116.5), null);


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


// stage content:
(lib.bigticketconversionhtml5300x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgTAvIgFgBIgFgBIgBgUIAJACIAHABIAGgBQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAIACgHIgBAAIgCAAQgGAAgEgCQgFgCgCgEQgCgFABgIIAJgrIAUAAIgIArIAAACIACABIABAAIABAAIAEgXIAFgXIAVAAIgOBCQgDAOgHAHQgHAGgNAAIgGAAg");
	this.shape.setTransform(268.75,588.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAvIAThdIAUAAIgUBdg");
	this.shape_1.setTransform(264.775,585.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAvIgLgCIAThcIAUAAIgFAYIADAAQAMAAAEAGQAEAGgDANIgEAUQgDAOgHAGQgHAGgLAAIgLgBgAgDAdIABAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAABgBIABgFIAFgUIAAgEQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgBAAg");
	this.shape_2.setTransform(260.185,586.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAxIAOhDIATAAIgOBDgAABgdQgBgDAAgFQABgFADgDQADgDAFAAQAEAAACADQACADgBAFQgBAFgEADQgCACgFAAQgFAAgBgCg");
	this.shape_3.setTransform(256.2167,585.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAjIgLgCIAGgUIAIADIAHAAIAFAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIAAgCIgCgBIgDgCIgCgBQgGgDgDgFQgDgFACgIQABgGADgEQAEgFAFgDQAFgDAHAAIAHABIAKACIgFATIgHgCIgGgBIgFABIgCACIABACIADACIACABIACABIAHAEQADADABAEQABADgBAGQgCAHgDAEQgEAGgGADQgGADgIAAIgHgBg");
	this.shape_4.setTransform(252.025,587.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAjIAJgvIAAgCIgCgBIgBAAIgBAAIgKAyIgVAAIAOhBIAOgDIALgCQAKABAFAEQAEAFgCAMIgKAwg");
	this.shape_5.setTransform(246.8333,587.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAeQgFgHADgNIAEgTQADgOAHgFQAIgHAKAAQALAAAEAHQAFAFgDAOIgEATQgDANgHAHQgHAGgLAAQgLAAgEgGgAABgOIgBAFIgEAUIAAAFQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAIACgBIAAgFIAFgUIAAgFQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAg");
	this.shape_6.setTransform(241.575,587.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeAwIAUheIAIAAIAIgBIAHAAQAMAAAEAGQAEAGgDAOIgEAUQgDANgHAGQgHAGgLAAIgDAAIgFAYgAAAAFIAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBIABgEIAFgUIAAgFQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgBAAg");
	this.shape_7.setTransform(235.735,588.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAjIgLgCIAGgUIAIADIAHAAIAFAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIAAgCIgCgBIgDgCIgCgBQgGgDgDgFQgDgFACgIQABgGADgEQAEgFAFgDQAFgDAHAAIAHABIAKACIgFATIgHgCIgGgBIgFABIgCACIABACIADACIACABIACABIAHAEQADADABAEQABADgBAGQgCAHgDAEQgEAGgGADQgGADgIAAIgHgBg");
	this.shape_8.setTransform(230.875,587.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAdQgFgGADgOIAEgSQACgOAHgFQAIgHALAAQALAAAEAHQADAFgCAOIgEAQIgXAAIgBADQgBADACACQACACAEAAIAFAAIAFgBIgCATIgIABIgHAAQgMAAgGgHgAACgQIgBAFIgBAFIAFAAIABgFIABgFIgDgBIgCABg");
	this.shape_9.setTransform(226.0491,587.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAvIAAgkIgCAAIgHAkIgWAAIAUhdIAWAAQALAAAFADQAFADABAGQABAGgBAIIgCAHQgBAHgDAFQgDAEgEADIACApgAAAgFIABAAIAEgBIADgFIACgJQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAgBAAIgBAAg");
	this.shape_10.setTransform(220.2625,585.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAvIgGgBIgFgBIgBgUIAJACIAHABIAGgBQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAIACgHIgBAAIgCAAQgGAAgEgCQgFgCgCgEQgCgFABgIIAJgrIAUAAIgIArIAAACIADABIAAAAIABAAIAEgXIAFgXIAVAAIgOBCQgDAOgHAHQgHAGgNAAIgFAAg");
	this.shape_11.setTransform(213.05,588.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAeQgEgFACgKIAAgBQACgKAHgFQAHgFAKAAIACAAIACAAIAAgDQABgEgCgBQgBgCgEAAIgIABIgIACIAKgUIADAAIAFgBIAGgBQAJAAAFADQAEACABAGQACAFgCAIIgKArIgMADIgMABQgKAAgFgGgAgCAIQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAIAAACQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAQAAAAABAAIABAAIACgNIgCAAIgCACg");
	this.shape_12.setTransform(207.5264,587.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTAvIAThdIAUAAIgUBdg");
	this.shape_13.setTransform(203.625,585.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggAvIAUhdIAWAAQALAAAFADQAFADABAGQABAGgCAIIgCAIQgCAKgEAFQgFAFgGACQgHADgGgBIgCAAIgHAjgAAAgEIABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBAAgBIACgKQABAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgBAAg");
	this.shape_14.setTransform(199.0571,585.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWArIAAhVIAVAAQAGAAAGADQAGADADAFQADAGAAAIIAAAiQAAAJgDAGQgDAFgGADQgGADgGAAgAgCAYIABAAIADgBQABgBgBgDIAAgmIgBgEQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAABIgBAAg");
	this.shape_15.setTransform(176.075,586.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSArIAAhVIAlAAIAAASIgSAAIAAAPIAPAAIAAARIgPAAIAAARIASAAIAAASg");
	this.shape_16.setTransform(171.375,586.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAHArIgCgRIgJAAIgCARIgTAAIALhVIAcAAIAMBVgAADAIIgCgWIgBgIIAAAIIgCAWIAFAAg");
	this.shape_17.setTransform(166.35,586.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAArIgFg2IAAA2IgUAAIAAhVIAaAAIAFA1IAAg1IAUAAIAABVg");
	this.shape_18.setTransform(159.25,586.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_19.setTransform(155,586.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLAsIgKgDIAFgSIAHACIAGABQADAAABgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgHIgEgEIgGgGIgEgHIgBgKIAAgBQAAgLAFgGQAGgHAKAAIAIABIAKADIgFARIgGgBIgEgBQgDAAgCABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABQABACABACIAFAGIACACIACACIAGAGQADADABAFQACAEAAAGIAAABQAAAIgDAFQgDAGgFADQgFADgGAAIgLgBg");
	this.shape_20.setTransform(150.075,586.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSArIAAhVIAlAAIAAASIgSAAIAAAPIAPAAIAAARIgPAAIAAARIASAAIAAASg");
	this.shape_21.setTransform(145.725,586.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPAmQgGgGAAgNIAAglQAAgMAGgHQAGgHAMAAIAJABQAEABAEACIgHAQIgEgBIgDAAQgEAAgCACQgBADAAAEIAAAhQAAAEABADQADACAEAAIAAAAIAEAAIAEgBIAHAQIgJADIgKABQgMAAgGgHg");
	this.shape_22.setTransform(141.45,586.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_23.setTransform(137.55,586.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAEArIgGggIgCAAIAAAgIgUAAIAAhVIAWAAQAJAAAFADQAFACACAGQADAGAAAGIAAAHQAAAGgCAFQgCADgDADIAKAmgAgEgFIABAAQABAAAAAAQABAAABAAQAAAAAAAAQAAgBAAAAIABgEIAAgJIgBgDQAAgBAAAAQAAAAAAAAQgBgBAAAAQgBAAgBABIgBAAg");
	this.shape_24.setTransform(133.425,586.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWArIAAhVIAVAAQAJAAAGADQAFACACAGQACAGAAAGIAAAIQAAAJgDAFQgEAEgFADQgFACgHAAIgBAAIAAAfgAgCgEIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIACgEIAAgKIgCgDQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAgBABIgBAAg");
	this.shape_25.setTransform(128.05,586.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIA3IAAhtIARAAIAABtg");
	this.shape_26.setTransform(119.625,587.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJArIAAgYIgRg9IAVAAIAFAdIAGgdIAVAAIgRA9IAAAYg");
	this.shape_27.setTransform(111.075,586.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUArIAAhVIAUAAIAABCIAVAAIAAATg");
	this.shape_28.setTransform(105.85,586.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWArIAAhVIAWAAQAIAAAGADQAFACACAGQACAGAAAGIAAAIQAAAJgDAFQgDAEgGADQgGACgFAAIgCAAIAAAfgAgCgEIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIABgEIAAgKIgBgDQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAgBABIgBAAg");
	this.shape_29.setTransform(100.85,586.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWArIAAhVIAWAAQAIAAAFADQAGACACAGQACAGAAAGIAAAIQAAAJgDAFQgDAEgGADQgGACgFAAIgCAAIAAAfgAgCgEIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBABAAIAAgEIAAgKIAAgDQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAAAgBABIgBAAg");
	this.shape_30.setTransform(95.6,586.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAGArIgBgRIgJAAIgCARIgTAAIALhVIAcAAIAMBVgAADAIIgCgWIgBgIIAAAIIgCAWIAFAAg");
	this.shape_31.setTransform(90.2,586.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgLAsIgKgDIAFgSIAHACIAGABQADAAABgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgHIgEgEIgGgGIgEgHIgBgKIAAgBQAAgLAFgGQAGgHAKAAIAIABIAKADIgFARIgGgBIgEgBQgDAAgCABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABQABACABACIAFAGIACACIACACIAGAGQADADABAFQACAEAAAGIAAABQAAAIgDAFQgDAGgFADQgFADgGAAIgLgBg");
	this.shape_32.setTransform(83.775,586.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFATIgEglIATAAIgFAlg");
	this.shape_33.setTransform(80.1,584.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPAmQgGgGAAgNIAAglQAAgMAGgHQAGgHAMAAIAJABQAEABAEACIgHAQIgEgBIgDAAQgEAAgCACQgBADAAAEIAAAhQAAAEABADQADACAEAAIABAAIADAAIAEgBIAHAQIgJADIgKABQgMAAgGgHg");
	this.shape_34.setTransform(76.65,586.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgXAnQgHgFAAgMIAAgLQABgGACgEQADgCAFgBIgDgIIgBgGIAAgGQAAgIACgFQABgEAFgDQAEgCAIAAQAFAAAEACQADACACAFQACAFAAAIIAAAFIgBAHQgBADgDADQgCADgFABIAHAKIgBgEIAAgGIAQAAIAAALIgBAIQAAAEgDAEIAMARIgVAAIgBgDIgGADIgGABQgOAAgGgGgAgKAOIAAACIAAADQAAAFACACQACACAEAAIABAAIABAAIgKgRgAgGgZIAAADIAAAKIAAABIAAABIADgCIABgDIAAgHIAAgDIgCgBIgCABg");
	this.shape_35.setTransform(70.675,586.775);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJArIAAhCIgMAAIAAgTIArAAIAAATIgMAAIAABCg");
	this.shape_36.setTransform(65.025,586.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIA3IAAhtIARAAIAABtg");
	this.shape_37.setTransform(56.975,587.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgKArIgLgDIAHgRIAFADIAGABQADAAAAgDIABgEIAAgHIAAgDIgBgDIgFgBIgDAAIAAgNIADAAIAFgCIAAgCIAAgDIAAgFIAAgFQgBgDgDAAIgEACIgEADIgIgRIALgEIAJgBQAJAAAGAGQAGAHAAALIAAABQAAAHgDAFQgCAEgGABQAGABADAEQADAGAAAHIAAAFQAAALgGAHQgGAFgKABIgKgCg");
	this.shape_38.setTransform(48.65,586.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNArIAOhDIgUAAIAAgSIAnAAIAAASIgOBDg");
	this.shape_39.setTransform(44.025,586.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgVAsIAAgRIAMgPQAGgHADgHQADgHAAgGIAAgBIgBgFIgCgDIgEAAIgGABIgFABIgHgQIAKgEQAFgBAHAAQAHAAAFADQAFAEADAGQACAGAAAHIAAABQAAAGgCAGQgCAFgDAGIgHAKIgHAJIATAAIAAASg");
	this.shape_40.setTransform(39.45,586.725);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgLAsIgKgDIAFgSIAHACIAGABQADAAABgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAAgBQAAgCgCgDIgFgHIgEgEIgGgGIgEgHIgBgKIAAgBQAAgLAFgGQAGgHAKAAIAIABIAKADIgFARIgGgBIgEgBQgDAAgCABQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAABQABACABACIAFAGIACACIACACIAGAGQADADABAFQACAEAAAGIAAABQAAAIgDAFQgDAGgFADQgFADgGAAIgLgBg");
	this.shape_41.setTransform(33.325,586.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgSArIAAhVIAlAAIAAASIgSAAIAAAPIAPAAIAAARIgPAAIAAARIASAAIAAASg");
	this.shape_42.setTransform(29.025,586.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_43.setTransform(25.45,586.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAEArIgGggIgCAAIAAAgIgUAAIAAhVIAWAAQAJAAAFADQAFACACAGQADAGAAAGIAAAHQAAAGgCAFQgCADgDADIAKAmgAgEgFIABAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAIABgEIAAgJIgBgDQAAgBAAAAQAAAAAAAAQgBgBAAAAQgBAAgBABIgBAAg");
	this.shape_44.setTransform(21.325,586.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgSArIAAhVIAlAAIAAASIgSAAIAAAPIAPAAIAAARIgPAAIAAARIASAAIAAASg");
	this.shape_45.setTransform(16.525,586.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgLAsIgKgDIAFgSIAHACIAGABQADAAABgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgHIgEgEIgGgGIgEgHIgBgKIAAgBQAAgLAFgGQAGgHAKAAIAIABIAKADIgFARIgGgBIgEgBQgDAAgCABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABQABACABACIAFAGIACACIACACIAGAGQADADABAFQACAEAAAGIAAABQAAAIgDAFQgDAGgFADQgFADgGAAIgLgBg");
	this.shape_46.setTransform(12.025,586.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(283));

	// footer_bg
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A5050F").s().p("A3bCIIAAkPMAu3AAAIAAEPg");
	this.shape_47.setTransform(150,586.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(283));

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

	// main_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(147.35,549,0.9375,0.9375);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regY:-40.4,y:511.05,alpha:0.0037},0).wait(1).to({y:510.8,alpha:0.0167},0).wait(1).to({y:510.3,alpha:0.0435},0).wait(1).to({y:509.4,alpha:0.0919},0).wait(1).to({y:507.7,alpha:0.1816},0).wait(1).to({y:505.05,alpha:0.3248},0).wait(1).to({y:502,alpha:0.4878},0).wait(1).to({y:499.25,alpha:0.6345},0).wait(1).to({y:497.05,alpha:0.7499},0).wait(1).to({y:495.4,alpha:0.8388},0).wait(1).to({y:494.1,alpha:0.9088},0).wait(1).to({y:493.2,alpha:0.9564},0).wait(1).to({y:492.7,alpha:0.9834},0).wait(1).to({y:492.45,alpha:0.9964},0).wait(1).to({regY:0,y:530.25,alpha:1},0).wait(69).to({regY:-40.4,y:492.45,alpha:0.9963},0).wait(1).to({y:492.7,alpha:0.9833},0).wait(1).to({y:493.2,alpha:0.9565},0).wait(1).to({y:494.1,alpha:0.9081},0).wait(1).to({y:495.8,alpha:0.8184},0).wait(1).to({y:498.45,alpha:0.6752},0).wait(1).to({y:501.5,alpha:0.5122},0).wait(1).to({y:504.25,alpha:0.3655},0).wait(1).to({y:506.45,alpha:0.2501},0).wait(1).to({y:508.1,alpha:0.1612},0).wait(1).to({y:509.4,alpha:0.0912},0).wait(1).to({y:510.3,alpha:0.0436},0).wait(1).to({y:510.8,alpha:0.0166},0).wait(1).to({y:511.05,alpha:0.0036},0).wait(1).to({regY:0,y:549,alpha:0},0).to({_off:true},1).wait(169));

	// sub_caption
	this.instance_5 = new lib.daily_caption_mc();
	this.instance_5.setTransform(147.35,549,0.9375,0.9375);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:-0.1,regY:-44.3,x:147.25,y:507.35,alpha:0.0037},0).wait(1).to({y:507.1,alpha:0.0167},0).wait(1).to({y:506.6,alpha:0.0435},0).wait(1).to({y:505.7,alpha:0.0919},0).wait(1).to({y:504,alpha:0.1816},0).wait(1).to({y:501.35,alpha:0.3248},0).wait(1).to({y:498.3,alpha:0.4878},0).wait(1).to({y:495.55,alpha:0.6345},0).wait(1).to({y:493.35,alpha:0.7499},0).wait(1).to({y:491.7,alpha:0.8388},0).wait(1).to({y:490.4,alpha:0.9088},0).wait(1).to({y:489.5,alpha:0.9564},0).wait(1).to({y:489,alpha:0.9834},0).wait(1).to({y:488.75,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:147.35,y:530.25,alpha:1},0).wait(61).to({regX:-0.1,regY:-44.3,x:147.25,y:488.75,alpha:0.9963},0).wait(1).to({y:489,alpha:0.9833},0).wait(1).to({y:489.5,alpha:0.9565},0).wait(1).to({y:490.4,alpha:0.9081},0).wait(1).to({y:492.1,alpha:0.8184},0).wait(1).to({y:494.75,alpha:0.6752},0).wait(1).to({y:497.8,alpha:0.5122},0).wait(1).to({y:500.55,alpha:0.3655},0).wait(1).to({y:502.75,alpha:0.2501},0).wait(1).to({y:504.4,alpha:0.1612},0).wait(1).to({y:505.7,alpha:0.0912},0).wait(1).to({y:506.6,alpha:0.0436},0).wait(1).to({y:507.1,alpha:0.0166},0).wait(1).to({y:507.35,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:147.35,y:549,alpha:0},0).wait(95));

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
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A5050F").s().p("EgXbAu4IAAnXMAAAhWYMAu3AAAMAAABWYIAAHXg");
	this.shape_48.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-149,300,700.7,300.1);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 300,
	height: 600,
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