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



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,700);


(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,786,441);


(lib.Bitmap17 = function() {
	this.initialize(img.Bitmap17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,493);


(lib.noisybackground = function() {
	this.initialize(img.noisybackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,2000);// helper functions:

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


(lib.trail2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FECD72").s().p("EgvfAphQhlnJiem5QlLuipcsSQpLr8sXopQovmGm8icIjKptICvAGIAHAAQNEAaEpAgQTxCqSjFEQSiFFJcJ+QFEtfHWr1QAgg0Ahg0IAVgiIL3AAIANAUIBABmQHWL0FHNfIAGgDQEJkOFEjCQFTjLF0iJQE7h0FrhnQFrhmF1hOQF2hNF0g3QGGhCGJgvQF9gqF+gMIIngTIhSJGQm8CaovGHQsXIppML+QpaMQlMOiQidG6hmIag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.trail2, new cjs.Rectangle(-681.7,-267.9,1363.4,535.8), null);


(lib.trail = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EAkAAgFQgagHALgZQAKgYAZgNQBBgOA+AXQAMAFABANQACAWgXAGQgnANgpAFIgSABQgVAAgUgFgA7MbeQgIgCABgJQABgOAOgFQA2gOA7AUQAHAcgfAFQgQADgQAAQghAAgggMgAg1LWQgEgEACgGQAKgZAbgLIAWgEQAngHAmAGQAHABAEAGQANATgXAJQguAUgwAAQgUAAgVgEgEglHAK1QgZgHALgZQAKgYAYgNQBCgOA9AXQAMAFABANQACAWgXAGQgnANgoAFIgSABQgVAAgVgFgEA1OACgQgEgEACgGQAKgZAbgLIAXgEQAngHAmAGQAHABAEAGQANATgXAJQguAUgxAAQgUAAgVgEgAbmhDQgEgEACgGQAKgZAbgLIAXgEQAngHAmAGQAHABAEAGQANATgXAJQguAUgxAAQgUAAgVgEgEBAVgB5IgBgBQgKglApgIQATAAATgCQAvgEAbAlQgwATgzAAQgVAAgWgEgALoymIgBgCQgKgkApgIQATAAATgDQAvgEAbAlQgwATgzAAQgVAAgWgDgEhINgSnIgBgBQgKglAogIQATAAATgCQAvgEAbAlQgwATgzAAQgVAAgVgEgEArigSqQgEgEACgGQAKgZAbgLIAXgEQAngHAmAGQAHABAEAGQANATgXAJQguAUgxAAQgUAAgVgEgAjX8sQgagGALgaQAKgYAZgNQBBgNA+AXQAMAFABAMQACAWgXAHQgnAMgpAFIgSABQgVAAgUgFgEhV1gcrQgEgFACgGQAKgZAcgLIAWgDQAngIAnAHQAGABAEAFQANAUgWAJQgvATgwAAQgVAAgVgDgEBTigfTQgEgEACgGQAKgZAbgLIAXgEQAngHAmAGQAHABAEAGQANATgXAJQguAUgxAAQgUAAgVgEg");
	this.shape.setTransform(-25.9203,-10.6309);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgvfAphQhlnJiem5QlLuipcsSQpLr8sXopQovmGm8icIjKptICvAGIAHAAQNEAaEpAgQTxCqSjFEQSiFFJcJ+QFEtfHWr1QAgg0Ahg0IAVgiIL3AAIANAUIBABmQHWL0FHNfIAGgDQEJkOFEjCQFTjLF0iJQE7h0FrhnQFrhmF1hOQF2hNF0g3QGGhCGJgvQF9gqF+gMIIngTIhSJGQm8CaovGHQsXIppML+QpaMQlMOiQidG6hmIag");

	// Layer_2
	this.instance = new lib.noisybackground();
	this.instance.setTransform(-776,-382);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.trail, new cjs.Rectangle(-681.7,-267.9,1363.4,535.8), null);


(lib.slide = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#BD1435").s().p("AgCBQIhqAAIgfAAIgFgjQAWgMAkgQQCmhIBAgYQgGBDAHBcg");
	this.shape.setTransform(-73.85,75.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AjbArIgCh8IAAgFIBqAAIACAkQAEAwgDAmQgFB6g5AAQgkAAgJhzgAB8AZQgJhCgCgtIgBgZIgCgGQArgUA7gUQAAA9AKB/QAAA4gEAVQgLAtglAAQgdAAgRiAg");
	this.shape_1.setTransform(-62.55,91.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004DAC").s().p("AhMAZIAAgxICZAAIAAAxg");
	this.shape_2.setTransform(77.4,46.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#016BBF").s().p("AiFKqIAA1OQAWgDAlgCIAACoICQAAIgCikIAFAAIApAEIAFABIAPUrIg3AAIAAj1IgBgxIgDlkIiWAAIAAFkIAAAxIAAEUgAhKm/IAAAFIgBDdIAACoICVAAIgCitIgIjoIiKAAg");
	this.shape_3.setTransform(77.275,8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE1A40").s().p("Aq5LyQgJgxgDhsQgDhsEJguQEEgaCTi5QCRi5BMjbQBNjcB1j5QBOimB7gMQAhgDAlAIQAeAHAhAPIABAAQgMgDhFBmQhHBqhfDjQhfDihMC5QhNC6hHBaQhIBaiOAlQiQAlhlAsQhEAdgNCEQhAAYimBJQglAQgWAMIgMhDg");
	this.shape_4.setTransform(-19.7773,-2.3659);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#91000E").s().p("ArrNLQgHhdAGhCQAMiFBEgdQBmgsCPgkQCQglBHhaQBHhaBNi6QBMi6BfjiQBejiBIhqQBEhnAMAEIAAgBQgEgCBDgRQARgEASgDQAVgEAXgCQApgFAvAAQBAAAAzADIAtAEIAFAAIgPEEIgFAAIgpgFIgFAAQgkgFgUAAQgzAAgkACQglABgWADIgFABQg3AIgfAcQgdAagdA/QgMAag4CNQgcBIgxC2QgwCwgjBUQgqBkhkB/QhmB+hQA0QhbA7iqAzQgwAPgpAOQg7AUgsAUIAAAAQgkAQgaAPg");
	this.shape_5.setTransform(15.4917,-1.1031);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC820A").s().p("AkFByQAZgvAhhnQAmhSBOAAQAsAAAUAfIAQAhQAHAOAqBCQgVgjABgCIABAAIACgEQAyhEBQAAQA7AAAdBMQASAxABA9IAAADIgtABQgDgJgKhEQgog2gwABQgpABgWAeIgHALIgEAHQgKAUgHAWQgHAUgEAUQgWACgVAFQAHggAKgaIANAIQASALgWgpIgDgIQgcgygJgNQgOgbgUAAQgvAAghBOQgaBTgIAVQglgIghADg");
	this.shape_6.setTransform(64,-95.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slide, new cjs.Rectangle(-90.7,-107.7,181.4,215.4), null);


(lib.skyalpha = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#00BBFF","#FFFFFF"],[0,1],-41,-184.1,-41.3,463.8).s().p("EinRA08MAAAhp3MFOjAAAMAAABp3g");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.skyalpha, new cjs.Rectangle(-1070.6,-338.7,2141.3,677.5), null);


(lib.sign = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0DFA8").s().p("AhbgEQAqgEAVAAQAeACASgCQAQgDAIgGQAIgHAAgLQAAgNgOgFIgLgDQgOgCgbACQgUAAgyAFIgHAAQACgkAEglIBuAhQAPAFAMAGIAEACQA9AhgsA8Qg4BOhdAgQgNhBgChAg");
	this.shape.setTransform(-0.2144,-15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A4AC9D").s().p("AhWC1Qg5AAAAg2IAAj9QAAg2A5AAICtAAQA5AAAAA2IAAD9QAAA2g5AAg");
	this.shape_1.setTransform(-1.175,-16.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C8B694").s().p("AgSGGIAAk0IgeAAIAAgCIglAAQhkAAAAhjIAAkOQAAhkBkAAICrAAQBkAAAABkIAAEOQAABjhkAAIhGAAIAAACIAeAAIAAE0g");
	this.shape_2.setTransform(-0.975,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sign, new cjs.Rectangle(-19.6,-39,37.3,78.1), null);


(lib.shed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F6A0C").s().p("ABbDsIpJAAIIVnXIHIHXg");
	this.shape.setTransform(-25.55,-29.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#765B13").s().p("AHxEoInJnXIoUHXIhtAAIKLpPIIoJPg");
	this.shape_1.setTransform(-25.725,-35.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9C640E").s().p("AG6EoInTgRIASARIgEAAIonpPIJwAAIHtJFIABABIABACIAGAHg");
	this.shape_2.setTransform(35.625,-35.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A0660A").s().p("AsFAAIJKAAIpKASgAFFAAIgSgRIHUARg");
	this.shape_3.setTransform(2.35,-5.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7F671D").s().p("AjgGEIAAsHIHBAAIgKMHg");
	this.shape_4.setTransform(55.475,31.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A0660A").s().p("ACdGEIAAo0IkmAAIAAI0ImjAAIAPsHIRKAAIAAMHg");
	this.shape_5.setTransform(-22.725,31.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#765B13").s().p("AiTEaIAAo0IEmAAIAAI0g");
	this.shape_6.setTransform(-21.75,41.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shed, new cjs.Rectangle(-85.9,-64.8,177.9,135), null);


(lib.rightarrowshadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.149)").s().p("AoGi8IoOEAIAYrqIS6BQImTEQITqMAIkADtg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rightarrowshadow, new cjs.Rectangle(-104.5,-67.8,209,135.7), null);


(lib.rightarrowfiller = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#666666").s().p("AoGi8IoOEAIAYrqIS6BQImTEQITqMAIkADtg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rightarrowfiller, new cjs.Rectangle(-104.5,-67.8,209,135.7), null);


(lib.questiontext = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-1.25,-96.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.questiontext, new cjs.Rectangle(-493.6,-190,984.7,186.8), null);


(lib.questionbg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("EhzVBD1MAAAiHpMDmrAAAMAAACHpg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.questionbg, new cjs.Rectangle(-738.1,-434.1,1476.3000000000002,868.2), null);


(lib.playbtnshade = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EggVAfcQtatCAAyaQAAyaNatCQNatBS7AAQS+AANZNBQNZNCAASaQAASatZNCQtZNCy+AAQy7AAtatCgA6U5mQq6KoAAO+QAAPAK6KmQK7KnPaAAQPbAAK7qnQK6qmgBvAQABu+q6qoQq7qmvbAAQvaAAq7KmgArT2JIftWJI/tUbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.playbtnshade, new cjs.Rectangle(-292.8,-284.6,585.6,569.2), null);


(lib.playbtn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EggVAfcQtatCAAyaQAAyaNatCQNatBS7AAQS+AANZNBQNZNCAASaQAASatZNCQtZNCy+AAQy7AAtatCgA6U5mQq6KoAAO+QAAPAK6KmQK7KnPaAAQPbAAK7qnQK6qmgBvAQABu+q6qoQq7qmvbAAQvaAAq7KmgArT2JIftWJI/tUbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.playbtn, new cjs.Rectangle(-292.8,-284.6,585.6,569.2), null);


(lib.pinetree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E981A").s().p("EAJwAoWIgHgBIkIgdQj+grivgDQiSgPgYgBQhdADheAGIgBAAQp4AmpxB+QAvidBHiVQFAqaDHrBIBZleIAAgbIlmAAQBJjUCSkpQCSkoBtlKQBulLBplYQBolYB5lUIBVjyQBKi3Bki8QBii4BagjQBagjBLAyQBJAxBlDfQBmDeBPEpQBPEmBSEnQBjFkBQD8QBQD8AyC7QAwC7BvGDQBMEIAaBlQALAvAAAMIlOgSIBZFeQDHLBFAKaQBHCVAuCdQoThroYgrg");
	this.shape.setTransform(-1500.85,-914.787);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A45917").s().p("AAVgBIABAAIAAADIgBAAIgPAAQg9AABMgDg");
	this.shape_1.setTransform(-1546.4,-664.3475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(50));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A45917").s().p("AmkNsIAA7GIEigQIAtgBIAVAAQCwADD9ArIArAIIANACIAAafg");
	this.shape_2.setTransform(-1502.1,-587.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},1).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1670,-1188,338.29999999999995,688.1);


(lib.leftarrowshadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.149)").s().p("AoGi8IoOEAIAYrqIS6BQImTEQITqMAIkADtg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leftarrowshadow, new cjs.Rectangle(-104.5,-67.8,209,135.7), null);


(lib.leftarrowfiller = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#666666").s().p("AoGi8IoOEAIAYrqIS6BQImTEQITqMAIkADtg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leftarrowfiller, new cjs.Rectangle(-104.5,-67.8,209,135.7), null);


(lib.landmarkguide = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("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BkQAAALgHAHQgHAHgLAAgAwnLzQgKAAgHgHQgIgHABgLIAAhLQgBgKAIgHQAHgIAKAAIAZAAQALAAAHAIQAHAHABAKIAABLQgBALgHAHQgHAHgLAAgAwnLaIAZAAIAAhLIgZAAgAxyLzIAAgyIgZAAIAAAyIgZAAIAAh9IAZAAIAAAyIAZAAIAAgyIAaAAIAAB9gAVGDjIAAhkIgZAAIAABkIgZAAIAAh9IAZAAIAAAYQAAgJAIgHQAGgIALAAQALAAAGAIQAIAHAAAKIAABkgASwDjIAAgZIAZAAIAAhLIgZAAIAAgZIBLAAIAAAZIgZAAIAABLIAZAAIAAAZgAR+DjIAAgZIgZAAIAAAZIgZAAIAAhkQAAgKAIgHQAGgIALAAIAZAAQALAAAGAIQAIAHAAAKIAABkgARlCxIAZAAIAAgyIgZAAgAQBDjIAAhkIgZAAIAAgZIBLAAIAAAZIgZAAIAABkgAO2DjIAAhkIgZAAIAABkIgZAAIAAh9IAZAAIAAAYQAAgJAHgHQAIgIAKAAQAKAAAIAIQAHAHAAAKIAABkgAM5DjQgKAAgIgHQgHgHAAgLIAAhkIAZAAIAABkIAZAAIAAhkIAZAAIAABkQAAALgHAHQgIAHgKAAgALVDjQgKAAgIgHQgHgHAAgLIAAhLQAAgKAHgHQAIgIAKAAIAZAAQAKAAAIAIQAHAHAAAKIAABLQAAALgHAHQgIAHgKAAgALVDKIAZAAIAAhLIgZAAgAJYDjIAAh9IBLAAIAAAZIgyAAIAAAZIAlAAIAAAZIglAAIAAAygEAk9AB1QgKAAgHgIQgIgHABgKIAAgNIAYAAIAAANIAZAAIAAgZIgZAAQgKAAgHgIQgIgHABgKIAAgZQgBgLAIgGQAHgHAKAAIAZAAQALAAAHAHQAHAGABALIAAAMIgaAAIAAgMIgZAAIAAAZIAZAAQALAAAHAHQAHAHABALIAAAZQgBAKgHAHQgHAIgLAAgEAjzAB1IAAgZIgaAAIAAAZIgZAAIAAhkQAAgLAIgGQAHgHAKAAIAaAAQAKAAAHAHQAIAGAAALIAABkgEAjZABDIAaAAIAAgyIgaAAgEAh1AB1QgKAAgHgIQgIgHAAgKIAAhLQAAgLAIgGQAHgHAKAAIAmAAIAAAYIgmAAIAABLIAaAAIAAgZIgNAAIAAgZIAmAAIAAAyQAAAKgI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");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.landmarkguide, new cjs.Rectangle(-382.6,-197.7,765.3,395.4), null);


(lib.instructionstext = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ATfN4IAAhsQA3AvBzAFQB2AAAugeQAsgeAAgqQAAgqgsgeQgugeg+AAQheAAhCg6QhCg7AAhTQAAhSBCg9QBCg9CIAAQBjAFAqAfIAABwIgBgBQglgnhngFQhgAAglAdQgmAeAAAqQAAArAmAeQAlAdA2AAQBnAABJA7QBJA6AABTQAABThJA9QhJA8ifAAQhwgFg6gpgEgn7AM9QhYhpAAiRQAAiRBYhpQBXhpB7AAQB8AABYBpQBYBpAACRQAACRhYBpQhYBph8AAQh7AAhXhpgEgm2AGRQg8BKAABoQAABpA8BKQA6BKBTAAQBUAAA7hKQA7hKAAhpQAAhog7hKQg7hKhUAAQhTAAg6BKgEgyzAM9QhXhpAAiRQAAiRBXhpQBXhpB8AAQB7AABZBpQBXBpAACRQAACRhXBpQhZBph7AAQh8AAhXhpgEgxuAGRQg7BKAABoQAABpA7BKQA6BKBUAAQBUAAA7hKQA6hKAAhpQAAhog6hKQg7hKhUAAQhUAAg6BKgEA6eAOhIAAhhIBiAAIAABhgEAy1AOhIAAq8ICNAAQBnAABKBJQBJBKAABnQAABohJBJQhKBJhnAAIgrAAIAADIgEA0XAJ3IArAAQA/AAAtgsQAsgtABg/QgBg/gsgsQgtgtg/AAIgrAAgEAwhAOhIgjiSIjoAAIgiCSIhkAAIClq8ICsAAICjK8gEAstAKtIC7AAIhemPgEAn+AOhIAApDIiRJDIhlAAIiQpDIAAJDIhiAAIAAq8ICnAAIB+H5IB/n5ICmAAIAAK8gAQcOhIAAq8IBhAAIAAK8gANYOhIAAktIjPAAIAAEtIhiAAIAAq8IBiAAIAAEtIDPAAIAAktIBiAAIAAK8gADMOhIAApaIiYAAIAAhiIGRAAIAABiIiYAAIAAJagAoiOhIAApaIiYAAIAAhiIGSAAIAABiIiYAAIAAJagAtOOhIgjiSIjoAAIgiCSIhkAAIClq8ICsAAICkK8gAxCKtIC7AAIhemPgA50OhIh2j8IhQAAIAAD8IhiAAIAAq8IBiAAIAAFeIBIAAIB+leIBqAAIiQGRICQErgEg7/AOhIAAq8IBiAAIAAJbIEwAAIAABhgEgrRgEBQg3AihBAAQh8AAhYhpQhXhpAAiRQAAiRBXhpQBYhpB8AAQB7AABYBpQBXBpAACRQAACRhXBmIgNAPIBkCDIhRA3gEgvYgL1Qg6BKgBBpQABBoA6BKQA7BKBUAAQAfAAAcgLIg7hNIBRg3IA5BKIAEgFQA7hKAAhoQAAhpg7hKQg7hKhTAAQhUAAg7BKgA5MlIQhXhpgBiRQABiRBXhpQBYhpB7AAQBNAABAAtIAACBQg6hIhTAAQhUAAg6BKQg7BKAABpQAABoA7BKQA6BKBUAAQBTAAA6hIIAACCQhAAthNAAQh7AAhYhpgEgl0gErQhIhMAAhnIAAnCIBhAAIAAHCQAAA/AtAtQAtAsA/AAQA+AAAtgsQAsgtABg/IAAnCIBhAAIAAHCQAABnhJBMQhJBMhnAAQhoAAhKhMgEAxDgDkIgiiTIjpAAIgiCTIhkAAICkq8ICtAAICkK8gEAtPgHYIC7AAIhemQgAf1jkIAAq8IGSAAIAABhIkwAAIAADMIEAAAIAABhIkAAAIAADMIEwAAIAABigAcqjkIh3j8IhQAAIAAD8IhhAAIAAq8IBhAAIAAFdIBJAAIB9ldIBqAAIiQGQICQEsgAVtjkIgjiTIjnAAIgjCTIhjAAICjq8ICtAAICjK8gAR5nYIC7AAIhdmQgAKyjkIAApbIiYAAIAAhhIGRAAIAABhIiYAAIAAJbgAgjjkIAAjSIiYnqIBjAAIBlFNIBmlNIBkAAIiZHvIAADNgAqXjkIAAq8IBiAAIAAJaIExAAIAABigAtijkIh3j8IhQAAIAAD8IhhAAIAAq8IBhAAIAAFdIBJAAIB9ldIBqAAIiQGQICQEsgA9njkIAAq8IBhAAIAAK8g");
	this.shape.setTransform(-0.05,-17.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.instructionstext, new cjs.Rectangle(-384,-111,767.9,186.8), null);


(lib.instructionsbg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("EhzVBD1MAAAiHpMDmrAAAMAAACHpg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.instructionsbg, new cjs.Rectangle(-738.1,-434.1,1476.3000000000002,868.2), null);


(lib.hostpital = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E25900").s().p("ApcGuIiMtbIXRAAIiMNbgAkcBuIDIAAIAACvICpAAIAAivIDIAAIAAiuIjXAAIAAiqIiLAAIAACqIjXAAg");
	this.shape.setTransform(-2.95,-72.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1FEFF").s().p("AhUEEIAAivIjIAAIAAiuIDXAAIAAiqICLAAIAACqIDXAAIAACuIjIAAIAACvg");
	this.shape_1.setTransform(-2.95,-70.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2183AC").ss(1,1,1).p("AAAkXIAAIv");
	this.shape_2.setTransform(-1.5,46.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4098B1").s().p("AAAEYIAAovIAAIvIlbAAIAAovIFbAAIFbAAIAAIvg");
	this.shape_3.setTransform(-1.5,46.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#94C19E").s().p("Av9hZIf7AAIgECuI/3AFg");
	this.shape_4.setTransform(0,-65.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#55A095").s().p("AH0HjIgFloIFUAAIAAFogAs9HjIgFloIFUAAIAAFogAipjPIAAkSIFJAAIAAESgAHvjTIAAkOIFAAAIAAEOgAs9jTIAAkOIFAAAIAAEOg");
	this.shape_5.setTransform(-1.25,26);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCDBE0").s().p("AM5KPIAAloIlUAAIAFFoIibAAIAAowIlbAAIlbAAIAAIwIiRAAIAAloIlUAAIAFFoIi0AAIAA0YIf3gFIAAUdgAizgiIFJAAIAAkTIlJAAgAHlgnIFAAAIAAkOIlAAAgAtHgnIFAAAIAAkOIlAAAg");
	this.shape_6.setTransform(-0.25,8.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hostpital, new cjs.Rectangle(-102.2,-115.9,204.5,191.2), null);


(lib.hillalpha = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#006600").s().p("A7DLZQiogHiogMQ2dhW2nA4QvRAnvYgEQjUgBjRANQjzAPiIhiQgRgNAHgOQBQilgCitQgBgfAVgbQA9hRAmhRIhjgsIBGgiQH/kAKFhAQKWhDKfApQKIAsKABEQKLBEKUgGIKFgHQKbgFKIhWQClgVCkgSQJ/hIJaiVQOWiHOyAEQF1ABFmAZQEmAWEpABQECAKD1AcQDsAbDzgNQC+gOC/gSQIwg2IhhXQBTANANAuQAvCcCfCAQBTBCAhBPQBFChCzCKQD1C+BgDmQgHAXgjALQnDCPoEATQhlAGhkgBQtpgJtnAmIkRARImkADQtJAFtIAJIt6AJQqUAHqTAMQk5AGk6AAQqHAAqFgYg");
	this.shape.setTransform(0.0351,0.0029);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hillalpha, new cjs.Rectangle(-772.5,-75.3,1545.1,150.6), null);


(lib.grassalpha = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#7AC12C","#439A2D"],[0,1],499.8,-154,499.8,233.6).s().p("EhjrAnQMgGKhMsUA14gCRAz9AAmUAz+gAmA14ACRMgA2BMsg");
	this.shape.setTransform(0,0.0222);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.grassalpha, new cjs.Rectangle(-677.4,-251.1,1354.9,502.29999999999995), null);


(lib.Xwrongcopy2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#CC0000","#800033"],[0,1],0,-236.4,0,236.5).s().p("EAjQAtGQiwgVhqh0Mge2gh0Mge0Ah0QhrB0ivAVQiwAUiNhWQiPhXgZiPQgaiQBrh0MAhOgkaMghOgkZQhqh0AaiQQAZiPCOhXQCPhXCvAVQCvAVBqB0MAe0AhzMAe1ghzQBrh0CugVQCwgVCOBXQCOBXAZCPQAaCQhqB0MghNAkZMAhOAkaQBqB0gaCQQgZCPiOBXQhzBGiJAAQggAAghgEg");
	this.shape.setTransform(-0.0079,-0.0328);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Xwrongcopy2, new cjs.Rectangle(-274.5,-289,549,578), null);


(lib.Xwrongcopy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#CC0000","#800033"],[0,1],0,-236.4,0,236.5).s().p("EAjQAtGQiwgVhqh0Mge2gh0Mge0Ah0QhrB0ivAVQiwAUiNhWQiPhXgZiPQgaiQBrh0MAhOgkaMghOgkZQhqh0AaiQQAZiPCOhXQCPhXCvAVQCvAVBqB0MAe0AhzMAe1ghzQBrh0CugVQCwgVCOBXQCOBXAZCPQAaCQhqB0MghNAkZMAhOAkaQBqB0gaCQQgZCPiOBXQhzBGiJAAQggAAghgEg");
	this.shape.setTransform(-0.0079,-0.0328);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Xwrongcopy, new cjs.Rectangle(-274.5,-289,549,578), null);


(lib.Xwrong = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#CC0000","#800033"],[0,1],0,-236.4,0,236.5).s().p("EAjQAtGQiwgVhqh0Mge2gh0Mge0Ah0QhrB0ivAVQiwAUiNhWQiPhXgZiPQgaiQBrh0MAhOgkaMghOgkZQhqh0AaiQQAZiPCOhXQCPhXCvAVQCvAVBqB0MAe0AhzMAe1ghzQBrh0CugVQCwgVCOBXQCOBXAZCPQAaCQhqB0MghNAkZMAhOAkaQBqB0gaCQQgZCPiOBXQhzBGiJAAQggAAghgEg");
	this.shape.setTransform(-0.0079,-0.0328);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Xwrong, new cjs.Rectangle(-274.5,-289,549,578), null);


(lib.toparrowcopy2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC","#666666","#666666"],[0,1,1,1],160.5,0,-160.4,0).s().p("A4TBYQEGpvLLAbIWcAAIAAmXILrKTIrqLPIAAnRQzegNknASQnngjAeKmInREOQgBrFAyh3g");
	this.shape.setTransform(0.024,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.toparrowcopy2, new cjs.Rectangle(-160.4,-91.6,320.9,183.3), null);


(lib.startcopy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#DB0000","#9B0000"],[0,1],0,-194.4,0,194.5).s().p("A1eU1Qo5ooAAsNQAAsMI5ooQI6onMkgBQMmABI5InQI5IoAAMMQAAMNo5IoQo5InsmABQskgBo6ong");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startcopy, new cjs.Rectangle(-194.4,-188.4,388.8,376.9), null);


(lib.start = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#DB0000","#9B0000"],[0,1],0,-194.4,0,194.5).s().p("A1eU1Qo5ooAAsNQAAsMI5ooQI6onMkgBQMmABI5InQI5IoAAMMQAAMNo5IoQo5InsmABQskgBo6ong");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.start, new cjs.Rectangle(-194.4,-188.4,388.8,376.9), null);


(lib.rewatchpuzzletxtcopy4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANTDfQg7g8ABhTIAAlnIBNAAIAAFnQABAyAjAkQAkAkAzAAQAyAAAkgkQAkgkgBgyIAAlnIBPAAIAAFnQgBBTg6A8Qg6A9hTAAQhTAAg7g9gAosDIQhGhUAAh0QAAhzBGhUQBGhUBiAAQA/AAAyAkIAABnQgug5hDAAQhCAAgvA8QgvA7gBBSQABBTAvA8QAvA7BCAAQBDAAAug5IAABnQgyAkg/AAQhiAAhGhUgEAmnAEYIAAovIFCAAIAABOIj0AAIAACjIDMAAIAABNIjMAAIAACjID0AAIAABOgEAgXAEYIAAovIBNAAIAAHhID0AAIAABOgAaGEYIAAhOIDvmTIjvAAIAAhOIFDAAIAABOIjvGTIDvAAIAABOgAT3EYIAAhOIDumTIjuAAIAAhOIFBAAIAABOIjuGTIDuAAIAABOgAGSEYIAAovIBxAAQBTAAA6A7QA6A6ABBTQgBBRg6A7Qg6A7hTAAIgjAAIAACggAHgApIAjAAQAyAAAkgjQAjgjAAgyQAAgzgjgjQgkgkgyAAIgjAAgAAuEYIAAjxIilAAIAADxIhOAAIAAovIBOAAIAADxIClAAIAAjxIBOAAIAAIvgAuIEYIAAnhIh7AAIAAhOIFCAAIAABOIh5AAIAAHhgAx5EYIgch1Ii6AAIgbB1IhPAAICDovICJAAICDIvgA08BVICVAAIhKk/gA6MEYIhIlnIhIFnIiGAAIg5ovIBQAAIAwHcIBfncIBQAAIBeHcIAxncIBQAAIg5IvgEglXAEYIAAovIFBAAIAABOIj0AAIAACjIDNAAIAABNIjNAAIAACjID0AAIAABOgEgn6AEYIhGinQgaAHgdAAIgiAAIAACgIhPAAIAAovIBxAAQBTAAA6A7QA7A6AABTQAABRg7A7IgQAPIBUDMgEgqZAApIAiAAQAzAAAjgjQAkgjAAgyQAAgzgkgjQgjgkgzAAIgiAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEEEEE").s().p("ANTDfQg7g8ABhTIAAlnIBNAAIAAFnQABAyAjAkQAkAkAzAAQAyAAAkgkQAkgkgBgyIAAlnIBPAAIAAFnQgBBTg6A8Qg6A9hTAAQhTAAg7g9gAosDIQhGhUAAh0QAAhzBGhUQBGhUBiAAQA/AAAyAkIAABnQgug5hDAAQhCAAgvA8QgvA7gBBSQABBTAvA8QAvA7BCAAQBDAAAug5IAABnQgyAkg/AAQhiAAhGhUgEAmnAEYIAAovIFCAAIAABOIj0AAIAACjIDMAAIAABNIjMAAIAACjID0AAIAABOgEAgXAEYIAAovIBNAAIAAHhID0AAIAABOgAaGEYIAAhOIDvmTIjvAAIAAhOIFDAAIAABOIjvGTIDvAAIAABOgAT3EYIAAhOIDumTIjuAAIAAhOIFBAAIAABOIjuGTIDuAAIAABOgAGSEYIAAovIBxAAQBTAAA6A7QA6A6ABBTQgBBRg6A7Qg6A7hTAAIgjAAIAACggAHgApIAjAAQAyAAAkgjQAjgjAAgyQAAgzgjgjQgkgkgyAAIgjAAgAAuEYIAAjxIilAAIAADxIhOAAIAAovIBOAAIAADxIClAAIAAjxIBOAAIAAIvgAuIEYIAAnhIh7AAIAAhOIFCAAIAABOIh5AAIAAHhgAx5EYIgch1Ii6AAIgbB1IhPAAICDovICJAAICDIvgA08BVICVAAIhKk/gA6MEYIhIlnIhIFnIiGAAIg5ovIBQAAIAwHcIBfncIBQAAIBeHcIAxncIBQAAIg5IvgEglXAEYIAAovIFBAAIAABOIj0AAIAACjIDNAAIAABNIjNAAIAACjID0AAIAABOgEgn6AEYIhGinQgaAHgdAAIgiAAIAACgIhPAAIAAovIBxAAQBTAAA6A7QA7A6AABTQAABRg7A7IgQAPIBUDMgEgqZAApIAiAAQAzAAAjgjQAkgjAAgyQAAgzgkgjQgjgkgzAAIgiAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DDDDDD").s().p("ANTDfQg7g8ABhTIAAlnIBNAAIAAFnQABAyAjAkQAkAkAzAAQAyAAAkgkQAkgkgBgyIAAlnIBPAAIAAFnQgBBTg6A8Qg6A9hTAAQhTAAg7g9gAosDIQhGhUAAh0QAAhzBGhUQBGhUBiAAQA/AAAyAkIAABnQgug5hDAAQhCAAgvA8QgvA7gBBSQABBTAvA8QAvA7BCAAQBDAAAug5IAABnQgyAkg/AAQhiAAhGhUgEAmnAEYIAAovIFCAAIAABOIj0AAIAACjIDMAAIAABNIjMAAIAACjID0AAIAABOgEAgXAEYIAAovIBNAAIAAHhID0AAIAABOgAaGEYIAAhOIDvmTIjvAAIAAhOIFDAAIAABOIjvGTIDvAAIAABOgAT3EYIAAhOIDumTIjuAAIAAhOIFBAAIAABOIjuGTIDuAAIAABOgAGSEYIAAovIBxAAQBTAAA6A7QA6A6ABBTQgBBRg6A7Qg6A7hTAAIgjAAIAACggAHgApIAjAAQAyAAAkgjQAjgjAAgyQAAgzgjgjQgkgkgyAAIgjAAgAAuEYIAAjxIilAAIAADxIhOAAIAAovIBOAAIAADxIClAAIAAjxIBOAAIAAIvgAuIEYIAAnhIh7AAIAAhOIFCAAIAABOIh5AAIAAHhgAx5EYIgch1Ii6AAIgbB1IhPAAICDovICJAAICDIvgA08BVICVAAIhKk/gA6MEYIhIlnIhIFnIiGAAIg5ovIBQAAIAwHcIBfncIBQAAIBeHcIAxncIBQAAIg5IvgEglXAEYIAAovIFBAAIAABOIj0AAIAACjIDNAAIAABNIjNAAIAACjID0AAIAABOgEgn6AEYIhGinQgaAHgdAAIgiAAIAACgIhPAAIAAovIBxAAQBTAAA6A7QA7A6AABTQAABRg7A7IgQAPIBUDMgEgqZAApIAiAAQAzAAAjgjQAkgjAAgyQAAgzgkgjQgjgkgzAAIgiAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("ANTDfQg7g8ABhTIAAlnIBNAAIAAFnQABAyAjAkQAkAkAzAAQAyAAAkgkQAkgkgBgyIAAlnIBPAAIAAFnQgBBTg6A8Qg6A9hTAAQhTAAg7g9gAosDIQhGhUAAh0QAAhzBGhUQBGhUBiAAQA/AAAyAkIAABnQgug5hDAAQhCAAgvA8QgvA7gBBSQABBTAvA8QAvA7BCAAQBDAAAug5IAABnQgyAkg/AAQhiAAhGhUgEAmnAEYIAAovIFCAAIAABOIj0AAIAACjIDMAAIAABNIjMAAIAACjID0AAIAABOgEAgXAEYIAAovIBNAAIAAHhID0AAIAABOgAaGEYIAAhOIDvmTIjvAAIAAhOIFDAAIAABOIjvGTIDvAAIAABOgAT3EYIAAhOIDumTIjuAAIAAhOIFBAAIAABOIjuGTIDuAAIAABOgAGSEYIAAovIBxAAQBTAAA6A7QA6A6ABBTQgBBRg6A7Qg6A7hTAAIgjAAIAACggAHgApIAjAAQAyAAAkgjQAjgjAAgyQAAgzgjgjQgkgkgyAAIgjAAgAAuEYIAAjxIilAAIAADxIhOAAIAAovIBOAAIAADxIClAAIAAjxIBOAAIAAIvgAuIEYIAAnhIh7AAIAAhOIFCAAIAABOIh5AAIAAHhgAx5EYIgch1Ii6AAIgbB1IhPAAICDovICJAAICDIvgA08BVICVAAIhKk/gA6MEYIhIlnIhIFnIiGAAIg5ovIBQAAIAwHcIBfncIBQAAIBeHcIAxncIBQAAIg5IvgEglXAEYIAAovIFBAAIAABOIj0AAIAACjIDNAAIAABNIjNAAIAACjID0AAIAABOgEgn6AEYIhGinQgaAHgdAAIgiAAIAACgIhPAAIAAovIBxAAQBTAAA6A7QA7A6AABTQAABRg7A7IgQAPIBUDMgEgqZAApIAiAAQAzAAAjgjQAkgjAAgyQAAgzgkgjQgjgkgzAAIgiAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BBBBBB").s().p("ANTDfQg7g8ABhTIAAlnIBNAAIAAFnQABAyAjAkQAkAkAzAAQAyAAAkgkQAkgkgBgyIAAlnIBPAAIAAFnQgBBTg6A8Qg6A9hTAAQhTAAg7g9gAosDIQhGhUAAh0QAAhzBGhUQBGhUBiAAQA/AAAyAkIAABnQgug5hDAAQhCAAgvA8QgvA7gBBSQABBTAvA8QAvA7BCAAQBDAAAug5IAABnQgyAkg/AAQhiAAhGhUgEAmnAEYIAAovIFCAAIAABOIj0AAIAACjIDMAAIAABNIjMAAIAACjID0AAIAABOgEAgXAEYIAAovIBNAAIAAHhID0AAIAABOgAaGEYIAAhOIDvmTIjvAAIAAhOIFDAAIAABOIjvGTIDvAAIAABOgAT3EYIAAhOIDumTIjuAAIAAhOIFBAAIAABOIjuGTIDuAAIAABOgAGSEYIAAovIBxAAQBTAAA6A7QA6A6ABBTQgBBRg6A7Qg6A7hTAAIgjAAIAACggAHgApIAjAAQAyAAAkgjQAjgjAAgyQAAgzgjgjQgkgkgyAAIgjAAgAAuEYIAAjxIilAAIAADxIhOAAIAAovIBOAAIAADxIClAAIAAjxIBOAAIAAIvgAuIEYIAAnhIh7AAIAAhOIFCAAIAABOIh5AAIAAHhgAx5EYIgch1Ii6AAIgbB1IhPAAICDovICJAAICDIvgA08BVICVAAIhKk/gA6MEYIhIlnIhIFnIiGAAIg5ovIBQAAIAwHcIBfncIBQAAIBeHcIAxncIBQAAIg5IvgEglXAEYIAAovIFBAAIAABOIj0AAIAACjIDNAAIAABNIjNAAIAACjID0AAIAABOgEgn6AEYIhGinQgaAHgdAAIgiAAIAACgIhPAAIAAovIBxAAQBTAAA6A7QA7A6AABTQAABRg7A7IgQAPIBUDMgEgqZAApIAiAAQAzAAAjgjQAkgjAAgyQAAgzgkgjQgjgkgzAAIgiAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AAAAAA").s().p("ANTDfQg7g8ABhTIAAlnIBNAAIAAFnQABAyAjAkQAkAkAzAAQAyAAAkgkQAkgkgBgyIAAlnIBPAAIAAFnQgBBTg6A8Qg6A9hTAAQhTAAg7g9gAosDIQhGhUAAh0QAAhzBGhUQBGhUBiAAQA/AAAyAkIAABnQgug5hDAAQhCAAgvA8QgvA7gBBSQABBTAvA8QAvA7BCAAQBDAAAug5IAABnQgyAkg/AAQhiAAhGhUgEAmnAEYIAAovIFCAAIAABOIj0AAIAACjIDMAAIAABNIjMAAIAACjID0AAIAABOgEAgXAEYIAAovIBNAAIAAHhID0AAIAABOgAaGEYIAAhOIDvmTIjvAAIAAhOIFDAAIAABOIjvGTIDvAAIAABOgAT3EYIAAhOIDumTIjuAAIAAhOIFBAAIAABOIjuGTIDuAAIAABOgAGSEYIAAovIBxAAQBTAAA6A7QA6A6ABBTQgBBRg6A7Qg6A7hTAAIgjAAIAACggAHgApIAjAAQAyAAAkgjQAjgjAAgyQAAgzgjgjQgkgkgyAAIgjAAgAAuEYIAAjxIilAAIAADxIhOAAIAAovIBOAAIAADxIClAAIAAjxIBOAAIAAIvgAuIEYIAAnhIh7AAIAAhOIFCAAIAABOIh5AAIAAHhgAx5EYIgch1Ii6AAIgbB1IhPAAICDovICJAAICDIvgA08BVICVAAIhKk/gA6MEYIhIlnIhIFnIiGAAIg5ovIBQAAIAwHcIBfncIBQAAIBeHcIAxncIBQAAIg5IvgEglXAEYIAAovIFBAAIAABOIj0AAIAACjIDNAAIAABNIjNAAIAACjID0AAIAABOgEgn6AEYIhGinQgaAHgdAAIgiAAIAACgIhPAAIAAovIBxAAQBTAAA6A7QA7A6AABTQAABRg7A7IgQAPIBUDMgEgqZAApIAiAAQAzAAAjgjQAkgjAAgyQAAgzgkgjQgjgkgzAAIgiAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("ANTDfQg7g8ABhTIAAlnIBNAAIAAFnQABAyAjAkQAkAkAzAAQAyAAAkgkQAkgkgBgyIAAlnIBPAAIAAFnQgBBTg6A8Qg6A9hTAAQhTAAg7g9gAosDIQhGhUAAh0QAAhzBGhUQBGhUBiAAQA/AAAyAkIAABnQgug5hDAAQhCAAgvA8QgvA7gBBSQABBTAvA8QAvA7BCAAQBDAAAug5IAABnQgyAkg/AAQhiAAhGhUgEAmnAEYIAAovIFCAAIAABOIj0AAIAACjIDMAAIAABNIjMAAIAACjID0AAIAABOgEAgXAEYIAAovIBNAAIAAHhID0AAIAABOgAaGEYIAAhOIDvmTIjvAAIAAhOIFDAAIAABOIjvGTIDvAAIAABOgAT3EYIAAhOIDumTIjuAAIAAhOIFBAAIAABOIjuGTIDuAAIAABOgAGSEYIAAovIBxAAQBTAAA6A7QA6A6ABBTQgBBRg6A7Qg6A7hTAAIgjAAIAACggAHgApIAjAAQAyAAAkgjQAjgjAAgyQAAgzgjgjQgkgkgyAAIgjAAgAAuEYIAAjxIilAAIAADxIhOAAIAAovIBOAAIAADxIClAAIAAjxIBOAAIAAIvgAuIEYIAAnhIh7AAIAAhOIFCAAIAABOIh5AAIAAHhgAx5EYIgch1Ii6AAIgbB1IhPAAICDovICJAAICDIvgA08BVICVAAIhKk/gA6MEYIhIlnIhIFnIiGAAIg5ovIBQAAIAwHcIBfncIBQAAIBeHcIAxncIBQAAIg5IvgEglXAEYIAAovIFBAAIAABOIj0AAIAACjIDNAAIAABNIjNAAIAACjID0AAIAABOgEgn6AEYIhGinQgaAHgdAAIgiAAIAACgIhPAAIAAovIBxAAQBTAAA6A7QA7A6AABTQAABRg7A7IgQAPIBUDMgEgqZAApIAiAAQAzAAAjgjQAkgjAAgyQAAgzgkgjQgjgkgzAAIgiAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-279.2,-28.4,558.5,56.8);


(lib.middlecopy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC"],[0,0.984],0,-142.9,0,143).s().p("AvzQBQlFlLhIm1QgUh8AAiFQAAiEAUh8QBIm1FFlLQGjmoJQgBQJQABGjGoQGiGpAAJXQAAJYmiGpQmjGopQABQpQgBmjmogAqmqvQkZEdAAGSQAAGUEZEcQEZEeGNAAQGNAAEakeQEZkcAAmUQAAmSkZkdQkakemNAAQmNAAkZEeg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#CCCCCC"],[0,0.984],0,-49.2,0,49.3).s().p("AlbFiQiRiTAAjPQAAjNCRiTQCQiTDLAAQDMAACQCTQCRCTAADNQAADPiRCTQiQCSjMAAQjLAAiQiSg");
	this.shape_1.setTransform(-0.05,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DB0000","#9B0000"],[0,1],0,-96,0,96).s().p("AqmKwQkZkcAAmUQAAmSEZkdQEZkeGNAAQGNAAEaEeQEZEdAAGSQAAGUkZEcQkaEemNAAQmNAAkZkegAlblgQiRCTAADNQAADPCRCTQCPCSDMAAQDMAACPiSQCRiTAAjPQAAjNiRiTQiPiTjMAAQjMAAiPCTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.middlecopy, new cjs.Rectangle(-142.9,-144.9,285.9,289.9), null);


(lib.middle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC"],[0,0.984],0,-142.9,0,143).s().p("AvzQBQlFlLhIm1QgUh8AAiFQAAiEAUh8QBIm1FFlLQGjmoJQgBQJQABGjGoQGiGpAAJXQAAJYmiGpQmjGopQABQpQgBmjmogAqmqvQkZEdAAGSQAAGUEZEcQEZEeGNAAQGNAAEakeQEZkcAAmUQAAmSkZkdQkakemNAAQmNAAkZEeg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#CCCCCC"],[0,0.984],0,-49.2,0,49.3).s().p("AlbFiQiRiTAAjPQAAjNCRiTQCQiTDLAAQDMAACQCTQCRCTAADNQAADPiRCTQiQCSjMAAQjLAAiQiSg");
	this.shape_1.setTransform(-0.05,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DB0000","#9B0000"],[0,1],0,-96,0,96).s().p("AqmKwQkZkcAAmUQAAmSEZkdQEZkeGNAAQGNAAEaEeQEZEdAAGSQAAGUkZEcQkaEemNAAQmNAAkZkegAlblgQiRCTAADNQAADPCRCTQCPCSDMAAQDMAACPiSQCRiTAAjPQAAjNiRiTQiPiTjMAAQjMAAiPCTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.middle, new cjs.Rectangle(-142.9,-144.9,285.9,289.9), null);


(lib.dartcopy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#33CC66").s().p("AgBAcIADg5IgBA7g");
	this.shape.setTransform(41.175,470.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#666666","#4E4E4E"],[0,1],-24.3,25,22.7,-22).s().p("AlGEAIGboiIAhg4QB2AkBKBfIARAYIg0AyIAAAAImbHiQgkAGgeAAQhzAAgJhbg");
	this.shape_1.setTransform(32.725,502.6441);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0062A4").s().p("AA5BlIAAgBIA0gxIAYA5IgEAAQgiAAgmgHgAiDhrIAgAEIghA4g");
	this.shape_2.setTransform(54.575,478.3765);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#0099FF","#006DB7"],[0,1],-13.4,-34.2,90.6,-138.2).s().p("EgZCAhiIgRgZQhKhfh2gjIgggEQAQjDA5i+QA0itBciaQBNiABfhxQBnh5Bph2QBoh2BshyQB5iCB7iAIEDkNIEDkOIECkNIDoj1ITR0CQAJgRBehFQBehFBdgQQBUgMASBXQADAOg5CPQg6COgVAiQhICPhSCJQhgCjhkCgQhmClhuCgQhUB7hYB5IjWEnIivDuIjGELIjBECQhvCShxCSQhwCQhzCOIjaENIjsEjQhbBxhYBxQh4CaijBuQiiBtjEAaIgwADg");
	this.shape_3.setTransform(225.7074,268.8523);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#0099FF","#006DB7"],[0,1],14.6,54.3,-14.5,-54.2).s().p("AoXPAQhLhLgyjTQgti7AAinQAAiKAqjLQAwjmBRjFQBfjqB5iEQCPibClAAQBkAABtBaQBQBCBtCKIBZBwQAeAyA1A4IADADQAyA5ApAhIA0A1IzPUBg");
	this.shape_4.setTransform(300.2,96.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#0099FF","#006DB7"],[0,1],-31.2,44.8,58,-44.5).s().p("At4KaIDWkoQBXh5BUh6QBuigBnikQBjigBhijQBRiKBHiPIAHAEQA2AfBDAZIADACIACABQBHAdA3ALICJAsQCnA3BZA0QB7BIAjBeQA5CbhgC8QhSCfi6CqQicCQjIB8QixBviAAwQidA6i/AWQgeAEgfAAQi6AAjBiIg");
	this.shape_5.setTransform(390.877,169.6332);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dartcopy, new cjs.Rectangle(0,0,479.8,537.4), null);


(lib.dart = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#33CC66").s().p("AgBAcIADg5IgBA7g");
	this.shape.setTransform(41.175,470.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#666666","#4E4E4E"],[0,1],-24.3,25,22.7,-22).s().p("AlGEAIGboiIAhg4QB2AkBKBfIARAYIg0AyIAAAAImbHiQgkAGgeAAQhzAAgJhbg");
	this.shape_1.setTransform(32.725,502.6441);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0062A4").s().p("AA5BlIAAgBIA0gxIAYA5IgEAAQgiAAgmgHgAiDhrIAgAEIghA4g");
	this.shape_2.setTransform(54.575,478.3765);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#0099FF","#006DB7"],[0,1],-13.4,-34.2,90.6,-138.2).s().p("EgZCAhiIgRgZQhKhfh2gjIgggEQAQjDA5i+QA0itBciaQBNiABfhxQBnh5Bph2QBoh2BshyQB5iCB7iAIEDkNIEDkOIECkNIDoj1ITR0CQAJgRBehFQBehFBdgQQBUgMASBXQADAOg5CPQg6COgVAiQhICPhSCJQhgCjhkCgQhmClhuCgQhUB7hYB5IjWEnIivDuIjGELIjBECQhvCShxCSQhwCQhzCOIjaENIjsEjQhbBxhYBxQh4CaijBuQiiBtjEAaIgwADg");
	this.shape_3.setTransform(225.7074,268.8523);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#0099FF","#006DB7"],[0,1],14.6,54.3,-14.5,-54.2).s().p("AoXPAQhLhLgyjTQgti7AAinQAAiKAqjLQAwjmBRjFQBfjqB5iEQCPibClAAQBkAABtBaQBQBCBtCKIBZBwQAeAyA1A4IADADQAyA5ApAhIA0A1IzPUBg");
	this.shape_4.setTransform(300.2,96.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#0099FF","#006DB7"],[0,1],-31.2,44.8,58,-44.5).s().p("At4KaIDWkoQBXh5BUh6QBuigBnikQBjigBhijQBRiKBHiPIAHAEQA2AfBDAZIADACIACABQBHAdA3ALICJAsQCnA3BZA0QB7BIAjBeQA5CbhgC8QhSCfi6CqQicCQjIB8QixBviAAwQidA6i/AWQgeAEgfAAQi6AAjBiIg");
	this.shape_5.setTransform(390.877,169.6332);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dart, new cjs.Rectangle(0,0,479.8,537.4), null);


(lib.btnbgcopy3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#999999").s().p("EguOAJiQh8AAhYhYQhYhYAAh8IAAprQAAh8BYhYQBYhYB8AAMBcdAAAQB8AABYBYQBYBYAAB8IAAJrQAAB8hYBYQhYBYh8AAg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btnbgcopy3, new cjs.Rectangle(-325.9,-60.9,651.8,121.9), null);


(lib.btnbgcopy2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#999999").s().p("EguOAJiQh8AAhYhYQhYhYAAh8IAAprQAAh8BYhYQBYhYB8AAMBcdAAAQB8AABYBYQBYBYAAB8IAAJrQAAB8hYBYQhYBYh8AAg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btnbgcopy2, new cjs.Rectangle(-325.9,-60.9,651.8,121.9), null);


(lib.btnbggraycopy4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("EguOAJiQh8AAhYhYQhYhYAAh8IAAprQAAh8BYhYQBYhYB8AAMBcdAAAQB8AABYBYQBYBYAAB8IAAJrQAAB8hYBYQhYBYh8AAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#909090").s().p("EguOAJiQh8AAhYhYQhYhYAAh8IAAprQAAh8BYhYQBYhYB8AAMBcdAAAQB8AABYBYQBYBYAAB8IAAJrQAAB8hYBYQhYBYh8AAg");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#888888").s().p("EguOAJiQh8AAhYhYQhYhYAAh8IAAprQAAh8BYhYQBYhYB8AAMBcdAAAQB8AABYBYQBYBYAAB8IAAJrQAAB8hYBYQhYBYh8AAg");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#808080").s().p("EguOAJiQh8AAhYhYQhYhYAAh8IAAprQAAh8BYhYQBYhYB8AAMBcdAAAQB8AABYBYQBYBYAAB8IAAJrQAAB8hYBYQhYBYh8AAg");
	this.shape_3.setTransform(0,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#777777").s().p("EguOAJiQh8AAhYhYQhYhYAAh8IAAprQAAh8BYhYQBYhYB8AAMBcdAAAQB8AABYBYQBYBYAAB8IAAJrQAAB8hYBYQhYBYh8AAg");
	this.shape_4.setTransform(0,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6F6F6F").s().p("EguOAJiQh8AAhYhYQhYhYAAh8IAAprQAAh8BYhYQBYhYB8AAMBcdAAAQB8AABYBYQBYBYAAB8IAAJrQAAB8hYBYQhYBYh8AAg");
	this.shape_5.setTransform(0,0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("EguOAJiQh8AAhYhYQhYhYAAh8IAAprQAAh8BYhYQBYhYB8AAMBcdAAAQB8AABYBYQBYBYAAB8IAAJrQAAB8hYBYQhYBYh8AAg");
	this.shape_6.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-325.9,-60.9,651.8,121.9);


(lib.bottomarrowcopy2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC","#666666","#666666"],[0,1,1,1],160.5,0,-160.4,0).s().p("A5EEBILqrPIAAHRQTeANEngSQHnAjgeqmIHRkOQABLFgyB3QkGJvrLgbI2cAAIAAGXg");
	this.shape.setTransform(-0.024,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bottomarrowcopy2, new cjs.Rectangle(-160.5,-91.6,321,183.3), null);


(lib.answerrevealtext = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("A/bcBIAAjYQBtBeDpAKQDrgBBZg7QBag8AAhVQAAhUhag7QhZg8h+ABQi7gBiDhzQiFh2AAimQAAilCFh5QCDh6ERAAQDFAKBUA+IAADgIgCgCQhLhPjMgKQjAAAhLA7QhLA8AABUQAABVBLA7QBLA8BqAAQDPAACSB2QCTBzAAClQAACmiTB6QiSB6k8AAQjhgKh1hTgAcadUIAAjDIDDAAIAADDgAXEdUIAAjDIDDAAIAADDgARudUIAAjDIDDAAIAADDgACGdUIAA14IMlAAIAADDIpiAAIAAGXIIAAAIAADEIoAAAIAAGXIJiAAIAADDgAthdUIAA14IMlAAIAADDIpiAAIAAGXIIAAAIAADEIoAAAIAAGXIJiAAIAADDgATDn3IAAjYQBuBeDoAKQDsAABZg8QBag8AAhUQAAhUhag8QhZg8h+AAQi6AAiEh0QiGh1AAimQAAilCGh5QCEh6EQAAQDFAJBUA/IAADfIgCgBQhLhPjMgKQjBAAhKA7QhLA8AABUQAABVBLA7QBKA8BrAAQDPAACSB2QCTBzAACmQAACliTB7QiSB5k9AAQjggKh2hTgACGmkIAAy1IkwAAIAAjDIMkAAIAADDIkxAAIAAS1gAySmkIAA14IMlAAIAADDIpiAAIAAGXIIAAAIAADDIoAAAIAAGYIJiAAIAADDgEgh6gGkIAA14IDDAAIAAS1IJiAAIAADDgANu1MIgxjsIAAklIDDAAIAAElIgwDsg");
	this.shape.setTransform(0,-233.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.answerrevealtext, new cjs.Rectangle(-217.1,-422.1,434.2,377.20000000000005), null);


(lib.centerarrowshadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.149)").s().p("AirM5IAZyJIm4gBIJSnnIJDHsImPgCIBySHg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.centerarrowshadow, new cjs.Rectangle(-58.6,-82.5,117.30000000000001,165.1), null);


(lib.centerarrowfiller = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#666666").s().p("AirM5IAZyJIm4gBIJSnnIJDHsImPgCIBySHg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.centerarrowfiller, new cjs.Rectangle(-58.6,-82.5,117.30000000000001,165.1), null);


(lib.arrowalphs = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#666666").s().p("AoGi8IoOEAIAYrqIS6BQImTEQITqMAIkADtg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrowalphs, new cjs.Rectangle(-104.5,-67.8,209,135.7), null);


(lib.arrowalphastraight = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#666666").s().p("AirM5IAZyJIm4gBIJSnnIJDHsImPgCIBySHg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrowalphastraight, new cjs.Rectangle(-58.6,-82.5,117.30000000000001,165.1), null);


(lib.alphatest2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.noisybackground();
	this.instance.setTransform(542.1,-376.2,0.3762,0.5421,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.alphatest2, new cjs.Rectangle(-542.1,-376.2,1084.2,752.4), null);


(lib.rightarrowhover = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer_3
	this.instance = new lib.arrowalphs();
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1479,scaleY:1.1479,x:0.5,y:-0.5},4,cjs.Ease.get(1)).wait(1));

	// Layer_1
	this.instance_1 = new lib.rightarrowfiller();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.1479,scaleY:1.1479,x:0.5,y:-0.5},4,cjs.Ease.get(1)).wait(1));

	// Layer_6
	this.instance_2 = new lib.rightarrowshadow();
	this.instance_2.setTransform(-8,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-0.1,regY:0.1,scaleX:1.1479,scaleY:1.1479,x:-8.7,y:8.7},4,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.5,-78.4,249,165);


(lib.QuestionFrame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// question
	this.instance = new lib.questiontext();
	this.instance.setTransform(-8.9,703.65);
	this.instance.shadow = new cjs.Shadow("#000000",3,3,10);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({y:23.65},10,cjs.Ease.get(1)).wait(86).to({y:683.65},13,cjs.Ease.get(1)).to({_off:true},4).wait(39));

	// background
	this.instance_1 = new lib.questionbg();
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.8516},5,cjs.Ease.get(1)).wait(119).to({alpha:0},9,cjs.Ease.get(1)).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-738.1,-434.1,1476.3000000000002,1168.7);


(lib.map = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_27_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgAFAqkMghlAEbMghkgEmMAAAhZCMAhOAEPMAiGgEPMAh7AEPMAg8gEvMAASBZtMgh8AEmg");
	mask.setTransform(0.025,0);

	// Layer_35
	this.instance = new lib.alphatest2();
	this.instance.setTransform(-26.85,-19.8);
	this.instance.alpha = 0.1484;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("EAS6gnvIeOj4MAAABTjI+OD4gEgw4gn7MAi7gD5MgAsBTOMgieAEag");
	this.shape.setTransform(94.425,-0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#87645D").ss(1,1,1).p("AgBg8IBFAAIACA8AhHAAIAAA9IBHAAIBIAAIgCg9AAAAAIAAA9AAAAAIBGAAAhHAAIBHAAAgBg8IABA8AgBg8IhGAAIAAA8");
	this.shape_1.setTransform(172.5,187.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#828C54").s().p("AAAA9IAAg9IBGAAIABA9gAhHA9IAAg9IBHAAIAAA9gAAAAAIgBg8IABA8IhHAAIAAg8IBGAAIBFAAIACA8gAAAAAg");
	this.shape_2.setTransform(172.5,187.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B38138").s().p("AjoAtIAhhZIGRAAIAfBZg");
	this.shape_3.setTransform(182.2,155.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BA3802").s().p("ADfBMIi0AAIhHAAIgOAAIi0AAIhGAEIA8ifIHRAAIA7Cfg");
	this.shape_4.setTransform(182.2,168.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D4842E").s().p("ACFCQIAAjMIhaAAIAADMIkJAAIAAkgIC0AAIAOAAIBHAAIC0AAIAAEggAiogaIAAA8IBIAAIBHAAIgBg8IgCg8IhGAAIhGAAg");
	this.shape_5.setTransform(182.2,190.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9A5C08").s().p("AgsBnIAAjNIBZAAIAADNg");
	this.shape_6.setTransform(190.95,194.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D2500").s().p("AgbAOIAAhwIA3AAIAADFg");
	this.shape_7.setTransform(114.175,86.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A94C00").s().p("AhAB7IAAj1ICBAAIAAD1g");
	this.shape_8.setTransform(85.45,131.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C7460E").s().p("ADcCvIi5jWIhZAAIjDDHIhQAAIEBlOICsAAIA3BTIA3BVIB4C1g");
	this.shape_9.setTransform(95.925,97.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DFC369").s().p("AgYD9IAAj2IiCAAIAAD2IhQAAIAAkwIDDjIIBZAAIC5DWIAAEig");
	this.shape_10.setTransform(94.45,118.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// Layer_7
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#85745D").s().p("AiLA+IAAh7IEYAAIAAB7g");
	this.shape_11.setTransform(171.25,-49.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#717E69").s().p("AiIC+IgHl7IEfABIAAAAIAAF6g");
	this.shape_12.setTransform(170.925,-74.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#87645D").s().p("ADEAaIgMAAIgNAAIgPAAIgDAAIgMAAIkegCIgFAAIgNAAIgEAAIgBAAIgFAAIgbAAIAAgxIGRAAIAAAzg");
	this.shape_13.setTransform(171.175,-95.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B4AF6C").s().p("AivEpIAApRIAHAAIAFAAIABAAIAEAAIANAAIAFAAIAGF8IAAB7IEYAAIAAh7IAAl6IAMAAIADAAIAPAAIAAJPg");
	this.shape_14.setTransform(170.675,-63.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer_8
	this.instance_1 = new lib.hostpital();
	this.instance_1.setTransform(282.95,-167.25,0.298,0.298,0,0,0,0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_9
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#87645D").ss(1,1,1).p("ACZh5IA5AAIAAg7ACZjvIA5AAIAAA7Agwi0IAAg7IA3AAIA4AAIAAA7AiZjvIA4AAIAAA7AjRi0IA4AAIAAA7IA4AAIAAg7AiZjvIAAA7IA4AAAjRi0IAAg7IA4AAAjRi0IAAA7IA4AAAjRgFIAAg7IA4AAIA4AAIAAA7Agwi0IAAA7IA3AAIA4AAIAAg7ABii0IAAg7IA3AAIAAA7IAAA7ABii0IA3AAIA5AAAAHi0IA4AAAAHjvIAAA7IAAA7AgChDIA3AAIAAA7ABii0IAAA7IA3AAABigIIAAg7IA3AAIAAA7IAAA5IA5AAIAAg5Agwi0IA3AAAg6gIIAAg7IA4AAIAAA7IA3AAABigIIA3AAIA5AAABigIIAAA5IA3AAAgCgIIAAA5IA3AAIAAg5AgCC1IA3AAAgCB6IA3AAIAAA7AgCB6IAAA7IAAA7IA3AAIAAg7ABiCwIA3AAIAAA6IA5AAIAAg6ABiCwIAAg7IA3AAIAAA7IA5AAAg6gIIAAA5IA4AAAiZA0IA4AAIAAg5AjRgFIA4AAIAAA5AjRgFIAAA5IA4AAAiZBzIAAA7IA4AAAjRCuIA4AAIAAA6AjRCuIAAg7IA4AAIA4AAIAAA7Ag6C1IAAg7IA4AAAiZgFIA4AAAjRCuIAAA6IA4AAIA4AAIAAg6ABiCwIAAA6IA3AAAg6gIIA4AAAg6C1IA4AAAg6C1IAAA7IA4AAACZB1IA5AAIAAA7AiZhAIAAA7ACZhDIA5AAIAAA7");
	this.shape_15.setTransform(345.35,53.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AA9E52").s().p("Aj1ExIgJphIH9AAIAAJhgAg3C4IAAA6IA3AAIA4AAIAAg6IAAg8Ig4AAIg3AAgABkCyIAAA6IA4AAIA5AAIAAg6IAAg7Ig5AAIg4AAgAjOCwIAAA6IA3AAIA5AAIAAg6IAAg7Ig5AAIg3AAgAjOgDIAAA5IA3AAIA5AAIAAg5IAAg7Ig5AAIg3AAgABkgGIAAA6IA4AAIA5AAIAAg6IAAg7Ig5AAIg4AAgAg3gGIAAA6IA3AAIA4AAIAAg6IAAg7Ig4AAIg3AAgABkiyIAAA7IA4AAIA5AAIAAg7IAAg6Ig5AAIg4AAgAgtiyIAAA7IA2AAIA5AAIAAg7IAAg6Ig5AAIg2AAgAjOiyIAAA7IA3AAIA5AAIAAg7IAAg6Ig5AAIg3AAg");
	this.shape_16.setTransform(345.1,53.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#847C63").s().p("Aj+A1IAyhpIGZAAIAyBpg");
	this.shape_17.setTransform(345.1,17.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6F7D5E").s().p("AgCDwIAAg7IA4AAIAAA7gAg6DwIAAg7IA4AAIAAA7gACaDqIg4AAIAAg6IA4AAIAAA6IAAg6IA4AAIg4AAIAAg7IA4AAIAAA7IAAA6gAiZDoIg4AAIAAg6IA4AAIg4AAIAAg7IA4AAIAAA7IAAg7IA5AAIAAA7IAAA6gAiZDoIAAg6IA5AAIg5AAgAgCC1IAAg7IA4AAIAAA7gAgCC1gAg6C1IAAg7IA4AAIAAA7gACaCwgABiCwIAAg7IA4AAIAAA7gACaCwgAjRCugAiZBzgAiZA0IAAg5IA5AAIAAA5gAjRA0IAAg5IA4AAIg4AAIAAg7IA4AAIA5AAIAAA7Ig5AAIAAg7IAAA7IAAA5gACaAxIAAg5Ig4AAIAAg7IA4AAIAAA7IAAg7IA4AAIAAA7Ig4AAIA4AAIAAA5gABiAxIAAg5IA4AAIAAA5gAgCAxIAAg5IA4AAIAAA5gAg6AxIAAg5IAAg7IA4AAIA4AAIAAA7Ig4AAIAAg7IAAA7Ig4AAIA4AAIAAA5gADSgIgAgCgIgACah5IAAg7IA4AAIAAA7gACah5Ig4AAIAAg7IA4AAIg4AAIAAg7IA4AAIA4AAIAAA7Ig4AAIAAg7IAAA7IAAA7gAAHh5IAAg7IA5AAIAAA7gAAHh5Ig3AAIAAg7IA3AAIg3AAIAAg7IA3AAIA5AAIAAA7Ig5AAIAAg7IAAA7IAAA7gAiZh5IAAg7IAAg7IA5AAIAAA7Ig5AAIA5AAIAAA7gAjRh5IAAg7IA4AAIAAA7gACai0gABAi0gAAHi0gAiZi0gAiZi0gAjRi0IAAg7IA4AAIAAA7g");
	this.shape_18.setTransform(345.35,53.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// Layer_10
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990000").s().p("Ag8hyIB6AAIAACTIh0BSg");
	this.shape_19.setTransform(60.05,-204.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BAE4F6").s().p("ABGBSIAAijIBWAAIAACjgAibBSIAAijIBWAAIAACjg");
	this.shape_20.setTransform(75.65,-168.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E15200").s().p("Aj7C3IAAltIH4AAIAAFtgABIBAIBWAAIAAikIhWAAgAiZBAIBWAAIAAikIhWAAg");
	this.shape_21.setTransform(75.45,-166.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BF5400").s().p("AjiB9IhKAAIB1hSIB1hRIB5hXID3DgIgYAag");
	this.shape_22.setTransform(72.95,-197.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// Layer_11
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#7E674D").ss(1,1,1).p("AlhAAIgEhUIA5AAIA5AAIAABUIAABVIg1AAIg0AAIgFhVIA3AAIACBVAD4AAIgEhUIA5AAIA5AAIAABUIAABVIg1AAIg0AAIgFhVIA3AAIACBVAEvAAIA3AAAkqAAIA3AAAkshUIACBUAEthUIACBU");
	this.shape_23.setTransform(259.85,2.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#957E4B").s().p("Ag/htIB3AAIAIDZIh/ACg");
	this.shape_24.setTransform(260.825,4.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#93AB81").s().p("AEyBVIgDhVIADBVIg1AAIgFhVIA3AAIA3AAIAABVgAknBVIgChVIACBVIg1AAIgFhVIA4AAIg4AAIgEhUIA5AAIADBUIA2AAIAABVgAEvAAIgChUIACBUIg3AAIgEhUIA5AAIA5AAIAABUgAD4AAgAjzAAIg2AAIgDhUIA5AAIAABUgAkshUg");
	this.shape_25.setTransform(259.85,2.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B64F18").s().p("AhRBaIAAizICjAAIgCCzg");
	this.shape_26.setTransform(262.2,-47.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B4581D").s().p("AmriBIEVAAIgKEPIkLADgAlZANIAFBUIA1AAIA0AAIAAhUIAAhUIg5AAIg5AAgADViQIDIAAIAOEWIjaADgAEAANIAFBUIA1AAIA0AAIAAhUIAAhUIg5AAIg5AAg");
	this.shape_27.setTransform(259.05,1.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CDBC83").s().p("AmjAzIAAhWIEXgDIgDBZgADcAjIABhUIDDAAIAEBUg");
	this.shape_28.setTransform(258.325,-16.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CDB879").s().p("AipAAIAChaIADhuIhaAAIAAhGIC5AAIChAAICjAAIAAA8Ig8AAIAABtIgBBWIgEEZIh/ACIgIjbIh3AAIAADcIhzACg");
	this.shape_29.setTransform(260.95,-11.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).wait(1));

	// Layer_12
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#7E674D").ss(1,1,1).p("AAAgnIAAAnIAAAoAjZAAIDZAAIDaAA");
	this.shape_30.setTransform(61.2,-82.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7E794C").s().p("AAADlIjZAAIAAgoIAAgoIDZAAIAAAoIjZAAIDZAAIAAAoIAAgoIAAgoIDaAAIAAAoIjaAAIDaAAIAAAogAAAC9gAAACVgABbhiIAAiCIA7AAIAACCg");
	this.shape_31.setTransform(61.2,-101.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CF4A0E").s().p("Ag+EgIAAjdICGAAIgFDdgAjykfIFdAAIA8AAIBfAAIBMDEIgzABIoqAAIhGAJg");
	this.shape_32.setTransform(59.525,-82.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EBB452").s().p("AAyC9IAFjbIiGAAIAADbIjNAAIAAl5IIqAAIAPF5gAjZhgIAAAoIDZAAIDZAAIAAgoIAAgoIjZAAIjZAAg");
	this.shape_33.setTransform(61.25,-72.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).wait(1));

	// Layer_13
	this.instance_2 = new lib.pinetree("synched",0);
	this.instance_2.setTransform(50.9,140.05,0.0692,0.0692,0,0,180,-1500.8,-844.6);

	this.instance_3 = new lib.pinetree("synched",0);
	this.instance_3.setTransform(-61.55,112.1,0.0692,0.0692,0,0,180,-1500.8,-844.6);

	this.instance_4 = new lib.pinetree("synched",0);
	this.instance_4.setTransform(-190.7,111.2,0.0692,0.0692,0,0,180,-1500.8,-844.6);

	this.instance_5 = new lib.pinetree("synched",0);
	this.instance_5.setTransform(-302.7,81.85,0.0692,0.0692,0,0,180,-1500.8,-844.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Layer_33
	this.instance_6 = new lib.slide();
	this.instance_6.setTransform(-91.1,-138.7,0.299,0.299,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Layer_14
	this.instance_7 = new lib.shed();
	this.instance_7.setTransform(153.5,54.5,0.4075,0.4075,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Layer_15
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#709360").ss(1,1,1).p("AACAAIACBMIhYAAIgEhMIBaAAIBaAAIAABMIhYAAAAAhLIBcAAIAABLAAAhLIACBLAhYAAIgEhLIBcAA");
	this.shape_34.setTransform(-59.1,63.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CC8936").s().p("AgiA6IAAhyIBFAAIAAByg");
	this.shape_35.setTransform(-66.35,23.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9EB28D").s().p("AAEBMIhYAAIgEhMIBaAAIACBMIgChMIBaAAIAABMgAACAAIgChLIBcAAIAABLgAhYAAIgDhLIBbAAIACBLg");
	this.shape_36.setTransform(-59.1,63.725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B99440").s().p("AENBbIoWAAIgjAAIBfi1IDWAAIBGAAICRAAIBNC1g");
	this.shape_37.setTransform(-70.725,37.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EDBC57").s().p("Ag2CcIAAjqIiWAAIAFDqIhEAAIAAk3IIXAAIgGE3gAAaAKIAEBMIBZAAIBYAAIAAhMIAAhLIhcAAIhcAAg");
	this.shape_38.setTransform(-70.6,62.725);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A16323").s().p("AhFB2IgFjrICVAAIAADrg");
	this.shape_39.setTransform(-83.6,66.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]}).wait(1));

	// Layer_16
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#709360").ss(1,1,1).p("AitiWIg8AAIAAA5IAAA4IA9AAIA+AAIgBg4AishdIAAA4AjmBkIA3AAIAABCIA3AAIAAhDIAAhDIg3ACIAABCIA3gBAivAiIg3ABIAABBIAABCIA3AAAjphdIA9AAIA9AAAitiWIABA5ACZixIhDAAIAABDIBDgCIBCgCIAAA+IhCAEACZixIBCAAIAAA/ACZhwIAABAIhDAEIAAhCACQBhIAtACIAtABIAAhOIgtgCIAABPIAABOIAtAAIAAhNAC9AUIgtgDIAABQIAABQIAtAAAitiWIA8AAIACA5ACZixIAABB");
	this.shape_40.setTransform(-308,-61.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#92A064").s().p("AgaBBIAAiBIAzAAIADCBg");
	this.shape_41.setTransform(-309.85,-100.85);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#99601D").s().p("AEcAkIotAAIgqAAIAAhHIEVAAIA2AAIEsAAIAABHg");
	this.shape_42.setTransform(-308.725,-90.725);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#889360").s().p("AC9CyIAAhPIAtABIgtgBIAAhPIAABPIgtgBIAAhRIAtADIAtADIAABNIAABOgACQCyIAAhQIAtABIAABPgAiuCmIAAhCIA2gBIAABDgAjlCmIAAhCIgBhBIA3gBIABBCIg3AAIA3AAIAABCgAivAiIA3gBIAABCIg2ABgAC9BjgAivAigAisgkIAAg5IA9AAIABA5gAjpgkIAAg5IAAg5IA8AAIA9AAIABA5Ig9AAIgBg5IABA5IAAA5gAishdIg9AAgABXhuIAAhDIBCAAIBCAAIAAA/IhCACIAAhBIAABBIBCgCIAAA+IhCAFIAAhBIhCACIBCgCIAABBIhCADgAishdgADbhyg");
	this.shape_43.setTransform(-308,-61.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EA6B01").s().p("AhBBuIgDjbICGAAIADDbg");
	this.shape_44.setTransform(-306.975,-46.35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A16323").s().p("ABREDIgCjcIiGAAIACDcIjhAAIAAoFIItAAIAAIFgACSBeIAABQIAtAAIAtAAIAAhOIAAhNIgtgDIgtgCgAitAeIg3ABIABBCIAABBIA3AAIA2AAIAAhCIAAhDgAjnhhIAAA5IA+AAIA9AAIgBg5IgBg5Ig8AAIg9AAgABZhyIAABCIBCgDIBCgEIAAg/IAAg+IhCAAIhCAAg");
	this.shape_45.setTransform(-308.225,-61.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]}).wait(1));

	// Layer_17
	this.instance_8 = new lib.pinetree("synched",0);
	this.instance_8.setTransform(123.1,207.9,0.0692,0.0692,0,0,180,-1500.8,-844.6);

	this.instance_9 = new lib.pinetree("synched",0);
	this.instance_9.setTransform(-251.25,200.3,0.0692,0.0692,0,0,180,-1500.8,-844.6);

	this.instance_10 = new lib.pinetree("synched",0);
	this.instance_10.setTransform(-162,-62.55,0.0692,0.0692,0,0,180,-1500.8,-844.6);

	this.instance_11 = new lib.pinetree("synched",0);
	this.instance_11.setTransform(364.85,-160.6,0.0692,0.0692,0,0,180,-1500.8,-844.6);

	this.instance_12 = new lib.pinetree("synched",0);
	this.instance_12.setTransform(371.1,-27.4,0.0692,0.0692,0,0,180,-1500.8,-844.6);

	this.instance_13 = new lib.pinetree("synched",0);
	this.instance_13.setTransform(10.9,-65.7,0.0692,0.0692,0,0,180,-1500.8,-844.6);

	this.instance_14 = new lib.pinetree("synched",0);
	this.instance_14.setTransform(-137.8,28.75,0.0692,0.0692,0,0,180,-1500.8,-844.6);

	this.instance_15 = new lib.pinetree("synched",0);
	this.instance_15.setTransform(-49.7,-186.55,0.0692,0.0692,0,0,180,-1500.8,-844.6);

	this.instance_16 = new lib.pinetree("synched",0);
	this.instance_16.setTransform(-265.4,-26.95,0.0692,0.0692,0,0,180,-1500.8,-844.6);

	this.instance_17 = new lib.pinetree("synched",0);
	this.instance_17.setTransform(-319.4,-195.7,0.0692,0.0692,0,0,180,-1500.8,-844.6);

	this.instance_18 = new lib.pinetree("synched",0);
	this.instance_18.setTransform(-328.25,-144.95,0.0692,0.0692,0,0,180,-1500.8,-844.6);

	this.instance_19 = new lib.pinetree("synched",0);
	this.instance_19.setTransform(-192.45,-121.95,0.0692,0.0692,0,0,180,-1500.8,-844.6);

	this.instance_20 = new lib.pinetree("synched",0);
	this.instance_20.setTransform(-154.2,-200.95,0.0692,0.0692,0,0,180,-1500.8,-844.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Layer_18
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF6600").s().p("Ahwh+IDmAAIAAD2IjsAHgAAiBXIgFgzIAxAAIAAg6IgzAAIAAhNIg5AAIACBNIguAAIgFA6IA9AAIAAAzIA0AAg");
	this.shape_46.setTransform(275.55,81.25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgRBdIAAgyIg9AAIAFg7IAuAAIgChMIA5AAIAABMIAzAAIAAA7IgxAAIAFAyg");
	this.shape_47.setTransform(275.45,80.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46}]}).wait(1));

	// Layer_19
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#8BB3B8").s().p("AGqCPIgkAAIl6jPImWDPIgWAAIg6AAIH1kdIHAEdg");
	this.shape_48.setTransform(273.925,68.775);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#529E97").s().p("AD/CDIAAkAIBkAAIAAEAgAliCDIAAkAIBjAAIAAEAgABJAQIAAiSICTAAIAACSgAi0AQIAAiKICLAAIAACKg");
	this.shape_49.setTransform(274.35,108.225);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CBDDE2").s().p("ADWGZIAAkWImGAAIAAEWIj1AAIAAphIAXAAIGWjQIF6DQIAkAAIAAJhgAD/C1IBkAAIAAkAIhkAAgAliC1IBjAAIAAkAIhjAAgABJBCICTAAIAAiSIiTAAgAi0BCICLAAIAAiKIiLAAg");
	this.shape_50.setTransform(274.35,103.225);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E15500").s().p("AB8CLIgDjCIjoAAIAADCIhTAAIAAkVIGFAAIAAEVg");
	this.shape_51.setTransform(276.2,130.225);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3592B5").s().p("Ah1BiIAAjCIDoAAIADDCg");
	this.shape_52.setTransform(276.8,134.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]}).wait(1));

	// Layer_21
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#89650A").s().p("Ag3BkIgBjHIBxAAIAADHg");
	this.shape_53.setTransform(-141.725,145.975);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B7E2F7").s().p("ABvBJIAAiQICWAAIAACQgAkDBJIAAiQICUAAIAACQg");
	this.shape_54.setTransform(-142.8,130.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#99610A").s().p("Al5BLIBriVIIUAAIB0CVg");
	this.shape_55.setTransform(-142.7,103.15);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C48401").s().p("AlSAgIgpAAIAAg/ILzAAIAEA+IgZABg");
	this.shape_56.setTransform(-142.55,113.85);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EA9200").s().p("AA5DCIAAjHIhxAAIABDHIkjAAIAAmEIK1AAIAAGEgABlANICVAAIAAiQIiVAAgAkOANICUAAIAAiQIiUAAg");
	this.shape_57.setTransform(-141.725,136.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]}).wait(1));

	// Layer_22
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#AA9E6A").s().p("AGRAgIiPAAIhWAAIiAAAIhmAAIh5AAIhgAAIiIAAIg9AAIAAg/IOwAAIAAA/g");
	this.shape_58.setTransform(-265.4,-210.225);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6D6F45").s().p("ADSDKQACgUgHgRQgIgRgNgEIgEgJIAAlQIBXAAIAAFZQgNAEgIARQgHARACAUgAgVDKQACgTgIgQQgHgSgNgDIgCAAIAAlbIBmAAIAAFQIgIACQgMADgIARQgIARACATIAAAJgAj0DKQACgUgIgRQgGgPgKgEIAAlbIBfAAIACFZQgOAEgIARQgIARACAUg");
	this.shape_59.setTransform(-266.275,-186.825);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#837C4F").s().p("AHWCsInpkOInHEOIgfgrIHPksIIkEvIggAog");
	this.shape_60.setTransform(-265.2,-230.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A6A073").s().p("AnYCIIHHkOIHpEOg");
	this.shape_61.setTransform(-265.4,-226.95);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#77784B").s().p("AnoAfIACg8IAcAAIOLgCIAoAAIAAA+g");
	this.shape_62.setTransform(-265.45,-159.55);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#706F42").s().p("AnFgTIAVAAIC5AAIAvAAICwAAIAoAAIC/AAIAfAAIDDAAIAVAAIAAAlIuLACg");
	this.shape_63.setTransform(-265.975,-164.55);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A79E6B").s().p("ACAAiIAAgKQgBgTAHgPQAIgRAMgEIAIgCICAAAIAEAKQAMADAIARQAIAQgCAVgAhXAiQgCgVAIgQQAHgRAPgDIAAADIB2AAIAAgBIACAAQANADAHARQAIAQgCATgAk/AiQgCgVAIgQQAHgRANgDIAAADICFgBIADgBQALAFAGAOQAIAQgCAVg");
	this.shape_64.setTransform(-277.2489,-169.975);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#A29B71").s().p("ADgDKQgCgUAIgRQAIgRANgEIAAlZICPAAIAAFZQAMAEAIARQAHARgBAUgAi5CUIAAgEIgClZIB5AAIAAFbIAAACgAmjCQIAAlZICIAAIAAFbIgDAAIiFACgAAkCHIAAlQICAAAIAAFQg");
	this.shape_65.setTransform(-264.6375,-186.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]}).wait(1));

	// Layer_23
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#4A512D").ss(3,1,1).p("AAQhtIA6AAIAAhCIg6AAgADOhtIAAA6IBCAAIAAg6IAAg6IhCAAIAAA6IBCAAAjOhtIAAg6IhBAAIAAA6IAAA6IBBAAgAkPhtIBBAAAAQivIg4AAIAABCIA4AAAkPB1IBBAAIAAg6IhBAAIAAA6IAAA6IBBAAIAAg6AEQB1IAAg6IhCAAIAAA6IAAA6IBCAAgADOB1IBCAA");
	this.shape_66.setTransform(154.6,-194.65);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E75200").s().p("AApGpIACi8IhcAAIAAC8IgvAAIgCjwIDGAAIAADwgAmDjGIGDjiIGEDng");
	this.shape_67.setTransform(155.525,-205.25);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C07201").s().p("AFpAdIrhAAIgSAAIAAg5IAEAAIABAAIACAAIAHAAIMHAGIAAAzg");
	this.shape_68.setTransform(154.8,-222.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E55700").s().p("ACaEcIAAkyIkZAAIgCEyIjtAAIgCo3ILhAAIAAI3gADVBSIAAA6IBBAAIAAg6IAAg6IhBAAgAkJBSIAAA6IBCAAIAAg6IAAg6IhCAAgADViRIAAA6IBBAAIAAg6IAAg5IhBAAgAkJiRIAAA6IBCAAIAAg6IAAg5IhCAAgAgiiRIA5AAIA6AAIAAhBIg6AAIg5AAg");
	this.shape_69.setTransform(153.975,-191.075);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E8A800").s().p("ABoCZIAAjvIjGAAIACDvIgxAAIACkyIEZAAIAAEyg");
	this.shape_70.setTransform(155.175,-178.05);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6A653B").s().p("AguBeIAAi7IBdAAIgCC7g");
	this.shape_71.setTransform(155.175,-172.125);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#AAE2F9").s().p("ADOCvIAAg5IBCAAIAAA5gAkPCvIAAg5IBBAAIhBAAIAAg7IBBAAIAAA7IAAA5gAEQB2IhCAAIAAg7IBCAAIAAA7gADOB2gAkPB2gADOgzIAAg6IBCAAIhCAAIAAg6IBCAAIAAA6IAAA6gAkPgzIAAg6IBBAAIAAA6gAAQhtIAAhCIA7AAIAABCgAgohtIAAhCIA4AAIAABCgAjOhtIhBAAIAAg6IBBAAIAAA6gAkPhtgAAQivg");
	this.shape_72.setTransform(154.6,-194.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]}).wait(1));

	// Layer_24
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#8D8364").ss(1,1,1).p("Ai8ggIAAhbIh6AAIAABYIAABPIA6ACIgBBOIA5AAIAChNAi8ggIgGBPAk2AsIAABQIA5AAAj7ggIgBBOIA6ABAk2gjIA7ADIA/AAAE4ggIAAhbIh6AAIAABYIA6AAIAABRIgBBOAE4ggIgGBPAC+AsIA6ACIA6ABAC+gjIAABPIAABQIA5AAIA5AAIAChNAD4gjIBAAD");
	this.shape_73.setTransform(328.8,-94.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#E1692C").ss(1,1,1).p("AAAhHIg6AAIAABHIAABIIA2AAIA1AAIAFhIAgCAAIA4AAAAAhHIA7AAIgFBHAAAhHIgCBHIgCBIAg6AAIA4AA");
	this.shape_74.setTransform(328.85,-105.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#8D9563").s().p("AD2B8Ig4AAIAAhQIAAhPIA6AAIAABQIAAhQIA/ADIgFBPIg6gCIg6gBIA6ABIgCBPIAChPIA6ACIgCBNgAj9B8IABhPIg7gBIA7ABIgBBPIg6AAIAAhQIAAhPIAAhYIB7AAIAABbIg/AAIA/AAIgGBPIg6gCIA6ACIgCBNgAj8AtIABhNIg8gDIA8ADgAD4AtgAD4gjIg6AAIAAhYIB5AAIAABbgAi8gggAD4gjg");
	this.shape_75.setTransform(328.8,-94.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EABF50").s().p("AiSCCIgCAAIA8h9IBXiRIBICXIBOCBg");
	this.shape_76.setTransform(328.45,-129.85);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#AE7B3C").s().p("ACWBDIhOiAIE0CAgAl7A5IEkh8Ig8B8g");
	this.shape_77.setTransform(328.35,-122.55);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#87470C").s().p("ACWAZIAAgnIDmAAIAAAngAl7AZIAAgxIDoAAIAAAxg");
	this.shape_78.setTransform(328.375,-114.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#AD823C").s().p("Al+izIDpAAIAAFiIjpAFgAk1gtIAABPIAABQIA6AAIA5AAIAChNIAGhPIAAhbIh7AAgACUCvIAAliIDmAAIAEFigADAgtIAABPIAABQIA4AAIA6AAIAChNIAFhPIAAhbIh5AAg");
	this.shape_79.setTransform(328.6,-93.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E17F29").s().p("AgEBIIAChIIg4AAIA4AAIgCBIIg2AAIAAhIIAAhHIA6AAIA7AAIgFBHIg4AAIAChHIgCBHIA4AAIgFBIgAgCAAg");
	this.shape_80.setTransform(328.85,-105.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E8C148").s().p("AA1DKIAGiUIh7AAIgGCUIhOAAIAAlhIACgzIEnAKIAAApIAAFhgAg2hZIAABIIA2AAIA1AAIAFhIIAFhIIg7AAIg6AAg");
	this.shape_81.setTransform(328.45,-96.55);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C6420B").s().p("AhABKIAGiTIB7AAIgGCTg");
	this.shape_82.setTransform(327.875,-83.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]}).wait(1));

	// Layer_25
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#87645D").ss(1,1,1).p("ADWAEIAlAAIglg+ImyAAIgeA7IA3ABIghA5IAhAAIGPAAIAoAAgAjDACIGZAC");
	this.shape_83.setTransform(-5.725,-203.725);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#877A59").s().p("ADMA7ImPAAIghAAIAhg5Ig3gBIAeg7IGyAAIAlA+IglAAImZgCIGZACIAeA3g");
	this.shape_84.setTransform(-5.725,-203.725);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C3D18D").s().p("AArCNIg+AAIi0AAIAAkZIGPAAIAAEZg");
	this.shape_85.setTransform(-5.35,-183.725);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#A78645").s().p("AgeBaIAAizIA9AAIAACzg");
	this.shape_86.setTransform(-4.225,-160.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]}).wait(1));

	// Layer_26
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#7E794C").ss(1,1,1).p("AAkj7QALgfAAgXQAAgigQgfQgSglgZAAQgVAAgSAgQgQAbAAAWQAAASANAfQANAcAAABQAAAGgNAKQgSAOgKAJQgqAjAAAtQAAA9AqA9QAHAKAHAIIAAABQAkAqAlAAQA7AAAlgcQAKgIALggQAIgagZgzQgJgQgHgNAAkj7QARAXAIAOQABABAAAGQAAAKArBqQgGgNgJgOQAAgBgBgCQgNgWgNgQQABAAgBAAQABABgBABIAPAUQgBgBgBgBIgNgUAAfjrQADgJACgHAA/inQAAAAAAAAIgBgBIAAABAA/idQABAFAAAFQAAAYgCATQgBANgDALQgOA0gsAAQgdAAgIggQgFgRgIglAA/inQAAAEAAAEIAYAkIACADQAAAAAAgBQgVgngFgHgABRiEQAFAJATAgABXh7QgDgFgDgEIAAAAQgCgCgBgDIADAFABtAiQgBAZABAgIgGAHQgDACgCADQgBAAgBABQgDAEgDAEQgBABAAABQgBABgCACQgHAIgJAMQgMAPgJALQgKANgGAGABtBbIADARQABADAAADIAAAAQABAPAAAEQAEAQABAOQAEAjACAWQAAAGAAAFQAAAFAAAFIAAABIAAABQgCAjgIAmABtBbQAAAggBAFQgLAQgHATQgKAagEAfQAAACAAAAQgCAJAAAKQgDAmACBDABxFGQgBAFgBAHQgDAJgDAIQAAABAAABQgEAMgFAKQgFALgGAJAgZDiQAMAZAAA6QgCBAAAAUABwBsQAAADABADAhEAMQAAAAAAABAhsGYQABhGAag2IgBAKIAFAAQgCgFgBgGQgIgagIgfQgLgrgBgUQAAgCAAgCQAAgSAEgYQACgOAEgOQALgxANgTQACgEACgDIACgBIAAgC");
	this.shape_87.setTransform(-321.65,137.275);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#87645D").ss(1,1,1).p("ABbgIQgBAFgBAEABqhSIgFAAABXANQgGAPgJAaQgFANgGAQAhpgoIABgB");
	this.shape_88.setTransform(-319.225,169.775);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#7E8E4D").s().p("AhrGYQAAhGAbg2IgCAKIAFAAIgDgLIgQg5QgKgrgBgUIAAgEQAAgSADgYQACgOAEgOQAMgxAMgTIAEgHIACgBIAAgBIAAgBQgHgIgHgKQgqg9AAg9QAAgtAqgjQAKgJATgOQANgKgBgGIgMgdQgOgfAAgSQAAgWAQgbQASggAVAAQAZAAASAlQAQAfAAAiQAAAXgKAfQARAXAHAOIABAHQAAAKArBqQAZAzgIAaQgLAggJAIQgmAcg7AAQglAAgkgqQAkAqAlAAQA7AAAmgcIAHAIQgBAZACAgIgIAHIgEAFIgCABIgGAIIgBACIgDADIgQAUIgVAaIgQATIAQgTIAVgaIAQgUIADgDIABgCIAGgIIACgBIAEgFIAIgHQAAAggCAFQgLAQgHATQgKAagEAfIAAACQgCAJABAKQgCAZgBAmIABAqIgBgqQABgmACgZQgBgKACgJIAAgCQAEgfAKgaQAHgTALgQIAGAFIAFAeQAFAjABAWIAAALIAAAKIAAABIAAABQgBAjgJAmIgCAKIgCAMIgPApQgEALgHAJIAAAJgAgOGJIABhUQAAg6gMgZQAMAZAAA6IgBBUgAglg8QAIAgAdAAQAsAAAOg0QADgLABgNQACgQAAgVIAAgGIAAgKIANAUIgNgUIAAAKIAAAGQAAAVgCAQQgBANgDALQgOA0gsAAQgdAAgIggIgNg2IANA2gABphbIgOgbIgCgCIAAAAIAAAAIgCgDIgXgkQAMAQANAXIgaguIABAHIAAAAIAAABIAAAAIAAABIAAgBIAAAAIAMATIABACIgBgCIgMgTIAAgBIAAAAIAXAkIgGgJIgEgFIAEAFIAYApIAAAAgAA/imIAAgBIAAABgAA+inIABAAIgBgBgAAfjrIAGgQIgGAQgABgF7IAAAAgABvFSIgGARIAAACIgJAWIAPgpgABvFSIAAAAgABphbIAAAAgABphbIAAAAgABRiEIAAAAIAGAJIACADIAQAdIgYgpgABZh4IAAAAIAAAAIACACIAOAbIgQgdgABZh4IAAAAgABNiJIAEAFIAAAAIgEgFgABRiEIAAAAgABAifg");
	this.shape_89.setTransform(-321.65,137.275);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#BDA16A").s().p("AijB6IAAjzIA7AAIDAAAIBLAAIAADzg");
	this.shape_90.setTransform(-321.95,190.25);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#92924B").s().p("AjxAqIAAhTIBeAAIFGAAIA/AAIAABTg");
	this.shape_91.setTransform(-323.525,206.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]}).wait(1));

	// Layer_28
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D38B55").s().p("A8AOYIAAh1IBGAAIAAB1gA8AKwIAAhVIBBAAIAABVgA8AHoIgChCIBIAAIAABCgAbCnZIAAhoIBAAAIAABogAbHqoIAAhNIA7AAIAABNgAbCtcIAAg7IBBAAIgBA7g");
	this.shape_92.setTransform(-0.9,-63.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D57A27").s().p("A6wNAIhGAAIhgAAIAAhzIBgAAIBAAAIBdAAIBWA7IhZA4gA62J3IhAAAIhlAAIhZg3IBVg8IBpAAIBGAAIBNAAIAABzgAcLokIhAAAIhKAAIhQgyIBNg1IBTAAIA6AAIBVAAIAABngAcLrYIg6AAIhLAAIAAhnIBFAAIBAAAIBeAAIBMA1IhQAyg");
	this.shape_93.setTransform(-1.85,-66.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92}]}).wait(1));

	// Layer_29
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#BE7259").ss(1,1,1).p("AkbhNIgCgCQAAgFgCgNQAAgsBrgYQBVgTAqAFIAAAgAEbhNIADgCQAAgFACgNQAAgshsgYQhUgTgqAFIAAAgAEfgHQAlgfglgoQgCABgCAAQiLAdiIgEQgDAAgCAAAEfgHQAoAsgoAmQigAUh3AAQgDAAgCAAAkeBLQCgAUB3AAQADAAACAAAkbhNQCLAdCJgEQADAAACAAAEfgHQiiAah1ADQgDAAgCAAAEfBLQAYAkgYAkQiPAkiIgCQgDAAgCAAAkeBLQgYAkAYAkQCPAkCIgCQADAAACAAAkegHQgoAsAoAmAkegHQglgfAlgoQAAAAABABQABAAABAAAkegHQCiAaB1AD");
	this.shape_94.setTransform(42.2,11.6622);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#98916F").s().p("Ag1BJIAAghIAAhwIAqABIAFAAIAGAAIAHAAIASAAIAdAAIAABvIAAAhg");
	this.shape_95.setTransform(42.2,-10.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D7CA87").s().p("AAHEWIgEAAIgFAAIgEAAQiJACiPgjQgYgkAYglQCgAVB4AAIAEAAIgEAAQh4AAiggVQgoglAogtQCiAbB2ACQh2gCiigbQglgfAlgoIACAAIACABQCKAcCKgDIAEAAIAFAAIAEAAQCKADCLgcIADgBQAlAoglAfQAoAtgoAlQigAVh4AAIgEAAIAEAAQB4AACggVQAYAlgYAkQiHAhiCAAIgPAAgAAHB3QB2gCCigbQiiAbh2ACIgEAAIAEAAgAAHjCIgHAAIgGAAIgFAAIgqgBQg+gDhAgJQgfgbAfgrQAMAJAfAIQA0AOBJAAIAFAAIAGAAIAHAAIAGAAQBIAAA0gOQAegIAMgJQAgArggAbQg/AJg+ADIgdABg");
	this.shape_96.setTransform(42.2,1.9303);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#BE935C").s().p("AAHBAIgEAAIgFAAIgEAAQiKADiKgcIgCgDIgDgRQAAgrBrgYQBVgTAqAEIAAAhIBrAAIAAghQAqgEBUATQBsAYAAArIgDARIgBADQh8AZh7AAIgeAAg");
	this.shape_97.setTransform(42.2,0.0011);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#CC8936").s().p("AAHAtIgHAAIgGAAIgFAAQhJAAg0gNQgfgJgMgJQgHgHAAgHQgBgSAzgNQA0gNBJAAIAFAAIAGAAIAHAAIAGAAQBIAAA0ANQAyANAAASQABAHgJAHQgMAJgeAJQg0ANhIAAIgGAAg");
	this.shape_98.setTransform(42.2,-27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]}).wait(1));

	// Layer_30
	this.instance_21 = new lib.sign();
	this.instance_21.setTransform(-57.2,-82.75,0.7449,0.7449,0,0,180);

	this.instance_22 = new lib.sign();
	this.instance_22.setTransform(344.75,162.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21}]}).wait(1));

	// Layer_31
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6A703F").s().p("AB5CaIAAifIA0AAIAACfgAisCaIAAifIA0AAIAACfgAB5haIAAg/IBBABIAAA+gAi4haIAAg+IBBgBIAAA/g");
	this.shape_99.setTransform(276,189.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#8C5C0F").s().p("ACtCUIg0AAIjxAAIg0AAIhYAAIBMhVIBBAAIDwAAIBBAAIBKBVgAC6ABIhBgBIh5gBIAAAAIh3ABIhBABIh9ACIBKiWIHXAAIBLCWg");
	this.shape_100.setTransform(276,174.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99}]}).wait(1));

	// Layer_32
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#DA9425").s().p("EgGJAieIAAgFIi/AJQBRiAhZhnQqPh0idgaQr1h5kkl7QgfgugagzQhYirghi9Qgfi0gXi0QgLhXgJhXQhihRhchbQiOiNi1hUQithRk6hmQhkiNBkiOQEdAsBFApIANAKIgCgEIgLgGQAgm/CTjrQCUjrEVgKQEVgLFAFzQFAFziTF1QiSF1BtCaQBeCECzAZIAAgBQAAgCH8ClQH7CkB9ObQDFAuAKgGQBUAfgTloIAGhzQAWoEAIgjQAWhcABhgQAChVAAhUQAAhhgahcQgahbgvhUQgohIhHgsQhTg1hZgtQhZgthdgiQhYghhQgzQhQgyhEhCQhEhCg4hPQg4hNgphYQgmhUgjhVQgkhWgghYQgjhcglhcQglhcgohaQgohbg9hNQg8hOhNg/QhKg9hYgnQhWgmhhgQIASkYQEaAtDlCpQD5C4BgEgQA+C6A2DAQBREiDyCzQDsCuEBCQICDBLIAKgQQhxntECmzQELnDHliCQBAgSBEAJIDICUQoIBekiGsQkRGTBWHqICnO5QAZCMAMCOIANgBQAgicDUikQBLg5BvhFICqhoQAvgeCmhaQB8hEA+gxQBYhGArhVQAyhjAAiKQAAiCgviFQgghahHiEQhTiZgUgwQgvhuAAhZQAAh+AohxQAchQBIh+QAXgqBvhyQA6g6BEhCIEEAKIiRCgQhMBWgqBDQhrCuAAEHQAAByAxCCQATAzBRCqQBACFAUBVQAbB4gdBxIATAEQBdhVDFidQCjiCBIhLQBrhyAyiCQA6iUAAjOQAAkMiXieQhrhwj/huIgRgHIAxkoIABgEQBrAfB+BRQCDBVBuByQEKEUAAEbQAAAMgKA/IgGApIAEAFQApgcAqhpQA0iBANhPQAOhOgFgbQgFgaAAgJICWgKQBBABANBiQAMBigSBSQgTBRg3CSQg4CRhuBTQiABag9AyQhpBYgwBiQiAEAhpB6QiJCgkECXQh8BIkxDvQkQDWnTD/QilB6hGDZQgvBxAhCZQAhCaDgBaQIok4EGhFQDig7DMhyIBAgmQBRgxAWhRQAriZikkIIgPAEIgUhDQgTg+gMgiIAGgBIATgKQCPhLEqiPQEkiRCuh2QDwijCCi2QCajWAUkDIEHidIiFLDIjxECQi/DBiABYQhnBFjfB2QkmCcgeARIgUAHQB1E6iLE4QgPAjgTAkQgJAQgFASIUeqwIFgBUQkEERikBrQmgEQndCZQnDCSr8CfQjIAqiGAzQl8CSCODhgEgmfAHyIARAaIAgB1QAsCxBHCpQAqBjBABVQDoD6FOBCQFzBHGFA8IgGgBQBWqKpyi2Qpyi2gogCQjCgTizhPIgMgGgEgi7AGbQAoCfg6jsQg6jrA/m7QA/m6i2iOQi2iOiiAUIgwAHQgohahCBlQAPgFAjADQg7AKgBAIQgWAkgYA3QiDEugQFpIAAAAQB6BNBSA+QBVA/DmCeQCsB4BnBEQAAgGABAAQAGAAAgCDgA7OGtIABAAIgpgDIAAAAIAAAAIAoADgAlwPPIADgLIABAtIgEgig");
	this.shape_101.setTransform(-4.9706,15.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_101).wait(1));

	// Layer_5
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#5DAB12").s().p("Eg4bAl5QhqhQAAh2QAAggAVg0QAWg0AAgtQAAgmgfgoQgDgFg+hDQgsgxgVgsQgeg9AAhLQAAhABBhNQA6hEA5gZIAAggIALAAQgGgCgFgGQgQgNgQgkQgWgvAAgeQAAhDA7g1IAogiQASgSAAgOQAAgegggjQgUgUg1gvQgwgvgZgzQghhDAAhXQAAhBAfg8QAWgqAvg3QA9hGAJgLQAfgsAAgkQAAgjgbhHQgGgRgzh8QhVjKAAhoQAAiJB6jhIBUiWQAmhIAAgbQAAgVgjgeQgVgSg3gsQhwheAAhsQAAhcAuhPQAkg7BKhCQBWhIApgkQBGg/Aeg3QBQiYBeh8QBqiNBihGIAGgCQA+gVCngjQDLgqA/AAQEEAAEcBhQDTBIECCNQBJAoB/BJQB7BHAzAcQCzBhBRAAQBNAAEmh6QBpgrBngvQBbgqAWgNQCXhcC7hMQCNg5CaguQA4g0BfhBQCHhbA7AAQBYAAA2BdQAUAjAWA9IAnBtQAzCMA8BBQBXBdCQAAQBFAAAygeQAqgZAjg1QAZglAghKIA7h/QBQifB6hPQCohtEhAAQBsAABRAgQA0AUBGAyQBLA0AmARQBHAgBbAAQDXAACAC8QAqA+ArBkIA+CMQBKCQAUAhQA8BkAxAWQAYALBHAbQA1AUAZAQQAkAYARAjQATApAABCQAABSgZA2QgRAkgmAmQgrAsgMATQgZApAAA7QAAALASAjIApBKQA6BsAAAxQAABfgsBgQgrBbg8ApIAJAMQBGAUA2CyQAWBHANBNQALBKAAA0QAAB/hDBrQgyBRhMAyIAGALIA8BnQAnBEAXAwQBBCKAAB4QAABdgvBvIgjBPQgSAngFAWIAKACQAjA2ApA2QAcAlAHASQAGASgKByQAKC2g0B5QgxBzhbBXQhZBWh2AvQh4AwiEAAQg0AAhqgbQhrgahBAAQhSAAhnAfIhbAcQg5ARgzAJQh/Aag6AKQhjARhUAAQh0AAhjgFQhjgFirAAQn9gboWgbQqMggmVgRIgLgBIgFAAQhbgDghAAQgyAAjlAhIh2ASIABAFIgEACQgFAGgFABQjEAchXAKQjNAZhuAAQlfAAlVgwQhRgMh/gVQhZgPgSAAQhuAAkvBAQipAkgsAIQhqAUguAAQiCAAhkhKgEgRMAloIgFADIAWgFIgFgBQgFAAgHADg");
	this.shape_102.setTransform(2.178,2.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_102).wait(1));

	// Layer_1
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F6D09F").s().p("EAALAnaMgidAEaI9Jj4IgiAAMAAAhTZId6DiMAi7gD5MAg3AEFIePj4MAAABTjI+PD4g");
	this.shape_103.setTransform(-0.525,-0.15);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FDFDFE").s().p("EgAFAqkMghlAEbMghkgEmMAAAhZCMAhOAEPMAiGgEPMAh7AEPMAg8gEvMAASBZtMgh8AEmgEAhqArzIeOj5MAAAhTjI+OD5Mgg4gEFMgi6AD4I96jiMAAABTZIAhAAIdKD5MAidgEbg");
	this.shape_104.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_104},{t:this.shape_103}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.map, new cjs.Rectangle(-430.2,-301.7,860.5,603.5), null);


(lib.leftarrowzoom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer_3
	this.instance = new lib.arrowalphs();
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1949,scaleY:1.1949,x:0.75,y:-0.75},4,cjs.Ease.get(1)).wait(1));

	// Layer_1
	this.instance_1 = new lib.leftarrowfiller();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.1949,scaleY:1.1949,x:0.75,y:-0.75},4,cjs.Ease.get(1)).wait(1));

	// Layer_6
	this.instance_2 = new lib.leftarrowshadow();
	this.instance_2.setTransform(-8,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.1949,scaleY:1.1949,x:-8.8,y:8.8},4,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.6,-81.8,259.2,171.8);


(lib.instuctionsframe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.instructionstext();
	this.instance.setTransform(-8.9,703.65);
	this.instance.shadow = new cjs.Shadow("#000000",3,3,10);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({y:-0.35},10,cjs.Ease.get(1)).wait(86).to({y:23.65},0).to({y:683.65},13,cjs.Ease.get(1)).to({_off:true},4).wait(18));

	// Layer_1
	this.instance_1 = new lib.instructionsbg();
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.questionbg();
	this.instance_2.alpha = 0.8516;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.8516},5,cjs.Ease.get(1)).to({_off:true},120).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(125).to({_off:false},0).to({alpha:0},6,cjs.Ease.get(1)).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-738.1,-434.1,1476.3000000000002,1247.7);


(lib.hill2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.hillalpha();
	this.instance.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7DLZQiogHiogMQ2dhW2nA4QvRAnvYgEQjUgBjRANQjzAPiIhiQgRgNAHgOQBQilgCitQgBgfAVgbQA9hRAmhRIhjgsIBGgiQH/kAKFhAQKWhDKfApQKIAsKABEQKLBEKUgGIKFgHQKbgFKIhWQClgVCkgSQJ/hIJaiVQOWiHOyAEQF1ABFmAZQEmAWEpABQECAKD1AcQDsAbDzgNQC+gOC/gSQIwg2IhhXQBTANANAuQAvCcCfCAQBTBCAhBPQBFChCzCKQD1C+BgDmQgHAXgjALQnDCPoEATQhlAGhkgBQtpgJtnAmIkRARImkADQtJAFtIAJIt6AJQqUAHqTAMQk5AGk6AAQqHAAqFgYg");
	mask.setTransform(0.0351,0.0029);

	// Layer_2
	this.instance_1 = new lib.noisybackground();
	this.instance_1.setTransform(-738,-456,0.7984,0.3762);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("A7DLZQiogHiogMQ2dhW2nA4QvRAnvYgEQjUgBjRANQjzAPiIhiQgRgNAHgOQBQilgCitQgBgfAVgbQA9hRAmhRIhjgsIBGgiQH/kAKFhAQKWhDKfApQKIAsKABEQKLBEKUgGIKFgHQKbgFKIhWQClgVCkgSQJ/hIJaiVQOWiHOyAEQF1ABFmAZQEmAWEpABQECAKD1AcQDsAbDzgNQC+gOC/gSQIwg2IhhXQBTANANAuQAvCcCfCAQBTBCAhBPQBFChCzCKQD1C+BgDmQgHAXgjALQnDCPoEATQhlAGhkgBQtpgJtnAmIkRARImkADQtJAFtIAJIt6AJQqUAHqTAMQk5AGk6AAQqHAAqFgYg");
	this.shape.setTransform(0.0351,0.0029);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hill2, new cjs.Rectangle(-772.5,-75.3,1545.1,150.6), null);


(lib.handholdingmap = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_46
	this.instance = new lib.arrowalphastraight();
	this.instance.setTransform(132.1,57.2,0.216,0.216,0,59.9991,-120.0009,-0.5,0.6);

	this.instance_1 = new lib.arrowalphastraight();
	this.instance_1.setTransform(5.15,63.2,0.216,0.216,-74.9998,0,0,-0.4,0.6);

	this.instance_2 = new lib.arrowalphastraight();
	this.instance_2.setTransform(61.6,38.1,0.2513,0.2513);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D49E7C").s().p("AALBAIgSgXIAAgBIgEABQgYAEgegBIgBgDIAAgBIAAgFIAFgRIAHgRQAJgQANgLIAHgHQAGgSAQgRIABACIAUAOQATgEAWAAQAHACAAACQACAOgCAMIAAAHQgCALgFAJIgGAIIgBAJQgCAJgEAIIgCAFIgBABQgHAOgOAOQgHgBgEgEg");
	this.shape.setTransform(-402.7929,46.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_11
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D49E7C").s().p("Al5IFIADgMIAEgMIADgLIACgFIACgGIALgjIAHgWIADgIIADgJIACgGIAEgMIAFgLIAGgRIALgdIACgGIACgFIAOgjIABgFIACgEIANgeIAEgJIAIgUIACgDIAAgBIAIgTIADgFIABgEIALgZIAGgMIAFgKIABgBIAKgWIACgDIAEgJIAHgPIABgCIAGgLIAPgdIABgCIAEgJIASghIATgiIAHgMIAHgMIAHgMIAAAAIADgGIADgFIAOgYIAIgNIAIgOIAEgGIAEgGIAOgXIADgFIABAAIADgGIAUgfIAVggIAIgLIAng5IAYghIAKgOQAxhEA3hCQAeglAjgNQA0BRBUA2QACABAAAFQgTAcgGAdQgIAsAZAuIAHALIAMASQACADAAAFIgdAlIgEAGIgBAAIgEAFIgRAXIgFAGIgFAGIgUAbIgVAdIgEAGIAAAAIgJAMIgIAMIgIAMIgXAiIgWAhIgHALIgSAdIgIALIgKARIgKARQgjAUgfggIgTAeIgCAEIgFAGIgHAMIgIAMIgNARIgBADIgCACIgJAMIgGAIQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAIgVAdIgOARIgLANIgDAEIAAAAIgFAFIgVAYIgKALIgLALIgLAMIgSARIgRARIgNALIgMAMIgHAGIgUARIgZAUIgEACIgPALIgEAFIgMAIIgLAIIgFADIgRALIgRALIgTAMIgTAMIgOAIIgXAMIgVALIAJgfgAgjAbQAAAAgBAAQAAAAAAAAQgBABAAAAQgBABAAABIgFAHIgRAdIgIALIgKARIgOAXIgHAMIgHAKIgHAMIgBACIgGAKIgLARIgDAFIgHAMIgFAIIgCADIgSAdIgLARIgIANIgDAEIgDAFIgOAXIAAABIgHALIgGAIIgBADIgJAOIgGAJIgDAGIgBAEIAGgEIAEgCIAXgOIABgBIARgMQAJgFAHgGIANgLQANgLAMgNIAFgFIADgEIALgMIABgBIANgRQALgOAIgPIACgDIAEgIQAEgFACgHQACgCAAgDIAIgRIAEgMIAEgMIADgKQAFgRADgSIADgRIACgLIAAgHIABgWIABgHQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBABgABDjpIgBACIghAoIgFAGQgCACgCAEIgBAAIgDAFIgRAVIgBACIgDAGIgBACIACgCIALgGQAMgJAKgJIAEgFIAEgFIABAAIAEgGQANgSAIgXIACgHIABgDIgDADg");
	this.shape_1.setTransform(-428.125,-15.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_12
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#844B26").ss(1,1,1).p("ApNN3QCYi9CgjNQBHhcBKhfQBuiNBziVQAVgYAfgIQFXg7EQj2QCqiLAMjYQAFhIg/hHQhsh8i4BrQhOAthNAnQizBTjDAXQhfgbhkgFQg6gEg7AEQhUANhMAlQiDBBhrBmQgMAHgLAOQgOAOiLCkQhBBLg1BI");
	this.shape_2.setTransform(-330.56,-108.5531);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D49E7C").s().p("ApDMRQhghliGhFIgngkQhKh9gRiIIgDghQAAgagCgaIAAgKQAChDADhBQAJgGhrkBQDDC6gDiBQA1hIBBhLQCLikAOgOQALgOAMgHQBrhmCDhBQBMglBUgNQA7gEA6AEQBjAFBgAbQDDgXCzhTQBNgnBOgtQC4hrBsB8QA/BHgFBIQgMDYiqCLQkQD2lXA7QgfAIgVAYIjhEiIiRC7QigDNiYC9Qglg4gxgug");
	this.shape_3.setTransform(-340.16,-108.5531);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B26634").s().p("AgSgRIAlAjQgXgOgOgVg");
	this.shape_4.setTransform(-423.125,-48.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_13
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#844B26").ss(1,1,1).p("AAwr1QgehRgfhQAiFOXQAmhJAhhGQAFgLAFgLQAFgNAGgLQAKgXAKgXQAOgiANgiQAFgLADgLQAHgRAHgRQAHgSAGgSQAEgLAEgLQAEgMAEgLQAIgXAGgWQABgBAAAAQABgCAAgDQADgIADgJQACgJADgIQAEgOAFgOQAGgXAFgXQAFgRAEgRQABgGABgGQADgGAAgFQACgGABgGQACgFAAgGQABgGABgFQABgBAAgBQABgFABgFQABgGABgFQACgKACgLQAAgBAAgBQAAgJAAgIQAAgDAAgDQAAgFAAgHQAAgFAAgGQAAgIgBgJQAAgIAAgJQAAgFAAgGQAAgGgBgGQAAgFAAgGQgBgMAAgLQAAgDgBgDQAAgCAAgBQgBgHAAgHQAAgIgBgJQgBgOgCgOQAAgBAAgCQgBgDAAgFQAAgFgBgGQAAgDAAgDQAAgIgCgJQgBgGAAgGQgBgFgBgGQAAgGgBgFQgDgRgCgRQgCgJgBgIQgBgHgBgFQgCgPgDgOQgBgFgBgGQgDgRgEgRQgFgXgEgXQgBgFgDgHQgBgGgBgFQAAgBAAAAQgBgDgBgDQgDgPgEgOQgDgJgCgKQgBgDgBgFQgBgDgBgDQgBgDgBgDQgDgMgDgLQAAgCgBgDIAAAAQgBgDgBgDQgIgfgJgfQgCgGgBgGQgNgtgNgtQgKglgLgl");
	this.shape_5.setTransform(-372.9,7.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D49E7C").s().p("AA6OOQgDgNgFgJQgGgPgIgJQgIgLgLgDQgSgIgTgGQglgLgmgFIgBgCIgJhEIgDgWIgEgiIgDgkIgDgWIgCgXIgFgtIAAgBIAAgFIgCgRIgBgRIgDgcIgDguIgDgiIgBgMIgBgLIAAgMIgBgLIgBgLIgBgMIAAgLIgCgXIAAgRIgBgGIAAgMIgBgLIgBgRIAAgRIgBgLIAAgMIgBgLIAAgXIAAgGIAAgDIgBgOIAAgRIgBgdIAAgDIAAgIIAAgLIAAgGIgBgRIAAgMIAAgLIAAgLIAAghIAAgRIAAgMIAAgdIAAgLIABgiIABgiIAAgMIAAgMIABgLIAAgBIAAgGIABgdIABgbIAAgGIAAgGIACgXIAAgFIAAAAIAAgGIADg+IABgMIAGhaQAHhlALhlQgyhNguhJIg8hjIgcgxIgGgKQhLiHBLA3QAOAJAUASQBHA9COCWQBqByCTCkIAWBKIAaBaIADAMIARA+IACAGIAAAAIABAFIAGAXIACAGIACAGIACAIIAFATIAHAdIABAGIABABIACALIAEAMIAJAuIAHAiIACALIAFAdIACAMIADARIAFAhIABALIACALIABAMIACARIAAAGIABALIABAIIAAADIADAdIABARIABAOIAAADIABAGIABAXIAAALIAAAMIABALIAAARIABARIAAALIAAAMIAAAGIAAARIAAACIgEAVIgCALIgCAKIgBACIgCALIgCALIgDAMIgDALIgCAMIgJAiIgMAuIgIAcIgFARIgGARIgBAFIgBABIgOAtIgIAXIgIAWIgNAkIgOAiIgIAWIgcBEIgUAuIgLAYIgKAWQghBGgmBJQgEhdgQgyg");
	this.shape_6.setTransform(-394.0625,-5.9858);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// Layer_2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D49E7C").s().p("AgqApIgBgBIgCgEQgEgJgCgIIgBgKQgDgEgCgEQgGgJgCgLIAAgHQgCgMACgNQAAgDAHgCQAXAAASAEQAKgHAKgHIABgCQAQARAGATIAHAGQANALAJAQIAHASIAFARIAAAEIAAABIgBADQgeAAgYgDIgEgBIAAABQgIALgKAMQgEAEgHABQgOgOgHgOg");
	this.shape_7.setTransform(515.9929,32.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D49E7C").s().p("AFuIZIgXgMIgOgIIgTgMIgTgLIgRgMIgRgLIgFgEIgLgIIgMgIIgEgDIgPgLIgEgDIgZgUIgUgSIgHgFIgMgMIgNgLIgRgRIgRgRIgMgMIgLgLIgKgLIgVgXIgFgGIAAgBIgDgDIgLgNIgOgRIgVgdIgCgDIgGgIIgJgMIgCgCIgBgDIgNgRIgIgMIgHgLIgFgHIgCgEIgTgeQgfAggjgTIgKgSIgKgRIgIgLIgSgdIgHgLIgWghIgXgjIgIgLIgIgMIgJgLIAAgCIgEgFIgVgdIgUgbIgFgGIgFgHIgRgWIgEgFIgBgBIgEgFIgdglQAAgFACgDIAMgSIAHgLQAZgugIgtQgGgcgTgcQAAgFACgBQBUg2A0hRQAjANAeAlQA3BCAxBEIALANIAXAiIAnA5IAIALIAVAgIAUAfIADAFIABABIADAFIAOAWIAEAHIAEAGIAIAOIAIANIAOAYIADAFIADAFIAAACIAHALIAHAMIAHALIATAjIASAhIAEAJIABACIAPAdIAGALIABADIAHAOIAEAKIACACIAKAVIABACIAFALIAGALIALAZIABAEIADAFIAIATIAAABIACADIAIAUIAEAJIANAeIACAEIABAGIAOAiIACAFIACAGIALAdIAGARIAFALIAEAMIACAFIADAKIADAIIAHAXIALAiIACAFIACAGIADAMIAEALIADAMIAJAfIgVgLgADvFjIgBgEIgDgFIgGgKIgJgOIgBgDIgGgIIgHgLIAAgBIgOgWIgDgGIgDgEIgIgNIgLgRIgSgdIgCgDIgFgIIgHgMIgDgFIgLgRIgGgLIgBgBIgHgLIgHgLIgHgMIgOgXIgKgRIgHgLIgSgdIgEgHQgDgDgBAAQgBgBAAAAQgBAAAAABQAAAAAAABQAAABAAABIABAHIABAXIAAAGIACALIADARQADASAFARIADALIAEALIAEAMIAIARQAAADACACIAGAMIAEAIIACADQAIAPALAOIANARIABABIALAMIADAEIAFAGQAMAMANALIANALIAQALIARAMIABABIAXAOIAEACIAGAEIAAAAgAADiPIgBgCIgDgHIgBgBIgRgVIgDgFIgBgBIgEgFIgFgGIghgpIgBgBQgFgFADAFIACAHQAIAXANASIAEAFIABABIAEAFIAEAFQAKAJAMAIIAKAHIADACIAAAAg");
	this.shape_8.setTransform(541.325,-30.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer_5
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#844B26").ss(1,1,1).p("AJON3QgigrgjgsQh3iVh8ifQiyjkjAj5QgVgYgfgIQlXg6kQj3QiqiLgMjYQgFhHA+hHQBth9C4BrQBOAtBNAnQCzBUDDAWQCXgqChAKQBUANBMAlQA6AdA1AkQBDAtA8A5QAMAIALANQAPAOCKCkQBBBLA1BI");
	this.shape_9.setTransform(443.7597,-123.1925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D49E7C").s().p("AHYMgQh3iVh8ifQiyjkjAj5QgVgYgfgIQlXg6kQj3QiqiLgMjYQgFhHA+hHQBth9C4BrQBOAtBNAnQCzBUDDAWQCXgqChAKQBUANBMAlQA6AdA1AkQBDAtA8A5QAMAIALANQAPAOCKCkQBBBLA1BIQgFCpASA7QAOA3AehlQAPALAWANQADBBACBEIAAAJIgCA0IgDAhQgRCJhKB8IgnAlQiGBEhgBlQgxAuglA5IhFhXg");
	this.shape_10.setTransform(448.6847,-123.1925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B26634").s().p("AATgRQgOAVgXAOg");
	this.shape_11.setTransform(536.325,-63.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// Layer_45
	this.instance_3 = new lib.landmarkguide();
	this.instance_3.setTransform(53.45,-193.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_7
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#844B26").ss(1,1,1).p("ACGOXQgTgkgRgkQgSgkgRgjQgFgLgFgLQgFgMgGgMQgKgXgKgXQgOgigNgiQgFgLgEgLQgHgRgGgRQgHgSgGgRQgEgLgEgLQgEgMgEgMQgIgXgHgWQAAAAAAgBQgBgCgBgCQgDgJgCgIQgDgKgCgIQgFgOgEgOQgGgXgGgWQgEgSgEgRQgCgGgBgFQgCgGgBgGQgBgGgBgGQgCgFAAgGQgCgGgBgFQAAgBAAAAQgBgFgBgGQgBgFgBgGQgCgKgCgLQAAgBAAgBQAAgJAAgIQAAgDAAgDQAAgFAAgGQAAgGAAgFQAAgJAAgIQAAgJAAgIQAAgGABgGQAAgGABgGQAAgFAAgGQAAgLABgMQAAgCABgDQAAgCAAgCQAAgHABgHQAAgIABgJQABgNABgPQAAgBAAgCQABgDAAgFQABgFAAgHQAAgCABgDQAAgIACgJQAAgGABgGQABgFABgGQAAgFABgGQACgRADgSQABgIACgJQABgGABgFQACgPADgOQAAgGABgFQAEgRADgRQAFgYAFgWQABgGACgGQABgGACgFQAAgBAAgBQABgCAAgDQAEgPAEgOQACgKADgJQABgDABgFQABgDAAgDQABgEABgDQADgLAEgLQAAgDABgCIAAgBQABgCABgDQAIgfAJggQABgFACgGQANgtANguQAKgkAKglAgvr1QAehRAehQ");
	this.shape_12.setTransform(486.1,-7.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D49E7C").s().p("AhxPVIgjhIIgKgWIgLgXIgUguIgchFIgIgVIgOgiIgNgkIgIgWIgIgYIgOgsIgBgBIgBgFIgGgRIgEgSIgJgcIgMgtIgJgiIgCgMIgDgLIgDgMIgCgLIgCgMIgBgBIgCgKIgCgLIgEgWIAAgBIAAgSIAAgFIAAgMIAAgLIABgRIAAgRIABgMIAAgLIAAgLIABgXIABgGIAAgEIABgNIABgRIADgdIAAgDIABgIIABgMIAAgFIACgRIABgMIACgLIABgLIAFgiIADgRIACgLIAFgdIACgLIAHgiIAKguIADgMIACgLIABgCIABgFIAHgdIAFgTIADgIIABgGIACgHIAGgWIACgFIAAgBIABgFIARg/IAEgLIAZhbIAWhJIBPhXQBjhtBMhSQCNiWBHg9QAUgSAOgKQBLg2hLCHIgGAKIgcAxIg8BjQguBJgyBNQALBlAHBkIAGBbIABALIADA/IAAAFIAAABIAAAFIACAWIAAAHIAAAGIABAbIABAdIAAAFIAAACIABALIAAAMIAAALIABAjIABAiIAAALIAAAdIAAALIAAARIAAAiIAAALIAAALIAAAMIgBARIAAAFIAAAMIAAAIIAAADIgBAdIAAARIgBANIAAAEIAAAGIAAAXIgBALIAAALIgBAMIAAARIgBARIgBALIAAAMIgBAFIAAASIgCAXIAAALIgBALIgBAMIgBALIAAAMIgBALIgBAMIgDAiIgDAtIgDAcIgBASIgCARIAAAFIAAABIgFAsIgCAYIgCAWIgEAkIgEAiIgDAVIgJBFIgBACQgmAFglALQgTAGgSAIQgLADgIALQgIAJgGAOQgFAKgDAMQgQAzgEBdIgkhIg");
	this.shape_13.setTransform(507.2625,-20.6485);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// Layer_16
	this.instance_4 = new lib.map();
	this.instance_4.setTransform(62.1,-137.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer_18
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(47,47,47,0.098)").s().p("EgV5AjNIgMgLQgSgSgMgWIAeg2IAMgVIBlizIABgBIAVglIAYgqIAGgKIAQgaQA+hsAuh0IAAgBIAHgRIAvh3IAmhbIAHgQQAZg9Abg9IAKgXQAwhtAxhpIAmhRIAIgRIAthdIAuhaIAuhXIAXgqIAUglIAaguQAphKAshJIAAgBQAxhTAwhTIAAgCIAQgaIAZguIAZguIANgXIABgBIAFgKIAfg4IAJgRIAZguIAKgTIA/h6QAjhGANhKIADgUQADgUABgVIADgvIAEgkQAFg0AKgyIAIgpQAKgsANgrQAfhoAxhjIAVgpIAHgNIARgeQACgFAEgEIALgTIAPgYIABgBIALgRIABgDQALgRAIgRIAOgdQAOgeAJgfQAHgTAEgUIACgFQAFgWADgWIABgKQAEgXAGgWIAEgQIAIgZIACgDQAGgQAHgOIAKgVIABgCIADgEIAIgPIAMgRIALgQIAGgHIAQgTIABgBIAOgPIAJgIIAFgFIAJgIIADgCIAGgGIATgSIACgBIABgCIALgJIAIgIIADgCIANgMIALgKIAGgFIALgLIACgBIADgCIABgBIAMgLIAFgFIAGgFIAXgUIASgQIAEgFIALgJIAjgfIALgJIALgJIABgBIAWgUIABgBIAKgJIABAAIAMgLIAKgJIAMgKIABgBIA+g2IAGgFIAWgTIAlgfIAUgQQAYgVAYgSIABgBIARgOIACgCIARgNIARgNIBPg8IATgOIAEgDQAVgQAWgNIAmgXQA+giBBgWIAPgFQAtgOAwgIIAQgCQAYgEAYgBIALgBQAwgDAyADIAJAAQg8AFg6AOQgXAFgWAGIhqAeQgKAGgiAZIggAXIgoAdIgEADIgTAOQgxAkgvAlIgUAPIgxAoIgbAWIgJAIIgZAUIgoAjIgcAYQgdAYgcAaIgWATIhEA7IgBABIgMALIgKAJIgMAKIgBABIgKAJIgBABIgWAUIgBABIgLAKIgLAJIgjAgIgLAJIgEAEIgSAQIgXAWIgGAFIgFAFIgIAHIgEAEIgBABIgDACIgCACIgLALIgGAGIgLANIgNAQIgDADIgIAMIgLAPIgBACIgCAEQgLARgIARIgGAOIgDAGQgIATgGAUIgGAUIgDANQgEAPgCARIgBAKIgHAkIgBAFQgHAdgJAbIgGAQIgLAdIgMAaIgFAKIgDAGIgDAFIgBACIgKASIgNAVIgCACIgIANIgXAmIgCACIgLATQgMAVgLAWQgRAhgQAjIgBADIgMAbQgIASgHAUIgLAfQgEAIgCAIQgJAbgIAcIgHAaQgLAsgJAtIgBAGQgIAvgGAxIgEAkIgDAvQAAAQgDAQQgBAPgCAOQgLA7gYA3IgOAeIg9B2IgNAXIgXAuIgKARIgeA4IgGALIgNAXIgTAjIgHALIgZAuIgQAcIgUAiQglBDgnBBIgBABIgPAZQgxBTgvBVQgsBQgqBTIguBaIgXAuIggBDIgOAdIguBhIgtBkIgeBFIgLAXIgFAMQgbA/gaA/IgmBbIg2CIIgBABIgNAiQgoBfg0BaIgDAFIgPAaQg9Bog6BnIgYAqIgVAmIgBACIgfA3IgoBJQgRgKgNgMg");
	this.shape_14.setTransform(-505.875,27.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// back_part
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#844B26").ss(1,1,1).p("AXVgFQgOAQgNATQgJAOgJAOQgGAIgFAJQgFAJgFAIQgBACgBADQAAAAgBABQgBADgCADQgIARgJAQQgBADgCADQgEAHgEAIQgCAEgDAEQgGALgGALQgJASgLASQgJARgKARQgGALgGALQgUAigVAiQgOAXgPAXQgCAEgCADQgGAIgFAJQgIALgHALQgyBMg2BLQgmAyg3AdQhKAlhJAmQiOBIiLBKQgYANgTAPQgaAVgUAZQgXAfgPAmQAAACgBACQgHAUgHAVQgsB9gmB/QgHAXgHAXQgGAWgGAWIAAABQgDALgDALQgEAMgDAMQgOAzgNA0QgBAFgCAFQAAABAAAAQgGAXgFAXQgLAtgLAtQAAABAAAAQgPBEgOBEQgQBQgOBRQgCALgCAMQgEAXgDAWQgDASgDASQgHApgJAlQgKAlgOAgQgHATgJARQgDAFgDAFIAAAAQhggChXAqQgjARgkAMQgjANgkAJQguAMgwAFQhZAKhdgNQgNgCgOgCQg0gIg1gLIgBAAQgdgGgegHQgSgDgRgEQhogZhngdQgQgEgPgEQgHgCgIgCQgKgDgJgDQg7gRg7gSQgYgIgXgHQg5gJg3gLQgugJgugLQgfgHgfgIQgggHgggJQgGgBgFgBQgMgEgMgDQgDgBgDgBQgIgCgHgCIgBAAQgpgOgegSQgRgKgNgMQgGgGgGgFQgSgSgMgWQAPgbAPgbQAGgLAGgKQAyhZAzhaQAAgBABAAQALgSAKgTQAMgVAMgVQADgFADgFQAIgNAIgNQA+hsAuh0QAAgBAAAAQADgJAEgIQAXg8AYg7QATguATgtQAEgIADgIQAZg9Abg9QAFgMAFgLQAwhtAxhpQATgpATgoQAEgJAEgIQAWguAXgvQAXgtAXgtQAXgrAXgsQALgVAMgVQAKgTAKgSQANgXANgXQAphKAshJQAAAAAAgBQAxhTAwhTQAAgBAAgBQAIgNAIgNQAMgXANgWQANgWAMgYQAHgLAGgMQAAAAABgBQACgFADgFQAQgdAPgcQAFgJAEgIQAMgXANgXQAEgJAGgKQAgg9Afg9QAjhGANhKQACgKABgKQADgUABgVQABgXACgYQACgTACgRQAFg0AKgyQAEgVAEgUQAKgsANgrQAfhoAxhjQALgUALgVQADgGAEgHQAIgPAJgPQACgFAEgEQAFgKAGgJQAHgMAIgMQAAgBABAAQAGgJAFgIQABgBAAgCQALgRAIgRQAIgOAGgPQAOgeAJgfQAHgTAEgUQABgDABgCQAFgWADgWQABgFAAgFQAEgXAGgWQABgIADgIQAEgNAEgMQABgCABgBQAGgQAHgOQAEgLAGgKQABgBAAgBQABgCACgCQAEgIAEgHQAGgJAFgIQAFgJAGgHQADgEADgDQAHgKAJgJQAAAAABgBQAHgHAHgIQAEgEAFgEQACgDADgCQAEgEAFgEQABgBACgBQADgDADgDQAJgJAKgJQABgBABAAQABgCAAAAQAFgFAGgEQAEgEAEgEQACgBABgBQAGgGAHgGQAFgFAGgFQADgDADgCQAFgGAGgFQABAAABgBQACgCABAAQAAgBABAAQAFgGAHgFQACgCADgDQADgCADgDQALgKAMgKQAJgIAJgIQACgDACgCQAFgEAGgFQASgQARgPQAFgFAGgEQAFgFAGgEQAAgBABAAQALgKALgKIABgBQAEgFAGgEQABAAAAAAQAGgGAGgFQAFgFAFgEQAGgGAGgEQAAgBABAAQAfgcAfgaQADgDADgCQALgJALgKQASgQATgPQAKgIAKgIQAYgVAYgSQAAgBABAAQAIgHAJgHQABgBABgBQAJgHAIgGQAJgHAIgGQAogfAngdQAJgHAKgHQADgCABgBQAVgQAWgNQATgMATgLQA+giBBgWQAHgCAIgDQAtgOAwgIQAHgBAJgBQAAAAAAAAQAYgEAYgBQAGgBAFAAQAwgDAyADQAEAAAFAAQALABAMABQAQABARADQAxAFAvgHQALgCAKgCQACAAABgBQACAAACgBQBHgSApAMQABADACADQBFgSAoAMEATMglsQAEAAAFAAQAHgBAHAAQAngCApADQAYABAZADEAXzgluQAAABAAABQAYAsAQAvQAEALADAMQAFAQAEAQQACAHABAHQAHAhADAhQACALAAALQAGA+AHA/QAUC1AYC2QAUCQgYCGQgMBBgGBBQgBAIgBAJQgLB3AHB5QABAdgGAbQgEATgEAUQgJAtgJAtQAAAGgBAGQgGAfgGAfQAAADgBADIAAAAQAAADgBACQgCALgCAMQAAADgBADQAAADAAADQgDAOgCANQgCAOgDAPQAAADAAADQAAAAAAABQgBAFgBAGQgBAGgBAGQgDAXgEAXQgBARgDARQAAAGgCAFQgBAOgCAPQgBAFgBAGIAAABQgBAIgBAJQgCARgDARQgBAFgBAGQgBAGgBAFQgBAHgBAFQgBAGgBAFQAAADgCADQAAADgBADQAAAGgCAFQgBAFgBADQAAACgBABQgDAPgDAOQgCAJgDAIQAAACAAABQgCAGgBAFQAAABgBACQgBADAAADQgDALgDAMQAAAGgCAFQgBAGgBAGQgBAGgBAFQgBAJgBAIQgBAJgBAIQAAAGgBAFQAAAHgBAFQAAADAAADQgBAIAAAJQAAALAAAMQAAAFAAAGQAAAGAAAGQAAAGAAAFQAAAGABAFQABAGAAAGQAAAGABAFQAAAHABAFQACARADARQABAFABAFQgGAAgFADQgEACAAAD");
	this.shape_15.setTransform(-484.2879,41.0065);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D49E7C").s().p("EgHRAlyIgbgEQg0gIg1gLIgBAAIg7gNIgjgHQhogZhngdIgfgIIgPgEIgTgGIh2gjIgvgPQg5gJg3gLQgugJgugLIg+gPQgggHgggJIgLgCIgYgHIgGgCIgPgEIgBAAQgpgOgegSQgRgKgNgMIgMgLQgSgSgMgWIAeg2IAMgVIBlizIABgBIAVglIAYgqIAGgKIAQgaQA+hsAuh0IAAgBIAHgRIAvh3IAmhbIAHgQQAZg9Abg9IAKgXQAwhtAxhpIAmhRIAIgRIAthdIAuhaIAuhXIAXgqIAUglIAaguQAphKAshJIAAgBQAxhTAwhTIAAgCIAQgaIAZgtIAZguIANgXIABgBIAFgKIAfg5IAJgRIAZguIAKgTIA/h6QAjhGANhKIADgUQADgUABgVIADgvIAEgkQAFg0AKgyIAIgpQAKgsANgrQAfhoAxhjIAWgpIAHgNIARgeQACgFAEgEIALgTIAPgYIABgBIALgRIABgDQALgRAIgRIAOgdQAOgeAJgfQAHgTAEgUIACgFQAFgWADgWIABgKQAEgXAGgWIAEgQIAIgZIACgDQAGgQAHgOIAKgVIABgCIADgEIAIgPIALgRIALgQIAGgHIAQgTIABgBIAOgPIAJgIIAFgFIAJgIIADgCIAGgGIATgSIACgBIABgCIALgJIAIgIIADgCIANgMIALgKIAGgFIALgLIACgBIADgCIABgBIAMgLIAFgFIAGgFIAXgUIASgQIAEgFIALgJIAjgfIALgJIALgJIABgBIAWgUIABgBIAKgJIABAAIAMgLIAKgJIAMgKIABgBIA+g2IAGgFIAWgTIAlgfIAUgQQAYgVAYgSIABgBIARgOIACgCIARgNIARgNIBPg8IATgOIAEgDQAVgQAWgNIAmgXQA+giBBgWIAPgFQAtgOAwgIIAQgCIAAAAQAYgEAYgBIALgBQAwgDAyADIAJAAIAXACIAhAEQAxAFAvgHIAVgEIADgBIAEgBQBHgSApAMIADAGIAAACQAYAsAQAvIAHAXIAJAgIADAOQAHAhADAhIACAWIANB9QAUC1AYC2QAUCQgYCGQgMBBgGBBIgCARQgLB3AHB5QABAdgGAbIgIAnIgSBaIgBAMIgMA+IgBAGIAAAAIgBAFIgEAXIgBAGIAAAGIgFAbIgFAdIAAAGIAAABIgCALIgCAMIgHAuIgEAiIgCALIgDAdIgCALIAAABIgCARIgFAiIgCALIgCALIgCAMIgCALIgCAGIgBAGQAAAGgCAFIgCAIIgBADIgGAdIgFARIAAADIgDALIgBADIgBAGIgGAXIgCALIgCAMIgCALIgCARIgCARIgBALIgBAMIAAAGIgBARIAAAXIAAALIAAAMIAAALIABALIABAMIABALIABAMQACARADARIACAKQgGAAgFADQgEACAAADQAAgDAEgCQAFgDAGAAQgOAQgNATIgSAcIgLARIgKARIgCAFIgBABIgDAGIgRAhIgDAGIgIAPIgFAIIgMAWIgUAkQgJARgKARIgMAWIgpBEIgdAuIgEAHIgLARIgPAWQgyBMg2BLQgmAyg3AdQhKAlhJAmQiOBIiLBKQgYANgTAPQgaAVgUAZQgXAfgPAmIgBAEIgOApQgsB9gmB/IgOAuIgMAsIAAABIgGAWIgHAYIgbBnIgDAKIAAABIgLAuIgWBaIAAABIgdCIQgQBQgOBRIgEAXIgHAtIgGAkQgHApgJAlQgKAlgOAgQgHATgJARIgGAKIAAAAQhggChXAqQgjARgkAMQgjANgkAJQguAMgwAFQglAEgmAAQg1AAg2gHg");
	this.shape_16.setTransform(-484.2879,41.0065);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AC6433").s().p("AgTADIghgDIgXgCIAJAAIAOgBQAngCAoADQAYABAZACQgbAEgcAAQgVAAgTgCg");
	this.shape_17.setTransform(-353.875,-199.9531);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B26634").s().p("AADgMIABAAIgHAYg");
	this.shape_18.setTransform(-544.425,281.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// Layer_19
	this.text = new cjs.Text("HOUSE", "15px 'Liber Struct'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 162;
	this.text.parent = this;
	this.text.setTransform(24,-153.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.098)").s().p("EAU0AiaIgfg4IgBgBIgthRIh3jOIgPgbIgDgEQgUgjgSgjQgdg5gZg7IgNghIgBgBIg2iIIglhbIg2h+IgFgMIgLgYIgehEIgthkIguhhIgOgdIgghDIgXguIguhaQgqhSgshRQgvhVgxhTIgPgZIgBgBQgnhCglhBIgUgjIgQgcIgZgtIgHgNIgTgiIgNgXIgGgLIgeg4IgKgSIgXgtIgNgXIg9h2IgOgeQgYg4gLg6QgCgOgBgPQgDgPAAgQIgDgwIgEgkQgGgxgIgvIgBgGQgJgtgMgsIgGgbIgRg2IgFgPIgMghIgPglIgMgbIgBgDQgPgjgSghIgXgrIgLgTIgCgCIgXglIgIgOIgCgCIgNgUIgKgTIgBgCIgDgFIgDgGIgFgLIgMgZIgLgdIgGgQQgJgbgHgdIgBgGIgHgjIgBgKQgCgRgEgPIgDgOIgGgTQgGgUgIgSIgDgHIgGgNQgIgSgLgRIgCgEIgBgCIgLgQIgIgLIgDgDIgNgQIgLgMIgGgHIgLgLIgCgDIgDgBIgBgCIgEgDIgIgHIgFgFIgGgFIgXgWIgSgQIgEgEIgLgJIgjggIgLgJIgLgKIgBgCIgWgTIAAgBIgLgJIgBgBIgMgKIgKgJIgMgLIgBAAIhEg8IgWgTIg5gyIgcgYIgogiIgZgWIgJgHIgbgXIgxgnIgUgQQgvgkgxgkIgTgOIgEgDIgogdIgggXIgsgfIg5gQIgxgNQgWgHgXgGQg6gNg8gFIAJgBQAygCAwACIALACQAYABAYAEIAQACIAeAGQAgAHAfAKIAPAEQBBAVA+AjIAmAXQAWANAVAQIAEADIATAOQAoAdAnAfIARAMIARAOIACACIARAOIABAAIAwAoIAUAPIAlAgIAWATIAGAFIA+A2IABABIAMAKIAKAJIAMAKIABABIALAJIAAABIAWATIABACIALAJIALAJIAjAfIALAJIAEAEIASAQIAXAWIAGAEIAFAFIAMALIABABIADABIACACIALALIAGAFIALAKIANAMIADACIAIAIIALAKIABABIACABIATASIAGAGIADACIAJAIIAFAFIAJAIIAOAPIABABIAQATIAGAHIALAQIAMARIAIAOIADAFIABACQAGAJAEALQAHAOAGAQIACAEIAIAaIAEAOQAGAXAEAXIABAKQADAWAFAVIACAGQAEATAHAUQAJAfAOAeIAOAdQAIARALARIABADIALARIABABIAPAYIAMATIAFAJIARAeIAGANIAWAqQAxBiAfBoQANArAKAsIAIApQAKAzAFAzIAEAkIADAwIAEAoIADAUQANBKAjBGIA/B6IALATIAYAtIAJASIAfA4IAFAKIABABIANAXIAZAvIAZAtIAQAbIAAABQAwBUAxBSIABABQArBJApBLIAaAtIAUAlIAXAqIAuBXIAuBaIAtBeIAIAQIAmBQQAxBqAwBsIAKAYIA0B6IAHAQIAmBbIAvB2IAHASIAAABQAeBMAmBJQATAmAWAkIAPAbIAGAKIAtBPIABABIBlCzIAMAVIAeA2QgMAVgSATIgMALQgNALgRALg");
	this.shape_19.setTransform(619.075,12.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.text}]}).wait(1));

	// back_part
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#844B26").ss(1,1,1).p("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");
	this.shape_20.setTransform(597.4879,26.3362);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D49E7C").s().p("EAEcAl1QgwgFgugMQgkgIgjgNQgkgNgjgRQhXgqhgADIAAgBIgGgKQgJgRgHgTQgOgggJgkQgKgmgHgpQgDgSgCgSIgIgtIgEgXQgOhRgQhQIgdiIIAAgBIgWhaIgDgLIgIgiIAAgCIgDgJIgbhoIgGgYIgHgWIAAAAIgMgtIgOguQgmh/gsh9IgOgpIgBgEQgPgmgXgeQgUgagagVQgTgPgYgMQiLhLiOhIIiHhFIgMgGQg3gcglgzQg3hLgyhMIgPgWIgLgRIgEgHIgdguIgphEIgMgWIgTgiIgUgjIgMgWIgFgJIgIgPIgUgnIgDgGIgBgBIgCgEIgKgRIgLgSIgSgcQgNgTgOgQQAGAAAFADQAFACAAAEQAAgEgFgCQgFgDgGAAIACgJIAFgjIABgLIABgMIABgMIABgLIAAgLIAAgMIAAgLIAAgXIgBgRIAAgGIgBgLIgBgLIgCgRIgCgRIgCgMIgCgMIgCgLIgGgXIgBgFIgBgEIgDgKIAAgEIgEgRIgHgcIgBgDIgCgIIgCgMIgBgGIgCgGIgCgLIgCgLIgCgMIgCgLIgFgiIgCgRIAAgBIgCgLIgDgdIgCgLIgEgiIgHguIgCgLIgCgMIAAgBIAAgGIgFgcIgFgbIAAgGIgBgHIgEgXIgBgFIAAAAIgBgGIgMg+IgBgMIgShaIgIgnQgGgbABgdQAHh5gLh3IgBgRQgHhBgMhAQgYiHAUiQQAYi2AUi1IANh9IACgVQADgiAHghIADgOIAJggIAHgXQAQgvAYgsIAAgCIADgFQApgNBHASIAHACIAVAEQAvAIAxgGIAhgEIAXgBIAJgBQAygDAwADIALABQAYABAYAEIAQADIAeAFQAgAHAfAKIAPAEQBBAWA+AiIAmAXQAWAOAVAPIAEADIATAOQAoAdAnAfIARANIARANIACACIARAOIABABIAwAnIAUAQIAlAgIAWATIAGAEIA+A2IABABIAMAKIAKAJIAMALIABAAIALAKIAAAAIAWAUIABABIALAJIALAJIAjAgIALAJIAEAEIASAQIAXAVIAGAFIAFAEIAMALIABABIADACIACACIALAKIAGAFIALAKIANAMIADACIAIAIIALAKIABABIACACIATARIAGAGIADACIAJAIIAFAGIAJAIIAOAOIABACIAQATIAGAGIALAQIALARIAIAPIADAEIABACQAGAKAEALQAHAOAGAQIACADIAIAaIAEAPQAGAWAEAYIABAJQADAWAFAWIACAFQAEAUAHATQAJAgAOAeIAOAcQAIARALASIABACIALARIABABIAPAYIAMATIAFAJIARAeIAHAOIAWApQAxBiAfBpQANAqAKAsIAIApQAKAzAFAzIAEAkIADAwIAEAoIADAUQANBLAjBFIA/B6IALAUIAYAtIAJARIAfA5IAFAKIABABIANAYIAZAuIAZAsIAQAbIAAABQAwBUAxBSIABABQArBJApBLIAaAtIAUAlIAXAqIAuBXIAuBbIAtBdIAIAQIAmBRQAxBqAwBsIAKAXIA0B6IAHAQIAmBbIAvB3IAHARIAAABQAeBMAmBJQATAmAWAlIAPAaIAGALIAtBPIABAAIBlCzIAMAVIAeA2QgMAWgSASIgMALQgNAMgRAKQgeATgpANIgBAAIgPAEIgeAJIgKACIhBARIg+AOQguALguAJQg3ALg5AJIgvAPIh2AjIgTAGIgPAEIgfAJQhnAchoAZIgjAIIg7ANIgBAAQg1AKg0AJIgbADQg1AHgzAAQgoAAgmgEg");
	this.shape_21.setTransform(597.4879,26.3362);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AC6433").s().p("AhLABIAxgEQAogCAnACIAOAAIAJABIgXACIghADQgUACgUAAQgcAAgbgEg");
	this.shape_22.setTransform(467.075,-214.6158);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B26634").s().p("AgDgMIABAAIAGAYg");
	this.shape_23.setTransform(657.625,267.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.handholdingmap, new cjs.Rectangle(-651.3,-533.3,1415.8,817.9), null);


(lib.grass = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.grassalpha();
	this.instance.alpha = 0.8516;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhjrAnQMgGKhMsUA14gCRAz9AAmUAz+gAmA14ACRMgA2BMsg");
	mask.setTransform(0,0.0222);

	// Layer_2
	this.instance_1 = new lib.noisybackground();
	this.instance_1.setTransform(751.5,-516,0.4662,0.7298,90);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#FEDA94","#F6B867"],[0,1],-4.2,0,4.2,0).ss(3,1,1).p("EAAbgmVMgA1BMr");
	this.shape.setTransform(674.725,5.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#FEDA94","#F6B867"],[0,1],-656.5,0,656.5,0).ss(3,1,1).p("EBmWAAAMjMrAAA");
	this.shape_1.setTransform(17,251.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7AC12C","#439A2D"],[0,1],499.8,-154,499.8,233.6).s().p("EhjrAnQMgGKhMsUA14gCRAz9AAmUAz+gAmA14ACRMgA2BMsg");
	this.shape_2.setTransform(0,0.0222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.grass, new cjs.Rectangle(-677.4,-251.1,1356.4,503.79999999999995), null);


(lib.Wrongframecopy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(11.95,25.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_6
	this.instance = new lib.Xwrongcopy2();
	this.instance.setTransform(5.65,-188.55,0.3297,0.3297,0,0,0,0.3,-0.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#393058","#183058"],[0,1],-23.7,-126.4,-23.7,364.2).s().p("EhpPA4ZMAAAhwxMDSfAAAMAAABwxg");
	this.shape_1.setTransform(6.65,-52.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("EAXcAhHIAAqAMhSxAAAIAAKAIiMAAMAAAg4NICMAAIAAqAMBSxAAAIAAKAMAmHAAAMAAAA4Ng");
	this.shape_2.setTransform(11.95,-38.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Wrongframecopy2, new cjs.Rectangle(-666.9,-413.8,1347.1999999999998,721.8), null);


(lib.replaybuttoncopy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANTDfQg7g8ABhTIAAlnIBNAAIAAFnQABAyAjAlQAkAjAyAAQAzAAAkgjQAkglAAgyIAAlnIBNAAIAAFnQABBTg7A8Qg6A9hUAAQhSAAg7g9gAosDIQhHhUAAh0QAAhzBHhUQBGhUBjAAQA9AAAzAkIAABnQgvg5hBAAQhDAAgvA7QgvA8AABSQAABTAvA8QAvA7BDAAQBBAAAvg6IAABoQgzAkg9AAQhjAAhGhUgEAmmAEYIAAovIFCAAIAABOIjzAAIAACjIDNAAIAABNIjNAAIAACjIDzAAIAABOgEAgXAEYIAAovIBNAAIAAHhID1AAIAABOgAaGEYIAAhOIDvmTIjvAAIAAhOIFCAAIAABOIjuGTIDuAAIAABOgAT3EYIAAhOIDumTIjuAAIAAhOIFCAAIAABOIjvGTIDvAAIAABOgAGSEYIAAovIBxAAQBTAAA6A7QA6A6AABTQAABSg6A6Qg6A7hTAAIgjAAIAACggAHgAqIAjAAQAyAAAkgkQAkgjgBgyQABgzgkgjQgkgkgyAAIgjAAgAAuEYIAAjxIilAAIAADxIhOAAIAAovIBOAAIAADxIClAAIAAjxIBOAAIAAIvgAuJEYIAAnhIh5AAIAAhOIFBAAIAABOIh5AAIAAHhgAx5EYIgch1Ii5AAIgcB1IhPAAICDovICKAAICCIvgA08BVICVAAIhLk/gA6MEYIhIlnIhIFnIiFAAIg6ovIBPAAIAxHcIBfncIBQAAIBeHcIAxncIBQAAIg5IvgEglXAEYIAAovIFCAAIAABOIj0AAIAACjIDMAAIAABNIjMAAIAACjID0AAIAABOgEgn6AEYIhGinQgaAHgdAAIgjAAIAACgIhOAAIAAovIBxAAQBTAAA7A7QA6A6AABTQAABSg6A6IgRAPIBUDMgEgqaAAqIAjAAQAyAAAlgkQAjgjAAgyQAAgzgjgjQglgkgyAAIgjAAg");
	this.shape.setTransform(-2.95,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.btnbgcopy3();
	this.instance.shadow = new cjs.Shadow("#333333",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.replaybuttoncopy2, new cjs.Rectangle(-344.9,-79.9,696,167), null);


(lib.replaybuttoncopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANTDfQg7g8ABhTIAAlnIBNAAIAAFnQABAyAjAlQAkAjAyAAQAzAAAkgjQAkglAAgyIAAlnIBNAAIAAFnQABBTg7A8Qg6A9hUAAQhSAAg7g9gAosDIQhHhUAAh0QAAhzBHhUQBGhUBjAAQA9AAAzAkIAABnQgvg5hBAAQhDAAgvA7QgvA8AABSQAABTAvA8QAvA7BDAAQBBAAAvg6IAABoQgzAkg9AAQhjAAhGhUgEAmmAEYIAAovIFCAAIAABOIjzAAIAACjIDNAAIAABNIjNAAIAACjIDzAAIAABOgEAgXAEYIAAovIBNAAIAAHhID1AAIAABOgAaGEYIAAhOIDvmTIjvAAIAAhOIFCAAIAABOIjuGTIDuAAIAABOgAT3EYIAAhOIDumTIjuAAIAAhOIFCAAIAABOIjvGTIDvAAIAABOgAGSEYIAAovIBxAAQBTAAA6A7QA6A6AABTQAABSg6A6Qg6A7hTAAIgjAAIAACggAHgAqIAjAAQAyAAAkgkQAkgjgBgyQABgzgkgjQgkgkgyAAIgjAAgAAuEYIAAjxIilAAIAADxIhOAAIAAovIBOAAIAADxIClAAIAAjxIBOAAIAAIvgAuJEYIAAnhIh5AAIAAhOIFBAAIAABOIh5AAIAAHhgAx5EYIgch1Ii5AAIgcB1IhPAAICDovICKAAICCIvgA08BVICVAAIhLk/gA6MEYIhIlnIhIFnIiFAAIg6ovIBPAAIAxHcIBfncIBQAAIBeHcIAxncIBQAAIg5IvgEglXAEYIAAovIFCAAIAABOIj0AAIAACjIDMAAIAABNIjMAAIAACjID0AAIAABOgEgn6AEYIhGinQgaAHgdAAIgjAAIAACgIhOAAIAAovIBxAAQBTAAA7A7QA6A6AABTQAABSg6A6IgRAPIBUDMgEgqaAAqIAjAAQAyAAAlgkQAjgjAAgyQAAgzgjgjQglgkgyAAIgjAAg");
	this.shape.setTransform(-2.95,6.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.btnbgcopy2();
	this.instance.shadow = new cjs.Shadow("#333333",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.replaybuttoncopy, new cjs.Rectangle(-344.9,-79.9,696,167), null);


(lib.replaybutton2copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(1));

	// Layer_2
	this.instance = new lib.rewatchpuzzletxtcopy4();
	this.instance.setTransform(-2.95,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0531,scaleY:1.0531,x:-3.1,y:-2.7},3).wait(1));

	// Layer_1
	this.instance_1 = new lib.btnbggraycopy4();
	this.instance_1.shadow = new cjs.Shadow("#333333",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.0531,scaleY:1.0531},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-363.9,-98.9,741,212);


(lib.repeatcopy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.toparrowcopy2();
	this.instance.setTransform(2.55,-62.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.bottomarrowcopy2();
	this.instance_1.setTransform(-9.55,68.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(3,1,1).p("EgYtgg7MAxaAAAQDhAACgCfQChCgAADiMAAAAw1QAADiihCfQigCgjhAAMgxaAAAQjhAAigigQigifAAjiMAAAgw1QAAjiCgigQCgifDhAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#666666","#3C6666"],[0,1],0,-161.3,0,161.3).s().p("EgYsAg8QjiAAigigQigifAAjiMAAAgw1QAAjhCgihQCgifDiAAMAxYAAAQDiAACgCfQCgChABDhMAAAAw1QgBDiigCfQigCgjiAAgA6jOuILrKUIAAmXIWbAAQLLAbEHpxQAxh2gBrFInQEOQAdKmnmgkQkoAUzegOIAAnSgA36oVQgxB2ABLFIHRkPQgeqlHmAkQEogUTeAOIAAHSILqrQIrrqUIAAGXI2dAAIg5gBQqcAAj8JXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.repeatcopy2, new cjs.Rectangle(-214.1,-212.3,428.29999999999995,424.6), null);


(lib.loopiconcopy2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.repeatcopy2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.loopiconcopy2, new cjs.Rectangle(-214.1,-212.3,428.29999999999995,424.6), null);


(lib.letsseehowyoudid = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.answerrevealtext();
	this.instance.setTransform(55,183.1);
	this.instance.shadow = new cjs.Shadow("#333333",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#666666","#333333"],[0,1],4.2,-115.4,4.2,350.5).s().p("EhnSA5JMAAAhyRMDOlAAAMAAAByRg");
	this.shape.setTransform(32,-46.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Eg9hAcHMAAAg4NMB7DAAAMAAAA4Ng");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.letsseehowyoudid, new cjs.Rectangle(-629.1,-412.6,1322.2,731.4000000000001), null);


(lib.incorrectcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.instance = new lib.Xwrongcopy();
	this.instance.setTransform(11.95,-218.2,0.3404,0.3404);
	this.instance.shadow = new cjs.Shadow("#000000",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_6
	this.instance_1 = new lib.replaybuttoncopy2();
	this.instance_1.setTransform(11.95,172.9,0.8099,0.8099);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(11.95,-4.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#597B91","#367B91"],[0,1],-22.6,-130.1,-22.6,374.9).s().p("Ehj9A6DMAAAh0FMDH7AAAMAAAB0Fg");
	this.shape_1.setTransform(6.6,-52.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("EAXcAhHIAAqAMhSxAAAIAAKAIiMAAMAAAg4NICMAAIAAqAMBSxAAAIAAKAMAmHAAAMAAAA4Ng");
	this.shape_2.setTransform(11.95,-38.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.incorrectcopy, new cjs.Rectangle(-633.1,-424.4,1279.5,743), null);


(lib.incorrect = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.instance = new lib.Xwrong();
	this.instance.setTransform(11.95,-218.2,0.3404,0.3404);
	this.instance.shadow = new cjs.Shadow("#000000",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_6
	this.instance_1 = new lib.replaybuttoncopy();
	this.instance_1.setTransform(11.95,172.9,0.8099,0.8099);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(11.95,-4.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#597B91","#367B91"],[0,1],-22.6,-130.1,-22.6,374.9).s().p("Ehj9A6DMAAAh0FMDH7AAAMAAAB0Fg");
	this.shape_1.setTransform(6.6,-52.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("EAXcAhHIAAqAMhSxAAAIAAKAIiMAAMAAAg4NICMAAIAAqAMBSxAAAIAAKAMAmHAAAMAAAA4Ng");
	this.shape_2.setTransform(11.95,-38.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.incorrect, new cjs.Rectangle(-633.1,-424.4,1279.5,743), null);


(lib.correct2ndattemptcopy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_8
	this.instance = new lib.loopiconcopy2();
	this.instance.setTransform(11.95,-178.2,0.4424,0.4424);
	this.instance.shadow = new cjs.Shadow("#000000",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(11.95,33.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#597B91","#367B91"],[0,1],-23.7,-126.4,-23.7,364.2).s().p("EhpPA4ZMAAAhwxMDSfAAAMAAABwxg");
	this.shape_1.setTransform(6.65,-52.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("EAXcAhHIAAqAMhSxAAAIAAKAIiMAAMAAAg4NICMAAIAAqAMBSxAAAIAAKAMAmHAAAMAAAA4Ng");
	this.shape_2.setTransform(11.95,1.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.correct2ndattemptcopy2, new cjs.Rectangle(-666.9,-413.8,1347.1999999999998,721.8), null);


(lib.bulletemojicopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(47,47,47,0.149)").s().p("ArduPIW7TTQgsAxgxAvQl+FynnB6g");
	this.shape.setTransform(67.875,91.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// dart
	this.instance = new lib.dartcopy();
	this.instance.setTransform(133.85,-153.7,0.5917,0.5852,0,0,0,239.6,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// middle
	this.instance_1 = new lib.middlecopy();
	this.instance_1.setTransform(-5.05,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// start
	this.instance_2 = new lib.startcopy();
	this.instance_2.setTransform(-5.55,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bulletemojicopy, new cjs.Rectangle(-200,-310.7,476,499.79999999999995), null);


(lib.bulletemoji = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(47,47,47,0.149)").s().p("ArduPIW7TTQgsAxgxAvQl+FynnB6g");
	this.shape.setTransform(67.875,91.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// dart
	this.instance = new lib.dart();
	this.instance.setTransform(133.85,-153.7,0.5917,0.5852,0,0,0,239.6,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// middle
	this.instance_1 = new lib.middle();
	this.instance_1.setTransform(-5.05,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// start
	this.instance_2 = new lib.start();
	this.instance_2.setTransform(-5.55,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bulletemoji, new cjs.Rectangle(-200,-310.7,476,499.79999999999995), null);


(lib.btnanim = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.playbtnshade();
	this.instance.alpha = 0.5;
	this.instance.shadow = new cjs.Shadow("#000000",3,3,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btnanim, new cjs.Rectangle(-317.8,-309.6,642,626), null);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// alpha
	this.instance = new lib.skyalpha();
	this.instance.setTransform(39.9,71.35);
	this.instance.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EinRA08MAAAhp3MFOjAAAMAAABp3g");
	mask.setTransform(39.925,71.375);

	// grain
	this.instance_1 = new lib.noisybackground();
	this.instance_1.setTransform(-1108,988.9,0.7659,1.2654,-90);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// sky
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00BBFF","#FFFFFF"],[0,1],-41,-184.1,-41.3,463.8).s().p("EinRA08MAAAhp3MFOjAAAMAAABp3g");
	this.shape.setTransform(39.925,71.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-1030.7,-267.4,2141.3,677.5999999999999), null);


(lib.arrowstraightzoom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer_2
	this.instance = new lib.arrowalphastraight();
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.2027,scaleY:1.2027,x:-0.9,y:-0.3},4,cjs.Ease.get(1)).wait(1));

	// Layer_1
	this.instance_1 = new lib.centerarrowfiller();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.2027,scaleY:1.2027,x:-0.9,y:-0.3},4).wait(1));

	// Layer_5
	this.instance_2 = new lib.centerarrowshadow();
	this.instance_2.setTransform(10,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.1,regY:0.1,scaleX:1.2027,scaleY:1.2027,x:11.1,y:4.5},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.4,-99.6,153,203.3);


(lib.arrowstraight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.arrowalphastraight();
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AirM5IAZyJIm4gBIJSnnIJDHsImPgCIBySHg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.149)").s().p("AirM6IAZyJIm4gCIJSnoIJDHtImPgBIBySHg");
	this.shape_1.setTransform(10.025,4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrowstraight, new cjs.Rectangle(-58.6,-82.5,127.30000000000001,169.1), null);


(lib.arrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.arrowalphs();
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AoGi8IoOEAIAYrqIS6BQImTEQITqMAIkADtg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.149)").s().p("AoGi8IoOEAIAYrqIS6BQImTEQITqMAIkADtg");
	this.shape_1.setTransform(-8,8.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-112.5,-67.8,217,143.7), null);


(lib._3answerreveal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// right_arrow
	this.instance = new lib.arrow();
	this.instance.setTransform(727.4,-31.65,2.4793,2.4793,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// center_arrow
	this.instance_1 = new lib.arrowstraight();
	this.instance_1.setTransform(12.4,-114.75,2.4793,2.4793);
	var instance_1Filter_1 = new cjs.ColorFilter(0,0,0,1,255,255,255,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-61,-84,131,173);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(4));

	// left_arrow
	this.instance_2 = new lib.arrow();
	this.instance_2.setTransform(-670.3,-21.75,2.4793,2.4793);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-949.2,-319.4,1955.6,485.9);


(lib.straightarrow = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.arrowstraight();
	this.instance.setTransform(-5,-2);

	this.instance_1 = new lib.arrowstraightzoom();
	this.instance_1.setTransform(-5,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.6,-84.5,127.30000000000001,169.1);


(lib.rightarrow = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.arrow();
	this.instance.setTransform(-4,-4,1,1,0,0,180);

	this.instance_1 = new lib.rightarrowhover();
	this.instance_1.setTransform(-4,-4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.5,-71.8,217,143.7);


(lib.playbuttonbutton = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.playbtn();
	this.instance.shadow = new cjs.Shadow("#000000",3,3,20);

	this.instance_1 = new lib.btnanim();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-317.8,-309.6,642,626);


(lib.newthumbnail = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// thumnail (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhjzA4PMAAAhwdMDHnAAAMAAABwdg");
	mask.setTransform(0.775,-0.125);

	// Layer_8
	this.instance = new lib.arrow();
	this.instance.setTransform(286.35,91.8,1,1,0,0,180);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// center_arrow
	this.instance_1 = new lib.arrowstraight();
	this.instance_1.setTransform(-2.05,58.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// left_arrow
	this.instance_2 = new lib.arrow();
	this.instance_2.setTransform(-277.4,95.8);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_2
	this.instance_3 = new lib.trail2();
	this.instance_3.setTransform(-2.25,145.8);
	this.instance_3.alpha = 0.8984;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_3
	this.instance_4 = new lib.trail();
	this.instance_4.setTransform(-2.25,145.8);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer_4
	this.instance_5 = new lib.grass();
	this.instance_5.setTransform(-16,128.8,1,1,0,0,0,0,0.8);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer_7
	this.instance_6 = new lib.hill2();
	this.instance_6.setTransform(4.15,-172.7);
	this.instance_6.alpha = 0.8984;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Layer_5
	this.instance_7 = new lib.bg();
	this.instance_7.setTransform(-3.4,-380.5,0.7006,0.7006);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(3,1,1).p("EhohAB7MDRDgD1");
	this.shape.setTransform(14.55,-109.75);

	var maskedShapeInstanceList = [this.instance_7,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_7}]}).wait(1));

	// Layer_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("A7DLZQiogHiogMQ2dhW2nA4QvRAnvYgEQjUgBjRANQjzAPiIhiQgRgNAHgOQBQilgCitQgBgfAVgbQA9hRAmhRIhjgsIBGgiQH/kAKFhAQKWhDKfApQKIAsKABEQKLBEKUgGIKFgHQKbgFKIhWQClgVCkgSQJ/hIJaiVQOWiHOyAEQF1ABFmAZQEmAWEpABQECAKD1AcQDsAbDzgNQC+gOC/gSQIwg2IhhXQBTANANAuQAvCcCfCAQBTBCAhBPQBFChCzCKQD1C+BgDmQgHAXgjALQnDCPoEATQhlAGhkgBQtpgJtnAmIkRARImkADQtJAFtIAJIt6AJQqUAHqTAMQk5AGk7AAQqGAAqFgYg");
	this.shape_1.setTransform(2.1851,-219.0971);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.newthumbnail, new cjs.Rectangle(-638,-360,1277.6,719.8), null);


(lib.leftarrow = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.arrow();
	this.instance.setTransform(4,-4);

	this.instance_1 = new lib.leftarrowzoom();
	this.instance_1.setTransform(4,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.5,-71.8,217,143.7);


(lib.slotanswerreveal2ndroundcopy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.instance = new lib.Wrongframecopy2();
	this.instance.setTransform(-8,615.05,1.0074,1.0074);

	this.instance_1 = new lib.correct2ndattemptcopy2();
	this.instance_1.setTransform(-8,1296.15,1.0074,1.0074);

	this.instance_2 = new lib.Wrongframecopy2();
	this.instance_2.setTransform(-8,2010.55,1.0074,1.0074);

	this.instance_3 = new lib.Wrongframecopy2();
	this.instance_3.setTransform(-8,3446.85,1.0074,1.0074);

	this.instance_4 = new lib.correct2ndattemptcopy2();
	this.instance_4.setTransform(-8,2719.85,1.0074,1.0074);

	this.instance_5 = new lib.correct2ndattemptcopy2();
	this.instance_5.setTransform(-2.6,4168.75,1.0074,1.0074);

	this.instance_6 = new lib.Wrongframecopy2();
	this.instance_6.setTransform(-8,4862.4,1.0074,1.0074);

	this.instance_7 = new lib.Wrongframecopy2();
	this.instance_7.setTransform(-8,6286.25,1.0074,1.0074);

	this.instance_8 = new lib.correct2ndattemptcopy2();
	this.instance_8.setTransform(-8,5571.7,1.0074,1.0074);

	this.instance_9 = new lib.Wrongframecopy2();
	this.instance_9.setTransform(-2.6,7735.15,1.0074,1.0074);

	this.instance_10 = new lib.correct2ndattemptcopy2();
	this.instance_10.setTransform(-2.6,7008.1,1.0074,1.0074);

	this.instance_11 = new lib.Wrongframecopy2();
	this.instance_11.setTransform(-2.6,9155.3,1.0074,1.0074);

	this.instance_12 = new lib.correct2ndattemptcopy2();
	this.instance_12.setTransform(-2.6,8444.4,1.0074,1.0074);

	this.instance_13 = new lib.Wrongframecopy2();
	this.instance_13.setTransform(-2.6,10607.75,1.0074,1.0074);

	this.instance_14 = new lib.correct2ndattemptcopy2();
	this.instance_14.setTransform(-2.6,9880.75,1.0074,1.0074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_1
	this.instance_15 = new lib.letsseehowyoudid();
	this.instance_15.setTransform(-33.35,-98.85,1.0449,1.0449,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slotanswerreveal2ndroundcopy2, new cjs.Rectangle(-690.6,-529.9,1381.6,11447.9), null);


(lib.rewatchbtn2copy = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.replaybuttoncopy2();
	this.instance.setTransform(0,-32.35,0.8099,0.8099);

	this.instance_1 = new lib.replaybutton2copy2();
	this.instance_1.setTransform(0,-32.35,0.8099,0.8099);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282.9,-100.7,572,144);


(lib.correctscreencopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.instance = new lib.bulletemojicopy();
	this.instance.setTransform(22.5,-163.2,0.5121,0.5121,0,0,0,0,-0.2);
	this.instance.shadow = new cjs.Shadow("rgba(0,100,8,1)",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(41.975,57.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#009900","#006600"],[0,1],1.8,-162.3,2.3,436.1).s().p("Ehj9A5nMAAAhzNMDH7AAAMAAABzNg");
	this.shape_1.setTransform(6.6,-52.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Eg9hAcHMAAAg4NMB7DAAAMAAAA4Ng");
	this.shape_2.setTransform(0,-1.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.correctscreencopy, new cjs.Rectangle(-633.1,-421.7,1279.5,737.5), null);


(lib.correctscreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.instance = new lib.bulletemoji();
	this.instance.setTransform(22.5,-163.2,0.5121,0.5121,0,0,0,0,-0.2);
	this.instance.shadow = new cjs.Shadow("rgba(0,100,8,1)",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(41.975,57.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#009900","#006600"],[0,1],1.8,-162.3,2.3,436.1).s().p("Ehj9A5nMAAAhzNMDH7AAAMAAABzNg");
	this.shape_1.setTransform(6.6,-52.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Eg9hAcHMAAAg4NMB7DAAAMAAAA4Ng");
	this.shape_2.setTransform(0,-1.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.correctscreen, new cjs.Rectangle(-633.1,-421.7,1279.5,737.5), null);


(lib.Correct2ndAttemptScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Correct
	this.instance = new lib.slotanswerreveal2ndroundcopy2();
	this.instance.setTransform(-0.2,167.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({y:-459.15},10,cjs.Ease.get(-1)).to({y:-6310.3},21).to({y:-9829.45},46,cjs.Ease.get(1)).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-690.8,-10359.4,1381.6,21445.1);


(lib.Wrong = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// object
	this.instance = new lib._3answerreveal();
	this.instance.setTransform(6.7,259.15,0.2212,0.2212);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(107).to({_off:false},0).to({alpha:1,mode:"synched",startPosition:0},4,cjs.Ease.get(1)).wait(8));
	this.instance.addEventListener("tick", AdobeAn.handleFilterCache);

	// Incorrect
	this.instance_1 = new lib.slotanswerreveal2ndroundcopy2();
	this.instance_1.setTransform(-0.2,167.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({y:-459.15},10,cjs.Ease.get(-1)).to({y:-6310.3},21).to({y:-10553.45},46,cjs.Ease.get(1)).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-690.8,-11083.4,1381.6,22169.1);


(lib.slotanswerrevealcopy = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.letsseehowyoudid();
	this.instance.setTransform(-32,-119.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_5
	this.instance_1 = new lib.incorrectcopy();
	this.instance_1.setTransform(-6.6,11406.8);

	this.instance_2 = new lib.correctscreencopy();
	this.instance_2.setTransform(-6.6,10684.1);

	this.instance_3 = new lib.incorrectcopy();
	this.instance_3.setTransform(-6.6,9967.25);

	this.instance_4 = new lib.correctscreencopy();
	this.instance_4.setTransform(-6.6,9244.55);

	this.instance_5 = new lib.incorrectcopy();
	this.instance_5.setTransform(-6.6,8519.25);

	this.instance_6 = new lib.correctscreencopy();
	this.instance_6.setTransform(-6.6,7796.55);

	this.instance_7 = new lib.incorrectcopy();
	this.instance_7.setTransform(-6.6,7079.4);

	this.instance_8 = new lib.correctscreencopy();
	this.instance_8.setTransform(-6.6,6356.7);

	this.instance_9 = new lib.incorrectcopy();
	this.instance_9.setTransform(-6.6,5639.85);

	this.instance_10 = new lib.correctscreencopy();
	this.instance_10.setTransform(-6.6,4917.15);

	this.instance_11 = new lib.incorrectcopy();
	this.instance_11.setTransform(-6.6,4191.85);

	this.instance_12 = new lib.correctscreencopy();
	this.instance_12.setTransform(-6.6,3469.15);

	this.instance_13 = new lib.incorrectcopy();
	this.instance_13.setTransform(-6.6,2764.85);

	this.instance_14 = new lib.correctscreencopy();
	this.instance_14.setTransform(-6.6,2042.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer_3
	this.instance_15 = new lib.incorrectcopy();
	this.instance_15.setTransform(-6.6,1327.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Layer_2
	this.instance_16 = new lib.correctscreencopy();
	this.instance_16.setTransform(-6.6,604.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slotanswerrevealcopy, new cjs.Rectangle(-661.1,-532.5,1322.2,12257.9), null);


(lib.slotanswerreveal = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.letsseehowyoudid();
	this.instance.setTransform(-32,-119.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_5
	this.instance_1 = new lib.incorrect();
	this.instance_1.setTransform(-6.6,11406.8);

	this.instance_2 = new lib.correctscreen();
	this.instance_2.setTransform(-6.6,10684.1);

	this.instance_3 = new lib.incorrect();
	this.instance_3.setTransform(-6.6,9967.25);

	this.instance_4 = new lib.correctscreen();
	this.instance_4.setTransform(-6.6,9244.55);

	this.instance_5 = new lib.incorrect();
	this.instance_5.setTransform(-6.6,8519.25);

	this.instance_6 = new lib.correctscreen();
	this.instance_6.setTransform(-6.6,7796.55);

	this.instance_7 = new lib.incorrect();
	this.instance_7.setTransform(-6.6,7079.4);

	this.instance_8 = new lib.correctscreen();
	this.instance_8.setTransform(-6.6,6356.7);

	this.instance_9 = new lib.incorrect();
	this.instance_9.setTransform(-6.6,5639.85);

	this.instance_10 = new lib.correctscreen();
	this.instance_10.setTransform(-6.6,4917.15);

	this.instance_11 = new lib.incorrect();
	this.instance_11.setTransform(-6.6,4191.85);

	this.instance_12 = new lib.correctscreen();
	this.instance_12.setTransform(-6.6,3469.15);

	this.instance_13 = new lib.incorrect();
	this.instance_13.setTransform(-6.6,2764.85);

	this.instance_14 = new lib.correctscreen();
	this.instance_14.setTransform(-6.6,2042.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer_3
	this.instance_15 = new lib.incorrect();
	this.instance_15.setTransform(-6.6,1327.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Layer_2
	this.instance_16 = new lib.correctscreen();
	this.instance_16.setTransform(-6.6,604.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slotanswerreveal, new cjs.Rectangle(-661.1,-532.5,1322.2,12257.9), null);


// stage content:
(lib.Map2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,414,448,558,652,667,1081,1115,1209,1328];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.play_btn.addEventListener("click", handleClick.bind(this));
		
		function handleClick(evt) {
		  
		  if (evt.currentTarget === this.play_btn) {
		    this.gotoAndPlay(2);
		  }
		}
	}
	this.frame_414 = function() {
		this.left_arrow.addEventListener("click", handleClick.bind(this));
		this.center_arrow.addEventListener("click", handleClick.bind(this));
		this.right_arrow.addEventListener("click", handleClick.bind(this));
		
		function handleClick(evt) {
		  let clickedObject = evt.currentTarget;
		
		  if (clickedObject === this.center_arrow) {
		    this.gotoAndPlay(450); // Correct answer frame
		  } else {
		    this.gotoAndPlay(560); // Wrong answer frame
		  }
		}
	}
	this.frame_448 = function() {
		this.gotoAndPlay(416);
	}
	this.frame_558 = function() {
		this.stop();
	}
	this.frame_652 = function() {
		this.rewatch_btn2.addEventListener("click", function(evt) {
		  this.gotoAndPlay(669);
		}.bind(this));
	}
	this.frame_667 = function() {
		this.stop();
	}
	this.frame_1081 = function() {
		this.left_arrow2.addEventListener("click", handleClick.bind(this));
		this.center_arrow2.addEventListener("click", handleClick.bind(this));
		this.right_arrow2.addEventListener("click", handleClick.bind(this));
		
		function handleClick(evt) {
		  let clickedObject = evt.currentTarget;
		
		  if (clickedObject === this.center_arrow2) {
		    this.gotoAndPlay(1117); // Correct answer frame
		  } else {
		    this.gotoAndPlay(1211); // Wrong answer frame
		  }
		}
	}
	this.frame_1115 = function() {
		this.gotoAndPlay(1083);
	}
	this.frame_1209 = function() {
		this.stop();
	}
	this.frame_1328 = function() {
		this.gotoAndPlay(1322);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(414).call(this.frame_414).wait(34).call(this.frame_448).wait(110).call(this.frame_558).wait(94).call(this.frame_652).wait(15).call(this.frame_667).wait(414).call(this.frame_1081).wait(34).call(this.frame_1115).wait(94).call(this.frame_1209).wait(119).call(this.frame_1328).wait(1));

	// Wrong_2nd
	this.instance = new lib.Wrong("synched",0);
	this.instance.setTransform(639.2,356.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1210).to({_off:false},0).wait(119));

	// Correct__2nd_
	this.instance_1 = new lib.Correct2ndAttemptScreen("synched",0);
	this.instance_1.setTransform(639.65,357.85);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1116).to({_off:false},0).to({_off:true},94).wait(119));

	// wrong
	this.rewatch_btn2 = new lib.rewatchbtn2copy();
	this.rewatch_btn2.name = "rewatch_btn2";
	this.rewatch_btn2.setTransform(645.05,629.85);
	this.rewatch_btn2._off = true;
	new cjs.ButtonHelper(this.rewatch_btn2, 0, 1, 2, false, new lib.rewatchbtn2copy(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rewatch_btn2).wait(652).to({_off:false},0).to({_off:true},16).wait(661));

	// Incorrect
	this.instance_2 = new lib.slotanswerrevealcopy();
	this.instance_2.setTransform(639.8,527.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(559).to({_off:false},0).wait(16).to({y:-99.15},10,cjs.Ease.get(-1)).to({y:-5950.3},21).to({y:-9542.55},46,cjs.Ease.get(1)).to({_off:true},16).wait(661));

	// Correct
	this.instance_3 = new lib.slotanswerreveal();
	this.instance_3.setTransform(639.8,527.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(449).to({_off:false},0).wait(16).to({y:-99.15},10,cjs.Ease.get(-1)).to({y:-5950.3},21).to({y:-8824.05},46,cjs.Ease.get(1)).to({_off:true},17).wait(770));

	// Instructions
	this.instance_4 = new lib.instuctionsframe();
	this.instance_4.setTransform(646.15,374.1);

	this.instance_5 = new lib.QuestionFrame();
	this.instance_5.setTransform(646.15,374.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},1).to({state:[]},143).to({state:[{t:this.instance_5}]},135).to({state:[]},135).to({state:[{t:this.instance_4}]},254).to({state:[]},143).to({state:[{t:this.instance_5}]},135).to({state:[]},135).wait(248));

	// map
	this.instance_6 = new lib.handholdingmap();
	this.instance_6.setTransform(584.9,1145.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(816).to({_off:false},0).to({y:469.45},11,cjs.Ease.get(1)).wait(104).to({y:1147.45},10,cjs.Ease.get(1)).to({_off:true},1).wait(387));

	// right_arrow
	this.instance_7 = new lib.arrow();
	this.instance_7.setTransform(926.35,451.8,1,1,0,0,180);

	this.right_arrow2 = new lib.rightarrow();
	this.right_arrow2.name = "right_arrow2";
	this.right_arrow2.setTransform(879.85,506.3,1,1,0,0,0,-50.5,50.5);
	new cjs.ButtonHelper(this.right_arrow2, 0, 1, 2, false, new lib.rightarrow(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},668).to({state:[{t:this.right_arrow2}]},413).to({state:[]},35).wait(213));

	// center_arrow
	this.instance_8 = new lib.arrowstraight();
	this.instance_8.setTransform(637.95,418.3);

	this.center_arrow2 = new lib.straightarrow();
	this.center_arrow2.name = "center_arrow2";
	this.center_arrow2.setTransform(684.55,472.9,1,1,0,0,0,41.6,52.6);
	new cjs.ButtonHelper(this.center_arrow2, 0, 1, 2, false, new lib.straightarrow(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},668).to({state:[{t:this.center_arrow2}]},413).to({state:[]},35).wait(213));

	// left_arrow
	this.instance_9 = new lib.arrow();
	this.instance_9.setTransform(362.6,455.8);

	this.left_arrow2 = new lib.leftarrow();
	this.left_arrow2.name = "left_arrow2";
	this.left_arrow2.setTransform(409.1,510.3,1,1,0,0,0,50.5,50.5);
	new cjs.ButtonHelper(this.left_arrow2, 0, 1, 2, false, new lib.leftarrow(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},668).to({state:[{t:this.left_arrow2}]},413).to({state:[]},35).wait(213));

	// Layer_16
	this.instance_10 = new lib.trail2();
	this.instance_10.setTransform(637.75,505.8);
	this.instance_10.alpha = 0.8984;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(668).to({_off:false},0).to({_off:true},448).wait(213));

	// Layer_14
	this.instance_11 = new lib.trail();
	this.instance_11.setTransform(637.75,505.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(668).to({_off:false},0).to({_off:true},448).wait(213));

	// Layer_1
	this.instance_12 = new lib.grass();
	this.instance_12.setTransform(624,488.8,1,1,0,0,0,0,0.8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(668).to({_off:false},0).to({_off:true},448).wait(213));

	// Layer_7
	this.instance_13 = new lib.hill2();
	this.instance_13.setTransform(644.15,187.3);
	this.instance_13.alpha = 0.8984;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(668).to({_off:false},0).to({_off:true},448).wait(213));

	// Layer_11
	this.instance_14 = new lib.bg();
	this.instance_14.setTransform(636.6,-20.5,0.7006,0.7006);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(3,1,1).p("EhohAB8MDRDgD2");
	this.shape.setTransform(654.55,250.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance_14}]},668).to({state:[]},448).wait(213));

	// map
	this.instance_15 = new lib.handholdingmap();
	this.instance_15.setTransform(584.9,1145.2);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(149).to({_off:false},0).to({y:469.45},11,cjs.Ease.get(1)).wait(104).to({y:1147.45},10,cjs.Ease.get(1)).to({_off:true},1).wait(1054));

	// right_arrow
	this.instance_16 = new lib.arrow();
	this.instance_16.setTransform(926.35,451.8,1,1,0,0,180);

	this.right_arrow = new lib.rightarrow();
	this.right_arrow.name = "right_arrow";
	this.right_arrow.setTransform(879.85,506.3,1,1,0,0,0,-50.5,50.5);
	new cjs.ButtonHelper(this.right_arrow, 0, 1, 2, false, new lib.rightarrow(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.right_arrow}]},413).to({state:[]},35).wait(880));

	// center_arrow
	this.instance_17 = new lib.arrowstraight();
	this.instance_17.setTransform(637.95,418.3);

	this.center_arrow = new lib.straightarrow();
	this.center_arrow.name = "center_arrow";
	this.center_arrow.setTransform(684.55,472.9,1,1,0,0,0,41.6,52.6);
	new cjs.ButtonHelper(this.center_arrow, 0, 1, 2, false, new lib.straightarrow(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.center_arrow}]},413).to({state:[]},35).wait(880));

	// left_arrow
	this.instance_18 = new lib.arrow();
	this.instance_18.setTransform(362.6,455.8);

	this.left_arrow = new lib.leftarrow();
	this.left_arrow.name = "left_arrow";
	this.left_arrow.setTransform(409.1,510.3,1,1,0,0,0,50.5,50.5);
	new cjs.ButtonHelper(this.left_arrow, 0, 1, 2, false, new lib.leftarrow(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.left_arrow}]},413).to({state:[]},35).wait(880));

	// Layer_16
	this.instance_19 = new lib.trail2();
	this.instance_19.setTransform(637.75,505.8);
	this.instance_19.alpha = 0.8984;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({_off:false},0).to({_off:true},448).wait(880));

	// Layer_14
	this.instance_20 = new lib.trail();
	this.instance_20.setTransform(637.75,505.8);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({_off:false},0).to({_off:true},448).wait(880));

	// Layer_1
	this.instance_21 = new lib.grass();
	this.instance_21.setTransform(624,488.8,1,1,0,0,0,0,0.8);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({_off:false},0).to({_off:true},448).wait(880));

	// Layer_7
	this.instance_22 = new lib.hill2();
	this.instance_22.setTransform(644.15,187.3);
	this.instance_22.alpha = 0.8984;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({_off:false},0).to({_off:true},448).wait(880));

	// Layer_11
	this.instance_23 = new lib.bg();
	this.instance_23.setTransform(636.6,-20.5,0.7006,0.7006);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(3,1,1).p("EhohAB8MDRDgD2");
	this.shape_1.setTransform(654.55,250.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.instance_23}]},1).to({state:[]},448).wait(880));

	// playbtn
	this.play_btn = new lib.playbuttonbutton();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(629.85,371.95);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.playbuttonbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).to({_off:true},1).wait(1328));

	// thumnail
	this.instance_24 = new lib.newthumbnail();
	this.instance_24.setTransform(638,360,1.0344,1.0344);
	var instance_24Filter_1 = new cjs.ColorFilter(0.6,0.6,0.6,1,0,0,0,0);
	this.instance_24.filters = [instance_24Filter_1];
	this.instance_24.cache(-640,-362,1282,724);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({_off:true},1).wait(1328));
	this.timeline.addTween(cjs.Tween.get(instance_24Filter_1).wait(1328));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(471.6,-10366.9,1430.1999999999998,22620);
// library properties:
lib.properties = {
	id: 'B543C4DCA9038D4494FB095F47CB2718',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/images/Bitmap1.jpg", id:"Bitmap1"},
		{src:"/images/Bitmap13.png", id:"Bitmap13"},
		{src:"/images/Bitmap17.png", id:"Bitmap17"},
		{src:"/images/noisybackground.jpg", id:"noisybackground"}
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
an.compositions['B543C4DCA9038D4494FB095F47CB2718'] = {
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