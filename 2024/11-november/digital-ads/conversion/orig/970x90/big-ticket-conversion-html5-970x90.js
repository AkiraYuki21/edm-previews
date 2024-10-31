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
	this.instance.setTransform(-4507,-706,7.0332,7.0332);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-4507,-706,2714.8,1462.9), null);


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
	this.shape.graphics.f("#FFE400").s().p("AkfXSQh0haAAixQAAieB0hhQBzhiCsAAQCtAAB0BiQBzBhAACeQAACxhzBaQh0BcitAAQisAAhzhcgAlkIWMAAAghDILLAAMAAAAhDg");
	this.shape.setTransform(3675.4,-232.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("ACBYYIj5ylIgzAAIAASlIrMAAMAAAgwvIL/AAQHvAADDDeQDCDdAAGnIAADgQAAHIjnDIIFjVdgAirjNIAkAAQBcAAAlgrQAngpAAhnIAAktQAAhngngsQglgphcAAIgkAAg");
	this.shape_1.setTransform(3501.075,-234.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("ADmYYIg4pgIlbAAIg4JgIq9AAMAGcgwvIQOAAMAGbAwvgAgPomIhYNFIDPAAIhYtFIgPkDg");
	this.shape_2.setTransform(3299.925,-234.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AqyYYMAAAgwvIVeAAIAAKZIqTAAIAAIUIIXAAIAAKbIoXAAIAAJOIKaAAIAAKZg");
	this.shape_3.setTransform(3126.175,-234.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AlkYYIAAt1MgJVgi6ILkAAIDZQTIDUwTILiAAMgJTAi6IAAN1g");
	this.shape_4.setTransform(2946.325,-234.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AqyYYMAAAgwvIVeAAIAAKZIqTAAIAAIUIIXAAIAAKbIoXAAIAAJOIKaAAIAAKZg");
	this.shape_5.setTransform(2724.125,-234.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("ABiYYIAAzOIjDAAIAATOIrLAAMAAAgwvILLAAIAASaIDDAAIAAyaILLAAMAAAAwvg");
	this.shape_6.setTransform(2550.65,-234.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AlkYYMAAAglvIm3AAIAArAIY4AAIAALAIm3AAMAAAAlvg");
	this.shape_7.setTransform(2379.95,-234.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("ArDYYMAAAgwvIWHAAIAAKZIq8AAIAAIUIJCAAIAAKbIpCAAIAATng");
	this.shape_8.setTransform(2173.725,-234.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AADZGQmbAAjSjdQjTjgABmfIAA3NQAAmuDYjaQDYjaGMAAIAHAAQGXAADQDgQDPDfAAGjIAAXNQABGujXDYQjUDWmJAAgAhgsdIAAY/QAACEBgAAIADAAQBgAAAAiEIAA4/QAAiGhjAAIgEAAQhcAAAACGg");
	this.shape_9.setTransform(1997.05,-235.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("ABhYYIAAzOIjBAAIAATOIrNAAMAAAgwvILNAAIAASaIDBAAIAAyaILMAAMAAAAwvg");
	this.shape_10.setTransform(1759.7,-234.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AsHWyIC6qDQExB3CBAAQD8AAAAjEIAAgUQABhZg/hfQg/hgiaiaIiHiEQjbjZhgi7Qhgi6AAklIAAgIQAAmYDRjlQDOjlFyAAQEsAAFlCPIi5JZQjjhGhrAAQj1AAAADIIAAALQAAAcAKAaQAJAbANAYQAOAXAbAhQAeAkASAVIBCBFIBFBLQBgBoAzAvQDiDiBjC2QBiC2AAE8IAAAEQAAGmjeDxQjeDwlvAAQlyAAlyiUg");
	this.shape_11.setTransform(1589.3,-235.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("ADmYYIg4pgIlbAAIg4JgIq9AAMAGcgwvIQOAAMAGbAwvgAgPomIhYNFIDPAAIhYtFIgPkDg");
	this.shape_12.setTransform(1407.075,-234.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("ABrZJQm6AAjjjvQjkjuAAnSIAA0zQAAnRDkjvQDjjvG6AAIAEAAQFSAAEcCAIkCJBQhvgiiHAAIgEAAQkbAAABFWIAASnQAACiBXBaQBYBaCTAAIADAAQB+AACPg6ID+I/Qk4CalwAAg");
	this.shape_13.setTransform(1231.1,-234.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("ADmYYIg4pgIlbAAIg4JgIq9AAMAGcgwvIQOAAMAGbAwvgAgPomIhYNFIDPAAIhYtFIgPkDg");
	this.shape_14.setTransform(989.625,-234.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("As9LlIAA3JQAAmQEEjrQEBjrGXAAQF9AAFiDFIkCJpQi0hijVAAQkWAAADE4IAAVZQAACSBuAAQAzAAAegTIAAxmIKkAAIAAY7QjWB7ifA1QigA0jVAAQtVAAgBtmg");
	this.shape_15.setTransform(801.35,-234.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("AqyYYMAAAgwvIVeAAIAAKZIqTAAIAAIUIIXAAIAAKbIoXAAIAAJOIKaAAIAAKZg");
	this.shape_16.setTransform(633.925,-234.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("AH+YYMAAAgkiIggFlIjSe9IobAAIjU+9IgellMAAAAkiIq1AAMAAAgwvIQ+AAIBnXGIAPDsIAUjsIBu3GIQ3AAMAAAAwvg");
	this.shape_17.setTransform(421.35,-234.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AlkYYMAAAglvIm3AAIAArAIY4AAIAALAIm2AAMAAAAlvg");
	this.shape_18.setTransform(157.55,-234.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AsHWyIC6qDQEwB3CCAAQD8AAAAjEIAAgUQAAhZg+hfQg+hgibiaIiHiEQjbjZhgi7Qhgi6AAklIAAgIQAAmYDRjlQDOjlFyAAQEsAAFlCPIi5JZQjihGhsAAQj1AAAADIIAAALQAAAcAKAaQAJAbANAYQAOAXAaAhQAeAkATAVIBCBFIBFBLQBhBoAyAvQDiDiBjC2QBiC2AAE8IAAAEQAAGmjeDxQjeDwlvAAQlyAAlyiUg");
	this.shape_19.setTransform(-5.4,-235.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AqyYYMAAAgwvIVeAAIAAKZIqTAAIAAIUIIXAAIAAKbIoXAAIAAJOIKaAAIAAKZg");
	this.shape_20.setTransform(-159.725,-234.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("As8LlIAA3JQAAmQEDjrQEBjrGXAAQF9AAFiDFIkCJpQi1hijTAAQkYAAAEE4IAAVZQAACSBuAAQAzAAAegTIAAxmIKkAAIAAY7QjWB7ifA1QihA0jTAAQtXAAABtmg");
	this.shape_21.setTransform(-327.85,-234.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("As8LlIAA3JQAAmQEDjrQEBjrGXAAQF9AAFhDFIkBJpQi0hijVAAQkWAAADE4IAAVZQAACSBuAAQAzAAAegTIAAxmIKkAAIAAY7QjWB7igA1QifA0jUAAQtWAAAAtmg");
	this.shape_22.setTransform(-509.8,-234.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AllYYMAAAgwvILLAAMAAAAwvg");
	this.shape_23.setTransform(-651.5,-234.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AtCYYMAAAgwvIMRAAQGIAADlC8QDmC+AAGEIAABNQAADzhOCSQhNCViwBNQFsCCAAIDIAAC+QAAGQjbDUQjfDWl5AAgAh2N0IArAAQBXAAAggpQAigoAAhaIAAkyQAAhegggpQgegshbAAIgrAAgAh2lbIA2AAQBXAAAjgoQAfgpAAhYIAAi8QAAhcgegsQgfgphcAAIg2AAg");
	this.shape_24.setTransform(-792,-234.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AqyYYMAAAgwvIVeAAIAAKZIqTAAIAAIUIIXAAIAAKbIoXAAIAAJOIKaAAIAAKZg");
	this.shape_25.setTransform(-1009.975,-234.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ABiYYIAAzOIjDAAIAATOIrLAAMAAAgwvILLAAIAASaIDDAAIAAyaILMAAMAAAAwvg");
	this.shape_26.setTransform(-1183.45,-234.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AlkYYMAAAglvIm4AAIAArAIY5AAIAALAIm3AAMAAAAlvg");
	this.shape_27.setTransform(-1354.15,-234.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-2142.3,-473.4,6598.8,567.1), null);


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
	this.instance.setTransform(-45,-125,0.9529,0.9529);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-45,-125,264.9,235.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AlmdGQiShxAAjcQAAjFCSh7QCPh6DXAAQDYAACSB6QCPB7AADFQAADciPBxQiSBzjYAAQjXAAiPhzgAm9KbMAAAgpTIN9AAMAAAApTg");
	this.shape.setTransform(3268.35,-132.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB6eeIAA4CIjzAAIAAYCIt/AAMAAAg87IN/AAIAAXAIDzAAIAA3AIN/AAMAAAA87g");
	this.shape_1.setTransform(3059.425,-135.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Am9eeMAAAgvLIomAAIAAtwIfGAAIAANwIoiAAMAAAAvLg");
	this.shape_2.setTransform(2846.1,-135.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEfYQoCAAkHkVQkHkYAAoHIAA9AQAAoaEPkQQEOkRHvAAIAIAAQH+AAEFEYQECEXAAIMIAAdAQAAIakMEOQkJEMnrAAgAh4vlIAAfQQAACkB4AAIAEAAQB3AAAAikIAA/QQAAinh7AAIgFAAQhzAAAACng");
	this.shape_3.setTransform(2626.075,-136.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AwTeeMAAAg87IPWAAQHpAAEfDrQEeDtAAHmIAABgQAAEvhgC3QhgC6jdBgQHICjAAKEIAADtQAAH0kTEKQkVELnYAAgAiURRIA2AAQBtAAAog0QArgxAAhxIAAl/QgBh1gog0Qglg2hyAAIg2AAgAiUmzIBEAAQBtAAArgxQAngzAAhvIAAjrQAAhzglg2QgogzhyAAIhEAAg");
	this.shape_4.setTransform(2391.6,-135.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACheeIk33OIhAAAIAAXOIt/AAMAAAg87IO/AAQJqAAD1EVQDyEVAAIQIAAEYQAAI6khD7IG8a0gAjWkAIAtAAQBzAAAvg2QAwg0AAiBIAAl4QAAiBgwg2QgvgzhzAAIgtAAg");
	this.shape_5.setTransform(2085.125,-135.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAEfYQoCAAkHkVQkHkYAAoHIAA9AQAAoaEPkQQEOkRHvAAIAIAAQH+AAEFEYQECEXAAIMIAAdAQAAIakMEOQkJEMnrAAgAh4vlIAAfQQAACkB4AAIAEAAQB3AAAAikIAA/QQAAinh7AAIgFAAQhzAAAACng");
	this.shape_6.setTransform(1841.675,-136.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AwHeeMAAAg87IO+AAQHgAAE5E4QE4E5AAIOIAAYmQAAITk4FCQk5FBnbAAgAiIRRIAjAAQCFAAAlg7QAog7AAimIAA6TQAAiWgxgtQgvgshyAAIgjAAg");
	this.shape_7.setTransform(1543.575,-135.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AuQeeMAAAg87IOAAAMAAAAvLIOgAAIAANwg");
	this.shape_8.setTransform(1315.65,-135.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AAEfYQoCAAkHkVQkHkYAAoHIAA9AQAAoaEPkQQEOkRHvAAIAIAAQH+AAEFEYQECEXAAIMIAAdAQAAIakMEOQkJEMnrAAgAh4vlIAAfQQAACkB4AAIAEAAQB3AAAAikIAA/QQAAinh7AAIgFAAQhzAAAACng");
	this.shape_9.setTransform(1091.975,-136.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AwMOfIAA88QAAn0FFkmQFBkmH9AAQHcABG6D2IlCMCQjhh6kKAAQlcAAAEGGIAAavQAAC3CKAAQA/AAAmgXIAA2BINNAAIAAfMQkMCYjHBCQjIBCkJgBQwsAAAAw+g");
	this.shape_10.setTransform(864.475,-136.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("Am9eeIAAxSMgLrgrpIOdAAIEQUXIEJ0XIObAAMgLoArpIAARSg");
	this.shape_11.setTransform(559.975,-135.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AuPeeMAAAg87IN+AAMAAAAvLIOiAAIAANwg");
	this.shape_12.setTransform(325.6,-135.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("Am/eeMAAAg87IN/AAMAAAA87g");
	this.shape_13.setTransform(160.8,-135.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AEgeeIhHr5ImxAAIhHL5ItrAAMAICg87IURAAMAICA87gAgTqwIhuQWIEDAAIhuwWIgTlEg");
	this.shape_14.setTransform(-24.25,-135.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AwHeeMAAAg87IO+AAQHgAAE5E4QE4E5AAIOIAAYmQAAITk4FCQk5FBnbAAgAiIRRIAjAAQCFAAAlg7QAog7AAimIAA6TQAAiWgxgtQgvgshyAAIgjAAg");
	this.shape_15.setTransform(-267.875,-135.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_sub_caption_mc, new cjs.Rectangle(-1811.4,-433.2,6598.700000000001,705.8), null);


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
	this.instance.setTransform(-556,-660,15.9471,15.9471);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-556,-660,3891.1,749.5), null);


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
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAsIAAgZIgRg+IAVAAIAFAdIAGgdIAVAAIgRA+IAAAZg");
	this.shape_15.setTransform(-382.925,-5.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAsIAAhXIAUAAIAABDIAVAAIAAAUg");
	this.shape_16.setTransform(-388.25,-5.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAsIAAhXIAVAAQANAAAGAGQAFAGAAAMIAAAIQAAAMgGAFQgHAGgLAAIgBAAIAAAggAgCgEIABAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAIABgEIAAgKIgBgEQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_17.setTransform(-393.325,-5.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWAsIAAhXIAVAAQANAAAGAGQAFAGAAAMIAAAIQAAAMgGAFQgHAGgLAAIgBAAIAAAggAgCgEIABAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAIABgEIAAgKIgBgEQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_18.setTransform(-398.625,-5.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAGAsIgBgRIgJAAIgBARIgVAAIANhXIAcAAIALBXgAAAgPIgCAXIAFAAIgDgXIAAgHg");
	this.shape_19.setTransform(-404.2,-5.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVApIAGgSQAIAEADgBQAHABAAgGIAAAAQAAgDgCgDIgFgHIgEgDQgGgGgDgFQgDgGAAgIQABgMAFgGQAGgHAKAAQAIAAALAFIgGARIgKgDQgFAAgBAGIAAAAIABACIAAABIABACIABACIACABIACADIAEAEQAHAGADAEQACAGAAAJQAAAMgGAHQgHAGgJAAQgLAAgKgEg");
	this.shape_20.setTransform(-410.75,-5.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFATIgDglIARAAIgDAlg");
	this.shape_21.setTransform(-414.5,-7.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPAnQgGgHAAgNIAAglQAAgNAGgHQAGgHAMAAQAKAAAIAEIgIARIgHgCQgHAAAAAKIAAAhQAAAEACADQACACAEAAIABAAIAHgBIAHAQQgIAEgLAAQgMABgGgHg");
	this.shape_22.setTransform(-418.025,-5.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgYAoQgGgGAAgMIAAgKQAAgHADgDQADgEAEAAQgEgIAAgGIAAgGQAAgNAEgEQAFgFALgBQAJABAEAFQADAEAAANIAAAFQAAAOgMADIAIALQgBgFAAgGIAQAAIAAAFIAAAFIAAAEIAAADIgBAEIgBADIgCADIAMARIgVAAIgCgDQgGAFgGgBQgNABgHgGgAgLAOIAAAGQAAAEACACQACACAEABIADgBIgLgQgAgGgaIAAABIAAACIAAAKIAAADQAEgBAAgFIAAgHIAAgDIgCgBIgCABg");
	this.shape_23.setTransform(-424.025,-5.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAsIAAhDIgNAAIAAgUIAtAAIAAAUIgNAAIAABDg");
	this.shape_24.setTransform(-429.825,-5.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIA4IAAhvIARAAIAABvg");
	this.shape_25.setTransform(-438.05,-3.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOAtIAGgPIAHgQIgCAAQgTAAAAgWIAAgLQAAgLAGgIQAGgHAKAAQALABAFAFQAHAGAAALIAAALQAAAHgCAFIgRAsgAgCgXIAAASQAAABABAAQAAABAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgSQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAABg");
	this.shape_26.setTransform(-446.6,-5.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQAoQgGgGAAgLIAAgLQAAgHACgGQAEgMAMggIATAAIgHAQIgHAQIACAAQAUAAAAAWIAAALQAAALgGAIQgGAGgLAAQgJABgHgGgAgBAFIAAATQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgTQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_27.setTransform(-451.85,-5.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAtIAAgSQAZgbgBgPIAAgBQABgFgDgCQgCgCgDAAIgLACIgHgQQAJgFANAAQALAAAGAIQAGAHAAAMIAAABQAAAFgCAHQgCAFgEAGIgGAKIgIAJIATAAIAAATg");
	this.shape_28.setTransform(-457,-5.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgVApIAFgSQAJAEAEgBQAGABAAgGIAAAAQAAgDgCgDIgFgHIgEgDQgGgGgDgFQgCgGgBgIQAAgMAHgGQAFgHAJAAQAJAAALAFIgGARIgJgDQgHAAAAAGIAAAAIABACIAAABIAAACIACACIACABIACADIAEAEQAGAGADAEQADAGAAAJQAAAMgGAHQgHAGgJAAQgLAAgKgEg");
	this.shape_29.setTransform(-463.25,-5.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSAsIAAhXIAlAAIAAATIgTAAIAAAPIAQAAIAAASIgQAAIAAAQIATAAIAAATg");
	this.shape_30.setTransform(-467.6,-5.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAsIAAhXIATAAIAABXg");
	this.shape_31.setTransform(-471.25,-5.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AADAsIgGgiIgBAAIAAAiIgUAAIAAhXIAVAAQAOAAAFAGQAFAGAAAMIAAAHQAAAMgGAFIAKAngAgEgFIABAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAIABgEIAAgJIgBgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_32.setTransform(-475.45,-5.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgTAsIAAhXIAmAAIAAATIgTAAIAAAPIAQAAIAAASIgQAAIAAAQIATAAIAAATg");
	this.shape_33.setTransform(-480.35,-5.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgVApIAGgSQAIAEADgBQAHABAAgGIAAAAQAAgDgCgDIgFgHIgEgDQgGgGgDgFQgDgGAAgIQABgMAFgGQAGgHAKAAQAIAAALAFIgGARIgKgDQgFAAgBAGIAAAAIABACIAAABIABACIABACIACABIACADIAEAEQAHAGADAEQACAGAAAJQAAAMgGAHQgHAGgJAAQgLAAgKgEg");
	this.shape_34.setTransform(-485,-5.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-487.6,-15.6,1056.6,20.1);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(283));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(484.95,25.9,0.0767,0.0767,0,0,0,0,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(188).to({alpha:0},16).wait(79));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(484.95,58.25,0.0538,0.0538,0,0,0,0,1.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(204).to({_off:false},0).wait(1).to({regX:1389.5,regY:-285.2,x:559.75,y:42.75,alpha:0.0032},0).wait(1).to({alpha:0.0145},0).wait(1).to({y:42.65,alpha:0.0371},0).wait(1).to({y:42.5,alpha:0.077},0).wait(1).to({y:42.3,alpha:0.1467},0).wait(1).to({y:41.9,alpha:0.2672},0).wait(1).to({y:41.4,alpha:0.4164},0).wait(1).to({y:40.9,alpha:0.5648},0).wait(1).to({y:40.45,alpha:0.6887},0).wait(1).to({y:40.15,alpha:0.7859},0).wait(1).to({y:39.9,alpha:0.8625},0).wait(1).to({y:39.7,alpha:0.9229},0).wait(1).to({y:39.55,alpha:0.9628},0).wait(1).to({y:39.45,alpha:0.9857},0).wait(1).to({alpha:0.9969},0).wait(1).to({regX:0,regY:1,x:484.95,y:54.9,alpha:1},0).wait(63));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(363,42.7,0.0748,0.0748,0,0,0,0,0.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(188).to({_off:false},0).wait(1).to({regX:-3149.6,regY:25.5,x:127.8,y:44.55,alpha:0.0032},0).wait(1).to({x:129.2,alpha:0.0145},0).wait(1).to({x:131.95,alpha:0.0371},0).wait(1).to({x:136.8,alpha:0.077},0).wait(1).to({x:145.3,y:44.6,alpha:0.1467},0).wait(1).to({x:160,y:44.65,alpha:0.2672},0).wait(1).to({x:178.2,y:44.7,alpha:0.4164},0).wait(1).to({x:196.3,y:44.75,alpha:0.5648},0).wait(1).to({x:211.4,y:44.8,alpha:0.6887},0).wait(1).to({x:223.25,y:44.85,alpha:0.7859},0).wait(1).to({x:232.6,alpha:0.8625},0).wait(1).to({x:240,y:44.9,alpha:0.9229},0).wait(1).to({x:244.85,alpha:0.9628},0).wait(1).to({x:247.65,alpha:0.9857},0).wait(1).to({x:249,y:44.95,alpha:0.9969},0).wait(1).to({regX:0,regY:0,x:484.95,y:43.1,alpha:1},0).wait(79));

	// main_sub_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(484.75,62.4,0.0937,0.0937,0,0,0,1.1,0.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:1141,regY:-234.5,x:591.55,y:40.35,alpha:0.0037},0).wait(1).to({x:591.45,y:40.4,alpha:0.0167},0).wait(1).to({x:591.3,y:40.5,alpha:0.0435},0).wait(1).to({x:591,y:40.7,alpha:0.0919},0).wait(1).to({x:590.45,y:41.1,alpha:0.1816},0).wait(1).to({x:589.55,y:41.75,alpha:0.3248},0).wait(1).to({x:588.55,y:42.45,alpha:0.4878},0).wait(1).to({x:587.6,y:43.1,alpha:0.6345},0).wait(1).to({x:586.9,y:43.6,alpha:0.7499},0).wait(1).to({x:586.35,y:43.95,alpha:0.8388},0).wait(1).to({x:585.9,y:44.3,alpha:0.9088},0).wait(1).to({x:585.6,y:44.5,alpha:0.9564},0).wait(1).to({x:585.45,y:44.6,alpha:0.9834},0).wait(1).to({x:585.35,y:44.65,alpha:0.9964},0).wait(1).to({regX:1.1,regY:0.6,x:478.5,y:66.75,alpha:1},0).wait(68).to({x:484.75,y:60.5},0).wait(1).to({regX:1141,regY:-234.5,x:591.6,y:38.45,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:38.5,alpha:0.9565},0).wait(1).to({y:38.6,alpha:0.9081},0).wait(1).to({y:38.75,alpha:0.8184},0).wait(1).to({y:39.05,alpha:0.6752},0).wait(1).to({y:39.35,alpha:0.5122},0).wait(1).to({y:39.65,alpha:0.3655},0).wait(1).to({y:39.85,alpha:0.2501},0).wait(1).to({y:40,alpha:0.1612},0).wait(1).to({y:40.15,alpha:0.0912},0).wait(1).to({y:40.25,alpha:0.0436},0).wait(1).to({y:40.3,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:1.1,regY:0.6,x:484.75,y:62.4,alpha:0},0).to({_off:true},1).wait(169));

	// second_prize_mc
	this.instance_5 = new lib.second_prize_mc();
	this.instance_5.setTransform(240.05,56.15,0.3813,0.3813);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:87.5,regY:-7.3,x:273.4,y:53.3,alpha:0.0037},0).wait(1).to({y:53.2,alpha:0.0167},0).wait(1).to({y:52.95,alpha:0.0435},0).wait(1).to({y:52.55,alpha:0.0919},0).wait(1).to({y:51.8,alpha:0.1816},0).wait(1).to({y:50.6,alpha:0.3248},0).wait(1).to({y:49.25,alpha:0.4878},0).wait(1).to({y:48,alpha:0.6345},0).wait(1).to({y:47.05,alpha:0.7499},0).wait(1).to({y:46.3,alpha:0.8388},0).wait(1).to({y:45.7,alpha:0.9088},0).wait(1).to({y:45.3,alpha:0.9564},0).wait(1).to({y:45.05,alpha:0.9834},0).wait(1).to({y:44.95,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:240.05,y:47.75,alpha:1},0).wait(61).to({regX:87.5,regY:-7.3,x:273.25,y:44.95,alpha:0.9963},0).wait(1).to({x:272.85,alpha:0.9833},0).wait(1).to({x:272.05,alpha:0.9565},0).wait(1).to({x:270.6,alpha:0.9081},0).wait(1).to({x:267.95,alpha:0.8184},0).wait(1).to({x:263.65,alpha:0.6752},0).wait(1).to({x:258.75,alpha:0.5122},0).wait(1).to({x:254.35,alpha:0.3655},0).wait(1).to({x:250.9,alpha:0.2501},0).wait(1).to({x:248.2,alpha:0.1612},0).wait(1).to({x:246.1,alpha:0.0912},0).wait(1).to({x:244.7,alpha:0.0436},0).wait(1).to({x:243.85,alpha:0.0166},0).wait(1).to({x:243.5,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:210.05,y:47.75,alpha:0},0).to({_off:true},1).wait(94));

	// su_sub_caption
	this.instance_6 = new lib.daily_sub_caption_mc();
	this.instance_6.setTransform(484.75,62.4,0.0937,0.0937,0,0,0,1.1,0.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({regX:1473.9,regY:-136.2,x:622.8,y:49.55,alpha:0.0037},0).wait(1).to({y:49.5,alpha:0.0167},0).wait(1).to({y:49.35,alpha:0.0435},0).wait(1).to({y:49.05,alpha:0.0919},0).wait(1).to({y:48.6,alpha:0.1816},0).wait(1).to({y:47.8,alpha:0.3248},0).wait(1).to({y:46.9,alpha:0.4878},0).wait(1).to({y:46.1,alpha:0.6345},0).wait(1).to({y:45.5,alpha:0.7499},0).wait(1).to({y:45,alpha:0.8388},0).wait(1).to({y:44.6,alpha:0.9088},0).wait(1).to({y:44.35,alpha:0.9564},0).wait(1).to({y:44.2,alpha:0.9834},0).wait(1).to({y:44.15,alpha:0.9964},0).wait(1).to({regX:1.1,regY:0.6,x:484.75,y:56.95,alpha:1},0).wait(60).to({y:60.5},0).wait(1).to({regX:1473.9,regY:-136.2,x:622.8,y:47.7,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:47.75,alpha:0.9565},0).wait(1).to({y:47.85,alpha:0.9081},0).wait(1).to({y:48,alpha:0.8184},0).wait(1).to({y:48.3,alpha:0.6752},0).wait(1).to({y:48.6,alpha:0.5122},0).wait(1).to({y:48.9,alpha:0.3655},0).wait(1).to({y:49.1,alpha:0.2501},0).wait(1).to({y:49.25,alpha:0.1612},0).wait(1).to({y:49.4,alpha:0.0912},0).wait(1).to({y:49.5,alpha:0.0436},0).wait(1).to({y:49.55,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:1.1,regY:0.6,x:484.75,y:62.4,alpha:0},0).wait(95));

	// promo
	this.instance_7 = new lib.promo_mc();
	this.instance_7.setTransform(511.25,43.5,0.078,0.078,0,0,0,1.3,0.7);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-3137.8,regY:20.7,x:266.15,y:45.05,alpha:0.0037},0).wait(1).to({x:265.8,alpha:0.0167},0).wait(1).to({x:265.1,alpha:0.0435},0).wait(1).to({x:263.8,alpha:0.0919},0).wait(1).to({x:261.45,alpha:0.1816},0).wait(1).to({x:257.7,alpha:0.3248},0).wait(1).to({x:253.4,alpha:0.4878},0).wait(1).to({x:249.55,alpha:0.6345},0).wait(1).to({x:246.5,alpha:0.7499},0).wait(1).to({x:244.15,alpha:0.8388},0).wait(1).to({x:242.3,alpha:0.9088},0).wait(1).to({x:241.05,alpha:0.9564},0).wait(1).to({x:240.35,alpha:0.9834},0).wait(1).to({x:240,alpha:0.9964},0).wait(1).to({regX:0,regY:0.7,x:484.95,y:43.5,alpha:1},0).wait(83).to({alpha:0},15).to({_off:true},1).wait(169));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5050F").s().p("EhM1AHLIAAuVMCZrAAAIAAOVg");
	this.shape.setTransform(485.075,45.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(478.3,34.9,498.59999999999997,64.80000000000001);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 970,
	height: 90,
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