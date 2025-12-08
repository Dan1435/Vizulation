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
	this.text = new cjs.Text("which route will lead to the hospital? ", "100px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 116;
	this.text.lineWidth = 1054;
	this.text.parent = this;
	this.text.setTransform(-0.05,-212.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.questiontext, new cjs.Rectangle(-529.1,-214.9,1058.2,465.4), null);


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
	this.text = new cjs.Text("quickly take a \nlook at this map.", "100px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 116;
	this.text.lineWidth = 1054;
	this.text.parent = this;
	this.text.setTransform(-0.05,-133.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.instructionstext, new cjs.Rectangle(-529.1,-135.9,1058.2,581.2), null);


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
	this.text = new cjs.Text("Outcome loaded.", "200px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 230;
	this.text.lineWidth = 950;
	this.text.parent = this;
	this.text.setTransform(0,-462.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.answerrevealtext, new cjs.Rectangle(-476.8,-464.4,953.7,928.8), null);


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
p.nominalBounds = new cjs.Rectangle(-738.1,-434.1,1476.3000000000002,1422.8000000000002);


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

	// Layer_16
	this.instance = new lib.alphatest2();
	this.instance.setTransform(-26.85,-19.8);
	this.instance.alpha = 0.1484;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_25
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(3.95,-44.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.098)").s().p("EAS6gnvIeOj4MAAABTjI+OD4gEgw4gn7MAi7gD5MgAsBTOMgieAEag");
	this.shape_1.setTransform(94.425,-0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_12
	this.instance_1 = new lib.pinetree("synched",0);
	this.instance_1.setTransform(187.25,131.55,0.1432,0.1432,0,0,180,-205,-11.2);

	this.instance_2 = new lib.pinetree("synched",0);
	this.instance_2.setTransform(-556.2,315.85,0.1432,0.1432,0,0,180,-203.6,-11.2);

	this.instance_3 = new lib.pinetree("synched",0);
	this.instance_3.setTransform(-359.45,101.95,0.1432,0.1432,0,0,180,-203.6,-10.5);

	this.instance_4 = new lib.pinetree("synched",0);
	this.instance_4.setTransform(-257.05,214.5,0.1432,0.1432,0,0,180,-203.6,-10.8);

	this.instance_5 = new lib.pinetree("synched",0);
	this.instance_5.setTransform(-323.9,-74,0.1432,0.1432,0,0,180,-203.6,-12.6);

	this.instance_6 = new lib.pinetree("synched",0);
	this.instance_6.setTransform(-241.45,96.3,0.1432,0.1432,0,0,180,-203.2,-11.2);

	this.instance_7 = new lib.pinetree("synched",0);
	this.instance_7.setTransform(172.9,-46.2,0.1432,0.1432,0,0,180,-205,-12.2);

	this.instance_8 = new lib.pinetree("synched",0);
	this.instance_8.setTransform(171.05,289.85,0.1432,0.1432,0,0,180,-204.3,-9.8);

	this.instance_9 = new lib.pinetree("synched",0);
	this.instance_9.setTransform(-129.6,52.3,0.1432,0.1432,0,0,180,-204,-11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer_23
	this.instance_10 = new lib.pinetree("synched",0);
	this.instance_10.setTransform(-11,-50.25,0.1432,0.1432,0,0,180,-204,-12.6);

	this.instance_11 = new lib.pinetree("synched",0);
	this.instance_11.setTransform(78.25,291.65,0.1432,0.1432,0,0,180,-204.3,-10.5);

	this.instance_12 = new lib.pinetree("synched",0);
	this.instance_12.setTransform(51.9,76.65,0.1432,0.1432,0,0,180,-205,-10.8);

	this.instance_13 = new lib.pinetree("synched",0);
	this.instance_13.setTransform(-117.8,214.5,0.1432,0.1432,0,0,180,-203.6,-10.8);

	this.instance_14 = new lib.pinetree("synched",0);
	this.instance_14.setTransform(-346.5,299.8,0.1432,0.1432,0,0,180,-203.2,-10.8);

	this.instance_15 = new lib.pinetree("synched",0);
	this.instance_15.setTransform(-526.95,-25.8,0.1432,0.1432,0,0,180,-203.2,-12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(1));

	// Layer_19
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AA9E6A").s().p("AI8AtIjMAAIh8AAIi2AAIiRAAIitAAIiJAAIjCAAIhVAAIAAhZIVBAAIAABZg");
	this.shape_2.setTransform(-234.75,-179.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6D6F45").s().p("AEsEgQADgdgLgYQgLgZgSgFIgGgNIAAnfIB8AAIAAHsQgSAFgMAZQgKAYACAdgAgeEgQACgagLgZQgKgYgSgEIgDAAIAAnwICRAAIAAHfIgLADQgRAFgMAYQgKAYACAbIAAANgAlcEgQADgdgLgYQgJgVgPgGIAAnvICIAAIADHsQgUAFgLAZQgLAYACAdg");
	this.shape_3.setTransform(-236.025,-146.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#837C4F").s().p("AKeD1Iq5mBIqIGBIgtg9IKVmsIMMGxIguA4g");
	this.shape_4.setTransform(-234.475,-208.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A6A073").s().p("AqgDBIKHmBIK6GBg");
	this.shape_5.setTransform(-234.75,-203.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#77784B").s().p("Aq5AtIAEhWIAoAAIUMgDIA6AAIAABZg");
	this.shape_6.setTransform(-234.8,-107.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F42").s().p("AqGgcIAeAAIEHAAIBDAAID7AAIA6AAIEQAAIAsAAIEWAAIAdAAIAAA3I0MACg");
	this.shape_7.setTransform(-235.55,-114.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A79E6B").s().p("AC3AwIAAgNQgCgbAKgXQAMgYARgFIALgDIC2AAIAGANQASAFALAZQALAXgDAdgAh9AwQgCgdALgXQALgZAUgFIAAAFICqAAIAAgBIADAAQASAEAKAYQALAYgCAagAnHAwQgDgdALgXQALgZASgFIAAAFIC9gBIAFgBIAAAAQAPAGAJAVQALAXgDAdg");
	this.shape_8.setTransform(-251.641,-122.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A29B71").s().p("AFAEgQgDgdALgYQALgZASgFIAAnsIDMAAIAAHsQASAFALAZQAKAYgCAdgAkIDSIAAgFIgDnsICtAAIAAHwIAAABgApWDNIAAnsIDDAAIAAHvQgCgBgDACIi+ABgAA0DAIAAnfIC2AAIAAHfg");
	this.shape_9.setTransform(-233.684,-146.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_18
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#24941A").ss(3,1,1).p("AVYx9ICKBzQAGgJAHgJQA0hFBLgnEA1igSvQBFAYAuA4QAHAIAHAIQAqhUBJgiAU3GKQA+A2AhBKQAFALAEAKICih1AIEiGQBFAYAvA4QAHAIAGAIQArhUBIgiEAxOAZWQBFAYAvA4QAGAIAHAIQAqhUBJgiEghHgJQQBFAYAvA3QAHAIAGAIQAqhTBJgiA056fQBEAZAwA3QAGAIAGAIQArhUBJgiAk0znQBFAYAuA4QAHAHAHAIQAqhUBIghA05jTQBEAYAwA3QAGAIAGAIQArhUBJghAwiDnQBFAYAvA3QAGAIAHAIQAqhUBJghA7xK3QBFAYAvA3QAHAIAGAIQAqhUBJgiAyNZWQBFAYAvA4QAHAIAGAIQArhUBIgiEg5VAEHQBFAYAuA3QAHAIAHAIQAqhUBJgh");
	this.shape_10.setTransform(-14.075,44.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer_17
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#4A512D").ss(3,1,1).p("AEziiIBhAAIAAhWIhhAAIAABWIAABWIBhAAIAAhWAGUCuIAAhWIhhAAIAABWgAAZkEIhVAAIAABiIBVAAIBWAAIAAhiIhWAAIAABiAEzCuIAABWIBhAAIAAhWAmTiiIBhAAIAAhWIhhAAIAABWIAABWIBhAAIAAhWAkyCuIAAhWIhhAAIAABWgAmTCuIAABWIBhAAIAAhW");
	this.shape_11.setTransform(10.025,-163.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E75200").s().p("AA9J4IADkYIiKAAIAAEYIhFAAIgDllIEnAAIAAFlgAo/knII/lQIJAFYg");
	this.shape_12.setTransform(11.375,-179.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C07201").s().p("AIXArIxFAAIgbAAIAAhVIAFAAIADAAIACAAIALAAIR+AIIAABNg");
	this.shape_13.setTransform(10.3,-204.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E55700").s().p("ADkGlIAAnHImiAAIgCHHIlgAAIgCtJIRFAAIAANJgAE8B5IAABWIBhAAIAAhWIAAhWIhhAAgAmJB5IAABWIBhAAIAAhWIAAhWIhhAAgAE8jXIAABWIBhAAIAAhWIAAhWIhhAAgAmJjXIAABWIBhAAIAAhWIAAhWIhhAAgAgzjXIBVAAIBWAAIAAhiIhWAAIhVAAg");
	this.shape_14.setTransform(9.1,-158.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E8A800").s().p("ACaDkIAAlkIknAAIAEFkIhIAAIACnHIGhAAIAAHHg");
	this.shape_15.setTransform(10.85,-138.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6A653B").s().p("AhFCMIAAkXICLAAIgEEXg");
	this.shape_16.setTransform(10.85,-129.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AAE2F9").s().p("AEzEFIAAhXIBhAAIAABXgAmTEFIAAhXIBhAAIAABXgAGUCugAEzCuIAAhVIBhAAIAABVgAkyCugAmTCuIAAhVIBhAAIAABVgAEzhMIAAhWIBhAAIhhAAIAAhWIBhAAIAABWIAABWgAmThMIAAhWIBhAAIhhAAIAAhWIBhAAIAABWIAABWgAAZiiIAAhiIBWAAIAABigAg8iiIAAhiIBVAAIAABig");
	this.shape_17.setTransform(10.025,-163.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer_10
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF6600").s().p("AiOigIEkAAIAAE3IkrAKgAArBtIgFg/IA9AAIAAhKIhAAAIAAhgIhKAAIADBgIg6AAIgGBKIBOAAIAAA/IBBAAg");
	this.shape_18.setTransform(316.725,90.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVB1IAAg/IhOAAIAGhKIA6AAIgDhgIBKAAIAABgIBAAAIAABKIg9AAIAFA/g");
	this.shape_19.setTransform(316.625,89.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).wait(1));

	// Layer_9
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8BB3B8").s().p("AIiC4IgtAAInlkKIoKEKIgdAAIhKAAIKDlvIJAFvg");
	this.shape_20.setTransform(315.475,75.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#529E97").s().p("AFICoIAAlJICAAAIAAFJgAnHCoIAAlJICAAAIAAFJgABdAVIAAi8IC9AAIAAC8gAjnAVIAAixICyAAIAACxg");
	this.shape_21.setTransform(316.025,126.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CBDDE2").s().p("AESINIAAllIn0AAIAAFlIk6AAIAAsOIAdAAIIKkLIHlELIAtAAIAAMOgAFIDoICAAAIAAlJIiAAAgAnHDoICAAAIAAlJIiAAAgABeBVIC9AAIAAi8Ii9AAgAjnBVICzAAIAAixIizAAg");
	this.shape_22.setTransform(316,120.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E15500").s().p("ACgCzIgGj6IkpAAIAAD6IhrAAIAAllIH0AAIAAFlg");
	this.shape_23.setTransform(318.4,154.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3592B5").s().p("AiXB9IAAj5IEpAAIAGD5g");
	this.shape_24.setTransform(319.2,160.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

	// Layer_24
	this.instance_16 = new lib.pinetree("synched",0);
	this.instance_16.setTransform(-97.6,-99.15,0.1432,0.1432,0,0,180,-203.6,-12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// Layer_15
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#358B1C").s().p("AmuBWIitAAIgBgEIgBgBQgUgTgEgaQgGgkATgfQAbgrAzgBQAfgBAIAeQAHgGAIgEQAjgUAoAIQAkAFAEAkQAKgHAMgBQAXgCAXAEQAyAMAOAxQAFASAAAVQABALgHAGIhWAGIgiACQgkAAgkgGgAGKA5Qg9ABgQgBQgPgBgiACIgCAAQgMgGgVAAIgBAAIAAAAIgCAAIAAAAIgBAAIgmACIAAgqQAFgeAdgTQAZgQAYACQAIABAbgUQAdgVAYAAQAhAAAaALIAvAaIADgFIAegPQADgBAXAAQAaAAAOAMQANALAGAZIAdAPQAQASAAASQAAAWhKAJQgsAEhKABQAAgEgtABg");
	this.shape_25.setTransform(-293.7312,117.3057);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer_14
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#89650A").s().p("AhMCMIgDkXICfAAIAAEXg");
	this.shape_26.setTransform(-294.3,105.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B7E2F7").s().p("ACcBlIAAjJIDQAAIAADJgAlrBlIAAjJIDQAAIAADJg");
	this.shape_27.setTransform(-295.8,83.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#99610A").s().p("AoPBoICVjPILoAAICiDPg");
	this.shape_28.setTransform(-295.65,45.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C48401").s().p("AnZAtIg4AAIAAhZIQfAAIAEBXIgiACg");
	this.shape_29.setTransform(-295.425,60.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EA9200").s().p("ABQEQIAAkXIifAAIADEXImYAAIAAofIPJAAIAAIfgACNASIDQAAIAAjJIjQAAgAl6ASIDQAAIAAjJIjQAAg");
	this.shape_30.setTransform(-294.3,92.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]}).wait(1));

	// Layer_13
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#990000").s().p("AhPiUICfAAIAAC/IiXBqg");
	this.shape_31.setTransform(-346.325,158.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BAE4F6").s().p("ABbBrIAAjVIBvAAIAADVgAjKBrIAAjVIBwAAIAADVg");
	this.shape_32.setTransform(-326.05,205.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E15200").s().p("AlHDtIAAnZIKPAAIAAHZgABdBTIBwAAIAAjVIhwAAgAjHBTIBwAAIAAjVIhwAAg");
	this.shape_33.setTransform(-326.325,207.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BF5400").s().p("AknCjIhgAAICYhrICYhpICfhxIE/EiIgfAjg");
	this.shape_34.setTransform(-329.55,167.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]}).wait(1));

	// Layer_8
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#423300").s().p("AEmAqQiLgniOgLQhWgHhVAFQhFAFhDAMQheARhWAoIAehTQCJhBCOgSIAHAAQCXgTCWAUQCaAVCCBWQAXAPAWAQIADACIgYBKQhIgwhVgXg");
	this.shape_35.setTransform(186.575,184.0997);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#663300").s().p("AGlDYIgsgfQiDhWiagWQiHgRiJANIgkADQiOATiJBAIgshWQAVgMAXgKQBWgnBegRQBDgNBEgFQBWgFBWAIQCOAMCKAlQBWAYBIAvQAqAbAnAkIhXA3gAHDAZQgWgRgXgOQiChXiagVQiWgUiYATIgHABQiNARiJBBIgthWQBrg5B1gWQCYgdCaAOQCOAMCIAmIAEABQCHAmBnBfIhWA3g");
	this.shape_36.setTransform(188.7,185.3497);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).wait(1));

	// Layer_7
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#37A7D0").s().p("AxNVkQAuhWBphNQCjh3C9hLQCqhFCXhnQBGguAThTQANg3AYgzQBYi3BsiqQAagnAiggQCBh2B+h6QBnhlAAiPQAAjEAwjBQAgh+Ahh9QAzi+EjkrIC4DUQhqCMg4CmQhCDDgHDOQgBAqAFAqQAMBXgCBXQAAAwgTAsIj2EsQgUAXgRAZQhlCbhPCnQhZC9hmC1QgTAigdAcQhYBYhaBVQiXCMiHCcIgCADg");
	this.shape_37.setTransform(197.975,104.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(1));

	// Layer_20
	this.instance_17 = new lib.shed();
	this.instance_17.setTransform(194.4,42.55,0.5331,0.5331,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

	// Layer_22
	this.instance_18 = new lib.hostpital();
	this.instance_18.setTransform(260.9,-145,0.5331,0.5331,0,0,0,0.3,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

	// Layer_4
	this.instance_19 = new lib.arrowalphastraight();
	this.instance_19.setTransform(63.45,189.45,0.216,0.216,0,59.9991,-120.0009,-0.5,0.6);

	this.instance_20 = new lib.arrowalphastraight();
	this.instance_20.setTransform(-50.55,189.3,0.216,0.216,-45.0029,0,0,-0.5,0.5);

	this.instance_21 = new lib.arrowalphastraight();
	this.instance_21.setTransform(6.35,174.6,0.2513,0.2513);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]}).wait(1));

	// Layer_6
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DA9425").s().p("AkDfSQgLjehMhAQkcjxmEhlQmEhlitA+Qj2BYjZAAQiZAAiWglIgcgGIgegJQgdAngvBJQimD8i0BnIggiAQBRhRBFhbQBah1AqhzQgXgLgWgMQiBhEhXhWQhYhVgollIEChAQAYC8AfBQQAdBQB0BGQByBFBeATQAaAGAfADQCXjiBRibQBii7BGlwQlXiWhGg1QhJg5jWg/QjWg/sfi3QiTmgC5CDQC5CEH9BNQH9BNBVBAQBoBPKCFrQAqAqAcAuQBPCDBbDnIARAoIBbD7QBaD7EBgKQEBgLHLF1QgSn1i+kaQk7nVg5iIQg5iHhYiHQhviniUhkQheg+jehbQiFg2gmgRQhdgog8giQjqiJhZg9Qg0glg1gyQlzgDkGhzQkTh5jdkSICriAQAfBeBZBeQBVBYB5BHQB4BHCCAlQCEAmB0gDQhChVhhiFIHSgQQBUDRDGBmQCOBJCjBIQBmjFB3iAQCLiZDMhqQB/hFA9geQBlgzBKgVQB0gdA4gSQBlggAagmIAXC1QivAuidBOQinBUiBBwQhxBphpByQivC8gWBYQCBA5BCAnQCQBWBMBuQAqA+BoC3QBrC9BCBjQBrCdBiBZQBxBlBxAWQCknqgcoPQgangABngIFAAgQhAOmA4IUQATC7AdD7QAFAqAMAaQA8B9D5kkQEqldDajkQDYjjB7gmQIJigF0l3QAegfAZghQBFhbAghxIF0ggQg0Cxg7CGQB8BuB4CGQBOBXBFBfIhiC9QhBihlajsQguBAgwArQijCRi5BHIgqAPIiZA2IgGACIgEACIgCABIgDABIgXAIIgJADIh9AsIgYAIQjGBLiIBgQiMBgh5DKQgiA6hBB5QhAB7g/BDQg/BDiGBMQiGBMhwBSQhQBXgmBLQgdA5gMA+QgHAjgBAkIAAAKIAQDGQALCRADA3QBeg0CkhLQHBjOB9hLQEKieBjjfQArhiAmiLIE4AAIgKAvQh0IBk/D7QlAD8liB7QlhB8AJBOQAJBPgOAlQgIAYAzBvQpNgcnBgUgA8DNYQhFC5gtBeQBfgMBfgZQDOg3CfhcQh1kYjXjzQguD+g/CugEAokAaLQhhgGglAAIA2i2QCKgHCKgQQD8gfDThnIFtAAQhBAvhDArQi/B3i8BCQjWBLjAAAIhrgFgEAifgZlQidg5hjghQmJiDl5AAQg1AAhGANQg/ALg7ATQgmALg6AjQgoAXgoAbIAbjKIACgBQDsh/GPAAQB8AACHAjQBfAZCEA0QCsBEAZAJQBnAjBGAAQAKAAAdgEQAfgDAUgEICFDKQgLAKgqAOQgqAOgTAAQg+AAh4gpg");
	this.shape_38.setTransform(-17.7499,36.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1));

	// Layer_5
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#5DAB12").s().p("Eg4bAl5QhqhQAAh2QAAggAVg0QAWg0AAgtQAAgmgfgoQgDgFg+hDQgsgxgVgsQgeg9AAhLQAAhABBhNQA6hEA5gZIAAggIALAAQgGgCgFgGQgQgNgQgkQgWgvAAgeQAAhDA7g1IAogiQASgSAAgOQAAgegggjQgUgUg1gvQgwgvgZgzQghhDAAhXQAAhBAfg8QAWgqAvg3QA9hGAJgLQAfgsAAgkQAAgjgbhHQgGgRgzh8QhVjKAAhoQAAiJB6jhIBUiWQAmhIAAgbQAAgVgjgeQgVgSg3gsQhwheAAhsQAAhcAuhPQAkg7BKhCQBWhIApgkQBGg/Aeg3QBQiYBeh8QBqiNBihGIAGgCQA+gVCngjQDLgqA/AAQEEAAEcBhQDTBIECCNQBJAoB/BJQB7BHAzAcQCzBhBRAAQBNAAEmh6QBpgrBngvQBbgqAWgNQCXhcC7hMQCNg5CaguQA4g0BfhBQCHhbA7AAQBYAAA2BdQAUAjAWA9IAnBtQAzCMA8BBQBXBdCQAAQBFAAAygeQAqgZAjg1QAZglAghKIA7h/QBQifB6hPQCohtEhAAQBsAABRAgQA0AUBGAyQBLA0AmARQBHAgBbAAQDXAACAC8QAqA+ArBkIA+CMQBKCQAUAhQA8BkAxAWQAYALBHAbQA1AUAZAQQAkAYARAjQATApAABCQAABSgZA2QgRAkgmAmQgrAsgMATQgZApAAA7QAAALASAjIApBKQA6BsAAAxQAABfgsBgQgrBbg8ApIAJAMQBGAUA2CyQAWBHANBNQALBKAAA0QAAB/hDBrQgyBRhMAyIAGALIA8BnQAnBEAXAwQBBCKAAB4QAABdgvBvIgjBPQgSAngFAWIAKACQAjA2ApA2QAcAlAHASQAGASgKByQAKC2g0B5QgxBzhbBXQhZBWh2AvQh4AwiEAAQg0AAhqgbQhrgahBAAQhSAAhnAfIhbAcQg5ARgzAJQh/Aag6AKQhjARhUAAQh0AAhjgFQhjgFirAAQn9gboWgbQqMggmVgRIgLgBIgFAAQhbgDghAAQgyAAjlAhIh2ASIABAFIgEACQgFAGgFABQjEAchXAKQjNAZhuAAQlfAAlVgwQhRgMh/gVQhZgPgSAAQhuAAkvBAQipAkgsAIQhqAUguAAQiCAAhkhKgEgRMAloIgFADIAWgFIgFgBQgFAAgHADg");
	this.shape_39.setTransform(2.178,2.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

	// Layer_1
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F6D09F").s().p("EAALAnaMgidAEaI9Jj4IgiAAMAAAhTZId6DiMAi7gD5MAg3AEFIePj4MAAABTjI+PD4g");
	this.shape_40.setTransform(-0.525,-0.15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FDFDFE").s().p("EgAFAqkMghlAEbMghkgEmMAAAhZCMAhOAEPMAiGgEPMAh7AEPMAg8gEvMAASBZtMgh8AEmgEAhqArzIeOj5MAAAhTjI+OD5Mgg4gEFMgi6AD4I96jiMAAABTZIAhAAIdKD5MAidgEbg");
	this.shape_41.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40}]}).wait(1));

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
p.nominalBounds = new cjs.Rectangle(-738.1,-434.1,1476.3000000000002,1616.8000000000002);


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
	this.shape_2.graphics.f().s("#844B26").ss(1,1,1).p("ApNN3QCYi9CgjNQCyjkDAj5QAVgYAfgIQFXg7EQj2QCqiLAMjYQAFhIg/hHQhsh8i4BrQhOAthNAnQizBTjDAXQiXgqihAKQhUANhMAlQiDBBhrBmQgMAHgLAOQgOAOiLCkQhBBLg1BI");
	this.shape_2.setTransform(-330.56,-108.5531);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D49E7C").s().p("ApDMRQhghliGhFIgngkQhKh9gRiIIgDghQAAgagCgaIAAgKQAChDADhBQAJgGhrkBQDDC6gDiBQA1hIBBhLQCLikAOgOQALgOAMgHQBrhmCDhBQBMglBUgNQCggKCYAqQDDgXCzhTQBNgnBOgtQC4hrBsB8QA/BHgFBIQgMDYiqCLQkQD2lXA7QgfAIgVAYQjAD5iyDkQigDNiYC9Qglg4gxgug");
	this.shape_3.setTransform(-340.16,-108.5531);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B26634").s().p("AgSgRIAlAjQgXgOgOgVg");
	this.shape_4.setTransform(-423.125,-48.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_13
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#844B26").ss(1,1,1).p("AiFOXQAmhJAhhGQAFgLAFgLQAFgNAGgLQAKgXAKgXQAOgiANgiQAFgLADgLQAHgRAHgRQAHgSAGgSQAEgLAEgLQAEgMAEgLQAIgXAGgWQABgBAAAAQABgCAAgDQADgIADgJQACgJADgIQAEgOAFgOQAGgXAFgXQAFgRAEgRQABgGABgGQADgGAAgFQACgGABgGQACgFAAgGQABgGABgFQABgBAAgBQABgFABgFQABgGABgFQACgKACgLQAAgBAAgBQAAgJAAgIQAAgDAAgDQAAgFAAgHQAAgFAAgGQAAgIgBgJQAAgIAAgJQAAgFAAgGQAAgGgBgGQAAgFAAgGQgBgMAAgLQAAgDgBgDQAAgCAAgBQgBgHAAgHQAAgIgBgJQgBgOgCgOQAAgBAAgCQgBgDAAgFQAAgFgBgGQAAgDAAgDQAAgIgCgJQgBgGAAgGQgBgFgBgGQAAgGgBgFQgDgRgCgRQgCgJgBgIQgBgHgBgFQgCgPgDgOQgBgFgBgGQgDgRgEgRQgFgXgEgXQgBgFgDgHQgBgGgBgFQAAgBAAAAQgBgDgBgDQgDgPgEgOQgDgJgCgKQgBgDgBgFQgBgDgBgDQgBgDgBgDQgDgMgDgLQAAgCgBgDIAAAAQgBgDgBgDQgIgfgJgfQgCgGgBgGQgNgtgNgtQgKglgLglAAwr1QgehRgfhQ");
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
	this.shape_9.graphics.f().s("#844B26").ss(1,1,1).p("AJON3QiYi+igjNQiyjkjAj5QgVgYgfgIQlXg6kQj3QiqiLgMjYQgFhHA+hHQBth9C4BrQBOAtBNAnQCzBUDDAWQCXgqChAKQBUANBMAlQCDBBBrBmQAMAIALANQAPAOCKCkQBBBLA1BI");
	this.shape_9.setTransform(443.7597,-123.1925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D49E7C").s().p("ADlHsQiyjkjAj5QgVgYgfgIQlXg6kQj3QiqiLgMjYQgFhHA+hHQBth9C4BrQBOAtBNAnQCzBUDDAWQCXgqChAKQBUANBMAlQCDBBBrBmQAMAIALANQAPAOCKCkQBBBLA1BIQgFCpASA7QAOA3AehlQAPALAWANQADBBACBEIAAAJIgCA0IgDAhQgRCJhKB8IgnAlQiGBEhgBlQgxAuglA5QiYi+igjNg");
	this.shape_10.setTransform(448.6847,-123.1925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B26634").s().p("AATgRQgOAVgXAOg");
	this.shape_11.setTransform(536.325,-63.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// Layer_7
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#844B26").ss(1,1,1).p("ACGOXQgmhJghhGQgFgLgFgLQgFgMgGgMQgKgXgKgXQgOgigNgiQgFgLgEgLQgHgRgGgRQgHgSgGgRQgEgLgEgLQgEgMgEgMQgIgXgHgWQAAAAAAgBQgBgCgBgCQgDgJgCgIQgDgKgCgIQgFgOgEgOQgGgXgGgWQgEgSgEgRQgCgGgBgFQgCgGgBgGQgBgGgBgGQgCgFAAgGQgCgGgBgFQAAgBAAAAQgBgFgBgGQgBgFgBgGQgCgKgCgLQAAgBAAgBQAAgJAAgIQAAgDAAgDQAAgFAAgGQAAgGAAgFQAAgJAAgIQAAgJAAgIQAAgGABgGQAAgGABgGQAAgFAAgGQAAgLABgMQAAgCABgDQAAgCAAgCQAAgHABgHQAAgIABgJQABgNABgPQAAgBAAgCQABgDAAgFQABgFAAgHQAAgCABgDQAAgIACgJQAAgGABgGQABgFABgGQAAgFABgGQACgRADgSQABgIACgJQABgGABgFQACgPADgOQAAgGABgFQAEgRADgRQAFgYAFgWQABgGACgGQABgGACgFQAAgBAAgBQABgCAAgDQAEgPAEgOQACgKADgJQABgDABgFQABgDAAgDQABgEABgDQADgLAEgLQAAgDABgCIAAgBQABgCABgDQAIgfAJggQABgFACgGQANgtANguQAKgkAKglAgvr1QAehRAehQ");
	this.shape_12.setTransform(486.1,-7.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D49E7C").s().p("AiUONIgKgWIgLgXIgUguIgchFIgIgVIgOgiIgNgkIgIgWIgIgYIgOgsIgBgBIgBgFIgGgRIgEgSIgJgcIgMgtIgJgiIgCgMIgDgLIgDgMIgCgLIgCgMIgBgBIgCgKIgCgLIgEgWIAAgBIAAgSIAAgFIAAgMIAAgLIABgRIAAgRIABgMIAAgLIAAgLIABgXIABgGIAAgEIABgNIABgRIADgdIAAgDIABgIIABgMIAAgFIACgRIABgMIACgLIABgLIAFgiIADgRIACgLIAFgdIACgLIAHgiIAKguIADgMIACgLIABgCIABgFIAHgdIAFgTIADgIIABgGIACgHIAGgWIACgFIAAgBIABgFIARg/IAEgLIAZhbIAWhJQCUikBqhyQCNiWBHg9QAUgSAOgKQBLg2hLCHIgGAKIgcAxIg8BjQguBJgyBNQALBlAHBkIAGBbIABALIADA/IAAAFIAAABIAAAFIACAWIAAAHIAAAGIABAbIABAdIAAAFIAAACIABALIAAAMIAAALIABAjIABAiIAAALIAAAdIAAALIAAARIAAAiIAAALIAAALIAAAMIgBARIAAAFIAAAMIAAAIIAAADIgBAdIAAARIgBANIAAAEIAAAGIAAAXIgBALIAAALIgBAMIAAARIgBARIgBALIAAAMIgBAFIAAASIgCAXIAAALIgBALIgBAMIgBALIAAAMIgBALIgBAMIgDAiIgDAtIgDAcIgBASIgCARIAAAFIAAABIgFAsIgCAYIgCAWIgEAkIgEAiIgDAVIgJBFIgBACQgmAFglALQgTAGgSAIQgLADgIALQgIAJgGAOQgFAKgDAMQgQAzgEBdQgmhJghhHg");
	this.shape_13.setTransform(507.2625,-20.6485);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// Layer_16
	this.instance = new lib.map();
	this.instance.setTransform(62.1,-137.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_18
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(47,47,47,0.098)").s().p("EgV5AjNIgMgLQgSgSgMgWIAeg2IAMgVIBlizIABgBIAthPIAGgKIAQgaQA+hsAuh0IAAgBIAHgRIAvh3IAmhbIAHgQQAZg9Abg9IAKgXQAwhtAxhpIAmhRIAIgRIAthdIAuhaIAuhXIAXgqIAUglIAaguQAphKAshJIAAgBQAxhTAwhTIAAgCIAQgaIAZguIAZguIANgXIABgBIAFgKIAfg4IAJgRIAZguIAKgTIA/h6QAjhGANhKIADgUQADgUABgVIADgvIAEgkQAFg0AKgyIAIgpQAKgsANgrQAfhoAxhjIAVgpIAHgNIARgeQACgFAEgEIALgTIAPgYIABgBIALgRIABgDQALgRAIgRIAOgdQAOgeAJgfQAHgTAEgUIACgFQAFgWADgWIABgKQAEgXAGgWIAEgQIAIgZIACgDQAGgQAHgOIAKgVIABgCIADgEIAIgPIAMgRIALgQIAGgHIAQgTIABgBIAOgPIAJgIIAFgFIAJgIIADgCIAGgGIATgSIACgBIABgCIALgJIAIgIIADgCIANgMIALgKIAGgFIALgLIACgBIADgCIABgBIAMgLIAFgFIAGgFIAXgUIASgQIAEgFIALgJIAjgfIALgJIALgJIABgBIAWgUIABgBIAKgJIABAAIAMgLIAKgJIAMgKIABgBIA+g2IAGgFIAWgTIAlgfIAUgQQAYgVAYgSIABgBIARgOIACgCIARgNIARgNIBPg8IATgOIAEgDQAVgQAWgNIAmgXQA+giBBgWIAPgFQAtgOAwgIIAQgCQAYgEAYgBIALgBQAwgDAyADIAJAAQg8AFg6AOQgXAFgWAGIhqAeQgKAGgiAZIggAXIgoAdIgEADIgTAOQgxAkgvAlIgUAPIgxAoIgbAWIgJAIIgZAUIgoAjIgcAYQgdAYgcAaIgWATIhEA7IgBABIgMALIgKAJIgMAKIgBABIgKAJIgBABIgWAUIgBABIgLAKIgLAJIgjAgIgLAJIgEAEIgSAQIgXAWIgGAFIgFAFIgIAHIgEAEIgBABIgDACIgCACIgLALIgGAGIgLANIgNAQIgDADIgIAMIgLAPIgBACIgCAEQgLARgIARIgGAOIgDAGQgIATgGAUIgGAUIgDANQgEAPgCARIgBAKIgHAkIgBAFQgHAdgJAbIgGAQIgLAdIgMAaIgFAKIgDAGIgDAFIgBACIgKASIgNAVIgCACIgIANIgXAmIgCACIgLATQgMAVgLAWQgRAhgQAjIgBADIgMAbQgIASgHAUIgLAfQgEAIgCAIQgJAbgIAcIgHAaQgLAsgJAtIgBAGQgIAvgGAxIgEAkIgDAvQAAAQgDAQQgBAPgCAOQgLA7gYA3IgOAeIg9B2IgNAXIgXAuIgKARIgeA4IgGALIgNAXIgTAjIgHALIgZAuIgQAcIgUAiQglBDgnBBIgBABIgPAZQgxBTgvBVQgsBQgqBTIguBaIgXAuIggBDIgOAdIguBhIgtBkIgeBFIgLAXIgFAMQgbA/gaA/IgmBbIg2CIIgBABIgNAiQgoBfg0BaIgDAFIgPAaQg9Bog6BnIgtBQIgBACIgfA3IgoBJQgRgKgNgMg");
	this.shape_14.setTransform(-505.875,27.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// back_part
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#844B26").ss(1,1,1).p("AXVgFQgOAQgNATQgJAOgJAOQgGAIgFAJQgFAJgFAIQgBACgBADQAAAAgBABQgBADgCADQgKAUgKATQgEAHgEAIQgCAEgDAEQgGALgGALQgJASgLASQgJARgKARQgGALgGALQgUAigVAiQgOAXgPAXQgCAEgCADQgGAIgFAJQgIALgHALQgyBMg2BLQgmAyg3AdQhKAlhJAmQiOBIiLBKQgYANgTAPQgaAVgUAZQgXAfgPAmQAAACgBACQgHAUgHAVQgsB9gmB/QgHAXgHAXQgGAWgGAWIAAABQgDALgDALQgEAMgDAMQgOAzgNA0QgBAFgCAFQAAABAAAAQgGAXgFAXQgLAtgLAtQAAABAAAAQgPBEgOBEQgQBQgOBRQgCALgCAMQgEAXgDAWQgDASgDASQgHApgJAlQgKAlgOAgQgHATgJARQgDAFgDAFIAAAAQhggChXAqQgjARgkAMQgjANgkAJQguAMgwAFQhZAKhdgNQgNgCgOgCQg0gIg1gLIgBAAQgdgGgegHQgSgDgRgEQhogZhngdQgQgEgPgEQgHgCgIgCQgKgDgJgDQg7gRg7gSQgYgIgXgHQg5gJg3gLQgugJgugLQgfgHgfgIQgggHgggJQgGgBgFgBQgPgFgPgEQgIgCgHgCIgBAAQgpgOgegSQgRgKgNgMQgGgGgGgFQgSgSgMgWQAPgbAPgbQAGgLAGgKQAyhZAzhaQAAgBABAAQAXgnAWgoQADgFADgFQAIgNAIgNQA+hsAuh0QAAgBAAAAQADgJAEgIQAXg8AYg7QATguATgtQAEgIADgIQAZg9Abg9QAFgMAFgLQAwhtAxhpQATgpATgoQAEgJAEgIQAWguAXgvQAXgtAXgtQAXgrAXgsQALgVAMgVQAKgTAKgSQANgXANgXQAphKAshJQAAAAAAgBQAxhTAwhTQAAgBAAgBQAIgNAIgNQAMgXANgWQANgWAMgYQAHgLAGgMQAAAAABgBQACgFADgFQAQgdAPgcQAFgJAEgIQAMgXANgXQAEgJAGgKQAgg9Afg9QAjhGANhKQACgKABgKQADgUABgVQABgXACgYQACgTACgRQAFg0AKgyQAEgVAEgUQAKgsANgrQAfhoAxhjQALgUALgVQADgGAEgHQAIgPAJgPQACgFAEgEQAFgKAGgJQAHgMAIgMQAAgBABAAQAGgJAFgIQABgBAAgCQALgRAIgRQAIgOAGgPQAOgeAJgfQAHgTAEgUQABgDABgCQAFgWADgWQABgFAAgFQAEgXAGgWQABgIADgIQAEgNAEgMQABgCABgBQAGgQAHgOQAEgLAGgKQABgBAAgBQABgCACgCQAEgIAEgHQAGgJAFgIQAFgJAGgHQADgEADgDQAHgKAJgJQAAAAABgBQAHgHAHgIQAEgEAFgEQACgDADgCQAEgEAFgEQABgBACgBQADgDADgDQAJgJAKgJQABgBABAAQABgCAAAAQAFgFAGgEQAEgEAEgEQACgBABgBQAGgGAHgGQAFgFAGgFQADgDADgCQAFgGAGgFQABAAABgBQACgCABAAQAAgBABAAQAFgGAHgFQACgCADgDQADgCADgDQALgKAMgKQAJgIAJgIQACgDACgCQAFgEAGgFQASgQARgPQAFgFAGgEQAFgFAGgEQAAgBABAAQALgKALgKIABgBQAEgFAGgEQABAAAAAAQAGgGAGgFQAFgFAFgEQAGgGAGgEQAAgBABAAQAfgcAfgaQADgDADgCQALgJALgKQASgQATgPQAKgIAKgIQAYgVAYgSQAAgBABAAQAIgHAJgHQABgBABgBQAJgHAIgGQAJgHAIgGQAogfAngdQAJgHAKgHQADgCABgBQAVgQAWgNQATgMATgLQA+giBBgWQAHgCAIgDQAtgOAwgIQAHgBAJgBQAAAAAAAAQAYgEAYgBQAGgBAFAAQAwgDAyADQAEAAAFAAQALABAMABQAQABARADQAxAFAvgHQALgCAKgCQAEgBADgBQBHgSApAMQABADACADQBFgSAoAMEATMglsQAEAAAFAAQAHgBAHAAQAngCApADQAYABAZADEAXzgluQAAABAAABQAYAsAQAvQAEALADAMQAFAQAEAQQACAHABAHQAHAhADAhQACALAAALQAGA+AHA/QAUC1AYC2QAUCQgYCGQgMBBgGBBQgBAIgBAJQgLB3AHB5QABAdgGAbQgEATgEAUQgJAtgJAtQAAAGgBAGQgGAfgGAfQAAADgBADIAAAAQAAADgBACQgCALgCAMQAAADgBADQAAADAAADQgDAOgCANQgCAOgDAPQAAADAAADQAAAAAAABQgBAFgBAGQgBAGgBAGQgDAXgEAXQgBARgDARQAAAGgCAFQgBAOgCAPQgBAFgBAGIAAABQgBAIgBAJQgCARgDARQgBAFgBAGQgBAGgBAFQgBAHgBAFQgBAGgBAFQAAADgCADQAAADgBADQAAAGgCAFQgBAFgBADQAAACgBABQgDAPgDAOQgCAJgDAIQAAACAAABQgCAGgBAFQAAABgBACQgBADAAADQgDALgDAMQAAAGgCAFQgBAGgBAGQgBAGgBAFQgBAJgBAIQgBAJgBAIQAAAGgBAFQAAAHgBAFQAAADAAADQgBAIAAAJQAAALAAAMQAAAFAAAGQAAAGAAAGQAAAGAAAFQAAAGABAFQABAGAAAGQAAAGABAFQAAAHABAFQACARADARQABAFABAFQgGAAgFADQgEACAAAD");
	this.shape_15.setTransform(-484.2879,41.0065);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D49E7C").s().p("EgHRAlyIgbgEQg0gIg1gLIgBAAIg7gNIgjgHQhogZhngdIgfgIIgPgEIgTgGIh2gjIgvgPQg5gJg3gLQgugJgugLIg+gPQgggHgggJIgLgCIgegJIgPgEIgBAAQgpgOgegSQgRgKgNgMIgMgLQgSgSgMgWIAeg2IAMgVIBlizIABgBIAthPIAGgKIAQgaQA+hsAuh0IAAgBIAHgRIAvh3IAmhbIAHgQQAZg9Abg9IAKgXQAwhtAxhpIAmhRIAIgRIAthdIAuhaIAuhXIAXgqIAUglIAaguQAphKAshJIAAgBQAxhTAwhTIAAgCIAQgaIAZgtIAZguIANgXIABgBIAFgKIAfg5IAJgRIAZguIAKgTIA/h6QAjhGANhKIADgUQADgUABgVIADgvIAEgkQAFg0AKgyIAIgpQAKgsANgrQAfhoAxhjIAWgpIAHgNIARgeQACgFAEgEIALgTIAPgYIABgBIALgRIABgDQALgRAIgRIAOgdQAOgeAJgfQAHgTAEgUIACgFQAFgWADgWIABgKQAEgXAGgWIAEgQIAIgZIACgDQAGgQAHgOIAKgVIABgCIADgEIAIgPIALgRIALgQIAGgHIAQgTIABgBIAOgPIAJgIIAFgFIAJgIIADgCIAGgGIATgSIACgBIABgCIALgJIAIgIIADgCIANgMIALgKIAGgFIALgLIACgBIADgCIABgBIAMgLIAFgFIAGgFIAXgUIASgQIAEgFIALgJIAjgfIALgJIALgJIABgBIAWgUIABgBIAKgJIABAAIAMgLIAKgJIAMgKIABgBIA+g2IAGgFIAWgTIAlgfIAUgQQAYgVAYgSIABgBIARgOIACgCIARgNIARgNIBPg8IATgOIAEgDQAVgQAWgNIAmgXQA+giBBgWIAPgFQAtgOAwgIIAQgCIAAAAQAYgEAYgBIALgBQAwgDAyADIAJAAIAXACIAhAEQAxAFAvgHIAVgEIAHgCQBHgSApAMIADAGIAAACQAYAsAQAvIAHAXIAJAgIADAOQAHAhADAhIACAWIANB9QAUC1AYC2QAUCQgYCGQgMBBgGBBIgCARQgLB3AHB5QABAdgGAbIgIAnIgSBaIgBAMIgMA+IgBAGIAAAAIgBAFIgEAXIgBAGIAAAGIgFAbIgFAdIAAAGIAAABIgCALIgCAMIgHAuIgEAiIgCALIgDAdIgCALIAAABIgCARIgFAiIgCALIgCALIgCAMIgCALIgCAGIgBAGQAAAGgCAFIgCAIIgBADIgGAdIgFARIAAADIgDALIgBADIgBAGIgGAXIgCALIgCAMIgCALIgCARIgCARIgBALIgBAMIAAAGIgBARIAAAXIAAALIAAAMIAAALIABALIABAMIABALIABAMQACARADARIACAKQgGAAgFADQgEACAAADQAAgDAEgCQAFgDAGAAQgOAQgNATIgSAcIgLARIgKARIgCAFIgBABIgDAGIgUAnIgIAPIgFAIIgMAWIgUAkQgJARgKARIgMAWIgpBEIgdAuIgEAHIgLARIgPAWQgyBMg2BLQgmAyg3AdQhKAlhJAmQiOBIiLBKQgYANgTAPQgaAVgUAZQgXAfgPAmIgBAEIgOApQgsB9gmB/IgOAuIgMAsIAAABIgGAWIgHAYIgbBnIgDAKIAAABIgLAuIgWBaIAAABIgdCIQgQBQgOBRIgEAXIgHAtIgGAkQgHApgJAlQgKAlgOAgQgHATgJARIgGAKIAAAAQhggChXAqQgjARgkAMQgjANgkAJQguAMgwAFQglAEgmAAQg1AAg2gHg");
	this.shape_16.setTransform(-484.2879,41.0065);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AC6433").s().p("AgTADIghgDIgXgCIAJAAIAOgBQAngCAoADQAYABAZACQgbAEgcAAQgVAAgTgCg");
	this.shape_17.setTransform(-353.875,-199.9531);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B26634").s().p("AADgMIABAAIgHAYg");
	this.shape_18.setTransform(-544.425,281.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// Layer_19
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.098)").s().p("EAU0AiaIgfg4IgBgBIgthRIh3jOIgPgbIgDgEQg0hagohgIgNghIgBgBIg2iIIglhbIg2h+IgFgMIgLgYIgehEIgthkIguhhIgOgdIgghDIgXguIguhaQgqhSgshRQgvhVgxhTIgPgZIgBgBQgnhCglhBIgUgjIgQgcIgZgtIgHgNIgTgiIgNgXIgGgLIgeg4IgKgSIgXgtIgNgXIg9h2IgOgeQgYg4gLg6QgCgOgBgPQgDgPAAgQIgDgwIgEgkQgGgxgIgvIgBgGQgJgtgMgsIgGgbIgRg2IgFgPIgMghIgPglIgMgbIgBgDQgPgjgSghIgXgrIgLgTIgCgCIgXglIgIgOIgCgCIgNgUIgKgTIgBgCIgDgFIgDgGIgFgLIgMgZIgLgdIgGgQQgJgbgHgdIgBgGIgHgjIgBgKQgCgRgEgPIgDgOIgGgTQgGgUgIgSIgDgHIgGgNQgIgSgLgRIgCgEIgBgCIgLgQIgIgLIgDgDIgNgQIgLgMIgGgHIgLgLIgCgDIgDgBIgBgCIgEgDIgIgHIgFgFIgGgFIgXgWIgSgQIgEgEIgLgJIgjggIgLgJIgLgKIgBgCIgWgTIAAgBIgLgJIgBgBIgMgKIgKgJIgMgLIgBAAIhEg8IgWgTIg5gyIgcgYIgogiIgZgWIgJgHIgbgXIgxgnIgUgQQgvgkgxgkIgTgOIgEgDIgogdIgggXIgsgfIhqgdQgWgHgXgGQg6gNg8gFIAJgBQAygCAwACIALACQAYABAYAEIAQACQAwAIAtAPIAPAEQBBAVA+AjIAmAXQAWANAVAQIAEADIATAOQAoAdAnAfIARAMIARAOIACACIARAOIABAAIAwAoIAUAPIAlAgIAWATIAGAFIA+A2IABABIAMAKIAKAJIAMAKIABABIALAJIAAABIAWATIABACIALAJIALAJIAjAfIALAJIAEAEIASAQIAXAWIAGAEIAFAFIAMALIABABIADABIACACIALALIAGAFIALAKIANAMIADACIAIAIIALAKIABABIACABIATASIAGAGIADACIAJAIIAFAFIAJAIIAOAPIABABIAQATIAGAHIALAQIAMARIAIAOIADAFIABACQAGAJAEALQAHAOAGAQIACAEIAIAaIAEAOQAGAXAEAXIABAKQADAWAFAVIACAGQAEATAHAUQAJAfAOAeIAOAdQAIARALARIABADIALARIABABIAPAYIAMATIAFAJIARAeIAGANIAWAqQAxBiAfBoQANArAKAsIAIApQAKAzAFAzIAEAkIADAwIAEAoIADAUQANBKAjBGIA/B6IALATIAYAtIAJASIAfA4IAFAKIABABIANAXIAZAvIAZAtIAQAbIAAABQAwBUAxBSIABABQArBJApBLIAaAtIAUAlIAXAqIAuBXIAuBaIAtBeIAIAQIAmBQQAxBqAwBsIAKAYIA0B6IAHAQIAmBbIAvB2IAHASIAAABQAuB0A/BrIAPAbIAGAKIAtBPIABABIBlCzIAMAVIAeA2QgMAVgSATIgMALQgNALgRALg");
	this.shape_19.setTransform(619.075,12.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1));

	// back_part
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#844B26").ss(1,1,1).p("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");
	this.shape_20.setTransform(597.4879,26.3362);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D49E7C").s().p("EAEcAl1QgwgFgugMQgkgIgjgNQgkgNgjgRQhXgqhgADIAAgBIgGgKQgJgRgHgTQgOgggJgkQgKgmgHgpQgDgSgCgSIgIgtIgEgXQgOhRgQhQIgdiIIAAgBIgWhaIgLgtIAAgCIgDgJIgbhoIgGgYIgHgWIAAAAIgMgtIgOguQgmh/gsh9IgOgpIgBgEQgPgmgXgeQgUgagagVQgTgPgYgMQiLhLiOhIIiThLQg3gcglgzQg3hLgyhMIgPgWIgLgRIgEgHIgdguIgphEIgMgWIgTgiIgUgjIgMgWIgFgJIgIgPIgUgnIgDgGIgBgBIgCgEIgKgRIgLgSIgSgcQgNgTgOgQQAGAAAFADQAFACAAAEQAAgEgFgCQgFgDgGAAIACgJIAFgjIABgLIABgMIABgMIABgLIAAgLIAAgMIAAgLIAAgXIgBgRIAAgGIgBgLIgBgLIgCgRIgCgRIgCgMIgCgMIgCgLIgGgXIgBgFIgBgEIgDgKIAAgEIgEgRIgHgcIgBgDIgCgIIgCgMIgBgGIgCgGIgCgLIgCgLIgCgMIgCgLIgFgiIgCgRIAAgBIgCgLIgDgdIgCgLIgEgiIgHguIgCgLIgCgMIAAgBIAAgGIgFgcIgFgbIAAgGIgBgHIgEgXIgBgFIAAAAIgBgGIgMg+IgBgMIgShaIgIgnQgGgbABgdQAHh5gLh3IgBgRQgHhBgMhAQgYiHAUiQQAYi2AUi1IANh9IACgVQADgiAHghIADgOIAJggIAHgXQAQgvAYgsIAAgCIADgFQApgNBHASIAHACIAVAEQAvAIAxgGIAhgEIAXgBIAJgBQAygDAwADIALABQAYABAYAEIAQADQAwAHAtAPIAPAEQBBAWA+AiIAmAXQAWAOAVAPIAEADIATAOQAoAdAnAfIARANIARANIACACIARAOIABABIAwAnIAUAQIAlAgIAWATIAGAEIA+A2IABABIAMAKIAKAJIAMALIABAAIALAKIAAAAIAWAUIABABIALAJIALAJIAjAgIALAJIAEAEIASAQIAXAVIAGAFIAFAEIAMALIABABIADACIACACIALAKIAGAFIALAKIANAMIADACIAIAIIALAKIABABIACACIATARIAGAGIADACIAJAIIAFAGIAJAIIAOAOIABACIAQATIAGAGIALAQIALARIAIAPIADAEIABACQAGAKAEALQAHAOAGAQIACADIAIAaIAEAPQAGAWAEAYIABAJQADAWAFAWIACAFQAEAUAHATQAJAgAOAeIAOAcQAIARALASIABACIALARIABABIAPAYIAMATIAFAJIARAeIAHAOIAWApQAxBiAfBpQANAqAKAsIAIApQAKAzAFAzIAEAkIADAwIAEAoIADAUQANBLAjBFIA/B6IALAUIAYAtIAJARIAfA5IAFAKIABABIANAYIAZAuIAZAsIAQAbIAAABQAwBUAxBSIABABQArBJApBLIAaAtIAUAlIAXAqIAuBXIAuBbIAtBdIAIAQIAmBRQAxBqAwBsIAKAXIA0B6IAHAQIAmBbIAvB3IAHARIAAABQAuB0A/BsIAPAaIAGALIAtBPIABAAIBlCzIAMAVIAeA2QgMAWgSASIgMALQgNAMgRAKQgeATgpANIgBAAIgPAEIgeAJIgKACIhBARIg+AOQguALguAJQg3ALg5AJIgvAPIh2AjIgTAGIgPAEIgfAJQhnAchoAZIgjAIIg7ANIgBAAQg1AKg0AJIgbADQg1AHgzAAQgoAAgmgEg");
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
	this.text = new cjs.Text("The correct answer was", "40px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 48;
	this.text.lineWidth = 1276;
	this.text.parent = this;
	this.text.setTransform(11.95,60.6);

	this.text_1 = new cjs.Text("WRONG", "100px 'Zerove'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 116;
	this.text_1.lineWidth = 950;
	this.text_1.parent = this;
	this.text_1.setTransform(11.9,-69.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer_6
	this.instance = new lib.Xwrongcopy2();
	this.instance.setTransform(5.65,-188.55,0.3297,0.3297,0,0,0,0.3,-0.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#393058","#183058"],[0,1],-23.7,-126.4,-23.7,364.2).s().p("EhpPA4ZMAAAhwxMDSfAAAMAAABwxg");
	this.shape.setTransform(6.65,-52.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EAXcAhHIAAqAMhSxAAAIAAKAIiMAAMAAAg4NICMAAIAAqAMBSxAAAIAAKAMAmHAAAMAAAA4Ng");
	this.shape_1.setTransform(11.95,-38.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Wrongframecopy2, new cjs.Rectangle(-666.9,-413.8,1347.1999999999998,1271.2), null);


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
	this.text = new cjs.Text("rewatch puzzle", "80px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 93;
	this.text.lineWidth = 602;
	this.text.parent = this;
	this.text.setTransform(-2.95,-40.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_1
	this.instance = new lib.btnbgcopy3();
	this.instance.shadow = new cjs.Shadow("rgba(51,51,51,1)",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.replaybuttoncopy2, new cjs.Rectangle(-344.9,-79.9,696,229.9), null);


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
	this.text = new cjs.Text("rewatch puzzle", "80px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 93;
	this.text.lineWidth = 602;
	this.text.parent = this;
	this.text.setTransform(-2.95,-40.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_1
	this.instance = new lib.btnbgcopy2();
	this.instance.shadow = new cjs.Shadow("rgba(51,51,51,1)",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.replaybuttoncopy, new cjs.Rectangle(-344.9,-79.9,696,229.9), null);


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
	this.shape.graphics.lf(["#666666","#333333"],[0,1],4,-115.8,4,351.6).s().p("Ehj9A5VMAAAhypMDH7AAAMAAABypg");
	this.shape.setTransform(32,-46.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Eg9hAcHMAAAg4NMB7DAAAMAAAA4Ng");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.letsseehowyoudid, new cjs.Rectangle(-607.7,-413.8,1279.5,1087.5), null);


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
	this.text = new cjs.Text("but don't fret, you have 1 more attempt", "40px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 48;
	this.text.lineWidth = 1276;
	this.text.parent = this;
	this.text.setTransform(11.95,28.6);

	this.text_1 = new cjs.Text("incorrect", "100px 'Zerove'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 116;
	this.text_1.lineWidth = 950;
	this.text_1.parent = this;
	this.text_1.setTransform(11.9,-101.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#597B91","#367B91"],[0,1],-22.6,-130.1,-22.6,374.9).s().p("Ehj9A6DMAAAh0FMDH7AAAMAAAB0Fg");
	this.shape.setTransform(6.6,-52.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EAXcAhHIAAqAMhSxAAAIAAKAIiMAAMAAAg4NICMAAIAAqAMBSxAAAIAAKAMAmHAAAMAAAA4Ng");
	this.shape_1.setTransform(11.95,-38.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.incorrectcopy, new cjs.Rectangle(-633.1,-424.4,1284.9,1249.8), null);


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
	this.text = new cjs.Text("but don't fret, you have 1 more attempt", "40px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 48;
	this.text.lineWidth = 1276;
	this.text.parent = this;
	this.text.setTransform(11.95,28.6);

	this.text_1 = new cjs.Text("incorrect", "100px 'Zerove'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 116;
	this.text_1.lineWidth = 950;
	this.text_1.parent = this;
	this.text_1.setTransform(11.9,-101.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#597B91","#367B91"],[0,1],-22.6,-130.1,-22.6,374.9).s().p("Ehj9A6DMAAAh0FMDH7AAAMAAAB0Fg");
	this.shape.setTransform(6.6,-52.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EAXcAhHIAAqAMhSxAAAIAAKAIiMAAMAAAg4NICMAAIAAqAMBSxAAAIAAKAMAmHAAAMAAAA4Ng");
	this.shape_1.setTransform(11.95,-38.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.incorrect, new cjs.Rectangle(-633.1,-424.4,1284.9,1249.8), null);


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
	this.text = new cjs.Text("Just needed that extra glance", "40px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 48;
	this.text.lineWidth = 1276;
	this.text.parent = this;
	this.text.setTransform(11.95,68.6);

	this.text_1 = new cjs.Text("correct", "100px 'Zerove'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 116;
	this.text_1.lineWidth = 950;
	this.text_1.parent = this;
	this.text_1.setTransform(11.9,-61.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#597B91","#367B91"],[0,1],-23.7,-126.4,-23.7,364.2).s().p("EhpPA4ZMAAAhwxMDSfAAAMAAABwxg");
	this.shape.setTransform(6.65,-52.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EAXcAhHIAAqAMhSxAAAIAAKAIiMAAMAAAg4NICMAAIAAqAMBSxAAAIAAKAMAmHAAAMAAAA4Ng");
	this.shape_1.setTransform(11.95,1.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.correct2ndattemptcopy2, new cjs.Rectangle(-666.9,-413.8,1347.1999999999998,1279.2), null);


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

}).prototype = getMCSymbolPrototype(lib.slotanswerreveal2ndroundcopy2, new cjs.Rectangle(-679.9,-531.2,1362.6,12002.7), null);


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
p.nominalBounds = new cjs.Rectangle(-282.9,-100.7,572,189.9);


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
	this.text = new cjs.Text("That’s how it’s done.", "40px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 48;
	this.text.lineWidth = 1276;
	this.text.parent = this;
	this.text.setTransform(41.95,92.6);

	this.text_1 = new cjs.Text("correct", "100px 'Zerove'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 116;
	this.text_1.lineWidth = 950;
	this.text_1.parent = this;
	this.text_1.setTransform(41.95,-37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#009900","#006600"],[0,1],1.8,-162.3,2.3,436.1).s().p("Ehj9A5nMAAAhzNMDH7AAAMAAABzNg");
	this.shape.setTransform(6.6,-52.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Eg9hAcHMAAAg4NMB7DAAAMAAAA4Ng");
	this.shape_1.setTransform(0,-1.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.correctscreencopy, new cjs.Rectangle(-633.1,-421.7,1314.9,1311.1), null);


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
	this.text = new cjs.Text("That’s how it’s done.", "40px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 48;
	this.text.lineWidth = 1276;
	this.text.parent = this;
	this.text.setTransform(41.95,92.6);

	this.text_1 = new cjs.Text("correct", "100px 'Zerove'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 116;
	this.text_1.lineWidth = 950;
	this.text_1.parent = this;
	this.text_1.setTransform(41.95,-37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#009900","#006600"],[0,1],1.8,-162.3,2.3,436.1).s().p("Ehj9A5nMAAAhzNMDH7AAAMAAABzNg");
	this.shape.setTransform(6.6,-52.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Eg9hAcHMAAAg4NMB7DAAAMAAAA4Ng");
	this.shape_1.setTransform(0,-1.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.correctscreen, new cjs.Rectangle(-633.1,-421.7,1314.9,1311.1), null);


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
p.nominalBounds = new cjs.Rectangle(-680.1,-10360.6,1362.6,21999.800000000003);


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
p.nominalBounds = new cjs.Rectangle(-680.1,-11084.6,1362.6,22723.800000000003);


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

}).prototype = getMCSymbolPrototype(lib.slotanswerrevealcopy, new cjs.Rectangle(-639.7,-533.7,1314.9,12765.900000000001), null);


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

}).prototype = getMCSymbolPrototype(lib.slotanswerreveal, new cjs.Rectangle(-639.7,-533.7,1314.9,12765.900000000001), null);


// stage content:
(lib.Map = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = new cjs.Rectangle(471.6,-10368.1,1430.1999999999998,23128);
// library properties:
lib.properties = {
	id: 'B543C4DCA9038D4494FB095F47CB2718',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap1.jpg", id:"Bitmap1"},
		{src:"images/Bitmap13.png", id:"Bitmap13"},
		{src:"images/Bitmap17.png", id:"Bitmap17"},
		{src:"images/noisybackground.jpg", id:"noisybackground"}
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