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
	this.instance.setTransform(-1786,-350,3.6063,3.6063);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-1786,-350,1392.1,750.1), null);


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
	this.shape.graphics.f("#FFE400").s().p("AhEBuQgggNgTgbQgTgcgBgqQABg5AnggQAoghA7gBQA9ABAmAhQAoAgABA5QgBAqgTAcQgUAbgfANQggANglAAQgkAAgggNg");
	this.shape.setTransform(336.55,-46.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AAtIeIhWmdIgSAAIAAGdIj4AAIAAw7IEKAAQB4ABBDAmQBDAkAbBDQAaBEgBBbIAABNQAABUgVA4QgVA4gmAgIB7HdgAg7hGIAMAAQAgAAAOgPQANgOAAglIAAhoQAAgjgNgQQgNgPghAAIgMAAg");
	this.shape_1.setTransform(283.775,-89.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AjuIeIAAw7IHbAAIAADnIjlAAIAAC5IC6AAIAADnIi6AAIAADMIDnAAIAADog");
	this.shape_2.setTransform(223.65,-89.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AjWHjQhJhMABiVIAAoCQAAhfAqhDQAphEBIgkQBIgjBbgBQBAAABCATQBCARA8AgIhaDWQgegQgkgJQgjgIgjAAQgxAAgYAaQgYAaACA4IAAHaQAAAcAJAMQAKAMASgBQANAAAGgCQAHgCACgCIAAmHIDrAAIAAIpQgsAZgnASQgnASgqAJQgqAJg0AAQiXAAhIhMg");
	this.shape_3.setTransform(165.3498,-90.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AjWHjQhJhMABiVIAAoCQAAhfAqhDQAphEBHgkQBJgjBcgBQA/AABCATQBCARA8AgIhaDWQgfgQgigJQgkgIgjAAQgxAAgYAaQgXAaABA4IAAHaQAAAcAJAMQAKAMATgBQALAAAIgCQAGgCADgCIAAmHIDrAAIAAIpQgtAZgnASQgnASgrAJQgpAJg0AAQiXAAhIhMg");
	this.shape_4.setTransform(102.1998,-90.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("Ah7IeIAAw7ID3AAIAAQ7g");
	this.shape_5.setTransform(52.95,-89.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AkhIeIAAw7IERAAQBVAABCAbQBDAcAlA6QAmA7ABBeIAAAbQABBQgbA2QgbA1g+AbQBBAVAfA2QAfA3AABdIAABCQgBBegjA/QgjBAhAAhQhAAghWABgAgpEzIAPAAQAfAAALgQQAMgPgBgcIAAhsQABgdgLgQQgKgQghAAIgPAAgAgph4IATAAQAfAAALgQQALgPAAgbIAAhDQAAgegKgPQgKgQghAAIgTAAg");
	this.shape_6.setTransform(4.225,-89.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AgDIeIhFquIAAKuIj4AAIAAw7IFGAAIBCKeIAAqeID5AAIAAQ7g");
	this.shape_7.setTransform(-82.125,-89.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("Ah7IeIAAw7ID3AAIAAQ7g");
	this.shape_8.setTransform(-134.65,-89.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AAvIeIgvqLIguKLIlAAAIhQw7IEGAAIANNAIBHtAIDJAAIBHNAIAMtAIEHAAIhQQ7g");
	this.shape_9.setTransform(-198.45,-89.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhEBuQgggNgTgbQgUgbAAgrQABg5AnggQAoghA7gBQA8ABAoAhQAnAgABA5QAAArgUAbQgTAbggANQggAOglAAQgkAAgggOg");
	this.shape_10.setTransform(318.6,-198.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjWHjQhJhMAAiVIAAoCQABhfAqhDQAphEBIgkQBIgjBcgBQA/AABBATQBDARA7AgIhZDWQgegQgjgJQgkgIgjAAQgxAAgYAaQgXAaABA4IAAHaQAAAcAJAMQAKAMATgBQAMAAAHgCQAGgCADgCIAAmHIDrAAIAAIpQgtAZgnASQgnASgqAJQgqAJg1AAQiWAAhIhMg");
	this.shape_11.setTransform(270.2498,-242.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah7IdIAAw5ID3AAIAAQ5g");
	this.shape_12.setTransform(221,-242.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AkhIdIAAw5IERAAQBVAABCAbQBDAbAlA6QAmA7ABBeIAAAaQABBSgbA1QgbA0g+AcQBBAWAfA1QAfA3AABdIAABBQgBBegjBBQgjA/hAAhQhAAghWAAgAgpEzIAPAAQAfAAALgQQAMgPgBgcIAAhsQABgegLgPQgKgQghAAIgPAAgAgph4IATAAQAfAAALgPQALgPAAgcIAAhCQAAgfgKgPQgKgQghAAIgTAAg");
	this.shape_13.setTransform(172.275,-242.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ACxIdIAAsqIgKB8IhKKuIi6AAIhKquIgKh8IAAMqIjxAAIAAw5IF5AAIAkIAIAFBSIAGhSIAnoAIF2AAIAAQ5g");
	this.shape_14.setTransform(76.075,-242.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABQIdIgUjSIh3AAIgUDSIjzAAICPw5IFnAAICPQ5gAAkBkIgekiIgGhaIgEBaIgfEiIBHAAg");
	this.shape_15.setTransform(-4.775,-242.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjuIdIAAw5IHbAAIAADmIjlAAIAAC5IC7AAIAADnIi7AAIAADMIDoAAIAADng");
	this.shape_16.setTransform(-65.1,-242.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAtIdIhWmcIgSAAIAAGcIj4AAIAAw5IEKAAQB4AABDAmQBDAlAbBCQAaBEgBBaIAABOQAABUgVA4QgVA3gmAhIB7HcgAg7hGIAMAAQAgAAAOgPQANgOAAgkIAAhqQAAgigNgQQgNgPghAAIgMAAg");
	this.shape_17.setTransform(-127.825,-242.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AkeIdIAAw5IELAAQBWAABFAmQBFAmAoBIQAoBIACBiIAAG2QgBBlgoBIQgoBJhFAoQhFAnhWAAgAglEzIAJAAQAmAAAKgRQALgSgBgsIAAnTQAAgqgOgNQgOgNgeABIgJAAg");
	this.shape_18.setTransform(-195.25,-242.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-668.9,-325.8,1446.6,350.1), null);


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
	this.instance.setTransform(-156,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-156,-124,278,247), null);


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
	this.instance.setTransform(-938,-260,1.9523,1.9523);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-938,-260,542.8,560.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhcGWIAAjnIibpEIDAAAIA4EPIA3kPIDAAAIibJEIAADng");
	this.shape.setTransform(136.2,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA8GWIgPifIhZAAIgPCfIi2AAIBrsrIENAAIBrMrgAAbBLIgXjZIgEhEIgDBEIgXDZIA1AAg");
	this.shape_1.setTransform(84.075,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAjGWIgjnnIgiHnIjwAAIg9srIDGAAIAJJvIA2pvICWAAIA1JvIAKpvIDFAAIg8Mrg");
	this.shape_2.setTransform(22.3,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA8GWIgPifIhZAAIgPCfIi2AAIBrsrIENAAIBrMrgAAbBLIgXjZIgEhEIgDBEIgXDZIA1AAg");
	this.shape_3.setTransform(-39.475,-0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhcGWIAAp0IhyAAIAAi3IGdAAIAAC3IhyAAIAAJ0g");
	this.shape_4.setTransform(317.95,-104.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AizGWIAAsrIFlAAIAACtIirAAIAACKICLAAIAACuIiLAAIAACZICsAAIAACtg");
	this.shape_5.setTransform(277.7,-104.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaGWIhIl0IAAF0Ii7AAIAAsrIC7AAIAAFyIBIlyIDDAAIhkF/IBxGsg");
	this.shape_6.setTransform(231.475,-104.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAbGjQhzgBg6g9Qg7g/AAh4IAAlbQAAh4A7g+QA6g/BzABIABAAQAwAAAnAIQAnAIAlARIhDCVQgQgEgRgCQgSgCgNgBIgCAAQglAAgSAYQgSAWAAArIAAE3QABArAWAXQAXAXAlgBIABAAQARAAARgDQARgDATgIIBDCUQgpAUgqALQgrAKg0AAg");
	this.shape_7.setTransform(184.575,-105.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhcGWIAAsrIC5AAIAAMrg");
	this.shape_8.setTransform(148.6,-104.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhcGWIAAp0IhyAAIAAi3IGdAAIAAC3IhyAAIAAJ0g");
	this.shape_9.setTransform(115.1,-104.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA8GWIgPifIhZAAIgPCfIi2AAIBrsrIENAAIBrMrgAAbBKIgXjZIgEhDIgDBDIgXDZIA1AAg");
	this.shape_10.setTransform(54.575,-104.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhcGWIAAp0IhyAAIAAi3IGdAAIAAC3IhyAAIAAJ0g");
	this.shape_11.setTransform(-5.9,-104.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhtGXQgvgKgtgSIAwioQAjAOAcAJQAbAJAXAAQAiAAAQgNQAQgMAAgbIAAgFQAAgWgRgaQgQgagognIgjgiQghghgYgfQgYgggNgnQgNgoAAg2IAAgCQABhrA2g7QA1g6BggBQAlAAAtAKQAtAJAsASIgwCcQgcgIgXgFQgXgFgNAAQggAAgQANQgQANAAAaIAAADQABAUARAWQATAVAeAfIASATIAUAUQAiAgAYAfQAZAgANApQAOAoAAA7IAAABQgBBLgZA0QgbA1gvAcQgwAcg/AAQg1AAgvgLg");
	this.shape_12.setTransform(-48.275,-105.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhuGEQgxgXgcgwQgcgvAAhJIAApfIC+AAIAAJkQAAASAHAIQAGAIAMAAQAOAAAGgIQAFgJABgRIAApkIC+AAIAAJfQAABAgYAwQgXAwgxAbQgvAbhIAAQg/AAgwgXg");
	this.shape_13.setTransform(-95,-104.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhjGPQgvgMgxgZIBEihQAYAMATAGQAUAHAUAAQAbAAAMgRQALgRgBglIAAo2IC/AAIAAJVQgCBrg4A8Qg4A6hhABQglAAgvgNg");
	this.shape_14.setTransform(-144.15,-104.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhtGXQgvgKgtgSIAwioQAjAOAcAJQAbAJAXAAQAiAAAQgNQAQgMAAgbIAAgFQAAgWgRgaQgQgagognIgjgiQghghgYgfQgYgggNgnQgNgoAAg2IAAgCQABhrA2g7QA1g6BggBQAlAAAtAKQAtAJAsASIgwCcQgcgIgXgFQgXgFgNAAQggAAgQANQgQANAAAaIAAADQABAUARAWQATAVAeAfIASATIAUAUQAiAgAYAfQAZAgANApQAOAoAAA7IAAABQgBBLgZA0QgbA1gvAcQgwAcg/AAQg1AAgvgLg");
	this.shape_15.setTransform(-197.125,-105.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhcGWIAAsrIC5AAIAAMrg");
	this.shape_16.setTransform(-230.6,-104.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("AAaGWIhIl0IAAF0Ii7AAIAAsrIC7AAIAAFyIBIlyIDDAAIhkF/IBxGsg");
	this.shape_17.setTransform(163.825,-209.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE400").s().p("AA8GWIgPieIhZAAIgPCeIi2AAIBrsrIENAAIBrMrgAAbBKIgXjZIgEhDIgDBDIgXDZIA1AAg");
	this.shape_18.setTransform(110.175,-209.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE400").s().p("AiyGWIAAsrIFkAAIAACtIisAAIAACLICMAAIAACsIiMAAIAACaICuAAIAACtg");
	this.shape_19.setTransform(65,-209.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE400").s().p("AAiGWIhAk1IgOAAIAAE1Ii6AAIAAsrIDIAAQBZABAyAbQAzAcAUAzQAUAygBBDIAAA7QAAA/gQAqQgPApgdAZIBcFlgAgsg1IAJAAQAYABAKgMQAKgKAAgbIAAhQQAAgZgJgMQgKgMgZABIgJAAg");
	this.shape_20.setTransform(17.975,-209.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFE400").s().p("AhcGWIAAp0IhyAAIAAi3IGdAAIAAC3IhyAAIAAJ0g");
	this.shape_21.setTransform(-29.3,-209.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFE400").s().p("AhtGXQgvgKgtgSIAwioQAjAOAcAJQAbAJAXAAQAiAAAQgNQAQgMAAgbIAAgFQAAgWgRgaQgQgagognIgjgiQghghgYgfQgYgggNgnQgNgoAAg2IAAgCQABhrA2g7QA1g6BggBQAlAAAtAKQAtAJAsASIgwCcQgcgIgXgFQgXgFgNAAQggAAgQANQgQANAAAaIAAADQABAUARAWQATAVAeAfIASATIAUAUQAiAgAYAfQAZAgANApQAOAoAAA7IAAABQgBBLgZA0QgbA1gvAcQgwAcg/AAQg1AAgvgLg");
	this.shape_22.setTransform(-71.725,-209.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFE400").s().p("AigFqQg3g4ABhwIAAmBQAAhIAfgzQAfgyA2gbQA2gbBFAAQAvAAAxAOQAyANAtAYIhDCgQgXgMgbgGQgagHgaAAQgmABgRATQgSATACAqIAAFkQgBAVAIAJQAHAIANAAQAJAAAGgCIAHgCIAAklICvAAIAAGeQghATgdAOQgdAMggAHQgfAHgnAAQhxAAg2g5g");
	this.shape_23.setTransform(298.8498,-313.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFE400").s().p("AgCGWIg0oCIAAICIi6AAIAAsrID1AAIAxH2IAAn2IC7AAIAAMrg");
	this.shape_24.setTransform(247.2,-313.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE400").s().p("AhcGWIAAsrIC5AAIAAMrg");
	this.shape_25.setTransform(207.85,-313.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFE400").s().p("AgCGWIgzoCIAAICIi7AAIAAsrID1AAIAxH2IAAn2IC6AAIAAMrg");
	this.shape_26.setTransform(168.5,-313.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFE400").s().p("AgCGWIg0oCIAAICIi6AAIAAsrID1AAIAxH2IAAn2IC7AAIAAMrg");
	this.shape_27.setTransform(114.45,-313.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFE400").s().p("AhcGWIAAsrIC5AAIAAMrg");
	this.shape_28.setTransform(75.05,-313.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFE400").s().p("AAjGWIgjnnIgiHnIjxAAIg8srIDFAAIAKJuIA1puICWAAIA2JuIAJpuIDGAAIg9Mrg");
	this.shape_29.setTransform(27.2,-313.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFE400").s().p("AAiGWIhAk1IgOAAIAAE1Ii6AAIAAsrIDIAAQBZAAAyAcQAzAcAUAzQAUAxgBBFIAAA6QAAA/gQAqQgPApgdAYIBcFmgAgsg0IAJAAQAYAAAKgLQAKgLAAgcIAAhOQAAgagJgMQgKgLgZAAIgJAAg");
	this.shape_30.setTransform(-47.475,-313.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFE400").s().p("AhuGEQgxgXgcgwQgcgvAAhJIAApfIC+AAIAAJkQAAASAHAIQAGAIAMAAQAOAAAGgIQAFgJABgRIAApkIC+AAIAAJfQAABAgYAwQgXAwgxAbQgvAbhIAAQg/AAgwgXg");
	this.shape_31.setTransform(-99.05,-312.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFE400").s().p("AABGiQhrAAg2g6Qg2g6AAhsIAAmCQABhzA3g3QA5g4BlABIACAAQBqAAA2A7QA2A5AABtIAAGCQgBByg4A3Qg4A3hlAAgAgTjqQgFAJAAASIAAGgQgBASAHAIQAGAIAMAAIABAAQAMAAAHgIQAFgJABgRIAAmgQAAgSgHgJQgHgIgMAAIAAAAQgOAAgFAIg");
	this.shape_32.setTransform(-149.2,-313.5252);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFE400").s().p("AhcGWIAAjnIibpEIDAAAIA4EPIA3kPIDAAAIibJEIAADng");
	this.shape_33.setTransform(-199.55,-313.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-317.1,-376.6,730.5,462.20000000000005), null);


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
	this.shape.graphics.f("#CC0000").s().p("AAIAXIgIgdIgHAdIgMAAIgPgtIAMAAIAJAdIAIgdIALAAIAIAdIAJgdIAMAAIgPAtg");
	this.shape.setTransform(39.975,9.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AgLAVQgGgCgDgGQgDgGAAgHQAAgGADgGQADgFAFgDQAGgDAGAAQAKAAAHAGQAHAHAAAKQAAAKgHAHQgHAHgKAAQgFAAgGgDgAgHgKQgDAEAAAGQAAAHADAEQADADAEAAQAFAAADgDQADgEAAgHQAAgGgDgEQgDgDgFAAQgEAAgDADg");
	this.shape_1.setTransform(33.725,9.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AAMAgIgYgpIAAApIgNAAIAAg/IANAAIAZAqIAAgqIANAAIAAA/g");
	this.shape_2.setTransform(27.675,8.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AgTAgIgBgKIAFABQAFAAABgDQADgCABgEIgSguIANAAIAKAgIALggIANAAIgQAsIgDAIIgEAGIgCAEQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABgBAAIgGABIgHgBg");
	this.shape_3.setTransform(19.5,9.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AgNAWQgEgCgBgEQgCgEAAgGIAAgdIAMAAIAAAWIABALIACADIAFABQACAAADgBIADgFQABgCAAgJIAAgUIAMAAIAAAuIgLAAIAAgHQgDADgEADQgDACgFAAQgEAAgEgCg");
	this.shape_4.setTransform(14.275,9.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AgaAgIAAg/IAaAAIAKAAIAHADQADACACAEQACADAAAEQAAAFgDADQgCAEgEACQAFABAEAEQADAEAAAGQAAAEgCAEQgCAEgEADQgDACgGABIgOAAgAgNAVIAMAAIAIAAIAFgDQABgCAAgDQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBgCgDgBQgCgBgJAAIgKAAgAgNgGIAIAAIAJAAQAEAAACgCQABgCAAgDQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgCgCgEAAIgKAAIgHAAg");
	this.shape_5.setTransform(8.4,8.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjnhJIHPAAQAVAAAOAPQAPAPAAAUIAAAvQAAAUgPAPQgOAPgVAAInPAAQgVAAgPgPQgOgPAAgUIAAgvQAAgUAOgPQAPgPAVAAg");
	this.shape_6.setTransform(23.225,7.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAD72E").s().p("AjnBKQgVAAgPgPQgOgPAAgUIAAgvQAAgUAOgPQAPgPAVAAIHPAAQAVAAAOAPQAPAPAAAUIAAAvQAAAUgPAPQgOAPgVAAg");
	this.shape_7.setTransform(23.225,7.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.button_mc, new cjs.Rectangle(-6,-1,58.5,16.8), null);


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
	this.instance.setTransform(164.95,-8.9,0.0137,0.0137,0,0,0,494.2,461.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAjIgFgBIgDgBIgBgPIAHACIAFABIAEAAIADgDIACgEIgCAAIgBAAQgFAAgDgBQgEgCgBgEQgCgEACgFIAGggIAPAAIgGAfIAAACIACABIAAAAIABAAIADgRIAEgRIAPAAIgLAxQgBAKgGAGQgFAEgJAAIgEAAg");
	this.shape.setTransform(153.975,-7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAjIAOhFIAPAAIgPBFg");
	this.shape_1.setTransform(151,-9.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAjIgIgCIAOhEIAPAAIgEASIACAAQAJAAADAFQADAEgCAJIgDAPQgCAKgFAFQgFAFgIAAIgJgBgAgCAVIABAAIABgBIACgEIADgPIAAgDIgCgBIgBAAg");
	this.shape_2.setTransform(147.59,-9.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAlIAKgyIAPAAIgLAygAABgWQgBgCAAgEQABgDACgCQACgDAEAAQADAAABADQACACgBADQgBAEgCACQgCACgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_3.setTransform(144.62,-9.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAaIgIgBIAEgPIAGACIAGAAIADAAIACgCIgBgCIgBgBIgCgBIgCgBQgFgCgBgDQgCgEABgGQABgEACgEQADgDAEgDQADgCAFAAIAGAAIAHACIgEAOIgFgBIgFgBIgDABIgBACIAAABIADACIABAAIABABIAGAEIADADIAAAIQgBAFgDADQgDAEgEACQgFADgGAAIgFgBg");
	this.shape_4.setTransform(141.525,-8.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBAaIAHgjIAAgBIgCgBIgBAAIgBABIgHAkIgPAAIAKgwIAKgDIAIgBQAIAAAEAFQADADgCAIIgIAkg");
	this.shape_5.setTransform(137.59,-8.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAWQgEgFACgJIADgOQACgLAGgEQAFgFAIAAQAIAAADAFQAEAEgCALIgDAOQgCAJgGAFQgFAFgHAAQgJAAgDgFgAABgLIgBAEIgDAPIAAADIACABIABgBIAAgDIAEgPIAAgEIgBgBIgCABg");
	this.shape_6.setTransform(133.675,-8.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAkIAPhGIAGAAIAFAAIAFgBQAJAAADAFQADAEgCALIgDAPQgCAIgFAFQgFAFgIAAIgCAAIgEASgAAAADIAAAAIACgBIACgCIADgPIAAgFIgCgBIgBAAg");
	this.shape_7.setTransform(129.365,-7.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAaIgIgBIAEgPIAGACIAGAAIADAAIACgCIgBgCIgBgBIgCgBIgCgBQgFgCgBgDQgCgEABgGQABgEACgEQADgDAEgDQADgCAFAAIAGAAIAHACIgEAOIgFgBIgFgBIgDABIgBACIAAABIADACIABAAIABABIAGAEIADADIAAAIQgBAFgDADQgDAEgEACQgFADgGAAIgFgBg");
	this.shape_8.setTransform(125.725,-8.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAWQgFgFACgLIADgMQACgLAGgEQAFgFAIAAQAIAAADAFQADAFgCAJIgCALIgSAAIAAAEQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQACACADgBIAEAAIADgBIgBAPIgHABIgEAAQgJAAgEgFgAABgMIgBAEIAAADIADAAIABgDIAAgEIgBgBIgCABg");
	this.shape_9.setTransform(122.1092,-8.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAjIAAgbIgCAAIgFAbIgQAAIAOhFIARAAQAHAAAEACQAEADABAEQABAEgBAGIgBAFQgBAGgDAEQgCACgDACIACAfgAAAgEIABAAIADAAIACgEIABgHIAAgDIgDgBIgBAAg");
	this.shape_10.setTransform(117.795,-9.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAjIgFgBIgDgBIgBgPIAHACIAFABIAEAAIADgDIACgEIgCAAIgBAAQgFAAgDgBQgEgCgBgEQgCgEACgFIAGggIAPAAIgGAfIAAACIACABIAAAAIABAAIADgRIAEgRIAPAAIgLAxQgBAKgGAGQgFAEgJAAIgEAAg");
	this.shape_11.setTransform(112.375,-7.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAXQgDgFABgHIABgBQABgHAFgDQAFgEAHAAIACAAIABAAIABgCQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIgEgBIgFABIgGACIAHgPIADgBIADgBIAEAAQAHAAADACQAEACABAEIgBAKIgHAgIgJACIgIABQgIAAgEgEgAgBAGIgCACIAAACIAAADIACABIABAAIABgJIgBAAIgBABg");
	this.shape_12.setTransform(108.2583,-8.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAjIAOhFIAPAAIgPBFg");
	this.shape_13.setTransform(105.35,-9.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAjIAOhFIAQAAQAIAAAEACQAEADABAEQABAEgCAGIgBAGQgBAIgEADQgDAEgFACQgFABgFAAIgBAAIgFAagAAAgDIABAAIADgBIABgDIACgIIAAgDIgDgBIgBAAg");
	this.shape_14.setTransform(101.9813,-9.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAaIAAgzIANAAQADABADABQAEACACADQABAEAAAFIAAATQAAAFgBADIgGAGQgDACgDAAgAgBAPIAAAAIACgBIABgEIAAgUIgBgDIgCgBIAAAAg");
	this.shape_15.setTransform(181.9,-22);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKAaIAAgzIAVAAIAAALIgLAAIAAAJIAJAAIAAAKIgJAAIAAAKIALAAIAAALg");
	this.shape_16.setTransform(179.125,-22);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAEAaIgBgKIgFAAIgBAKIgLAAIAGgzIAQAAIAHAzgAACAFIgCgNIAAgEIAAAEIgBANIADAAg");
	this.shape_17.setTransform(176.175,-22);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAaIgCggIAAAgIgMAAIAAgzIAOAAIADAfIAAgfIAMAAIAAAzg");
	this.shape_18.setTransform(171.95,-22);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgFAaIAAgzIALAAIAAAzg");
	this.shape_19.setTransform(169.475,-22);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGAaIgGgCIADgLIAEACIAEAAIACAAIABgDIAAAAIgBgDIgDgEIgCgCIgEgEIgCgEIgBgGQAAgHAEgEQADgDAFAAIAFAAIAGACIgDAKIgDgBIgDAAIgDABIAAACIAAAAIAAADIADADIACABIABACIAEADIACAEIABAGIAAABQAAAEgCAEQgBADgDACQgDABgEAAIgGAAg");
	this.shape_20.setTransform(166.525,-22.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKAaIAAgzIAVAAIAAALIgLAAIAAAJIAJAAIAAAKIgJAAIAAAKIALAAIAAALg");
	this.shape_21.setTransform(164.025,-22);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIAXQgEgEAAgIIAAgVQAAgHAEgEQAEgEAFAAIAGAAIAFACIgEAJIgCAAIgDAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAIAAAEIAAATQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAIADABIAAAAIADAAIACAAIAEAJIgFACIgHAAQgFAAgEgDg");
	this.shape_22.setTransform(161.5,-22.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgFAaIAAgzIALAAIAAAzg");
	this.shape_23.setTransform(159.225,-22);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AACAaIgDgUIgBAAIAAAUIgMAAIAAgzIANAAQAEABAEABQADACABADIABAIIAAADIgBAHIgCADIAFAXgAgCgCIAAAAIACgBIABgDIAAgEIgBgDIgCgBIAAAAg");
	this.shape_24.setTransform(156.8,-22);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMAaIAAgzIAMAAQAFABACABQAEACABADQACADAAAFIAAAEQAAAFgDACQgCADgCACIgHABIgBAAIAAATgAgBgCIAAAAIABAAIABgDIAAgFIgBgDIgBgBIAAAAg");
	this.shape_25.setTransform(153.6,-22);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAgIAAhAIAJAAIAABAg");
	this.shape_26.setTransform(148.65,-21.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFAaIAAgPIgKgkIANAAIACARIAEgRIAMAAIgKAkIAAAPg");
	this.shape_27.setTransform(143.625,-22);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgLAaIAAgzIALAAIAAAnIAMAAIAAAMg");
	this.shape_28.setTransform(140.55,-22);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMAaIAAgzIAMAAQAEABADABQAEACABADQABADABAFIAAAEQAAAFgCACQgCADgEACIgGABIgBAAIAAATgAgBgCIAAAAIABAAQABgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAgBIAAgFIgCgDIgBgBIAAAAg");
	this.shape_29.setTransform(137.6,-22);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgNAaIAAgzIANAAQAEABADABQAEACABADQABADAAAFIAAAEQAAAFgBACQgDADgDACIgGABIgBAAIAAATgAgBgCIAAAAIACAAIABgDIAAgFIgBgDIgCgBIAAAAg");
	this.shape_30.setTransform(134.55,-22);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAEAaIgBgKIgFAAIgBAKIgLAAIAGgzIAQAAIAHAzgAACAFIgCgNIAAgEIAAAEIgBANIADAAg");
	this.shape_31.setTransform(131.375,-22);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGAaIgGgCIADgLIAEACIAEAAIACAAIABgDIAAAAIgBgDIgDgEIgCgCIgEgEIgCgEIgBgGQAAgHAEgEQADgDAFAAIAFAAIAGACIgDAKIgDgBIgDAAIgDABIAAACIAAAAIAAADIADADIACABIABACIAEADIACAEIABAGIAAABQAAAEgCAEQgBADgDACQgDABgEAAIgGAAg");
	this.shape_32.setTransform(127.525,-22.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgCALIgCgVIAKAAIgCAVg");
	this.shape_33.setTransform(125.35,-23.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgIAXQgEgEAAgIIAAgVQAAgHAEgEQAEgEAFAAIAGAAIAFACIgEAJIgCAAIgDAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAIAAAEIAAATQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAIAEABIABAAIACAAIABAAIAFAJIgFACIgHAAQgFAAgEgDg");
	this.shape_34.setTransform(123.35,-22.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgNAXQgEgDAAgHIAAgGQAAgEABgCQACgBADgBIgCgEIAAgEIAAgDIABgIQAAgDADgBIAIgBIAEABQACABACADQAAADAAAFIAAADIAAADIgCAEIgFACIAFAGIgBgDIAAgDIAKAAIAAAGIgBAFIgCAFIAHAKIgMAAIgBgCIgEACIgCAAQgJAAgDgDgAgGAIIAAACIAAABQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQAAAAABAAIABAAIAAgBIgGgJgAgDgOIAAABIAAAGIAAABIAAABIACgBIAAgDIAAgEIAAgBIgBgBIgBABg");
	this.shape_35.setTransform(119.85,-22.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgFAaIAAgnIgHAAIAAgMIAZAAIAAAMIgHAAIAAAng");
	this.shape_36.setTransform(116.55,-22);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgEAgIAAhAIAJAAIAABAg");
	this.shape_37.setTransform(111.75,-21.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgGAaIgGgDIAEgJIADABIAEABIABgBIABgEIAAgEIAAgBIgBgCIgCgBIgCAAIAAgHIABAAIADgBIAAgCIAAgBIAAgCIAAgEIgCgBIgCAAIgDACIgEgKIAGgCIAFgBQAFABAEADQADAEAAAHIAAABQAAAEgBACQgCADgDABQAEAAABACQACADAAAEIAAADQAAAHgEAEQgDADgGAAIgGAAg");
	this.shape_38.setTransform(106.875,-22);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgHAaIAIgoIgMAAIAAgLIAXAAIAAALIgJAog");
	this.shape_39.setTransform(104.15,-22);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgMAaIAAgLIAHgIIAFgIQACgEAAgEIAAAAIgBgDIgBgBIgCgBIgEABIgCAAIgEgJIAGgCIAGgBQAEAAADACQADACABAEQACADAAAEIAAABIgBAHIgDAGIgFAGIgDAFIALAAIAAALg");
	this.shape_40.setTransform(101.45,-22.05);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgGAaIgGgCIADgLIAEACIAEAAIACAAIABgDIAAAAIgBgDIgDgEIgCgCIgEgEIgCgEIgBgGQAAgHAEgEQADgDAFAAIAFAAIAGACIgDAKIgDgBIgDAAIgDABIAAACIAAAAIAAADIADADIACABIABACIAEADIACAEIABAGIAAABQAAAEgCAEQgBADgDACQgDABgEAAIgGAAg");
	this.shape_41.setTransform(97.825,-22.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgKAaIAAgzIAVAAIAAALIgLAAIAAAJIAJAAIAAAKIgJAAIAAAKIALAAIAAALg");
	this.shape_42.setTransform(95.325,-22);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgFAaIAAgzIALAAIAAAzg");
	this.shape_43.setTransform(93.225,-22);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AACAaIgDgUIgBAAIAAAUIgLAAIAAgzIAMAAQAEABAEABQADACACADIABAIIAAADIgBAHIgEADIAHAXgAgCgCIAAAAIACgBIAAgDIAAgEIAAgDIgCgBIAAAAg");
	this.shape_44.setTransform(90.8,-22);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgKAaIAAgzIAVAAIAAALIgLAAIAAAJIAJAAIAAAKIgJAAIAAAKIALAAIAAALg");
	this.shape_45.setTransform(87.975,-22);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgGAaIgGgCIADgLIAEACIAEAAIACAAIABgDIAAAAIgBgDIgDgEIgCgCIgEgEIgCgEIgBgGQAAgHAEgEQADgDAFAAIAFAAIAGACIgDAKIgDgBIgDAAIgDABIAAACIAAAAIAAADIADADIACABIABACIAEADIACAEIABAGIAAABQAAAEgCAEQgBADgDACQgDABgEAAIgGAAg");
	this.shape_46.setTransform(85.275,-22.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(83.7,-26.1,99.99999999999999,24.3);


// stage content:
(lib.bigticketawarenesshtml5320x50 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(110.8,43.95,1.1257,1.1257);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(283));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(159.95,3.8,0.0852,0.0852,0,0,0,0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(189).to({alpha:0},16).wait(78));

	// Layer_1
	this.instance_2 = new lib.button_mc();
	this.instance_2.setTransform(172.75,33.15,1,1,0,0,0,28.2,7.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(205).to({_off:false},0).to({y:24.4,alpha:1},16).wait(62));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(83.35,22.5,0.0831,0.0831);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(189).to({_off:false},0).wait(1).to({regX:-1090,regY:25.1,x:-7.05,y:24.6,alpha:0.0032},0).wait(1).to({x:-6.15,alpha:0.0145},0).wait(1).to({x:-4.45,alpha:0.0371},0).wait(1).to({x:-1.4,alpha:0.077},0).wait(1).to({x:3.95,y:24.65,alpha:0.1467},0).wait(1).to({x:13.2,y:24.7,alpha:0.2672},0).wait(1).to({x:24.6,y:24.75,alpha:0.4164},0).wait(1).to({x:36,y:24.8,alpha:0.5648},0).wait(1).to({x:45.5,y:24.85,alpha:0.6887},0).wait(1).to({x:52.95,y:24.9,alpha:0.7859},0).wait(1).to({x:58.8,alpha:0.8625},0).wait(1).to({x:63.4,y:24.95,alpha:0.9229},0).wait(1).to({x:66.5,alpha:0.9628},0).wait(1).to({x:68.25,alpha:0.9857},0).wait(1).to({x:69.1,alpha:0.9969},0).wait(1).to({regX:0,regY:0,x:159.95,y:22.9,alpha:1},0).wait(78));

	// main_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(159.7,44.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:53.7,regY:-166.2,x:165.25,y:26.95,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:26.9,alpha:0.0435},0).wait(1).to({y:26.8,alpha:0.0919},0).wait(1).to({y:26.6,alpha:0.1816},0).wait(1).to({y:26.3,alpha:0.3248},0).wait(1).to({y:25.95,alpha:0.4878},0).wait(1).to({y:25.65,alpha:0.6345},0).wait(1).to({y:25.4,alpha:0.7499},0).wait(1).to({y:25.2,alpha:0.8388},0).wait(1).to({y:25.05,alpha:0.9088},0).wait(1).to({y:24.95,alpha:0.9564},0).wait(1).to({y:24.9,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:42.25,alpha:1},0).wait(69).to({regX:53.7,regY:-166.2,x:165.25,y:24.9,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:24.95,alpha:0.9565},0).wait(1).to({y:25.05,alpha:0.9081},0).wait(1).to({y:25.25,alpha:0.8184},0).wait(1).to({y:25.55,alpha:0.6752},0).wait(1).to({y:25.9,alpha:0.5122},0).wait(1).to({y:26.2,alpha:0.3655},0).wait(1).to({y:26.45,alpha:0.2501},0).wait(1).to({y:26.65,alpha:0.1612},0).wait(1).to({y:26.8,alpha:0.0912},0).wait(1).to({y:26.9,alpha:0.0436},0).wait(1).to({y:26.95,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:44.35,alpha:0},0).to({_off:true},1).wait(169));

	// sub_caption
	this.instance_5 = new lib.daily_caption_mc();
	this.instance_5.setTransform(159.7,44.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:49.4,regY:-157.8,x:164.8,y:27.8,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:27.75,alpha:0.0435},0).wait(1).to({y:27.65,alpha:0.0919},0).wait(1).to({y:27.45,alpha:0.1816},0).wait(1).to({y:27.15,alpha:0.3248},0).wait(1).to({y:26.8,alpha:0.4878},0).wait(1).to({y:26.5,alpha:0.6345},0).wait(1).to({y:26.25,alpha:0.7499},0).wait(1).to({y:26.05,alpha:0.8388},0).wait(1).to({y:25.9,alpha:0.9088},0).wait(1).to({y:25.8,alpha:0.9564},0).wait(1).to({y:25.75,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:42.25,alpha:1},0).wait(62).to({regX:49.4,regY:-157.8,x:164.8,y:25.75,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:25.8,alpha:0.9565},0).wait(1).to({y:25.9,alpha:0.9081},0).wait(1).to({y:26.1,alpha:0.8184},0).wait(1).to({y:26.4,alpha:0.6752},0).wait(1).to({y:26.75,alpha:0.5122},0).wait(1).to({y:27.05,alpha:0.3655},0).wait(1).to({y:27.3,alpha:0.2501},0).wait(1).to({y:27.5,alpha:0.1612},0).wait(1).to({y:27.65,alpha:0.0912},0).wait(1).to({y:27.75,alpha:0.0436},0).wait(1).to({y:27.8,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:44.35,alpha:0},0).wait(94));

	// second_prize
	this.instance_6 = new lib.second_prize_mc();
	this.instance_6.setTransform(102.1,29.75,0.1923,0.1923);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({regX:-17,regY:-0.5,x:98.85,y:29.6,alpha:0.0037},0).wait(1).to({y:29.55,alpha:0.0167},0).wait(1).to({y:29.45,alpha:0.0435},0).wait(1).to({y:29.25,alpha:0.0919},0).wait(1).to({y:28.9,alpha:0.1816},0).wait(1).to({y:28.35,alpha:0.3248},0).wait(1).to({y:27.65,alpha:0.4878},0).wait(1).to({y:27.1,alpha:0.6345},0).wait(1).to({y:26.65,alpha:0.7499},0).wait(1).to({y:26.25,alpha:0.8388},0).wait(1).to({y:26,alpha:0.9088},0).wait(1).to({y:25.8,alpha:0.9564},0).wait(1).to({y:25.7,alpha:0.9834},0).wait(1).to({y:25.65,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:102.1,y:25.75,alpha:1},0).wait(62).to({regX:-17,regY:-0.5,x:98.85,y:25.65,alpha:0.9963},0).wait(1).to({y:25.8,alpha:0.9833},0).wait(1).to({y:26.05,alpha:0.9565},0).wait(1).to({y:26.55,alpha:0.9081},0).wait(1).to({y:27.45,alpha:0.8184},0).wait(1).to({y:28.85,alpha:0.6752},0).wait(1).to({y:30.5,alpha:0.5122},0).wait(1).to({y:31.95,alpha:0.3655},0).wait(1).to({y:33.1,alpha:0.2501},0).wait(1).to({y:34,alpha:0.1612},0).wait(1).to({y:34.7,alpha:0.0912},0).wait(1).to({y:35.2,alpha:0.0436},0).wait(1).to({y:35.45,alpha:0.0166},0).wait(1).to({y:35.6,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:102.1,y:35.75,alpha:0},0).to({_off:true},76).wait(18));

	// promo
	this.instance_7 = new lib.promo_mc();
	this.instance_7.setTransform(189.15,23.35,0.0867,0.0867,0,0,0,0.6,0.6);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-666.6,regY:20.2,x:131.15,y:25.05,alpha:0.0037},0).wait(1).to({x:130.8,alpha:0.0167},0).wait(1).to({x:130,alpha:0.0435},0).wait(1).to({x:128.6,alpha:0.0919},0).wait(1).to({x:125.95,alpha:0.1816},0).wait(1).to({x:121.8,alpha:0.3248},0).wait(1).to({x:117.05,alpha:0.4878},0).wait(1).to({x:112.75,alpha:0.6345},0).wait(1).to({x:109.4,alpha:0.7499},0).wait(1).to({x:106.8,alpha:0.8388},0).wait(1).to({x:104.75,alpha:0.9088},0).wait(1).to({x:103.35,alpha:0.9564},0).wait(1).to({x:102.55,alpha:0.9834},0).wait(1).to({x:102.2,alpha:0.9964},0).wait(1).to({regX:0,regY:0.6,x:159.95,y:23.35,alpha:1},0).wait(83).to({alpha:0},15).to({_off:true},1).wait(169));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5050F").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160.025,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(94.9,18.4,225.20000000000002,41);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_2ndprize.jpg", id:"_2ndprize"},
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