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
	this.shape.graphics.f("#FFE400").s().p("AjrTFQhfhKAAiRQAAiBBfhQQBehQCNAAQCOAABfBQQBeBQAACBQAACRheBKQhfBLiOABQiNgBhehLgAkkG1IAA7EIJKAAIAAbEg");
	this.shape.setTransform(3150.475,-143.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("ABpT/IjLvPIgqAAIAAPPIpKAAMAAAgn9IJ0AAQGVAAChC2QCeC2AAFaIAAC3QAAF2i+CkIEkRmgAiMioIAdAAQBMAAAegjQAggiAAhVIAAj2QAAhVgggjQgegihMAAIgdAAg");
	this.shape_1.setTransform(3007.55,-145.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AC9T/IgvnzIkcAAIguHzIo+AAMAFSgn9INSAAMAFRAn9gAgMnDIhJKuICqAAIhIquIgMjUg");
	this.shape_2.setTransform(2842.7,-145.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("Ao1T/MAAAgn9IRlAAIAAIhIocAAIAAG0IG3AAIAAIjIm3AAIAAHkIIjAAIAAIhg");
	this.shape_3.setTransform(2700.3,-145.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AkkT/IAArVInp8oIJfAAICxNXICutXIJdAAInocoIAALVg");
	this.shape_4.setTransform(2552.85,-145.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("Ao2T/MAAAgn9IRmAAIAAIhIocAAIAAG0IG3AAIAAIjIm3AAIAAHkIIiAAIAAIhg");
	this.shape_5.setTransform(2370.75,-145.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("ABQT/IAAvxIifAAIAAPxIpLAAMAAAgn9IJLAAIAAPGICfAAIAAvGIJLAAMAAAAn9g");
	this.shape_6.setTransform(2228.475,-145.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AkkT/IAA+7IloAAIAApCIUZAAIAAJCIlnAAIAAe7g");
	this.shape_7.setTransform(2088.575,-145.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("ApDT/MAAAgn9ISIAAIAAIhIo/AAIAAG0IHbAAIAAIjInbAAIAAQFg");
	this.shape_8.setTransform(1919.5,-145.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AACUlQlQAAisi2Qiti3AAlVIAAzBQAAlgCxizQCxizFFAAIAFAAQFPAACqC4QCqC3AAFXIAATBQAAFhiwCxQiuCwlCAAgAhOqNIAAUfQAABrBOAAIACAAQBPAAAAhrIAA0fQAAhuhRAAIgDAAQhLAAAABug");
	this.shape_9.setTransform(1774.575,-146.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("ABQT/IAAvxIifAAIAAPxIpLAAMAAAgn9IJLAAIAAPGICfAAIAAvGIJLAAMAAAAn9g");
	this.shape_10.setTransform(1579.975,-145.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("Ap7SrICYoPQD6BhBqAAQDPAAAAigIAAgRQAAhIgzhPQgzhOh+h+IhvhsQi0iyhPiaQhOiYAAjxIAAgGQAAlOCqi8QCqi8EuAAQD3AAEkB2IiXHsQi6g5hYAAQjJAAAACjIAAAKQAAAXAIAVQAIAWALAUQAKASAWAcIAoAuIA2A5IA5A+QBPBVApAmQC5C5BSCWQBQCVAAEDIAAADQAAFai2DFQi1DGktAAQkwAAkvh6g");
	this.shape_11.setTransform(1440.225,-146.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AC9T/IgunzIkcAAIguHzIo/AAMAFRgn9INTAAMAFRAn9gAgMnDIhJKuICqAAIhIquIgMjUg");
	this.shape_12.setTransform(1290.9,-145.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("ABYUnQlrAAi6jEQi6jDAAl+IAAxDQAAl9C6jEQC6jEFrAAIADAAQEVAADoBpIjSHYQhbgbhvAAIgDAAQjoAAAAEYIAAPRQAACEBIBLQBIBJB4AAIADAAQBnAAB1gvIDQHWQj/B/kuAAg");
	this.shape_13.setTransform(1146.625,-146.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AC8T/IgtnzIkdAAIguHzIo+AAMAFSgn9INSAAMAFRAn9gAgMnDIhIKuICqAAIhJquIgMjUg");
	this.shape_14.setTransform(948.75,-145.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AqnJgIAAy+QAAlJDVjAQDTjAFNAAQE4AAEiCiIjTH5QiUhQiuAAQjkAAADD/IAARiQAAB4BagBQApAAAZgPIAAuaIIqAAIAAUbQivBkiDArQiDAriuAAQq8ABAArJg");
	this.shape_15.setTransform(794.275,-146);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("Ao1T/MAAAgn9IRmAAIAAIhIodAAIAAG0IG3AAIAAIjIm3AAIAAHkIIjAAIAAIhg");
	this.shape_16.setTransform(657.1,-145.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("AGiT/IAA98IgaEkIitZYIm5AAIit5YIgZkkIAAd8Io4AAMAAAgn9IN6AAIBUS8IANDBIAQjBIBay8IN0AAMAAAAn9g");
	this.shape_17.setTransform(482.775,-145.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AkkT/IAA+7IloAAIAApCIUZAAIAAJCIlnAAIAAe7g");
	this.shape_18.setTransform(266.575,-145.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ap7SrICYoPQD6BhBqAAQDPAAAAigIAAgRQAAhIgzhPQgzhOh+h+IhvhsQi0iyhPiaQhOiYAAjxIAAgGQAAlOCqi8QCqi8EuAAQD3AAEkB2IiXHsQi6g5hYAAQjJAAAACjIAAAKQAAAXAIAVQAIAWALAUQAKASAWAcIAoAuIA2A5IA5A+QBPBVApAmQC5C5BSCWQBQCVAAEDIAAADQAAFai2DFQi1DGktAAQkwAAkvh6g");
	this.shape_19.setTransform(132.975,-146.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ao1T/MAAAgn9IRlAAIAAIhIocAAIAAG0IG3AAIAAIjIm3AAIAAHkIIjAAIAAIhg");
	this.shape_20.setTransform(6.5,-145.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AqnJgIAAy+QAAlJDVjAQDTjAFNAAQE4AAEiCiIjTH5QiUhQiuAAQjkAAADD/IAARiQAAB4BagBQApAAAZgPIAAuaIIqAAIAAUbQivBkiDArQiDAriuAAQq8ABAArJg");
	this.shape_21.setTransform(-131.425,-146);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AqnJgIAAy+QAAlJDVjAQDTjAFNAAQE4AAEiCiIjTH5QiUhQiuAAQjkAAADD/IAARiQAAB4BagBQApAAAZgPIAAuaIIqAAIAAUbQivBkiDArQiDAriuAAQq8ABAArJg");
	this.shape_22.setTransform(-280.625,-146);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AkkT/MAAAgn9IJJAAMAAAAn9g");
	this.shape_23.setTransform(-396.825,-145.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AqsT/MAAAgn9IKEAAQFBAAC7CaQC8CcAAE+IAABAQABDGhAB4Qg/B6iRA/QErBrAAGmIAACbQAAFIi0CuQi2Cwk1AAgAhhLUIAjAAQBIAAAaghQAcghAAhKIAAj7QAAhNgbgiQgYgjhLAAIgjAAgAhhkdIAsAAQBIAAAcggQAagiAAhIIAAiaQAAhMgYgjQgbgihLAAIgsAAg");
	this.shape_24.setTransform(-511.95,-145.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ao2T/MAAAgn9IRmAAIAAIhIocAAIAAG0IG3AAIAAIjIm3AAIAAHkIIiAAIAAIhg");
	this.shape_25.setTransform(-690.6,-145.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ABQT/IAAvxIifAAIAAPxIpLAAMAAAgn9IJLAAIAAPGICfAAIAAvGIJLAAMAAAAn9g");
	this.shape_26.setTransform(-832.875,-145.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AkkT/IAA+7IloAAIAApCIUZAAIAAJCIlnAAIAAe7g");
	this.shape_27.setTransform(-972.775,-145.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-1061.5,-342.3,4294.9,465.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AkrYSQh5heAAi4QAAilB5hmQB4hmCzAAQC0AAB6BmQB3BmAAClQAAC4h3BeQh6Bgi0AAQizAAh4hggAl0IsMAAAgidILqAAMAAAAidg");
	this.shape.setTransform(2751.425,-205.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABmZbIAA0DIjLAAIAAUDIrrAAMAAAgy1ILrAAIAATMIDLAAIAAzMILrAAMAAAAy1g");
	this.shape_1.setTransform(2577.15,-208);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Al0ZbMAAAgnXInKAAIAAreIZ9AAIAALeInJAAMAAAAnXg");
	this.shape_2.setTransform(2399.15,-208);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AADaMQmsAAjcjnQjbjqAAmxIAA4NQAAnBDhjjQDijkGdAAIAHAAQGpAADaDpQDXDqAAG1IAAYNQAAHBjfDiQjeDemZABgAhktAIAAaFQAACJBkAAIADAAQBkAAAAiJIAA6FQAAiLhnAAIgEAAQhgAAAACLg");
	this.shape_3.setTransform(2215.475,-208.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AtmZbMAAAgy1IMzAAQGZAADvDDQDvDHAAGVIAABQQAAD9hRCZQhQCbi4BQQF8CJAAIYIAADGQAAGhjlDeQjoDfmJAAgAh8OaIAuAAQBbAAAhgrQAjgqAAheIAAk/QAAhighgrQgfgthfAAIguAAgAh8lrIA5AAQBbAAAkgpQAhgrAAhcIAAjEQAAhggfgtQgigrhfAAIg5AAg");
	this.shape_4.setTransform(2019.825,-208);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACGZbIkEzYIg0AAIAATYIrrAAMAAAgy1IMfAAQIFAADMDmQDJDoABG5IAADpQgBHcjxDRIFzWYgAiyjVIAlAAQBgAAAngtQAogsAAhrIAAk6QAAhsgogtQgngrhgAAIglAAg");
	this.shape_5.setTransform(1764,-208);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AADaMQmsAAjcjnQjbjqAAmxIAA4NQAAnBDhjjQDijkGdAAIAHAAQGpAADaDpQDXDqAAG1IAAYNQAAHBjfDiQjeDemZABgAhktAIAAaFQAACJBkAAIADAAQBkAAAAiJIAA6FQAAiLhnAAIgEAAQhgAAAACLg");
	this.shape_6.setTransform(1560.825,-208.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AtcZbMAAAgy1IMfAAQGRAAEFEEQEEEFAAG2IAAUiQAAG7kEENQkFENmNgBgAhyOaIAeAAQBvAAAfgxQAhgxAAiLIAA19QAAh8gpgmQgnglhfAAIgeAAg");
	this.shape_7.setTransform(1312.025,-208);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("Ar4ZbMAAAgy1ILqAAMAAAAnXIMHAAIAALeg");
	this.shape_8.setTransform(1121.85,-208);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AADaMQmsAAjcjnQjbjqAAmxIAA4NQAAnBDhjjQDijkGdAAIAHAAQGpAADaDpQDXDqAAG1IAAYNQAAHBjfDiQjeDemZABgAhktAIAAaFQAACJBkAAIADAAQBkAAAAiJIAA6FQAAiLhnAAIgEAAQhgAAAACLg");
	this.shape_9.setTransform(935.125,-208.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AtgMFIAA4JQAAmhEOj2QENj1GoAAQGOABFwDNIkMKDQi8hmjeAAQkjAAAEFFIAAWUQAACZBzAAQA1AAAfgTIAAyYILBAAIAAaBQjfB/imA4QinA3jeAAQt6AAAAuMg");
	this.shape_10.setTransform(745.325,-208.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AlzZbIAAuaMgJwgkbIMFAAIDiQ/IDdw/IMDAAMgJuAkbIAAOag");
	this.shape_11.setTransform(491.025,-208);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("Ar5ZbMAAAgy1ILrAAMAAAAnXIMHAAIAALeg");
	this.shape_12.setTransform(295.5,-208);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("Al0ZbMAAAgy1ILpAAMAAAAy1g");
	this.shape_13.setTransform(157.925,-208);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("ADwZbIg7p6IlqAAIg6J6IrbAAMAGtgy1IQ7AAMAGtAy1gAgQo/IhcNqIDYAAIhctqIgPkOg");
	this.shape_14.setTransform(3.5,-208);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AtcZbMAAAgy1IMfAAQGRAAEFEEQEEEFAAG2IAAUiQAAG7kEENQkFENmNgBgAhyOaIAeAAQBvAAAfgxQAhgxAAiLIAA19QAAh8gpgmQgnglhfAAIgeAAg");
	this.shape_15.setTransform(-199.825,-208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_sub_caption_mc, new cjs.Rectangle(-1322.8,-456.8,5176.7,589.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgeAwIgCgWQALAEAHAAQAFAAADgCQACgBACgHIgFAAQgKAAgGgGQgFgFACgMIAKguIAVAAIgIAtQgBAEAEAAIABAAIAKgxIAWAAIgPBHQgDAPgIAGQgHAHgNAAQgJAAgIgCg");
	this.shape.setTransform(306.15,-6.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAyIAUhjIAVAAIgVBjg");
	this.shape_1.setTransform(301.9,-9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAwIAUhiIAVAAIgFAZIADAAQANAAAFAHQAEAGgDAOIgFAWQgDAOgHAGQgHAHgNAAQgKAAgNgDgAgEAeIACAAQAAAAABAAQABAAAAAAQAAAAAAAAQAAgBABAAIACgFIAEgWQABgEgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_2.setTransform(297.0143,-8.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTA0IAPhHIAVAAIgPBHgAABggQgBgDAAgFQABgGAEgCQADgDAFgBQAEABADADQABACgBAGQgBAFgDADQgEADgEAAQgFAAgCgDg");
	this.shape_3.setTransform(292.795,-9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAkIAGgVQAKADAHAAQAGAAABgDQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgCgCIgCgBIgCgBQgPgHAEgQQACgJAHgHQAHgGALAAQAJgBAJAEIgGAUQgIgDgGAAQgGAAAAADQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIAEADIAEACQAHAEADADQADAFgBAJQgDALgIAHQgIAHgNAAQgJAAgKgDg");
	this.shape_4.setTransform(288.275,-7.6531);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAmIAKgyQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBAAgBAAIgCAAIgLA2IgWAAIAPhGQAPgFALAAQAYAAgFAXIgLA0g");
	this.shape_5.setTransform(282.6931,-7.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaALIAEgVQAGgbAYAAQAZAAgGAbIgFAVQgGAcgXgBQgZABAGgcgAAAgKIgEAWQgCAGADAAQADAAABgGIAEgWQACgHgDAAQgDAAgBAHg");
	this.shape_6.setTransform(277.051,-7.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggA0IAVhlIAYgCQANAAAFAHQAEAHgDAOIgFAWQgDANgHAHQgHAGgNAAIgCAAIgFAbgAgBAFIABAAQAAAAABAAQABAAAAgBQABAAAAAAQAAAAABgBIACgEIAEgWQABgEgBgBQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgBAAg");
	this.shape_7.setTransform(270.8643,-6.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAkIAGgVQAKADAHAAQAGAAABgDQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAIgCgCIgCgBIgCgBQgPgHAEgQQACgJAHgHQAHgGALAAQAJgBAJAEIgGAUQgIgDgGAAQgGAAAAADQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIAEADIAEACQAHAEADADQADAFgBAJQgDALgIAHQgIAHgNAAQgJAAgKgDg");
	this.shape_8.setTransform(265.625,-7.6531);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAfQgGgGAEgPIAEgUQADgOAIgHQAHgGAMAAQAMAAAEAGQAEAHgDAOIgDARIgaAAIgBADQgBAIAJAAIALgBIgCAUIgQABQgOABgGgIgAABgNIgBAGIAFAAIABgGIABgEQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgDAAgBAFg");
	this.shape_9.setTransform(260.4748,-7.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAyIAAgmIgBAAIgIAmIgYAAIAVhjIAYAAQAQgBAFAIQAFAHgDANIgCAIQgDAOgIAGIACAsgAABgFIABAAQAAAAABgBQABAAAAAAQABAAAAAAQAAgBABAAQACgCAAgDIACgKQAAAAAAgBQABgBAAAAQgBgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAgBgBAAIgBAAg");
	this.shape_10.setTransform(254.235,-9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeAwIgCgWQALAEAHAAQAGAAACgCQACgBABgHIgDAAQgLAAgGgGQgFgFACgMIAKguIAVAAIgIAtQgBAEADAAIACAAIAKgxIAWAAIgPBHQgDAPgIAGQgHAHgNAAQgJAAgIgCg");
	this.shape_11.setTransform(246.5,-6.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAhQgFgGADgLIAAgBQACgLAHgFQAIgGALAAIAEABIAAgDQABgFgCgBQgBgCgFAAQgGAAgKAEIAKgWIAHgCIAIAAQAOAAAFAGQAFAGgDANIgKAvQgSADgIAAQgMAAgFgFgAgCAIIgDAEIAAACQAAABAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAIACAAIACgNIgCAAIgCABg");
	this.shape_12.setTransform(240.5646,-7.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAyIAUhjIAWAAIgWBjg");
	this.shape_13.setTransform(236.4,-9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiAyIAVhjIAYAAQAQgBAFAIQAFAHgDANIgCAJQgDAPgJAFQgIAHgNgBIgBAAIgIAlgAAAgEIABAAQABAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQACgBAAgEIACgLQAAAAABgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgBgBAAIgBAAg");
	this.shape_14.setTransform(231.5313,-9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAsIAAgZIgRg+IAVAAIAFAdIAGgdIAVAAIgRA+IAAAZg");
	this.shape_15.setTransform(-353.125,-5.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAsIAAhXIAUAAIAABDIAUAAIAAAUg");
	this.shape_16.setTransform(-358.45,-5.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAsIAAhXIAVAAQANAAAGAGQAFAGAAAMIAAAIQAAAMgGAFQgHAGgLAAIgBAAIAAAggAgCgEIABAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAIABgEIAAgKIgBgEQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_17.setTransform(-363.525,-5.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWAsIAAhXIAVAAQANAAAGAGQAFAGAAAMIAAAIQAAAMgGAFQgHAGgLAAIgBAAIAAAggAgCgEIABAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAIABgEIAAgKIgBgEQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_18.setTransform(-368.825,-5.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAGAsIgBgRIgJAAIgBARIgUAAIAMhXIAcAAIALBXgAAAgPIgCAXIAFAAIgCgXIgBgHg");
	this.shape_19.setTransform(-374.4,-5.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVApIAGgSQAIAEADgBQAHABAAgGIAAAAQAAgDgCgDIgFgHIgEgDQgGgGgDgFQgDgGAAgIQABgMAFgGQAGgHAKAAQAIAAAKAFIgFARIgKgDQgFAAAAAGIAAAAIAAACIAAABIABACIABACIACABIACADIAEAEQAHAGADAEQACAGAAAJQAAAMgGAHQgGAGgKAAQgKAAgLgEg");
	this.shape_20.setTransform(-380.95,-5.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFATIgEglIASAAIgDAlg");
	this.shape_21.setTransform(-384.7,-7.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPAnQgGgHAAgNIAAglQAAgNAGgHQAGgHAMAAQAKAAAIAEIgIARIgHgCQgHAAAAAKIAAAhQAAAEACADQACACAEAAIABAAIAHgBIAHAQQgIAEgLAAQgMABgGgHg");
	this.shape_22.setTransform(-388.225,-5.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgYAoQgGgGAAgMIAAgKQAAgHADgDQADgEAEAAQgEgIAAgGIAAgGQAAgNAEgEQAFgFALgBQAJABAEAFQADAEAAANIAAAFQAAAOgMADIAIALQgBgFAAgGIAQAAIAAAFIAAAFIAAAEIAAADIgBAEIgBADIgCADIAMARIgVAAIgCgDQgGAFgGgBQgNABgHgGgAgLAOIAAAGQAAAEACACQACACAEABIADgBIgLgQgAgGgaIAAABIAAACIAAAKIAAADQAEgBAAgFIAAgHIAAgDIgCgBIgCABg");
	this.shape_23.setTransform(-394.225,-5.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAsIAAhDIgNAAIAAgUIAtAAIAAAUIgNAAIAABDg");
	this.shape_24.setTransform(-400.025,-5.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIA4IAAhvIARAAIAABvg");
	this.shape_25.setTransform(-408.25,-3.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOAtIAGgPIAHgQIgCAAQgTAAAAgWIAAgLQAAgLAGgIQAGgHAKAAQALABAFAFQAHAGAAALIAAALQAAAHgCAFIgRAsgAgCgXIAAASQAAABABAAQAAABAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgSQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAABg");
	this.shape_26.setTransform(-416.8,-5.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQAoQgGgGAAgLIAAgLQAAgHACgGQAEgMANggIASAAIgHAQIgHAQIACAAQAUAAAAAWIAAALQAAALgGAIQgHAGgKAAQgKABgGgGgAgBAFIAAATQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgTQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_27.setTransform(-422.05,-5.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAtIAAgSQAZgbgBgPIAAgBQABgFgDgCQgCgCgDAAIgMACIgGgQQAJgFANAAQAKAAAHAIQAGAHAAAMIAAABQAAAFgCAHQgCAFgEAGIgGAKIgIAJIATAAIAAATg");
	this.shape_28.setTransform(-427.2,-5.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgVApIAGgSQAIAEAEgBQAGABAAgGIAAAAQAAgDgCgDIgFgHIgEgDQgGgGgDgFQgCgGgBgIQAAgMAHgGQAFgHAKAAQAIAAALAFIgGARIgKgDQgGAAAAAGIAAAAIABACIAAABIAAACIACACIACABIACADIAEAEQAGAGAEAEQACAGAAAJQAAAMgGAHQgGAGgKAAQgLAAgKgEg");
	this.shape_29.setTransform(-433.45,-5.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSAsIAAhXIAlAAIAAATIgTAAIAAAPIAQAAIAAASIgQAAIAAAQIATAAIAAATg");
	this.shape_30.setTransform(-437.8,-5.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAsIAAhXIATAAIAABXg");
	this.shape_31.setTransform(-441.45,-5.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AADAsIgGgiIgBAAIAAAiIgUAAIAAhXIAVAAQANAAAGAGQAGAGgBAMIAAAHQAAAMgGAFIAKAngAgEgFIABAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAIABgEIAAgJIgBgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_32.setTransform(-445.65,-5.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgTAsIAAhXIAnAAIAAATIgUAAIAAAPIAQAAIAAASIgQAAIAAAQIAUAAIAAATg");
	this.shape_33.setTransform(-450.55,-5.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgVApIAGgSQAIAEADgBQAHABAAgGIAAAAQAAgDgCgDIgFgHIgEgDQgGgGgDgFQgDgGAAgIQABgMAFgGQAGgHAKAAQAIAAAKAFIgFARIgKgDQgFAAAAAGIAAAAIAAACIAAABIABACIABACIACABIACADIAEAEQAHAGADAEQACAGAAAJQAAAMgGAHQgGAGgKAAQgKAAgLgEg");
	this.shape_34.setTransform(-455.2,-5.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-457.8,-17.3,789.5,21.8);


// stage content:
(lib.bigticketconversionhtml5728x90 = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:1072.8,regY:-146,x:464.2,y:48.6,alpha:0.0037},0).wait(1).to({y:48.55,alpha:0.0167},0).wait(1).to({y:48.4,alpha:0.0435},0).wait(1).to({y:48.1,alpha:0.0919},0).wait(1).to({y:47.6,alpha:0.1816},0).wait(1).to({y:46.8,alpha:0.3248},0).wait(1).to({y:45.9,alpha:0.4878},0).wait(1).to({y:45.1,alpha:0.6345},0).wait(1).to({y:44.45,alpha:0.7499},0).wait(1).to({y:43.95,alpha:0.8388},0).wait(1).to({y:43.6,alpha:0.9088},0).wait(1).to({y:43.3,alpha:0.9564},0).wait(1).to({y:43.15,alpha:0.9834},0).wait(1).to({y:43.1,alpha:0.9964},0).wait(1).to({regX:1.1,regY:0.6,x:363.75,y:56.85,alpha:1},0).wait(68).to({y:60.5},0).wait(1).to({regX:1072.8,regY:-146,x:464.2,y:46.75,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:46.8,alpha:0.9565},0).wait(1).to({y:46.9,alpha:0.9081},0).wait(1).to({y:47.05,alpha:0.8184},0).wait(1).to({y:47.35,alpha:0.6752},0).wait(1).to({y:47.65,alpha:0.5122},0).wait(1).to({y:47.95,alpha:0.3655},0).wait(1).to({y:48.15,alpha:0.2501},0).wait(1).to({y:48.3,alpha:0.1612},0).wait(1).to({y:48.45,alpha:0.0912},0).wait(1).to({y:48.55,alpha:0.0436},0).wait(1).to({y:48.6,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:1.1,regY:0.6,x:363.75,y:62.4,alpha:0},0).to({_off:true},1).wait(169));

	// sub_caption
	this.instance_5 = new lib.daily_sub_caption_mc();
	this.instance_5.setTransform(363.75,62.4,0.0937,0.0937,0,0,0,1.1,0.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.sub_caption_mc();
	this.instance_6.setTransform(363.75,62.4,0.0937,0.0937,0,0,0,1.1,0.6);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},98).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},60).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).wait(1).to({regX:1253.8,regY:-208.4,x:481.15,y:42.75,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:42.7,alpha:0.0435},0).wait(1).to({y:42.6,alpha:0.0919},0).wait(1).to({y:42.45,alpha:0.1816},0).wait(1).to({y:42.15,alpha:0.3248},0).wait(1).to({y:41.85,alpha:0.4878},0).wait(1).to({y:41.55,alpha:0.6345},0).wait(1).to({y:41.35,alpha:0.7499},0).wait(1).to({y:41.2,alpha:0.8388},0).wait(1).to({y:41.05,alpha:0.9088},0).wait(1).to({y:40.95,alpha:0.9564},0).wait(1).to({y:40.9,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:1.1,regY:0.6,x:363.75,y:60.5,alpha:1},0).wait(61).to({regX:1253.8,regY:-208.4,x:481.15,y:40.9,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:40.95,alpha:0.9565},0).wait(1).to({y:41.05,alpha:0.9081},0).wait(1).to({y:41.2,alpha:0.8184},0).wait(1).to({y:41.5,alpha:0.6752},0).wait(1).to({y:41.8,alpha:0.5122},0).wait(1).to({y:42.1,alpha:0.3655},0).wait(1).to({y:42.3,alpha:0.2501},0).wait(1).to({y:42.45,alpha:0.1612},0).wait(1).to({y:42.6,alpha:0.0912},0).wait(1).to({y:42.7,alpha:0.0436},0).wait(1).to({y:42.75,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).to({_off:true},1).wait(95));

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