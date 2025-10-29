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
p.nominalBounds = new cjs.Rectangle(0,0,519,247);


(lib._320x50 = function() {
	this.initialize(img._320x50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.b2g2 = function() {
	this.initialize(img.b2g2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,255,300);


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
	this.instance.setTransform(-1858,-282,2.6076,2.6076);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-1858,-282,1006.5,542.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AA7LAIhxoYIgWAAIAAIYIlDAAIAA1/IFZAAQDgAABYBkQBWBkAAC/IAABlQABDOhoBaICgJrgAhMhbIAPAAQAqAAARgUQARgTAAgvIAAiHQAAgvgRgTQgRgTgqAAIgPAAg");
	this.shape.setTransform(945.6,-59.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak3LAIAA1/IJsAAIAAEsIkqAAIAADwIDxAAIAAEtIjxAAIAAEKIEtAAIAAEsg");
	this.shape_1.setTransform(867.5,-59.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Al4LAIAA1/IFjAAQCwAABnBVQBoBVAACwIAAAiQAABugjBCQgjBDhPAjQCkA6AADoIAABWQAAC1hjBgQhkBgirAAgAg1GPIAUAAQAnAAAOgTQAPgRAAgpIAAiKQAAgrgOgSQgOgUgoAAIgUAAgAg1icIAZAAQAnAAAPgSQAOgSAAgpIAAhUQAAgqgNgTQgOgTgpAAIgZAAg");
	this.shape_2.setTransform(789.125,-59.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADmLAIAAwfIgOCiIhfN9IjyAAIhgt9IgOiiIAAQfIk5AAIAA1/IHqAAIAvKbIAHBqIAIhqIAyqbIHnAAIAAV/g");
	this.shape_3.setTransform(686.675,-59.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ak3LAIAA1/IJrAAIAAEsIkpAAIAADwIDxAAIAAEtIjxAAIAAEKIEtAAIAAEsg");
	this.shape_4.setTransform(594.15,-59.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjYLAIje1/IFWAAIBiPeIBfveIFWAAIjeV/g");
	this.shape_5.setTransform(510.4,-59.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AABLVQi4AAhfhkQhfhlAAi8IAAqdQAAjCBhhiQBihjCyAAIADAAQC4AABeBlQBdBlAAC9IAAKdQAADDhgBhQhgBhixAAgAgqlnIAALRQAAA7AqAAIABAAQAsAAAAg7IAArRQAAg8gtAAIgBAAQgpAAAAA8g");
	this.shape_6.setTransform(420.325,-59.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgELAIhZt8IAAN8IlDAAIAA1/IGpAAIBWNnIAAtnIFCAAIAAV/g");
	this.shape_7.setTransform(330.825,-59.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AldKSIBUkiQCJA1A6AAQByAAAAhYIAAgJQAAgogcgrQgcgshFhFIg9g7QhjhigshUQgrhUAAiFIAAgDQAAi4BehnQBdhoCnAAQCHAAChBBIhTEPQhmgfgxAAQhuAAAABZIAAAGQAAAMAEAMQAEAMAGALQAHAKALAPIAWAaIAeAfIAfAiQArAvAYAVQBlBlAtBTQAsBSAACOIAAACQAAC/hkBsQhkBtilAAQinAAinhDg");
	this.shape_8.setTransform(224.7,-59.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AihLAIAA1/IFCAAIAAV/g");
	this.shape_9.setTransform(166.55,-59.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAsLAIAAorIhXAAIAAIrIlDAAIAA1/IFDAAIAAITIBXAAIAAoTIFDAAIAAV/g");
	this.shape_10.setTransform(103.35,-59.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AigLAIAAxBIjGAAIAAk+ILNAAIAAE+IjFAAIAARBg");
	this.shape_11.setTransform(26.375,-59.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AldKSIBUkiQCJA1A7AAQBxAAAAhYIAAgJQAAgogcgrQgcgshFhFIg9g7QhkhigrhUQgrhUAAiFIAAgDQAAi4BehnQBdhoCnAAQCHAAChBBIhTEPQhngfgwAAQhuAAAABZIAAAGQAAAMAFAMQADAMAHALQAGAKALAPIAWAaIAeAfIAfAiQArAvAYAVQBlBlAtBTQAsBSAACOIAAACQAAC/hkBsQhkBtilAAQinAAinhDg");
	this.shape_12.setTransform(1191.45,-249.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ak3LAIAA1/IJrAAIAAEsIkpAAIAADwIDxAAIAAEtIjxAAIAAEKIEtAAIAAEsg");
	this.shape_13.setTransform(1121.9,-249.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AltLAIAAkbIGFs0IlYAAIAAkwIKuAAIAAEbImNM1IGLAAIAAEvg");
	this.shape_14.setTransform(1045.45,-249.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AigLAIAA1/IFCAAIAAV/g");
	this.shape_15.setTransform(983.9,-249.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA7LAIhxoYIgWAAIAAIYIlDAAIAA1/IFZAAQDfAABZBkQBWBkABC/IAABkQAADPhpBZIChJsgAhMhbIAPAAQArAAAQgUQARgTAAgvIAAiHQAAgvgRgTQgQgTgrAAIgPAAg");
	this.shape_16.setTransform(917.35,-249.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AlyLAIAA1/IFWAAQDgAABXBkQBYBkAAC/IAAB1QAADVhoBTQhnBVjAAAIgTAAIAAIGgAgvhLIANAAQAoAAARgSQASgUAAgvIAAiYQAAgvgSgTQgRgTgoAAIgNAAg");
	this.shape_17.setTransform(829.9,-249.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ak3LAIAA1/IJsAAIAAEsIkqAAIAADwIDyAAIAAEtIjyAAIAAEKIEtAAIAAEsg");
	this.shape_18.setTransform(732.15,-249.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AlILAIAA1/IFDAAIAARBIFPAAIAAE+g");
	this.shape_19.setTransform(656,-249.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Al4LAIAA1/IFjAAQCwAABnBVQBoBVAACwIAAAiQAABugjBCQgjBDhPAjQCkA6AADoIAABWQAAC0hjBhQhkBgirAAgAg1GPIAUAAQAnAAAOgTQAPgSAAgoIAAiLQAAgqgOgSQgOgUgoAAIgUAAgAg1icIAZAAQAnAAAPgSQAOgSAAgpIAAhUQAAgpgNgUQgOgTgpAAIgZAAg");
	this.shape_20.setTransform(575.875,-249.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AihLAIAA1/IFDAAIAAV/g");
	this.shape_21.setTransform(511.6,-249.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Al0LAIAA1/IFbAAQCtAABwBxQBwBwABC+IAAI4QgBDAhwB0QhwB0isAAgAgxGPIAOAAQAuAAAOgWQAOgVAAg8IAApfQAAg2gRgQQgRgQgoAAIgOAAg");
	this.shape_22.setTransform(447.85,-249.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ak3LAIAA1/IJrAAIAAEsIkpAAIAADwIDxAAIAAEtIjxAAIAAEKIEtAAIAAEsg");
	this.shape_23.setTransform(372.55,-249.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AA7LAIhxoYIgWAAIAAIYIlDAAIAA1/IFZAAQDfAABZBkQBWBkABC/IAABkQAADPhoBZICgJsgAhMhbIAPAAQArAAAQgUQARgTAAgvIAAiHQAAgvgRgTQgQgTgrAAIgPAAg");
	this.shape_24.setTransform(290.95,-249.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAxLWQjIAAhmhsQhnhsAAjRIAApYQAAjTBnhrQBmhsDIAAIABAAQCZAACAA5Ih1EFQgygQg8AAIgCAAQh/AAAACbIAAIZQAABJAnApQAoAoBCAAIACAAQA4AABAgaIBzEDQiNBGimAAg");
	this.shape_25.setTransform(211.75,-249.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgELAIhZt8IAAN8IlDAAIAA1/IGpAAIBWNnIAAtnIFCAAIAAV/g");
	this.shape_26.setTransform(123.975,-249.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AihLAIAA1/IFDAAIAAV/g");
	this.shape_27.setTransform(55.75,-249.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgELAIhZt8IAAN8IlDAAIAA1/IGpAAIBWNnIAAtnIFCAAIAAV/g");
	this.shape_28.setTransform(-35.025,-249.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AigLAIAA1/IFCAAIAAV/g");
	this.shape_29.setTransform(-103.3,-249.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AA9LAIg9tOIg8NOImgAAIho1/IFVAAIAQQ4IBdw4IEEAAIBeQ4IAQw4IFVAAIhoV/g");
	this.shape_30.setTransform(-186.225,-249.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-422.5,-357,1825.5,445.5), null);


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
	this.instance.setTransform(-291,-103,0.8322,0.8322);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-291,-103,431.9,205.6), null);


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
	this.instance.setTransform(-1023,-260,1.9523,1.9523);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-1023,-260,542.8,560.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AldKSIBUkiQCJA1A6AAQByAAAAhYIAAgJQAAgogcgrQgcgshFhFIg9g7QhjhigshUQgrhUAAiFIAAgDQAAi4BehnQBdhoCnAAQCHAAChBBIhTEPQhmgfgxAAQhuAAAABZIAAAGQAAAMAEAMQAEAMAGALQAHAKALAPIAWAaIAeAfIAfAiQArAvAYAVQBlBlAtBTQAsBSAACOIAAACQAAC/hkBsQhkBtilAAQinAAinhDg");
	this.shape.setTransform(992.4,-83.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak3LAIAA1/IJsAAIAAEsIkqAAIAADwIDxAAIAAEtIjxAAIAAEKIEtAAIAAEsg");
	this.shape_1.setTransform(922.85,-83.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAwLWQjGAAhnhsQhnhsAAjRIAApZQAAjSBnhrQBnhsDGAAIACAAQCYAACAA5IhzEFQgygQg+AAIgBAAQh/ABAACaIAAIZQAABJAmApQAoAoBDAAIABAAQA5AABBgaIByEDQiNBGimAAg");
	this.shape_2.setTransform(852.5,-83.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgELAIhZt8IAAN8IlDAAIAA1/IGpAAIBWNnIAAtnIFCAAIAAV/g");
	this.shape_3.setTransform(764.725,-83.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ak3LAIAA1/IJsAAIAAEsIkqAAIAADwIDyAAIAAEtIjyAAIAAEKIEtAAIAAEsg");
	this.shape_4.setTransform(685,-83.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AihLAIAA1/IFDAAIAAV/g");
	this.shape_5.setTransform(627.25,-83.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA6LAIhvoYIgYAAIAAIYIlDAAIAA1/IFbAAQDeAABZBkQBWBkAAC/IAABlQAADOhnBaICfJrgAhNhbIAQAAQAqAAARgUQARgTAAgvIAAiHQAAgvgRgTQgRgTgqAAIgQAAg");
	this.shape_6.setTransform(560.65,-83.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ak3LAIAA1/IJsAAIAAEsIkqAAIAADwIDyAAIAAEtIjyAAIAAEKIEtAAIAAEsg");
	this.shape_7.setTransform(482.6,-83.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AlyLAIAA1/IFXAAQDeAABYBkQBYBkAAC/IAAB1QAADVhnBTQhoBVi/AAIgUAAIAAIGgAgvhLIANAAQApAAAQgSQASgUAAgvIAAiYQAAgvgSgTQgQgTgpAAIgNAAg");
	this.shape_8.setTransform(403.95,-83.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAyLAIgynzIgxHzIloAAICzrDIitq8IFSAAIBBHFIBDnFIFSAAIiuK8ICzLDg");
	this.shape_9.setTransform(318.975,-83.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ak3LAIAA1/IJsAAIAAEsIkqAAIAADwIDyAAIAAEtIjyAAIAAEKIEtAAIAAEsg");
	this.shape_10.setTransform(243.45,-83.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AigLAIAAxBIjGAAIAAk+ILNAAIAAE+IjFAAIAARBg");
	this.shape_11.setTransform(1298.625,-260.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAsLAIAAorIhYAAIAAIrIlCAAIAA1/IFCAAIAAIUIBYAAIAAoUIFDAAIAAV/g");
	this.shape_12.setTransform(1219.9,-260.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAwLWQjGAAhnhrQhnhsAAjTIAApXQAAjTBnhsQBnhrDGAAIACAAQCYAACBA6Ih0EEQgzgQg9AAIgBAAQh/AAAACbIAAIZQAABJAmApQAoApBCgBIADAAQA4ABBBgbIByEDQiNBGimAAg");
	this.shape_13.setTransform(1145.75,-260.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABoLAIgakSIibAAIgaESIk8AAIC61/IHTAAIC6V/gAgGj4IgoF5IBdAAIgol5IgHh1g");
	this.shape_14.setTransform(1059.425,-260.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AigLAIAAmPIkOvwIFPAAIBgHXIBgnXIFNAAIkMPwIAAGPg");
	this.shape_15.setTransform(969.1,-260.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AigLAIAAmPIkOvwIFOAAIBhHXIBhnXIFMAAIkMPwIAAGPg");
	this.shape_16.setTransform(856.95,-260.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA6LAIhvoZIgYAAIAAIZIlDAAIAA1/IFbAAQDfAABXBkQBYBkAAC/IAABkQAADOhpBaICgJsgAhNhbIARAAQAqgBAQgTQARgTAAgvIAAiHQAAgugRgUQgQgTgqAAIgRAAg");
	this.shape_17.setTransform(766.9,-260.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AkPJrQhmheAAi4IAAwdIFJAAIAAQlQAAA8AsAAQAsAAAAg8IAAwlIFKAAIAAQdQAACshfBkQhfBki2gBQiqAAhnhdg");
	this.shape_18.setTransform(677.425,-259.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAyLAIgynyIgxHyIloAAICzrEIitq7IFSAAIBBHFIBDnFIFSAAIiuK7ICzLEg");
	this.shape_19.setTransform(590.325,-260.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AkPJrQhmheAAi4IAAwdIFJAAIAAQlQAAA8AsAAQAsAAAAg8IAAwlIFKAAIAAQdQAACshfBkQhfBki2gBQiqAAhnhdg");
	this.shape_20.setTransform(503.375,-259.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AlJLAIAA1/IFEAAIAARBIFOAAIAAE+g");
	this.shape_21.setTransform(419.15,-260.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AmIJ7QhohbAAi/IAAinQAAhlAxg/QAvg+BOgGQhFiAAAhdIAAhlQAAjEBEhPQBDhRC6AAQCWAAA8BQQA8BPAADFIAABWQAADVi+A5IB8C0QgVhEAAhpIEEAAIAABUIAABOIgCA9QgBAugFARIgKAyQgGAfgLAYQgMAXgPAaIC6ERIlKAAIgeg0QheBFhvAAQjdAAhnhagAi3DcIAABaQAABNAgAiQAfAjBEAAQAUAAAagIIixkLgAhmmuQgIAHgCALQgBALAAAZIAACfIAAAsQBHgQAAhMIAAhvQAAghgIgOQgHgOgWAAQgPAAgIAHg");
	this.shape_22.setTransform(303.625,-260.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ak3LAIAA1/IJrAAIAAEsIkpAAIAADwIDyAAIAAEtIjyAAIAAEKIEtAAIAAEsg");
	this.shape_23.setTransform(193.35,-260.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAxLWQjHAAhnhrQhnhsAAjTIAApXQAAjTBnhsQBnhrDHAAIABAAQCZAACAA6Ih1EEQgygQg8AAIgCAAQh/AAAACbIAAIZQAABJAnApQAoApBBgBIADAAQA4ABBAgbIBzEDQiNBGimAAg");
	this.shape_24.setTransform(123,-260.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ABoLAIgakSIibAAIgaESIk8AAIC61/IHTAAIC6V/gAgGj4IgoF5IBdAAIgol5IgHh1g");
	this.shape_25.setTransform(36.725,-260.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA6LAIhvoZIgYAAIAAIZIlDAAIAA1/IFbAAQDeAABZBkQBWBkAAC/IAABkQAADOhnBaICfJsgAhNhbIAQAAQAqgBARgTQARgTAAgvIAAiHQAAgugRgUQgRgTgqAAIgQAAg");
	this.shape_26.setTransform(-54.05,-260.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-213.7,-368,1663.6000000000001,432.2), null);


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
	this.shape.graphics.f("#CC0000").s().p("AALAjIgLgsIgLAsIgRAAIgXhFIASAAIAOAsIALgsIARAAIALAsIAOgsIASAAIgXBFg");
	this.shape.setTransform(153.3,7.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AgRAgQgJgFgEgIQgEgIgBgLQABgJAEgIQAEgJAIgFQAJgEAJAAQAPAAALAKQAKAKgBAPQABAQgKAKQgLAKgPAAQgJAAgIgEgAgLgPQgFAGAAAJQAAAKAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgKQAAgJgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_1.setTransform(144.05,7.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AASAwIglg9IAAA9IgSAAIAAhfIATAAIAmA/IAAg/IASAAIAABfg");
	this.shape_2.setTransform(135.125,5.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AgdAwIgBgPIAHABQAHAAADgEQADgEACgFIgahFIATAAIAQAxIAQgxIATAAIgZBCIgFAMIgEAJQgCAEgCABIgHAEIgJABIgLgBg");
	this.shape_3.setTransform(123.05,8.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AgUAgQgGgDgCgFQgCgGgBgKIAAgqIATAAIAAAfQAAAOABADQABAEADACQADABADAAQAEAAADgCQAFgDABgDQABgEAAgOIAAgdIASAAIAABEIgRAAIAAgLQgDAGgHADQgEADgHAAQgIAAgFgDg");
	this.shape_4.setTransform(115.3,7.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AgnAwIAAhfIAnAAIAPABQAGABAEADQAFADADAFQADAFAAAGQgBAHgDAGQgEAFgGADQAJACAFAGQAEAGAAAIQAAAHgDAGQgDAGgFAEQgGADgHABIgXABgAgTAgIASAAIALgBQAFgBADgDQACgDAAgFQAAgEgCgDQgCgDgEgBQgEgCgMAAIgPAAgAgTgJIAMAAIANAAQAFgBADgCQACgDABgFQgBgEgCgDQgCgDgFAAIgPgBIgLAAg");
	this.shape_5.setTransform(106.6,5.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlWhsIKuAAQAeAAAVAVQAWAXAAAeIAABFQAAAegWAWQgVAWgeAAIquAAQgfAAgWgWQgVgWAAgeIAAhFQAAgeAVgXQAWgVAfAAg");
	this.shape_6.setTransform(128.525,4.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAD72E").s().p("AlWBtQgfAAgWgWQgVgWAAgeIAAhFQAAgeAVgXQAWgVAfAAIKuAAQAeAAAVAVQAWAXAAAeIAABFQAAAegWAWQgVAWgeAAg");
	this.shape_7.setTransform(128.525,4.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.button_mc, new cjs.Rectangle(85.8,-7.2,85.50000000000001,23.9), null);


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


(lib.bonuse_prizes_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAABIIgJhaIAABaIggAAIAAiPIAqAAIAJBYIAAhYIAgAAIAACPg");
	this.shape.setTransform(125.775,-1.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPBIIAAiPIAfAAIAACPg");
	this.shape_1.setTransform(118.825,-1.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGBIIgGhWIgFBWIgrAAIgKiPIAjAAIABBtIAKhtIAZAAIAKBtIAChtIAiAAIgKCPg");
	this.shape_2.setTransform(110.325,-1.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAABKQgSAAgJgKQgKgLAAgTIAAhDQAAgUAKgKQAJgKASAAQATAAAKAKQAJALAAATIAABDQAAAUgKAKQgJAKgSAAgAgEgkIAABJQABAGADAAQAFAAgBgGIAAhJQABgGgFAAIAAAAQgEAAAAAGg");
	this.shape_3.setTransform(97.4,-1.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPBIIAAhuIgUAAIAAghIBIAAIAAAhIgUAAIAABug");
	this.shape_4.setTransform(89.3,-1.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjBDIAJgdQAOAFAGAAQALAAAAgJIAAgBQAAgEgDgEIgJgMIgGgGQgLgJgEgJQgEgIAAgOQAAgTAJgKQAKgLAQAAQAOAAAQAHIgIAbQgLgDgFAAQgKAAAAAJIAAABIAAACIABADIABACIACADIADADIAEAEIAGAGQALAKAEAIQAFAJAAAOQAAAUgKALQgLALgPAAQgRAAgSgHg");
	this.shape_5.setTransform(79.475,-1.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfBIIAAiPIA+AAIAAAfIgeAAIAAAYIAZAAIAAAeIgZAAIAAAbIAfAAIAAAfg");
	this.shape_6.setTransform(72.375,-1.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAFBKQgUAAgKgLQgKgLAAgVIAAg8QAAgWAKgLQAKgLAUAAIAAAAQAQAAANAGIgMAbQgFgCgHAAQgMAAAAAPIAAA2QAAAIADAEQAEAEAHAAQAGAAAHgCIALAaQgOAHgRAAg");
	this.shape_7.setTransform(65.225,-1.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAABIIgJhaIAABaIggAAIAAiPIAqAAIAJBYIAAhYIAgAAIAACPg");
	this.shape_8.setTransform(56.275,-1.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AALBIIgDgcIgPAAIgCAcIghAAIATiPIAvAAIATCPgAAAgYIgEAlIAJAAIgEglIgBgMg");
	this.shape_9.setTransform(46.875,-1.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAFBIIAAg5IgIAAIAAA5IghAAIAAiPIAhAAIAAA2IAIAAIAAg2IAgAAIAACPg");
	this.shape_10.setTransform(37.95,-1.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAFBKQgUAAgKgLQgKgLAAgVIAAg8QAAgWAKgLQAKgLAUAAIAAAAQAQAAANAGIgMAbQgFgCgHAAQgMAAAAAPIAAA2QAAAIADAEQAEAEAHAAQAGAAAHgCIALAaQgOAHgRAAg");
	this.shape_11.setTransform(30.425,-1.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfBIIAAiPIA+AAIAAAfIgeAAIAAAYIAZAAIAAAeIgZAAIAAAbIAfAAIAAAfg");
	this.shape_12.setTransform(20.575,-1.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAGBIIgLg3IgCAAIAAA3IghAAIAAiPIAjAAQAWAAAJAKQAJALAAATIAAAKQAAAVgLAJIARA/gAgHgJIACAAQAEAAABgBQABgCAAgFIAAgOQAAgFgBgCQgBgCgEAAIgCAAg");
	this.shape_13.setTransform(12.275,-1.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAABKQgSAAgKgKQgJgLAAgTIAAhDQAAgUAJgKQAKgKASAAQATAAAJAKQAKALAAATIAABDQAAAUgKAKQgJAKgTAAgAgDgkIAABJQgBAGAEAAQAFAAAAgGIAAhJQAAgGgFAAIAAAAQgDAAAAAGg");
	this.shape_14.setTransform(3.3,-1.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAYBIIAAhrIgCARIgKBaIgXAAIgKhaIgCgRIAABrIgfAAIAAiPIAxAAIAFBEIAAAKIAAgKIAGhEIAxAAIAACPg");
	this.shape_15.setTransform(-7.15,-1.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bonuse_prizes_mc, new cjs.Rectangle(-16.1,-14.9,149.5,30.9), null);


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
	this.instance = new lib._320x50();
	this.instance.setTransform(-160,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_mc, new cjs.Rectangle(-160,-25,320,50), null);


(lib.b2g2_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.b2g2();
	this.instance.setTransform(-127.5,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.b2g2_mc, new cjs.Rectangle(-127.5,-150,255,300), null);


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
	this.instance.setTransform(180.2,-0.45,0.0068,0.0068,0,0,0,504.7,424.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKARIgBgIIAGABIADAAIABgDIgBAAQgEAAgCgCQgBgCABgEIADgQIAHAAIgDAQQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAAAIAEgRIAIAAIgGAYQgBAGgDACQgCADgEAAIgGgBg");
	this.shape.setTransform(174.325,0.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGASIAGgjIAHAAIgHAjg");
	this.shape_1.setTransform(172.8,-0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAQIAIghIAGAAIgCAJIABAAQAFAAACACQABADgBAEIgBAHQgBAFgDACQgDADgDAAIgJgCgAgBALIABAAIAAgBIABgCIABgHIAAgCIgBAAIAAAAg");
	this.shape_2.setTransform(171.07,-0.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGATIAFgZIAHAAIgGAZgAAAgLQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAIABgDIADgCQAAAAABABQAAAAABAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgCACIgDABIgCgBg");
	this.shape_3.setTransform(169.6083,-0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJANIACgIIAGABQABAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIAAgBIgBAAIgBgBIAAAAQgFgCABgGQABgDACgCQACgCAEAAQADgBADACIgCAHIgFgBQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABIAAABIABAAIACABIADACQACACgBADQgBAEgDACQgCADgEAAIgHgBg");
	this.shape_4.setTransform(167.975,0.0938);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAAOIADgRQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIgBAAIgDATIgIAAIAFgYQAFgCAEAAQAIAAgBAHIgEATg");
	this.shape_5.setTransform(166.0363,0.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAEIABgHQACgKAIAAQAJAAgCAKIgCAHQgCAKgIAAQgIAAACgKgAAAgDIgBAHQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIACgHQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABg");
	this.shape_6.setTransform(164.0491,0.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLASIAIgiIAHgBQAFAAACACQABADgBAFIgBAHQgBAFgDACQgDACgDAAIgBAAIgCAJgAAAACIAAAAIABgBIABgBIABgHIAAgCIgBgBIAAAAg");
	this.shape_7.setTransform(161.87,0.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJANIACgIIAGABQAAAAABAAQAAAAAAAAQAAAAABAAQAAgBAAAAIAAgBIgBAAIgBgBIAAAAQgFgCABgGQABgDACgCQACgCAEAAQADgBADACIgCAHIgFgBQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABIAAABIABAAIACABIADACQACACgBADQgBAEgDACQgCADgEAAIgHgBg");
	this.shape_8.setTransform(159.975,0.0938);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHALQgCgCABgGIABgGQABgFADgCQACgDAEAAQAEAAACADQABACgBAFIgBAFIgJAAIAAACQAAAAAAABQAAAAABABQAAAAAAAAQAAAAABAAIAEAAIgBAHIgEABQgFAAgCgDgAAAgEIAAACIACAAIAAgCIAAgBIgBgBQAAAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAg");
	this.shape_9.setTransform(158.1783,0.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAASIAAgOIAAAAIgDAOIgIAAIAHgjIAIAAQAFAAACADQACACgBAFIgBADQgBAEgDACIABAQgAAAgBIAAAAIACgBIABgCIABgDIgBgCIgBAAIAAAAg");
	this.shape_10.setTransform(155.97,-0.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKARIgBgIIAGABIADAAIABgDIgBAAQgEAAgCgCQgBgCABgEIADgQIAHAAIgDAQQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAAAIAEgRIAIAAIgGAYQgBAGgDACQgCADgEAAIgGgBg");
	this.shape_11.setTransform(153.275,0.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAMQgBgCAAgFIAAAAQABgEADgBQACgCADAAIACAAIAAgBIAAgCIgCAAIgGABIAEgIIACgBIACAAQAFAAACACQACACgBAFIgEAQIgIABQgEAAgCgBgAAAADIgBABIAAABIAAABIABABIAAAAIAAgEIAAAAIAAAAg");
	this.shape_12.setTransform(151.1387,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHASIAHgjIAIAAIgIAjg");
	this.shape_13.setTransform(149.7,-0.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLASIAHgjIAIAAQAFAAACADQACACgBAFIgBADQgBAEgDACQgDADgEAAIgBAAIgCANgAAAgBIAAAAIACAAIAAgCIABgEIAAgCIgBAAIAAAAg");
	this.shape_14.setTransform(147.97,-0.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAPIAAgdIAHAAQADAAADACQACACAAAFIAAALQAAAEgCADQgDACgDAAgAAAAJIAAAAIABgBIAAgCIAAgMIgBgBIAAgBIAAAAg");
	this.shape_15.setTransform(-36.875,1.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAPIAAgdIANAAIAAAGIgHAAIAAAFIAGAAIAAAGIgGAAIAAAGIAHAAIAAAGg");
	this.shape_16.setTransform(-38.525,1.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AACAPIgBgGIgCAAIgBAGIgGAAIAEgdIAJAAIAEAdgAAAADIABAAIgBgIgAAAgFIAAgCg");
	this.shape_17.setTransform(-40.25,1.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAPIgBgSIAAASIgHAAIAAgdIAIAAIACASIAAgSIAHAAIAAAdg");
	this.shape_18.setTransform(-42.775,1.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgCAPIAAgdIAGAAIAAAdg");
	this.shape_19.setTransform(-44.3,1.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHAPIACgHIAFABQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAAAIAAgCIgCgCIgBgBQgCgCgBgCIgBgEQAAgEACgCQACgDADAAIAGACIgCAFIgDAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAAABIAAAAIAAABIABAAIAAABIABAAIABACIAEADIABAFQAAAEgDADQgCACgDAAIgHgBg");
	this.shape_20.setTransform(-46.05,1.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGAPIAAgdIANAAIAAAGIgHAAIAAAFIAGAAIAAAGIgGAAIAAAGIAHAAIAAAGg");
	this.shape_21.setTransform(-47.575,1.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHAPIAAgGIAIgRIgHAAIAAgGIAOAAIAAAGIgIARIAIAAIAAAGg");
	this.shape_22.setTransform(-49.225,1.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCAPIAAgdIAGAAIAAAdg");
	this.shape_23.setTransform(-50.6,1.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AABAPIgBgLIgBAAIAAALIgHAAIAAgdIAIAAQAEAAACACQACACAAAEIAAACQAAAEgDACIAEANgAgBgBIABAAIAAgBIAAgBIAAgDIAAgBIAAgBIgBAAg");
	this.shape_24.setTransform(-52.025,1.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHAPIAAgdIAHAAQAEAAACACQACACAAAEIAAADQAAADgCACQgCACgEAAIAAAAIAAALgAAAgBIAAAAIAAAAIABgCIAAgDIgBgBIAAgBIAAAAg");
	this.shape_25.setTransform(-53.925,1.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCAUIAAgnIAFAAIAAAng");
	this.shape_26.setTransform(-56.875,1.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCAPIAAgIIgGgVIAHAAIABAKIACgKIAHAAIgFAVIAAAIg");
	this.shape_27.setTransform(-59.925,1.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGAPIAAgdIAGAAIAAAWIAHAAIAAAHg");
	this.shape_28.setTransform(-61.775,1.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgHAPIAAgdIAHAAQAEAAACACQACACAAAEIAAADQAAADgCACQgCACgEAAIAAAAIAAALgAAAgBIAAAAIAAAAIABgCIAAgDIgBgBIAAgBIAAAAg");
	this.shape_29.setTransform(-63.525,1.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgHAPIAAgdIAHAAQAEAAACACQACACAAAEIAAADQAAADgCACQgCACgEAAIAAAAIAAALgAAAgBIAAAAIAAAAIABgCIAAgDIgBgBIAAgBIAAAAg");
	this.shape_30.setTransform(-65.375,1.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AACAPIAAgGIgDAAIgBAGIgGAAIAEgdIAJAAIAEAdgAAAADIABAAIgBgIgAAAgFIAAgCg");
	this.shape_31.setTransform(-67.3,1.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGAPIABgHIAFABQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAAAIAAgCIgCgCIgBgBQgCgCgBgCIgBgEQAAgEACgCQACgDADAAIAGACIgCAFIgDAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAAABIAAAAIAAABIABAAIABABIAAAAIABACIADADIACAFQgBAEgCADQgCACgDAAIgGgBg");
	this.shape_32.setTransform(-69.55,1.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgBAHIgBgNIAFAAIgBANg");
	this.shape_33.setTransform(-70.875,0.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAOQgDgDAAgFIAAgLQAAgFADgCQACgDADAAQAEAAACACIgCAFIgDAAQAAAAgBAAQAAAAgBABQAAAAAAABQAAAAAAABIAAALIAAACIADABIACgBIADAHQgDABgEAAQgDAAgCgCg");
	this.shape_34.setTransform(-72.125,1.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgHAOQgDgCAAgEIAAgEIABgEQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIgBgFIAAgCQAAgFABgBQABgCAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQACABgBAFIAAACQAAAFgEAAIADAEIAAgEIAFAAIAAACIAAACIAAABIAAABIgBABIAAABIAAABIAEAGIgIAAIAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgEAAgCgCgAgDAFIAAACIAAACIADABIAAAAIgDgGgAgCgIIAAABIAAAEIAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgDIAAgBIgBgBIgBAAg");
	this.shape_35.setTransform(-74.15,1.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDAPIAAgXIgEAAIAAgGIAPAAIAAAGIgFAAIAAAXg");
	this.shape_36.setTransform(-76.2,1.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgCAUIAAgnIAFAAIAAAng");
	this.shape_37.setTransform(-79.025,1.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgBAPIAAgVIgDAAIAAgGIAJgCIAAAdg");
	this.shape_38.setTransform(-81.3,1.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgEAOQgDgCAAgFIAAgCQAAgDACgCIgBgEIAAgCQAAgEACgCQACgDACAAQADAAACADQACACAAAEIAAACIgBAEQACACAAADIAAACQAAAFgCACQgCACgEAAQgCAAgCgCgAAAAEIAAAEIAAABIABgBIAAgEIgBgBIAAABgAAAgHIAAAFIAAABIAAAAIABAAIAAgBIAAgFIgBgBIAAABg");
	this.shape_39.setTransform(-82.8,1.25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgHAQIAAgGQAIgKAAgEIAAgBIgBgCIgBgBIgEABIgCgGQADgCAEAAQAEAAACADQACADAAAEIAAAAIgBAEIgCAEIgCADIgDADIAHAAIAAAHg");
	this.shape_40.setTransform(-84.575,1.225);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgGAPIABgHIAEABQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAAAIAAgCIgCgCIgBgBQgDgCAAgCIgBgEQAAgEACgCQACgDADAAIAGACIgCAFIgDAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAAABIAAAAIAAABIABAAIABABIAAAAIABACIADADIABAFQAAAEgCADQgCACgDAAIgGgBg");
	this.shape_41.setTransform(-86.75,1.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgGAPIAAgdIANAAIAAAGIgHAAIAAAFIAGAAIAAAGIgGAAIAAAGIAHAAIAAAGg");
	this.shape_42.setTransform(-88.275,1.275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgDAPIAAgdIAHAAIAAAdg");
	this.shape_43.setTransform(-89.55,1.275);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AABAPIgBgLIgBAAIAAALIgHAAIAAgdIAIAAQAEAAACACQACACAAAEIAAACQAAAEgDACIAEANgAgBgBIABAAIAAgBIAAgBIAAgDIAAgBIAAgBIgBAAg");
	this.shape_44.setTransform(-90.975,1.275);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgGAPIAAgdIANAAIAAAGIgHAAIAAAFIAGAAIAAAGIgGAAIAAAGIAHAAIAAAGg");
	this.shape_45.setTransform(-92.725,1.275);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgGAPIABgHIAFABQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAAAIAAgCIgCgCIgBgBQgCgCgBgCIgBgEQAAgEACgCQACgDADAAIAGACIgCAFIgDAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAAABIAAAAIAAABIABAAIABABIAAAAIABACIADADIACAFQgBAEgCADQgCACgDAAIgGgBg");
	this.shape_46.setTransform(-94.3,1.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.3,-3.3,278.8,8);


// stage content:
(lib.bigticketconversionhtml5320x50 = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(402));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(159.95,3.8,0.0852,0.0852,0,0,0,0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(308).to({alpha:0},16).wait(78));

	// Layer_1
	this.instance_2 = new lib.button_mc();
	this.instance_2.setTransform(172.75,33.15,1,1,0,0,0,28.2,7.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(324).to({_off:false},0).to({y:24.4,alpha:1},16).wait(62));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(83.35,22.5,0.0831,0.0831);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(308).to({_off:false},0).wait(1).to({regX:-1354.7,regY:-10.8,x:-29,y:21.6,alpha:0.0032},0).wait(1).to({x:-28.1,alpha:0.0145},0).wait(1).to({x:-26.4,alpha:0.0371},0).wait(1).to({x:-23.35,alpha:0.077},0).wait(1).to({x:-18,y:21.65,alpha:0.1467},0).wait(1).to({x:-8.75,y:21.7,alpha:0.2672},0).wait(1).to({x:2.65,y:21.75,alpha:0.4164},0).wait(1).to({x:14.05,y:21.8,alpha:0.5648},0).wait(1).to({x:23.55,y:21.85,alpha:0.6887},0).wait(1).to({x:31,y:21.9,alpha:0.7859},0).wait(1).to({x:36.85,alpha:0.8625},0).wait(1).to({x:41.45,y:21.95,alpha:0.9229},0).wait(1).to({x:44.55,alpha:0.9628},0).wait(1).to({x:46.3,alpha:0.9857},0).wait(1).to({x:47.15,alpha:0.9969},0).wait(1).to({regX:0,regY:0,x:159.95,y:22.9,alpha:1},0).wait(78));

	// b2g2_mc
	this.instance_4 = new lib.b2g2_mc();
	this.instance_4.setTransform(104.5,27,0.1765,0.1765);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(98).to({_off:false},0).wait(1).to({alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({alpha:0.0435},0).wait(1).to({alpha:0.0919},0).wait(1).to({alpha:0.1816},0).wait(1).to({alpha:0.3248},0).wait(1).to({alpha:0.4878},0).wait(1).to({alpha:0.6345},0).wait(1).to({alpha:0.7499},0).wait(1).to({alpha:0.8388},0).wait(1).to({alpha:0.9088},0).wait(1).to({alpha:0.9564},0).wait(1).to({alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({alpha:1},0).wait(69).to({y:26.9631,alpha:0.9963},0).wait(1).to({y:26.8326,alpha:0.9833},0).wait(1).to({y:26.5654,alpha:0.9565},0).wait(1).to({y:26.0814,alpha:0.9081},0).wait(1).to({y:25.1844,alpha:0.8184},0).wait(1).to({y:23.752,alpha:0.6752},0).wait(1).to({y:22.1223,alpha:0.5122},0).wait(1).to({y:20.6555,alpha:0.3655},0).wait(1).to({y:19.5009,alpha:0.2501},0).wait(1).to({y:18.6121,alpha:0.1612},0).wait(1).to({y:17.9123,alpha:0.0912},0).wait(1).to({y:17.436,alpha:0.0436},0).wait(1).to({y:17.1656,alpha:0.0166},0).wait(1).to({y:17.036,alpha:0.0036},0).wait(1).to({y:17,alpha:0},0).wait(206));

	// bonus_prizes
	this.instance_5 = new lib.bonuse_prizes_mc();
	this.instance_5.setTransform(163.9,28.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:58.6,regY:-1.5,x:222.5,y:26.95,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:26.85,alpha:0.0435},0).wait(1).to({y:26.75,alpha:0.0919},0).wait(1).to({y:26.5,alpha:0.1816},0).wait(1).to({y:26.15,alpha:0.3248},0).wait(1).to({y:25.75,alpha:0.4878},0).wait(1).to({y:25.4,alpha:0.6345},0).wait(1).to({y:25.1,alpha:0.7499},0).wait(1).to({y:24.9,alpha:0.8388},0).wait(1).to({y:24.7,alpha:0.9088},0).wait(1).to({y:24.6,alpha:0.9564},0).wait(1).to({y:24.5,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:163.9,y:26,alpha:1},0).wait(69).to({regX:58.6,regY:-1.5,x:222.5,y:24.45,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:24.35,alpha:0.9565},0).wait(1).to({y:24.25,alpha:0.9081},0).wait(1).to({y:24,alpha:0.8184},0).wait(1).to({y:23.65,alpha:0.6752},0).wait(1).to({y:23.25,alpha:0.5122},0).wait(1).to({y:22.9,alpha:0.3655},0).wait(1).to({y:22.6,alpha:0.2501},0).wait(1).to({y:22.4,alpha:0.1612},0).wait(1).to({y:22.2,alpha:0.0912},0).wait(1).to({y:22.1,alpha:0.0436},0).wait(1).to({y:22,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:163.9,y:23.5,alpha:0},0).to({_off:true},61).wait(145));

	// sub_caption
	this.instance_6 = new lib.daily_caption_mc();
	this.instance_6.setTransform(159.7,44.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(181).to({_off:false},0).wait(1).to({regX:620.2,regY:-172.2,x:224.25,y:26.3,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:26.25,alpha:0.0435},0).wait(1).to({y:26.15,alpha:0.0919},0).wait(1).to({y:25.95,alpha:0.1816},0).wait(1).to({y:25.65,alpha:0.3248},0).wait(1).to({y:25.3,alpha:0.4878},0).wait(1).to({y:25,alpha:0.6345},0).wait(1).to({y:24.75,alpha:0.7499},0).wait(1).to({y:24.55,alpha:0.8388},0).wait(1).to({y:24.4,alpha:0.9088},0).wait(1).to({y:24.3,alpha:0.9564},0).wait(1).to({y:24.25,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:42.25,alpha:1},0).wait(98).to({regX:620.2,regY:-172.2,x:224.25,y:24.25,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:24.3,alpha:0.9565},0).wait(1).to({y:24.4,alpha:0.9081},0).wait(1).to({y:24.6,alpha:0.8184},0).wait(1).to({y:24.9,alpha:0.6752},0).wait(1).to({y:25.25,alpha:0.5122},0).wait(1).to({y:25.55,alpha:0.3655},0).wait(1).to({y:25.8,alpha:0.2501},0).wait(1).to({y:26,alpha:0.1612},0).wait(1).to({y:26.15,alpha:0.0912},0).wait(1).to({y:26.25,alpha:0.0436},0).wait(1).to({y:26.3,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:44.35,alpha:0},0).wait(94));

	// second_prize
	this.instance_7 = new lib.second_prize_mc();
	this.instance_7.setTransform(119.35,29.8,0.1923,0.1923);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(181).to({_off:false},0).wait(1).to({regX:-75,regY:-0.2,x:104.95,y:29.7,alpha:0.0037},0).wait(1).to({x:105,y:29.65,alpha:0.0167},0).wait(1).to({x:105.15,y:29.55,alpha:0.0435},0).wait(1).to({x:105.45,y:29.35,alpha:0.0919},0).wait(1).to({x:105.95,y:29,alpha:0.1816},0).wait(1).to({x:106.75,y:28.4,alpha:0.3248},0).wait(1).to({x:107.65,y:27.75,alpha:0.4878},0).wait(1).to({x:108.5,y:27.1,alpha:0.6345},0).wait(1).to({x:109.1,y:26.65,alpha:0.7499},0).wait(1).to({x:109.6,y:26.3,alpha:0.8388},0).wait(1).to({x:110,y:26,alpha:0.9088},0).wait(1).to({x:110.3,y:25.8,alpha:0.9564},0).wait(1).to({x:110.45,y:25.7,alpha:0.9834},0).wait(1).to({x:110.5,y:25.65,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:124.95,y:25.7,alpha:1},0).wait(98).to({regX:-75,regY:-0.2,x:110.8,y:25.6},0).wait(1).to({scaleX:0.1922,scaleY:0.1922,x:111.8},0).wait(1).to({scaleX:0.1919,scaleY:0.1919,x:113.9},0).wait(1).to({scaleX:0.1915,scaleY:0.1915,x:117.65,y:25.55},0).wait(1).to({scaleX:0.1907,scaleY:0.1907,x:124.65},0).wait(1).to({scaleX:0.1895,scaleY:0.1895,x:135.8,y:25.45},0).wait(1).to({scaleX:0.1881,scaleY:0.1881,x:148.45,y:25.35},0).wait(1).to({scaleX:0.1868,scaleY:0.1868,x:159.85,y:25.3},0).wait(1).to({scaleX:0.1858,scaleY:0.1858,x:168.85,y:25.2},0).wait(1).to({scaleX:0.185,scaleY:0.185,x:175.75,y:25.15},0).wait(1).to({scaleX:0.1844,scaleY:0.1844,x:181.2},0).wait(1).to({scaleX:0.184,scaleY:0.184,x:184.9,y:25.1},0).wait(1).to({scaleX:0.1838,scaleY:0.1838,x:187},0).wait(1).to({scaleX:0.1837,scaleY:0.1837,x:188},0).wait(1).to({regX:-20.7,regY:0,x:202.1,y:25.15},0).wait(94));

	// main_caption
	this.instance_8 = new lib.sub_caption_mc();
	this.instance_8.setTransform(159.7,44.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({_off:false},0).wait(1).to({regX:491.1,regY:-154.6,x:210.8,y:28.15,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:28.1,alpha:0.0435},0).wait(1).to({y:28,alpha:0.0919},0).wait(1).to({y:27.8,alpha:0.1816},0).wait(1).to({y:27.5,alpha:0.3248},0).wait(1).to({y:27.15,alpha:0.4878},0).wait(1).to({y:26.85,alpha:0.6345},0).wait(1).to({y:26.6,alpha:0.7499},0).wait(1).to({y:26.4,alpha:0.8388},0).wait(1).to({y:26.25,alpha:0.9088},0).wait(1).to({y:26.15,alpha:0.9564},0).wait(1).to({y:26.1,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:42.25,alpha:1},0).wait(69).to({regX:491.1,regY:-154.6,x:210.8,y:26.1,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:26.15,alpha:0.9565},0).wait(1).to({y:26.25,alpha:0.9081},0).wait(1).to({y:26.45,alpha:0.8184},0).wait(1).to({y:26.75,alpha:0.6752},0).wait(1).to({y:27.1,alpha:0.5122},0).wait(1).to({y:27.4,alpha:0.3655},0).wait(1).to({y:27.65,alpha:0.2501},0).wait(1).to({y:27.85,alpha:0.1612},0).wait(1).to({y:28,alpha:0.0912},0).wait(1).to({y:28.1,alpha:0.0436},0).wait(1).to({y:28.15,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:44.35,alpha:0},0).to({_off:true},61).wait(228));

	// promo
	this.instance_9 = new lib.promo_mc();
	this.instance_9.setTransform(189.15,23.35,0.0867,0.0867,0,0,0,0.6,0.6);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:-751.6,regY:20.2,x:123.8,y:25,alpha:0.0037},0).wait(1).to({x:123.55,alpha:0.0167},0).wait(1).to({x:123,alpha:0.0435},0).wait(1).to({x:122,alpha:0.0919},0).wait(1).to({x:120.2,alpha:0.1816},0).wait(1).to({x:117.3,alpha:0.3248},0).wait(1).to({x:114,alpha:0.4878},0).wait(1).to({x:111.05,y:24.95,alpha:0.6345},0).wait(1).to({x:108.75,alpha:0.7499},0).wait(1).to({x:106.95,alpha:0.8388},0).wait(1).to({x:105.5,alpha:0.9088},0).wait(1).to({x:104.55,alpha:0.9564},0).wait(1).to({x:104,alpha:0.9834},0).wait(1).to({x:103.75,alpha:0.9964},0).wait(1).to({regX:0,regY:0.6,x:168.95,y:23.25,alpha:1},0).wait(83).to({x:159.95,y:23.35,alpha:0},15).wait(180).to({regX:-667,regY:20.2,x:102.1,y:25.05},0).wait(1).to({regX:-751.6,x:94.65},0).wait(1).to({x:94.7},0).wait(1).to({x:95.45,y:25,alpha:0.0206},0).wait(1).to({scaleX:0.0866,scaleY:0.0866,x:97.3,alpha:0.075},0).wait(1).to({scaleX:0.0865,scaleY:0.0865,x:99.6,alpha:0.1453},0).wait(1).to({scaleX:0.0863,scaleY:0.0863,x:102.65,alpha:0.2353},0).wait(1).to({scaleX:0.0861,scaleY:0.0861,x:106.5,alpha:0.3498},0).wait(1).to({scaleX:0.0858,scaleY:0.0858,x:111.1,alpha:0.4866},0).wait(1).to({scaleX:0.0856,scaleY:0.0856,x:115.85,alpha:0.6273},0).wait(1).to({scaleX:0.0853,scaleY:0.0853,x:119.95,y:24.95,alpha:0.7499},0).wait(1).to({scaleX:0.0852,scaleY:0.0852,x:123.3,y:24.9,alpha:0.848},0).wait(1).to({scaleX:0.085,scaleY:0.085,x:125.85,alpha:0.9252},0).wait(1).to({scaleX:0.0849,scaleY:0.0849,x:127.9,alpha:0.9846},0).wait(1).to({x:128.4,alpha:1},0).wait(1).to({regX:-666.9,regY:21.2,x:135.6,y:24.95},0).wait(94));

	// background
	this.instance_10 = new lib.background_mc();
	this.instance_10.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(402));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(88.9,15.5,231.1,38);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_2ndprize.png", id:"_2ndprize"},
		{src:"images/_320x50.jpg", id:"_320x50"},
		{src:"images/b2g2.png", id:"b2g2"},
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