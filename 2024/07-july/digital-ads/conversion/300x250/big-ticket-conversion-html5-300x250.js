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



(lib._18 = function() {
	this.initialize(img._18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,18);


(lib._2ndprize = function() {
	this.initialize(img._2ndprize);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,247);


(lib.consolation = function() {
	this.initialize(img.consolation);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,83);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgPB6QgHgDgEgGQgEgHgBgKQABgMAIgIQAJgHANgBQAOABAJAHQAJAIAAAMQAAAKgEAHQgFAGgHADQgHADgJAAQgHAAgIgDgAgbAqIAAimIA4AAIAACmg");
	this.shape.setTransform(264.9,-4.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggB8QgPgEgNgFIAOgzIATAHQAJADAHAAQAKAAAEgEQAFgEAAgIIAAgBQAAgHgFgIQgFgIgMgMIgKgKQgKgKgIgJQgHgKgEgLQgEgMAAgRIAAAAQABghAQgSQAQgRAcgBQAMAAANADQAOADANAGIgOAvIgQgEIgLgCQgJAAgFAEQgEAEAAAIIAAABQAAAGAFAHIAOAQIAGAFIAGAGQAKAKAHAJQAIAKAEAMQAEAMAAASQAAAXgIAQQgIAQgOAIQgPAJgSAAQgQAAgOgDg");
	this.shape_1.setTransform(252.625,-4.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1B7IAAj1IBrAAIAAA0Ig0AAIAAAqIArAAIAAA0IgrAAIAAAvIA1AAIAAA0g");
	this.shape_2.setTransform(240.4,-4.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/B7IAAgxIBEiPIg8AAIAAg1IB3AAIAAAxIhECPIBEAAIAAA1g");
	this.shape_3.setTransform(227.05,-4.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbB7IAAj1IA3AAIAAD1g");
	this.shape_4.setTransform(216.275,-4.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALB7IgUheIgDAAIAABeIg5AAIAAj1IA8AAQAbAAAPAJQAQAIAFAPQAHAQgBAUIAAASQAAATgEANQgFALgJAIIAcBsgAgMgPIACAAQAHAAADgDQADgEAAgIIAAgYQAAgIgDgDQgCgEgIAAIgCAAg");
	this.shape_5.setTransform(204.65,-4.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhAB7IAAj1IA8AAQAaAAAQAJQAPAIAGAPQAGAQAAAUIAAAVQgBAagIAOQgJAOgQAGQgPAGgUAAIgEAAIAABagAgIgMIADAAQAGAAADgDQAEgEgBgIIAAgbQABgIgEgDQgDgEgGAAIgDAAg");
	this.shape_6.setTransform(189.35,-4.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAIB7IAAhhIgPAAIAABhIg4AAIAAj1IA4AAIAABdIAPAAIAAhdIA4AAIAAD1g");
	this.shape_7.setTransform(170.675,-4.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggB8QgPgEgNgFIAOgzIATAHQAJADAHAAQAKAAAEgEQAFgEAAgIIAAgBQAAgHgFgIQgFgIgMgMIgKgKQgKgKgIgJQgHgKgEgLQgEgMAAgRIAAAAQABghAQgSQAQgRAcgBQAMAAANADQAOADANAGIgOAvIgQgEIgLgCQgJAAgFAEQgEAEAAAIIAAABQAAAGAFAHIAOAQIAGAFIAGAGQAKAKAHAJQAIAKAEAMQAEAMAAASQAAAXgIAQQgIAQgOAIQgPAJgSAAQgQAAgOgDg");
	this.shape_8.setTransform(157.175,-4.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AASB7IgEgwIgaAAIgFAwIg4AAIAhj1IBRAAIAgD1gAAIAXIgHhBIgBgVIAAAVIgHBBIAPAAg");
	this.shape_9.setTransform(142.8,-4.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgrBsQgTgTABglIAAhoQgBgkATgTQARgTAjAAQAOAAAMACQAMADALAFIgUAtIgKgCIgKAAQgLAAgGAHQgEAHgBANIAABdQAAAOAGAGQAIAHALAAIAKgBIALgDIAVAtQgNAGgMADQgNADgQAAQgjAAgRgTg");
	this.shape_10.setTransform(128.9,-4.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhAB7IAAj1IA8AAQATAAAQAJQAQAIAJARQAJAQAAAWIAABjQAAAXgJARQgJAQgQAJQgQAJgSAAgAgIBGIACAAQAIAAADgEQACgEAAgKIAAhqQAAgJgDgDQgEgDgGAAIgCAAg");
	this.shape_11.setTransform(110.375,-4.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag1B7IAAj1IBrAAIAAA0Ig0AAIAAAqIArAAIAAA0IgrAAIAAAvIA0AAIAAA0g");
	this.shape_12.setTransform(97.15,-4.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag2B7IAAj1IBsAAIAAA0Ig0AAIAAAqIAqAAIAAA0IgqAAIAAAvIA1AAIAAA0g");
	this.shape_13.setTransform(85.05,-4.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbB7IAAi9IgjAAIAAg4IB9AAIAAA4IgjAAIAAC9g");
	this.shape_14.setTransform(72.225,-4.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAAB7IgQibIAACbIg4AAIAAj1IBJAAIAQCXIAAiXIA4AAIAAD1g");
	this.shape_15.setTransform(57.65,-4.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AASB7IgEgwIgaAAIgFAwIg3AAIAgj1IBRAAIAgD1gAAIAXIgHhBIgBgVIAAAVIgHBBIAPAAg");
	this.shape_16.setTransform(41.45,-4.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAKB7IgSheIgFAAIAABeIg4AAIAAj1IA9AAQAaAAAPAJQAQAIAFAPQAGAQABAUIAAASQgBATgFANQgEALgJAIIAcBsgAgNgPIADAAQAIAAACgDQADgEgBgIIAAgYQABgIgDgDQgCgEgIAAIgDAAg");
	this.shape_17.setTransform(25.6,-4.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AASB7IgEgwIgaAAIgFAwIg4AAIAhj1IBRAAIAgD1gAAIAXIgHhBIgBgVIAAAVIgHBBIAPAAg");
	this.shape_18.setTransform(9.7,-4.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AghB2QgOgHgJgPQgIgOAAgWIAAi4IA5AAIAAC5QAAAGACACQACADAEAAQADAAACgDQACgCAAgGIAAi5IA5AAIAAC4QABATgIAPQgHAPgOAIQgOAIgWAAQgTAAgPgHg");
	this.shape_19.setTransform(-6,-4.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgwBtQgQgRAAghIAAh0QAAgWAKgPQAJgQAQgIQAQgIAVAAQAOAAAPAEQAPAEANAIIgUAwQgHgDgIgCQgIgCgIgBQgLABgEAFQgGAHAAAMIAABrQAAAGACADQADADADgBIAFAAIACgBIAAhYIA1AAIAAB9IgTAKQgJAEgJACQgKACgMAAQgiAAgQgSg");
	this.shape_20.setTransform(-20.65,-4.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag8B9IAAgyQARgTAQgVQAQgWAKgUQAKgUAAgRIAAgCQAAgKgEgFQgDgFgFgCQgFgCgGAAQgJAAgIACIgOAEIgRguQAKgGAQgEQAQgEATAAQAVAAAOAKQAPALAHARQAIARAAAUIAAABQgBATgGARQgFAQgKAPQgJAPgLAOIgUAZIA3AAIAAA0g");
	this.shape_21.setTransform(-39.05,-4.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPB9IAAi4IgZAHIAAg1IBRgTIAAD5g");
	this.shape_22.setTransform(-51.775,-4.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFE400").s().p("AgPBbQgHgDgEgGQgEgHgBgKQABgMAIgIQAJgHANgBQAOABAIAHQAKAIAAAMQAAAKgFAHQgEAGgHADQgHADgJAAQgHAAgIgDgAgPgoQgHgDgEgGQgEgHgBgJQABgNAIgIQAJgHANAAQAOAAAIAHQAKAIAAANQAAAJgFAHQgEAGgHADQgHADgJAAQgHAAgIgDg");
	this.shape_23.setTransform(-64.85,-0.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFE400").s().p("AggB8QgPgEgNgFIAOgzIATAHQAJADAHAAQAKAAAEgEQAFgEAAgIIAAgBQAAgHgFgIQgFgIgMgMIgKgKQgKgKgIgJQgHgKgEgLQgEgMAAgRIAAAAQABghAQgSQAQgRAcgBQAMAAANADQAOADANAGIgOAvIgQgEIgLgCQgJAAgFAEQgEAEAAAIIAAABQAAAGAFAHIAOAQIAGAFIAGAGQAKAKAHAJQAIAKAEAMQAEAMAAASQAAAXgIAQQgIAQgOAIQgPAJgSAAQgQAAgOgDg");
	this.shape_24.setTransform(-75.675,-4.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE400").s().p("AALB7IgUheIgEAAIAABeIg4AAIAAj1IA8AAQAbAAAPAJQAPAIAHAPQAFAQAAAUIAAASQAAATgEANQgFALgJAIIAcBsgAgNgPIADAAQAHAAADgDQADgEAAgIIAAgYQAAgIgDgDQgCgEgIAAIgDAAg");
	this.shape_25.setTransform(-90,-4.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFE400").s().p("Ag2B7IAAj1IBsAAIAAA0Ig0AAIAAAqIAqAAIAAA0IgqAAIAAAvIA0AAIAAA0g");
	this.shape_26.setTransform(-103.7,-4.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFE400").s().p("AAAB7IgQibIAACbIg4AAIAAj1IBJAAIAPCXIAAiXIA5AAIAAD1g");
	this.shape_27.setTransform(-118.2,-4.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFE400").s().p("AAAB7IgQibIAACbIg4AAIAAj1IBJAAIAQCXIAAiXIA4AAIAAD1g");
	this.shape_28.setTransform(-134.6,-4.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFE400").s().p("AgbB7IAAj1IA3AAIAAD1g");
	this.shape_29.setTransform(-146.575,-4.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFE400").s().p("AALB7IgLiTIgKCTIhIAAIgTj1IA8AAIADC8IAQi8IAtAAIAQC8IADi8IA8AAIgSD1g");
	this.shape_30.setTransform(-161.075,-4.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFE400").s().p("Ag2B7IAAj1IBsAAIAAA0Ig0AAIAAAqIAqAAIAAA0IgqAAIAAAvIA0AAIAAA0g");
	this.shape_31.setTransform(-181.55,-4.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFE400").s().p("AAIB7IAAhhIgPAAIAABhIg4AAIAAj1IA4AAIAABdIAPAAIAAhdIA4AAIAAD1g");
	this.shape_32.setTransform(-195.275,-4.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFE400").s().p("AgbB7IAAi9IgjAAIAAg4IB9AAIAAA4IgjAAIAAC9g");
	this.shape_33.setTransform(-208.775,-4.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFE400").s().p("AAAB7IgQibIAACbIg4AAIAAj1IBJAAIAQCXIAAiXIA4AAIAAD1g");
	this.shape_34.setTransform(-227.3,-4.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFE400").s().p("AgbB7IAAj1IA3AAIAAD1g");
	this.shape_35.setTransform(-239.275,-4.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFE400").s().p("AAAB/QgfAAgRgSQgQgRgBghIAAh0QABgjARgRQARgRAeAAIABAAQAgAAAQASQAQASAAAhIAAB0QAAAigRARQgQARgfAAgAgFhGQgCADABAFIAAB9QgBAGACACQACADADAAQAEAAACgDQACgCAAgGIAAh9QAAgGgCgCQgCgDgEAAIAAAAQgEAAgBADg");
	this.shape_36.setTransform(-250.45,-4.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFE400").s().p("AgeB5QgNgDgPgIIAUgxIAOAGIALABQAJAAADgEQADgGAAgLIAAirIA5AAIAAC1QAAAggRASQgRASgdAAQgLAAgPgEg");
	this.shape_37.setTransform(-265.05,-4.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-272.2,-23.9,544.5,46.5), null);


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


(lib.other_prize_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-133,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.other_prize_mc, new cjs.Rectangle(-133,-41.5,266,83), null);


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
	this.instance = new lib._18();
	this.instance.setTransform(281,233,0.735,0.735);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAsIgGgBIgEAAIgBgTIAJACIAGABIAGgBQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIADgHIgCABIgCAAQgFAAgFgCQgEgCgCgFQgCgFABgGIAJgqIATAAIgIApIAAACIADABIAAAAIABAAIAEgWIAFgWIATAAIgNA/QgDAOgGAGQgHAGgMAAIgFgBg");
	this.shape.setTransform(273.45,240.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAtIAShZIATAAIgTBZg");
	this.shape_1.setTransform(269.675,238.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAtIgLgCIAThXIASAAIgFAWIADAAQAMAAAEAFQAEAHgDALIgEAUQgDANgGAGQgHAFgKAAIgLAAgAgDAbIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBABAAIACgGIAEgSQABgDgBgBQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape_2.setTransform(265.2981,238.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAvIANhAIATAAIgOBAgAABgcQgBgDAAgFQABgEADgEQADgCAEAAQAEAAACACQACAEgBAEQgBAFgDADQgDACgEAAQgEAAgCgCg");
	this.shape_3.setTransform(261.52,237.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAiIgKgCIAFgTIAIACIAHABIAFAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIgCgCIgCgBIgCgBQgGgDgDgEQgCgGACgIQABgFADgFQADgEAFgDQAEgCAHAAIAHAAIAKACIgGASIgGgCIgGAAIgEAAIgCACIABADIADACIABABIACAAIAHAFQADACABADIAAAJQgCAHgDAEQgDAGgGACQgGAEgIAAIgHgBg");
	this.shape_4.setTransform(257.525,239.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAiIAJgtQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgCABIgBAAIgJAwIgUAAIAOg/IANgDIAJgBQALAAAEAFQAFAFgCAKIgKAvg");
	this.shape_5.setTransform(252.5058,239.1727);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAcQgDgGACgMIAEgTQADgMAGgHQAHgGAKABQALgBAFAGQADAHgCAMIgEATQgDAMgGAGQgIAGgJAAQgMAAgEgGgAABgOIgBAFIgDATIgBAFQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIABgEIADgTIABgFIgBgBQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAg");
	this.shape_6.setTransform(247.5,239.2231);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAuIAThaIAIAAIAHgBIAGAAQAMAAAEAGQAEAGgCANIgEATQgDAMgHAGQgGAGgLAAIgCAAIgFAXgAgBAEIABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIACgEIAEgTQABgEgBgBQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgCAAg");
	this.shape_7.setTransform(241.9231,240.3981);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAiIgKgCIAFgTIAIACIAHABIAFAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIgCgCIgCgBIgCgBQgGgDgDgEQgCgGACgIQABgFADgFQADgEAFgDQAEgCAHAAIAHAAIAKACIgGASIgGgCIgGAAIgEAAIgCACIABADIADACIABABIACAAIAHAFQADACABADIAAAJQgCAHgDAEQgDAGgGACQgGAEgIAAIgHgBg");
	this.shape_8.setTransform(237.275,239.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAcQgFgGACgNIAEgSQADgNAHgGQAGgGALABQAKgBAEAGQAEAGgDANIgDAPIgXAAIAAADQgBADACACQACACAEAAIAEAAIAFgBIgCASIgIABIgFAAQgNAAgFgGgAACgPIgCAEIAAAFIAEAAIABgFIABgEQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIgBAAIgBABg");
	this.shape_9.setTransform(232.6604,239.2231);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAtIAAgiIgCAAIgHAiIgUAAIAThZIAVAAQAKAAAFADQAEADACAGQABAFgCAIIgBAGQgCAHgCAFIgHAGIACAogAAAgFIABAAIAEgBIACgFIACgIQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_10.setTransform(227.1167,238.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAsIgGgBIgFAAIgBgTIAJACIAHABIAGgBQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAIADgHIgCABIgBAAQgHAAgDgCQgFgCgCgFQgDgFADgGIAIgqIATAAIgIApIAAACIACABIABAAIABAAIAEgWIAFgWIAUAAIgOA/QgCAOgIAGQgGAGgMAAIgFgBg");
	this.shape_11.setTransform(220.15,240.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAdQgEgFACgKIAAgBQACgJAHgFQAGgFAKAAIABAAIACAAIABgCQAAgEgBgCQgBgBgEAAIgHABIgIACIAJgTIAEgBIAEgBIAFAAQAJAAAEACQAFADABAFQABAFgBAHIgJAqIgMACIgLABQgKAAgFgFgAgCAHQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABIAAACQAAAAAAABQAAAAAAABQAAABAAAAQAAAAAAABIADABIABAAIABgMIgBAAIgCABg");
	this.shape_12.setTransform(214.8867,239.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAtIAShZIATAAIgTBZg");
	this.shape_13.setTransform(211.175,238.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeAtIAThZIAVAAQAKAAAFADQAEADABAGQACAFgCAIIgCAHQgCAKgEAFQgEAEgHADQgGACgGAAIgCAAIgHAhgAAAgEIABAAIADgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAgBIACgJQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBAAg");
	this.shape_14.setTransform(206.8571,238.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAqIAAgYIgQg7IATAAIAFAcIAGgcIATAAIgPA7IAAAYg");
	this.shape_15.setTransform(104.175,238.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAqIAAhTIASAAIAABAIAUAAIAAATg");
	this.shape_16.setTransform(99.2,238.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAUAAQAJAAAFAEQAFACACAGQACAEAAAIIAAAHQAAAIgDAEQgDAFgFACQgGACgGAAIgBAAIAAAfgAgCgEIABAAIADgBIABgDIAAgJIgBgFIgDgBIgBAAg");
	this.shape_17.setTransform(94.48,238.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAUAAQAJAAAFAEQAFACACAGQACAEAAAIIAAAHQAAAIgDAEQgDAFgFACQgGACgGAAIgBAAIAAAfgAgCgEIABAAIADgBIABgDIAAgJIgBgFIgDgBIgBAAg");
	this.shape_18.setTransform(89.48,238.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAGAqIgBgQIgJAAIgBAQIgTAAIALhTIAbAAIALBTgAADAIIgDgWIAAgGIAAAGIgCAWIAFAAg");
	this.shape_19.setTransform(84.325,238.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKAqIgJgDIAEgRIAHACIAFABIAEgBQAAgBABAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgGIgDgEIgGgGIgEgHQgBgEAAgFIAAgBQAAgKAFgGQAGgGAIgBIAJABIAJADIgFAQIgFgBIgEgBQgDAAgBACQgBAAAAABQAAAAAAAAQAAABAAABQAAAAAAABIABAEIAEAGIADABIACACIAGAGIADAHIABALQABAHgDAGQgDAFgFADQgEADgGAAIgKgBg");
	this.shape_20.setTransform(78.15,238.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFASIgDgjIARAAIgDAjg");
	this.shape_21.setTransform(74.65,236.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOAlQgGgHAAgMIAAgjQAAgMAGgGQAGgHALAAIAJABIAHADIgGAPIgEgBIgDAAQgEAAgCADQgBACAAAEIAAAfQABAEABADQACACAEAAIADAAIAFgBIAGAPIgIADIgKABQgLAAgGgGg");
	this.shape_22.setTransform(71.35,238.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWAmQgGgGAAgLIAAgKQAAgGADgEQACgCAFgBIgDgHIgBgGIAAgGQAAgHACgFQABgEAEgDQAEgCAIAAQAFAAADACQAEACABAFQACAFAAAHIAAAFIgBAGQgBAEgCACQgDADgEABIAHAKIgBgFIAAgFIAPAAIAAALIgBAIIgDAHIALAQIgTAAIgCgDIgFADIgGABQgNAAgGgFgAgKANIAAADIAAACQAAAFACACQACACAEAAIABAAIABgBIgKgPgAgFgYIgBADIAAAJIAAACIAAABIADgCIABgEIAAgGIAAgDIgCgBQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAg");
	this.shape_23.setTransform(65.725,238.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAqIAAhAIgLAAIAAgTIApAAIAAATIgMAAIAABAg");
	this.shape_24.setTransform(60.325,238.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHA1IAAhpIAPAAIAABpg");
	this.shape_25.setTransform(52.625,239.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKApIgKgEIAHgPIAFACIAGABQAAAAABAAQABAAAAAAQAAgBAAAAQAAAAAAgBIABgFIAAgHIAAgFQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBgBAAQgCgBgEAAIgFABIgEABIAFgtIAeAAIAAASIgMAAIgBAKQAHABAEAGQAEAFAAAKIAAAKQAAALgGAGQgFAGgKAAIgKgBgAAAgMIABgBg");
	this.shape_26.setTransform(44.5,238.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKApQgFgDgDgFQgDgEAAgIIAAgJIABgFIAAgEIABgDIAIgVIAIgVIARAAIgGAPIgGAPIAAAAIABAAQAKAAAEAGQAFAFgBAJIAAAKQAAAIgCAFQgDAGgEADQgFADgHAAQgFAAgFgCgAAAADIgBACIAAARIABADIAAAAIACgBIAAgCIAAgRIAAgBIgCgBIAAAAg");
	this.shape_27.setTransform(39.5025,238.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUAqIAAgRIAMgNIAIgNQADgHAAgGIAAgBQAAgDgBgCQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAIgDgBIgGABIgEABIgHgPIAJgEQAGgBAGAAQAHAAAFADQAEAEADAGQACAFAAAHIAAABIgBAMQgCAEgEAFIgHAKIgGAJIASAAIAAARg");
	this.shape_28.setTransform(34.75,238.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgKAqIgKgDIAGgRIAGACIAFABIAEgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgGIgDgEIgGgGIgEgHQgCgEAAgFIAAgBQABgKAFgGQAFgGAKgBIAIABIAJADIgFAQIgFgBIgEgBQgDAAgBACQgBAAAAABQAAAAAAAAQAAABAAABQgBAAAAABIACAEIAEAGIACABIADACIAFAGIAFAHIABALQgBAHgCAGQgDAFgEADQgGADgFAAIgKgBg");
	this.shape_29.setTransform(28.9,238.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRAqIAAhTIAjAAIAAASIgRAAIAAAPIAOAAIAAAQIgOAAIAAAQIARAAIAAASg");
	this.shape_30.setTransform(24.775,238.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAqIAAhTIASAAIAABTg");
	this.shape_31.setTransform(21.4,238.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAEAqIgGggIgBAAIAAAgIgTAAIAAhTIAUAAQAIAAAGAEQAEACACAGQADAEAAAIIAAAGQAAAGgCAEQgCAEgDACIAJAlgAgDgFIABAAIACgBIABgDIAAgIIgBgFIgCgBIgBAAg");
	this.shape_32.setTransform(17.45,238.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRAqIAAhTIAjAAIAAASIgRAAIAAAPIAOAAIAAAQIgOAAIAAAQIARAAIAAASg");
	this.shape_33.setTransform(12.875,238.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgKAqIgKgDIAGgRIAGACIAFABIAEgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgGIgDgEIgGgGIgEgHQgCgEAAgFIAAgBQABgKAFgGQAFgGAKgBIAIABIAJADIgFAQIgFgBIgEgBQgDAAgBACQgBAAAAABQAAAAAAAAQAAABAAABQgBAAAAABIACAEIAEAGIACABIADACIAFAGIAFAHIABALQgBAHgCAGQgCAFgFADQgGADgFAAIgKgBg");
	this.shape_34.setTransform(8.55,238.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(141));

	// footer_bg
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5050F").s().p("A4uBuIAAjbMAxdAAAIAADbg");
	this.shape_35.setTransform(149.9,238.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(141));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(149.85,19,0.4261,0.4261,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(108).to({alpha:0},16).wait(17));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(149.85,198.4,0.2992,0.2992,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(124).to({_off:false},0).wait(1).to({regX:-0.3,regY:87.2,x:149.7,y:224.35,alpha:0.0032},0).wait(1).to({y:224.15,alpha:0.0145},0).wait(1).to({y:223.75,alpha:0.0371},0).wait(1).to({y:223,alpha:0.077},0).wait(1).to({y:221.7,alpha:0.1467},0).wait(1).to({y:219.5,alpha:0.2672},0).wait(1).to({y:216.75,alpha:0.4164},0).wait(1).to({y:214,alpha:0.5648},0).wait(1).to({y:211.7,alpha:0.6887},0).wait(1).to({y:209.9,alpha:0.7859},0).wait(1).to({y:208.5,alpha:0.8625},0).wait(1).to({y:207.4,alpha:0.9229},0).wait(1).to({y:206.65,alpha:0.9628},0).wait(1).to({y:206.25,alpha:0.9857},0).wait(1).to({y:206.05,alpha:0.9969},0).wait(1).to({regX:0.1,regY:0.1,x:149.85,y:179.95,alpha:1},0).wait(1));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(-131.2,112.6,0.4156,0.4156,0,0,0,-0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(108).to({_off:false},0).wait(1).to({regX:-0.4,regY:0.3,x:-130.35,y:112.65},0).wait(1).to({x:-127.2},0).wait(1).to({x:-120.85,y:112.7},0).wait(1).to({x:-109.65,y:112.8},0).wait(1).to({x:-90.05,y:112.9},0).wait(1).to({x:-56.2,y:113.15},0).wait(1).to({x:-14.25,y:113.45},0).wait(1).to({x:27.4,y:113.75},0).wait(1).to({x:62.25,y:114},0).wait(1).to({x:89.55,y:114.2},0).wait(1).to({x:111.05,y:114.35},0).wait(1).to({x:128.05,y:114.45},0).wait(1).to({x:139.25,y:114.55},0).wait(1).to({x:145.7,y:114.6},0).wait(1).to({x:148.85},0).wait(1).to({regX:0.1,regY:0.1,x:149.85},0).wait(17));

	// sub_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(148.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:-1.4,regY:-4.2,x:147.55,y:219.4,alpha:0.0037},0).wait(1).to({y:219.25,alpha:0.0167},0).wait(1).to({y:218.95,alpha:0.0435},0).wait(1).to({y:218.45,alpha:0.0919},0).wait(1).to({x:147.5,y:217.5,alpha:0.1816},0).wait(1).to({x:147.45,y:215.95,alpha:0.3248},0).wait(1).to({x:147.4,y:214.25,alpha:0.4878},0).wait(1).to({x:147.35,y:212.65,alpha:0.6345},0).wait(1).to({x:147.3,y:211.45,alpha:0.7499},0).wait(1).to({y:210.5,alpha:0.8388},0).wait(1).to({x:147.25,y:209.75,alpha:0.9088},0).wait(1).to({y:209.25,alpha:0.9564},0).wait(1).to({y:208.95,alpha:0.9834},0).wait(1).to({y:208.8,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:148.05,y:211.05,alpha:1},0).wait(19).to({x:148.4,y:211.25},0).wait(1).to({regX:-1.4,regY:-4.2,x:147.6,y:209,alpha:0.9963},0).wait(1).to({y:209.15,alpha:0.9833},0).wait(1).to({y:209.45,alpha:0.9565},0).wait(1).to({y:209.95,alpha:0.9081},0).wait(1).to({y:210.85,alpha:0.8184},0).wait(1).to({y:212.35,alpha:0.6752},0).wait(1).to({y:214.05,alpha:0.5122},0).wait(1).to({y:215.6,alpha:0.3655},0).wait(1).to({y:216.8,alpha:0.2501},0).wait(1).to({y:217.75,alpha:0.1612},0).wait(1).to({y:218.45,alpha:0.0912},0).wait(1).to({y:218.95,alpha:0.0436},0).wait(1).to({y:219.25,alpha:0.0166},0).wait(1).to({y:219.4,alpha:0.0036},0).wait(1).to({regX:0.1,regY:0.1,x:148.4,y:221.7,alpha:0},0).wait(77));

	// other_prize
	this.instance_5 = new lib.other_prize_mc();
	this.instance_5.setTransform(149.85,221.1,0.3828,0.3828,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(57).to({_off:false},0).wait(1).to({regX:0,regY:0,x:149.8,y:221.0078,alpha:0.0037},0).wait(1).to({y:220.8583,alpha:0.0167},0).wait(1).to({y:220.5524,alpha:0.0435},0).wait(1).to({y:219.9982,alpha:0.0919},0).wait(1).to({y:218.9711,alpha:0.1816},0).wait(1).to({y:217.3311,alpha:0.3248},0).wait(1).to({y:215.465,alpha:0.4878},0).wait(1).to({y:213.7855,alpha:0.6345},0).wait(1).to({y:212.4635,alpha:0.7499},0).wait(1).to({y:211.4458,alpha:0.8388},0).wait(1).to({y:210.6446,alpha:0.9088},0).wait(1).to({y:210.0993,alpha:0.9564},0).wait(1).to({y:209.7897,alpha:0.9834},0).wait(1).to({y:209.6412,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:149.85,y:209.65,alpha:1},0).wait(37).to({regX:0,regY:0,x:150.4733,y:209.5923},0).wait(1).to({x:152.8283,y:209.5653},0).wait(1).to({x:157.5675,y:209.5109},0).wait(1).to({x:165.9144,y:209.4152},0).wait(1).to({x:180.4997,y:209.2479},0).wait(1).to({x:205.7019,y:208.9588},0).wait(1).to({x:236.9374,y:208.6006},0).wait(1).to({x:267.9896,y:208.2444},0).wait(1).to({x:293.9146,y:207.9471},0).wait(1).to({x:314.2581,y:207.7137},0).wait(1).to({x:330.2755,y:207.53},0).wait(1).to({x:342.9216,y:207.385},0).wait(1).to({x:351.2719,y:207.2892},0).wait(1).to({x:356.0593,y:207.2343},0).wait(1).to({x:358.3929,y:207.2075},0).wait(1).to({regX:0.1,regY:0.1,x:359.1,y:207.25},0).wait(17));

	// second_prize
	this.instance_6 = new lib.second_prize_mc();
	this.instance_6.setTransform(150,133.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(57).to({_off:false},0).wait(1).to({y:133.2373,alpha:0.0037},0).wait(1).to({y:133.0154,alpha:0.0167},0).wait(1).to({y:132.5612,alpha:0.0435},0).wait(1).to({y:131.7384,alpha:0.0919},0).wait(1).to({y:130.2134,alpha:0.1816},0).wait(1).to({y:127.7785,alpha:0.3248},0).wait(1).to({y:125.0078,alpha:0.4878},0).wait(1).to({y:122.5143,alpha:0.6345},0).wait(1).to({y:120.5515,alpha:0.7499},0).wait(1).to({y:119.0405,alpha:0.8388},0).wait(1).to({y:117.851,alpha:0.9088},0).wait(1).to({y:117.0413,alpha:0.9564},0).wait(1).to({y:116.5816,alpha:0.9834},0).wait(1).to({y:116.3612,alpha:0.9964},0).wait(1).to({y:116.3,alpha:1},0).wait(37).to({x:150.7598,y:116.3047},0).wait(1).to({x:153.4175,y:116.321},0).wait(1).to({x:158.7661,y:116.3538},0).wait(1).to({x:168.186,y:116.4117},0).wait(1).to({x:184.6463,y:116.5127},0).wait(1).to({x:213.0883,y:116.6874},0).wait(1).to({x:248.3392,y:116.9038},0).wait(1).to({x:283.3834,y:117.119},0).wait(1).to({x:312.6411,y:117.2986},0).wait(1).to({x:335.5999,y:117.4396},0).wait(1).to({x:353.6764,y:117.5506},0).wait(1).to({x:367.9482,y:117.6382},0).wait(1).to({x:377.372,y:117.6961},0).wait(1).to({x:382.7748,y:117.7293},0).wait(1).to({x:385.4084,y:117.7454},0).wait(1).to({x:386.15,y:117.75},0).wait(17));

	// promo
	this.instance_7 = new lib.promo_mc();
	this.instance_7.setTransform(295.65,116.65,0.4337,0.4337,0,0,0,0.1,0);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0,x:295.0622,alpha:0.0037},0).wait(1).to({x:293.1593,alpha:0.0167},0).wait(1).to({x:289.2635,alpha:0.0435},0).wait(1).to({x:282.207,alpha:0.0919},0).wait(1).to({x:269.1282,alpha:0.1816},0).wait(1).to({x:248.2446,alpha:0.3248},0).wait(1).to({x:224.4825,alpha:0.4878},0).wait(1).to({x:203.0965,alpha:0.6345},0).wait(1).to({x:186.263,alpha:0.7499},0).wait(1).to({x:173.3039,alpha:0.8388},0).wait(1).to({x:163.102,alpha:0.9088},0).wait(1).to({x:156.1575,alpha:0.9564},0).wait(1).to({x:152.2151,alpha:0.9834},0).wait(1).to({x:150.3252,alpha:0.9964},0).wait(1).to({regX:0.1,x:149.85,alpha:1},0).to({_off:true},57).wait(69));

	// background
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5050F").s().p("A4uTiMAAAgnDMAxdAAAMAAAAnDg");
	this.shape_36.setTransform(149.85,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(141));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-104.2,125,568.4,125);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_18.jpg", id:"_18"},
		{src:"images/_2ndprize.jpg", id:"_2ndprize"},
		{src:"images/consolation.jpg", id:"consolation"},
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