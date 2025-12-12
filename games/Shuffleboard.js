(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Shuffleboard_atlas_1", frames: [[0,0,900,700],[0,702,786,441]]},
		{name:"Shuffleboard_atlas_2", frames: [[0,0,2000,2000]]}
];


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



(lib.abstractsurfacewoodtexturebackground = function() {
	this.initialize(img.abstractsurfacewoodtexturebackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3936,2624);


(lib.Bitmap1 = function() {
	this.initialize(ss["Shuffleboard_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.initialize(ss["Shuffleboard_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.concretewall = function() {
	this.initialize(img.concretewall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5184,3456);


(lib.noisybackground = function() {
	this.initialize(ss["Shuffleboard_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.yellowpuck = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7D8B99").s().p("A+oeqQststAAx9QAAx8MtstQMsssR8AAQR9AAMtMsQMsMtAAR8QAAR9ssMtQstMsx9AAQx8AAssssg");
	this.shape.setTransform(0.2,-8.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.098)").s().p("Egg7Ag8QtptpAAzTQAAzSNptpQNptpTSAAQTTAANpNpQNpNpAATSQAATTtpNpQtpNpzTAAQzSAAtptpg");
	this.shape_1.setTransform(0.225,-8.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFCC00","#FFCC33"],[0,1],-397.2,0,397.3,0).s().p("Egr5AtXQyLyzAA6kQAA6jSLyzQSNyyZsAAQZuAASLSyQSLSzABajQgBakyLSzQyLSy5uAAQ5sAAyNyyg");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.149)").s().p("Egr5AtXQyLyzAA6kQAA6jSLyzQSNyyZsAAQZuAASLSyQSLSzABajQgBakyLSzQyLSy5uAAQ5sAAyNyyg");
	this.shape_3.setTransform(0,56.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellowpuck, new cjs.Rectangle(-397.2,-410.5,794.5,877.5), null);


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


(lib.toparrow = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.toparrow, new cjs.Rectangle(-160.4,-91.6,320.9,183.3), null);


(lib.texture = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.concretewall();
	this.instance.setTransform(-2592,-2051,1,1.187);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.texture, new cjs.Rectangle(-2592,-2051,5184,4102.3), null);


(lib.stick = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(47,47,47,0.098)").s().p("EAHwBKQMACgg7vIC7AAMgCeA7UIM2AAIACAbgAG6OeQgkj/AIkDQAIkBgtj9QgnjejChOIgEAIIlQh1QiehAh0hDQr8m8irwbQirwaBysqQBwscG8AoQkZB3hWJiQhyMqCrQaQCrQbL8G8QB0BDCeBAIFQB1IADgIIABAAQDCBOAnDeQAtD9gIEBQgIEDAkD/IAAAbg");
	this.shape.setTransform(-99.305,-0.0057);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#8D502E").ss(1,1,1).p("EAGzAsZIB1AAQAjj/gIkDQgHkBAsj+QAqjqDEg6IFRh1QCehABzhDQL9m8CqwaQCrwahysqQhxsqnBA4QnCA3ApI7QAoI7haPUQgBAZgCAZQgyJxmLEsQk0DqqeARQgJAAgHgDQqfgRk0jqQmLksgypyQgCgYgBgZQhQvUAro0QAtpDnKg3QnKg3hxMqQhyMpCrQbQCqQZL9G9QBzBDCeBAIFRB1AtnXgQALAEALAFQDCBOAoDdQAsD+gHECQgIECAjD/IDWAAIMEAA");
	this.shape_1.setTransform(0.025,-191.1529);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EA8E22").ss(1,1,1).p("AFJ93IABAOAFJ93IqjAAMgCgA7uIP1AAMgCgg7ug");
	this.shape_2.setTransform(0.9,284.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AisRtIAAAEACdxwQAIAAAIAA");
	this.shape_3.setTransform(-16.475,-20.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EA9F20").s().p("An6d3MACgg7uIKjAAIAAAOIAAgOIARAAMAChA7ug");
	this.shape_4.setTransform(0.9,284.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8D612E").s().p("EAGzAsZIAAgEIsEAAIjWAAQgjj/AIkCQAHkCgsj+QgojdjChOIgWgJIAWAJIgEAIIlRh1QiehAhzhDQr9m9iqwZQirwbByspQBxsqHKA3QHKA3gtJDQgrI0BQPUIADAxQAyJyGLEsQE0DqKfARQAHADAJAAQKegRE0jqQGLksAypxIADgyQBavUgoo7Qgpo7HCg3QHBg4BxMqQByMqirQaQiqQar9G8QhzBDieBAIlRB1QjEA6gqDqQgsD+AHEBQAIEDgjD/g");
	this.shape_5.setTransform(0.025,-191.1529);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.149)").s().p("EgHxBKQMACgg7vIK0AAMACgA7vgAGzOhIAAgDIvaAAQgjj/AIkDQAHkBgsj9QgojejChOIgEAIIlRh1QiehAhzhDQr9m8iqwbQirwaBysqQBxsqHKA4QHKA3gtJCQgrI0BQPUIADAyQAyJyGLEsQE0DqKfARQAHAEAJgBQKegRE0jpQGLksAypzIADgxQBavUgoo7Qgpo8HCg3QHBg3BxMqQByMpirQbQiqQar9G9QhzBDieBAIlRB1QjEA5gqDqQgsD9AHECQAIECgjD/g");
	this.shape_6.setTransform(-26.625,21.8971);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stick, new cjs.Rectangle(-276.8,-476.2,528,973.3), null);


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


(lib.selectananswershadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("AazE0IAAhsQA2AwB0AEQB2AAAtgdQAtgeAAgqQAAgqgtgeQgtgfg/AAQhdAAhDg4QhCg7ABhTQgBhTBCg8QBCg9CJAAQBjAFApAfIAABwIgBgBQglgohmgEQhggBglAeQgmAeAAAqQAAArAmAdQAkAeA2AAQBnAABKA5QBJA7AABTQAABShJA+QhKA8ieAAQhwgFg6gqgA7GD6QhXhpAAiRQAAiQBXhpQBXhpB8AAQBOAAA/AtIAACBQg6hHhTAAQhUAAg6BJQg7BLAABnQAABoA7BLQA6BJBUAAQBTAAA6hIIAACCQg/AthOAAQh8AAhXhpgEg82AE0IAAhsQA2AwB0AEQB2AAAtgdQAsgeABgqQgBgqgsgeQgtgfg/AAQhdAAhCg4QhCg7AAhTQAAhTBCg8QBCg9CIAAQBiAFAqAfIAABwIAAgBQgmgohmgEQhhgBgkAeQgmAeAAAqQAAArAmAdQAkAeA2AAQBoAABIA5QBKA7AABTQAABShKA+QhIA8ifAAQhwgFg6gqgEA7NAFeIhWjRQghAJgkAAIgrAAIAADIIhhAAIAAq7ICMAAQBnAABKBJQBJBKAABnQAABnhJBIQgKALgLAIIBpD/gEA4HAA0IArAAQA/AAAtgsQAsgsAAg/QAAg/gsgsQgtgtg/AAIgrAAgEAuxAFeIAAq7IGTAAIAABiIkxAAIAADLIEAAAIAABgIkAAAIAADMIExAAIAABigEAp5AFeIhanBIhZHBIinAAIhIq7IBkAAIA8JTIB3pTIBkAAIB2JTIA9pTIBjAAIhHK7gAXvFeIjPnbIAAHbIhiAAIAAq7IBiAAIDPHbIAAnbIBhAAIAAK7gAQqFeIgjiSIjoAAIgiCSIhkAAIClq7ICsAAICkK7gAM2BqIC7AAIhemPgAENFeIjPnbIAAHbIhhAAIAAq7IBhAAIDPHbIAAnbIBhAAIAAK7gAi3FeIgjiSIjoAAIgiCSIhkAAIClq7ICsAAICjK7gAmrBqIC7AAIhemPgAxtFeIAApZIiXAAIAAhiIGRAAIAABiIiYAAIAAJZgEgkSAFeIAAq7IGSAAIAABiIkwAAIAADLIEAAAIAABgIkAAAIAADMIEwAAIAABigEgsFAFeIAAq7IBhAAIAAJZIEwAAIAABigEgz6AFeIAAq7IGTAAIAABiIkxAAIAADLIEAAAIAABgIkAAAIAADMIExAAIAABig");
	this.shape.setTransform(5.3,2.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.selectananswershadow, new cjs.Rectangle(-384.2,-32.8,779.0999999999999,71), null);


(lib.rewatchpuzzletxt = function(mode,startPosition,loop,reversed) {
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


(lib.questiontext2 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("which path did the red puck follow?", "100px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 116;
	this.text.lineWidth = 1054;
	this.text.parent = this;
	this.text.setTransform(-0.05,-212.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.questiontext2, new cjs.Rectangle(-529.1,-214.9,1058.2,429.9), null);


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


(lib.puck = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egr5AtXQyLyzAA6kQAA6jSLyzQSNyyZsAAQZuAASLSyQSLSzABajQgBakyLSzQyLSy5uAAQ5sAAyNyyg");
	mask.setTransform(0,0.025);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D8B99").s().p("A+oeqQststAAx9QAAx8MtstQMsssR8AAQR9AAMtMsQMsMtAAR8QAAR9ssMtQstMsx9AAQx8AAssssg");
	this.shape.setTransform(0.2,-8.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.098)").s().p("Egg7Ag8QtptpAAzTQAAzSNptpQNptpTSAAQTTAANpNpQNpNpAATSQAATTtpNpQtpNpzTAAQzSAAtptpg");
	this.shape_1.setTransform(0.225,-8.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5403E").s().p("Egr5AtXQyLyzAA6kQAA6jSLyzQSNyyZsAAQZuAASLSyQSLSzABajQgBakyLSzQyLSy5uAAQ5sAAyNyyg");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.149)").s().p("Egr5AtXQyLyzAA6kQAA6jSLyzQSNyyZsAAQZuAASLSyQSLSzABajQgBakyLSzQyLSy5uAAQ5sAAyNyyg");
	this.shape_3.setTransform(0,56.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.puck, new cjs.Rectangle(-397.2,-410.5,794.5,877.5), null);


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


(lib.platformalpha = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EgDWDuuMAAAndbIGtAAMAAAHdbg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.platformalpha, new cjs.Rectangle(-21.5,-1527.8,43,3055.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Ai1N4IAAhsQA2AvB0AFQB1AAAtgeQAtgeAAgqQAAgqgtgeQgtgeg/AAQhcAAhCg6QhCg7AAhTQAAhSBCg9QBCg9CHAAQBjAFAqAfIAABwIgBgBQgmgnhmgFQhfAAglAdQgmAeAAAqQAAArAmAeQAlAdA0AAQBoAABJA7QBJA6AABTQAABThJA9QhJA8ieAAQhwgFg6gpgAsVM9QhYhpAAiRQAAiRBYhpQBXhpB8AAQB7AABYBpQBYBpAACRQAACRhYBpQhYBph7AAQh8AAhXhpgArQGRQg7BKAABoQAABpA7BKQA6BKBUAAQBTAAA7hKQA7hKAAhpQAAhog7hKQg7hKhTAAQhUAAg6BKgA8iM9QhYhpAAiRQAAiRBYhpQBXhpB8AAQBNAABAAtIAACBQg7hHhSAAQhUAAg6BKQg7BKAABoQAABpA7BKQA6BKBUAAQBSAAA7hIIAACBQhAAthNAAQh8AAhXhpgAcyOhIAAhhIBhAAIAABhgAXvOhIAAjRIiZnrIBkAAIBlFNIBmlNIBkAAIiZHwIAADMgAN7OhIAAq8IBhAAIAAJbIExAAIAABhgAGHOhIAAq8IGSAAIAABiIkxAAIAADLIEAAAIAABiIkAAAIAADMIExAAIAABhgA1hOhIAAq8IBiAAIAAJbIEwAAIAABhgEA1ugFIQhXhpAAiRQAAiRBXhpQBYhpB7AAQBOAAA/AtIAACBQg6hIhTAAQhTAAg7BKQg7BKAABpQAABoA7BKQA7BKBTAAQBTAAA6hIIAACCQg/AthOAAQh7AAhYhpgEAsKgErQhJhMAAhnIAAnCIBiAAIAAHCQAAA/AtAtQAsAsA/AAQA/AAAtgsQAsgtAAg/IAAnCIBiAAIAAHCQAABnhJBMQhJBMhoAAQhnAAhKhMgEgmngFIQhXhpAAiRQAAiRBXhpQBYhpB7AAQBOAAA/AtIAACBQg6hIhTAAQhTAAg7BKQg7BKAABpQAABoA7BKQA7BKBTAAQBTAAA6hIIAACCQg/AthOAAQh7AAhYhpgEBBYgDkIh3j8IhQAAIAAD8IhhAAIAAq8IBhAAIAAFdIBJAAIB9ldIBrAAIiQGQICQEsgEAjZgDkIAAq8ICMAAQBoAABJBJQBJBJAABoQAABnhJBJQhJBKhoAAIgrAAIAADIgEAk6gIOIArAAQA/AAAtgtQAtgsAAg/QAAg/gtgtQgtgtg/AAIgrAAgAXGjkIAAq8ICMAAQB8AABYBmQBXBnAACRQAACRhXBmQhYBnh8AAgAYnlGIArAAQBUAAA7hKQA6hKAAhoQAAhpg6hKQg7hKhUAAIgrAAgAPSjkIAAq8IGSAAIAABhIkxAAIAADMIEAAAIAABhIkAAAIAADMIExAAIAABigAMGjkIhXjRQghAJgkAAIgrAAIAADIIhhAAIAAq8ICMAAQBoAABJBJQBJBJAABoQAABnhJBJQgKALgLAIIBqD/gAI/oOIArAAQA/AAAtgtQAtgsAAg/QAAg/gtgtQgtgtg/AAIgrAAgAkPjkIAAq8IGRAAIAABhIkwAAIAADMID/AAIAABhIj/AAIAADMIEwAAIAABigAnTjkIAAkuIjPAAIAAEuIhhAAIAAq8IBhAAIAAEtIDPAAIAAktIBiAAIAAK8gAxfjkIAApbIiYAAIAAhhIGSAAIAABhIiYAAIAAJbgA61jkIAAkuIjPAAIAAEuIhhAAIAAq8IBhAAIAAEtIDPAAIAAktIBiAAIAAK8gEgtagDkIAApbIiYAAIAAhhIGSAAIAABhIiYAAIAAJbgEgyHgDkIgiiTIjoAAIgjCTIhjAAICkq8ICsAAICkK8gEg17gHYIC7AAIhdmQgEg8egDkIhanCIhaHCIinAAIhIq8IBkAAIA8JUIB3pUIBkAAIB2JUIA9pUIBjAAIhHK8g");
	this.shape.setTransform(-1.275,-96.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.instructionstext, new cjs.Rectangle(-430.2,-190,857.9,186.8), null);


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


(lib.btnbggray = function(mode,startPosition,loop,reversed) {
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


(lib.btnbg = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.btnbg, new cjs.Rectangle(-325.9,-60.9,651.8,121.9), null);


(lib.bottomarrow = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.bottomarrow, new cjs.Rectangle(-160.5,-91.6,321,183.3), null);


(lib.bluepuck = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7D8B99").s().p("A+oeqQststAAx9QAAx8MtstQMsssR8AAQR9AAMtMsQMsMtAAR8QAAR9ssMtQstMsx9AAQx8AAssssg");
	this.shape.setTransform(0.2,-8.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.098)").s().p("Egg7Ag8QtptpAAzTQAAzSNptpQNptpTSAAQTTAANpNpQNpNpAATSQAATTtpNpQtpNpzTAAQzSAAtptpg");
	this.shape_1.setTransform(0.225,-8.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0066CC","#0099FF"],[0,1],-397.2,0,397.3,0).s().p("Egr5AtXQyLyzAA6kQAA6jSLyzQSNyyZsAAQZuAASLSyQSLSzABajQgBakyLSzQyLSy5uAAQ5sAAyNyyg");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.149)").s().p("Egr5AtXQyLyzAA6kQAA6jSLyzQSNyyZsAAQZuAASLSyQSLSzABajQgBakyLSzQyLSy5uAAQ5sAAyNyyg");
	this.shape_3.setTransform(0,56.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bluepuck, new cjs.Rectangle(-397.2,-410.5,794.5,877.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ATKarQiTiXAAjQIAAuEIDDAAIAAOEQABB/BZBZQBZBZB+AAQB+AABahZQBZhZAAh/IAAuEIDDAAIAAOEQAADQiSCXQiTCXjPAAQjPAAiSiXgEBCzAc4IAAjDIDDAAIAADDgEA38Ac4IAAy1IkxAAIAAjDIMkAAIAADDIkxAAIAAS1gEAjjAc4IAA14IDDAAIAAS1IJhAAIAADDgAMPc4IhFklInRAAIhEElIjGAAIFG14IFaAAIFHV4gAEnVQIF1AAIi7sfgAqyc4IlH14IDHAAIEUSfIEUyfIDHAAIlHV4gEgmlAc4IAA14IMlAAIAADDIpiAAIAAGXIIAAAIAADEIoAAAIAAGXIJiAAIAADDgEgssAc4IAApaImeAAIAAJaIjDAAIAA14IDDAAIAAJaIGeAAIAApaIDEAAIAAV4gEhBEAc4IAAy1IkxAAIAAjDIMlAAIAADDIkxAAIAAS1gEgx3gKHQivjTAAkiQAAkhCvjTQCvjRD3gBQD3ABCwDRQCvDTAAEhQAAEiivDTQiwDRj3ABQj3gBivjRgEgvtgXgQh2CUAADQQAADSB2CUQB2CTCmAAQCnAAB3iTQB0iUABjSQgBjQh0iUQh3iUinAAQimAAh2CUgEAusgG/Qj4gBiujNQiwjNAAkiQAAkhCwjTQCujRD4gBQCaAAB/BaIAAEDQh0iPilAAQinAAh2CUQh2CUAADQQAADSB2CUQB2CTCnAAIC3AAIAAmGIjDAAIAAjEIGHAAIAAMOgAfPm/Imdu4IAAO4IjEAAIAA15IDEAAIGdO4IAAu4IDEAAIAAV5gAPom/IAA15IDDAAIAAV5gAJhm/Imeu4IAAO4IjDAAIAA15IDDAAIGeO4IAAu4IDDAAIAAV5gAvnm/IAA15IMkAAIAADEIphAAIAAGWIH/AAIAADEIn/AAIAAGXIJhAAIAADEgA+4m/IAA15IEZAAQDQAACSCSQCSCTAADPQAADPiSCSQiSCTjQAAIhVAAIAAGRgA70wTIBVAAQB/AABZhZQBZhaAAh+QAAh+hZhYQhZhbh/ABIhVAAg");
	this.shape.setTransform(25.5,-230.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.answerrevealtext, new cjs.Rectangle(-421.5,-416.6,894,371.70000000000005), null);


(lib.Wrongframe = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Xwrong();
	this.instance.setTransform(5.65,-188.55,0.3297,0.3297,0,0,0,0.3,-0.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(11.95,25.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#393058","#183058"],[0,1],-22.6,-126.4,-22.6,364.2).s().p("Ehj9A4ZMAAAhtpMDH7AAAMAAABtpgEBj+g1QMjH7AAAIAAjIMDH7AAAIAADIgEhj9g1Qg");
	this.shape_1.setTransform(6.6,-52.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("EAXcAhHIAAqAMhSxAAAIAAKAIiMAAMAAAg4NICMAAIAAqAMBSxAAAIAAKAMAmHAAAMAAAA4Ng");
	this.shape_2.setTransform(11.95,-38.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Wrongframe, new cjs.Rectangle(-633.1,-413.8,1279.5,721.8), null);


(lib.suffleedgetemplate = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.platformalpha();
	this.instance.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgDWDuuMAAAndbIGtAAMAAAHdbg");
	mask.setTransform(0,-0.025);

	// Layer_2
	this.instance_1 = new lib.abstractsurfacewoodtexturebackground();
	this.instance_1.setTransform(-732,-2154,1,1.4303);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgDWDuuMAAAndbIGtAAMAAAHdbg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.suffleedgetemplate, new cjs.Rectangle(-21.5,-1527.8,43,3055.6), null);


(lib.suffleedgenoshadow = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.platformalpha();
	this.instance.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgDWDuuMAAAndbIGtAAMAAAHdbg");
	mask.setTransform(0,-0.025);

	// Layer_2
	this.instance_1 = new lib.abstractsurfacewoodtexturebackground();
	this.instance_1.setTransform(-732,-2154,1,1.4303);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgDWDuuMAAAndbIGtAAMAAAHdbg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.suffleedgenoshadow, new cjs.Rectangle(-21.5,-1527.8,43,3055.6), null);


(lib.suffleedge2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.platformalpha();
	this.instance.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgDWDuuIAA3HIGtgBIAAXIgEgDWjutIGtAAMAAAHGTImtABg");
	mask.setTransform(0,-0.025);

	// Layer_2
	this.instance_1 = new lib.abstractsurfacewoodtexturebackground();
	this.instance_1.setTransform(-732,-2154,1,1.4303);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgDWDuuIAA3HIGtgBIAAXIgEgDWjutIGtAAMAAAHGTImtABg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.149)").s().p("EgDWDuuIAA4DIGtAAIAAYDgEgDWjutIGtAAMAAAHFYImtAAg");
	this.shape_1.setTransform(14.9,5.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.suffleedge2, new cjs.Rectangle(-21.5,-1527.8,57.9,3061.6), null);


(lib.suffleedge = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.platformalpha();
	this.instance.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgDWDuuMAAAndbIGtAAMAAAHdbg");
	mask.setTransform(0,-0.025);

	// Layer_2
	this.instance_1 = new lib.abstractsurfacewoodtexturebackground();
	this.instance_1.setTransform(-732,-2154,1,1.4303);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgDWDuuMAAAndbIGtAAMAAAHdbg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.149)").s().p("EgDWDuuMAAAndbIGtAAMAAAHdbg");
	this.shape_1.setTransform(14.9,5.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.suffleedge, new cjs.Rectangle(-21.5,-1527.8,57.9,3061.6), null);


(lib.replaybutton2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.rewatchpuzzletxt();
	this.instance.setTransform(-2.95,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0531,scaleY:1.0531,x:-3.1,y:-2.7},3).wait(1));

	// Layer_1
	this.instance_1 = new lib.btnbggray();
	this.instance_1.shadow = new cjs.Shadow("#333333",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.0531,scaleY:1.0531},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-363.9,-98.9,741,212);


(lib.replaybutton = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(-2.95,-2.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.btnbg();
	this.instance.shadow = new cjs.Shadow("#333333",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.replaybutton, new cjs.Rectangle(-344.9,-79.9,696,167), null);


(lib.repeat = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.toparrow();
	this.instance.setTransform(2.55,-62.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.bottomarrow();
	this.instance_1.setTransform(-9.55,68.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(3,1,1).p("EgYtgg7MAxaAAAQDhAACgCfQChCgAADiMAAAAw1QAADiihCfQigCgjhAAMgxaAAAQjhAAigigQigifAAjiMAAAgw1QAAjiCgigQCgifDhAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#666666","#3C6666"],[0,1],0,-161.3,0,161.3).s().p("EgYsAg8QjiAAigigQigifAAjiMAAAgw1QAAjhCgihQCgifDiAAMAxYAAAQDiAACgCfQCgChABDhMAAAAw1QgBDiigCfQigCgjiAAgA6jOuILrKUIAAmXIWbAAQLLAbEHpxQAxh2gBrFInQEOQAdKmnmgkQkoAUzegOIAAnSgA36oVQgxB2ABLFIHRkPQgeqlHmAkQEogUTeAOIAAHSILqrQIrrqUIAAGXI2dAAIg5gBQqcAAj8JXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.repeat, new cjs.Rectangle(-214.1,-212.3,428.29999999999995,424.6), null);


(lib.question = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.questiontext2();
	this.instance.setTransform(-8.9,703.65);
	this.instance.shadow = new cjs.Shadow("#000000",3,3,10);
	this.instance._off = true;

	this.instance_1 = new lib.instructionstext();
	this.instance_1.setTransform(-8.9,683.65);
	this.instance_1.shadow = new cjs.Shadow("#000000",3,3,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},86).to({state:[{t:this.instance_1}]},13).to({state:[]},4).wait(159));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({y:23.65},10,cjs.Ease.get(1)).wait(86).to({_off:true,y:683.65},13,cjs.Ease.get(1)).wait(163));

	// Layer_1
	this.instance_2 = new lib.questionbg();
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.8516},5,cjs.Ease.get(1)).wait(278));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-738.1,-434.1,1476.3000000000002,1386.8000000000002);


(lib.optionsframe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AazE0IAAhsQA2AvB0AGQB2AAAtgfQAtgdAAgrQAAgpgtgfQgtgeg/AAQhdAAhDg4QhCg7ABhTQgBhTBCg8QBCg9CJAAQBjAFApAfIAABwIgBgBQglgohmgEQhgAAglAdQgmAeAAAqQAAArAmAdQAlAeA1AAQBnAABKA6QBJA6AABSQAABUhJA8QhKA9ieAAQhwgFg6gqgA7GD6QhXhpAAiRQAAiQBXhpQBXhpB8AAQBOAAA/AtIAACBQg6hHhTAAQhUgBg6BLQg7BJAABoQAABoA7BLQA6BJBUABQBTgBA6hHIAACBQg/AthOAAQh8AAhXhpgEg82AE0IAAhsQA2AvB0AGQB2AAAtgfQAsgdABgrQgBgpgsgfQgtgeg/AAQheAAhBg4QhCg7AAhTQAAhTBCg8QBCg9CIAAQBiAFAqAfIAABwIAAgBQgmgohmgEQhhAAgkAdQgmAeAAAqQAAArAmAdQAkAeA2AAQBoAABIA6QBKA6AABSQAABUhKA8QhIA9ifAAQhwgFg6gqgEA7NAFeIhWjRQghAJgkAAIgrAAIAADIIhhAAIAAq7ICMAAQBnAABKBJQBJBJAABoQAABnhJBIQgKALgLAIIBpD/gEA4HAA0IArAAQA/AAAtgsQAsgsAAg/QAAg/gsgsQgtgug/ABIgrAAgEAuxAFeIAAq7IGTAAIAABiIkxAAIAADLIEAAAIAABgIkAAAIAADNIExAAIAABhgEAp5AFeIhanBIhZHBIinAAIhIq7IBkAAIA8JTIB3pTIBkAAIB2JTIA9pTIBjAAIhHK7gAXvFeIjPnaIAAHaIhiAAIAAq7IBiAAIDPHbIAAnbIBiAAIAAK7gAQqFeIgiiTIjpAAIgiCTIhkAAIClq7ICsAAICkK7gAM2BqIC7AAIhemPgAENFeIjPnaIAAHaIhhAAIAAq7IBhAAIDPHbIAAnbIBhAAIAAK7gAi3FeIgjiTIjoAAIgiCTIhkAAIClq7ICsAAICjK7gAmrBqIC7AAIhemPgAxtFeIAApZIiXAAIAAhiIGRAAIAABiIiYAAIAAJZgEgkSAFeIAAq7IGSAAIAABiIkwAAIAADLIEAAAIAABgIkAAAIAADNIEwAAIAABhgEgsFAFeIAAq7IBhAAIAAJaIEwAAIAABhgEgz6AFeIAAq7IGTAAIAABiIkxAAIAADLIEAAAIAABgIkAAAIAADNIExAAIAABhg");
	this.shape.setTransform(25.1,-292.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.instance = new lib.selectananswershadow();
	this.instance.setTransform(19.8,-289.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.optionsframe, new cjs.Rectangle(-364.4,-327.8,779.0999999999999,76.30000000000001), null);


(lib.loopicon = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.repeat();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.loopicon, new cjs.Rectangle(-214.1,-212.3,428.29999999999995,424.6), null);


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
	this.instance.setTransform(3,183.1);
	this.instance.shadow = new cjs.Shadow("#333333",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#666666","#333333"],[0,1],4.1,-113.9,4.1,345.9).s().p("EhmIA4ZMAAAhwxMDMRAAAMAAABwxg");
	this.shape.setTransform(32,-46.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Eg9hAcHMAAAg4NMB7DAAAMAAAA4Ng");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.letsseehowyoudid, new cjs.Rectangle(-621.7,-407.8,1307.5,721.8), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({y:23.65},10,cjs.Ease.get(1)).wait(86).to({y:683.65},13,cjs.Ease.get(1)).to({_off:true},4).wait(159));

	// Layer_1
	this.instance_1 = new lib.questionbg();
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.8516},5,cjs.Ease.get(1)).wait(278));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-738.1,-434.1,1476.3000000000002,1168.7);


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
	this.instance_1 = new lib.replaybutton();
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


(lib.correct2ndattempt = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.loopicon();
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
	this.shape_1.graphics.lf(["#597B91","#367B91"],[0,1],-22.6,-126.4,-22.6,364.2).s().p("Ehj9A4ZMAAAhwxMDH7AAAMAAABwxg");
	this.shape_1.setTransform(6.6,-52.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("EAXcAhHIAAqAMhSxAAAIAAKAIiMAAMAAAg4NICMAAIAAqAMBSxAAAIAAKAMAmHAAAMAAAA4Ng");
	this.shape_2.setTransform(11.95,1.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.correct2ndattempt, new cjs.Rectangle(-633.1,-413.8,1279.5,721.8), null);


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


(lib.boardoptionstemplate = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.suffleedge2();
	this.instance.setTransform(-8.05,1324.8,1,0.3347,90,0,0,0.1,0.1);

	this.instance_1 = new lib.suffleedge2();
	this.instance_1.setTransform(-9.45,-1760.85,1,0.3401,90,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// texture
	this.instance_2 = new lib.texture();
	this.instance_2.setTransform(1932,-60);
	this.instance_2.alpha = 0.1484;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgBYAu6QhJhpAAiRQAAiRBJhpQBKhpBmAAQBoAABJBpQBJBpAACRQAACRhJBpQhJBphoAAQhmAAhKhpgEgASAoOQgtBKAABoQAABpAtBKQArBKA/AAQA/AAAthKQAshKAAhpQAAhogshKQgthKg/AAQg/AAgrBKgEgFkAweIhigwIAAgxIBiAAIAApbIBhAAIAAK8gAL6SZQhCg9AAhSQAAhTBCg6IAEgEIgVgPQhJg7AAhTQAAhTBJg9QBJg8BoAAQBnAABJA8QBKA9AABTQAABThKA7QgKAIgLAHIAEAEQBCA6AABTQAABShCA9QhCA9hdAAQheAAhCg9gAM/PBQglAeAAArQAAAqAlAeQAlAdA2AAQA1AAAlgdQAmgeAAgqQAAgrgmgeQglgdg1AAQg2AAglAdgAMuKUQgtAeAAAqQAAAqAtAeQAtAeA/AAQA/AAAsgeQAtgeAAgqQAAgqgtgeQgsgeg/AAQg/AAgtAegAxcSZQhDg9AAhSQAAhTBDg6IAEgEIgWgPQhJg7AAhTQAAhTBJg9QBKg8BnAAQBoAABJA8QBJA9AABTQAABThJA7QgKAIgMAHIAFAEQBCA6AABTQAABShCA9QhDA9hdAAQhdAAhCg9gAwXPBQgmAeAAArQAAAqAmAeQAlAdA1AAQA1AAAmgdQAlgeAAgqQAAgrglgeQgmgdg1AAQg1AAglAdgAwoKUQgtAeAAAqQAAAqAtAeQAsAeA/AAQA/AAAtgeQAsgeAAgqQAAgqgsgeQgtgeg/AAQg/AAgsAegALRrWIAAhhIEqAAIkqpbIBoAAIEqJbIAABhgAyGrWIAAhhIEqAAIkqpbIBoAAIEqJbIAABhgEAsYgm8QhJhpAAiRQAAiRBJhpQBJhpBoAAQBnAABJBpQBKBpAACRQAACRhKBpQhJBphnAAQhoAAhJhpgEAtdgtpQgtBKAABpQAABoAtBKQAtBKA/AAQA/AAAshKQAthKAAhoQAAhpgthKQgshKg/AAQg/AAgtBKgEAoLglYIhhgxIAAgxIBhAAIAApaIBiAAIAAK8gEgnBgnFQhJhpAAiRQAAiRBJhpQBJhpBoAAQBnAABJBpQBKBpAACRQAACRhKBpQhJBphnAAQhoAAhJhpgEgl8gtyQgtBKAABpQAABoAtBKQAtBKA/AAQA/AAAshKQAthKAAhoQAAhpgthKQgshKg/AAQg/AAgtBKgEgrOglhIhhgxIAAgxIBhAAIAApaIBiAAIAAK8gEAgXgqFIAAhiIExAAIAABigEgzCgqOIAAhiIExAAIAABig");
	this.shape.setTransform(3.925,-1258.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhLoAMMMBAjAAAIbDAAMA9sgABIANAAEhN2gMLIF6AUILQAn");
	this.shape_1.setTransform(-22.675,-1675.5375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1,1).p("EAAUhJmIgN/sMA8hAAAIQRAAIAAgBQAAhAAAhAEg8ZhpSIwPgJIZnf1MAbVAirIYXe8IYI+yMA0GhChEhNTAAKIAvAAMCZ2AAAICEAAEAAjgm2I4PgFEg8ZhpSMA8gAAAEgzBhJmMAzVAAAMAzkAAAEAAjgm2MgAPgiwEBNSAAKMgAZhpcEBM4h8zIwQThEAPLh8yItvOXItUuXEg8ZhpSIwPzgEAYzgmxI4QgFEBNbB8EIAAAwMiZuAAAEhPPBfdMgAGgkM");
	this.shape_2.setTransform(-17.625,-798.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#51A04C").s().p("EBMNCI/IAAgwIAAAwMiZuAAAIAAgwIA/AAMgALhHTIg6AAMgALg0mMCZ2AAAICEAAIiEAAMgAZhpdIAAAAIAAiBIAACBIAAAAIwRAAIQQzgIwQTgMg8gAAAMg8hAAAIwPzgIQPTgIwPgJIZnf2I5n/2IQPAJMA8hAAAMA8gAAAIQRAAMg0GBChMA0GhChMAAZBpdMiZ2AAAIgvAAMAAAgrfIg2AAMAAAhKbIggAAIAA/aIF6AUIgCAmILTAAMCONAAAMAABAo8IAACBMAAWBbVIhwAAIAAOIIAAViIgIAAMAAAAkTIgYAAIAAcqIgoAAMAAAAmKgAgiEMIYH+yI4PgFMgAPgivMAzjAAAMgzjAAAMAAPAivI4QgEMgbVgirMAzWAAAIgN/tIANftMgzWAAAMAbVAirIYYe7gEAAOhiQINvuXItvOXItUuXgEAN9hwnMA9tAAAIANAAIgNAAMg9tAAAI7DAAMhAjAAAMBAjAAAIbDAAgAgiEMI4Y+7IYQAEIYPAFI4HeygA466vgEg0Pg9agEBLrhdHgEA7ahdHg");
	this.shape_3.setTransform(-9.8125,-876.7875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgnBAu6QhJhpAAiRQAAiRBJhpQBJhpBoAAQBnAABJBpQBKBpAACRQAACRhKBpQhJBphnAAQhoAAhJhpgEgl8AoOQgtBKAABoQAABpAtBKQAtBKA/AAQA/AAAshKQAthKAAhpQAAhogthKQgshKg/AAQg/AAgtBKgEgrOAweIAApaIhhAAIAAgxIBhgxIBiAAIAAK8gEAsYAuxQhJhpAAiRQAAiRBJhpQBJhpBoAAQBnAABJBpQBKBpAACRQAACRhKBpQhJBphnAAQhoAAhJhpgEAtdAoFQgtBKAABoQAABpAtBKQAtBKA/AAQA/AAAshKQAthKAAhpQAAhogthKQgshKg/AAQg/AAgtBKgEAoLAwVIAApaIhhAAIAAgxIBhgxIBiAAIAAK8gEgzCArxIAAhiIExAAIAABigEAgXAroIAAhiIExAAIAABigALRWTIEqpbIkqAAIAAhhIGSAAIAABhIkqJbgAyGWTIEqpbIkqAAIAAhhIGSAAIAABhIkqJbgALppLQhJg9AAhTQAAhTBJg7IAVgPIgEgEQhCg6AAhTQAAhSBCg9QBCg9BeAAQBdAABCA9QBCA9AABSQAABThCA6IgEAEQALAHAKAIQBKA7AABTQAABThKA9QhJA8hnAAQhoAAhJg8gAMusjQgtAeAAAqQAAAqAtAeQAtAeA/AAQA/AAAsgeQAtgeAAgqQAAgqgtgeQgsgeg/AAQg/AAgtAegAM/xRQglAeAAAqQAAArAlAeQAlAdA2AAQA1AAAlgdQAmgeAAgrQAAgqgmgeQglgdg1AAQg2AAglAdgAxupLQhJg9AAhTQAAhTBJg7IAWgPIgEgEQhDg6AAhTQAAhSBDg9QBCg9BdAAQBdAABDA9QBCA9AABSQAABThCA6IgFAEQAMAHAKAIQBJA7AABTQAABThJA9QhJA8hoAAQhnAAhKg8gAwosjQgtAeAAAqQAAAqAtAeQAsAeA/AAQA/AAAtgeQAsgeAAgqQAAgqgsgeQgtgeg/AAQg/AAgsAegAwXxRQgmAeAAAqQAAArAmAeQAlAdA1AAQA1AAAmgdQAlgeAAgrQAAgqglgeQgmgdg1AAQg1AAglAdgEgALgnFQhJhpAAiRQAAiRBJhpQBJhpBnAAQBoAABJBpQBJBpAACRQAACRhJBpQhJBphoAAQhnAAhJhpgEAA6gtyQgtBKAABpQAABoAtBKQAsBKA/AAQA/AAAthKQAshKAAhoQAAhpgshKQgthKg/AAQg/AAgsBKgEgEXglhIAApbIhiAAIAAgxIBigwIBhAAIAAK8g");
	this.shape_4.setTransform(-13.575,394.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(3,1,1).p("EhM4ht8IJ+AAEAAShG6I4PAEIYY+8IYIezMA0GBChIAAAAQAABAAABBIgBRfIwQzgIQRAAEg8pgEeIwQAJIZo/2MAzVAAAIgMftMA8gAAAEg8pgEeIwKTZANuPCItwuYItVOYIbFAAMA+hAAAIAZAAEhN4APCMBAhAAAEg8pgEeMA8hAAAEAAShG6MgAOAivMAzkAAAEgzRgkLMAbUgirEAYjhG/I4RAFEg+Xht8MCLZAAAMgAZBpeEBPSARLMAAABcyEhPRBt9MAAAhaR");
	this.shape_5.setTransform(-14,637.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#51A04C").s().p("EhPRBt9MAAAhaRIBZAAIAAkqMAAAgriIA2AAMAAAgstIAKAAMAAAgkvIJ+AAIEjAAMCLZAAAMgAZBpeMg0HhChI4H+zI4Xe8IYOgEMgAOAivMgzVAAAMAbVgirMgbVAirI5of2IQQgJIwKTZIQKzZMA8hAAAIAM/tMAAOgivIYQgFMA0HBChIwSAAMg8fAAAMA8fAAAIQRTgIgZAAMg+iAAAMA+iAAAIAACJIDDAAMAAABcygANtPCI7DAAgANtPCItuuYItVOYMhAiAAAMBAiAAAINVuYgEAzogkLMgzkAAAgEBMoAPCIwRzgIQSAAIAAAAIAACBIgBRfgEgzRgkLMAzVAAAIgMftMg8hAAAIwQAJgEBMpgEegEgX8hG2gEAAbhlyIYHezI4QAFI4OAEgEAYihG/g");
	this.shape_6.setTransform(-14,637.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boardoptionstemplate, new cjs.Rectangle(-660,-2492.9,5184,7021.6), null);


(lib.boardoptions4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ehf+EhJMAAApCRMC/9gABMAAAJCSg");
	mask.setTransform(9.025,-85.25);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(20,1,1).p("EAFLD7GMAAAj0tMhbTBVYMCtWjqgMhd0hsWMhQnDGZMBvIhWV");
	this.shape.setTransform(-1.975,-271.1375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgP2DMKQhxhxAAifQAAieBxhxQBrhrCWgFIAOAAQBOAABDAbQBGAcA5A5QBwBxAACeQAACfhwBxQg5A5hGAcQhDAbhOAAQifAAhwhwgEAHYjDqQgQgQgOgSQhShmAAiIQAAieBwhxQBshrCWgFIAOAAQBOAABDAbQBFAcA5A5QBxBxAACeQAACfhxBxQg5A5hFAcQhDAbhOAAQifAAhxhwg");
	this.shape_1.setTransform(106.925,94.725);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// edges
	this.instance = new lib.suffleedge();
	this.instance.setTransform(601.3,-60.05,1,1.1947);

	this.instance_1 = new lib.suffleedgetemplate();
	this.instance_1.setTransform(-584.1,-60.05,1,1.1947);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// board
	this.instance_2 = new lib.boardoptionstemplate();
	this.instance_2.setTransform(19.15,174,1.1821,1.1821,0,0,0,0.1,-0.1);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boardoptions4, new cjs.Rectangle(-605.2,-1935.8,1228.5,3701.1), null);


(lib.boardoptions3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ehf+EhJMAAApCRMC/9gABMAAAJCSg");
	mask.setTransform(9.025,-85.25);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(20,1,1).p("EAERD6GMAAAiMSMhdng6SMBXdgdLMBbQBhlMixbjvhMBP3iCgMAh9Bkr");
	this.shape.setTransform(4,-264.8125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgP0DMIQhwhxAAifQAAieBwhxQBshrCWgFIABAAIANAAQBOAABDAbQBFAcA5A5QBxBxAACeQAACfhxBxQg5A5hFAcQhDAbhOAAQifAAhxhwgEANyjBwQksAcikj0QhBhjAPh3QAejsDfhZQFfhRCBFSQA7CehWCPQhFBxh7BYQgNADgvAFIgJAAIBFgIg");
	this.shape_1.setTransform(106.6624,94.943);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// edges
	this.instance = new lib.suffleedge();
	this.instance.setTransform(601.3,-60.05,1,1.1947);

	this.instance_1 = new lib.suffleedgetemplate();
	this.instance_1.setTransform(-584.1,-60.05,1,1.1947);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// board
	this.instance_2 = new lib.boardoptionstemplate();
	this.instance_2.setTransform(19.15,174,1.1821,1.1821,0,0,0,0.1,-0.1);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boardoptions3, new cjs.Rectangle(-605.2,-1935.8,1228.5,3701.1), null);


(lib.boardoptions2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ehf+EhJMAAApCRMC/9gABMAAAJCSg");
	mask.setTransform(9.025,-85.25);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(20,1,1).p("EAEMD59MgCli1iMhXLgypMCt5gUuMiwphGZMCvPgblMg8tiVCMhvzBCQMBqhAoI");
	this.shape.setTransform(8.95,-263.7625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgP2DMKQhxhxAAifQAAieBxhxQBrhrCWgFIAOAAIAgABQA8AEA1AWQBGAcA5A5QBwBxAACeQAACfhwBxQg5A5hGAcQhDAbhOAAQifAAhwhwgEAHYjDqQgQgQgOgSQhMhdgGh8IAAgVQAAieBwhxQBshrCWgFIAOAAQBOAABDAbQBFAcA5A5QBxBxAACeQAACfhxBxQg5A5hFAcQhDAbhOAAQifAAhxhwg");
	this.shape_1.setTransform(106.925,94.725);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// edges
	this.instance = new lib.suffleedge();
	this.instance.setTransform(601.3,-60.05,1,1.1947);

	this.instance_1 = new lib.suffleedgetemplate();
	this.instance_1.setTransform(-584.1,-60.05,1,1.1947);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// board
	this.instance_2 = new lib.boardoptionstemplate();
	this.instance_2.setTransform(19.15,174,1.1821,1.1821,0,0,0,0.1,-0.1);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boardoptions2, new cjs.Rectangle(-605.2,-1935.8,1228.5,3701.1), null);


(lib.boardoptions1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ehf+EhJMAAApCRMC/9gABMAAAJCSg");
	mask.setTransform(9.025,-85.25);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(20,1,1).p("EAE8D6jMAAAjXAMhcxAoMMCvrhgnMir6hLVMBc3iaVMBPDCyMMh7Ogh3MA7CgnbIAHgF");
	this.shape.setTransform(-0.025,-267.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgQhDN9QhwhwAAigQAAieBwhxQBshrCWgFIAEAAIAKAAQBOAABDAcQBFAcA5A4QBxBxAACeQAACghxBwQg5A5hFAcQhDAbhOAAQifAAhxhwgEAIDjFdQhVhVgVhvIgHAEIAHgGQgHgkAAgmQAAifBxhwQBrhsCWgEIAFgBIAJAAQBOABBDAbQBGAcA5A5QBwBwAACfQAACfhwBxQg5A5hGAcQhDAbhOAAQifAAhwhwg");
	this.shape_1.setTransform(111.175,83.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// edges
	this.instance = new lib.suffleedge();
	this.instance.setTransform(601.3,-60.05,1,1.1947);

	this.instance_1 = new lib.suffleedgetemplate();
	this.instance_1.setTransform(-584.1,-60.05,1,1.1947);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// board
	this.instance_2 = new lib.boardoptionstemplate();
	this.instance_2.setTransform(19.15,174,1.1821,1.1821,0,0,0,0.1,-0.1);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boardoptions1, new cjs.Rectangle(-605.2,-1935.8,1228.5,3701.1), null);


(lib.board4still = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.boardoptions4();
	this.instance.setTransform(-1.3,13.1,0.1511,0.1511,0,0,0,0.4,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.board4still, new cjs.Rectangle(-200.1,-405.9,1009.4,1253.6999999999998), null);


(lib.board4hover = function(mode,startPosition,loop,reversed) {
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

	// Layer_1
	this.instance = new lib.boardoptions4();
	this.instance.setTransform(-1.3,13.1,0.1511,0.1511,0,0,0,0.4,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.3,regY:1.5,scaleX:0.1655,scaleY:0.1655},4,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219.1,-446,1106,1373.6);


(lib.board4button = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.board4still();
	this.instance.setTransform(304.6,221,1,1,0,0,0,304.6,221);

	this.instance_1 = new lib.board4hover();
	this.instance_1.setTransform(304.6,221,1,1,0,0,0,304.6,221);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.1,-405.9,1009.4,1253.6999999999998);


(lib.board3still = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.boardoptions3();
	this.instance.setTransform(-1.3,13.1,0.1511,0.1511,0,0,0,0.4,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.board3still, new cjs.Rectangle(-200.1,-405.9,1009.4,1253.6999999999998), null);


(lib.board3hover = function(mode,startPosition,loop,reversed) {
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

	// Layer_1
	this.instance = new lib.boardoptions3();
	this.instance.setTransform(-1.3,13.1,0.1511,0.1511,0,0,0,0.4,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.3,regY:1.5,scaleX:0.1647,scaleY:0.1647},4,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-218.1,-443.9,1100.7,1367.1999999999998);


(lib.board3button = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.board3still();
	this.instance.setTransform(304.6,221,1,1,0,0,0,304.6,221);

	this.instance_1 = new lib.board3hover();
	this.instance_1.setTransform(304.6,221,1,1,0,0,0,304.6,221);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.1,-405.9,1009.4,1253.6999999999998);


(lib.board2still = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.boardoptions2();
	this.instance.setTransform(-1.3,13.1,0.1511,0.1511,0,0,0,0.4,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.board2still, new cjs.Rectangle(-200.1,-405.9,1009.4,1253.6999999999998), null);


(lib.board2hover = function(mode,startPosition,loop,reversed) {
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

	// Layer_1
	this.instance = new lib.boardoptions2();
	this.instance.setTransform(-1.3,13.1,0.1511,0.1511,0,0,0,0.4,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.3,regY:1.5,scaleX:0.166,scaleY:0.166},4,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219.8,-447.4,1109.3,1377.8);


(lib.board2button = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.board2still();
	this.instance.setTransform(304.6,221,1,1,0,0,0,304.6,221);

	this.instance_1 = new lib.board2hover();
	this.instance_1.setTransform(304.6,221,1,1,0,0,0,304.6,221);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.1,-405.9,1009.4,1253.6999999999998);


(lib.board1still = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.boardoptions1();
	this.instance.setTransform(-1.3,13.1,0.1511,0.1511,0,0,0,0.4,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.board1still, new cjs.Rectangle(-200.1,-405.9,1009.4,1253.6999999999998), null);


(lib.board1hover = function(mode,startPosition,loop,reversed) {
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

	// Layer_1
	this.instance = new lib.boardoptions1();
	this.instance.setTransform(-1.3,13.1,0.1511,0.1511,0,0,0,0.4,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:1.5,scaleX:0.1663,scaleY:0.1663},4,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220.1,-448.2,1111.3,1380.3);


(lib.board1button = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.board1still();
	this.instance.setTransform(304.6,221,1,1,0,0,0,304.6,221);

	this.instance_1 = new lib.board1hover();
	this.instance_1.setTransform(304.6,221,1,1,0,0,0,304.6,221);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.1,-405.9,1009.4,1253.6999999999998);


(lib.board = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.suffleedge();
	this.instance.setTransform(352,-1762.25,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(557));

	// Layer_10
	this.instance_1 = new lib.yellowpuck();
	this.instance_1.setTransform(-11.75,-1430.75,0.1308,0.1308);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(557));

	// puck
	this.instance_2 = new lib.bluepuck();
	this.instance_2.setTransform(19.85,-658.8,0.1308,0.1308);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(181).to({x:-70.55,y:-782.6},15,cjs.Ease.get(1)).wait(361));

	// texture
	this.instance_3 = new lib.texture();
	this.instance_3.setTransform(1932,-60);
	this.instance_3.alpha = 0.1484;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(557));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgBYAu6QhJhpAAiRQAAiRBJhpQBKhpBmAAQBoAABJBpQBJBpAACRQAACRhJBpQhJBphoAAQhmAAhKhpgEgASAoOQgtBKAABoQAABpAtBKQArBKA/AAQA/AAAthKQAshKAAhpQAAhogshKQgthKg/AAQg/AAgrBKgEgFkAweIhigwIAAgxIBiAAIAApbIBhAAIAAK8gAL6SZQhCg9AAhSQAAhTBCg6IAEgEIgVgPQhJg7AAhTQAAhTBJg9QBJg8BoAAQBnAABJA8QBKA9AABTQAABThKA7QgKAIgLAHIAEAEQBCA6AABTQAABShCA9QhCA9hdAAQheAAhCg9gAM/PBQglAeAAArQAAAqAlAeQAlAdA2AAQA1AAAlgdQAmgeAAgqQAAgrgmgeQglgdg1AAQg2AAglAdgAMuKUQgtAeAAAqQAAAqAtAeQAtAeA/AAQA/AAAsgeQAtgeAAgqQAAgqgtgeQgsgeg/AAQg/AAgtAegAxcSZQhDg9AAhSQAAhTBDg6IAEgEIgWgPQhJg7AAhTQAAhTBJg9QBKg8BnAAQBoAABJA8QBJA9AABTQAABThJA7QgKAIgMAHIAFAEQBCA6AABTQAABShCA9QhDA9hdAAQhdAAhCg9gAwXPBQgmAeAAArQAAAqAmAeQAlAdA1AAQA1AAAmgdQAlgeAAgqQAAgrglgeQgmgdg1AAQg1AAglAdgAwoKUQgtAeAAAqQAAAqAtAeQAsAeA/AAQA/AAAtgeQAsgeAAgqQAAgqgsgeQgtgeg/AAQg/AAgsAegALRrWIAAhhIEqAAIkqpbIBoAAIEqJbIAABhgAyGrWIAAhhIEqAAIkqpbIBoAAIEqJbIAABhgEAsYgm8QhJhpAAiRQAAiRBJhpQBJhpBoAAQBnAABJBpQBKBpAACRQAACRhKBpQhJBphnAAQhoAAhJhpgEAtdgtpQgtBKAABpQAABoAtBKQAtBKA/AAQA/AAAshKQAthKAAhoQAAhpgthKQgshKg/AAQg/AAgtBKgEAoLglYIhhgxIAAgxIBhAAIAApaIBiAAIAAK8gEgnBgnFQhJhpAAiRQAAiRBJhpQBJhpBoAAQBnAABJBpQBKBpAACRQAACRhKBpQhJBphnAAQhoAAhJhpgEgl8gtyQgtBKAABpQAABoAtBKQAtBKA/AAQA/AAAshKQAthKAAhoQAAhpgthKQgshKg/AAQg/AAgtBKgEgrOglhIhhgxIAAgxIBhAAIAApaIBiAAIAAK8gEAgXgqFIAAhiIExAAIAABigEgzCgqOIAAhiIExAAIAABig");
	this.shape.setTransform(3.925,-1258.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(557));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhI9AMVMBAjAAAIbDAAMA9sgABIANAAEhQhgMUILQAmILQAn");
	this.shape_1.setTransform(-39.775,-1676.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1,1).p("EACFhJmIgN/sMA8hAAAIQRAAIAAgBQAAhAAAhAEg6ohpSIwPgJIZnf1MAzVAAAMAzkAAAEhOfA0wMgAMg0mID3AAMCZ3AAAIC3AAMAAVB76EACUgm2I4PgFIYXe8IYI+yMA0GhChEg6ohpSMA8gAAAEgxQhJmMAbVAirEACUgm2MgAPgiwEhSOhh5MAAABiDEBPDAAKMgAZhpcEAakgmxI4QgFEAQ8h8yItvOXItUuXEg6ohpSIwPzgEBOph8zIwQThEBPMB8EIAAAwMibyAAAIj3AAIAAgwEhNaB8EMgALhHU");
	this.shape_2.setTransform(-28.9,-798.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#51A04C").s().p("EBNQCJIIAAgwIAAAwMibyAAAIAAgwIDEAAMgAMhHTIg6AAMgALg0mMCZ3AAAIC2AAMAAWB75MgAWh75Ii2AAMgAahpdIAAAAIAAiAIAACAIAAAAIwRAAIQQzgIwQTgMg8gAAAIANftMAAOAiwI4PgFIYXe7IYI+yI4QgEIYQAEI4IeyI4X+7IYPAFMgAOgiwMAzjAAAMgzjAAAIgN/tMA8gAAAIQRAAMg0GBChMA0GhChMAAaBpdMiZ3AAAIj3AAIjkAAMAAAhiDMAAAgzkILQAnIgBAnILSAAMCKaAAAIAAVDIDzAAIACT5IAACAMAAYBpdIC4AAMAAUB75IjDAAIAAAwgA336mMgbUgirMAzVAAAMgzVAAAgEgzLg9RI5o/2IQQAJMA8gAAAMg8gAAAIwQzgIQQTgIwQgJgEABRhiGINvuYItvOYItTuYINTOYgEAPAhweMA9tAAAIANAAIgNAAMg9tAAAI7CAAMhAjAAAMBAjAAAIbCAAg");
	this.shape_3.setTransform(-16.55,-877.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(557));

	// Layer_5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgnBAu6QhJhpAAiRQAAiRBJhpQBJhpBoAAQBnAABJBpQBKBpAACRQAACRhKBpQhJBphnAAQhoAAhJhpgEgl8AoOQgtBKAABoQAABpAtBKQAtBKA/AAQA/AAAshKQAthKAAhpQAAhogthKQgshKg/AAQg/AAgtBKgEgrOAweIAApaIhhAAIAAgxIBhgxIBiAAIAAK8gEAsYAuxQhJhpAAiRQAAiRBJhpQBJhpBoAAQBnAABJBpQBKBpAACRQAACRhKBpQhJBphnAAQhoAAhJhpgEAtdAoFQgtBKAABoQAABpAtBKQAtBKA/AAQA/AAAshKQAthKAAhpQAAhogthKQgshKg/AAQg/AAgtBKgEAoLAwVIAApaIhhAAIAAgxIBhgxIBiAAIAAK8gEgzCArxIAAhiIExAAIAABigEAgXAroIAAhiIExAAIAABigALRWTIEqpbIkqAAIAAhhIGSAAIAABhIkqJbgAyGWTIEqpbIkqAAIAAhhIGSAAIAABhIkqJbgALppLQhJg9AAhTQAAhTBJg7IAVgPIgEgEQhCg6AAhTQAAhSBCg9QBCg9BeAAQBdAABCA9QBCA9AABSQAABThCA6IgEAEQALAHAKAIQBKA7AABTQAABThKA9QhJA8hnAAQhoAAhJg8gAMusjQgtAeAAAqQAAAqAtAeQAtAeA/AAQA/AAAsgeQAtgeAAgqQAAgqgtgeQgsgeg/AAQg/AAgtAegAM/xRQglAeAAAqQAAArAlAeQAlAdA2AAQA1AAAlgdQAmgeAAgrQAAgqgmgeQglgdg1AAQg2AAglAdgAxupLQhJg9AAhTQAAhTBJg7IAWgPIgEgEQhDg6AAhTQAAhSBDg9QBCg9BdAAQBdAABDA9QBCA9AABSQAABThCA6IgFAEQAMAHAKAIQBJA7AABTQAABThJA9QhJA8hoAAQhnAAhKg8gAwosjQgtAeAAAqQAAAqAtAeQAsAeA/AAQA/AAAtgeQAsgeAAgqQAAgqgsgeQgtgeg/AAQg/AAgsAegAwXxRQgmAeAAAqQAAArAmAeQAlAdA1AAQA1AAAmgdQAlgeAAgrQAAgqglgeQgmgdg1AAQg1AAglAdgEgALgnFQhJhpAAiRQAAiRBJhpQBJhpBnAAQBoAABJBpQBJBpAACRQAACRhJBpQhJBphoAAQhnAAhJhpgEAA6gtyQgtBKAABpQAABoAtBKQAsBKA/AAQA/AAAthKQAshKAAhoQAAhpgshKQgthKg/AAQg/AAgsBKgEgEXglhIAApbIhiAAIAAgxIBigwIBhAAIAAK8g");
	this.shape_4.setTransform(-13.575,394.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(557));

	// Layer_6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(3,1,1).p("EhQyANDIgBAAIAAgHQAdwfAcwhMAAAhb3IOiAAEAB1hI5I4PAEIYX+8IYIezMA0GBChIAAAAQAABAAABBIgBRfIwQzgIQRAAEhQyAPMIAAiJMBE+AAAIbEAAItwuXItUOXEg7HgGdIwQAJIZo/2MAzVAAAIgNftMA8hAAAEg7HgGdIwKTZEg7HgGdMA8gAAAEAB1hI5MgAPAivMAzkAAAEgxvgmKMAbVgirEBNxANDIAZAAEBNxANDIAACJAPQNDMA+hAAAEAaFhI+I4QAFEg81hv7MCLZAAAMgAZBpeEBQ0APMMAAABgwMiejAAAMAAAhgw");
	this.shape_5.setTransform(-23.8,650.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#51A04C").s().p("EhNvBv8MAAAhgwIjCAAIAAiJIgCAAIAAgHMAA6ghAMAAAhb3IOhAAIEjAAMCLZAAAMgAZBpeMg0HhChI4H+zI4Xe8IYOgEMgAOAivMgzVAAAMAbVgirMgbVAirI5of2IQQgJIwKTZIQKzZMA8gAAAIAN/tMAAOgivIYQgFMA0HBChIwSAAIQSAAIAAAAIAACBIgBRfIwRzgIQRTgIgZAAMg+iAAAItvuXItUOXINUuXINvOXMA+iAAAIAACJIDDAAMAAABgwgAPPNDI7DAAgAr0NDMhE9AAAgEA95gGdMg8gAAAgEA1KgmKMgzkAAAgEBNxANDgEgxvgmKMAzVAAAIgNftMg8gAAAIwQAJgEBOLgGdgEBOLgGdgEgWahI1gEAB9hnxIYHezI4QAFI4OAEgEAaEhI+g");
	this.shape_6.setTransform(-23.8,650.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(557));

	// Layer_9
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ehi2gJ/MDFtAAAIAAT/MjFtAAAg");
	this.shape_7.setTransform(-54.4,-1809.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663300").s().p("Ehi2AKBIAA0AMDFtAAAIAAUAg");
	this.shape_8.setTransform(-54.4,-1809.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(557));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1247.1,-2494.2,5771.1,4485.5);


(lib.answerreveal = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.boardoptions4();
	this.instance.setTransform(108.5,451,0.2484,0.2484,0,0,0,1,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.answerreveal, new cjs.Rectangle(-218.6,-238.2,1659.8999999999999,2061.6), null);


(lib.slotanswerreveal2ndround = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Wrongframe();
	this.instance.setTransform(-8,615.05,1.0074,1.0074);

	this.instance_1 = new lib.correct2ndattempt();
	this.instance_1.setTransform(-8,1296.15,1.0074,1.0074);

	this.instance_2 = new lib.Wrongframe();
	this.instance_2.setTransform(-8,2010.55,1.0074,1.0074);

	this.instance_3 = new lib.Wrongframe();
	this.instance_3.setTransform(-8,3446.85,1.0074,1.0074);

	this.instance_4 = new lib.correct2ndattempt();
	this.instance_4.setTransform(-8,2719.85,1.0074,1.0074);

	this.instance_5 = new lib.correct2ndattempt();
	this.instance_5.setTransform(-2.6,4168.75,1.0074,1.0074);

	this.instance_6 = new lib.Wrongframe();
	this.instance_6.setTransform(-8,4862.4,1.0074,1.0074);

	this.instance_7 = new lib.Wrongframe();
	this.instance_7.setTransform(-8,6286.25,1.0074,1.0074);

	this.instance_8 = new lib.correct2ndattempt();
	this.instance_8.setTransform(-8,5571.7,1.0074,1.0074);

	this.instance_9 = new lib.Wrongframe();
	this.instance_9.setTransform(-2.6,7735.15,1.0074,1.0074);

	this.instance_10 = new lib.correct2ndattempt();
	this.instance_10.setTransform(-2.6,7008.1,1.0074,1.0074);

	this.instance_11 = new lib.Wrongframe();
	this.instance_11.setTransform(-2.6,9155.3,1.0074,1.0074);

	this.instance_12 = new lib.correct2ndattempt();
	this.instance_12.setTransform(-2.6,8444.4,1.0074,1.0074);

	this.instance_13 = new lib.Wrongframe();
	this.instance_13.setTransform(-2.6,10607.75,1.0074,1.0074);

	this.instance_14 = new lib.correct2ndattempt();
	this.instance_14.setTransform(-2.6,9880.75,1.0074,1.0074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_1
	this.instance_15 = new lib.letsseehowyoudid();
	this.instance_15.setTransform(-36.2,-116.75,1.0074,1.0074);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slotanswerreveal2ndround, new cjs.Rectangle(-662.5,-527.5,1317.1,11445.5), null);


(lib.rewatchbtn2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.replaybutton();
	this.instance.setTransform(0,-32.35,0.8099,0.8099);

	this.instance_1 = new lib.replaybutton2();
	this.instance_1.setTransform(0,-32.35,0.8099,0.8099);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282.9,-100.7,572,144);


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
	this.shape_1.graphics.lf(["#009900","#006600"],[0,1],1.8,-161.2,2.3,433.1).s().p("Ehj9A5OMAAAhybMDH7AAAMAAABybg");
	this.shape_1.setTransform(6.6,-52.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Eg9hAcHMAAAg4NMB7DAAAMAAAA4Ng");
	this.shape_2.setTransform(0,-1.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.correctscreen, new cjs.Rectangle(-633.1,-419.2,1279.5,732.5), null);


(lib.boardwithtexture = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.suffleedge();
	this.instance.setTransform(-83.5,1038.85,1,1,90);

	this.instance_1 = new lib.suffleedgenoshadow();
	this.instance_1.setTransform(-83.5,1065.55,1,1,90);

	this.instance_2 = new lib.suffleedgenoshadow();
	this.instance_2.setTransform(-83.15,1118.6,1,1,90);

	this.instance_3 = new lib.suffleedgenoshadow();
	this.instance_3.setTransform(-83.15,1161.6,1,1,90);

	this.instance_4 = new lib.suffleedgenoshadow();
	this.instance_4.setTransform(-83.15,1183.1,1,1,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{y:1038.85,x:-83.5}}]},217).to({state:[{t:this.instance,p:{y:1100.4,x:-83.5}},{t:this.instance_1,p:{x:-83.5,y:1065.55}}]},1).to({state:[{t:this.instance,p:{y:1161.95,x:-83.5}},{t:this.instance_2,p:{y:1118.6}},{t:this.instance_1,p:{x:-83.15,y:1075.6}}]},1).to({state:[{t:this.instance,p:{y:1222.55,x:-93.9}},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2,p:{y:1118.6}},{t:this.instance_1,p:{x:-83.15,y:1075.4}}]},1).to({state:[{t:this.instance_2,p:{y:1118.6}},{t:this.instance_1,p:{x:-83.15,y:1075.6}}]},1).to({state:[{t:this.instance_2,p:{y:1096.25}},{t:this.instance_1,p:{x:-83.15,y:1053.25}}]},1).to({state:[]},1).wait(507));

	// Layer_8
	this.instance_5 = new lib.suffleedge();
	this.instance_5.setTransform(588.6,496.95,1,1,0,0,180);

	this.instance_6 = new lib.suffleedge();
	this.instance_6.setTransform(-584.1,524.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).to({state:[{t:this.instance_6},{t:this.instance_5}]},535).to({state:[]},1).wait(194));

	// puck
	this.instance_7 = new lib.puck();
	this.instance_7.setTransform(15,1510.6,0.1612,0.1612);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(169).to({regX:0.3,regY:0.3,y:1468.65},6).to({regX:0,regY:0,y:1419.65},7).to({x:-535.9,y:1669.35},10).to({x:569.15,y:1283.35},17).to({x:-105.2,y:1257.55},11).to({x:-525.7,y:1589.35},16).to({x:205.4,y:1298.65},36,cjs.Ease.get(1)).wait(263).to({_off:true},1).wait(194));

	// board
	this.instance_8 = new lib.board();
	this.instance_8.setTransform(19.15,174,1.1821,1.1821,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(169).to({scaleX:1.182,scaleY:1.182,y:1051.25},6).to({scaleX:1.1821,scaleY:1.1821,y:2074.8},7).to({y:1516.2},10).to({y:2619.85},17).to({y:3300.15},11).to({y:2307.25},16).to({y:2678.25},36,cjs.Ease.get(1)).wait(263).to({_off:true},1).wait(194));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2615.4,-2774.2,7982.1,8428.3);


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

}).prototype = getMCSymbolPrototype(lib.slotanswerreveal, new cjs.Rectangle(-653.7,-527.6,1307.5,12253), null);


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

	// stick
	this.instance = new lib.stick();
	this.instance.setTransform(16.7,300.15,0.4883,0.4883,0,0,0,0.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// board
	this.instance_1 = new lib.boardwithtexture("synched",0);
	this.instance_1.setTransform(-0.95,-1481.5,1.0563,1.0563,0,0,0,0,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.newthumbnail, new cjs.Rectangle(-1456.4,-3934.2,7124.200000000001,5122), null);


// stage content:
(lib.Shuffleboard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,294,511,536,646,740,755,1054,1266,1291,1392,1505];
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
	this.frame_294 = function() {
		this.gotoAndPlay(370);
	}
	this.frame_511 = function() {
		this.board_one.addEventListener("click", handleClick.bind(this));
		this.board_two.addEventListener("click", handleClick.bind(this));
		this.board_three.addEventListener("click", handleClick.bind(this));
		this.board_four.addEventListener("click", handleClick.bind(this));
		
		function handleClick(evt) {
		  let clickedObject = evt.currentTarget;
		
		  if (clickedObject === this.board_four) {
		    this.gotoAndPlay(538); // Correct answer frame
		  } else {
		    this.gotoAndPlay(648); // Wrong answer frame
		  }
		}
	}
	this.frame_536 = function() {
		this.gotoAndPlay(515);
	}
	this.frame_646 = function() {
		this.stop();
	}
	this.frame_740 = function() {
		this.rewatch_btn.addEventListener("click", handleClick.bind(this));
		
		function handleClick(evt) {
		  
		if (evt.currentTarget === this.rewatch_btn) {
		    this.gotoAndPlay(758);
		}
		}
	}
	this.frame_755 = function() {
		this.stop();
	}
	this.frame_1054 = function() {
		this.gotoAndPlay(1125);
	}
	this.frame_1266 = function() {
		this.board_one2.addEventListener("click", handleClick.bind(this));
		this.board_two2.addEventListener("click", handleClick.bind(this));
		this.board_three2.addEventListener("click", handleClick.bind(this));
		this.board_four2.addEventListener("click", handleClick.bind(this));
		
		function handleClick(evt) {
		  let clickedObject = evt.currentTarget;
		
		  if (clickedObject === this.board_four2) {
		    this.gotoAndPlay(1293); // Correct answer frame
		  } else {
		    this.gotoAndPlay(1394); // Wrong answer frame
		  }
		}
	}
	this.frame_1291 = function() {
		this.gotoAndPlay(1270);
	}
	this.frame_1392 = function() {
		this.stop();
	}
	this.frame_1505 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(294).call(this.frame_294).wait(217).call(this.frame_511).wait(25).call(this.frame_536).wait(110).call(this.frame_646).wait(94).call(this.frame_740).wait(15).call(this.frame_755).wait(299).call(this.frame_1054).wait(212).call(this.frame_1266).wait(25).call(this.frame_1291).wait(101).call(this.frame_1392).wait(113).call(this.frame_1505).wait(1));

	// Layer_26
	this.instance = new lib.answerreveal();
	this.instance.setTransform(657.75,588.75,0.1998,0.1998,0,0,0,124.9,269.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1497).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(2));

	// Incorrect
	this.instance_1 = new lib.slotanswerreveal2ndround();
	this.instance_1.setTransform(639.8,527.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1393).to({_off:false},0).wait(16).to({y:-99.15},10,cjs.Ease.get(-1)).to({y:-5950.3},21).to({y:-10193.45},46,cjs.Ease.get(1)).wait(20));

	// Correct
	this.instance_2 = new lib.slotanswerreveal2ndround();
	this.instance_2.setTransform(639.8,527.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1292).to({_off:false},0).wait(16).to({y:-99.15},10,cjs.Ease.get(-1)).to({y:-5950.3},21).to({y:-9469.45},46,cjs.Ease.get(1)).to({_off:true},8).wait(113));

	// select
	this.instance_3 = new lib.optionsframe();
	this.instance_3.setTransform(611.75,-490.75,0.876,0.876);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1250).to({_off:false},0).to({y:325.5},16,cjs.Ease.get(1)).to({_off:true},26).wait(214));

	// board_4
	this.instance_4 = new lib.board4button();
	this.instance_4.setTransform(1364.15,-118.5,1,1,0,0,0,304.6,221);
	this.instance_4._off = true;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.board4button(), 3);

	this.board_four2 = new lib.board4button();
	this.board_four2.name = "board_four2";
	this.board_four2.setTransform(1364.15,635.75,1,1,0,0,0,304.6,221);
	new cjs.ButtonHelper(this.board_four2, 0, 1, 2, false, new lib.board4button(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},1250).to({state:[{t:this.board_four2}]},16).to({state:[]},26).wait(214));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1250).to({_off:false},0).to({_off:true,y:635.75},16,cjs.Ease.get(1)).wait(240));

	// board_3
	this.instance_5 = new lib.board3button();
	this.instance_5.setTransform(1083.3,-118.5,1,1,0,0,0,304.6,221);
	this.instance_5._off = true;
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.board3button(), 3);

	this.board_three2 = new lib.board3button();
	this.board_three2.name = "board_three2";
	this.board_three2.setTransform(1083.3,635.75,1,1,0,0,0,304.6,221);
	new cjs.ButtonHelper(this.board_three2, 0, 1, 2, false, new lib.board3button(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},1250).to({state:[{t:this.board_three2}]},16).to({state:[]},26).to({state:[]},1).wait(213));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1250).to({_off:false},0).to({_off:true,y:635.75},16,cjs.Ease.get(1)).wait(240));

	// board_2
	this.instance_6 = new lib.board2button();
	this.instance_6.setTransform(812.35,-118.5,1,1,0,0,0,304.6,221);
	this.instance_6._off = true;
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.board2button(), 3);

	this.board_two2 = new lib.board2button();
	this.board_two2.name = "board_two2";
	this.board_two2.setTransform(812.35,635.75,1,1,0,0,0,304.6,221);
	new cjs.ButtonHelper(this.board_two2, 0, 1, 2, false, new lib.board2button(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},1250).to({state:[{t:this.board_two2}]},16).to({state:[]},26).to({state:[]},1).wait(213));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1250).to({_off:false},0).to({_off:true,y:635.75},16,cjs.Ease.get(1)).wait(240));

	// board_1
	this.instance_7 = new lib.board1button();
	this.instance_7.setTransform(531.45,-118.5,1,1,0,0,0,304.6,221);
	this.instance_7._off = true;
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.board1button(), 3);

	this.board_one2 = new lib.board1button();
	this.board_one2.name = "board_one2";
	this.board_one2.setTransform(531.45,635.75,1,1,0,0,0,304.6,221);
	new cjs.ButtonHelper(this.board_one2, 0, 1, 2, false, new lib.board1button(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},1250).to({state:[{t:this.board_one2}]},16).to({state:[]},26).to({state:[]},1).wait(213));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1250).to({_off:false},0).to({_off:true,y:635.75},16,cjs.Ease.get(1)).wait(240));

	// Layer_30
	this.instance_8 = new lib.questionbg();
	this.instance_8.setTransform(640,360);
	this.instance_8.alpha = 0.8516;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1250).to({_off:false},0).to({_off:true},42).wait(214));

	// instructions
	this.instance_9 = new lib.instuctionsframe();
	this.instance_9.setTransform(646.15,374.1);

	this.instance_10 = new lib.question();
	this.instance_10.setTransform(646.15,374.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},756).to({state:[]},141).to({state:[{t:this.instance_10}]},227).to({state:[]},126).to({state:[]},43).wait(213));

	// stick
	this.instance_11 = new lib.stick();
	this.instance_11.setTransform(656.7,660.15,0.4883,0.4883,0,0,0,0.2,0.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(756).to({_off:false},0).wait(159).to({y:854.15},6,cjs.Ease.get(1)).wait(2).to({y:602.15},2).to({regX:0.3,regY:0.4,x:656.75,y:930.7},3).to({regX:0.2,regY:0.3,x:656.7,y:968.15},1).to({_off:true},363).wait(214));

	// board
	this.instance_12 = new lib.boardwithtexture("synched",0);
	this.instance_12.setTransform(639.05,-1121.5,1.0563,1.0563,0,0,0,0,0.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(756).to({_off:false},0).to({_off:true},536).wait(214));

	// Rewatch_Puzzle_btn
	this.rewatch_btn = new lib.rewatchbtn2();
	this.rewatch_btn.name = "rewatch_btn";
	this.rewatch_btn.setTransform(645.05,628.5);
	this.rewatch_btn._off = true;
	new cjs.ButtonHelper(this.rewatch_btn, 0, 1, 2, false, new lib.rewatchbtn2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rewatch_btn).wait(740).to({_off:false},0).to({_off:true},16).wait(750));

	// Incorrect
	this.instance_13 = new lib.slotanswerreveal();
	this.instance_13.setTransform(639.8,527.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(647).to({_off:false},0).wait(16).to({y:-99.15},10,cjs.Ease.get(-1)).to({y:-5950.3},21).to({y:-9543.9},46,cjs.Ease.get(1)).to({_off:true},16).wait(750));

	// Correct
	this.instance_14 = new lib.slotanswerreveal();
	this.instance_14.setTransform(639.8,527.7);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(537).to({_off:false},0).wait(16).to({y:-99.15},10,cjs.Ease.get(-1)).to({y:-5950.3},21).to({y:-8824.05},46,cjs.Ease.get(1)).to({_off:true},17).wait(859));

	// select
	this.instance_15 = new lib.optionsframe();
	this.instance_15.setTransform(611.75,-490.75,0.876,0.876);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(495).to({_off:false},0).to({y:325.5},16,cjs.Ease.get(1)).to({_off:true},26).wait(969));

	// board_4
	this.instance_16 = new lib.board4button();
	this.instance_16.setTransform(1364.15,-118.5,1,1,0,0,0,304.6,221);
	this.instance_16._off = true;
	new cjs.ButtonHelper(this.instance_16, 0, 1, 2, false, new lib.board4button(), 3);

	this.board_four = new lib.board4button();
	this.board_four.name = "board_four";
	this.board_four.setTransform(1364.15,635.75,1,1,0,0,0,304.6,221);
	new cjs.ButtonHelper(this.board_four, 0, 1, 2, false, new lib.board4button(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},495).to({state:[{t:this.board_four}]},16).to({state:[]},26).wait(969));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(495).to({_off:false},0).to({_off:true,y:635.75},16,cjs.Ease.get(1)).wait(995));

	// board_3
	this.instance_17 = new lib.board3button();
	this.instance_17.setTransform(1083.3,-118.5,1,1,0,0,0,304.6,221);
	this.instance_17._off = true;
	new cjs.ButtonHelper(this.instance_17, 0, 1, 2, false, new lib.board3button(), 3);

	this.board_three = new lib.board3button();
	this.board_three.name = "board_three";
	this.board_three.setTransform(1083.3,635.75,1,1,0,0,0,304.6,221);
	new cjs.ButtonHelper(this.board_three, 0, 1, 2, false, new lib.board3button(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},495).to({state:[{t:this.board_three}]},16).to({state:[]},26).to({state:[]},1).wait(968));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(495).to({_off:false},0).to({_off:true,y:635.75},16,cjs.Ease.get(1)).wait(995));

	// board_2
	this.instance_18 = new lib.board2button();
	this.instance_18.setTransform(812.35,-118.5,1,1,0,0,0,304.6,221);
	this.instance_18._off = true;
	new cjs.ButtonHelper(this.instance_18, 0, 1, 2, false, new lib.board2button(), 3);

	this.board_two = new lib.board2button();
	this.board_two.name = "board_two";
	this.board_two.setTransform(812.35,635.75,1,1,0,0,0,304.6,221);
	new cjs.ButtonHelper(this.board_two, 0, 1, 2, false, new lib.board2button(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},495).to({state:[{t:this.board_two}]},16).to({state:[]},26).to({state:[]},1).wait(968));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(495).to({_off:false},0).to({_off:true,y:635.75},16,cjs.Ease.get(1)).wait(995));

	// board_1
	this.instance_19 = new lib.board1button();
	this.instance_19.setTransform(531.45,-118.5,1,1,0,0,0,304.6,221);
	this.instance_19._off = true;
	new cjs.ButtonHelper(this.instance_19, 0, 1, 2, false, new lib.board1button(), 3);

	this.board_one = new lib.board1button();
	this.board_one.name = "board_one";
	this.board_one.setTransform(531.45,635.75,1,1,0,0,0,304.6,221);
	new cjs.ButtonHelper(this.board_one, 0, 1, 2, false, new lib.board1button(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},495).to({state:[{t:this.board_one}]},16).to({state:[]},26).to({state:[]},1).wait(968));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(495).to({_off:false},0).to({_off:true,y:635.75},16,cjs.Ease.get(1)).wait(995));

	// Layer_29
	this.instance_20 = new lib.questionbg();
	this.instance_20.setTransform(640,360);
	this.instance_20.alpha = 0.8516;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(495).to({_off:false},0).to({_off:true},42).wait(969));

	// instructions
	this.instance_21 = new lib.instuctionsframe();
	this.instance_21.setTransform(646.15,374.1);

	this.instance_22 = new lib.question();
	this.instance_22.setTransform(646.15,374.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21}]},1).to({state:[]},141).to({state:[{t:this.instance_22}]},227).to({state:[]},126).to({state:[]},297).wait(714));

	// stick
	this.instance_23 = new lib.stick();
	this.instance_23.setTransform(656.7,660.15,0.4883,0.4883,0,0,0,0.2,0.3);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1).to({_off:false},0).wait(159).to({y:854.15},6,cjs.Ease.get(1)).wait(2).to({y:602.15},2).to({regX:0.3,regY:0.4,x:656.75,y:930.7},3).to({regX:0.2,regY:0.3,x:656.7,y:968.15},1).to({_off:true},363).wait(969));

	// board
	this.instance_24 = new lib.boardwithtexture("synched",0);
	this.instance_24.setTransform(639.05,-1121.5,1.0563,1.0563,0,0,0,0,0.9);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({_off:false},0).to({_off:true},536).wait(969));

	// playbtn
	this.play_btn = new lib.playbuttonbutton();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(629.85,371.95);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.playbuttonbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).to({_off:true},1).wait(1505));

	// thumnail
	this.instance_25 = new lib.newthumbnail();
	this.instance_25.setTransform(638,360,1.0344,1.0344);
	var instance_25Filter_1 = new cjs.ColorFilter(0.6,0.6,0.6,1,0,0,0,0);
	this.instance_25.filters = [instance_25Filter_1];
	this.instance_25.cache(-1458,-3936,7128,5126);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({_off:true},1).wait(1505));
	this.timeline.addTween(cjs.Tween.get(instance_25Filter_1).wait(1505));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1580.6,-10361,8081.200000000001,22614.1);
// library properties:
lib.properties = {
	id: 'B543C4DCA9038D4494FB095F47CB2718',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/images/abstractsurfacewoodtexturebackground.jpg", id:"abstractsurfacewoodtexturebackground"},
		{src:"/images/concretewall.jpg", id:"concretewall"},
		{src:"/images/Shuffleboard_atlas_1.png", id:"Shuffleboard_atlas_1"},
		{src:"/images/Shuffleboard_atlas_2.png", id:"Shuffleboard_atlas_2"}
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