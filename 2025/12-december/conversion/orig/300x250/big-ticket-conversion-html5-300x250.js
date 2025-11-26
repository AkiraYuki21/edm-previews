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


(lib._300x250 = function() {
	this.initialize(img._300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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
	this.instance.setTransform(-175,-269,0.9072,0.9072);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-175,-269,350.2,188.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgRCOQgJgEgEgHQgGgHAAgMQABgPAJgIQALgJAPAAQAQAAAKAJQALAIAAAPQAAAMgFAHQgFAHgJAEQgIADgKAAQgJAAgIgDgAgfAxIAAjBIBAAAIAADBg");
	this.shape.setTransform(275.2,-3.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMCPIgWhtIgFAAIAABtIhCAAIAAkdIBHAAQAfAAASAKQARAKAIARQAGASAAAYIAAAVQAAAWgFAPQgGAOgKAIIAhB+gAgPgSIADAAQAJAAADgEQADgDAAgKIAAgcQAAgJgDgEQgDgEgJAAIgDAAg");
	this.shape_1.setTransform(259.2,-3.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVCPIgFg4IgfAAIgFA4IhBAAIAmkdIBfAAIAmEdgAAKAaIgIhMIgCgXIgBAXIgIBMIATAAg");
	this.shape_2.setTransform(240.75,-3.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+CPIAAkdIB9AAIAAA9Ig9AAIAAAxIAyAAIAAA8IgyAAIAAA2IA9AAIAAA9g");
	this.shape_3.setTransform(224.775,-3.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggCPIAAhRIg3jMIBFAAIASBgIAUhgIBEAAIg3DMIAABRg");
	this.shape_4.setTransform(208.3,-3.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+CPIAAkdIB9AAIAAA9Ig9AAIAAAxIAyAAIAAA8IgyAAIAAA2IA9AAIAAA9g");
	this.shape_5.setTransform(187.875,-3.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAJCPIAAhxIgRAAIAABxIhCAAIAAkdIBCAAIAABsIARAAIAAhsIBCAAIAAEdg");
	this.shape_6.setTransform(171.975,-3.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_7.setTransform(156.35,-3.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhACPIAAkdICBAAIAAA9IhBAAIAAAxIA1AAIAAA8Ig1AAIAABzg");
	this.shape_8.setTransform(137.4,-3.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAACTQglAAgTgUQgTgVAAgmIAAiHQAAgoAUgUQAUgUAjABIAAAAQAmAAATAUQATAVAAAmIAACHQAAAogUAUQgUATgjAAgAgGhSQgCADAAAHIAACSQAAAGACADQACADAEAAIAAAAQAFAAACgDQACgDAAgGIAAiSQAAgHgCgDQgDgDgEAAIAAAAQgEAAgCADg");
	this.shape_9.setTransform(121.175,-3.5756);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag+CPIAAkdIB9AAIAAA9Ig9AAIAAAxIAyAAIAAA8IgyAAIAAA2IA9AAIAAA9g");
	this.shape_10.setTransform(101.225,-3.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhJCPIAAg5IBOimIhFAAIAAg+ICKAAIAAA5IhQCnIBQAAIAAA9g");
	this.shape_11.setTransform(85.65,-3.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_12.setTransform(73.175,-3.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAMCPIgWhtIgFAAIAABtIhCAAIAAkdIBHAAQAfAAASAKQASAKAGARQAIASgBAYIAAAVQAAAWgGAPQgFAOgKAIIAgB+gAgPgSIAEAAQAIAAADgEQADgDAAgKIAAgcQAAgJgDgEQgDgEgIAAIgEAAg");
	this.shape_13.setTransform(59.65,-3.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhLCPIAAkdIBGAAQAfAAASAKQASAKAGARQAIASAAAYIAAAYQgBAfgKAQQgLARgSAGQgSAHgXAAIgEAAIAABpgAgJgOIADAAQAHAAADgEQAEgEAAgKIAAgfQAAgJgDgEQgEgEgHAAIgDAAg");
	this.shape_14.setTransform(41.85,-3.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_15.setTransform(21.2,-3.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgmCQQgRgEgPgGIARg8IAWAJQAJADAJAAQALAAAFgFQAGgEAAgKIAAgBQAAgIgGgJQgFgKgOgNIgMgMQgMgMgJgKQgIgMgFgNQgEgOAAgTIAAgBQAAgmATgUQATgVAhAAQANAAAQADQAQADAPAHIgQA3IgSgFIgNgCQgLAAgGAFQgFAFAAAJIAAABQAAAHAGAHIARATIAGAHIAHAGQAMAMAJAKQAJALAEAPQAFAOAAAVIAAAAQAAAagJATQgKATgQAKQgRAJgWAAQgSAAgRgDg");
	this.shape_16.setTransform(6.225,-3.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag+CPIAAkdIB9AAIAAA9Ig9AAIAAAxIAyAAIAAA8IgyAAIAAA2IA9AAIAAA9g");
	this.shape_17.setTransform(-7.975,-3.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag4CAQgTgUAAgoIAAiHQAAgZALgSQALgSATgJQATgJAYgBQAQAAASAFQARAFAQAIIgYA5QgIgEgJgDQgJgCgKAAQgNAAgFAHQgGAHAAAPIAAB8QAAAIACADQADADAEAAIAFgBIADgBIAAhmIA+AAIAACRIgWALQgLAFgLACQgLADgOAAQgnAAgTgUg");
	this.shape_18.setTransform(-23.375,-3.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag4CAQgTgUAAgoIAAiHQAAgZALgSQALgSATgJQATgJAYgBQAQAAASAFQARAFAQAIIgYA5QgIgEgJgDQgJgCgKAAQgNAAgFAHQgGAHAAAPIAAB8QAAAIACADQADADAEAAIAFgBIADgBIAAhmIA+AAIAACRIgWALQgLAFgLACQgLADgOAAQgnAAgTgUg");
	this.shape_19.setTransform(-40.075,-3.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_20.setTransform(-53.125,-3.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhMCPIAAkdIBIAAQAWAAASAHQARAHAKAQQAKAPAAAZIAAAHQABAVgHAPQgIAOgQAHQARAGAIANQAJAOAAAZIAAARQgBAZgJARQgJARgRAJQgRAIgXAAgAgKBRIAEAAQAHAAADgEQADgEAAgHIAAgdQAAgIgDgEQgCgEgIAAIgEAAgAgKgfIAFAAQAHAAADgEQADgEAAgHIAAgSQAAgIgCgEQgDgEgIAAIgFAAg");
	this.shape_21.setTransform(-65.975,-3.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag+CPIAAkdIB9AAIAAA9Ig9AAIAAAxIAyAAIAAA8IgyAAIAAA2IA9AAIAAA9g");
	this.shape_22.setTransform(-86.025,-3.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAJCPIAAhxIgRAAIAABxIhCAAIAAkdIBCAAIAABsIARAAIAAhsIBCAAIAAEdg");
	this.shape_23.setTransform(-101.925,-3.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_24.setTransform(-117.55,-3.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgmCQQgRgEgPgGIARg8IAWAJQAJADAJAAQALAAAFgFQAGgEAAgKIAAgBQAAgIgGgJQgFgKgOgNIgMgMQgMgMgJgKQgIgMgFgNQgEgOAAgTIAAgBQAAgmATgUQATgVAhAAQANAAAQADQAQADAPAHIgQA3IgSgFIgNgCQgLAAgGAFQgFAFAAAJIAAABQAAAHAGAHIARATIAGAHIAHAGQAMAMAJAKQAJALAEAPQAFAOAAAVIAAAAQAAAagJATQgKATgQAKQgRAJgWAAQgSAAgRgDg");
	this.shape_25.setTransform(-137.125,-3.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgmCQQgRgEgPgGIARg8IAWAJQAJADAJAAQALAAAFgFQAGgEAAgKIAAgBQAAgIgGgJQgFgKgOgNIgMgMQgMgMgJgKQgIgMgFgNQgEgOAAgTIAAgBQAAgmATgUQATgVAhAAQANAAAQADQAQADAPAHIgQA3IgSgFIgNgCQgLAAgGAFQgFAFAAAJIAAABQAAAHAGAHIARATIAGAHIAHAGQAMAMAJAKQAJALAEAPQAFAOAAAVIAAAAQAAAagJATQgKATgQAKQgRAJgWAAQgSAAgRgDg");
	this.shape_26.setTransform(-152.025,-3.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_27.setTransform(-163.875,-3.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAvCPIAAjVIgDAgIgTC1IgxAAIgTi1IgDggIAADVIhAAAIAAkdIBkAAIAJCHIABAVIACgVIAKiHIBjAAIAAEdg");
	this.shape_28.setTransform(-180.325,-3.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_29.setTransform(-204.55,-3.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSA9IgMh5IA9AAIgLB5g");
	this.shape_30.setTransform(-216.575,-11.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAACPIgSi0IAAC0IhCAAIAAkdIBWAAIARCwIAAiwIBCAAIAAEdg");
	this.shape_31.setTransform(-230.625,-3.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAACTQglAAgTgUQgTgVAAgmIAAiHQAAgoAUgUQAUgUAjABIAAAAQAmAAATAUQATAVAAAmIAACHQAAAogUAUQgUATgjAAgAgGhSQgCADAAAHIAACSQAAAGACADQACADAEAAIAAAAQAFAAACgDQACgDAAgGIAAiSQAAgHgCgDQgDgDgEAAIAAAAQgEAAgCADg");
	this.shape_32.setTransform(-248.825,-3.5756);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhLCPIAAkdIBHAAQAWAAASAKQASAKALATQALATAAAaIAABzQAAAbgLATQgLATgSALQgSAKgWAAgAgJBRIACAAQAKAAACgEQADgFAAgMIAAh6QAAgMgEgDQgEgDgHAAIgCAAg");
	this.shape_33.setTransform(-266.175,-3.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-276.2,-26.2,559.7,53.7), null);


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
	this.instance.setTransform(-104,-90,0.7164,0.7164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-104,-90,206.4,177), null);


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
	this.instance.setTransform(-161,-174,1.1606,1.1606);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-161,-174,334.3,333.1), null);


(lib.other_text_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgRAdQgIgDgGgHQgFgIAAgLQAAgOALgJQAKgIAPgBQAQABALAIQAKAJAAAOQAAALgFAIQgGAHgHADQgJAEgKAAQgIAAgJgEg");
	this.shape.setTransform(423.75,34.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMCPIgWhtIgFAAIAABtIhBAAIAAkdIBGAAQAfAAARAKQASAKAIARQAGASAAAYIAAAVQAAAWgFAPQgGAOgKAIIAhB+gAgPgSIADAAQAJAAADgEQADgDAAgKIAAgcQAAgJgDgEQgDgEgJAAIgDAAg");
	this.shape_1.setTransform(409.8,22.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+CPIAAkdIB9AAIAAA9Ig9AAIAAAxIAyAAIAAA8IgyAAIAAA2IA9AAIAAA9g");
	this.shape_2.setTransform(393.925,22.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMCPIAAkdIBIAAQAWAAASAHQARAHAKAQQAKAPAAAZIAAAHQABAVgHAPQgIAOgQAHQARAGAIANQAJAOAAAZIAAARQgBAZgJARQgJARgRAJQgRAIgXAAgAgKBRIAEAAQAHAAADgEQADgEAAgHIAAgdQAAgIgDgEQgCgEgIAAIgEAAgAgKgfIAFAAQAHAAADgEQADgEAAgHIAAgSQAAgIgCgEQgDgEgIAAIgFAAg");
	this.shape_3.setTransform(377.975,22.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAvCPIAAjVIgDAgIgTC1IgxAAIgTi1IgDggIAADVIhAAAIAAkdIBkAAIAJCHIABAVIACgVIAKiHIBjAAIAAEdg");
	this.shape_4.setTransform(357.125,22.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+CPIAAkdIB9AAIAAA9Ig9AAIAAAxIAyAAIAAA8IgyAAIAAA2IA9AAIAAA9g");
	this.shape_5.setTransform(338.275,22.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKCTQgoAAgVgVQgVgXAAgqIAAh5QAAgrAVgWQAVgVAogBIAAAAQARAAAOADQAOADAMAGIgXA1QgGgCgGgBIgLgBIAAAAQgNAAgHAJQgFAHAAAQIAABtQAAAPAHAIQAIAIANAAIABAAIALgBIANgEIAYA1QgPAGgPAEQgPADgSAAg");
	this.shape_6.setTransform(324.025,22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag+CPIAAkdIB9AAIAAA9Ig9AAIAAAxIAyAAIAAA8IgyAAIAAA2IA9AAIAAA9g");
	this.shape_7.setTransform(308.975,22.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhLCPIAAkdIBHAAQAWAAASAKQASAKALATQALATAAAaIAABzQAAAbgLATQgLATgSALQgSAKgWAAgAgJBRIACAAQAKAAACgEQADgFAAgMIAAh6QAAgMgEgDQgEgDgHAAIgCAAg");
	this.shape_8.setTransform(292.975,22.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmCQQgRgEgPgGIARg8IAWAJQAJADAJAAQALAAAFgFQAGgEAAgKIAAgBQAAgIgGgJQgFgKgOgNIgMgMQgMgMgJgKQgIgMgFgNQgEgOAAgTIAAgBQAAgmATgUQATgVAhAAQANAAAQADQAQADAPAHIgQA3IgSgFIgNgCQgLAAgGAFQgFAFAAAJIAAABQAAAHAGAHIARATIAGAHIAHAGQAMAMAJAKQAJALAEAPQAFAOAAAVIAAAAQAAAagJATQgKATgQAKQgRAJgWAAQgSAAgRgDg");
	this.shape_9.setTransform(272.275,22.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_10.setTransform(260.475,22.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAJCPIAAhxIgRAAIAABxIhCAAIAAkdIBCAAIAABsIARAAIAAhsIBCAAIAAEdg");
	this.shape_11.setTransform(247.575,22.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_12.setTransform(231.95,22.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAACPIgSi0IAAC0IhCAAIAAkdIBWAAIARCwIAAiwIBCAAIAAEdg");
	this.shape_13.setTransform(210.325,22.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_14.setTransform(196.425,22.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AANCPIgNirIgLCrIhVAAIgVkdIBFAAIAEDbIATjbIA0AAIATDbIADjbIBFAAIgVEdg");
	this.shape_15.setTransform(179.575,22.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAACTQglAAgTgUQgTgVAAgmIAAiHQAAgoAUgUQAUgUAjABIAAAAQAmAAATAUQATAVAAAmIAACHQAAAogUAUQgUATgjAAgAgGhSQgCADAAAHIAACSQAAAGACADQACADAEAAIAAAAQAFAAACgDQACgDAAgGIAAiSQAAgHgCgDQgDgDgEAAIAAAAQgEAAgCADg");
	this.shape_16.setTransform(153.775,22.6744);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_17.setTransform(137.65,22.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgmCQQgRgEgPgGIARg8IAWAJQAJADAJAAQALAAAFgFQAGgEAAgKIAAgBQAAgIgGgJQgFgKgOgNIgMgMQgMgMgJgKQgIgMgFgNQgEgOAAgTIAAgBQAAgmATgUQATgVAhAAQANAAAQADQAQADAPAHIgQA3IgSgFIgNgCQgLAAgGAFQgFAFAAAJIAAABQAAAHAGAHIARATIAGAHIAHAGQAMAMAJAKQAJALAEAPQAFAOAAAVIAAAAQAAAagJATQgKATgQAKQgRAJgWAAQgSAAgRgDg");
	this.shape_18.setTransform(118.075,22.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfCPIAAhRIg3jMIBDAAIATBgIAUhgIBEAAIg3DMIAABRg");
	this.shape_19.setTransform(101.5,22.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAVCPIgFg4IgfAAIgFA4IhAAAIAlkdIBfAAIAmEdgAAJAaIgHhMIgCgXIgBAXIgIBMIASAAg");
	this.shape_20.setTransform(83.15,22.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AANCPIgNirIgLCrIhVAAIgVkdIBFAAIAEDbIATjbIA0AAIATDbIADjbIBFAAIgVEdg");
	this.shape_21.setTransform(61.325,22.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag+CPIAAkdIB9AAIAAA9Ig9AAIAAAxIAyAAIAAA8IgyAAIAAA2IA9AAIAAA9g");
	this.shape_22.setTransform(37.525,22.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAMCPIgWhtIgFAAIAABtIhCAAIAAkdIBHAAQAfAAASAKQASAKAGARQAIASgBAYIAAAVQAAAWgGAPQgFAOgKAIIAgB+gAgPgSIAEAAQAIAAADgEQADgDAAgKIAAgcQAAgJgDgEQgDgEgIAAIgEAAg");
	this.shape_23.setTransform(20.95,22.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAACTQglAAgTgUQgTgVAAgmIAAiHQAAgoAUgUQAUgUAjABIAAAAQAmAAATAUQATAVAAAmIAACHQAAAogUAUQgUATgjAAgAgGhSQgCADAAAHIAACSQAAAGACADQACADAEAAIAAAAQAFAAACgDQACgDAAgGIAAiSQAAgHgCgDQgDgDgEAAIAAAAQgEAAgCADg");
	this.shape_24.setTransform(3.075,22.6744);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAvCPIAAjVIgDAgIgTC1IgxAAIgTi1IgDggIAADVIhAAAIAAkdIBkAAIAJCHIABAVIACgVIAKiHIBjAAIAAEdg");
	this.shape_25.setTransform(-17.725,22.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.other_text_mc, new cjs.Rectangle(-31.3,0,461.40000000000003,53.7), null);


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
	this.instance = new lib.consolation();
	this.instance.setTransform(1,62);

	this.instance_1 = new lib.bigwin();
	this.instance_1.setTransform(0,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.other_prizes_mc, new cjs.Rectangle(0,-12,221,137), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgRAdQgJgDgFgHQgFgIAAgLQAAgOALgJQAKgIAPgBQAQABALAIQAKAJAAAOQAAALgFAIQgGAHgHADQgJAEgKAAQgJAAgIgEg");
	this.shape.setTransform(205.75,11.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag4CAQgTgUAAgoIAAiHQAAgZALgSQALgSATgJQATgJAYgBQAQAAASAFQARAFAQAIIgYA5QgIgEgJgDQgJgCgKAAQgNAAgFAHQgGAHAAAPIAAB8QAAAIACADQADADAEAAIAFgBIADgBIAAhmIA+AAIAACRIgWALQgLAFgLACQgLADgOAAQgnAAgTgUg");
	this.shape_1.setTransform(192.975,0.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_2.setTransform(179.975,0.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMCPIAAkdIBIAAQAWAAASAHQARAHAKAQQAKAPAAAZIAAAHQABAVgHAPQgIAOgQAHQARAGAIANQAJAOAAAZIAAARQgBAZgJARQgJARgRAJQgRAIgXAAgAgKBRIAEAAQAHAAADgEQADgEAAgHIAAgdQAAgIgDgEQgCgEgIAAIgEAAgAgKgfIAFAAQAHAAADgEQADgEAAgHIAAgSQAAgIgCgEQgDgEgIAAIgFAAg");
	this.shape_3.setTransform(167.075,0.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_4.setTransform(146.3,0.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggCPIAAkdIBBAAIAAEdg");
	this.shape_5.setTransform(134.425,0.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhLCPIAAkdIBHAAQAWAAASAKQASAKALATQALATAAAaIAABzQAAAbgLATQgLATgSALQgSAKgWAAgAgJBRIACAAQAKAAACgEQADgFAAgMIAAh6QAAgMgEgDQgEgDgHAAIgCAAg");
	this.shape_6.setTransform(116.875,0.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAACPIgSi0IAAC0IhCAAIAAkdIBWAAIARCwIAAiwIBCAAIAAEdg");
	this.shape_7.setTransform(98.725,0.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag+CPIAAkdIB9AAIAAA9Ig9AAIAAAxIAyAAIAAA8IgyAAIAAA2IA9AAIAAA9g");
	this.shape_8.setTransform(82.475,0.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAACTQglAAgTgUQgTgVAAgmIAAiHQAAgoAUgUQAUgUAjABIAAAAQAmAAATAUQATAVAAAmIAACHQAAAogUAUQgUATgjAAgAgGhSQgCADAAAHIAACSQAAAGACADQACADAEAAIAAAAQAFAAACgDQACgDAAgGIAAiSQAAgHgCgDQgDgDgEAAIAAAAQgEAAgCADg");
	this.shape_9.setTransform(61.825,0.0744);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_10.setTransform(45.7,0.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag+CPIAAkdIB9AAIAAA9Ig9AAIAAAxIAyAAIAAA8IgyAAIAAA2IA9AAIAAA9g");
	this.shape_11.setTransform(26.875,0.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAKCTQgoAAgVgVQgVgXAAgqIAAh5QAAgrAVgWQAVgVAogBIAAAAQARABAOACQAOADAMAGIgXA1QgGgCgGgBIgLgBIAAAAQgNABgHAIQgFAIAAAPIAABtQAAAPAHAIQAIAIANAAIABAAIALgBIANgEIAYA0QgPAIgPADQgPADgSAAg");
	this.shape_12.setTransform(12.625,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAACPIgSi0IAAC0IhCAAIAAkdIBWAAIARCwIAAiwIBCAAIAAEdg");
	this.shape_13.setTransform(-5.225,0.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAVCPIgFg4IgfAAIgFA4IhBAAIAnkdIBdAAIAmEdgAAKAaIgJhMIgBgXIAAAXIgIBMIASAAg");
	this.shape_14.setTransform(-24,0.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAJCPIAAhxIgRAAIAABxIhCAAIAAkdIBCAAIAABsIARAAIAAhsIBCAAIAAEdg");
	this.shape_15.setTransform(-41.775,0.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAKCTQgoAAgVgVQgVgXAAgqIAAh5QAAgrAVgWQAVgVAogBIAAAAQARABAOACQAOADAMAGIgXA1QgGgCgGgBIgLgBIAAAAQgNABgHAIQgFAIAAAPIAABtQAAAPAHAIQAIAIANAAIABAAIALgBIANgEIAYA0QgPAIgPADQgPADgSAAg");
	this.shape_16.setTransform(-56.875,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggCPIAAjcIgoAAIAAhBICRAAIAABBIgoAAIAADcg");
	this.shape_17.setTransform(-77.25,0.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgmCQQgRgEgPgGIARg8IAWAJQAJADAJAAQALAAAFgFQAGgEAAgKIAAgBQAAgIgGgJQgFgKgOgNIgMgMQgMgMgJgKQgIgMgFgNQgEgOAAgTIAAgBQAAgmATgUQATgVAhAAQANAAAQADQAQADAPAHIgQA3IgSgFIgNgCQgLAAgGAFQgFAFAAAJIAAABQAAAHAGAHIARATIAGAHIAHAGQAMAMAJAKQAJALAEAPQAFAOAAAVIAAAAQAAAagJATQgKATgQAKQgRAJgWAAQgSAAgRgDg");
	this.shape_18.setTransform(-92.225,0.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAVCPIgFg4IgfAAIgFA4IhBAAIAnkdIBdAAIAmEdgAAJAaIgIhMIgBgXIAAAXIgIBMIARAAg");
	this.shape_19.setTransform(-108.95,0.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhCCPIAAkdIBBAAIAADdIBEAAIAABAg");
	this.shape_20.setTransform(-126.3,0.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAMCPIgWhtIgFAAIAABtIhBAAIAAkdIBGAAQAfAAARAKQASAKAIARQAGASAAAYIAAAVQAAAWgFAPQgGAOgKAIIAhB+gAgPgSIADAAQAJAAADgEQADgDAAgKIAAgcQAAgJgDgEQgDgEgJAAIgDAAg");
	this.shape_21.setTransform(-147.85,0.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgmCJQgRgIgKgRQgKgRAAgZIAAjWIBDAAIAADYQAAAGACADQACACAEAAQAFAAACgCQACgDAAgGIAAjYIBDAAIAADWQAAAWgIASQgJAQgQAKQgRAJgZAAQgWAAgRgIg");
	this.shape_22.setTransform(-166.025,0.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAACTQglAAgTgUQgTgVAAgmIAAiHQAAgoAUgUQAUgUAjABIAAAAQAmAAATAUQATAVAAAmIAACHQAAAogUAUQgUATgjAAgAgGhSQgCADAAAHIAACSQAAAGACADQACADAEAAIAAAAQAFAAACgDQACgDAAgGIAAiSQAAgHgCgDQgDgDgEAAIAAAAQgEAAgCADg");
	this.shape_23.setTransform(-183.675,0.0744);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AggCPIAAhRIg2jMIBDAAIAUBgIAThgIBDAAIg2DMIAABRg");
	this.shape_24.setTransform(-201.5,0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-212,-22.6,424.1,53.7), null);


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
	this.instance.setTransform(-212,71,1.7397,1.7397);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-212,71,424.5,81.80000000000001), null);


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
	this.instance = new lib._300x250();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_mc, new cjs.Rectangle(-150,-125,300,250), null);


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
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(284.85,238.55,0.0192,0.0192,0,0,0,495.3,461.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAsIgGgBIgFAAIgBgTIAJACIAHABIAGgBQAAAAABAAQAAAAABAAQAAgBAAAAQAAAAAAgBIADgHIgCABIgBAAQgHAAgDgCQgFgCgCgFQgDgEACgIIAJgpIATAAIgIApIAAACIACABIABAAIABAAIAEgWIAFgWIAUAAIgOBAQgCANgIAGQgGAGgMAAIgFgBg");
	this.shape.setTransform(270.1,240.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAtIAShZIATAAIgTBZg");
	this.shape_1.setTransform(266.325,237.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAtIgLgCIAThYIASAAIgFAXIADAAQAMAAAEAFQAEAHgDALIgEAUQgDANgGAGQgHAGgKgBIgLAAgAgDAbIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBABAAIACgGIAEgSQABgDgBgBQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape_2.setTransform(261.9481,237.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAvIANhAIATAAIgOBAgAABgcQgBgDAAgFQABgFADgDQADgCAEAAQAEAAACACQACADgBAFQgBAFgDADQgDACgEAAQgEAAgCgCg");
	this.shape_3.setTransform(258.17,237.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAiIgKgCIAFgTIAIACIAHABIAFAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgCgBIgCgBIgCgBQgGgDgDgEQgCgGACgIQABgFADgFQADgEAFgDQAEgDAHAAIAHABIAKACIgGASIgGgCIgGAAIgEAAIgCACIABADIADACIABABIACAAIAHAFQADACABADIAAAJQgCAHgDAFQgDAEgGADQgGAEgIAAIgHgBg");
	this.shape_4.setTransform(254.175,238.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAiIAJgtQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgCABIgBAAIgJAwIgUAAIAOg/IANgDIAJgBQALAAAEAFQAFAFgCAKIgKAvg");
	this.shape_5.setTransform(249.1558,238.8227);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAcQgFgGADgMIAEgTQADgMAGgHQAHgGAKABQAKgBAGAGQAEAHgDAMIgEATQgCAMgIAGQgHAGgJAAQgMAAgDgGgAABgOIgBAFIgDATIgBAFQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIAAgEIAFgTIAAgFIgBgBQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAg");
	this.shape_6.setTransform(244.15,238.8731);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAuIAThaIAIAAIAHgBIAGAAQAMAAAEAGQAEAGgCANIgEATQgDAMgHAGQgGAGgLAAIgCAAIgFAXgAgBAEIABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIACgEIAEgTQABgEgBgBQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgCAAg");
	this.shape_7.setTransform(238.5731,240.0481);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAiIgKgCIAFgTIAIACIAHABIAFAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgCgBIgCgBIgCgBQgGgDgDgEQgCgGACgIQABgFADgFQADgEAFgDQAEgDAHAAIAHABIAKACIgGASIgGgCIgGAAIgEAAIgCACIABADIADACIABABIACAAIAHAFQADACABADIAAAJQgCAHgDAFQgDAEgGADQgGAEgIAAIgHgBg");
	this.shape_8.setTransform(233.925,238.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAcQgFgGACgNIAEgSQADgNAHgGQAGgGALABQAKgBAEAGQAEAGgDANIgDAPIgXAAIAAADQgBADACACQACACAEAAIAEAAIAFgBIgCASIgIABIgFAAQgNAAgFgGgAACgPIgCAEIAAAFIAEAAIABgFIABgEQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIgBAAIgBABg");
	this.shape_9.setTransform(229.3104,238.8731);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAtIAAgiIgCAAIgHAiIgUAAIAThZIAVAAQAKAAAFADQAEADACAGQABAFgCAIIgBAGQgCAHgCAFIgHAGIACAogAAAgFIABAAIAEgBIACgFIACgIQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_10.setTransform(223.7667,237.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAsIgGgBIgFAAIgBgTIAJACIAIABIAEgBQABAAABAAQAAAAABAAQAAgBAAAAQAAAAABgBIACgHIgCABIgBAAQgHAAgDgCQgFgCgCgFQgCgEACgIIAIgpIATAAIgIApIAAACIACABIABAAIABAAIAEgWIAFgWIAUAAIgOBAQgDANgHAGQgGAGgMAAIgFgBg");
	this.shape_11.setTransform(216.8,240.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAdQgEgFACgKIAAgBQACgJAHgFQAGgFAKAAIABAAIACAAIABgCQAAgEgBgCQgBgBgEAAIgHABIgIACIAJgTIAEgBIAEgBIAFAAQAJAAAEACQAFADABAFQABAFgBAHIgJAqIgMACIgLABQgKAAgFgFgAgCAHQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABIAAACQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAABIADABIABAAIABgMIgBAAIgCABg");
	this.shape_12.setTransform(211.5367,238.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAtIAShZIATAAIgTBZg");
	this.shape_13.setTransform(207.825,237.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeAtIAThZIAVAAQAKAAAFADQAEADABAGQACAFgCAIIgCAHQgCAKgEAFQgEAEgHADQgGACgGAAIgCAAIgHAhgAAAgEIABAAIADgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAgBIACgJQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBAAg");
	this.shape_14.setTransform(203.5071,237.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAVAAQAFAAAFAEQAFADAEAFQADAGAAAHIAAAhQAAAHgDAGQgEAFgFADQgFADgFABgAgCAYIABAAQABAAAAgBQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgjQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgCgBIgBAAg");
	this.shape_15.setTransform(164.55,238.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRAqIAAhTIAjAAIAAASIgRAAIAAAPIAOAAIAAAQIgOAAIAAAQIARAAIAAASg");
	this.shape_16.setTransform(160.075,238.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAGAqIgBgQIgJAAIgBAQIgTAAIALhTIAbAAIALBTgAADAIIgDgWIAAgGIAAAGIgCAWIAFAAg");
	this.shape_17.setTransform(155.275,238.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAqIgEg0IAAA0IgTAAIAAhTIAYAAIAEAzIAAgzIATAAIAABTg");
	this.shape_18.setTransform(148.5,238.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIAqIAAhTIARAAIAABTg");
	this.shape_19.setTransform(144.5,238.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKAqIgKgDIAFgRIAHACIAFABIAEgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgGIgDgEIgGgGIgEgHQgBgEAAgFIAAgBQAAgKAFgGQAGgGAJgBIAIABIAJADIgFAQIgFgBIgEgBQgDAAgBACQgBAAAAABQAAAAAAAAQAAABAAABQAAAAAAABIABAEIAEAGIADABIACACIAFAGIAFAHIABALQgBAHgCAGQgDAFgEADQgFADgGAAIgKgBg");
	this.shape_20.setTransform(139.7,238.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAqIAAhTIAjAAIAAASIgRAAIAAAPIAOAAIAAAQIgOAAIAAAQIARAAIAAASg");
	this.shape_21.setTransform(135.625,238.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUAqIAAgRIAVgwIgTAAIAAgSIAoAAIAAARIgXAwIAXAAIAAASg");
	this.shape_22.setTransform(131.1,238.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAqIAAhTIASAAIAABTg");
	this.shape_23.setTransform(127.5,238.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAEAqIgGggIgBAAIAAAgIgTAAIAAhTIAUAAQAIAAAGAEQAEACACAGQACAEABAIIAAAGQAAAGgCAEQgCAEgCACIAJAlgAgDgFIABAAIACgBIABgDIAAgIIgBgFIgCgBIgBAAg");
	this.shape_24.setTransform(123.55,238.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAUAAQAJAAAFAEQAFACACAGQACAEAAAIIAAAHQAAAIgDAEQgDAFgFACQgGACgGAAIgBAAIAAAfgAgCgEIABAAIADgBIABgDIAAgJIgBgFIgDgBIgBAAg");
	this.shape_25.setTransform(118.43,238.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgHA1IAAhpIAPAAIAABpg");
	this.shape_26.setTransform(110.375,239.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAqIAAgYIgQg7IATAAIAFAcIAGgcIATAAIgPA7IAAAYg");
	this.shape_27.setTransform(102.225,238.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSAqIAAhTIASAAIAABAIATAAIAAATg");
	this.shape_28.setTransform(97.25,238.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAUAAQAJAAAFAEQAFACACAGQACAEAAAIIAAAHQAAAIgDAEQgDAFgFACQgGACgGAAIgBAAIAAAfgAgCgEIABAAIADgBIABgDIAAgJIgBgFIgDgBIgBAAg");
	this.shape_29.setTransform(92.53,238.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAUAAQAJAAAFAEQAFACACAGQACAEAAAIIAAAHQAAAIgDAEQgDAFgFACQgGACgGAAIgBAAIAAAfgAgCgEIABAAIADgBIABgDIAAgJIgBgFIgDgBIgBAAg");
	this.shape_30.setTransform(87.53,238.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAGAqIgBgQIgJAAIgBAQIgTAAIALhTIAbAAIALBTgAADAIIgDgWIAAgGIAAAGIgCAWIAFAAg");
	this.shape_31.setTransform(82.375,238.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgKAqIgJgDIAEgRIAHACIAFABIAEgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgGIgEgEIgFgGIgEgHQgBgEgBgFIAAgBQABgKAGgGQAFgGAIgBIAJABIAJADIgFAQIgFgBIgDgBQgEAAgCACQAAAAAAABQAAAAAAAAQAAABAAABQgBAAAAABIABAEIAGAGIABABIACACIAHAGIADAHIABALQAAAHgCAGQgDAFgFADQgFADgFAAIgKgBg");
	this.shape_32.setTransform(76.2,238.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEASIgEgjIARAAIgDAjg");
	this.shape_33.setTransform(72.7,236.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgOAlQgGgHAAgMIAAgjQAAgMAGgGQAGgHALAAIAJABIAIADIgHAPIgDgBIgEAAQgDAAgCADQgBACgBAEIAAAfQAAAEACADQACACAEAAIAEAAIADgBIAHAPIgIADIgKABQgLAAgGgGg");
	this.shape_34.setTransform(69.4,238.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWAmQgGgGAAgLIAAgKQAAgGADgEQACgCAFgBIgDgHIgBgGIAAgGQAAgHACgFQABgEAEgDQAEgCAIAAQAFAAADACQAEACABAFQACAFAAAHIAAAFIgBAGQgBAEgCACQgDADgEABIAHAKIgBgFIAAgFIAPAAIAAALIgBAIIgDAHIALAQIgTAAIgCgDIgFADIgGABQgNAAgGgFgAgKANIAAADIAAACQAAAFACACQACACAEAAIABAAIABgBIgKgPgAgFgYIgBADIAAAJIAAACIAAABIADgCIABgEIAAgGIAAgDIgCgBQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAg");
	this.shape_35.setTransform(63.775,238.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJAqIAAhAIgLAAIAAgTIApAAIAAATIgMAAIAABAg");
	this.shape_36.setTransform(58.375,238.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgHA1IAAhpIAPAAIAABpg");
	this.shape_37.setTransform(50.675,239.575);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgUAqIAAgRIAMgNIAIgNQADgHAAgGIAAgBQAAgDgCgCQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAIgEgBIgGABIgFABIgFgPIAJgEQAFgBAGAAQAHAAAEADQAFAEACAGQADAFAAAHIAAABIgCAMQgCAEgDAFIgGAKIgIAJIATAAIAAARg");
	this.shape_38.setTransform(44.15,238.375);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgKAoQgFgDgCgFQgEgFAAgIIAAgFQAAgFACgDQABgEADgCIgDgFIgBgIIAAgFQAAgIADgFQADgFAEgDQAEgDAFAAQAGAAAFADQAEADADAFQACAGAAAHIAAAFIgBAIQgBADgBACIADAGIABAIIAAAFQABAIgDAFQgDAFgFADQgEADgHAAQgFAAgFgDgAAAAIIgBACIAAAMIABADIAAAAIACgBIAAgCIAAgMIAAgCIgCAAIAAAAIAAAAgAAAgXIgBACIAAAOIABACIAAABIACgBIAAgCIAAgOIAAgCIgCgBIAAABg");
	this.shape_39.setTransform(39.35,238.425);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgUAqIAAgRIALgNIAJgNQADgHAAgGIAAgBQAAgDgBgCQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAIgDgBIgGABIgEABIgHgPIAJgEQAGgBAGAAQAGAAAGADQAEAEACAGQADAFABAHIAAABIgCAMQgDAEgDAFIgHAKIgHAJIATAAIAAARg");
	this.shape_40.setTransform(34.55,238.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgKAqIgKgDIAGgRIAGACIAFABIAEgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgGIgEgEIgFgGIgEgHQgBgEgBgFIAAgBQABgKAGgGQAEgGAKgBIAIABIAJADIgFAQIgFgBIgDgBQgEAAgCACQAAAAAAABQAAAAAAAAQAAABAAABQgBAAAAABIABAEIAGAGIABABIACACIAGAGIAFAHIABALQAAAHgDAGQgCAFgFADQgGADgFAAIgKgBg");
	this.shape_41.setTransform(28.7,238.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgRAqIAAhTIAjAAIAAASIgRAAIAAAPIAOAAIAAAQIgOAAIAAAQIARAAIAAASg");
	this.shape_42.setTransform(24.575,238.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgIAqIAAhTIARAAIAABTg");
	this.shape_43.setTransform(21.2,238.45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAEAqIgGggIgBAAIAAAgIgTAAIAAhTIAUAAQAIAAAFAEQAGACABAGQACAEAAAIIAAAGQAAAGgBAEQgCAEgCACIAJAlgAgDgFIABAAIACgBIABgDIAAgIIgBgFIgCgBIgBAAg");
	this.shape_44.setTransform(17.25,238.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgRAqIAAhTIAjAAIAAASIgRAAIAAAPIAOAAIAAAQIgOAAIAAAQIARAAIAAASg");
	this.shape_45.setTransform(12.675,238.45);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgKAqIgKgDIAGgRIAGACIAFABIAEgBQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgBQAAgCgCgDIgFgGIgEgEIgFgGIgEgHQgBgEgBgFIAAgBQABgKAGgGQAFgGAIgBIAJABIAJADIgFAQIgFgBIgDgBQgEAAgCACQAAAAAAABQAAAAAAAAQAAABAAABQgBAAAAABIABAEIAGAGIABABIACACIAGAGIAEAHIACALQAAAHgDAGQgCAFgGADQgFADgFAAIgKgBg");
	this.shape_46.setTransform(8.35,238.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(364));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(149.85,19,0.4261,0.4261,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(269).to({alpha:0},16).wait(79));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(149.85,198.4,0.2992,0.2992,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(285).to({_off:false},0).wait(1).to({regX:0.2,regY:111.9,y:231.75,alpha:0.0032},0).wait(1).to({y:231.55,alpha:0.0145},0).wait(1).to({y:231.15,alpha:0.0371},0).wait(1).to({y:230.4,alpha:0.077},0).wait(1).to({y:229.1,alpha:0.1467},0).wait(1).to({y:226.9,alpha:0.2672},0).wait(1).to({y:224.15,alpha:0.4164},0).wait(1).to({y:221.4,alpha:0.5648},0).wait(1).to({y:219.1,alpha:0.6887},0).wait(1).to({y:217.3,alpha:0.7859},0).wait(1).to({y:215.9,alpha:0.8625},0).wait(1).to({y:214.8,alpha:0.9229},0).wait(1).to({y:214.05,alpha:0.9628},0).wait(1).to({y:213.65,alpha:0.9857},0).wait(1).to({y:213.45,alpha:0.9969},0).wait(1).to({regX:0.1,regY:0.1,y:179.95,alpha:1},0).wait(63));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(-131.2,112.6,0.4156,0.4156,0,0,0,-0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(269).to({_off:false},0).wait(1).to({regX:0.1,regY:-174.6,x:-130.15,y:40},0).wait(1).to({x:-127},0).wait(1).to({x:-120.65,y:40.05},0).wait(1).to({x:-109.45,y:40.15},0).wait(1).to({x:-89.85,y:40.25},0).wait(1).to({x:-56,y:40.5},0).wait(1).to({x:-14.05,y:40.8},0).wait(1).to({x:27.6,y:41.1},0).wait(1).to({x:62.45,y:41.35},0).wait(1).to({x:89.75,y:41.55},0).wait(1).to({x:111.25,y:41.7},0).wait(1).to({x:128.25,y:41.8},0).wait(1).to({x:139.45,y:41.9},0).wait(1).to({x:145.9,y:41.95},0).wait(1).to({x:149.05},0).wait(1).to({regY:0.1,x:149.85,y:114.6},0).wait(79));

	// other_prize
	this.instance_4 = new lib.other_prizes_mc();
	this.instance_4.setTransform(150.5,142.5,1,1,0,0,0,110.5,62.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(181).to({_off:false},0).wait(1).to({regY:56.5,y:136.4,alpha:0.0037},0).wait(1).to({y:136.15,alpha:0.0167},0).wait(1).to({y:135.6,alpha:0.0435},0).wait(1).to({y:134.65,alpha:0.0919},0).wait(1).to({y:132.85,alpha:0.1816},0).wait(1).to({y:130,alpha:0.3248},0).wait(1).to({y:126.7,alpha:0.4878},0).wait(1).to({y:123.8,alpha:0.6345},0).wait(1).to({y:121.5,alpha:0.7499},0).wait(1).to({y:119.7,alpha:0.8388},0).wait(1).to({y:118.3,alpha:0.9088},0).wait(1).to({y:117.35,alpha:0.9564},0).wait(1).to({y:116.8,alpha:0.9834},0).wait(1).to({y:116.55,alpha:0.9964},0).wait(1).to({regY:62.5,y:122.5,alpha:1},0).wait(74).to({regY:56.5,y:116.5,alpha:0.9968},0).wait(1).to({alpha:0.9855},0).wait(1).to({alpha:0.9629},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.8533},0).wait(1).to({alpha:0.7328},0).wait(1).to({alpha:0.5836},0).wait(1).to({alpha:0.4352},0).wait(1).to({alpha:0.3113},0).wait(1).to({alpha:0.2141},0).wait(1).to({alpha:0.1375},0).wait(1).to({alpha:0.0771},0).wait(1).to({alpha:0.0372},0).wait(1).to({alpha:0.0143},0).wait(1).to({alpha:0.0031},0).wait(1).to({regY:62.5,y:122.5,alpha:0},0).wait(79));

	// other_text
	this.instance_5 = new lib.other_text_mc();
	this.instance_5.setTransform(147.95,233.25,0.5207,0.5205,0,0,0,199.3,26.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(181).to({_off:false},0).wait(1).to({regY:22.7,y:230.95,alpha:0.0037},0).wait(1).to({y:230.7,alpha:0.0167},0).wait(1).to({y:230.15,alpha:0.0435},0).wait(1).to({y:229.2,alpha:0.0919},0).wait(1).to({y:227.4,alpha:0.1816},0).wait(1).to({y:224.55,alpha:0.3248},0).wait(1).to({y:221.25,alpha:0.4878},0).wait(1).to({y:218.35,alpha:0.6345},0).wait(1).to({y:216.05,alpha:0.7499},0).wait(1).to({y:214.25,alpha:0.8388},0).wait(1).to({y:212.85,alpha:0.9088},0).wait(1).to({y:211.9,alpha:0.9564},0).wait(1).to({y:211.35,alpha:0.9834},0).wait(1).to({y:211.1,alpha:0.9964},0).wait(1).to({regY:26.9,y:213.25,alpha:1},0).wait(74).to({regY:22.7,y:211.05,alpha:0.9968},0).wait(1).to({alpha:0.9855},0).wait(1).to({alpha:0.9629},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.8533},0).wait(1).to({alpha:0.7328},0).wait(1).to({alpha:0.5836},0).wait(1).to({alpha:0.4352},0).wait(1).to({alpha:0.3113},0).wait(1).to({alpha:0.2141},0).wait(1).to({alpha:0.1375},0).wait(1).to({alpha:0.0771},0).wait(1).to({alpha:0.0372},0).wait(1).to({alpha:0.0143},0).wait(1).to({alpha:0.0031},0).wait(1).to({regY:26.9,y:213.25,alpha:0},0).wait(79));

	// sub_caption
	this.instance_6 = new lib.daily_caption_mc();
	this.instance_6.setTransform(148.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({regX:-0.4,x:148.1,y:221.65,alpha:0.0037},0).wait(1).to({y:221.5,alpha:0.0167},0).wait(1).to({y:221.2,alpha:0.0435},0).wait(1).to({y:220.7,alpha:0.0919},0).wait(1).to({x:148.05,y:219.75,alpha:0.1816},0).wait(1).to({x:148,y:218.2,alpha:0.3248},0).wait(1).to({x:147.95,y:216.5,alpha:0.4878},0).wait(1).to({x:147.9,y:214.9,alpha:0.6345},0).wait(1).to({x:147.85,y:213.7,alpha:0.7499},0).wait(1).to({y:212.75,alpha:0.8388},0).wait(1).to({x:147.8,y:212,alpha:0.9088},0).wait(1).to({y:211.5,alpha:0.9564},0).wait(1).to({y:211.2,alpha:0.9834},0).wait(1).to({y:211.05,alpha:0.9964},0).wait(1).to({regX:0.1,x:148.05,alpha:1},0).wait(69).to({regX:-0.4,x:147.8,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:0.9081},0).wait(1).to({alpha:0.8184},0).wait(1).to({alpha:0.6752},0).wait(1).to({alpha:0.5122},0).wait(1).to({alpha:0.3655},0).wait(1).to({alpha:0.2501},0).wait(1).to({alpha:0.1612},0).wait(1).to({alpha:0.0912},0).wait(1).to({alpha:0.0436},0).wait(1).to({alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.1,x:148.05,alpha:0},0).to({_off:true},69).wait(99));

	// second_prize
	this.instance_7 = new lib.second_prize_mc();
	this.instance_7.setTransform(150,133.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(98).to({_off:false},0).wait(1).to({regX:-0.8,regY:-1.5,scaleX:0.9995,scaleY:0.9995,x:149.2,y:131.75,alpha:0.0037},0).wait(1).to({scaleX:0.9975,scaleY:0.9975,y:131.55,alpha:0.0167},0).wait(1).to({scaleX:0.9936,scaleY:0.9936,y:131.2,alpha:0.0435},0).wait(1).to({scaleX:0.9865,scaleY:0.9865,y:130.6,alpha:0.0919},0).wait(1).to({scaleX:0.9734,scaleY:0.9734,y:129.45,alpha:0.1816},0).wait(1).to({scaleX:0.9524,scaleY:0.9524,x:149.25,y:127.6,alpha:0.3248},0).wait(1).to({scaleX:0.9285,scaleY:0.9285,y:125.55,alpha:0.4878},0).wait(1).to({scaleX:0.907,scaleY:0.907,y:123.7,alpha:0.6345},0).wait(1).to({scaleX:0.8901,scaleY:0.8901,x:149.3,y:122.2,alpha:0.7499},0).wait(1).to({scaleX:0.8771,scaleY:0.8771,y:121.05,alpha:0.8388},0).wait(1).to({scaleX:0.8668,scaleY:0.8668,y:120.15,alpha:0.9088},0).wait(1).to({scaleX:0.8598,scaleY:0.8598,y:119.55,alpha:0.9564},0).wait(1).to({scaleX:0.8559,scaleY:0.8559,y:119.2,alpha:0.9834},0).wait(1).to({scaleX:0.854,scaleY:0.854,y:119,alpha:0.9964},0).wait(1).to({regX:0,regY:0,scaleX:0.8534,scaleY:0.8534,x:150,y:120.3,alpha:1},0).wait(69).to({regX:-0.8,regY:-1.5,scaleX:0.854,scaleY:0.854,x:149.3,y:118.95,alpha:0.9963},0).wait(1).to({scaleX:0.8559,scaleY:0.8559,y:118.9,alpha:0.9833},0).wait(1).to({scaleX:0.8598,scaleY:0.8598,y:118.8,alpha:0.9565},0).wait(1).to({scaleX:0.8669,scaleY:0.8669,y:118.6,alpha:0.9081},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:118.25,alpha:0.8184},0).wait(1).to({scaleX:0.901,scaleY:0.901,y:117.65,alpha:0.6752},0).wait(1).to({scaleX:0.9249,scaleY:0.9249,x:149.25,y:116.9,alpha:0.5122},0).wait(1).to({scaleX:0.9464,scaleY:0.9464,y:116.35,alpha:0.3655},0).wait(1).to({scaleX:0.9633,scaleY:0.9633,y:115.85,alpha:0.2501},0).wait(1).to({scaleX:0.9764,scaleY:0.9764,x:149.2,y:115.45,alpha:0.1612},0).wait(1).to({scaleX:0.9866,scaleY:0.9866,y:115.15,alpha:0.0912},0).wait(1).to({scaleX:0.9936,scaleY:0.9936,y:114.95,alpha:0.0436},0).wait(1).to({scaleX:0.9976,scaleY:0.9976,y:114.85,alpha:0.0166},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,y:114.8,alpha:0.0036},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:150,y:116.3,alpha:0},0).wait(74).to({regX:-0.8,regY:-1.5,scaleX:0.9986,scaleY:0.9986,x:149.35,y:114.85,alpha:0.0032},0).wait(1).to({scaleX:0.9936,scaleY:0.9936,x:149.95,y:115.1,alpha:0.0145},0).wait(1).to({scaleX:0.9837,scaleY:0.9837,x:151.2,y:115.6,alpha:0.0371},0).wait(1).to({scaleX:0.9661,scaleY:0.9661,x:153.45,y:116.5,alpha:0.077},0).wait(1).to({scaleX:0.9355,scaleY:0.9355,x:157.3,y:118.1,alpha:0.1467},0).wait(1).to({scaleX:0.8826,scaleY:0.8826,x:163.95,y:120.85,alpha:0.2672},0).wait(1).to({scaleX:0.8169,scaleY:0.8169,x:172.2,y:124.15,alpha:0.4164},0).wait(1).to({scaleX:0.7517,scaleY:0.7517,x:180.45,y:127.55,alpha:0.5648},0).wait(1).to({scaleX:0.6973,scaleY:0.6973,x:187.3,y:130.35,alpha:0.6887},0).wait(1).to({scaleX:0.6545,scaleY:0.6545,x:192.7,y:132.55,alpha:0.7859},0).wait(1).to({scaleX:0.6209,scaleY:0.6209,x:196.9,y:134.25,alpha:0.8625},0).wait(1).to({scaleX:0.5943,scaleY:0.5943,x:200.25,y:135.65,alpha:0.9229},0).wait(1).to({scaleX:0.5768,scaleY:0.5768,x:202.45,y:136.55,alpha:0.9628},0).wait(1).to({scaleX:0.5667,scaleY:0.5667,x:203.75,y:137.05,alpha:0.9857},0).wait(1).to({scaleX:0.5618,scaleY:0.5618,x:204.35,y:137.3,alpha:0.9969},0).wait(1).to({regX:0.2,regY:0.2,scaleX:0.5604,scaleY:0.5604,x:204.95,y:138.25,alpha:1},0).wait(79));

	// main_caption
	this.instance_8 = new lib.sub_caption_mc();
	this.instance_8.setTransform(148.4,221.7,0.5208,0.5208,0,0,0,0.1,0.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({_off:false},0).wait(1).to({regX:2.6,regY:-3.6,x:149.65,y:219.75,alpha:0.0037},0).wait(1).to({y:219.6,alpha:0.0167},0).wait(1).to({y:219.3,alpha:0.0435},0).wait(1).to({y:218.8,alpha:0.0919},0).wait(1).to({x:149.6,y:217.85,alpha:0.1816},0).wait(1).to({x:149.55,y:216.3,alpha:0.3248},0).wait(1).to({x:149.5,y:214.6,alpha:0.4878},0).wait(1).to({x:149.45,y:213,alpha:0.6345},0).wait(1).to({x:149.4,y:211.8,alpha:0.7499},0).wait(1).to({y:210.85,alpha:0.8388},0).wait(1).to({x:149.35,y:210.1,alpha:0.9088},0).wait(1).to({y:209.6,alpha:0.9564},0).wait(1).to({y:209.3,alpha:0.9834},0).wait(1).to({y:209.15,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0.1,x:148.05,y:211.05,alpha:1},0).wait(68).to({x:148.4,y:211.25},0).wait(1).to({regX:2.6,regY:-3.6,x:149.7,y:209.35,alpha:0.9963},0).wait(1).to({y:209.5,alpha:0.9833},0).wait(1).to({y:209.8,alpha:0.9565},0).wait(1).to({y:210.3,alpha:0.9081},0).wait(1).to({y:211.2,alpha:0.8184},0).wait(1).to({y:212.7,alpha:0.6752},0).wait(1).to({y:214.4,alpha:0.5122},0).wait(1).to({y:215.95,alpha:0.3655},0).wait(1).to({y:217.15,alpha:0.2501},0).wait(1).to({y:218.1,alpha:0.1612},0).wait(1).to({y:218.8,alpha:0.0912},0).wait(1).to({y:219.3,alpha:0.0436},0).wait(1).to({y:219.6,alpha:0.0166},0).wait(1).to({y:219.75,alpha:0.0036},0).wait(1).to({regX:0.1,regY:0.1,x:148.4,y:221.7,alpha:0},0).to({_off:true},152).wait(99));

	// promo
	this.instance_9 = new lib.promo_mc();
	this.instance_9.setTransform(295.65,116.65,0.4337,0.4337,0,0,0,0.1,0);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:6.1,regY:-7.4,x:297.7,y:113.45,alpha:0.0037},0).wait(1).to({x:295.8,alpha:0.0167},0).wait(1).to({x:291.9,alpha:0.0435},0).wait(1).to({x:284.85,alpha:0.0919},0).wait(1).to({x:271.75,alpha:0.1816},0).wait(1).to({x:250.85,alpha:0.3248},0).wait(1).to({x:227.1,alpha:0.4878},0).wait(1).to({x:205.7,alpha:0.6345},0).wait(1).to({x:188.9,alpha:0.7499},0).wait(1).to({x:175.95,alpha:0.8388},0).wait(1).to({x:165.75,alpha:0.9088},0).wait(1).to({x:158.8,alpha:0.9564},0).wait(1).to({x:154.85,alpha:0.9834},0).wait(1).to({x:152.95,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0,x:149.85,y:116.65,alpha:1},0).wait(83).to({alpha:0},15).wait(157).to({regX:6.1,regY:-7.4,scaleX:0.4333,scaleY:0.4333,x:152.2,y:113.5,alpha:0.0032},0).wait(1).to({scaleX:0.4319,scaleY:0.4319,x:151.45,y:113.75,alpha:0.0145},0).wait(1).to({scaleX:0.429,scaleY:0.429,x:149.85,y:114.3,alpha:0.0371},0).wait(1).to({scaleX:0.4239,scaleY:0.4239,x:147.2,y:115.15,alpha:0.077},0).wait(1).to({scaleX:0.4151,scaleY:0.4151,x:142.45,y:116.75,alpha:0.1467},0).wait(1).to({scaleX:0.3998,scaleY:0.3998,x:134.2,y:119.5,alpha:0.2672},0).wait(1).to({scaleX:0.3809,scaleY:0.3809,x:124,y:122.9,alpha:0.4164},0).wait(1).to({scaleX:0.3621,scaleY:0.3621,x:113.9,y:126.25,alpha:0.5648},0).wait(1).to({scaleX:0.3464,scaleY:0.3464,x:105.45,y:129.1,alpha:0.6887},0).wait(1).to({scaleX:0.3341,scaleY:0.3341,x:98.85,y:131.3,alpha:0.7859},0).wait(1).to({scaleX:0.3244,scaleY:0.3244,x:93.6,y:133.05,alpha:0.8625},0).wait(1).to({scaleX:0.3167,scaleY:0.3167,x:89.5,y:134.4,alpha:0.9229},0).wait(1).to({scaleX:0.3117,scaleY:0.3117,x:86.75,y:135.3,alpha:0.9628},0).wait(1).to({scaleX:0.3088,scaleY:0.3088,x:85.2,y:135.8,alpha:0.9857},0).wait(1).to({scaleX:0.3073,scaleY:0.3073,x:84.4,y:136.1,alpha:0.9969},0).wait(1).to({regX:0.4,regY:0,scaleX:0.3069,scaleY:0.3069,x:82.4,y:138.45,alpha:1},0).wait(79));

	// background
	this.instance_10 = new lib.background_mc();
	this.instance_10.setTransform(149.85,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(364));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-53.9,125,424.7,125);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_2ndprize.png", id:"_2ndprize"},
		{src:"images/_300x250.jpg", id:"_300x250"},
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