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


(lib._300x50 = function() {
	this.initialize(img._300x50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,50);


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
	this.instance.setTransform(-1758,-267,2.5071,2.5071);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-1758,-267,967.8,521.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AlCJfIBNkLQB/AxA2AAQBpAAAAhRIAAgJQAAgkgagpQgagohAg/Ig4g3QhchagohPQgohNAAh6IAAgDQAAiqBXhgQBWhfCaAAQB9AACUA7IhMD7QhfgdgtAAQhlAAAABTIAAAFQAAAMAEALQAEAKAFAKQAGAKAKAOIAVAXIAbAeIAdAfQAoArAVATQBeBeApBMQApBMAACDIAAACQAACwhcBkQhcBkiZAAQiaAAiag+g");
	this.shape.setTransform(667.675,-68.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkfKKIAA0TII8AAIAAEVIkTAAIAADeIDgAAIAAEVIjgAAIAAD2IEWAAIAAEVg");
	this.shape_1.setTransform(603.4,-67.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlRKKIAAkGIFor1Ik+AAIAAkYIJ5AAIAAEGIluL1IFtAAIAAEYg");
	this.shape_2.setTransform(532.8,-67.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiUKKIAA0TIEpAAIAAUTg");
	this.shape_3.setTransform(476.075,-67.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA2KKIhnnwIgVAAIAAHwIkrAAIAA0TIFAAAQDNAABSBdQBQBcAACwIAABdQAAC+hgBTICUI8gAhGhVIAOAAQAnAAAPgSQAQgRAAgrIAAh9QAAgrgQgSQgPgRgnAAIgOAAg");
	this.shape_4.setTransform(414.675,-67.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlWKKIAA0TIE9AAQDNAABSBdQBRBcAACwIAABtQAADEhgBMQhgBOiwAAIgSAAIAAHfgAgrhFIAMAAQAlAAAQgRQAQgSAAgrIAAiNQAAgrgQgSQgQgRglAAIgMAAg");
	this.shape_5.setTransform(333.9,-67.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA2KKIhnnwIgVAAIAAHwIkrAAIAA0TIFAAAQDNAABSBdQBQBcAACwIAABdQAAC+hgBTICUI8gAhGhVIAOAAQAnAAAPgSQAQgRAAgrIAAh9QAAgrgQgSQgPgRgnAAIgOAAg");
	this.shape_6.setTransform(1258.025,-266.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkfKKIAA0TII8AAIAAEVIkSAAIAADeIDeAAIAAEVIjeAAIAAD2IEVAAIAAEVg");
	this.shape_7.setTransform(1185.85,-266.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AlbKKIAA0TIFHAAQCjAABfBOQBgBPAACiIAAAgQAABlghA9QggA+hJAgQCYA2AADWIAABPQAACnhcBZQhcBZieAAgAgxFwIASAAQAkAAAOgRQANgRAAglIAAiAQAAgngNgRQgNgSglAAIgSAAgAgxiQIAXAAQAkAAAOgRQANgRAAglIAAhOQAAgmgNgSQgNgRglAAIgXAAg");
	this.shape_8.setTransform(1113.5,-266.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ADVKKIAAvNIgOCUIhXM5IjgAAIhYs5IgNiUIAAPNIkhAAIAA0TIHFAAIArJoIAGBiIAIhiIAupoIHBAAIAAUTg");
	this.shape_9.setTransform(1018.925,-266.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkfKKIAA0TII8AAIAAEVIkSAAIAADeIDfAAIAAEVIjfAAIAAD2IEVAAIAAEVg");
	this.shape_10.setTransform(933.5,-266.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjHKKIjN0TIE7AAIBbOSIBYuSIE7AAIjNUTg");
	this.shape_11.setTransform(856.225,-266.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AABKdQiqAAhYhcQhXheAAisIAApqQAAizBahbQBZhbClAAIADAAQCpAABYBdQBVBeAACuIAAJqQAACzhYBaQhZBZijAAgAgnlMIAAKaQAAA3AnAAIABAAQAoAAAAg3IAAqaQAAg3gpAAIgBAAQgmAAAAA3g");
	this.shape_12.setTransform(773.15,-267.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDKKIhSs3IAAM3IkrAAIAA0TIGIAAIBPMjIAAsjIEqAAIAAUTg");
	this.shape_13.setTransform(690.525,-266.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAsKeQi3AAhfhjQhehjAAjDIAAopQAAjCBehkQBfhjC3AAIACAAQCNAAB2A1IhrDwQgugOg4AAIgCAAQh1AAAACPIAAHwQAABDAkAlQAkAmA+AAIABAAQA0AAA8gYIBqDvQiCBAiaAAg");
	this.shape_14.setTransform(595.15,-266.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiUKKIAA0TIEpAAIAAUTg");
	this.shape_15.setTransform(537.725,-266.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AlVKKIAA0TIE8AAQDOAABRBdQBRBcAACwIAABtQAADEhgBMQhgBOiwAAIgSAAIAAHfgAgrhFIALAAQAmAAAPgRQARgSAAgrIAAiNQAAgrgRgSQgPgRgmAAIgLAAg");
	this.shape_16.setTransform(479,-266.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AkfKKIAA0TII8AAIAAEVIkSAAIAADeIDfAAIAAEVIjfAAIAAD2IEVAAIAAEVg");
	this.shape_17.setTransform(409.6,-266.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AlCJgIBNkMQB/AxA2AAQBpAAAAhSIAAgIQAAglgagoQgagohAhAIg4g3QhchZgohOQgohOAAh6IAAgDQAAiqBXhfQBWhgCaAAQB9AACUA8IhMD6QhfgdgtAAQhlAAAABTIAAAFQAAAMAEAKQAEALAFALQAGAJAKAOIAVAXIAbAdIAdAgQAoArAVAUQBeBdApBMQApBMAACDIAAACQAACwhcBkQhcBkiZAAQiaAAiag9g");
	this.shape_18.setTransform(321.325,-267.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AlCJgIBNkMQB/AxA2AAQBpAAAAhSIAAgIQAAglgagoQgagohAhAIg4g3QhchZgohOQgohOAAh6IAAgDQAAiqBXhfQBWhgCaAAQB9AACUA8IhMD6QhfgdgtAAQhlAAAABTIAAAFQAAAMAEAKQAEALAFALQAGAJAKAOIAVAXIAbAdIAdAgQAoArAVAUQBeBdApBMQApBMAACDIAAACQAACwhcBkQhcBkiZAAQiaAAiag9g");
	this.shape_19.setTransform(253.525,-267.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AiUKKIAA0TIEpAAIAAUTg");
	this.shape_20.setTransform(199.925,-266.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ADVKKIAAvNIgOCUIhXM5IjgAAIhYs5IgNiUIAAPNIkhAAIAA0TIHFAAIArJoIAGBiIAIhiIAupoIHBAAIAAUTg");
	this.shape_21.setTransform(125.275,-266.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AiUKKIAAvtIi3AAIAAkmIKXAAIAAEmIi3AAIAAPtg");
	this.shape_22.setTransform(15.425,-266.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhWEXIg3otIEbAAIg1Itg");
	this.shape_23.setTransform(-39.175,-303.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgDKKIhSs3IAAM3IkrAAIAA0TIGIAAIBPMjIAAsjIEqAAIAAUTg");
	this.shape_24.setTransform(-103.075,-266.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AACKdQirAAhYhcQhXhegBisIAApqQABizBZhbQBbhbCkAAIADAAQCpAABYBdQBVBeAACuIAAJqQABCzhaBaQhYBZikAAgAgnlMIAAKaQAAA3AnAAIACAAQAnAAAAg3IAAqaQAAg3gpAAIgBAAQgmAAAAA3g");
	this.shape_25.setTransform(-185.65,-267.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AlXKKIAA0TIFAAAQCfAABoBoQBoBoAACwIAAIMQAACwhoBsQhoBrieAAgAgtFwIAMAAQAsAAAMgTQAOgUAAg4IAAowQgBgygQgPQgQgOglAAIgMAAg");
	this.shape_26.setTransform(-264.15,-266.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-348.7,-366.3,1693.9,435), null);


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
	this.instance.setTransform(-27,-19,0.1543,0.1543);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-27,-19,80.1,38.1), null);


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
	this.instance.setTransform(-978,-260,1.9523,1.9523);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-978,-260,542.8,560.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AktI3IBJj6QB2AuAyAAQBiAAAAhMIAAgIQAAgigYgmQgYglg8g8Ig0gzQhWhUglhJQglhIAAhyIAAgDQAAieBRhZQBQhZCPAAQB1AACKA3IhHDqQhYgbgqAAQhfAAAABNIAAAFQAAALAEAKIAJATQAFAJAKANIATAWIAZAbIAbAeQAmAoATASQBYBXAnBHQAmBHAAB7IAAABQAACkhXBeQhWBdiOAAQiQAAiQg5g");
	this.shape.setTransform(1157.325,-108.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiKJfIAAurIirAAIAAkRIJrAAIAAERIiqAAIAAOrg");
	this.shape_1.setTransform(1093.95,-108.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiKJfIAAy8IEVAAIAAS8g");
	this.shape_2.setTransform(1043.825,-108.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABZJfIgVjtIiHAAIgVDtIkRAAICgy8IGTAAICgS8gAgFjWIgjFGIBRAAIgjlGIgGhkg");
	this.shape_3.setTransform(986.275,-108.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA1JfIg1rZIg0LZIlmAAIhay8IEmAAIAOOiIBQuiIDgAAIBQOiIAPuiIEmAAIhaS8g");
	this.shape_4.setTransform(894,-108.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABZJfIgVjtIiHAAIgVDtIkRAAICgy8IGTAAICgS8gAgFjWIgjFGIBRAAIgjlGIgGhkg");
	this.shape_5.setTransform(801.725,-108.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AktI3IBJj6QB2AuAyAAQBiAAAAhMIAAgIQAAgigYgmQgYglg8g8Ig0gzQhWhUglhJQglhIAAhyIAAgDQAAieBRhZQBQhZCPAAQB1AACKA3IhHDqQhYgbgqAAQhfAAAABNIAAAFQAAALAEAKIAJATQAFAJAKANIATAWIAZAbIAbAeQAmAoATASQBYBXAnBHQAmBHAAB7IAAABQAACkhXBeQhWBdiOAAQiQAAiQg5g");
	this.shape_6.setTransform(711.425,-108.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkMJfIAAy8IIWAAIAAECIkAAAIAADOIDQAAIAAEDIjQAAIAADmIEDAAIAAEDg");
	this.shape_7.setTransform(651.525,-108.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AApJxQirAAhYhdQhZhcAAi1IAAoFQAAi1BZhdQBYhdCrAAIACAAQCEABBuAxIhlDgQgqgNg1AAIgCAAQhtAAAACFIAAHPQAAA+AiAkQAiAiA5AAIABAAQAyAAA3gWIBjDgQh6A7iPAAg");
	this.shape_8.setTransform(590.95,-108.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDJfIhMsBIAAMBIkXAAIAAy8IFtAAIBLLtIAArtIEVAAIAAS8g");
	this.shape_9.setTransform(515.35,-108.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkMJfIAAy8IIWAAIAAECIkAAAIAADOIDQAAIAAEDIjQAAIAADmIEDAAIAAEDg");
	this.shape_10.setTransform(446.675,-108.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiKJfIAAy8IEVAAIAAS8g");
	this.shape_11.setTransform(396.925,-108.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAyJfIhgnPIgUAAIAAHPIkWAAIAAy8IEqAAQDAAABLBVQBMBXAACkIAABXQAACxhaBNICKIXgAhChPIAOAAQAkAAAPgRQAOgQAAgoIAAh1QAAgogOgRQgPgQgkAAIgOAAg");
	this.shape_12.setTransform(339.6,-108.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AkMJfIAAy8IIWAAIAAECIkAAAIAADOIDQAAIAAEDIjQAAIAADmIEDAAIAAEDg");
	this.shape_13.setTransform(272.375,-108.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ak/JfIAAy8IEnAAQDAAABNBVQBLBXgBCkIAABlQAAC4hZBIQhZBHilABIgQAAIAAG/gAgohAIAKAAQAjgBAPgQQAQgQAAgoIAAiEQAAgogQgRQgPgQgjAAIgKAAg");
	this.shape_14.setTransform(204.6,-108.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AArJfIgrmuIgrGuIk1AAICapiIiVpaIEjAAIA4GGIA5mGIEkAAIiWJaICaJig");
	this.shape_15.setTransform(131.375,-108.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AkMJfIAAy8IIWAAIAAECIkAAAIAADOIDQAAIAAEDIjQAAIAADmIEDAAIAAEDg");
	this.shape_16.setTransform(66.325,-108.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiKJeIAAupIirAAIAAkTIJqAAIAAETIiqAAIAAOpg");
	this.shape_17.setTransform(1198.3,-275.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAmJeIAAneIhLAAIAAHeIkWAAIAAy8IEWAAIAAHKIBLAAIAAnKIEWAAIAAS8g");
	this.shape_18.setTransform(1130.475,-275.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AApJyQirgBhYhcQhZhdAAi2IAAoEQAAi1BZhdQBYhcCrAAIACAAQCDgBBvAyIhlDgQgqgNg1AAIgCAAQhtAAAACFIAAHOQAAA/AiAjQAiAkA5AAIABAAQAyAAA3gXIBjDfQh6A9iPAAg");
	this.shape_19.setTransform(1066.6,-275.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABZJeIgVjsIiHAAIgVDsIkRAAICgy8IGTAAICgS8gAgFjVIgjFEIBRAAIgjlEIgGhlg");
	this.shape_20.setTransform(992.175,-275.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiKJeIAAlXIjotlIEgAAIBUGWIBSmWIEfAAIjoNlIAAFXg");
	this.shape_21.setTransform(914.4,-275.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AiJJeIAAlXIjptlIEgAAIBTGWIBTmWIEfAAIjnNlIAAFXg");
	this.shape_22.setTransform(817.8,-275.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAyJeIhgnNIgUAAIAAHNIkWAAIAAy8IEqAAQDAAABLBXQBMBWAACkIAABXQAACxhaBOICKIVgAhChPIAOAAQAkAAAOgQQAPgRAAgoIAAh1QAAgogPgRQgOgQgkAAIgOAAg");
	this.shape_23.setTransform(740.25,-275.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AjpIWQhYhSAAieIAAuLIEcAAIAAOSQAAAzAlAAQAmAAAAgzIAAuSIEcAAIAAOLQAACUhRBWQhSBWidAAQiTAAhYhQg");
	this.shape_24.setTransform(663.075,-275.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AArJeIgrmtIgrGtIk1AAICaphIiVpbIEjAAIA4GHIA5mHIEkAAIiWJbICaJhg");
	this.shape_25.setTransform(588.075,-275.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AjpIWQhYhSAAieIAAuLIEcAAIAAOSQAAAzAlAAQAmAAAAgzIAAuSIEcAAIAAOLQAACUhRBWQhSBWidAAQiTAAhYhQg");
	this.shape_26.setTransform(513.075,-275.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AkbJeIAAy8IEXAAIAAOrIEgAAIAAERg");
	this.shape_27.setTransform(440.525,-275.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AlSIjQhZhOAAikIAAiRQAAhXAqg2QApg1BDgGQg8huAAhQIAAhXQAAioA7hFQA5hFCgAAQCCAAAzBEQA0BEAACqIAABKQAAC4ijAxIBrCbQgTg7AAhaIDhAAIAABIIAABDIgCA1QgBAngEAPIgJArQgFAbgKAUIgXArICgDrIkcAAIgagtQhRA7hgAAQi+AAhZhNgAieC+IAABNQAABCAbAeQAcAeA6AAQASAAAWgHIiZjmgAhYlyQgGAGgCAJQgCAKABAVIAACJIAAAmQA8gOABhBIAAhgQAAgcgHgMQgGgNgTAAQgNAAgHAHg");
	this.shape_28.setTransform(340.95,-276.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AkMJeIAAy8IIWAAIAAEDIkAAAIAADPIDQAAIAAEDIjQAAIAADlIEDAAIAAECg");
	this.shape_29.setTransform(245.975,-275.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAqJyQirgBhZhcQhYhdAAi2IAAoEQAAi1BYhdQBZhcCrAAIABAAQCEgBBuAyIhkDgQgsgNg0AAIgBAAQhtAAAACFIAAHOQAAA/AgAjQAjAkA5AAIACAAQAwAAA4gXIBiDfQh5A9iPAAg");
	this.shape_30.setTransform(185.45,-275.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("ABZJeIgVjsIiHAAIgVDsIkRAAICgy8IGTAAICgS8gAgFjVIgjFEIBRAAIgjlEIgGhlg");
	this.shape_31.setTransform(111.025,-275.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAyJeIhgnNIgTAAIAAHNIkXAAIAAy8IEqAAQDAAABMBXQBLBWAACkIAABXQAACxhaBOICKIVgAhBhPIANAAQAkAAAPgQQAOgRAAgoIAAh1QAAgogOgRQgPgQgkAAIgNAAg");
	this.shape_32.setTransform(32.9,-275.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-124.9,-369,1473.9,388.3), null);


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
	this.shape.graphics.f("#CC0000").s().p("AALAgIgLgoIgKAoIgQAAIgVg/IARAAIAMApIALgpIAPAAIALApIAMgpIARAAIgVA/g");
	this.shape.setTransform(145.175,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AgQAeQgHgFgFgHQgEgIAAgKQAAgJAEgIQAEgHAIgFQAHgDAJAAQAPAAAJAJQAJAKAAANQAAAOgJAKQgKAJgOAAQgIAAgIgDgAgKgNQgFAEABAJQgBAKAFAEQAEAFAGABQAGgBAFgFQAEgEAAgKQAAgJgEgEQgFgGgGAAQgGAAgEAGg");
	this.shape_1.setTransform(136.6,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AARAsIgjg4IAAA4IgQAAIAAhXIARAAIAjA6IAAg6IARAAIAABXg");
	this.shape_2.setTransform(128.325,6.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AgaAsIgCgOIAHABQAGABADgEQADgDABgGIgYg/IASAAIAOAtIAPgtIASAAIgXA9IgEALIgEAJQgCADgCABQgCACgEABIgJABIgJgBg");
	this.shape_3.setTransform(117.075,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AgTAeQgFgDgCgFQgCgFAAgJIAAgoIARAAIAAAeQAAAMABADQABADACACQADACADAAQAEAAADgDQAEgCABgDQABgEAAgNIAAgbIARAAIAAA/IgQAAIAAgJQgDAFgGADQgFADgGAAQgGAAgGgDg");
	this.shape_4.setTransform(109.925,8.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AgkAsIAAhXIAjAAIAPABQAFABAFACQAEADACAFQADAEAAAGQAAAGgEAFQgDAGgGACQAJACAEAFQAEAGAAAIQAAAGgDAFQgDAGgFADQgEAEgHABIgVAAgAgSAdIARAAIAKAAQAFgBACgDQADgDgBgEQAAgEgBgDQgCgDgEgBQgDgBgLAAIgPAAgAgSgIIALAAIANAAQAEgBADgCQACgDABgEQgBgEgCgDQgCgDgEAAIgPAAIgKAAg");
	this.shape_5.setTransform(101.85,6.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ak+hkIJ9AAQAcAAAUAUQAUAUAAAdIAABAQAAAcgUAUQgUAUgcAAIp9AAQgcAAgUgUQgLgLgFgNQgEgLAAgNIAAhAQAAgOAEgLQAFgNALgLQAUgUAcAAg");
	this.shape_6.setTransform(122.225,5.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAD72E").s().p("Ak+BlQgcAAgUgUQgLgLgFgNQgEgLAAgNIAAhAQAAgOAEgLQAFgNALgLQAUgUAcAAIJ9AAQAcAAAUAUQAUAUAAAdIAABAQAAAcgUAUQgUAUgcAAg");
	this.shape_7.setTransform(122.225,5.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.button_mc, new cjs.Rectangle(82.5,-5.4,79.5,22.299999999999997), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAABIIgJhaIAABaIghAAIAAiPIArAAIAJBYIAAhYIAhAAIAACPg");
	this.shape.setTransform(119.425,-1.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPBIIAAiPIAfAAIAACPg");
	this.shape_1.setTransform(112.4,-1.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGBIIgGhWIgFBWIgrAAIgLiPIAjAAIACBuIAKhuIAZAAIAKBuIAChuIAjAAIgLCPg");
	this.shape_2.setTransform(103.875,-1.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcBAQgJgKAAgTIAAhEQAAgUAKgKQAKgKARAAIAAAAQATAAAKAKQAJAKAAAUIAABEQAAAUgJAKQgKAJgTAAQgSAAgKgKgAgDgkIAABJQAAAGADAAIAAAAQAFAAAAgGIAAhJQAAgGgFAAQgDAAAAAGg");
	this.shape_3.setTransform(90.875,-1.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQBIIAAhvIgUAAIAAggIBJAAIAAAgIgUAAIAABvg");
	this.shape_4.setTransform(82.725,-1.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjBEIAJgeQAOAFAGAAQALAAgBgJIAAgBQAAgEgCgEIgJgMIgHgGQgJgJgFgJQgEgIgBgOIAAAAQAAgTAKgLQAJgKARAAQANAAASAGIgJAcQgLgDgFAAQgKAAAAAJIAAABIABACIAAACIABADIACADIAEADIADADIAHAHQAKAKAEAIQAFAJAAAOIAAABQAAATgKALQgKALgQAAQgRAAgSgGg");
	this.shape_5.setTransform(72.85,-1.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfBIIAAiPIA+AAIAAAeIgeAAIAAAZIAZAAIAAAeIgZAAIAAAbIAfAAIAAAfg");
	this.shape_6.setTransform(65.7,-1.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZBAQgLgMAAgVIAAg9QAAgWALgKQAKgMAUAAQAQABANAFIgMAbQgFgCgGABQgMgBgBARIAAA2QAAAHAEAEQAEAFAGAAIABAAQAFgBAHgDIAMAbQgPAIgRgBQgUABgKgLg");
	this.shape_7.setTransform(58.5,-1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAABIIgJhaIAABaIghAAIAAiPIArAAIAJBYIAAhYIAhAAIAACPg");
	this.shape_8.setTransform(49.475,-1.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AALBIIgDgcIgPAAIgDAcIggAAIATiPIAvAAIATCPgAAAgZIgEAmIAJAAIgEgmIgBgMg");
	this.shape_9.setTransform(39.975,-1.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAFBIIAAg5IgJAAIAAA5IghAAIAAiPIAhAAIAAA2IAJAAIAAg2IAhAAIAACPg");
	this.shape_10.setTransform(31.025,-1.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZBAQgLgMAAgVIAAg9QAAgWALgKQAKgMAUAAQAQABANAFIgMAbQgFgCgGABQgMgBgBARIAAA2QAAAHAEAEQAEAFAGAAIABAAQAFgBAHgDIAMAbQgPAIgRgBQgUABgKgLg");
	this.shape_11.setTransform(23.4,-1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfBIIAAiPIA+AAIAAAeIgeAAIAAAZIAZAAIAAAeIgZAAIAAAbIAfAAIAAAfg");
	this.shape_12.setTransform(13.5,-1.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAGBIIgLg3IgCAAIAAA3IghAAIAAiPIAjAAQAXAAAJAKQAIAKABAUIAAAKQAAAVgMAJIARA/gAgHgJIABAAQAFAAABgCQACgCAAgEIAAgOQAAgFgCgCQgBgCgFAAIgBAAg");
	this.shape_13.setTransform(5.15,-1.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcBAQgJgKAAgTIAAhEQAAgUAKgKQAKgKARAAIAAAAQATAAAKAKQAJAKAAAUIAABEQAAAUgJAKQgKAJgTAAQgSAAgKgKgAgDgkIAABJQAAAGADAAIAAAAQAFAAAAgGIAAhJQAAgGgFAAQgDAAAAAGg");
	this.shape_14.setTransform(-3.875,-1.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAYBIIAAhrIgCAQIgKBbIgYAAIgJhbIgCgQIAABrIggAAIAAiPIAyAAIAFBEIAAAKIABgKIAFhEIAyAAIAACPg");
	this.shape_15.setTransform(-14.375,-1.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bonus_prizes_mc, new cjs.Rectangle(-22.9,-14.7,149.7,30.4), null);


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
	this.instance = new lib._300x50();
	this.instance.setTransform(-150,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_mc, new cjs.Rectangle(-150,-25,300,50), null);


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
	this.instance.setTransform(-24,-28.25,0.1883,0.1883);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.b2g2_mc, new cjs.Rectangle(-24,-28.2,48,56.5), null);


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
	this.instance.setTransform(176.6,-0.3,0.0109,0.0109,0,0,0,504.1,412.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAYIgBgLIAIACIAEgBIACgFIgCABQgFAAgDgDQgCgCABgGIAFgXIAJAAIgEAXQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAIAAAAIAFgYIALAAIgHAiQgCAIgEADQgDAEgGAAIgIgBg");
	this.shape.setTransform(168.175,0.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAZIAJgxIAKAAIgKAxg");
	this.shape_1.setTransform(166.1,-0.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAYIALgwIAJAAIgDANIACAAQAGAAADACQACAEgCAGIgCAKQgCAIgDADQgDADgGAAIgMgBgAgBAPIABAAIAAAAIABgEIADgKIAAgBIgCgBIgBAAg");
	this.shape_2.setTransform(163.6821,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAaIAIgjIAJAAIgHAjgAAAgPIAAgEIACgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABIAAAEQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_3.setTransform(161.6375,-0.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNASIADgLIAIACQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIgBgBIAAgBIgBgBIgBAAQgHgDACgIQABgEADgDQADgEAFAAIAJACIgDAKIgHgCQAAAAgBAAQgBAAAAABQAAAAgBAAQAAAAAAABIAAABIACABIACABQADACACABQABADAAAEQgCAFgDAEQgEADgGAAIgJgBg");
	this.shape_4.setTransform(159.475,0.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAATIAEgZQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIgCAAIgEAaIgLAAIAHgiQAHgCAFAAQAMAAgCALIgGAZg");
	this.shape_5.setTransform(156.6898,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMAFIACgJQADgOALAAQAMAAgDAOIgCAJQgDAOgLAAQgMAAADgOgAAAgFIgCALQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIACgLQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABg");
	this.shape_6.setTransform(153.975,0.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAZIAKgxIALAAQAHAAACADQACADgBAHIgDALQgBAGgDADQgEADgFAAIgCAAIgDANgAAAACIAAAAIACAAIABgCIACgLIAAgCIgBgBIgBAAg");
	this.shape_7.setTransform(150.9321,0.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNASIADgLIAIACQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIgBgBIAAgBIgBgBIgBAAQgHgDACgIQABgEADgDQADgEAFAAIAJACIgDAKIgHgCQAAAAgBAAQgBAAAAABQAAAAgBAAQAAAAAAABIAAABIACABIACABQADACACABQABADAAAEQgCAFgDAEQgEADgGAAIgJgBg");
	this.shape_8.setTransform(148.425,0.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAPQgCgDABgHIACgJQACgHADgDQAEgEAFAAQAGAAACAEQACADgBAHIgCAHIgMAAIgBACQAAAEAEAAIAFgBIgBAKIgHABQgHAAgDgEgAAAgGIAAADIACAAIABgDIAAgCQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAABAAAAg");
	this.shape_9.setTransform(145.875,0.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAZIAAgTIgBAAIgEATIgLAAIAKgxIALAAQAIAAACAEQADADgCAHIgBAEQgBAGgFADIACAWgAAAgCIAAAAIACgBIACgCIABgFIgBgCIgCgBIAAAAg");
	this.shape_10.setTransform(142.8531,-0.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAYIgBgLIAIACIAEgBIACgFIgCABQgFAAgDgDQgCgCABgGIAFgXIAJAAIgEAXQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAIAAAAIAFgYIALAAIgHAiQgCAIgEADQgDAEgGAAIgIgBg");
	this.shape_11.setTransform(139.075,0.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAQQgCgDABgFIABgBQABgFADgCQADgDAFAAIACAAIABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIgDgBIgIACIAGgKIADgBIADgBQAHAAACADQADADgCAHIgEAWIgMACQgGAAgDgDgAgBAEIgBACIAAABIAAACIABABIABAAIABgHIgBAAIgBABg");
	this.shape_12.setTransform(136.1615,0.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJAZIAJgxIAKAAIgKAxg");
	this.shape_13.setTransform(134.15,-0.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAZIAKgxIAMAAQAHAAACAEQADADgBAHIgBAEQgCAHgFADQgDADgGAAIgBAAIgEASgAAAgCIAAAAIACAAIABgCIABgGIAAgCIgCgBIAAAAg");
	this.shape_14.setTransform(131.8,-0.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAPIAAgdIAHAAQADAAADACQACACAAAFIAAALQAAAEgCADQgDACgDAAgAAAAJIAAAAIABgBIAAgCIAAgMIgBgBIAAgBIAAAAg");
	this.shape_15.setTransform(-50.325,2.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAPIAAgdIANAAIAAAGIgHAAIAAAFIAGAAIAAAGIgGAAIAAAGIAHAAIAAAGg");
	this.shape_16.setTransform(-52.025,2.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AACAPIgBgGIgCAAIgBAGIgGAAIAEgdIAJAAIAEAdgAAAADIABAAIgBgIgAAAgFIAAgCg");
	this.shape_17.setTransform(-53.75,2.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAPIgBgSIAAASIgHAAIAAgdIAIAAIACASIAAgSIAHAAIAAAdg");
	this.shape_18.setTransform(-56.275,2.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgCAPIAAgdIAGAAIAAAdg");
	this.shape_19.setTransform(-57.8,2.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHAPIACgHIAFABQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAAAIAAgBIgCgDIgBgCQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIgBgEQAAgEACgCQACgDADAAIAGACIgCAFIgDAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIAAABIAAAAIAAABIABAAIAAABIABABIABABIAEADIABAFQAAAEgDADQgCACgDAAIgHgBg");
	this.shape_20.setTransform(-59.55,2.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGAPIAAgdIANAAIAAAGIgHAAIAAAFIAGAAIAAAGIgGAAIAAAGIAHAAIAAAGg");
	this.shape_21.setTransform(-61.075,2.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHAPIAAgGIAIgRIgHAAIAAgGIAOAAIAAAGIgIARIAIAAIAAAGg");
	this.shape_22.setTransform(-62.725,2.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgDAPIAAgdIAGAAIAAAdg");
	this.shape_23.setTransform(-64.05,2.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AABAPIgBgLIgBAAIAAALIgHAAIAAgdIAIAAQAEAAACACQACACAAAEIAAACQAAAEgDACIAEANgAgBgBIABAAIAAgBIAAgBIAAgDIAAgBIAAgBIgBAAg");
	this.shape_24.setTransform(-65.525,2.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHAPIAAgdIAHAAQAEAAACACQACACAAAEIAAADQAAADgCACQgCACgEAAIAAAAIAAALgAAAgBIAAAAIAAAAIABgCIAAgDIgBgBIAAgBIAAAAg");
	this.shape_25.setTransform(-67.425,2.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCATIAAgmIAFAAIAAAmg");
	this.shape_26.setTransform(-70.375,2.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCAPIAAgIIgGgVIAHAAIABAKIACgKIAHAAIgFAVIAAAIg");
	this.shape_27.setTransform(-73.425,2.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGAPIAAgdIAGAAIAAAWIAHAAIAAAHg");
	this.shape_28.setTransform(-75.275,2.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgHAPIAAgdIAHAAQAEAAACACQACACAAAEIAAADQAAADgCACQgCACgEAAIAAAAIAAALgAAAgBIAAAAIAAAAIABgCIAAgDIgBgBIAAgBIAAAAg");
	this.shape_29.setTransform(-77.025,2.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgHAPIAAgdIAHAAQAEAAACACQACACAAAEIAAADQAAADgCACQgCACgEAAIAAAAIAAALgAAAgBIAAAAIAAAAIABgCIAAgDIgBgBIAAgBIAAAAg");
	this.shape_30.setTransform(-78.875,2.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AACAPIgBgGIgCAAIgBAGIgGAAIAEgdIAJAAIAEAdgAAAADIABAAIgBgIgAAAgFIAAgCg");
	this.shape_31.setTransform(-80.75,2.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGAPIABgHIAFABQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAAAIAAgBIgCgDIgBgCQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIgBgEQAAgEACgCQACgDADAAIAGACIgCAFIgDAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIAAABIAAAAIAAABIABAAIABABIAAABIABABIADADIACAFQgBAEgCADQgCACgDAAIgGgBg");
	this.shape_32.setTransform(-83.05,2.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgBAHIgBgNIAFAAIgBANg");
	this.shape_33.setTransform(-84.375,1.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAOQgDgDAAgFIAAgLQAAgFADgCQACgDADAAQAEAAACACIgCAFIgDAAQAAAAgBAAQAAAAgBABQAAAAAAABQAAAAAAABIAAALIAAACIADABIACgBIADAHQgDABgEAAQgDAAgCgCg");
	this.shape_34.setTransform(-85.575,2.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgHAOQgDgCAAgEIAAgEIABgEQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIgBgFIAAgCQAAgEABgCQABgCAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQACACgBAEIAAACQAAAEgEABIADAEIAAgEIAFAAIAAACIAAACIAAABIAAABIgBABIAAABIAAABIAEAGIgIAAIAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgEAAgCgCgAgDAFIAAACIAAACIADABIAAAAIgDgGgAgCgIIAAABIAAAEIAAABQABgBAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgDIAAgBIgBgBIgBAAg");
	this.shape_35.setTransform(-87.65,2.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDAPIAAgXIgEAAIAAgGIAPAAIAAAGIgEAAIAAAXg");
	this.shape_36.setTransform(-89.65,2.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgCATIAAgmIAFAAIAAAmg");
	this.shape_37.setTransform(-92.525,2.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgBAPIAAgWIgDABIAAgGIAJgCIAAAdg");
	this.shape_38.setTransform(-95.3,2.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgFAOQgCgCAAgFIAAgBQAAgEACgCIgCgEIAAgCQABgEACgCQACgDACAAQADAAADADQACACAAAEIAAACIgCAEQACACAAAEIAAABQAAAFgCACQgCACgEAAQgDAAgCgCgAAAAEIAAAEIAAABIABgBIAAgEIgBgBIAAABgAAAgHIAAAFIAAABIAAAAIAAAAIABgBIAAgFIgBgBIAAABg");
	this.shape_39.setTransform(-96.8,2.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgHAQIAAgGQAIgKAAgEIAAgBIgBgCIgBgBIgEABIgCgGQADgCAEAAQAEAAACADQACADAAAEIAAAAIgBAEIgCAEIgCADIgDADIAHAAIAAAHg");
	this.shape_40.setTransform(-98.575,2.475);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgHAPIACgHIAFABQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAAAIgBgBIgBgDIgBgCQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIgBgEQAAgEACgCQACgDACAAIAHACIgCAFIgDAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIAAABIAAAAIAAABIAAAAIABABIABABIABABIAEADIABAFQAAAEgCADQgCACgEAAIgHgBg");
	this.shape_41.setTransform(-100.75,2.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgGAPIAAgdIANAAIAAAGIgHAAIAAAFIAGAAIAAAGIgGAAIAAAGIAHAAIAAAGg");
	this.shape_42.setTransform(-102.275,2.525);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgCAPIAAgdIAFAAIAAAdg");
	this.shape_43.setTransform(-103.55,2.525);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AABAPIgBgLIgBAAIAAALIgHAAIAAgdIAIAAQAEAAACACQACACAAAEIAAACQAAAEgDACIAEANgAgBgBIABAAIAAgBIAAgBIAAgDIAAgBIAAgBIgBAAg");
	this.shape_44.setTransform(-104.975,2.525);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgGAPIAAgdIANAAIAAAGIgHAAIAAAFIAGAAIAAAGIgGAAIAAAGIAHAAIAAAGg");
	this.shape_45.setTransform(-106.675,2.525);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgGAPIABgHIAFABQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAAAIAAgBIgCgDIgBgCQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIgBgEQAAgEACgCQACgDADAAIAGACIgCAFIgDAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIAAABIAAAAIAAABIABAAIABABIAAABIABABIADADIACAFQgBAEgCADQgCACgDAAIgGgBg");
	this.shape_46.setTransform(-108.25,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.3,-4.8,291.1,10.8);


// stage content:
(lib.bigticketconversionhtml5300x50 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(113.8,43.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(397));

	// ticket
	this.instance_1 = new lib.ticket_mc();
	this.instance_1.setTransform(73.35,22.5,0.0831,0.0831);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(286).to({_off:false},0).wait(1).to({regX:-1274.1,regY:-6.3,x:-32.35,y:22,alpha:0.0032},0).wait(1).to({x:-31.45,alpha:0.0145},0).wait(1).to({x:-29.75,alpha:0.0371},0).wait(1).to({x:-26.7,alpha:0.077},0).wait(1).to({x:-21.35,y:22.05,alpha:0.1467},0).wait(1).to({x:-12.1,y:22.1,alpha:0.2672},0).wait(1).to({x:-0.7,y:22.15,alpha:0.4164},0).wait(1).to({x:10.7,y:22.2,alpha:0.5648},0).wait(1).to({x:20.2,y:22.25,alpha:0.6887},0).wait(1).to({x:27.65,y:22.3,alpha:0.7859},0).wait(1).to({x:33.5,alpha:0.8625},0).wait(1).to({x:38.1,y:22.35,alpha:0.9229},0).wait(1).to({x:41.2,alpha:0.9628},0).wait(1).to({x:42.95,alpha:0.9857},0).wait(1).to({x:43.8,alpha:0.9969},0).wait(1).to({regX:0,regY:0,x:149.95,y:22.9,alpha:1},0).wait(95));

	// logo
	this.instance_2 = new lib.bt_logo();
	this.instance_2.setTransform(149.95,3.8,0.0852,0.0852,0,0,0,0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(286).to({alpha:0},16).wait(95));

	// cta
	this.instance_3 = new lib.button_mc();
	this.instance_3.setTransform(162.75,33.15,1,1,0,0,0,28.2,7.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(302).to({_off:false},0).to({y:24.4,alpha:1},16).wait(79));

	// b2g2_mc
	this.instance_4 = new lib.b2g2_mc();
	this.instance_4.setTransform(89,31.25);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90).to({_off:false},0).wait(1).to({y:31.2316,alpha:0.0037},0).wait(1).to({y:31.1663,alpha:0.0167},0).wait(1).to({y:31.0327,alpha:0.0435},0).wait(1).to({y:30.7907,alpha:0.0919},0).wait(1).to({y:30.3422,alpha:0.1816},0).wait(1).to({y:29.626,alpha:0.3248},0).wait(1).to({y:28.8111,alpha:0.4878},0).wait(1).to({y:28.0777,alpha:0.6345},0).wait(1).to({y:27.5004,alpha:0.7499},0).wait(1).to({y:27.056,alpha:0.8388},0).wait(1).to({y:26.7062,alpha:0.9088},0).wait(1).to({y:26.468,alpha:0.9564},0).wait(1).to({y:26.3328,alpha:0.9834},0).wait(1).to({y:26.268,alpha:0.9964},0).wait(1).to({y:26.25,alpha:1},0).wait(61).to({alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:0.9081},0).wait(1).to({alpha:0.8184},0).wait(1).to({alpha:0.6752},0).wait(1).to({alpha:0.5122},0).wait(1).to({alpha:0.3655},0).wait(1).to({alpha:0.2501},0).wait(1).to({alpha:0.1612},0).wait(1).to({alpha:0.0912},0).wait(1).to({alpha:0.0436},0).wait(1).to({alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({alpha:0},0).wait(217));

	// bonus_prizes
	this.instance_5 = new lib.bonus_prizes_mc();
	this.instance_5.setTransform(156.9,28.75);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90).to({_off:false},0).wait(1).to({regX:51.9,regY:-1.6,x:208.8,y:27.1,alpha:0.0037},0).wait(1).to({y:27.05,alpha:0.0167},0).wait(1).to({y:26.9,alpha:0.0435},0).wait(1).to({y:26.65,alpha:0.0919},0).wait(1).to({y:26.2,alpha:0.1816},0).wait(1).to({y:25.5,alpha:0.3248},0).wait(1).to({y:24.7,alpha:0.4878},0).wait(1).to({y:23.95,alpha:0.6345},0).wait(1).to({y:23.4,alpha:0.7499},0).wait(1).to({y:22.95,alpha:0.8388},0).wait(1).to({y:22.6,alpha:0.9088},0).wait(1).to({y:22.35,alpha:0.9564},0).wait(1).to({y:22.2,alpha:0.9834},0).wait(1).to({y:22.15,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:156.9,y:23.75,alpha:1},0).wait(61).to({regX:51.9,regY:-1.6,x:208.8,y:22.1,alpha:0.9963},0).wait(1).to({y:22.05,alpha:0.9833},0).wait(1).to({y:21.9,alpha:0.9565},0).wait(1).to({y:21.65,alpha:0.9081},0).wait(1).to({y:21.2,alpha:0.8184},0).wait(1).to({y:20.5,alpha:0.6752},0).wait(1).to({y:19.7,alpha:0.5122},0).wait(1).to({y:18.95,alpha:0.3655},0).wait(1).to({y:18.4,alpha:0.2501},0).wait(1).to({y:17.95,alpha:0.1612},0).wait(1).to({y:17.6,alpha:0.0912},0).wait(1).to({y:17.35,alpha:0.0436},0).wait(1).to({y:17.2,alpha:0.0166},0).wait(1).to({y:17.15,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:156.9,y:18.75,alpha:0},0).to({_off:true},88).wait(129));

	// sub_caption
	this.instance_6 = new lib.daily_caption_mc();
	this.instance_6.setTransform(149.7,44.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(165).to({_off:false},0).wait(1).to({regX:613.8,regY:-192.2,x:213.55,y:24.25,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:24.2,alpha:0.0435},0).wait(1).to({y:24.1,alpha:0.0919},0).wait(1).to({y:23.9,alpha:0.1816},0).wait(1).to({y:23.6,alpha:0.3248},0).wait(1).to({y:23.25,alpha:0.4878},0).wait(1).to({y:22.95,alpha:0.6345},0).wait(1).to({y:22.7,alpha:0.7499},0).wait(1).to({y:22.5,alpha:0.8388},0).wait(1).to({y:22.35,alpha:0.9088},0).wait(1).to({y:22.25,alpha:0.9564},0).wait(1).to({y:22.2,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:149.7,y:42.25,alpha:1},0).wait(107).to({regX:613.8,regY:-192.2,x:213.55,y:22.2,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:22.25,alpha:0.9565},0).wait(1).to({y:22.35,alpha:0.9081},0).wait(1).to({y:22.55,alpha:0.8184},0).wait(1).to({y:22.85,alpha:0.6752},0).wait(1).to({y:23.2,alpha:0.5122},0).wait(1).to({y:23.5,alpha:0.3655},0).wait(1).to({y:23.75,alpha:0.2501},0).wait(1).to({y:23.95,alpha:0.1612},0).wait(1).to({y:24.1,alpha:0.0912},0).wait(1).to({y:24.2,alpha:0.0436},0).wait(1).to({y:24.25,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:149.7,y:44.35,alpha:0},0).wait(96));

	// second_prize
	this.instance_7 = new lib.second_prize_mc();
	this.instance_7.setTransform(92.95,32.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(165).to({_off:false},0).wait(1).to({regX:13,regY:0.1,x:105.9,y:32.25,alpha:0.0037},0).wait(1).to({x:105.85,y:32.15,alpha:0.0167},0).wait(1).to({x:105.7,y:32,alpha:0.0435},0).wait(1).to({x:105.4,y:31.65,alpha:0.0919},0).wait(1).to({x:104.95,y:31.1,alpha:0.1816},0).wait(1).to({x:104.15,y:30.15,alpha:0.3248},0).wait(1).to({x:103.25,y:29.05,alpha:0.4878},0).wait(1).to({x:102.45,y:28.1,alpha:0.6345},0).wait(1).to({x:101.8,y:27.35,alpha:0.7499},0).wait(1).to({x:101.3,y:26.75,alpha:0.8388},0).wait(1).to({x:100.95,y:26.3,alpha:0.9088},0).wait(1).to({x:100.65,y:25.95,alpha:0.9564},0).wait(1).to({x:100.5,y:25.8,alpha:0.9834},0).wait(1).to({x:100.45,y:25.7,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:87.45,y:25.6,alpha:1},0).wait(106).to({x:93.2,y:25.2},0).wait(1).to({regX:13,regY:0.1,scaleX:0.9999,scaleY:0.9999,x:106.45,y:25.3},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,x:107.45},0).wait(1).to({scaleX:0.9988,scaleY:0.9988,x:109.45},0).wait(1).to({scaleX:0.9974,scaleY:0.9974,x:113.05},0).wait(1).to({scaleX:0.9948,scaleY:0.9948,x:119.85,y:25.35},0).wait(1).to({scaleX:0.9907,scaleY:0.9907,x:130.65,y:25.45},0).wait(1).to({scaleX:0.9861,scaleY:0.9861,x:142.85,y:25.5},0).wait(1).to({scaleX:0.9819,scaleY:0.9819,x:153.9,y:25.6},0).wait(1).to({scaleX:0.9786,scaleY:0.9786,x:162.55,y:25.65},0).wait(1).to({scaleX:0.9761,scaleY:0.9761,x:169.3,y:25.7},0).wait(1).to({scaleX:0.9741,scaleY:0.9741,x:174.55,y:25.75},0).wait(1).to({scaleX:0.9727,scaleY:0.9727,x:178.15},0).wait(1).to({scaleX:0.9719,scaleY:0.9719,x:180.15},0).wait(1).to({scaleX:0.9716,scaleY:0.9716,x:181.15},0).wait(1).to({regX:0.1,scaleX:0.9715,scaleY:0.9715,x:168.8,y:25.7},0).wait(96));

	// main_caption
	this.instance_8 = new lib.sub_caption_mc();
	this.instance_8.setTransform(149.7,44.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({_off:false},0).wait(1).to({regX:498.2,regY:-167.6,x:201.55,y:26.8,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:26.75,alpha:0.0435},0).wait(1).to({y:26.65,alpha:0.0919},0).wait(1).to({y:26.45,alpha:0.1816},0).wait(1).to({y:26.15,alpha:0.3248},0).wait(1).to({y:25.8,alpha:0.4878},0).wait(1).to({y:25.5,alpha:0.6345},0).wait(1).to({y:25.25,alpha:0.7499},0).wait(1).to({y:25.05,alpha:0.8388},0).wait(1).to({y:24.9,alpha:0.9088},0).wait(1).to({y:24.8,alpha:0.9564},0).wait(1).to({y:24.75,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:149.7,y:42.25,alpha:1},0).wait(61).to({regX:498.2,regY:-167.6,x:201.55,y:24.75,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:24.8,alpha:0.9565},0).wait(1).to({y:24.9,alpha:0.9081},0).wait(1).to({y:25.1,alpha:0.8184},0).wait(1).to({y:25.4,alpha:0.6752},0).wait(1).to({y:25.75,alpha:0.5122},0).wait(1).to({y:26.05,alpha:0.3655},0).wait(1).to({y:26.3,alpha:0.2501},0).wait(1).to({y:26.5,alpha:0.1612},0).wait(1).to({y:26.65,alpha:0.0912},0).wait(1).to({y:26.75,alpha:0.0436},0).wait(1).to({y:26.8,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:149.7,y:44.35,alpha:0},0).to({_off:true},88).wait(204));

	// promo
	this.instance_9 = new lib.promo_mc();
	this.instance_9.setTransform(179.15,23.35,0.0867,0.0867,0,0,0,0.6,0.6);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:-706.6,regY:20.2,x:117.65,y:25.05,alpha:0.0037},0).wait(1).to({x:117.3,alpha:0.0167},0).wait(1).to({x:116.5,alpha:0.0435},0).wait(1).to({x:115.1,alpha:0.0919},0).wait(1).to({x:112.45,alpha:0.1816},0).wait(1).to({x:108.3,alpha:0.3248},0).wait(1).to({x:103.55,alpha:0.4878},0).wait(1).to({x:99.25,alpha:0.6345},0).wait(1).to({x:95.9,alpha:0.7499},0).wait(1).to({x:93.3,alpha:0.8388},0).wait(1).to({x:91.25,alpha:0.9088},0).wait(1).to({x:89.85,alpha:0.9564},0).wait(1).to({x:89.05,alpha:0.9834},0).wait(1).to({x:88.7,alpha:0.9964},0).wait(1).to({regX:0,regY:0.6,x:149.95,y:23.35,alpha:1},0).wait(76).to({regX:-706.6,regY:20.2,x:88.65,y:25,alpha:0.9963},0).wait(1).to({y:24.9,alpha:0.9833},0).wait(1).to({y:24.7,alpha:0.9565},0).wait(1).to({y:24.3,alpha:0.9081},0).wait(1).to({y:23.6,alpha:0.8184},0).wait(1).to({y:22.5,alpha:0.6752},0).wait(1).to({y:21.2,alpha:0.5122},0).wait(1).to({y:20.05,alpha:0.3655},0).wait(1).to({y:19.15,alpha:0.2501},0).wait(1).to({y:18.45,alpha:0.1612},0).wait(1).to({y:17.9,alpha:0.0912},0).wait(1).to({y:17.5,alpha:0.0436},0).wait(1).to({y:17.3,alpha:0.0166},0).wait(1).to({y:17.2,alpha:0.0036},0).wait(1).to({regX:0,regY:0.6,x:149.95,y:15.5,alpha:0},0).wait(182).to({regX:-706.6,regY:20.2,x:88.75,y:17.2,alpha:0.0037},0).wait(1).to({x:89.15,y:17.3,alpha:0.0167},0).wait(1).to({x:90,y:17.5,alpha:0.0435},0).wait(1).to({x:91.5,y:17.9,alpha:0.0919},0).wait(1).to({x:94.35,y:18.65,alpha:0.1816},0).wait(1).to({x:98.85,y:19.75,alpha:0.3248},0).wait(1).to({x:104,y:21.1,alpha:0.4878},0).wait(1).to({x:108.6,y:22.25,alpha:0.6345},0).wait(1).to({x:112.25,y:23.15,alpha:0.7499},0).wait(1).to({x:115.05,y:23.9,alpha:0.8388},0).wait(1).to({x:117.25,y:24.45,alpha:0.9088},0).wait(1).to({x:118.75,y:24.85,alpha:0.9564},0).wait(1).to({x:119.6,y:25.05,alpha:0.9834},0).wait(1).to({x:120,y:25.15,alpha:0.9964},0).wait(1).to({regX:0,regY:0.6,x:181.45,y:23.5,alpha:1},0).wait(96));

	// background
	this.instance_10 = new lib.background_mc();
	this.instance_10.setTransform(150,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(397));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(77.3,17.9,222.7,41.6);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 300,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_2ndprize.png", id:"_2ndprize"},
		{src:"images/_300x50.jpg", id:"_300x50"},
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