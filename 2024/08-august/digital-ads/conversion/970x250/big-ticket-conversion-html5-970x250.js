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
p.nominalBounds = new cjs.Rectangle(0,0,481,150);


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
	this.shape.graphics.f("#FFFFFF").s().p("Ag6HFQgagLgQgXQgRgXAAgkQAAgxAigcQAhgbAygBQAzABAhAbQAiAcAAAxQAAAkgRAXQgQAXgbALQgaALggAAQgfAAgbgLgAhoCdIAAptIDSAAIAAJtg");
	this.shape.setTransform(785.65,-167.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaHKIAAnQQAAgSgHgIQgHgJgOAAIgMAAIgLACIAAHxIjIAAIAAuTIDIAAIAADlIASgBIARAAQBoAAA4AxQA4AxAABsIAAHhg");
	this.shape_1.setTransform(736.7,-168.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACCGmQhnAAg3gYQg3gYgUguQgWguABhCIAAkPIg7AAIAAi1IA7AAIAAi5IDIAAIAAC5IBrAAIAAC1IhrAAIAADbQgBApATAQQAUAPAwgCIAWAAIAAC8g");
	this.shape_2.setTransform(687.85,-164.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbFYIAAnQQAAgSgIgJQgHgIgPgBIgLABIgLACIAAHxIjIAAIAAqEQBCgUA+gLQA9gMAvAAQBmAAA5AxQA3AxABBsIAAHhg");
	this.shape_3.setTransform(640.1,-156.8502);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AACFeIgBAAQhtAAg5g9Qg5g+gBiAIAAjGQABiAA5g9QA5g9BtAAIABAAQBsAAA5A9QA4A9ABCAIAADGQgBCAg4A+Qg5A9hqAAIgCAAgAgSiUQgGAOAAAdIAADTQAAAdAGANQAFAOAOgBIABAAQANAAAFgOQAGgNAAgcIAAjTQAAgdgGgNQgFgOgNAAIgBAAQgOAAgFANg");
	this.shape_4.setTransform(587.2,-156.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACWHKIAAquIgJBpIg+JFIidAAIg/pFIgJhpIAAKuIjMAAIAAuTIFAAAIAeGxIAEBGIAFhGIAhmxIE9AAIAAOTg");
	this.shape_5.setTransform(522.55,-168.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhoFaQgugFg9gRIASjAQAqAOAmAIQAnAIAjAAQAeABASgGQATgHABgRQAAgOgJgJQgKgJgWgKIgWgJIgYgKQhHgfgkg0Qgkg3AAhQQAAg1AVguQAWguAugcQAtgcBGgCQAbgBAwAGQAxAFA0AQIgRC5QghgLghgGQgggHghAAQgZAAgMAIQgOAHAAAOQAAAMALAIQAJAIAWAKIAUAJIAVAKQAuAUAhAaQAhAaASAlQASAmABA6QAAA+gYAyQgYAxg1AeQg2AdhYABIgEAAQgaAAgrgEg");
	this.shape_6.setTransform(446.1005,-156.0554);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhjHdIAAqSIDHAAIAAKSgAhFkoQgXgbAAgzQAAgvAXgcQAYgbAtgBQAqABAYAbQAYAcAAAvQAAAzgYAbQgYAcgqABQgtgBgYgcg");
	this.shape_7.setTransform(408,-170.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAbHKIAAnQQAAgSgIgIQgHgJgPAAIgLAAIgLACIAAHxIjIAAIAAuTIDIAAIAADlIATgBIARAAQBmAAA4AxQA5AxAABsIAAHhg");
	this.shape_8.setTransform(366.4,-168.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhoHKIAArEIiBAAIAAjPIHTAAIAADPIiBAAIAALEg");
	this.shape_9.setTransform(315.325,-168.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AgNHYQgZAAgggFQgggEgcgGQgbgFgQgEIg0jCQAtAOAtAIQAtAJAeAAQAgABAUgFQARgFAJgTQAHgUAAgrIgXAAIgCAAQhuAAg5g+Qg5g9AAh/IAAiaQAAiIA5g/QA6g+BuAAIABAAQArAAA8AEQA9AEA8AFIAAKcQABCIg6A/Qg5A/h7AAIgCAAgAgRkOQgIANAAApIAACdQAAApAIANQAHAMAWgBIADAAIAGAAIAEAAIABiQIABiRIgKAAIgCAAIgDAAQgUAAgJANg");
	this.shape_10.setTransform(249.5002,-144.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AhjHdIAAqSIDHAAIAAKSgAhEkoQgYgbAAgzQAAgvAYgcQAXgbAsgBQArABAZAbQAXAcAAAvQAAAzgXAbQgZAcgrABQgsgBgXgcg");
	this.shape_11.setTransform(209.05,-170.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("Aj0HKIAAuTIDnAAQBHAAA5AWQA4AYAgAxQAgAyAABPIAAAXQABBEgXAuQgWAsg1AXQA3ATAaAtQAaAuAABPIAAA3QAABQgeA2QgeA2g1AcQg2AbhJAAgAgiEEIANAAQAaAAAJgOQAKgMgBgYIAAhbQABgZgJgOQgJgNgbAAIgNAAgAgihlIAQAAQAaAAAKgOQAJgMgBgYIAAg4QABgZgJgNQgJgOgbAAIgQAAg");
	this.shape_12.setTransform(167.175,-168.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AAaFYIAAnQQAAgSgHgJQgHgIgOgBIgMABIgLACIAAHxIjIAAIAAqEQBDgUA8gLQA/gMAtAAQBoAAA3AxQA4AxABBsIAAHhg");
	this.shape_13.setTransform(97.45,-156.8502);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AhjHdIAAqSIDHAAIAAKSgAhFkoQgXgbAAgzQAAgvAXgcQAZgbAsgBQArABAXAbQAYAcAAAvQAAAzgYAbQgXAcgrABQgsgBgZgcg");
	this.shape_14.setTransform(55.85,-170.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AAoHKIgoomIgnImIkPAAIhDuTIDeAAIALK/IA8q/ICpAAIA9K/IAKq/IDfAAIhFOTg");
	this.shape_15.setTransform(1.2,-168.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-40.3,-238.1,849.3,165.7), null);


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
	this.instance.setTransform(-329,-447,1.8509,1.8509);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.other_prize_mc, new cjs.Rectangle(-329,-447,890.3,277.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Ag6HFQgagLgRgXQgQgWAAglQABgxAggcQAigbAygBQAzABAhAbQAiAcABAxQgBAlgRAWQgQAXgbALQgaALggAAQgeAAgcgLgAhoCdIAAptIDRAAIAAJtg");
	this.shape.setTransform(792.2,-152.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMHJQgZAAgggEQgggFgcgFQgcgFgQgFIg1jCQAuAOAtAJQAtAJAfAAQAgAAATgFQASgFAIgUQAIgTAAgsIgRABIgRAAQg6ABgxgUQgxgTgfgwQgdgwgChSIAAmjIDKAAIAAGeQAAARAHAJQAHAJAOAAIALgBIALgCIABjhIAAjdIDHAAIAAKLQABCIg5BAQg6A+h6AAIgCAAg");
	this.shape_1.setTransform(743.2008,-127.6748);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AirEoQg1g1AAhiIAAgKQAAhiA1g0QA2g0BsgBIAPAAIAUABIAAgaQABgngTgPQgSgPgyAAQgeAAglAJQglAJgkAOIA1jCQAKgFAWgFQAXgFAdgFQAcgEAaAAQBXAAA0AZQA0AaAVAzQAWAzAABNIAAGvQg+AQg5AKQg5AKg6AAQhsAAg2g1gAgMBLQgMALgBAZIAAASQABAcAMAMQAMANAPAAIALAAIAAh4IgLAAQgPAAgMANg");
	this.shape_2.setTransform(689.0256,-141.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AisGUQg1g8ABiDIAAjGQgBiBA1g9QA1g8B4AAIAYAAIAAjkIDIAAIAAN/Qg4AOg4AJQg5AIg2ABIgCAAQh3AAg1g8gAgRgiQgJANABAoIAADAQgBAnAJAPQAJAMAWgBIALAAIAAlDIgLAAIgDAAQgUAAgIANg");
	this.shape_3.setTransform(636.0741,-152.7498);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMHJQgZAAgggEQgggFgcgFQgcgFgQgFIg1jCQAuAOAtAJQAtAJAfAAQAgAAATgFQASgFAIgUQAIgTAAgsIgRABIgRAAQg6ABgxgUQgxgTgfgwQgdgwgChSIAAmjIDKAAIAAGeQAAARAHAJQAHAJAOAAIALgBIALgCIABjhIAAjdIDHAAIAAKLQABCIg5BAQg6A+h6AAIgCAAg");
	this.shape_4.setTransform(582.9508,-127.6748);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AikFYIAAqTQAmgLA7gIQA6gJBBAAIBtAAIAAC7IhtAAIgSAAIgPACIAAHyg");
	this.shape_5.setTransform(538.175,-141.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiVEeQhEhAgBiHIAAi6QgBiAA4g+QA4g8B0AAQBsAAAzA8QA0A9gBCAIAACgIjuAAIAAAjQAAAfAWASQAYASAvAAQAVAAAbgDQAbgDAVgFIASC1QgrAJgnAEQgnAFgbAAIgCAAQh4AAhDhAgAgNikQgFANAAAdIAAA0IAxAAIAAg0QABgdgGgNQgFgNgOABIgBAAQgNAAgGAMg");
	this.shape_6.setTransform(492.875,-141.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiAFKIhwqTIDJAAIAsHjIAjnjIDJAAIhkKTg");
	this.shape_7.setTransform(440.075,-140.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjKHKIAAuTIGTAAIAADDIjBAAIAACcICdAAIAADEIidAAIAACtIDDAAIAADDg");
	this.shape_8.setTransform(391.075,-153.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AgNHYQgZAAgggFQgggEgcgGQgcgFgPgEIg1jCQAuAOAsAIQAuAJAfAAQAfABAUgFQARgFAIgTQAJgUgBgrIgWAAIgDAAQhuAAg4g+Qg6g9gBh/IAAiaQABiIA6g/QA5g+BuAAIACAAQArAAA7AEQA9AEA8AFIAAKcQABCIg6A/Qg5A/h7AAIgCAAgAgRkOQgIANAAApIAACdQAAApAHANQAIAMAWgBIADAAIAGAAIAEAAIAAiQIABiRIgKAAIgBAAIgDAAQgUAAgJANg");
	this.shape_9.setTransform(325.6002,-129.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AhjHeIAAqTIDHAAIAAKTgAhEknQgYgcAAgzQAAgvAYgcQAXgbAsgBQArABAZAbQAXAcAAAvQAAAzgXAcQgZAbgrABQgsgBgXgbg");
	this.shape_10.setTransform(285.1,-155.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("Aj0HKIAAuTIDnAAQBHAAA5AWQA4AYAgAxQAgAyAABPIAAAXQABBEgXAuQgWAsg1AXQA3ATAaAtQAaAuAABPIAAA3QAABQgeA2QgeA2g1AcQg2AbhJAAgAgiEEIANAAQAaAAAJgOQAKgMgBgYIAAhbQABgZgJgOQgJgNgbAAIgNAAgAgihlIAQAAQAaAAAKgOQAJgMgBgYIAAg4QABgZgJgNQgJgOgbAAIgQAAg");
	this.shape_11.setTransform(243.225,-153.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AAbFYIAAnRQAAgRgIgJQgHgIgPgBIgLABIgLACIAAHxIjIAAIAAqEQBCgUA+gLQA9gMAuAAQBogBA4AyQA3AxABBsIAAHhg");
	this.shape_12.setTransform(173.55,-141.9002);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AhjHeIAAqTIDHAAIAAKTgAhFknQgXgcAAgzQAAgvAXgcQAZgbAsgBQArABAXAbQAYAcAAAvQAAAzgYAcQgXAbgrABQgsgBgZgbg");
	this.shape_13.setTransform(131.9,-155.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AAoHKIgoomIgnImIkOAAIhFuTIDfAAIAKK/IA9q/ICpAAIA9K/IAKq/IDeAAIhDOTg");
	this.shape_14.setTransform(77.3,-153.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_sub_caption_mc, new cjs.Rectangle(35.7,-223.1,779.8,165.6), null);


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


(lib.consolation_sub_caption_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhOEDQgigDgugNIANiQQAgALAdAFQAdAHAagBQAXABANgEQAOgGAAgMQABgLgHgGQgHgIgRgHIgRgHIgRgHQg1gYgbgmQgcgpAAg9QAAgnARgjQAQgiAigVQAigVA0gCQAVAAAkAEQAkAEAnAMIgMCKQgZgIgZgEQgYgGgZAAQgTAAgIAHQgLAFAAAKQAAAKAIAFQAHAGAQAIIAPAGIAQAIQAiAPAZAUQAaAUANAbQANAcABArQAAAvgSAmQgSAkgoAWQgoAXhCABIgEAAQgUAAgfgEg");
	this.shape.setTransform(503.3257,-21.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah7ECIAAnuQAdgIAsgHQAsgFAwgBIBSAAIAACNIhSAAIgNAAIgMAAIAAF2g");
	this.shape_1.setTransform(472.425,-21.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhvDWQgzgwgBhlIAAiLQgBhgAqguQAqguBXABQBRgBAmAuQAnAtgBBgIAAB4IiyAAIAAAbQAAAXARANQARANAkABQAPAAAVgDQAUgCAQgEIANCIQggAHgdADQgdADgVAAIgCAAQhZAAgygwgAgJh7QgEAKAAAWIAAAnIAlAAIAAgnQAAgWgEgKQgEgJgLAAIgBAAQgJAAgEAJg");
	this.shape_2.setTransform(438.475,-21.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUECIAAlcQAAgNgGgGQgFgHgLAAIgJAAIgIACIAAF0IiVAAIAAniQAxgQAugIQAvgJAhAAQBOAAAqAlQAqAkAABRIAAFpg");
	this.shape_3.setTransform(399.15,-21.6503);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATECIAAlcQABgNgGgGQgFgHgLAAIgJAAIgIACIAAF0IiWAAIAAniQAygQAugIQAvgJAhAAQBOAAApAlQArAkAABRIAAFpg");
	this.shape_4.setTransform(358.45,-21.6503);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhKFmIAAntICVAAIAAHtgAgzjdQgSgVAAgmQAAgkASgUQASgVAhAAQAgAAASAVQASAUAAAkQAAAmgSAVQgSAUggABQghgBgSgUg");
	this.shape_5.setTransform(327.225,-31.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAeFYIgemdIgdGdIjLAAIgzqvICnAAIAIIPIAtoPIB/AAIAtIPIAIoPICnAAIgzKvg");
	this.shape_6.setTransform(286.225,-30.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvDWQgzgwgBhlIAAiLQgBhgAqguQAqguBXABQBRgBAmAuQAnAtgBBgIAAB4IiyAAIAAAbQAAAXARANQARANAkABQAPAAAVgDQAUgCAQgEIANCIQggAHgdADQgdADgVAAIgCAAQhZAAgygwgAgJh7QgEAKAAAWIAAAnIAlAAIAAgnQAAgWgEgKQgEgJgLAAIgBAAQgJAAgEAJg");
	this.shape_7.setTransform(226.175,-21.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah7ECIAAnuQAdgIAsgHQAsgFAwgBIBSAAIAACNIhSAAIgNAAIgMAAIAAF2g");
	this.shape_8.setTransform(193.975,-21.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AABEGIAAAAQhSABgrguQgqgvgBhgIAAiUQABhgAqguQArguBSABIAAAAQBRgBArAuQAqAuABBgIAACUQgBBggqAvQgqAthQAAIgCAAgAgOhvQgEALAAAWIAACeQAAAVAEAKQAFAKAKAAIAAAAQAKAAAFgKQADgKAAgVIAAieQAAgWgDgKQgFgKgKgBIAAAAQgKAAgFAKg");
	this.shape_9.setTransform(159.6,-21.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABxFYIAAoCIgHBOIgvG0Ih1AAIgvm0IgHhOIAAICIiZAAIAAqvIDwAAIAWFGIADAzIAEgzIAZlGIDtAAIAAKvg");
	this.shape_10.setTransform(111.15,-30.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AizCTIAAhrIFnAAIAABrgAizgnIAAhrIFnAAIAABrg");
	this.shape_11.setTransform(50.525,-19.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AhOEDQgigDgugNIANiQQAgALAdAFQAdAHAagBQAXABANgEQAOgGAAgMQABgLgHgGQgHgIgRgHIgRgHIgRgHQg1gYgbgmQgcgpAAg9QAAgnARgjQAQgiAigVQAigVA0gCQAVAAAkAEQAkAEAnAMIgMCKQgZgIgZgEQgYgGgZAAQgTAAgIAHQgLAFAAAKQAAAKAIAFQAHAGAQAIIAPAGIAQAIQAiAPAZAUQAaAUANAbQANAcABArQAAAvgSAmQgSAkgoAWQgoAXhCABIgEAAQgUAAgfgEg");
	this.shape_12.setTransform(1.7257,-21.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AhvDWQgzgwgBhlIAAiLQgBhgAqguQAqguBXABQBRgBAmAuQAnAtgBBgIAAB4IiyAAIAAAbQAAAXARANQARANAkABQAPAAAVgDQAUgCAQgEIANCIQggAHgdADQgdADgVAAIgCAAQhZAAgygwgAgJh7QgEAKAAAWIAAAnIAlAAIAAgnQAAgWgEgKQgEgJgLAAIgBAAQgJAAgEAJg");
	this.shape_13.setTransform(-34.925,-21.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AiVD3IAAiMICIjVIh9AAIAAiMIEZAAIAACLIiFDVICMAAIAACNg");
	this.shape_14.setTransform(-70.2,-20.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AhKFmIAAntICVAAIAAHtgAgzjdQgSgVAAgmQAAgkASgUQASgVAhAAQAgAAASAVQASAUAAAkQAAAmgSAVQgSAUggABQghgBgSgUg");
	this.shape_15.setTransform(-98.625,-31.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("Ah7ECIAAnuQAdgIAsgHQAsgFAwgBIBSAAIAACNIhSAAIgNAAIgMAAIAAF2g");
	this.shape_16.setTransform(-122.725,-21.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("Ai0FYIAAqvICnAAQBMABAqAXQArAYARArQARAqgBA6IAAA6QAABJgZAoQgZAogsAQQgsAQg4AAIgJAAIAAD9gAgWgkIAFAAQAUABAIgKQAKgJgBgXIAAhLQABgWgJgKQgIgKgVAAIgFAAg");
	this.shape_17.setTransform(-158.3743,-30.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE400").s().p("AhvDWQgzgwgBhlIAAiLQgBhgAqguQAqguBXABQBRgBAmAuQAnAtgBBgIAAB4IiyAAIAAAbQAAAXARANQARANAkABQAPAAAVgDQAUgCAQgEIANCIQggAHgdADQgdADgVAAIgCAAQhZAAgygwgAgJh7QgEAKAAAWIAAAnIAlAAIAAgnQAAgWgEgKQgEgJgLAAIgBAAQgJAAgEAJg");
	this.shape_18.setTransform(-208.975,-21.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE400").s().p("Ah7ECIAAnuQAdgIAsgHQAsgFAwgBIBSAAIAACNIhSAAIgNAAIgMAAIAAF2g");
	this.shape_19.setTransform(-241.225,-21.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE400").s().p("AABEGIAAAAQhSABgrguQgqgvgBhgIAAiUQABhgAqguQArguBSABIAAAAQBRgBArAuQAqAuABBgIAACUQgBBggqAvQgqAthQAAIgCAAgAgOhvQgEALAAAWIAACeQAAAVAEAKQAFAKAKAAIAAAAQAKAAAFgKQADgKAAgVIAAieQAAgWgDgKQgFgKgKgBIAAAAQgKAAgFAKg");
	this.shape_20.setTransform(-275.55,-21.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFE400").s().p("ABwFYIAAoCIgGBOIgvG0Ih1AAIgvm0IgHhOIAAICIiZAAIAAqvIDwAAIAWFGIADAzIAEgzIAZlGIDtAAIAAKvg");
	this.shape_21.setTransform(-324,-30.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.consolation_sub_caption_mc, new cjs.Rectangle(-354.5,-82.9,876.6,124.9), null);


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
(lib.bigticketconversionhtml5970x250 = function(mode,startPosition,loop,reversed) {
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
	this.shape_15.setTransform(132.375,237.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAvIAAhdIAVAAIAABIIAWAAIAAAVg");
	this.shape_16.setTransform(126.75,237.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAXAAQAKAAAFAEQAGACACAHQADAFAAAIIAAAIQAAAKgEAEQgDAGgGADQgGABgHAAIgBAAIAAAjgAgCgEIABAAIACgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAIAAgLIgBgEIgDgBIgBAAg");
	this.shape_17.setTransform(121.375,237.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAXAAQAKAAAFAEQAGACACAHQADAFAAAIIAAAIQAAAKgEAEQgDAGgGADQgGABgHAAIgBAAIAAAjgAgCgEIABAAIACgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAIAAgLIgBgEIgDgBIgBAAg");
	this.shape_18.setTransform(115.725,237.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAHAvIgCgSIgKAAIgBASIgVAAIAMhdIAeAAIANBdgAADAJIgCgYIgBgJIAAAJIgDAYIAGAAg");
	this.shape_19.setTransform(109.9,237.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMAvIgLgDIAGgTIAIACIAFABQAEAAABgBQAAgBABAAQAAgBABAAQAAgBAAAAQAAgBAAgBIAAAAQAAgDgCgDIgGgHIgDgEIgHgHQgDgEgBgEQgCgFAAgGQAAgNAGgGQAHgHAJAAIAKABQAGABAEACIgFASIgGgBIgEgBQgEAAgBACQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAAAQAAADABACIAFAGIADACIABADIAIAGIAEAJQABAEAAAHQAAAJgDAGQgDAGgFADQgGADgGAAIgMgBg");
	this.shape_20.setTransform(102.9,237.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFAUIgEgnIATAAIgDAng");
	this.shape_21.setTransform(98.925,234.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgQApQgHgHAAgOIAAgnQAAgOAHgIQAHgGAMgBIAKABIAJAEIgIARIgDgBIgEAAQgEAAgDADQgBACAAAFIAAAjQAAAFACADQADACAEAAIAAAAIAEAAIAEgBIAIARQgFACgFABQgFACgGgBQgMAAgHgHg");
	this.shape_22.setTransform(95.175,237.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZAqQgHgGAAgMIAAgMQAAgGADgFQAEgDAFAAIgEgIIgBgHIAAgHQAAgIABgFQADgGAEgCQAFgCAJAAQAFAAAEACQAEACABAFQADAGAAAIIAAAGIgBAHQgCAEgDADQgCADgFABIAIALIgBgFIgBgGIASAAIAAAMIgBAJIgDAIIAMASIgWAAIgCgDIgGADIgGABQgPAAgHgGgAgLAPIAAADIAAADQAAAFACACQACADAFAAIABgBIABAAIgLgSgAgGgbIgBADIAAAKIAAACIAAABIAEgBIABgFIAAgHIAAgDIgCgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAg");
	this.shape_23.setTransform(88.8,237.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKAvIAAhHIgNAAIAAgWIAvAAIAAAWIgNAAIAABHg");
	this.shape_24.setTransform(82.7,237.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJA8IAAh3IASAAIAAB3g");
	this.shape_25.setTransform(73.95,238.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLAuQgGgDgDgFQgDgGAAgIIAAgLIAAgFIABgFIABgDIAIgYIAKgXIASAAIgGARIgHAQIAAABIAAgBIABAAIABAAQALAAAEAHQAGAGgBALIAAALQAAAIgCAGQgEAGgFAEQgGADgHAAQgGAAgFgCgAgBAEIAAACIAAATIAAADIABAAIACAAIABgDIAAgTIgCgCIgBgBIgBABg");
	this.shape_26.setTransform(66.4,237.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMAuQgFgDgEgFQgCgGAAgIIAAgLIAAgFIABgFIAAgDIAJgYIAJgXIATAAIgGARIgHAQIAAABIAAgBIABAAIABAAQAKAAAGAHQAEAGAAALIAAALQAAAIgCAGQgDAGgGAEQgFADgIAAQgGAAgGgCgAgBAEIgBACIAAATIABADIABAAIACAAIABgDIAAgTIgBgCIgCgBIgBABg");
	this.shape_27.setTransform(60.85,237.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgWAwIAAgTIAMgQIAKgPQAEgIAAgGIAAgBQgBgEgBgCQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAgBAAIgDgBIgHABIgFABIgHgSIAKgDQAGgCAHAAQAIAAAFAEQAGAEADAHQACAGAAAIIAAAAQAAAHgCAHQgCAFgEAGIgIALIgHAKIAVAAIAAAUg");
	this.shape_28.setTransform(55.35,237.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgLAvIgLgDIAFgTIAIACIAGABQADAAABgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIAAAAQAAgDgCgDIgFgHIgFgEIgGgHQgDgEgBgEQgCgFAAgGQAAgNAGgGQAHgHAJAAIAKABQAFABAGACIgGASIgGgBIgEgBQgEAAgCACQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIAAAAQAAADABACIAGAGIACACIACADIAHAGIAFAJQABAEABAHQAAAJgEAGQgDAGgFADQgFADgHAAIgLgBg");
	this.shape_29.setTransform(48.75,237.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgUAvIAAhdIApAAIAAAUIgUAAIAAAQIAQAAIAAATIgQAAIAAASIAUAAIAAAUg");
	this.shape_30.setTransform(44.125,237.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgKAvIAAhdIAVAAIAABdg");
	this.shape_31.setTransform(40.275,237.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAEAvIgHgkIgBAAIAAAkIgWAAIAAhdIAXAAQAKAAAGAEQAFACADAHQACAFAAAIIAAAHQAAAHgCAFQgCAEgDACIALAqgAgEgFIABAAQAAAAABAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIAAgJIgBgEIgDgBIgBAAg");
	this.shape_32.setTransform(35.825,237.35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgUAvIAAhdIApAAIAAAUIgUAAIAAAQIAQAAIAAATIgQAAIAAASIAUAAIAAAUg");
	this.shape_33.setTransform(30.625,237.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgMAvIgLgDIAGgTIAHACIAGABQAEAAABgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAAAQAAgDgCgDIgGgHIgDgEIgHgHQgDgEgCgEQgBgFAAgGQAAgNAHgGQAFgHALAAIAJABQAGABAEACIgFASIgGgBIgEgBQgEAAgBACQgBAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIAAAAQABADABACIAFAGIADACIACADIAHAGIAEAJQACAEgBAHQAAAJgCAGQgEAGgFADQgFADgHAAIgMgBg");
	this.shape_34.setTransform(25.75,237.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(283));

	// footer_bg
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5050F").s().p("EgjWAB9IAAj5IAxAAMBFOAAAIAuAAIAAD5g");
	this.shape_35.setTransform(745.975,237.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(283));

	// ticket
	this.instance_1 = new lib.ticket_mc();
	this.instance_1.setTransform(101.85,112.6,0.4156,0.4156,0,0,0,-0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(250).to({_off:false},0).wait(1).to({regX:-637.4,regY:24.5,x:-161.85,y:122.75},0).wait(1).to({x:-157.55},0).wait(1).to({x:-148.85,y:122.8},0).wait(1).to({x:-133.6,y:122.9},0).wait(1).to({x:-106.9,y:123},0).wait(1).to({x:-60.75,y:123.25},0).wait(1).to({x:-3.6,y:123.55},0).wait(1).to({x:53.25,y:123.85},0).wait(1).to({x:100.7,y:124.1},0).wait(1).to({x:137.95,y:124.3},0).wait(1).to({x:167.25,y:124.45},0).wait(1).to({x:190.4,y:124.55},0).wait(1).to({x:205.65,y:124.65},0).wait(1).to({x:214.45,y:124.7},0).wait(1).to({x:218.7},0).wait(1).to({regX:0.1,regY:0.1,x:484.85,y:114.6},0).wait(17));

	// logo
	this.instance_2 = new lib.bt_logo();
	this.instance_2.setTransform(484.85,19,0.4261,0.4261,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(250).to({alpha:0},16).wait(17));

	// cta
	this.instance_3 = new lib.cta_mc();
	this.instance_3.setTransform(484.85,198.4,0.2992,0.2992,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(266).to({_off:false},0).wait(1).to({regX:690,regY:-187.1,x:691.25,y:142.25,alpha:0.0032},0).wait(1).to({y:142.05,alpha:0.0145},0).wait(1).to({y:141.65,alpha:0.0371},0).wait(1).to({y:140.9,alpha:0.077},0).wait(1).to({y:139.6,alpha:0.1467},0).wait(1).to({y:137.4,alpha:0.2672},0).wait(1).to({y:134.65,alpha:0.4164},0).wait(1).to({y:131.9,alpha:0.5648},0).wait(1).to({y:129.6,alpha:0.6887},0).wait(1).to({y:127.8,alpha:0.7859},0).wait(1).to({y:126.4,alpha:0.8625},0).wait(1).to({y:125.3,alpha:0.9229},0).wait(1).to({y:124.55,alpha:0.9628},0).wait(1).to({y:124.15,alpha:0.9857},0).wait(1).to({y:123.95,alpha:0.9969},0).wait(1).to({regX:0.1,regY:0.1,x:484.85,y:179.95,alpha:1},0).wait(1));

	// main_sub_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(483.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.daily_sub_caption_mc();
	this.instance_5.setTransform(483.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},60).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(177));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:380.4,regY:-157.4,x:681.4,y:139.6,alpha:0.0037},0).wait(1).to({y:139.45,alpha:0.0167},0).wait(1).to({y:139.15,alpha:0.0435},0).wait(1).to({y:138.65,alpha:0.0919},0).wait(1).to({x:681.35,y:137.7,alpha:0.1816},0).wait(1).to({x:681.3,y:136.15,alpha:0.3248},0).wait(1).to({x:681.25,y:134.45,alpha:0.4878},0).wait(1).to({x:681.2,y:132.85,alpha:0.6345},0).wait(1).to({x:681.15,y:131.65,alpha:0.7499},0).wait(1).to({y:130.7,alpha:0.8388},0).wait(1).to({x:681.1,y:129.95,alpha:0.9088},0).wait(1).to({y:129.45,alpha:0.9564},0).wait(1).to({y:129.15,alpha:0.9834},0).wait(1).to({y:129,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:483.05,y:211.05,alpha:1},0).wait(60).to({x:483.4,y:211.25},0).wait(1).to({regX:380.4,regY:-157.4,x:681.45,y:129.2,alpha:0.9963},0).wait(1).to({y:129.35,alpha:0.9833},0).wait(1).to({y:129.65,alpha:0.9565},0).wait(1).to({y:130.15,alpha:0.9081},0).wait(1).to({y:131.05,alpha:0.8184},0).wait(1).to({y:132.55,alpha:0.6752},0).wait(1).to({y:134.25,alpha:0.5122},0).wait(1).to({y:135.8,alpha:0.3655},0).wait(1).to({y:137,alpha:0.2501},0).wait(1).to({y:137.95,alpha:0.1612},0).wait(1).to({y:138.65,alpha:0.0912},0).wait(1).to({y:139.15,alpha:0.0436},0).wait(1).to({y:139.45,alpha:0.0166},0).wait(1).to({y:139.6,alpha:0.0036},0).to({_off:true},1).wait(178));

	// other_prize
	this.instance_6 = new lib.other_prize_mc();
	this.instance_6.setTransform(484.85,221.1,0.3828,0.3828,0,0,0,0.1,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(173).to({_off:false},0).wait(1).to({regX:116.1,regY:-308.2,x:529.25,y:103.05,alpha:0.0032},0).wait(1).to({y:102.9,alpha:0.0145},0).wait(1).to({y:102.65,alpha:0.0371},0).wait(1).to({y:102.2,alpha:0.077},0).wait(1).to({y:101.4,alpha:0.1467},0).wait(1).to({y:100,alpha:0.2672},0).wait(1).to({y:98.3,alpha:0.4164},0).wait(1).to({y:96.6,alpha:0.5648},0).wait(1).to({y:95.2,alpha:0.6887},0).wait(1).to({y:94.1,alpha:0.7859},0).wait(1).to({y:93.2,alpha:0.8625},0).wait(1).to({y:92.5,alpha:0.9229},0).wait(1).to({y:92.05,alpha:0.9628},0).wait(1).to({y:91.8,alpha:0.9857},0).wait(1).to({y:91.65,alpha:0.9969},0).wait(1).to({regX:0.1,regY:0.1,x:484.85,y:209.65,alpha:1},0).wait(62).to({regX:116.1,regY:-308.2,x:529.9,y:91.6,alpha:0.9968},0).wait(1).to({x:532.25,alpha:0.9855},0).wait(1).to({x:537,y:91.55,alpha:0.9629},0).wait(1).to({x:545.35,y:91.45,alpha:0.923},0).wait(1).to({x:559.9,y:91.25,alpha:0.8533},0).wait(1).to({x:585.15,y:91,alpha:0.7328},0).wait(1).to({x:616.35,y:90.65,alpha:0.5836},0).wait(1).to({x:647.4,y:90.25,alpha:0.4352},0).wait(1).to({x:673.35,y:89.95,alpha:0.3113},0).wait(1).to({x:693.7,y:89.75,alpha:0.2141},0).wait(1).to({x:709.7,y:89.55,alpha:0.1375},0).wait(1).to({x:722.35,y:89.4,alpha:0.0771},0).wait(1).to({x:730.7,y:89.3,alpha:0.0372},0).wait(1).to({x:735.5,y:89.25,alpha:0.0143},0).wait(1).to({x:737.8,alpha:0.0031},0).wait(1).to({regX:0.1,regY:0.1,x:694.1,y:207.25,alpha:0},0).wait(17));

	// consolation_caption
	this.instance_7 = new lib.consolation_sub_caption_mc();
	this.instance_7.setTransform(483.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(173).to({_off:false},0).wait(1).to({regX:84.3,regY:-31.1,x:527.2,y:205.4,alpha:0.0032},0).wait(1).to({y:205.25,alpha:0.0145},0).wait(1).to({y:205.05,alpha:0.0371},0).wait(1).to({y:204.6,alpha:0.077},0).wait(1).to({x:527.15,y:203.85,alpha:0.1467},0).wait(1).to({y:202.6,alpha:0.2672},0).wait(1).to({x:527.1,y:201,alpha:0.4164},0).wait(1).to({x:527.05,y:199.4,alpha:0.5648},0).wait(1).to({x:527,y:198.1,alpha:0.6887},0).wait(1).to({x:526.95,y:197.05,alpha:0.7859},0).wait(1).to({x:526.9,y:196.25,alpha:0.8625},0).wait(1).to({y:195.6,alpha:0.9229},0).wait(1).to({y:195.15,alpha:0.9628},0).wait(1).to({y:194.95,alpha:0.9857},0).wait(1).to({y:194.8,alpha:0.9969},0).wait(1).to({regX:0.1,regY:0.1,x:483.05,y:211.05,alpha:1},0).wait(61).to({x:483.4,y:211.25},0).wait(1).to({regX:84.3,regY:-31.1,x:527.95,y:194.95,alpha:0.9968},0).wait(1).to({x:530.5,alpha:0.9855},0).wait(1).to({x:535.7,alpha:0.9629},0).wait(1).to({x:544.8,alpha:0.923},0).wait(1).to({x:560.7,y:194.9,alpha:0.8533},0).wait(1).to({x:588.15,y:194.85,alpha:0.7328},0).wait(1).to({x:622.15,y:194.8,alpha:0.5836},0).wait(1).to({x:656,y:194.7,alpha:0.4352},0).wait(1).to({x:684.25,y:194.65,alpha:0.3113},0).wait(1).to({x:706.4,y:194.6,alpha:0.2141},0).wait(1).to({x:723.85,alpha:0.1375},0).wait(1).to({x:737.65,y:194.55,alpha:0.0771},0).wait(1).to({x:746.75,alpha:0.0372},0).wait(1).to({x:751.95,alpha:0.0143},0).wait(1).to({x:754.5,alpha:0.0031},0).wait(1).to({regX:0.1,regY:0.1,x:711.4,y:210.8,alpha:0},0).to({_off:true},1).wait(16));

	// su_sub_caption
	this.instance_8 = new lib.daily_sub_caption_mc();
	this.instance_8.setTransform(483.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(98).to({_off:false},0).wait(1).to({regX:421.8,regY:-142.5,x:703,y:147.4,alpha:0.0037},0).wait(1).to({y:147.25,alpha:0.0167},0).wait(1).to({y:146.95,alpha:0.0435},0).wait(1).to({y:146.45,alpha:0.0919},0).wait(1).to({x:702.95,y:145.5,alpha:0.1816},0).wait(1).to({x:702.9,y:143.95,alpha:0.3248},0).wait(1).to({x:702.85,y:142.25,alpha:0.4878},0).wait(1).to({x:702.8,y:140.65,alpha:0.6345},0).wait(1).to({x:702.75,y:139.45,alpha:0.7499},0).wait(1).to({y:138.5,alpha:0.8388},0).wait(1).to({x:702.7,y:137.75,alpha:0.9088},0).wait(1).to({y:137.25,alpha:0.9564},0).wait(1).to({y:136.95,alpha:0.9834},0).wait(1).to({y:136.8,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:483.05,y:211.05,alpha:1},0).wait(60).to({x:483.4,y:211.25},0).wait(1).to({regX:421.8,regY:-142.5,x:703.05,y:137,alpha:0.9968},0).wait(1).to({y:137.15,alpha:0.9855},0).wait(1).to({y:137.35,alpha:0.9629},0).wait(1).to({y:137.8,alpha:0.923},0).wait(1).to({y:138.5,alpha:0.8533},0).wait(1).to({y:139.75,alpha:0.7328},0).wait(1).to({y:141.35,alpha:0.5836},0).wait(1).to({y:142.9,alpha:0.4352},0).wait(1).to({y:144.15,alpha:0.3113},0).wait(1).to({y:145.2,alpha:0.2141},0).wait(1).to({y:146,alpha:0.1375},0).wait(1).to({y:146.6,alpha:0.0771},0).wait(1).to({y:147.05,alpha:0.0372},0).wait(1).to({y:147.3,alpha:0.0143},0).wait(1).to({y:147.4,alpha:0.0031},0).wait(1).to({regX:0.1,regY:0.1,x:483.4,y:221.7,alpha:0},0).to({_off:true},1).wait(93));

	// second_prize_mc
	this.instance_9 = new lib.second_prize_mc();
	this.instance_9.setTransform(330,148.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(98).to({_off:false},0).wait(1).to({y:148.0262,alpha:0.0037},0).wait(1).to({y:147.7652,alpha:0.0167},0).wait(1).to({y:147.2308,alpha:0.0435},0).wait(1).to({y:146.2628,alpha:0.0919},0).wait(1).to({y:144.4687,alpha:0.1816},0).wait(1).to({y:141.6041,alpha:0.3248},0).wait(1).to({y:138.3445,alpha:0.4878},0).wait(1).to({y:135.4109,alpha:0.6345},0).wait(1).to({y:133.1018,alpha:0.7499},0).wait(1).to({y:131.3241,alpha:0.8388},0).wait(1).to({y:129.9247,alpha:0.9088},0).wait(1).to({y:128.9721,alpha:0.9564},0).wait(1).to({y:128.4313,alpha:0.9834},0).wait(1).to({y:128.172,alpha:0.9964},0).wait(1).to({y:128.1,alpha:1},0).wait(61).to({y:128.248,alpha:0.9968},0).wait(1).to({y:128.7657,alpha:0.9855},0).wait(1).to({y:129.8076,alpha:0.9629},0).wait(1).to({y:131.6425,alpha:0.923},0).wait(1).to({y:134.8488,alpha:0.8533},0).wait(1).to({y:140.3891,alpha:0.7328},0).wait(1).to({y:147.2556,alpha:0.5836},0).wait(1).to({y:154.0819,alpha:0.4352},0).wait(1).to({y:159.7811,alpha:0.3113},0).wait(1).to({y:164.2533,alpha:0.2141},0).wait(1).to({y:167.7744,alpha:0.1375},0).wait(1).to({y:170.5545,alpha:0.0771},0).wait(1).to({y:172.3901,alpha:0.0372},0).wait(1).to({y:173.4425,alpha:0.0143},0).wait(1).to({y:173.9556,alpha:0.0031},0).wait(1).to({y:174.1,alpha:0},0).to({_off:true},1).wait(93));

	// promo
	this.instance_10 = new lib.promo_mc();
	this.instance_10.setTransform(630.65,116.65,0.4337,0.4337,0,0,0,0.1,0);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:-406,regY:16.1,x:453.95,y:123.65,alpha:0.0037},0).wait(1).to({x:452.05,alpha:0.0167},0).wait(1).to({x:448.15,alpha:0.0435},0).wait(1).to({x:441.1,alpha:0.0919},0).wait(1).to({x:428,alpha:0.1816},0).wait(1).to({x:407.1,alpha:0.3248},0).wait(1).to({x:383.35,alpha:0.4878},0).wait(1).to({x:361.95,alpha:0.6345},0).wait(1).to({x:345.15,alpha:0.7499},0).wait(1).to({x:332.2,alpha:0.8388},0).wait(1).to({x:322,alpha:0.9088},0).wait(1).to({x:315.05,alpha:0.9564},0).wait(1).to({x:311.1,alpha:0.9834},0).wait(1).to({x:309.2,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0,x:484.85,y:116.65,alpha:1},0).wait(83).to({alpha:0},15).to({_off:true},1).wait(169));

	// background
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5050F").s().p("EhLyATiMAAAgnDMCXmAAAMAAAAnDg");
	this.shape_36.setTransform(484.85,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(121.8,125,861.5,172.60000000000002);
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