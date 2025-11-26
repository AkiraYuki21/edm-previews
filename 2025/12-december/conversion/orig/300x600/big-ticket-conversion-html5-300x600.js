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
p.nominalBounds = new cjs.Rectangle(0,0,288,247);


(lib._300x600 = function() {
	this.initialize(img._300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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
p.nominalBounds = new cjs.Rectangle(0,0,288,287);


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
	this.instance.setTransform(-179,-437,0.9257,0.9257);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-179,-437,357.4,192.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgSCRQgIgDgFgIQgGgHAAgMQAAgPALgJQALgJAPAAQAQAAALAJQALAJAAAPQAAAMgGAHQgFAIgIADQgJAEgKAAQgJAAgJgEgAghAyIAAjGIBDAAIAADGg");
	this.shape.setTransform(122.575,9.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMCTIgWhwIgFAAIAABwIhDAAIAAklIBIAAQAfABASAKQATAKAHASQAHASAAAZIAAAVQAAAWgGAQQgGAOgKAJIAhCBgAgPgSIADAAQAJAAADgEQADgEAAgKIAAgcQAAgKgDgEQgDgEgJAAIgDAAg");
	this.shape_1.setTransform(106.175,8.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWCTIgFg5IggAAIgFA5IhDAAIAoklIBgAAIAnElgAAKAbIgJhOIgBgYIAAAYIgIBOIASAAg");
	this.shape_2.setTransform(87.25,8.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhACTIAAklICAAAIAAA/Ig+AAIAAAyIAzAAIAAA+IgzAAIAAA3IA/AAIAAA/g");
	this.shape_3.setTransform(70.925,8.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghCTIAAhTIg4jSIBGAAIAUBiIAThiIBGAAIg4DSIAABTg");
	this.shape_4.setTransform(54.025,8.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhACTIAAklICAAAIAAA/Ig+AAIAAAyIAzAAIAAA+IgzAAIAAA3IA/AAIAAA/g");
	this.shape_5.setTransform(33.225,8.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKCTIAAh0IgSAAIAAB0IhEAAIAAklIBEAAIAABvIASAAIAAhvIBCAAIAAElg");
	this.shape_6.setTransform(16.85,8.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghCTIAAjiIgpAAIAAhDICVAAIAABDIgpAAIAADig");
	this.shape_7.setTransform(0.825,8.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhBCTIAAklICDAAIAAA/IhCAAIAAAyIA2AAIAAA+Ig2AAIAAB2g");
	this.shape_8.setTransform(-18.5,8.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAACXQgmAAgTgVQgUgVAAgnIAAiLQABgpAUgUQAUgUAkAAIABAAQAmAAAUAVQATAVAAAnIAACLQAAApgVAUQgUAUgkAAgAgGhUQgCADAAAHIAACVQAAAHACADQACADAEAAIAAAAQAFAAACgDQACgDAAgHIAAiVQAAgHgCgDQgDgDgEAAQgEAAgCADg");
	this.shape_9.setTransform(-35.125,8.7744);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhACTIAAklICAAAIAAA/Ig+AAIAAAyIAzAAIAAA+IgzAAIAAA3IA/AAIAAA/g");
	this.shape_10.setTransform(-55.525,8.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhMCTIAAg7IBRiqIhHAAIAAhAICOAAIAAA7IhRCrIBRAAIAAA/g");
	this.shape_11.setTransform(-71.45,8.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggCTIAAklIBBAAIAAElg");
	this.shape_12.setTransform(-84.25,8.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAMCTIgWhwIgFAAIAABwIhDAAIAAklIBIAAQAfABASAKQATAKAHASQAHASAAAZIAAAVQAAAWgGAQQgGAOgKAJIAhCBgAgPgSIADAAQAJAAADgEQADgEAAgKIAAgcQAAgKgDgEQgDgEgJAAIgDAAg");
	this.shape_13.setTransform(-98.075,8.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhMCTIAAklIBHAAQAgABASAKQASAKAHASQAHASAAAZIAAAYQAAAggLAQQgKARgTAHQgTAHgXAAIgEAAIAABsgAgJgPIACAAQAIABAEgEQAEgEgBgKIAAggQABgKgEgEQgEgEgIAAIgCAAg");
	this.shape_14.setTransform(-116.275,8.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AghCTIAAjiIgpAAIAAhDICVAAIAABDIgpAAIAADig");
	this.shape_15.setTransform(73.225,-36.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgnCTQgRgEgQgGIASg9IAWAJQAKADAIAAQANAAAEgFQAHgEAAgKIAAgCQAAgIgHgJQgFgKgOgOIgNgMQgMgMgJgKQgIgMgFgOQgEgOgBgUIAAgBQABgmATgVQATgWAiAAQAOAAAQAEQAQADAQAGIgSA5IgSgFIgMgCQgMAAgGAFQgFAFAAAJIAAABQAAAHAGAIIARATIAHAHIAHAHQANAMAIAKQAJAMAFAOQAFAPAAAWQAAAbgJATQgKATgRAKQgRAKgXAAQgTAAgRgEg");
	this.shape_16.setTransform(57.9,-36.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhACTIAAklICAAAIAAA/Ig+AAIAAAyIAzAAIAAA+IgzAAIAAA3IA/AAIAAA/g");
	this.shape_17.setTransform(43.425,-36.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag5CDQgUgVAAgoIAAiKQAAgaAMgSQALgTATgJQAUgKAYAAQARAAASAFQASAFAQAIIgYA6QgJgEgJgDQgKgCgJAAQgOAAgFAHQgGAHAAAPIAACAQAAAIACADQADADAEAAIAFgBIADgBIAAhpIA/AAIAACVQgMAHgKAFQgLAFgLACQgMACgOAAQgoAAgTgUg");
	this.shape_18.setTransform(27.575,-36.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag5CDQgUgVAAgoIAAiKQAAgaAMgSQALgTATgJQAUgKAYAAQARAAASAFQASAFAQAIIgYA6QgJgEgJgDQgKgCgJAAQgOAAgFAHQgGAHAAAPIAACAQAAAIACADQADADAEAAIAFgBIADgBIAAhpIA/AAIAACVQgMAHgKAFQgLAFgLACQgMACgOAAQgoAAgTgUg");
	this.shape_19.setTransform(10.475,-36.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AggCTIAAklIBBAAIAAElg");
	this.shape_20.setTransform(-2.8,-36.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhNCTIAAklIBJAAQAXAAASAIQASAHAKAQQAKAQAAAZIAAAIQAAAVgHAPQgHAOgRAHQASAGAIAOQAIAPAAAZIAAASQAAAZgJASQgKARgRAJQgRAJgXAAgAgKBTIAEAAQAIAAADgEQADgEgBgIIAAgdQABgIgDgEQgDgEgIAAIgEAAgAgKggIAFAAQAIAAADgEQADgEgBgIIAAgRQABgIgDgFQgDgEgIAAIgFAAg");
	this.shape_21.setTransform(-16.025,-36.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhACTIAAklICAAAIAAA/Ig+AAIAAAyIAzAAIAAA+IgzAAIAAA3IA/AAIAAA/g");
	this.shape_22.setTransform(-36.475,-36.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAKCTIAAh0IgSAAIAAB0IhEAAIAAklIBEAAIAABvIASAAIAAhvIBCAAIAAElg");
	this.shape_23.setTransform(-52.8,-36.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AghCTIAAjiIgpAAIAAhDICVAAIAABDIgpAAIAADig");
	this.shape_24.setTransform(-68.825,-36.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgnCTQgRgEgQgGIARg9IAXAJQAKADAJAAQALAAAGgFQAFgEABgKIAAgCQgBgIgFgJQgGgKgOgOIgNgMQgMgMgIgKQgKgMgEgOQgEgOAAgUIAAgBQAAgmATgVQATgWAiAAQAOAAAQAEQAQADAQAGIgSA5IgRgFIgNgCQgMAAgGAFQgFAFAAAJIAAABQAAAHAGAIIASATIAGAHIAHAHQAMAMAJAKQAJAMAFAOQAFAPAAAWQgBAbgIATQgKATgRAKQgSAKgWAAQgSAAgSgEg");
	this.shape_25.setTransform(68.85,-82.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgnCTQgRgEgQgGIARg9IAXAJQAKADAJAAQALAAAGgFQAFgEABgKIAAgCQgBgIgFgJQgGgKgOgOIgNgMQgMgMgIgKQgKgMgEgOQgEgOAAgUIAAgBQAAgmATgVQATgWAiAAQAOAAAQAEQAQADAQAGIgRA5IgSgFIgNgCQgMAAgGAFQgFAFAAAJIAAABQAAAHAGAIIASATIAGAHIAHAHQAMAMAJAKQAJAMAFAOQAFAPAAAWQgBAbgIATQgKATgRAKQgSAKgWAAQgSAAgSgEg");
	this.shape_26.setTransform(53.55,-82.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AghCTIAAklIBDAAIAAElg");
	this.shape_27.setTransform(41.45,-82.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAwCTIAAjbIgDAhIgUC6IgyAAIgUi6IgCghIAADbIhBAAIAAklIBmAAIAJCLIABAWIACgWIAKiLIBlAAIAAElg");
	this.shape_28.setTransform(24.575,-82.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AghCTIAAjiIgpAAIAAhDICVAAIAABDIgpAAIAADig");
	this.shape_29.setTransform(-0.175,-82.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgTA/IgMh9IA/AAIgMB9g");
	this.shape_30.setTransform(-12.45,-90.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAACTIgTi5IAAC5IhDAAIAAklIBYAAIARC1IAAi1IBEAAIAAElg");
	this.shape_31.setTransform(-26.875,-82.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAACXQgmAAgTgVQgUgVAAgnIAAiLQABgpAUgUQAUgUAkAAIABAAQAmAAAUAVQATAVAAAnIAACLQAAApgVAUQgUAUgkAAgAgGhUQgCADAAAHIAACVQAAAHACADQACADAEAAIAAAAQAFAAACgDQACgDAAgHIAAiVQAAgHgCgDQgDgDgEAAQgEAAgCADg");
	this.shape_32.setTransform(-45.525,-82.5756);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhNCTIAAklIBIAAQAXABATAKQATAKAKAUQALATAAAbIAAB2QAAAbgLAUQgKATgTALQgSALgYAAgAgJBTIACAAQAJAAADgEQAEgFgBgMIAAh+QAAgLgEgEQgEgDgHAAIgCAAg");
	this.shape_33.setTransform(-63.25,-82.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-126.8,-106,258,146.7), null);


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
	this.instance.setTransform(-130,-113,0.9142,0.9142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-130,-113,263.3,225.8), null);


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

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-179,-304,370.2,369), null);


(lib.other_prizes_orig_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(2,78,1.1597,1.1597);

	this.instance_1 = new lib.bigwin();
	this.instance_1.setTransform(0,0,1.1597,1.1597);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.other_prizes_orig_mc, new cjs.Rectangle(0,0,257.2,151.1), null);


(lib.other_prizes_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgSAeQgIgDgGgIQgFgHAAgMQAAgPALgIQALgJAPAAQAQAAALAJQALAIAAAPQAAAMgGAHQgFAIgIADQgJAEgKgBQgJABgJgEg");
	this.shape.setTransform(238.975,80.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMCTIgWhwIgFAAIAABwIhDAAIAAklIBIAAQAfABASAKQATAKAHASQAHASAAAZIAAAVQAAAWgGAQQgGAOgKAJIAhCBgAgPgSIADAAQAJAAADgEQADgEAAgKIAAgcQAAgKgDgEQgDgEgJAAIgDAAg");
	this.shape_1.setTransform(224.675,68.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhACTIAAklICAAAIAAA/Ig+AAIAAAyIAzAAIAAA+IgzAAIAAA3IA/AAIAAA/g");
	this.shape_2.setTransform(208.375,68.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhNCTIAAklIBJAAQAXAAASAIQASAHAKAQQAKAQAAAZIAAAIQAAAVgHAPQgHAOgRAHQASAGAIAOQAIAPAAAZIAAASQAAAZgJASQgKARgRAJQgRAJgXAAgAgKBTIAEAAQAIAAADgEQADgEgBgIIAAgdQABgIgDgEQgDgEgIAAIgEAAgAgKggIAFAAQAIAAADgEQADgEgBgIIAAgRQABgIgDgFQgDgEgIAAIgFAAg");
	this.shape_3.setTransform(192.075,68.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAwCTIAAjbIgDAhIgUC6IgyAAIgUi6IgCghIAADbIhBAAIAAklIBmAAIAJCLIABAWIACgWIAKiLIBlAAIAAElg");
	this.shape_4.setTransform(170.725,68.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhACTIAAklICAAAIAAA/Ig+AAIAAAyIAzAAIAAA+IgzAAIAAA3IA/AAIAAA/g");
	this.shape_5.setTransform(151.475,68.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKCXQgpAAgVgXQgVgWAAgrIAAh9QAAgrAVgXQAVgWApAAIAAAAQARAAAPADQAOADANAGIgYA2QgGgCgGgBIgLgBIgBAAQgNAAgHAJQgGAIAAAQIAABvQABAQAHAIQAIAIAOAAIAAAAIAMgBIANgFIAYA2QgOAIgQADQgPAEgTAAg");
	this.shape_6.setTransform(136.825,68.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhACTIAAklICAAAIAAA/Ig+AAIAAAyIAzAAIAAA+IgzAAIAAA3IA/AAIAAA/g");
	this.shape_7.setTransform(121.425,68.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhNCTIAAklIBIAAQAXABATAKQATAKAKAUQALATAAAbIAAB2QAAAbgLAUQgKATgTALQgSALgYAAgAgJBTIACAAQAJAAADgEQAEgFgBgMIAAh+QAAgLgEgEQgEgDgHAAIgCAAg");
	this.shape_8.setTransform(105.05,68.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnCTQgRgEgQgGIARg9IAXAJQAKADAJAAQALAAAGgFQAFgEAAgKIAAgCQAAgIgFgJQgGgKgPgOIgMgMQgMgMgIgKQgKgMgEgOQgFgOABgUIAAgBQAAgmATgVQAUgWAhAAQAOAAAQAEQAQADAQAGIgRA5IgSgFIgOgCQgLAAgGAFQgFAFAAAJIAAABQAAAHAGAIIARATIAHAHIAHAHQAMAMAJAKQAJAMAFAOQAFAPAAAWQAAAbgKATQgJATgSAKQgRAKgVAAQgTAAgSgEg");
	this.shape_9.setTransform(83.85,68.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggCTIAAklIBCAAIAAElg");
	this.shape_10.setTransform(71.8,68.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAJCTIAAh0IgRAAIAAB0IhDAAIAAklIBDAAIAABvIARAAIAAhvIBEAAIAAElg");
	this.shape_11.setTransform(58.55,68.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghCTIAAjiIgpAAIAAhDICVAAIAABDIgpAAIAADig");
	this.shape_12.setTransform(42.525,68.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAACTIgTi5IAAC5IhDAAIAAklIBYAAIARC1IAAi1IBEAAIAAElg");
	this.shape_13.setTransform(20.475,68.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AghCTIAAklIBDAAIAAElg");
	this.shape_14.setTransform(6.25,68.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AANCTIgNiwIgMCwIhWAAIgWklIBHAAIADDhIAUjhIA1AAIAUDhIADjhIBHAAIgVElg");
	this.shape_15.setTransform(-11.025,68.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAACXQgmAAgTgVQgUgVAAgnIAAiLQABgpAUgUQAUgUAkAAIABAAQAmAAAUAVQATAVAAAnIAACLQAAApgVAUQgUAUgkAAgAgGhUQgCADAAAHIAACVQAAAHACADQACADAEAAIAAAAQAFAAACgDQACgDAAgHIAAiVQAAgHgCgDQgDgDgEAAQgEAAgCADg");
	this.shape_16.setTransform(199.575,23.4244);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AghCTIAAjiIgpAAIAAhDICVAAIAABDIgpAAIAADig");
	this.shape_17.setTransform(183.025,23.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgnCTQgRgEgQgGIARg9IAXAJQAKADAJAAQAMAAAEgFQAGgEABgKIAAgCQgBgIgGgJQgFgKgOgOIgNgMQgMgMgJgKQgJgMgEgOQgEgOgBgUIAAgBQABgmATgVQATgWAiAAQAOAAAQAEQAQADAQAGIgSA5IgSgFIgMgCQgMAAgGAFQgFAFAAAJIAAABQAAAHAGAIIASATIAGAHIAHAHQAMAMAJAKQAJAMAFAOQAFAPAAAWQgBAbgIATQgKATgRAKQgSAKgWAAQgSAAgSgEg");
	this.shape_18.setTransform(163,23.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AghCTIAAhTIg4jSIBGAAIAUBiIAThiIBGAAIg4DSIAABTg");
	this.shape_19.setTransform(146.075,23.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAWCTIgFg5IggAAIgGA5IhCAAIAnklIBhAAIAnElgAAKAbIgJhOIgBgYIAAAYIgIBOIASAAg");
	this.shape_20.setTransform(127.2,23.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AANCTIgNiwIgMCwIhWAAIgWklIBHAAIADDhIAUjhIA1AAIAUDhIADjhIBHAAIgVElg");
	this.shape_21.setTransform(104.925,23.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhACTIAAklICAAAIAAA/Ig+AAIAAAyIAzAAIAAA+IgzAAIAAA3IA/AAIAAA/g");
	this.shape_22.setTransform(80.575,23.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAMCTIgWhwIgFAAIAABwIhDAAIAAklIBIAAQAfABASAKQATAKAHASQAHASAAAZIAAAVQAAAWgGAQQgGAOgKAJIAhCBgAgPgSIADAAQAJAAADgEQADgEAAgKIAAgcQAAgKgDgEQgDgEgJAAIgDAAg");
	this.shape_23.setTransform(63.575,23.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAACXQgmAAgTgVQgUgVAAgnIAAiLQABgpAUgUQAUgUAkAAIABAAQAmAAAUAVQATAVAAAnIAACLQAAApgVAUQgUAUgkAAgAgGhUQgCADAAAHIAACVQAAAHACADQACADAEAAIAAAAQAFAAACgDQACgDAAgHIAAiVQAAgHgCgDQgDgDgEAAQgEAAgCADg");
	this.shape_24.setTransform(45.275,23.4244);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAwCTIAAjbIgDAhIgUC6IgyAAIgUi6IgCghIAADbIhBAAIAAklIBmAAIAJCLIABAWIACgWIAKiLIBlAAIAAElg");
	this.shape_25.setTransform(23.975,23.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.other_prizes_mc, new cjs.Rectangle(-25.5,0,271.1,100.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgSAeQgIgEgGgHQgFgHAAgMQAAgOALgKQALgIAPgBQAQABALAIQALAKAAAOQAAAMgGAHQgFAHgIAEQgJADgKABQgJgBgJgDg");
	this.shape.setTransform(86.625,-17.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5CDQgUgVAAgoIAAiKQAAgaAMgSQALgTATgJQAUgKAYAAQARAAASAFQASAFAQAIIgYA6QgJgEgJgDQgKgCgJAAQgOAAgFAHQgGAHAAAPIAACAQAAAIACADQADADAEAAIAFgBIADgBIAAhpIA/AAIAACVQgMAHgKAFQgLAFgLACQgMACgOAAQgoAAgTgUg");
	this.shape_1.setTransform(73.475,-29.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggCTIAAklIBBAAIAAElg");
	this.shape_2.setTransform(60.2,-29.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhNCTIAAklIBJAAQAXAAASAIQASAHAKAQQAKAQAAAZIAAAIQAAAVgHAPQgHAOgRAHQASAGAIAOQAIAPAAAZIAAASQAAAZgJASQgKARgRAJQgRAJgXAAgAgKBTIAEAAQAIAAADgEQADgEgBgIIAAgdQABgIgDgEQgDgEgIAAIgEAAgAgKggIAFAAQAIAAADgEQADgEgBgIIAAgRQABgIgDgFQgDgEgIAAIgFAAg");
	this.shape_3.setTransform(46.975,-29.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghCTIAAjiIgpAAIAAhDICVAAIAABDIgpAAIAADig");
	this.shape_4.setTransform(25.725,-29.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggCTIAAklIBBAAIAAElg");
	this.shape_5.setTransform(13.6,-29.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhNCTIAAklIBIAAQAXABATAKQATAKAKAUQALATAAAbIAAB2QAAAbgLAUQgKATgTALQgSALgYAAgAgJBTIACAAQAJAAADgEQAEgFgBgMIAAh+QAAgLgEgEQgEgDgHAAIgCAAg");
	this.shape_6.setTransform(-4.3,-29.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAACTIgTi5IAAC5IhDAAIAAklIBYAAIARC1IAAi1IBEAAIAAElg");
	this.shape_7.setTransform(-22.925,-29.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhACTIAAklICAAAIAAA/Ig+AAIAAAyIAzAAIAAA+IgzAAIAAA3IA/AAIAAA/g");
	this.shape_8.setTransform(-39.525,-29.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAACXQgmAAgTgVQgUgVAAgnIAAiLQABgpAUgUQAUgUAkAAIABAAQAmAAAUAVQATAVAAAnIAACLQAAApgVAUQgUAUgkAAgAgGhUQgCADAAAHIAACVQAAAHACADQACADAEAAIAAAAQAFAAACgDQACgDAAgHIAAiVQAAgHgCgDQgDgDgEAAQgEAAgCADg");
	this.shape_9.setTransform(-60.675,-29.6256);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghCTIAAjiIgpAAIAAhDICVAAIAABDIgpAAIAADig");
	this.shape_10.setTransform(-77.225,-29.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhACTIAAklICAAAIAAA/Ig+AAIAAAyIAzAAIAAA+IgzAAIAAA3IA/AAIAAA/g");
	this.shape_11.setTransform(121.475,-74.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAKCXQgpAAgVgXQgVgWAAgrIAAh9QAAgrAVgXQAVgWApAAIAAAAQARAAAPADQAOADANAGIgYA2QgGgCgGgBIgLAAIgBAAQgNAAgHAIQgGAIAAAQIAABvQABAQAHAIQAIAIAOAAIAAAAIAMgBIANgEIAYA2QgOAHgQADQgPAEgTAAg");
	this.shape_12.setTransform(106.875,-74.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAACTIgTi5IAAC5IhDAAIAAklIBYAAIARC1IAAi1IBEAAIAAElg");
	this.shape_13.setTransform(88.575,-74.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAWCTIgGg5IgfAAIgGA5IhBAAIAmklIBhAAIAmElgAAKAbIgIhOIgCgYIgBAYIgIBOIATAAg");
	this.shape_14.setTransform(69.3,-74.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAKCTIAAh0IgSAAIAAB0IhEAAIAAklIBEAAIAABvIASAAIAAhvIBCAAIAAElg");
	this.shape_15.setTransform(51.05,-74.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAKCXQgpAAgVgXQgVgWAAgrIAAh9QAAgrAVgXQAVgWApAAIAAAAQARAAAPADQAOADANAGIgYA2QgGgCgGgBIgLAAIgBAAQgNAAgHAIQgGAIAAAQIAABvQABAQAHAIQAIAIAOAAIAAAAIAMgBIANgEIAYA2QgOAHgQADQgPAEgTAAg");
	this.shape_16.setTransform(35.675,-74.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AghCTIAAjiIgpAAIAAhDICVAAIAABDIgpAAIAADig");
	this.shape_17.setTransform(14.775,-74.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgnCTQgRgEgQgGIARg9IAXAJQAKADAJAAQALAAAGgFQAFgEAAgKIAAgCQAAgIgFgJQgGgKgPgOIgMgMQgMgMgIgKQgKgMgEgOQgFgOABgUIAAgBQAAgmATgVQAUgWAhAAQAOAAAQAEQAQADAQAGIgRA5IgSgFIgOgCQgLAAgGAFQgFAFAAAJIAAABQAAAHAGAIIASATIAGAHIAHAHQAMAMAJAKQAJAMAFAOQAFAPAAAWQAAAbgKATQgJATgSAKQgQAKgXAAQgSAAgSgEg");
	this.shape_18.setTransform(-0.55,-74.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAWCTIgFg5IggAAIgGA5IhCAAIAnklIBhAAIAnElgAAKAbIgJhOIgBgYIAAAYIgIBOIASAAg");
	this.shape_19.setTransform(-17.7,-74.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhECTIAAklIBDAAIAADjIBFAAIAABCg");
	this.shape_20.setTransform(-35.45,-74.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAMCTIgWhwIgFAAIAABwIhDAAIAAklIBIAAQAfABASAKQATAKAHASQAHASAAAZIAAAVQAAAWgGAQQgGAOgKAJIAhCBgAgPgSIADAAQAJAAADgEQADgEAAgKIAAgcQAAgKgDgEQgDgEgJAAIgDAAg");
	this.shape_21.setTransform(-57.475,-74.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgnCNQgSgJgKgRQgKgRAAgaIAAjcIBFAAIAADdQgBAGADADQADADADAAQAFAAACgDQACgDAAgGIAAjdIBFAAIAADcQAAAXgJARQgIARgRAKQgRAKgbgBQgWAAgRgHg");
	this.shape_22.setTransform(-76.1,-74.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAACXQgmAAgTgVQgUgVAAgnIAAiLQABgpAUgUQAUgUAkAAIABAAQAmAAAUAVQATAVAAAnIAACLQAAApgVAUQgUAUgkAAgAgGhUQgCADAAAHIAACVQAAAHACADQACADAEAAIAAAAQAFAAACgDQACgDAAgHIAAiVQAAgHgCgDQgDgDgEAAQgEAAgCADg");
	this.shape_23.setTransform(-94.275,-74.5256);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AghCTIAAhTIg4jSIBGAAIAUBiIAThiIBGAAIg4DSIAABTg");
	this.shape_24.setTransform(-112.425,-74.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-123.4,-98,253.5,100.2), null);


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
	this.instance.setTransform(-207,-36,1.7004,1.7004);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-207,-36,414.9,79.9), null);


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
	this.shape_15.setTransform(177.225,586.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSArIAAhVIAlAAIAAASIgSAAIAAAPIAPAAIAAARIgPAAIAAARIASAAIAAASg");
	this.shape_16.setTransform(172.525,586.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAGArIgBgRIgJAAIgBARIgUAAIAMhVIAbAAIAMBVgAADAIIgCgWIgBgIIAAAIIgCAWIAFAAg");
	this.shape_17.setTransform(167.5,586.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAArIgFg2IAAA2IgUAAIAAhVIAaAAIAFA1IAAg1IAUAAIAABVg");
	this.shape_18.setTransform(160.4,586.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_19.setTransform(156.15,586.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLAsIgKgDIAFgSIAHACIAGABQADAAABgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAAgBQAAgCgCgDIgFgHIgEgEIgGgGIgEgHIgBgKIAAgBQAAgLAFgGQAGgHAKAAIAIABIAKADIgFARIgGgBIgEgBQgDAAgCABQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAABQABACABACIAFAGIACACIACACIAGAGQADADABAFQACAEAAAGIAAABQAAAIgDAFQgDAGgFADQgFADgGAAIgLgBg");
	this.shape_20.setTransform(151.225,586.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSArIAAhVIAlAAIAAASIgSAAIAAAPIAPAAIAAARIgPAAIAAARIASAAIAAASg");
	this.shape_21.setTransform(146.875,586.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWArIAAgRIAYgyIgVAAIAAgSIAqAAIAAARIgYAxIAYAAIAAATg");
	this.shape_22.setTransform(142.175,586.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_23.setTransform(138.35,586.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAEArIgGggIgCAAIAAAgIgUAAIAAhVIAWAAQAJAAAFADQAFACACAGQADAGAAAGIAAAHQAAAGgCAFQgCADgDADIAKAmgAgEgFIABAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAIABgEIAAgJIgBgDQAAgBAAAAQAAAAAAAAQgBgBAAAAQgBAAgBABIgBAAg");
	this.shape_24.setTransform(134.275,586.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWArIAAhVIAVAAQAJAAAGADQAFACACAGQACAGAAAGIAAAIQAAAJgDAFQgEAEgFADQgGACgGAAIgBAAIAAAfgAgCgEIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIABgEIAAgKIgBgDQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAgBABIgBAAg");
	this.shape_25.setTransform(128.85,586.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIA3IAAhtIARAAIAABtg");
	this.shape_26.setTransform(120.475,587.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJArIAAgYIgRg9IAVAAIAFAdIAGgdIAVAAIgRA9IAAAYg");
	this.shape_27.setTransform(111.875,586.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUArIAAhVIAUAAIAABCIAVAAIAAATg");
	this.shape_28.setTransform(106.65,586.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWArIAAhVIAWAAQAIAAAFADQAGACACAGQACAGAAAGIAAAIQAAAJgDAFQgEAEgFADQgGACgFAAIgCAAIAAAfgAgCgEIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIABgEIAAgKIgBgDQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAgBABIgBAAg");
	this.shape_29.setTransform(101.65,586.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWArIAAhVIAVAAQAJAAAGADQAFACACAGQACAGAAAGIAAAIQAAAJgDAFQgEAEgFADQgGACgGAAIgBAAIAAAfgAgCgEIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIABgEIAAgKIgBgDQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAgBABIgBAAg");
	this.shape_30.setTransform(96.45,586.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAGArIgBgRIgJAAIgBARIgUAAIALhVIAcAAIAMBVgAADAIIgCgWIgBgIIAAAIIgCAWIAFAAg");
	this.shape_31.setTransform(91,586.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgLAsIgKgDIAFgSIAHACIAGABQADAAABgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgHIgEgEIgGgGIgEgHIgBgKIAAgBQAAgLAFgGQAGgHAKAAIAIABIAKADIgFARIgGgBIgEgBQgDAAgCABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABQABACABACIAFAGIACACIACACIAGAGQADADABAFQACAEAAAGIAAABQAAAIgDAFQgDAGgFADQgFADgGAAIgLgBg");
	this.shape_32.setTransform(84.575,586.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFATIgDglIASAAIgEAlg");
	this.shape_33.setTransform(80.95,584.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPAmQgGgGAAgNIAAglQAAgMAGgHQAGgHAMAAIAJABQAEABAEACIgHAQIgEgBIgDAAQgEAAgCACQgBADAAAEIAAAhQAAAEABADQADACAEAAIABAAIADAAIAEgBIAHAQIgJADIgKABQgMAAgGgHg");
	this.shape_34.setTransform(77.45,586.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgXAnQgHgFAAgMIAAgLQABgGACgEQADgCAFgBIgDgIIgBgGIAAgGQAAgIACgFQABgEAFgDQAEgCAIAAQAFAAAEACQADACACAFQACAFAAAIIAAAFIgBAHQgBADgDADQgCADgFABIAHAKIgBgEIAAgGIAQAAIAAALIgBAIQAAAEgDAEIAMARIgVAAIgBgDIgGADIgGABQgOAAgGgGgAgKAOIAAACIAAADQAAAFACACQACACAEAAIABAAIABAAIgKgRgAgGgZIAAADIAAAKIAAABIAAABIADgCIABgDIAAgHIAAgDIgCgBIgCABg");
	this.shape_35.setTransform(71.475,586.775);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJArIAAhCIgMAAIAAgTIArAAIAAATIgMAAIAABCg");
	this.shape_36.setTransform(65.825,586.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIA3IAAhtIARAAIAABtg");
	this.shape_37.setTransform(57.775,587.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgVAsIAAgRIAMgPQAGgHADgHQADgHABgGIAAgBIgCgFIgCgDIgEAAIgGABIgFABIgHgQIAKgEQAGgBAGAAQAHAAAFADQAFAEADAGQACAGABAHIAAABQAAAGgCAGQgCAFgEAGIgHAKIgHAJIAUAAIAAASg");
	this.shape_38.setTransform(49.5,586.725);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgLAqQgFgDgDgFQgCgGgBgIIAAgFIACgJIAEgGIgDgGIgBgIIAAgFQAAgIADgGQADgFAEgDQAFgDAFAAQAGAAAFADQAFADACAGQADAFAAAIIAAAFIgBAIIgDAGQADACABAEQACADAAAGIAAAFQAAAIgDAGQgDAFgFADQgFADgHAAQgGAAgFgDgAAAAIIgBACIAAAOIABACIAAAAIACAAIAAgCIAAgOIAAgBIgCgBIAAAAgAAAgZIgBADIAAAPIABACIAAAAIACAAIAAgCIAAgPIAAgDIgCAAIAAAAg");
	this.shape_39.setTransform(44.475,586.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgVAsIAAgRIAMgPQAGgHADgHQADgHAAgGIAAgBIgBgFIgCgDIgEAAIgGABIgFABIgHgQIAKgEQAFgBAHAAQAHAAAFADQAFAEADAGQACAGAAAHIAAABQAAAGgCAGQgCAFgDAGIgHAKIgHAJIATAAIAAASg");
	this.shape_40.setTransform(39.45,586.725);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgLAsIgKgDIAFgSIAHACIAGABQADAAABgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAAgBQAAgCgCgDIgFgHIgEgEIgGgGIgEgHIgBgKIAAgBQAAgLAFgGQAGgHAKAAIAIABIAKADIgFARIgGgBIgEgBQgDAAgCABQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAABQABACABACIAFAGIACACIACACIAGAGQADADABAFQACAEAAAGIAAABQAAAIgDAFQgDAGgFADQgFADgGAAIgLgBg");
	this.shape_41.setTransform(33.325,586.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgSArIAAhVIAlAAIAAASIgSAAIAAAPIAPAAIAAARIgPAAIAAARIASAAIAAASg");
	this.shape_42.setTransform(28.975,586.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgJArIAAhVIATAAIAABVg");
	this.shape_43.setTransform(25.45,586.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAEArIgGggIgCAAIAAAgIgUAAIAAhVIAWAAQAJAAAFADQAFACACAGQADAGAAAGIAAAHQAAAGgCAFQgCADgDADIAKAmgAgEgFIABAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAIABgEIAAgJIgBgDQAAgBAAAAQAAAAAAAAQgBgBAAAAQgBAAgBABIgBAAg");
	this.shape_44.setTransform(21.325,586.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgSArIAAhVIAlAAIAAASIgSAAIAAAPIAPAAIAAARIgPAAIAAARIASAAIAAASg");
	this.shape_45.setTransform(16.475,586.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgLAsIgKgDIAFgSIAHACIAGABQADAAABgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgHIgEgEIgGgGIgEgHIgBgKIAAgBQAAgLAFgGQAGgHAKAAIAIABIAKADIgFARIgGgBIgEgBQgDAAgCABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABQABACABACIAFAGIACACIACACIAGAGQADADABAFQACAEAAAGIAAABQAAAIgDAFQgDAGgFADQgFADgGAAIgLgBg");
	this.shape_46.setTransform(12.025,586.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(364));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(150,51.15,0.9088,0.9084);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(269).to({alpha:0},16).wait(79));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(150,527.15,0.5386,0.5386,0,0,0,0,0.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(285).to({_off:false},0).wait(1).to({regX:0.4,regY:4,x:150.2,y:529.15,alpha:0.0032},0).wait(1).to({y:529,alpha:0.0145},0).wait(1).to({y:528.7,alpha:0.0371},0).wait(1).to({y:528.25,alpha:0.077},0).wait(1).to({y:527.4,alpha:0.1467},0).wait(1).to({y:525.9,alpha:0.2672},0).wait(1).to({y:524.1,alpha:0.4164},0).wait(1).to({y:522.3,alpha:0.5648},0).wait(1).to({y:520.75,alpha:0.6887},0).wait(1).to({y:519.6,alpha:0.7859},0).wait(1).to({y:518.65,alpha:0.8625},0).wait(1).to({y:517.9,alpha:0.9229},0).wait(1).to({y:517.4,alpha:0.9628},0).wait(1).to({y:517.15,alpha:0.9857},0).wait(1).to({y:517,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:150,y:514.95,alpha:1},0).wait(63));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(-154.6,356.25,0.7482,0.7482);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(269).to({_off:false},0).wait(1).to({regX:-0.3,regY:-340.7,x:-153.8,y:101.35},0).wait(1).to({x:-150.35},0).wait(1).to({x:-143.45},0).wait(1).to({x:-131.3},0).wait(1).to({x:-110.1},0).wait(1).to({x:-73.4},0).wait(1).to({x:-27.9},0).wait(1).to({x:17.25},0).wait(1).to({x:55},0).wait(1).to({x:84.6},0).wait(1).to({x:107.9},0).wait(1).to({x:126.35},0).wait(1).to({x:138.5},0).wait(1).to({x:145.45},0).wait(1).to({x:148.85},0).wait(1).to({regX:0,regY:0,x:150,y:356.25},0).wait(79));

	// other_prizes
	this.instance_4 = new lib.other_prizes_orig_mc();
	this.instance_4.setTransform(146.6,300.5,1,1,0,0,0,128.6,75.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(181).to({_off:false},0).wait(1).to({y:300.4,alpha:0.0037},0).wait(1).to({y:300.05,alpha:0.0167},0).wait(1).to({y:299.4,alpha:0.0435},0).wait(1).to({y:298.2,alpha:0.0919},0).wait(1).to({y:295.95,alpha:0.1816},0).wait(1).to({y:292.35,alpha:0.3248},0).wait(1).to({y:288.3,alpha:0.4878},0).wait(1).to({y:284.6,alpha:0.6345},0).wait(1).to({y:281.75,alpha:0.7499},0).wait(1).to({y:279.5,alpha:0.8388},0).wait(1).to({y:277.75,alpha:0.9088},0).wait(1).to({y:276.55,alpha:0.9564},0).wait(1).to({y:275.9,alpha:0.9834},0).wait(1).to({y:275.55,alpha:0.9964},0).wait(1).to({y:275.5,alpha:1},0).wait(74).to({alpha:0.9968},0).wait(1).to({alpha:0.9855},0).wait(1).to({alpha:0.9629},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.8533},0).wait(1).to({alpha:0.7328},0).wait(1).to({alpha:0.5836},0).wait(1).to({alpha:0.4352},0).wait(1).to({alpha:0.3113},0).wait(1).to({alpha:0.2141},0).wait(1).to({alpha:0.1375},0).wait(1).to({alpha:0.0771},0).wait(1).to({alpha:0.0372},0).wait(1).to({alpha:0.0143},0).wait(1).to({alpha:0.0031},0).wait(1).to({alpha:0},0).wait(79));

	// other_text
	this.instance_5 = new lib.other_prizes_mc();
	this.instance_5.setTransform(150.45,510.35,0.9375,0.9371,0,0,0,110,50.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(181).to({_off:false},0).wait(1).to({regX:109.8,regY:45.9,x:150.25,y:506.3,alpha:0.0037},0).wait(1).to({y:505.95,alpha:0.0167},0).wait(1).to({y:505.3,alpha:0.0435},0).wait(1).to({y:504.1,alpha:0.0919},0).wait(1).to({y:501.85,alpha:0.1816},0).wait(1).to({y:498.25,alpha:0.3248},0).wait(1).to({y:494.2,alpha:0.4878},0).wait(1).to({y:490.5,alpha:0.6345},0).wait(1).to({y:487.65,alpha:0.7499},0).wait(1).to({y:485.4,alpha:0.8388},0).wait(1).to({y:483.65,alpha:0.9088},0).wait(1).to({y:482.45,alpha:0.9564},0).wait(1).to({y:481.8,alpha:0.9834},0).wait(1).to({y:481.45,alpha:0.9964},0).wait(1).to({regX:110,regY:50.1,x:150.45,y:485.35,alpha:1},0).wait(74).to({regX:109.8,regY:45.9,x:150.25,y:481.4,alpha:0.9968},0).wait(1).to({alpha:0.9855},0).wait(1).to({alpha:0.9629},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.8533},0).wait(1).to({alpha:0.7328},0).wait(1).to({alpha:0.5836},0).wait(1).to({alpha:0.4352},0).wait(1).to({alpha:0.3113},0).wait(1).to({alpha:0.2141},0).wait(1).to({alpha:0.1375},0).wait(1).to({alpha:0.0771},0).wait(1).to({alpha:0.0372},0).wait(1).to({alpha:0.0143},0).wait(1).to({alpha:0.0031},0).wait(1).to({regX:110,regY:50.1,x:150.45,y:485.35,alpha:0},0).wait(79));

	// sub_caption
	this.instance_6 = new lib.daily_caption_mc();
	this.instance_6.setTransform(147.35,549,0.9375,0.9375);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({regX:3.3,regY:-52.1,x:150.45,y:500.05,alpha:0.0037},0).wait(1).to({y:499.8,alpha:0.0167},0).wait(1).to({y:499.3,alpha:0.0435},0).wait(1).to({y:498.4,alpha:0.0919},0).wait(1).to({y:496.7,alpha:0.1816},0).wait(1).to({y:494.05,alpha:0.3248},0).wait(1).to({y:491,alpha:0.4878},0).wait(1).to({y:488.25,alpha:0.6345},0).wait(1).to({y:486.05,alpha:0.7499},0).wait(1).to({y:484.4,alpha:0.8388},0).wait(1).to({y:483.1,alpha:0.9088},0).wait(1).to({y:482.2,alpha:0.9564},0).wait(1).to({y:481.7,alpha:0.9834},0).wait(1).to({y:481.45,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:147.35,y:530.25,alpha:1},0).wait(69).to({regX:3.3,regY:-52.1,x:150.45,y:481.4,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:0.9081},0).wait(1).to({alpha:0.8184},0).wait(1).to({alpha:0.6752},0).wait(1).to({alpha:0.5122},0).wait(1).to({alpha:0.3655},0).wait(1).to({alpha:0.2501},0).wait(1).to({alpha:0.1612},0).wait(1).to({alpha:0.0912},0).wait(1).to({alpha:0.0436},0).wait(1).to({alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:147.35,y:530.25,alpha:0},0).to({_off:true},73).wait(95));

	// second_prize_mc
	this.instance_7 = new lib.second_prize_mc();
	this.instance_7.setTransform(149.75,300.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(98).to({_off:false},0).wait(1).to({regX:1.6,regY:-0.1,x:151.35,y:300.3,alpha:0.0037},0).wait(1).to({y:299.95,alpha:0.0167},0).wait(1).to({y:299.25,alpha:0.0435},0).wait(1).to({y:298,alpha:0.0919},0).wait(1).to({x:151.4,y:295.65,alpha:0.1816},0).wait(1).to({y:291.95,alpha:0.3248},0).wait(1).to({x:151.45,y:287.7,alpha:0.4878},0).wait(1).to({x:151.5,y:283.9,alpha:0.6345},0).wait(1).to({x:151.55,y:280.9,alpha:0.7499},0).wait(1).to({x:151.6,y:278.55,alpha:0.8388},0).wait(1).to({y:276.75,alpha:0.9088},0).wait(1).to({y:275.5,alpha:0.9564},0).wait(1).to({y:274.8,alpha:0.9834},0).wait(1).to({y:274.45,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:150.05,y:274.5,alpha:1},0).wait(69).to({regX:1.6,regY:-0.1,x:151.65,y:274.4,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:0.9081},0).wait(1).to({alpha:0.8184},0).wait(1).to({alpha:0.6752},0).wait(1).to({alpha:0.5122},0).wait(1).to({alpha:0.3655},0).wait(1).to({alpha:0.2501},0).wait(1).to({alpha:0.1612},0).wait(1).to({alpha:0.0912},0).wait(1).to({alpha:0.0436},0).wait(1).to({alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:150.05,y:274.5,alpha:0},0).wait(74).to({regX:1.6,regY:-0.1,scaleX:0.9986,scaleY:0.9986,x:151.65,y:274.85,alpha:0.0032},0).wait(1).to({scaleX:0.9937,scaleY:0.9937,x:151.7,y:276.45,alpha:0.0145},0).wait(1).to({scaleX:0.9837,scaleY:0.9837,x:151.85,y:279.75,alpha:0.0371},0).wait(1).to({scaleX:0.9662,scaleY:0.9662,x:152.1,y:285.55,alpha:0.077},0).wait(1).to({scaleX:0.9357,scaleY:0.9357,x:152.55,y:295.65,alpha:0.1467},0).wait(1).to({scaleX:0.8828,scaleY:0.8828,x:153.25,y:313.1,alpha:0.2672},0).wait(1).to({scaleX:0.8174,scaleY:0.8174,x:154.2,y:334.7,alpha:0.4164},0).wait(1).to({scaleX:0.7523,scaleY:0.7523,x:155.15,y:356.2,alpha:0.5648},0).wait(1).to({scaleX:0.698,scaleY:0.698,x:155.9,y:374.2,alpha:0.6887},0).wait(1).to({scaleX:0.6553,scaleY:0.6553,x:156.5,y:388.3,alpha:0.7859},0).wait(1).to({scaleX:0.6218,scaleY:0.6218,x:157,y:399.4,alpha:0.8625},0).wait(1).to({scaleX:0.5953,scaleY:0.5953,x:157.35,y:408.15,alpha:0.9229},0).wait(1).to({scaleX:0.5778,scaleY:0.5778,x:157.6,y:413.95,alpha:0.9628},0).wait(1).to({scaleX:0.5677,scaleY:0.5677,x:157.75,y:417.25,alpha:0.9857},0).wait(1).to({scaleX:0.5628,scaleY:0.5628,x:157.8,y:418.85,alpha:0.9969},0).wait(1).to({regX:0.6,regY:0.4,scaleX:0.5615,scaleY:0.5615,x:157,y:419.4,alpha:1},0).wait(79));

	// main_caption
	this.instance_8 = new lib.sub_caption_mc();
	this.instance_8.setTransform(147.35,549,0.9375,0.9375);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({_off:false},0).wait(1).to({regX:1.2,regY:-36.9,x:148.5,y:514.3,alpha:0.0037},0).wait(1).to({y:514.05,alpha:0.0167},0).wait(1).to({y:513.55,alpha:0.0435},0).wait(1).to({y:512.65,alpha:0.0919},0).wait(1).to({y:510.95,alpha:0.1816},0).wait(1).to({y:508.3,alpha:0.3248},0).wait(1).to({y:505.25,alpha:0.4878},0).wait(1).to({y:502.5,alpha:0.6345},0).wait(1).to({y:500.3,alpha:0.7499},0).wait(1).to({y:498.65,alpha:0.8388},0).wait(1).to({y:497.35,alpha:0.9088},0).wait(1).to({y:496.45,alpha:0.9564},0).wait(1).to({y:495.95,alpha:0.9834},0).wait(1).to({y:495.7,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:147.35,y:530.25,alpha:1},0).wait(69).to({regX:1.2,regY:-36.9,x:148.5,y:495.7,alpha:0.9963},0).wait(1).to({y:495.95,alpha:0.9833},0).wait(1).to({y:496.45,alpha:0.9565},0).wait(1).to({y:497.35,alpha:0.9081},0).wait(1).to({y:499.05,alpha:0.8184},0).wait(1).to({y:501.7,alpha:0.6752},0).wait(1).to({y:504.75,alpha:0.5122},0).wait(1).to({y:507.5,alpha:0.3655},0).wait(1).to({y:509.7,alpha:0.2501},0).wait(1).to({y:511.35,alpha:0.1612},0).wait(1).to({y:512.65,alpha:0.0912},0).wait(1).to({y:513.55,alpha:0.0436},0).wait(1).to({y:514.05,alpha:0.0166},0).wait(1).to({y:514.3,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:147.35,y:549,alpha:0},0).to({_off:true},156).wait(95));

	// promo
	this.instance_9 = new lib.promo_mc();
	this.instance_9.setTransform(412.45,360,0.7807,0.7807);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:6.1,regY:-119.5,x:416.2,y:266.7,alpha:0.0037},0).wait(1).to({x:412.8,alpha:0.0167},0).wait(1).to({x:405.75,alpha:0.0435},0).wait(1).to({x:393.05,alpha:0.0919},0).wait(1).to({x:369.5,alpha:0.1816},0).wait(1).to({x:331.95,alpha:0.3248},0).wait(1).to({x:289.15,alpha:0.4878},0).wait(1).to({x:250.65,alpha:0.6345},0).wait(1).to({x:220.35,alpha:0.7499},0).wait(1).to({x:197.05,alpha:0.8388},0).wait(1).to({x:178.65,alpha:0.9088},0).wait(1).to({x:166.15,alpha:0.9564},0).wait(1).to({x:159.05,alpha:0.9834},0).wait(1).to({x:155.65,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:150,y:360,alpha:1},0).wait(83).to({alpha:0},15).wait(157).to({regX:6.1,regY:-119.5,scaleX:0.7795,scaleY:0.7795,x:154.75,y:266.65,alpha:0.0032},0).wait(1).to({scaleX:0.7752,scaleY:0.7752,y:266.6,alpha:0.0145},0).wait(1).to({scaleX:0.7667,scaleY:0.7667,x:154.7,y:266.5,alpha:0.0371},0).wait(1).to({scaleX:0.7517,scaleY:0.7517,x:154.6,y:266.35,alpha:0.077},0).wait(1).to({scaleX:0.7254,scaleY:0.7254,x:154.4,y:265.95,alpha:0.1467},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:154.15,y:265.4,alpha:0.2672},0).wait(1).to({scaleX:0.6237,scaleY:0.6237,x:153.85,y:264.65,alpha:0.4164},0).wait(1).to({scaleX:0.5678,scaleY:0.5678,x:153.5,y:263.95,alpha:0.5648},0).wait(1).to({scaleX:0.5211,scaleY:0.5211,x:153.3,y:263.35,alpha:0.6887},0).wait(1).to({scaleX:0.4844,scaleY:0.4844,x:153.05,y:262.85,alpha:0.7859},0).wait(1).to({scaleX:0.4556,scaleY:0.4556,x:152.9,y:262.5,alpha:0.8625},0).wait(1).to({scaleX:0.4328,scaleY:0.4328,x:152.8,y:262.2,alpha:0.9229},0).wait(1).to({scaleX:0.4177,scaleY:0.4177,x:152.7,y:262.05,alpha:0.9628},0).wait(1).to({scaleX:0.4091,scaleY:0.4091,x:152.65,y:261.9,alpha:0.9857},0).wait(1).to({scaleX:0.4049,scaleY:0.4049,x:152.6,y:261.85,alpha:0.9969},0).wait(1).to({regX:0.4,regY:0,scaleX:0.4037,scaleY:0.4037,x:150.2,y:310.1,alpha:1},0).wait(79));

	// background
	this.instance_10 = new lib.background_mc();
	this.instance_10.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(364));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-138.5,300,700.2,300);
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