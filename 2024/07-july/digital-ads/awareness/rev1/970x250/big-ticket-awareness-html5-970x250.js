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
	this.instance.setTransform(-1119,-235,2.4955,2.4955);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-1119,-235,963.3,519.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Ag5HGQgbgLgRgYQgQgXgBglQACgvAggcQAhgcAzAAQAzAAAiAcQAgAcACAvQgBAlgQAXQgRAYgaALQgcALgfgBQgeABgbgLgAhoCeIAAptIDRAAIAAJtg");
	this.shape.setTransform(621.35,-50.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah7HMQg2gMgygUIA2i+QAoAQAeAKQAgAKAaAAQAmAAASgOQASgOAAgeIAAgGQAAgZgSgdQgUgegsgrIgognQgmglgbgjQgaglgPgsQgOgsAAg+IAAgCQABh4A8hCQA8hDBsgBQArAAAyALQAzALAyAUIg2CwQgfgJgbgGQgbgFgOAAQgkAAgSAPQgRAPAAAcIAAAEQAAAXAUAYQAVAYAhAjIAWAWIAVAWQAmAlAcAjQAdAjAOAuQAQAtAABEIAAABQgBBUgdA7QgeA8g2AfQg1AfhHABQg8AAg1gMg");
	this.shape_1.setTransform(575.65,-51.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjKHKIAAuTIGTAAIAADDIjBAAIAACcICdAAIAADEIidAAIAACtIDDAAIAADDg");
	this.shape_2.setTransform(530.275,-51.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjuHKIAAi3ID+oXIjgAAIAAjFIG+AAIAAC4IkBIWIEAAAIAADFg");
	this.shape_3.setTransform(480.55,-51.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhoHKIAAuTIDRAAIAAOTg");
	this.shape_4.setTransform(440.525,-51.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAmHKIhIldIgPAAIAAFdIjSAAIAAuTIDhAAQBlAAA5AgQA4AfAXA5QAXA5gBBNIAABBQAABHgSAwQgSAuggAcIBoGTgAgxg7IAKAAQAbAAAMgNQAKgMAAgfIAAhYQAAgegKgNQgLgNgcAAIgKAAg");
	this.shape_5.setTransform(397.2,-51.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjxHKIAAuTIDfAAQBlAAA5AgQA5AfAXA5QAWA5gBBNIAABNQAABighA1QgiA2g6AVQg7AWhLgBIgMAAIAAFRgAgegwIAHAAQAaABAMgNQAMgMAAggIAAhjQAAgegLgNQgMgNgbAAIgHAAg");
	this.shape_6.setTransform(340.3021,-51.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdHKIAAlpIg5AAIAAFpIjSAAIAAuTIDSAAIAAFaIA5AAIAAlaIDSAAIAAOTg");
	this.shape_7.setTransform(270.8,-51.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah7HMQg2gMgygUIA2i+QAnAQAgAKQAfAKAaAAQAmAAASgOQASgOAAgeIAAgGQABgZgUgdQgSgegtgrIgngnQgmglgbgjQgbglgPgsQgOgsAAg+IAAgCQABh4A8hCQA8hDBsgBQArAAAyALQAzALAyAUIg2CwQgggJgagGQgagFgOAAQglAAgSAPQgRAPAAAcIAAAEQAAAXAUAYQAVAYAiAjIAUAWIAXAWQAmAlAbAjQAdAjAPAuQAPAtAABEIAAABQgBBUgdA7QgeA8g2AfQg1AfhHABQg8AAg1gMg");
	this.shape_8.setTransform(220.75,-51.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABEHKIgRizIhlAAIgQCzIjOAAIB4uTIEwAAIB6OTgAAfBUIgaj1IgFhMIgDBMIgaD1IA8AAg");
	this.shape_9.setTransform(167.2,-51.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfHYQiCAAhChGQhDhGAAiIIAAmHQAAiIBDhGQBChGCCAAIABAAQA2AAArAJQAuAKAoASIhMCpQgQgFgVgCQgTgDgQAAIgCAAQgoAAgWAaQgTAagBAxIAAFeQABAxAZAZQAZAaArAAIACAAQASAAAUgEQASgEAWgJIBMCoQgvAXgwALQgvALg7AAg");
	this.shape_10.setTransform(115.6,-51.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjyHKIAAuTIDiAAQBJAAA6AhQA7AgAiA9QAiA8AABUIAAFyQAABVgiA+QgiA9g6AiQg6AhhJAAgAgfEEIAHAAQAgAAAJgPQAKgPgBglIAAmLQAAgkgMgLQgNgLgZABIgHAAg");
	this.shape_11.setTransform(662.55,-169.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjKHKIAAuTIGTAAIAADDIjBAAIAACcICdAAIAADEIidAAIAACtIDDAAIAADDg");
	this.shape_12.setTransform(613.525,-169.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AjKHKIAAuTIGTAAIAADDIjBAAIAACcICdAAIAADEIidAAIAACtIDDAAIAADDg");
	this.shape_13.setTransform(568.425,-169.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhoHKIAArEIiBAAIAAjPIHTAAIAADPIiBAAIAALEg");
	this.shape_14.setTransform(520.825,-169.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgCHKIg6pEIAAJEIjTAAIAAuTIEVAAIA3I2IAAo2IDSAAIAAOTg");
	this.shape_15.setTransform(466.35,-169.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABEHKIgRizIhlAAIgQCzIjPAAIB5uTIEwAAIB6OTgAAfBUIgaj1IgFhMIgDBMIgbD1IA9AAg");
	this.shape_16.setTransform(406.25,-169.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAmHKIhIldIgPAAIAAFdIjTAAIAAuTIDiAAQBlAAA4AgQA6AfAWA5QAWA5gBBNIAABBQAABHgRAwQgSAuggAcIBnGTgAgxg7IAKAAQAbAAALgNQAMgMgBgfIAAhYQABgegLgNQgLgNgcAAIgKAAg");
	this.shape_17.setTransform(347.2,-169.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABEHKIgRizIhlAAIgQCzIjOAAIB4uTIEwAAIB6OTgAAfBUIgaj1IgFhMIgDBMIgaD1IA8AAg");
	this.shape_18.setTransform(288.15,-169.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ah8G2Qg4gagfg2Qgfg1gBhSIAAquIDXAAIAAKzQAAAVAHAIQAHAJAPAAQAPABAGgKQAHgJAAgUIAAqzIDXAAIAAKuQAABJgbA2QgbA2g2AdQg1AehRABQhIAAg2gag");
	this.shape_19.setTransform(229.725,-168.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ai1GYQg+hAABh+IAAmyQAAhRAkg5QAjg5A8geQA+geBNgBQA1AAA4AQQA4APAzAbIhMC1QgagOgegHQgegHgdAAQgqAAgUAWQgUAWACAvIAAGRQAAAYAHAKQAJAKAPgBQAKAAAGgCQAGgBACgCIAAlKIDGAAIAAHTQglAWgiAPQggAPgkAHQgjAIgtAAQh/AAg9hBg");
	this.shape_20.setTransform(175.0998,-169.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AjjHSIAAi5QBAhHA7hRQA8hQAmhMQAnhNABg+IAAgHQgBglgNgUQgOgTgTgIQgUgHgUAAQgiABgfAJIg0APIhBiuQAmgVA9gPQA8gQBHAAQBOABA2AnQA1AmAcA/QAcBAAABLIAAAFQAABEgWA/QgVA/gjA5QgjA4goAzQgoAyglArIDOAAIAADDg");
	this.shape_21.setTransform(106.775,-170.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag5HRIAAqtIhfAVIAAjDIExhGIAAOhg");
	this.shape_22.setTransform(59.425,-170.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFE400").s().p("AhoHKIAAkEIivqPIDZAAIA/EyIA+kyIDZAAIivKPIAAEEg");
	this.shape_23.setTransform(532.3,-287.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFE400").s().p("AAAHYQh5gBg8hBQg+hBAAh6IAAm0QACiBA/g+QBBg/BxAAIABAAQB5ABA9BCQA8BBAAB6IAAG0QgBCAg/A+Qg+A/hyAAgAgVkIQgHAKAAAVIAAHVQABAUAGAJQAHAJAOAAIAAAAQAPAAAHgJQAHgJgBgUIAAnVQAAgVgGgKQgIgJgOAAIgBAAQgPAAgFAJg");
	this.shape_24.setTransform(475.45,-287.9752);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE400").s().p("AhwHDQg1gPg3gcIBNi2QAaAOAXAIQAWAHAVAAQAgAAANgTQANgUgBgpIAAp/IDWAAIAAKiQgBB5g/BDQg/BChuABQgrAAg0gOg");
	this.shape_25.setTransform(421.05,-287.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFE400").s().p("AhoHKIAAkEIivqPIDZAAIBAEyIA+kyIDYAAIivKPIAAEEg");
	this.shape_26.setTransform(356.05,-287.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFE400").s().p("AjVHKIAAuTIDSAAIAALEIDZAAIAADPg");
	this.shape_27.setTransform(300.925,-287.775);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFE400").s().p("Ah8G2Qg4gagfg2Qgfg1gBhTIAAqtIDXAAIAAKzQAAAUAHAJQAHAKAPgBQAPAAAGgJQAHgJAAgUIAAqzIDXAAIAAKtQAABKgbA1QgbA2g2AfQg1AdhRABQhIAAg2gag");
	this.shape_28.setTransform(247.275,-287.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFE400").s().p("AhwHDQg1gPg3gcIBNi2QAaAOAXAIQAWAHAWAAQAfAAANgTQAMgUAAgpIAAp/IDWAAIAAKiQgBB5g/BDQg/BChuABQgqAAg1gOg");
	this.shape_29.setTransform(191.8,-287.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(40.4,-357.6,651.3000000000001,402.3), null);


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
	this.instance.setTransform(-139,-123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-139,-123.5,278,247), null);


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
	this.instance.setTransform(-658,-244,1.8126,1.8126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-658,-244,503.9,520.2), null);


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
	this.instance.setTransform(64,-388,3.5542,3.5542);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.other_prize_mc, new cjs.Rectangle(64,-388,945.4,295), null);


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
	this.instance.setTransform(140,-293,4.508,4.508);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(140,-293,1100,211.9), null);


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
	this.instance.setTransform(-1083,161,2.5791,2.5791);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bt_logo, new cjs.Rectangle(-1083,161,283.70000000000005,162.5), null);


// stage content:
(lib.bigticketawarenesshtml5970x250 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(947,228,0.923,0.923);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWA4IgIgBIgEgBIgCgZIALADIAJACIAGgBQADAAACgDIACgIIgCAAIgCAAQgHABgHgDQgFgDgCgGQgDgFACgKIALgzIAYAAIgJAyIAAAEIACABIABAAIABAAIAGgcIAGgbIAYAAIgRBPQgEARgIAIQgIAHgPAAIgHAAg");
	this.shape.setTransform(936.9,237.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXA5IAXhxIAYAAIgXBxg");
	this.shape_1.setTransform(932.15,234.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUA5IgNgEIAXhuIAYAAIgGAdIADAAQAPAAAFAHQAFAIgDAPIgGAYQgDARgIAHQgIAIgPAAIgNgBgAgEAiIABAAQABAAAAAAQABAAABAAQAAAAAAgBQAAAAAAgBIADgGIAFgXQABgFgBgBQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_2.setTransform(926.61,234.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWA7IARhQIAYAAIgRBQgAABgkQgBgDAAgGQABgHAEgCQADgEAGAAQAFAAACAEQADACgCAHQgBAGgEADQgDADgGABQgFgBgCgDg");
	this.shape_3.setTransform(921.8531,234.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTArIgMgDIAHgXIAJACIAJABIAGAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAIAAgDIgDgDIgCgBIgDgBQgIgEgDgFQgDgHACgKQABgHAEgFQAEgGAGgDQAGgEAJAAIAJAAIALADIgGAXIgIgCIgIgBIgFABIgCADIABACIADACIADABIACACIAIAFQAEADABAEQACAFgCAHQgBAIgFAGQgEAGgHAEQgIADgKAAIgDAAIgGAAg");
	this.shape_4.setTransform(916.825,235.7833);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAqIALg4QAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIgCgBIgCAAIgBABIgMA8IgZAAIARhPIARgDIANgBQAMAAAGAFQAGAHgDANIgNA6g");
	this.shape_5.setTransform(910.575,235.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAkQgFgIACgQIAGgXQADgQAJgIQAJgHAMAAQAOAAAFAHQAFAIgDAQIgFAXQgDAQgJAIQgJAHgMAAQgOAAgFgHgAABgRIgBAFIgFAZIAAAFQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIAAgFIAGgZIAAgFQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBABg");
	this.shape_6.setTransform(904.2172,235.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglA6IAYhyIAKgBIAKAAIAIAAQAPAAAFAHQAEAIgDAQIgFAYQgDAQgJAHQgIAIgOAAIgDAAIgGAdgAgBAFIABAAQAAAAABAAQAAAAABAAQABAAAAgBQABAAAAgBIADgFIAEgXQACgGgCgBQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_7.setTransform(897.26,237.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTArIgMgDIAHgXIAJACIAJABIAGAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAIAAgDIgDgDIgCgBIgDgBQgIgEgDgFQgDgHACgKQABgHAEgFQAEgGAGgDQAGgEAJAAIAJAAIALADIgGAXIgIgCIgIgBIgFABIgCADIABACIADACIADABIACACIAIAFQAEADABAEQACAFgCAHQgBAIgFAGQgEAGgHAEQgIADgKAAIgDAAIgGAAg");
	this.shape_8.setTransform(891.425,235.7833);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAjQgHgIADgQIAFgWQADgQAJgIQAJgHANAAQAOAAAEAHQAFAIgDAPIgFATIgcAAIgBAFQgBAEACACQADACAFAAIAGAAIAGgBIgDAWIgKACIgHAAQgQAAgGgIgAACgTIgBAFIgBAGIAFAAIACgGIAAgFQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBAAIgCACg");
	this.shape_9.setTransform(885.64,235.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBA5IAAgrIgCAAIgJArIgaAAIAYhxIAbAAQAMABAGADQAGAEACAHQABAHgCAKIgCAIQgCAJgDAGQgDAEgFAEIACAygAAAgGIACAAQADAAACgCQABgBABgEIACgLQABgEgBgBQAAgBAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgCAAg");
	this.shape_10.setTransform(878.6281,234.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWA4IgHgBIgGgBIgBgZIALADIAIACIAIgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAgBIADgIIgDAAIgCAAQgGABgGgDQgGgDgCgGQgDgFACgKIALgzIAYAAIgJAyIAAAEIACABIABAAIABAAIAGgcIAFgbIAZAAIgRBPQgDARgJAIQgIAHgPAAIgHAAg");
	this.shape_11.setTransform(869.9,237.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAlQgFgHACgMIABgBQACgMAIgGQAIgGANgBIABAAIADABIAAgEQACgFgCgBQgCgCgFAAIgJABIgKADIAMgYIAEgBIAGgCIAHAAQALAAAFADQAGADABAGQACAHgCAJIgLA1IgQADIgNABQgOAAgFgGgAgCAJQgCACgBADIAAACQgBADABACQABAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIABAAIACgPIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_12.setTransform(863.3109,235.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYA5IAYhxIAZAAIgZBxg");
	this.shape_13.setTransform(858.65,234.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmA5IAYhxIAaAAQANABAGADQAGAEABAHQACAHgCAKIgCAJQgDANgGAFQgFAHgHACQgJADgIAAIgBAAIgJAqgAAAgFIABAAQADAAACgBQACgCABgEIACgMQABgEgBgBQgBgCgEAAIgBAAg");
	this.shape_14.setTransform(853.1571,234.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKAvIAAgbIgShCIAXAAIAFAgIAHggIAWAAIgSBCIAAAbg");
	this.shape_15.setTransform(133.225,237.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAvIAAhdIAVAAIAABIIAWAAIAAAVg");
	this.shape_16.setTransform(127.6,237.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAXAAQAKAAAFAEQAGACACAHQADAFAAAIIAAAIQAAAKgEAEQgDAGgGADQgGABgHAAIgBAAIAAAjgAgCgEIABAAIACgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAIAAgLIgBgEIgDgBIgBAAg");
	this.shape_17.setTransform(122.225,237.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAXAAQAKAAAFAEQAGACACAHQADAFAAAIIAAAIQAAAKgEAEQgDAGgGADQgGABgHAAIgBAAIAAAjgAgCgEIABAAIACgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAIAAgLIgBgEIgDgBIgBAAg");
	this.shape_18.setTransform(116.575,237.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAHAvIgCgSIgKAAIgBASIgVAAIAMhdIAfAAIAMBdgAADAJIgDgYIAAgJIAAAJIgCAYIAFAAg");
	this.shape_19.setTransform(110.75,237.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLAvIgLgDIAFgTIAHACIAHABQADAAABgBQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAAAQAAgDgCgDIgFgHIgFgEIgGgHQgDgEgCgEQgBgFAAgGQAAgNAHgGQAGgHAJAAIAKABQAFABAGACIgGASIgGgBIgEgBQgEAAgCACQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIAAAAQAAADABACIAGAGIACACIACADIAHAGIAFAJQABAEABAHQAAAJgDAGQgEAGgFADQgGADgGAAIgLgBg");
	this.shape_20.setTransform(103.75,237.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFAUIgEgnIATAAIgDAng");
	this.shape_21.setTransform(99.775,234.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgQApQgHgHAAgOIAAgnQAAgOAHgIQAHgGAMgBIAKABIAJAEIgIARIgDgBIgEAAQgEAAgDADQgBACAAAFIAAAjQAAAFACADQADACAEAAIAAAAIAEAAIAEgBIAIARQgFACgFABQgFACgGgBQgMAAgHgHg");
	this.shape_22.setTransform(96.025,237.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZAqQgHgGAAgMIAAgMQAAgGADgFQAEgDAEAAIgDgIIgBgHIAAgHQAAgIACgFQABgGAGgCQAEgCAIAAQAGAAAEACQAEACACAFQABAGAAAIIAAAGIAAAHQgBAEgDADQgDADgFABIAIALIgBgFIgBgGIASAAIAAAMIgBAJIgDAIIAMASIgWAAIgBgDIgHADIgHABQgOAAgHgGgAgLAPIAAADIAAADQAAAFACACQACADAEAAIACgBIABAAIgLgSgAgGgbIAAADIAAAKIAAACIAAABIADgBIABgFIAAgHIAAgDIgCgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAg");
	this.shape_23.setTransform(89.65,237.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAvIAAhHIgOAAIAAgWIAvAAIAAAWIgNAAIAABHg");
	this.shape_24.setTransform(83.55,237.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIA8IAAh3IASAAIAAB3g");
	this.shape_25.setTransform(74.8,238.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLAuQgGgBgGgDIAIgSIAFADIAHABQADAAABgCIABgGIAAgIIgBgFIgCgEQgCgBgFAAIgFABIgFACIAFg0IAjAAIAAAUIgOAAIgBAMQAIABAEAGQAFAHAAALIAAALQAAANgHAHQgGAHgLAAQgGAAgFgCgAABgOIAAAAIAAAAIAAAAIAAAAIgBAAg");
	this.shape_26.setTransform(65.575,237.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMAuQgFgDgEgFQgCgGAAgIIAAgLIAAgFIAAgFIABgDIAJgYIAJgXIATAAIgGARIgHAQIAAABIAAgBIABAAIABAAQAKAAAGAHQAEAGAAALIAAALQAAAIgDAGQgCAGgGAEQgFADgIAAQgGAAgGgCgAgBAEIgBACIAAATIABADIABAAIACAAIABgDIAAgTIgBgCIgCgBIgBABg");
	this.shape_27.setTransform(59.95,237.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgXAwIAAgTIAOgQIAJgPQADgIAAgGIAAgBQAAgEgBgCQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAAAIgFgBIgGABIgGABIgGgSIAKgDQAGgCAHAAQAIAAAFAEQAFAEADAHQADAGAAAIIAAAAQAAAHgCAHQgCAFgEAGIgIALIgIAKIAWAAIAAAUg");
	this.shape_28.setTransform(54.5,237.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMAvIgLgDIAGgTIAIACIAFABQAEAAABgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAAAQAAgDgCgDIgGgHIgDgEIgHgHQgDgEgCgEQgBgFAAgGQAAgNAGgGQAGgHALAAIAJABQAGABAEACIgFASIgGgBIgEgBQgEAAgBACQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAAAQAAADABACIAFAGIADACIACADIAHAGIAEAJQABAEAAAHQAAAJgCAGQgEAGgFADQgFADgHAAIgMgBg");
	this.shape_29.setTransform(47.9,237.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgUAvIAAhdIApAAIAAAUIgUAAIAAAQIAQAAIAAATIgQAAIAAASIAUAAIAAAUg");
	this.shape_30.setTransform(43.275,237.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgKAvIAAhdIAVAAIAABdg");
	this.shape_31.setTransform(39.425,237.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAEAvIgHgkIgBAAIAAAkIgWAAIAAhdIAXAAQAKAAAGAEQAFACADAHQACAFAAAIIAAAHQAAAHgCAFQgCAEgDACIALAqgAgEgFIABAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgJIgBgEIgDgBIgBAAg");
	this.shape_32.setTransform(34.975,237.35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgUAvIAAhdIApAAIAAAUIgUAAIAAAQIAQAAIAAATIgQAAIAAASIAUAAIAAAUg");
	this.shape_33.setTransform(29.775,237.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgLAvIgLgDIAFgTIAIACIAGABQADAAABgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIAAAAQAAgDgCgDIgFgHIgFgEIgGgHQgDgEgBgEQgCgFAAgGQAAgNAGgGQAHgHAJAAIAKABQAFABAGACIgGASIgGgBIgEgBQgEAAgCACQAAAAAAABQAAAAAAABQAAAAAAABQgBAAABABIAAAAQgBADABACIAGAGIACACIACADIAHAGIAFAJQABAEABAHQAAAJgEAGQgDAGgFADQgFADgHAAIgLgBg");
	this.shape_34.setTransform(24.9,237.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(212));

	// footer_bg
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5050F").s().p("EgjWAB9IAAj5IAxAAMBFOAAAIAuAAIAAD5g");
	this.shape_35.setTransform(745.975,237.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(212));

	// ticket
	this.instance_1 = new lib.ticket_mc();
	this.instance_1.setTransform(101.85,112.6,0.4156,0.4156,0,0,0,-0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(179).to({_off:false},0).wait(1).to({regX:-637.4,regY:24.5,x:-161.85,y:122.75},0).wait(1).to({x:-157.55},0).wait(1).to({x:-148.85,y:122.8},0).wait(1).to({x:-133.6,y:122.9},0).wait(1).to({x:-106.9,y:123},0).wait(1).to({x:-60.75,y:123.25},0).wait(1).to({x:-3.6,y:123.55},0).wait(1).to({x:53.25,y:123.85},0).wait(1).to({x:100.7,y:124.1},0).wait(1).to({x:137.95,y:124.3},0).wait(1).to({x:167.25,y:124.45},0).wait(1).to({x:190.4,y:124.55},0).wait(1).to({x:205.65,y:124.65},0).wait(1).to({x:214.45,y:124.7},0).wait(1).to({x:218.7},0).wait(1).to({regX:0.1,regY:0.1,x:484.85,y:114.6},0).wait(17));

	// logo
	this.instance_2 = new lib.bt_logo();
	this.instance_2.setTransform(484.85,19,0.4261,0.4261,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(179).to({alpha:0},16).wait(17));

	// cta
	this.instance_3 = new lib.cta_mc();
	this.instance_3.setTransform(484.85,198.4,0.2992,0.2992,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(195).to({_off:false},0).wait(1).to({regX:690,regY:-187.1,x:691.25,y:142.25,alpha:0.0032},0).wait(1).to({y:142.05,alpha:0.0145},0).wait(1).to({y:141.65,alpha:0.0371},0).wait(1).to({y:140.9,alpha:0.077},0).wait(1).to({y:139.6,alpha:0.1467},0).wait(1).to({y:137.4,alpha:0.2672},0).wait(1).to({y:134.65,alpha:0.4164},0).wait(1).to({y:131.9,alpha:0.5648},0).wait(1).to({y:129.6,alpha:0.6887},0).wait(1).to({y:127.8,alpha:0.7859},0).wait(1).to({y:126.4,alpha:0.8625},0).wait(1).to({y:125.3,alpha:0.9229},0).wait(1).to({y:124.55,alpha:0.9628},0).wait(1).to({y:124.15,alpha:0.9857},0).wait(1).to({y:123.95,alpha:0.9969},0).wait(1).to({regX:0.1,regY:0.1,x:484.85,y:179.95,alpha:1},0).wait(1));

	// sub_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(483.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:365.4,regY:-169.6,x:673.6,y:133.25,alpha:0.0037},0).wait(1).to({y:133.1,alpha:0.0167},0).wait(1).to({y:132.8,alpha:0.0435},0).wait(1).to({y:132.3,alpha:0.0919},0).wait(1).to({x:673.55,y:131.35,alpha:0.1816},0).wait(1).to({x:673.5,y:129.8,alpha:0.3248},0).wait(1).to({x:673.45,y:128.1,alpha:0.4878},0).wait(1).to({x:673.4,y:126.5,alpha:0.6345},0).wait(1).to({x:673.35,y:125.3,alpha:0.7499},0).wait(1).to({y:124.35,alpha:0.8388},0).wait(1).to({x:673.3,y:123.6,alpha:0.9088},0).wait(1).to({y:123.1,alpha:0.9564},0).wait(1).to({y:122.8,alpha:0.9834},0).wait(1).to({y:122.65,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:483.05,y:211.05,alpha:1},0).wait(60).to({x:483.4,y:211.25},0).wait(1).to({regX:365.4,regY:-169.6,x:673.65,y:122.85,alpha:0.9963},0).wait(1).to({y:123,alpha:0.9833},0).wait(1).to({y:123.3,alpha:0.9565},0).wait(1).to({y:123.8,alpha:0.9081},0).wait(1).to({y:124.7,alpha:0.8184},0).wait(1).to({y:126.2,alpha:0.6752},0).wait(1).to({y:127.9,alpha:0.5122},0).wait(1).to({y:129.45,alpha:0.3655},0).wait(1).to({y:130.65,alpha:0.2501},0).wait(1).to({y:131.6,alpha:0.1612},0).wait(1).to({y:132.3,alpha:0.0912},0).wait(1).to({y:132.8,alpha:0.0436},0).wait(1).to({y:133.1,alpha:0.0166},0).wait(1).to({y:133.25,alpha:0.0036},0).wait(1).to({regX:0.1,regY:0.1,x:483.4,y:221.7,alpha:0},0).wait(107));

	// other_prize
	this.instance_5 = new lib.other_prize_mc();
	this.instance_5.setTransform(484.85,221.1,0.3828,0.3828,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:536.7,regY:-240.5,x:690.2,y:128.95,alpha:0.0037},0).wait(1).to({y:128.8,alpha:0.0167},0).wait(1).to({y:128.5,alpha:0.0435},0).wait(1).to({y:127.9,alpha:0.0919},0).wait(1).to({y:126.9,alpha:0.1816},0).wait(1).to({y:125.25,alpha:0.3248},0).wait(1).to({y:123.4,alpha:0.4878},0).wait(1).to({y:121.7,alpha:0.6345},0).wait(1).to({y:120.4,alpha:0.7499},0).wait(1).to({y:119.35,alpha:0.8388},0).wait(1).to({y:118.55,alpha:0.9088},0).wait(1).to({y:118,alpha:0.9564},0).wait(1).to({y:117.7,alpha:0.9834},0).wait(1).to({y:117.55,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:484.85,y:209.65,alpha:1},0).wait(67).to({regX:536.7,regY:-240.5,x:690.85,y:117.5,alpha:0.9968},0).wait(1).to({x:693.2,alpha:0.9855},0).wait(1).to({x:697.95,y:117.45,alpha:0.9629},0).wait(1).to({x:706.3,y:117.35,alpha:0.923},0).wait(1).to({x:720.85,y:117.15,alpha:0.8533},0).wait(1).to({x:746.1,y:116.9,alpha:0.7328},0).wait(1).to({x:777.3,y:116.55,alpha:0.5836},0).wait(1).to({x:808.35,y:116.15,alpha:0.4352},0).wait(1).to({x:834.3,y:115.85,alpha:0.3113},0).wait(1).to({x:854.65,y:115.65,alpha:0.2141},0).wait(1).to({x:870.65,y:115.45,alpha:0.1375},0).wait(1).to({x:883.3,y:115.3,alpha:0.0771},0).wait(1).to({x:891.65,y:115.2,alpha:0.0372},0).wait(1).to({x:896.45,y:115.15,alpha:0.0143},0).wait(1).to({x:898.75,alpha:0.0031},0).wait(1).to({regX:0.1,regY:0.1,x:694.1,y:207.25,alpha:0},0).wait(17));

	// second_prize_mc
	this.instance_6 = new lib.second_prize_mc();
	this.instance_6.setTransform(330,148.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({y:148.0262,alpha:0.0037},0).wait(1).to({y:147.7652,alpha:0.0167},0).wait(1).to({y:147.2308,alpha:0.0435},0).wait(1).to({y:146.2628,alpha:0.0919},0).wait(1).to({y:144.4687,alpha:0.1816},0).wait(1).to({y:141.6041,alpha:0.3248},0).wait(1).to({y:138.3445,alpha:0.4878},0).wait(1).to({y:135.4109,alpha:0.6345},0).wait(1).to({y:133.1018,alpha:0.7499},0).wait(1).to({y:131.3241,alpha:0.8388},0).wait(1).to({y:129.9247,alpha:0.9088},0).wait(1).to({y:128.9721,alpha:0.9564},0).wait(1).to({y:128.4313,alpha:0.9834},0).wait(1).to({y:128.172,alpha:0.9964},0).wait(1).to({y:128.1,alpha:1},0).wait(67).to({x:330.6918,y:128.095,alpha:0.9968},0).wait(1).to({x:333.1115,y:128.0776,alpha:0.9855},0).wait(1).to({x:337.981,y:128.0425,alpha:0.9629},0).wait(1).to({x:346.5572,y:127.9806,alpha:0.923},0).wait(1).to({x:361.5433,y:127.8726,alpha:0.8533},0).wait(1).to({x:387.438,y:127.6859,alpha:0.7328},0).wait(1).to({x:419.5318,y:127.4545,alpha:0.5836},0).wait(1).to({x:451.4373,y:127.2245,alpha:0.4352},0).wait(1).to({x:478.0747,y:127.0325,alpha:0.3113},0).wait(1).to({x:498.9773,y:126.8818,alpha:0.2141},0).wait(1).to({x:515.4348,y:126.7631,alpha:0.1375},0).wait(1).to({x:528.4284,y:126.6695,alpha:0.0771},0).wait(1).to({x:537.0082,y:126.6076,alpha:0.0372},0).wait(1).to({x:541.9271,y:126.5722,alpha:0.0143},0).wait(1).to({x:544.3249,y:126.5549,alpha:0.0031},0).wait(1).to({x:545,y:126.55,alpha:0},0).wait(17));

	// promo
	this.instance_7 = new lib.promo_mc();
	this.instance_7.setTransform(630.65,116.65,0.4337,0.4337,0,0,0,0.1,0);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-406,regY:16.1,x:453.95,y:123.65,alpha:0.0037},0).wait(1).to({x:452.05,alpha:0.0167},0).wait(1).to({x:448.15,alpha:0.0435},0).wait(1).to({x:441.1,alpha:0.0919},0).wait(1).to({x:428,alpha:0.1816},0).wait(1).to({x:407.1,alpha:0.3248},0).wait(1).to({x:383.35,alpha:0.4878},0).wait(1).to({x:361.95,alpha:0.6345},0).wait(1).to({x:345.15,alpha:0.7499},0).wait(1).to({x:332.2,alpha:0.8388},0).wait(1).to({x:322,alpha:0.9088},0).wait(1).to({x:315.05,alpha:0.9564},0).wait(1).to({x:311.1,alpha:0.9834},0).wait(1).to({x:309.2,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0,x:484.85,y:116.65,alpha:1},0).wait(83).to({alpha:0},15).to({_off:true},54).wait(45));

	// background
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5050F").s().p("EhLyATiMAAAgnDMCXmAAAMAAAAnDg");
	this.shape_36.setTransform(484.85,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(212));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(121.8,125,958.6000000000001,146.60000000000002);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 970,
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