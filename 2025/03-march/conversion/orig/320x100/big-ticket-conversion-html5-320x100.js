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
	this.instance.setTransform(-1871,-530,4.7611,4.7611);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-1871,-530,1837.8,990.3), null);


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
	this.shape.graphics.f("#FFE400").s().p("AhsCvQgygVgfgrQgegsgBhEQAChZA9gzQA+g0BfgBQBgABA9A0QA+AzACBZQgBBEgfAsQgfArgxAVQgyAUg7AAQg6AAgygUg");
	this.shape.setTransform(886.575,92.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("ABKNXIhKwDIhJQDIn5AAIh/6tIGfAAIATUgIBy0gIE8AAIBxUgIAT0gIGfAAIh+atg");
	this.shape_1.setTransform(783.275,24.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AABNwQjjgBhxh5Qhyh7AAjiIAAsuQACjyB2h0QB4h1DVABIADAAQDhABBwB7QByB5AADlIAAMuQgCDvh2B0Qh1B0jUAAgAgpntQgMATAAAmIAANsQAAAmANARQANARAbAAIABAAQAbAAANgSQAMgRAAglIAAtsQAAgngNgSQgOgSgaABIgCAAQgcgBgLASg");
	this.shape_2.setTransform(656.8,23.9996);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AgFNXIhsw7IAAQ7ImJAAIAA6tIIEAAIBoQiIAAwiIGJAAIAAatg");
	this.shape_3.setTransform(548.1,24.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AjDNXIAA0rIjwAAIAAmCINnAAIAAGCIjwAAIAAUrg");
	this.shape_4.setTransform(1295.725,-210.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("Al5NXIAA6tILvAAIAAFsIloAAIAAEkIElAAIAAFtIklAAIAAFDIFsAAIAAFtg");
	this.shape_5.setTransform(1210.975,-210.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AA3NXIiasQIAAMQImIAAIAA6tIGIAAIAAMMICYsMIGdAAIjUMnIDuOGg");
	this.shape_6.setTransform(1113.35,-210.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AA6NxQjzgBh8iCQh7iDAAj9IAArbQAAj9B7iDQB8iDDzAAIACAAQBkAABSARQBTASBMAjIiNE7QgggJglgFQglgEgcAAIgEAAQhNAAgnAvQgmAwAABcIAAKNQABBcAvAwQAxAvBPAAIACAAQAkABAjgIQAjgHApgRICME6QhWAqhZAWQhZAUhtAAg");
	this.shape_7.setTransform(1014.625,-211.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AjDNXIAA6tIGHAAIAAatg");
	this.shape_8.setTransform(938.95,-210.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AjDNXIAA0rIjwAAIAAmCINnAAIAAGCIjwAAIAAUrg");
	this.shape_9.setTransform(868.375,-210.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("ABHNXIiIqMIgcAAIAAKMImIAAIAA6tIGkAAQC9ABBrA7QBqA6AqBrQAqBqgCCOIAAB7QAACFghBZQghBXg9AzIDCLxgAhdhwIATAAQAyABAWgXQAVgXgBg5IAAinQABg2gUgYQgVgZg0ABIgTAAg");
	this.shape_10.setTransform(741.275,-210.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AjqMxQhmgwg7hlQg5hkgBiZIAA0AIGQAAIAAUKQAAAmANASQANAQAdAAQAbAAANgRQAMgSAAglIAA0KIGRAAIAAUAQgBCIgyBlQgyBlhkA4QhkA4iWABQiHAAhngxg");
	this.shape_11.setTransform(632.6,-209.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AABNwQjigBhyh5Qhyh7AAjiIAAsuQACjxB3h1QB2h1DWABIADAAQDhABBwB7QByB5AADlIAAMuQgDDvh0B0Qh2B0jUAAgAgpntQgLATAAAmIAANsQAAAmALARQAOARAbAAIABAAQAbAAANgSQANgRAAglIAAtsQAAgngOgSQgPgRgZAAIgDAAQgbAAgLARg");
	this.shape_12.setTransform(527.05,-211.2004);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AjDNXIAAnlIlHzIIGVAAIB3I7IB0o7IGUAAIlGTIIAAHlg");
	this.shape_13.setTransform(420.9,-210.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AjDNXIAA0rIjwAAIAAmCINnAAIAAGCIjwAAIAAUrg");
	this.shape_14.setTransform(294.375,-210.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("Al5NXIAA6tILvAAIAAFsIloAAIAAEkIElAAIAAFtIklAAIAAFDIFsAAIAAFtg");
	this.shape_15.setTransform(209.625,-210.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("AlTL6Qhzh3ABjtIAAsqQABiXBChqQBBhrBxg5QByg3CSgBQBjAABoAcQBpAdBeAyIiNFRQgwgag4gNQg4gNg3AAQhOAAglApQgmApADBZIAALuQAAArAOATQAPATAegBQATAAALgFQAKgDAFgCIAApqIFyAAIAANpQhGApg+AcQg9AchDAOQhCAOhTAAQjuAAhyh4g");
	this.shape_16.setTransform(117.5996,-211.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjDNXIAA0rIjwAAIAAmCINnAAIAAGCIjwAAIAAUrg");
	this.shape_17.setTransform(1271.375,-446.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AjDNXIAA6tIGHAAIAAatg");
	this.shape_18.setTransform(1200.75,-446.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AB+NXIgflNIi9AAIgfFNImAAAIDh6tII5AAIDhatgAA5CdIgwnKIgJiOIgICOIgwHKIBxAAg");
	this.shape_19.setTransform(1119.575,-446.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABKNXIhKwDIhJQDIn5AAIh/6tIGfAAIATUhIBy0hIE8AAIBxUhIAT0hIGfAAIh+atg");
	this.shape_20.setTransform(989.475,-446.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AB+NXIgflNIi9AAIgfFNImAAAIDh6tII5AAIDhatgAA5CdIgwnKIgJiOIgICOIgwHKIBxAAg");
	this.shape_21.setTransform(859.375,-446.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AjnNZQhjgVhegmIBmliQBIAfA6ASQA7ATAxAAQBHgBAigaQAigbAAg3IAAgLQABgvgkg3Qglg3hThRIhJhIQhHhEgyhDQgzhEgbhTQgahSAAh0IAAgDQACjhBwh8QBwh7DLgCQBPAABeAUQBfAVBcAlIhlFIQg5gRgygLQgxgKgbAAQhDABgiAbQgiAcAAA1IAAAHQABArAmAtQAnAuA/BAIAnAoQATAUAXAVQBHBFAzBCQA1BDAbBWQAdBVAAB9IAAACQgBCdg2BuQg4BwhkA6QhkA6iGABQhvAAhkgXg");
	this.shape_22.setTransform(732.125,-446.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgFNXIhsw7IAAQ7ImJAAIAA6tIIEAAIBoQhIAAwhIGIAAIAAatg");
	this.shape_23.setTransform(630.65,-446.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AjDNXIAA6tIGHAAIAAatg");
	this.shape_24.setTransform(547.8,-446.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ABKNXIhKwDIhJQDIn5AAIh/6tIGfAAIATUhIBy0hIE8AAIBxUhIAT0hIGfAAIh+atg");
	this.shape_25.setTransform(447.025,-446.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AlTL6Qhzh3ABjtIAAsrQABiWBChqQBBhrBxg5QByg3CSgBQBjAABoAcQBpAdBeAyIiNFRQgwgZg4gOQg4gNg3AAQhOAAglApQgmAqADBYIAALtQAAAsAOATQAPATAegBQATAAALgFQAKgDAFgCIAApqIFyAAIAANpQhGApg+AcQg9AchDAOQhDAOhSAAQjtAAhzh4g");
	this.shape_26.setTransform(296.8996,-446.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AjDNXIAA6tIGHAAIAAatg");
	this.shape_27.setTransform(219.15,-446.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AnINXIAA6tIGtAAQCIAABoArQBqAqA7BdQA8BdABCUIAAAqQABCAgqBVQgrBThiAqQBnAjAxBVQAwBXAACSIAABoQAACUg4BlQg4BlhjAzQhlA0iJAAgAhBHlIAYAAQAyAAARgZQARgYgBgsIAAiqQABgwgQgYQgQgZg0AAIgYAAgAhBi+IAfAAQAxAAARgYQASgYgBgtIAAhnQABgwgRgYQgQgagzAAIgfAAg");
	this.shape_28.setTransform(142.2,-446.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-248.6,-577.2,1903.3999999999999,781.3000000000001), null);


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
	this.instance.setTransform(-1017,-496,3.1301,3.1301);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-1017,-496,870.2,898.4), null);


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
	this.shape.graphics.f("#FFE400").s().p("AhQCDQgmgPgXghQgXghgBgyQAChEAugmQAugmBHgBQBIABAuAmQAuAmACBEQgBAygXAhQgXAhglAPQgmAPgsAAQgrAAglgPg");
	this.shape.setTransform(1205.65,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AgEKBIhRssIAAMsIkmAAIAA0BIGCAAIBOMZIAAsZIEnAAIAAUBg");
	this.shape_1.setTransform(1141.65,-35.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AiSKBIAA0BIElAAIAAUBg");
	this.shape_2.setTransform(1079.475,-35.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AA4KBIg4sCIg3MCIl7AAIhf0BIE4AAIAOPYIBVvYIDtAAIBVPYIAPvYIE3AAIhfUBg");
	this.shape_3.setTransform(1003.875,-35.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AABKUQiqAAhVhbQhVhcAAiqIAApjQABi0BZhYQBahYCfABIACAAQCpABBUBcQBVBbABCrIAAJjQgCCzhYBXQhYBXigAAgAgflxQgJAOAAAcIAAKRQAAAdAKANQAKAMAUAAIABAAQAUAAAJgNQAKgNAAgcIAAqRQAAgdgKgNQgLgNgTAAIgCAAQgVAAgIANg");
	this.shape_4.setTransform(888.5,-35.9506);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AiSKBIAAvgIi0AAIAAkhIKNAAIAAEhIi0AAIAAPgg");
	this.shape_5.setTransform(816.15,-35.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AitKDQhLgQhGgcIBNkKQA2AXAsAOQAsAOAkAAQA1AAAZgVQAagTAAgqIAAgHQABglgbgoQgbgpg/g9Ig2g2Qg2g0gmgyQglgzgUg+QgVg+AAhWIAAgDQACioBUhdQBUhdCYgBQA8AABGAPQBHAQBFAbIhLD3QgrgNgmgIQglgIgUAAQgyABgZAUQgaAVAAAoIAAAFQABAgAdAiQAdAiAvAxIAdAeIAfAfQA1AzAnAyQAnAyAVBAQAWBAAABeIAAABQgBB1gpBUQgpBThLAsQhLArhkABQhUAAhLgRg");
	this.shape_6.setTransform(728.725,-35.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AkbKBIAA0BII0AAIAAERIkOAAIAADbIDcAAIAAESIjcAAIAADyIERAAIAAERg");
	this.shape_7.setTransform(665.275,-35.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AArKVQi2gBhdhhQhchjAAi+IAAojQAAi/BchiQBdhiC2AAIABAAQBMAAA9ANQA/ANA5AbIhqDsQgXgHgdgDQgbgEgWAAIgCAAQg6AAgdAkQgdAjAABGIAAHpQABBFAkAjQAjAlA8AAIABAAQAbAAAbgGQAagFAfgNIBpDsQhBAfhCARQhDAPhTAAg");
	this.shape_8.setTransform(601.35,-35.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AgDKBIhRssIAAMsIknAAIAA0BIGCAAIBPMZIAAsZIEmAAIAAUBg");
	this.shape_9.setTransform(521.35,-35.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("ABfKBIgYj6IiNAAIgYD6IkgAAICp0BIGqAAICqUBgAArB2IgklYIgHhqIgGBqIgkFYIBVAAg");
	this.shape_10.setTransform(437.275,-35.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AAoKBIAAn5IhPAAIAAH5IkmAAIAA0BIEmAAIAAHkIBPAAIAAnkIEmAAIAAUBg");
	this.shape_11.setTransform(357.7,-35.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AArKVQi2gBhdhhQhchjAAi+IAAojQAAi/BchiQBdhiC2AAIACAAQBLAAA9ANQA/ANA5AbIhqDsQgYgHgbgDQgdgEgVAAIgCAAQg6AAgeAkQgcAjAABGIAAHpQABBFAjAjQAlAlA7AAIABAAQAcAAAagGQAagFAfgNIBpDsQhBAfhDARQhDAPhRAAg");
	this.shape_12.setTransform(290.2,-35.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AkbKBIAA0BII0AAIAAERIkOAAIAADbIDcAAIAAESIjcAAIAADyIERAAIAAERg");
	this.shape_13.setTransform(1032.575,-244.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AA2KBIhnnoIgUAAIAAHoIknAAIAA0BIE7AAQCPABBPAsQBPAsAgBPQAgBQgCBrIAABcQAABjgYBDQgZBBguAnICRI0gAhFhTIANAAQAmAAAQgRQARgRgBgsIAAh8QABgpgPgSQgQgTgoABIgNAAg");
	this.shape_14.setTransform(958.25,-244.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AAAKUQipAAhVhbQhWhcABiqIAApjQABi0BZhYQBZhYCgABIACAAQCoABBWBcQBUBbAACrIAAJjQgBCzhYBXQhYBXifAAgAgflxQgIAOAAAcIAAKRQAAAdAJANQAKAMAUAAIAAAAQAVAAAKgNQAJgNAAgcIAAqRQAAgdgKgNQgLgNgTAAIgCAAQgUAAgJANg");
	this.shape_15.setTransform(878.3,-244.4506);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("ADSKBIAAvAIgMCTIhYMtIjdAAIhWstIgNiTIAAPAIkdAAIAA0BIG+AAIArJfIAGBhIAIhhIAtpfIG7AAIAAUBg");
	this.shape_16.setTransform(785.1,-244.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("AAoKBIAAn5IhPAAIAAH5IkmAAIAA0BIEmAAIAAHkIBPAAIAAnkIEmAAIAAUBg");
	this.shape_17.setTransform(672.15,-244.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE400").s().p("AiSKBIAAvgIi0AAIAAkhIKNAAIAAEhIi0AAIAAPgg");
	this.shape_18.setTransform(602.1,-244.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE400").s().p("AiSKBIAA0BIElAAIAAUBg");
	this.shape_19.setTransform(549.025,-244.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE400").s().p("AA4KBIg4sCIg3MCIl7AAIhf0BIE4AAIAOPYIBVvYIDtAAIBVPYIAPvYIE3AAIhfUBg");
	this.shape_20.setTransform(473.475,-244.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAoKBIAAn5IhPAAIAAH5IkmAAIAA0BIEmAAIAAHkIBPAAIAAnkIEmAAIAAUBg");
	this.shape_21.setTransform(1372.45,-452.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AArKVQi2gBhchiQhdhhAAi/IAAojQAAi/BdhiQBchiC2AAIABAAQBLAAA/ANQA+ANA5AaIhqDsQgYgGgcgEQgcgDgVAAIgCAAQg6AAgeAkQgcAjAABGIAAHpQABBFAkAkQAkAkA7AAIACAAQAbAAAagGQAagFAfgNIBpDrQhBAghDARQhDAPhSAAg");
	this.shape_22.setTransform(1305,-452.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AA2KBIhnnoIgUAAIAAHoIknAAIAA0BIE7AAQCOABBQAsQBPAsAgBPQAgBQgCBrIAABcQAABjgYBDQgZBBguAnICRI0gAhFhTIANAAQAmAAAQgRQARgRgBgsIAAh8QABgpgPgSQgQgTgoABIgNAAg");
	this.shape_23.setTransform(1226.45,-452.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ABfKBIgYj6IiNAAIgYD6IkgAAICp0BIGqAAICqUBgAArB2IgklYIgHhqIgGBqIgkFYIBVAAg");
	this.shape_24.setTransform(1143.875,-452.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ADSKBIAAvAIgNCTIhXMtIjcAAIhXstIgNiTIAAPAIkdAAIAA0BIG/AAIAqJfIAGBhIAIhhIAtpfIG7AAIAAUBg");
	this.shape_25.setTransform(1048.1,-452.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AkbKBIAA0BII0AAIAAERIkOAAIAADbIDcAAIAAESIjcAAIAADyIERAAIAAERg");
	this.shape_26.setTransform(943.325,-452.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AiSKBIAAvgIi0AAIAAkhIKNAAIAAEhIi0AAIAAPgg");
	this.shape_27.setTransform(876.8,-452.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ABfKBIgYj6IiNAAIgYD6IkgAAICp0BIGqAAICqUBgAArB2IgklYIgHhqIgGBqIgkFYIBVAAg");
	this.shape_28.setTransform(801.825,-452.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AA1KBIhlnoIgVAAIAAHoIkmAAIAA0BIE7AAQCNABBQAsQBQAsAfBPQAgBQgCBrIAABcQAABjgZBDQgYBBguAnICSI0gAhFhTIAOAAQAmAAAQgRQAPgRAAgsIAAh8QAAgpgOgSQgQgTgnABIgOAAg");
	this.shape_29.setTransform(719.15,-452.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AlWKBIAA0BIFDAAQBkAABPAfQBPAhAtBFQAtBGAABvIAAAgQABBfggBAQgfA+hKAgQBNAaAlBAQAkBBAABuIAABOQgBBvgpBLQgqBMhLAnQhLAmhmAAgAgwFrIASAAQAlAAANgSQANgSgBghIAAiAQABgjgNgTQgMgSgmAAIgSAAgAgwiOIAWAAQAlAAANgTQANgRAAgiIAAhOQAAgjgMgTQgMgSgnAAIgWAAg");
	this.shape_30.setTransform(639.725,-452.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AkbKBIAA0BII0AAIAAERIkOAAIAADbIDcAAIAAESIjcAAIAADyIERAAIAAERg");
	this.shape_31.setTransform(570.675,-452.675);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AkrKBIAA0BIEnAAIAAPgIEwAAIAAEhg");
	this.shape_32.setTransform(501.3,-452.675);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AkbKBIAA0BII0AAIAAERIkOAAIAADbIDcAAIAAESIjcAAIAADyIERAAIAAERg");
	this.shape_33.setTransform(436.625,-452.675);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AArKVQi2gBhchiQhdhhAAi/IAAojQAAi/BdhiQBchiC2AAIACAAQBKAAA/ANQA+ANA5AaIhqDsQgXgGgcgEQgdgDgVAAIgCAAQg6AAgeAkQgcAjAABGIAAHpQABBFAjAkQAlAkA7AAIACAAQAaAAAbgGQAagFAfgNIBpDrQhBAghDARQhCAPhSAAg");
	this.shape_34.setTransform(372.7,-452.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AlSKBIAA0BIE7AAQBnABBSAtQBSAtAvBVQAwBUAAB1IAAIHQAAB3gvBWQgwBWhRAvQhSAuhnABgAgsFrIALAAQAsABANgVQAOgVgCg0IAAopQAAgygRgPQgRgQgjACIgLAAg");
	this.shape_35.setTransform(276.225,-452.675);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgEKBIhRssIAAMsIkmAAIAA0BIGCAAIBOMZIAAsZIEnAAIAAUBg");
	this.shape_36.setTransform(194.95,-452.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("ABfKBIgYj6IiNAAIgYD6IkgAAICp0BIGqAAICqUBgAArB2IgklYIgHhqIgGBqIgkFYIBVAAg");
	this.shape_37.setTransform(110.825,-452.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-211.7,-551.9,1903.4,651.9), null);


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
	this.instance.setTransform(212,-466,8.858,8.858);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(212,-466,2161.4,416.3), null);


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
	this.instance.setTransform(-1787,50,5.3551,5.3551);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bt_logo, new cjs.Rectangle(-1787,50,589.0999999999999,337.4), null);


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
	this.instance.setTransform(183.4,-3.75,0.0157,0.0157,0,0,0,493.1,461.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAnIgFgBIgDgBIgBgRIAHACIAGABIAFAAIADgCIABgGIgBAAIgCAAIgJgBQgDgCgCgEQgBgEAAgGIAIgkIAQAAIgGAjIAAADIABAAIABAAIAAAAIAFgTIADgTIARAAIgLA3QgDALgGAGQgFAFgKAAIgFAAg");
	this.shape.setTransform(170.9,-1.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAnIAQhNIAQAAIgQBNg");
	this.shape_1.setTransform(167.65,-4.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAmIgJgBIAPhLIAQAAIgEATIACAAQAKAAAEAFQADAFgCAKIgEARQgCALgFAFQgGAFgJAAIgJgBgAgDAXIABAAIACgBIACgEIADgQIAAgEIgCgBIgBAAg");
	this.shape_2.setTransform(163.8521,-4.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPApIAMg3IAQAAIgMA3gAAAgYQAAgCAAgEQABgFACgCQADgDADABQAEgBACADQABACgBAFQgBAEgCACQgDACgEABQgDgBgCgCg");
	this.shape_3.setTransform(160.62,-4.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMAeIgJgCIAFgRIAGACIAGABIAEgBIACgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgBgDIgCAAIgCgBQgFgDgCgDQgCgEABgIQABgEADgEQACgDAFgDQADgDAGAAIAGABIAIACIgEAPIgGgBIgFgBIgDABIgCABIABADIACABIACABIACABIAFADQADACABADIgBAIQgBAFgDAFQgCADgFADQgFACgHABIgGAAg");
	this.shape_4.setTransform(157.125,-3.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAdIAHgmIAAgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAIgBAAIgBAAIgIApIgRAAIAMg1IALgDIAIgBQAJAAAEAEQAEAEgCAJIgJAog");
	this.shape_5.setTransform(152.8614,-3.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAZQgEgGACgLIAEgPQACgLAGgFQAGgGAIAAQAJAAAEAGQAEAFgCALIgEAPQgCALgGAGQgGAFgIAAQgJAAgEgFgAABgMIgBAEIgDARIAAAEQAAAAAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIACgBIAAgEIAEgRIAAgDQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgCABg");
	this.shape_6.setTransform(148.5397,-3.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAoIARhNIAGgBIAGAAIAGgBQAKAAADAGQAEAFgDALIgDAQQgCALgGAFQgFAFgJAAIgCAAIgFAUgAAAAEIAAAAIADgBIABgEIADgQIABgFIgDgBIAAAAg");
	this.shape_7.setTransform(143.7521,-2.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMAeIgJgCIAFgRIAGACIAGABIAEgBIACgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIgBgDIgCAAIgCgBQgFgDgCgDQgCgEABgIQABgEADgEQACgDAFgDQADgDAGAAIAGABIAIACIgEAPIgGgBIgFgBIgDABIgCABIABADIACABIACABIACABIAFADQADACABADIgBAIQgBAFgDAFQgCADgFADQgFACgHABIgGAAg");
	this.shape_8.setTransform(139.725,-3.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAYQgFgFADgMIADgOQACgLAGgFQAGgGAIAAQAKAAADAGQADAFgCALIgDAMIgTAAIgBADQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQACACADAAIAEAAIAFgBIgCAPIgHABIgFABQgKAAgFgGgAACgNIgCAEIAAAEIADAAIABgEIABgEIgCgBIgBABg");
	this.shape_9.setTransform(135.7667,-3.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAnIAAgeIgBAAIgGAeIgSAAIAQhNIASAAQAJAAAEADQAEACABAFQABAFgBAHIgBAFQgBAGgDAEQgCADgEADIACAigAAAgEIABAAIAEgBIABgEIACgHIAAgEQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_10.setTransform(131.02,-4.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAnIgFgBIgDgBIgBgRIAHACIAHABIAEAAIACgCIACgGIgCAAIgBAAIgJgBQgDgCgCgEQgBgEABgGIAHgkIAQAAIgGAjIAAADIACAAIAAAAIAAAAIAEgTIAFgTIAQAAIgMA3QgCALgFAGQgGAFgKAAIgFAAg");
	this.shape_11.setTransform(125.05,-1.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAZQgDgEACgJIAAAAQACgJAFgEQAFgEAIAAIACAAIABAAIABgCQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQgBgBgDAAIgGABIgGACIAHgQIADgCIAEgBIAEAAQAIAAAEADQAEABABAFQABAFgCAGIgHAkIgLACIgJABQgJgBgEgEgAgBAGIgCAEIgBABIABADIACABIABAAIABgKIgBAAIgBABg");
	this.shape_12.setTransform(120.4836,-3.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPAnIAPhNIARAAIgQBNg");
	this.shape_13.setTransform(117.3,-4.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAnIAQhNIASAAQAJAAAEADQAEACABAFQABAFgCAHIgBAGQgCAIgDAEQgEAFgFABQgGACgFAAIgBAAIgGAdgAAAgDIABAAIADgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBIABgIIAAgEQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_14.setTransform(113.5667,-4.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAmIAAhLIASAAQAGAAAFACQAFADACAFQADAFAAAHIAAAfQAAAGgDAFQgCAGgFACQgFADgFAAgAgCAWIABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAggIgBgEIgCgBIgBAAg");
	this.shape_15.setTransform(30.125,-4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgQAmIAAhLIAgAAIAAAQIgQAAIAAANIAOAAIAAAQIgOAAIAAAOIARAAIAAAQg");
	this.shape_16.setTransform(26,-4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAFAmIgBgOIgHAAIgCAOIgRAAIAKhLIAZAAIAKBLgAADAHIgDgTIAAgHIAAAHIgCATIAFAAg");
	this.shape_17.setTransform(21.5,-4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAmIgEgvIAAAvIgSAAIAAhLIAWAAIAFAuIAAguIASAAIAABLg");
	this.shape_18.setTransform(15.225,-4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIAmIAAhLIARAAIAABLg");
	this.shape_19.setTransform(11.525,-4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKAmIgIgCIAFgQIAFACIAFABQADAAABgCQAAAAABAAQAAAAAAgBQAAAAAAgBQABAAAAgBIAAgBIgCgEIgEgGIgEgEIgFgEQgCgDgBgFQgCgDAAgFIAAgBQAAgKAFgFQAGgGAIABIAHAAIAIADIgEAPIgFgBIgDgBIgFABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAAEIAFAFIACACIACABIAGAFIADAIIABAJQAAAHgDAFQgCAFgFADQgEACgFAAIgKgBg");
	this.shape_20.setTransform(7.1,-4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAmIAAhLIAgAAIAAAQIgQAAIAAANIAOAAIAAAQIgOAAIAAAOIARAAIAAAQg");
	this.shape_21.setTransform(3.3,-4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNAiQgFgGgBgLIAAghQABgLAFgGQAGgGAKABIAIAAIAHACIgGAPIgEgBIgCgBQgEAAgCADQAAACgBAEIAAAdQAAAEABACQADACADAAIADAAIAEgCIAHAPIgIACIgJABQgKAAgGgFg");
	this.shape_22.setTransform(-0.55,-4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgIAmIAAhLIARAAIAABLg");
	this.shape_23.setTransform(-3.975,-4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AADAmIgFgdIgBAAIAAAdIgSAAIAAhLIATAAQAIgBAEADQAFADACAFQACAEAAAHIAAAGQAAAGgCAEQgBACgDADIAJAhgAgDgEIABAAIACgBIABgEIAAgHIgBgDQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_24.setTransform(-7.575,-4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgTAmIAAhLIASAAQAIgBAFADQAEADACAFQACAEAAAHIAAAHQAAAHgDAEQgCAEgFACQgFACgGAAIgBAAIAAAcgAgCgDIABAAIACgBIABgEIAAgIIgBgDQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_25.setTransform(-12.375,-4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgHAxIAAhhIAPAAIAABhg");
	this.shape_26.setTransform(-19.825,-2.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAmIAAgVIgPg2IASAAIAFAaIAGgaIASAAIgPA2IAAAVg");
	this.shape_27.setTransform(-27.4,-4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRAmIAAhLIARAAIAAA6IASAAIAAARg");
	this.shape_28.setTransform(-32,-4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgTAmIAAhLIASAAQAIgBAFADQAEADACAFQACAEAAAHIAAAHQAAAHgDAEQgCAEgFACQgFACgGAAIgBAAIAAAcgAgCgDIABAAIACgBIABgEIAAgIIgBgDQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_29.setTransform(-36.425,-4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgTAmIAAhLIASAAQAIgBAFADQAEADACAFQACAEAAAHIAAAHQAAAHgDAEQgCAEgFACQgFACgGAAIgBAAIAAAcgAgCgDIABAAIACgBIABgEIAAgIIgBgDQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_30.setTransform(-41.025,-4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAGAmIgCgOIgHAAIgCAOIgRAAIAKhLIAYAAIALBLgAACAHIgCgTIAAgHIAAAHIgBATIADAAg");
	this.shape_31.setTransform(-45.85,-4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgJAmIgJgCIAEgQIAHACIAEABQADAAABgCQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgBIgBgEIgFgGIgDgEIgFgEQgCgDgBgFQgCgDAAgFIAAgBQAAgKAFgFQAFgGAJABIAHAAIAJADIgFAPIgEgBIgEgBIgEABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIABAEIAEAFIACACIACABIAFAFIAEAIIABAJQAAAHgCAFQgDAFgEADQgFACgFAAIgJgBg");
	this.shape_32.setTransform(-51.55,-4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEAQIgDgfIAPAAIgDAfg");
	this.shape_33.setTransform(-54.775,-6.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNAiQgGgGABgLIAAghQgBgLAGgGQAFgGAKABIAJAAIAHACIgHAPIgCgBIgEgBQgDAAgCADQAAACAAAEIAAAdQAAAEABACQACACADAAIAEAAIADgCIAHAPIgJACIgJABQgKAAgFgFg");
	this.shape_34.setTransform(-57.85,-4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgVAjQgFgFAAgLIAAgJQAAgFADgEQACgCAEgBIgDgGIgBgGIAAgFQABgHABgEQABgFAFgCQADgCAHAAQAFAAADACQADACABAEQACAFAAAHIAAAFIgBAFQAAADgDADQgCACgFABIAHAJIgBgEIAAgFIAPAAIAAAKIgBAHQgBAEgCADIAKAPIgSAAIgCgDIgEADIgGABQgMAAgGgFgAgJAMIAAADIAAACQAAAEABACQADACADAAIABAAIABAAIgJgPgAgFgWIAAACIAAAJIAAABIAAACIACgCIABgDIAAgHIAAgCIgBgBIgCABg");
	this.shape_35.setTransform(-63.1,-4.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgHAmIAAg6IgLAAIAAgRIAlAAIAAARIgKAAIAAA6g");
	this.shape_36.setTransform(-68.1,-4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgHAxIAAhhIAPAAIAABhg");
	this.shape_37.setTransform(-75.275,-2.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgJAnIgJgEIAGgOIAEACIAFABQABAAABAAQAAAAABAAQAAgBAAAAQAAAAABgBIABgFIAAgGIgBgDIgBgBIgEgBIgDAAIAAgMIACAAIAFgBIAAgCIABgDIAAgEIgBgFQAAAAAAgBQAAAAgBAAQgBAAAAgBQgBAAgBAAIgDABIgEACIgGgOIAJgDIAIgCQAHAAAGAGQAFAGABAKIAAABQAAAGgCAEQgDAEgFABQAGABACADQACAFABAHIAAADQgBALgFAFQgGAGgIAAIgJgBg");
	this.shape_38.setTransform(-82.6,-4.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgLAmIALg7IgRAAIAAgQIAjAAIAAAQIgNA7g");
	this.shape_39.setTransform(-86.7,-4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgSAnIAAgPIAKgNQAFgHADgFQADgHAAgFIAAgBIgBgEIgCgDIgEAAIgFABIgEABIgGgPIAIgDIALgBQAGAAAFADQAEADACAGQADAFAAAGIAAABQAAAGgCAFQgCAEgDAFIgGAJIgHAIIASAAIAAAQg");
	this.shape_40.setTransform(-90.725,-4.075);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgKAmIgIgCIAFgQIAFACIAFABQADAAABgCQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgBIgBgEIgEgGIgEgEIgFgEQgDgDgBgFQgBgDAAgFIAAgBQAAgKAFgFQAGgGAHABIAIAAIAIADIgEAPIgFgBIgDgBIgFABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAAEIAFAFIACACIACABIAGAFIADAIIABAJQAAAHgDAFQgCAFgFADQgEACgFAAIgKgBg");
	this.shape_41.setTransform(-96.15,-4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgQAmIAAhLIAhAAIAAAQIgRAAIAAANIANAAIAAAQIgNAAIAAAOIARAAIAAAQg");
	this.shape_42.setTransform(-99.95,-4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgIAmIAAhLIARAAIAABLg");
	this.shape_43.setTransform(-103.125,-4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AADAmIgFgdIgBAAIAAAdIgSAAIAAhLIATAAQAIgBAEADQAFADACAFQACAEAAAHIAAAGQAAAGgCAEQgBACgDADIAJAhgAgDgEIABAAIACgBIABgEIAAgHIgBgDQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_44.setTransform(-106.775,-4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgQAmIAAhLIAgAAIAAAQIgQAAIAAANIAOAAIAAAQIgOAAIAAAOIARAAIAAAQg");
	this.shape_45.setTransform(-111,-4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgKAmIgIgCIAFgQIAFACIAFABQADAAABgCQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgBIgBgEIgEgGIgEgEIgFgEQgDgDgBgFQgBgDAAgFIAAgBQAAgKAFgFQAGgGAHABIAIAAIAIADIgEAPIgFgBIgDgBIgFABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAAEIAFAFIACACIACABIAGAFIADAIIABAJQAAAHgDAFQgCAFgFADQgEACgFAAIgKgBg");
	this.shape_46.setTransform(-115.05,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.3,-11,308.4,15.2);


// stage content:
(lib.bigticketconversionhtml5320x100 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(123.8,95.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(283));

	// ticket
	this.instance_1 = new lib.ticket_mc();
	this.instance_1.setTransform(83.35,47.5,0.0831,0.0831);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(189).to({_off:false},0).wait(1).to({regX:-952.1,regY:-34.8,x:4.45,y:44.6,alpha:0.0032},0).wait(1).to({x:5.35,alpha:0.0145},0).wait(1).to({x:7.05,alpha:0.0371},0).wait(1).to({x:10.1,alpha:0.077},0).wait(1).to({x:15.45,y:44.65,alpha:0.1467},0).wait(1).to({x:24.7,y:44.7,alpha:0.2672},0).wait(1).to({x:36.1,y:44.75,alpha:0.4164},0).wait(1).to({x:47.5,y:44.8,alpha:0.5648},0).wait(1).to({x:57,y:44.85,alpha:0.6887},0).wait(1).to({x:64.45,y:44.9,alpha:0.7859},0).wait(1).to({x:70.3,alpha:0.8625},0).wait(1).to({x:74.9,y:44.95,alpha:0.9229},0).wait(1).to({x:78,alpha:0.9628},0).wait(1).to({x:79.75,alpha:0.9857},0).wait(1).to({x:80.6,alpha:0.9969},0).wait(1).to({regX:0,regY:0,x:159.95,y:47.9,alpha:1},0).wait(78));

	// logo
	this.instance_2 = new lib.bt_logo();
	this.instance_2.setTransform(159.95,28.8,0.0852,0.0852,0,0,0,0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(189).to({alpha:0},16).wait(78));

	// cta
	this.instance_3 = new lib.cta_mc();
	this.instance_3.setTransform(159.95,64.7,0.0598,0.0598,0,0,0,0,0.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(205).to({_off:false},0).wait(1).to({regX:1292.7,regY:-257.8,x:237.25,y:49.2,alpha:0.0032},0).wait(1).to({y:49.15,alpha:0.0145},0).wait(1).to({y:49.1,alpha:0.0371},0).wait(1).to({y:48.95,alpha:0.077},0).wait(1).to({y:48.7,alpha:0.1467},0).wait(1).to({y:48.25,alpha:0.2672},0).wait(1).to({y:47.7,alpha:0.4164},0).wait(1).to({y:47.15,alpha:0.5648},0).wait(1).to({y:46.7,alpha:0.6887},0).wait(1).to({y:46.3,alpha:0.7859},0).wait(1).to({y:46.05,alpha:0.8625},0).wait(1).to({y:45.8,alpha:0.9229},0).wait(1).to({y:45.65,alpha:0.9628},0).wait(1).to({y:45.6,alpha:0.9857},0).wait(1).to({y:45.55,alpha:0.9969},0).wait(1).to({regX:0,regY:0.8,x:159.95,y:61,alpha:1},0).wait(62));

	// main_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(159.7,69.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:705.7,regY:-211.2,x:233.15,y:47.25,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:47.2,alpha:0.0435},0).wait(1).to({y:47.1,alpha:0.0919},0).wait(1).to({y:46.9,alpha:0.1816},0).wait(1).to({y:46.6,alpha:0.3248},0).wait(1).to({y:46.25,alpha:0.4878},0).wait(1).to({y:45.95,alpha:0.6345},0).wait(1).to({y:45.7,alpha:0.7499},0).wait(1).to({y:45.5,alpha:0.8388},0).wait(1).to({y:45.35,alpha:0.9088},0).wait(1).to({y:45.25,alpha:0.9564},0).wait(1).to({y:45.2,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:67.25,alpha:1},0).wait(69).to({regX:705.7,regY:-211.2,x:233.15,y:45.2,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:45.25,alpha:0.9565},0).wait(1).to({y:45.35,alpha:0.9081},0).wait(1).to({y:45.55,alpha:0.8184},0).wait(1).to({y:45.85,alpha:0.6752},0).wait(1).to({y:46.2,alpha:0.5122},0).wait(1).to({y:46.5,alpha:0.3655},0).wait(1).to({y:46.75,alpha:0.2501},0).wait(1).to({y:46.95,alpha:0.1612},0).wait(1).to({y:47.1,alpha:0.0912},0).wait(1).to({y:47.2,alpha:0.0436},0).wait(1).to({y:47.25,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:69.35,alpha:0},0).to({_off:true},1).wait(169));

	// sub_caption
	this.instance_5 = new lib.daily_caption_mc();
	this.instance_5.setTransform(159.7,69.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:739.2,regY:-244.4,x:236.65,y:43.8,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:43.75,alpha:0.0435},0).wait(1).to({y:43.65,alpha:0.0919},0).wait(1).to({y:43.45,alpha:0.1816},0).wait(1).to({y:43.15,alpha:0.3248},0).wait(1).to({y:42.8,alpha:0.4878},0).wait(1).to({y:42.5,alpha:0.6345},0).wait(1).to({y:42.25,alpha:0.7499},0).wait(1).to({y:42.05,alpha:0.8388},0).wait(1).to({y:41.9,alpha:0.9088},0).wait(1).to({y:41.8,alpha:0.9564},0).wait(1).to({y:41.75,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:67.25,alpha:1},0).wait(62).to({regX:739.2,regY:-244.4,x:236.65,y:41.75,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:41.8,alpha:0.9565},0).wait(1).to({y:41.9,alpha:0.9081},0).wait(1).to({y:42.1,alpha:0.8184},0).wait(1).to({y:42.4,alpha:0.6752},0).wait(1).to({y:42.75,alpha:0.5122},0).wait(1).to({y:43.05,alpha:0.3655},0).wait(1).to({y:43.3,alpha:0.2501},0).wait(1).to({y:43.5,alpha:0.1612},0).wait(1).to({y:43.65,alpha:0.0912},0).wait(1).to({y:43.75,alpha:0.0436},0).wait(1).to({y:43.8,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:159.7,y:69.35,alpha:0},0).wait(94));

	// second_prize_mc
	this.instance_6 = new lib.second_prize_mc();
	this.instance_6.setTransform(113.05,50.85,0.3125,0.3125,0,0,0,0.1,0);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({regX:0,x:113,y:50.8242,alpha:0.0037},0).wait(1).to({y:50.7328,alpha:0.0167},0).wait(1).to({y:50.5458,alpha:0.0435},0).wait(1).to({y:50.207,alpha:0.0919},0).wait(1).to({y:49.5791,alpha:0.1816},0).wait(1).to({y:48.5764,alpha:0.3248},0).wait(1).to({y:47.4356,alpha:0.4878},0).wait(1).to({y:46.4088,alpha:0.6345},0).wait(1).to({y:45.6006,alpha:0.7499},0).wait(1).to({y:44.9784,alpha:0.8388},0).wait(1).to({y:44.4886,alpha:0.9088},0).wait(1).to({y:44.1552,alpha:0.9564},0).wait(1).to({y:43.966,alpha:0.9834},0).wait(1).to({y:43.8752,alpha:0.9964},0).wait(1).to({regX:0.1,x:113.05,y:43.85,alpha:1},0).wait(62).to({regX:0,x:113,y:43.9238,alpha:0.9963},0).wait(1).to({y:44.1848,alpha:0.9833},0).wait(1).to({y:44.7192,alpha:0.9565},0).wait(1).to({y:45.6872,alpha:0.9081},0).wait(1).to({y:47.4813,alpha:0.8184},0).wait(1).to({y:50.3459,alpha:0.6752},0).wait(1).to({y:53.6055,alpha:0.5122},0).wait(1).to({y:56.5391,alpha:0.3655},0).wait(1).to({y:58.8482,alpha:0.2501},0).wait(1).to({y:60.6259,alpha:0.1612},0).wait(1).to({y:62.0253,alpha:0.0912},0).wait(1).to({y:62.9779,alpha:0.0436},0).wait(1).to({y:63.5187,alpha:0.0166},0).wait(1).to({y:63.778,alpha:0.0036},0).wait(1).to({regX:0.1,x:113.05,y:63.85,alpha:0},0).to({_off:true},1).wait(93));

	// promo
	this.instance_7 = new lib.promo_mc();
	this.instance_7.setTransform(238.6,48.35,0.0867,0.0867,0,0,0,0.6,0.6);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-581.9,regY:-46.8,x:187.8,y:44.25,alpha:0.0037},0).wait(1).to({x:186.75,alpha:0.0167},0).wait(1).to({x:184.65,alpha:0.0435},0).wait(1).to({x:180.85,alpha:0.0919},0).wait(1).to({x:173.8,alpha:0.1816},0).wait(1).to({x:162.55,alpha:0.3248},0).wait(1).to({x:149.7,alpha:0.4878},0).wait(1).to({x:138.15,alpha:0.6345},0).wait(1).to({x:129.1,alpha:0.7499},0).wait(1).to({x:122.1,alpha:0.8388},0).wait(1).to({x:116.6,alpha:0.9088},0).wait(1).to({x:112.85,alpha:0.9564},0).wait(1).to({x:110.75,alpha:0.9834},0).wait(1).to({x:109.7,alpha:0.9964},0).wait(1).to({regX:0,regY:0.6,x:159.95,y:48.35,alpha:1},0).wait(83).to({alpha:0},15).to({_off:true},1).wait(169));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5050F").s().p("A5JH+IAAv7MAyTAAAIAAP7g");
	this.shape.setTransform(160.025,50.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(87.9,49.1,247.99999999999997,53.4);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 320,
	height: 100,
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