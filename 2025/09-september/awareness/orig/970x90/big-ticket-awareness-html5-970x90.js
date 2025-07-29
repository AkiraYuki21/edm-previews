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
p.nominalBounds = new cjs.Rectangle(0,0,251,247);


(lib._970x90 = function() {
	this.initialize(img._970x90);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,90);


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
	this.shape.graphics.f("#FFFFFF").s().p("ApMVUQjfjyAAmNIAA2lQAAmQDfjzQDfjyFuAAQFsAADgDyQDgDzAAGQIAAWlQAAGNjgDyQjgDylsAAQluAAjfjygAhPtDIAAaNQAAApATAYQATAXAWAAIAUAEQBRAAAAhcIAA6NQAAglgVgbQgSgYgXgEIgTgEQhQAAAABgg");
	this.shape.setTransform(3954.2,-190.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApMVUQjgjyAAmNIAA2lQAAmQDgjzQDfjyFuAAQFsAADgDyQDfDzAAGQIAAWlQAAGNjfDyQjgDylsAAQluAAjfjygAhPtDIAAaNQAAApATAYQATAXAXAAIATAEQBRAAAAhcIAA6NQAAglgVgbQgTgYgWgEIgTgEQhQAAAABgg");
	this.shape_1.setTransform(3768.75,-190.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ApMVUQjgjyABmNIAA2lQgBmQDgjzQDfjyFuAAQFsAADgDyQDgDzAAGQIAAWlQAAGNjgDyQjgDylsAAQluAAjfjygAhPtDIAAaNQAAApATAYQATAXAWAAIAUAEQBRAAAAhcIAA6NQAAglgVgbQgTgYgWgEIgTgEQhQAAAABgg");
	this.shape_2.setTransform(3583.25,-190.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ApdKOIGj0bIMYAAIpZUbg");
	this.shape_3.setTransform(3416.925,-34.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ApMVUQjgjyAAmNIAA2lQAAmQDgjzQDgjyFtAAQFtAADfDyQDgDzAAGQIAAWlQAAGNjgDyQjfDyltAAQltAAjgjygAhPtDIAAaNQAAApATAYQATAXAWAAIAUAEQBRAAAAhcIAA6NQAAglgVgbQgSgYgXgEIgTgEQhQAAAABgg");
	this.shape_4.setTransform(3275,-190.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AsUVqIECpAQC8CHDIAAQDHAAgBkSIAAkCQABlllhAAQiSAAjIBoIC17PISoAAIAAKWInSAAIgpGUQEQAUCSDWQCTDYAAGTIAAF6QAAGYjcDnQjbDnl2AAQmUAAlojGgAAEn4IgEAEQAPgEAPAAIgDgGQgMAGgLAAg");
	this.shape_5.setTransform(3084.25,-186.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("As5YYMAAAgwvIL/AAQGAAAD6D6QD6D6AAGkIAATsQAAGpj6EBQj6EBl8AAgAhtN0IAcAAQBqAAAegvQAggvAAiFIAA1CQAAh4gngkQgmgkhbAAIgcAAg");
	this.shape_6.setTransform(2845.775,-189.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AqyYYMAAAgwvIVeAAIAAKZIqTAAIAAIUIIXAAIAAKbIoXAAIAAJOIKaAAIAAKZg");
	this.shape_7.setTransform(2678.725,-189.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ADmYYIg4pgIlbAAIg4JgIq9AAMAGcgwvIQOAAMAGbAwvgAgPomIhYNFIDPAAIhYtFIgPkDg");
	this.shape_8.setTransform(2497.275,-189.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABwYYIhvxQIhwRQIscAAIGM4hIl/4OILuAAICRPtICTvtILtAAImBYOIGMYhg");
	this.shape_9.setTransform(2251.725,-189.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAbYYIAArTIumAAMAJoglcIQKAAIAAbsIClAAIAAJwIilAAIAALTgAiaDVIC1AAIAAxMg");
	this.shape_10.setTransform(2008.675,-189.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AkgRLQhzhaAAiwQAAifBzhhQB0hiCsAAQCtAAB0BiQBzBhAACfQAACwhzBaQh0BcitAAQisAAh0hcgAkgo4QhzhcAAixQAAieBzhhQB0hiCsAAQCtAAB0BiQBzBhAACeQAACxhzBcQh0BaitAAQisAAh0hag");
	this.shape_11.setTransform(1804.35,-148);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AsHWyIC6qDQEwB3CCAAQD9AAAAjEIAAgUQgBhZg9hfQhAhgiZiaIiHiEQjdjZhfi7Qhgi6AAklIAAgIQAAmYDQjlQDPjlFxAAQEtAAFlCPIi4JZQjjhGhrAAQj2AAAADIIAAALQAAAcAJAaQAKAbANAYQANAXAbAhQAeAkAUAVIBBBFIBGBLQBfBoAzAvQDhDiBkC2QBiC2AAE8IAAAEQAAGmjeDxQjdDwlwAAQlyAAlyiUg");
	this.shape_12.setTransform(1667.2,-190.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AqyYYMAAAgwvIVeAAIAAKZIqTAAIAAIUIIXAAIAAKbIoXAAIAAJOIKaAAIAAKZg");
	this.shape_13.setTransform(1512.825,-189.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AsrYYIAApzINi8cIr+AAIAAqgIXzAAIAAJzItwccINsAAIAAKgg");
	this.shape_14.setTransform(1343.35,-189.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AllYYMAAAgwvILLAAMAAAAwvg");
	this.shape_15.setTransform(1207.15,-189.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("ACBYYIj5ylIgzAAIAASlIrMAAMAAAgwvIL/AAQHvAADDDeQDCDdAAGnIAADgQAAHIjnDIIFjVdgAirjNIAkAAQBcAAAlgrQAngpAAhnIAAktQAAhngngsQglgphcAAIgkAAg");
	this.shape_16.setTransform(1059.775,-189.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("As1YYMAAAgwvIL3AAQHvAADDDeQDCDdAAGnIAAEFQAAHYjmC5QjkC6mqAAIgrAAIAAR9gAhpinIAcAAQBbAAAlgpQAogsAAhnIAAlSQAAhngogsQglgphbAAIgcAAg");
	this.shape_17.setTransform(865.8,-189.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE400").s().p("AgJYYIjF+5IAAe5IrMAAMAAAgwvIOuAAIC+eKIAA+KILJAAMAAAAwvg");
	this.shape_18.setTransform(618.175,-189.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE400").s().p("AADZGQmaAAjTjdQjSjggBmfIAA3NQAAmuDYjaQDZjaGMAAIAGAAQGYAADRDgQDODfABGjIAAXNQgBGujWDYQjUDWmIAAgAhgsdIAAY/QAACEBgAAIADAAQBgAAAAiEIAA4/QgBiGhiAAIgEAAQhcAAAACGg");
	this.shape_19.setTransform(419.95,-190.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE400").s().p("AllYYMAAAgwvILLAAMAAAAwvg");
	this.shape_20.setTransform(278.2,-189.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFE400").s().p("AlkYYMAAAglvIm3AAIAArAIY4AAIAALAIm3AAMAAAAlvg");
	this.shape_21.setTransform(149.3,-189.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFE400").s().p("ADmYYIg4pgIlbAAIg4JgIq9AAMAGcgwvIQOAAMAGbAwvgAgPomIhYNFIDPAAIhYtFIgPkDg");
	this.shape_22.setTransform(-33.125,-189.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFE400").s().p("ArZYYMAAAgwvILMAAMAAAAlvILnAAIAALAg");
	this.shape_23.setTransform(-222.275,-189.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFE400").s().p("AADZGQmaAAjTjdQjTjgAAmfIAA3NQAAmuDYjaQDYjaGNAAIAGAAQGYAADQDgQDQDfgBGjIAAXNQAAGujWDYQjUDWmJAAgAhgsdIAAY/QAACEBgAAIADAAQBfAAAAiEIAA4/QAAiGhiAAIgDAAQhdAAAACGg");
	this.shape_24.setTransform(-401.15,-190.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE400").s().p("AsHWyIC6qDQEwB3CCAAQD8AAAAjEIAAgUQAAhZg+hfQg+hgibiaIiHiEQjbjZhgi7Qhgi6AAklIAAgIQAAmYDRjlQDOjlFyAAQEsAAFlCPIi5JZQjihGhsAAQj1AAAADIIAAALQAAAcAKAaQAJAbANAYQAOAXAaAhQAeAkATAVIBCBFIBFBLQBhBoAyAvQDiDiBjC2QBiC2AAE8IAAAEQAAGmjeDxQjeDwlvAAQlyAAlyiUg");
	this.shape_25.setTransform(-576.9,-190.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFE400").s().p("AgJYYIjF+5IAAe5IrMAAMAAAgwvIOuAAIC+eKIAA+KILJAAMAAAAwvg");
	this.shape_26.setTransform(-762.225,-189.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFE400").s().p("AADZGQmbAAjSjdQjTjgABmfIAA3NQAAmuDYjaQDYjaGMAAIAHAAQGXAADQDgQDPDfAAGjIAAXNQABGujXDYQjUDWmJAAgAhgsdIAAY/QAACEBgAAIADAAQBgAAAAiEIAA4/QAAiGhjAAIgEAAQhcAAAACGg");
	this.shape_27.setTransform(-960.45,-190.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFE400").s().p("ABrZJQm6AAjjjuQjkjvAAnSIAA0yQAAnSDkjvQDjjvG6AAIAEAAQFSAAEcCAIkCJAQhughiIAAIgEAAQkbAAAAFWIAASoQABChBXBbQBZBaCSAAIADAAQB/AACOg7ID+I/Qk4CalwAAg");
	this.shape_28.setTransform(-1130.05,-189.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFE400").s().p("Al3RhIAAtSIn1AAIAAqgIH1AAIAArPILxAAIAALPIHzAAIAAKgInzAAIAANSg");
	this.shape_29.setTransform(-1369.875,-145.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-41,-121,232.1,228.4), null);


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
	this.instance.setTransform(-3677,-536,3.8791,3.8791);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-3677,-536,1078.4,1113.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Al+fDQich5ABjsQgBjRCciDQCYiCDmAAQDnAACaCCQCZCDAADRQAADsiZB5QiaB6jnAAQjmAAiYh6gAnbLHMAAAgsDIO6AAMAAAAsDg");
	this.shape.setTransform(3030.2,-179.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AsicmQkvkWAAogMAAAgwoIPOAAMAAAAxBQAACwCEAAQCAAAAAiwMAAAgxBIPRAAMAAAAwoQAAH9kZEnQkYElobAAQn5AAkvkTg");
	this.shape_1.setTransform(2800.275,-179.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EAAEAheQokAAkYkoQkZkqAAoqIAA+8QAAo+EgkiQEgkjIRABIAJAAQIfAAEWEqQEUEpAAIvIAAe8QAAI+keEgQkbEeoLAAgAiAwoMAAAAhWQAACvCAAAIAEAAQB/AAAAivMAAAghWQAAixiDAAIgFAAQh7AAAACxg");
	this.shape_2.setTransform(2543.175,-183.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgHbAggIAAybMgMcgukIPbAAIEhVuIEb1uIPYAAMgMaAukIAASbg");
	this.shape_3.setTransform(2284.9,-182.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgOZAggMAAAhA/IcpAAIAAN3ItwAAIAALEILKAAIAAN7IrKAAIAAMTIN6AAIAAN2g");
	this.shape_4.setTransform(1988.725,-182.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgRYAggMAAAhA/IQXAAQIKAAEyD6QExD9AAIHIAABnQAAFDhnDDQhmDGjsBnQHmCuAAKuIAAD9QAAIWklEbQknEdn4AAgAieSbIA5AAQB1AAArg4QAtg0AAh4IAAmZQAAh9grg3Qgog6h6AAIg5AAgAienQIBIAAQB1AAAtg0QArg3AAh2IAAj6QAAh7gog6Qgrg3h6AAIhIAAg");
	this.shape_5.setTransform(1757.025,-182.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EgRMAggMAAAhA/IP+AAQIAAAFOFNQFNFNAAIxIAAaQQAAI2lNFXQlOFXn7AAgAiSSbIAmAAQCOAAAog/QAqg/AAiyIAA8CQAAihg0gvQgygwh6AAIgmAAg");
	this.shape_6.setTransform(1438.175,-182.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EgPMAggMAAAhA/IO6AAMAAAAyUIPfAAIAAOrg");
	this.shape_7.setTransform(1195.05,-182.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AsicmQkvkWAAogMAAAgwoIPOAAMAAAAxBQAACwCEAAQCAAAAAiwMAAAgxBIPRAAMAAAAwoQAAH9kZEnQkYElobAAQn5AAkvkTg");
	this.shape_8.setTransform(951.475,-179.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EAAEAheQokAAkYkoQkZkqAAoqIAA+8QAAo+EgkiQEgkjIRABIAJAAQIfAAEWEqQEUEpAAIvIAAe8QAAI+keEgQkbEeoLAAgAiAwoMAAAAhWQAACvCAAAIAEAAQB/AAAAivMAAAghWQAAixiDAAIgFAAQh7AAAACxg");
	this.shape_9.setTransform(694.425,-183.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("EACPAhhQpOAAkwk+Qkuk+AAptIAA7vQAAptEuk+QEwk+JOAAIAEAAQHEAAF5CqIlXMBQiUgtizAAIgGAAQl5AAAAHIIAAY1QAADYB1B4QB1B4DEAAIAFAAQCoAAC+hNIFTL+QmhDNnrAAg");
	this.shape_10.setTransform(468.2,-183.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EgHbAggMAAAgyUIpKAAIAAurMAhLAAAIAAOrIpIAAMAAAAyUg");
	this.shape_11.setTransform(171.95,-182.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EgHcAggMAAAhA/IO5AAMAAABA/g");
	this.shape_12.setTransform(0.1,-182.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_sub_caption_mc, new cjs.Rectangle(-1875.4,-499.2,6817.4,752), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ApMVUQjgjyAAmNIAA2lQAAmQDgjzQDfjyFuAAQFsAADgDyQDgDzAAGQIAAWlQAAGNjgDyQjgDylsAAQluAAjfjygAhPtDIAAaNQAAApATAYQATAXAXAAIATAEQBRAAAAhcIAA6NQAAglgVgbQgSgYgXgEIgTgEQhQAAAABgg");
	this.shape.setTransform(4857.35,-190.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApMVUQjfjygBmNIAA2lQABmQDfjzQDgjyFtAAQFtAADfDyQDfDzABGQIAAWlQgBGNjfDyQjfDyltAAQltAAjgjygAhPtDIAAaNQAAApATAYQATAXAXAAIATAEQBRAAAAhcIAA6NQAAglgVgbQgTgYgWgEIgTgEQhQAAAABgg");
	this.shape_1.setTransform(4671.9,-190.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ApMVUQjfjygBmNIAA2lQABmQDfjzQDfjyFuAAQFsAADgDyQDfDzAAGQIAAWlQABGNjgDyQjgDylsAAQluAAjfjygAhPtDIAAaNQAAApATAYQATAXAWAAIAUAEQBRAAAAhcIAA6NQAAglgVgbQgTgYgWgEIgTgEQhQAAAABgg");
	this.shape_2.setTransform(4486.4,-190.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ApdKOIGj0bIMYAAIpZUbg");
	this.shape_3.setTransform(4320.075,-34.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ApMVUQjgjyAAmNIAA2lQAAmQDgjzQDgjyFtAAQFsAADgDyQDfDzAAGQIAAWlQAAGNjfDyQjgDylsAAQltAAjgjygAhPtDIAAaNQAAApATAYQATAXAXAAIATAEQBRAAAAhcIAA6NQAAglgVgbQgTgYgWgEIgTgEQhQAAAABgg");
	this.shape_4.setTransform(4178.15,-190.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AsUVqIEBpAQC8CHDJAAQDGAAAAkSIAAkCQAAlllgAAQiTAAjHBoIC17PISoAAIAAKWInSAAIgpGUQEQAUCTDWQCSDYAAGTIAAF6QAAGYjcDnQjcDnl1AAQmTAAlpjGgAAEn4IgEAEQAPgEAPAAIgDgGQgMAGgLAAg");
	this.shape_5.setTransform(3987.4,-186.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjFYvMAAAgkeIlDBJIAAqbIQRjtMAAAAxdg");
	this.shape_6.setTransform(3819.875,-191.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("As5YYMAAAgwvIL/AAQGAAAD6D6QD6D6AAGkIAATsQAAGpj6EBQj6EBl8AAgAhtN0IAcAAQBqAAAegvQAggvAAiFIAA1CQAAh4gngkQgmgkhbAAIgcAAg");
	this.shape_7.setTransform(3615.875,-189.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AqyYYMAAAgwvIVeAAIAAKZIqTAAIAAIUIIXAAIAAKbIoXAAIAAJOIKaAAIAAKZg");
	this.shape_8.setTransform(3448.825,-189.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ADmYYIg4pgIlbAAIg4JgIq9AAMAGcgwvIQOAAMAGbAwvgAgPomIhYNFIDPAAIhYtFIgPkDg");
	this.shape_9.setTransform(3267.375,-189.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AADZGQmbAAjSjdQjTjgABmfIAA3NQAAmuDYjaQDYjaGMAAIAHAAQGXAADQDgQDPDfAAGjIAAXNQABGujXDYQjUDWmJAAgAhgsdIAAY/QAACEBgAAIADAAQBfAAABiEIAA4/QAAiGhjAAIgEAAQhcAAAACGg");
	this.shape_10.setTransform(3022.15,-190.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlkYYMAAAglvIm4AAIAArAIY4AAIAALAIm1AAMAAAAlvg");
	this.shape_11.setTransform(2846.1,-189.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("As1YYMAAAgwvIL3AAQHvAADDDeQDCDdAAGnIAAEFQAAHYjmC5QjkC6mqAAIgrAAIAAR9gAhpinIAcAAQBbAAAlgpQAogsAAhnIAAlSQAAhngogsQglgphbAAIgcAAg");
	this.shape_12.setTransform(2620.8,-189.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ApZVcQjkjQABmXMAAAgkfILbAAMAAAAkxQAACEBiAAQBgAAAAiEMAAAgkxILcAAMAAAAkfQABF8jTDfQjTDbmUAAQl6AAjjjPg");
	this.shape_13.setTransform(2428.95,-187.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AsHWyIC6qDQEwB3CCAAQD8AAAAjEIAAgUQAAhZg9hfQg/hgibiaIiHiEQjcjZhfi7Qhgi6AAklIAAgIQAAmYDRjlQDOjlFyAAQEsAAFlCPIi5JZQjihGhsAAQj1AAAADIIAAALQAAAcAJAaQAKAbANAYQAOAXAaAhQAeAkATAVIBCBFIBFBLQBhBoAyAvQDiDiBjC2QBiC2AAE8IAAAEQAAGmjeDxQjeDwlvAAQlyAAlyiUg");
	this.shape_14.setTransform(2199.25,-190.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AqyYYMAAAgwvIVeAAIAAKZIqTAAIAAIUIIXAAIAAKbIoXAAIAAJOIKaAAIAAKZg");
	this.shape_15.setTransform(2044.875,-189.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AsrYYIAApzINh8cIr9AAIAAqgIXyAAIAAJzItwccINtAAIAAKgg");
	this.shape_16.setTransform(1875.4,-189.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AllYYMAAAgwvILLAAMAAAAwvg");
	this.shape_17.setTransform(1739.2,-189.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ACBYYIj5ylIgzAAIAASlIrMAAMAAAgwvIL/AAQHvAADDDeQDCDdAAGnIAADgQAAHIjnDIIFjVdgAirjNIAkAAQBcAAAlgrQAngpAAhnIAAktQAAhngngsQglgphcAAIgkAAg");
	this.shape_18.setTransform(1591.825,-189.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("As1YYMAAAgwvIL3AAQHvAADDDeQDCDdAAGnIAAEFQAAHYjmC5QjlC6mpAAIgrAAIAAR9gAhpinIAcAAQBbAAAmgpQAngsAAhnIAAlSQAAhngngsQgmgphbAAIgcAAg");
	this.shape_19.setTransform(1397.85,-189.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABwYYIhvxQIhwRQIscAAIGM4hIl/4OILuAAICRPtICTvtILtAAImBYOIGMYhg");
	this.shape_20.setTransform(1159.425,-189.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAbYYIAArTIumAAMAJoglcIQKAAIAAbsIClAAIAAJwIilAAIAALTgAiaDVIC1AAIAAxMg");
	this.shape_21.setTransform(916.375,-189.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFE400").s().p("AkhRLQhyhaAAiwQAAifByhhQB1hiCsAAQCtAAB0BiQBzBhAACfQAACwhzBaQh0BcitAAQisAAh1hcgAkho4QhyhcAAixQAAieByhhQB1hiCsAAQCtAAB0BiQBzBhAACeQAACxhzBcQh0BaitAAQisAAh1hag");
	this.shape_22.setTransform(712.05,-148);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFE400").s().p("AlkYYMAAAglvIm4AAIAArAIY4AAIAALAIm1AAMAAAAlvg");
	this.shape_23.setTransform(574.6,-189.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFE400").s().p("AsHWyIC6qDQExB3CBAAQD9AAAAjEIAAgUQgBhZg9hfQhAhgiZiaIiHiEQjdjZhfi7Qhgi6AAklIAAgIQAAmYDQjlQDPjlFxAAQEtAAFlCPIi4JZQjjhGhrAAQj2AAAADIIAAALQAAAcAJAaQAKAbANAYQANAXAbAhQAeAkAUAVIBBBFIBGBLQBfBoAzAvQDhDiBkC2QBiC2AAE8IAAAEQAAGmjeDxQjdDwlwAAQlyAAlyiUg");
	this.shape_24.setTransform(411.7,-190.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE400").s().p("AqyYYMAAAgwvIVeAAIAAKZIqTAAIAAIUIIXAAIAAKbIoXAAIAAJOIKaAAIAAKZg");
	this.shape_25.setTransform(257.375,-189.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFE400").s().p("AlkYYMAAAglvIm4AAIAArAIY4AAIAALAIm1AAMAAAAlvg");
	this.shape_26.setTransform(95.15,-189.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFE400").s().p("AgJYYIjF+5IAAe5IrMAAMAAAgwvIOuAAIC+eKIAA+KILJAAMAAAAwvg");
	this.shape_27.setTransform(-90.375,-189.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFE400").s().p("AADZGQmbAAjSjdQjSjgAAmfIAA3NQAAmuDYjaQDYjaGMAAIAHAAQGXAADQDgQDPDfAAGjIAAXNQABGujXDYQjUDWmJAAgAhgsdIAAY/QAACEBgAAIADAAQBgAAAAiEIAA4/QAAiGhjAAIgEAAQhcAAAACGg");
	this.shape_28.setTransform(-288.6,-190.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFE400").s().p("ABrZJQm6AAjjjuQjkjvAAnSIAA0yQAAnSDkjvQDjjvG6AAIAEAAQFSAAEcCAIkCJAQhvghiHAAIgEAAQkbAAABFWIAASoQAAChBXBbQBYBaCTAAIADAAQB/AACOg7ID+I/Qk4CalwAAg");
	this.shape_29.setTransform(-458.2,-189.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFE400").s().p("AgJYYIjF+5IAAe5IrMAAMAAAgwvIOuAAIC+eKIAA+KILJAAMAAAAwvg");
	this.shape_30.setTransform(-702.725,-189.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFE400").s().p("AllYYMAAAgwvILLAAMAAAAwvg");
	this.shape_31.setTransform(-853.85,-189.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFE400").s().p("ACHYYIiH9TIiGdTIubAAMgDngwvIL1AAMAAkAlcMADPglcIJBAAMADPAlcMAAkglcIL1AAMgDnAwvg");
	this.shape_32.setTransform(-1037.675,-189.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFE400").s().p("As8LlIAA3JQAAmQEDjrQEBjrGXAAQF9AAFhDGIkBJnQi0hhjUAAQkXAAADE4IAAVYQAACTBuAAQAzAAAegTIAAxmIKkAAIAAY8QjWB6igA0QigA1jTAAQtXAAABtmg");
	this.shape_33.setTransform(-1311.8,-189.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFE400").s().p("AllYYMAAAgwvILLAAMAAAAwvg");
	this.shape_34.setTransform(-1453.55,-189.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFE400").s().p("AtCYYMAAAgwvIMRAAQGIAADlC8QDlC+AAGEIAABNQAADzhNCSQhMCViyBNQFtCCAAIDIAAC+QAAGQjcDUQjdDWl6AAgAh2N0IArAAQBXAAAhgpQAhgoAAhaIAAkyQAAhegggpQgegshbAAIgrAAgAh2lbIA3AAQBWAAAigoQAhgpAAhYIAAi8QAAhcgegsQghgphaAAIg3AAg");
	this.shape_35.setTransform(-1594.05,-189.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFE400").s().p("Al3RhIAAtSIn1AAIAAqgIH1AAIAArPILxAAIAALPIHzAAIAAKgInzAAIAANSg");
	this.shape_36.setTransform(-1838.275,-145.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.big_win_mc, new cjs.Rectangle(-2010.4,-428.5,7033.700000000001,567.2), null);


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
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWAsIAAhXIAVAAQAKAAAHAHQAHAHAAAMIAAAjQAAAMgHAHQgHAHgKAAgAgCAZIABAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAABAAIAAgFIAAgmQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAIgCgBIgBAAg");
	this.shape_15.setTransform(-321.025,-5.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAsIAAhXIAlAAIAAATIgTAAIAAAPIAQAAIAAASIgQAAIAAAQIATAAIAAATg");
	this.shape_16.setTransform(-325.75,-5.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAGAsIgBgRIgJAAIgBARIgVAAIANhXIAcAAIALBXgAAAgPIgCAXIAFAAIgDgXIAAgHg");
	this.shape_17.setTransform(-330.95,-5.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAsIgFg3IAAA3IgUAAIAAhXIAZAAIAGA1IAAg1IAUAAIAABXg");
	this.shape_18.setTransform(-338.15,-5.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAsIAAhXIATAAIAABXg");
	this.shape_19.setTransform(-342.45,-5.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVApIAFgSQAJAEADgBQAHABAAgGIAAAAQAAgDgCgDIgFgHIgEgDQgGgGgDgFQgCgGAAgIQAAgMAFgGQAGgHAJAAQAJAAAKAFIgFARIgKgDQgFAAAAAGIAAAAIAAACIAAABIABACIABACIACABIACADIAEAEQAHAGACAEQADAGAAAJQAAAMgGAHQgGAGgKAAQgLAAgKgEg");
	this.shape_20.setTransform(-347.55,-5.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTAsIAAhXIAnAAIAAATIgTAAIAAAPIAPAAIAAASIgPAAIAAAQIATAAIAAATg");
	this.shape_21.setTransform(-351.9,-5.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWAsIAAgSIAYgyIgVAAIAAgTIAqAAIAAARIgYAzIAYAAIAAATg");
	this.shape_22.setTransform(-356.725,-5.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAsIAAhXIATAAIAABXg");
	this.shape_23.setTransform(-360.6,-5.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAEAsIgGgiIgCAAIAAAiIgUAAIAAhXIAWAAQANAAAFAGQAGAGAAAMIAAAHQAAAMgHAFIAKAngAgEgFIABAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAIABgEIAAgJIgBgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_24.setTransform(-364.8,-5.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWAsIAAhXIAVAAQANAAAGAGQAFAGAAAMIAAAIQAAAMgGAFQgHAGgLAAIgBAAIAAAggAgCgEIABAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAIABgEIAAgKIgBgEQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_25.setTransform(-370.275,-5.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIA4IAAhvIARAAIAABvg");
	this.shape_26.setTransform(-378.85,-3.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJAsIAAgZIgRg+IAVAAIAFAdIAGgdIAVAAIgRA+IAAAZg");
	this.shape_27.setTransform(-387.625,-5.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUAsIAAhXIAUAAIAABDIAVAAIAAAUg");
	this.shape_28.setTransform(-392.95,-5.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWAsIAAhXIAVAAQANAAAGAGQAFAGAAAMIAAAIQAAAMgGAFQgHAGgLAAIgBAAIAAAggAgCgEIABAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAIABgEIAAgKIgBgEQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_29.setTransform(-397.975,-5.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWAsIAAhXIAVAAQANAAAGAGQAFAGAAAMIAAAIQAAAMgGAFQgHAGgLAAIgBAAIAAAggAgCgEIABAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAIABgEIAAgKIgBgEQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_30.setTransform(-403.325,-5.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAGAsIgBgRIgJAAIgCARIgTAAIALhXIAdAAIAMBXgAAAgPIgCAXIAFAAIgCgXIgBgHg");
	this.shape_31.setTransform(-408.85,-5.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgVApIAGgSQAIAEAEgBQAGABAAgGIAAAAQAAgDgCgDIgFgHIgEgDQgGgGgDgFQgCgGgBgIQAAgMAHgGQAFgHAKAAQAIAAALAFIgGARIgKgDQgGAAAAAGIAAAAIABACIAAABIAAACIACACIACABIACADIAEAEQAGAGAEAEQACAGAAAJQAAAMgGAHQgGAGgKAAQgLAAgKgEg");
	this.shape_32.setTransform(-415.45,-5.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFATIgEglIASAAIgDAlg");
	this.shape_33.setTransform(-419.15,-7.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPAnQgGgHAAgNIAAglQAAgNAGgHQAGgHAMAAQAKAAAIAEIgIARIgHgCQgHAAAAAKIAAAhQAAAEACADQACACAEAAIABAAIAHgBIAHAQQgIAEgLAAQgMABgGgHg");
	this.shape_34.setTransform(-422.675,-5.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgYAoQgGgGAAgMIAAgKQAAgHADgDQADgEAEAAQgEgIAAgGIAAgGQAAgNAEgEQAFgFALgBQAJABAEAFQADAEAAANIAAAFQAAAOgMADIAIALQgBgFAAgGIAQAAIAAAFIAAAFIAAAEIAAADIgBAEIgBADIgCADIAMARIgVAAIgCgDQgGAFgGgBQgNABgHgGgAgLAOIAAAGQAAAEACACQACACAEABIADgBIgLgQgAgGgaIAAABIAAACIAAAKIAAADQAEgBAAgFIAAgHIAAgDIgCgBIgCABg");
	this.shape_35.setTransform(-428.725,-5.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJAsIAAhDIgNAAIAAgUIAtAAIAAAUIgNAAIAABDg");
	this.shape_36.setTransform(-434.475,-5.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIA4IAAhvIARAAIAABvg");
	this.shape_37.setTransform(-442.7,-3.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgOAtIAHgPIAGgQIgCAAQgTAAAAgWIAAgLQAAgLAGgIQAGgHAKAAQALABAFAFQAHAGAAALIAAALQAAAHgCAFIgRAsgAgCgXIAAASQAAABABAAQAAABAAAAQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgSQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAABg");
	this.shape_38.setTransform(-451.25,-5.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNAsIAOhFIgVAAIAAgSIApAAIAAASIgPBFg");
	this.shape_39.setTransform(-456.275,-5.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgVAtIAAgSQAZgbgBgPIAAgBQABgFgDgCQgCgCgDAAIgMACIgGgQQAJgFANAAQAKAAAHAIQAGAHAAAMIAAABQAAAFgCAHQgCAFgEAGIgGAKIgIAJIATAAIAAATg");
	this.shape_40.setTransform(-460.95,-5.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgVApIAGgSQAIAEAEgBQAGABAAgGIAAAAQAAgDgCgDIgFgHIgEgDQgGgGgDgFQgCgGgBgIQAAgMAHgGQAFgHAKAAQAIAAALAFIgGARIgKgDQgGAAAAAGIAAAAIABACIAAABIAAACIACACIACABIACADIAEAEQAGAGAEAEQACAGAAAJQAAAMgGAHQgGAGgKAAQgLAAgKgEg");
	this.shape_41.setTransform(-467.2,-5.05);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgTAsIAAhXIAnAAIAAATIgTAAIAAAPIAPAAIAAASIgPAAIAAAQIATAAIAAATg");
	this.shape_42.setTransform(-471.6,-5.025);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgJAsIAAhXIATAAIAABXg");
	this.shape_43.setTransform(-475.2,-5.025);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AADAsIgGgiIgBAAIAAAiIgUAAIAAhXIAVAAQANAAAGAGQAGAGgBAMIAAAHQAAAMgGAFIAKAngAgEgFIABAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAIABgEIAAgJIgBgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_44.setTransform(-479.4,-5.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgSAsIAAhXIAlAAIAAATIgSAAIAAAPIAPAAIAAASIgPAAIAAAQIASAAIAAATg");
	this.shape_45.setTransform(-484.35,-5.025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgVApIAGgSQAIAEADgBQAHABAAgGIAAAAQAAgDgCgDIgFgHIgEgDQgGgGgDgFQgDgGAAgIQABgMAFgGQAGgHAKAAQAIAAAKAFIgFARIgKgDQgFAAAAAGIAAAAIAAACIAAABIABACIABACIACABIACADIAEAEQAHAGADAEQACAGAAAJQAAAMgGAHQgGAGgKAAQgKAAgLgEg");
	this.shape_46.setTransform(-488.95,-5.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-491.6,-15.6,1060.6,20.1);


// stage content:
(lib.bigticketawarenesshtml5970x90 = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(351));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(484.95,25.9,0.0767,0.0767,0,0,0,0,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(256).to({alpha:0},16).wait(79));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(484.95,58.25,0.0538,0.0538,0,0,0,0,1.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(272).to({_off:false},0).wait(1).to({regX:7376.7,regY:-239.3,x:882.05,y:45.2,alpha:0.0032},0).wait(1).to({alpha:0.0145},0).wait(1).to({y:45.1,alpha:0.0371},0).wait(1).to({y:44.95,alpha:0.077},0).wait(1).to({y:44.75,alpha:0.1467},0).wait(1).to({y:44.35,alpha:0.2672},0).wait(1).to({y:43.85,alpha:0.4164},0).wait(1).to({y:43.35,alpha:0.5648},0).wait(1).to({y:42.9,alpha:0.6887},0).wait(1).to({y:42.6,alpha:0.7859},0).wait(1).to({y:42.35,alpha:0.8625},0).wait(1).to({y:42.15,alpha:0.9229},0).wait(1).to({y:42,alpha:0.9628},0).wait(1).to({y:41.9,alpha:0.9857},0).wait(1).to({alpha:0.9969},0).wait(1).to({regX:0,regY:1,x:484.95,y:54.9,alpha:1},0).wait(63));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(363,42.7,0.0748,0.0748,0,0,0,0,0.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(256).to({_off:false},0).wait(1).to({regX:-2454.6,regY:25.5,x:179.8,y:44.55,alpha:0.0032},0).wait(1).to({x:181.2,alpha:0.0145},0).wait(1).to({x:183.95,alpha:0.0371},0).wait(1).to({x:188.8,alpha:0.077},0).wait(1).to({x:197.3,y:44.6,alpha:0.1467},0).wait(1).to({x:212,y:44.65,alpha:0.2672},0).wait(1).to({x:230.2,y:44.7,alpha:0.4164},0).wait(1).to({x:248.3,y:44.75,alpha:0.5648},0).wait(1).to({x:263.4,y:44.8,alpha:0.6887},0).wait(1).to({x:275.25,y:44.85,alpha:0.7859},0).wait(1).to({x:284.6,alpha:0.8625},0).wait(1).to({x:292,y:44.9,alpha:0.9229},0).wait(1).to({x:296.85,alpha:0.9628},0).wait(1).to({x:299.65,alpha:0.9857},0).wait(1).to({x:301,y:44.95,alpha:0.9969},0).wait(1).to({regX:0,regY:0,x:484.95,y:43.1,alpha:1},0).wait(79));

	// main_sub_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(484.75,62.4,0.0937,0.0937,0,0,0,1.1,0.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:1288.9,regY:-160,x:605.45,y:47.35,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({alpha:0.0435},0).wait(1).to({y:47.45,alpha:0.0919},0).wait(1).to({y:47.5,alpha:0.1816},0).wait(1).to({y:47.7,alpha:0.3248},0).wait(1).to({y:47.85,alpha:0.4878},0).wait(1).to({y:48,alpha:0.6345},0).wait(1).to({y:48.15,alpha:0.7499},0).wait(1).to({y:48.25,alpha:0.8388},0).wait(1).to({y:48.3,alpha:0.9088},0).wait(1).to({y:48.4,alpha:0.9564},0).wait(1).to({alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:1.1,regY:0.6,x:484.75,y:63.5,alpha:1},0).wait(69).to({regX:1288.9,regY:-160,x:605.45,y:48.4,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({alpha:0.9565},0).wait(1).to({y:48.3,alpha:0.9081},0).wait(1).to({y:48.25,alpha:0.8184},0).wait(1).to({y:48.05,alpha:0.6752},0).wait(1).to({y:47.9,alpha:0.5122},0).wait(1).to({y:47.75,alpha:0.3655},0).wait(1).to({y:47.6,alpha:0.2501},0).wait(1).to({y:47.5,alpha:0.1612},0).wait(1).to({y:47.45,alpha:0.0912},0).wait(1).to({y:47.35,alpha:0.0436},0).wait(1).to({alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:1.1,regY:0.6,x:484.75,y:62.4,alpha:0},0).to({_off:true},1).wait(237));

	// main_sub_caption_copy
	this.instance_5 = new lib.big_win_mc();
	this.instance_5.setTransform(484.75,62.4,0.0937,0.0937,0,0,0,1.1,0.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.sub_caption_mc();
	this.instance_6.setTransform(484.75,62.4,0.0937,0.0937,0,0,0,1.1,0.6);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},98).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},68).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(154));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:1506.3,regY:-160,x:625.8,y:47.35,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({alpha:0.0435},0).wait(1).to({y:47.45,alpha:0.0919},0).wait(1).to({y:47.5,alpha:0.1816},0).wait(1).to({y:47.7,alpha:0.3248},0).wait(1).to({y:47.85,alpha:0.4878},0).wait(1).to({y:48,alpha:0.6345},0).wait(1).to({y:48.15,alpha:0.7499},0).wait(1).to({y:48.25,alpha:0.8388},0).wait(1).to({y:48.3,alpha:0.9088},0).wait(1).to({y:48.4,alpha:0.9564},0).wait(1).to({alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:1.1,regY:0.6,x:484.75,y:63.5,alpha:1},0).wait(69).to({regX:1506.3,regY:-160,x:625.8,y:48.4,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({alpha:0.9565},0).wait(1).to({y:48.3,alpha:0.9081},0).wait(1).to({y:48.25,alpha:0.8184},0).wait(1).to({y:48.05,alpha:0.6752},0).wait(1).to({y:47.9,alpha:0.5122},0).wait(1).to({y:47.75,alpha:0.3655},0).wait(1).to({y:47.6,alpha:0.2501},0).wait(1).to({y:47.5,alpha:0.1612},0).wait(1).to({y:47.45,alpha:0.0912},0).wait(1).to({y:47.35,alpha:0.0436},0).wait(1).to({alpha:0.0166},0).wait(1).to({alpha:0.0036},0).to({_off:true},1).wait(155));

	// second_prize_mc
	this.instance_7 = new lib.second_prize_mc();
	this.instance_7.setTransform(240.05,56.15,0.3813,0.3813);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(181).to({_off:false},0).wait(1).to({regX:75,regY:-6.8,x:268.65,y:53.5,alpha:0.0037},0).wait(1).to({y:53.4,alpha:0.0167},0).wait(1).to({y:53.15,alpha:0.0435},0).wait(1).to({y:52.75,alpha:0.0919},0).wait(1).to({y:52,alpha:0.1816},0).wait(1).to({y:50.8,alpha:0.3248},0).wait(1).to({y:49.45,alpha:0.4878},0).wait(1).to({y:48.2,alpha:0.6345},0).wait(1).to({y:47.25,alpha:0.7499},0).wait(1).to({y:46.5,alpha:0.8388},0).wait(1).to({y:45.9,alpha:0.9088},0).wait(1).to({y:45.5,alpha:0.9564},0).wait(1).to({y:45.25,alpha:0.9834},0).wait(1).to({y:45.15,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:240.05,y:47.75,alpha:1},0).wait(61).to({regX:75,regY:-6.8,x:270.2,y:45.1},0).wait(1).to({x:275.75},0).wait(1).to({x:287.15},0).wait(1).to({x:307.75},0).wait(1).to({x:345.95},0).wait(1).to({x:406.95},0).wait(1).to({x:476.4},0).wait(1).to({x:538.85},0).wait(1).to({x:588.05},0).wait(1).to({x:625.9},0).wait(1).to({x:655.7},0).wait(1).to({x:676},0).wait(1).to({x:687.5},0).wait(1).to({x:693.05},0).wait(1).to({regX:0,regY:0,x:666,y:47.7},0).wait(80));

	// su_sub_caption
	this.instance_8 = new lib.daily_sub_caption_mc();
	this.instance_8.setTransform(484.75,62.4,0.0937,0.0937,0,0,0,1.1,0.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(181).to({_off:false},0).wait(1).to({regX:1518.2,regY:-183,x:626.95,y:45.15,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({alpha:0.0435},0).wait(1).to({alpha:0.0919},0).wait(1).to({alpha:0.1816},0).wait(1).to({y:45.1,alpha:0.3248},0).wait(1).to({alpha:0.4878},0).wait(1).to({y:45.05,alpha:0.6345},0).wait(1).to({alpha:0.7499},0).wait(1).to({y:45,alpha:0.8388},0).wait(1).to({alpha:0.9088},0).wait(1).to({alpha:0.9564},0).wait(1).to({alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:1.1,regY:0.6,x:484.75,y:62.2,alpha:1},0).wait(61).to({regX:1518.2,regY:-183,x:626.95,y:45,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:0.9081},0).wait(1).to({alpha:0.8184},0).wait(1).to({y:45.05,alpha:0.6752},0).wait(1).to({alpha:0.5122},0).wait(1).to({y:45.1,alpha:0.3655},0).wait(1).to({alpha:0.2501},0).wait(1).to({y:45.15,alpha:0.1612},0).wait(1).to({alpha:0.0912},0).wait(1).to({alpha:0.0436},0).wait(1).to({alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:1.1,regY:0.6,x:484.75,y:62.4,alpha:0},0).wait(80));

	// promo
	this.instance_9 = new lib.promo_mc();
	this.instance_9.setTransform(511.25,43.5,0.078,0.078,0,0,0,1.3,0.7);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:-3137.8,regY:20.7,x:266.15,y:45.05,alpha:0.0037},0).wait(1).to({x:265.8,alpha:0.0167},0).wait(1).to({x:265.1,alpha:0.0435},0).wait(1).to({x:263.8,alpha:0.0919},0).wait(1).to({x:261.45,alpha:0.1816},0).wait(1).to({x:257.7,alpha:0.3248},0).wait(1).to({x:253.4,alpha:0.4878},0).wait(1).to({x:249.55,alpha:0.6345},0).wait(1).to({x:246.5,alpha:0.7499},0).wait(1).to({x:244.15,alpha:0.8388},0).wait(1).to({x:242.3,alpha:0.9088},0).wait(1).to({x:241.05,alpha:0.9564},0).wait(1).to({x:240.35,alpha:0.9834},0).wait(1).to({x:240,alpha:0.9964},0).wait(1).to({regX:0,regY:0.7,x:484.95,y:43.5,alpha:1},0).wait(166).to({alpha:0},15).wait(61).to({regX:-3137.8,regY:20.7,x:241.1,y:45.05,alpha:0.0037},0).wait(1).to({x:245,alpha:0.0167},0).wait(1).to({x:252.95,y:45.1,alpha:0.0435},0).wait(1).to({x:267.3,y:45.15,alpha:0.0919},0).wait(1).to({x:293.95,y:45.25,alpha:0.1816},0).wait(1).to({x:336.5,y:45.45,alpha:0.3248},0).wait(1).to({x:384.9,y:45.65,alpha:0.4878},0).wait(1).to({x:428.45,y:45.8,alpha:0.6345},0).wait(1).to({x:462.75,y:45.95,alpha:0.7499},0).wait(1).to({x:489.15,y:46.05,alpha:0.8388},0).wait(1).to({x:509.95,y:46.15,alpha:0.9088},0).wait(1).to({x:524.05,y:46.2,alpha:0.9564},0).wait(1).to({x:532.1,y:46.25,alpha:0.9834},0).wait(1).to({x:535.95,alpha:0.9964},0).wait(1).to({regX:0,regY:0.7,x:781.95,y:44.75,alpha:1},0).wait(80));

	// background
	this.instance_10 = new lib.background_mc();
	this.instance_10.setTransform(485.05,45.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(351));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(485.1,34.9,485,64.80000000000001);
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