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
	this.shape.graphics.f("#FFFFFF").s().p("AhLJOQgigPgWgeQgVgegBgwQABg/ArgjQArgkBCgBQBDABArAkQArAjABA/QAAAwgWAeQgWAegiAPQgjAOgpAAQgoAAgjgOgAiHDNIAAsoIEQAAIAAMog");
	this.shape.setTransform(462.825,-74.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDJUIhLryIAALyIkSAAIAAynIFoAAIBILhIAArhIERAAIAASng");
	this.shape_1.setTransform(394.85,-75.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiIJUIAAynIERAAIAASng");
	this.shape_2.setTransform(337.075,-75.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAzJUIgzrMIgyLMIlhAAIhYynIEhAAIAOOTIBOuTIDdAAIBOOTIAOuTIEhAAIhZSng");
	this.shape_3.setTransform(266.95,-75.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEE400").s().p("AjmD6ICfnzIEuAAIjlHzg");
	this.shape_4.setTransform(167.575,-16.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEE400").s().p("ADDJUIAAt8IgMCIIhRL0IjNAAIhRr0IgLiIIAAN8IkJAAIAAynIGfAAIAnI0IAGBaIAHhaIAqo0IGcAAIAASng");
	this.shape_5.setTransform(98.4,-75.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEE400").s().p("ABYJUIgWjpIiDAAIgWDpIkLAAICdynIGLAAICdSngAAoBtIgik+IgGhjIgFBjIgiE+IBPAAg");
	this.shape_6.setTransform(9.425,-75.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEE400").s().p("AkHJUIAAynIIMAAIAAD+Ij7AAIAADLIDMAAIAAD/IjMAAIAADhID+AAIAAD+g");
	this.shape_7.setTransform(-56.925,-75.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEE400").s().p("AAyJUIhfnGIgTAAIAAHGIkSAAIAAynIElAAQCEABBKApQBKApAdBKQAdBKgBBjIAABWQAABcgXA+QgXA9gqAjICHINgAhAhNIANAAQAjAAAPgQQAPgQgBgoIAAh0QABgmgOgRQgPgRgkABIgNAAg");
	this.shape_8.setTransform(-125.975,-75.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEE400").s().p("Ak6JUIAAynIElAAQBfABBMArQBMApAsBPQAtBOAABtIAAHiQAABugsBRQgtBPhLAsQhMArhfABgAgpFSIAKAAQAqAAAMgTQAMgTgBgxIAAoCQAAgugQgOQgQgPghACIgKAAg");
	this.shape_9.setTransform(-200.125,-75.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEE400").s().p("AiIJUIAAuaIinAAIAAkNIJfAAIAAENIinAAIAAOag");
	this.shape_10.setTransform(398.525,-237.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEE400").s().p("AihJWQhFgQhBgaIBHj2QAyAVApANQApANAhAAQAyAAAXgTQAYgTAAgmIAAgIQABghgagmQgYgmg6g4IgzgzQgygwgjguQgjgvgTg6QgSg5AAhQIAAgDQABidBOhWQBOhWCNgBQA4AABBAOQBCAPBAAZIhGDlQgogMgjgHQgigHgTAAQguAAgYATQgXATAAAmIAAAEQAAAeAbAgQAbAfAsAtIAbAcIAdAdQAxAwAkAuQAlAuATA8QAUA7AABXIAAACQgBBtgmBNQgmBOhGAoQhGAphdAAQhNAAhGgPg");
	this.shape_11.setTransform(336.275,-237.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEE400").s().p("AiiI6QhIgigphGQgohGAAhrIAAt7IEXAAIAAOCQgBAbAKAMQAJAMATAAQATAAAJgNQAIgMAAgaIAAuCIEXAAIAAN7QABBfgkBGQgiBGhGAoQhGAnhpAAQhdAAhHghg");
	this.shape_12.setTransform(267.7,-236.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEE400").s().p("AiSJKQhFgThHglIBjjsQAjATAdAJQAeAJAbAAQApAAARgZQAQgZAAg2IAAs/IEXAAIAANtQgCCdhSBXQhTBWiOACQg4AAhEgTg");
	this.shape_13.setTransform(195.575,-236.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEE400").s().p("AiIJUIAAuaIinAAIAAkNIJfAAIAAENIinAAIAAOag");
	this.shape_14.setTransform(117.775,-237.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEE400").s().p("AhPEAIgyn/IEDAAIgxH/g");
	this.shape_15.setTransform(67.725,-271.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEE400").s().p("AgDJUIhLryIAALyIkSAAIAAynIFoAAIBILhIAArhIERAAIAASng");
	this.shape_16.setTransform(9.2,-237.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEE400").s().p("AABJlQieAAhPhVQhPhVAAieIAAo3QABioBThRQBThSCUABIACAAQCdABBOBVQBPBVAACfIAAI3QgBCmhSBRQhSBRiTAAgAgclXQgIANAAAaIAAJiQAAAbAIAMQAKAMASAAIABAAQATAAAJgNQAIgMAAgaIAApiQAAgbgJgMQgKgMgSAAIgBAAQgUAAgHAMg");
	this.shape_17.setTransform(-66.475,-237.8751);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEE400").s().p("Ak6JUIAAynIElAAQBfABBMArQBMApAsBPQAtBOAABtIAAHiQAABugsBRQgtBPhLAsQhMArhfABgAgpFSIAKAAQAqAAAMgTQAMgTgBgxIAAoCQAAgugQgOQgQgPghACIgKAAg");
	this.shape_18.setTransform(-138.525,-237.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-329.3,-329.2,913.9000000000001,379.2), null);


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
	this.instance.setTransform(-32,-24,0.1959,0.1959);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-32,-24,54.5,48.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhLJOQgigPgWgeQgVgegBgwQABg/ArgjQArgkBCgBQBDABArAkQArAjABA/QAAAwgWAeQgWAegiAPQgjAOgpAAQgoAAgjgOgAiHDNIAAsoIEQAAIAAMog");
	this.shape.setTransform(308.025,-74.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiIJUIAAuaIinAAIAAkNIJfAAIAAENIinAAIAAOag");
	this.shape_1.setTransform(248.575,-75.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiIJUIAAynIERAAIAASng");
	this.shape_2.setTransform(199.275,-75.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABYJUIgWjpIiDAAIgWDpIkLAAICdynIGLAAICdSngAAoBtIgik+IgGhjIgFBjIgiE+IBPAAg");
	this.shape_3.setTransform(142.775,-75.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA0JUIg0rMIgzLMIlgAAIhYynIEhAAIAOOTIBPuTIDbAAIBPOTIAOuTIEhAAIhYSng");
	this.shape_4.setTransform(52.15,-75.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABYJUIgWjpIiDAAIgWDpIkLAAICdynIGLAAICdSngAAoBtIgik+IgGhjIgFBjIgiE+IBPAAg");
	this.shape_5.setTransform(-38.525,-75.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEE400").s().p("AjmD6ICfnzIEuAAIjlHzg");
	this.shape_6.setTransform(384.375,-178.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEE400").s().p("AihJWQhFgQhBgaIBHj2QAyAVApANQApANAhAAQAyAAAXgTQAYgTAAgmIAAgIQABghgagmQgYgmg6g4IgzgzQgygwgjguQgjgvgTg6QgSg5AAhQIAAgDQABidBOhWQBOhWCNgBQA4AABBAOQBCAPBAAZIhGDlQgogMgjgHQgigHgTAAQguAAgYATQgXATAAAmIAAAEQAAAeAbAgQAbAfAsAtIAbAcIAdAdQAxAwAkAuQAlAuATA8QAUA7AABXIAAACQgBBtgmBNQgmBOhGAoQhGAphdAAQhNAAhGgPg");
	this.shape_7.setTransform(334.525,-237.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEE400").s().p("AgDJUIhLryIAALyIkSAAIAAynIFnAAIBILhIAArhIESAAIAASng");
	this.shape_8.setTransform(263.8,-237.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEE400").s().p("AABJlQieAAhPhVQhPhVAAieIAAo3QABioBThRQBThSCUABIACAAQCdABBOBVQBPBVAACfIAAI3QgBCmhSBRQhSBRiTAAgAgclXQgIANAAAaIAAJiQAAAbAIAMQAKAMASAAIABAAQATAAAJgNQAIgMAAgaIAApiQAAgbgJgMQgKgMgSAAIgBAAQgUAAgHAMg");
	this.shape_9.setTransform(188.125,-237.8751);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEE400").s().p("AiIJUIAAynIERAAIAASng");
	this.shape_10.setTransform(133.925,-237.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEE400").s().p("AkWJUIAAynIESAAIAAOaIEaAAIAAENg");
	this.shape_11.setTransform(82.15,-237.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEE400").s().p("AkVJUIAAynIERAAIAAOaIEaAAIAAENg");
	this.shape_12.setTransform(16.2,-237.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEE400").s().p("AiIJUIAAynIERAAIAASng");
	this.shape_13.setTransform(-34.125,-237.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEE400").s().p("ADDJUIAAt8IgMCIIhRL0IjMAAIhRr0IgMiIIAAN8IkJAAIAAynIGfAAIAnI0IAGBaIAHhaIAqo0IGcAAIAASng");
	this.shape_14.setTransform(-102.55,-237.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-593.6,-329.2,1446.7,379.2), null);


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
	this.shape.setTransform(44.975,9.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AgLAVQgGgCgDgGQgDgGAAgHQAAgGADgGQADgFAFgDQAGgDAGAAQAKAAAHAGQAHAHAAAKQAAAKgHAHQgHAHgKAAQgFAAgGgDgAgHgKQgDAEAAAGQAAAHADAEQADADAEAAQAFAAADgDQADgEAAgHQAAgGgDgEQgDgDgFAAQgEAAgDADg");
	this.shape_1.setTransform(38.725,9.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AAMAgIgYgpIAAApIgNAAIAAg/IANAAIAZAqIAAgqIANAAIAAA/g");
	this.shape_2.setTransform(32.675,8.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AgTAgIgBgKIAFABQAFAAACgDQACgCABgEIgSguIAOAAIAKAgIAKggIANAAIgQAsIgEAIIgCAGIgDAEQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABAAAAIgHABIgHgBg");
	this.shape_3.setTransform(24.5,9.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AgNAWQgEgCgBgEQgCgEAAgGIAAgdIAMAAIAAAWIABALIACADIAFABQACAAADgBQACgCABgDQABgCAAgJIAAgUIAMAAIAAAuIgLAAIAAgHQgDADgEADQgDACgFAAQgEAAgEgCg");
	this.shape_4.setTransform(19.275,9.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AgaAgIAAg/IAaAAIALAAIAGADQADACACAEQACADAAAEQAAAFgCADQgDAEgEACQAFABAEAEQADAEAAAGQAAAEgCAEQgCAEgDADQgEACgFABIgPAAgAgNAVIAMAAIAIAAIAFgDQABgCABgDQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQgCgBgIAAIgLAAgAgNgGIAJAAIAIAAQAEAAABgCQACgCAAgDQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBgCgDAAIgKAAIgIAAg");
	this.shape_5.setTransform(13.4,8.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjnhJIHPAAQAVAAAOAPQAPAPAAAUIAAAvQAAAUgPAPQgOAPgVAAInPAAQgVAAgPgPQgOgPAAgUIAAgvQAAgUAOgPQAPgPAVAAg");
	this.shape_6.setTransform(28.225,7.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAD72E").s().p("AjnBKQgVAAgPgPQgOgPAAgUIAAgvQAAgUAOgPQAPgPAVAAIHPAAQAVAAAOAPQAPAPAAAUIAAAvQAAAUgPAPQgOAPgVAAg");
	this.shape_7.setTransform(28.225,7.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.button_mc, new cjs.Rectangle(-1,-1,58.5,16.8), null);


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
	this.instance.setTransform(168.75,-8.3,0.0157,0.0157,0,0,0,493.1,461.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAjIgFgBIgDAAIgBgQIAHACIAFABIAEgBIADgCIACgEIgCAAIgBAAQgFAAgDgCQgEgBgBgEQgCgDACgGIAGggIAPAAIgGAgIAAACIACAAIAAAAIABAAIADgRIAEgRIAPAAIgLAxQgBALgGAEQgFAFgJAAIgEAAg");
	this.shape.setTransform(156.925,-7.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAjIAOhFIAPAAIgPBFg");
	this.shape_1.setTransform(153.95,-9.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAjIgIgCIAOhEIAPAAIgEASIACAAQAJAAADAFQADAEgCAJIgDAPQgCAKgFAFQgFAFgIAAIgJgBgAgCAVIABAAIABgBIACgEIADgPIAAgDIgCgBIgBAAg");
	this.shape_2.setTransform(150.54,-9.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAlIAKgyIAPAAIgLAygAABgWQgBgCAAgEQABgDACgCQACgDAEAAQADAAABADQACACgBADQgBAEgCACQgCACgEAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_3.setTransform(147.57,-9.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAaIgIgBIAEgPIAGACIAGAAIADAAIACgCIgBgCIgBgBIgCgBIgCgBQgFgCgBgDQgCgEABgGQABgEACgEQADgDAEgDQADgCAFAAIAGAAIAHACIgEAOIgFgBIgFgBIgDABIgBACIAAABIADACIABAAIABABIAGAEIADADIAAAIQgBAFgDADQgDAEgEACQgFADgGAAIgFgBg");
	this.shape_4.setTransform(144.475,-8.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBAbIAHgjIAAgCIgCgBIgBAAIgBABIgHAlIgPAAIAKgxIAKgDIAIAAQAIAAAEADQADAEgCAJIgIAkg");
	this.shape_5.setTransform(140.54,-8.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAWQgEgEACgLIADgNQACgKAGgFQAFgFAIAAQAIAAADAFQAEAFgCAKIgDANQgCALgGAEQgFAFgHAAQgJAAgDgFgAABgLIgBAEIgDAPIAAAEIACABIABgBIAAgEIAEgPIAAgEIgBgBIgCABg");
	this.shape_6.setTransform(136.625,-8.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAkIAPhGIAGgBIAFAAIAFAAQAJAAADAFQADAFgCAKIgDAOQgCAKgFAFQgFAEgIAAIgCAAIgEASgAAAAEIAAAAIACgBIACgEIADgOIAAgFIgCgBIgBAAg");
	this.shape_7.setTransform(132.315,-7.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAaIgIgBIAEgPIAGACIAGAAIADAAIACgCIgBgCIgBgBIgCgBIgCgBQgFgCgBgDQgCgEABgGQABgEACgEQADgDAEgDQADgCAFAAIAGAAIAHACIgEAOIgFgBIgFgBIgDABIgBACIAAABIADACIABAAIABABIAGAEIADADIAAAIQgBAFgDADQgDAEgEACQgFADgGAAIgFgBg");
	this.shape_8.setTransform(128.675,-8.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAWQgFgFACgLIADgMQACgKAGgFQAFgFAIAAQAIAAADAFQADAFgCAJIgCAMIgSAAIAAACQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQACABADABIAEgBIADAAIgBANIgHABIgEABQgJAAgEgFgAABgMIgBADIAAAFIADAAIABgFIAAgDIgBAAIgCAAg");
	this.shape_9.setTransform(125.0592,-8.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAjIAAgbIgCAAIgFAbIgQAAIAOhFIARAAQAHAAAEACQAEADABAEQABAEgBAGIgBAFQgBAGgDAEQgCACgDACIACAfgAAAgEIABAAIADAAIACgEIABgHIAAgDIgDgBIgBAAg");
	this.shape_10.setTransform(120.745,-9.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAjIgFgBIgDAAIgBgQIAHACIAFABIAEgBIADgCIACgEIgCAAIgBAAQgFAAgDgCQgEgBgBgEQgCgDACgGIAGggIAPAAIgGAgIAAACIACAAIAAAAIABAAIADgRIAEgRIAPAAIgLAxQgBALgGAEQgFAFgJAAIgEAAg");
	this.shape_11.setTransform(115.325,-7.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAXQgDgFABgHIABgBQABgHAFgDQAFgEAHAAIACAAIABAAIABgCQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIgEgBIgFABIgGACIAHgPIADgBIADgBIAEAAQAHAAADACQAEACABAEIgBAKIgHAgIgJACIgIABQgIAAgEgEgAgBAGIgCACIAAACIAAADIACABIABAAIABgJIgBAAIgBABg");
	this.shape_12.setTransform(111.2083,-8.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAjIAOhFIAPAAIgOBFg");
	this.shape_13.setTransform(108.3,-9.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAjIAOhFIAQAAQAIAAAEACQAEADABAEQABAEgCAGIgBAGQgBAIgEADQgDAEgFACQgFABgFAAIgBAAIgFAagAAAgDIABAAIADgBIABgDIACgIIAAgDIgDgBIgBAAg");
	this.shape_14.setTransform(104.9313,-9.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAhIAAgTIgMguIAPAAIAEAWIAFgWIAPAAIgMAuIAAATg");
	this.shape_15.setTransform(177.975,-23.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAhIAAhBIAOAAIAAAyIAQAAIAAAPg");
	this.shape_16.setTransform(173.95,-23.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAhIAAhBIARAAQAGAAAEACQAEACACAEQABAFAAAFIAAAGQAAAHgCADQgDAEgEABQgEACgEAAIgBAAIAAAYgAgBgDIABAAIABAAIABgEIAAgHQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBgBIgBAAg");
	this.shape_17.setTransform(170.15,-23.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQAhIAAhBIAPAAQAHAAAEACQAFACABAEQACAFAAAFIAAAGQAAAHgDADQgCAEgEABQgFACgFAAIgBAAIAAAYgAgCgDIABAAIACAAIABgEIAAgHQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgCgBIgBAAg");
	this.shape_18.setTransform(166.15,-23.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAFAhIgBgNIgHAAIgBANIgPAAIAJhBIAVAAIAJBBgAACAGIgBgRIgBgFIAAAFIgBARIADAAg");
	this.shape_19.setTransform(162,-23.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgIAhIgHgCIADgOIAGACIADABIAEgBQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgEIgEgFIgDgDIgFgEIgCgGIgBgIIAAAAQgBgJAFgFQAEgEAHAAIAHAAIAHADIgEAMIgEgBIgDAAIgEABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIACAEIADAEIACACIABABIAFAFIADAGIABAIQAAAGgCAEQgCAFgEACQgEACgEAAIgIgBg");
	this.shape_20.setTransform(157.05,-23.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEAOIgCgbIANAAIgDAbg");
	this.shape_21.setTransform(154.275,-25.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgLAdQgFgFAAgKIAAgbQAAgKAFgFQAFgFAIAAIAIAAIAGACIgGANIgCgBIgDAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAACAAADIAAAZQAAADABACQACACADAAIADAAIADgBIAFAMQgDACgEAAIgIABQgIAAgFgFg");
	this.shape_22.setTransform(151.575,-23.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRAeQgFgEgBgJIAAgIQAAgFADgDQACgCADAAIgCgGIAAgFIAAgFIAAgJQACgEAEgCQACgBAHAAQAEgBACACQADACABADQABAEABAGIAAAEIgBAFQgBADgCACQgCACgEABIAHAIIgBgEIAAgEIAMAAIAAAIIgBAHIgCAFIAJANIgQAAIgBgCIgFACIgEABQgLAAgEgEgAgIAKIAAACIAAACQAAAEABACQACABAEAAIABAAIAAAAIgIgNgAgEgTIgBACIAAAHIAAACIAAABIADgCIABgDIAAgFIAAgCIgCgBIgBABg");
	this.shape_23.setTransform(147.1,-23.28);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGAhIAAgyIgKAAIAAgPIAhAAIAAAPIgKAAIAAAyg");
	this.shape_24.setTransform(142.75,-23.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgGAqIAAhTIANAAIAABTg");
	this.shape_25.setTransform(136.525,-22.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIAgQgEgDgCgEQgCgEAAgGIAAgeQAAgFACgFQACgEAEgCQAEgCAEAAQAFAAAEACQAEACACAEQACAFAAAFIAAAeQAAAGgCAEQgCAEgEADQgEACgFAAQgEAAgEgCgAAAgTIgBACIAAAjIABABIAAABIAAAAQABAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAIAAgjIgBgBIgBgBIAAAAIAAAAg");
	this.shape_26.setTransform(130.125,-23.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKAhIAKgzIgPAAIAAgOIAfAAIAAAOIgMAzg");
	this.shape_27.setTransform(126.4,-23.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQAiIAAgOIAJgLIAHgKQACgGAAgEIAAgBIgBgEIgBgCIgDAAIgFAAIgDABIgFgMIAHgDIAJgBQAFAAAEADQAEADACAEQACAFAAAFIAAABQAAAFgBAEIgEAIIgGAIIgGAHIAPAAIAAAOg");
	this.shape_28.setTransform(122.825,-23.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgIAhIgIgCIAEgOIAFACIAEABIAEgBQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgEIgEgFIgDgDIgEgEIgEgGIgBgIIAAAAQABgJAEgFQAEgEAHAAIAHAAIAHADIgEAMIgEgBIgDAAIgEABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIABAEIADAEIACACIACABIAEAFIAEAGIABAIQAAAGgDAEQgCAFgEACQgDACgFAAIgIgBg");
	this.shape_29.setTransform(118.2,-23.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgOAhIAAhBIAcAAIAAAOIgOAAIAAALIAMAAIAAANIgMAAIAAANIAPAAIAAAOg");
	this.shape_30.setTransform(114.875,-23.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgGAhIAAhBIANAAIAABBg");
	this.shape_31.setTransform(112.15,-23.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AADAhIgFgZIgBAAIAAAZIgPAAIAAhBIAQAAQAHAAAEACQAEACABAEQACAFAAAFIAAAFIgBAJIgEAEIAIAdgAgDgDIABAAIACgBIABgDIAAgHIgBgDIgCgBIgBAAg");
	this.shape_32.setTransform(109,-23.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgOAhIAAhBIAcAAIAAAOIgOAAIAAALIAMAAIAAANIgMAAIAAANIAPAAIAAAOg");
	this.shape_33.setTransform(105.325,-23.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgIAhIgIgCIAFgOIAEACIAFABIACgBQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgCgEIgDgFIgDgDIgEgEIgDgGIgCgIIAAAAQAAgJAFgFQAEgEAHAAIAHAAIAHADIgEAMIgEgBIgDAAIgEABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAIABAEIAFAEIABACIABABIAFAFIAEAGIABAIQgBAGgCAEQgCAFgEACQgEACgEAAIgIgBg");
	this.shape_34.setTransform(101.85,-23.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(99.9,-28.5,80.5,27.4);


// stage content:
(lib.bigticketconversionhtml5300x50 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(113.8,43.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(283));

	// ticket
	this.instance_1 = new lib.ticket_mc();
	this.instance_1.setTransform(73.35,22.5,0.0831,0.0831);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(172).to({_off:false},0).wait(1).to({regX:-1090,regY:25.1,x:-17.05,y:24.6,alpha:0.0032},0).wait(1).to({x:-16.15,alpha:0.0145},0).wait(1).to({x:-14.45,alpha:0.0371},0).wait(1).to({x:-11.4,alpha:0.077},0).wait(1).to({x:-6.05,y:24.65,alpha:0.1467},0).wait(1).to({x:3.2,y:24.7,alpha:0.2672},0).wait(1).to({x:14.6,y:24.75,alpha:0.4164},0).wait(1).to({x:26,y:24.8,alpha:0.5648},0).wait(1).to({x:35.5,y:24.85,alpha:0.6887},0).wait(1).to({x:42.95,y:24.9,alpha:0.7859},0).wait(1).to({x:48.8,alpha:0.8625},0).wait(1).to({x:53.4,y:24.95,alpha:0.9229},0).wait(1).to({x:56.5,alpha:0.9628},0).wait(1).to({x:58.25,alpha:0.9857},0).wait(1).to({x:59.1,alpha:0.9969},0).wait(1).to({regX:0,regY:0,x:149.95,y:22.9,alpha:1},0).wait(95));

	// logo
	this.instance_2 = new lib.bt_logo();
	this.instance_2.setTransform(149.95,3.8,0.0852,0.0852,0,0,0,0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(172).to({alpha:0},16).wait(95));

	// Layer_1
	this.instance_3 = new lib.button_mc();
	this.instance_3.setTransform(162.75,33.15,1,1,0,0,0,28.2,7.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(188).to({_off:false},0).to({y:24.4,alpha:1},16).wait(79));

	// main_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(149.7,44.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:123.3,regY:-145.3,x:162.5,y:29.1,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:29.05,alpha:0.0435},0).wait(1).to({y:28.95,alpha:0.0919},0).wait(1).to({y:28.75,alpha:0.1816},0).wait(1).to({y:28.45,alpha:0.3248},0).wait(1).to({y:28.1,alpha:0.4878},0).wait(1).to({y:27.8,alpha:0.6345},0).wait(1).to({y:27.55,alpha:0.7499},0).wait(1).to({y:27.35,alpha:0.8388},0).wait(1).to({y:27.2,alpha:0.9088},0).wait(1).to({y:27.1,alpha:0.9564},0).wait(1).to({y:27.05,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:149.7,y:42.25,alpha:1},0).wait(61).to({regX:123.3,regY:-145.3,x:162.5,y:27.05,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:27.1,alpha:0.9565},0).wait(1).to({y:27.2,alpha:0.9081},0).wait(1).to({y:27.4,alpha:0.8184},0).wait(1).to({y:27.7,alpha:0.6752},0).wait(1).to({y:28.05,alpha:0.5122},0).wait(1).to({y:28.35,alpha:0.3655},0).wait(1).to({y:28.6,alpha:0.2501},0).wait(1).to({y:28.8,alpha:0.1612},0).wait(1).to({y:28.95,alpha:0.0912},0).wait(1).to({y:29.05,alpha:0.0436},0).wait(1).to({y:29.1,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:149.7,y:44.35,alpha:0},0).to({_off:true},1).wait(177));

	// sub_caption
	this.instance_5 = new lib.daily_caption_mc();
	this.instance_5.setTransform(149.7,44.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90).to({_off:false},0).wait(1).to({regX:129.4,regY:-156.7,x:163.15,y:27.95,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:27.9,alpha:0.0435},0).wait(1).to({y:27.8,alpha:0.0919},0).wait(1).to({y:27.6,alpha:0.1816},0).wait(1).to({y:27.3,alpha:0.3248},0).wait(1).to({y:26.95,alpha:0.4878},0).wait(1).to({y:26.65,alpha:0.6345},0).wait(1).to({y:26.4,alpha:0.7499},0).wait(1).to({y:26.2,alpha:0.8388},0).wait(1).to({y:26.05,alpha:0.9088},0).wait(1).to({y:25.95,alpha:0.9564},0).wait(1).to({y:25.9,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:149.7,y:42.25,alpha:1},0).wait(53).to({regX:129.4,regY:-156.7,x:163.15,y:25.9,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:25.95,alpha:0.9565},0).wait(1).to({y:26.05,alpha:0.9081},0).wait(1).to({y:26.25,alpha:0.8184},0).wait(1).to({y:26.55,alpha:0.6752},0).wait(1).to({y:26.9,alpha:0.5122},0).wait(1).to({y:27.2,alpha:0.3655},0).wait(1).to({y:27.45,alpha:0.2501},0).wait(1).to({y:27.65,alpha:0.1612},0).wait(1).to({y:27.8,alpha:0.0912},0).wait(1).to({y:27.9,alpha:0.0436},0).wait(1).to({y:27.95,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:149.7,y:44.35,alpha:0},0).wait(111));

	// second_prize
	this.instance_6 = new lib.second_prize_mc();
	this.instance_6.setTransform(92.95,32.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90).to({_off:false},0).wait(1).to({regX:-4.8,regY:0.2,x:88.15,y:32.35,alpha:0.0037},0).wait(1).to({y:32.25,alpha:0.0167},0).wait(1).to({y:32.05,alpha:0.0435},0).wait(1).to({y:31.75,alpha:0.0919},0).wait(1).to({y:31.1,alpha:0.1816},0).wait(1).to({x:88.2,y:30.1,alpha:0.3248},0).wait(1).to({x:88.25,y:28.95,alpha:0.4878},0).wait(1).to({x:88.3,y:27.95,alpha:0.6345},0).wait(1).to({y:27.15,alpha:0.7499},0).wait(1).to({x:88.35,y:26.5,alpha:0.8388},0).wait(1).to({y:26,alpha:0.9088},0).wait(1).to({y:25.7,alpha:0.9564},0).wait(1).to({y:25.5,alpha:0.9834},0).wait(1).to({y:25.4,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:93.2,y:25.2,alpha:1},0).wait(53).to({regX:-4.8,regY:0.2,x:88.3,y:25.4,alpha:0.9963},0).wait(1).to({x:88.05,alpha:0.9833},0).wait(1).to({x:87.5,alpha:0.9565},0).wait(1).to({x:86.55,alpha:0.9081},0).wait(1).to({x:84.75,alpha:0.8184},0).wait(1).to({x:81.9,alpha:0.6752},0).wait(1).to({x:78.6,alpha:0.5122},0).wait(1).to({x:75.7,alpha:0.3655},0).wait(1).to({x:73.4,alpha:0.2501},0).wait(1).to({x:71.6,alpha:0.1612},0).wait(1).to({x:70.2,alpha:0.0912},0).wait(1).to({x:69.25,alpha:0.0436},0).wait(1).to({x:68.7,alpha:0.0166},0).wait(1).to({x:68.45,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:73.2,y:25.2,alpha:0},0).to({_off:true},1).wait(110));

	// promo
	this.instance_7 = new lib.promo_mc();
	this.instance_7.setTransform(179.15,23.35,0.0867,0.0867,0,0,0,0.6,0.6);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-666.6,regY:20.2,x:121.15,y:25.05,alpha:0.0037},0).wait(1).to({x:120.8,alpha:0.0167},0).wait(1).to({x:120,alpha:0.0435},0).wait(1).to({x:118.6,alpha:0.0919},0).wait(1).to({x:115.95,alpha:0.1816},0).wait(1).to({x:111.8,alpha:0.3248},0).wait(1).to({x:107.05,alpha:0.4878},0).wait(1).to({x:102.75,alpha:0.6345},0).wait(1).to({x:99.4,alpha:0.7499},0).wait(1).to({x:96.8,alpha:0.8388},0).wait(1).to({x:94.75,alpha:0.9088},0).wait(1).to({x:93.35,alpha:0.9564},0).wait(1).to({x:92.55,alpha:0.9834},0).wait(1).to({x:92.2,alpha:0.9964},0).wait(1).to({regX:0,regY:0.6,x:149.95,y:23.35,alpha:1},0).wait(76).to({regX:-666.6,regY:20.2,x:92.15,y:25,alpha:0.9963},0).wait(1).to({y:24.9,alpha:0.9833},0).wait(1).to({y:24.7,alpha:0.9565},0).wait(1).to({y:24.3,alpha:0.9081},0).wait(1).to({y:23.6,alpha:0.8184},0).wait(1).to({y:22.5,alpha:0.6752},0).wait(1).to({y:21.2,alpha:0.5122},0).wait(1).to({y:20.05,alpha:0.3655},0).wait(1).to({y:19.15,alpha:0.2501},0).wait(1).to({y:18.45,alpha:0.1612},0).wait(1).to({y:17.9,alpha:0.0912},0).wait(1).to({y:17.5,alpha:0.0436},0).wait(1).to({y:17.3,alpha:0.0166},0).wait(1).to({y:17.2,alpha:0.0036},0).wait(1).to({regX:0,regY:0.6,x:149.95,y:15.5,alpha:0},0).to({_off:true},1).wait(177));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5050F").s().p("A35D6IAAnzMAvzAAAIAAHzg");
	this.shape.setTransform(150.025,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(74.9,17.9,228.20000000000002,38.7);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 300,
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