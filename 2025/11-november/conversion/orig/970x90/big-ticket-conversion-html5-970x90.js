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


(lib._970x90 = function() {
	this.initialize(img._970x90);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,90);


(lib.b2g2 = function() {
	this.initialize(img.b2g2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,255,300);


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
	this.instance.setTransform(-3812,-706,7.0332,7.0332);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-3812,-706,2714.8,1462.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AkfEIQh1haAAivQAAifB1hhQByhiCtAAQCuAABzBiQB0BhAACfQAACvh0BaQhzBciuAAQitAAhyhcg");
	this.shape.setTransform(3312.275,-64.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AsHWyIC6qDQEwB3CCAAQD8AAAAjEIAAgUQAAhZg9hfQg/hgibiaIiHiEQjbjZhgi7Qhgi6AAklIAAgIQAAmYDQjlQDPjlFxAAQEtAAFlCPIi5JZQjihGhsAAQj1AAAADIIAAALQAAAcAJAaQAKAbANAYQANAXAbAhQAeAkATAVIBCBFIBFBLQBhBoAyAvQDhDiBkC2QBiC2AAE8IAAAEQAAGmjeDxQjeDwlvAAQlyAAlyiUg");
	this.shape_1.setTransform(3179,-190.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AqyYYMAAAgwvIVeAAIAAKZIqTAAIAAIUIIXAAIAAKbIoXAAIAAJOIKaAAIAAKZg");
	this.shape_2.setTransform(3024.675,-189.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AllYYMAAAgwvILLAAMAAAAwvg");
	this.shape_3.setTransform(2896.75,-189.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlkYYMAAAglvIm4AAIAArAIY4AAIAALAIm1AAMAAAAlvg");
	this.shape_4.setTransform(2767.9,-189.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AllYYMAAAgwvILLAAMAAAAwvg");
	this.shape_5.setTransform(2639,-189.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ArZYYMAAAgwvILMAAMAAAAlvILnAAIAALAg");
	this.shape_6.setTransform(2503.375,-189.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AllYYMAAAgwvILLAAMAAAAwvg");
	this.shape_7.setTransform(2371.6,-189.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AtCYYMAAAgwvIMRAAQGIAADlC8QDlC+AAGEIAABNQAADzhMCSQhOCViwBNQFsCCAAIDIAAC+QAAGQjbDUQjfDWl5AAgAh2N0IArAAQBYAAAfgpQAigoAAhaIAAkyQAAhegggpQgegshbAAIgrAAgAh2lbIA2AAQBXAAAjgoQAfgpAAhYIAAi8QAAhcgegsQgfgphcAAIg2AAg");
	this.shape_8.setTransform(2231.1,-189.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AllYYMAAAgwvILLAAMAAAAwvg");
	this.shape_9.setTransform(2088.85,-189.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AsHWyIC6qDQExB3CBAAQD9AAAAjEIAAgUQAAhZg/hfQg/hgiZiaIiHiEQjdjZhfi7Qhgi6AAklIAAgIQAAmYDQjlQDPjlFxAAQEtAAFlCPIi4JZQjjhGhrAAQj2AAAADIIAAALQAAAcAJAaQAKAbANAYQANAXAcAhQAeAkATAVIBBBFIBGBLQBfBoAzAvQDhDiBkC2QBiC2AAE8IAAAEQAAGmjeDxQjdDwlwAAQlyAAlyiUg");
	this.shape_10.setTransform(1960.25,-190.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AsHWyIC6qDQEwB3CCAAQD9AAAAjEIAAgUQgBhZg9hfQg/hgibiaIiHiEQjcjZhfi7Qhgi6AAklIAAgIQAAmYDRjlQDOjlFyAAQEsAAFlCPIi5JZQjihGhsAAQj1AAAADIIAAALQAAAcAJAaQAKAbANAYQANAXAbAhQAeAkAUAVIBBBFIBGBLQBgBoAyAvQDhDiBkC2QBiC2AAE8IAAAEQAAGmjeDxQjeDwlvAAQlyAAlyiUg");
	this.shape_11.setTransform(1797.5,-190.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AADZGQmbAAjSjdQjTjgABmfIAA3NQAAmuDYjaQDYjaGMAAIAHAAQGXAADQDgQDPDfAAGjIAAXNQABGujXDYQjUDWmJAAgAhgsdIAAY/QAACEBgAAIADAAQBgAAAAiEIAA4/QAAiGhjAAIgEAAQhcAAAACGg");
	this.shape_12.setTransform(1621.75,-190.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("As1YYMAAAgwvIL3AAQHvAADDDeQDCDdAAGnIAAEFQAAHYjmC5QjlC6mpAAIgrAAIAAR9gAhpinIAcAAQBbAAAlgpQAogsAAhnIAAlSQAAhngogsQglgphbAAIgcAAg");
	this.shape_13.setTransform(1433.6,-189.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("As9LlIAA3JQAAmQEEjrQEBjrGXAAQF9AAFiDGIkCJnQi1hhjUAAQkWAAADE4IAAVYQAACTBuAAQAzAAAegTIAAxmIKkAAIAAY8QjWB6ifA0QigA1jVAAQtWAAAAtmg");
	this.shape_14.setTransform(1202.4,-189.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AllYYMAAAgwvILLAAMAAAAwvg");
	this.shape_15.setTransform(1060.65,-189.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AtCYYMAAAgwvIMSAAQGHAADlC8QDlC+AAGEIAABNQABDzhNCSQhOCViwBNQFsCCAAIDIAAC+QAAGQjbDUQjfDWl5AAgAh2N0IArAAQBYAAAfgpQAigoAAhaIAAkyQAAhegggpQgegshbAAIgrAAgAh2lbIA2AAQBYAAAigoQAfgpAAhYIAAi8QAAhcgegsQgfgphcAAIg2AAg");
	this.shape_16.setTransform(920.15,-189.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AkfEIQh1haAAivQAAifB1hhQByhiCtAAQCuAABzBiQB0BhAACfQAACvh0BaQhzBciuAAQitAAhyhcg");
	this.shape_17.setTransform(723.225,-64.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AlkYYMAAAglvIm3AAIAArAIY4AAIAALAIm2AAMAAAAlvg");
	this.shape_18.setTransform(589.65,-189.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AqyYYMAAAgwvIVeAAIAAKZIqTAAIAAIUIIXAAIAAKbIoXAAIAAJOIKaAAIAAKZg");
	this.shape_19.setTransform(435.125,-189.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABmYYIkb2XIAAWXIrMAAMAAAgwvILMAAIAAWQIEW2QILwAAImBXBIGyZug");
	this.shape_20.setTransform(256.95,-189.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ABrZJQm6AAjkjuQjjjvAAnSIAA0yQAAnSDjjvQDkjvG6AAIAEAAQFSAAEbCAIkBJAQhvghiHAAIgEAAQkaAAAAFWIAASoQgBChBYBbQBYBaCTAAIAEAAQB+AACOg7ID+I/Qk4CalwAAg");
	this.shape_21.setTransform(76.55,-189.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AllYYMAAAgwvILLAAMAAAAwvg");
	this.shape_22.setTransform(-61.3,-189.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AlkYYMAAAglvIm3AAIAArAIY4AAIAALAIm3AAMAAAAlvg");
	this.shape_23.setTransform(-190.2,-189.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("As8LlIAA3JQAAmQEDjrQEBjrGXAAQF9AAFiDGIkCJnQi1hhjTAAQkYAAAEE4IAAVYQAACTBuAAQAzAAAegTIAAxmIKkAAIAAY8QjWB6ifA0QihA1jTAAQtXAAABtmg");
	this.shape_24.setTransform(-409.3,-189.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AllYYMAAAgwvILLAAMAAAAwvg");
	this.shape_25.setTransform(-551.05,-189.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AtCYYMAAAgwvIMRAAQGIAADlC8QDmC+AAGEIAABNQAADzhOCSQhNCViwBNQFsCCAAIDIAAC+QAAGQjcDUQjdDWl6AAgAh2N0IArAAQBXAAAhgpQAhgoAAhaIAAkyQAAhegggpQgegshbAAIgrAAgAh2lbIA2AAQBYAAAhgoQAggpABhYIAAi8QgBhcgegsQgggphbAAIg2AAg");
	this.shape_26.setTransform(-691.55,-189.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-2010.4,-428.5,6598.799999999999,567.2), null);


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
	this.instance.setTransform(-41,-121,0.9244,0.9244);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-41,-121,479.8,228.4), null);


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
	this.instance.setTransform(-3677,-540,3.8791,3.8791);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-3677,-540,1078.4,1113.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AtHYrIDJq3QFKCACMgBQESAAAAjTIAAgWQAAhghDhoQhFhniminIiTiPQjujrhnjMQhpjJAAk9IAAgJQABm5Dhj5QDgj4GQAAQFGAAGDCbIjIKLQj2hLh0AAQkJAAgBDYIAAAMQAAAeAKAcQALAdAOAaQAOAZAdAkQAhAoAUAWIBIBLIBLBRQBoBxA3AzQD0D0BsDGQBpDGAAFVIAAAFQAAHJjwEEQjvEFmPAAQmRAAmQihg");
	this.shape.setTransform(4181.25,-198.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ArsaaMAAAg0zIXRAAIAALQIrKAAIAAJAIJDAAIAALUIpDAAIAAJ/ILSAAIAALQg");
	this.shape_1.setTransform(4014.2,-197.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AB0bPQnfAAj2kCQj3kDAAn5IAA2hQAAn5D3kDQD2kCHfAAIAEAAQFvAAEzCKIkXJxQh4gliTAAIgEAAQkyAAAAFzIAAULQAACvBfBiQBfBiCfAAIAEAAQCJAACahAIETJvQlSCnmPAAg");
	this.shape_2.setTransform(3845.275,-198.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKaaMgDWgheMAAAAheIsHAAMAAAg0zIP9AAMADNAgrMAAAggrIMFAAMAAAA0zg");
	this.shape_3.setTransform(3634.525,-197.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ArsaaMAAAg0zIXRAAIAALQIrLAAIAAJAIJFAAIAALUIpFAAIAAJ/ILTAAIAALQg");
	this.shape_4.setTransform(3443.2,-197.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmDaaMAAAg0zIMHAAMAAAA0zg");
	this.shape_5.setTransform(3304.475,-197.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACLaaIkN0IIg3AAIAAUIIsIAAMAAAg0zIM/AAQIYAADUDwQDRDwAAHKIAADyQAAHvj6DZIGBXPgAi5jeIAmAAQBkAAApgvQAqgsAAhwIAAlGQAAhwgqgvQgpgshkAAIgmAAg");
	this.shape_6.setTransform(3144.675,-197.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ArsaaMAAAg0zIXRAAIAALQIrKAAIAAJAIJDAAIAALUIpDAAIAAJ/ILSAAIAALQg");
	this.shape_7.setTransform(2957.15,-197.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("At5aaMAAAg0zIM2AAQIYAADTDwQDTDwAAHKIAAEbQgBIAj4DHQj4DKnNAAIgvAAIAATdgAhyi1IAeAAQBkAAAogtQArgvgBhwIAAluQABhwgrgvQgogshkAAIgeAAg");
	this.shape_8.setTransform(2768.35,-197.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AB6aaIh5ysIh5SsItfAAIGt6kImf6PIMtAAICdRBICfxBIMsAAImhaPIGtakg");
	this.shape_9.setTransform(2564.35,-197.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ArsaaMAAAg0zIXRAAIAALQIrKAAIAAJAIJDAAIAALUIpDAAIAAJ/ILSAAIAALQg");
	this.shape_10.setTransform(2382.95,-197.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AmCaaMAAAgo4IncAAIAAr7Ia9AAIAAL7InaAAMAAAAo4g");
	this.shape_11.setTransform(2153.125,-197.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABqaaIAA01IjTAAIAAU1IsHAAMAAAg0zIMHAAIAAT8IDTAAIAAz8IMHAAMAAAA0zg");
	this.shape_12.setTransform(1964.125,-197.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AB0bPQnfAAj2kCQj3kDAAn5IAA2hQAAn5D3kDQD2kCHfAAIAEAAQFvAAEzCKIkXJxQh4gliTAAIgEAAQkyAAAAFzIAAULQAACvBfBiQBfBiCfAAIAEAAQCJAACahAIETJvQlSCnmPAAg");
	this.shape_13.setTransform(1786.025,-198.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AD5aaIg9qTIl3AAIg9KTIr3AAMAG9g0zIRlAAMAG9A0zgAgQpUIhgOKIDhAAIhguKIgQkZg");
	this.shape_14.setTransform(1578.775,-197.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AmBaaIAAu+MgKIgl1IMiAAIDrRpIDmxpIMgAAMgKFAl1IAAO+g");
	this.shape_15.setTransform(1361.9,-197.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AmCaaIAAu+MgKHgl1IMiAAIDrRpIDmxpIMgAAMgKFAl1IAAO+g");
	this.shape_16.setTransform(1092.6,-197.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ACLaaIkN0IIg3AAIAAUIIsIAAMAAAg0zIM/AAQIYAADUDwQDRDwAAHKIAADyQAAHvj6DZIGBXPgAi5jeIAmAAQBkAAApgvQAqgsAAhwIAAlGQAAhwgqgvQgpgshkAAIgmAAg");
	this.shape_17.setTransform(876.525,-197.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AqMXPQj1jiAAm5MAAAgnhIMXAAMAAAAn1QAACOBrAAQBoAAgBiOMAAAgn1IMaAAMAAAAnhQAAGcjkDwQjkDvm1AAQmaAAj3jgg");
	this.shape_18.setTransform(661.6,-195.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AB6aaIh5ysIh5SsItfAAIGu6kImf6PIMsAAICdRBICfxBIMsAAImhaPIGtakg");
	this.shape_19.setTransform(452.5,-197.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AqLXPQj2jigBm5MAAAgnhIMYAAMAAAAn1QAACOBrAAQBoAAAAiOMAAAgn1IMZAAMAAAAnhQABGcjkDwQjkDvm2AAQmaAAj2jgg");
	this.shape_20.setTransform(243.7,-195.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AsWaaMAAAg0zIMIAAMAAAAo4IMlAAIAAL7g");
	this.shape_21.setTransform(41.575,-197.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AuvX0Qj5jZAAnKIAAmTQAAjzB0iWQByiWC8gQQinkzAAjeIAAjyQAAnWCjjAQCijBG+AAQFpAACRDAQCQC9AAHaIAADNQAAIBnICIIEqGxQgziiAAj+IJwAAIAADLIAAC7QAAAmgEBsQgEBugKApQgKAqgOBOQgPBLgaA5QgdA5gkA9IG+KQIsYAAIhHh8QjiCkkOAAQoRAAj4jYgAm5ISIAADXQAAC3BMBTQBLBUCjAAQAxAAA/gVImqp/gAj3wJQgTAQgEAbQgEAbAAA6IAAF/IAABqQCrgmAAi4IAAkLQAAhPgSggQgSgjgzAAQglAAgUASg");
	this.shape_22.setTransform(-235.825,-198.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ArsaaMAAAg0zIXRAAIAALQIrLAAIAAJAIJFAAIAALUIpFAAIAAJ/ILTAAIAALQg");
	this.shape_23.setTransform(-500.6,-197.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AB0bPQnfAAj2kCQj3kDAAn5IAA2hQAAn5D3kDQD2kCHfAAIAEAAQFvAAEzCKIkXJxQh4gliTAAIgEAAQkyAAAAFzIAAULQAACvBfBiQBfBiCfAAIAEAAQCJAACahAIETJvQlSCnmPAAg");
	this.shape_24.setTransform(-669.525,-198.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AD5aaIg9qTIl3AAIg9KTIr3AAMAG9g0zIRlAAMAG9A0zgAgQpUIhgOKIDhAAIhguKIgQkZg");
	this.shape_25.setTransform(-876.775,-197.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ACLaaIkN0IIg3AAIAAUIIsIAAMAAAg0zIM/AAQIYAADUDwQDRDwAAHKIAADyQAAHvj6DZIGBXPgAi5jeIAmAAQBkAAApgvQAqgsAAhwIAAlGQAAhwgqgvQgpgshkAAIgmAAg");
	this.shape_26.setTransform(-1094.575,-197.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_sub_caption_mc, new cjs.Rectangle(-1875.4,-456.5,6817.4,613.5), null);


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
	this.instance.setTransform(6101,-485,10.4564,10.4564);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(6101,-485,2551.3999999999996,491.5), null);


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
	this.instance.setTransform(-6097,-219,14.3127,14.3127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bt_logo, new cjs.Rectangle(-6097,-219,1574.3999999999996,901.7), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACLaaIkN0IIg3AAIAAUIIsIAAMAAAg0zIM/AAQIYAADUDwQDRDwAAHKIAADyQAAHvj6DZIGBXPgAi5jeIAmAAQBkAAApgvQAqgsAAhwIAAlGQAAhwgqgvQgpgshkAAIgmAAg");
	this.shape.setTransform(4398.875,-169.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ArsaaMAAAg0zIXRAAIAALQIrLAAIAAJAIJEAAIAALUIpEAAIAAJ/ILTAAIAALQg");
	this.shape_1.setTransform(4211.4,-169.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AuIaaMAAAg0zINTAAQGoAAD5DLQD4DOAAGlIAABUQAAEGhTCfQhUChi/BTQGLCOAAItIAADOQAAGxjvDmQjwDomZAAgAiAO+IAvAAQBeAAAjgtQAkgrAAhiIAAlLQAAhmgigtQghgvhiAAIgvAAgAiAl4IA7AAQBeAAAlgrQAjgtAAhgIAAjLQAAhkghgvQgigshjAAIg7AAg");
	this.shape_2.setTransform(4023.225,-169.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AIoaaMAAAgnkIgiGCMgDkAhiIpHAAMgDmghiIghmCMAAAAnkIrvAAMAAAg0zISZAAIBwZCIAQD/IAWj/IB35CISQAAMAAAA0zg");
	this.shape_3.setTransform(3777.2,-169.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ArsaaMAAAg0zIXRAAIAALQIrKAAIAAJAIJDAAIAALUIpDAAIAAJ/ILSAAIAALQg");
	this.shape_4.setTransform(3555.1,-169.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AoIaaMgIVg0zIM0AAMADtAlKMADmglKIM0AAMgIVA0zg");
	this.shape_5.setTransform(3353.975,-169.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AADbMQm8AAjljwQjkjyAAnCIAA5IQAAnTDrjsQDpjsGuAAIAIAAQG5AADiDzQDgDxAAHHIAAZIQAAHSjoDqQjmDomqAAgAhotfIAAbEQAACPBogBIADAAQBoABAAiPIAA7EQAAiRhrAAIgEAAQhkAAAACRg");
	this.shape_6.setTransform(3137.7,-170.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKaaMgDWgheMAAAAheIsHAAMAAAg0zIP9AAMADNAgrMAAAggrIMFAAMAAAA0zg");
	this.shape_7.setTransform(2922.825,-169.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AtIYrIDKq4QFKCBCMgBQESAAAAjTIAAgXQAAhfhDhoQhFhoiminIiSiOQjvjrhnjMQhpjJAAk9IAAgIQAAm6Dij5QDgj4GRAAQFFAAGDCbIjIKLQj2hLh0AAQkKAAABDYIAAALQgBAfALAdQAKAcAOAbQAOAYAeAlQAgAmAUAXIBIBLIBLBSQBoBvA3A0QD0D0BsDGQBpDFAAFWIAAAFQAAHJjvEEQjxEFmOAAQmQAAmSihg");
	this.shape_8.setTransform(2668,-170.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AmDaaMAAAg0zIMHAAMAAAA0zg");
	this.shape_9.setTransform(2528.475,-169.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABqaaIAA01IjTAAIAAU1IsHAAMAAAg0zIMHAAIAAT8IDTAAIAAz8IMHAAMAAAA0zg");
	this.shape_10.setTransform(2376.575,-169.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AmCaaMAAAgo4IncAAIAAr7Ia9AAIAAL7InaAAMAAAAo4g");
	this.shape_11.setTransform(2191.775,-169.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AtHYrIDJq4QFKCBCMgBQESAAAAjTIAAgXQAAhfhDhoQhEhoininIiSiOQjvjrhnjMQhpjJAAk9IAAgIQABm6Dhj5QDhj4GQAAQFFAAGDCbIjIKLQj2hLh0AAQkKAAABDYIAAALQgBAfAKAdQALAcAOAbQAOAYAeAlQAgAmAVAXIBHBLIBLBSQBoBvA3A0QD0D0BsDGQBpDFAAFWIAAAFQAAHJjvEEQjxEFmNAAQmSAAmQihg");
	this.shape_12.setTransform(1961.05,-170.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ArsaaMAAAg0zIXRAAIAALQIrKAAIAAJAIJDAAIAALUIpDAAIAAJ/ILSAAIAALQg");
	this.shape_13.setTransform(1794,-169.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AtuaaIAAqnIOp+zIs9AAIAArZIZxAAIAAKoIu5ezIO1AAIAALYg");
	this.shape_14.setTransform(1610.475,-169.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AmDaaMAAAg0zIMHAAMAAAA0zg");
	this.shape_15.setTransform(1462.775,-169.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACLaaIkN0IIg3AAIAAUIIsIAAMAAAg0zIM/AAQIYAADUDwQDRDwAAHKIAADyQAAHvj6DZIGBXPgAi5jeIAmAAQBkAAApgvQAqgsAAhwIAAlGQAAhwgqgvQgpgshkAAIgmAAg");
	this.shape_16.setTransform(1302.975,-169.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("At5aaMAAAg0zIM2AAQIYAADTDwQDTDwAAHKIAAEbQAAIAj5DHQj4DKnNAAIgvAAIAATdgAhyi1IAeAAQBkAAAogtQArgvAAhwIAAluQAAhwgrgvQgogshkAAIgeAAg");
	this.shape_17.setTransform(1092.9,-169.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ArsaaMAAAg0zIXRAAIAALQIrLAAIAAJAIJFAAIAALUIpFAAIAAJ/ILTAAIAALQg");
	this.shape_18.setTransform(858.3,-169.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AsWaaMAAAg0zIMIAAMAAAAo4IMlAAIAAL7g");
	this.shape_19.setTransform(675.425,-169.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AuIaaMAAAg0zINTAAQGoAAD5DLQD4DOAAGlIAABUQAAEGhTCfQhUChi/BTQGLCOAAItIAADOQAAGxjvDmQjwDomZAAgAiAO+IAvAAQBeAAAjgtQAkgrAAhiIAAlLQAAhmgigtQghgvhiAAIgvAAgAiAl4IA7AAQBeAAAlgrQAjgtAAhgIAAjLQAAhkghgvQgigshjAAIg7AAg");
	this.shape_20.setTransform(483.075,-169.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AmDaaMAAAg0zIMHAAMAAAA0zg");
	this.shape_21.setTransform(328.775,-169.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("At+aaMAAAg0zIM/AAQGgAAEPEPQEPEOgBHIIAAVVQABHMkPEWQkPEXmcAAgAh2O+IAfAAQByAAAhgzQAigzAAiRIAA2yQAAiCgqgnQgpgmhiAAIgfAAg");
	this.shape_22.setTransform(175.7,-169.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ArsaaMAAAg0zIXRAAIAALQIrLAAIAAJAIJFAAIAALUIpFAAIAAJ/ILTAAIAALQg");
	this.shape_23.setTransform(-5.05,-169.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ACLaaIkN0IIg3AAIAAUIIsIAAMAAAg0zIM/AAQIYAADUDwQDRDwAAHKIAADyQAAHvj6DZIGBXPgAi5jeIAmAAQBkAAApgvQAqgsAAhwIAAlGQAAhwgqgvQgpgshkAAIgmAAg");
	this.shape_24.setTransform(-201.025,-169.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AB0bPQnfAAj2kCQj3kDAAn5IAA2hQAAn5D3kDQD2kCHfAAIAEAAQFvAAEzCKIkXJxQh4gliTAAIgEAAQkyAAAAFzIAAULQAACvBfBiQBfBiCfAAIAEAAQCJAACahAIETJvQlSCnmPAAg");
	this.shape_25.setTransform(-391.225,-170.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKaaMgDWgheMAAAAheIsHAAMAAAg0zIP9AAMADNAgrMAAAggrIMFAAMAAAA0zg");
	this.shape_26.setTransform(-601.925,-169.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AmDaaMAAAg0zIMHAAMAAAA0zg");
	this.shape_27.setTransform(-765.775,-169.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKaaMgDWgheMAAAAheIsHAAMAAAg0zIP9AAMADNAgrMAAAggrIMFAAMAAAA0zg");
	this.shape_28.setTransform(-983.775,-169.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AmDaaMAAAg0zIMHAAMAAAA0zg");
	this.shape_29.setTransform(-1147.625,-169.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ACTaaIiT/wIiSfwIvnAAMgD6g0zIM0AAMAAnAokMADggokIJxAAMADgAokMAAngokIM0AAMgD6A0zg");
	this.shape_30.setTransform(-1346.75,-169.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.big_win_mc, new cjs.Rectangle(-2010.4,-428.5,7033.700000000001,613.5), null);


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
	this.instance = new lib._970x90();
	this.instance.setTransform(-485,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_mc, new cjs.Rectangle(-485,-45,970,90), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKaaMgDWgheMAAAAheIsHAAMAAAg0zIP9AAMADNAgrMAAAggrIMFAAMAAAA0zg");
	this.shape.setTransform(3086.025,-169.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmDaaMAAAg0zIMHAAMAAAA0zg");
	this.shape_1.setTransform(2922.175,-169.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACSaaIiS/wIiSfwIvnAAMgD6g0zIM0AAMAAnAokMADggokIJxAAMADgAokMAAngokIM0AAMgD6A0zg");
	this.shape_2.setTransform(2723.05,-169.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AADbMQm8AAjljwQjjjygBnCIAA5IQAAnTDqjsQDrjsGtAAIAHAAQG6AADiDzQDfDxABHHIAAZIQgBHSjoDqQjmDompAAgAhotfIAAbEQAACPBogBIADAAQBoABAAiPIAA7EQAAiRhrAAIgEAAQhkAAAACRg");
	this.shape_3.setTransform(2418.45,-170.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmCaaMAAAgo4IncAAIAAr7Ia9AAIAAL7InaAAMAAAAo4g");
	this.shape_4.setTransform(2227.875,-169.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AtIYrIDKq4QFKCBCNgBQERAAAAjTIAAgXQAAhfhDhoQhFhoiminIiTiOQjujrhojMQhnjJAAk9IAAgIQgBm6Djj5QDfj4GQAAQFGAAGCCbIjHKLQj2hLh0AAQkKAAAADYIAAALQAAAfALAdQAJAcAPAbQAOAYAdAlQAhAmAUAXIBIBLIBLBSQBoBvA3A0QD0D0BsDGQBpDFABFWIAAAFQAAHJjxEEQjwEFmOAAQmQAAmSihg");
	this.shape_5.setTransform(1997.1,-170.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ArsaaMAAAg0zIXRAAIAALQIrKAAIAAJAIJDAAIAALUIpDAAIAAJ/ILSAAIAALQg");
	this.shape_6.setTransform(1830.1,-169.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AB0bPQnfAAj2kCQj3kDAAn5IAA2hQAAn5D3kDQD2kCHfAAIAEAAQFvAAEzCKIkXJxQh4gliTAAIgEAAQkyAAAAFzIAAULQAACvBfBiQBfBiCfAAIAEAAQCJAACahAIETJvQlSCnmPAAg");
	this.shape_7.setTransform(1661.175,-170.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKaaMgDWgheMAAAAheIsHAAMAAAg0zIP9AAMADNAgrMAAAggrIMFAAMAAAA0zg");
	this.shape_8.setTransform(1450.425,-169.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AD5aaIg9qTIl3AAIg9KTIr3AAMAG9g0zIRlAAMAG9A0zgAgQpUIhgOKIDhAAIhguKIgQkZg");
	this.shape_9.setTransform(1228.875,-169.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABqaaIAA01IjTAAIAAU1IsHAAMAAAg0zIMHAAIAAT8IDTAAIAAz8IMHAAMAAAA0zg");
	this.shape_10.setTransform(1018.975,-169.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AB0bPQnfAAj2kCQj3kDAAn5IAA2hQAAn5D3kDQD2kCHfAAIAEAAQFvAAEzCKIkXJxQh4gliTAAIgEAAQkyAAAAFzIAAULQAACvBfBiQBfBiCfAAIAEAAQCJAACahAIETJvQlSCnmPAAg");
	this.shape_11.setTransform(840.875,-170.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ArsaaMAAAg0zIXRAAIAALQIrKAAIAAJAIJDAAIAALUIpDAAIAAJ/ILSAAIAALQg");
	this.shape_12.setTransform(609.7,-169.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ACLaaIkN0IIg3AAIAAUIIsIAAMAAAg0zIM/AAQIYAADUDwQDRDwAAHKIAADyQAAHvj6DZIGBXPgAi5jeIAmAAQBkAAApgvQAqgsAAhwIAAlGQAAhwgqgvQgpgshkAAIgmAAg");
	this.shape_13.setTransform(413.775,-169.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AADbMQm8AAjljwQjkjyABnCIAA5IQAAnTDqjsQDpjsGuAAIAIAAQG5AADiDzQDgDxAAHHIAAZIQAAHSjoDqQjnDompAAgAhotfIAAbEQAACPBogBIADAAQBoABAAiPIAA7EQAAiRhrAAIgEAAQhkAAAACRg");
	this.shape_14.setTransform(202.7,-170.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AIoaaMAAAgnkIgiGCMgDkAhiIpHAAMgDmghiIghmCMAAAAnkIruAAMAAAg0zISYAAIBwZCIAQD/IAVj/IB55CISPAAMAAAA0zg");
	this.shape_15.setTransform(-42.7,-169.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.b2g2_mc, new cjs.Rectangle(-2010.4,-428.5,7033.700000000001,613.5), null);


(lib.b2g_lockup_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-42.5,-50,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.b2g_lockup_mc, new cjs.Rectangle(-42.5,-50,85,100), null);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(559.15,-6.35,0.0203,0.0203,0,0,0,493.5,458.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAwIgBgWQALAEAHAAQAGAAACgCQACgBABgHIgDAAQgLAAgGgGQgFgFADgMIAJguIAVAAIgJAtQAAAEADAAIACAAIAKgxIAWAAIgPBHQgDAPgIAGQgHAHgOAAQgIAAgJgCg");
	this.shape.setTransform(543.7,-3.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAyIAVhjIAWAAIgWBjg");
	this.shape_1.setTransform(539.45,-6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAwIAUhiIAVAAIgFAZIADAAQANAAAFAHQAEAGgDAOIgFAWQgDAOgHAGQgHAHgNAAQgKAAgNgDgAgEAeIACAAQAAAAABAAQABAAAAAAQAAAAAAAAQAAgBABAAIACgFIAEgWQABgEgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_2.setTransform(534.5143,-6.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTA0IAPhHIAVAAIgPBHgAABggQgBgDAAgFQABgGAEgCQADgDAFgBQAEABADADQABACgBAGQgBAFgDADQgEADgEAAQgFAAgCgDg");
	this.shape_3.setTransform(530.295,-6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAkIAGgVQAKADAHAAQAGAAABgDQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgCgCIgCgBIgCgBQgPgHAEgQQACgJAHgHQAHgGALAAQAJgBAJAEIgGAUQgIgDgGAAQgGAAAAADQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIAEADIAEACQAHAEADADQADAFgBAJQgDALgIAHQgIAHgNAAQgJAAgKgDg");
	this.shape_4.setTransform(525.775,-4.9531);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAmIAKgyQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBAAgBAAIgCAAIgLA2IgWAAIAPhGQAPgFALAAQAYAAgFAXIgLA0g");
	this.shape_5.setTransform(520.1931,-5.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaALIAEgVQAGgbAYAAQAZAAgGAbIgFAVQgGAcgXgBQgZABAGgcgAAAgKIgEAWQgCAGADAAQADAAABgGIAEgWQACgHgDAAQgDAAgBAHg");
	this.shape_6.setTransform(514.5509,-5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggA0IAVhlIAYgCQANAAAFAHQAEAHgDAOIgFAWQgDANgHAHQgHAGgNAAIgCAAIgFAbgAgBAFIABAAQAAAAABAAQABAAAAgBQABAAAAAAQAAAAABgBIACgEIAEgWQABgEgBgBQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgBAAg");
	this.shape_7.setTransform(508.3643,-3.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAkIAGgVQAKADAHAAQAGAAABgDQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAIgCgCIgCgBIgCgBQgPgHAEgQQACgJAHgHQAHgGALAAQAJgBAJAEIgGAUQgIgDgGAAQgGAAAAADQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIAEADIAEACQAHAEADADQADAFgBAJQgDALgIAHQgIAHgNAAQgJAAgKgDg");
	this.shape_8.setTransform(503.125,-4.9531);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAfQgGgGAEgPIAEgUQADgOAIgHQAHgGAMAAQAMAAAEAGQAEAHgDAOIgDARIgaAAIgBADQgBAIAJAAIALgBIgCAUIgQABQgOABgGgIgAABgNIgBAGIAFAAIABgGIABgEQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgDAAgBAFg");
	this.shape_9.setTransform(497.9748,-5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAyIAAgmIgBAAIgIAmIgYAAIAVhjIAYAAQAQgBAFAIQAFAHgDANIgCAIQgDAOgIAGIACAsgAABgFIABAAQAAAAABgBQABAAAAAAQABAAAAAAQAAgBABAAQACgCAAgDIACgKQAAAAAAgBQABgBAAAAQgBgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAgBgBAAIgBAAg");
	this.shape_10.setTransform(491.735,-6.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeAwIgCgWQALAEAHAAQAGAAACgCQACgBACgHIgFAAQgKAAgGgGQgFgFACgMIAKguIAVAAIgIAtQgBAEADAAIACAAIAKgxIAWAAIgPBHQgDAPgIAGQgHAHgNAAQgJAAgIgCg");
	this.shape_11.setTransform(484,-3.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAhQgFgGADgLIAAgBQACgLAHgFQAIgGALAAIAEABIAAgDQABgFgCgBQgBgCgFAAQgGAAgKAEIAKgWIAHgCIAIAAQAOAAAFAGQAFAGgDANIgKAvQgSADgIAAQgMAAgFgFgAgCAIIgDAEIAAACQAAABAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAIACAAIACgNIgCAAIgCABg");
	this.shape_12.setTransform(478.0646,-4.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAyIAUhjIAVAAIgVBjg");
	this.shape_13.setTransform(473.9,-6.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiAyIAVhjIAYAAQAQgBAFAIQAFAHgDANIgCAJQgDAPgJAFQgIAHgNgBIgBAAIgIAlgAAAgEIABAAQABAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQACgBAAgEIACgLQAAAAABgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgBgBAAIgBAAg");
	this.shape_14.setTransform(469.0313,-6.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWAsIAAhXIAVAAQAKAAAHAHQAHAHAAAMIAAAjQAAAMgHAHQgHAHgKAAgAgCAZIABAAQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAAAIAAgFIAAgmQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAIgCgBIgBAAg");
	this.shape_15.setTransform(-321.425,-5.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAsIAAhXIAnAAIAAATIgTAAIAAAPIAPAAIAAASIgPAAIAAAQIATAAIAAATg");
	this.shape_16.setTransform(-326.15,-5.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAGAsIgBgRIgJAAIgBARIgVAAIANhXIAcAAIALBXgAAAgPIgCAXIAFAAIgDgXIAAgHg");
	this.shape_17.setTransform(-331.3,-5.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAsIgFg3IAAA3IgUAAIAAhXIAaAAIAFA1IAAg1IAUAAIAABXg");
	this.shape_18.setTransform(-338.55,-5.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAsIAAhXIATAAIAABXg");
	this.shape_19.setTransform(-342.85,-5.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVApIAGgSQAIAEAEgBQAGABAAgGIAAAAQAAgDgCgDIgFgHIgEgDQgGgGgDgFQgCgGgBgIQAAgMAHgGQAFgHAKAAQAIAAALAFIgGARIgKgDQgGAAAAAGIAAAAIABACIAAABIAAACIACACIACABIACADIAEAEQAGAGAEAEQACAGAAAJQAAAMgGAHQgGAGgKAAQgLAAgKgEg");
	this.shape_20.setTransform(-347.95,-5.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSAsIAAhXIAlAAIAAATIgTAAIAAAPIAQAAIAAASIgQAAIAAAQIATAAIAAATg");
	this.shape_21.setTransform(-352.3,-5.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWAsIAAgSIAYgyIgVAAIAAgTIAqAAIAAARIgYAzIAYAAIAAATg");
	this.shape_22.setTransform(-357.125,-5.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAsIAAhXIATAAIAABXg");
	this.shape_23.setTransform(-361,-5.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAEAsIgGgiIgCAAIAAAiIgUAAIAAhXIAWAAQAMAAAGAGQAGAGAAAMIAAAHQAAAMgHAFIAKAngAgEgFIABAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAIABgEIAAgJIgBgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_24.setTransform(-365.15,-5.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWAsIAAhXIAVAAQANAAAGAGQAFAGAAAMIAAAIQAAAMgGAFQgHAGgLAAIgBAAIAAAggAgCgEIABAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAIABgEIAAgKIgBgEQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_25.setTransform(-370.675,-5.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIA4IAAhvIARAAIAABvg");
	this.shape_26.setTransform(-379.25,-3.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJAsIAAgZIgRg+IAVAAIAFAdIAGgdIAVAAIgRA+IAAAZg");
	this.shape_27.setTransform(-387.975,-5.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUAsIAAhXIAUAAIAABDIAVAAIAAAUg");
	this.shape_28.setTransform(-393.3,-5.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWAsIAAhXIAVAAQANAAAGAGQAFAGAAAMIAAAIQAAAMgGAFQgHAGgLAAIgBAAIAAAggAgCgEIABAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAIABgEIAAgKIgBgEQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_29.setTransform(-398.375,-5.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWAsIAAhXIAVAAQANAAAGAGQAFAGAAAMIAAAIQAAAMgGAFQgHAGgLAAIgBAAIAAAggAgCgEIABAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAIABgEIAAgKIgBgEQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_30.setTransform(-403.675,-5.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAGAsIgBgRIgJAAIgBARIgVAAIANhXIAcAAIALBXgAAAgPIgCAXIAFAAIgDgXIAAgHg");
	this.shape_31.setTransform(-409.25,-5.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgVApIAFgSQAJAEADgBQAHABAAgGIAAAAQAAgDgCgDIgFgHIgEgDQgGgGgDgFQgCgGAAgIQAAgMAFgGQAGgHAJAAQAJAAAKAFIgFARIgJgDQgHAAABAGIAAAAIAAACIAAABIAAACIACACIACABIACADIAEAEQAGAGADAEQADAGAAAJQAAAMgGAHQgGAGgKAAQgKAAgLgEg");
	this.shape_32.setTransform(-415.85,-5.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFATIgDglIASAAIgEAlg");
	this.shape_33.setTransform(-419.55,-7.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPAnQgGgHAAgNIAAglQAAgNAGgHQAGgHAMAAQAKAAAIAEIgIARIgHgCQgHAAAAAKIAAAhQAAAEACADQACACAEAAIABAAIAHgBIAHAQQgIAEgLAAQgMABgGgHg");
	this.shape_34.setTransform(-423.075,-5.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgYAoQgGgGAAgMIAAgKQAAgHADgDQADgEAEAAQgEgIAAgGIAAgGQAAgNAEgEQAFgFALgBQAJABAEAFQADAEAAANIAAAFQAAAOgMADIAIALQgBgFAAgGIAQAAIAAAFIAAAFIAAAEIAAADIgBAEIgBADIgCADIAMARIgVAAIgCgDQgGAFgGgBQgNABgHgGgAgLAOIAAAGQAAAEACACQACACAEABIADgBIgLgQgAgGgaIAAABIAAACIAAAKIAAADQAEgBAAgFIAAgHIAAgDIgCgBIgCABg");
	this.shape_35.setTransform(-429.075,-5.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJAsIAAhDIgNAAIAAgUIAtAAIAAAUIgNAAIAABDg");
	this.shape_36.setTransform(-434.875,-5.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIA4IAAhvIARAAIAABvg");
	this.shape_37.setTransform(-443.1,-3.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgEAtIAAhCIgKADIAAgTIAdgHIAABZg");
	this.shape_38.setTransform(-451.1,-5.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgQAnQgGgGAAgMIAAgGQAAgKAFgFQgDgGAAgIIAAgGQAAgMAFgGQAHgHAIAAQAJAAAHAHQAFAHAAALIAAAGQAAAIgDAGQAFAFAAAKIAAAGQAAAMgGAGQgHAHgKgBQgJABgHgHgAgBALIAAANQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgNQAAgBAAgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAABgAgBgXIAAAPIAAADIABAAIABAAIABgDIAAgPQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAABg");
	this.shape_39.setTransform(-455.45,-5.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgVAtIAAgSQAZgbgBgPIAAgBQABgFgDgCQgCgCgDAAIgLACIgHgQQAJgFANAAQALAAAGAIQAGAHAAAMIAAABQAAAFgCAHQgCAFgEAGIgGAKIgIAJIATAAIAAATg");
	this.shape_40.setTransform(-460.6,-5.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgVApIAFgSQAJAEADgBQAHABAAgGIAAAAQAAgDgCgDIgFgHIgEgDQgGgGgDgFQgCgGAAgIQAAgMAFgGQAGgHAJAAQAJAAAKAFIgFARIgKgDQgFAAAAAGIAAAAIAAACIAAABIABACIABACIACABIACADIAEAEQAHAGACAEQADAGAAAJQAAAMgGAHQgGAGgKAAQgLAAgKgEg");
	this.shape_41.setTransform(-466.8,-5.05);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgSAsIAAhXIAlAAIAAATIgTAAIAAAPIAQAAIAAASIgQAAIAAAQIATAAIAAATg");
	this.shape_42.setTransform(-471.2,-5.025);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgJAsIAAhXIATAAIAABXg");
	this.shape_43.setTransform(-474.85,-5.025);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAEAsIgGgiIgCAAIAAAiIgUAAIAAhXIAWAAQAMAAAGAGQAGAGAAAMIAAAHQAAAMgHAFIAKAngAgEgFIABAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAIABgEIAAgJIgBgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_44.setTransform(-479,-5.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgTAsIAAhXIAmAAIAAATIgTAAIAAAPIAQAAIAAASIgQAAIAAAQIATAAIAAATg");
	this.shape_45.setTransform(-483.95,-5.025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgVApIAFgSQAJAEAEgBQAGABAAgGIAAAAQAAgDgCgDIgFgHIgEgDQgGgGgDgFQgDgGABgIQgBgMAHgGQAFgHAJAAQAJAAAKAFIgFARIgJgDQgHAAAAAGIAAAAIABACIAAABIAAACIACACIACABIACADIAEAEQAGAGADAEQADAGAAAJQAAAMgGAHQgHAGgJAAQgKAAgLgEg");
	this.shape_46.setTransform(-488.55,-5.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-491.2,-15.6,1060.2,20.1);


// stage content:
(lib.bigticketconversionhtml5970x90 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(452.4,85.9,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(423));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(484.95,25.9,0.0767,0.0767,0,0,0,0,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(328).to({alpha:0},16).wait(79));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(484.95,58.25,0.0538,0.0538,0,0,0,0,1.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(344).to({_off:false},0).wait(1).to({regX:7376.7,regY:-239.3,x:882.05,y:45.2,alpha:0.0032},0).wait(1).to({alpha:0.0145},0).wait(1).to({y:45.1,alpha:0.0371},0).wait(1).to({y:44.95,alpha:0.077},0).wait(1).to({y:44.75,alpha:0.1467},0).wait(1).to({y:44.35,alpha:0.2672},0).wait(1).to({y:43.85,alpha:0.4164},0).wait(1).to({y:43.35,alpha:0.5648},0).wait(1).to({y:42.9,alpha:0.6887},0).wait(1).to({y:42.6,alpha:0.7859},0).wait(1).to({y:42.35,alpha:0.8625},0).wait(1).to({y:42.15,alpha:0.9229},0).wait(1).to({y:42,alpha:0.9628},0).wait(1).to({y:41.9,alpha:0.9857},0).wait(1).to({alpha:0.9969},0).wait(1).to({regX:0,regY:1,x:484.95,y:54.9,alpha:1},0).wait(63));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(363,42.7,0.0748,0.0748,0,0,0,0,0.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(328).to({_off:false},0).wait(1).to({regX:-2454.6,regY:25.5,x:179.8,y:44.55,alpha:0.0032},0).wait(1).to({x:181.2,alpha:0.0145},0).wait(1).to({x:183.95,alpha:0.0371},0).wait(1).to({x:188.8,alpha:0.077},0).wait(1).to({x:197.3,y:44.6,alpha:0.1467},0).wait(1).to({x:212,y:44.65,alpha:0.2672},0).wait(1).to({x:230.2,y:44.7,alpha:0.4164},0).wait(1).to({x:248.3,y:44.75,alpha:0.5648},0).wait(1).to({x:263.4,y:44.8,alpha:0.6887},0).wait(1).to({x:275.25,y:44.85,alpha:0.7859},0).wait(1).to({x:284.6,alpha:0.8625},0).wait(1).to({x:292,y:44.9,alpha:0.9229},0).wait(1).to({x:296.85,alpha:0.9628},0).wait(1).to({x:299.65,alpha:0.9857},0).wait(1).to({x:301,y:44.95,alpha:0.9969},0).wait(1).to({regX:0,regY:0,x:484.95,y:43.1,alpha:1},0).wait(79));

	// second_prize_mc
	this.instance_4 = new lib.second_prize_mc();
	this.instance_4.setTransform(240.05,56.15,0.3813,0.3813);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(213).to({_off:false},0).wait(1).to({regX:198.9,regY:-6.8,x:315.7,y:53.5,alpha:0.0037},0).wait(1).to({x:315.1,y:53.4,alpha:0.0167},0).wait(1).to({x:313.9,y:53.15,alpha:0.0435},0).wait(1).to({x:311.75,y:52.75,alpha:0.0919},0).wait(1).to({x:307.7,y:51.95,alpha:0.1816},0).wait(1).to({x:301.25,y:50.7,alpha:0.3248},0).wait(1).to({x:293.95,y:49.3,alpha:0.4878},0).wait(1).to({x:287.3,y:48,alpha:0.6345},0).wait(1).to({x:282.15,y:47,alpha:0.7499},0).wait(1).to({x:278.15,y:46.25,alpha:0.8388},0).wait(1).to({x:275,y:45.6,alpha:0.9088},0).wait(1).to({x:272.85,y:45.2,alpha:0.9564},0).wait(1).to({x:271.6,y:44.95,alpha:0.9834},0).wait(1).to({x:271.05,y:44.85,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:195.05,y:47.45,alpha:1},0).wait(100).to({x:240.05,y:47.75},0).wait(1).to({regX:198.9,regY:-6.8,scaleX:0.381,scaleY:0.381,x:317.25,y:45.15},0).wait(1).to({scaleX:0.3801,scaleY:0.3801,x:322.15},0).wait(1).to({scaleX:0.3781,scaleY:0.3781,x:332.2,y:45.2},0).wait(1).to({scaleX:0.3746,scaleY:0.3746,x:350.45,y:45.25},0).wait(1).to({scaleX:0.3681,scaleY:0.3681,x:384.2,y:45.35},0).wait(1).to({scaleX:0.3576,scaleY:0.3576,x:438.1,y:45.5},0).wait(1).to({scaleX:0.3457,scaleY:0.3457,x:499.45,y:45.75},0).wait(1).to({scaleX:0.335,scaleY:0.335,x:554.7,y:45.9},0).wait(1).to({scaleX:0.3266,scaleY:0.3266,x:598.15,y:46.1},0).wait(1).to({scaleX:0.3201,scaleY:0.3201,x:631.6,y:46.15},0).wait(1).to({scaleX:0.315,scaleY:0.315,x:657.95,y:46.25},0).wait(1).to({scaleX:0.3115,scaleY:0.3115,x:675.9,y:46.35},0).wait(1).to({scaleX:0.3095,scaleY:0.3095,x:686.05},0).wait(1).to({scaleX:0.3086,scaleY:0.3086,x:690.95},0).wait(1).to({regX:0,regY:0,scaleX:0.3083,scaleY:0.3083,x:631,y:48.5},0).wait(80));

	// su_sub_caption
	this.instance_5 = new lib.daily_sub_caption_mc();
	this.instance_5.setTransform(484.75,62.4,0.0937,0.0937,0,0,0,1.1,0.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(213).to({_off:false},0).wait(1).to({regX:1537.3,regY:-198.3,x:628.7,y:43.7,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({alpha:0.0435},0).wait(1).to({alpha:0.0919},0).wait(1).to({alpha:0.1816},0).wait(1).to({y:43.65,alpha:0.3248},0).wait(1).to({alpha:0.4878},0).wait(1).to({y:43.6,alpha:0.6345},0).wait(1).to({alpha:0.7499},0).wait(1).to({y:43.55,alpha:0.8388},0).wait(1).to({alpha:0.9088},0).wait(1).to({alpha:0.9564},0).wait(1).to({alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:1.1,regY:0.6,x:484.75,y:62.2,alpha:1},0).wait(101).to({regX:1537.3,regY:-198.3,x:628.7,y:43.55,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:0.9081},0).wait(1).to({alpha:0.8184},0).wait(1).to({y:43.6,alpha:0.6752},0).wait(1).to({alpha:0.5122},0).wait(1).to({y:43.65,alpha:0.3655},0).wait(1).to({alpha:0.2501},0).wait(1).to({y:43.7,alpha:0.1612},0).wait(1).to({alpha:0.0912},0).wait(1).to({alpha:0.0436},0).wait(1).to({alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:1.1,regY:0.6,x:484.75,y:62.4,alpha:0},0).wait(80));

	// b2g2_lockup
	this.instance_6 = new lib.b2g_lockup_mc();
	this.instance_6.setTransform(259.45,46.75);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).to({alpha:1},15).wait(101).to({y:46.6762,alpha:0.9963},0).wait(1).to({y:46.4152,alpha:0.9833},0).wait(1).to({y:45.8808,alpha:0.9565},0).wait(1).to({y:44.9128,alpha:0.9081},0).wait(1).to({y:43.1187,alpha:0.8184},0).wait(1).to({y:40.2541,alpha:0.6752},0).wait(1).to({y:36.9945,alpha:0.5122},0).wait(1).to({y:34.0609,alpha:0.3655},0).wait(1).to({y:31.7518,alpha:0.2501},0).wait(1).to({y:29.9741,alpha:0.1612},0).wait(1).to({y:28.5747,alpha:0.0912},0).wait(1).to({y:27.6221,alpha:0.0436},0).wait(1).to({y:27.0813,alpha:0.0166},0).wait(1).to({y:26.822,alpha:0.0036},0).wait(1).to({y:26.75,alpha:0},0).wait(195));

	// b2g2
	this.instance_7 = new lib.b2g2_mc();
	this.instance_7.setTransform(626,51.45,0.0937,0.0937,0,0,0,1506.4,-121.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(98).to({_off:false},0).to({alpha:1},15).wait(100).to({alpha:0},15).to({_off:true},1).wait(194));

	// main_sub_caption_copy
	this.instance_8 = new lib.big_win_mc();
	this.instance_8.setTransform(484.75,62.4,0.0937,0.0937,0,0,0,1.1,0.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.sub_caption_mc();
	this.instance_9.setTransform(484.75,62.4,0.0937,0.0937,0,0,0,1.1,0.6);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},15).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},68).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},84).wait(226));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({_off:false},0).wait(1).to({regX:1504.4,regY:-170.3,x:625.65,y:46.4,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({alpha:0.0435},0).wait(1).to({y:46.5,alpha:0.0919},0).wait(1).to({y:46.55,alpha:0.1816},0).wait(1).to({y:46.75,alpha:0.3248},0).wait(1).to({y:46.9,alpha:0.4878},0).wait(1).to({y:47.05,alpha:0.6345},0).wait(1).to({y:47.2,alpha:0.7499},0).wait(1).to({y:47.3,alpha:0.8388},0).wait(1).to({y:47.35,alpha:0.9088},0).wait(1).to({y:47.45,alpha:0.9564},0).wait(1).to({alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:1.1,regY:0.6,x:484.75,y:63.5,alpha:1},0).wait(69).to({regX:1504.4,regY:-170.3,x:625.65,y:47.45,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({alpha:0.9565},0).wait(1).to({y:47.35,alpha:0.9081},0).wait(1).to({y:47.3,alpha:0.8184},0).wait(1).to({y:47.1,alpha:0.6752},0).wait(1).to({y:46.95,alpha:0.5122},0).wait(1).to({y:46.8,alpha:0.3655},0).wait(1).to({y:46.65,alpha:0.2501},0).wait(1).to({y:46.55,alpha:0.1612},0).wait(1).to({y:46.5,alpha:0.0912},0).wait(1).to({y:46.4,alpha:0.0436},0).wait(1).to({alpha:0.0166},0).wait(1).to({alpha:0.0036},0).to({_off:true},1).wait(310));

	// promo
	this.instance_10 = new lib.promo_mc();
	this.instance_10.setTransform(511.25,43.5,0.078,0.078,0,0,0,1.3,0.7);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:-3137.8,regY:16.7,x:266.15,y:44.75,alpha:0.0037},0).wait(1).to({x:265.8,alpha:0.0167},0).wait(1).to({x:265.1,alpha:0.0435},0).wait(1).to({x:263.8,alpha:0.0919},0).wait(1).to({x:261.45,alpha:0.1816},0).wait(1).to({x:257.7,alpha:0.3248},0).wait(1).to({x:253.4,alpha:0.4878},0).wait(1).to({x:249.55,alpha:0.6345},0).wait(1).to({x:246.5,alpha:0.7499},0).wait(1).to({x:244.15,alpha:0.8388},0).wait(1).to({x:242.3,alpha:0.9088},0).wait(1).to({x:241.05,alpha:0.9564},0).wait(1).to({x:240.35,alpha:0.9834},0).wait(1).to({x:240,alpha:0.9964},0).wait(1).to({regX:0,regY:0.7,x:484.95,y:43.5,alpha:1},0).wait(83).to({alpha:0},15).wait(216).to({regX:-3137.8,regY:16.7,x:241.1,y:44.75,alpha:0.0037},0).wait(1).to({x:245,alpha:0.0167},0).wait(1).to({x:252.95,y:44.8,alpha:0.0435},0).wait(1).to({x:267.3,y:44.85,alpha:0.0919},0).wait(1).to({x:293.95,y:44.95,alpha:0.1816},0).wait(1).to({x:336.5,y:45.15,alpha:0.3248},0).wait(1).to({x:384.9,y:45.35,alpha:0.4878},0).wait(1).to({x:428.45,y:45.5,alpha:0.6345},0).wait(1).to({x:462.75,y:45.65,alpha:0.7499},0).wait(1).to({x:489.15,y:45.75,alpha:0.8388},0).wait(1).to({x:509.95,y:45.85,alpha:0.9088},0).wait(1).to({x:524.05,y:45.9,alpha:0.9564},0).wait(1).to({x:532.1,y:45.95,alpha:0.9834},0).wait(1).to({x:535.95,alpha:0.9964},0).wait(1).to({regX:0,regY:0.7,x:781.95,y:44.75,alpha:1},0).wait(80));

	// background
	this.instance_11 = new lib.background_mc();
	this.instance_11.setTransform(485.05,45.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(423));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(485.1,21.8,485,77.9);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 970,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_2ndprize.png", id:"_2ndprize"},
		{src:"images/_970x90.jpg", id:"_970x90"},
		{src:"images/b2g2.png", id:"b2g2"},
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