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
	this.shape.graphics.f("#FFE400").s().p("AglDGQgPgMAAgYQAAgVAPgMQAPgNAWAAQAXAAAQANQAPAMAAAVQAAAYgPAMQgQAMgXAAQgWAAgPgMgAgvBHIAAkYIBfAAIAAEYg");
	this.shape.setTransform(112.6,-312.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AARDPIggieIgHAAIAACeIhfAAIAAmdIBmAAQBBAAAaAeQAZAdAAA4IAAAeQAAA8geAaIAvC2gAgWgaIAFAAQAMAAAFgGQAFgFAAgOIAAgoQAAgNgFgHQgFgFgMAAIgFAAg");
	this.shape_1.setTransform(89.475,-313.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AAfDPIgIhQIgtAAIgHBQIhdAAIA3mdICIAAIA3GdgAgBhIIgLBuIAaAAIgLhuIgDgig");
	this.shape_2.setTransform(62.8,-313.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AhbDPIAAmdIC2AAIAABYIhYAAIAABHIBHAAIAABXIhHAAIAABPIBZAAIAABYg");
	this.shape_3.setTransform(39.775,-313.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AguDPIAAh2IhQknIBjAAIAbCLIAciLIBiAAIhPEnIAAB2g");
	this.shape_4.setTransform(15.9,-313.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AhbDPIAAmdIC2AAIAABYIhYAAIAABHIBHAAIAABXIhHAAIAABPIBZAAIAABYg");
	this.shape_5.setTransform(-13.525,-313.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AANDPIAAijIgZAAIAACjIhfAAIAAmdIBfAAIAACdIAZAAIAAidIBfAAIAAGdg");
	this.shape_6.setTransform(-36.55,-313.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AguDPIAAk/Ig7AAIAAheIDSAAIAABeIg6AAIAAE/g");
	this.shape_7.setTransform(-59.2,-313.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AhdDPIAAmdIC7AAIAABYIhdAAIAABHIBNAAIAABXIhNAAIAACng");
	this.shape_8.setTransform(-86.55,-313.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AABDVQg2AAgcgdQgcgeAAg3IAAjEQAAg5AdgdQAcgdA0AAIABAAQA2AAAcAdQAbAeAAA4IAADEQAAA5gcAdQgdAcg0AAgAgMhpIAADTQAAASAMAAIABAAQAMAAAAgSIAAjTQAAgRgNAAIAAAAQgMAAAAARg");
	this.shape_9.setTransform(-109.95,-313.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AANDPIAAijIgZAAIAACjIhfAAIAAmdIBfAAIAACcIAZAAIAAicIBfAAIAAGdg");
	this.shape_10.setTransform(91.35,-379.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AhmDBIAZhVQAoAQARAAQAhAAAAgaIAAgDQAAgMgIgNQgIgMgUgUIgSgSQgegbgMgZQgNgaAAgmIAAgBQAAg2AcgfQAcgeAvAAQAoAAAwATIgZBQQgegKgOABQgggBAAAbIAAABIACAIIACAHIAFAHIAGAHIAJAJIAJAKIAUAVQAeAdANAYQANAYAAAqIAAAAQAAA4gdAgQgeAggwAAQgxAAgxgUg");
	this.shape_11.setTransform(68.75,-379.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AAfDPIgIhQIgtAAIgIBQIhcAAIA3mdICIAAIA2GdgAgBhIIgLBuIAaAAIgLhuIgCgig");
	this.shape_12.setTransform(44.55,-379.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AAODVQg5AAgfgfQgeggAAg+IAAivQAAg+AeggQAfgfA5AAIABAAQAsAAAmARIgiBMQgPgEgSAAIAAAAQgkAAAAAtIAACdQAAAWAKAMQAMAMATAAIABAAQAQAAAUgIIAhBMQgqAUgwAAg");
	this.shape_13.setTransform(21.25,-379.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AAeDPIgHhQIgtAAIgHBQIheAAIA3mdICJAAIA3GdgAgBhIIgLBuIAaAAIgMhuIgCgig");
	this.shape_14.setTransform(-10.75,-379.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AhtBiIAAjDQAAg1AjgfQAhgfA2gBQAzAAAuAaIgiBSQgYgNgcAAQgkAAABAqIAAC1QAAATANAAQAHAAAEgCIAAiVIBaAAIAADTQgdAQgVAHQgWAGgbABQhxAAAAh0g");
	this.shape_15.setTransform(-35.75,-379.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("AhbDPIAAmdIC2AAIAABZIhYAAIAABGIBHAAIAABXIhHAAIAABPIBZAAIAABYg");
	this.shape_16.setTransform(-57.925,-379.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("ABEDPIAAk1IgFAvIgbEGIhHAAIgckGIgEgvIAAE1IhcAAIAAmdICQAAIAODFIABAdIACgdIAPjFICPAAIAAGdg");
	this.shape_17.setTransform(-86.125,-379.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AguDPIAAlAIg6AAIAAhdIDRAAIAABdIg5AAIAAFAg");
	this.shape_18.setTransform(100.25,-445.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhmDBIAZhVQAoAQARAAQAhAAAAgaIAAgDQAAgLgIgNQgIgNgUgVIgSgRQgegcgMgZQgNgZAAgmIAAgBQAAg2AcgeQAcgfAvAAQAoAAAwATIgZBPQgegJgOAAQggABAAAaIAAABIACAHIACAIIAFAHIAGAHIAJAJIAJALIAUAUQAeAcANAZQANAYAAApIAAABQAAA4gdAgQgeAggwAAQgxAAgxgUg");
	this.shape_19.setTransform(78.65,-445.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhbDPIAAmdIC2AAIAABZIhYAAIAABGIBHAAIAABXIhHAAIAABPIBZAAIAABYg");
	this.shape_20.setTransform(58.175,-445.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhtBiIAAjDQAAg1AiggQAjgeA1AAQAzAAAuAaIgiBSQgYgOgcAAQgkAAAAAqIAAC0QAAAUAOAAQAHAAAEgCIAAiVIBZAAIAADTQgcAQgVAHQgVAGgdAAQhwABAAh0g");
	this.shape_21.setTransform(35.85,-445.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhtBiIAAjDQAAg1AiggQAjgeA1AAQAzAAAuAaIgiBSQgYgOgcAAQgkAAAAAqIAAC0QAAAUAOAAQAHAAAEgCIAAiVIBaAAIAADTQgdAQgVAHQgWAGgbAAQhxABAAh0g");
	this.shape_22.setTransform(11.7,-445.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgvDPIAAmdIBfAAIAAGdg");
	this.shape_23.setTransform(-7.1,-445.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhuDPIAAmdIBpAAQAzAAAeAZQAeAZAAA0IAAAKQAAAggKATQgKAVgXAJQAwARAABEIAAAaQAAA1gdAcQgeAcgyAAgAgPB1IAGAAQALAAAEgFQAFgGAAgMIAAgoQAAgMgFgGQgEgGgLAAIgGAAgAgPgtIAIAAQAKAAAFgGQAEgFAAgMIAAgYQAAgNgEgFQgEgGgLAAIgIAAg");
	this.shape_24.setTransform(-25.725,-445.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhbDPIAAmdIC2AAIAABZIhYAAIAABGIBHAAIAABXIhHAAIAABPIBZAAIAABYg");
	this.shape_25.setTransform(-54.575,-445.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AANDPIAAijIgZAAIAACjIhfAAIAAmdIBfAAIAACcIAZAAIAAicIBfAAIAAGdg");
	this.shape_26.setTransform(-77.6,-445.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AguDPIAAlAIg6AAIAAhdIDRAAIAABdIg5AAIAAFAg");
	this.shape_27.setTransform(-100.25,-445.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-124.4,-477.9,248.9,209.2), null);


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
	this.instance = new lib._2ndprize();
	this.instance.setTransform(-139,-123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.secondprize_mc, new cjs.Rectangle(-139,-123.5,278,247), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgnDUQgRgNgBgZQABgWARgOQAPgOAYAAQAZAAAQAOQAQAOABAWQgBAZgQANQgQANgZAAQgYAAgPgNgAgxBMIAAksIBkAAIAAEsg");
	this.shape.setTransform(82.7,-373.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAODeIAAivIgbAAIAACvIhmAAIAAm7IBmAAIAACoIAbAAIAAioIBmAAIAAG7g");
	this.shape_1.setTransform(58.925,-374.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyDeIAAlXIg/AAIAAhkIDjAAIAABkIg/AAIAAFXg");
	this.shape_2.setTransform(34.6,-374.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAADlQg5AAgeggQgeggAAg7IAAjTQAAg9AegfQAfgfA4AAIABAAQA6AAAeAgQAdAgAAA7IAADTQAAA9geAfQgeAfg5AAgAgNhxIAADjQAAATANAAIAAAAQAOAAAAgTIAAjjQAAgTgOAAIAAAAQgNAAAAATg");
	this.shape_3.setTransform(9.5,-374.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah2DeIAAm7IBwAAQA3AAAgAbQAhAbAAA3IAAALQAAAigLAVQgLAVgZALQA0ASAABJIAAAcQAAA5gfAeQggAeg2AAgAgQB+IAGAAQAMAAAEgGQAFgGAAgMIAAgsQAAgNgEgGQgFgGgMAAIgGAAgAgQgxIAIAAQALAAAFgFQAFgGAAgNIAAgaQAAgOgFgGQgEgGgMAAIgIAAg");
	this.shape_4.setTransform(-17.225,-374.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASDeIgiipIgHAAIAACpIhmAAIAAm7IBtAAQBFAAAcAfQAcAgAAA8IAAAgQAABBghAcIAyDDgAgXgcIAFAAQANAAAFgGQAFgGAAgPIAAgrQAAgPgFgGQgFgGgNAAIgFAAg");
	this.shape_5.setTransform(-52.125,-374.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAADlQg5AAgeggQgeggAAg7IAAjTQAAg9AfgfQAfgfA3AAIABAAQA6AAAdAgQAeAgAAA7IAADTQAAA9gfAfQgdAfg5AAgAgNhxIAADjQAAATANAAIAAAAQAOAAAAgTIAAjjQAAgTgOAAIAAAAQgNAAAAATg");
	this.shape_6.setTransform(-79.85,-374.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("Ah1DeIAAm7IBtAAQA2AAAkAjQAkAkgBA8IAACyQABA9gkAlQgkAkg1AAgAgOB+IAEAAQANAAAFgHQAFgGAAgTIAAi/QgBgRgGgGQgEgFgMAAIgEAAg");
	this.shape_7.setTransform(103.3,-442.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AhnDeIAAm7IBmAAIAAFXIBpAAIAABkg");
	this.shape_8.setTransform(77.275,-442.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AAADlQg5AAgeggQgeggAAg7IAAjTQAAg9AegfQAfgfA4AAIABAAQA6AAAeAgQAdAgAAA7IAADTQAAA9geAfQgeAfg5AAgAgNhxIAADjQAAATANAAIAAAAQAOAAAAgTIAAjjQAAgTgOAAIAAAAQgNAAAAATg");
	this.shape_9.setTransform(51.8,-442.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("Ah1BqIAAjTQAAg5AlghQAkghA5AAQA3AAAyAcIgkBXQgagNgeAAQgnAAAAAsIAADCQAAAVAPAAQAHAAAEgDIAAifIBhAAIAADiQgeARgYAIQgWAHgfAAQh4AAAAh7g");
	this.shape_10.setTransform(25.85,-442.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AgyDeIAAh+IhVk9IBqAAIAeCUIAeiUIBpAAIhVE9IAAB+g");
	this.shape_11.setTransform(-8.925,-442.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AhnDeIAAm7IBmAAIAAFXIBpAAIAABkg");
	this.shape_12.setTransform(-35.625,-442.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AgyDeIAAm7IBlAAIAAG7g");
	this.shape_13.setTransform(-54.35,-442.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AAhDeIgIhWIgwAAIgJBWIhjAAIA6m7ICTAAIA6G7gAgBhNIgNB2IAdAAIgMh2IgDglg");
	this.shape_14.setTransform(-75.5,-442.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("Ah0DeIAAm7IBtAAQA2AAAjAjQAkAkAAA8IAACyQAAA9gkAlQgkAkg1AAgAgPB+IAFAAQAOAAAEgHQAFgGgBgTIAAi/QAAgRgFgGQgGgFgLAAIgFAAg");
	this.shape_15.setTransform(-103.2,-442.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-118.6,-477.9,237.3,151.39999999999998), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgIAmIAAgVIgOg1IASAAIAEAYIAFgYIASAAIgOA1IAAAVg");
	this.shape.setTransform(122.875,572.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAQAAIAAA4IARAAIAAASg");
	this.shape_1.setTransform(118.35,572.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAmIAAhKIATAAQALgBAEAGQAFAFAAAKIAAAHQAAAKgGAEQgFAFgJAAIgBAAIAAAcgAgBgDIAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIABgDIAAgJIgBgDQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_2.setTransform(114.075,572.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAmIAAhKIATAAQALgBAEAGQAFAFAAAKIAAAHQAAAKgGAEQgFAFgJAAIgBAAIAAAcgAgBgDIAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIABgDIAAgJIgBgDQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_3.setTransform(109.575,572.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAFAmIgBgPIgHAAIgCAPIgQAAIAJhKIAYAAIAKBKgAAAgMIgCATIAEAAIgCgTIAAgGg");
	this.shape_4.setTransform(104.925,572.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSAjIAFgQQAHADAEAAQAEAAABgEIAAgBIgCgFIgEgFIgDgEQgGgDgCgFQgDgFAAgGIAAgBQABgJAEgGQAFgGAJABQAGAAAJADIgEAOIgIgCQgFAAAAAGIAAABIAAABIAAABIACACIACACIABACIADADIAIAIQACAFAAAIQAAAKgEAFQgGAHgIgBQgJAAgJgDg");
	this.shape_5.setTransform(99.35,572.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAQIgDgfIAPAAIgDAfg");
	this.shape_6.setTransform(96.225,570.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAhQgGgGAAgLIAAgfQAAgLAGgGQAFgGAKABQAIAAAHADIgHANIgFgBQgGABAAAHIAAAcQAAAEABACQACACAEAAIAGgBIAGAOQgHADgJAAQgKAAgFgFg");
	this.shape_7.setTransform(93.2,572.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAiQgFgFgBgKIAAgJQAAgFADgEQADgCAEAAQgEgHABgGIAAgEQgBgLAEgFQAEgDAKAAQAHAAADADQADAFAAALIAAAEQAAALgLADIAHAJIgBgJIAOAAIAAAEIAAAEIAAADIgBAEIAAADIgBACIgBADIAKAPIgSAAIgBgDQgGADgEAAQgMAAgGgEgAgIALIAAAGQgBADACACQABACAFAAIABgBIgIgNgAgFgWIAAABIAAACIAAAJIAAACQAEgBAAgEIAAgGIAAgDIgCgBIgCABg");
	this.shape_8.setTransform(88.15,572.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAmIAAg5IgKAAIAAgRIAlAAIAAARIgKAAIAAA5g");
	this.shape_9.setTransform(83.3,572.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHAwIAAhfIAOAAIAABfg");
	this.shape_10.setTransform(76.3,573.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMAnIAGgOIAGgOIgCABQgQAAAAgSIAAgJQgBgKAGgHQAFgFAIgBQAJABAFAEQAGAFAAAKIAAAJQgBAGgBAEIgPAmgAAAgTIAAAPQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgPQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABg");
	this.shape_11.setTransform(69.05,572.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNAiQgGgGABgJIAAgJQAAgGACgEIANglIAQAAIgFANIgGAOIABgBQAQAAAAATIAAAJQABAJgGAGQgEAHgKgBQgHAAgGgEgAAAAFIAAAPQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgPQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABg");
	this.shape_12.setTransform(64.65,572.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAmIAAgPQAVgXAAgMIAAgBQAAgFgCgBIgEgBIgKABIgFgOQAIgEAKAAQAJAAAFAHQAFAGAAAKQAAAFgBAGIgFAJIgGAIIgHAIIARAAIAAAQg");
	this.shape_13.setTransform(60.325,572.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSAjIAFgQQAHADAEAAQAEAAAAgEIAAgBIgBgFIgEgFIgEgEQgFgDgCgFQgCgFgBgGIAAgBQAAgJAGgGQAFgGAHABQAIAAAIADIgEAOIgIgCQgFAAAAAGIAAABIAAABIAAABIABACIADACIABACIADADIAJAIQABAFAAAIQAAAKgEAFQgGAHgIgBQgIAAgKgDg");
	this.shape_14.setTransform(55.05,572.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAgAAIAAAPIgPAAIAAAOIAMAAIAAAPIgMAAIAAANIAQAAIAAARg");
	this.shape_15.setTransform(51.325,572.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgIAmIAAhKIARAAIAABKg");
	this.shape_16.setTransform(48.275,572.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AADAmIgFgdIgBAAIAAAdIgSAAIAAhKIATAAQALgBAEAGQAGAFAAAKIAAAGQgBAKgFAEIAIAigAgDgEIABAAIACgBIABgDIAAgIIgBgDIgCgBIgBAAg");
	this.shape_17.setTransform(44.75,572.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAgAAIAAAPIgPAAIAAAOIAMAAIAAAPIgMAAIAAANIAQAAIAAARg");
	this.shape_18.setTransform(40.575,572.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAjIAFgQQAHADAEAAQAEAAABgEIAAgBIgCgFIgEgFIgEgEQgFgDgCgFQgDgFAAgGIAAgBQABgJAFgGQAFgGAHABQAIAAAIADIgEAOIgIgCQgFAAAAAGIAAABIAAABIAAABIABACIADACIABACIADADIAIAIQACAFAAAIQAAAKgEAFQgGAHgIgBQgIAAgKgDg");
	this.shape_19.setTransform(36.7,572.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(303));

	// footer_bg
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A5050F").s().p("AsfA/IAAh8IY/AAIAAB8g");
	this.shape_20.setTransform(80,593.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(303));

	// logo
	this.instance_2 = new lib.bt_logo();
	this.instance_2.setTransform(80,378.25,0.4091,0.4091);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(195).to({alpha:0},16).to({_off:true},76).wait(16));

	// cta
	this.instance_3 = new lib.cta_mc();
	this.instance_3.setTransform(243.35,550.5,0.2872,0.2872,0,0,0,0,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(211).to({_off:false},0).wait(1).to({regX:0.1,regY:-717.2,x:242.85,y:344.35,alpha:0.0032},0).wait(1).to({x:241,y:344.15,alpha:0.0145},0).wait(1).to({x:237.3,y:343.75,alpha:0.0371},0).wait(1).to({x:230.8,y:343.05,alpha:0.077},0).wait(1).to({x:219.4,y:341.85,alpha:0.1467},0).wait(1).to({x:199.75,y:339.7,alpha:0.2672},0).wait(1).to({x:175.35,y:337.05,alpha:0.4164},0).wait(1).to({x:151.1,y:334.45,alpha:0.5648},0).wait(1).to({x:130.85,y:332.25,alpha:0.6887},0).wait(1).to({x:115,y:330.5,alpha:0.7859},0).wait(1).to({x:102.5,y:329.15,alpha:0.8625},0).wait(1).to({x:92.6,y:328.1,alpha:0.9229},0).wait(1).to({x:86.1,y:327.4,alpha:0.9628},0).wait(1).to({x:82.35,y:327,alpha:0.9857},0).wait(1).to({x:80.55,y:326.8,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:80,y:532.8,alpha:1},0).wait(76));

	// ticket
	this.instance_4 = new lib.ticket_mc();
	this.instance_4.setTransform(-119.45,470,0.399,0.399);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(195).to({_off:false},0).wait(1).to({regX:0.3,regY:-714.6,x:-118.7,y:184.85},0).wait(1).to({x:-116.45},0).wait(1).to({x:-111.9},0).wait(1).to({x:-103.95},0).wait(1).to({x:-90.05},0).wait(1).to({x:-66.05},0).wait(1).to({x:-36.25},0).wait(1).to({x:-6.65},0).wait(1).to({x:18.05},0).wait(1).to({x:37.45},0).wait(1).to({x:52.7},0).wait(1).to({x:64.75},0).wait(1).to({x:72.7},0).wait(1).to({x:77.3},0).wait(1).to({x:79.5},0).wait(1).to({regX:0.1,regY:0,x:80.05,y:470},0).wait(92));

	// main_caption
	this.instance_5 = new lib.sub_caption_mc();
	this.instance_5.setTransform(78.6,572.85,0.5,0.5,0,0,0,0,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).wait(1).to({regX:-1.5,regY:-379.2,x:77.85,y:383.15,alpha:0.0037},0).wait(1).to({y:383,alpha:0.0167},0).wait(1).to({y:382.75,alpha:0.0435},0).wait(1).to({y:382.25,alpha:0.0919},0).wait(1).to({y:381.35,alpha:0.1816},0).wait(1).to({y:379.95,alpha:0.3248},0).wait(1).to({y:378.3,alpha:0.4878},0).wait(1).to({y:376.85,alpha:0.6345},0).wait(1).to({y:375.7,alpha:0.7499},0).wait(1).to({y:374.8,alpha:0.8388},0).wait(1).to({y:374.1,alpha:0.9088},0).wait(1).to({y:373.6,alpha:0.9564},0).wait(1).to({y:373.35,alpha:0.9834},0).wait(1).to({y:373.2,alpha:0.9964},0).wait(1).to({regX:0,regY:0.1,x:78.6,y:562.85,alpha:1},0).wait(60).to({y:572.85,alpha:0},16).to({_off:true},1).wait(196));

	// sub_caption
	this.instance_6 = new lib.daily_caption_mc();
	this.instance_6.setTransform(78.6,572.85,0.5,0.5,0,0,0,0,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90).to({_off:false},0).wait(1).to({regY:-408.6,y:368.45,alpha:0.0032},0).wait(1).to({y:368.35,alpha:0.0145},0).wait(1).to({y:368.1,alpha:0.0371},0).wait(1).to({y:367.7,alpha:0.077},0).wait(1).to({y:367,alpha:0.1467},0).wait(1).to({y:365.8,alpha:0.2672},0).wait(1).to({y:364.3,alpha:0.4164},0).wait(1).to({y:362.85,alpha:0.5648},0).wait(1).to({y:361.6,alpha:0.6887},0).wait(1).to({y:360.6,alpha:0.7859},0).wait(1).to({y:359.85,alpha:0.8625},0).wait(1).to({y:359.25,alpha:0.9229},0).wait(1).to({y:358.85,alpha:0.9628},0).wait(1).to({y:358.6,alpha:0.9857},0).wait(1).to({y:358.5,alpha:0.9969},0).wait(1).to({regY:0.1,y:562.85,alpha:1},0).wait(74).to({regY:-408.6,x:79.1,y:358.5},0).wait(1).to({x:80.95},0).wait(1).to({x:84.6},0).wait(1).to({x:91.1},0).wait(1).to({x:102.5},0).wait(1).to({x:122.1},0).wait(1).to({x:146.45},0).wait(1).to({x:170.6},0).wait(1).to({x:190.8},0).wait(1).to({x:206.65},0).wait(1).to({x:219.1},0).wait(1).to({x:228.95},0).wait(1).to({x:235.45},0).wait(1).to({x:239.2},0).wait(1).to({x:241},0).wait(1).to({regY:0.1,x:241.55,y:562.85},0).to({_off:true},17).wait(91));

	// second_prize
	this.instance_7 = new lib.secondprize_mc();
	this.instance_7.setTransform(-86.25,208.25,0.5432,0.5432,0,0,0,0.2,0.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(82).to({_off:false},0).wait(1).to({regX:0,regY:0,x:-85.8191,y:208.15},0).wait(1).to({x:-83.9621},0).wait(1).to({x:-80.2251},0).wait(1).to({x:-73.6433},0).wait(1).to({x:-62.1424},0).wait(1).to({x:-42.2697},0).wait(1).to({x:-17.6395},0).wait(1).to({x:6.8461},0).wait(1).to({x:27.2887},0).wait(1).to({x:43.3302},0).wait(1).to({x:55.9604},0).wait(1).to({x:65.9323},0).wait(1).to({x:72.5168},0).wait(1).to({x:76.2917},0).wait(1).to({x:78.1319},0).wait(1).to({regX:0.2,regY:0.2,x:78.75,y:208.25},0).wait(82).to({regX:0,regY:0,x:79.1859,y:208.1569},0).wait(1).to({x:81.0603,y:208.1811},0).wait(1).to({x:84.8325,y:208.2298},0).wait(1).to({x:91.4761,y:208.3156},0).wait(1).to({x:103.0851,y:208.4654},0).wait(1).to({x:123.1444,y:208.7244},0).wait(1).to({x:148.0059,y:209.0453},0).wait(1).to({x:172.7216,y:209.3644},0).wait(1).to({x:193.3562,y:209.6307},0).wait(1).to({x:209.5484,y:209.8398},0).wait(1).to({x:222.2973,y:210.0043},0).wait(1).to({x:232.3628,y:210.1343},0).wait(1).to({x:239.0092,y:210.2201},0).wait(1).to({x:242.8196,y:210.2693},0).wait(1).to({x:244.677,y:210.2932},0).wait(1).to({regX:0.2,regY:0.2,x:245.3,y:210.4},0).to({_off:true},17).wait(91));

	// promo
	this.instance_8 = new lib.promo_mc();
	this.instance_8.setTransform(220,472,0.4164,0.4164,0,0,0,0.1,0);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:-0.4,regY:-650.8,x:219.25,y:201.05,alpha:0.0037},0).wait(1).to({x:217.45,alpha:0.0167},0).wait(1).to({x:213.7,alpha:0.0435},0).wait(1).to({x:206.9,alpha:0.0919},0).wait(1).to({x:194.35,alpha:0.1816},0).wait(1).to({x:174.3,alpha:0.3248},0).wait(1).to({x:151.5,alpha:0.4878},0).wait(1).to({x:131,alpha:0.6345},0).wait(1).to({x:114.8,alpha:0.7499},0).wait(1).to({x:102.4,alpha:0.8388},0).wait(1).to({x:92.6,alpha:0.9088},0).wait(1).to({x:85.95,alpha:0.9564},0).wait(1).to({x:82.15,alpha:0.9834},0).wait(1).to({x:80.35,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0,x:80.05,y:472,alpha:1},0).wait(68).to({regX:-0.4,regY:-650.8,x:80.35,y:201.05},0).wait(1).to({x:82.15},0).wait(1).to({x:85.85},0).wait(1).to({x:92.3},0).wait(1).to({x:103.55},0).wait(1).to({x:123.05},0).wait(1).to({x:147.2},0).wait(1).to({x:171.2},0).wait(1).to({x:191.25},0).wait(1).to({x:206.95},0).wait(1).to({x:219.35},0).wait(1).to({x:229.1},0).wait(1).to({x:235.55},0).wait(1).to({x:239.25},0).wait(1).to({x:241.05},0).wait(1).to({regX:0.1,regY:0,x:241.8,y:472},0).to({_off:true},147).wait(58));

	// background
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A5050F").s().p("EgMfAu9MAAAhd5IY/AAMAAABd5g");
	this.shape_21.setTransform(80,299.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(303));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-154.3,299.1,475,301);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 160,
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