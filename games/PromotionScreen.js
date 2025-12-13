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



(lib.bird = function() {
	this.initialize(img.bird);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,182);


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


(lib.Bitmap19 = function() {
	this.initialize(img.Bitmap19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,493);


(lib.brownwoodtexturedbackgroundwithdesignspace = function() {
	this.initialize(img.brownwoodtexturedbackgroundwithdesignspace);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7000,4667);


(lib.calc = function() {
	this.initialize(img.calc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,583,362);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,581,366);


(lib.check = function() {
	this.initialize(img.check);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,587,441);


(lib.VizulationLogoTextWithTagline = function() {
	this.initialize(img.VizulationLogoTextWithTagline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5692,3200);


(lib.weight = function() {
	this.initialize(img.weight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,575,370);// helper functions:

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


(lib.info = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AU2BkQgjgqAAg6QAAg5AjgqQAjgqAxAAQAyAAAjAqQAjAqAAA5QAAA6gjAqQgjAqgyAAQgxAAgjgqgAVShHQgYAeAAApQAAAqAYAeQAXAdAhAAQAiAAAXgdQAYgeAAgqQAAgpgYgeQgXgdgiAAQghAAgXAdgARfBkQgjgqAAg6QAAg5AjgqQAjgqAxAAQAgAAAZASIAAA0QgXgdgiAAQghAAgXAdQgYAeAAApQAAAqAYAeQAXAdAhAAQAiAAAXgdIAAA0QgZASggAAQgxAAgjgqgAIzBkQgjgqAAg6QAAg5AjgqQAjgqAxAAQAyAAAjAqQAjAqAAA5QAAA6gjAqQgjAqgyAAQgxAAgjgqgAJOhHQgXAeAAApQAAAqAXAeQAYAdAhAAQAiAAAYgdQAXgeAAgqQAAgpgXgeQgYgdgiAAQghAAgYAdgAlmBvQgegeAAgpIAAizIAnAAIAACzQAAAZASASQASASAZAAQAZAAASgSQASgSAAgZIAAizIAnAAIAACzQAAApgeAeQgdAfgpAAQgpAAgdgfgAbsCMIAAjmIg6DmIgoAAIg6jmIAADmIgnAAIAAkXIBDAAIAyDJIAzjJIBDAAIAAEXgAPuCMIAAgnIAnAAIAAAngAOgCMIhTi9IAAC9IgnAAIAAkXIAnAAIBTC9IAAi9IAnAAIAAEXgAHCCMIAAkXIAnAAIAAEXgAE3CMIAAjwIg9AAIAAgnIChAAIAAAnIg9AAIAADwgAC/CMIgOg7IhdAAIgOA7IgnAAIBBkXIBFAAIBBEXgABdArIBLAAIgmifgAiVCMIAAkXIAnAAIAADwIB5AAIAAAngApMCMIAAgnIB3jJIh3AAIAAgnIChAAIAAAnIh3DJIB3AAIAAAngAqaCMIAAkXIAnAAIAAEXgAs0CMIhBkXIAnAAIA4DsIA3jsIAoAAIhBEXgAu6CMIAAgnIAoAAIAAAngAw2CMIgkizIgkCzIhDAAIgdkXIAoAAIAYDuIAwjuIAoAAIAvDuIAZjuIAnAAIgdEXgA1RCMIgkizIgkCzIhCAAIgdkXIAnAAIAZDuIAvjuIAoAAIAwDuIAYjuIAoAAIgdEXgA5rCMIgkizIgkCzIhDAAIgdkXIAoAAIAYDuIAwjuIAnAAIAwDuIAYjuIAoAAIgdEXg");
	this.shape.setTransform(2.7,64.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F2F2F").s().p("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");
	this.shape_1.setTransform(0,-29.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.info, new cjs.Rectangle(-227.5,-78.4,455.1,156.9), null);


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


(lib.checkersframe = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.check();
	this.instance.setTransform(-354,246,0.2186,0.2186);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.checkersframe, new cjs.Rectangle(-354,246,128.3,96.39999999999998), null);


(lib.birdframe = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bird();
	this.instance.setTransform(-280,-238,2.599,2.599);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.birdframe, new cjs.Rectangle(-280,-238,743.4,473.1), null);


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


// stage content:
(lib.PromotionScreen = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.info();
	this.instance.setTransform(628.95,591.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.bulletemoji();
	this.instance_1.setTransform(572.55,67.35,0.1331,0.1331,0,0,0,0.4,0.4);
	this.instance_1.shadow = new cjs.Shadow("rgba(51,51,51,1)",3,3,4);

	this.instance_2 = new lib.loopiconcopy2();
	this.instance_2.setTransform(657.85,67.55,0.1188,0.1188,0,0,0,0.8,0.8);
	this.instance_2.shadow = new cjs.Shadow("rgba(51,51,51,1)",3,3,4);

	this.instance_3 = new lib.Xwrong();
	this.instance_3.setTransform(735.95,70.05,0.0781,0.0781,0,0,0,0.7,1.9);
	this.instance_3.shadow = new cjs.Shadow("rgba(51,51,51,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer_6
	this.instance_4 = new lib.VizulationLogoTextWithTagline();
	this.instance_4.setTransform(361,-9,0.1025,0.1025);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EBh5AQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEBdXAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEBY1AQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEBUdAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEBP7AQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEBLZAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEBHBAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEBCfAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEA99AQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEA5lAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEA1DAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEAwhAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEAsJAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEAnnAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEAjFAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgAetQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgAaLQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgAVpQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgARRQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgAMvQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgAINQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgAD1QVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgAgsQVQgyAAAAgyIAAhaQAAgyAyAAIBZAAQAyAAAAAyIAABaQAAAygyAAgAlOQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgApmQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgAuIQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgAyqQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgA3CQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgA7kQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEggGAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEgkeAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEgpAAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEgtiAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEgx6AQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEg2cAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEg6+AQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEg/WAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEhD4AQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEhIaAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEhMyAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEhRUAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEhV2AQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEhaOAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEhewAQVQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEhi+AQVQgzAAAAgyIAAhaQAAgyAzAAIBaAAQAxAAAAAyIAABaQAAAygxAAgEBh5gNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEBdXgNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEBY1gNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEBUdgNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEBP7gNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEBLZgNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEBHBgNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEBCfgNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEA99gNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEA5lgNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEA1DgNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEAwhgNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEAsJgNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEAnngNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEAjFgNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgAettWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgAaLtWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgAVptWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgARRtWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgAMvtWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgAINtWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgAD1tWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgAgstWQgyAAAAgyIAAhaQAAgyAyAAIBZAAQAyAAAAAyIAABaQAAAygyAAgAlOtWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgApmtWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgAuItWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgAyqtWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgA3CtWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgA7ktWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEggGgNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEgkegNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEgpAgNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEgtigNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEgx6gNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEg2cgNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEg6+gNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEg/WgNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEhD4gNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEhIagNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEhMygNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEhRUgNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEhV2gNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEhaOgNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEhewgNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAgEhjSgNWQgyAAAAgyIAAhaQAAgyAyAAIBaAAQAyAAAAAyIAABaQAAAygyAAg");
	this.shape.setTransform(640.55,374.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_21 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax0LwQgyAAAAgvIAA2BQAAgvAyAAMAjpAAAQAzAAgBAvIAAWBQABAvgzAAg");
	mask.setTransform(1144.85,373.875);

	// Layer_9
	this.instance_5 = new lib.weight();
	this.instance_5.setTransform(1023,297,0.4264,0.4264);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer_19 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ax0LwQgzAAAAgvIAA2BQAAgvAzAAMAjpAAAQAzAAAAAvIAAWBQAAAvgzAAg");
	mask_1.setTransform(891.175,373.875);

	// Layer_7
	this.instance_6 = new lib.car();
	this.instance_6.setTransform(766,292,0.4334,0.4334);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Layer_17 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Ax0LwQgzAAAAgvIAA2BQAAgvAzAAMAjpAAAQAzAAAAAvIAAWBQAAAvgzAAg");
	mask_2.setTransform(639.625,373.875);

	// Layer_2
	this.instance_7 = new lib.calc();
	this.instance_7.setTransform(515,297,0.4306,0.4306);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Layer_15 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ax0LwQgzAAAAgvIAA2BQAAgvAzAAMAjpAAAQAzAAAAAvIAAWBQAAAvgzAAg");
	mask_3.setTransform(386.975,373.875);

	// Layer_14
	this.instance_8 = new lib.birdframe();
	this.instance_8.setTransform(357.95,373,0.3719,0.3719,0,0,0,0,0.1);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Layer_13 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Ax0LwQgzAAAAgvIAA2BQAAgvAzAAMAjpAAAQAzAAAAAvIAAWBQAAAvgzAAg");
	mask_4.setTransform(134.375,373.875);

	// Layer_12
	this.instance_9 = new lib.checkersframe();
	this.instance_9.setTransform(691.45,-194.8,1.9354,1.9354,0,0,0,0,0.1);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EA9IALwQgzAAAAgvIAA2BQAAgvAzAAMAjpAAAQAzAAAAAvIAAWBQAAAvgzAAgAVfLwQgzAAAAgvIAA2BQAAgvAzAAMAjpAAAQAzAAAAAvIAAWBQAAAvgzAAgAx0LwQgyAAAAgvIAA2BQAAgvAyAAMAjpAAAQAzAAAAAvIAAWBQAAAvgzAAgEg5SALwQgzAAAAgvIAA2BQAAgvAzAAMAjpAAAQA0AAAAAvIAAWBQAAAvg0AAgEhgwALwQgzAAAAgvIAA2BQAAgvAzAAMAjqAAAQAyAAAAAvIAAWBQAAAvgyAAg");
	this.shape_1.setTransform(639.6,373.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAARgMAAAgi/");
	this.shape_2.setTransform(-6.9,373.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("EhllARfMAAAgi9MDLLAAAMAAAAi9g");
	this.shape_3.setTransform(643.325,373.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_11
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2A2929").ss(1,1,1).p("EhrJg9/MDWTAAAMAAAB8AMjWTAAAg");
	this.shape_4.setTransform(653.75,358.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFE0","#FFECE0"],[0,1],0,-290.5,0,290.6).s().p("EhrJA+AMAAAh8AMDWSAAAMAAAB8Ag");
	this.shape_5.setTransform(653.75,358.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(607,321.1,733.5,435.69999999999993);
// library properties:
lib.properties = {
	id: 'B543C4DCA9038D4494FB095F47CB2718',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/images/bird.png", id:"bird"},
		{src:"/images/Bitmap1.jpg", id:"Bitmap1"},
		{src:"/images/Bitmap13.png", id:"Bitmap13"},
		{src:"/images/Bitmap17.png", id:"Bitmap17"},
		{src:"/images/Bitmap19.png", id:"Bitmap19"},
		{src:"/images/brownwoodtexturedbackgroundwithdesignspace.jpg", id:"brownwoodtexturedbackgroundwithdesignspace"},
		{src:"/images/calc.png", id:"calc"},
		{src:"/images/car.png", id:"car"},
		{src:"/images/check.png", id:"check"},
		{src:"/images/VizulationLogoTextWithTagline.png", id:"VizulationLogoTextWithTagline"},
		{src:"/images/weight.png", id:"weight"}
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