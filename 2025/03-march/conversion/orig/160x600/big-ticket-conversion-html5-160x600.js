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
	this.instance.setTransform(-288,-870,1.4938,1.4938);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_mc, new cjs.Rectangle(-288,-870,576.6,310.70000000000005), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgMAeIgDgBIgCgBIgBgMIAFABIAFABIADgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAIACgEIgCAAIgBAAIgHgBQgCgCgBgDQgCgDACgEIAFgcIAMAAIgFAbIAAACIACAAIAAAAIABAAIACgOIADgPIAOAAIgJAqQgCAJgFAEQgEAEgHAAIgFAAg");
	this.shape.setTransform(42.5,6.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAeIAMg7IANAAIgNA7g");
	this.shape_1.setTransform(40.025,4.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAdIgHgBIAMg5IAMAAIgDAPIACAAQAIAAACADQADAEgCAIIgDANQgBAIgFAEQgEAEgHAAIgHgBgAgCASIABAAIABgBIACgDIACgNIAAgCIgCgBIAAAAg");
	this.shape_2.setTransform(37.1194,4.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAfIAJgqIAMAAIgJAqgAAAgSQAAgCAAgEIACgEQACgCADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQgBAEgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_3.setTransform(34.6167,4.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAWIgHgBIAEgNIAFACIAEAAIADAAIABgBIAAgCIgBgBIgBgBIgCAAQgEgCgCgDQgBgDABgGIADgGQACgDADgCQADgCAEAAIAFABIAGABIgDAMIgFgBIgDgBIgDABIgBABIAAACIACABIABAAIABABIAFADIACADIAAAGIgDAIQgCADgEACQgEACgEAAIgFgBg");
	this.shape_4.setTransform(31.975,5.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBAWIAGgdIgBgCIgBAAIgBAAIAAAAIgGAfIgNAAIAJgpIAIgCIAHAAQAGAAADADQADADgBAHIgHAeg");
	this.shape_5.setTransform(28.6625,5.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOATQgCgEABgJIADgMQACgIAEgEQAFgEAGAAQAHAAADAEQADAEgCAIIgCAMQgCAJgFAEQgEAEgGAAQgIAAgDgEgAABgJIgBADIgCANIAAACIABABIABgBIAAgCIADgNIAAgDIAAgBIgCABg");
	this.shape_6.setTransform(25.3469,5.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAeIANg7IAFAAIAFAAIAEAAQAIAAACADQADAEgCAJIgDANQgBAHgFAEQgEAEgHAAIgBAAIgEAPgAAAADIAAAAIACgBIACgCIACgNIAAgDIgCgBIAAAAg");
	this.shape_7.setTransform(21.6694,6.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAWIgHgBIAEgNIAFACIAEAAIADAAIABgBIAAgCIgBgBIgBgBIgCAAQgEgCgCgDQgBgDABgGIADgGQACgDADgCQADgCAEAAIAFABIAGABIgDAMIgFgBIgDgBIgDABIgBABIAAACIACABIABAAIABABIAFADIACADIAAAGIgDAIQgCADgEACQgEACgEAAIgFgBg");
	this.shape_8.setTransform(18.625,5.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNASQgDgEABgJIADgLQABgIAFgEQAFgEAGAAQAHAAADAEQACAEgCAIIgCAKIgOAAIgBACQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEABIADAAIADAAIgCALIgFABIgDABQgIAAgEgFgAABgKIgBADIAAADIADAAIABgDIAAgDIgBgBIgCABg");
	this.shape_9.setTransform(15.5571,5.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAeIAAgXIgBAAIgFAXIgOAAIANg7IAOAAQAGAAADACQAEACABAEIgBAJIgBAEIgDAIIgEAEIABAagAAAgDIABAAIACgBQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBIABgFQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgCgBIgBAAg");
	this.shape_10.setTransform(11.925,4.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLAeIgFgBIgCgBIAAgMIAFABIAEABIAEgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAIABgEIgBAAIgBAAIgHgBQgDgCgCgDQgBgDABgEIAGgcIAMAAIgEAbIAAACIABAAIAAAAIAAAAIAEgOIADgPIAMAAIgJAqQgCAJgEAEQgEAEgIAAIgDAAg");
	this.shape_11.setTransform(7.35,6.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOATQgDgDABgHIABAAQABgHAEgCQAEgEAGAAIABAAIACAAIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgDgBIgFABIgFABIAGgMIACgBIADgBIADAAQAGAAADACQADABABAEQABADgCAFIgFAbIgJACIgGABQgHgBgDgDgAgBAFIgBACIAAABQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAABAAIAAAAIABgIIgBAAIgBABg");
	this.shape_12.setTransform(3.8807,5.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMAeIAMg7IANAAIgNA7g");
	this.shape_13.setTransform(1.475,4.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAeIANg7IANAAQAHAAADACQADACABAEIAAAJIgBAFQgCAGgCADQgEADgDABQgFACgEAAIAAAAIgFAWgAAAgCIABAAIACgBIABgDIACgGIAAgDIgCgBIgBAAg");
	this.shape_14.setTransform(-1.4417,4.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-4.8,0,50.699999999999996,11.3), null);


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
	this.shape.graphics.f("#FFE400").s().p("AgfAzQgOgGgJgNQgJgMAAgUQAAgZASgPQASgPAbgBQAcABASAPQASAPAAAZQAAAUgJAMQgJANgOAGQgPAGgRAAQgQAAgPgGg");
	this.shape.setTransform(132.675,-201.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AAWD5IgWkqIgVEqIiTAAIgknxIB4AAIAGF9IAhl9IBbAAIAhF9IAGl9IB4AAIgkHxg");
	this.shape_1.setTransform(102.6,-221.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AAAEBQhBgBghgjQghgkAAhCIAAjsQAAhGAjgiQAjgjA9ABIABAAQBBAAAhAkQAhAjAABDIAADsQAABFgiAjQgjAig9AAgAgLiPQgEAFAAAMIAAD+QAAALAEAFQAEAFAHAAIAAAAQAIAAAEgFQAEgFAAgLIAAj+QAAgMgEgFQgEgFgIAAIAAAAQgIAAgDAFg");
	this.shape_2.setTransform(65.725,-221.6004);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AgBD5Igfk7IAAE7IhyAAIAAnxICVAAIAeEzIAAkzIBzAAIAAHxg");
	this.shape_3.setTransform(34.1,-221.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("Ag4D5IAAmBIhGAAIAAhwID9AAIAABwIhGAAIAAGBg");
	this.shape_4.setTransform(-3.45,-221.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AhtD5IAAnxIDaAAIAABqIhpAAIAABVIBVAAIAABqIhVAAIAABeIBqAAIAABqg");
	this.shape_5.setTransform(-28.2,-221.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AAQD5IgsjkIAADkIhyAAIAAnxIByAAIAADjIArjjIB5AAIg+DrIBGEGg");
	this.shape_6.setTransform(-56.6,-221.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AAREBQhGgBgkglQgkgnAAhKIAAjTQAAhLAkgmQAkgmBGAAIAAAAQAeAAAYAFQAYAFAWALIgpBbQgJgCgLgBIgTgCIgBAAQgXAAgLAOQgLAOAAAbIAAC9QABAbANAOQAOAOAXAAIABAAQAKAAAKgCQALgCAMgFIAoBbQgZAMgaAHQgaAGggAAg");
	this.shape_7.setTransform(-85.375,-221.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("Ag4D5IAAnxIBxAAIAAHxg");
	this.shape_8.setTransform(-107.4,-221.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("Ag5D5IAAmBIhFAAIAAhwID9AAIAABwIhGAAIAAGBg");
	this.shape_9.setTransform(-127.95,-221.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AAVD5Igoi+IgIAAIAAC+IhxAAIAAnxIB5AAQA3AAAfASQAfARAMAeQANAfgBAqIAAAjQAAAngKAaQgJAZgSAPIA4DbgAgbggIAGAAQAOABAHgIQAFgGAAgRIAAgwQAAgQgFgHQgGgIgPABIgGAAg");
	this.shape_10.setTransform(90.45,-293.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AhDDuQgegOgSgeQgQgdAAgsIAAl0IB0AAIAAF3QAAALAEAFQAEAFAHAAQAJAAADgFQADgGAAgKIAAl3IB2AAIAAF0QgBAngPAeQgOAdgdARQgdAQgsAAQgnAAgdgOg");
	this.shape_11.setTransform(58.75,-293.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AAAEBQhBgBghgjQghgkAAhCIAAjsQAAhGAjgiQAjgjA9ABIABAAQBBAAAhAkQAhAjAABDIAADsQAABGgiAiQgjAig9AAgAgLiPQgEAFAAAMIAAD+QAAALAEAFQAEAFAHAAIAAAAQAIAAAEgFQAEgFAAgLIAAj+QAAgMgEgFQgEgFgIAAIAAAAQgIAAgDAFg");
	this.shape_12.setTransform(27.975,-294.0504);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("Ag4D5IAAiNIhflkIB2AAIAiCmIAiimIB1AAIhfFkIAACNg");
	this.shape_13.setTransform(-2.95,-293.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("Ag5D5IAAmBIhFAAIAAhwID9AAIAABwIhGAAIAAGBg");
	this.shape_14.setTransform(-39.75,-293.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AhtD5IAAnxIDaAAIAABqIhpAAIAABVIBVAAIAABqIhVAAIAABeIBqAAIAABqg");
	this.shape_15.setTransform(-64.45,-293.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("AhiDeQghgiAAhGIAAjrQAAgsATgeQATggAhgQQAhgRAqAAQAdAAAeAJQAfAHAbAPIgpBjQgOgIgQgDQgQgEgQgBQgXAAgKANQgLAMAAAZIAADaQAAAMAFAGQAEAFAIAAIAJgBIAEgCIAAiyIBsAAIAAD9QgUALgSAIQgSAJgUAEQgTAEgYAAQhFAAghgjg");
	this.shape_16.setTransform(-91.275,-294.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag4D5IAAmAIhGAAIAAhxID9AAIAABxIhGAAIAAGAg");
	this.shape_17.setTransform(61.6,-366.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag4D5IAAnxIBxAAIAAHxg");
	this.shape_18.setTransform(41,-366.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAkD5IgJhhIg2AAIgJBhIhvAAIBBnxIClAAIBCHxgAAQAtIgNiEIgDgpIgBApIgPCEIAgAAg");
	this.shape_19.setTransform(17.35,-366.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAWD5IgWkrIgUErIiUAAIglnxIB5AAIAGF+IAhl+IBbAAIAhF+IAGl+IB5AAIglHxg");
	this.shape_20.setTransform(-20.55,-366.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAlD5IgJhhIg3AAIgJBhIhwAAIBCnxIClAAIBBHxgAAQAtIgNiEIgDgpIgCApIgOCEIAgAAg");
	this.shape_21.setTransform(-58.4,-366.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhCD6QgdgGgcgLIAehoQAVAJARAGQARAFAOAAQAVAAAJgIQAKgHAAgRIAAgDQAAgOgKgQQgKgPgYgYIgWgVQgUgUgPgTQgPgUgHgYQgIgYAAghIAAgBQAAhCAhgkQAhgkA6gBQAXABAbAFQAcAGAbAMIgdBfIgggIQgOgDgIAAQgTAAgKAIQgJAIAAAQIAAABQAAANAKAOIAeAfIALAMIAMAMQAVAUAPASQAPAUAJAZQAIAZAAAkIAAABQAAAugQAgQgQAggeARQgdARgmAAQggAAgdgGg");
	this.shape_22.setTransform(87.025,-438.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgBD5Igfk7IAAE7IhzAAIAAnxICWAAIAeEzIAAkzIBzAAIAAHxg");
	this.shape_23.setTransform(57.5,-438.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag4D5IAAnxIBxAAIAAHxg");
	this.shape_24.setTransform(33.3,-438.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAWD5IgWkrIgVErIiTAAIgknxIB4AAIAGF+IAhl+IBbAAIAhF+IAGl+IB4AAIgkHxg");
	this.shape_25.setTransform(3.95,-438.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhiDeQghgjAAhFIAAjrQAAgrATggQATgfAhgRQAhgPAqgBQAdAAAeAIQAfAJAbAPIgpBiQgOgHgQgFQgQgEgQAAQgXAAgKAMQgLANAAAaIAADZQAAAMAFAGQAEAGAIgBIAJgBIAEgCIAAizIBsAAIAAD+QgUAMgSAIQgSAIgUAEQgTAEgYAAQhFAAghgjg");
	this.shape_26.setTransform(-39.775,-438.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag4D5IAAnxIBxAAIAAHxg");
	this.shape_27.setTransform(-62.45,-438.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AiED5IAAnxIB9AAQAmAAAfAMQAfANARAbQARAbABArIAAAMQAAAmgMAYQgNAYgcAMQAeALAOAYQAOAZAAArIAAAeQAAArgQAdQgRAegdAPQgdAPgoAAgAgSCNIAHAAQANAAAFgHQAGgHgBgNIAAgyQABgNgFgHQgFgIgOAAIgHAAgAgSg2IAIAAQAOAAAFgIQAFgHAAgMIAAgfQAAgOgEgHQgFgHgPAAIgIAAg");
	this.shape_28.setTransform(-84.875,-438.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub_caption_mc, new cjs.Rectangle(-142.9,-477.9,285.9,309.59999999999997), null);


(lib.secondprize_mc = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.secondprize_mc, new cjs.Rectangle(-139,-123.5,278,247), null);


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
	this.instance.setTransform(-173,-829,1.2421,1.2421);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promo_mc, new cjs.Rectangle(-173,-829,345.3,356.5), null);


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
	this.shape.graphics.f("#FFE400").s().p("AgfAzQgOgGgJgMQgJgOAAgTQAAgZASgQQASgPAbAAQAcAAASAPQASAQAAAZQAAATgJAOQgJAMgOAGQgPAGgRAAQgQAAgPgGg");
	this.shape.setTransform(78.025,-87.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AgBD5Igfk7IAAE7IhzAAIAAnxICWAAIAeEzIAAkzIByAAIAAHxg");
	this.shape_1.setTransform(53.2,-107.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("Ag4D5IAAnxIBxAAIAAHxg");
	this.shape_2.setTransform(29,-107.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AAVD5IgVkrIgVErIiTAAIgknxIB4AAIAGF+IAhl+IBbAAIAhF+IAGl+IB4AAIgkHxg");
	this.shape_3.setTransform(-0.35,-107.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AAAEBQhBgBghgjQghgkAAhCIAAjsQAAhGAjgiQAjgjA9ABIABAAQBBAAAhAkQAhAjAABDIAADsQAABGgiAiQgjAig9AAgAgLiPQgEAGAAALIAAD+QAAALAEAFQAEAFAHAAIAAAAQAIAAAEgFQAEgFAAgLIAAj+QAAgMgEgFQgEgFgIAAIAAAAQgIAAgDAFg");
	this.shape_4.setTransform(-45.175,-107.7004);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("Ag5D5IAAmAIhFAAIAAhxID9AAIAABxIhGAAIAAGAg");
	this.shape_5.setTransform(-73.25,-107.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AhCD5QgdgFgcgMIAehmQAVAIARAFQARAGAOAAQAVAAAJgIQAKgIAAgQIAAgDQAAgNgKgQQgKgQgYgYIgWgVQgUgUgPgTQgPgUgHgYQgIgYAAgiIAAgBQAAhBAhgkQAhgkA6AAQAXgBAbAHQAcAGAbAKIgdBgIgggIQgOgDgIAAQgTAAgKAIQgJAIAAAPIAAADQAAAMAKANIAeAgIALAMIAMAMQAVAUAPASQAPAUAJAZQAIAZAAAkIAAABQAAAugQAfQgQAhgeARQgdARgmABQggAAgdgIg");
	this.shape_6.setTransform(85.875,-180.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AhtD5IAAnxIDaAAIAABqIhpAAIAABVIBVAAIAABqIhVAAIAABeIBqAAIAABqg");
	this.shape_7.setTransform(61.25,-180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AAREBQhGgBgkglQgkgnAAhKIAAjTQAAhLAkgmQAkgmBGAAIAAAAQAeAAAYAFQAYAFAWALIgpBbQgJgCgLgBIgTgCIgBAAQgXAAgLAOQgLAOAAAbIAAC9QABAbANAOQAOAOAXAAIABAAQAKAAAKgCQALgCAMgFIAoBbQgZAMgaAHQgaAGggAAg");
	this.shape_8.setTransform(36.425,-180.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AgBD5Igfk7IAAE7IhzAAIAAnxICWAAIAeEzIAAkzIBzAAIAAHxg");
	this.shape_9.setTransform(5.4,-180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AAkD5IgJhhIg2AAIgJBhIhvAAIBBnxIClAAIBCHxgAAQAuIgOiFIgCgqIgBAqIgPCFIAgAAg");
	this.shape_10.setTransform(-27.3,-180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE400").s().p("AAPD5IAAjFIgeAAIAADFIhyAAIAAnxIByAAIAAC8IAeAAIAAi8IBzAAIAAHxg");
	this.shape_11.setTransform(-58.225,-180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE400").s().p("AAREBQhGgBgkglQgkgnAAhKIAAjTQAAhLAkgmQAkgmBGAAIAAAAQAeAAAYAFQAYAFAWALIgpBbQgJgCgLgBIgTgCIgBAAQgXAAgLAOQgLAOAAAbIAAC9QABAbANAOQAOAOAXAAIABAAQAKAAAKgCQALgCAMgFIAoBbQgZAMgaAHQgaAGggAAg");
	this.shape_12.setTransform(-84.425,-180.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE400").s().p("AhtD5IAAnxIDaAAIAABqIhpAAIAABVIBVAAIAABpIhVAAIAABfIBqAAIAABqg");
	this.shape_13.setTransform(113.65,-252.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE400").s().p("AAUD5Igmi+IgIAAIAAC+IhyAAIAAnxIB6AAQA2AAAfARQAfASAMAfQAMAeAAAqIAAAkQAAAmgKAaQgKAZgRAPIA4DbgAgaggIAFAAQAPAAAGgGQAGgHgBgRIAAgwQABgQgGgHQgGgIgPABIgFAAg");
	this.shape_14.setTransform(84.8,-252.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE400").s().p("AAAEAQhBAAghgkQghgjAAhCIAAjsQAAhGAjgiQAjgjA9AAIABAAQBBABAhAjQAhAkAABDIAADsQAABGgiAiQgjAhg9AAgAgLiPQgEAGAAALIAAD+QAAALAEAFQAEAFAHAAIAAAAQAIAAAEgFQAEgFAAgLIAAj+QAAgMgEgFQgEgFgIAAIAAAAQgIAAgDAFg");
	this.shape_15.setTransform(53.725,-252.5004);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE400").s().p("ABRD5IAAl1IgEA6IgiE7IhWAAIgik7IgEg6IAAF1IhuAAIAAnxICtAAIAQDsIACAlIADglIARjsICsAAIAAHxg");
	this.shape_16.setTransform(17.6,-252.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE400").s().p("AAPD5IAAjEIgeAAIAADEIhyAAIAAnxIByAAIAAC8IAeAAIAAi8IBzAAIAAHxg");
	this.shape_17.setTransform(-26.325,-252.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE400").s().p("Ag5D5IAAmAIhFAAIAAhxID9AAIAABxIhGAAIAAGAg");
	this.shape_18.setTransform(-53.55,-252.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE400").s().p("Ag4D5IAAnxIBxAAIAAHxg");
	this.shape_19.setTransform(-74.15,-252.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE400").s().p("AAWD5IgWkrIgVErIiTAAIgknxIB4AAIAGF+IAhl+IBbAAIAhF+IAGl+IB4AAIgkHxg");
	this.shape_20.setTransform(-103.5,-252.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAPD5IAAjEIgeAAIAADEIhyAAIAAnxIByAAIAAC8IAeAAIAAi8IBzAAIAAHxg");
	this.shape_21.setTransform(66.125,-324.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAREBQhGgBgkglQgkgnAAhKIAAjTQAAhLAkgmQAkgmBGAAIAAAAQAeAAAYAFQAYAFAWALIgpBbQgJgCgLgBIgTgCIgBAAQgXAAgLAOQgLAOAAAbIAAC9QABAbANAOQAOAOAXAAIABAAQAKAAAKgCQALgCAMgFIAoBbQgZAMgaAHQgaAGggAAg");
	this.shape_22.setTransform(39.925,-324.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAVD5Igoi+IgIAAIAAC+IhxAAIAAnxIB5AAQA3AAAfARQAfARAMAgQANAegBAqIAAAkQAAAmgKAaQgJAZgSAPIA4DbgAgbggIAGAAQAOAAAHgGQAFgHAAgRIAAgwQAAgQgFgHQgGgIgPABIgGAAg");
	this.shape_23.setTransform(9.45,-324.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAkD5IgJhhIg2AAIgJBhIhvAAIBBnxIClAAIBCHxgAAQAtIgNiEIgDgpIgCApIgOCEIAgAAg");
	this.shape_24.setTransform(-22.6,-324.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ABRD5IAAl1IgEA6IgiE7IhWAAIgik7IgEg6IAAF1IhuAAIAAnxICtAAIAQDsIACAlIADglIARjsICsAAIAAHxg");
	this.shape_25.setTransform(-59.8,-324.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhtD5IAAnxIDaAAIAABqIhpAAIAABVIBWAAIAABpIhWAAIAABfIBqAAIAABqg");
	this.shape_26.setTransform(112.25,-397.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag4D5IAAmBIhGAAIAAhwID9AAIAABwIhGAAIAAGBg");
	this.shape_27.setTransform(86.45,-397.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAkD5IgJhhIg2AAIgJBhIhvAAIBBnxIClAAIBCHxgAARAuIgPiFIgCgqIgBAqIgPCFIAhAAg");
	this.shape_28.setTransform(57.3,-397.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAUD5Igmi+IgJAAIAAC+IhyAAIAAnxIB7AAQA2AAAfASQAfAQAMAfQANAfgBAqIAAAjQAAAngJAaQgLAZgRAPIA5DbgAgbggIAGAAQAPAAAGgHQAGgGgBgRIAAgwQABgQgGgHQgGgHgPAAIgGAAg");
	this.shape_29.setTransform(25.25,-397.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AiED5IAAnxIB9AAQAmAAAfAMQAfANARAbQARAbABArIAAANQAAAkgMAZQgNAZgcAMQAeAKAOAYQAOAZAAArIAAAeQAAArgQAeQgRAdgdAPQgdAPgoAAgAgSCNIAHAAQANAAAFgHQAGgHgBgNIAAgxQABgOgFgIQgFgGgOAAIgHAAgAgSg3IAIAAQAOABAFgIQAFgHAAgNIAAgeQAAgNgEgIQgFgHgPAAIgIAAg");
	this.shape_30.setTransform(-5.625,-397.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhtD5IAAnxIDaAAIAABqIhpAAIAABVIBWAAIAABpIhWAAIAABfIBqAAIAABqg");
	this.shape_31.setTransform(-32.45,-397.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhzD5IAAnxIByAAIAAGBIB1AAIAABwg");
	this.shape_32.setTransform(-59.425,-397.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhtD5IAAnxIDaAAIAABqIhpAAIAABVIBVAAIAABpIhVAAIAABfIBqAAIAABqg");
	this.shape_33.setTransform(-84.6,-397.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAREBQhGgBgkglQgkgnAAhKIAAjTQAAhLAkgmQAkgmBGAAIAAAAQAeAAAYAFQAYAFAWALIgpBbQgJgCgLgBIgTgCIgBAAQgXAAgLAOQgLAOAAAbIAAC9QABAbANAOQAOAOAXAAIABAAQAKAAAKgCQALgCAMgFIAoBbQgZAMgaAHQgaAGggAAg");
	this.shape_34.setTransform(-109.425,-397.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AiDD5IAAnxIB6AAQAoAAAgASQAfASATAhQASAgABAtIAADKQgBAugSAhQgTAhgfASQggATgnAAgAgRCNIAEAAQARABAFgJQAFgIAAgUIAAjXQAAgTgHgFQgGgHgOABIgEAAg");
	this.shape_35.setTransform(32.675,-469.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgBD5Iggk7IAAE7IhyAAIAAnxICWAAIAeEzIAAkzIByAAIAAHxg");
	this.shape_36.setTransform(1.1,-469.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAkD5IgJhhIg2AAIgJBhIhvAAIBBnxIClAAIBCHxgAAQAuIgNiFIgDgqIgCAqIgOCFIAgAAg");
	this.shape_37.setTransform(-31.6,-469.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daily_caption_mc, new cjs.Rectangle(-127.2,-508.8,254.5,454.40000000000003), null);


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
	this.instance.setTransform(-269,-769,2.206,2.206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-269,-769,538.3,103.70000000000005), null);


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
	this.instance.setTransform(-104,-835,1.89,1.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bt_logo, new cjs.Rectangle(-104,-835,207.9,119.10000000000002), null);


// stage content:
(lib.bigticketconversionhtml5160x600 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(117.2,587.7,0.0157,0.0157,0,0,0,493.1,461.3);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(76.15,588.05,1.4697,1.4697,0,0,0,23.2,5.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAmIAAhKIATAAQAEAAAFACQAFADADAFQADAFAAAGIAAAeQAAAHgDAFQgDAFgFADQgFACgEABgAgBAVIAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIABgEIAAggIgBgDIgCgBIAAAAg");
	this.shape.setTransform(150.45,572.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAgAAIAAAPIgPAAIAAAOIAMAAIAAAPIgMAAIAAANIAQAAIAAARg");
	this.shape_1.setTransform(146.475,572.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAFAmIgBgPIgHAAIgCAPIgQAAIAJhKIAYAAIAKBKgAACAHIgCgTIAAgGIAAAGIgCATIAEAAg");
	this.shape_2.setTransform(142.125,572.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAmIgEgvIAAAvIgRAAIAAhKIAWAAIAEAtIAAgtIARAAIAABKg");
	this.shape_3.setTransform(136.025,572.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAmIAAhKIARAAIAABKg");
	this.shape_4.setTransform(132.375,572.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAmIgIgDIAEgQIAGACIAEABQABAAABAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgBIgBgFIgFgFIgDgEIgFgEIgEgHIAAgIIAAgBQAAgJAEgGQAFgGAJABIAHABIAIACIgFAOIgEgBIgEgBQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAABIABADIAEAGIACABIACACIAFAFIAEAHIABAJQgBAHgCAEQgDAFgDADQgFADgFgBIgJAAg");
	this.shape_5.setTransform(128.1,572.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAgAAIAAAPIgPAAIAAAOIAMAAIAAAPIgMAAIAAANIAQAAIAAARg");
	this.shape_6.setTransform(124.375,572.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAhQgFgGAAgLIAAgfQAAgLAFgGQAGgGAKABIAIAAIAHADIgHANIgDgBIgDAAQgDAAgCADQAAACAAADIAAAcQAAAFABABQACACADAAIADAAIAEgBIAGAOIgIADIgIAAQgKAAgGgFg");
	this.shape_7.setTransform(120.675,572.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAmIAAhKIARAAIAABKg");
	this.shape_8.setTransform(117.375,572.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AADAmIgFgdIgBAAIAAAdIgSAAIAAhKIATAAQAHAAAFACQAEADACAFQACAEABAGIAAAGQAAAGgCAEQgBACgDACIAJAigAgDgEIAAAAIADgBIABgDIAAgIIgBgDIgDgBIAAAAg");
	this.shape_9.setTransform(113.85,572.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAmIAAhKIATAAQAHAAAFACQAEADACAFQACAEAAAGIAAAHQAAAHgDAEQgDAFgEACQgFABgFAAIgBAAIAAAcgAgBgDIAAAAIACgBIABgDIAAgJIgBgDQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_10.setTransform(109.175,572.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGAwIAAhfIAOAAIAABfg");
	this.shape_11.setTransform(101.9,573.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAmIAAgVIgOg1IASAAIAEAYIAFgYIASAAIgOA1IAAAVg");
	this.shape_12.setTransform(94.525,572.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAQAAIAAA4IARAAIAAASg");
	this.shape_13.setTransform(90,572.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAmIAAhKIATAAQAHAAAFACQAEADACAFQACAEAAAGIAAAHQAAAHgDAEQgDAFgEACQgFABgFAAIgBAAIAAAcgAgBgDIAAAAIACgBIABgDIAAgJIgBgDQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_14.setTransform(85.725,572.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAmIAAhKIATAAQAHAAAFACQAEADACAFQACAEAAAGIAAAHQAAAHgDAEQgDAFgEACQgFABgFAAIgBAAIAAAcgAgBgDIAAAAIACgBIABgDIAAgJIgBgDQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape_15.setTransform(81.225,572.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAFAmIgBgPIgHAAIgCAPIgQAAIAJhKIAYAAIAKBKgAACAHIgCgTIAAgGIAAAGIgCATIAEAAg");
	this.shape_16.setTransform(76.575,572.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJAmIgJgDIAFgQIAFACIAGABQAAAAABAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAIAAgBIgCgFIgEgFIgDgEIgGgEIgDgHIgCgIIAAgBQABgJAEgGQAFgGAJABIAHABIAIACIgEAOIgFgBIgDgBQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIABADIAFAGIABABIACACIAGAFIADAHIABAJQAAAHgCAEQgDAFgEADQgEADgFgBIgJAAg");
	this.shape_17.setTransform(71,572.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEAQIgDgfIAPAAIgDAfg");
	this.shape_18.setTransform(67.825,570.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNAhQgFgGAAgLIAAgfQAAgLAFgGQAGgGAKABIAIAAIAHADIgHANIgDgBIgDAAQgDAAgCADQAAACAAADIAAAcQAAAFABABQACACADAAIADAAIAEgBIAGAOIgIADIgIAAQgKAAgGgFg");
	this.shape_19.setTransform(64.875,572.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAiQgFgFgBgKIAAgJQABgFACgEQADgCAEAAIgDgHIAAgGIAAgEQgBgHACgFQABgEAEgBQADgCAIAAQAEAAADABQADACACAEQABAEAAAIIAAAEIgBAGIgDAEQgCADgFABIAHAJIAAgFIgBgEIAOAAIAAAKIgBAHQAAADgCADIAKAPIgSAAIgBgDIgGADIgEAAQgMAAgGgEgAgIALIAAADIAAADQgBADACACQABACAFAAIABAAIAAgBIgIgNgAgFgWIAAADIAAAJIAAABIAAABQABAAAAgBQAAAAABAAQAAAAAAAAQABgBAAAAIABgDIAAgGIAAgDIgCgBQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_20.setTransform(59.8,572.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgIAmIAAg5IgKAAIAAgRIAlAAIAAARIgLAAIAAA5g");
	this.shape_21.setTransform(54.95,572.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHAwIAAhfIAOAAIAABfg");
	this.shape_22.setTransform(47.95,573.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAmIgJgEIAGgOIAFACIAEABQABAAABAAQAAAAABAAQAAgBAAAAQAAAAAAgBQABgBABgDIAAgHIgBgCIgBgCIgEgBIgDAAIAAgLIACAAIAFgBIAAgCIABgDIAAgEIgBgFQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBgBgBAAIgDABIgEADIgGgOIAJgDIAIgBQAHgBAFAGQAGAGAAAJIAAABQAAAGgCAEQgDAEgEABQAFAAADAEQACAEAAAHIAAAEQAAAKgGAFQgFAFgIAAIgJAAg");
	this.shape_23.setTransform(40.8,572.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgMAmIAMg7IgRAAIAAgPIAiAAIAAAPIgMA7g");
	this.shape_24.setTransform(36.8,572.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAmIAAgPIAKgNQAFgGADgGQADgFAAgFIAAgBQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgBgCIgDAAIgGAAIgEABIgFgOIAIgDIAKgBQAGAAAEADQAFADACAFQACAGAAAGQAAAGgCAFQgBAEgDAFIgGAJIgHAHIARAAIAAAQg");
	this.shape_25.setTransform(32.875,572.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJAmIgJgDIAFgQIAFACIAGABQAAAAABAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgBIgBgFIgEgFIgEgEIgFgEIgEgHIgBgIIAAgBQAAgJAGgGQAFgGAHABIAIABIAIACIgEAOIgFgBIgDgBQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIABADIAFAGIACABIABACIAGAFIADAHIABAJQABAHgDAEQgCAFgFADQgEADgFgBIgJAAg");
	this.shape_26.setTransform(27.6,572.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAgAAIAAAPIgPAAIAAAOIAMAAIAAAPIgMAAIAAANIAQAAIAAARg");
	this.shape_27.setTransform(23.875,572.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgIAmIAAhKIARAAIAABKg");
	this.shape_28.setTransform(20.775,572.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AADAmIgFgdIgBAAIAAAdIgSAAIAAhKIATAAQAIAAAEACQAEADADAFQACAEAAAGIAAAGQgBAGgBAEQgBACgDACIAIAigAgDgEIAAAAIADgBIABgDIAAgIIgBgDIgDgBIAAAAg");
	this.shape_29.setTransform(17.3,572.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQAmIAAhKIAgAAIAAAPIgPAAIAAAOIAMAAIAAAPIgMAAIAAANIAQAAIAAARg");
	this.shape_30.setTransform(13.125,572.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAmIgJgDIAFgQIAFACIAGABQAAAAABAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAIAAgBIgCgFIgEgFIgEgEIgFgEIgEgHIgBgIIAAgBQABgJAFgGQAFgGAHABIAIABIAIACIgEAOIgFgBIgDgBQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIABADIAFAGIABABIACACIAGAFIADAHIABAJQAAAHgCAEQgDAFgEADQgEADgFgBIgJAAg");
	this.shape_31.setTransform(9.25,572.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(303));

	// footer_bg
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A5050F").s().p("AsfA/IAAh8IY/AAIAAB8g");
	this.shape_32.setTransform(80,593.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(303));

	// logo
	this.instance_2 = new lib.bt_logo();
	this.instance_2.setTransform(80,378.25,0.4091,0.4091);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(195).to({alpha:0},16).to({_off:true},76).wait(16));

	// cta
	this.instance_3 = new lib.cta_mc();
	this.instance_3.setTransform(243.35,550.5,0.2872,0.2872,0,0,0,0,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(211).to({_off:false},0).wait(1).to({regX:0.1,regY:-717.2,x:242.85,y:344.35,alpha:0.0032},0).wait(1).to({x:241,y:344.15,alpha:0.0145},0).wait(1).to({x:237.3,y:343.75,alpha:0.0371},0).wait(1).to({x:230.8,y:343.05,alpha:0.077},0).wait(1).to({x:219.4,y:341.85,alpha:0.1467},0).wait(1).to({x:199.75,y:339.7,alpha:0.2672},0).wait(1).to({x:175.35,y:337.05,alpha:0.4164},0).wait(1).to({x:151.1,y:334.45,alpha:0.5648},0).wait(1).to({x:130.85,y:332.25,alpha:0.6887},0).wait(1).to({x:115,y:330.5,alpha:0.7859},0).wait(1).to({x:102.5,y:329.15,alpha:0.8625},0).wait(1).to({x:92.6,y:328.1,alpha:0.9229},0).wait(1).to({x:86.1,y:327.4,alpha:0.9628},0).wait(1).to({x:82.35,y:327,alpha:0.9857},0).wait(1).to({x:80.55,y:326.8,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:80,y:532.8,alpha:1},0).wait(76));

	// ticket
	this.instance_4 = new lib.ticket_mc();
	this.instance_4.setTransform(-119.45,470,0.399,0.399);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(195).to({_off:false},0).wait(1).to({regX:0.3,regY:-714.6,x:-118.7,y:184.85},0).wait(1).to({x:-116.45},0).wait(1).to({x:-111.9},0).wait(1).to({x:-103.95},0).wait(1).to({x:-90.05},0).wait(1).to({x:-66.05},0).wait(1).to({x:-36.25},0).wait(1).to({x:-6.65},0).wait(1).to({x:18.05},0).wait(1).to({x:37.45},0).wait(1).to({x:52.7},0).wait(1).to({x:64.75},0).wait(1).to({x:72.7},0).wait(1).to({x:77.3},0).wait(1).to({x:79.5},0).wait(1).to({regX:0.1,regY:0,x:80.05,y:470},0).wait(92));

	// main_caption
	this.instance_5 = new lib.sub_caption_mc();
	this.instance_5.setTransform(78.6,572.85,0.5,0.5,0,0,0,0,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).wait(1).to({regX:-0.8,regY:-330.2,x:78.2,y:407.65,alpha:0.0037},0).wait(1).to({y:407.5,alpha:0.0167},0).wait(1).to({y:407.25,alpha:0.0435},0).wait(1).to({y:406.75,alpha:0.0919},0).wait(1).to({y:405.85,alpha:0.1816},0).wait(1).to({y:404.45,alpha:0.3248},0).wait(1).to({y:402.8,alpha:0.4878},0).wait(1).to({y:401.35,alpha:0.6345},0).wait(1).to({y:400.2,alpha:0.7499},0).wait(1).to({y:399.3,alpha:0.8388},0).wait(1).to({y:398.6,alpha:0.9088},0).wait(1).to({y:398.1,alpha:0.9564},0).wait(1).to({y:397.85,alpha:0.9834},0).wait(1).to({y:397.7,alpha:0.9964},0).wait(1).to({regX:0,regY:0.1,x:78.6,y:562.85,alpha:1},0).wait(60).to({y:572.85,alpha:0},16).to({_off:true},1).wait(196));

	// sub_caption
	this.instance_6 = new lib.daily_caption_mc();
	this.instance_6.setTransform(78.6,572.85,0.5,0.5,0,0,0,0,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90).to({_off:false},0).wait(1).to({regX:0.3,regY:-288.3,x:78.75,y:428.6,alpha:0.0032},0).wait(1).to({y:428.5,alpha:0.0145},0).wait(1).to({y:428.25,alpha:0.0371},0).wait(1).to({y:427.85,alpha:0.077},0).wait(1).to({y:427.15,alpha:0.1467},0).wait(1).to({y:425.95,alpha:0.2672},0).wait(1).to({y:424.45,alpha:0.4164},0).wait(1).to({y:423,alpha:0.5648},0).wait(1).to({y:421.75,alpha:0.6887},0).wait(1).to({y:420.75,alpha:0.7859},0).wait(1).to({y:420,alpha:0.8625},0).wait(1).to({y:419.4,alpha:0.9229},0).wait(1).to({y:419,alpha:0.9628},0).wait(1).to({y:418.75,alpha:0.9857},0).wait(1).to({y:418.65,alpha:0.9969},0).wait(1).to({regX:0,regY:0.1,x:78.6,y:562.85,alpha:1},0).wait(74).to({regX:0.3,regY:-288.3,x:79.25,y:418.65},0).wait(1).to({x:81.1},0).wait(1).to({x:84.75},0).wait(1).to({x:91.25},0).wait(1).to({x:102.65},0).wait(1).to({x:122.25},0).wait(1).to({x:146.6},0).wait(1).to({x:170.75},0).wait(1).to({x:190.95},0).wait(1).to({x:206.8},0).wait(1).to({x:219.25},0).wait(1).to({x:229.1},0).wait(1).to({x:235.6},0).wait(1).to({x:239.35},0).wait(1).to({x:241.15},0).wait(1).to({regX:0,regY:0.1,x:241.55,y:562.85},0).to({_off:true},17).wait(91));

	// second_prize
	this.instance_7 = new lib.secondprize_mc();
	this.instance_7.setTransform(-86.25,208.25,0.5432,0.5432,0,0,0,0.2,0.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(82).to({_off:false},0).wait(1).to({regX:0,regY:0,x:-85.8191,y:208.15},0).wait(1).to({x:-83.9621},0).wait(1).to({x:-80.2251},0).wait(1).to({x:-73.6433},0).wait(1).to({x:-62.1424},0).wait(1).to({x:-42.2697},0).wait(1).to({x:-17.6395},0).wait(1).to({x:6.8461},0).wait(1).to({x:27.2887},0).wait(1).to({x:43.3302},0).wait(1).to({x:55.9604},0).wait(1).to({x:65.9323},0).wait(1).to({x:72.5168},0).wait(1).to({x:76.2917},0).wait(1).to({x:78.1319},0).wait(1).to({regX:0.2,regY:0.2,x:78.75,y:208.25},0).wait(82).to({regX:0,regY:0,x:79.1859,y:208.1569},0).wait(1).to({x:81.0603,y:208.1811},0).wait(1).to({x:84.8325,y:208.2298},0).wait(1).to({x:91.4761,y:208.3156},0).wait(1).to({x:103.0851,y:208.4654},0).wait(1).to({x:123.1444,y:208.7244},0).wait(1).to({x:148.0059,y:209.0453},0).wait(1).to({x:172.7216,y:209.3644},0).wait(1).to({x:193.3562,y:209.6307},0).wait(1).to({x:209.5484,y:209.8398},0).wait(1).to({x:222.2973,y:210.0043},0).wait(1).to({x:232.3628,y:210.1343},0).wait(1).to({x:239.0092,y:210.2201},0).wait(1).to({x:242.8196,y:210.2693},0).wait(1).to({x:244.677,y:210.2932},0).wait(1).to({regX:0.2,regY:0.2,x:245.3,y:210.4},0).to({_off:true},17).wait(91));

	// promo
	this.instance_8 = new lib.promo_mc();
	this.instance_8.setTransform(220,472,0.4164,0.4164,0,0,0,0.1,0);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:-0.4,regY:-650.8,x:219.25,y:201.05,alpha:0.0037},0).wait(1).to({x:217.45,alpha:0.0167},0).wait(1).to({x:213.7,alpha:0.0435},0).wait(1).to({x:206.9,alpha:0.0919},0).wait(1).to({x:194.35,alpha:0.1816},0).wait(1).to({x:174.3,alpha:0.3248},0).wait(1).to({x:151.5,alpha:0.4878},0).wait(1).to({x:131,alpha:0.6345},0).wait(1).to({x:114.8,alpha:0.7499},0).wait(1).to({x:102.4,alpha:0.8388},0).wait(1).to({x:92.6,alpha:0.9088},0).wait(1).to({x:85.95,alpha:0.9564},0).wait(1).to({x:82.15,alpha:0.9834},0).wait(1).to({x:80.35,alpha:0.9964},0).wait(1).to({regX:0.1,regY:0,x:80.05,y:472,alpha:1},0).wait(68).to({regX:-0.4,regY:-650.8,x:80.35,y:201.05},0).wait(1).to({x:82.15},0).wait(1).to({x:85.85},0).wait(1).to({x:92.3},0).wait(1).to({x:103.55},0).wait(1).to({x:123.05},0).wait(1).to({x:147.2},0).wait(1).to({x:171.2},0).wait(1).to({x:191.25},0).wait(1).to({x:206.95},0).wait(1).to({x:219.35},0).wait(1).to({x:229.1},0).wait(1).to({x:235.55},0).wait(1).to({x:239.25},0).wait(1).to({x:241.05},0).wait(1).to({regX:0.1,regY:0,x:241.8,y:472},0).to({_off:true},147).wait(58));

	// background
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A5050F").s().p("EgMfAu9MAAAhd5IY/AAMAAABd5g");
	this.shape_33.setTransform(80,299.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(303));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-154.3,299.1,475,301);
// library properties:
lib.properties = {
	id: '8F9B67423E0CC34A8BA2D26890153A40',
	width: 160,
	height: 600,
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