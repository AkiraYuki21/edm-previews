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
	this.shape.graphics.f("#FFE400").s().p("Ag9BkQgdgMgRgZQgSgZAAgmQABgzAjgdQAkgeA1AAQA2AAAkAeQAjAdABAzQgBAmgRAZQgSAZgcAMQgcALgiAAQghAAgcgLg");
	this.shape.setTransform(319.7,-54.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AApHnIhOlzIgPAAIAAFzIjgAAIAAvNIDvAAQBsAAA8AiQA9AhAYA8QAYA9gBBSIAABFQAABMgTAyQgTAygiAdIBuGtgAg0g/IAKAAQAdAAAMgNQAMgNAAghIAAheQAAgggLgOQgMgOgeABIgKAAg");
	this.shape_1.setTransform(272.175,-93.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AjWHnIAAvNIGrAAIAADPIjNAAIAACmICnAAIAADQIinAAIAAC5IDQAAIAADPg");
	this.shape_2.setTransform(218.1,-93.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AjBGyQhBhEAAiGIAAnOQABhWAlg8QAlg9BBghQBBgfBSgBQA5AAA7AQQA8AQA2AdIhRDBQgbgPgggIQgggHgfAAQgtAAgVAXQgVAYABAyIAAGrQAAAZAJALQAIAKARAAQALAAAGgDIAIgDIAAlfIDTAAIAAHxQgnAXgkAQQgjAPgmAJQgmAIguAAQiIAAhBhFg");
	this.shape_3.setTransform(165.6748,-93.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AjBGyQhBhEAAiGIAAnOQABhWAlg8QAlg9BBghQBBgfBSgBQA5AAA7AQQA8AQA2AdIhRDBQgbgPgggIQgggHgfAAQgtAAgVAXQgVAYABAyIAAGrQAAAZAJALQAIAKARAAQALAAAGgDIAIgDIAAlfIDTAAIAAHxQgnAXgkAQQgjAPgmAJQgmAIguAAQiIAAhBhFg");
	this.shape_4.setTransform(108.8248,-93.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AhvHnIAAvNIDfAAIAAPNg");
	this.shape_5.setTransform(64.525,-93.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AkEHnIAAvNID1AAQBNAAA8AYQA7AYAjA1QAiA1AABUIAAAYQABBJgYAwQgYAwg4AYQA6AUAcAwQAcAxAABUIAAA7QgBBVggA5QgfA6g5AdQg6AdhNAAgAgkEUIANAAQAcAAAKgOQAKgOgBgZIAAhhQABgbgKgOQgJgOgdAAIgNAAgAgkhsIARAAQAbAAAKgOQAKgOAAgZIAAg7QAAgbgJgOQgJgOgdAAIgRAAg");
	this.shape_6.setTransform(20.675,-93.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AgCHnIg+ppIAAJpIjgAAIAAvNIEmAAIA7JaIAApaIDfAAIAAPNg");
	this.shape_7.setTransform(-57,-93.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AhvHnIAAvNIDfAAIAAPNg");
	this.shape_8.setTransform(-104.275,-93.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AArHnIgrpJIgpJJIkhAAIhIvNIDtAAIALLrIBBrrIC0AAIBALrIALrrIDtAAIhIPNg");
	this.shape_9.setTransform(-161.7,-93.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag9BkQgcgMgSgZQgSgZAAgmQABgzAjgdQAjgeA2AAQA3AAAiAeQAkAdABAzQAAAmgSAZQgSAZgcAMQgdALghAAQghAAgcgLg");
	this.shape_10.setTransform(303.55,-200.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjBGyQhBhEAAiGIAAnOQABhWAlg8QAlg9BBghQBBgfBSgBQA5AAA7AQQA8AQA2AdIhRDBQgbgPgggIQgggHgfAAQgtAAgVAXQgVAYABAyIAAGrQAAAZAJALQAIAKARAAQALAAAGgDIAIgDIAAlfIDTAAIAAHxQgnAXgkAQQgjAPgmAJQgmAIguAAQiIAAhBhFg");
	this.shape_11.setTransform(260.0748,-239.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhvHnIAAvNIDfAAIAAPNg");
	this.shape_12.setTransform(215.725,-239.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AkEHnIAAvNID1AAQBNAAA8AYQA7AYAjA1QAiA1AABUIAAAYQABBJgYAwQgYAwg4AYQA6AUAcAwQAcAxAABUIAAA7QgBBVggA5QgfA6g5AdQg6AdhNAAgAgkEUIANAAQAcAAAKgOQAKgOgBgZIAAhhQABgbgKgOQgJgOgdAAIgNAAgAgkhsIARAAQAbAAAKgOQAKgOAAgZIAAg7QAAgbgJgOQgJgOgdAAIgRAAg");
	this.shape_13.setTransform(171.875,-239.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ACfHnIAArZIgKBvIhCJqIinAAIhDpqIgJhvIAALZIjYAAIAAvNIFTAAIAgHNIAFBJIAFhJIAjnNIFRAAIAAPNg");
	this.shape_14.setTransform(85.35,-239.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABIHnIgSi+IhrAAIgSC+IjbAAICBvNIFDAAICBPNgAAhBZIgckEIgFhRIgEBRIgbEEIBAAAg");
	this.shape_15.setTransform(12.575,-239.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjXHnIAAvNIGsAAIAADPIjNAAIAACmICnAAIAADQIinAAIAAC5IDPAAIAADPg");
	this.shape_16.setTransform(-41.7,-239.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AApHnIhOlzIgPAAIAAFzIjgAAIAAvNIDvAAQBsAAA8AiQA9AhAYA8QAYA9gBBSIAABFQAABMgTAyQgTAygiAdIBuGtgAg0g/IAKAAQAdAAAMgNQAMgNAAghIAAheQAAgggLgOQgMgOgeABIgKAAg");
	this.shape_17.setTransform(-98.175,-239.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AkBHnIAAvNIDvAAQBPAAA+AjQA+AiAkBAQAkBAABBaIAAGJQgBBbgkBCQgkBBg+AjQg+AkhNAAgAghEUIAIAAQAhABAKgQQAKgQgBgoIAAmkQAAgmgNgMQgNgLgaABIgIAAg");
	this.shape_18.setTransform(-158.825,-239.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-329.3,-315,790.3,325), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhZGLIAAjgIiXo1IC7AAIA2EIIA2kIIC7AAIiXI1IAADgg");
	this.shape.setTransform(154.2,13.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA6GLIgOiaIhXAAIgOCaIiyAAIBosVIEHAAIBoMVgAAbBJIgXjUIgEhBIgDBBIgWDUIA0AAg");
	this.shape_1.setTransform(103.475,13.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAiGLIginaIghHaIjqAAIg7sVIDBAAIAJJeIAzpeICTAAIA0JeIAJpeIDAAAIg7MVg");
	this.shape_2.setTransform(43.3,13.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA6GLIgOiaIhXAAIgOCaIiyAAIBosVIEHAAIBoMVgAAbBJIgXjUIgEhBIgDBBIgWDUIA0AAg");
	this.shape_3.setTransform(-16.825,13.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhaGLIAApjIhvAAIAAiyIGTAAIAACyIhvAAIAAJjg");
	this.shape_4.setTransform(331.225,-102.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiuGLIAAsVIFbAAIAACoIinAAIAACHICIAAIAACoIiIAAIAACWICpAAIAACog");
	this.shape_5.setTransform(292.05,-102.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZGLIhGlqIAAFqIi2AAIAAsVIC2AAIAAFoIBGloIC+AAIhiF1IBvGgg");
	this.shape_6.setTransform(246.95,-102.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaGXQhwAAg5g8Qg4g8AAh2IAAlRQAAh1A4g9QA5g8BwAAIABAAQAvgBAmAJQAmAIAkAQIhBCSQgQgFgRgCQgQgCgOAAIgCAAQgjAAgTAWQgRAXAAApIAAEuQABAqAWAWQAWAXAlAAIABAAQAQAAAQgEQARgCASgJIBBCRQgoAUgpAKQgpAKgzgBg");
	this.shape_7.setTransform(201.3,-102.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhaGLIAAsVIC1AAIAAMVg");
	this.shape_8.setTransform(166.325,-102.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhaGLIAApjIhvAAIAAiyIGTAAIAACyIhvAAIAAJjg");
	this.shape_9.setTransform(133.675,-102.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA6GLIgOiaIhXAAIgOCaIiyAAIBosVIEHAAIBoMVgAAbBJIgXjUIgEhBIgDBBIgWDUIA0AAg");
	this.shape_10.setTransform(74.775,-102.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhaGLIAApjIhvAAIAAiyIGTAAIAACyIhvAAIAAJjg");
	this.shape_11.setTransform(15.925,-102.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhqGNQgugLgrgRIAuikQAiAOAbAJQAbAJAWAAQAiAAAPgNQAQgMAAgaIAAgEQAAgXgRgYQgQgagmglIgigiQghgggXgeQgYgfgMgnQgNgmAAg1IAAgCQABhnA0g6QA0g5BdgBQAlAAArAJQAsAKArARIguCYQgcgIgWgEQgXgFgNgBQgeAAgQAOQgPAMAAAZIAAADQAAAUARAVQASAUAeAeIASATIATAUQAhAfAXAeQAYAfANAnQAOAnAAA6IAAABQgBBJgZAzQgZAzgvAcQguAag9ABQg0AAgugKg");
	this.shape_12.setTransform(-25.45,-102.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhrF6QgwgWgbgvQgbguAAhHIAApPIC5AAIAAJUQAAARAGAIQAGAIANAAQAMAAAGgIQAGgIAAgRIAApUIC5AAIAAJPQAAA/gXAuQgXAvgvAaQguAahFAAQg+AAgvgWg");
	this.shape_13.setTransform(-70.925,-102.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhgGFQgugNgvgYIBCidQAWAMAUAHQATAGATAAQAaAAAMgRQALgRgBgjIAAonIC5AAIAAJFQgBBog3A6Qg3A5hdABQglAAgtgMg");
	this.shape_14.setTransform(-118.8,-102.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhqGNQgugLgrgRIAuikQAiAOAbAJQAbAJAWAAQAhAAAQgNQAPgMAAgaIAAgEQABgXgRgYQgQgagnglIghgiQghgggYgeQgXgfgMgnQgNgmAAg1IAAgCQAChnAzg6QA0g5BdgBQAlAAArAJQAsAKArARIguCYQgcgIgWgEQgXgFgNgBQgeAAgQAOQgPAMAAAZIAAADQAAAUARAVQATAUAcAeIASATIAUAUQAhAfAXAeQAYAfANAnQANAnAAA6IAAABQAABJgZAzQgZAzgvAcQguAag9ABQg0AAgugKg");
	this.shape_15.setTransform(-170.45,-102.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhaGLIAAsVIC1AAIAAMVg");
	this.shape_16.setTransform(-203.025,-102.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("AAaGLIhHlqIAAFqIi2AAIAAsVIC2AAIAAFoIBGloIC+AAIhhF1IBtGgg");
	this.shape_17.setTransform(181.1,-219.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE400").s().p("AA6GLIgOiaIhXAAIgOCaIiyAAIBosVIEHAAIBoMVgAAbBJIgXjUIgEhBIgDBBIgWDUIA0AAg");
	this.shape_18.setTransform(128.925,-219.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE400").s().p("AiuGLIAAsVIFbAAIAACoIimAAIAACHICHAAIAACoIiHAAIAACWICoAAIAACog");
	this.shape_19.setTransform(84.85,-219.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE400").s().p("AAhGLIg/ktIgMAAIAAEtIi2AAIAAsVIDCAAQBYAAAxAbQAxAbATAxQAUAxgBBDIAAA4QAAA+gQApQgPAogcAXIBaFcgAgqgzIAIAAQAYAAAKgLQAJgKAAgbIAAhMQAAgagJgLQgKgLgYAAIgIAAg");
	this.shape_20.setTransform(39.025,-219.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFE400").s().p("AhaGLIAApjIhvAAIAAiyIGTAAIAACyIhvAAIAAJjg");
	this.shape_21.setTransform(-6.975,-219.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFE400").s().p("AhqGMQgugJgsgSIAwikQAhAOAbAJQAbAJAXAAQAgAAAPgNQARgMgBgaIAAgFQABgVgRgaQgQgZgngmIgighQgggggYgeQgXgfgMgmQgMgnAAg1IAAgCQAAhoA0g5QA0g5BegBQAkAAAsAJQArAKArARIgvCYQgagIgXgEQgXgGgMAAQggAAgPANQgPANAAAZIAAADQAAAUASAUQARAWAdAdIASATIATATQAiAgAXAeQAZAfANAnQANAogBA6IAAAAQAABJgZA0QgaAzguAbQguAbg+AAQgzAAgugLg");
	this.shape_22.setTransform(-48.35,-219.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFE400").s().p("AicFgQg2g3ABhtIAAl3QABhFAegxQAegxA1gaQA0gaBDgBQAuAAAwANQAwANAsAXIhCCcQgWgLgZgHQgagFgaAAQgkgBgRAUQgRATABApIAAFZQAAAVAHAIQAHAJANgBQAJAAAFgCIAHgCIAAkdICrAAIAAGUQggASgdAMQgcANgfAIQgfAGgmAAQhtAAg1g4g");
	this.shape_23.setTransform(312.5498,-335.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFE400").s().p("AgCGLIgyn0IAAH0Ii1AAIAAsVIDuAAIAwHoIAAnoIC1AAIAAMVg");
	this.shape_24.setTransform(262.325,-335.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE400").s().p("AhaGLIAAsVIC1AAIAAMVg");
	this.shape_25.setTransform(223.975,-335.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFE400").s().p("AgCGLIgyn0IAAH0Ii1AAIAAsVIDuAAIAwHoIAAnoIC1AAIAAMVg");
	this.shape_26.setTransform(185.725,-335.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFE400").s().p("AgCGLIgyn0IAAH0Ii1AAIAAsVIDuAAIAwHoIAAnoIC1AAIAAMVg");
	this.shape_27.setTransform(133.125,-335.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFE400").s().p("AhaGLIAAsVIC1AAIAAMVg");
	this.shape_28.setTransform(94.825,-335.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFE400").s().p("AAjGLIgjnaIghHaIjqAAIg6sVIC/AAIAJJeIA1peICRAAIA1JeIAIpeIDAAAIg6MVg");
	this.shape_29.setTransform(48.2,-335.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFE400").s().p("AAhGLIg/ktIgMAAIAAEtIi2AAIAAsVIDCAAQBYAAAxAbQAxAbATAxQAUAxgBBDIAAA4QAAA+gQApQgPAogcAXIBaFcgAgqgzIAIAAQAYAAAKgLQAJgKAAgbIAAhMQAAgagJgLQgKgLgYAAIgIAAg");
	this.shape_30.setTransform(-24.525,-335.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFE400").s().p("AhrF6QgwgWgbgvQgbguAAhHIAApPIC5AAIAAJUQAAARAGAIQAGAIANAAQAMAAAGgIQAGgIAAgRIAApUIC5AAIAAJPQAAA/gXAuQgXAvgvAaQguAahFAAQg+AAgvgWg");
	this.shape_31.setTransform(-74.775,-335.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFE400").s().p("AABGXQhpgBg0g4Qg1g4AAhpIAAl4QABhvA2g2QA4g2BiAAIACAAQBnABA0A4QA1A4AABqIAAF4QgBBvg2A1Qg3A2hhAAgAgTjjQgFAIAAASIAAGVQAAARAGAIQAGAIAMAAIABAAQAMAAAGgIQAGgJgBgQIAAmVQAAgSgFgIQgHgJgMABIgBAAQgNgBgFAJg");
	this.shape_32.setTransform(-123.65,-335.8002);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFE400").s().p("AhZGLIAAjgIiXo1IC7AAIA2EIIA2kIIC6AAIiWI1IAADgg");
	this.shape_33.setTransform(-172.7,-335.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-333.6,-397.3,804.2,495.1), null);


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
	this.instance.setTransform(163.75,-8.3,0.0157,0.0157,0,0,0,493.1,461.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAjIgFgBIgDAAIgBgQIAHACIAFABIAEgBIADgCIACgEIgCAAIgBAAQgFAAgDgCQgEgBgBgEQgCgDACgGIAGggIAPAAIgGAgIAAACIACAAIAAAAIABAAIADgRIAEgRIAPAAIgLAxQgBALgGAEQgFAFgJAAIgEAAg");
	this.shape.setTransform(151.925,-7.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAjIAOhFIAPAAIgOBFg");
	this.shape_1.setTransform(148.95,-9.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAjIgIgCIAOhEIAPAAIgEASIACAAQAJAAADAFQADAEgCAJIgDAPQgCAKgFAFQgFAFgIAAIgJgBgAgCAVIABAAIABgBIACgEIADgPIAAgDIgCgBIgBAAg");
	this.shape_2.setTransform(145.54,-9.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAlIAKgyIAPAAIgLAygAABgWQgBgCAAgEQABgDACgCQACgDAEAAQADAAABADQACACgBADQgBAEgCACQgCACgEAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_3.setTransform(142.57,-9.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAaIgIgBIAEgPIAGACIAGAAIADAAIACgCIgBgCIgBgBIgCgBIgCgBQgFgCgBgDQgCgEABgGQABgEACgEQADgDAEgDQADgCAFAAIAGAAIAHACIgEAOIgFgBIgFgBIgDABIgBACIAAABIADACIABAAIABABIAGAEIADADIAAAIQgBAFgDADQgDAEgEACQgFADgGAAIgFgBg");
	this.shape_4.setTransform(139.475,-8.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBAbIAHgjIAAgCIgCgBIgBAAIgBABIgHAlIgPAAIAKgxIAKgDIAIAAQAIAAAEADQADAEgCAJIgIAkg");
	this.shape_5.setTransform(135.54,-8.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAWQgEgEACgLIADgNQACgKAGgFQAFgFAIAAQAIAAADAFQAEAFgCAKIgDANQgCALgGAEQgFAFgHAAQgJAAgDgFgAABgLIgBAEIgDAPIAAAEIACABIABgBIAAgEIAEgPIAAgEIgBgBIgCABg");
	this.shape_6.setTransform(131.625,-8.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAkIAPhGIAGgBIAFAAIAFAAQAJAAADAFQADAFgCAKIgDAOQgCAKgFAFQgFAEgIAAIgCAAIgEASgAAAAEIAAAAIACgBIACgEIADgOIAAgFIgCgBIgBAAg");
	this.shape_7.setTransform(127.315,-7.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAaIgIgBIAEgPIAGACIAGAAIADAAIACgCIgBgCIgBgBIgCgBIgCgBQgFgCgBgDQgCgEABgGQABgEACgEQADgDAEgDQADgCAFAAIAGAAIAHACIgEAOIgFgBIgFgBIgDABIgBACIAAABIADACIABAAIABABIAGAEIADADIAAAIQgBAFgDADQgDAEgEACQgFADgGAAIgFgBg");
	this.shape_8.setTransform(123.675,-8.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAWQgFgFACgLIADgMQACgKAGgFQAFgFAIAAQAIAAADAFQADAFgCAJIgCAMIgSAAIAAACQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQACABADABIAEgBIADAAIgBANIgHABIgEABQgJAAgEgFgAABgMIgBADIAAAFIADAAIABgFIAAgDIgBAAIgCAAg");
	this.shape_9.setTransform(120.0592,-8.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAjIAAgbIgCAAIgFAbIgQAAIAOhFIARAAQAHAAAEACQAEADABAEQABAEgBAGIgBAFQgBAGgDAEQgCACgDACIACAfgAAAgEIABAAIADAAIACgEIABgHIAAgDIgDgBIgBAAg");
	this.shape_10.setTransform(115.745,-9.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAjIgFgBIgDAAIgBgQIAHACIAFABIAEgBIADgCIACgEIgCAAIgBAAQgFAAgDgCQgEgBgBgEQgCgDACgGIAGggIAPAAIgGAgIAAACIACAAIAAAAIABAAIADgRIAEgRIAPAAIgLAxQgBALgGAEQgFAFgJAAIgEAAg");
	this.shape_11.setTransform(110.325,-7.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAXQgDgFABgHIABgBQABgHAFgDQAFgEAHAAIACAAIABAAIABgCQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIgEgBIgFABIgGACIAHgPIADgBIADgBIAEAAQAHAAADACQAEACABAEIgBAKIgHAgIgJACIgIABQgIAAgEgEgAgBAGIgCACIAAACIAAADIACABIABAAIABgJIgBAAIgBABg");
	this.shape_12.setTransform(106.2083,-8.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAjIAOhFIAPAAIgPBFg");
	this.shape_13.setTransform(103.3,-9.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAjIAOhFIAQAAQAIAAAEACQAEADABAEQABAEgCAGIgBAGQgBAIgEADQgDAEgFACQgFABgFAAIgBAAIgFAagAAAgDIABAAIADgBIABgDIACgIIAAgDIgDgBIgBAAg");
	this.shape_14.setTransform(99.9313,-9.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMAZIAAgxIAMAAQADAAAEABQACACACADQADAEAAAEIAAAUQAAAFgDADIgEAFQgEACgDAAgAgBAOIAAAAIACAAIAAgDIAAgWIgBgCIgBAAIAAAAg");
	this.shape_15.setTransform(183.3,-24.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKAZIAAgxIAVAAIAAAKIgLAAIAAAJIAJAAIAAAKIgJAAIAAAJIALAAIAAALg");
	this.shape_16.setTransform(180.525,-24.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAEAZIgBgKIgFAAIgBAKIgLAAIAGgxIAQAAIAHAxgAACAFIgCgNIAAgEIAAAEIgBANIADAAg");
	this.shape_17.setTransform(177.575,-24.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAZIgDgfIAAAfIgLAAIAAgxIAPAAIACAeIAAgeIAMAAIAAAxg");
	this.shape_18.setTransform(173.35,-24.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgFAZIAAgxIALAAIAAAxg");
	this.shape_19.setTransform(170.875,-24.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGAaIgGgCIADgLIAEACIAEAAIACAAIABgDIAAAAIgBgDIgDgEIgCgCIgEgEIgCgEIgBgGQAAgHAEgEQADgDAFAAIAFAAIAGACIgDAKIgDgBIgDAAIgDABIAAACIAAAAIAAADIADADIACABIABACIAEADIACAEIABAGIAAABQAAAEgCAEQgBADgDACQgDABgEAAIgGAAg");
	this.shape_20.setTransform(167.925,-24.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKAZIAAgxIAVAAIAAAKIgLAAIAAAJIAJAAIAAAKIgJAAIAAAJIALAAIAAALg");
	this.shape_21.setTransform(165.425,-24.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJAXQgDgEAAgIIAAgVQAAgHADgEQAFgEAGAAIAFAAIAFACIgFAJIgCAAIgBAAQgBAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAIAAAEIAAATQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAIADABIAAAAIACAAIACAAIAFAJIgGACIgFAAQgGAAgFgDg");
	this.shape_22.setTransform(162.9,-24.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgFAZIAAgxIALAAIAAAxg");
	this.shape_23.setTransform(160.625,-24.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AACAZIgDgTIgBAAIAAATIgLAAIAAgxIAMAAQAEAAAEABQADACACADIABAHIAAAEIgBAHIgEADIAHAWgAgCgDIAAAAIACAAIAAgCIAAgGIAAgCIgCAAIAAAAg");
	this.shape_24.setTransform(158.2,-24.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNAZIAAgxIANAAQAFAAADABQADACABADQACADgBAEIAAAFQAAAGgCACQgBADgEAAIgGABIgBAAIAAATgAgBgCIABAAIABgBIABgCIAAgGIgBgCIgBAAIgBAAg");
	this.shape_25.setTransform(155,-24.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAhIAAhAIAJAAIAABAg");
	this.shape_26.setTransform(150.05,-23.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFAZIAAgOIgKgjIANAAIACAQIAEgQIAMAAIgKAjIAAAOg");
	this.shape_27.setTransform(145.025,-24.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgLAZIAAgxIALAAIAAAmIAMAAIAAALg");
	this.shape_28.setTransform(141.95,-24.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNAZIAAgxIANAAQAFAAADABQADACABADQABADAAAEIAAAFQAAAGgCACQgBADgDAAIgHABIgBAAIAAATgAgBgCIABAAIABgBIAAgCIAAgGIAAgCIgBAAIgBAAg");
	this.shape_29.setTransform(139,-24.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgMAZIAAgxIAMAAQAFAAADABQADACABADQACADAAAEIAAAFQgBAGgCACQgCADgCAAIgHABIgBAAIAAATgAgBgCIABAAIAAgBIABgCIAAgGIgBgCIAAAAIgBAAg");
	this.shape_30.setTransform(135.95,-24.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAEAZIgBgKIgFAAIgBAKIgLAAIAGgxIAQAAIAHAxgAACAFIgCgNIAAgEIAAAEIgBANIADAAg");
	this.shape_31.setTransform(132.775,-24.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGAaIgGgCIADgLIAEACIAEAAIACAAIABgDIAAAAIgBgDIgDgEIgCgCIgEgEIgCgEIgBgGQAAgHAEgEQADgDAFAAIAFAAIAGACIgDAKIgDgBIgDAAIgDABIAAACIAAAAIAAADIADADIACABIABACIAEADIACAEIABAGIAAABQAAAEgCAEQgBADgDACQgDABgEAAIgGAAg");
	this.shape_32.setTransform(128.925,-24.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgDALIgCgVIAKAAIgCAVg");
	this.shape_33.setTransform(126.75,-25.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgIAXQgEgEAAgIIAAgVQAAgHAEgEQADgEAHAAIAFAAIAFACIgFAJIgCAAIgCAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAIAAAEIAAATQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAIADABIAAAAIACAAIADAAIAEAJIgGACIgFAAQgHAAgDgDg");
	this.shape_34.setTransform(124.75,-24.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgOAXQgDgDAAgHIAAgGQAAgEACgCQACgBACgBIgCgEIgBgEIAAgDIABgIQABgDADgBIAHgBIAFABQACABABADQACADgBAFIAAADIgBADIgCAEIgDACIAEAGIgBgDIAAgDIAJAAIAAAGIAAAFIgCAFIAHAKIgMAAIgBgCIgDACIgEAAQgIAAgEgDgAgGAIIAAACIAAABQAAABAAABQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAAAABAAQAAABABAAQAAAAABAAIABAAIAAgBIgGgJgAgDgOIAAABIAAAGIAAABIAAABIABgBIACgDIAAgEIgBgBIgBgBIgBABg");
	this.shape_35.setTransform(121.25,-24.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgFAZIAAgmIgHAAIAAgLIAZAAIAAALIgHAAIAAAmg");
	this.shape_36.setTransform(117.95,-24.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgEAhIAAhAIAJAAIAABAg");
	this.shape_37.setTransform(113.15,-23.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgGAZIgGgCIAEgJIADABIAEABIABgCIABgCIAAgFIAAgCIgBgBIgCAAIgCAAIAAgIIABAAIADAAIAAgCIAAgCIAAgDIAAgDIgCgBIgCABIgDABIgEgJIAGgDIAFgBQAFAAAEAEQADAEAAAGIAAABQAAAEgBADQgCADgDAAQAEABABACQACADAAAEIAAADQAAAHgEAEQgDADgGAAIgGgBg");
	this.shape_38.setTransform(108.275,-24.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgHAZIAHgnIgLAAIAAgKIAXAAIAAAKIgIAng");
	this.shape_39.setTransform(105.55,-24.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgMAaIAAgKIAHgJIAFgHQACgFAAgDIAAgBIgBgDIgBgCIgCAAIgDAAIgEABIgDgJIAFgCIAHgBQAEAAADACQADACACAEQABAEAAAEIAAAAIgBAHIgDAGIgEAGIgFAFIAMAAIAAALg");
	this.shape_40.setTransform(102.85,-24.45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgGAaIgGgCIADgLIAEACIAEAAIACAAIABgDIAAAAIgBgDIgDgEIgCgCIgEgEIgCgEIgBgGQAAgHAEgEQADgDAFAAIAFAAIAGACIgDAKIgDgBIgDAAIgDABIAAACIAAAAIAAADIADADIACABIABACIAEADIACAEIABAGIAAABQAAAEgCAEQgBADgDACQgDABgEAAIgGAAg");
	this.shape_41.setTransform(99.225,-24.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgKAZIAAgxIAVAAIAAAKIgLAAIAAAJIAJAAIAAAKIgJAAIAAAJIALAAIAAALg");
	this.shape_42.setTransform(96.725,-24.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgFAZIAAgxIALAAIAAAxg");
	this.shape_43.setTransform(94.625,-24.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AACAZIgDgTIgBAAIAAATIgMAAIAAgxIANAAQAFAAADABQADACABADIABAHIAAAEIgBAHIgCADIAGAWgAgCgDIABAAIABAAIAAgCIAAgGIAAgCIgBAAIgBAAg");
	this.shape_44.setTransform(92.2,-24.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgKAZIAAgxIAVAAIAAAKIgLAAIAAAJIAJAAIAAAKIgJAAIAAAJIALAAIAAALg");
	this.shape_45.setTransform(89.375,-24.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgGAaIgGgCIADgLIAEACIAEAAIACAAIABgDIAAAAIgBgDIgDgEIgCgCIgEgEIgCgEIgBgGQAAgHAEgEQADgDAFAAIAFAAIAGACIgDAKIgDgBIgDAAIgDABIAAACIAAAAIAAADIADADIACABIABACIAEADIACAEIABAGIAAABQAAAEgCAEQgBADgDACQgDABgEAAIgGAAg");
	this.shape_46.setTransform(86.675,-24.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(85.1,-28.5,100,27.4);


// stage content:
(lib.bigticketawarenesshtml5300x50 = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:65.2,regY:-166.4,x:156.45,y:26.9,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:26.85,alpha:0.0435},0).wait(1).to({y:26.75,alpha:0.0919},0).wait(1).to({y:26.55,alpha:0.1816},0).wait(1).to({y:26.25,alpha:0.3248},0).wait(1).to({y:25.9,alpha:0.4878},0).wait(1).to({y:25.6,alpha:0.6345},0).wait(1).to({y:25.35,alpha:0.7499},0).wait(1).to({y:25.15,alpha:0.8388},0).wait(1).to({y:25,alpha:0.9088},0).wait(1).to({y:24.9,alpha:0.9564},0).wait(1).to({y:24.85,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:149.7,y:42.25,alpha:1},0).wait(61).to({regX:65.2,regY:-166.4,x:156.45,y:24.85,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:24.9,alpha:0.9565},0).wait(1).to({y:25,alpha:0.9081},0).wait(1).to({y:25.2,alpha:0.8184},0).wait(1).to({y:25.5,alpha:0.6752},0).wait(1).to({y:25.85,alpha:0.5122},0).wait(1).to({y:26.15,alpha:0.3655},0).wait(1).to({y:26.4,alpha:0.2501},0).wait(1).to({y:26.6,alpha:0.1612},0).wait(1).to({y:26.75,alpha:0.0912},0).wait(1).to({y:26.85,alpha:0.0436},0).wait(1).to({y:26.9,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:149.7,y:44.35,alpha:0},0).to({_off:true},1).wait(177));

	// sub_caption
	this.instance_5 = new lib.daily_caption_mc();
	this.instance_5.setTransform(149.7,44.35,0.1042,0.1042,0,0,0,0.5,0.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90).to({_off:false},0).wait(1).to({regX:69.6,regY:-161.7,x:156.9,y:27.4,alpha:0.0037},0).wait(1).to({alpha:0.0167},0).wait(1).to({y:27.35,alpha:0.0435},0).wait(1).to({y:27.25,alpha:0.0919},0).wait(1).to({y:27.05,alpha:0.1816},0).wait(1).to({y:26.75,alpha:0.3248},0).wait(1).to({y:26.4,alpha:0.4878},0).wait(1).to({y:26.1,alpha:0.6345},0).wait(1).to({y:25.85,alpha:0.7499},0).wait(1).to({y:25.65,alpha:0.8388},0).wait(1).to({y:25.5,alpha:0.9088},0).wait(1).to({y:25.4,alpha:0.9564},0).wait(1).to({y:25.35,alpha:0.9834},0).wait(1).to({alpha:0.9964},0).wait(1).to({regX:0.5,regY:0.5,x:149.7,y:42.25,alpha:1},0).wait(53).to({regX:69.6,regY:-161.7,x:156.9,y:25.35,alpha:0.9963},0).wait(1).to({alpha:0.9833},0).wait(1).to({y:25.4,alpha:0.9565},0).wait(1).to({y:25.5,alpha:0.9081},0).wait(1).to({y:25.7,alpha:0.8184},0).wait(1).to({y:26,alpha:0.6752},0).wait(1).to({y:26.35,alpha:0.5122},0).wait(1).to({y:26.65,alpha:0.3655},0).wait(1).to({y:26.9,alpha:0.2501},0).wait(1).to({y:27.1,alpha:0.1612},0).wait(1).to({y:27.25,alpha:0.0912},0).wait(1).to({y:27.35,alpha:0.0436},0).wait(1).to({y:27.4,alpha:0.0166},0).wait(1).to({alpha:0.0036},0).wait(1).to({regX:0.5,regY:0.5,x:149.7,y:44.35,alpha:0},0).wait(111));

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