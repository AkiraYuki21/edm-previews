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
	this.instance.setTransform(-3244,-696,6.9347,6.9347);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-3244,-696,2676.8,1442.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AB0VzIjewoIguAAIAAQoIqAAAMAAAgrlIKuAAQE1ACCtBfQCtBgBFCtQBFCtgDDpIAADIQAADZg2CQQg2CQhjBUIE8TMgAiYi3IAeAAQBTABAjgmQAkglgCheIAAkPQAChYgigpQgigohWABIgeAAg");
	this.shape.setTransform(2912.975,-172.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADOVzIgzogIk1AAIgzIgIpyAAMAFvgrlIOgAAMAFwArlgABdEAIhPrsIgOjoIgNDoIhPLsIC5AAg");
	this.shape_1.setTransform(2733.275,-172.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ApoVzMAAAgrlITLAAIAAJSIpMAAIAAHcIHeAAIAAJVIneAAIAAIPIJSAAIAAJTg");
	this.shape_2.setTransform(2577.775,-172.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ak/VzIAAsXIoV/OIKUAAIDEOkIC8ukIKUAAIoUfOIAAMXg");
	this.shape_3.setTransform(2417.15,-172.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ApoVzMAAAgrlITLAAIAAJSIpMAAIAAHcIHeAAIAAJVIneAAIAAIPIJSAAIAAJTg");
	this.shape_4.setTransform(2218.275,-172.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABXVzIAAxNIitAAIAARNIqAAAMAAAgrlIKAAAIAAQdICtAAIAAwdIKAAAMAAAArlg");
	this.shape_5.setTransform(2063.225,-172.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ak/VzMAAAghvImIAAIAAp2IWOAAIAAJ2ImHAAMAAAAhvg");
	this.shape_6.setTransform(1910.7,-172.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ap4VzMAAAgrlITxAAIAAJSIpyAAIAAHcIIDAAIAAJVIoDAAIAARig");
	this.shape_7.setTransform(1726.225,-172.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AACWcQlygCi5jGQi7jIAAlxIAA0yQAEmJDBi+QDDi/FcACIAFAAQFuABC5DIQC5DGAAF1IAAUyQgDGFjAC+Qi/C+laAAgAhEslQgSAeAAA+IAAWWQAAA+AUAdQAWAbAsAAIACAAQAtAAAUgdQAVgcAAg9IAA2WQAAhAgWgcQgYgdgqAAIgEAAQgtAAgTAdg");
	this.shape_8.setTransform(1568.275,-173.126);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("ApoVzMAAAgrlITLAAIAAJSIpMAAIAAHcIHeAAIAAJVIneAAIAAIPIJSAAIAAJTg");
	this.shape_9.setTransform(1373.725,-172.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("ArVVzIAAowIMG5cIqtAAIAApZIVSAAIAAIvIsTZcIMPAAIAAJag");
	this.shape_10.setTransform(1222.25,-172.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("Ak/VzMAAAgrlIJ/AAMAAAArlg");
	this.shape_11.setTransform(1100.45,-172.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AB0VzIjewoIguAAIAAQoIqAAAMAAAgrlIKuAAQE1ACCtBfQCtBgBFCtQBFCtgDDpIAADIQAADZg2CQQg2CQhjBUIE8TMgAiYi3IAeAAQBTABAjgmQAkglgCheIAAkPQAChYgigpQgigohWABIgeAAg");
	this.shape_12.setTransform(968.575,-172.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AreVzMAAAgrlIKmAAQE2ACCtBfQCtBgBFCtQBFCtgDDrIAADpQgCEshlCkQhlCkiyBAQiyBCjngEIgmAAIAAQEgAheiTIAXAAQBSABAjgmQAlgmgChfIAAkvQAChagkgpQghgohVABIgXAAg");
	this.shape_13.setTransform(795.2063,-172.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("Ak/VzMAAAghvImIAAIAAp2IWOAAIAAJ2ImHAAMAAAAhvg");
	this.shape_14.setTransform(593.8,-172.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("Al5V3QijgjiZg+ICnpBQB1AxBgAeQBgAfBPAAQB0AAA4gsQA3gsAAhaIAAgRQAChNg7hZQg7haiJiEIh3h2Qh0hwhShuQhShvgsiGQgsiHAAi8IAAgHQAEluC3jJQC3jKFLgDQCCAACZAhQCaAiCXA8IikIYQhegchRgRQhRgRgrAAQhtAAg4AtQg4AuAABXIAAAKQACBHA/BKQA/BJBnBqQAhAkAfAeQAeAgAlAjQB0BxBUBsQBVBtAuCLQAvCKAADNIAAADQgCEAhZC1QhbC2ijBfQiiBejbACQi2AAijglg");
	this.shape_15.setTransform(448.025,-173.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("ApoVzMAAAgrlITLAAIAAJSIpMAAIAAHcIHeAAIAAJVIneAAIAAIPIJSAAIAAJTg");
	this.shape_16.setTransform(309.975,-172.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("AopTbQi8jDABmAIAA0tQACj1BsitQBpivC5hcQC7hbDtgCQCjAACqAvQCrAuCZBSIjmInQhPgqhbgWQhbgWhaAAQiAAAg9BEQg9BDAECQIAATIQAABIAXAeQAaAfAxgCQAeAAATgHQAQgFAHgFIAAvvIJdAAIAAWRQhyBChlAtQhlAuhtAXQhsAYiGAAQmFAAi6jFg");
	this.shape_17.setTransform(159.7744,-172.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE400").s().p("AopTbQi8jDABmAIAA0tQACj1BsitQBpivC5hcQC7hbDtgCQCjAACqAvQCrAuCZBSIjmInQhPgqhbgWQhbgWhaAAQiAAAg9BEQg9BDAECQIAATIQAABIAXAeQAaAfAxgCQAeAAATgHQAQgFAHgFIAAvvIJdAAIAAWRQhyBChlAtQhlAuhtAXQhsAYiGAAQmFAAi6jFg");
	this.shape_18.setTransform(-2.9256,-172.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE400").s().p("Ak/VzMAAAgrlIJ/AAMAAAArlg");
	this.shape_19.setTransform(-129.7,-172.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE400").s().p("ArqVzMAAAgrlIK+AAQDdAACrBFQCsBGBhCYQBiCWABDyIAABGQACDPhFCKQhFCIifBFQCmA6BRCLQBPCOAADuIAACqQgCDyhbCkQhbCliiBUQilBUjeAAgAhqMWIAnAAQBRAAAdgoQAcgngBhIIAAkVQABhOgbgoQgagohVAAIgnAAgAhqk2IAxAAQBRAAAdgpQAcgmgBhJIAAiqQABhNgbgoQgagphVAAIgxAAg");
	this.shape_20.setTransform(-255.325,-172.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFE400").s().p("ApoVzMAAAgrlITLAAIAAJSIpMAAIAAHcIHeAAIAAJVIneAAIAAIPIJSAAIAAJTg");
	this.shape_21.setTransform(-450.325,-172.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFE400").s().p("ABXVzIAAxNIitAAIAARNIqAAAMAAAgrlIKAAAIAAQdICtAAIAAwdIKAAAMAAAArlg");
	this.shape_22.setTransform(-605.325,-172.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFE400").s().p("Ak/VzMAAAghvImIAAIAAp2IWOAAIAAJ2ImHAAMAAAAhvg");
	this.shape_23.setTransform(-757.9,-172.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-1061.5,-386.5,4294.9,507.1), null);


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
	this.instance.setTransform(-207,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.second_prize_mc, new cjs.Rectangle(-207,-124,278,247), null);


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
	this.instance.setTransform(-2765,-536,3.8791,3.8791);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-2765,-536,1078.4,1113.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ABqT/IjMvPIgpAAIAAPPIpLAAMAAAgn9IJ0AAQEcACCfBXQCeBYBACfQA/CegDDWIAAC4QAADGgyCFQgxCDhbBNIEiRmgAiLioIAcAAQBLACAggkQAhghgBhXIAAj4QABhRgfglQgfglhOABIgcAAg");
	this.shape.setTransform(3433.975,-179.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AC9T/IgunzIkdAAIguHzIo+AAMAFRgn9INTAAMAFRAn9gABVDrIhIquIgNjUIgMDUIhJKuICqAAg");
	this.shape_1.setTransform(3269.2,-179.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ao1T/MAAAgn9IRlAAIAAIhIobAAIAAG0IG3AAIAAIjIm3AAIAAHkIIhAAIAAIhg");
	this.shape_2.setTransform(3126.725,-179.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkkT/IAArVIno8oIJdAAICzNXICstXIJdAAInocoIAALVg");
	this.shape_3.setTransform(2979.425,-179.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ao1T/MAAAgn9IRlAAIAAIhIobAAIAAG0IG3AAIAAIjIm3AAIAAHkIIhAAIAAIhg");
	this.shape_4.setTransform(2797.175,-179.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABQT/IAAvxIifAAIAAPxIpLAAMAAAgn9IJLAAIAAPGICfAAIAAvGIJLAAMAAAAn9g");
	this.shape_5.setTransform(2654.975,-179.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkkT/IAA+7IlnAAIAApCIUXAAIAAJCIlnAAIAAe7g");
	this.shape_6.setTransform(2515.15,-179.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ApDT/MAAAgn9ISIAAIAAIhIo/AAIAAG0IHZAAIAAIjInZAAIAAQFg");
	this.shape_7.setTransform(2346,-179.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AABUlQlTgCipi2Qiri3AAlTIAAzCQADloCxiuQCziwE+ACIAGAAQFPABCqC3QCpC2AAFWIAATCQgDFmivCuQiwCuk+AAgAg+riQgRAcAAA5IAAUfQAAA5ASAaQAUAYAoAAIACAAQAqAAASgaQATgaAAg3IAA0fQAAg7gUgaQgVgagoAAIgCAAQgqAAgRAag");
	this.shape_8.setTransform(2201.2,-179.7511);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("Ao1T/MAAAgn9IRlAAIAAIhIobAAIAAG0IG3AAIAAIjIm3AAIAAHkIIhAAIAAIhg");
	this.shape_9.setTransform(2022.875,-179.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AqYT/IAAoBILF3VIp0AAIAAonITgAAIAAIBIrRXVILOAAIAAIng");
	this.shape_10.setTransform(1884.075,-179.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AkkT/MAAAgn9IJJAAMAAAAn9g");
	this.shape_11.setTransform(1772.425,-179.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("ABqT/IjMvPIgpAAIAAPPIpLAAMAAAgn9IJ0AAQEcACCfBXQCeBYBACfQA/CegDDWIAAC4QAADGgyCFQgxCDhbBNIEiRmgAiLioIAcAAQBLACAggkQAhghgBhXIAAj4QABhRgfglQgfglhOABIgcAAg");
	this.shape_12.setTransform(1651.475,-179.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AqhT/MAAAgn9IJuAAQEcACCfBXQCeBYA/CfQBACegDDYIAADWQgCEShcCWQhdCXijA6QijA8jUgDIgjAAIAAOvgAhWiHIAVAAQBLABAggjQAigigBhYIAAkVQABhTggglQgfglhOABIgVAAg");
	this.shape_13.setTransform(1492.6818,-179.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AkkT/IAArVIno8oIJdAAICzNXICstXIJdAAInocoIAALVg");
	this.shape_14.setTransform(1293.575,-179.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("ApVT/MAAAgn9IJLAAIAAe7IJgAAIAAJCg");
	this.shape_15.setTransform(1139.75,-179.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("ABTT/IjnyWIAASWIpLAAMAAAgn9IJLAAIAASPIDkyPIJoAAIk8S3IFkVGg");
	this.shape_16.setTransform(990.7,-179.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("Ao1T/MAAAgn9IRlAAIAAIhIobAAIAAG0IG3AAIAAIjIm3AAIAAHkIIhAAIAAIhg");
	this.shape_17.setTransform(844.575,-179.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE400").s().p("Ao1T/MAAAgn9IRlAAIAAIhIobAAIAAG0IG3AAIAAIjIm3AAIAAHkIIhAAIAAIhg");
	this.shape_18.setTransform(718.725,-179.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE400").s().p("ABvT/Ihv4CIhuYCIr0AAMgC9gn9IJsAAIAeesICp+sIHZAAICqesIAd+sIJsAAMgC9An9g");
	this.shape_19.setTransform(540.775,-179.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE400").s().p("AkkT/IAA+7IlnAAIAApCIUXAAIAAJCIlmAAIAAe7g");
	this.shape_20.setTransform(321,-179.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFE400").s().p("AlZUDQiWghiMg5ICYoQQBsAsBYAcQBYAcBIAAQBqAAA0goQAzgoAAhTIAAgQQABhHg2hRQg2hSh9h5IhthsQhqhnhMhlQhLhmgoh7Qgoh7AAitIAAgFQADlQCni5QCoi4EwgEQB3ABCMAeQCOAfCKA3IiXHsQhWgahKgQQhKgQgoAAQhkAAgzAqQgzApAABQIAAAKQABBBA6BDQA6BEBeBhIA7A8QAcAeAhAgQBrBnBNBjQBOBkAqCAQArB+AAC8IAAADQgCDqhRCnQhTCmiWBYQiVBWjJACQimgBiVghg");
	this.shape_21.setTransform(187.325,-179.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFE400").s().p("Ao1T/MAAAgn9IRlAAIAAIhIobAAIAAG0IG3AAIAAIjIm3AAIAAHkIIhAAIAAIhg");
	this.shape_22.setTransform(60.775,-179.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFE400").s().p("An7R0QisizABlhIAAy+QACjgBiifQBhigCqhVQCqhTDagCQCWAACbAsQCdApCMBMIjTH5QhIgnhTgUQhTgUhTAAQh1AAg4A+Qg4A9ADCFIAARhQAABCAWAcQAXAcAtgCQAcAAARgGQAPgEAGgFIAAubIIrAAIAAUaQhpA8hdAqQhcAqhkAVQhjAWh7AAQlkAAiri0g");
	this.shape_23.setTransform(-76.9506,-179.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFE400").s().p("An7R0QisizABlhIAAy+QACjgBiifQBhigCqhVQCrhTDZgCQCWAACbAsQCdApCMBMIjTH5QhIgnhTgUQhTgUhTAAQh1AAg4A+Qg4A9ADCFIAARhQAABCAWAcQAWAcAugCQAcAAARgGQAPgEAGgFIAAubIIrAAIAAUaQhpA8hdAqQhcAqhkAVQhjAWh7AAQlkAAiri0g");
	this.shape_24.setTransform(-226.2006,-179.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE400").s().p("AkkT/MAAAgn9IJJAAMAAAAn9g");
	this.shape_25.setTransform(-342.425,-179.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFE400").s().p("AqrT/MAAAgn9IKDAAQDKAACdA/QCeBBBYCLQBaCKACDeIAAA/QABC/g/B+Qg/B9iTA/QCZA0BKCBQBICBABDbIAACbQgCDehUCXQhTCXiVBNQiXBNjLAAgAhhLUIAkAAQBKAAAaglQAagjgBhCIAAj+QABhHgZglQgYglhNAAIgkAAgAhhkdIAtAAQBKAAAaglQAagjgBhCIAAicQAChHgZglQgYglhOAAIgtAAg");
	this.shape_26.setTransform(-457.55,-179.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFE400").s().p("Ao1T/MAAAgn9IRlAAIAAIhIobAAIAAG0IG3AAIAAIjIm3AAIAAHkIIhAAIAAIhg");
	this.shape_27.setTransform(-636.275,-179.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFE400").s().p("ABQT/IAAvxIifAAIAAPxIpLAAMAAAgn9IJLAAIAAPGICfAAIAAvGIJLAAMAAAAn9g");
	this.shape_28.setTransform(-778.525,-179.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFE400").s().p("AkkT/IAA+7IlnAAIAApCIUXAAIAAJCIlmAAIAAe7g");
	this.shape_29.setTransform(-918.3,-179.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_sub_caption_mc, new cjs.Rectangle(-1322.8,-375.9,5176.7,465.9), null);


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
	this.instance.setTransform(337,-631,17.0176,17.0176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(337,-631,4152.3,799.9), null);


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
	this.instance.setTransform(-4595,-107,10.7442,10.7442);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bt_logo, new cjs.Rectangle(-4595,-107,1181.9,676.9), null);


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
	this.instance.setTransform(321.85,-8.1,0.0201,0.0201,0,0,0,494.4,459.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAyIgGgBIgEgBIgCgWIAKADIAIABIAFgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIADgHIgCAAIgDAAQgGAAgFgCQgFgCgCgGQgCgFABgIIAKguIAVAAIgIAtQgBABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIADABIAAAAIABAAIAFgZIAFgYIAWAAIgPBHQgDAPgIAHQgHAGgNAAIgHAAg");
	this.shape.setTransform(306.15,-6.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAyIAUhjIAVAAIgVBjg");
	this.shape_1.setTransform(301.9,-9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAyIgMgCIAUhiIAVAAIgFAZIADAAQANAAAFAHQAEAGgDAOIgFAVQgCAPgIAGQgHAHgNAAIgLgBgAgEAeIACAAIADgBIACgGIAEgVQABgEgBgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_2.setTransform(297.0266,-8.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTA0IAPhHIAVAAIgPBHgAABggQgBgDAAgFQABgGAEgCQADgDAFgBQAEABADADQABACgBAGQgBAFgDADQgEADgEAAQgFAAgCgDg");
	this.shape_3.setTransform(292.795,-9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAmIgMgDIAGgVIAJADIAIABIAFgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgCgCIgCgBIgCgBQgHgDgDgGQgDgGACgIQABgGAEgFQADgFAGgDQAFgEAIAAIAHABQAGAAAFADIgGAUIgHgCIgHgBIgEABQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAIADACIABABIADACQAEACADACQAEADABAEIAAAKQgCAHgEAFQgEAGgGADQgHADgJABIgHgBg");
	this.shape_4.setTransform(288.275,-7.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAmIAKgyIAAgDIgDgBIgBAAIgBAAIgLA2IgWAAIAPhGIAPgEIALgBQAMAAAEAGQAFAFgCAMIgLA0g");
	this.shape_5.setTransform(282.6786,-7.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAgQgFgHADgOIAFgVQADgOAHgHQAIgHALAAQAMAAAFAHQAFAHgDAOIgFAVQgDAOgHAHQgIAHgLAAQgMAAgFgHgAABgPIgBAEIgEAXQAAABgBAAQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAABgBIABgEIAEgXQAAAAABgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAABg");
	this.shape_6.setTransform(277.075,-7.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggA0IAVhlIAIgBIAJAAIAHgBQANAAAFAHQAEAHgDAOIgFAWQgCANgIAHQgHAHgNAAIgCAAIgFAagAgBAFIABAAIAEgBIACgFIAEgWQABgEgBgBQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_7.setTransform(270.8766,-6.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAmIgMgDIAGgVIAJADIAIABIAFgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAIgCgCIgCgBIgCgBQgHgDgDgGQgDgGACgIQABgGAEgFQADgFAGgDQAFgEAIAAIAHABQAGAAAFADIgGAUIgHgCIgHgBIgEABQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAIADACIABABIADACQAEACADACQAEADABAEIAAAKQgCAHgEAFQgEAGgGADQgHADgJABIgHgBg");
	this.shape_8.setTransform(265.625,-7.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAfQgFgHADgOIAEgUQACgOAJgHQAHgHAMAAQAMAAAEAHQAEAHgDAOIgEARIgZAAIgBADQAAAEACACQACACAEAAIAGgBIAFAAIgDAUIgJABIgGABQgNAAgHgIgAACgRIgBAEIgBAGIAFAAIABgGIABgEQgBgBAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAABg");
	this.shape_9.setTransform(260.4998,-7.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAyIAAgmIgCAAIgIAmIgXAAIAVhjIAYAAQALAAAGADQAFADACAHQABAGgCAIIgCAIQgCAHgDAGQgCAEgFADIACAsgAAAgFIABAAQABAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQACgCABgDIACgKQAAAAAAgBQABgBgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIgBAAg");
	this.shape_10.setTransform(254.2667,-9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUAyIgGgBIgEgBIgCgWIAKADIAIABIAFgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIACgHIgBAAIgCAAQgHAAgFgCQgFgCgCgGQgCgFABgIIAKguIAVAAIgIAtQgBABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIACABIABAAIABAAIAFgZIAFgYIAWAAIgPBHQgDAPgIAHQgHAGgNAAIgHAAg");
	this.shape_11.setTransform(246.5,-6.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAgQgEgFACgMIAAgBQADgKAGgFQAIgGALAAIABAAIADABIAAgEQABgEgCgBQgBgCgFAAIgHABIgJADIAKgWIAEgBIAFgBIAGgBQAKABAFACQAFADABAFQACAGgCAIIgKAvIgOADIgMACQgMgBgFgGgAgCAIIgDAEIAAACQAAABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAIACAAIACgOIgCAAIgCACg");
	this.shape_12.setTransform(240.5875,-7.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAyIAUhjIAWAAIgWBjg");
	this.shape_13.setTransform(236.4,-9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiAyIAVhjIAYAAQALAAAGADQAFADACAHQABAGgCAIIgCAJQgCALgFAFQgFAGgHACQgHACgHAAIgBAAIgIAlgAAAgEIABAAIAFgBIACgGIACgLQAAAAAAgBQABgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAQgBgBAAAAIgBAAg");
	this.shape_14.setTransform(231.5417,-9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAsIAAgZIgRg+IAVAAIAFAdIAGgdIAVAAIgRA+IAAAZg");
	this.shape_15.setTransform(-353.475,-5.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAsIAAhXIATAAIAABDIAUAAIAAAUg");
	this.shape_16.setTransform(-358.8,-5.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAsIAAhXIAVAAQAJAAAFADQAGADACAFQACAGAAAHIAAAIQAAAJgDAEQgDAGgGACQgGACgGAAIgBAAIAAAggAgCgEIABAAIACgBIABgEIAAgKIgBgEQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_17.setTransform(-363.875,-5.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWAsIAAhXIAVAAQAJAAAFADQAGADACAFQACAGAAAHIAAAIQAAAJgDAEQgDAGgGACQgGACgGAAIgBAAIAAAggAgCgEIABAAIACgBIABgEIAAgKIgBgEQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_18.setTransform(-369.175,-5.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAGAsIgBgRIgJAAIgBARIgUAAIALhXIAdAAIAMBXgAADAIIgCgXIgBgHIAAAHIgCAXIAFAAg");
	this.shape_19.setTransform(-374.75,-5.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLAsIgKgDIAFgSIAHACIAGABQADAAABgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAAAQAAgDgCgDIgFgHIgEgDIgGgHQgDgDgBgFQgBgEgBgGQAAgMAHgGQAFgHAJAAIAJABIALAEIgGARIgGgCIgDgBQgEAAgCACQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIAAAAQAAABABABQAAAAAAABQAAAAAAABQAAAAAAABIAGAGIACACIACACIAGAGIAFAIQABAFAAAGQAAAIgDAGQgDAFgFADQgFADgGAAIgLgBg");
	this.shape_20.setTransform(-381.35,-5.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFATIgEglIASAAIgDAlg");
	this.shape_21.setTransform(-385.05,-7.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPAnQgGgHAAgNIAAglQAAgNAGgHQAGgHAMAAIAKABIAIADIgHARIgEgCIgDAAIgBAAQgEAAgCADQgBACAAAFIAAAhQAAAFACACQACACAEAAIABAAIADAAIAEgBIAHAQIgJADIgKABQgMABgGgHg");
	this.shape_22.setTransform(-388.575,-5.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAoQgHgFAAgNIAAgKQAAgHADgDQADgEAFAAIgEgIIAAgGIAAgGQAAgIABgFQACgFAEgCQAFgDAIAAQAFAAAEADQAEACABAEQACAGAAAIIAAAFIgBAGQgBAEgDADQgCADgFABIAIALIgBgGIgBgFIARAAIAAALIgBAJQgBADgCAEIALARIgUAAIgCgDIgGADIgGABQgOABgGgGgAgKAOIAAACIAAAEQAAAEACACQACADAEAAIABAAIABgBIgKgQgAgGgaIAAADIAAAKIAAABIAAACIADgCQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAAgHIgBgDIgCgBIgCABg");
	this.shape_23.setTransform(-394.6017,-5.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAsIAAhDIgNAAIAAgUIAtAAIAAAUIgNAAIAABDg");
	this.shape_24.setTransform(-400.375,-5.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIA4IAAhvIARAAIAABvg");
	this.shape_25.setTransform(-408.6,-3.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgMAqQgFgCgDgHQgCgFAAgHIAAgpQAAgHACgGQADgFAFgDQAGgEAGAAQAHAAAFAEQAFADADAFQADAGAAAHIAAApQAAAHgDAFQgDAHgFACQgFADgHAAQgGAAgGgDgAgBgZIgBACIAAAvIABABIABABIAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgvIAAgBIgBgCIgBAAIgBABg");
	this.shape_26.setTransform(-417.15,-5.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgNAsIAOhFIgVAAIAAgSIApAAIAAASIgPBFg");
	this.shape_27.setTransform(-422.175,-5.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAtIAAgSIAMgPIAJgOQADgHAAgGIAAgBIgBgGQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAIgHABIgEABIgHgQIAJgEQAHgBAGAAQAHAAAFADQAFAFADAFQADAHAAAHIAAABQAAAGgDAGIgFALIgHAKIgHAJIATAAIAAATg");
	this.shape_28.setTransform(-426.85,-5.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgLAsIgKgDIAFgSIAHACIAGABQADAAABgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAAAQAAgDgCgDIgFgHIgEgDIgGgHQgDgDgBgFQgBgEgBgGQAAgMAHgGQAFgHAJAAIAJABIALAEIgGARIgGgCIgDgBQgEAAgCACQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIAAAAQAAABABABQAAAAAAABQAAAAAAABQAAAAAAABIAGAGIACACIACACIAGAGIAFAIQABAFAAAGQAAAIgDAGQgDAFgFADQgFADgGAAIgLgBg");
	this.shape_29.setTransform(-433.1,-5.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSAsIAAhXIAlAAIAAATIgTAAIAAAPIAQAAIAAASIgQAAIAAAQIATAAIAAATg");
	this.shape_30.setTransform(-437.45,-5.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAsIAAhXIATAAIAABXg");
	this.shape_31.setTransform(-441.1,-5.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AADAsIgGgiIgBAAIAAAiIgUAAIAAhXIAVAAQAJAAAGADQAGADACAFQACAGgBAHIAAAHQABAGgCAFQgCAEgDACIAKAngAgEgFIABAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAIABgEIAAgJIgBgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_32.setTransform(-445.3,-5.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgTAsIAAhXIAmAAIAAATIgTAAIAAAPIAQAAIAAASIgQAAIAAAQIATAAIAAATg");
	this.shape_33.setTransform(-450.2,-5.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgLAsIgKgDIAGgSIAGACIAFABQAEAAABgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAAAQAAgDgCgDIgFgHIgEgDIgGgHQgDgDgBgFQgCgEAAgGQABgMAFgGQAGgHAKAAIAJABIAKAEIgGARIgFgCIgFgBQgDAAgBACQgBAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIAAAAQAAABABABQAAAAAAABQAAAAAAABQAAAAABABIAFAGIACACIACACIAGAGIAFAIQABAFAAAGQAAAIgCAGQgDAFgGADQgFADgGAAIgLgBg");
	this.shape_34.setTransform(-454.85,-5.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-457.5,-17.3,789.2,21.8);


// stage content:
(lib.bigticketawarenesshtml5728x90 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(421,84,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(283));

	// logo
	this.instance_1 = new lib.bt_logo();
	this.instance_1.setTransform(363.95,25.9,0.0767,0.0767,0,0,0,0,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(188).to({alpha:0},16).wait(79));

	// cta
	this.instance_2 = new lib.cta_mc();
	this.instance_2.setTransform(363.95,58.25,0.0538,0.0538,0,0,0,0,1.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(204).to({_off:false},0).wait(1).to({regX:2413.1,regY:-231.1,x:493.85,y:45.65,alpha:0.0032},0).wait(1).to({alpha:0.0145},0).wait(1).to({y:45.55,alpha:0.0371},0).wait(1).to({y:45.4,alpha:0.077},0).wait(1).to({y:45.2,alpha:0.1467},0).wait(1).to({y:44.8,alpha:0.2672},0).wait(1).to({y:44.3,alpha:0.4164},0).wait(1).to({y:43.8,alpha:0.5648},0).wait(1).to({y:43.35,alpha:0.6887},0).wait(1).to({y:43.05,alpha:0.7859},0).wait(1).to({y:42.8,alpha:0.8625},0).wait(1).to({y:42.6,alpha:0.9229},0).wait(1).to({y:42.45,alpha:0.9628},0).wait(1).to({y:42.35,alpha:0.9857},0).wait(1).to({alpha:0.9969},0).wait(1).to({regX:0,regY:1,x:363.95,y:54.9,alpha:1},0).wait(63));

	// ticket
	this.instance_3 = new lib.ticket_mc();
	this.instance_3.setTransform(270,42.7,0.0748,0.0748,0,0,0,0,0.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(188).to({_off:false},0).wait(1).to({regX:-1905.6,regY:25.2,x:127.8,y:44.55,alpha:0.0032},0).wait(1).to({x:128.85,alpha:0.0145},0).wait(1).to({x:130.95,alpha:0.0371},0).wait(1).to({x:134.7,alpha:0.077},0).wait(1).to({x:141.25,y:44.6,alpha:0.1467},0).wait(1).to({x:152.55,y:44.65,alpha:0.2672},0).wait(1).to({x:166.6,y:44.7,alpha:0.4164},0).wait(1).to({x:180.55,y:44.75,alpha:0.5648},0).wait(1).to({x:192.2,y:44.8,alpha:0.6887},0).wait(1).to({x:201.3,y:44.85,alpha:0.7859},0).wait(1).to({x:208.5,alpha:0.8625},0).wait(1).to({x:214.2,y:44.9,alpha:0.9229},0).wait(1).to({x:217.95,alpha:0.9628},0).wait(1).to({x:220.1,alpha:0.9857},0).wait(1).to({x:221.15,y:44.95,alpha:0.9969},0).wait(1).to({regX:0,regY:0,x:363.95,y:43.1,alpha:1},0).wait(79));

	// main_caption
	this.instance_4 = new lib.sub_caption_mc();
	this.instance_4.setTransform(363.75,62.4,0.0937,0.0937,0,0,0,1.1,0.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:1081.6,regY:-173,x:465,y:46.1,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:46.05,alpha:0.0435},0).wait(1).to({y:45.95,alpha:0.0919},0).wait(1).to({y:45.8,alpha:0.1816},0).wait(1).to({y:45.5,alpha:0.3248},0).wait(1).to({y:45.2,alpha:0.4878},0).wait(1).to({y:44.9,alpha:0.6345},0).wait(1).to({y:44.7,alpha:0.7499},0).wait(1).to({y:44.55,alpha:0.8388},0).wait(1).to({y:44.4,alpha:0.9088},0).wait(1).to({y:44.3,alpha:0.9564},0).wait(1).to({y:44.25,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:1.1,regY:0.6,x:363.75,y:60.5,alpha:1},0).wait(69).to({regX:1081.6,regY:-173,x:465,y:44.25,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:44.3,alpha:0.9565},0).wait(1).to({y:44.4,alpha:0.9081},0).wait(1).to({y:44.55,alpha:0.8184},0).wait(1).to({y:44.85,alpha:0.6752},0).wait(1).to({y:45.15,alpha:0.5122},0).wait(1).to({y:45.45,alpha:0.3655},0).wait(1).to({y:45.65,alpha:0.2501},0).wait(1).to({y:45.8,alpha:0.1612},0).wait(1).to({y:45.95,alpha:0.0912},0).wait(1).to({y:46.05,alpha:0.0436},0).wait(1).to({y:46.1,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:1.1,regY:0.6,x:363.75,y:62.4,alpha:0},0).to({_off:true},1).wait(169));

	// sub_caption
	this.instance_5 = new lib.daily_sub_caption_mc();
	this.instance_5.setTransform(363.75,62.4,0.0937,0.0937,0,0,0,1.1,0.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.sub_caption_mc();
	this.instance_6.setTransform(363.75,62.4,0.0937,0.0937,0,0,0,1.1,0.6);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},98).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},60).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:1261.6,regY:-179.6,x:481.9,y:45.45,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:45.4,alpha:0.0435},0).wait(1).to({y:45.3,alpha:0.0919},0).wait(1).to({y:45.15,alpha:0.1816},0).wait(1).to({y:44.85,alpha:0.3248},0).wait(1).to({y:44.55,alpha:0.4878},0).wait(1).to({y:44.25,alpha:0.6345},0).wait(1).to({y:44.05,alpha:0.7499},0).wait(1).to({y:43.9,alpha:0.8388},0).wait(1).to({y:43.75,alpha:0.9088},0).wait(1).to({y:43.65,alpha:0.9564},0).wait(1).to({y:43.6,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:1.1,regY:0.6,x:363.75,y:60.5,alpha:1},0).wait(61).to({regX:1261.6,regY:-179.6,x:481.9,y:43.6,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:43.65,alpha:0.9565},0).wait(1).to({y:43.75,alpha:0.9081},0).wait(1).to({y:43.9,alpha:0.8184},0).wait(1).to({y:44.2,alpha:0.6752},0).wait(1).to({y:44.5,alpha:0.5122},0).wait(1).to({y:44.8,alpha:0.3655},0).wait(1).to({y:45,alpha:0.2501},0).wait(1).to({y:45.15,alpha:0.1612},0).wait(1).to({y:45.3,alpha:0.0912},0).wait(1).to({y:45.4,alpha:0.0436},0).wait(1).to({y:45.45,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).to({_off:true},1).wait(95));

	// second_prize_mc
	this.instance_7 = new lib.second_prize_mc();
	this.instance_7.setTransform(218.85,54.5,0.3658,0.3658);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(98).to({_off:false},0).wait(1).to({regX:-68,regY:-0.5,x:193.95,y:54.25,alpha:0.0037},0).wait(1).to({y:54.15,alpha:0.0167},0).wait(1).to({y:53.9,alpha:0.0435},0).wait(1).to({y:53.45,alpha:0.0919},0).wait(1).to({y:52.7,alpha:0.1816},0).wait(1).to({y:51.45,alpha:0.3248},0).wait(1).to({y:50,alpha:0.4878},0).wait(1).to({y:48.7,alpha:0.6345},0).wait(1).to({y:47.7,alpha:0.7499},0).wait(1).to({y:46.95,alpha:0.8388},0).wait(1).to({y:46.3,alpha:0.9088},0).wait(1).to({y:45.9,alpha:0.9564},0).wait(1).to({y:45.65,alpha:0.9834},0).wait(1).to({y:45.55,alpha:0.9964},0).wait(1).to({regX:0,regY:0,x:218.85,y:45.75,alpha:1},0).wait(61).to({regX:-68,regY:-0.5,x:193.85,y:45.55,alpha:0.9963},0).wait(1).to({x:193.6,alpha:0.9833},0).wait(1).to({x:193.05,alpha:0.9565},0).wait(1).to({x:192.1,alpha:0.9081},0).wait(1).to({x:190.3,alpha:0.8184},0).wait(1).to({x:187.45,alpha:0.6752},0).wait(1).to({x:184.15,alpha:0.5122},0).wait(1).to({x:181.25,alpha:0.3655},0).wait(1).to({x:178.95,alpha:0.2501},0).wait(1).to({x:177.15,alpha:0.1612},0).wait(1).to({x:175.75,alpha:0.0912},0).wait(1).to({x:174.8,alpha:0.0436},0).wait(1).to({x:174.25,alpha:0.0166},0).wait(1).to({x:174,alpha:0.0036},0).wait(1).to({regX:0,regY:0,x:198.85,y:45.75,alpha:0},0).to({_off:true},79).wait(16));

	// promo
	this.instance_8 = new lib.promo_mc();
	this.instance_8.setTransform(390.25,43.5,0.078,0.078,0,0,0,1.3,0.7);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:-2225.8,regY:20.7,x:216.35,y:45.05,alpha:0.0037},0).wait(1).to({x:216,alpha:0.0167},0).wait(1).to({x:215.3,alpha:0.0435},0).wait(1).to({x:214,alpha:0.0919},0).wait(1).to({x:211.65,alpha:0.1816},0).wait(1).to({x:207.9,alpha:0.3248},0).wait(1).to({x:203.6,alpha:0.4878},0).wait(1).to({x:199.75,alpha:0.6345},0).wait(1).to({x:196.7,alpha:0.7499},0).wait(1).to({x:194.35,alpha:0.8388},0).wait(1).to({x:192.5,alpha:0.9088},0).wait(1).to({x:191.25,alpha:0.9564},0).wait(1).to({x:190.55,alpha:0.9834},0).wait(1).to({x:190.2,alpha:0.9964},0).wait(1).to({regX:0,regY:0.7,x:363.95,y:43.5,alpha:1},0).wait(83).to({alpha:0},15).to({_off:true},1).wait(169));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5050F").s().p("Eg5JAHLIAAuVMByTAAAIAAOVg");
	this.shape.setTransform(364.075,45.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(283));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(362.3,35.6,367.59999999999997,63.9);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 728,
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