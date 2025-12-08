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
p.nominalBounds = new cjs.Rectangle(0,0,740,493);// helper functions:

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


(lib.skybg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EA6zAioMh1lAAAMAAAhFPMB1lAAAg");
	this.shape.setTransform(376.275,221.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#66CCFF","#FFFFFF"],[0,1],-4.9,-123.9,-5.1,298).s().p("Eg6yAioMAAAhFPMB1lAAAMAAABFPg");
	this.shape_1.setTransform(376.275,221.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,754.6,445.3);


(lib.redeagle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// white_eye
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAHQgDgDgBgEQABgDADgDQAEgDADAAQAFAAADADQAEADAAADQAAAEgEADQgDADgFAAQgDAAgEgDg");
	this.shape.setTransform(250.55,138.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAHQgDgDAAgEQAAgDADgDQAEgDADAAQAFAAADADQADADAAADQAAAEgDADQgDADgFAAQgDAAgEgDg");
	this.shape_1.setTransform(255.45,137.125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({y:142.025},0).wait(3).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({y:138.525},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(5).to({_off:false},0).wait(3).to({y:138.525},0).to({_off:true},1).wait(2));

	// black_eye
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpAhQgRgNAAgUQAAgSARgOQARgNAYAAQAYAAASANQARAOAAASQAAAUgRANQgSAOgYAAQgYAAgRgOg");
	this.shape_2.setTransform(248.125,139.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpAhQgRgNAAgUQAAgSARgOQARgOAYAAQAYAAASAOQARAOAAASQAAAUgRANQgSAOgYAAQgYAAgRgOg");
	this.shape_3.setTransform(248.125,142.75);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgpAhQgRgOAAgTQAAgTARgNQARgOAYAAQAYAAASAOQARANAAATQAAATgRAOQgSANgYAAQgYAAgRgNg");
	this.shape_4.setTransform(253.025,137.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{x:248.125}}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_2,p:{x:253.025}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2,p:{x:248.125}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).wait(3).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(1));

	// beak
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#DCD96B").ss(0.1,1,1).p("AElAsQidA7hOAcQiMAzhkAAQhQAAgqg7QgVgegIgmQAAgCgBgCQgEgWAAgZQAAhqBdgtQBIgiCDAAQCTAABfBJQBGA1BFB2QgDgCgDgCQgagOgVgMQgfgRgVgLQhGghguAAQg1AAiSAtQiSAugnAAQgjAAgDAAQgJgCgSgI");
	this.shape_5.setTransform(290.35,159.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EEECB6").s().p("AkvB7QgWgegIglIADgDQABgDgFABQgEgWAAgZQAAhqBdgtQBIgiCEAAQCSAABgBJQBFA1BFB2IgGgEIgvgaIg0gcQhFghgvAAQg1AAiRAtQiTAugnAAIgmAAQgJgCgRgIQARAIAJACIAmAAQAnAACTguQCRgtA1AAQAvAABFAhIA0AcIAGALQibA7hPAcQiLAzhlAAQhQAAgpg7g");
	this.shape_6.setTransform(290.35,159.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#DCD96B").ss(0.1,1,1).p("AElAsQidA7hOAcQiMAzhkAAQhQAAgqg7QgVgegIglQAAgDgBgCQgEgWAAgZQAAhqBdgtQBIgiCDAAQCTAABfBJQBGA1BFB2QgDgCgDgBQgagPgVgMQgfgRgVgLQhGghguAAQg1AAiSAtQiSAugnAAQgjAAgDAAQgJgCgSgI");
	this.shape_7.setTransform(290.35,163.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EEECB6").s().p("AkvB7QgWgegHglIACgDQABgDgFABQgEgWAAgZQAAhqBdgtQBIgiCEAAQCSAABgBJQBFA1BFB2IgGgDIgvgbIg0gcQhFghgvAAQg1AAiRAtQiTAugnAAIgmAAQgJgCgRgIQARAIAJACIAmAAQAnAACTguQCRgtA1AAQAvAABFAhIA0AcIAGALQibA7hPAcQiLAzhlAAQhQAAgpg7g");
	this.shape_8.setTransform(290.35,163.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#DCD96B").ss(0.1,1,1).p("AElAsQidA7hNAcQiNAzhkAAQhQAAgpg7QgWgegIglQAAgDAAgCQgFgWAAgZQAAhqBdgtQBIgiCDAAQCTAABgBJQBFA1BFB2QgDgCgDgBQgagPgVgMQgegRgWgLQhGghguAAQg1AAiRAtQiTAugmAAQgkAAgDAAQgJgCgRgI");
	this.shape_9.setTransform(295.25,158.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EEECB6").s().p("AkwB7QgUgegJglIACgDQACgDgEABQgFgWAAgZQAAhqBegtQBHgiCDAAQCTAABfBJQBGA1BFB2IgGgDIgugbIg1gcQhGghguAAQg1AAiRAtQiTAugnAAIgmAAQgJgCgSgIQASAIAJACIAmAAQAnAACTguQCRgtA1AAQAuAABGAhIA1AcIAGALQidA7hNAcQiNAzhjAAQhRAAgqg7g");
	this.shape_10.setTransform(295.25,158.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10,p:{y:158.125}},{t:this.shape_9,p:{y:158.125}}]},1).to({state:[{t:this.shape_10,p:{y:158.125}},{t:this.shape_9,p:{y:158.125}}]},1).to({state:[{t:this.shape_10,p:{y:158.125}},{t:this.shape_9,p:{y:158.125}}]},1).to({state:[{t:this.shape_10,p:{y:159.525}},{t:this.shape_9,p:{y:159.525}}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	// right_wing
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#422016").ss(0.1,1,1).p("AONGBQgUhNgzj0QgqjKglhuQg2ihhPhiQhdhyiMgrQh6gmomjPQkThoiDgwQhygqgEAAQgnAAggAZQgLAIgHAJQgQATAAAYQAAB9GuC6QA3AYA6AXQBaAlBkAjQBhAiAqANQAJADAGABAk0hzQgVgCgUgDQhsgPhRgaQipg3AAhxQAAgkAagTQAYgSArAAQBCAADTAiQAPADAOACQgJgFgQgHQghgNg8gWQh1grg6gaQjghlAAhyQAAgmArgHQAAAAA+AAQAuAADCAyQBFASAuALQBTAVAHAAAk0lrQAEABAEAAQCUAZA2APQAFgDAEAEQACABABABQgFgBgHgCAi+B8QgbABgsgFQgCAAgBAAQhEgIg+gSQipgwAAhTQAAhGDWgHQAPgBAaAAQAEAAAEAAQBKABCXADAihFnQgCAAgCAAQhdAAg7gRQhVgYAAg3QAAhlCLgcQABAAAAAAQAbgFAtgFQAHgBAIgBQASgCAVgBQBHgGAkgFQAKgBAHgCAAIJ7Qg+gYg4g2QhIhFAAhKQAAgQAHgOQAJgPAEgIQABgBAAgBQADgGASgCABpLvQgFAAgFgBQgWgDgZgVQgkgegEgmQgBgNABgKQAFgVBEAHAA2FWQghAGhXAGQhGAFgZAAAC6N8QghgHgfgdQgiggAAggQAAgZAEgEQAHgHAGgFQAGgHACgDIAAAIQgEABgEABAC6N8QACgEACgEIAAAJQgCgBgCAAgANJQWQghAhhqAPQhFAKhDAAQiIAAiDg2QiahBAphd");
	this.shape_11.setTransform(76.625,76.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CC66CC").ss(0.1,1,1).p("AABgHIgBAP");
	this.shape_12.setTransform(168.475,114.3125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E11D3D").s().p("AEnQaQibhBAqhdQghgHgfgdQgiggAAggQAAgZADgEIANgNIgJAAQgXgDgZgVQgjgegEgmQgCgNACgLIABgBQAEgOAkAAIABAAIAAAAIAbACIACAAIABAAIgBAAIgCAAIgbgCIAAAAIgBAAQgkAAgEAOIgBABQg+gXg4g2QhJhFABhKQAAgQAHgOIANgXIABgCQADgGASgCQgSACgDAGIgEAAQhdAAg7gRQhWgYAAg3QAAhlCMgcIABAAQAagFAugFQgcABgsgFIgCAAQhEgIg/gSQiogwAAhTQAAhGDVgHIAqgBIgpgFQhsgPhRgaQiqg3AAhxQAAgkAagTQAZgSArAAQBCAADTAiIAdAFIgZgMQgigNg7gWQh1grg7gaQjfhlAAhyQAAgmAqgHIA/AAQAuAADCAyIBzAdQBaAlBkAjQBhAiAqANIAPAEIgPgEQgqgNhhgiQhkgjhaglQBTAVAHAAQgHAAhTgVQg6gXg3gYQmui6gBh9QABgYAQgTQAHgJALgIQAfgZAoAAQAEAAByAqIGWCYQIlDPB7AmQCLArBeByQBPBiA1ChQAlBuAqDKQAzD0AVBNIAIABIhBKUIgLAAQghAhhqAPQhFAKhEAAQiHAAiDg2gAC2N8IADABIAAgJIgDAIgABkLuIAJgBIAAgIIgJAJIAAAAgAhGFiQhHAFgYAAQAYAABHgFQBXgGAggGQggAGhXAGgAghBsQglAFhGAGIgnADIgPACIAPgCIAngDQBGgGAlgFIARgDIgRADgAhPhvQiXgDhKgBIgFAAIgDAAIADAAIAFAAQBKABCXADgAhmlCIALADIgCgCQgCgCgDAAIgEABgAkwlqQCTAZA3APQg3gPiTgZIgIgBIAIABgAlxqUIAAAAg");
	this.shape_13.setTransform(77.05,76.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AiannQhchckViNQgFgCgEgDQj1h8gpAAQgyAAgOAZQgIAPAAA4QAABuC1B9QAVAOAWAOQBGAUBpAwQAIADAJAEQBkAvB/BDANuIhQiBlxhpjEQikkzj2jbQjdjDj0i3QmwlDiaAAQgdAAgjAhQgiAfAwA2QAwA3BaBnQBBBLCIClAN+IkIADgTAn1mNQAEACAEACIgIAAIAAgEQhbguhKgvQgZgHgUgDQgUgEgQAAQgqAAghAaQgiAbAAAlQAABECjBrQAmAZAoAWQhVgYgZAAQgqAAgWAaQgRAUAAAbQAABhC5BgQAyAaBfApQBCAcAaAOQAFACADADQgggEgtgGQgPgBgOgCQhqgMgbAAQgzAAgmASQgrAUAAAiQAABbDoAmQBYAOBgAEQAAgEAAgDApnjAQAhAKAsAOQChAzA/AlAoNiPQgLgFgKgFQgjgTgigUAl4CkQABAAABAAQA2AGAOADAlLFmQAAAAAAABQAKB6A4BXQA+BiBkAPQglAqBCA6QBAA5AygNQgRAXAAAtQAABJAgAuQAiAxA9ABQAmBeCaA0QB4AoCAAAQA5AAA1gJQA8gJAhgQAlLFmQAlABAmAAAMcS+IgBAJ");
	this.shape_14.setTransform(81.4487,63.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E11D3D").s().p("AFXS4Qiag0gmheQg9gBgigxQggguAAhJQAAgtARgXQgyANhAg5QhCg6AlgqQhkgPg+hiQg3hXgKh6IgBgBQAlABAmAAQgmAAglgBIAAgHIAAAHQhggEhYgOQjogmAAhbQAAgiArgUQAmgSAzAAQAbAABqAMIAdADIBNAJIADABQA1AGAOADQgOgDg1gGIgDgBIgIgEQgZgOhDgcQhfgpgygaQi5hgAAhhQAAgbARgUQAWgaAqAAQAaAABUAZQgogXgmgZQijhrAAhEQAAglAigbQAhgaAqAAQAQAAAVAEQAUADAYAHIgrgcQi1h9AAhuQAAg4AIgPQAOgZAyAAQApAAD2B9IAIAEIgFgLQiIilhBhLIiKidQgwg3AigfIBAghQCaAAGwFDQD0C3DdDDQD2DbCkEzQBpDECBFxIAQACIhhKbIgEAAQghAQg8AJQg1AJg5AAQiAAAh4gogAk5hQQg/glihgzQChAzA/AlgAoMiPIgUgKIAUAKgAogiZIAHgPIhNgXQAiATAkATgAj2ktQh/hDhkgvIgRgIQhpgvhGgUQBKAvBbAtIAAAFIAIAAIATgWQBkAvB/BDgAiZnnQhchckViNQEVCNBcBcg");
	this.shape_15.setTransform(81.3112,63.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AjUocQgSgVgohDQgjg6gZgnQgUghgOgVQiIjKhgAAQgXAAgTArQgSAmAAAhQAACHCYDaQA8BWA+BBALjGWQgvgmgagsQgTgggQg5QgThDgMgaQgZg2gugvQjGjFiNimQgagehDiOQhVi4guhjQi0l9hAAAQhiAAAACTQAACABFCQQATAoAoBOQAVAsAPAlQADAEAAAEQgBgBAAgCQgBgCgBgDALmFsIgDAqQAFAEAFAEAjRoUQAGARAFAQIAAAHQAAgHgLghgAmAloQg1gQh0hCQiDhKgKAAQgRAAgUAiQgRAeAAAQQAAB5C1CNQBBAyBGAmQArAYAXAIQAJADAGAAAlwgzQhAAAh3gmQhsgmgFAAQgeAAgMASQgIAMAAAeQAABQBzA8QAcAOA2AaQAHgCAHgCAoFBxQAEACAFADQAwAZARAZAoFBxQgeAJgXAUQgjAcAAApQAAA8A1AbQARAKBKATQAAgDABgDAnNFHQgUCCA7BWQA6BUBzAQIAABMQAQAeApAOQAaAIA9AIQACBAA7BGQA1BBBbA5QDGB8C4AAQBDAAA2gUQA+gYAXgtAnNFHQAEABAFAB");
	this.shape_16.setTransform(94.325,78.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E11D3D").s().p("ABpQLQhbg5g1hBQg7hGgChBQg9gHgagJQgpgNgQgeIAAhMQhzgQg6hUQg7hWAUiCQhKgTgRgJQg1gcAAg8QAAgpAjgdQAXgTAegJIhSgoQhzg7AAhRQAAgdAIgOQAMgRAeAAQAFAABsAnQB3AlBAABIACgEQgXgIgrgXQhGgnhBgyQi1iNAAh5QAAgQARgeQAUgiARAAQAKAACDBKQB0BCA1AQIACgDQg+hAg8hXQiYjZAAiIQAAghASgmIAqgrQBgAACIDLIAiA1IA8BiQAoBCASAVIACAFIABADQAAgEgDgEQgPglgVgsQgohOgTgoQhFiQAAiAQAAiTBiAAQBAAAC0F9ICDEcQBDCNAaAfQCNClDGDFQAuAuAZA2QAMAcATBCQAQA5ATAgQAaAsAvAmIgvKYIgEAAQgXAtg+AYQg2AUhDAAQi4AAjGh8gAnIFHIAJACIgJgCIABgHIgBAHIAAAAgAoABxIAJAFQAwAZARAZQgRgZgwgZIgJgFIAOgEIgOAEIAAAAgAlagyQgGgBgJgDQAJADAGABgAjBnsIAAgHIgLghQALAhAAAHg");
	this.shape_17.setTransform(93.825,78.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AM2mRIAAgIIgKADQAFADAFACgAI+ChQAHgGACgDQA8hcAthrQBYjwAqhoQACgFACgFAiGjOQAMgmALhYQAMhlAGgbAiGjOQgCgBgCAAQgqAAgWAjQgRAbAAAjQAAAtBhCZQBOB8AsA2QgbgQgvgyQgwg2gdggIgBAAQgFgGgFgFQh1h7hIAAQgiAAgMAYQgIASAAAqQAAA8A0BDQAIAJAJALQAgAkA5A0Qgngahbg+QhzhPgtAAQgcAAgTARQgRAPAAAXQAAAoBPBBQA/A1AUAGIAAAJIgrAAQhAgcg4gWQhugsgpAAQgvAAgMASQgJAMAAAvQAAB3EtAAQD5AACjhRQApgUBEgkQAJgEAZgFQAZgGAxgBQAygCBQAJQBQAJAdABQBDAAA7gzQALgKAKgUQAOgdA6gyQADgDAEgDQiwg2gjgUQhhg6gmhbQgPglgNhEQgRhagEgRQgeh1hRAAQgoAAgUAhQgQAdAAAzQAAA5BPDGQAoBjAqBbIAAAIQgfgZgphDQgCgDguhRQgKgTgOgYQhWicg5gFgAI+CgQAAAAAAABAI3CmQADgDAEgCAj3ErQAXAQAFACIgJAAQgKgJgJgJg");
	this.shape_18.setTransform(89.65,204.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E11D3D").s().p("AkFEDIgwhUIgYgrQhXibg5gFQAMgnALhYQAMhlAGgbQAlgTCXgYQCXgZBNAAQBbAADIA6QCYArAtAWIAKAFIgEAKQgpBohYDuQgtBsg9BdQgCADgHAGIAAgCQiwg2gigUQhhg6glhbQgPglgNhFQgRhZgEgRQgeh1hRAAQgoAAgUAiQgRAdAAAzQAAA4BQDGQAoBjAqBbIAAAJQgfgZgphEg");
	this.shape_19.setTransform(123.975,186.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AC1A2E").s().p("Aq5E0QAAguAJgMQAMgSAvAAQApAABuAsQA4AWBAAbIArAAIAAgIQgUgHg/g0QhPhBAAgoQAAgXARgPQATgSAcABQAtAABzBPICCBYQg5g0gggkIgRgVQg0hCAAg9QAAgpAIgRQAMgaAiABQBIAAB1B7IAKALIABAAIBMBVQAvAzAcAQQgtg3hOh7QhgiZAAgtQAAgjARgbQAWgiAqgBIAEABQA4AFBXCcIAYArIAwBTQApBEAfAZIAAgIQgqhcgohiQhQjHAAg4QAAgzARgdQAUgiAoAAQBRABAeB0QAEASARBZQANBFAPAlQAlBbBiA6QAiAUCxA2IgIAGQg5AygOAdQgKAUgLAKQg7AyhEAAQgcAAhQgJQhQgJgyABQgyACgYAGQgZAFgJAEIhuA4QiiBQj5AAQktAAAAh3gAhoEbIAJAAIgcgSIATASg");
	this.shape_20.setTransform(77.2625,207.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AmUHIQgDgGgYhiQgRhGAAg2QAAhGBImXQBImZAAhGQAAgZgDgXQgEgigJgKIgIAAAkzszIgNgBADEKjQgDgBgDgCQiUhchCjKQgehpgNgkQgUg8gaAAQggAAgXBNQgSA7AAAnQAAAqAKA1QAJA0ATA/QALAkALAcQgbgagcg1Qggg+gQgeQg6hshEAAQgdAAgNAjQgJAWAAAfQAAAKACALAImsTQAEEJgsEzQgIA9hPHCQgoDoiyCNQgFADgEADQgIAHgIAFQi5CGj5AAQhnAAhSgiQhugtAAhXQAAhHA2AAQApAAAlAiQA1AyAiARQgQgpgPgoQgkhhgHgzAlKKtQAJAVAJAVAh+JyQAaBEAZAQ");
	this.shape_21.setTransform(109.1668,237.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AC1A2E").s().p("AkDEgQhugtAAhWQAAhIA2AAQApAAAlAiQA1AyAiARIgfhRQgkhhgHgyIgCgVQAAgfAJgXQANgiAdAAQBEAAA6BsIAwBbQAbA1AbAaQgLgcgLglQgTg+gJgzQgJg1AAgqQAAgnARg7QAXhNAgAAQAaAAAUA7QANAlAeBqQBDDICUBcIgKAPQi6CGj4AAQhnAAhSgigAiEDlIgSgrIASArgABoDUQgZgRgahEQAaBEAZARg");
	this.shape_22.setTransform(91.175,287.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E11D3D").s().p("ACMLoQiThchEjJQgehqgMgkQgUg8gbAAQggAAgXBNQgRA7AAAnQAAArAJA0QAKA1ATA+QALAlALAcQgbgbgdg1IgvhcQg7hshDAAQgeAAgNAjQgIAWAAAgIABAVQgCgHgYhiQgShGAAg2QAAhGBJmXQBImYAAhHQAAgZgDgXIAAgrINYAYIAAAJQAEEJgrEyQgJA+hOHBQgpDoiyCNIgIAHIgGgEg");
	this.shape_23.setTransform(114.2168,230.6625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AG5uaQAAADAAAEQAHBMBZGSQBaGdAAA5QAACCgXCdQgZCygtCRQh1F1jEAAQg8AAgZgzQgSgiAAg3QAAgUAKgoQADgOAFgPQARg/AihjQBDjFAAhrQAAhTgZgaAl0v1IgPgCAmNvvQAKAIAEAUQADANAAANQAABwhZFHQhZFGAABjQAABUAnB2QAmB4AAAUQAAAjgXAlQgNAVgkAqQhJBVAAA8QAAAwARAUQAVAZA4AAQBXAABeh3QANgPAXgjQAXgjAhg2AgeInQgYA2gcAwQgKARgMAQQhcCHhsAAQg6AAgagZQgagZAAg3QAAhNAlhJQAKgVA3hUQAFgIAFgHQAbgqAQgkAjsFKQgLAUgMASQAMgbAGgXQAVhQgYhfAgeInQAniQAAiEQAAgRgGgeQgEgfgGgTACIMTIgJAAQABANgEAPQgKAqgqAwQg9BFhBAAQgnAAgYgZQgagaAAgrQAAgaAYg9QAhhRATgzQAVg4AQg2");
	this.shape_24.setTransform(129.25,246.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E11D3D").s().p("ACIPEQgSgjABg3QAAgTAJgoIAIgeQARg+AhhjQBEjFABhrQgBhUgZgaQAZAaABBUQgBBrhEDFQghBjgRA+IgJAAQABAOgEAOQgJArgrAwQg9BEhBAAQgnAAgZgZQgZgaAAgqQAAgaAYg+QAhhQATgzQAWg4APg3QgXA3gdAvIgWAiQhcCHhrgBQg7AAgagZQgagYAAg4QAAhMAlhJQAJgVA4hVIAKgOQAbgqARgkIg5BZQgXAigMAQQhfB3hXAAQg4AAgUgZQgRgUgBgxQAAg7BJhVQAkgqAOgVQAWglAAgjQAAgUgmh3Qgnh3ABhUQAAhjBYlGQBZlHAAhwIAHg8IMnBjIAHgCQAHBNBYGSQBbGdgBA5QAACCgVCcQgZCzguCRQh1F1jFAAQg7AAgZgzgAgeIlQAniPAAiFQAAgQgGgfQgDgfgHgSQAHASADAfQAGAfAAAQQAACFgnCPgAkCFvIAWgmIgWAmQALgbAGgYQAKglAAgoQAAgugNgyQANAyAAAuQAAAogKAlQgGAYgLAbIAAAAgAkCFvIAAAAg");
	this.shape_25.setTransform(129.25,246.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AnuHkQgHARgJAUQgGAMgGAMQgxBigjAAQgqAAgYhVQgSg8AAgqQAAg1A/l3QA7lcAeiSQArjPBjiyQA4hmBdh2AKzxcQhpHMhTI7QgMBTgIJEQgVIbhOAAQhuAAgzkpQgUh2gIiIQgGhbAAhkQAAiKAiipQAkixAGhNQABgEAAgEAgdMnQgFgigEglQgRikAAkiQAAidAUiGQASh/ApiQQACgIADgIAkLKkQAAACAAACQgHAigLA5QgdBtgyAAQhSAAggiYQgRhUAAh0QAAgUABgYAneG3QgFASgLAbQAIimA8lvQA0k8AeiEAgdMnQgDAkgGAlQgYCHg9AAQheAAghiHQgRhHAAiBQAAgCAAgCQABiWAulHQAvlLAAigQAAhJgagZAgbLgQABAigDAlAC9I2QAABdAFChQABA7ADBEQAABEgRArQgUAygoAAQheAAgsjnQgHghgFglAkCJ6QgCAJgHAh");
	this.shape_26.setTransform(101.025,231.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E11D3D").s().p("ADfM0QgUh2gIiIQgGhbAAhjQAAiKAiipQAkiyAGhNIABgIIgBAIQgGBNgkCyQgiCpAACKQAABjAGBbIgGAAQAABdAFChIAEB/QAABEgRArQgUAygoAAQheAAgsjnQgHghgFglQADgkgBgjIgLAAQgRikAAkiQAAidAUiGQASh+ApiRIAFgQIgFAQQgpCRgSB+QgUCGAACdQAAEiARCkIAJBHQgDAkgGAmQgYCGg9AAQheAAghiGQgRhIAAiAIAAgFIAAAEIgSBcQgdBsgyAAQhSAAggiYQgRhUAAhzIABgsIgQAkIgMAZQgxBhgjAAQgqAAgYhVQgSg7AAgrQAAg2A/l2QA7lbAeiTQArjPBjiyQA4hlBdh3QBAAjBjgBIIygIQCSgCBDhFQhpHNhTI6QgMBTgIJEQgVIbhOAAQhuAAgzkpgAkLKkIAJgpIgJApgAjcDHQguFHgBCWQABiWAulHQAvlLAAigQAAhIgagZQAaAZAABIQAACggvFLgAnuHlQALgcAFgSQgFASgLAcQAIioA8luQA0k7AeiFQgeCFg0E7Qg8FugICoIAAAAgAnuHlIAAAAg");
	this.shape_27.setTransform(101.025,231.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AL0zBQgLg7hAg0QhIg8hHAAQi/AAjSA1QjYA2iyBiQjCBqhtCJQh4CZAACuQAAAcAQATQAOARAQAAQAEAAAEAAQASgCAUgHQADgCACAAQAFgFAFgEQBXhHA6hMQBUhtATgWQB/iSCQAEAL0zBQAJgBAKAAALLpQQgTgVgEgcQgCgMAAgoQAAghAijZQAijZAAggQAAgNgCgMALepPIgOAIAopj0QgEAHgDAIAohj0IgIAAAoyjgIACgFQADgIADgHIABAAQAfhJATgdQBVh+BQhRQB7h8BlgHAoyjgQgOAhgPAnQg7CAg9AAQg/AAAAiAQAAh/A3hvQASglAng+QAVgjAPgZAjwi5QgDAGgEAIQgSAfgpBIQgvBQgaA0QhRCnAACGQAAB8gUCDQgEAUgDAUQgPBVgVA4QgnBpg8AAQg6AAgRhUQgJgqAAhqQAAjPA1k0QAijDAhhyQAMgrAMgfAjeGiQAFAmAJCMQABAMABALQAPCxAbCGQBcHLDcAAQAuAAAWgyQARgmAAg4QAAgqgXhXQgfh0gShMQhIkvAAlEQAAjYAljyQAJg3AKg0QAAgCAAgBQAnjRA9ivQBaj+B7iOQCFiaClgMAjoGXIAJAAQAAAEABAHQAEgTAFgTQAiiJAkhDAnVJZQgCAJgBAMQgFAiAAA/QAAAdAJBHQANBeAVBPQA9DsBnAAQAiAAAVg7QARgvAAgqQAAgwgNhgQgFgmgHguQgaihAAhEQAAgCAAgCQAAAAAAgBQAAgLABgMQAEhLAWhm");
	this.shape_28.setTransform(103.475,166.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AC1A2E").s().p("AjNBZQBZj9B6iOQCFiaClgMQACAMAAANQAAAggiDZQgiDYAAAhQAAAoACAMQAFAcATAVIAEAJIo9E4QAnjRA9ivg");
	this.shape_29.setTransform(148.625,92.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E11D3D").s().p("AiaOiQgbiGgQixIgCgXQgJiMgEgmIAJgmQAiiJAkhDQgkBDgiCJIgJAmIgCgLIgIAAIAIAAIACALQgXBmgDBLIgBAXIAAABIAAAEQAABEAZChIANBUQANBgAAAwQAAAqgRAvQgWA7ghAAQhnAAg+jsQgVhPgMheQgKhHAAgdQAAg/AFgiIAEgVIgEAVIgIgCQAUiDAAh8QAAiGBSinQAag0AuhQIA7hnIAHgOIgHAOIg7BnQguBQgaA0QhSCnAACGQAAB8gUCDIgHAoQgPBVgUA4QgoBpg7AAQg6AAgShUQgIgqAAhqQAAjPA1k0QAhjDAhhyQAMgrAMgfIgdBIQg6CAg9AAQg/AAAAiAQAAh/A2hvQATglAmg+IAlg8QASgCAUgHIAFgCIAKgJQBXhHA6hMQBThtAUgWIAGgHQB4iHCIAAIABAAIAAAAIAHAAIgHAAIAAAAIgBAAQiIAAh4CHIgGAHQgUAWhTBtQg6BMhXBHIgKAJIgFACQgUAHgSACIgJAAQgQAAgOgRQgQgTAAgcQAAiuB5iZQBsiJDChqQCyhiDZg2QDRg1C/AAQBHAABJA8QA/A0ALA7QilAMiFCaQh7COhZD+Qg9CvgnDRIgBADQgKA0gIA3QglDyAADYQAAFEBIEvQARBMAgB0QAWBXAAAqQAAA4gQAmIhFAyQjcAAhbnLgAomjlIgDAFIADgFIAGgPIAIAAIgIAAQAghJATgdQBUh+BRhRQB7h8BlgHQhlAHh7B8QhRBRhUB+QgTAdggBJIAAAAIgGAPgAjUGiIAAAAgAjUGiIAAAAg");
	this.shape_30.setTransform(102.525,166.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AoqnvQgSARgVATQigCWgWAAQgyAAAAhHQAAh3Bhh1QBVhnCUhZQCEhQCVgxQCPgvBjAAQDxAACCBxQBoBbA7DCQAiBzA4EFQA6DkBbCRQADAFADAFAM5NoIAAAEIABAaAMqCtIgBgYAiMq6Qh9C9h1CbQgNATgOARQhQBphABIQiKCZhDAAQgpAAAAg7QAAhGB1i+QA9hjAjgxQAOgUAKgMAmbp/QgBACgCADQgkAohoBjIAAAIIgIAAQAEgFAEgDAl5lfQgKAUgKATQg2Bpg1BsQh/D9AAA9QAAARAJAQQAPAaAgAAQAfAABgh2QAggnBIhfQAvg/BChYQFknjC/i0AlOAdQAVAcATA1QALAdAVA6QArBkBYALQgDB5A9BRQAYAhAeASQgBgEgBgDAgTIxQAuAdA9gLADDNvQAyAuAwAYQBKAkBeAAQBYAAB6gkQB0giAmgnADDNvQAXADAXgPABQLKQABBDAyA6QAgAlAgADABQLKQAgAYAhAKAgTIxQAMBEA2A4QAQAQARAN");
	this.shape_31.setTransform(86.625,82.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E11D3D").s().p("AElO1QgwgYgyguIABAAIAGABIAAAAIAAAAQARAAARgKIABAAIABgBIABAAIACgCIgCACIgBAAIgBABIgBAAQgRAKgRAAIAAAAIAAAAIgGgBIgBAAQgggDggglQgyg6gBhDQAgAYAiAKQgigKgggYQgQgNgRgQQg2g4gMhEIABAAIADACIAAAAQAgATAnAAIAAAAIAAAAQAQAAAQgDQgQADgQAAIAAAAIAAAAQgnAAgggTIAAAAIgDgCIgBAAIgCgHIACAHQgdgSgZghQg9hRADh5QhYgLgqhkIghhXQgTg1gVgcIgKgHIBxiXQFlnjC/i0Qi/C0llHjIhxCXQhHBfggAnQhgB2ggAAQggAAgOgaQgJgQAAgRQAAg9B+j9QA1hsA3hpIAUgnIgGgDQB1ibB9i9Qh9C9h1CbIgbAkQhQBphABIQiKCZhDAAIgpg7QAAhGB1i+QA9hjAjgxQAOgUAKgMIAIAAIAAgIQBohjAkgoIAEgFIgEAFQgkAohoBjIgmAkQigCWgXAAQgyAAAAhHQABh3Bhh1QBUhnCUhZQCEhQCVgxQCPgvBkAAQDwAACCBxQBoBbA7DCQAiBzA4EFQA7DkBbCRIAFAKIADAAIAPK7IAAAEQglAnh1AiQh5AkhZAAQheAAhKgkg");
	this.shape_32.setTransform(86.6,82.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#3A1C11").ss(0.1,1,1).p("ANuIhQiBlxhpjEQikkzj2jbQjdjDj0i3QmwlDiaAAQgdAAgjAhQgiAfAwA2QAwA3BaBnQBBBLCIClAqanqQgWgOgVgOQi1h9AAhuQAAg4AIgPQAOgZAyAAQApAAD1B8QAEADAFACQEVCNBcBcAqanqQgZgHgUgDQgUgEgQAAQgqAAghAaQgiAbAAAlQAABECjBrQAmAZAoAWQhVgYgZAAQgqAAgWAaQgRAUAAAbQAABhC5BgQAyAaBfApQBCAcAaAOQAFACADADQgggEgtgGQgPgBgOgCQhqgMgbAAQgzAAgmASQgrAUAAAiQAABbDoAmQBYAOBgAEQAAgEAAgDAN+IkIADgTAn1mNQAEACAEACIgIAAIAAgEQhbguhKgvQBGAUBpAwQAIADAJAEQBkAvB/BDApnjAQAhAKAsAOQChAzA/AlAoNiPQgLgFgKgFQgjgTgigUAl4CkQABAAABAAQA2AGAOADAlLFmQAlABAmAAAlLFmQAAAAAAABQAKB6A4BXQA+BiBkAPQglAqBCA6QBAA5AygNQgRAXAAAtQAABJAgAuQAiAxA9ABQAmBeCaA0QB4AoCAAAQA5AAA1gJQA8gJAhgQAMcS+IgBAJ");
	this.shape_33.setTransform(81.4487,63.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AOIGBQgUhNgzj0QgqjKglhuQg2ihhPhiQhdhyiMgrQh6gmomjPQkThoiDgwQhygqgEAAQgnAAggAZQgLAIgHAJQgQATAAAYQAAB9GuC6QA3AYA6AXQBaAlBkAjQBhAiAqANQAJADAGABAORGCIABgRAk5hzQgVgCgUgDQhsgPhRgaQipg3AAhxQAAgkAagTQAYgSArAAQBCAADTAiQAPADAOACQgJgFgQgHQghgNg8gWQh1grg6gaQjghlAAhyQAAgmArgHQAAAAA+AAQAuAADCAyQBFASAuALQBTAVAHAAAk5lrQAEABAEAAQCUAZA2APQAFgDAEAEQACABABABQgFgBgHgCAjDB8QgbABgsgFQgCAAgBAAQhEgIg+gSQipgwAAhTQAAhGDWgHQAPgBAaAAQAEAAAEAAQBKABCXADAimFnQgCAAgCAAQhdAAg7gRQhVgYAAg3QAAhlCLgcQABAAAAAAQAbgFAtgFQAHgBAIgBQASgCAVgBQBHgGAkgFQAKgBAHgCAADJ7Qg+gYg4g2QhIhFAAhKQAAgQAHgOQAJgPAEgIQABgBAAgBABkLvQgFAAgFgBQgWgDgZgVQgkgegEgmQgBgNABgKQAFgVBEAHAAxFWQghAGhXAGQhGAFgZAAQADgGASgCAC1N8QghgHgfgdQgiggAAggQAAgZAEgEQAHgHAGgFQAGgHACgDIAAAIQgEABgEABAC1N8QACgEACgEIAAAJQgCgBgCAAgANEQWQghAhhqAPQhFAKhDAAQiIAAiDg2QiahBAphd");
	this.shape_34.setTransform(77.125,76.575);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E11D3D").s().p("AEnQaQibhBAqhdQghgHgfgdQgiggAAggQAAgZADgEIANgNIgJAAQgXgDgZgVQgjgegEgmQgCgNACgLIABgBQAEgOAkAAIABAAIAAAAIAbACIACAAIABAAIgBAAIgCAAIgbgCIAAAAIgBAAQgkAAgEAOIgBABQg+gXg4g2QhJhFABhKQAAgQAHgOIANgXIABgCIgEAAQhdAAg7gRQhWgYAAg3QAAhlCMgcIABAAQAagFAugFQgcABgsgFIgCAAQhEgIg/gSQiogwAAhTQAAhGDVgHIAqgBIgpgFQhsgPhRgaQiqg3AAhxQAAgkAagTQAZgSArAAQBCAADTAiIAdAFIgZgMQgigNg7gWQh1grg7gaQjfhlAAhyQAAgmAqgHIA/AAQAuAADCAyIBzAdQBaAlBkAjQBhAiAqANIAPAEIgPgEQgqgNhhgiQhkgjhaglQBTAVAHAAQgHAAhTgVQg6gXg3gYQmui6gBh9QABgYAQgTQAHgJALgIQAfgZAoAAQAEAAByAqIGWCYQIlDPB7AmQCLArBeByQBPBiA1ChQAlBuAqDKQAzD0AVBNIAIABIhBKUIgLAAQghAhhqAPQhFAKhEAAQiHAAiDg2gAC2N8IADABIAAgJIgDAIgABkLuIAJgBIAAgIIgJAJIAAAAgAilFnQAYAABHgFQBXgGAggGQggAGhXAGQhHAFgYAAQADgGASgCQgSACgDAGIAAAAgAghBsQglAFhGAGIgnADIgPACIAPgCIAngDQBGgGAlgFIARgDIgRADgAhPhvQiXgDhKgBIgFAAIgDAAIADAAIAFAAQBKABCXADgAhmlCIALADIgCgCQgCgCgDAAIgEABgAkwlqQCTAZA3APQg3gPiTgZIgIgBIAIABgAilFnIAAAAgAlxqUIAAAAg");
	this.shape_35.setTransform(77.05,76.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_15},{t:this.shape_33}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).wait(1));

	// right_leg
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#412114").ss(0.1,1,1).p("AC1glQAAAAAAABQgRBFgtBBQg8BWhGAAQhDAAgzg8Qgzg8AAhTQAAgTAWhJQAOgyAFgW");
	this.shape_36.setTransform(91.7,202.6125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AighBQACgKAAgEACgBQQABgDAAgD");
	this.shape_37.setTransform(93.7875,190.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E11D3D").s().p("AiBB8Qgzg8AAhTQAAgTAWhJQAOgyAFgWIALADIE1CPIAAABQgRBFgtBBQg9BWhFAAQhDAAgzg8g");
	this.shape_38.setTransform(91.7,202.6125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AC2gkQgBADgBADQAAAAAAABQgQBFguBBQg8BWhGAAQhDAAgzg8Qgzg8AAhTQAAgTAWhJQAOgyAFgWQACgKAAgE");
	this.shape_39.setTransform(91.775,205.425);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E11D3D").s().p("AiBB8Qgzg8AAhTQAAgTAWhJQAOgyAFgWIALADIE1CPIAAABQgQBFguBBQg9BWhFAAQhDAAgzg8g");
	this.shape_40.setTransform(91.7,206.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AihhBQACgKAAgEACgBQQAAgDABgD");
	this.shape_41.setTransform(93.8,194.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#DD6900").ss(0.1,1,1).p("AC1glQAAAAAAABQgQBFguBBQg8BWhGAAQhDAAgzg8Qgzg8AAhTQAAgTAWhJQAOgyAFgW");
	this.shape_42.setTransform(91.7,206.125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E11D3D").s().p("AiBB8Qgzg8AAhTQAAgTAVhJQAPgyAEgWIAMADIE1CPIAAABQgRBFguBBQg7BWhGAAQhDAAgzg8g");
	this.shape_43.setTransform(96.6,201.225);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AAAAHQABgJAAgE");
	this.shape_44.setTransform(82.65,182.15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AAAAHQABgJAAgE");
	this.shape_45.setTransform(82.65,183.55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AC2gkQgBADgBADQAAAAAAAAQgQBGguBBQg8BWhGAAQhDAAgzg8Qgzg8AAhTQAAgTAWhJQAOgyAFgWQACgKAAgE");
	this.shape_46.setTransform(91.7625,201.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]}).to({state:[{t:this.shape_40},{t:this.shape_39,p:{x:91.775,y:205.425}}]},1).to({state:[{t:this.shape_40},{t:this.shape_39,p:{x:91.775,y:205.425}}]},1).to({state:[{t:this.shape_40},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_40},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_43,p:{y:201.225}},{t:this.shape_39,p:{x:96.675,y:200.525}}]},1).to({state:[{t:this.shape_43,p:{y:201.225}},{t:this.shape_39,p:{x:96.675,y:200.525}}]},1).to({state:[{t:this.shape_43,p:{y:201.225}},{t:this.shape_44}]},1).to({state:[{t:this.shape_43,p:{y:202.625}},{t:this.shape_45}]},1).to({state:[{t:this.shape_40},{t:this.shape_39,p:{x:91.775,y:205.425}}]},1).to({state:[{t:this.shape_38},{t:this.shape_46}]},1).wait(1));

	// right_foot
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgDADQgCABAFAAQABBOgoA0QgoA2hEAAQgLAAgTgEQgSgEgHAAQAFgKATgOQAjgaACgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_47.setTransform(59.75,220.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgNQAAABACACQADADACAFQAAgEgCgDQgFgQAAgPIAAAOAARAhIAAAIIghAAAAAAYQgFgRgEgJ");
	this.shape_48.setTransform(76.7,210.075);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#563A07").s().p("AhtCDQgRgEgJAAQAGgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQAQAAAUAFQAVAGAGAGQBEgRAiAAIAIAAIAAAMIAAA4IgqAAQgLAAgMAEQgMAEgHAAQAAAFgDADQgBAAAAAAQAAAAABABQAAAAABAAQABAAABAAQABBOgoA0QgoA2hEAAQgLAAgTgEg");
	this.shape_49.setTransform(59.75,220.925);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQACADAAAEQAEAJAFARAgQgNQAAABACACQADADACAFAARAhIAAAIIghAA");
	this.shape_50.setTransform(76.7,213.575);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AAVAdIABAIIghAEAgTgaIgCgOQACAPAHAQQACADABADAgSgNIAAAAQAAABADACQADADADAEQAFAJAHAQ");
	this.shape_51.setTransform(81.125,213.125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#412C05").ss(0.1,1,1).p("ACYhRIgqAGQgLABgLAGQgLAGgIABQAAAEgCADQgBACAEgBQALBNghA5QghA7hDAJQgLABgTgCQgSgCgIABQAEgKARgQQAfgfADgCQAqgugGgtQgEgdgzgSQgugPghAGQALgRArgYQArgXAagDQAQgCAUADQAWADAGAFQBCgaAhgEIAJgBIABAM");
	this.shape_52.setTransform(64.725,225.3821);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#563A07").s().p("AhSCUQgSgCgIABQAEgKARgQIAighQAqgugGgtQgEgdgzgSQgugPghAGQALgRArgYQArgXAagDQAQgCAUADQAWADAGAFQBCgaAhgEIAJgBIABAMIAAAAIAHA3IgqAGQgLABgLAGQgLAGgIABQAAAEgCADQgBABABAAQAAAAAAAAQAAAAABAAQABAAABAAQALBNghA5QghA7hDAJIgLAAIgTgBg");
	this.shape_53.setTransform(64.725,225.3821);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQACADAAAEQgCgFgDgDQgCgCAAgBAARAhIAAAI");
	this.shape_54.setTransform(76.7,213.575);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AARAhIAAAIAgQgaIAAgOQABAPAFAQQABADABAEQgDgFgCgDQgDgCAAgB");
	this.shape_55.setTransform(81.6,208.675);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgEADQgBABAFAAQABBOgoA0QgoA2hEAAQgMAAgSgEQgSgEgIAAQAGgKATgOQAigaADgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQAQAAAUAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_56.setTransform(64.65,219.525);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#563A07").s().p("AhsCDQgTgEgHAAQAFgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgiACQANgQAtgSQAugRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAMIAAA4IgrAAQgLAAgLAEQgMAEgJAAQAAAFgDADQAAAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQACBOgoA0QgoA2hEAAQgLAAgSgEg");
	this.shape_57.setTransform(64.65,219.525);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgDADQgBABAEAAQABBOgoA0QgoA2hEAAQgLAAgSgEQgTgEgHAAQAFgKATgOQAjgaACgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_58.setTransform(69.55,214.625);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#563A07").s().p("AhtCDQgRgEgJAAQAGgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAIAAIAAAMIAAA4IgqAAQgLAAgMAEQgMAEgHAAQAAAFgEADQAAAAAAAAQAAAAABABQAAAAABAAQAAAAACAAQABBOgoA0QgoA2hEAAQgMAAgSgEg");
	this.shape_59.setTransform(69.55,214.625);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgDADQgCABAFAAQABBOgoA0QgoA2hEAAQgMAAgSgEQgSgEgIAAQAGgKATgOQAigaADgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_60.setTransform(74.45,209.725);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQABADABAEQgCgFgDgDQgCgCAAgBAARAhIAAAI");
	this.shape_61.setTransform(91.4,198.875);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#563A07").s().p("AhsCDQgTgEgHAAQAFgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgiACQANgQAtgSQAugRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAMIAAA4IgrAAQgLAAgMAEQgLAEgJAAQAAAFgCADQgBAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQACBOgoA0QgoA2hEAAQgMAAgRgEg");
	this.shape_62.setTransform(74.45,209.725);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQABAPAFAQQABADAAAEQgCgFgDgDQgCgCAAgBAARAhIAAAI");
	this.shape_63.setTransform(96.3,195.375);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgMAEgIAAQAAAFgDADQgBABAEAAQABBOgoA0QgoA2hEAAQgLAAgSgEQgTgEgHAAQAFgKATgOQAjgaACgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_64.setTransform(79.35,206.225);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#563A07").s().p("AhsCDQgSgEgJAAQAGgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAIAAIAAAMIAAA4IgqAAQgLAAgLAEQgNAEgHAAQAAAFgEADQAAAAAAAAQAAAAABABQAAAAABAAQABAAABAAQABBOgoA0QgoA2hEAAQgMAAgRgEg");
	this.shape_65.setTransform(79.35,206.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49,p:{y:220.925}},{t:this.shape_48},{t:this.shape_47,p:{y:220.925}}]}).to({state:[{t:this.shape_49,p:{y:224.425}},{t:this.shape_47,p:{y:224.425}},{t:this.shape_50,p:{y:213.575}}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_49,p:{y:224.425}},{t:this.shape_47,p:{y:224.425}},{t:this.shape_54,p:{x:76.7,y:213.575}}]},1).to({state:[{t:this.shape_49,p:{y:224.425}},{t:this.shape_47,p:{y:224.425}},{t:this.shape_54,p:{x:76.7,y:213.575}}]},1).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_59},{t:this.shape_54,p:{x:86.5,y:203.775}},{t:this.shape_58}]},1).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_49,p:{y:224.425}},{t:this.shape_47,p:{y:224.425}},{t:this.shape_50,p:{y:213.575}}]},1).to({state:[{t:this.shape_49,p:{y:220.925}},{t:this.shape_50,p:{y:210.075}},{t:this.shape_47,p:{y:220.925}}]},1).wait(1));

	// body
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#421D0D").ss(0.1,1,1).p("ALiA2QgBAAAAAAQgIACgIACQizAoh5AAQnHAAl8hiQhqgah1goQhZgfgLAA");
	this.shape_66.setTransform(124.5625,200.175);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#6E3E27").ss(0.1,1,1).p("ANEjKQAOgCDPAXQCpAXCRAfIABAAA1bBRIAAgJQCyBXBfAcQCDAlC8AAQEOAADPhGQCHguCxhsQDBh1BZgkQCshGDTAAQA1AABDANQAXAEASAEQBAAMAFAB");
	this.shape_67.setTransform(65.2625,121.425);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#422213").ss(0.1,1,1).p("AJlExQiCgXicgjQk3hGiJg6QithJhrhUQiGhrhNie");
	this.shape_68.setTransform(-10.575,159.95);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AiwnWQgaAAAAgJIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQQAZAYAAABQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARQAdAVADADIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAaAtAZQgpABgsAPIAzAaQAAAEAFAEQAEAFAAAEQgiAAgQABQgbACgRAFIAAARQAVACAeANQAZALAJAIIAJAAQgGACgyAKQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAJQgtAHgUAIQglAOgRAdQAeAAARABQAgACAXAGQgRAHhVArIAAAIQAYgDAbAGQAaAHAOAOQAFAAAGACIgJAAQgBgBgBgBAmEjxIAIAAAjInkQA9AOA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBDi3ArQgBgBgBgCIgBgEQgYgJgJgDQgQgFgLAAIAAgRQAQgLAJgHQARgNAJgDQgVAAgvAEQguAEgVAAQAGgDAigcQAigbACgBIg8AAQgpAAgaAIIAAgIQAOgPAcgTQAdgVANgNQgFAAgCgEIgBgFQgCAAgvADQgcACgQgFQAJAAAAgHQALgEAagMQAXgKAHAAQgFAAgCgEIgBgEQgNACgogNQgsgPgNAAIAAgIQANAAAdgEQAcgFANAAIgHAAQgYgRgWgNQgqgagWAFQAng0A0AI");
	this.shape_69.setTransform(222.575,157.0875);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#DD6900").ss(0.1,1,1).p("AAEAAIgHAA");
	this.shape_70.setTransform(168.825,158.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#CCFF00").ss(0.1,1,1).p("AAQgIQACABADAAQgKAAgLAGQgMAGgIAE");
	this.shape_71.setTransform(196.7625,206.475);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E11D3D").s().p("ACyHJQhqgbh0goQhZgfgLAAQiCgXicgjQk3hFiLg7QishIhrhVQiGhqhOifIAAgIQCyBXBfAbQCDAmC8AAQEOAADPhGQCHguCxhsQDBh3BZgkQCshGDTAAQA1AABDANIApAIQAOgCDPAYQCpAXCRAeIABAAIgCAFIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQIAZAZQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARIAgAYIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAaAtAZQgpACgsAOIAzAaQAAAEAFAEQAEAFAAAEIgyABQgbACgRAFIAAARQAVACAeANQAZALAJAIIAJAAIg4AMQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAJQgtAHgUAIQglANgRAeIAvABQAgACAXAGIhmAyIAAAIQAYgDAbAGQAaAHAOAOQg0gIgnA0QAWgFAqAaIAuAeIAHAAQgNABgcAEQgdAEgNAAIAAAIQANAAAsAPQAoANANgCIABAEQACAEAFAAQgHAAgXAKIglAQQAAAHgJAAQAQAFAcgCIAxgDIABAFQACAEAFAAQgNANgdAVQgcATgOAPIAAAIQAagIApAAIA8AAIgkAcQgiAcgGADQAVAAAugEQAvgEAVAAQgJADgRANIgZASIAAARQALAAAQAFIAhAMIABAEIACADIgBAAIgQAEQizAoh5AAQnIAAl8higAQQAmIgJAAgAOJoIIhFgNIBFANg");
	this.shape_72.setTransform(65.2625,154.475);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AjzHiIgBgEIghgMQgQgFgLAAIAAgRIAZgSQARgNAJgDQgVAAgvAEQguAEgVAAQAGgDAigcIAkgcIg8AAQgpAAgaAIIAAgIQAOgPAcgTQAdgVANgNQgFAAgCgEIgBgFIgxADQgcACgQgFQAJAAAAgHIAlgQQAXgKAHAAQgFAAgCgEIgBgEQgNACgogNQgsgPgNAAIAAgIQANAAAdgEQAcgFANAAIgHAAIgugeQgqgagWAFQAng0A0AIIACACIAJAAIgLgCQgOgOgagHQgbgGgYADIAAgIIBmgyQgXgGgggCIgvgBQARgdAlgOQAUgIAtgHIAAgJQgUgPgkgHQghgHgeAEIAAgJQAXgOAogIIA4gMIgJAAQgJgIgZgLQgegNgVgCIAAgRQARgFAbgCIAygBQAAgEgEgFQgFgEAAgEIgzgaQAsgPApgBQgtgZgGgaQAIAAAOgEQANgEALAAQALAAAOAEQAOAEAIAAIAAgIIgggYQgWgRgFgKQAIAAASgEQARgFALAAQAMAAANAFQAOAEAIAAIgZgZQgQgQgKgTQADAAAFgEQAFgEANAAQAQAAAhAFQAiAGATAGQACgNgNgYQgPgZAAgPIAzAAQAAAJAaAAQgaAAAAgJIACgFQA9AOA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBDi3ArIgCgDgAl8jxIgIAAgAjKnfIAAAAg");
	this.shape_73.setTransform(222.575,157.0875);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#3A1C11").ss(0.1,1,1).p("ANEoVQAOgCDPAYQCpAXCRAfIABAAAUzH/QgBAAAAAAQgIACgIACQizAoh5AAQnIAAl8hiQhqgbh0goQhZgfgLAAQiCgXicgjQk3hFiLg7QishIhrhVQiGhqhOifIAAgIQCyBXBfAbQCDAmC8AAQEOAADPhGQCHguCxhsQDBh3BZgkQCshGDTAAQA1AABDANQAXAFASADQBAAMAFAB");
	this.shape_74.setTransform(65.275,157.975);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AiwnXQgaAAAAgIIgzAAQAAAOAPAaQANAXgCANQgTgGgigFQghgGgQAAQgNAAgFAFQgFAEgDAAQAKATAQAPQAZAYAAABQgIAAgOgEQgNgEgMAAQgLAAgRAEQgSAEgIAAQAFAKAWARQAdAWADACIAAAJQgIAAgOgEQgOgFgLAAQgLAAgNAFQgOAEgIAAQAGAZAtAaQgpABgsAPIAzAZQAAAFAFAEQAEAEAAAEQgiAAgQABQgbACgRAGIAAARQAVABAeANQAZAMAJAIIAJAAQgGACgyAKQgoAHgXAPIAAAIQAegDAhAGQAkAHAUAQIAAAIQgtAHgUAIQglAPgRAdQAeAAARABQAgACAXAFQgRAIhVAqIAAAJQAYgEAbAHQAaAGAOAOQAFABAGABIgJAAQgBgBgBgBAmEjxIAIAAAjInkQA9ANA6APQJmCbAAEPQAAB2h/BvQhvBgjBBQQigBDi3AqQgBgBgBgBIgBgFQgYgIgJgDQgQgGgLAAIAAgRQAQgLAJgHQARgMAJgEQgVAAgvAFQguAEgVAAQAGgDAigcQAigcACgBIg8AAQgpAAgaAJIAAgJQAOgOAcgUQAdgUANgOQgFAAgCgEIgBgEQgCAAgvADQgcACgQgFQAJAAAAgIQALgEAagMQAXgJAHAAQgFAAgCgEIgBgFQgNACgogNQgsgOgNAAIAAgJQANAAAdgEQAcgEANAAIgHAAQgYgRgWgOQgqgZgWAFQAng1A0AI");
	this.shape_75.setTransform(222.575,160.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E11D3D").s().p("ACyHJQhqgbh0goQhZgfgLAAQiCgXicgjQk3hFiLg7QishIhrhVQiGhqhOifIAAgIQCyBXBfAbQCDAmC8AAQEOAADPhGQCHguCxhsQDBh3BZgkQCshGDTAAQA1AABDANIApAIQAOgCDPAYQCpAXCRAfIABAAIgCAEIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQIAZAZQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARIAgAYIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAaAtAZQgpACgsAOIAzAaQAAAEAFAEQAEAFAAAEIgyABQgbACgRAFIAAARQAVACAeANQAZALAJAIIAJAAIg4AMQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAJQgtAHgUAIQglANgRAeIAvABQAgACAXAGIhmAyIAAAIQAYgDAbAGQAaAHAOAOQg0gIgnA0QAWgFAqAaIAuAeIAHAAQgNABgcAEQgdAEgNAAIAAAIQANAAAsAPQAoANANgCIABAEQACAEAFAAQgHAAgXAKIglAQQAAAHgJAAQAQAFAcgCIAxgDIABAFQACAEAFAAQgNANgdAVQgcATgOAPIAAAIQAagIApAAIA8AAIgkAcQgiAcgGADQAVAAAugEQAvgEAVAAQgJADgRANIgZASIAAARQALAAAQAFIAhAMIABAEIACADIgBAAIgQAEQizAoh5AAQnIAAl8higAQQAmIgJAAgAOJoIIhFgNIBFANg");
	this.shape_76.setTransform(65.275,157.975);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AjzHiIgBgFIghgLQgQgFgLgBIAAgRIAZgSQARgMAJgEQgVAAgvAFQguAEgVAAQAGgDAigcIAkgcIg8AAQgpAAgaAIIAAgIQAOgPAcgTQAdgVANgOQgFAAgCgDIgBgFIgxADQgcACgQgFQAJAAAAgIIAlgPQAXgKAHAAQgFAAgCgEIgBgEQgNABgogNQgsgOgNAAIAAgIQANAAAdgFQAcgEANAAIgHAAIgugeQgqgagWAFQAng0A0AHIACADIAJAAIgLgDQgOgOgagGQgbgHgYAEIAAgIIBmgzQgXgFgggCIgvgBQARgdAlgPQAUgHAtgHIAAgJQgUgPgkgIQghgGgeAEIAAgJQAXgOAogIIA4gMIgJAAQgJgIgZgMQgegNgVgBIAAgRQARgFAbgCIAygBQAAgFgEgEQgFgEAAgEIgzgaQAsgOApgCQgtgZgGgaQAIAAAOgEQANgFALAAQALAAAOAFQAOAEAIAAIAAgJIgggXQgWgRgFgKQAIAAASgFQARgEALAAQAMAAANAEQAOAFAIAAIgZgaQgQgPgKgTQADAAAFgEQAFgEANgBQAQABAhAFQAiAGATAFQACgNgNgXQgPgZAAgPIAzAAQAAAJAaAAQgaAAAAgJIACgFQA9AOA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBEi3AqIgCgDgAl8jxIgIAAgAjKnfIAAAAg");
	this.shape_77.setTransform(222.575,160.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#CCFF00").ss(0.1,1,1).p("AgBAAQABABACAA");
	this.shape_78.setTransform(198.6375,209.125);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#CCFF00").ss(0.1,1,1).p("AgCAAQACABADAA");
	this.shape_79.setTransform(203.55,204.225);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AjInjQA9ANA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBEi3AqQgBgBgBgCIgBgEQgYgJgJgDQgQgFgLAAIAAgRQAQgLAJgHQARgNAJgDQgVAAgvAEQguAEgVAAQAGgDAigcQAigbACgBIg8AAQgpAAgaAIIAAgIQAOgPAcgTQAdgVANgNQgFAAgCgEIgBgFQgCAAgvADQgcACgQgFQAJAAAAgHQALgEAagMQAXgKAGAAQgEAAgCgEIgBgEQgNACgogNQgsgPgNAAIAAgIQANAAAdgEQAcgEANgBIgHAAQgYgRgWgNQgqgagWAFQAng0A0AIQAFAAAGACIgJAAQgBgBgBgBAiwnWQgaAAAAgJIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQQAZAYAAABQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARQAdAVADADIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAZAtAaQgpACgsAOIAzAaQAAAEAFAEQAEAEAAAFQgiAAgQAAQgbADgRAFIAAARQAVACAeANQAZALAJAIIAJAAQgGACgyAKQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAIQgtAIgUAHQglAPgRAdQAeAAARABQAgACAXAGQgRAHhVArIAAAIQAYgDAbAGQAaAHAOAOAmEjxIAIAA");
	this.shape_80.setTransform(227.475,155.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E11D3D").s().p("ACyHJQhqgbh0goQhZgfgLAAQiCgXicgjQk3hFiLg7QishIhrhVQiGhqhOifIAAgIQCyBXBfAbQCDAmC8AAQEOAADPhGQCHguCxhsQDBh3BZgkQCshGDTAAQA1AABDANIApAIQAOgCDPAYQCpAXCRAfIABAAIgCAEIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQIAZAZQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARIAgAYIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAaAtAZQgpACgsAOIAzAaQAAAEAFAEQAEAFAAAEIgyABQgbACgRAFIAAARQAVACAeANQAZALAJAIIAJAAIg4AMQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAJQgtAHgUAIQglANgRAeIAvABQAgACAXAGQgRAHhVArIAAAIQAYgDAbAGQAaAHAOAOQg0gIgnA0QAWgFAqAaIAuAeIAHAAQgNABgcAEQgdAEgNAAIAAAIQANAAAsAPQAoANANgCIABAEQACAEAEAAQgGAAgXAKIglAQQAAAHgJAAQAQAFAcgCIAxgDIABAFQACAEAFAAQgNANgdAVQgcATgOAPIAAAIQAagIApAAIA8AAIgkAcQgiAcgGADQAVAAAugEQAvgEAVAAQgJADgRANIgZASIAAARQALAAAQAFIAhAMIABAEIACADIgBAAIgQAEQizAoh5AAQnIAAl8higAQQAmIgJAAgAOJoIIhFgNIBFANg");
	this.shape_81.setTransform(70.175,153.075);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AjzHiIgBgEIghgMQgQgGgLABIAAgRIAZgSQARgNAJgEQgVABgvAEQguAEgVAAQAGgDAigcIAkgdIg8AAQgpAAgaAJIAAgJQAOgOAcgTQAdgVANgNQgFAAgCgFIgBgEIgxADQgcACgQgFQAJAAAAgIIAlgQQAXgJAGAAQgEAAgCgEIgBgFQgNACgogNQgsgOgNAAIAAgJQANAAAdgEQAcgDANgBIgHAAIgugfQgqgZgWAFQAng1A0AJIACABIAJAAIgLgBQgOgOgagHQgbgGgYADIAAgJQBVgqARgHQgXgGgggCIgvgBQARgdAlgOQAUgIAtgIIAAgIQgUgQgkgGQghgHgeADIAAgIQAXgPAogHIA4gMIgJAAQgJgIgZgLQgegNgVgCIAAgRQARgGAbgCIAygBQAAgDgEgFQgFgEAAgFIgzgZQAsgPApgBQgtgagGgZQAIAAAOgEQANgEALAAQALAAAOAEQAOAEAIAAIAAgIIgggZQgWgQgFgLQAIAAASgDQARgFALAAQAMAAANAFQAOADAIAAIgZgYQgQgQgKgTQADAAAFgEQAFgFANABQAQgBAhAGQAiAFATAHQACgNgNgYQgPgaAAgOIAzAAQAAAIAaAAQgaAAAAgIIACgEQA9ANA6AOQJmCbAAEPQAAB2h/BvQhvBgjBBQQigBEi3ApIgCgCgAl8jxIgIAAg");
	this.shape_82.setTransform(227.475,155.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AVcnJIgBAAQiRgfipgXQjPgYgOACAUzH/QgBAAAAAAQgIACgIACQizAoh5AAQnIAAl8hiQhqgbh0goQhZgfgLAAQiCgXicgjQk3hFiLg7QishIhrhVQiGhqhOifIAAgIQCyBXBfAbQCDAmC8AAQEOAADPhGQCHguCxhsQDBh3BZgkQCshGDTAAQA1AABDANQAXAFASADQBAAMAFAB");
	this.shape_83.setTransform(70.175,153.075);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AiwnWQgaAAAAgJIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQQAZAYAAABQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARQAdAVADADIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAZAtAaQgpACgsAOIAzAaQAAAEAFAEQAEAEAAAFQgiAAgQAAQgbADgRAFIAAARQAVACAeANQAZALAJAIIAJAAQgGACgyAKQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAIQgtAIgUAHQglAPgRAdQAeAAARABQAgACAXAGQgRAHhVArIAAAIQAYgDAbAGQAaAHAOAOQAFAAAGACIgJAAQgBgBgBgBAjInjQA9ANA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBEi3AqQgBgBgBgCIgBgEQgYgJgJgDQgQgFgLAAIAAgRQAQgLAJgHQARgNAJgDQgVAAgvAEQguAEgVAAQAGgDAigcQAigbACgBIg8AAQgpAAgaAIIAAgIQAOgPAcgTQAdgVANgNQgFAAgCgEIgBgFQgCAAgvADQgcACgQgFQAJAAAAgHQALgEAagMQAXgKAGAAQgEAAgCgEIgBgEQgNACgogNQgsgPgNAAIAAgIQANAAAdgEQAcgEANgBIgHAAQgYgRgWgNQgqgagWAFQAng0A0AIAmEjxIAIAA");
	this.shape_84.setTransform(227.475,155.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AjzHiIgBgEIghgMQgQgGgLABIAAgRIAZgSQARgNAJgEQgVABgvAEQguAEgVAAQAGgDAigcIAkgdIg8AAQgpAAgaAJIAAgJQAOgOAcgTQAdgVANgNQgFAAgCgFIgBgEIgxADQgcACgQgFQAJAAAAgIIAlgQQAXgJAGAAQgEAAgCgEIgBgFQgNACgogNQgsgOgNAAIAAgJQANAAAdgEQAcgDANgBIgHAAIgugfQgqgZgWAFQAng1A0AJIACABIAJAAIgLgBQgOgOgagHQgbgGgYADIAAgJQBVgqARgHQgXgGgggCIgvgBQARgdAlgOQAUgIAtgIIAAgIQgUgQgkgGQghgHgeADIAAgIQAXgPAogHIA4gMIgJAAQgJgIgZgLQgegNgVgCIAAgRQARgGAbgCIAygBQAAgDgEgFQgFgEAAgFIgzgZQAsgPApgBQgtgagGgZQAIAAAOgEQANgEALAAQALAAAOAEQAOAEAIAAIAAgIIgggZQgWgQgFgLQAIAAASgDQARgFALAAQAMAAANAFQAOADAIAAIgZgYQgQgQgKgTQADAAAFgEQAFgFANABQAQgBAhAGQAiAFATAHQACgNgNgYQgPgaAAgOIAzAAQAAAIAaAAQgaAAAAgIIACgEQA9ANA6AOQJmCbAAEPQAAB2h/BvQhvBgjBBQQigBEi3ApIgCgCgAl8jxIgIAAgAjKnfIAAAAg");
	this.shape_85.setTransform(227.475,155.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AjInkQA9ANA6APQJmCbAAEPQAAB2h/BvQhvBgjBBQQigBDi3AqQgBgBgBgBIgBgFQgYgIgJgDQgQgGgLAAIAAgRQAQgLAJgHQARgMAJgEQgVAAgvAFQguAEgVAAQAGgDAigcQAigcACgBIg8AAQgpAAgaAJIAAgJQAOgOAcgUQAdgUANgOQgFAAgCgEIgBgEQgCAAgvADQgcACgQgFQAJAAAAgIQALgEAagMQAXgJAGAAQgEAAgCgEIgBgFQgNACgogNQgsgOgNAAIAAgJQANAAAdgEQAcgEANAAIgHAAQgYgRgWgOQgqgZgWAFQAng1A0AIQAFABAGABIgJAAQgBgBgBgBAiwnXQgaAAAAgIIgzAAQAAAOAPAaQANAXgCANQgTgGgigFQghgGgQAAQgNAAgFAFQgFAEgDAAQAKATAQAPQAZAYAAABQgIAAgOgEQgNgEgMAAQgLAAgRAEQgSAEgIAAQAFAKAWARQAdAWADACIAAAJQgIAAgOgEQgOgFgLAAQgLAAgNAFQgOAEgIAAQAGAZAtAaQgpABgsAPIAzAZQAAAFAFAEQAEAEAAAEQgiAAgQABQgbACgRAGIAAARQAVABAeANQAZAMAJAIIAJAAQgGACgyAKQgoAHgXAPIAAAIQAegDAhAGQAkAHAUAQIAAAIQgtAHgUAIQglAPgRAdQAeAAARABQAgACAXAFQgRAIhVAqIAAAJQAYgEAbAHQAaAGAOAOAmEjxIAIAA");
	this.shape_86.setTransform(227.475,157.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E11D3D").s().p("ACyHJQhqgbh0goQhZgfgLAAQiCgXicgjQk3hFiLg7QishIhrhVQiGhqhOifIAAgIQCyBXBfAbQCDAmC8AAQEOAADPhGQCHguCxhsQDBh3BZgkQCshGDTAAQA1AABDANIApAIQAOgCDPAYQCpAXCRAfIABAAIgCAEIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQIAZAZQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARIAgAYIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAaAtAZQgpACgsAOIAzAaQAAAEAFAEQAEAFAAAEIgyABQgbACgRAFIAAARQAVACAeANQAZALAJAIIAJAAIg4AMQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAJQgtAHgUAIQglANgRAeIAvABQAgACAXAGIhmAyIAAAIQAYgDAbAGQAaAHAOAOQg0gIgnA0QAWgFAqAaIAuAeIAHAAQgNABgcAEQgdAEgNAAIAAAIQANAAAsAPQAoANANgCIABAEQACAEAEAAQgGAAgXAKIglAQQAAAHgJAAQAQAFAcgCIAxgDIABAFQACAEAFAAQgNANgdAVQgcATgOAPIAAAIQAagIApAAIA8AAIgkAcQgiAcgGADQAVAAAugEQAvgEAVAAQgJADgRANIgZASIAAARQALAAAQAFIAhAMIABAEIACADIgBAAIgQAEQizAoh5AAQnIAAl8higAQQAmIgJAAgAOJoIIhFgNIBFANg");
	this.shape_87.setTransform(70.175,154.475);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AjzHiIgBgFIghgLQgQgFgLgBIAAgRIAZgSQARgMAJgDQgVgBgvAFQguAEgVAAQAGgDAigcIAkgcIg8AAQgpAAgaAIIAAgIQAOgPAcgUQAdgUANgOQgFAAgCgDIgBgFIgxADQgcACgQgFQAJAAAAgHIAlgQQAXgKAGAAQgEAAgCgEIgBgEQgNACgogNQgsgPgNAAIAAgJQANAAAdgDQAcgFANAAIgHAAIgugeQgqgagWAFQAng0A0AHIACADIAJAAIgLgDQgOgOgagGQgbgHgYAEIAAgIIBmgzQgXgFgggCIgvgBQARgdAlgPQAUgIAtgGIAAgJQgUgPgkgIQghgGgeADIAAgIQAXgPAogHIA4gMIgJAAQgJgIgZgMQgegNgVgBIAAgRQARgFAbgCIAygBQAAgEgEgFQgFgEAAgEIgzgaQAsgPApgBQgtgZgGgaQAIAAAOgEQANgFALABQALgBAOAFQAOAEAIAAIAAgIIgggYQgWgRgFgKQAIAAASgFQARgEALAAQAMAAANAEQAOAFAIAAIgZgaQgQgPgKgTQADAAAFgEQAFgFANAAQAQAAAhAGQAiAGATAFQACgNgNgXQgPgaAAgOIAzAAQAAAJAaAAQgaAAAAgJIACgFQA9AOA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBEi3AqIgCgDgAl8jxIgIAAg");
	this.shape_88.setTransform(227.475,157.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AiwnXQgaAAAAgIIgzAAQAAAOAPAaQANAXgCANQgTgGgigFQghgGgQAAQgNAAgFAFQgFAEgDAAQAKATAQAPQAZAYAAABQgIAAgOgEQgNgEgMAAQgLAAgRAEQgSAEgIAAQAFAKAWARQAdAWADACIAAAJQgIAAgOgEQgOgFgLAAQgLAAgNAFQgOAEgIAAQAGAZAtAaQgpABgsAPIAzAZQAAAFAFAEQAEAEAAAEQgiAAgQABQgbACgRAGIAAARQAVABAeANQAZAMAJAIIAJAAQgGACgyAKQgoAHgXAPIAAAIQAegDAhAGQAkAHAUAQIAAAIQgtAHgUAIQglAPgRAdQAeAAARABQAgACAXAFQgRAIhVAqIAAAJQAYgEAbAHQAaAGAOAOQAFABAGABIgJAAQgBgBgBgBQg0gIgnA1QAWgFAqAZQAWAOAYARIAHAAQgNAAgcAEQgdAEgNAAIAAAJQANAAAsAOQAoANANgCIABAFQACAEAFAAQgHAAgXAJQgaAMgLAEQAAAIgJAAQAQAFAcgCQAvgDACAAIABAEQACAEAFAAQgNAOgdAUQgcAUgOAOIAAAJQAagJApAAIA8AAQgCABgiAcQgiAcgGADQAVAAAugEQAvgFAVAAQgJAEgRAMQgJAHgQALIAAARQALAAAQAGQAJADAYAIIABAFQABABABABQC3gqCghDQDBhQBvhgQB/hvAAh2QAAkPpmibQg6gPg9gNAmEjxIAIAA");
	this.shape_89.setTransform(222.575,160.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AiwnWQgaAAAAgJIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQQAZAYAAABQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARQAdAVADADIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAaAtAZQgpABgsAPIAzAaQAAAEAFAEQAEAFAAAEQgiAAgQABQgbACgRAFIAAARQAVACAeANQAZALAJAIIAJAAQgGACgyAKQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAJQgtAHgUAIQglAOgRAdQAeAAARABQAgACAXAGQgRAHhVArIAAAIQAYgDAbAGQAaAHAOAOQAFAAAGACIgJAAQgBgBgBgBQg0gIgnA0QAWgFAqAaQAWANAYARIAHAAQgNAAgcAFQgdAEgNAAIAAAIQANAAAsAPQAoANANgCIABAEQACAEAFAAQgHAAgXAKQgaAMgLAEQAAAHgJAAQAQAFAcgCQAvgDACAAIABAFQACAEAFAAQgNANgdAVQgcATgOAPIAAAIQAagIApAAIA8AAQgCABgiAbQgiAcgGADQAVAAAugEQAvgEAVAAQgJADgRANQgJAHgQALIAAARQALAAAQAFQAJADAYAJIABAEQABACABABQC3grCghDQDBhQBvhgQB/hvAAh1QAAkQpmibQg6gOg9gOAmEjxIAIAA");
	this.shape_90.setTransform(222.575,157.0875);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AjzHiIgBgEIghgMQgQgFgLAAIAAgRIAZgSQARgNAJgDQgVAAgvAEQguAEgVAAQAGgDAigcIAkgcIg8AAQgpAAgaAIIAAgIQAOgPAcgTQAdgVANgNQgFAAgCgEIgBgFIgxADQgcACgQgFQAJAAAAgHIAlgQQAXgKAHAAQgFAAgCgEIgBgEQgNACgogNQgsgPgNAAIAAgIQANAAAdgEQAcgFANAAIgHAAIgugeQgqgagWAFQAng0A0AIIACACIAJAAIgLgCQgOgOgagHQgbgGgYADIAAgIIBmgyQgXgGgggCIgvgBQARgdAlgOQAUgIAtgHIAAgJQgUgPgkgHQghgHgeAEIAAgJQAXgOAogIIA4gMIgJAAQgJgIgZgLQgegNgVgCIAAgRQARgFAbgCIAygBQAAgEgEgFQgFgEAAgEIgzgaQAsgPApgBQgtgZgGgaQAIAAAOgEQANgEALAAQALAAAOAEQAOAEAIAAIAAgIIgggYQgWgRgFgKQAIAAASgEQARgFALAAQAMAAANAFQAOAEAIAAIgZgZQgQgQgKgTQADAAAFgEQAFgEANAAQAQAAAhAFQAiAGATAGQACgNgNgYQgPgZAAgPIAzAAQAAAJAaAAQgaAAAAgJIACgFQA9AOA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBDi3ArIgCgDgAl8jxIgIAAg");
	this.shape_91.setTransform(222.575,157.0875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{y:206.475}},{t:this.shape_70,p:{y:158.3,x:168.825}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_70,p:{y:161.8,x:168.825}},{t:this.shape_71,p:{y:209.975}},{t:this.shape_74,p:{x:65.275,y:157.975}}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_70,p:{y:161.8,x:168.825}},{t:this.shape_78},{t:this.shape_74,p:{x:65.275,y:157.975}}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_70,p:{y:161.8,x:168.825}},{t:this.shape_71,p:{y:209.975}},{t:this.shape_74,p:{x:65.275,y:157.975}}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_70,p:{y:161.8,x:168.825}},{t:this.shape_78},{t:this.shape_74,p:{x:65.275,y:157.975}}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_70,p:{y:156.9,x:173.725}},{t:this.shape_79,p:{y:204.225}},{t:this.shape_74,p:{x:70.175,y:153.075}}]},1).to({state:[{t:this.shape_85},{t:this.shape_81},{t:this.shape_84},{t:this.shape_70,p:{y:156.9,x:173.725}},{t:this.shape_79,p:{y:204.225}},{t:this.shape_83,p:{x:70.175,y:153.075}}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_84},{t:this.shape_70,p:{y:156.9,x:173.725}},{t:this.shape_79,p:{y:204.225}},{t:this.shape_74,p:{x:70.175,y:153.075}}]},1).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_70,p:{y:158.3,x:173.725}},{t:this.shape_79,p:{y:205.625}},{t:this.shape_74,p:{x:70.175,y:154.475}}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_89},{t:this.shape_70,p:{y:161.8,x:168.825}},{t:this.shape_71,p:{y:209.975}},{t:this.shape_83,p:{x:65.275,y:157.975}}]},1).to({state:[{t:this.shape_91},{t:this.shape_72},{t:this.shape_71,p:{y:206.475}},{t:this.shape_70,p:{y:158.3,x:168.825}},{t:this.shape_90},{t:this.shape_83,p:{x:65.2625,y:154.475}}]},1).wait(1));

	// left_wing
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AEEk1QAEiAAVh0QABgGABgFQAKhNAihBQARgiAYgeQAbgjArgCQAygCAJAuQADAPgDARQgCANgCAMQgVBugeBuQgQBFgBApQgBBKAECbQAACIgUBKQgkCIhWDuQhbD7gdBfQgBABAAABQgBADgBADAg9AuQgXhTgShJQgkiNAAg6QAAgvAZg2QAghEAxAAQBTAAAXCxQAGAvAIBcQAKBJASAZIAAg3QAAgKgIh4QgCgegCgYQgFhFAAgIQAAhoAFg7QAAgHABgGQAJg4A4gZQAMgGAHgEIAcALQAcAQADBNQANBmgBCEAEEktIAAgIAEEktQgBAJAAAIIAAAJQABgNAAgNgAg1A2QgDgBgDgCQgCgCgCgBIAAAAQgTgOgNgbQgDgHgVg5QgehShAAAQgeAAgNAZQgIARAAAZQAABHA9BuQAeA4A/BaAhyD9QgYgEgNAAQgTAAgaAaQgaAaAAAUQAAATASAYQABACACACQAAABAAAAQABABABABQAGAHAOAPAjJFxQAAAAgBAAQgYAGgfAeQghAgAAATQAAASASAUQADAEAFAFAkQHuQgcADgaAiQgIALgkA8QgbAtgVAQQgdAXghgNACfMOQgCACgCABQgdAShBAEQgRABhdAAQiQAAhZgUQhXgUiEg+QAJgVACgBQADgCADABQAEABAEAF");
	this.shape_92.setTransform(198.325,41.0708);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E11D3D").s().p("AkaMUQhXgUiEg+QAJgVACgBQADgCADABQADABAFAFQgFgFgDgBIADgKQAiANAdgXQAVgQAbgtQAkg8AIgLQAagiAbgDIAJAJIgJgJQgRgUAAgSQAAgTAhggQAfgeAYgGIABAAIABACIAVAWIgVgWIgBgCIAAgBIgDgEQgSgYAAgTQAAgUAagaQAagaATAAQANAAAYAEIgRAIIAVgGQg/hageg4Qg9huAAhHIAIgqQANgZAeAAQBAAAAeBSQAVA5ADAHQANAbATAOIACgCQgXhTgShJQgkiNAAg6QAAgvAZg2QAghEAxAAQBTAAAXCxQAGAvAIBcQAKBJASAZIAAg3IgIiCIgEg2IgFhNQAAhoAFg7IABgNQAJg4A4gZIATgKIAcALQAcAQADBNQANBmgBCEQAEiAAVh0IACgLQAKhNAihBQARgiAYgeQAbgjArgCQAygCAJAuQADAPgDARIgEAZQgVBugfBuQgPBFgBApQgBBKAECbQAACIgUBKQgkCIhWDuQhbD7geBfIAAACIgKgDIgEADQgdAShBAEQgRABhdAAQiQAAhZgUgAg/AwIAEADIAGADIgGgDIgEgDIAAAAgAEDkcIAAAJIABgaIAAgIIAAAIIgBARg");
	this.shape_93.setTransform(198.325,41.0708);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#3A1C11").ss(0.1,1,1).p("ABkoNQgRg5gQgpQgnhkg5AAQgcAAgbAyQgZAwAAAqIBMIHQgThugihmQhEjKhSAAABkoNQAFAQAEARQgBgDgDgCIAAAAQADAMADANQAWBXADAXABpnxQgFgFgGAAAl6JVIBuGvIHHjPQgBgIgCgNQAAgCgBgBQgEgVAAgLQAAhPBQi8QBejdALgtQgEhkAOjUQAQjqAAhUQAAjqgRiFQghkGhfAAQhJAAgsCpQgiCCAACAQAAAkAGAnAh5CIQgTgUgegoQglgzgRgUQhHhQhVgGQgJAIAAArQAABCBhB0QAyA8BJBPQgxAAgeA0QgdAzAQAxQg4AGglA8QgZAogHAvAkWnFQgRAYAAAbQAAAXBNDfQAdBSAVA+QAjBpAMArQACACABABIAAAJQgBgGgCgG");
	this.shape_94.setTransform(199.725,41.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#DD6900").ss(0.1,1,1).p("AiLpxQgZAAgSAZADFqhQACAOADAOAElKdIgJAFAkhHBQgCAMgBAN");
	this.shape_95.setTransform(190.05,55.825);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E11D3D").s().p("Al6JVIgIgBQAHgvAZgoQAlg8A4gGQgQgxAdgzQAeg0AxAAQhJhPgyg8Qhhh0AAhCQAAgrAJgIQBVAGBHBRQARATAlAzQAeAoATAUIADAMIAAgJIgDgDQgMgrgkhpIgxiQQhNjfAAgXQAAgaARgYIAqgaQBSAABEDKQAiBmATBuIhMoHQAAgpAZgxQAbgyAcAAQA5AAAnBlQAQAoARA5IgGAXQAGAAAFAFIAGAZQAWBXADAXQgDgXgWhXIgGgZIAAAAIAEAFIgJghQgGgnAAgkQAAiAAiiCQAsipBJAAQBfAAAhEGQARCFAADrQAABTgQDqQgODUAEBkQgLAtheDdQhQC8AABPQAAALAEAVIABADIADAVInHDPg");
	this.shape_96.setTransform(199.725,41.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AE3mGQgIg+gdg/QgKgVgNgRQgJgJgIgHIg7gdABYM0QAPgFAOgHQEYh9BvkmQBYjsAAm1QAAhyg7jCQhGjkhOAAQg1AAgTCyQgJBRAAB8QAAAUADAbQACAjAIAvQALBSAKAfACHn8QAEAYAAAoQAAA/ARCcQAJBOAIBCIAAA3QgKhXgjhgQgBgCgBgCQg8ighWAAQgcAAgOAzQgJAgAAAbQAABpA7CJQAOAhAZA6QATAuAAAaIAAARQguhHggglQgOgPgNgNQg9g5g1AAQggAAgTAZQgRAWAAAhQAABWBZCGQA2BRALAPQg0ADg6BAQgZAdgNAYAjpHkQAFgBAEgBAhXFqQABADABAAQAdAwAJAjAj4HqQguARgoAkQgWAUgXAdQgMAPgMARIABAJIgIAAQADgEAEgFAl7JQQguAGhPBOQhRBQgDAzQAAgCAAACQACAEACACABzMkIq4AJQgCABgBgBIgEAAIgHAAApMMnQAAACAAAE");
	this.shape_97.setTransform(219.7,45.75);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E11D3D").s().p("ApMMwQgBgBgCgEQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAABQAEg0BQhPQBQhPAtgFIgYAfIAYgfQAYgdAWgUQAngkAugSIAQgFIgDgCQANgYAagdQA5hAA0gDIhAhgQhZiGAAhWQAAghARgWQATgZAgAAQA1AAA9A5QANAMAOAQQAgAlAtBHIAAgRQAAgagSguIgnhbQg7iJAAhpQAAgbAIggQAOgzAdAAQBWAAA8CgIABAEQAjBgALBXIAAg3IgRiQQgRicAAg/QAAgogFgYIgCg7IAqgfIA7AcIARARQANAQAKAWQAdA/AIA9QgCgbAAgTQAAh8AIhRQATiyA2AAQBOAABGDkQA7DCAAByQAAG1hZDsQhuEmkYB9IgCgEIq4AIIgCABIgCgBgAmdJ9IAIAAIgCgKIgGAKgAjsHoIAJgDIgJADgAhZFxQAdAwAJAjQgJgjgdgwIgCgDIACADgAE9kwQAMBSAKAfQgKgfgMhSQgHgwgDgjQADAjAHAwg");
	this.shape_98.setTransform(220.0375,45.3941);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AhtA3QABABABABQBcBlBwBHQCoBqCfAAQAaAAAagEQCtgaCOjIQBDhdAohpQAmhmAAhLQAAg1gIgbQgOgrgiAAQgfAAhLCuQg4CBgkBvQAAhBAEh+QAEhzAAgLQAAglgRgaQgQgagXAAQhQAAgtC3QgCAIgDAQQgIAlgRBPQgLA7gKAXQAEAKgJAIIAAgBIAAgHQAAgBABAAQAAgEAAgFQADgZAJg4QANhXAAgiQAAhEgCgQQgGgpgbgjQgwATgdBLQgPAlgZBvQgXBhgWAnQghA9g6AAQg2AAgZgkQgRgYgXhRAiLAVQAEAFAEAFQAHAIAHAHQACADADADQACACABABQgBABgCAAQgCAAgCAAQi6AOkABcQjyBhhqAoQDLBFAUAFQBYAVCgAAQBzAAFXgQQEngNBsgNQAmgEAPgFABBg2Ii5BMAHKAUQgCAFgCAEQgBAFAAADAuKErQgQAGgMAEIAAAJAuKErQgHgCgHgDQgDgBgDgBIAEABQABABABAA");
	this.shape_99.setTransform(270.45,176.475);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E11D3D").s().p("Ak1EDQhxhHhchlIgCgCIgDgDIgGgGIgDgZIC7hLIAHAKQAXBQARAZQAZAkA2gBQA6ABAhg9QAWgoAXhgQAZhvAOglQAdhLAxgUQAaAkAFApQADAQAABEQAAAigNBXIgMBRIAAAJIgBABIAAAHIAAABQAJgIgEgKQAKgZAMg5IAXh0IAGgYQAti3BQAAQAXAAAQAaQARAZAAAmIgEB+QgEB+gBBBQAlhvA4iCQBLiuAfABQAigBAOAsQAHAbAAA0QAABMgmBlQgoBqhCBdQiODHitAaQgaAFgaAAQiegBiohpg");
	this.shape_100.setTransform(311.15,173.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#AC1A2E").s().p("AnUCUQgVgFjLhFQBrgoDxhgQEAhcC5gOIAFAAIACAAIACABQBcBlBxBGQCoBqCfAAQAbAAAagEIACAMQgPAFgmAEQhrANkoANQlXAQhzAAQigAAhXgVg");
	this.shape_101.setTransform(249.0125,198.9625);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AhhsTQABAEACAEQAiBQA7B+QBuDvBqDHQD1HJCcB8QABAAABABQAigNBBguQA8gsAXgXIAAArQgIAWgVA4QgWAughADQABAAACAAQCPAABAiqQAJAAAAgIQAGAGABAJQABAFAAASQAABxhDBnQhJBvhdAAQguAAhKgeQgZgKgcgNIh8hAIgUgLQgogUgzhXQgyhegZgnQgCgDgBgDIAIAAIgFAGAJqG/QA2ArArABQAAAAABAAAhosbIs5DaIgNADAgVJdQg9hLghhHQgehAACgoQABgJACgIAksGwQhugdhMhBQhXhKhsirQgxhNgkhxQgUhCgeiFQgbh5gRgwQgchNgngZAgVJdQAAAAAAABQAAAbgZAcQgXAZgPAAQhTAAhNiQQgXgqgZg+QgCgFgCgEQgTgtgCgDQAEAAAEAFQAFADAEAAAGaI3QASASBIAoQA/AqAAAsQAAATgRAQQgSARgZAAQh3AAhlhaQgIgGgGgGQgUgTgTgVQhjh0g5iwADoJhIAJAAQAEATAYAhQAFAHAGAIQAdAlAAAhQAAAdgRAMQgNAJgZAAQg6AAhNg3QhFgyhChQQgCgDgCgDQgBAAAAAAAguIuQABADADAEQAEAHAIAMQAJAQAAAF");
	this.shape_102.setTransform(266.275,250.55);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#AC1A2E").s().p("ABxLlQhGgyhBhQIgFgGIAAAAQgBgFgJgQIgMgTIgEgHIAEAHIAMATQAJAQABAFQg9hLgihHQgbg6AAgnIAAgHQABgJACgIQgCAIgBAJIAAAHQAAAnAbA6QAiBHA9BLIAAABQAAAbgaAcQgXAZgPAAQhSAAhOiQQgWgqgag+IgDgJQgTgtgDgDQAFAAAEAEQAEAFAEAAQgEAAgEgFQgEgEgFAAQADADATAtIgFADQhugdhMhBQhXhKhsirQgxhNgjhxQgVhBgdiGQgbh5gSgwQgbhNgngZIgDgKIM6jaIAGAJIADAHQAjBQA6B/QBuDvBrDGQD1HJCbB8IACABQA2ArArABIABAAIADAAQCQABBAirQAIAAAAgIQAGAGACAJIABAXQAABxhEBnQhJBvhcAAQguAAhLgeQgZgKgcgNIh7hAIgVgLQgngUgzhXQgzhegYgnIAFgGIgJAAIAEAGQAYAnAzBeQAzBXAnAUIAVALIgEAGQASASBIAoQA/AqAAAsQAAATgRAQQgSAQgYAAQh4ABhlhaIgOgMIALAPQAdAmAAAfQAAAegRAMQgMAJgaAAQg5AAhNg3gAEGKVQgXghgFgTIgIAAIAIAAQAFATAXAhQgTgTgTgWQhjhzg5iwQA5CwBjBzQATAWATATIAAAAgAEGKVIAAAAgAgbJdIAAAAgAkuGtIAAAAgADdE2IAAAAg");
	this.shape_103.setTransform(266.9125,250.55);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#8A522F").s().p("AAGBVQgqgCg2gqQAigOBAgtQA9grAWgXIAAAqIgcBOQgXAughADIgBAAg");
	this.shape_104.setTransform(337.15,291.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#3A1C11").ss(0.1,1,1).p("ABYtsQAkCaBEE5QA+ELA/CiQAQAqA1CkQAoB/AjBLQASAmB4B6QBsBuAAAjQAAAtgrAVQggARgwAAQg/AAhSg6QhDgxhAhMQAQAmAqBFQAtBKAAAcQAAAfgaALQgSAJghAAQhsAAiWkxQgghAgehHQgDgIgDgHQgFAIAAAMQAABTBBBkQAjA6AIAPQAUAnAAAhQAAAvgRASQgPARgoAAQhPAAhQhlQg/hPg4iCQAHAlASAwQAdBSAAAxQAAARgZARQgXARgPAAQgzAAhvjyQg4h4hTjWQhfjagfhfQgziaAAjKQAAhsACggQAEhJAOgfQACgFACgDABat8IgGACIsCDiAAIG2QgOgjgOgjQgkhcgHgbAAMGjQAAAIgEAJQAAABAAABACDEKQAAgCAAgCQAAgOAFADQACACABAFIgIAIQACBGAsBhQAsBcBGBYQAIAKAJAKAjbIuQgGgNgFgOQg2iFgdiJQgdiHAJhIAjgH/QAAAKABAKQABAMADAPAEsJlQADAJAFAL");
	this.shape_105.setTransform(259.3,247.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E11D3D").s().p("ABMJKQggg/gehHIgHgQIABgBQAEgJAAgIQAAAIgEAJIgBABIgbhFQgjhcgHgbQAHAbAjBcIAbBFQgDAKgBALQAABTBABkQAlA6AHAPQAUAoAAAgQAAAvgRARQgPASgogBQhOAAhRhkQg/hQg4iAIgEgcIgBgTIABATIgHABIgDgHQg0iCgciGQgWhnAAhCQAAgVACgQQgCAQAAAVQAABCAWBnQAcCGA0CCIADAHIALAbQAIAkARAwQAeBSgBAxQAAARgZASQgWAQgQAAQgzAAhvjyQg4h4hSjWQhfjagghfQgziZAAjLQAAhsACgfQAEhKAOgfIMCjiIAEAOQAkCaBEE5QA/ELA+CiQAQAqA0CkQApB/AkBKQARAnB4B6QBsBuAAAiQAAAugrAWQggARgwAAQg/AAhSg7QhDgxhAhMIgIgUIgJAAQhGhYgshcQgthggBhHIAIgJIgDgFQgFgDAAANIAAAEQABBHAtBgQAsBcBGBYIARAUQAQAmApBFQAuBKgBAcQABAegaAMQgSAJghAAQhsAAiWkygAAHG0IAAAAg");
	this.shape_106.setTransform(259.3,247.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#3A1C11").ss(0.1,1,1).p("ApTsOQAEACAAAGQBygcCsgVQCegTBVAAQAyAABGAOQAiAGAZAGQgIgJgIgIAk9GKQhkihhYkFQhnkzAAjXQACgxACgqQADhWABg4QAAgNAAgMAoyp+QACgFACgEAB1swQAGABAFACQAIACAIADAB1swQADAEADAEQD0EjAnHpQAHBSALCaQAMCBAVBjQAEAUBMCqQBICjAAAbQAAAggQALQgLAJgbAAQiMAAhsj0QgBgBAAgBQgehDgVhKQgLgigIgkQgYhpAAhOQAAgsAFgUADVtjIgFACAApEsQgCgagBgbQgEhKAAgyAApEsQgGAOgEAVQgFAeAAAlQAABDAZBKQANAlAHAfQAGAeAAAXQAAAegIANQgMARgfAAQhsAAgsiyQgZhkgBiHQgBANgBARQgFBugBAEQgEAvgIAgQgTBHgoAAQg9AAgUiYQgDgZgCgiQgDg7AAhWQAAiMABgdQAEhQAUhQAAzEbQgBACgCACQgEAGgDAHAD/HhQABBEAUBaQAVBhAAAmQAAAZgaASQgXARgXAAQhfAAgxjiQgMg1gJhBQgNhXgGhnAD+HWQAAAGABAFAk4GSQgCgEgDgEAiYE3QAAgDAAgEQAAgrAQh/QAMhhAGgoAiQENQgEAKgDAZQAAAEgBAD");
	this.shape_107.setTransform(246.975,245.25);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E11D3D").s().p("AEzJkIgBgCQgehDgVhKQABBDAUBaQAVBiAAAmQAAAYgaATQgXAQgXAAQhfAAgxjhQgMg1gJhBQgNhYgGhmIAHgNIADgEIgDAEIgHANIgDg1QgEhKAAgzQAAAzAEBKIADA1QgGANgEAWQgFAeAAAlQAABCAZBLQANAlAHAeQAGAfAAAXQAAAegIANQgMARgfAAQhsAAgsiyQgZhlgBiGIABgHIgBAAQAAgrAQh/QAMhiAGgnQgGAngMBiQgQB/AAArIAAAHIgCAeIgGByQgEAvgIAgQgTBHgoAAQg9AAgUiYIAAgzIgFgIQgDg7AAhWQAAiMABgdQAEhPAUhRQgUBRgEBPQgBAdAACMQAABWADA7QhkihhYkFQhnkzAAjXIAEhbIAEiOIAFABQAEACAAAGQBygcCsgVQCegTBVAAQAyAABGANQAiAHAZAGIAGAHQD0EkAnHoIASDtQAMCBAVBjQAEAUBMCqQBICiAAAcQAAAfgQAMQgLAIgbAAQiMAAhsjzgADUDYQAABNAYBqQAIAkALAiIgBgLIgSg7QgYhqAAhNQAAgtAFgTQgFATAAAtIAAAAgAiXEkQADgZAEgKQgEAKgDAZgAoyqLIAEgIIgEAIgAApEgIAAAAg");
	this.shape_108.setTransform(246.975,246.475);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AoypDQAfkFD0i/QBvhXCDgwQCGgwCDAAQCDAABuAzQB3A3AABNQAAAKgBALAJDvxQgIBCgyBKQhUBqgwBFQhWB7gtCGQg8C0AADoQAACfAwCvQAiB8BHCpQBhDpAIAUQAvCBAABTQAABGgQAcQgVAig3AAQhsAAhIjqQgXhFgOhPIAAAAAjXN4QAAAVgBAtQAAAEAAAFQgIBTgmAAQhpAAhml0QgkiFgaiRQgXh+AAgtQAAgLAJh5QAIh4AAgLQAAhHgViPQgViQAAhWQAAgQARg/QACgJACgIQANgvAAgFAI7vyQm3CqjmF/Qj2GWA9IaAC9MaQgFA2AAAfQAAAkAPAqQAOApAPBFQANBGAAAcQAAAUgIAOQgMARgXAAQhsAAhRkCQgKglgKgnQgQg8gMg/QgCgKgCgJQgCAHADAMQAGAlAOBZQAHAuAEAfQAHA1AAAOQAAAtgIAPQgJAQgdAAQhRAAg9iXQgMgegLgkAC/MHQgBAKgBAJQgBgEAAgEQgOhPAAgpAksGjQAEAkAEAiQASChAeCAQAOA8APAyQAAgQAAgEAgrLkQgGglgGgl");
	this.shape_109.setTransform(235.55,157.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#DD6900").ss(0.1,1,1).p("ADDuRQgBABABAAAi9OSQgDgMgCgL");
	this.shape_110.setTransform(273.975,147.475);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#AC1A2E").s().p("AiDNYQgMglgKgnQgQg9gMg/IgDgSIgMhLIAMBLQgCAHACAMIAUB9IAMBOQAHA1AAANQAAAugIAOQgJARgeAAQhRAAg8iXQgMgfgLgjIAAgUIAAAUQgQgygOg8QgdiAgTihIAKgCQg9oaD1mXQDnl+G3iqIAHABQgHBBgzBLQhUBrgvBEQhXB7gtCGQg7CzAADoQAACgAvCuQAiB9BHCpIBpD9QAwCBAABTQAABFgRAdQgUAhg4AAQhsABhIjrQgWhEgPhPIAAAAIgDgqIgBASIgCgIQgNhOgBgqQABAqANBOIACAIQgFA2AAAgQAAAkAOApQAPApAOBGQANBFAAAdQAAAUgIANQgLASgXgBQhsABhQkCgAAwKzIAAAAg");
	this.shape_111.setTransform(249.718,167.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#E11D3D").s().p("AnUL3QgkiFgaiRQgYh/AAgtIAJiEIAJiDQgBhGgUiQQgWiPAAhXQAAgQARg+IAFgRIgFgBQAfkFD0i/QBvhWCEgwQCFgyCDAAQCCABBvAzQB3A3AABMIgBAWIgIAAQm3CqjmF+Qj1GWA8IbIgJACIgIhGIAIBGQATChAdCAQAOA8AQAyIgBBBIAAAKQgJBSglAAQhqABhll0gAotntQAMgwAAgEQAAAEgMAwg");
	this.shape_112.setTransform(235.55,148.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AIfpMQgxgZhfgGQglgCh+AAQmYAAlBF9QiACYhkDFQhSChgzDXQAvAeEhA4QEMA0BNgBQALlIEAl9QBciHBmh1QgHgIgGgEAIypcQgFAEgFAEIAkAAQBsAzBLBcQBYBsAAB9QAABrgRBTQgcCHhBAAQgyAAgUhHQgMgsgIh6QgBgcgCgZQgCBagYBjQgkCYhCAAQgcAAgNgqQgJgcAAgoQAAgLAJhaQAIhaAAgLQAAhUgWg8QABAEAAADQAEAdAAAKQAABngzCLQg4CXg6AAQgSAAgTghQgSgfAAgVQAAgzAehkQAdhkAAg5QAAgbgPggQgHgQgHgKAIopUQgCACgCACQgCABgCACQgBAAAAABQhYBJhSBUQgBAAAAAAQgrAtgpAvAKEksQgCgLgCgKQgUhfgtgpAKEksQADASAFAlQAEAlAAAJQAAAHAAAHQgBgIAAgGQgFg/gGgmgAHZksQgWg9gtglAHWlOQAAALADAXAilJuQgEAAgEAAAtWHlQgCglgCgBQABgBACgCQAEgEgDAtg");
	this.shape_113.setTransform(252.525,56.1759);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#E11D3D").s().p("AlqI7Qkhg4gvgeQAzjXBSihQBkjFCAiYQFBl9GYAAQB+AAAlACQBfAGAxAZQhYBJhSBUIgBAAQgrAtgpAvQgHgIgGgEQAGAEAHAIQhmB1hcCHQkAF9gLFIIgDAAQhPAAkHgzgAG8lTIAAAAg");
	this.shape_114.setTransform(236.925,56.1759);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#AC1A2E").s().p("AhHFOQgIgcAAgoQAAgLAIhbQAJhaAAgLQAAhTgWg7IABAHQAEAcAAAKQAABmgzCLQg4CZg7AAQgSgBgTghQgRgfAAgVQAAgzAdhkQAdhlAAg4QAAgbgOgfQgIgRgHgJQApgwAsgtIAAAAQBShUBZhJIAAAAIAFgEIADgEIAjAAQBtA0BKBbQBYBsAAB9QAABrgRBSQgbCIhBAAQgyAAgUhHQgNgtgHh5IgEg2IAAgOQAAgIgEglQgEglgEgSIgEgUQgThggtgpQAtApATBgIAEAUQAGAmAFA+IABAOQgCBagXBkQgkCZhBAAQgdgBgNgqgAhUhPQgEgYAAgLQAAALAEAYQgXg+gsglQAsAlAXA+IAAAAgABhAiIAAAAgAhUhPIAAAAg");
	this.shape_115.setTransform(308.375,34.15);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#3A1C11").ss(0.1,1,1).p("Ah5CIQgMgrgjhpQgVg+gdhSQhNjfAAgXQAAgbARgYQASgZAYAAQBSAABEDKQAiBmATBuIhMoHQAAgqAZgwQAbgyAcAAQA5AAAnBkQAQApARA5QACAOADAOIAAAAQADACABADQgEgRgFgQQgGgnAAgkQAAiAAiiCQAsipBJAAQBfAAAhEGQARCFAADqQAABUgQDqQgODUAEBkQgLAtheDdQhQC8AABPQAAALAEAVQABABAAACQACANABAIIAJgEABpnxQADAMADANQAWBXADAXABpnxQgFgFgGAAAh5CIQgTgUgegoQglgzgRgUQhHhQhVgGQgJAIAAArQAABCBhB0QAyA8BJBPQgxAAgeA0QgdAzAQAxQg4AGglA8QgZAogHAvQgCANgBANAh5CIQACACABABIAAAJQgBgGgCgGgAl6JVIBuGvIHHjP");
	this.shape_116.setTransform(199.725,41.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E11D3D").s().p("Al6JVIgIgBQAHgvAZgoQAlg8A4gGQgQgxAdgzQAeg0AxAAQhJhPgyg8Qhhh0AAhCQAAgrAJgIQBVAGBHBRQARATAlAzQAeAoATAUQgMgrgkhpIgxiQQhNjfAAgXQAAgaARgYIAqgaQBSAABEDKQAiBmATBuIhMoHQAAgpAZgxQAbgyAcAAQA5AAAnBlQAQAoARA5IgGAXQAGAAAFAFIAGAZQAWBXADAXQgDgXgWhXIgGgZIAAAAIAEAFIgJghQgGgnAAgkQAAiAAiiCQAsipBJAAQBfAAAhEGQARCFAADrQAABTgQDqQgODUAEBkQgLAtheDdQhQC8AABPQAAALAEAVIABADIADAVInHDPgAh2CUIAAgJIgDgDIADAMg");
	this.shape_117.setTransform(199.725,41.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AEEk1QAEiAAVh0QABgGABgFQAKhNAihBQARgiAYgeQAbgjArgCQAygCAJAuQADAPgDARQgCANgCAMQgVBugeBuQgQBFgBApQgBBKAECbQAACIgUBKQgkCIhWDuQhbD7gdBfQgBABAAABQgBADgBADAg9AuQgXhTgShJQgkiNAAg6QAAgvAZg2QAghEAxAAQBTAAAXCxQAGAvAIBcQAKBJASAZIAAg3QAAgKgIh4QgCgegCgYQgFhFAAgIQAAhoAFg7QAAgHABgGQAJg4A4gZQAMgGAHgEIAcALQAcAQADBNQANBmgBCEAEEktIAAgIAEEktQgBAJAAAIIAAAJQABgNAAgNgAg1A2QgDgBgDgCQgCgCgCgBIAAAAQgTgOgNgbQgDgHgVg5QgehShAAAQgeAAgNAZQgIARAAAZQAABHA9BuQAeA4A/BaAhyD9QgYgEgNAAQgTAAgaAaQgaAaAAAUQAAATASAYQABACACACQAAABAAAAQAAAAgBAAQgYAGgfAeQghAgAAATQAAASASAUQADAEAFAFAjJFxQABABABABQAGAHAOAPAkQHuQgcADgaAiQgIALgkA8QgbAtgVAQQgdAXghgNACfMOQgCACgCABQgdAShBAEQgRABhdAAQiQAAhZgUQhXgUiEg+QAJgVACgBQADgCADABQAEABAEAF");
	this.shape_118.setTransform(198.325,41.0708);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#E11D3D").s().p("AkaMUQhXgUiEg+QAJgVACgBQADgCADABQADABAFAFQgFgFgDgBIADgKQAiANAdgXQAVgQAbgtQAkg8AIgLQAagiAbgDQgRgUAAgSQAAgTAhggQAfgeAYgGIABAAIAAgBIgDgEQgSgYAAgTQAAgUAagaQAagaATAAQANAAAYAEIgRAIIAVgGQg/hageg4Qg9huAAhHIAIgqQANgZAeAAQBAAAAeBSQAVA5ADAHQANAbATAOIAAAAIAEADIAGADIgGgDIgEgDIAAAAIACgCQgXhTgShJQgkiNAAg6QAAgvAZg2QAghEAxAAQBTAAAXCxQAGAvAIBcQAKBJASAZIAAg3IgIiCIgEg2IgFhNQAAhoAFg7IABgNQAJg4A4gZIATgKIAcALQAcAQADBNQANBmgBCEQAEiAAVh0IACgLQAKhNAihBQARgiAYgeQAbgjArgCQAygCAJAuQADAPgDARIgEAZQgVBugfBuQgPBFgBApQgBBKAECbQAACIgUBKQgkCIhWDuQhbD7geBfIAAACIgKgDIgEADQgdAShBAEQgRABhdAAQiQAAhZgUgAkIH3IgJgJIAJAJgAjIFzIAVAWIgVgWIgBgCIABACgAEDkcIAAAJIABgaIAAgIIAAAIIgBARg");
	this.shape_119.setTransform(198.325,41.0708);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92}]}).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_106},{t:this.shape_105}]},1).to({state:[{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]},1).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).wait(1));

	// left_leg
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#683D2A").ss(0.1,1,1).p("AC1glQAAAAAAABQgRBFguBBQg8BWhFAAQhEAAgyg8Qgzg8AAhTQAAgTAVhJQAPgyAEgW");
	this.shape_120.setTransform(128.15,207.475);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AihhBQACgKAAgEACgBQQABgDABgD");
	this.shape_121.setTransform(130.25,195.675);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E11D3D").s().p("AiBB8Qgzg8AAhTQAAgTAWhJQAOgyAFgWIALADIE1CPIAAABQgQBFguBBQg9BWhFAAQhDAAgzg8g");
	this.shape_122.setTransform(128.15,207.475);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AC2gkQgBADgBADQAAAAAAABQgQBFguBBQg8BWhGAAQhDAAgzg8Qgzg8AAhTQAAgTAWhJQAOgyAFgWQACgKAAgE");
	this.shape_123.setTransform(128.225,210.275);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#DD6900").ss(0.1,1,1).p("AC1glQAAAAAAABQgRBFguBBQg8BWhFAAQhEAAgyg8Qgzg8AAhTQAAgTAVhJQAPgyAEgW");
	this.shape_124.setTransform(128.15,210.975);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#E11D3D").s().p("AiBB8Qgzg8AAhTQAAgTAVhJQAPgyAEgWIAMADIE1CPIAAABQgRBFguBBQg7BWhGAAQhDAAgzg8g");
	this.shape_125.setTransform(133.05,206.075);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AC1glQAAAAAAABQgRBFguBBQg8BWhFAAQhEAAgyg8Qgzg8AAhTQAAgTAVhJQAPgyAEgW");
	this.shape_126.setTransform(133.05,206.075);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AihhBQACgKAAgEACgBQQAAgDACgD");
	this.shape_127.setTransform(135.15,194.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_122,p:{y:207.475}},{t:this.shape_121,p:{y:195.675}},{t:this.shape_120}]}).to({state:[{t:this.shape_122,p:{y:210.975}},{t:this.shape_123,p:{x:128.225,y:210.275}}]},1).to({state:[{t:this.shape_122,p:{y:210.975}},{t:this.shape_123,p:{x:128.225,y:210.275}}]},1).to({state:[{t:this.shape_122,p:{y:210.975}},{t:this.shape_121,p:{y:199.175}},{t:this.shape_124}]},1).to({state:[{t:this.shape_122,p:{y:210.975}},{t:this.shape_121,p:{y:199.175}},{t:this.shape_124}]},1).to({state:[{t:this.shape_125,p:{y:206.075}},{t:this.shape_123,p:{x:133.125,y:205.375}}]},1).to({state:[{t:this.shape_125,p:{y:206.075}},{t:this.shape_123,p:{x:133.125,y:205.375}}]},1).to({state:[{t:this.shape_125,p:{y:206.075}},{t:this.shape_127,p:{y:194.275}},{t:this.shape_126,p:{y:206.075}}]},1).to({state:[{t:this.shape_125,p:{y:207.475}},{t:this.shape_127,p:{y:195.675}},{t:this.shape_126,p:{y:207.475}}]},1).to({state:[{t:this.shape_122,p:{y:210.975}},{t:this.shape_123,p:{x:128.225,y:210.275}}]},1).to({state:[{t:this.shape_122,p:{y:207.475}},{t:this.shape_123,p:{x:128.225,y:206.775}}]},1).wait(1));

	// left_foot
	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgDADQgCABAFAAQABBOgoA0QgoA2hEAAQgMAAgSgEQgSgEgHAAQAFgKATgOQAigaADgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_128.setTransform(96.2,225.775);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQABADABAEQAEAJAFARAgQgNQAAABACACQADADACAFAARAhIAAAIIghAA");
	this.shape_129.setTransform(113.15,214.925);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#563A07").s().p("AhtCDQgRgEgJAAQAGgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQAQAAAUAFQAVAGAGAGQBEgRAiAAIAIAAIAAAMIAAA4IgqAAQgLAAgMAEQgMAEgHAAQAAAFgDADQgBAAAAAAQAAAAABABQAAAAABAAQABAAABAAQABBOgoA0QgoA2hEAAQgLAAgTgEg");
	this.shape_130.setTransform(96.2,225.775);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQABADABAEAARAhIAAAIIghAAAgQgNQAAABACACQADADACAFQAEAJAFAR");
	this.shape_131.setTransform(113.15,218.425);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZh6IAAgMIgJAAQgiAAhEARQgGgGgVgGQgTgFgRAAQgaAAguARQgtASgOAQQAjgCArAVQAxAYAAAdQAAAugwAoQgDACgiAaQgTAOgFAKQAHAAASAEQASAEAMAAQBEAAAog2QAog0gBhOQgFAAACgBQADgDAAgFQAHAAANgEQALgEALAAIArAA");
	this.shape_132.setTransform(96.2,229.275);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#412C05").ss(0.1,1,1).p("ACRiIIgBgMIgJABQghAEhCAZQgGgEgWgDQgUgDgQACQgaADgrAXQgrAXgLASQAigGAtAQQA0AQADAdQAGAugqAuQgDACgfAeQgQARgFAKQAIgBASACQATACALgCQBDgIAhg7QAig5gMhNQgEAAABgBQADgDgBgFQAIgBALgFQALgGALgBIAqgF");
	this.shape_133.setTransform(101.475,225.6321);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgTgaIgCgOQACAOAHAQQACADABADQAFAJAHARAgJgEQgDgEgDgDQgDgBAAgBIAAgBAAVAcIABAJIghAE");
	this.shape_134.setTransform(117.875,213.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#563A07").s().p("AhSCUQgSgCgIABQAFgKAQgRIAiggQAqgugGguQgDgdg0gQQgtgQgiAGQALgSArgXQArgXAagDQAQgCAUADQAWADAGAEQBCgZAhgEIAJgBIABAMIAAAAIAHA4IgqAFQgLABgLAGQgLAFgIABQABAFgDADQAAAAAAABQAAAAAAAAQABAAABAAQAAAAABAAQAMBNgiA5QghA7hDAIIgLABIgTgBg");
	this.shape_135.setTransform(101.475,225.6321);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgMAEgIAAQAAAFgDADQgBABAEAAQABBOgoA0QgoA2hEAAQgLAAgSgEQgTgEgHAAQAFgKATgOQAjgaACgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_136.setTransform(101.1,224.375);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQABAPAFAQQABADAAAEQAEAJAFARAgQgNQAAABACACQADADACAFAARAhIAAAIIghAA");
	this.shape_137.setTransform(118.05,213.525);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#563A07").s().p("AhsCDQgTgEgHAAQAFgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgiACQANgQAtgSQAugRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAMIAAA4IgrAAQgLAAgLAEQgMAEgJAAQAAAFgDADQAAAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQACBOgoA0QgoA2hEAAQgLAAgSgEg");
	this.shape_138.setTransform(101.1,224.375);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AARAhIAAAIIghAAAgQgaIAAgOQAAAPAFAQQACADAAAEQAEAJAFARAgQgNQAAABACACQADADACAF");
	this.shape_139.setTransform(122.95,208.625);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgDADQgCABAFAAQABBOgoA0QgoA2hEAAQgMAAgSgEQgSgEgHAAQAFgKATgOQAigaADgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_140.setTransform(106,219.475);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#563A07").s().p("AhtCDQgRgEgJAAQAGgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAIAAIAAAMIAAA4IgqAAQgLAAgLAEQgNAEgHAAQAAAFgEADQAAAAAAAAQAAAAABABQAAAAABAAQAAAAACAAQABBOgoA0QgoA2hEAAQgMAAgSgEg");
	this.shape_141.setTransform(106,219.475);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgEADQgBABAFAAQABBOgoA0QgoA2hEAAQgMAAgSgEQgSgEgIAAQAGgKATgOQAigaADgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQAQAAAUAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_142.setTransform(110.9,214.575);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#563A07").s().p("AhsCDQgTgEgHAAQAFgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgiACQANgQAtgSQAugRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAMIAAA4IgrAAQgLAAgMAEQgLAEgJAAQAAAFgCADQgBAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQACBOgoA0QgoA2hEAAQgMAAgRgEg");
	this.shape_143.setTransform(110.9,214.575);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgMAEQgMAEgIAAQAAAFgDADQgBABAEAAQACBOgoA0QgoA2hEAAQgMAAgSgEQgSgEgIAAQAGgKATgOQAigaADgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQAQAAAUAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_144.setTransform(115.8,211.075);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQABADACAEQADAJAFARAARAhIAAAIIghAAAgQgNQAAABADACQACADADAF");
	this.shape_145.setTransform(132.75,200.225);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#563A07").s().p("AhtCDQgRgEgJAAQAGgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAIAAIAAAMIAAA4IgqAAQgLAAgLAEQgNAEgHAAQAAAFgEADQAAAAAAAAQAAAAABAAQAAABABAAQABAAABAAQABBOgoA0QgoA2hEAAQgMAAgSgEg");
	this.shape_146.setTransform(115.8,211.075);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQABADABAEAgQgNQAAABACACQADADACAFQAEAJAFARAARAhIAAAIIghAA");
	this.shape_147.setTransform(113.15,218.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_130,p:{y:225.775}},{t:this.shape_129,p:{y:214.925,x:113.15}},{t:this.shape_128,p:{y:225.775}}]}).to({state:[{t:this.shape_130,p:{y:229.275}},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_135},{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_130,p:{y:229.275}},{t:this.shape_129,p:{y:218.425,x:113.15}},{t:this.shape_128,p:{y:229.275}}]},1).to({state:[{t:this.shape_130,p:{y:229.275}},{t:this.shape_129,p:{y:218.425,x:113.15}},{t:this.shape_128,p:{y:229.275}}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_143},{t:this.shape_129,p:{y:203.725,x:127.85}},{t:this.shape_142}]},1).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_130,p:{y:229.275}},{t:this.shape_128,p:{y:229.275}},{t:this.shape_147}]},1).to({state:[{t:this.shape_130,p:{y:225.775}},{t:this.shape_129,p:{y:214.925,x:113.15}},{t:this.shape_128,p:{y:225.775}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.9,-62.7,437.9,411.9);


(lib.rlines = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("EAzxgesIPAAAEAuJgVUMArJAAAEAkJgk8MBBBAAAAT5t0MBGBAAAEBe4AdUIAqAAEAnRAcYMA3nAAAATRDEMBH5AAAEArpATUIUoAAA5/oCMg00AAAEgn5gdwMggCAAAEgPXghWI/kAAAGWGLIuNAAEgHkAiwI9jAAEgxlAPsIsBABEg8tAhqI7UAAEhkYAlwIJ2AAEgyMAd7MgwIgABEg1zAXNMgvWgABEhMzALoIybAAEhQ1gi6ItTAAEg7wgTSMgjoAAAEg4SAFZMgoBgABEAVLglvItJABAbQNiMglogACALLRHMghGgABAXDjWMhSCgABAUP5OMgrugABEg8NgQpMBIUAAAAa0rzMgmSAABEAh0AfLMgi0gABEAdSAk8I8HAB");
	this.shape.setTransform(-65.225,6.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AFe8MMAgCAAAAZUzSMAjoAAAEAuagi6INTAAEBB9AlwIp2AAAPKPsIMBABAV3FZMAoAgABEAqXALoISbAAATXXNMAvWgABEAaRAhqIbVAAAPxd7MAwIgABEg2qgbkMArvgABEg3mglvINIABEg4QgKZMAmTAABEgtnATnMAhIgABA+7IXIOOAAEhBxAaAMBA2AAAEg9sANiMAlpgACEg7CAk8IcHABEhCsAgHMAi1gABEg5fAAPMBSCgABEgQtAhMIdiAAAOizdMhIVAAAAocoCMA0zAAAEgTEgimIfkAA");
	this.shape_1.setTransform(-12.2,6.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("EAkKgbkMgrugABEAlGglvItIABEAlwgKZMgmTAABAbHTnMghHgABAMbIXIuNAAEArMANiMglpgACEAohAk8I8GABEAwMAgHMgi1gABEBVOgCuMhSDgABA3+8MMggCAAAEgr0gTSMgjoAAAEhA6gi6ItTAAEghqAPsIsBABEhUdAlwIJ2AAEgoXAFZMgoAgABEg83ALoIybAAEgl3AXNMgvWgABEgsxAhqI7VAAEgiRAd7MgwIgABAzm31MBIVAAAAqDtMMg00AAAEgBzAhMI9iAAEAAkgimI/kAAEAvRAaAMhA1AAA");
	this.shape_2.setTransform(106.325,6.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-713.6,-236.1,1366.4,485.1);


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
	this.text = new cjs.Text("how many birds \nflew by?", "100px 'Zerove'", "#FFFFFF");
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
	this.text = new cjs.Text("quickly count how many birds fly by.", "100px 'Zerove'", "#FFFFFF");
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


(lib.innercloud3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#CCCCCC","#FFFFFF"],[0,0.463],0,51,0,-51).s().p("Ao5DkQgegegKgQQgWglgBg8QABhwB4hmQB1hkB6AAQCMAABMBCQA5AzA2B+IADgDQAXgPAXgDQAMgCAxAAQCKAABCBtIAIAPIAAgSIAmgMQAhgKARAAQBKAAAzA9QAmAuAFAvIgKABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.innercloud3, new cjs.Rectangle(-63.2,-23,126.5,46), null);


(lib.innercloud1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#CCCCCC","#FFFFFF"],[0,0.463],-4.4,78.3,-4.4,-69.3).s().p("AolGMQhxgKhFgKIiLAAIAAq6IBjglQCBgtBpAAQC1AABaBFQBpBRgUCtQAEgRAXgUQAcgYAzgDQAzgDAqATQAqATgQBDQAegTAwgMQA3gNAzAAQBMAABrAZQBuAaBeAoQDoBmAYB9QhQgPhdgeQhXgbgXgBQhVAAg1BCQgcAjgMAJQgbAVgnAAQgdAAhKgdQhJgdgMgHQhYBFiPAzQitA9imAAQgfAAhogJg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.innercloud1, new cjs.Rectangle(-87.1,-40.5,174.2,81), null);


(lib.eagleflyingloop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// white_eye
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAHQgDgDgBgEQABgDADgDQAEgDADAAQAFAAADADQAEADAAADQAAAEgEADQgDADgFAAQgDAAgEgDg");
	this.shape.setTransform(250.55,138.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAHQgDgDAAgEQAAgDADgDQAEgDADAAQAFAAADADQADADAAADQAAAEgDADQgDADgFAAQgDAAgEgDg");
	this.shape_1.setTransform(255.45,137.125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({y:142.025},0).wait(3).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({y:138.525},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(5).to({_off:false},0).wait(3).to({y:138.525},0).to({_off:true},1).wait(2));

	// black_eye
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpAhQgRgNAAgUQAAgSARgOQARgNAYAAQAYAAASANQARAOAAASQAAAUgRANQgSAOgYAAQgYAAgRgOg");
	this.shape_2.setTransform(248.125,139.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpAhQgRgNAAgUQAAgSARgOQARgOAYAAQAYAAASAOQARAOAAASQAAAUgRANQgSAOgYAAQgYAAgRgOg");
	this.shape_3.setTransform(248.125,142.75);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgpAhQgRgOAAgTQAAgTARgNQARgOAYAAQAYAAASAOQARANAAATQAAATgRAOQgSANgYAAQgYAAgRgNg");
	this.shape_4.setTransform(253.025,137.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{x:248.125}}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_2,p:{x:253.025}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2,p:{x:248.125}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).wait(3).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(1));

	// beak
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#DCD96B").ss(0.1,1,1).p("AElAsQidA7hOAcQiMAzhkAAQhQAAgqg7QgVgegIgmQAAgCgBgCQgEgWAAgZQAAhqBdgtQBIgiCDAAQCTAABfBJQBGA1BFB2QgDgCgDgCQgagOgVgMQgfgRgVgLQhGghguAAQg1AAiSAtQiSAugnAAQgjAAgDAAQgJgCgSgI");
	this.shape_5.setTransform(290.35,159.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EEECB6").s().p("AkvB7QgWgegIglIADgDQABgDgFABQgEgWAAgZQAAhqBdgtQBIgiCEAAQCSAABgBJQBFA1BFB2IgGgEIgvgaIg0gcQhFghgvAAQg1AAiRAtQiTAugnAAIgmAAQgJgCgRgIQARAIAJACIAmAAQAnAACTguQCRgtA1AAQAvAABFAhIA0AcIAGALQibA7hPAcQiLAzhlAAQhQAAgpg7g");
	this.shape_6.setTransform(290.35,159.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#DCD96B").ss(0.1,1,1).p("AElAsQidA7hOAcQiMAzhkAAQhQAAgqg7QgVgegIglQAAgDgBgCQgEgWAAgZQAAhqBdgtQBIgiCDAAQCTAABfBJQBGA1BFB2QgDgCgDgBQgagPgVgMQgfgRgVgLQhGghguAAQg1AAiSAtQiSAugnAAQgjAAgDAAQgJgCgSgI");
	this.shape_7.setTransform(290.35,163.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EEECB6").s().p("AkvB7QgWgegHglIACgDQABgDgFABQgEgWAAgZQAAhqBdgtQBIgiCEAAQCSAABgBJQBFA1BFB2IgGgDIgvgbIg0gcQhFghgvAAQg1AAiRAtQiTAugnAAIgmAAQgJgCgRgIQARAIAJACIAmAAQAnAACTguQCRgtA1AAQAvAABFAhIA0AcIAGALQibA7hPAcQiLAzhlAAQhQAAgpg7g");
	this.shape_8.setTransform(290.35,163.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#DCD96B").ss(0.1,1,1).p("AElAsQidA7hNAcQiNAzhkAAQhQAAgpg7QgWgegIglQAAgDAAgCQgFgWAAgZQAAhqBdgtQBIgiCDAAQCTAABgBJQBFA1BFB2QgDgCgDgBQgagPgVgMQgegRgWgLQhGghguAAQg1AAiRAtQiTAugmAAQgkAAgDAAQgJgCgRgI");
	this.shape_9.setTransform(295.25,158.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EEECB6").s().p("AkwB7QgUgegJglIACgDQACgDgEABQgFgWAAgZQAAhqBegtQBHgiCDAAQCTAABfBJQBGA1BFB2IgGgDIgugbIg1gcQhGghguAAQg1AAiRAtQiTAugnAAIgmAAQgJgCgSgIQASAIAJACIAmAAQAnAACTguQCRgtA1AAQAuAABGAhIA1AcIAGALQidA7hNAcQiNAzhjAAQhRAAgqg7g");
	this.shape_10.setTransform(295.25,158.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10,p:{y:158.125}},{t:this.shape_9,p:{y:158.125}}]},1).to({state:[{t:this.shape_10,p:{y:158.125}},{t:this.shape_9,p:{y:158.125}}]},1).to({state:[{t:this.shape_10,p:{y:158.125}},{t:this.shape_9,p:{y:158.125}}]},1).to({state:[{t:this.shape_10,p:{y:159.525}},{t:this.shape_9,p:{y:159.525}}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	// right_wing
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#DD6900").ss(0.1,1,1).p("AONGBQgUhNgzj0QgqjKglhuQg2ihhPhiQhdhyiMgrQh6gmomjPQkThoiDgwQhygqgEAAQgnAAggAZQgLAIgHAJQgQATAAAYQAAB9GuC6QA3AYA6AXQBaAlBkAjQBhAiAqANQAJADAGABAk0hzQgVgCgUgDQhsgPhRgaQipg3AAhxQAAgkAagTQAYgSArAAQBCAADTAiQAPADAOACQgJgFgQgHQghgNg8gWQh1grg6gaQjghlAAhyQAAgmArgHQAAAAA+AAQAuAADCAyQBFASAuALQBTAVAHAAAk0lrQAEABAEAAQCUAZA2APQAFgDAEAEQACABABABQgFgBgHgCAi+B8QgbABgsgFQgCAAgBAAQhEgIg+gSQipgwAAhTQAAhGDWgHQAPgBAaAAQAEAAAEAAQBKABCXADAihFnQgCAAgCAAQhdAAg7gRQhVgYAAg3QAAhlCLgcQABAAAAAAQAbgFAtgFQAHgBAIgBQASgCAVgBQBHgGAkgFQAKgBAHgCAAIJ7Qg+gYg4g2QhIhFAAhKQAAgQAHgOQAJgPAEgIQABgBAAgBQADgGASgCABpLvQgFAAgFgBQgWgDgZgVQgkgegEgmQgBgNABgKQAFgVBEAHAA2FWQghAGhXAGQhGAFgZAAAC6N8QghgHgfgdQgiggAAggQAAgZAEgEQAHgHAGgFQAGgHACgDIAAAIQgEABgEABAC6N8QACgEACgEIAAAJQgCgBgCAAgANJQWQghAhhqAPQhFAKhDAAQiIAAiDg2QiahBAphd");
	this.shape_11.setTransform(76.625,76.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CC66CC").ss(0.1,1,1).p("AABgHIgBAP");
	this.shape_12.setTransform(168.475,114.3125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF8012").s().p("AEnQaQibhBAqhdQghgHgfgdQgiggAAggQAAgZADgEIANgNIgJAAQgXgDgZgVQgjgegEgmQgCgNACgLIABgBQAEgOAkAAIABAAIAAAAIAbACIACAAIABAAIgBAAIgCAAIgbgCIAAAAIgBAAQgkAAgEAOIgBABQg+gXg4g2QhJhFABhKQAAgQAHgOIANgXIABgCQADgGASgCQgSACgDAGIgEAAQhdAAg7gRQhWgYAAg3QAAhlCMgcIABAAQAagFAugFQgcABgsgFIgCAAQhEgIg/gSQiogwAAhTQAAhGDVgHIAqgBIgpgFQhsgPhRgaQiqg3AAhxQAAgkAagTQAZgSArAAQBCAADTAiIAdAFIgZgMQgigNg7gWQh1grg7gaQjfhlAAhyQAAgmAqgHIA/AAQAuAADCAyIBzAdQBaAlBkAjQBhAiAqANIAPAEIgPgEQgqgNhhgiQhkgjhaglQBTAVAHAAQgHAAhTgVQg6gXg3gYQmui6gBh9QABgYAQgTQAHgJALgIQAfgZAoAAQAEAAByAqIGWCYQIlDPB7AmQCLArBeByQBPBiA1ChQAlBuAqDKQAzD0AVBNIAIABIhBKUIgLAAQghAhhqAPQhFAKhEAAQiHAAiDg2gAC2N8IADABIAAgJIgDAIgABkLuIAJgBIAAgIIgJAJIAAAAgAhGFiQhHAFgYAAQAYAABHgFQBXgGAggGQggAGhXAGgAghBsQglAFhGAGIgnADIgPACIAPgCIAngDQBGgGAlgFIARgDIgRADgAhPhvQiXgDhKgBIgFAAIgDAAIADAAIAFAAQBKABCXADgAhmlCIALADIgCgCQgCgCgDAAIgEABgAkwlqQCTAZA3APQg3gPiTgZIgIgBIAIABgAlxqUIAAAAg");
	this.shape_13.setTransform(77.05,76.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF9933").ss(0.1,1,1).p("AAwlIIADgSAgwFSIgCAJ");
	this.shape_14.setTransform(166.025,151.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#66CC00").ss(0.1,1,1).p("AgDgBQADABAEAC");
	this.shape_15.setTransform(31.625,24.2875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#66FF00").ss(0.1,1,1).p("AAggPQgcAAgjAg");
	this.shape_16.setTransform(-3.6,-59.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#DD6900").ss(0.1,1,1).p("AiRnnQhchckViNQgEgCgEgDQj2h8gpAAQgyAAgOAZQgIAPAAA4QAABuC1B9QAVAOAWAOQgYgHgUgDQgVgEgQAAQgqAAghAaQgiAbAAAlQAABECjBrQAmAZAoAWQhUgYgaAAQgqAAgWAaQgRAUAAAbQAABhC5BgQAyAaBfApQBCAcAaAOQAFACADADQgggEgtgGQgPgBgOgCQhqgMgbAAQgzAAgmASQgrAUAAAiQAABbDoAmQBYAOBgAEQAAgEAAgDAtoy+QgiAfAwA2QAwA3BaBnQBBBLCIClAN3IhQiBlxhpjEQikkzj2jbQjdjDj0i3QmwlDiaAAAqRnqQBGAUBpAwQAIADAJAEQBkAvB/BDAnkmJIgIAAIAAgEQhbguhKgvApejAQAiAKArAOQChAzA/AlAoEiPQgKgFgKgFQgkgTgigUAlvCkQABAAACAAQA1AGAOADAlCFmQAAAAABABQAKB6A3BXQA+BiBkAPQglAqBCA6QBAA5AygNQgRAXAAAtQAABJAgAuQAiAxA9ABQAmBeCaA0QB4AoCAAAQA5AAA1gJQA8gJAhgQAlCFmQAlABAmAA");
	this.shape_17.setTransform(80.5237,63.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF8012").s().p("AFXS4Qiag0gmheQg9gBgigxQggguAAhJQAAgtARgXQgyANhAg5QhCg6AlgqQhkgPg+hiQg3hXgKh6IgBgBQAlABAmAAQgmAAglgBIAAgHIAAAHQhggEhYgOQjogmAAhbQAAgiArgUQAmgSAzAAQAbAABqAMIAdADIBNAJIADABQA1AGAOADQgOgDg1gGIgDgBIgIgEQgZgOhDgcQhfgpgygaQi5hgAAhhQAAgbARgUQAWgaAqAAQAaAABUAZQAiATAkATIAUAKIgUgKIAHgPIhNgXQgogXgmgZQijhrAAhEQAAglAigbQAhgaAqAAQAQAAAVAEQAUADAYAHIgrgcQi1h9AAhuQAAg4AIgPQAOgZAyAAQApAAD2B9IAIAEIgFgLQiIilhBhLIiKidQgwg3AigfIBAghQCaAAGwFDQD0C3DdDDQD2DbCkEzQBpDECBFxIAQACIhhKbIgEAAQghAQg8AJQg1AJg5AAQiAAAh4gogAk5hQQg/glihgzQChAzA/AlgAj2ktQh/hDhkgvIgRgIQhpgvhGgUQBKAvBbAtIAAAFIAIAAIATgWQBkAvB/BDgAiZnnQhchckViNQEVCNBcBcg");
	this.shape_18.setTransform(81.3112,63.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#DD6900").ss(0.1,1,1).p("AjUocQgSgVgohDQgjg6gZgnQgUghgOgVQiIjKhgAAQgXAAgTArQgSAmAAAhQAACHCYDaQA8BWA+BBALjGWQgvgmgagsQgTgggQg5QgThDgMgaQgZg2gugvQjGjFiNimQgagehDiOQhVi4guhjQi0l9hAAAQhiAAAACTQAACABFCQQATAoAoBOQAVAsAPAlQADAEAAAEQgBgBAAgCQgBgCgBgDALmFsIgDAqQAFAEAFAEAjRoUQAGARAFAQIAAAHQAAgHgLghgAmAloQg1gQh0hCQiDhKgKAAQgRAAgUAiQgRAeAAAQQAAB5C1CNQBBAyBGAmQArAYAXAIQAJADAGAAAlwgzQhAAAh3gmQhsgmgFAAQgeAAgMASQgIAMAAAeQAABQBzA8QAcAOA2AaQAHgCAHgCAoFBxQAEACAFADQAwAZARAZAoFBxQgeAJgXAUQgjAcAAApQAAA8A1AbQARAKBKATQAAgDABgDAnNFHQgUCCA7BWQA6BUBzAQIAABMQAQAeApAOQAaAIA9AIQACBAA7BGQA1BBBbA5QDGB8C4AAQBDAAA2gUQA+gYAXgtAnNFHQAEABAFAB");
	this.shape_19.setTransform(94.325,78.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF8012").s().p("ABpQLQhbg5g1hBQg7hGgChBQg9gHgagJQgpgNgQgeIAAhMQhzgQg6hUQg7hWAUiCQhKgTgRgJQg1gcAAg8QAAgpAjgdQAXgTAegJIhSgoQhzg7AAhRQAAgdAIgOQAMgRAeAAQAFAABsAnQB3AlBAABIACgEQgXgIgrgXQhGgnhBgyQi1iNAAh5QAAgQARgeQAUgiARAAQAKAACDBKQB0BCA1AQIACgDQg+hAg8hXQiYjZAAiIQAAghASgmIAqgrQBgAACIDLIAiA1IA8BiQAoBCASAVIACAFIABADQAAgEgDgEQgPglgVgsQgohOgTgoQhFiQAAiAQAAiTBiAAQBAAAC0F9ICDEcQBDCNAaAfQCNClDGDFQAuAuAZA2QAMAcATBCQAQA5ATAgQAaAsAvAmIgvKYIgEAAQgXAtg+AYQg2AUhDAAQi4AAjGh8gAnIFHIAJACIgJgCIABgHIgBAHIAAAAgAoABxIAJAFQAwAZARAZQgRgZgwgZIgJgFIAOgEIgOAEIAAAAgAlagyQgGgBgJgDQAJADAGABgAjBnsIAAgHIgLghQALAhAAAHg");
	this.shape_20.setTransform(93.825,78.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#DD6900").ss(0.1,1,1).p("AM2mRIAAgIIgKADQAFADAFACgAI+ChQAHgGACgDQA8hcAthrQBYjwAqhoQACgFACgFAiGjOQAMgmALhYQAMhlAGgbAiGjOQgCgBgCAAQgqAAgWAjQgRAbAAAjQAAAtBhCZQBOB8AsA2QgbgQgvgyQgwg2gdggIgBAAQgFgGgFgFQh1h7hIAAQgiAAgMAYQgIASAAAqQAAA8A0BDQAIAJAJALQAgAkA5A0Qgngahbg+QhzhPgtAAQgcAAgTARQgRAPAAAXQAAAoBPBBQA/A1AUAGIAAAJIgrAAQhAgcg4gWQhugsgpAAQgvAAgMASQgJAMAAAvQAAB3EtAAQD5AACjhRQApgUBEgkQAJgEAZgFQAZgGAxgBQAygCBQAJQBQAJAdABQBDAAA7gzQALgKAKgUQAOgdA6gyQADgDAEgDQiwg2gjgUQhhg6gmhbQgPglgNhEQgRhagEgRQgeh1hRAAQgoAAgUAhQgQAdAAAzQAAA5BPDGQAoBjAqBbIAAAIQgfgZgphDQgCgDguhRQgKgTgOgYQhWicg5gFgAI+CgQAAAAAAABAI3CmQADgDAEgCAj3ErQAXAQAFACIgJAAQgKgJgJgJg");
	this.shape_21.setTransform(89.65,204.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC6100").s().p("Aq5E0QAAguAJgMQAMgSAvAAQApAABuAsQA4AWBAAbIArAAIAAgIQgUgHg/g0QhPhBAAgoQAAgXARgPQATgSAcABQAtAABzBPICCBYQg5g0gggkIgRgVQg0hCAAg9QAAgpAIgRQAMgaAiABQBIAAB1B7IAKALIABAAIBMBVQAvAzAcAQQgtg3hOh7QhgiZAAgtQAAgjARgbQAWgiAqgBIAEABQA4AFBXCcIAYArIAwBTQApBEAfAZIAAgIQgqhcgohiQhQjHAAg4QAAgzARgdQAUgiAoAAQBRABAeB0QAEASARBZQANBFAPAlQAlBbBiA6QAiAUCxA2IgIAGQg5AygOAdQgKAUgLAKQg7AyhEAAQgcAAhQgJQhQgJgyABQgyACgYAGQgZAFgJAEIhuA4QiiBQj5AAQktAAAAh3gAhoEbIAJAAIgcgSIATASg");
	this.shape_22.setTransform(77.2625,207.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF8012").s().p("AkFEDIgwhUIgYgrQhXibg5gFQAMgnALhYQAMhlAGgbQAlgTCXgYQCXgZBNAAQBbAADIA6QCYArAtAWIAKAFIgEAKQgpBohYDuQgtBsg9BdQgCADgHAGIAAgCQiwg2gigUQhhg6glhbQgPglgNhFQgRhZgEgRQgeh1hRAAQgoAAgUAiQgRAdAAAzQAAA4BQDGQAoBjAqBbIAAAJQgfgZgphEg");
	this.shape_23.setTransform(123.975,186.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#DD6900").ss(0.1,1,1).p("AmUHIQgDgGgYhiQgRhGAAg2QAAhGBImXQBImZAAhGQAAgZgDgXQgEgigJgKIgIAAAkzszIgNgBADEKjQgDgBgDgCQiUhchCjKQgehpgNgkQgUg8gaAAQggAAgXBNQgSA7AAAnQAAAqAKA1QAJA0ATA/QALAkALAcQgbgagcg1Qggg+gQgeQg6hshEAAQgdAAgNAjQgJAWAAAfQAAAKACALAImsTQAEEJgsEzQgIA9hPHCQgoDoiyCNQgFADgEADQgIAHgIAFQi5CGj5AAQhnAAhSgiQhugtAAhXQAAhHA2AAQApAAAlAiQA1AyAiARQgQgpgPgoQgkhhgHgzAlKKtQAJAVAJAVAh+JyQAaBEAZAQ");
	this.shape_24.setTransform(109.1668,237.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC6100").s().p("AkDEgQhugtAAhWQAAhIA2AAQApAAAlAiQA1AyAiARIgfhRQgkhhgHgyIgCgVQAAgfAJgXQANgiAdAAQBEAAA6BsIAwBbQAbA1AbAaQgLgcgLglQgTg+gJgzQgJg1AAgqQAAgnARg7QAXhNAgAAQAaAAAUA7QANAlAeBqQBDDICUBcIgKAPQi6CGj4AAQhnAAhSgigAiEDlIgSgrIASArgABoDUQgZgRgahEQAaBEAZARg");
	this.shape_25.setTransform(91.175,287.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF8012").s().p("ACMLoQiThchEjJQgehqgMgkQgUg8gbAAQggAAgXBNQgRA7AAAnQAAArAJA0QAKA1ATA+QALAlALAcQgbgbgdg1IgvhcQg7hshDAAQgeAAgNAjQgIAWAAAgIABAVQgCgHgYhiQgShGAAg2QAAhGBJmXQBImYAAhHQAAgZgDgXIAAgrINYAYIAAAJQAEEJgrEyQgJA+hOHBQgpDoiyCNIgIAHIgGgEg");
	this.shape_26.setTransform(114.2168,230.6625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#DD6900").ss(0.1,1,1).p("AG5uaQAAADAAAEQAHBMBZGSQBaGdAAA5QAACCgXCdQgZCygtCRQh1F1jEAAQg8AAgZgzQgSgiAAg3QAAgUAKgoQADgOAFgPQARg/AihjQBDjFAAhrQAAhTgZgaAl0v1IgPgCAmNvvQAKAIAEAUQADANAAANQAABwhZFHQhZFGAABjQAABUAnB2QAmB4AAAUQAAAjgXAlQgNAVgkAqQhJBVAAA8QAAAwARAUQAVAZA4AAQBXAABeh3QANgPAXgjQAXgjAhg2QAMgbAGgXQAVhQgYhfAgeInQgYA2gcAwQgKARgMAQQhcCHhsAAQg6AAgagZQgagZAAg3QAAhNAlhJQAKgVA3hUQAFgIAFgHQAbgqAQgkAjsFKQgLAUgMASAgeInQAniQAAiEQAAgRgGgeQgEgfgGgTACIMTIgJAAQABANgEAPQgKAqgqAwQg9BFhBAAQgnAAgYgZQgagaAAgrQAAgaAYg9QAhhRATgzQAVg4AQg2");
	this.shape_27.setTransform(129.25,246.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF8012").s().p("ACIPEQgSgjABg3QAAgTAJgoIAIgeQARg+AhhjQBEjFABhrQgBhUgZgaQAZAaABBUQgBBrhEDFQghBjgRA+IgJAAQABAOgEAOQgJArgrAwQg9BEhBAAQgnAAgZgZQgZgaAAgqQAAgaAYg+QAhhQATgzQAWg4APg3QgXA3gdAvIgWAiQhcCHhrgBQg7AAgagZQgagYAAg4QAAhMAlhJQAJgVA4hVIAKgOQAbgqARgkQALgbAGgYQAKglAAgoQAAgugNgyQANAyAAAuQAAAogKAlQgGAYgLAbIg5BZQgXAigMAQQhfB3hXAAQg4AAgUgZQgRgUgBgxQAAg7BJhVQAkgqAOgVQAWglAAgjQAAgUgmh3Qgnh3ABhUQAAhjBYlGQBZlHAAhwIAHg8IMnBjIAHgCQAHBNBYGSQBbGdgBA5QAACCgVCcQgZCzguCRQh1F1jFAAQg7AAgZgzgAgeIlQAniPAAiFQAAgQgGgfQgDgfgHgSQAHASADAfQAGAfAAAQQAACFgnCPgAkCFvIAWgmIgWAmg");
	this.shape_28.setTransform(129.25,246.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#DD6900").ss(0.1,1,1).p("AnuHkQgHARgJAUQgGAMgGAMQgxBigjAAQgqAAgYhVQgSg8AAgqQAAg1A/l3QA7lcAeiSQArjPBjiyQA4hmBdh2AKzxcQhpHMhTI7QgMBTgIJEQgVIbhOAAQhuAAgzkpQgUh2gIiIQgGhbAAhkQAAiKAiipQAkixAGhNQABgEAAgEAgdMnQgFgigEglQgRikAAkiQAAidAUiGQASh/ApiQQACgIADgIAkLKkQAAACAAACQgHAigLA5QgdBtgyAAQhSAAggiYQgRhUAAh0QAAgUABgYAneG3QgFASgLAbQAIimA8lvQA0k8AeiEAgdMnQgDAkgGAlQgYCHg9AAQheAAghiHQgRhHAAiBQAAgCAAgCQABiWAulHQAvlLAAigQAAhJgagZAgbLgQABAigDAlAC9I2QAABdAFChQABA7ADBEQAABEgRArQgUAygoAAQheAAgsjnQgHghgFglAkCJ6QgCAJgHAh");
	this.shape_29.setTransform(101.025,231.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF8012").s().p("ADfM0QgUh2gIiIQgGhbAAhjQAAiKAiipQAkiyAGhNIABgIIgBAIQgGBNgkCyQgiCpAACKQAABjAGBbIgGAAQAABdAFChIAEB/QAABEgRArQgUAygoAAQheAAgsjnQgHghgFglQADgkgBgjIgLAAQgRikAAkiQAAidAUiGQASh+ApiRIAFgQIgFAQQgpCRgSB+QgUCGAACdQAAEiARCkIAJBHQgDAkgGAmQgYCGg9AAQheAAghiGQgRhIAAiAIAAgFIAAAEIgSBcQgdBsgyAAQhSAAggiYQgRhUAAhzIABgsIgQAkIgMAZQgxBhgjAAQgqAAgYhVQgSg7AAgrQAAg2A/l2QA7lbAeiTQArjPBjiyQA4hlBdh3QBAAjBjgBIIygIQCSgCBDhFQhpHNhTI6QgMBTgIJEQgVIbhOAAQhuAAgzkpgAkLKkIAJgpIgJApgAjcDHQguFHgBCWQABiWAulHQAvlLAAigQAAhIgagZQAaAZAABIQAACggvFLgAnuHlQALgcAFgSQgFASgLAcQAIioA8luQA0k7AeiFQgeCFg0E7Qg8FugICoIAAAAgAnuHlIAAAAg");
	this.shape_30.setTransform(101.025,231.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF3300").ss(0.1,1,1).p("AEmigIgOAHAkmChQAAgCABgB");
	this.shape_31.setTransform(147.4,123.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#DD6900").ss(0.1,1,1).p("AL0zBQgLg7hAg0QhIg8hHAAQi/AAjSA1QjYA2iyBiQjCBqhtCJQh4CZAACuQAAAcAQATQAOARAQAAQAEAAAEAAQASgCAUgHQADgCACAAQAFgFAFgEQBXhHA6hMQBUhtATgWQB/iSCQAEAL0zBQAJgBAKAAALLpQQgTgVgEgcQgCgMAAgoQAAghAijZQAijZAAggQAAgNgCgMQilAMiFCaQh7COhaD+Qg9CvgnDRAopj0QgEAHgDAIAohj0IgIAAAoyjgIACgFQADgIADgHIABAAQAfhJATgdQBVh+BQhRQB7h8BlgHAoyjgQgOAhgPAnQg7CAg9AAQg/AAAAiAQAAh/A3hvQASglAng+QAVgjAPgZAjwi5QgDAGgEAIQgSAfgpBIQgvBQgaA0QhRCnAACGQAAB8gUCDQgEAUgDAUQgPBVgVA4QgnBpg8AAQg6AAgRhUQgJgqAAhqQAAjPA1k0QAijDAhhyQAMgrAMgfAjeGiQAFAmAJCMQABAMABALQAPCxAbCGQBcHLDcAAQAuAAAWgyQARgmAAg4QAAgqgXhXQgfh0gShMQhIkvAAlEQAAjYAljyQAJg3AKg0AjoGXIAJAAQAAAEABAHQAEgTAFgTQAiiJAkhDAnVJZQgCAJgBAMQgFAiAAA/QAAAdAJBHQANBeAVBPQA9DsBnAAQAiAAAVg7QARgvAAgqQAAgwgNhgQgFgmgHguQgaihAAhEQAAgCAAgCQAAAAAAgBQAAgLABgMQAEhLAWhm");
	this.shape_32.setTransform(103.475,166.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF8012").s().p("AibOiQgbiGgQixIgCgXQgJiMgEgmIAJgmQAiiJAkhDQgkBDgiCJIgJAmIgCgLIgIAAIAIAAIACALQgXBmgDBLIgBAXIAAABIAAAEQAABEAZChIANBUQANBgAAAwQAAAqgRAvQgWA7ghAAQhnAAg+jsQgVhPgMheQgKhHAAgdQAAg/AFgiIAEgVIgEAVIgIgCQAUiDAAh8QAAiGBSinQAag0AuhQIA7hnIAHgOIgHAOIg7BnQguBQgaA0QhSCnAACGQAAB8gUCDIgHAoQgPBVgUA4QgoBpg7AAQg6AAgShUQgIgqAAhqQAAjPA1k0QAhjDAhhyQAMgrAMgfIgdBIQg6CAg9AAQg/AAAAiAQAAh/A2hvQATglAmg+IAlg8QASgCAUgHIAFgCIAKgJQBXhHA6hMQBThtAUgWIAGgHQB4iHCIAAIABAAIAAAAIAHAAIgHAAIAAAAIgBAAQiIAAh4CHIgGAHQgUAWhTBtQg6BMhXBHIgKAJIgFACQgUAHgSACIgJAAQgQAAgOgRQgQgTAAgcQAAiuB5iZQBsiJDChqQCyhiDZg2QDRg1C/AAQBHAABJA8QA/A0ALA7QACAMAAANQAAAggiDZQgiDZAAAhQAAAoACAMQAFAcATAVIAEAJIo+E4QAnjRA9ivQBZj+B7iOQCFiaClgMQilAMiFCaQh7COhZD+Qg9CvgnDRIgBADQgKA0gIA3QglDyAADYQAAFEBIEvQARBMAgB0QAWBXAAAqQAAA4gQAmIhFAyQjcAAhbnLgAonjlIgDAFIADgFIAGgPIAIAAIgIAAQAghJATgdQBUh+BRhRQB7h8BlgHQhlAHh7B8QhRBRhUB+QgTAdggBJIAAAAIgGAPgAjVGiIAAAAgAjVGiIAAAAgACakPIAAAAg");
	this.shape_33.setTransform(102.625,166.875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#D16300").ss(0.1,1,1).p("AoqnvQgSARgVATQigCWgWAAQgyAAAAhHQAAh3Bhh1QBVhnCUhZQCEhQCVgxQCPgvBjAAQDxAACCBxQBoBbA7DCQAiBzA4EFQA6DkBbCRQADAFADAFAM5NoIAAAEIABAaAMqCtIgBgYAiMq6Qh9C9h1CbQgNATgOARQhQBphABIQiKCZhDAAQgpAAAAg7QAAhGB1i+QA9hjAjgxQAOgUAKgMAmbp/QgBACgCADQgkAohoBjIAAAIIgIAAQAEgFAEgDAl5lfQgKAUgKATQg2Bpg1BsQh/D9AAA9QAAARAJAQQAPAaAgAAQAfAABgh2QAggnBIhfQAvg/BChYQFknjC/i0AlOAdQAVAcATA1QALAdAVA6QArBkBYALQgDB5A9BRQAYAhAeASQgBgEgBgDAgTIxQAuAdA9gLADDNvQAyAuAwAYQBKAkBeAAQBYAAB6gkQB0giAmgnADDNvQAXADAXgPABQLKQABBDAyA6QAgAlAgADABQLKQAgAYAhAKAgTIxQAMBEA2A4QAQAQARAN");
	this.shape_34.setTransform(86.625,82.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF8012").s().p("AElO1QgwgYgyguIABAAIAGABIAAAAIAAAAQARAAARgKIABAAIABgBIABAAIACgCIgCACIgBAAIgBABIgBAAQgRAKgRAAIAAAAIAAAAIgGgBIgBAAQgggDggglQgyg6gBhDQAgAYAiAKQgigKgggYQgQgNgRgQQg2g4gMhEIABAAIADACIAAAAQAgATAnAAIAAAAIAAAAQAQAAAQgDQgQADgQAAIAAAAIAAAAQgnAAgggTIAAAAIgDgCIgBAAIgCgHIACAHQgdgSgZghQg9hRADh5QhYgLgqhkIghhXQgTg1gVgcIgKgHIBxiXQFlnjC/i0Qi/C0llHjIhxCXQhHBfggAnQhgB2ggAAQggAAgOgaQgJgQAAgRQAAg9B+j9QA1hsA3hpIAUgnIgGgDQB1ibB9i9Qh9C9h1CbIgbAkQhQBphABIQiKCZhDAAIgpg7QAAhGB1i+QA9hjAjgxQAOgUAKgMIAIAAIAAgIQBohjAkgoIAEgFIgEAFQgkAohoBjIgmAkQigCWgXAAQgyAAAAhHQABh3Bhh1QBUhnCUhZQCEhQCVgxQCPgvBkAAQDwAACCBxQBoBbA7DCQAiBzA4EFQA7DkBbCRIAFAKIADAAIAPK7IAAAEQglAnh1AiQh5AkhZAAQheAAhKgkg");
	this.shape_35.setTransform(86.6,82.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#DD6900").ss(0.1,1,1).p("Atoy+QgiAfAwA2QAwA3BaBnQBBBLCIClAqRnqQgWgOgVgOQi1h9AAhuQAAg4AIgPQAOgZAyAAQApAAD2B8QAEADAEACQEVCNBcBcAqRnqQgYgHgUgDQgVgEgQAAQgqAAghAaQgiAbAAAlQAABECjBrQAmAZAoAWQhUgYgaAAQgqAAgWAaQgRAUAAAbQAABhC5BgQAyAaBfApQBCAcAaAOQAFACADADQgggEgtgGQgPgBgOgCQhqgMgbAAQgzAAgmASQgrAUAAAiQAABbDoAmQBYAOBgAEQAAgEAAgDAN3IhQiBlxhpjEQikkzj2jbQjdjDj0i3QmwlDiaAAAnkmJIgIAAIAAgEQhbguhKgvQBGAUBpAwQAIADAJAEQBkAvB/BDApejAQAiAKArAOQChAzA/AlAoEiPQgKgFgKgFQgkgTgigUAlvCkQABAAACAAQA1AGAOADAlCFmQAlABAmAAAlCFmQAAAAABABQAKB6A3BXQA+BiBkAPQglAqBCA6QBAA5AygNQgRAXAAAtQAABJAgAuQAiAxA9ABQAmBeCaA0QB4AoCAAAQA5AAA1gJQA8gJAhgQ");
	this.shape_36.setTransform(80.5237,63.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF8012").s().p("AFXS4Qiag0gmheQg9gBgigxQggguAAhJQAAgtARgXQgyANhAg5QhCg6AlgqQhkgPg+hiQg3hXgKh6IgBgBQAlABAmAAQgmAAglgBIAAgHIAAAHQhggEhYgOQjogmAAhbQAAgiArgUQAmgSAzAAQAbAABqAMIAdADIBNAJIADABQA1AGAOADQgOgDg1gGIgDgBIgIgEQgZgOhDgcQhfgpgygaQi5hgAAhhQAAgbARgUQAWgaAqAAQAaAABUAZQgogXgmgZQijhrAAhEQAAglAigbQAhgaAqAAQAQAAAVAEQAUADAYAHIgrgcQi1h9AAhuQAAg4AIgPQAOgZAyAAQApAAD2B9IAIAEIgFgLQiIilhBhLIiKidQgwg3AigfIBAghQCaAAGwFDQD0C3DdDDQD2DbCkEzQBpDECBFxIAQACIhhKbIgEAAQghAQg8AJQg1AJg5AAQiAAAh4gogAk5hQQg/glihgzQChAzA/AlgAoMiPIgUgKIAUAKgAogiZIAHgPIhNgXQAiATAkATgAnZmfQBkAvB/BDQh/hDhkgvIgRgIQhpgvhGgUQBKAvBbAtIAAAFIAIAAIATgWIAAAAgAiZnnQhchckViNQEVCNBcBcg");
	this.shape_37.setTransform(81.3112,63.925);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#DD6900").ss(0.1,1,1).p("AONGBQgUhNgzj0QgqjKglhuQg2ihhPhiQhdhyiMgrQh6gmomjPQkThoiDgwQhygqgEAAQgnAAggAZQgLAIgHAJQgQATAAAYQAAB9GuC6QA3AYA6AXQBaAlBkAjQBhAiAqANQAJADAGABAk0hzQgVgCgUgDQhsgPhRgaQipg3AAhxQAAgkAagTQAYgSArAAQBCAADTAiQAPADAOACQgJgFgQgHQghgNg8gWQh1grg6gaQjghlAAhyQAAgmArgHQAAAAA+AAQAuAADCAyQBFASAuALQBTAVAHAAAk0lrQAEABAEAAQCUAZA2APQAFgDAEAEQACABABABQgFgBgHgCAi+B8QgbABgsgFQgCAAgBAAQhEgIg+gSQipgwAAhTQAAhGDWgHQAPgBAaAAQAEAAAEAAQBKABCXADAihFnQgCAAgCAAQhdAAg7gRQhVgYAAg3QAAhlCLgcQABAAAAAAQAbgFAtgFQAHgBAIgBQASgCAVgBQBHgGAkgFQAKgBAHgCAAIJ7Qg+gYg4g2QhIhFAAhKQAAgQAHgOQAJgPAEgIQABgBAAgBABpLvQgFAAgFgBQgWgDgZgVQgkgegEgmQgBgNABgKQAFgVBEAHAA2FWQghAGhXAGQhGAFgZAAQADgGASgCAC6N8QghgHgfgdQgiggAAggQAAgZAEgEQAHgHAGgFQAGgHACgDIAAAIQgEABgEABAC6N8QACgEACgEIAAAJQgCgBgCAAgANJQWQghAhhqAPQhFAKhDAAQiIAAiDg2QiahBAphd");
	this.shape_38.setTransform(76.625,76.575);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#CC66CC").ss(0.1,1,1).p("AAAAIIABgP");
	this.shape_39.setTransform(168.475,114.3125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF8012").s().p("AEnQaQibhBAqhdQghgHgfgdQgiggAAggQAAgZADgEIANgNIgJAAQgXgDgZgVQgjgegEgmQgCgNACgLIABgBQAEgOAkAAIABAAIAAAAIAbACIACAAIABAAIgBAAIgCAAIgbgCIAAAAIgBAAQgkAAgEAOIgBABQg+gXg4g2QhJhFABhKQAAgQAHgOIANgXIABgCIgEAAQhdAAg7gRQhWgYAAg3QAAhlCMgcIABAAQAagFAugFQgcABgsgFIgCAAQhEgIg/gSQiogwAAhTQAAhGDVgHIAqgBIgpgFQhsgPhRgaQiqg3AAhxQAAgkAagTQAZgSArAAQBCAADTAiIAdAFIgZgMQgigNg7gWQh1grg7gaQjfhlAAhyQAAgmAqgHIA/AAQAuAADCAyIBzAdQBaAlBkAjQBhAiAqANIAPAEIgPgEQgqgNhhgiQhkgjhaglQBTAVAHAAQgHAAhTgVQg6gXg3gYQmui6gBh9QABgYAQgTQAHgJALgIQAfgZAoAAQAEAAByAqIGWCYQIlDPB7AmQCLArBeByQBPBiA1ChQAlBuAqDKQAzD0AVBNIAIABIhBKUIgLAAQghAhhqAPQhFAKhEAAQiHAAiDg2gAC2N8IADABIAAgJIgDAIgABkLuIAJgBIAAgIIgJAJIAAAAgAilFnQAYAABHgFQBXgGAggGQggAGhXAGQhHAFgYAAQADgGASgCQgSACgDAGIAAAAgAghBsQglAFhGAGIgnADIgPACIAPgCIAngDQBGgGAlgFIARgDIgRADgAhPhvQiXgDhKgBIgFAAIgDAAIADAAIAFAAQBKABCXADgAhmlCIALADIgCgCQgCgCgDAAIgEABgAkwlqQCTAZA3APQg3gPiTgZIgIgBIAIABgAilFnIAAAAgAlxqUIAAAAg");
	this.shape_40.setTransform(77.05,76.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).wait(1));

	// right_leg
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#DD6900").ss(0.1,1,1).p("AC1glQAAAAAAABQgRBFgtBBQg8BWhGAAQhDAAgzg8Qgzg8AAhTQAAgTAWhJQAOgyAFgW");
	this.shape_41.setTransform(91.7,202.6125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AighBQACgKAAgEACgBQQABgDAAgD");
	this.shape_42.setTransform(93.7875,190.825);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF8012").s().p("AiBB8Qgzg8AAhTQAAgTAWhJQAOgyAFgWIALADIE1CPIAAABQgRBFgtBBQg9BWhFAAQhDAAgzg8g");
	this.shape_43.setTransform(91.7,202.6125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AihhBQACgKAAgEACgBQQAAgDABgD");
	this.shape_44.setTransform(93.8,194.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#DD6900").ss(0.1,1,1).p("AC1glQAAAAAAABQgQBFguBBQg8BWhGAAQhDAAgzg8Qgzg8AAhTQAAgTAWhJQAOgyAFgW");
	this.shape_45.setTransform(91.7,206.125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF8012").s().p("AiBB8Qgzg8AAhTQAAgTAWhJQAOgyAFgWIALADIE1CPIAAABQgQBFguBBQg9BWhFAAQhDAAgzg8g");
	this.shape_46.setTransform(91.7,206.125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FF99CC").ss(0.1,1,1).p("ACgBQQABgDABgDAighBQACgKAAgE");
	this.shape_47.setTransform(98.7,189.425);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF8012").s().p("AiBB8Qgzg8AAhTQAAgTAVhJQAPgyAEgWIAMADIE1CPIAAABQgRBFguBBQg7BWhGAAQhDAAgzg8g");
	this.shape_48.setTransform(96.6,201.225);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AAAAHQABgJAAgE");
	this.shape_49.setTransform(82.65,182.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]}).to({state:[{t:this.shape_46},{t:this.shape_45,p:{x:91.7,y:206.125}},{t:this.shape_44}]},1).to({state:[{t:this.shape_46},{t:this.shape_45,p:{x:91.7,y:206.125}},{t:this.shape_44}]},1).to({state:[{t:this.shape_46},{t:this.shape_45,p:{x:91.7,y:206.125}},{t:this.shape_44}]},1).to({state:[{t:this.shape_46},{t:this.shape_45,p:{x:91.7,y:206.125}},{t:this.shape_44}]},1).to({state:[{t:this.shape_48,p:{y:201.225}},{t:this.shape_45,p:{x:96.6,y:201.225}},{t:this.shape_47}]},1).to({state:[{t:this.shape_48,p:{y:201.225}},{t:this.shape_45,p:{x:96.6,y:201.225}},{t:this.shape_47}]},1).to({state:[{t:this.shape_48,p:{y:201.225}},{t:this.shape_49,p:{y:182.15}}]},1).to({state:[{t:this.shape_48,p:{y:202.625}},{t:this.shape_49,p:{y:183.55}}]},1).to({state:[{t:this.shape_46},{t:this.shape_45,p:{x:91.7,y:206.125}},{t:this.shape_44}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).wait(1));

	// right_foot
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgDADQgCABAFAAQABBOgoA0QgoA2hEAAQgLAAgTgEQgSgEgHAAQAFgKATgOQAjgaACgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_50.setTransform(59.75,220.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgNQAAABACACQADADACAFQAAgEgCgDQgFgQAAgPIAAAOAARAhIAAAIIghAAAAAAYQgFgRgEgJ");
	this.shape_51.setTransform(76.7,210.075);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#563A07").s().p("AhtCDQgRgEgJAAQAGgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQAQAAAUAFQAVAGAGAGQBEgRAiAAIAIAAIAAAMIAAA4IgqAAQgLAAgMAEQgMAEgHAAQAAAFgDADQgBAAAAAAQAAAAABABQAAAAABAAQABAAABAAQABBOgoA0QgoA2hEAAQgLAAgTgEg");
	this.shape_52.setTransform(59.75,220.925);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQACADAAAEQAEAJAFARAgQgNQAAABACACQADADACAFAARAhIAAAIIghAA");
	this.shape_53.setTransform(76.7,213.575);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AAVAdIABAIIghAEAgTgaIgCgOQACAPAHAQQACADABADAgSgNIAAAAQAAABADACQADADADAEQAFAJAHAQ");
	this.shape_54.setTransform(81.125,213.125);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#412C05").ss(0.1,1,1).p("ACYhRIgqAGQgLABgLAGQgLAGgIABQAAAEgCADQgBACAEgBQALBNghA5QghA7hDAJQgLABgTgCQgSgCgIABQAEgKARgQQAfgfADgCQAqgugGgtQgEgdgzgSQgugPghAGQALgRArgYQArgXAagDQAQgCAUADQAWADAGAFQBCgaAhgEIAJgBIABAM");
	this.shape_55.setTransform(64.725,225.3821);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#563A07").s().p("AhSCUQgSgCgIABQAEgKARgQIAighQAqgugGgtQgEgdgzgSQgugPghAGQALgRArgYQArgXAagDQAQgCAUADQAWADAGAFQBCgaAhgEIAJgBIABAMIAAAAIAHA3IgqAGQgLABgLAGQgLAGgIABQAAAEgCADQgBABABAAQAAAAAAAAQAAAAABAAQABAAABAAQALBNghA5QghA7hDAJIgLAAIgTgBg");
	this.shape_56.setTransform(64.725,225.3821);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQACADAAAEQgCgFgDgDQgCgCAAgBAARAhIAAAI");
	this.shape_57.setTransform(76.7,213.575);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AARAhIAAAIAgQgaIAAgOQABAPAFAQQABADABAEQgDgFgCgDQgDgCAAgB");
	this.shape_58.setTransform(81.6,208.675);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgEADQgBABAFAAQABBOgoA0QgoA2hEAAQgMAAgSgEQgSgEgIAAQAGgKATgOQAigaADgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQAQAAAUAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_59.setTransform(64.65,219.525);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#563A07").s().p("AhsCDQgTgEgHAAQAFgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgiACQANgQAtgSQAugRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAMIAAA4IgrAAQgLAAgLAEQgMAEgJAAQAAAFgDADQAAAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQACBOgoA0QgoA2hEAAQgLAAgSgEg");
	this.shape_60.setTransform(64.65,219.525);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgDADQgBABAEAAQABBOgoA0QgoA2hEAAQgLAAgSgEQgTgEgHAAQAFgKATgOQAjgaACgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_61.setTransform(69.55,214.625);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#563A07").s().p("AhtCDQgRgEgJAAQAGgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAIAAIAAAMIAAA4IgqAAQgLAAgMAEQgMAEgHAAQAAAFgEADQAAAAAAAAQAAAAABABQAAAAABAAQAAAAACAAQABBOgoA0QgoA2hEAAQgMAAgSgEg");
	this.shape_62.setTransform(69.55,214.625);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgDADQgCABAFAAQABBOgoA0QgoA2hEAAQgMAAgSgEQgSgEgIAAQAGgKATgOQAigaADgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_63.setTransform(74.45,209.725);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQABADABAEQgCgFgDgDQgCgCAAgBAARAhIAAAI");
	this.shape_64.setTransform(91.4,198.875);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#563A07").s().p("AhsCDQgTgEgHAAQAFgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgiACQANgQAtgSQAugRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAMIAAA4IgrAAQgLAAgMAEQgLAEgJAAQAAAFgCADQgBAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQACBOgoA0QgoA2hEAAQgMAAgRgEg");
	this.shape_65.setTransform(74.45,209.725);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQABAPAFAQQABADAAAEQgCgFgDgDQgCgCAAgBAARAhIAAAI");
	this.shape_66.setTransform(96.3,195.375);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgMAEgIAAQAAAFgDADQgBABAEAAQABBOgoA0QgoA2hEAAQgLAAgSgEQgTgEgHAAQAFgKATgOQAjgaACgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_67.setTransform(79.35,206.225);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#563A07").s().p("AhsCDQgSgEgJAAQAGgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAIAAIAAAMIAAA4IgqAAQgLAAgLAEQgNAEgHAAQAAAFgEADQAAAAAAAAQAAAAABABQAAAAABAAQABAAABAAQABBOgoA0QgoA2hEAAQgMAAgRgEg");
	this.shape_68.setTransform(79.35,206.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52,p:{y:220.925}},{t:this.shape_51},{t:this.shape_50,p:{y:220.925}}]}).to({state:[{t:this.shape_52,p:{y:224.425}},{t:this.shape_50,p:{y:224.425}},{t:this.shape_53,p:{y:213.575}}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_52,p:{y:224.425}},{t:this.shape_50,p:{y:224.425}},{t:this.shape_57,p:{x:76.7,y:213.575}}]},1).to({state:[{t:this.shape_52,p:{y:224.425}},{t:this.shape_50,p:{y:224.425}},{t:this.shape_57,p:{x:76.7,y:213.575}}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_62},{t:this.shape_57,p:{x:86.5,y:203.775}},{t:this.shape_61}]},1).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_52,p:{y:224.425}},{t:this.shape_50,p:{y:224.425}},{t:this.shape_53,p:{y:213.575}}]},1).to({state:[{t:this.shape_52,p:{y:220.925}},{t:this.shape_53,p:{y:210.075}},{t:this.shape_50,p:{y:220.925}}]},1).wait(1));

	// body
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AiwnWQgaAAAAgJIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQQAZAYAAABQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARQAdAVADADIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAaAtAZQgpABgsAPIAzAaQAAAEAFAEQAEAFAAAEQgiAAgQABQgbACgRAFIAAARQAVACAeANQAZALAJAIIAJAAQgGACgyAKQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAJQgtAHgUAIQglAOgRAdQAeAAARABQAgACAXAGQgRAHhVArIAAAIQAYgDAbAGQAaAHAOAOQAFAAAGACIgJAAQgBgBgBgBAmEjxIAIAAAjInkQA9AOA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBDi3ArQgBgBgBgCIgBgEQgYgJgJgDQgQgFgLAAIAAgRQAQgLAJgHQARgNAJgDQgVAAgvAEQguAEgVAAQAGgDAigcQAigbACgBIg8AAQgpAAgaAIIAAgIQAOgPAcgTQAdgVANgNQgFAAgCgEIgBgFQgCAAgvADQgcACgQgFQAJAAAAgHQALgEAagMQAXgKAHAAQgFAAgCgEIgBgEQgNACgogNQgsgPgNAAIAAgIQANAAAdgEQAcgFANAAIgHAAQgYgRgWgNQgqgagWAFQAng0A0AI");
	this.shape_69.setTransform(222.575,157.0875);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#DD6900").ss(0.1,1,1).p("ANEoVQAOgCDPAYQCpAXCRAfIABAAAQQAmIgJAAAUzH/QgBAAAAAAQgIACgIACQizAoh5AAQnIAAl8hiQhqgbh0goQhZgfgLAAQiCgXicgjQk3hFiLg7QishIhrhVQiGhqhOifIAAgIQCyBXBfAbQCDAmC8AAQEOAADPhGQCHguCxhsQDBh3BZgkQCshGDTAAQA1AABDANQAXAFASADQBAAMAFAB");
	this.shape_70.setTransform(65.2625,154.475);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#CCFF00").ss(0.1,1,1).p("AAQgIQACABADAAQgKAAgLAGQgMAGgIAE");
	this.shape_71.setTransform(196.7625,206.475);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF8012").s().p("ACyHJQhqgbh0goQhZgfgLAAQiCgXicgjQk3hFiLg7QishIhrhVQiGhqhOifIAAgIQCyBXBfAbQCDAmC8AAQEOAADPhGQCHguCxhsQDBh3BZgkQCshGDTAAQA1AABDANIApAIQAOgCDPAYQCpAXCRAeIABAAIgCAFIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQIAZAZQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARIAgAYIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAaAtAZQgpACgsAOIAzAaQAAAEAFAEQAEAFAAAEIgyABQgbACgRAFIAAARQAVACAeANQAZALAJAIIAJAAIg4AMQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAJQgtAHgUAIQglANgRAeIAvABQAgACAXAGIhmAyIAAAIQAYgDAbAGQAaAHAOAOQg0gIgnA0QAWgFAqAaIAuAeIAHAAQgNABgcAEQgdAEgNAAIAAAIQANAAAsAPQAoANANgCIABAEQACAEAFAAQgHAAgXAKIglAQQAAAHgJAAQAQAFAcgCIAxgDIABAFQACAEAFAAQgNANgdAVQgcATgOAPIAAAIQAagIApAAIA8AAIgkAcQgiAcgGADQAVAAAugEQAvgEAVAAQgJADgRANIgZASIAAARQALAAAQAFIAhAMIABAEIACADIgBAAIgQAEQizAoh5AAQnIAAl8higAQQAmIgJAAgAOJoIIhFgNIBFANg");
	this.shape_72.setTransform(65.2625,154.475);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AjzHiIgBgEIghgMQgQgFgLAAIAAgRIAZgSQARgNAJgDQgVAAgvAEQguAEgVAAQAGgDAigcIAkgcIg8AAQgpAAgaAIIAAgIQAOgPAcgTQAdgVANgNQgFAAgCgEIgBgFIgxADQgcACgQgFQAJAAAAgHIAlgQQAXgKAHAAQgFAAgCgEIgBgEQgNACgogNQgsgPgNAAIAAgIQANAAAdgEQAcgFANAAIgHAAIgugeQgqgagWAFQAng0A0AIIACACIAJAAIgLgCQgOgOgagHQgbgGgYADIAAgIIBmgyQgXgGgggCIgvgBQARgdAlgOQAUgIAtgHIAAgJQgUgPgkgHQghgHgeAEIAAgJQAXgOAogIIA4gMIgJAAQgJgIgZgLQgegNgVgCIAAgRQARgFAbgCIAygBQAAgEgEgFQgFgEAAgEIgzgaQAsgPApgBQgtgZgGgaQAIAAAOgEQANgEALAAQALAAAOAEQAOAEAIAAIAAgIIgggYQgWgRgFgKQAIAAASgEQARgFALAAQAMAAANAFQAOAEAIAAIgZgZQgQgQgKgTQADAAAFgEQAFgEANAAQAQAAAhAFQAiAGATAGQACgNgNgYQgPgZAAgPIAzAAQAAAJAaAAQgaAAAAgJIACgFQA9AOA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBDi3ArIgCgDgAl8jxIgIAAgAjKnfIAAAAg");
	this.shape_73.setTransform(222.575,157.0875);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AiwnXQgaAAAAgIIgzAAQAAAOAPAaQANAXgCANQgTgGgigFQghgGgQAAQgNAAgFAFQgFAEgDAAQAKATAQAPQAZAYAAABQgIAAgOgEQgNgEgMAAQgLAAgRAEQgSAEgIAAQAFAKAWARQAdAWADACIAAAJQgIAAgOgEQgOgFgLAAQgLAAgNAFQgOAEgIAAQAGAZAtAaQgpABgsAPIAzAZQAAAFAFAEQAEAEAAAEQgiAAgQABQgbACgRAGIAAARQAVABAeANQAZAMAJAIIAJAAQgGACgyAKQgoAHgXAPIAAAIQAegDAhAGQAkAHAUAQIAAAIQgtAHgUAIQglAPgRAdQAeAAARABQAgACAXAFQgRAIhVAqIAAAJQAYgEAbAHQAaAGAOAOQAFABAGABIgJAAQgBgBgBgBAmEjxIAIAAAjInkQA9ANA6APQJmCbAAEPQAAB2h/BvQhvBgjBBQQigBDi3AqQgBgBgBgBIgBgFQgYgIgJgDQgQgGgLAAIAAgRQAQgLAJgHQARgMAJgEQgVAAgvAFQguAEgVAAQAGgDAigcQAigcACgBIg8AAQgpAAgaAJIAAgJQAOgOAcgUQAdgUANgOQgFAAgCgEIgBgEQgCAAgvADQgcACgQgFQAJAAAAgIQALgEAagMQAXgJAHAAQgFAAgCgEIgBgFQgNACgogNQgsgOgNAAIAAgJQANAAAdgEQAcgEANAAIgHAAQgYgRgWgOQgqgZgWAFQAng1A0AI");
	this.shape_74.setTransform(222.575,160.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF8012").s().p("ACyHJQhqgbh0goQhZgfgLAAQiCgXicgjQk3hFiLg7QishIhrhVQiGhqhOifIAAgIQCyBXBfAbQCDAmC8AAQEOAADPhGQCHguCxhsQDBh3BZgkQCshGDTAAQA1AABDANIApAIQAOgCDPAYQCpAXCRAfIABAAIgCAEIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQIAZAZQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARIAgAYIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAaAtAZQgpACgsAOIAzAaQAAAEAFAEQAEAFAAAEIgyABQgbACgRAFIAAARQAVACAeANQAZALAJAIIAJAAIg4AMQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAJQgtAHgUAIQglANgRAeIAvABQAgACAXAGIhmAyIAAAIQAYgDAbAGQAaAHAOAOQg0gIgnA0QAWgFAqAaIAuAeIAHAAQgNABgcAEQgdAEgNAAIAAAIQANAAAsAPQAoANANgCIABAEQACAEAFAAQgHAAgXAKIglAQQAAAHgJAAQAQAFAcgCIAxgDIABAFQACAEAFAAQgNANgdAVQgcATgOAPIAAAIQAagIApAAIA8AAIgkAcQgiAcgGADQAVAAAugEQAvgEAVAAQgJADgRANIgZASIAAARQALAAAQAFIAhAMIABAEIACADIgBAAIgQAEQizAoh5AAQnIAAl8higAQQAmIgJAAgAOJoIIhFgNIBFANg");
	this.shape_75.setTransform(65.275,157.975);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AjzHiIgBgFIghgLQgQgFgLgBIAAgRIAZgSQARgMAJgEQgVAAgvAFQguAEgVAAQAGgDAigcIAkgcIg8AAQgpAAgaAIIAAgIQAOgPAcgTQAdgVANgOQgFAAgCgDIgBgFIgxADQgcACgQgFQAJAAAAgIIAlgPQAXgKAHAAQgFAAgCgEIgBgEQgNABgogNQgsgOgNAAIAAgIQANAAAdgFQAcgEANAAIgHAAIgugeQgqgagWAFQAng0A0AHIACADIAJAAIgLgDQgOgOgagGQgbgHgYAEIAAgIIBmgzQgXgFgggCIgvgBQARgdAlgPQAUgHAtgHIAAgJQgUgPgkgIQghgGgeAEIAAgJQAXgOAogIIA4gMIgJAAQgJgIgZgMQgegNgVgBIAAgRQARgFAbgCIAygBQAAgFgEgEQgFgEAAgEIgzgaQAsgOApgCQgtgZgGgaQAIAAAOgEQANgFALAAQALAAAOAFQAOAEAIAAIAAgJIgggXQgWgRgFgKQAIAAASgFQARgEALAAQAMAAANAEQAOAFAIAAIgZgaQgQgPgKgTQADAAAFgEQAFgEANgBQAQABAhAFQAiAGATAFQACgNgNgXQgPgZAAgPIAzAAQAAAJAaAAQgaAAAAgJIACgFQA9AOA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBEi3AqIgCgDgAl8jxIgIAAgAjKnfIAAAAg");
	this.shape_76.setTransform(222.575,160.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#CCFF00").ss(0.1,1,1).p("AgBAAQABABACAA");
	this.shape_77.setTransform(198.6375,209.125);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#CCFF00").ss(0.1,1,1).p("AgCAAQACABADAA");
	this.shape_78.setTransform(203.55,204.225);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AjInjQA9ANA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBEi3AqQgBgBgBgCIgBgEQgYgJgJgDQgQgFgLAAIAAgRQAQgLAJgHQARgNAJgDQgVAAgvAEQguAEgVAAQAGgDAigcQAigbACgBIg8AAQgpAAgaAIIAAgIQAOgPAcgTQAdgVANgNQgFAAgCgEIgBgFQgCAAgvADQgcACgQgFQAJAAAAgHQALgEAagMQAXgKAGAAQgEAAgCgEIgBgEQgNACgogNQgsgPgNAAIAAgIQANAAAdgEQAcgEANgBIgHAAQgYgRgWgNQgqgagWAFQAng0A0AIQAFAAAGACIgJAAQgBgBgBgBAiwnWQgaAAAAgJIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQQAZAYAAABQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARQAdAVADADIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAZAtAaQgpACgsAOIAzAaQAAAEAFAEQAEAEAAAFQgiAAgQAAQgbADgRAFIAAARQAVACAeANQAZALAJAIIAJAAQgGACgyAKQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAIQgtAIgUAHQglAPgRAdQAeAAARABQAgACAXAGQgRAHhVArIAAAIQAYgDAbAGQAaAHAOAOAmEjxIAIAA");
	this.shape_79.setTransform(227.475,155.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF8012").s().p("ACyHJQhqgbh0goQhZgfgLAAQiCgXicgjQk3hFiLg7QishIhrhVQiGhqhOifIAAgIQCyBXBfAbQCDAmC8AAQEOAADPhGQCHguCxhsQDBh3BZgkQCshGDTAAQA1AABDANIApAIQAOgCDPAYQCpAXCRAfIABAAIgCAEIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQIAZAZQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARIAgAYIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAaAtAZQgpACgsAOIAzAaQAAAEAFAEQAEAFAAAEIgyABQgbACgRAFIAAARQAVACAeANQAZALAJAIIAJAAIg4AMQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAJQgtAHgUAIQglANgRAeIAvABQAgACAXAGQgRAHhVArIAAAIQAYgDAbAGQAaAHAOAOQg0gIgnA0QAWgFAqAaIAuAeIAHAAQgNABgcAEQgdAEgNAAIAAAIQANAAAsAPQAoANANgCIABAEQACAEAEAAQgGAAgXAKIglAQQAAAHgJAAQAQAFAcgCIAxgDIABAFQACAEAFAAQgNANgdAVQgcATgOAPIAAAIQAagIApAAIA8AAIgkAcQgiAcgGADQAVAAAugEQAvgEAVAAQgJADgRANIgZASIAAARQALAAAQAFIAhAMIABAEIACADIgBAAIgQAEQizAoh5AAQnIAAl8higAQQAmIgJAAgAOJoIIhFgNIBFANg");
	this.shape_80.setTransform(70.175,153.075);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AjzHiIgBgEIghgMQgQgGgLABIAAgRIAZgSQARgNAJgEQgVABgvAEQguAEgVAAQAGgDAigcIAkgdIg8AAQgpAAgaAJIAAgJQAOgOAcgTQAdgVANgNQgFAAgCgFIgBgEIgxADQgcACgQgFQAJAAAAgIIAlgQQAXgJAGAAQgEAAgCgEIgBgFQgNACgogNQgsgOgNAAIAAgJQANAAAdgEQAcgDANgBIgHAAIgugfQgqgZgWAFQAng1A0AJIACABIAJAAIgLgBQgOgOgagHQgbgGgYADIAAgJQBVgqARgHQgXgGgggCIgvgBQARgdAlgOQAUgIAtgIIAAgIQgUgQgkgGQghgHgeADIAAgIQAXgPAogHIA4gMIgJAAQgJgIgZgLQgegNgVgCIAAgRQARgGAbgCIAygBQAAgDgEgFQgFgEAAgFIgzgZQAsgPApgBQgtgagGgZQAIAAAOgEQANgEALAAQALAAAOAEQAOAEAIAAIAAgIIgggZQgWgQgFgLQAIAAASgDQARgFALAAQAMAAANAFQAOADAIAAIgZgYQgQgQgKgTQADAAAFgEQAFgFANABQAQgBAhAGQAiAFATAHQACgNgNgYQgPgaAAgOIAzAAQAAAIAaAAQgaAAAAgIIACgEQA9ANA6AOQJmCbAAEPQAAB2h/BvQhvBgjBBQQigBEi3ApIgCgCgAl8jxIgIAAg");
	this.shape_81.setTransform(227.475,155.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#DD6900").ss(0.1,1,1).p("AVcnJIgBAAQiRgfipgXQjPgYgOACAQQAmIgJAAAUzH/QgBAAAAAAQgIACgIACQizAoh5AAQnIAAl8hiQhqgbh0goQhZgfgLAAQiCgXicgjQk3hFiLg7QishIhrhVQiGhqhOifIAAgIQCyBXBfAbQCDAmC8AAQEOAADPhGQCHguCxhsQDBh3BZgkQCshGDTAAQA1AABDANQAXAFASADQBAAMAFAB");
	this.shape_82.setTransform(70.175,153.075);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AiwnWQgaAAAAgJIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQQAZAYAAABQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARQAdAVADADIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAZAtAaQgpACgsAOIAzAaQAAAEAFAEQAEAEAAAFQgiAAgQAAQgbADgRAFIAAARQAVACAeANQAZALAJAIIAJAAQgGACgyAKQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAIQgtAIgUAHQglAPgRAdQAeAAARABQAgACAXAGQgRAHhVArIAAAIQAYgDAbAGQAaAHAOAOQAFAAAGACIgJAAQgBgBgBgBAjInjQA9ANA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBEi3AqQgBgBgBgCIgBgEQgYgJgJgDQgQgFgLAAIAAgRQAQgLAJgHQARgNAJgDQgVAAgvAEQguAEgVAAQAGgDAigcQAigbACgBIg8AAQgpAAgaAIIAAgIQAOgPAcgTQAdgVANgNQgFAAgCgEIgBgFQgCAAgvADQgcACgQgFQAJAAAAgHQALgEAagMQAXgKAGAAQgEAAgCgEIgBgEQgNACgogNQgsgPgNAAIAAgIQANAAAdgEQAcgEANgBIgHAAQgYgRgWgNQgqgagWAFQAng0A0AIAmEjxIAIAA");
	this.shape_83.setTransform(227.475,155.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AjzHiIgBgEIghgMQgQgGgLABIAAgRIAZgSQARgNAJgEQgVABgvAEQguAEgVAAQAGgDAigcIAkgdIg8AAQgpAAgaAJIAAgJQAOgOAcgTQAdgVANgNQgFAAgCgFIgBgEIgxADQgcACgQgFQAJAAAAgIIAlgQQAXgJAGAAQgEAAgCgEIgBgFQgNACgogNQgsgOgNAAIAAgJQANAAAdgEQAcgDANgBIgHAAIgugfQgqgZgWAFQAng1A0AJIACABIAJAAIgLgBQgOgOgagHQgbgGgYADIAAgJQBVgqARgHQgXgGgggCIgvgBQARgdAlgOQAUgIAtgIIAAgIQgUgQgkgGQghgHgeADIAAgIQAXgPAogHIA4gMIgJAAQgJgIgZgLQgegNgVgCIAAgRQARgGAbgCIAygBQAAgDgEgFQgFgEAAgFIgzgZQAsgPApgBQgtgagGgZQAIAAAOgEQANgEALAAQALAAAOAEQAOAEAIAAIAAgIIgggZQgWgQgFgLQAIAAASgDQARgFALAAQAMAAANAFQAOADAIAAIgZgYQgQgQgKgTQADAAAFgEQAFgFANABQAQgBAhAGQAiAFATAHQACgNgNgYQgPgaAAgOIAzAAQAAAIAaAAQgaAAAAgIIACgEQA9ANA6AOQJmCbAAEPQAAB2h/BvQhvBgjBBQQigBEi3ApIgCgCgAl8jxIgIAAgAjKnfIAAAAg");
	this.shape_84.setTransform(227.475,155.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AjInkQA9ANA6APQJmCbAAEPQAAB2h/BvQhvBgjBBQQigBDi3AqQgBgBgBgBIgBgFQgYgIgJgDQgQgGgLAAIAAgRQAQgLAJgHQARgMAJgEQgVAAgvAFQguAEgVAAQAGgDAigcQAigcACgBIg8AAQgpAAgaAJIAAgJQAOgOAcgUQAdgUANgOQgFAAgCgEIgBgEQgCAAgvADQgcACgQgFQAJAAAAgIQALgEAagMQAXgJAGAAQgEAAgCgEIgBgFQgNACgogNQgsgOgNAAIAAgJQANAAAdgEQAcgEANAAIgHAAQgYgRgWgOQgqgZgWAFQAng1A0AIQAFABAGABIgJAAQgBgBgBgBAiwnXQgaAAAAgIIgzAAQAAAOAPAaQANAXgCANQgTgGgigFQghgGgQAAQgNAAgFAFQgFAEgDAAQAKATAQAPQAZAYAAABQgIAAgOgEQgNgEgMAAQgLAAgRAEQgSAEgIAAQAFAKAWARQAdAWADACIAAAJQgIAAgOgEQgOgFgLAAQgLAAgNAFQgOAEgIAAQAGAZAtAaQgpABgsAPIAzAZQAAAFAFAEQAEAEAAAEQgiAAgQABQgbACgRAGIAAARQAVABAeANQAZAMAJAIIAJAAQgGACgyAKQgoAHgXAPIAAAIQAegDAhAGQAkAHAUAQIAAAIQgtAHgUAIQglAPgRAdQAeAAARABQAgACAXAFQgRAIhVAqIAAAJQAYgEAbAHQAaAGAOAOAmEjxIAIAA");
	this.shape_85.setTransform(227.475,157.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF8012").s().p("ACyHJQhqgbh0goQhZgfgLAAQiCgXicgjQk3hFiLg7QishIhrhVQiGhqhOifIAAgIQCyBXBfAbQCDAmC8AAQEOAADPhGQCHguCxhsQDBh3BZgkQCshGDTAAQA1AABDANIApAIQAOgCDPAYQCpAXCRAfIABAAIgCAEIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQIAZAZQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARIAgAYIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAaAtAZQgpACgsAOIAzAaQAAAEAFAEQAEAFAAAEIgyABQgbACgRAFIAAARQAVACAeANQAZALAJAIIAJAAIg4AMQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAJQgtAHgUAIQglANgRAeIAvABQAgACAXAGIhmAyIAAAIQAYgDAbAGQAaAHAOAOQg0gIgnA0QAWgFAqAaIAuAeIAHAAQgNABgcAEQgdAEgNAAIAAAIQANAAAsAPQAoANANgCIABAEQACAEAEAAQgGAAgXAKIglAQQAAAHgJAAQAQAFAcgCIAxgDIABAFQACAEAFAAQgNANgdAVQgcATgOAPIAAAIQAagIApAAIA8AAIgkAcQgiAcgGADQAVAAAugEQAvgEAVAAQgJADgRANIgZASIAAARQALAAAQAFIAhAMIABAEIACADIgBAAIgQAEQizAoh5AAQnIAAl8higAQQAmIgJAAgAOJoIIhFgNIBFANg");
	this.shape_86.setTransform(70.175,154.475);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AjzHiIgBgFIghgLQgQgFgLgBIAAgRIAZgSQARgMAJgDQgVgBgvAFQguAEgVAAQAGgDAigcIAkgcIg8AAQgpAAgaAIIAAgIQAOgPAcgUQAdgUANgOQgFAAgCgDIgBgFIgxADQgcACgQgFQAJAAAAgHIAlgQQAXgKAGAAQgEAAgCgEIgBgEQgNACgogNQgsgPgNAAIAAgJQANAAAdgDQAcgFANAAIgHAAIgugeQgqgagWAFQAng0A0AHIACADIAJAAIgLgDQgOgOgagGQgbgHgYAEIAAgIIBmgzQgXgFgggCIgvgBQARgdAlgPQAUgIAtgGIAAgJQgUgPgkgIQghgGgeADIAAgIQAXgPAogHIA4gMIgJAAQgJgIgZgMQgegNgVgBIAAgRQARgFAbgCIAygBQAAgEgEgFQgFgEAAgEIgzgaQAsgPApgBQgtgZgGgaQAIAAAOgEQANgFALABQALgBAOAFQAOAEAIAAIAAgIIgggYQgWgRgFgKQAIAAASgFQARgEALAAQAMAAANAEQAOAFAIAAIgZgaQgQgPgKgTQADAAAFgEQAFgFANAAQAQAAAhAGQAiAGATAFQACgNgNgXQgPgaAAgOIAzAAQAAAJAaAAQgaAAAAgJIACgFQA9AOA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBEi3AqIgCgDgAl8jxIgIAAg");
	this.shape_87.setTransform(227.475,157.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AiwnXQgaAAAAgIIgzAAQAAAOAPAaQANAXgCANQgTgGgigFQghgGgQAAQgNAAgFAFQgFAEgDAAQAKATAQAPQAZAYAAABQgIAAgOgEQgNgEgMAAQgLAAgRAEQgSAEgIAAQAFAKAWARQAdAWADACIAAAJQgIAAgOgEQgOgFgLAAQgLAAgNAFQgOAEgIAAQAGAZAtAaQgpABgsAPIAzAZQAAAFAFAEQAEAEAAAEQgiAAgQABQgbACgRAGIAAARQAVABAeANQAZAMAJAIIAJAAQgGACgyAKQgoAHgXAPIAAAIQAegDAhAGQAkAHAUAQIAAAIQgtAHgUAIQglAPgRAdQAeAAARABQAgACAXAFQgRAIhVAqIAAAJQAYgEAbAHQAaAGAOAOQAFABAGABIgJAAQgBgBgBgBQg0gIgnA1QAWgFAqAZQAWAOAYARIAHAAQgNAAgcAEQgdAEgNAAIAAAJQANAAAsAOQAoANANgCIABAFQACAEAFAAQgHAAgXAJQgaAMgLAEQAAAIgJAAQAQAFAcgCQAvgDACAAIABAEQACAEAFAAQgNAOgdAUQgcAUgOAOIAAAJQAagJApAAIA8AAQgCABgiAcQgiAcgGADQAVAAAugEQAvgFAVAAQgJAEgRAMQgJAHgQALIAAARQALAAAQAGQAJADAYAIIABAFQABABABABQC3gqCghDQDBhQBvhgQB/hvAAh2QAAkPpmibQg6gPg9gNAmEjxIAIAA");
	this.shape_88.setTransform(222.575,160.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AiwnWQgaAAAAgJIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQQAZAYAAABQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARQAdAVADADIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAaAtAZQgpABgsAPIAzAaQAAAEAFAEQAEAFAAAEQgiAAgQABQgbACgRAFIAAARQAVACAeANQAZALAJAIIAJAAQgGACgyAKQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAJQgtAHgUAIQglAOgRAdQAeAAARABQAgACAXAGQgRAHhVArIAAAIQAYgDAbAGQAaAHAOAOQAFAAAGACIgJAAQgBgBgBgBQg0gIgnA0QAWgFAqAaQAWANAYARIAHAAQgNAAgcAFQgdAEgNAAIAAAIQANAAAsAPQAoANANgCIABAEQACAEAFAAQgHAAgXAKQgaAMgLAEQAAAHgJAAQAQAFAcgCQAvgDACAAIABAFQACAEAFAAQgNANgdAVQgcATgOAPIAAAIQAagIApAAIA8AAQgCABgiAbQgiAcgGADQAVAAAugEQAvgEAVAAQgJADgRANQgJAHgQALIAAARQALAAAQAFQAJADAYAJIABAEQABACABABQC3grCghDQDBhQBvhgQB/hvAAh1QAAkQpmibQg6gOg9gOAmEjxIAIAA");
	this.shape_89.setTransform(222.575,157.0875);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AjzHiIgBgEIghgMQgQgFgLAAIAAgRIAZgSQARgNAJgDQgVAAgvAEQguAEgVAAQAGgDAigcIAkgcIg8AAQgpAAgaAIIAAgIQAOgPAcgTQAdgVANgNQgFAAgCgEIgBgFIgxADQgcACgQgFQAJAAAAgHIAlgQQAXgKAHAAQgFAAgCgEIgBgEQgNACgogNQgsgPgNAAIAAgIQANAAAdgEQAcgFANAAIgHAAIgugeQgqgagWAFQAng0A0AIIACACIAJAAIgLgCQgOgOgagHQgbgGgYADIAAgIIBmgyQgXgGgggCIgvgBQARgdAlgOQAUgIAtgHIAAgJQgUgPgkgHQghgHgeAEIAAgJQAXgOAogIIA4gMIgJAAQgJgIgZgLQgegNgVgCIAAgRQARgFAbgCIAygBQAAgEgEgFQgFgEAAgEIgzgaQAsgPApgBQgtgZgGgaQAIAAAOgEQANgEALAAQALAAAOAEQAOAEAIAAIAAgIIgggYQgWgRgFgKQAIAAASgEQARgFALAAQAMAAANAFQAOAEAIAAIgZgZQgQgQgKgTQADAAAFgEQAFgEANAAQAQAAAhAFQAiAGATAGQACgNgNgYQgPgZAAgPIAzAAQAAAJAaAAQgaAAAAgJIACgFQA9AOA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBDi3ArIgCgDgAl8jxIgIAAg");
	this.shape_90.setTransform(222.575,157.0875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{y:206.475}},{t:this.shape_70,p:{x:65.2625,y:154.475}},{t:this.shape_69}]}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_70,p:{x:65.275,y:157.975}},{t:this.shape_71,p:{y:209.975}}]},1).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_70,p:{x:65.275,y:157.975}},{t:this.shape_77}]},1).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_70,p:{x:65.275,y:157.975}},{t:this.shape_71,p:{y:209.975}}]},1).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_70,p:{x:65.275,y:157.975}},{t:this.shape_77}]},1).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_70,p:{x:70.175,y:153.075}},{t:this.shape_78,p:{y:204.225}}]},1).to({state:[{t:this.shape_84},{t:this.shape_80},{t:this.shape_83},{t:this.shape_82,p:{x:70.175,y:153.075}},{t:this.shape_78,p:{y:204.225}}]},1).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_70,p:{x:70.175,y:153.075}},{t:this.shape_78,p:{y:204.225}}]},1).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_70,p:{x:70.175,y:154.475}},{t:this.shape_78,p:{y:205.625}}]},1).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_88},{t:this.shape_82,p:{x:65.275,y:157.975}},{t:this.shape_71,p:{y:209.975}}]},1).to({state:[{t:this.shape_90},{t:this.shape_72},{t:this.shape_71,p:{y:206.475}},{t:this.shape_82,p:{x:65.2625,y:154.475}},{t:this.shape_89}]},1).wait(1));

	// left_wing
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#DD6900").ss(0.1,1,1).p("AEEk1QAEiAAVh0QABgGABgFQAKhNAihBQARgiAYgeQAbgjArgCQAygCAJAuQADAPgDARQgCANgCAMQgVBugeBuQgQBFgBApQgBBKAECbQAACIgUBKQgkCIhWDuQhbD7gdBfQgBABAAABAg9AuQgXhTgShJQgkiNAAg6QAAgvAZg2QAghEAxAAQBTAAAXCxQAGAvAIBcQAKBJASAZIAAg3QAAgKgIh4QgCgegCgYQgFhFAAgIQAAhoAFg7QAAgHABgGQAJg4A4gZQAMgGAHgEIAcALQAcAQADBNQANBmgBCEAEEktIAAgIAEEktQgBAJAAAIIAAAJQABgNAAgNgAg1A2QgDgBgDgCQgCgCgCgBIAAAAQgTgOgNgbQgDgHgVg5QgehShAAAQgeAAgNAZAhyD9QgYgEgNAAQgTAAgaAaQgaAaAAAUQAAATASAYQABACACACQAAABAAAAQABABABABQAGAHAOAPAjJFxQAAAAgBAAQgYAGgfAeQghAgAAATQAAASASAUQADAEAFAFAkQHuQgcADgaAiQgIALgkA8QgbAtgVAQQgdAXghgNAkIhIQAABHA9BuQAeA4A/BaACfMOQgCACgCABQgdAShBAEQgRABhdAAQiQAAhZgUQhXgUiEg+QAJgVACgBQADgCADABQAEABAEAF");
	this.shape_91.setTransform(198.325,41.0708);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#CC66CC").ss(0.1,1,1).p("AjPnEQgJARAAAZADZG/QgBADAAAD");
	this.shape_92.setTransform(193.5,74.875);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF8012").s().p("AkaMUQhXgUiEg+QAJgVACgBQADgCADABQADABAFAFQgFgFgDgBIADgKQAiANAdgXQAVgQAbgtQAkg8AIgLQAagiAbgDIAJAJIgJgJQgRgUAAgSQAAgTAhggQAfgeAYgGIABAAIABACIAVAWIgVgWIgBgCIAAgBIgDgEQgSgYAAgTQAAgUAagaQAagaATAAQANAAAYAEIgRAIIAVgGQg/hageg4Qg9huAAhHIAIgqQANgZAeAAQBAAAAeBSQAVA5ADAHQANAbATAOIACgCQgXhTgShJQgkiNAAg6QAAgvAZg2QAghEAxAAQBTAAAXCxQAGAvAIBcQAKBJASAZIAAg3IgIiCIgEg2IgFhNQAAhoAFg7IABgNQAJg4A4gZIATgKIAcALQAcAQADBNQANBmgBCEIAAAIIgBARIAAAJIABgaIAAgIQAEiAAVh0IACgLQAKhNAihBQARgiAYgeQAbgjArgCQAygCAJAuQADAPgDARIgEAZQgVBugfBuQgPBFgBApQgBBKAECbQAACIgUBKQgkCIhWDuQhbD7geBfIAAACIgKgDIgEADQgdAShBAEQgRABhdAAQiQAAhZgUgAg/AwIAEADIAGADIgGgDIgEgDIAAAAg");
	this.shape_93.setTransform(198.325,41.0708);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#DD6900").ss(0.1,1,1).p("ABkoNQgRg5gQgpQgnhkg5AAQgcAAgbAyQgZAwAAAqIBMIHQgThugihmQhEjKhSAAQgYAAgSAZQgRAYAAAbQAAAXBNDfQAdBSAVA+QAjBpAMArQgTgUgegoQglgzgRgUQhHhQhVgGQgJAIAAArQAABCBhB0QAyA8BJBPQgxAAgeA0QgdAzAQAxQg4AGglA8QgZAogHAvQgCANgBANABkoNQAFAQAEARQgBgDgDgCIAAAAQADAMADANQAWBXADAXABkoNQACAOADAOQgFgFgGAAAC7M1QgBgIgCgNQAAgCgBgBQgEgVAAgLQAAhPBQi8QBejdALgtQgEhkAOjUQAQjqAAhUQAAjqgRiFQghkGhfAAQhJAAgsCpQgiCCAACAQAAAkAGAnAh5CIQACACABABIAAAJQgBgGgCgGgADEMxIgJAEAl6JVIBuGvIHHjP");
	this.shape_94.setTransform(199.725,41.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF8012").s().p("Al6JVIgIgBQAHgvAZgoQAlg8A4gGQgQgxAdgzQAeg0AxAAQhJhPgyg8Qhhh0AAhCQAAgrAJgIQBVAGBHBRQARATAlAzQAeAoATAUIADAMIAAgJIgDgDQgMgrgkhpIgxiQQhNjfAAgXQAAgaARgYIAqgaQBSAABEDKQAiBmATBuIhMoHQAAgpAZgxQAbgyAcAAQA5AAAnBlQAQAoARA5IgGAXQAGAAAFAFIAGAZQAWBXADAXQgDgXgWhXIgGgZIAAAAIAEAFIgJghQgGgnAAgkQAAiAAiiCQAsipBJAAQBfAAAhEGQARCFAADrQAABTgQDqQgODUAEBkQgLAtheDdQhQC8AABPQAAALAEAVIABADIADAVInHDPg");
	this.shape_95.setTransform(199.725,41.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#DD6900").ss(0.1,1,1).p("AE3mGQgIg+gdg/QgKgVgNgRQgJgJgIgHIg7gdABYM0QAPgFAOgHQEYh9BvkmQBYjsAAm1QAAhyg7jCQhGjkhOAAQg1AAgTCyQgJBRAAB8QAAAUADAbQACAjAIAvQALBSAKAfACHn8QAEAYAAAoQAAA/ARCcQAJBOAIBCIAAA3QgKhXgjhgQgBgCgBgCQg8ighWAAQgcAAgOAzQgJAgAAAbQAABpA7CJQAOAhAZA6QATAuAAAaIAAARQguhHggglQgOgPgNgNQg9g5g1AAQggAAgTAZQgRAWAAAhQAABWBZCGQA2BRALAPQg0ADg6BAQgZAdgNAYAjpHkQAFgBAEgBAhXFqQABADABAAQAdAwAJAjAj4HqQguARgoAkQgWAUgXAdQgMAPgMARIABAJIgIAAQADgEAEgFAl7JQQguAGhPBOQhRBQgDAzQAAgCAAACQACAEACACABzMkIq4AJQgCABgBgBIgEAAIgHAAApMMnQAAACAAAE");
	this.shape_96.setTransform(219.7,45.75);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF8012").s().p("ApMMwQgBgBgCgEQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAABQAEg0BQhPQBQhPAtgFIgYAfIAYgfQAYgdAWgUQAngkAugSIAQgFIgDgCQANgYAagdQA5hAA0gDIhAhgQhZiGAAhWQAAghARgWQATgZAgAAQA1AAA9A5QANAMAOAQQAgAlAtBHIAAgRQAAgagSguIgnhbQg7iJAAhpQAAgbAIggQAOgzAdAAQBWAAA8CgIABAEQAjBgALBXIAAg3IgRiQQgRicAAg/QAAgogFgYIgCg7IAqgfIA7AcIARARQANAQAKAWQAdA/AIA9QgCgbAAgTQAAh8AIhRQATiyA2AAQBOAABGDkQA7DCAAByQAAG1hZDsQhuEmkYB9IgCgEIq4AIIgCABIgCgBgAmdJ9IAIAAIgCgKIgGAKgAjsHoIAJgDIgJADgAhZFxQAdAwAJAjQgJgjgdgwIgCgDIACADgAE9kwQAMBSAKAfQgKgfgMhSQgHgwgDgjQADAjAHAwg");
	this.shape_97.setTransform(220.0375,45.3941);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#DD6900").ss(0.1,1,1).p("AhtA3QABABABABQBcBlBwBHQCoBqCfAAQAaAAAagEQCtgaCOjIQBDhdAohpQAmhmAAhLQAAg1gIgbQgOgrgiAAQgfAAhLCuQg4CBgkBvQAAhBAEh+QAEhzAAgLQAAglgRgaQgQgagXAAQhQAAgtC3QgCAIgDAQQgIAlgRBPQgLA7gKAXQAEAKgJAIIAAgBIAAgHQAAgBABAAQAAgEAAgFQADgZAJg4QANhXAAgiQAAhEgCgQQgGgpgbgjQgwATgdBLQgPAlgZBvQgXBhgWAnQghA9g6AAQg2AAgZgkQgRgYgXhRAiLAVQAEAFAEAFQAHAIAHAHQACADADADQACACABABQgBABgCAAQgCAAgCAAQi6AOkABcQjyBhhqAoQDLBFAUAFQBYAVCgAAQBzAAFXgQQEngNBsgNQAmgEAPgFABBg2Ii5BMAHKAUQgCAFgCAEQgBAFAAADAuKErQgQAGgMAEIAAAJAuKErQgHgCgHgDQgDgBgDgBIAEABQABABABAA");
	this.shape_98.setTransform(270.45,176.475);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#CC6100").s().p("AnUCUQgVgFjLhFQBrgoDxhgQEAhcC5gOIAFAAIACAAIACABQBcBlBxBGQCoBqCfAAQAbAAAagEIACAMQgPAFgmAEQhrANkoANQlXAQhzAAQigAAhXgVg");
	this.shape_99.setTransform(249.0125,198.9625);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF8012").s().p("Ak1EDQhxhHhchlIgCgCIgDgDIgGgGIgDgZIC7hLIAHAKQAXBQARAZQAZAkA2gBQA6ABAhg9QAWgoAXhgQAZhvAOglQAdhLAxgUQAaAkAFApQADAQAABEQAAAigNBXIgMBRIAAAJIgBABIAAAHIAAABQAJgIgEgKQAKgZAMg5IAXh0IAGgYQAti3BQAAQAXAAAQAaQARAZAAAmIgEB+QgEB+gBBBQAlhvA4iCQBLiuAfABQAigBAOAsQAHAbAAA0QAABMgmBlQgoBqhCBdQiODHitAaQgaAFgaAAQiegBiohpg");
	this.shape_100.setTransform(311.15,173.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#DD6900").ss(0.1,1,1).p("AJqG/QAigNBBguQA8gsAXgXIAAArQgIAWgVA4QgWAughADQABAAACAAQCPAABAiqQAJAAAAgIQAGAGABAJQABAFAAASQAABxhDBnQhJBvhdAAQguAAhKgeQgZgKgcgNIh8hAIgUgLQgogUgzhXQgyhegZgnQgCgDgBgDIAIAAIgFAGAhhsTQABAEACAEQAiBQA7B+QBuDvBqDHQD1HJCcB8QABAAABABQA2ArArABQAAAAABAAAhosbIs5DaIgNADAgVJdQg9hLghhHQgehAACgoQABgJACgIAksGwQhugdhMhBQhXhKhsirQgxhNgkhxQgUhCgeiFQgbh5gRgwQgchNgngZAgVJdQAAAAAAABQAAAbgZAcQgXAZgPAAQhTAAhNiQQgXgqgZg+QgCgFgCgEQgTgtgCgDQAEAAAEAFQAFADAEAAAGaI3QASASBIAoQA/AqAAAsQAAATgRAQQgSARgZAAQh3AAhlhaQgIgGgGgGQAFAHAGAIQAdAlAAAhQAAAdgRAMQgNAJgZAAQg6AAhNg3QhFgyhChQQgCgDgCgDQgBAAAAAAADoJhIAJAAQAEATAYAhQgUgTgTgVQhjh0g5iwAguIuQABADADAEQAEAHAIAMQAJAQAAAF");
	this.shape_101.setTransform(266.275,250.55);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CC6100").s().p("ABxLlQhGgyhBhQIgFgGIAAAAQgBgFgJgQIgMgTIgEgHIAEAHIAMATQAJAQABAFQg9hLgihHQgbg6AAgnIAAgHQABgJACgIQgCAIgBAJIAAAHQAAAnAbA6QAiBHA9BLIAAABQAAAbgaAcQgXAZgPAAQhSAAhOiQQgWgqgag+IgDgJQgTgtgDgDQAFAAAEAEQAEAFAEAAQgEAAgEgFQgEgEgFAAQADADATAtIgFADQhugdhMhBQhXhKhsirQgxhNgjhxQgVhBgdiGQgbh5gSgwQgbhNgngZIgDgKIM6jaIAGAJIADAHQAjBQA6B/QBuDvBrDGQD1HJCbB8IACABQA2ArArABIABAAIADAAQCQABBAirQAIAAAAgIQAGAGACAJIABAXQAABxhEBnQhJBvhcAAQguAAhLgeQgZgKgcgNIh7hAIgVgLQgngUgzhXQgzhegYgnIAFgGIgJAAIAEAGQAYAnAzBeQAzBXAnAUIAVALIgEAGQASASBIAoQA/AqAAAsQAAATgRAQQgSAQgYAAQh4ABhlhaIgOgMIALAPQAdAmAAAfQAAAegRAMQgMAJgaAAQg5AAhNg3gADgJsQATAWATATQgXghgFgTIgIAAIAIAAQAFATAXAhQgTgTgTgWQhjhzg5iwQA5CwBjBzgAgbJdIAAAAgAgbJdIAAAAgAkuGtIAAAAgADdE2IAAAAg");
	this.shape_102.setTransform(266.9125,250.55);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF8012").s().p("AAGBVQgqgCg2gqQAigOBAgtQA9grAWgXIAAAqIgcBOQgXAughADIgBAAg");
	this.shape_103.setTransform(337.15,291.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#DD6900").ss(0.1,1,1).p("ABYtsQAkCaBEE5QA+ELA/CiQAQAqA1CkQAoB/AjBLQASAmB4B6QBsBuAAAjQAAAtgrAVQggARgwAAQg/AAhSg6QhDgxhAhMQAQAmAqBFQAtBKAAAcQAAAfgaALQgSAJghAAQhsAAiWkxQgghAgehHQgDgIgDgHQgFAIAAAMQAABTBBBkQAjA6AIAPQAUAnAAAhQAAAvgRASQgPARgoAAQhPAAhQhlQg/hPg4iCQAHAlASAwQAdBSAAAxQAAARgZARQgXARgPAAQgzAAhvjyQg4h4hTjWQhfjagfhfQgziaAAjKQAAhsACggQAEhJAOgfQACgFACgDABat8IgGACIsCDiAAIG2QgOgjgOgjQgkhcgHgbAAMGjQAAAIgEAJQAAABAAABACDEKQAAgCAAgCQAAgOAFADQACACABAFIgIAIQACBGAsBhQAsBcBGBYQAIAKAJAKAjbIuQgGgNgFgOQg2iFgdiJQgdiHAJhIAjgH/QAAAKABAKQABAMADAPAEsJlQADAJAFAL");
	this.shape_104.setTransform(259.3,247.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#CC6100").s().p("ABMJKQggg/gehHIgHgQIABgBQAEgJAAgIQAAAIgEAJIgBABIgbhFQgjhcgHgbQAHAbAjBcIAbBFQgDAKgBALQAABTBABkQAlA6AHAPQAUAoAAAgQAAAvgRARQgPASgogBQhOAAhRhkQg/hQg4iAIgEgcIgBgTIABATIgHABIgDgHQg0iCgciGQgWhnAAhCQAAgVACgQQgCAQAAAVQAABCAWBnQAcCGA0CCIADAHIALAbQAIAkARAwQAeBSgBAxQAAARgZASQgWAQgQAAQgzAAhvjyQg4h4hSjWQhfjagghfQgziZAAjLQAAhsACgfQAEhKAOgfIMCjiIAEAOQAkCaBEE5QA/ELA+CiQAQAqA0CkQApB/AkBKQARAnB4B6QBsBuAAAiQAAAugrAWQggARgwAAQg/AAhSg7QhDgxhAhMIgIgUIgJAAQhGhYgshcQgthggBhHIAIgJIgDgFQgFgDAAANIAAAEQABBHAtBgQAsBcBGBYIARAUQAQAmApBFQAuBKgBAcQABAegaAMQgSAJghAAQhsAAiWkygAAHG0IAAAAg");
	this.shape_105.setTransform(259.3,247.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#DD6900").ss(0.1,1,1).p("ApTsOQAEACAAAGQBygcCsgVQCegTBVAAQAyAABGAOQAiAGAZAGQgIgJgIgIAk9GKQhkihhYkFQhnkzAAjXQACgxACgqQADhWABg4QAAgNAAgMAoyp+QACgFACgEAB1swQAGABAFACQAIACAIADAB1swQADAEADAEQD0EjAnHpQAHBSALCaQAMCBAVBjQAEAUBMCqQBICjAAAbQAAAggQALQgLAJgbAAQiMAAhsj0QgBgBAAgBQgehDgVhKQgLgigIgkQgYhpAAhOQAAgsAFgUADVtjIgFACAApEsQgCgagBgbQgEhKAAgyAAzEbQgBACgCACQgEAGgDAHAD/HhQABBEAUBaQAVBhAAAmQAAAZgaASQgXARgXAAQhfAAgxjiQgMg1gJhBQgNhXgGhnQgGAOgEAVQgFAeAAAlQAABDAZBKQANAlAHAfQAGAeAAAXQAAAegIANQgMARgfAAQhsAAgsiyQgZhkgBiHQgBANgBARQgFBugBAEQgEAvgIAgQgTBHgoAAQg9AAgUiYQgDgZgCgiQgDg7AAhWQAAiMABgdQAEhQAUhQAD+HWQAAAGABAFAk4GSQgCgEgDgEAiYE3QAAgDAAgEQAAgrAQh/QAMhhAGgoAiQENQgEAKgDAZQAAAEgBAD");
	this.shape_106.setTransform(246.975,245.25);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CC6100").s().p("AEzJkIgBgCQgehDgVhKQABBDAUBaQAVBiAAAmQAAAYgaATQgXAQgXAAQhfAAgxjhQgMg1gJhBQgNhYgGhmIAHgNIADgEIgDAEIgHANIgDg1QgEhKAAgzQAAAzAEBKIADA1QgGANgEAWQgFAeAAAlQAABCAZBLQANAlAHAeQAGAfAAAXQAAAegIANQgMARgfAAQhsAAgsiyQgZhlgBiGIABgHIgBAAQAAgrAQh/QAMhiAGgnQgGAngMBiQgQB/AAArIAAAHIgCAeIgGByQgEAvgIAgQgTBHgoAAQg9AAgUiYIAAgzIgFgIQgDg7AAhWQAAiMABgdQAEhPAUhRQgUBRgEBPQgBAdAACMQAABWADA7QhkihhYkFQhnkzAAjXIAEhbIAEiOIAFABQAEACAAAGQBygcCsgVQCegTBVAAQAyAABGANQAiAHAZAGIAGAHQD0EkAnHoIASDtQAMCBAVBjQAEAUBMCqQBICiAAAcQAAAfgQAMQgLAIgbAAQiMAAhsjzgADUDYQAABNAYBqQAIAkALAiIgBgLIgSg7QgYhqAAhNQAAgtAFgTQgFATAAAtIAAAAgAiXEkQADgZAEgKQgEAKgDAZgAoyqLIAEgIIgEAIgAApEgIAAAAg");
	this.shape_107.setTransform(246.975,246.475);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#DD6900").ss(0.1,1,1).p("AoypDQAfkFD0i/QBvhXCDgwQCGgwCDAAQCDAABuAzQB3A3AABNQAAAKgBALQgBABABAAQgIBCgyBKQhUBqgwBFQhWB7gtCGQg8C0AADoQAACfAwCvQAiB8BHCpQBhDpAIAUQAvCBAABTQAABGgQAcQgVAig3AAQhsAAhIjqQgXhFgOhPIAAAAQgDgMgCgLQgFA2AAAfQAAAkAPAqQAOApAPBFQANBGAAAcQAAAUgIAOQgMARgXAAQhsAAhRkCQgKglgKgnQgQg8gMg/QgCgKgCgJQgCAHADAMQAGAlAOBZQAHAuAEAfQAHA1AAAOQAAAtgIAPQgJAQgdAAQhRAAg9iXQgMgegLgkQAAAVgBAtQAAAEAAAFQgIBTgmAAQhpAAhml0QgkiFgaiRQgXh+AAgtQAAgLAJh5QAIh4AAgLQAAhHgViPQgViQAAhWQAAgQARg/QACgJACgIQANgvAAgFAI7vyQm3CqjmF/Qj2GWA9IaAC/MHQgBAKgBAJQgBgEAAgEQgOhPAAgpAksGjQAEAkAEAiQASChAeCAQAOA8APAyQAAgQAAgEAgrLkQgGglgGgl");
	this.shape_108.setTransform(235.55,157.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF8012").s().p("AnUL3QgkiFgaiRQgYh/AAgtIAJiEIAJiDQgBhGgUiQQgWiPAAhXQAAgQARg+IAFgRIgFgBQAfkFD0i/QBvhWCEgwQCFgyCDAAQCCABBvAzQB3A3AABMIgBAWIgIAAQm3CqjmF+Qj1GWA8IbIgJACIgIhGIAIBGQATChAdCAQAOA8AQAyIgBBBIAAAKQgJBSglAAQhqABhll0gAotntQAMgwAAgEQAAAEgMAwg");
	this.shape_109.setTransform(235.55,148.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#CC6100").s().p("AiDNYQgMglgKgnQgQg9gMg/IgDgSIgMhLIAMBLQgCAHACAMIAUB9IAMBOQAHA1AAANQAAAugIAOQgJARgeAAQhRAAg8iXQgMgfgLgjIAAgUIAAAUQgQgygOg8QgdiAgTihIAKgCQg9oaD1mXQDnl+G3iqIAHABQgHBBgzBLQhUBrgvBEQhXB7gtCGQg7CzAADoQAACgAvCuQAiB9BHCpIBpD9QAwCBAABTQAABFgRAdQgUAhg4AAQhsABhIjrQgWhEgPhPIAAAAIgDgqIgBASIgCgIQgNhOgBgqQABAqANBOIACAIQgFA2AAAgQAAAkAOApQAPApAOBGQANBFAAAdQAAAUgIANQgLASgXgBQhsABhQkCgAAwKzIAAAAg");
	this.shape_110.setTransform(249.718,167.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#DD6900").ss(0.1,1,1).p("AIfpMQgxgZhfgGQglgCh+AAQmYAAlBF9QiACYhkDFQhSChgzDXQAvAeEhA4QEMA0BNgBQALlIEAl9QBciHBmh1QgHgIgGgEAIypcQgFAEgFAEIAkAAQBsAzBLBcQBYBsAAB9QAABrgRBTQgcCHhBAAQgyAAgUhHQgMgsgIh6QgBgcgCgZQgCBagYBjQgkCYhCAAQgcAAgNgqQgJgcAAgoQAAgLAJhaQAIhaAAgLQAAhUgWg8QABAEAAADQAEAdAAAKQAABngzCLQg4CXg6AAQgSAAgTghQgSgfAAgVQAAgzAehkQAdhkAAg5QAAgbgPggQgHgQgHgKAIopUQgCACgCACQgCABgCACQgBAAAAABQhYBJhSBUQgBAAAAAAQgrAtgpAvAKEksQgCgLgCgKQgUhfgtgpAKEksQADASAFAlQAEAlAAAJQAAAHAAAHQgBgIAAgGQgFg/gGgmgAHZksQgWg9gtglAHWlOQAAALADAXAilJuQgEAAgEAAAtWHlQgCglgCgBQABgBACgCQAEgEgDAtg");
	this.shape_111.setTransform(252.525,56.1759);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#CC6100").s().p("AhHFOQgIgcAAgoQAAgLAIhbQAJhaAAgLQAAhTgWg7IABAHQAEAcAAAKQAABmgzCLQg4CZg7AAQgSgBgTghQgRgfAAgVQAAgzAdhkQAdhlAAg4QAAgbgOgfQgIgRgHgJQApgwAsgtIAAAAQBShUBZhJIAAAAIAFgEIADgEIAjAAQBtA0BKBbQBYBsAAB9QAABrgRBSQgbCIhBAAQgyAAgUhHQgNgtgHh5IgEg2IAAgOQAAgIgEglQgEglgEgSIgEgUQgThggtgpQAtApATBgIAEAUQAGAmAFA+IABAOQgCBagXBkQgkCZhBAAQgdgBgNgqgAhUhPQgEgYAAgLQAAALAEAYQgXg+gsglQAsAlAXA+IAAAAgABhAiIAAAAgAhUhPIAAAAg");
	this.shape_112.setTransform(308.375,34.15);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF8012").s().p("AlqI7Qkhg4gvgeQAzjXBSihQBkjFCAiYQFBl9GYAAQB+AAAlACQBfAGAxAZQhYBJhSBUIgBAAQgrAtgpAvQgHgIgGgEQAGAEAHAIQhmB1hcCHQkAF9gLFIIgDAAQhPAAkHgzgAG8lTIAAAAg");
	this.shape_113.setTransform(236.925,56.1759);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#DD6900").ss(0.1,1,1).p("Ah5CIQgMgrgjhpQgVg+gdhSQhNjfAAgXQAAgbARgYQASgZAYAAQBSAABEDKQAiBmATBuIhMoHQAAgqAZgwQAbgyAcAAQA5AAAnBkQAQApARA5QACAOADAOIAAAAQADACABADQgEgRgFgQQgGgnAAgkQAAiAAiiCQAsipBJAAQBfAAAhEGQARCFAADqQAABUgQDqQgODUAEBkQgLAtheDdQhQC8AABPQAAALAEAVQABABAAACQACANABAIIAJgEABpnxQADAMADANQAWBXADAXABpnxQgFgFgGAAAh5CIQgTgUgegoQglgzgRgUQhHhQhVgGQgJAIAAArQAABCBhB0QAyA8BJBPQgxAAgeA0QgdAzAQAxQg4AGglA8QgZAogHAvQgCANgBANAh5CIQACACABABIAAAJQgBgGgCgGgAl6JVIBuGvIHHjP");
	this.shape_114.setTransform(199.725,41.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF8012").s().p("Al6JVIgIgBQAHgvAZgoQAlg8A4gGQgQgxAdgzQAeg0AxAAQhJhPgyg8Qhhh0AAhCQAAgrAJgIQBVAGBHBRQARATAlAzQAeAoATAUQgMgrgkhpIgxiQQhNjfAAgXQAAgaARgYIAqgaQBSAABEDKQAiBmATBuIhMoHQAAgpAZgxQAbgyAcAAQA5AAAnBlQAQAoARA5IgGAXQAGAAAFAFIAGAZQAWBXADAXQgDgXgWhXIgGgZIAAAAIAEAFIgJghQgGgnAAgkQAAiAAiiCQAsipBJAAQBfAAAhEGQARCFAADrQAABTgQDqQgODUAEBkQgLAtheDdQhQC8AABPQAAALAEAVIABADIADAVInHDPgAh2CUIAAgJIgDgDIADAMg");
	this.shape_115.setTransform(199.725,41.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#DD6900").ss(0.1,1,1).p("AEEk1QAEiAAVh0QABgGABgFQAKhNAihBQARgiAYgeQAbgjArgCQAygCAJAuQADAPgDARQgCANgCAMQgVBugeBuQgQBFgBApQgBBKAECbQAACIgUBKQgkCIhWDuQhbD7gdBfQgBABAAABAg9AuQgXhTgShJQgkiNAAg6QAAgvAZg2QAghEAxAAQBTAAAXCxQAGAvAIBcQAKBJASAZIAAg3QAAgKgIh4QgCgegCgYQgFhFAAgIQAAhoAFg7QAAgHABgGQAJg4A4gZQAMgGAHgEIAcALQAcAQADBNQANBmgBCEAEEktQgBAJAAAIIAAAJQABgNAAgNIAAgIAg1A2QgDgBgDgCQgCgCgCgBIAAAAQgTgOgNgbQgDgHgVg5QgehShAAAQgeAAgNAZAhyD9QgYgEgNAAQgTAAgaAaQgaAaAAAUQAAATASAYQABACACACQAAABAAAAQABABABABQAGAHAOAPAjJFxQAAAAgBAAQgYAGgfAeQghAgAAATQAAASASAUQADAEAFAFAkQHuQgcADgaAiQgIALgkA8QgbAtgVAQQgdAXghgNAkIhIQAABHA9BuQAeA4A/BaACfMOQgCACgCABQgdAShBAEQgRABhdAAQiQAAhZgUQhXgUiEg+QAJgVACgBQADgCADABQAEABAEAF");
	this.shape_116.setTransform(198.325,41.0708);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]}).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_116}]},1).wait(1));

	// left_leg
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#DD6900").ss(0.1,1,1).p("AC1glQAAAAAAABQgRBFguBBQg8BWhFAAQhEAAgyg8Qgzg8AAhTQAAgTAVhJQAPgyAEgW");
	this.shape_117.setTransform(128.15,207.475);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AihhBQACgKAAgEACgBQQABgDABgD");
	this.shape_118.setTransform(130.25,195.675);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF8012").s().p("AiBB8Qgzg8AAhTQAAgTAWhJQAOgyAFgWIALADIE1CPIAAABQgQBFguBBQg9BWhFAAQhDAAgzg8g");
	this.shape_119.setTransform(128.15,207.475);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AihhBQACgKAAgEACgBQQAAgDACgD");
	this.shape_120.setTransform(135.15,194.275);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FF8012").s().p("AiBB8Qgzg8AAhTQAAgTAVhJQAPgyAEgWIAMADIE1CPIAAABQgRBFguBBQg7BWhGAAQhDAAgzg8g");
	this.shape_121.setTransform(133.05,206.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_119,p:{y:207.475}},{t:this.shape_118,p:{y:195.675}},{t:this.shape_117,p:{y:207.475,x:128.15}}]}).to({state:[{t:this.shape_119,p:{y:210.975}},{t:this.shape_118,p:{y:199.175}},{t:this.shape_117,p:{y:210.975,x:128.15}}]},1).to({state:[{t:this.shape_119,p:{y:210.975}},{t:this.shape_118,p:{y:199.175}},{t:this.shape_117,p:{y:210.975,x:128.15}}]},1).to({state:[{t:this.shape_119,p:{y:210.975}},{t:this.shape_118,p:{y:199.175}},{t:this.shape_117,p:{y:210.975,x:128.15}}]},1).to({state:[{t:this.shape_119,p:{y:210.975}},{t:this.shape_118,p:{y:199.175}},{t:this.shape_117,p:{y:210.975,x:128.15}}]},1).to({state:[{t:this.shape_121,p:{y:206.075}},{t:this.shape_120,p:{y:194.275}},{t:this.shape_117,p:{y:206.075,x:133.05}}]},1).to({state:[{t:this.shape_121,p:{y:206.075}},{t:this.shape_120,p:{y:194.275}},{t:this.shape_117,p:{y:206.075,x:133.05}}]},1).to({state:[{t:this.shape_121,p:{y:206.075}},{t:this.shape_120,p:{y:194.275}},{t:this.shape_117,p:{y:206.075,x:133.05}}]},1).to({state:[{t:this.shape_121,p:{y:207.475}},{t:this.shape_120,p:{y:195.675}},{t:this.shape_117,p:{y:207.475,x:133.05}}]},1).to({state:[{t:this.shape_119,p:{y:210.975}},{t:this.shape_118,p:{y:199.175}},{t:this.shape_117,p:{y:210.975,x:128.15}}]},1).to({state:[{t:this.shape_119,p:{y:207.475}},{t:this.shape_118,p:{y:195.675}},{t:this.shape_117,p:{y:207.475,x:128.15}}]},1).wait(1));

	// left_foot
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgDADQgCABAFAAQABBOgoA0QgoA2hEAAQgMAAgSgEQgSgEgHAAQAFgKATgOQAigaADgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_122.setTransform(96.2,225.775);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQABADABAEQAEAJAFARAgQgNQAAABACACQADADACAFAARAhIAAAIIghAA");
	this.shape_123.setTransform(113.15,214.925);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#563A07").s().p("AhtCDQgRgEgJAAQAGgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQAQAAAUAFQAVAGAGAGQBEgRAiAAIAIAAIAAAMIAAA4IgqAAQgLAAgMAEQgMAEgHAAQAAAFgDADQgBAAAAAAQAAAAABABQAAAAABAAQABAAABAAQABBOgoA0QgoA2hEAAQgLAAgTgEg");
	this.shape_124.setTransform(96.2,225.775);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQABADABAEAARAhIAAAIIghAAAgQgNQAAABACACQADADACAFQAEAJAFAR");
	this.shape_125.setTransform(113.15,218.425);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZh6IAAgMIgJAAQgiAAhEARQgGgGgVgGQgTgFgRAAQgaAAguARQgtASgOAQQAjgCArAVQAxAYAAAdQAAAugwAoQgDACgiAaQgTAOgFAKQAHAAASAEQASAEAMAAQBEAAAog2QAog0gBhOQgFAAACgBQADgDAAgFQAHAAANgEQALgEALAAIArAA");
	this.shape_126.setTransform(96.2,229.275);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#412C05").ss(0.1,1,1).p("ACRiIIgBgMIgJABQghAEhCAZQgGgEgWgDQgUgDgQACQgaADgrAXQgrAXgLASQAigGAtAQQA0AQADAdQAGAugqAuQgDACgfAeQgQARgFAKQAIgBASACQATACALgCQBDgIAhg7QAig5gMhNQgEAAABgBQADgDgBgFQAIgBALgFQALgGALgBIAqgF");
	this.shape_127.setTransform(101.475,225.6321);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgTgaIgCgOQACAOAHAQQACADABADQAFAJAHARAgJgEQgDgEgDgDQgDgBAAgBIAAgBAAVAcIABAJIghAE");
	this.shape_128.setTransform(117.875,213.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#563A07").s().p("AhSCUQgSgCgIABQAFgKAQgRIAiggQAqgugGguQgDgdg0gQQgtgQgiAGQALgSArgXQArgXAagDQAQgCAUADQAWADAGAEQBCgZAhgEIAJgBIABAMIAAAAIAHA4IgqAFQgLABgLAGQgLAFgIABQABAFgDADQAAAAAAABQAAAAAAAAQABAAABAAQAAAAABAAQAMBNgiA5QghA7hDAIIgLABIgTgBg");
	this.shape_129.setTransform(101.475,225.6321);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgMAEgIAAQAAAFgDADQgBABAEAAQABBOgoA0QgoA2hEAAQgLAAgSgEQgTgEgHAAQAFgKATgOQAjgaACgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_130.setTransform(101.1,224.375);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQABAPAFAQQABADAAAEQAEAJAFARAgQgNQAAABACACQADADACAFAARAhIAAAIIghAA");
	this.shape_131.setTransform(118.05,213.525);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#563A07").s().p("AhsCDQgTgEgHAAQAFgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgiACQANgQAtgSQAugRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAMIAAA4IgrAAQgLAAgLAEQgMAEgJAAQAAAFgDADQAAAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQACBOgoA0QgoA2hEAAQgLAAgSgEg");
	this.shape_132.setTransform(101.1,224.375);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AARAhIAAAIIghAAAgQgaIAAgOQAAAPAFAQQACADAAAEQAEAJAFARAgQgNQAAABACACQADADACAF");
	this.shape_133.setTransform(122.95,208.625);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgDADQgCABAFAAQABBOgoA0QgoA2hEAAQgMAAgSgEQgSgEgHAAQAFgKATgOQAigaADgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_134.setTransform(106,219.475);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#563A07").s().p("AhtCDQgRgEgJAAQAGgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAIAAIAAAMIAAA4IgqAAQgLAAgLAEQgNAEgHAAQAAAFgEADQAAAAAAAAQAAAAABABQAAAAABAAQAAAAACAAQABBOgoA0QgoA2hEAAQgMAAgSgEg");
	this.shape_135.setTransform(106,219.475);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgEADQgBABAFAAQABBOgoA0QgoA2hEAAQgMAAgSgEQgSgEgIAAQAGgKATgOQAigaADgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQAQAAAUAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_136.setTransform(110.9,214.575);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#563A07").s().p("AhsCDQgTgEgHAAQAFgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgiACQANgQAtgSQAugRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAMIAAA4IgrAAQgLAAgMAEQgLAEgJAAQAAAFgCADQgBAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQACBOgoA0QgoA2hEAAQgMAAgRgEg");
	this.shape_137.setTransform(110.9,214.575);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgMAEQgMAEgIAAQAAAFgDADQgBABAEAAQACBOgoA0QgoA2hEAAQgMAAgSgEQgSgEgIAAQAGgKATgOQAigaADgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQAQAAAUAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_138.setTransform(115.8,211.075);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQABADACAEQADAJAFARAARAhIAAAIIghAAAgQgNQAAABADACQACADADAF");
	this.shape_139.setTransform(132.75,200.225);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#563A07").s().p("AhtCDQgRgEgJAAQAGgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAIAAIAAAMIAAA4IgqAAQgLAAgLAEQgNAEgHAAQAAAFgEADQAAAAAAAAQAAAAABAAQAAABABAAQABAAABAAQABBOgoA0QgoA2hEAAQgMAAgSgEg");
	this.shape_140.setTransform(115.8,211.075);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQABADABAEAgQgNQAAABACACQADADACAFQAEAJAFARAARAhIAAAIIghAA");
	this.shape_141.setTransform(113.15,218.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_124,p:{y:225.775}},{t:this.shape_123,p:{y:214.925,x:113.15}},{t:this.shape_122,p:{y:225.775}}]}).to({state:[{t:this.shape_124,p:{y:229.275}},{t:this.shape_126},{t:this.shape_125}]},1).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_124,p:{y:229.275}},{t:this.shape_123,p:{y:218.425,x:113.15}},{t:this.shape_122,p:{y:229.275}}]},1).to({state:[{t:this.shape_124,p:{y:229.275}},{t:this.shape_123,p:{y:218.425,x:113.15}},{t:this.shape_122,p:{y:229.275}}]},1).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_135},{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_137},{t:this.shape_123,p:{y:203.725,x:127.85}},{t:this.shape_136}]},1).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_124,p:{y:229.275}},{t:this.shape_122,p:{y:229.275}},{t:this.shape_141}]},1).to({state:[{t:this.shape_124,p:{y:225.775}},{t:this.shape_123,p:{y:214.925,x:113.15}},{t:this.shape_122,p:{y:225.775}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.9,-62.7,437.9,411.9);


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


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.sunsetcopy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFF99").s().p("AmiFqQisiWAAjUQAAjTCsiWQCuiWD0AAQD1AACtCWQCtCWAADTQAADUitCWQitCWj1AAQj0AAiuiWg");
	this.shape.setTransform(-4.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.3,-51.2,118.19999999999999,102.4);


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


(lib.rewatchpuzzletxtcopy5 = function(mode,startPosition,loop,reversed) {
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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtPEXQhJhMAAhnIAAnBIBhAAIAAHBQAAA/AtAtQAtAsA/AAQA/AAAsgsQAtgtAAg/IAAnBIBiAAIAAHBQAABnhKBMQhJBMhnAAQhoAAhJhMgA3VE0IAAhsQA2AwB0AEQB2AAAtgdQAtgeAAgqQAAgqgtgeQgtgeg/AAQhdgBhCg5QhCg6AAhTQAAhTBCg8QBCg9CIAAQBjAFAqAfIAABwIgBgBQgmgohmgFQhgABglAdQgmAeAAAqQAAAqAmAeQAlAeA1AAQBoAABJA5QBJA7AABTQAABShJA+QhJA8ifAAQhwgFg6gqgATcFeIAApaIiYAAIAAhhIGSAAIAABhIiYAAIAAJagAOBFeIAAq7IBhAAIAAK7gAK9FeIAApCIiQJCIhmAAIiQpCIAAJCIhiAAIAAq7ICnAAIB+H3IB/n3ICmAAIAAK7gAlDFeIAAq7ICNAAQBnAABJA7QBJA5AABTQAABKhKA3QAaAMAXARQBKA7AABUQAABThKA6QhIA6hnAAgAjhD8IBcAAQA/AAAsgdQAsgeAAgqQAAgrgsgeQgsgdg+AAIhdAAgAjhgwIAtAAQA9AAAtgdQAsgeAAgrQAAgqgsgeQgtgdg/gBIgrAAg");
	this.shape.setTransform(12.075,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0F0F0").s().p("AtPEXQhJhMAAhnIAAnBIBhAAIAAHBQAAA/AtAtQAtAsA/AAQA/AAAsgsQAtgtAAg/IAAnBIBiAAIAAHBQAABnhKBMQhJBMhnAAQhoAAhJhMgA3VE0IAAhsQA2AwB0AEQB2AAAtgdQAtgeAAgqQAAgqgtgeQgtgeg/AAQhdgBhCg5QhCg6AAhTQAAhTBCg8QBCg9CIAAQBjAFAqAfIAABwIgBgBQgmgohmgFQhgABglAdQgmAeAAAqQAAAqAmAeQAlAeA1AAQBoAABJA5QBJA7AABTQAABShJA+QhJA8ifAAQhwgFg6gqgATcFeIAApaIiYAAIAAhhIGSAAIAABhIiYAAIAAJagAOBFeIAAq7IBhAAIAAK7gAK9FeIAApCIiQJCIhmAAIiQpCIAAJCIhiAAIAAq7ICnAAIB+H3IB/n3ICmAAIAAK7gAlDFeIAAq7ICNAAQBnAABJA7QBJA5AABTQAABKhKA3QAaAMAXARQBKA7AABUQAABThKA6QhIA6hnAAgAjhD8IBcAAQA/AAAsgdQAsgeAAgqQAAgrgsgeQgsgdg+AAIhdAAgAjhgwIAtAAQA9AAAtgdQAsgeAAgrQAAgqgsgeQgtgdg/gBIgrAAg");
	this.shape_1.setTransform(12.075,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0E0E0").s().p("AtPEXQhJhMAAhnIAAnBIBhAAIAAHBQAAA/AtAtQAtAsA/AAQA/AAAsgsQAtgtAAg/IAAnBIBiAAIAAHBQAABnhKBMQhJBMhnAAQhoAAhJhMgA3VE0IAAhsQA2AwB0AEQB2AAAtgdQAtgeAAgqQAAgqgtgeQgtgeg/AAQhdgBhCg5QhCg6AAhTQAAhTBCg8QBCg9CIAAQBjAFAqAfIAABwIgBgBQgmgohmgFQhgABglAdQgmAeAAAqQAAAqAmAeQAlAeA1AAQBoAABJA5QBJA7AABTQAABShJA+QhJA8ifAAQhwgFg6gqgATcFeIAApaIiYAAIAAhhIGSAAIAABhIiYAAIAAJagAOBFeIAAq7IBhAAIAAK7gAK9FeIAApCIiQJCIhmAAIiQpCIAAJCIhiAAIAAq7ICnAAIB+H3IB/n3ICmAAIAAK7gAlDFeIAAq7ICNAAQBnAABJA7QBJA5AABTQAABKhKA3QAaAMAXARQBKA7AABUQAABThKA6QhIA6hnAAgAjhD8IBcAAQA/AAAsgdQAsgeAAgqQAAgrgsgeQgsgdg+AAIhdAAgAjhgwIAtAAQA9AAAtgdQAsgeAAgrQAAgqgsgeQgtgdg/gBIgrAAg");
	this.shape_2.setTransform(12.075,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1D1D1").s().p("AtPEXQhJhMAAhnIAAnBIBhAAIAAHBQAAA/AtAtQAtAsA/AAQA/AAAsgsQAtgtAAg/IAAnBIBiAAIAAHBQAABnhKBMQhJBMhnAAQhoAAhJhMgA3VE0IAAhsQA2AwB0AEQB2AAAtgdQAtgeAAgqQAAgqgtgeQgtgeg/AAQhdgBhCg5QhCg6AAhTQAAhTBCg8QBCg9CIAAQBjAFAqAfIAABwIgBgBQgmgohmgFQhgABglAdQgmAeAAAqQAAAqAmAeQAlAeA1AAQBoAABJA5QBJA7AABTQAABShJA+QhJA8ifAAQhwgFg6gqgATcFeIAApaIiYAAIAAhhIGSAAIAABhIiYAAIAAJagAOBFeIAAq7IBhAAIAAK7gAK9FeIAApCIiQJCIhmAAIiQpCIAAJCIhiAAIAAq7ICnAAIB+H3IB/n3ICmAAIAAK7gAlDFeIAAq7ICNAAQBnAABJA7QBJA5AABTQAABKhKA3QAaAMAXARQBKA7AABUQAABThKA6QhIA6hnAAgAjhD8IBcAAQA/AAAsgdQAsgeAAgqQAAgrgsgeQgsgdg+AAIhdAAgAjhgwIAtAAQA9AAAtgdQAsgeAAgrQAAgqgsgeQgtgdg/gBIgrAAg");
	this.shape_3.setTransform(12.075,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C2C2C2").s().p("AtPEXQhJhMAAhnIAAnBIBhAAIAAHBQAAA/AtAtQAtAsA/AAQA/AAAsgsQAtgtAAg/IAAnBIBiAAIAAHBQAABnhKBMQhJBMhnAAQhoAAhJhMgA3VE0IAAhsQA2AwB0AEQB2AAAtgdQAtgeAAgqQAAgqgtgeQgtgeg/AAQhdgBhCg5QhCg6AAhTQAAhTBCg8QBCg9CIAAQBjAFAqAfIAABwIgBgBQgmgohmgFQhgABglAdQgmAeAAAqQAAAqAmAeQAlAeA1AAQBoAABJA5QBJA7AABTQAABShJA+QhJA8ifAAQhwgFg6gqgATcFeIAApaIiYAAIAAhhIGSAAIAABhIiYAAIAAJagAOBFeIAAq7IBhAAIAAK7gAK9FeIAApCIiQJCIhmAAIiQpCIAAJCIhiAAIAAq7ICnAAIB+H3IB/n3ICmAAIAAK7gAlDFeIAAq7ICNAAQBnAABJA7QBJA5AABTQAABKhKA3QAaAMAXARQBKA7AABUQAABThKA6QhIA6hnAAgAjhD8IBcAAQA/AAAsgdQAsgeAAgqQAAgrgsgeQgsgdg+AAIhdAAgAjhgwIAtAAQA9AAAtgdQAsgeAAgrQAAgqgsgeQgtgdg/gBIgrAAg");
	this.shape_4.setTransform(12.075,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B2B2B2").s().p("AtPEXQhJhMAAhnIAAnBIBhAAIAAHBQAAA/AtAtQAtAsA/AAQA/AAAsgsQAtgtAAg/IAAnBIBiAAIAAHBQAABnhKBMQhJBMhnAAQhoAAhJhMgA3VE0IAAhsQA2AwB0AEQB2AAAtgdQAtgeAAgqQAAgqgtgeQgtgeg/AAQhdgBhCg5QhCg6AAhTQAAhTBCg8QBCg9CIAAQBjAFAqAfIAABwIgBgBQgmgohmgFQhgABglAdQgmAeAAAqQAAAqAmAeQAlAeA1AAQBoAABJA5QBJA7AABTQAABShJA+QhJA8ifAAQhwgFg6gqgATcFeIAApaIiYAAIAAhhIGSAAIAABhIiYAAIAAJagAOBFeIAAq7IBhAAIAAK7gAK9FeIAApCIiQJCIhmAAIiQpCIAAJCIhiAAIAAq7ICnAAIB+H3IB/n3ICmAAIAAK7gAlDFeIAAq7ICNAAQBnAABJA7QBJA5AABTQAABKhKA3QAaAMAXARQBKA7AABUQAABThKA6QhIA6hnAAgAjhD8IBcAAQA/AAAsgdQAsgeAAgqQAAgrgsgeQgsgdg+AAIhdAAgAjhgwIAtAAQA9AAAtgdQAsgeAAgrQAAgqgsgeQgtgdg/gBIgrAAg");
	this.shape_5.setTransform(12.075,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A3A3A3").s().p("AtPEXQhJhMAAhnIAAnBIBhAAIAAHBQAAA/AtAtQAtAsA/AAQA/AAAsgsQAtgtAAg/IAAnBIBiAAIAAHBQAABnhKBMQhJBMhnAAQhoAAhJhMgA3VE0IAAhsQA2AwB0AEQB2AAAtgdQAtgeAAgqQAAgqgtgeQgtgeg/AAQhdgBhCg5QhCg6AAhTQAAhTBCg8QBCg9CIAAQBjAFAqAfIAABwIgBgBQgmgohmgFQhgABglAdQgmAeAAAqQAAAqAmAeQAlAeA1AAQBoAABJA5QBJA7AABTQAABShJA+QhJA8ifAAQhwgFg6gqgATcFeIAApaIiYAAIAAhhIGSAAIAABhIiYAAIAAJagAOBFeIAAq7IBhAAIAAK7gAK9FeIAApCIiQJCIhmAAIiQpCIAAJCIhiAAIAAq7ICnAAIB+H3IB/n3ICmAAIAAK7gAlDFeIAAq7ICNAAQBnAABJA7QBJA5AABTQAABKhKA3QAaAMAXARQBKA7AABUQAABThKA6QhIA6hnAAgAjhD8IBcAAQA/AAAsgdQAsgeAAgqQAAgrgsgeQgsgdg+AAIhdAAgAjhgwIAtAAQA9AAAtgdQAsgeAAgrQAAgqgsgeQgtgdg/gBIgrAAg");
	this.shape_6.setTransform(12.075,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.3,-35.8,298.8,71);


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


(lib.rewatchpuzzletxt2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AtPEXQhJhMAAhnIAAnBIBhAAIAAHBQAAA/AtAtQAtAsA/AAQA/AAAsgsQAtgtAAg/IAAnBIBiAAIAAHBQAABnhKBMQhJBMhnAAQhoAAhJhMgA3VE0IAAhsQA2AwB0AEQB2AAAtgdQAtgeAAgqQAAgqgtgeQgtgeg/AAQhdgBhCg5QhCg6AAhTQAAhTBCg8QBCg9CIAAQBjAFAqAfIAABwIgBgBQgmgohmgFQhgABglAdQgmAeAAAqQAAAqAmAeQAlAeA1AAQBoAABJA5QBJA7AABTQAABShJA+QhJA8ifAAQhwgFg6gqgATcFeIAApaIiYAAIAAhhIGSAAIAABhIiYAAIAAJagAOBFeIAAq7IBhAAIAAK7gAK9FeIAApCIiQJCIhmAAIiQpCIAAJCIhiAAIAAq7ICnAAIB+H3IB/n3ICmAAIAAK7gAlDFeIAAq7ICNAAQBnAABJA7QBJA5AABTQAABKhKA3QAaAMAXARQBKA7AABUQAABThKA6QhIA6hnAAgAjhD8IBcAAQA/AAAsgdQAsgeAAgqQAAgrgsgeQgsgdg+AAIhdAAgAjhgwIAtAAQA9AAAtgdQAsgeAAgrQAAgqgsgeQgtgdg/gBIgrAAg");
	this.shape.setTransform(12.075,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rewatchpuzzletxt2, new cjs.Rectangle(-137.3,-35.8,298.8,71), null);


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


(lib.inputbg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EgwAAUvMAAAgpdMBgBAAAMAAAApdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inputbg, new cjs.Rectangle(-307.2,-132.6,614.5,265.29999999999995), null);


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


(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.btnbgcopy4 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.btnbgcopy4, new cjs.Rectangle(-325.9,-60.9,651.8,121.9), null);


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


(lib.btnbggraycopy5 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("here ya \ngo!", "200px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 230;
	this.text.lineWidth = 950;
	this.text.parent = this;
	this.text.setTransform(0,-462.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.answerrevealtext, new cjs.Rectangle(-476.8,-464.4,953.7,928.8), null);


(lib.cloud6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#CCCCCC","#FFFFFF"],[0,0.525],0,122.8,0,-122.8).s().p("AnVVOQiHgmhJhBIAdggQAAgDgDgEIgBgBQgCgCAAgDQgTAOgVAOQhOAyh8AtQivBBiBAAQjLAAiXhfQh5hNiMizIgBgTIgCAAQkPAAi4iEQjIiPAAjxQAAkUCvitQCyiuEkAAQCEAABJAgIAPAHIABgCIAAgCQAQh8BCh6QBDh9BqhjQDxjgE1AAIAiAMQAThBAmhEQBLiHCFh1QCFh2CdhFQCmhJCaAAQGtAAD3EBQC7DDA4E4IAfgFQDEBBB/CiQB8CdAdDQIABAKQATgKAOgFQBMgeB0AAQBsAAB8AtQB+AtBrBPQByBUBBBnQBHBxAAB4QAADNjbCeQheBDhuAnQhtAmhfAAQgaAAgYADQgYADgXAAQg3AAg1gKIgCALQjZD5lnAHQiqADimgjQhpgVhigqIgBACQgpBGjdBOQjYBNiIAAQjYAAijgugAHdSDIgQgIQAKANAGgFg");
	this.shape.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud6, new cjs.Rectangle(-247.4,-140.4,494.8,280.8), null);


(lib.browneagle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// white_eye
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAHQgDgDgBgEQABgDADgDQAEgDADAAQAFAAADADQAEADAAADQAAAEgEADQgDADgFAAQgDAAgEgDg");
	this.shape.setTransform(250.55,138.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAHQgDgDAAgEQAAgDADgDQAEgDADAAQAFAAADADQADADAAADQAAAEgDADQgDADgFAAQgDAAgEgDg");
	this.shape_1.setTransform(255.45,137.125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({y:142.025},0).wait(3).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({y:138.525},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(5).to({_off:false},0).wait(3).to({y:138.525},0).to({_off:true},1).wait(2));

	// black_eye
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpAhQgRgNAAgUQAAgSARgOQARgNAYAAQAYAAASANQARAOAAASQAAAUgRANQgSAOgYAAQgYAAgRgOg");
	this.shape_2.setTransform(248.125,139.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpAhQgRgNAAgUQAAgSARgOQARgOAYAAQAYAAASAOQARAOAAASQAAAUgRANQgSAOgYAAQgYAAgRgOg");
	this.shape_3.setTransform(248.125,142.75);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgpAhQgRgOAAgTQAAgTARgNQARgOAYAAQAYAAASAOQARANAAATQAAATgRAOQgSANgYAAQgYAAgRgNg");
	this.shape_4.setTransform(253.025,137.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{x:248.125}}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_2,p:{x:253.025}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2,p:{x:248.125}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).wait(3).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(1));

	// beak
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#DCD96B").ss(0.1,1,1).p("AElAsQidA7hOAcQiMAzhkAAQhQAAgqg7QgVgegIgmQAAgCgBgCQgEgWAAgZQAAhqBdgtQBIgiCDAAQCTAABfBJQBGA1BFB2QgDgCgDgCQgagOgVgMQgfgRgVgLQhGghguAAQg1AAiSAtQiSAugnAAQgjAAgDAAQgJgCgSgI");
	this.shape_5.setTransform(290.35,159.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EEECB6").s().p("AkvB7QgWgegIglIADgDQABgDgFABQgEgWAAgZQAAhqBdgtQBIgiCEAAQCSAABgBJQBFA1BFB2IgGgEIgvgaIg0gcQhFghgvAAQg1AAiRAtQiTAugnAAIgmAAQgJgCgRgIQARAIAJACIAmAAQAnAACTguQCRgtA1AAQAvAABFAhIA0AcIAGALQibA7hPAcQiLAzhlAAQhQAAgpg7g");
	this.shape_6.setTransform(290.35,159.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#DCD96B").ss(0.1,1,1).p("AElAsQidA7hOAcQiMAzhkAAQhQAAgqg7QgVgegIglQAAgDgBgCQgEgWAAgZQAAhqBdgtQBIgiCDAAQCTAABfBJQBGA1BFB2QgDgCgDgBQgagPgVgMQgfgRgVgLQhGghguAAQg1AAiSAtQiSAugnAAQgjAAgDAAQgJgCgSgI");
	this.shape_7.setTransform(290.35,163.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EEECB6").s().p("AkvB7QgWgegHglIACgDQABgDgFABQgEgWAAgZQAAhqBdgtQBIgiCEAAQCSAABgBJQBFA1BFB2IgGgDIgvgbIg0gcQhFghgvAAQg1AAiRAtQiTAugnAAIgmAAQgJgCgRgIQARAIAJACIAmAAQAnAACTguQCRgtA1AAQAvAABFAhIA0AcIAGALQibA7hPAcQiLAzhlAAQhQAAgpg7g");
	this.shape_8.setTransform(290.35,163.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#DCD96B").ss(0.1,1,1).p("AElAsQidA7hNAcQiNAzhkAAQhQAAgpg7QgWgegIglQAAgDAAgCQgFgWAAgZQAAhqBdgtQBIgiCDAAQCTAABgBJQBFA1BFB2QgDgCgDgBQgagPgVgMQgegRgWgLQhGghguAAQg1AAiRAtQiTAugmAAQgkAAgDAAQgJgCgRgI");
	this.shape_9.setTransform(295.25,158.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EEECB6").s().p("AkwB7QgUgegJglIACgDQACgDgEABQgFgWAAgZQAAhqBegtQBHgiCDAAQCTAABfBJQBGA1BFB2IgGgDIgugbIg1gcQhGghguAAQg1AAiRAtQiTAugnAAIgmAAQgJgCgSgIQASAIAJACIAmAAQAnAACTguQCRgtA1AAQAuAABGAhIA1AcIAGALQidA7hNAcQiNAzhjAAQhRAAgqg7g");
	this.shape_10.setTransform(295.25,158.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10,p:{y:158.125}},{t:this.shape_9,p:{y:158.125}}]},1).to({state:[{t:this.shape_10,p:{y:158.125}},{t:this.shape_9,p:{y:158.125}}]},1).to({state:[{t:this.shape_10,p:{y:158.125}},{t:this.shape_9,p:{y:158.125}}]},1).to({state:[{t:this.shape_10,p:{y:159.525}},{t:this.shape_9,p:{y:159.525}}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	// right_wing
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#422016").ss(0.1,1,1).p("AONGBQgUhNgzj0QgqjKglhuQg2ihhPhiQhdhyiMgrQh6gmomjPQkThoiDgwQhygqgEAAQgnAAggAZQgLAIgHAJQgQATAAAYQAAB9GuC6QA3AYA6AXQBaAlBkAjQBhAiAqANQAJADAGABAk0hzQgVgCgUgDQhsgPhRgaQipg3AAhxQAAgkAagTQAYgSArAAQBCAADTAiQAPADAOACQgJgFgQgHQghgNg8gWQh1grg6gaQjghlAAhyQAAgmArgHQAAAAA+AAQAuAADCAyQBFASAuALQBTAVAHAAAk0lrQAEABAEAAQCUAZA2APQAFgDAEAEQACABABABQgFgBgHgCAi+B8QgbABgsgFQgCAAgBAAQhEgIg+gSQipgwAAhTQAAhGDWgHQAPgBAaAAQAEAAAEAAQBKABCXADAihFnQgCAAgCAAQhdAAg7gRQhVgYAAg3QAAhlCLgcQABAAAAAAQAbgFAtgFQAHgBAIgBQASgCAVgBQBHgGAkgFQAKgBAHgCAAIJ7Qg+gYg4g2QhIhFAAhKQAAgQAHgOQAJgPAEgIQABgBAAgBABpLvQgFAAgFgBQgWgDgZgVQgkgegEgmQgBgNABgKQAFgVBEAHAA2FWQghAGhXAGQhGAFgZAAQADgGASgCABpLvQAGgHACgDIAAAIQgEABgEABgAC6N8QghgHgfgdQgiggAAggQAAgZAEgEQAHgHAGgFAC6N8QACgEACgEIAAAJQgCgBgCAAgANJQWQghAhhqAPQhFAKhDAAQiIAAiDg2QiahBAphd");
	this.shape_11.setTransform(76.625,76.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CC66CC").ss(0.1,1,1).p("AABgHIgBAP");
	this.shape_12.setTransform(168.475,114.3125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8A522F").s().p("AEnQaQibhBAqhdQghgHgfgdQgiggAAggQAAgZADgEIANgNIAJgBIAAgIIgJAJIgJAAQgXgDgZgVQgjgegEgmQgCgNACgLIABgBQAEgOAkAAIABAAIAAAAIAbACIACAAIABAAIgBAAIgCAAIgbgCIAAAAIgBAAQgkAAgEAOIgBABQg+gXg4g2QhJhFABhKQAAgQAHgOIANgXIABgCIgEAAQhdAAg7gRQhWgYAAg3QAAhlCMgcIABAAQAagFAugFQgcABgsgFIgCAAQhEgIg/gSQiogwAAhTQAAhGDVgHIAqgBIgpgFQhsgPhRgaQiqg3AAhxQAAgkAagTQAZgSArAAQBCAADTAiIAdAFIgZgMQgigNg7gWQh1grg7gaQjfhlAAhyQAAgmAqgHIA/AAQAuAADCAyIBzAdQBaAlBkAjQBhAiAqANIAPAEIgPgEQgqgNhhgiQhkgjhaglQBTAVAHAAQgHAAhTgVQg6gXg3gYQmui6gBh9QABgYAQgTQAHgJALgIQAfgZAoAAQAEAAByAqIGWCYQIlDPB7AmQCLArBeByQBPBiA1ChQAlBuAqDKQAzD0AVBNIAIABIhBKUIgLAAQghAhhqAPQhFAKhEAAQiHAAiDg2gAC2N8IADABIAAgJIgDAIgAilFnQAYAABHgFQBXgGAggGQggAGhXAGQhHAFgYAAQADgGASgCQgSACgDAGIAAAAgAghBsQglAFhGAGIgnADIgPACIAPgCIAngDQBGgGAlgFIARgDIgRADgAhPhvQiXgDhKgBIgFAAIgDAAIADAAIAFAAQBKABCXADgAhmlCIALADIgCgCQgCgCgDAAIgEABgAkwlqQCTAZA3APQg3gPiTgZIgIgBIAIABgAilFnIAAAAgAlxqUIAAAAg");
	this.shape_13.setTransform(77.05,76.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#3A1C11").ss(0.1,1,1).p("ANuIhQiBlxhpjEQikkzj2jbQjdjDj0i3QmwlDiaAAQgdAAgjAhQgiAfAwA2QAwA3BaBnQBBBLCIClAiannQhchckViNQgFgCgEgDQj1h8gpAAQgyAAgOAZQgIAPAAA4QAABuC1B9QAVAOAWAOQBGAUBpAwQAIADAJAEQBkAvB/BDAN+IkIADgTAn1mNQAEACAEACIgIAAIAAgEQhbguhKgvQgZgHgUgDQgUgEgQAAQgqAAghAaQgiAbAAAlQAABECjBrQAmAZAoAWQhVgYgZAAQgqAAgWAaQgRAUAAAbQAABhC5BgQAyAaBfApQBCAcAaAOQAFACADADQgggEgtgGQgPgBgOgCQhqgMgbAAQgzAAgmASQgrAUAAAiQAABbDoAmQBYAOBgAEQAlABAmAAAoNiPQgLgFgKgFQgjgTgigUQAhAKAsAOQChAzA/AlAl4CkQABAAABAAQA2AGAOADAlLFmQAAAAAAABQAKB6A4BXQA+BiBkAPQglAqBCA6QBAA5AygNQgRAXAAAtQAABJAgAuQAiAxA9ABQAmBeCaA0QB4AoCAAAQA5AAA1gJQA8gJAhgQAlLFmQAAgEAAgDAMcS+IgBAJ");
	this.shape_14.setTransform(81.4487,63.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8A522F").s().p("AFXS4Qiag0gmheQg9gBgigxQggguAAhJQAAgtARgXQgyANhAg5QhCg6AlgqQhkgPg+hiQg3hXgKh6IgBgBQAlABAmAAQgmAAglgBIAAgHIAAAHQhggEhYgOQjogmAAhbQAAgiArgUQAmgSAzAAQAbAABqAMIAdADIBNAJIgIgEQgZgOhDgcQhfgpgygaQi5hgAAhhQAAgbARgUQAWgaAqAAQAaAABUAZQgogXgmgZQijhrAAhEQAAglAigbQAhgaAqAAQAQAAAVAEQAUADAYAHIgrgcQi1h9AAhuQAAg4AIgPQAOgZAyAAQApAAD2B9IAIAEIgFgLQiIilhBhLIiKidQgwg3AigfIBAghQCaAAGwFDQD0C3DdDDQD2DbCkEzQBpDECBFxIAQACIhhKbIgEAAQghAQg8AJQg1AJg5AAQiAAAh4gogAl0CkQA1AGAOADQgOgDg1gGIgDgBIADABgAoZioQChAzA/AlQg/glihgzIhNgXQAiATAkATIAUAKIgUgKIAHgPIAAAAgAnZmfQBkAvB/BDQh/hDhkgvIgRgIQhpgvhGgUQBKAvBbAtIAAAFIAIAAIATgWIAAAAgAiZnnQhchckViNQEVCNBcBcg");
	this.shape_15.setTransform(81.3112,63.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AjUocQgSgVgohDQgjg6gZgnQgUghgOgVQiIjKhgAAQgXAAgTArQgSAmAAAhQAACHCYDaQA8BWA+BBALjGWQgvgmgagsQgTgggQg5QgThDgMgaQgZg2gugvQjGjFiNimQgagehDiOQhVi4guhjQi0l9hAAAQhiAAAACTQAACABFCQQATAoAoBOQAVAsAPAlALjGWQAFAEAFAEALmFsIgDAqAjRoUQAGARAFAQIAAAHQAAgHgLghQgBgBAAgCQgBgCgBgDQADAEAAAEgAmAloQg1gQh0hCQiDhKgKAAQgRAAgUAiQgRAeAAAQQAAB5C1CNQBBAyBGAmQArAYAXAIQAJADAGAAAlwgzQhAAAh3gmQhsgmgFAAQgeAAgMASQgIAMAAAeQAABQBzA8QAcAOA2AaQAEACAFADQAwAZARAZAoFBxQAHgCAHgCAoFBxQgeAJgXAUQgjAcAAApQAAA8A1AbQARAKBKATQAEABAFABAnNFHQgUCCA7BWQA6BUBzAQIAABMQAQAeApAOQAaAIA9AIQACBAA7BGQA1BBBbA5QDGB8C4AAQBDAAA2gUQA+gYAXgtAnNFHQAAgDABgD");
	this.shape_16.setTransform(94.325,78.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8A522F").s().p("ABpQLQhbg5g1hBQg7hGgChBQg9gHgagJQgpgNgQgeIAAhMQhzgQg6hUQg7hWAUiCQhKgTgRgJQg1gcAAg8QAAgpAjgdQAXgTAegJIhSgoQhzg7AAhRQAAgdAIgOQAMgRAeAAQAFAABsAnQB3AlBAABIACgEQgXgIgrgXQhGgnhBgyQi1iNAAh5QAAgQARgeQAUgiARAAQAKAACDBKQB0BCA1AQIACgDQg+hAg8hXQiYjZAAiIQAAghASgmIAqgrQBgAACIDLIAiA1IA8BiQAoBCASAVQgPglgVgsQgohOgTgoQhFiQAAiAQAAiTBiAAQBAAAC0F9ICDEcQBDCNAaAfQCNClDGDFQAuAuAZA2QAMAcATBCQAQA5ATAgQAaAsAvAmIgvKYIgEAAQgXAtg+AYQg2AUhDAAQi4AAjGh8gAnIFHIAJACIgJgCIABgHIgBAHIAAAAgAoABxIAJAFQAwAZARAZQgRgZgwgZIgJgFIAOgEIgOAEIAAAAgAlagyQgGgBgJgDQAJADAGABgAjNoXIABADQALAhAAAHIAAgHIgLghQAAgEgDgEIACAFg");
	this.shape_17.setTransform(93.825,78.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AI+ChQAHgGACgDQA8hcAthrQBYjwAqhoQACgFACgFIAAgIIgKADQAFADAFACAiGjOQgCgBgCAAQgqAAgWAjQgRAbAAAjQAAAtBhCZQBOB8AsA2QgbgQgvgyQgwg2gdggIgBAAQgFgGgFgFQh1h7hIAAQgiAAgMAYQgIASAAAqQAAA8A0BDQAIAJAJALQAgAkA5A0Qgngahbg+QhzhPgtAAQgcAAgTARQgRAPAAAXQAAAoBPBBQA/A1AUAGIAAAJIgrAAQhAgcg4gWQhugsgpAAQgvAAgMASQgJAMAAAvQAAB3EtAAQD5AACjhRQApgUBEgkQAJgEAZgFQAZgGAxgBQAygCBQAJQBQAJAdABQBDAAA7gzQALgKAKgUQAOgdA6gyQADgDAEgDQiwg2gjgUQhhg6gmhbQgPglgNhEQgRhagEgRQgeh1hRAAQgoAAgUAhQgQAdAAAzQAAA5BPDGQAoBjAqBbIAAAIQgfgZgphDQgCgDguhRQgKgTgOgYQhWicg5gFQAMgmALhYQAMhlAGgbAI+CgQAAAAAAABAI3CmQADgDAEgCAj3ErQAXAQAFACIgJAAQgKgJgJgJg");
	this.shape_18.setTransform(89.65,204.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#794629").s().p("Aq5E0QAAguAJgMQAMgSAvAAQApAABuAsQA4AWBAAbIArAAIAAgIQgUgHg/g0QhPhBAAgoQAAgXARgPQATgSAcABQAtAABzBPICCBYQg5g0gggkIgRgVQg0hCAAg9QAAgpAIgRQAMgaAiABQBIAAB1B7IAKALIABAAIBMBVQAvAzAcAQQgtg3hOh7QhgiZAAgtQAAgjARgbQAWgiAqgBIAEABQA4AFBXCcIAYArIAwBTQApBEAfAZIAAgIQgqhcgohiQhQjHAAg4QAAgzARgdQAUgiAoAAQBRABAeB0QAEASARBZQANBFAPAlQAlBbBiA6QAiAUCxA2IgIAGQg5AygOAdQgKAUgLAKQg7AyhEAAQgcAAhQgJQhQgJgyABQgyACgYAGQgZAFgJAEIhuA4QiiBQj5AAQktAAAAh3gAhoEbIAJAAIgcgSIATASg");
	this.shape_19.setTransform(77.2625,207.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8A522F").s().p("AkFEDIgwhUIgYgrQhXibg5gFQAMgnALhYQAMhlAGgbQAlgTCXgYQCXgZBNAAQBbAADIA6QCYArAtAWIAKAFIgEAKQgpBohYDuQgtBsg9BdQgCADgHAGIAAgCQiwg2gigUQhhg6glhbQgPglgNhFQgRhZgEgRQgeh1hRAAQgoAAgUAiQgRAdAAAzQAAA4BQDGQAoBjAqBbIAAAJQgfgZgphEg");
	this.shape_20.setTransform(123.975,186.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AkzszIgNgBIgIAAAmUHIQgDgGgYhiQgRhGAAg2QAAhGBImXQBImZAAhGQAAgZgDgXQgEgigJgKAh+JyQgbgagcg1Qggg+gQgeQg6hshEAAQgdAAgNAjQgJAWAAAfQAAAKACALADEKjQgDgBgDgCQiUhchCjKQgehpgNgkQgUg8gaAAQggAAgXBNQgSA7AAAnQAAAqAKA1QAJA0ATA/QALAkALAcQAaBEAZAQAImsTQAEEJgsEzQgIA9hPHCQgoDoiyCNQgFADgEADQgIAHgIAFQi5CGj5AAQhnAAhSgiQhugtAAhXQAAhHA2AAQApAAAlAiQA1AyAiARQAJAVAJAVAlKKtQgQgpgPgoQgkhhgHgz");
	this.shape_21.setTransform(109.1668,237.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8A522F").s().p("ACMLoQiThchEjJQgehqgMgkQgUg8gbAAQggAAgXBNQgRA7AAAnQAAArAJA0QAKA1ATA+QALAlALAcQgbgbgdg1IgvhcQg7hshDAAQgeAAgNAjQgIAWAAAgIABAVQgCgHgYhiQgShGAAg2QAAhGBJmXQBImYAAhHQAAgZgDgXIAAgrINYAYIAAAJQAEEJgrEyQgJA+hOHBQgpDoiyCNIgIAHIgGgEg");
	this.shape_22.setTransform(114.2168,230.6625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#794629").s().p("AkDEgQhugtAAhWQAAhIA2AAQApAAAlAiQA1AyAiARIASArIgSgrIgfhRQgkhhgHgyIgCgVQAAgfAJgXQANgiAdAAQBEAAA6BsIAwBbQAbA1AbAaQgLgcgLglQgTg+gJgzQgJg1AAgqQAAgnARg7QAXhNAgAAQAaAAAUA7QANAlAeBqQBDDICUBcIgKAPQi6CGj4AAQhnAAhSgigABoDUQgZgRgahEQAaBEAZARg");
	this.shape_23.setTransform(91.175,287.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AG5uaQAAADAAAEQAHBMBZGSQBaGdAAA5QAACCgXCdQgZCygtCRQh1F1jEAAQg8AAgZgzQgSgiAAg3QAAgUAKgoQADgOAFgPQARg/AihjQBDjFAAhrQAAhTgZgaAl0v1IgPgCAmNvvQAKAIAEAUQADANAAANQAABwhZFHQhZFGAABjQAABUAnB2QAmB4AAAUQAAAjgXAlQgNAVgkAqQhJBVAAA8QAAAwARAUQAVAZA4AAQBXAABeh3QANgPAXgjQAXgjAhg2QAMgbAGgXQAVhQgYhfAjsFKQgLAUgMASAgeInQgYA2gcAwQgKARgMAQQhcCHhsAAQg6AAgagZQgagZAAg3QAAhNAlhJQAKgVA3hUQAFgIAFgHQAbgqAQgkAgeInQAniQAAiEQAAgRgGgeQgEgfgGgTACIMTIgJAAQABANgEAPQgKAqgqAwQg9BFhBAAQgnAAgYgZQgagaAAgrQAAgaAYg9QAhhRATgzQAVg4AQg2");
	this.shape_24.setTransform(129.25,246.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8A522F").s().p("ACIPEQgSgjABg3QAAgTAJgoIAIgeQARg+AhhjQBEjFABhrQgBhUgZgaQAZAaABBUQgBBrhEDFQghBjgRA+IgJAAQABAOgEAOQgJArgrAwQg9BEhBAAQgnAAgZgZQgZgaAAgqQAAgaAYg+QAhhQATgzQAWg4APg3QgXA3gdAvIgWAiQhcCHhrgBQg7AAgagZQgagYAAg4QAAhMAlhJQAJgVA4hVIAKgOQAbgqARgkQALgbAGgYQAKglAAgoQAAgugNgyQANAyAAAuQAAAogKAlQgGAYgLAbIg5BZQgXAigMAQQhfB3hXAAQg4AAgUgZQgRgUgBgxQAAg7BJhVQAkgqAOgVQAWglAAgjQAAgUgmh3Qgnh3ABhUQAAhjBYlGQBZlHAAhwIAHg8IMnBjIAHgCQAHBNBYGSQBbGdgBA5QAACCgVCcQgZCzguCRQh1F1jFAAQg7AAgZgzgAgeIlQAniPAAiFQAAgQgGgfQgDgfgHgSQAHASADAfQAGAfAAAQQAACFgnCPgAkCFvIAWgmIgWAmg");
	this.shape_25.setTransform(129.25,246.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AnuHkQgHARgJAUQgGAMgGAMQgxBigjAAQgqAAgYhVQgSg8AAgqQAAg1A/l3QA7lcAeiSQArjPBjiyQA4hmBdh2AKzxcQhpHMhTI7QgMBTgIJEQgVIbhOAAQhuAAgzkpQgUh2gIiIQgGhbAAhkQAAiKAiipQAkixAGhNQABgEAAgEAgdMnQgFgigEglQgRikAAkiQAAidAUiGQASh/ApiQQACgIADgIAneG3QgFASgLAbAkLKkQAAACAAACQgHAigLA5QgdBtgyAAQhSAAggiYQgRhUAAh0QAAgUABgYQAIimA8lvQA0k8AeiEAgdMnQgDAkgGAlQgYCHg9AAQheAAghiHQgRhHAAiBQAAgCAAgCAgbLgQABAigDAlAC9I2QAABdAFChQABA7ADBEQAABEgRArQgUAygoAAQheAAgsjnQgHghgFglAkCJ6QgCAJgHAhQABiWAulHQAvlLAAigQAAhJgagZ");
	this.shape_26.setTransform(101.025,231.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8A522F").s().p("ADfM0QgUh2gIiIQgGhbAAhjQAAiKAiipQAkiyAGhNIABgIIgBAIQgGBNgkCyQgiCpAACKQAABjAGBbIgGAAQAABdAFChIAEB/QAABEgRArQgUAygoAAQheAAgsjnQgHghgFglQADgkgBgjIgLAAQgRikAAkiQAAidAUiGQASh+ApiRIAFgQIgFAQQgpCRgSB+QgUCGAACdQAAEiARCkIAJBHQgDAkgGAmQgYCGg9AAQheAAghiGQgRhIAAiAIAAgFIAAAEIgSBcQgdBsgyAAQhSAAggiYQgRhUAAhzIABgsQALgcAFgSQgFASgLAcQAIioA8luQA0k7AeiFQgeCFg0E7Qg8FugICoIgQAkIgMAZQgxBhgjAAQgqAAgYhVQgSg7AAgrQAAg2A/l2QA7lbAeiTQArjPBjiyQA4hlBdh3QBAAjBjgBIIygIQCSgCBDhFQhpHNhTI6QgMBTgIJEQgVIbhOAAQhuAAgzkpgAkLKkIAJgpIgJApQABiWAulHQAvlLAAigQAAhIgagZQAaAZAABIQAACggvFLQguFHgBCWIAAAAgAkLKkIAAAAgAnuHlIAAAAg");
	this.shape_27.setTransform(101.025,231.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#3A1C11").ss(0.1,1,1).p("ALLpQQgTgVgEgcQgCgMAAgoQAAghAijZQAijZAAggQAAgNgCgMQAJgBAKAAAL0zBQgLg7hAg0QhIg8hHAAQi/AAjSA1QjYA2iyBiQjCBqhtCJQh4CZAACuQAAAcAQATQAOARAQAAQAEAAAEAAQASgCAUgHQADgCACAAQAFgFAFgEQBXhHA6hMQBUhtATgWQB/iSCQAEALepPIgOAIAopj0QgEAHgDAIAohj0IgIAAAoyjgIACgFQADgIADgHIABAAQAfhJATgdQBVh+BQhRQB7h8BlgHAoyjgQgOAhgPAnQg7CAg9AAQg/AAAAiAQAAh/A3hvQASglAng+QAVgjAPgZAjwi5QgDAGgEAIQgSAfgpBIQgvBQgaA0QhRCnAACGQAAB8gUCDQgEAUgDAUQgPBVgVA4QgnBpg8AAQg6AAgRhUQgJgqAAhqQAAjPA1k0QAijDAhhyQAMgrAMgfAjeGiQAFAmAJCMQABAMABALQAPCxAbCGQBcHLDcAAQAuAAAWgyQARgmAAg4QAAgqgXhXQgfh0gShMQhIkvAAlEQAAjYAljyQAJg3AKg0QAAgCAAgBQAnjRA9ivQBaj+B7iOQCFiaClgMAjeGiQAEgTAFgTQAiiJAkhDAjoGXIAJAAQAAAEABAHAnVJZQgCAJgBAMQgFAiAAA/QAAAdAJBHQANBeAVBPQA9DsBnAAQAiAAAVg7QARgvAAgqQAAgwgNhgQgFgmgHguQgaihAAhEQAAgCAAgCQAAAAAAgBQAAgLABgMQAEhLAWhm");
	this.shape_28.setTransform(103.475,166.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8A522F").s().p("AibOiQgbiGgQixIgCgXQgJiMgEgmIAJgmQAiiJAkhDQgkBDgiCJIgJAmIgCgLIgIAAIAIAAIACALQgXBmgDBLIgBAXIAAABIAAAEQAABEAZChIANBUQANBgAAAwQAAAqgRAvQgWA7ghAAQhnAAg+jsQgVhPgMheQgKhHAAgdQAAg/AFgiIAEgVIgEAVIgIgCQAUiDAAh8QAAiGBSinQAag0AuhQIA7hnIAHgOIgHAOIg7BnQguBQgaA0QhSCnAACGQAAB8gUCDIgHAoQgPBVgUA4QgoBpg7AAQg6AAgShUQgIgqAAhqQAAjPA1k0QAhjDAhhyQAMgrAMgfIgdBIQg6CAg9AAQg/AAAAiAQAAh/A2hvQATglAmg+IAlg8QASgCAUgHIAFgCIAKgJQBXhHA6hMQBThtAUgWIAGgHQB4iHCIAAIABAAIAAAAIAHAAIgHAAIAAAAIgBAAQiIAAh4CHIgGAHQgUAWhTBtQg6BMhXBHIgKAJIgFACQgUAHgSACIgJAAQgQAAgOgRQgQgTAAgcQAAiuB5iZQBsiJDChqQCyhiDZg2QDRg1C/AAQBHAABJA8QA/A0ALA7QACAMAAANQAAAggiDZQgiDZAAAhQAAAoACAMQAFAcATAVIAEAJIo+E4QAnjRA9ivQBZj+B7iOQCFiaClgMQilAMiFCaQh7COhZD+Qg9CvgnDRIgBADQgKA0gIA3QglDyAADYQAAFEBIEvQARBMAgB0QAWBXAAAqQAAA4gQAmIhFAyQjcAAhbnLgAonjlIgDAFIADgFIAGgPIAIAAIgIAAQAghJATgdQBUh+BRhRQB7h8BlgHQhlAHh7B8QhRBRhUB+QgTAdggBJIAAAAIgGAPgAjVGiIAAAAgACakPIAAAAg");
	this.shape_29.setTransform(102.625,166.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AoqnvQgSARgVATQigCWgWAAQgyAAAAhHQAAh3Bhh1QBVhnCUhZQCEhQCVgxQCPgvBjAAQDxAACCBxQBoBbA7DCQAiBzA4EFQA6DkBbCRQADAFADAFAM5NsIABAaAM5NoIAAAEAMqCtIgBgYAmbp/QgBACgCADQgkAohoBjAiMq6Qh9C9h1CbQgNATgOARQhQBphABIQiKCZhDAAQgpAAAAg7QAAhGB1i+QA9hjAjgxQAOgUAKgMQAEgFAEgDIAAAIIgIAAAlOAdQAVAcATA1QALAdAVA6QArBkBYALQgDB5A9BRQAYAhAeASQAuAdA9gLAl5lfQgKAUgKATQg2Bpg1BsQh/D9AAA9QAAARAJAQQAPAaAgAAQAfAABgh2QAggnBIhfQAvg/BChYQFknjC/i0AgTIxQgBgEgBgDAgTIxQAMBEA2A4QAQAQARANQAgAYAhAKABQLKQABBDAyA6QAgAlAgADQAXADAXgPADDNvQAyAuAwAYQBKAkBeAAQBYAAB6gkQB0giAmgn");
	this.shape_30.setTransform(86.625,82.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8A522F").s().p("AElO1QgwgYgyguIABAAIAGABIAAAAIAAAAQARAAARgKIABAAIABgBIABAAIACgCIgCACIgBAAIgBABIgBAAQgRAKgRAAIAAAAIAAAAIgGgBIgBAAQgggDggglQgyg6gBhDQAgAYAiAKQgigKgggYQgQgNgRgQQg2g4gMhEIABAAIADACIAAAAQAgATAnAAIAAAAIAAAAQAQAAAQgDQgQADgQAAIAAAAIAAAAQgnAAgggTIAAAAIgDgCIgBAAIgCgHIACAHQgdgSgZghQg9hRADh5QhYgLgqhkIghhXQgTg1gVgcIgKgHIBxiXQFlnjC/i0Qi/C0llHjIhxCXQhHBfggAnQhgB2ggAAQggAAgOgaQgJgQAAgRQAAg9B+j9QA1hsA3hpIAUgnIgGgDQB1ibB9i9Qh9C9h1CbIgbAkQhQBphABIQiKCZhDAAIgpg7QAAhGB1i+QA9hjAjgxQAOgUAKgMIAIAAIAAgIQBohjAkgoIAEgFIgEAFQgkAohoBjIgmAkQigCWgXAAQgyAAAAhHQABh3Bhh1QBUhnCUhZQCEhQCVgxQCPgvBkAAQDwAACCBxQBoBbA7DCQAiBzA4EFQA7DkBbCRIAFAKIADAAIAPK7IAAAEQglAnh1AiQh5AkhZAAQheAAhKgkg");
	this.shape_31.setTransform(86.6,82.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AqanqQgWgOgVgOQi1h9AAhuQAAg4AIgPQAOgZAyAAQApAAD1B8QAEADAFACQEVCNBcBcANuIhQiBlxhpjEQikkzj2jbQjdjDj0i3QmwlDiaAAQgdAAgjAhQgiAfAwA2QAwA3BaBnQBBBLCIClAN+IkIADgTAn1mNQAEACAEACIgIAAIAAgEQhbguhKgvQBGAUBpAwQAIADAJAEQBkAvB/BDAqanqQgZgHgUgDQgUgEgQAAQgqAAghAaQgiAbAAAlQAABECjBrQAmAZAoAWQhVgYgZAAQgqAAgWAaQgRAUAAAbQAABhC5BgQAyAaBfApQBCAcAaAOQAFACADADQgggEgtgGQgPgBgOgCQhqgMgbAAQgzAAgmASQgrAUAAAiQAABbDoAmQBYAOBgAEQAAAAAAABQAKB6A4BXQA+BiBkAPQglAqBCA6QBAA5AygNQgRAXAAAtQAABJAgAuQAiAxA9ABQAmBeCaA0QB4AoCAAAQA5AAA1gJQA8gJAhgQAoNiPQgLgFgKgFQgjgTgigUQAhAKAsAOQChAzA/AlAl4CkQABAAABAAQA2AGAOADAlLFmQAlABAmAAAlLFmQAAgEAAgDAMcS+IgBAJ");
	this.shape_32.setTransform(81.4487,63.925);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8A522F").s().p("AFXS4Qiag0gmheQg9gBgigxQggguAAhJQAAgtARgXQgyANhAg5QhCg6AlgqQhkgPg+hiQg3hXgKh6IgBgBQAlABAmAAQgmAAglgBIAAgHIAAAHQhggEhYgOQjogmAAhbQAAgiArgUQAmgSAzAAQAbAABqAMIAdADIBNAJIgIgEQgZgOhDgcQhfgpgygaQi5hgAAhhQAAgbARgUQAWgaAqAAQAaAABUAZQgogXgmgZQijhrAAhEQAAglAigbQAhgaAqAAQAQAAAVAEQAUADAYAHIgrgcQi1h9AAhuQAAg4AIgPQAOgZAyAAQApAAD2B9IAIAEQEVCNBcBcQhchckViNIgFgLQiIilhBhLIiKidQgwg3AigfIBAghQCaAAGwFDQD0C3DdDDQD2DbCkEzQBpDECBFxIAQACIhhKbIgEAAQghAQg8AJQg1AJg5AAQiAAAh4gogAl0CkQA1AGAOADQgOgDg1gGIgDgBIADABgAoZioQChAzA/AlQg/glihgzIhNgXQAiATAkATIAUAKIgUgKIAHgPIAAAAgAnZmfQBkAvB/BDQh/hDhkgvIgRgIQhpgvhGgUQBKAvBbAtIAAAFIAIAAIATgWIAAAAg");
	this.shape_33.setTransform(81.3112,63.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AOIGBQgUhNgzj0QgqjKglhuQg2ihhPhiQhdhyiMgrQh6gmomjPQkThoiDgwQhygqgEAAQgnAAggAZQgLAIgHAJQgQATAAAYQAAB9GuC6QA3AYA6AXQBaAlBkAjQBhAiAqANQAJADAGABAORGCIABgRAk5hzQgVgCgUgDQhsgPhRgaQipg3AAhxQAAgkAagTQAYgSArAAQBCAADTAiQAPADAOACQgJgFgQgHQghgNg8gWQh1grg6gaQjghlAAhyQAAgmArgHQAAAAA+AAQAuAADCAyQBFASAuALQBTAVAHAAAk5lrQAEABAEAAQCUAZA2APQAFgDAEAEQACABABABQgFgBgHgCAjDB8QgbABgsgFQgCAAgBAAQhEgIg+gSQipgwAAhTQAAhGDWgHQAPgBAaAAQAEAAAEAAQBKABCXADAimFnQgCAAgCAAQhdAAg7gRQhVgYAAg3QAAhlCLgcQABAAAAAAQAbgFAtgFQAHgBAIgBQASgCAVgBQBHgGAkgFQAKgBAHgCAADJ7Qg+gYg4g2QhIhFAAhKQAAgQAHgOQAJgPAEgIQABgBAAgBQADgGASgCABkLvQgFAAgFgBQgWgDgZgVQgkgegEgmQgBgNABgKQAFgVBEAHAAxFWQghAGhXAGQhGAFgZAAABkLvQAGgHACgDIAAAIQgEABgEABgAC1N8QghgHgfgdQgiggAAggQAAgZAEgEQAHgHAGgFAC1N8QACgEACgEIAAAJQgCgBgCAAgANEQWQghAhhqAPQhFAKhDAAQiIAAiDg2QiahBAphd");
	this.shape_34.setTransform(77.125,76.575);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8A522F").s().p("AEnQaQibhBAqhdQghgHgfgdQgiggAAggQAAgZADgEIANgNIAJgBIAAgIIgJAJIgJAAQgXgDgZgVQgjgegEgmQgCgNACgLIABgBQAEgOAkAAIABAAIAAAAIAbACIACAAIABAAIgBAAIgCAAIgbgCIAAAAIgBAAQgkAAgEAOIgBABQg+gXg4g2QhJhFABhKQAAgQAHgOIANgXIABgCQADgGASgCQgSACgDAGIgEAAQhdAAg7gRQhWgYAAg3QAAhlCMgcIABAAQAagFAugFQgcABgsgFIgCAAQhEgIg/gSQiogwAAhTQAAhGDVgHIAqgBIgpgFQhsgPhRgaQiqg3AAhxQAAgkAagTQAZgSArAAQBCAADTAiIAdAFIgZgMQgigNg7gWQh1grg7gaQjfhlAAhyQAAgmAqgHIA/AAQAuAADCAyIBzAdQBaAlBkAjQBhAiAqANIAPAEIgPgEQgqgNhhgiQhkgjhaglQBTAVAHAAQgHAAhTgVQg6gXg3gYQmui6gBh9QABgYAQgTQAHgJALgIQAfgZAoAAQAEAAByAqIGWCYQIlDPB7AmQCLArBeByQBPBiA1ChQAlBuAqDKQAzD0AVBNIAIABIhBKUIgLAAQghAhhqAPQhFAKhEAAQiHAAiDg2gAC2N8IADABIAAgJIgDAIgAhGFiQhHAFgYAAQAYAABHgFQBXgGAggGQggAGhXAGgAghBsQglAFhGAGIgnADIgPACIAPgCIAngDQBGgGAlgFIARgDIgRADgAhPhvQiXgDhKgBIgFAAIgDAAIADAAIAFAAQBKABCXADgAhmlCIALADIgCgCQgCgCgDAAIgEABgAkwlqQCTAZA3APQg3gPiTgZIgIgBIAIABgAlxqUIAAAAg");
	this.shape_35.setTransform(77.05,76.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).wait(1));

	// right_leg
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#412114").ss(0.1,1,1).p("AC1glQAAAAAAABQgRBFgtBBQg8BWhGAAQhDAAgzg8Qgzg8AAhTQAAgTAWhJQAOgyAFgW");
	this.shape_36.setTransform(91.7,202.6125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AighBQACgKAAgEACgBQQABgDAAgD");
	this.shape_37.setTransform(93.7875,190.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#8A522F").s().p("AiBB8Qgzg8AAhTQAAgTAWhJQAOgyAFgWIALADIE1CPIAAABQgRBFgtBBQg9BWhFAAQhDAAgzg8g");
	this.shape_38.setTransform(91.7,202.6125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AC2gkQgBADgBADQAAAAAAABQgQBFguBBQg8BWhGAAQhDAAgzg8Qgzg8AAhTQAAgTAWhJQAOgyAFgWQACgKAAgE");
	this.shape_39.setTransform(91.775,205.425);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8A522F").s().p("AiBB8Qgzg8AAhTQAAgTAWhJQAOgyAFgWIALADIE1CPIAAABQgQBFguBBQg9BWhFAAQhDAAgzg8g");
	this.shape_40.setTransform(91.7,206.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AihhBQACgKAAgEACgBQQAAgDABgD");
	this.shape_41.setTransform(93.8,194.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#DD6900").ss(0.1,1,1).p("AC1glQAAAAAAABQgQBFguBBQg8BWhGAAQhDAAgzg8Qgzg8AAhTQAAgTAWhJQAOgyAFgW");
	this.shape_42.setTransform(91.7,206.125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF8012").s().p("AiBB8Qgzg8AAhTQAAgTAWhJQAOgyAFgWIALADIE1CPIAAABQgQBFguBBQg9BWhFAAQhDAAgzg8g");
	this.shape_43.setTransform(91.7,206.125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8A522F").s().p("AiBB8Qgzg8AAhTQAAgTAVhJQAPgyAEgWIAMADIE1CPIAAABQgRBFguBBQg7BWhGAAQhDAAgzg8g");
	this.shape_44.setTransform(96.6,201.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AAAAHQABgJAAgE");
	this.shape_45.setTransform(82.65,182.15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AAAAHQABgJAAgE");
	this.shape_46.setTransform(82.65,183.55);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AC2gkQgBADgBADQAAAAAAAAQgQBGguBBQg8BWhGAAQhDAAgzg8Qgzg8AAhTQAAgTAWhJQAOgyAFgWQACgKAAgE");
	this.shape_47.setTransform(91.7625,201.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]}).to({state:[{t:this.shape_40},{t:this.shape_39,p:{x:91.775,y:205.425}}]},1).to({state:[{t:this.shape_40},{t:this.shape_39,p:{x:91.775,y:205.425}}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44,p:{y:201.225}},{t:this.shape_39,p:{x:96.675,y:200.525}}]},1).to({state:[{t:this.shape_44,p:{y:201.225}},{t:this.shape_39,p:{x:96.675,y:200.525}}]},1).to({state:[{t:this.shape_44,p:{y:201.225}},{t:this.shape_45}]},1).to({state:[{t:this.shape_44,p:{y:202.625}},{t:this.shape_46}]},1).to({state:[{t:this.shape_40},{t:this.shape_39,p:{x:91.775,y:205.425}}]},1).to({state:[{t:this.shape_38},{t:this.shape_47}]},1).wait(1));

	// right_foot
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgDADQgCABAFAAQABBOgoA0QgoA2hEAAQgLAAgTgEQgSgEgHAAQAFgKATgOQAjgaACgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_48.setTransform(59.75,220.925);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgJgCQAAgEgCgDQgFgQAAgPIAAAOAgQgNQAAABACACQADADACAFAARAhIAAAIIghAAAAAAYQgFgRgEgJ");
	this.shape_49.setTransform(76.7,210.075);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#563A07").s().p("AhtCDQgRgEgJAAQAGgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQAQAAAUAFQAVAGAGAGQBEgRAiAAIAIAAIAAAMIAAA4IgqAAQgLAAgMAEQgMAEgHAAQAAAFgDADQgBAAAAAAQAAAAABABQAAAAABAAQABAAABAAQABBOgoA0QgoA2hEAAQgLAAgTgEg");
	this.shape_50.setTransform(59.75,220.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQACADAAAEQAEAJAFARAgQgNQAAABACACQADADACAFAARAhIAAAIIghAA");
	this.shape_51.setTransform(76.7,213.575);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AAVAdIABAIIghAEAgSgNIAAAAQAAABADACQADADADAEAgTgaIgCgOQACAPAHAQQACADABADQAFAJAHAQ");
	this.shape_52.setTransform(81.125,213.125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#412C05").ss(0.1,1,1).p("ACYhRIgqAGQgLABgLAGQgLAGgIABQAAAEgCADQgBACAEgBQALBNghA5QghA7hDAJQgLABgTgCQgSgCgIABQAEgKARgQQAfgfADgCQAqgugGgtQgEgdgzgSQgugPghAGQALgRArgYQArgXAagDQAQgCAUADQAWADAGAFQBCgaAhgEIAJgBIABAM");
	this.shape_53.setTransform(64.725,225.3821);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#563A07").s().p("AhSCUQgSgCgIABQAEgKARgQIAighQAqgugGgtQgEgdgzgSQgugPghAGQALgRArgYQArgXAagDQAQgCAUADQAWADAGAFQBCgaAhgEIAJgBIABAMIAAAAIAHA3IgqAGQgLABgLAGQgLAGgIABQAAAEgCADQgBABABAAQAAAAAAAAQAAAAABAAQABAAABAAQALBNghA5QghA7hDAJIgLAAIgTgBg");
	this.shape_54.setTransform(64.725,225.3821);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AARAhIAAAIAgQgaIAAgOQAAAPAFAQQACADAAAEQgCgFgDgDQgCgCAAgB");
	this.shape_55.setTransform(76.7,213.575);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AARAhIAAAIAgQgaIAAgOQABAPAFAQQABADABAEQgDgFgCgDQgDgCAAgB");
	this.shape_56.setTransform(81.6,208.675);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgEADQgBABAFAAQABBOgoA0QgoA2hEAAQgMAAgSgEQgSgEgIAAQAGgKATgOQAigaADgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQAQAAAUAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_57.setTransform(64.65,219.525);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#563A07").s().p("AhsCDQgTgEgHAAQAFgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgiACQANgQAtgSQAugRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAMIAAA4IgrAAQgLAAgLAEQgMAEgJAAQAAAFgDADQAAAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQACBOgoA0QgoA2hEAAQgLAAgSgEg");
	this.shape_58.setTransform(64.65,219.525);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgDADQgBABAEAAQABBOgoA0QgoA2hEAAQgLAAgSgEQgTgEgHAAQAFgKATgOQAjgaACgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_59.setTransform(69.55,214.625);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQACADAAAEQgCgFgDgDQgCgCAAgBAARAhIAAAI");
	this.shape_60.setTransform(86.5,203.775);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#563A07").s().p("AhtCDQgRgEgJAAQAGgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAIAAIAAAMIAAA4IgqAAQgLAAgMAEQgMAEgHAAQAAAFgEADQAAAAAAAAQAAAAABABQAAAAABAAQAAAAACAAQABBOgoA0QgoA2hEAAQgMAAgSgEg");
	this.shape_61.setTransform(69.55,214.625);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgDADQgCABAFAAQABBOgoA0QgoA2hEAAQgMAAgSgEQgSgEgIAAQAGgKATgOQAigaADgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_62.setTransform(74.45,209.725);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQABADABAEQgCgFgDgDQgCgCAAgBAARAhIAAAI");
	this.shape_63.setTransform(91.4,198.875);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#563A07").s().p("AhsCDQgTgEgHAAQAFgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgiACQANgQAtgSQAugRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAMIAAA4IgrAAQgLAAgMAEQgLAEgJAAQAAAFgCADQgBAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQACBOgoA0QgoA2hEAAQgMAAgRgEg");
	this.shape_64.setTransform(74.45,209.725);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQABAPAFAQQABADAAAEQgCgFgDgDQgCgCAAgBAARAhIAAAI");
	this.shape_65.setTransform(96.3,195.375);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgMAEgIAAQAAAFgDADQgBABAEAAQABBOgoA0QgoA2hEAAQgLAAgSgEQgTgEgHAAQAFgKATgOQAjgaACgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_66.setTransform(79.35,206.225);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#563A07").s().p("AhsCDQgSgEgJAAQAGgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAIAAIAAAMIAAA4IgqAAQgLAAgLAEQgNAEgHAAQAAAFgEADQAAAAAAAAQAAAAABABQAAAAABAAQABAAABAAQABBOgoA0QgoA2hEAAQgMAAgRgEg");
	this.shape_67.setTransform(79.35,206.225);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgNQAAABACACQADADACAFQAEAJAFARAgQgaIAAgOQAAAPAFAQQACADAAAEAARAhIAAAIIghAA");
	this.shape_68.setTransform(76.7,210.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50,p:{y:220.925}},{t:this.shape_49},{t:this.shape_48,p:{y:220.925}}]}).to({state:[{t:this.shape_50,p:{y:224.425}},{t:this.shape_48,p:{y:224.425}},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_50,p:{y:224.425}},{t:this.shape_48,p:{y:224.425}},{t:this.shape_55}]},1).to({state:[{t:this.shape_50,p:{y:224.425}},{t:this.shape_48,p:{y:224.425}},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_50,p:{y:224.425}},{t:this.shape_48,p:{y:224.425}},{t:this.shape_51}]},1).to({state:[{t:this.shape_50,p:{y:220.925}},{t:this.shape_68},{t:this.shape_48,p:{y:220.925}}]},1).wait(1));

	// body
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#421D0D").ss(0.1,1,1).p("ALiA2QgBAAAAAAQgIACgIACQizAoh5AAQnHAAl8hiQhqgah1goQhZgfgLAA");
	this.shape_69.setTransform(124.5625,200.175);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#6E3E27").ss(0.1,1,1).p("ANEjKQAOgCDPAXQCpAXCRAfIABAAA1bBRIAAgJQCyBXBfAcQCDAlC8AAQEOAADPhGQCHguCxhsQDBh1BZgkQCshGDTAAQA1AABDANQAXAEASAEQBAAMAFAB");
	this.shape_70.setTransform(65.2625,121.425);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#422213").ss(0.1,1,1).p("AJlExQiCgXicgjQk3hGiJg6QithJhrhUQiGhrhNie");
	this.shape_71.setTransform(-10.575,159.95);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AiwnWQgaAAAAgJIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQQAZAYAAABQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARQAdAVADADIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAaAtAZQgpABgsAPIAzAaQAAAEAFAEQAEAFAAAEQgiAAgQABQgbACgRAFIAAARQAVACAeANQAZALAJAIIAJAAQgGACgyAKQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAJQgtAHgUAIQglAOgRAdQAeAAARABQAgACAXAGQgRAHhVArIAAAIQAYgDAbAGQAaAHAOAOQAFAAAGACIgJAAQgBgBgBgBAmEjxIAIAAAjInkQA9AOA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBDi3ArQgBgBgBgCIgBgEQgYgJgJgDQgQgFgLAAIAAgRQAQgLAJgHQARgNAJgDQgVAAgvAEQguAEgVAAQAGgDAigcQAigbACgBIg8AAQgpAAgaAIIAAgIQAOgPAcgTQAdgVANgNQgFAAgCgEIgBgFQgCAAgvADQgcACgQgFQAJAAAAgHQALgEAagMQAXgKAHAAQgFAAgCgEIgBgEQgNACgogNQgsgPgNAAIAAgIQANAAAdgEQAcgFANAAIgHAAQgYgRgWgNQgqgagWAFQAng0A0AI");
	this.shape_72.setTransform(222.575,157.0875);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#DD6900").ss(0.1,1,1).p("AAEAAIgHAA");
	this.shape_73.setTransform(168.825,158.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#CCFF00").ss(0.1,1,1).p("AAQgIQACABADAAQgKAAgLAGQgMAGgIAE");
	this.shape_74.setTransform(196.7625,206.475);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#8A522F").s().p("ACyHJQhqgbh0goQhZgfgLAAQiCgXicgjQk3hFiLg7QishIhrhVQiGhqhOifIAAgIQCyBXBfAbQCDAmC8AAQEOAADPhGQCHguCxhsQDBh3BZgkQCshGDTAAQA1AABDANIApAIQAOgCDPAYQCpAXCRAeIABAAIgCAFIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQIAZAZQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARIAgAYIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAaAtAZQgpACgsAOIAzAaQAAAEAFAEQAEAFAAAEIgyABQgbACgRAFIAAARQAVACAeANQAZALAJAIIAJAAIg4AMQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAJQgtAHgUAIQglANgRAeIAvABQAgACAXAGIhmAyIAAAIQAYgDAbAGQAaAHAOAOQg0gIgnA0QAWgFAqAaIAuAeIAHAAQgNABgcAEQgdAEgNAAIAAAIQANAAAsAPQAoANANgCIABAEQACAEAFAAQgHAAgXAKIglAQQAAAHgJAAQAQAFAcgCIAxgDIABAFQACAEAFAAQgNANgdAVQgcATgOAPIAAAIQAagIApAAIA8AAIgkAcQgiAcgGADQAVAAAugEQAvgEAVAAQgJADgRANIgZASIAAARQALAAAQAFIAhAMIABAEIACADIgBAAIgQAEQizAoh5AAQnIAAl8higAQQAmIgJAAgAOJoIIhFgNIBFANg");
	this.shape_75.setTransform(65.2625,154.475);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AjzHiIgBgEIghgMQgQgFgLAAIAAgRIAZgSQARgNAJgDQgVAAgvAEQguAEgVAAQAGgDAigcIAkgcIg8AAQgpAAgaAIIAAgIQAOgPAcgTQAdgVANgNQgFAAgCgEIgBgFIgxADQgcACgQgFQAJAAAAgHIAlgQQAXgKAHAAQgFAAgCgEIgBgEQgNACgogNQgsgPgNAAIAAgIQANAAAdgEQAcgFANAAIgHAAIgugeQgqgagWAFQAng0A0AIIACACIAJAAIgLgCQgOgOgagHQgbgGgYADIAAgIIBmgyQgXgGgggCIgvgBQARgdAlgOQAUgIAtgHIAAgJQgUgPgkgHQghgHgeAEIAAgJQAXgOAogIIA4gMIgJAAQgJgIgZgLQgegNgVgCIAAgRQARgFAbgCIAygBQAAgEgEgFQgFgEAAgEIgzgaQAsgPApgBQgtgZgGgaQAIAAAOgEQANgEALAAQALAAAOAEQAOAEAIAAIAAgIIgggYQgWgRgFgKQAIAAASgEQARgFALAAQAMAAANAFQAOAEAIAAIgZgZQgQgQgKgTQADAAAFgEQAFgEANAAQAQAAAhAFQAiAGATAGQACgNgNgYQgPgZAAgPIAzAAQAAAJAaAAQgaAAAAgJIACgFQA9AOA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBDi3ArIgCgDgAl8jxIgIAAg");
	this.shape_76.setTransform(222.575,157.0875);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#3A1C11").ss(0.1,1,1).p("ANEoVQAOgCDPAYQCpAXCRAfIABAAAUzH/QgBAAAAAAQgIACgIACQizAoh5AAQnIAAl8hiQhqgbh0goQhZgfgLAAQiCgXicgjQk3hFiLg7QishIhrhVQiGhqhOifIAAgIQCyBXBfAbQCDAmC8AAQEOAADPhGQCHguCxhsQDBh3BZgkQCshGDTAAQA1AABDANQAXAFASADQBAAMAFAB");
	this.shape_77.setTransform(65.275,157.975);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AiwnXQgaAAAAgIIgzAAQAAAOAPAaQANAXgCANQgTgGgigFQghgGgQAAQgNAAgFAFQgFAEgDAAQAKATAQAPQAZAYAAABQgIAAgOgEQgNgEgMAAQgLAAgRAEQgSAEgIAAQAFAKAWARQAdAWADACIAAAJQgIAAgOgEQgOgFgLAAQgLAAgNAFQgOAEgIAAQAGAZAtAaQgpABgsAPIAzAZQAAAFAFAEQAEAEAAAEQgiAAgQABQgbACgRAGIAAARQAVABAeANQAZAMAJAIIAJAAQgGACgyAKQgoAHgXAPIAAAIQAegDAhAGQAkAHAUAQIAAAIQgtAHgUAIQglAPgRAdQAeAAARABQAgACAXAFQgRAIhVAqIAAAJQAYgEAbAHQAaAGAOAOQAFABAGABIgJAAQgBgBgBgBAmEjxIAIAAAjInkQA9ANA6APQJmCbAAEPQAAB2h/BvQhvBgjBBQQigBDi3AqQgBgBgBgBIgBgFQgYgIgJgDQgQgGgLAAIAAgRQAQgLAJgHQARgMAJgEQgVAAgvAFQguAEgVAAQAGgDAigcQAigcACgBIg8AAQgpAAgaAJIAAgJQAOgOAcgUQAdgUANgOQgFAAgCgEIgBgEQgCAAgvADQgcACgQgFQAJAAAAgIQALgEAagMQAXgJAHAAQgFAAgCgEIgBgFQgNACgogNQgsgOgNAAIAAgJQANAAAdgEQAcgEANAAIgHAAQgYgRgWgOQgqgZgWAFQAng1A0AI");
	this.shape_78.setTransform(222.575,160.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#8A522F").s().p("ACyHJQhqgbh0goQhZgfgLAAQiCgXicgjQk3hFiLg7QishIhrhVQiGhqhOifIAAgIQCyBXBfAbQCDAmC8AAQEOAADPhGQCHguCxhsQDBh3BZgkQCshGDTAAQA1AABDANIApAIQAOgCDPAYQCpAXCRAfIABAAIgCAEIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQIAZAZQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARIAgAYIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAaAtAZQgpACgsAOIAzAaQAAAEAFAEQAEAFAAAEIgyABQgbACgRAFIAAARQAVACAeANQAZALAJAIIAJAAIg4AMQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAJQgtAHgUAIQglANgRAeIAvABQAgACAXAGIhmAyIAAAIQAYgDAbAGQAaAHAOAOQg0gIgnA0QAWgFAqAaIAuAeIAHAAQgNABgcAEQgdAEgNAAIAAAIQANAAAsAPQAoANANgCIABAEQACAEAFAAQgHAAgXAKIglAQQAAAHgJAAQAQAFAcgCIAxgDIABAFQACAEAFAAQgNANgdAVQgcATgOAPIAAAIQAagIApAAIA8AAIgkAcQgiAcgGADQAVAAAugEQAvgEAVAAQgJADgRANIgZASIAAARQALAAAQAFIAhAMIABAEIACADIgBAAIgQAEQizAoh5AAQnIAAl8higAQQAmIgJAAgAOJoIIhFgNIBFANg");
	this.shape_79.setTransform(65.275,157.975);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AjzHiIgBgFIghgLQgQgFgLgBIAAgRIAZgSQARgMAJgEQgVAAgvAFQguAEgVAAQAGgDAigcIAkgcIg8AAQgpAAgaAIIAAgIQAOgPAcgTQAdgVANgOQgFAAgCgDIgBgFIgxADQgcACgQgFQAJAAAAgIIAlgPQAXgKAHAAQgFAAgCgEIgBgEQgNABgogNQgsgOgNAAIAAgIQANAAAdgFQAcgEANAAIgHAAIgugeQgqgagWAFQAng0A0AHIACADIAJAAIgLgDQgOgOgagGQgbgHgYAEIAAgIIBmgzQgXgFgggCIgvgBQARgdAlgPQAUgHAtgHIAAgJQgUgPgkgIQghgGgeAEIAAgJQAXgOAogIIA4gMIgJAAQgJgIgZgMQgegNgVgBIAAgRQARgFAbgCIAygBQAAgFgEgEQgFgEAAgEIgzgaQAsgOApgCQgtgZgGgaQAIAAAOgEQANgFALAAQALAAAOAFQAOAEAIAAIAAgJIgggXQgWgRgFgKQAIAAASgFQARgEALAAQAMAAANAEQAOAFAIAAIgZgaQgQgPgKgTQADAAAFgEQAFgEANgBQAQABAhAFQAiAGATAFQACgNgNgXQgPgZAAgPIAzAAQAAAJAaAAQgaAAAAgJIACgFQA9AOA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBEi3AqIgCgDgAl8jxIgIAAgAjKnfIAAAAg");
	this.shape_80.setTransform(222.575,160.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#CCFF00").ss(0.1,1,1).p("AgBAAQABABACAA");
	this.shape_81.setTransform(198.6375,209.125);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#CCFF00").ss(0.1,1,1).p("AgCAAQACABADAA");
	this.shape_82.setTransform(203.55,204.225);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AiwnWQgaAAAAgJIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQQAZAYAAABQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARQAdAVADADIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAZAtAaQgpACgsAOIAzAaQAAAEAFAEQAEAEAAAFQgiAAgQAAQgbADgRAFIAAARQAVACAeANQAZALAJAIIAJAAQgGACgyAKQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAIQgtAIgUAHQglAPgRAdQAeAAARABQAgACAXAGQgRAHhVArIAAAIQAYgDAbAGQAaAHAOAOQAFAAAGACIgJAAQgBgBgBgBAjInjQA9ANA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBEi3AqQgBgBgBgCIgBgEQgYgJgJgDQgQgFgLAAIAAgRQAQgLAJgHQARgNAJgDQgVAAgvAEQguAEgVAAQAGgDAigcQAigbACgBIg8AAQgpAAgaAIIAAgIQAOgPAcgTQAdgVANgNQgFAAgCgEIgBgFQgCAAgvADQgcACgQgFQAJAAAAgHQALgEAagMQAXgKAGAAQgEAAgCgEIgBgEQgNACgogNQgsgPgNAAIAAgIQANAAAdgEQAcgEANgBIgHAAQgYgRgWgNQgqgagWAFQAng0A0AIAmEjxIAIAA");
	this.shape_83.setTransform(227.475,155.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#8A522F").s().p("ACyHJQhqgbh0goQhZgfgLAAQiCgXicgjQk3hFiLg7QishIhrhVQiGhqhOifIAAgIQCyBXBfAbQCDAmC8AAQEOAADPhGQCHguCxhsQDBh3BZgkQCshGDTAAQA1AABDANIApAIQAOgCDPAYQCpAXCRAfIABAAIgCAEIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQIAZAZQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARIAgAYIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAaAtAZQgpACgsAOIAzAaQAAAEAFAEQAEAFAAAEIgyABQgbACgRAFIAAARQAVACAeANQAZALAJAIIAJAAIg4AMQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAJQgtAHgUAIQglANgRAeIAvABQAgACAXAGQgRAHhVArIAAAIQAYgDAbAGQAaAHAOAOQg0gIgnA0QAWgFAqAaIAuAeIAHAAQgNABgcAEQgdAEgNAAIAAAIQANAAAsAPQAoANANgCIABAEQACAEAEAAQgGAAgXAKIglAQQAAAHgJAAQAQAFAcgCIAxgDIABAFQACAEAFAAQgNANgdAVQgcATgOAPIAAAIQAagIApAAIA8AAIgkAcQgiAcgGADQAVAAAugEQAvgEAVAAQgJADgRANIgZASIAAARQALAAAQAFIAhAMIABAEIACADIgBAAIgQAEQizAoh5AAQnIAAl8higAQQAmIgJAAgAOJoIIhFgNIBFANg");
	this.shape_84.setTransform(70.175,153.075);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AjzHiIgBgEIghgMQgQgGgLABIAAgRIAZgSQARgNAJgEQgVABgvAEQguAEgVAAQAGgDAigcIAkgdIg8AAQgpAAgaAJIAAgJQAOgOAcgTQAdgVANgNQgFAAgCgFIgBgEIgxADQgcACgQgFQAJAAAAgIIAlgQQAXgJAGAAQgEAAgCgEIgBgFQgNACgogNQgsgOgNAAIAAgJQANAAAdgEQAcgDANgBIgHAAIgugfQgqgZgWAFQAng1A0AJIACABIAJAAIgLgBQgOgOgagHQgbgGgYADIAAgJQBVgqARgHQgXgGgggCIgvgBQARgdAlgOQAUgIAtgIIAAgIQgUgQgkgGQghgHgeADIAAgIQAXgPAogHIA4gMIgJAAQgJgIgZgLQgegNgVgCIAAgRQARgGAbgCIAygBQAAgDgEgFQgFgEAAgFIgzgZQAsgPApgBQgtgagGgZQAIAAAOgEQANgEALAAQALAAAOAEQAOAEAIAAIAAgIIgggZQgWgQgFgLQAIAAASgDQARgFALAAQAMAAANAFQAOADAIAAIgZgYQgQgQgKgTQADAAAFgEQAFgFANABQAQgBAhAGQAiAFATAHQACgNgNgYQgPgaAAgOIAzAAQAAAIAaAAQgaAAAAgIIACgEQA9ANA6AOQJmCbAAEPQAAB2h/BvQhvBgjBBQQigBEi3ApIgCgCgAl8jxIgIAAgAjKnfIAAAAg");
	this.shape_85.setTransform(227.475,155.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AVcnJIgBAAQiRgfipgXQjPgYgOACAUzH/QgBAAAAAAQgIACgIACQizAoh5AAQnIAAl8hiQhqgbh0goQhZgfgLAAQiCgXicgjQk3hFiLg7QishIhrhVQiGhqhOifIAAgIQCyBXBfAbQCDAmC8AAQEOAADPhGQCHguCxhsQDBh3BZgkQCshGDTAAQA1AABDANQAXAFASADQBAAMAFAB");
	this.shape_86.setTransform(70.175,153.075);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AjInjQA9ANA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBEi3AqQgBgBgBgCIgBgEQgYgJgJgDQgQgFgLAAIAAgRQAQgLAJgHQARgNAJgDQgVAAgvAEQguAEgVAAQAGgDAigcQAigbACgBIg8AAQgpAAgaAIIAAgIQAOgPAcgTQAdgVANgNQgFAAgCgEIgBgFQgCAAgvADQgcACgQgFQAJAAAAgHQALgEAagMQAXgKAGAAQgEAAgCgEIgBgEQgNACgogNQgsgPgNAAIAAgIQANAAAdgEQAcgEANgBIgHAAQgYgRgWgNQgqgagWAFQAng0A0AIQAFAAAGACIgJAAQgBgBgBgBAiwnWQgaAAAAgJIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQQAZAYAAABQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARQAdAVADADIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAZAtAaQgpACgsAOIAzAaQAAAEAFAEQAEAEAAAFQgiAAgQAAQgbADgRAFIAAARQAVACAeANQAZALAJAIIAJAAQgGACgyAKQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAIQgtAIgUAHQglAPgRAdQAeAAARABQAgACAXAGQgRAHhVArIAAAIQAYgDAbAGQAaAHAOAOAmEjxIAIAA");
	this.shape_87.setTransform(227.475,155.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AjzHiIgBgEIghgMQgQgGgLABIAAgRIAZgSQARgNAJgEQgVABgvAEQguAEgVAAQAGgDAigcIAkgdIg8AAQgpAAgaAJIAAgJQAOgOAcgTQAdgVANgNQgFAAgCgFIgBgEIgxADQgcACgQgFQAJAAAAgIIAlgQQAXgJAGAAQgEAAgCgEIgBgFQgNACgogNQgsgOgNAAIAAgJQANAAAdgEQAcgDANgBIgHAAIgugfQgqgZgWAFQAng1A0AJIACABIAJAAIgLgBQgOgOgagHQgbgGgYADIAAgJQBVgqARgHQgXgGgggCIgvgBQARgdAlgOQAUgIAtgIIAAgIQgUgQgkgGQghgHgeADIAAgIQAXgPAogHIA4gMIgJAAQgJgIgZgLQgegNgVgCIAAgRQARgGAbgCIAygBQAAgDgEgFQgFgEAAgFIgzgZQAsgPApgBQgtgagGgZQAIAAAOgEQANgEALAAQALAAAOAEQAOAEAIAAIAAgIIgggZQgWgQgFgLQAIAAASgDQARgFALAAQAMAAANAFQAOADAIAAIgZgYQgQgQgKgTQADAAAFgEQAFgFANABQAQgBAhAGQAiAFATAHQACgNgNgYQgPgaAAgOIAzAAQAAAIAaAAQgaAAAAgIIACgEQA9ANA6AOQJmCbAAEPQAAB2h/BvQhvBgjBBQQigBEi3ApIgCgCgAl8jxIgIAAg");
	this.shape_88.setTransform(227.475,155.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AiwnXQgaAAAAgIIgzAAQAAAOAPAaQANAXgCANQgTgGgigFQghgGgQAAQgNAAgFAFQgFAEgDAAQAKATAQAPQAZAYAAABQgIAAgOgEQgNgEgMAAQgLAAgRAEQgSAEgIAAQAFAKAWARQAdAWADACIAAAJQgIAAgOgEQgOgFgLAAQgLAAgNAFQgOAEgIAAQAGAZAtAaQgpABgsAPIAzAZQAAAFAFAEQAEAEAAAEQgiAAgQABQgbACgRAGIAAARQAVABAeANQAZAMAJAIIAJAAQgGACgyAKQgoAHgXAPIAAAIQAegDAhAGQAkAHAUAQIAAAIQgtAHgUAIQglAPgRAdQAeAAARABQAgACAXAFQgRAIhVAqIAAAJQAYgEAbAHQAaAGAOAOQAFABAGABIgJAAQgBgBgBgBAjInkQA9ANA6APQJmCbAAEPQAAB2h/BvQhvBgjBBQQigBDi3AqQgBgBgBgBIgBgFQgYgIgJgDQgQgGgLAAIAAgRQAQgLAJgHQARgMAJgEQgVAAgvAFQguAEgVAAQAGgDAigcQAigcACgBIg8AAQgpAAgaAJIAAgJQAOgOAcgUQAdgUANgOQgFAAgCgEIgBgEQgCAAgvADQgcACgQgFQAJAAAAgIQALgEAagMQAXgJAGAAQgEAAgCgEIgBgFQgNACgogNQgsgOgNAAIAAgJQANAAAdgEQAcgEANAAIgHAAQgYgRgWgOQgqgZgWAFQAng1A0AIAmEjxIAIAA");
	this.shape_89.setTransform(227.475,157.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#8A522F").s().p("ACyHJQhqgbh0goQhZgfgLAAQiCgXicgjQk3hFiLg7QishIhrhVQiGhqhOifIAAgIQCyBXBfAbQCDAmC8AAQEOAADPhGQCHguCxhsQDBh3BZgkQCshGDTAAQA1AABDANIApAIQAOgCDPAYQCpAXCRAfIABAAIgCAEIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQIAZAZQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARIAgAYIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAaAtAZQgpACgsAOIAzAaQAAAEAFAEQAEAFAAAEIgyABQgbACgRAFIAAARQAVACAeANQAZALAJAIIAJAAIg4AMQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAJQgtAHgUAIQglANgRAeIAvABQAgACAXAGIhmAyIAAAIQAYgDAbAGQAaAHAOAOQg0gIgnA0QAWgFAqAaIAuAeIAHAAQgNABgcAEQgdAEgNAAIAAAIQANAAAsAPQAoANANgCIABAEQACAEAEAAQgGAAgXAKIglAQQAAAHgJAAQAQAFAcgCIAxgDIABAFQACAEAFAAQgNANgdAVQgcATgOAPIAAAIQAagIApAAIA8AAIgkAcQgiAcgGADQAVAAAugEQAvgEAVAAQgJADgRANIgZASIAAARQALAAAQAFIAhAMIABAEIACADIgBAAIgQAEQizAoh5AAQnIAAl8higAQQAmIgJAAgAOJoIIhFgNIBFANg");
	this.shape_90.setTransform(70.175,154.475);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AjzHiIgBgFIghgLQgQgFgLgBIAAgRIAZgSQARgMAJgDQgVgBgvAFQguAEgVAAQAGgDAigcIAkgcIg8AAQgpAAgaAIIAAgIQAOgPAcgUQAdgUANgOQgFAAgCgDIgBgFIgxADQgcACgQgFQAJAAAAgHIAlgQQAXgKAGAAQgEAAgCgEIgBgEQgNACgogNQgsgPgNAAIAAgJQANAAAdgDQAcgFANAAIgHAAIgugeQgqgagWAFQAng0A0AHIACADIAJAAIgLgDQgOgOgagGQgbgHgYAEIAAgIIBmgzQgXgFgggCIgvgBQARgdAlgPQAUgIAtgGIAAgJQgUgPgkgIQghgGgeADIAAgIQAXgPAogHIA4gMIgJAAQgJgIgZgMQgegNgVgBIAAgRQARgFAbgCIAygBQAAgEgEgFQgFgEAAgEIgzgaQAsgPApgBQgtgZgGgaQAIAAAOgEQANgFALABQALgBAOAFQAOAEAIAAIAAgIIgggYQgWgRgFgKQAIAAASgFQARgEALAAQAMAAANAEQAOAFAIAAIgZgaQgQgPgKgTQADAAAFgEQAFgFANAAQAQAAAhAGQAiAGATAFQACgNgNgXQgPgaAAgOIAzAAQAAAJAaAAQgaAAAAgJIACgFQA9AOA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBEi3AqIgCgDgAl8jxIgIAAg");
	this.shape_91.setTransform(227.475,157.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AiwnXQgaAAAAgIIgzAAQAAAOAPAaQANAXgCANQgTgGgigFQghgGgQAAQgNAAgFAFQgFAEgDAAQAKATAQAPQAZAYAAABQgIAAgOgEQgNgEgMAAQgLAAgRAEQgSAEgIAAQAFAKAWARQAdAWADACIAAAJQgIAAgOgEQgOgFgLAAQgLAAgNAFQgOAEgIAAQAGAZAtAaQgpABgsAPIAzAZQAAAFAFAEQAEAEAAAEQgiAAgQABQgbACgRAGIAAARQAVABAeANQAZAMAJAIIAJAAQgGACgyAKQgoAHgXAPIAAAIQAegDAhAGQAkAHAUAQIAAAIQgtAHgUAIQglAPgRAdQAeAAARABQAgACAXAFQgRAIhVAqIAAAJQAYgEAbAHQAaAGAOAOQAFABAGABIgJAAQgBgBgBgBQg0gIgnA1QAWgFAqAZQAWAOAYARIAHAAQgNAAgcAEQgdAEgNAAIAAAJQANAAAsAOQAoANANgCIABAFQACAEAFAAQgHAAgXAJQgaAMgLAEQAAAIgJAAQAQAFAcgCQAvgDACAAIABAEQACAEAFAAQgNAOgdAUQgcAUgOAOIAAAJQAagJApAAIA8AAQgCABgiAcQgiAcgGADQAVAAAugEQAvgFAVAAQgJAEgRAMQgJAHgQALIAAARQALAAAQAGQAJADAYAIIABAFQABABABABQC3gqCghDQDBhQBvhgQB/hvAAh2QAAkPpmibQg6gPg9gNAmEjxIAIAA");
	this.shape_92.setTransform(222.575,160.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#D7D7D7").ss(0.1,1,1).p("AiwnWQgaAAAAgJIgzAAQAAAPAPAZQANAYgCANQgTgGgigGQghgFgQAAQgNAAgFAEQgFAEgDAAQAKATAQAQQAZAYAAABQgIAAgOgEQgNgFgMAAQgLAAgRAFQgSAEgIAAQAFAKAWARQAdAVADADIAAAIQgIAAgOgEQgOgEgLAAQgLAAgNAEQgOAEgIAAQAGAaAtAZQgpABgsAPIAzAaQAAAEAFAEQAEAFAAAEQgiAAgQABQgbACgRAFIAAARQAVACAeANQAZALAJAIIAJAAQgGACgyAKQgoAIgXAOIAAAJQAegEAhAHQAkAHAUAPIAAAJQgtAHgUAIQglAOgRAdQAeAAARABQAgACAXAGQgRAHhVArIAAAIQAYgDAbAGQAaAHAOAOQAFAAAGACIgJAAQgBgBgBgBQg0gIgnA0QAWgFAqAaQAWANAYARIAHAAQgNAAgcAFQgdAEgNAAIAAAIQANAAAsAPQAoANANgCIABAEQACAEAFAAQgHAAgXAKQgaAMgLAEQAAAHgJAAQAQAFAcgCQAvgDACAAIABAFQACAEAFAAQgNANgdAVQgcATgOAPIAAAIQAagIApAAIA8AAQgCABgiAbQgiAcgGADQAVAAAugEQAvgEAVAAQgJADgRANQgJAHgQALIAAARQALAAAQAFQAJADAYAJIABAEQABACABABQC3grCghDQDBhQBvhgQB/hvAAh1QAAkQpmibQg6gOg9gOAmEjxIAIAA");
	this.shape_93.setTransform(222.575,157.0875);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AjzHiIgBgEIghgMQgQgFgLAAIAAgRIAZgSQARgNAJgDQgVAAgvAEQguAEgVAAQAGgDAigcIAkgcIg8AAQgpAAgaAIIAAgIQAOgPAcgTQAdgVANgNQgFAAgCgEIgBgFIgxADQgcACgQgFQAJAAAAgHIAlgQQAXgKAHAAQgFAAgCgEIgBgEQgNACgogNQgsgPgNAAIAAgIQANAAAdgEQAcgFANAAIgHAAIgugeQgqgagWAFQAng0A0AIIACACIAJAAIgLgCQgOgOgagHQgbgGgYADIAAgIIBmgyQgXgGgggCIgvgBQARgdAlgOQAUgIAtgHIAAgJQgUgPgkgHQghgHgeAEIAAgJQAXgOAogIIA4gMIgJAAQgJgIgZgLQgegNgVgCIAAgRQARgFAbgCIAygBQAAgEgEgFQgFgEAAgEIgzgaQAsgPApgBQgtgZgGgaQAIAAAOgEQANgEALAAQALAAAOAEQAOAEAIAAIAAgIIgggYQgWgRgFgKQAIAAASgEQARgFALAAQAMAAANAFQAOAEAIAAIgZgZQgQgQgKgTQADAAAFgEQAFgEANAAQAQAAAhAFQAiAGATAGQACgNgNgYQgPgZAAgPIAzAAQAAAJAaAAQgaAAAAgJIACgFQA9AOA6AOQJmCbAAEQQAAB1h/BvQhvBgjBBQQigBDi3ArIgCgDgAl8jxIgIAAgAjKnfIAAAAg");
	this.shape_94.setTransform(222.575,157.0875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74,p:{y:206.475}},{t:this.shape_73,p:{y:158.3,x:168.825}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_73,p:{y:161.8,x:168.825}},{t:this.shape_74,p:{y:209.975}},{t:this.shape_77,p:{x:65.275,y:157.975}}]},1).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_73,p:{y:161.8,x:168.825}},{t:this.shape_81},{t:this.shape_77,p:{x:65.275,y:157.975}}]},1).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_73,p:{y:161.8,x:168.825}},{t:this.shape_74,p:{y:209.975}},{t:this.shape_77,p:{x:65.275,y:157.975}}]},1).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_73,p:{y:161.8,x:168.825}},{t:this.shape_81},{t:this.shape_77,p:{x:65.275,y:157.975}}]},1).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_73,p:{y:156.9,x:173.725}},{t:this.shape_82,p:{y:204.225}},{t:this.shape_77,p:{x:70.175,y:153.075}}]},1).to({state:[{t:this.shape_88},{t:this.shape_84},{t:this.shape_87},{t:this.shape_73,p:{y:156.9,x:173.725}},{t:this.shape_82,p:{y:204.225}},{t:this.shape_86,p:{x:70.175,y:153.075}}]},1).to({state:[{t:this.shape_88},{t:this.shape_84},{t:this.shape_87},{t:this.shape_73,p:{y:156.9,x:173.725}},{t:this.shape_82,p:{y:204.225}},{t:this.shape_77,p:{x:70.175,y:153.075}}]},1).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_73,p:{y:158.3,x:173.725}},{t:this.shape_82,p:{y:205.625}},{t:this.shape_77,p:{x:70.175,y:154.475}}]},1).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_92},{t:this.shape_73,p:{y:161.8,x:168.825}},{t:this.shape_74,p:{y:209.975}},{t:this.shape_86,p:{x:65.275,y:157.975}}]},1).to({state:[{t:this.shape_94},{t:this.shape_75},{t:this.shape_74,p:{y:206.475}},{t:this.shape_73,p:{y:158.3,x:168.825}},{t:this.shape_93},{t:this.shape_86,p:{x:65.2625,y:154.475}}]},1).wait(1));

	// left_wing
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AEEk1QAEiAAVh0QABgGABgFQAKhNAihBQARgiAYgeQAbgjArgCQAygCAJAuQADAPgDARQgCANgCAMQgVBugeBuQgQBFgBApQgBBKAECbQAACIgUBKQgkCIhWDuQhbD7gdBfQgBABAAABQgBADgBADAg9AuQgXhTgShJQgkiNAAg6QAAgvAZg2QAghEAxAAQBTAAAXCxQAGAvAIBcQAKBJASAZIAAg3QAAgKgIh4QgCgegCgYQgFhFAAgIQAAhoAFg7QAAgHABgGQAJg4A4gZQAMgGAHgEIAcALQAcAQADBNQANBmgBCEAEEktQgBAJAAAIIAAAJQABgNAAgNIAAgIAg1A2QgDgBgDgCQgCgCgCgBIAAAAQgTgOgNgbQgDgHgVg5QgehShAAAQgeAAgNAZQgIARAAAZQAABHA9BuQAeA4A/BaAhyD9QgYgEgNAAQgTAAgaAaQgaAaAAAUQAAATASAYQABACACACQAAABAAAAQABABABABQAGAHAOAPAjJFxQAAAAgBAAQgYAGgfAeQghAgAAATQAAASASAUQgcADgaAiQgIALgkA8QgbAtgVAQQgdAXghgNAkQHuQADAEAFAFACfMOQgCACgCABQgdAShBAEQgRABhdAAQiQAAhZgUQhXgUiEg+QAJgVACgBQADgCADABQAEABAEAF");
	this.shape_95.setTransform(198.325,41.0708);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#794629").s().p("AkaMUQhXgUiEg+QAJgVACgBQADgCADABQADABAFAFQgFgFgDgBIADgKQAiANAdgXQAVgQAbgtQAkg8AIgLQAagiAbgDQgRgUAAgSQAAgTAhggQAfgeAYgGIABAAIABACIAVAWIgVgWIgBgCIAAgBIgDgEQgSgYAAgTQAAgUAagaQAagaATAAQANAAAYAEIgRAIIAVgGQg/hageg4Qg9huAAhHIAIgqQANgZAeAAQBAAAAeBSQAVA5ADAHQANAbATAOIAAAAIAEADIAGADIgGgDIgEgDIAAAAIACgCQgXhTgShJQgkiNAAg6QAAgvAZg2QAghEAxAAQBTAAAXCxQAGAvAIBcQAKBJASAZIAAg3IgIiCIgEg2IgFhNQAAhoAFg7IABgNQAJg4A4gZIATgKIAcALQAcAQADBNQANBmgBCEIAAAIIgBARIAAAJIABgaIAAgIQAEiAAVh0IACgLQAKhNAihBQARgiAYgeQAbgjArgCQAygCAJAuQADAPgDARIgEAZQgVBugfBuQgPBFgBApQgBBKAECbQAACIgUBKQgkCIhWDuQhbD7geBfIAAACIgKgDIgEADQgdAShBAEQgRABhdAAQiQAAhZgUgAkIH3IgJgJIAJAJg");
	this.shape_96.setTransform(198.325,41.0708);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#3A1C11").ss(0.1,1,1).p("ABkoNQgRg5gQgpQgnhkg5AAQgcAAgbAyQgZAwAAAqIBMIHQgThugihmQhEjKhSAAABpnxQgFgFgGAAABpnxQADAMADANQAWBXADAXABkoNQAFAQAEARQgBgDgDgCIAAAAAl6JVIBuGvIHHjPQgBgIgCgNQAAgCgBgBQgEgVAAgLQAAhPBQi8QBejdALgtQgEhkAOjUQAQjqAAhUQAAjqgRiFQghkGhfAAQhJAAgsCpQgiCCAACAQAAAkAGAnAkWnFQgRAYAAAbQAAAXBNDfQAdBSAVA+QAjBpAMArQgTgUgegoQglgzgRgUQhHhQhVgGQgJAIAAArQAABCBhB0QAyA8BJBPQgxAAgeA0QgdAzAQAxQg4AGglA8QgZAogHAvAh5CIQACACABABIAAAJQgBgGgCgGg");
	this.shape_97.setTransform(199.725,41.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#DD6900").ss(0.1,1,1).p("AiLpxQgZAAgSAZADFqhQACAOADAOAElKdIgJAFAkhHBQgCAMgBAN");
	this.shape_98.setTransform(190.05,55.825);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#8A522F").s().p("Al6JVIgIgBQAHgvAZgoQAlg8A4gGQgQgxAdgzQAeg0AxAAQhJhPgyg8Qhhh0AAhCQAAgrAJgIQBVAGBHBRQARATAlAzQAeAoATAUQgMgrgkhpIgxiQQhNjfAAgXQAAgaARgYIAqgaQBSAABEDKQAiBmATBuIhMoHQAAgpAZgxQAbgyAcAAQA5AAAnBlQAQAoARA5IgGAXQAGAAAFAFIAGAZQAWBXADAXQgDgXgWhXIgGgZIAAAAIAEAFIgJghQgGgnAAgkQAAiAAiiCQAsipBJAAQBfAAAhEGQARCFAADrQAABTgQDqQgODUAEBkQgLAtheDdQhQC8AABPQAAALAEAVIABADIADAVInHDPgAh2CUIAAgJIgDgDIADAMg");
	this.shape_99.setTransform(199.725,41.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#3A1C11").ss(0.1,1,1).p("ABYM0QAPgFAOgHQEYh9BvkmQBYjsAAm1QAAhyg7jCQhGjkhOAAQg1AAgTCyQgJBRAAB8QAAAUADAbQgIg+gdg/QgKgVgNgRQgJgJgIgHIg7gdAE3mGQACAjAIAvQALBSAKAfACHn8QAEAYAAAoQAAA/ARCcQAJBOAIBCIAAA3QgKhXgjhgQgBgCgBgCQg8ighWAAQgcAAgOAzQgJAgAAAbQAABpA7CJQAOAhAZA6QATAuAAAaIAAARQguhHggglQgOgPgNgNQg9g5g1AAQggAAgTAZQgRAWAAAhQAABWBZCGQA2BRALAPQg0ADg6BAQgZAdgNAYAjpHkQAFgBAEgBAhXFqQABADABAAQAdAwAJAjAl7JQQguAGhPBOQhRBQgDAzQAAACAAAEIgHAAAmTJwIABAJIgIAAQADgEAEgFgAl7JQQgMAPgMARAj4HqQguARgoAkQgWAUgXAdApMMnQAAgCAAACQACAEACACIgEAAABzMkIq4AJQgCABgBgB");
	this.shape_100.setTransform(219.7,45.75);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#794629").s().p("ApMMwQgBgBgCgEQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAABQAEg0BQhPQBQhPAtgFIgYAfIgGAKIAIAAIgCgKIAYgfQAYgdAWgUQAngkAugSIAQgFIgDgCQANgYAagdQA5hAA0gDIhAhgQhZiGAAhWQAAghARgWQATgZAgAAQA1AAA9A5QANAMAOAQQAgAlAtBHIAAgRQAAgagSguIgnhbQg7iJAAhpQAAgbAIggQAOgzAdAAQBWAAA8CgIABAEQAjBgALBXIAAg3IgRiQQgRicAAg/QAAgogFgYIgCg7IAqgfIA7AcIARARQANAQAKAWQAdA/AIA9QgCgbAAgTQAAh8AIhRQATiyA2AAQBOAABGDkQA7DCAAByQAAG1hZDsQhuEmkYB9IgCgEIq4AIIgCABIgCgBgAjsHoIAJgDIgJADgAhZFxQAdAwAJAjQgJgjgdgwIgCgDIACADgAE9kwQAMBSAKAfQgKgfgMhSQgHgwgDgjQADAjAHAwgAl/JUIAAAAg");
	this.shape_101.setTransform(220.0375,45.3941);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AhtA3QABABABABQBcBlBwBHQCoBqCfAAQAaAAAagEQCtgaCOjIQBDhdAohpQAmhmAAhLQAAg1gIgbQgOgrgiAAQgfAAhLCuQg4CBgkBvQAAhBAEh+QAEhzAAgLQAAglgRgaQgQgagXAAQhQAAgtC3QgCAIgDAQQgIAlgRBPQgLA7gKAXQgCAFgCAEQAAgEAAgFQADgZAJg4QANhXAAgiQAAhEgCgQQgGgpgbgjQgwATgdBLQgPAlgZBvQgXBhgWAnQghA9g6AAQg2AAgZgkQgRgYgXhRAiLAVQAEAFAEAFQAHAIAHAHQACADADADQACACABABQgBABgCAAQgCAAgCAAQi6AOkABcQjyBhhqAoQDLBFAUAFQBYAVCgAAQBzAAFXgQQEngNBsgNQAmgEAPgFABBg2Ii5BMAHGAdQgBAFAAADAHKAUQAEAKgJAIIAAgBIAAgHQAAgBABAAAuYEmQgDgBgDgBIAEABQABABABAAgAuKErQgHgCgHgDAuKErQgQAGgMAEIAAAJ");
	this.shape_102.setTransform(270.45,176.475);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#794629").s().p("AnUCUQgVgFjLhFQBrgoDxhgQEAhcC5gOIAFAAIACAAIACABQBcBlBxBGQCoBqCfAAQAbAAAagEIACAMQgPAFgmAEQhrANkoANQlXAQhzAAQigAAhXgVg");
	this.shape_103.setTransform(249.0125,198.9625);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#8A522F").s().p("Ak1EDQhxhHhchlIgCgCIgDgDIgGgGIgDgZIC7hLIAHAKQAXBQARAZQAZAkA2gBQA6ABAhg9QAWgoAXhgQAZhvAOglQAdhLAxgUQAaAkAFApQADAQAABEQAAAigNBXIgMBRIAAAJIgBABIAAAHIAAABQAJgIgEgKQAKgZAMg5IAXh0IAGgYQAti3BQAAQAXAAAQAaQARAZAAAmIgEB+QgEB+gBBBQAlhvA4iCQBLiuAfABQAigBAOAsQAHAbAAA0QAABMgmBlQgoBqhCBdQiODHitAaQgaAFgaAAQiegBiohpg");
	this.shape_104.setTransform(311.15,173.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#3A1C11").ss(0.1,1,1).p("ALMHrQABAAACAAQCPAABAiqQAJAAAAgIQAGAGABAJQABAFAAASQAABxhDBnQhJBvhdAAQguAAhKgeQgZgKgcgNIh8hAIgUgLQgogUgzhXQgyhegZgnQgCgDgBgDIAIAAIgFAGAJqG/QAigNBBguQA8gsAXgXIAAArQgIAWgVA4QgWAughADAhhsTQABAEACAEQAiBQA7B+QBuDvBqDHQD1HJCcB8QABAAABABQA2ArArABQAAAAABAAAhosbIs5DaIgNADAgVJdQg9hLghhHQgehAACgoQABgJACgIAksGwQhugdhMhBQhXhKhsirQgxhNgkhxQgUhCgeiFQgbh5gRgwQgchNgngZAgVJdQAAAAAAABQAAAbgZAcQgXAZgPAAQhTAAhNiQQgXgqgZg+QgCgFgCgEQgTgtgCgDQAEAAAEAFQAFADAEAAAGaI3QASASBIAoQA/AqAAAsQAAATgRAQQgSARgZAAQh3AAhlhaQgIgGgGgGQAFAHAGAIQAdAlAAAhQAAAdgRAMQgNAJgZAAQg6AAhNg3QhFgyhChQQgCgDgCgDQgBAAAAAAADoJhIAJAAQAEATAYAhQgUgTgTgVQhjh0g5iwAguIuQABADADAEQAEAHAIAMQAJAQAAAF");
	this.shape_105.setTransform(266.275,250.55);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#8A522F").s().p("AAGBVQgqgCg2gqQAigOBAgtQA9grAWgXIAAAqIgcBOQgXAughADIgBAAg");
	this.shape_106.setTransform(337.15,291.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#794629").s().p("ABxLlQhGgyhBhQIgFgGIAAAAQgBgFgJgQIgMgTIgEgHIAEAHIAMATQAJAQABAFQg9hLgihHQgbg6AAgnIAAgHQABgJACgIQgCAIgBAJIAAAHQAAAnAbA6QAiBHA9BLIAAABQAAAbgaAcQgXAZgPAAQhSAAhOiQQgWgqgag+IgDgJQgTgtgDgDQAFAAAEAEQAEAFAEAAQgEAAgEgFQgEgEgFAAQADADATAtIgFADQhugdhMhBQhXhKhsirQgxhNgjhxQgVhBgdiGQgbh5gSgwQgbhNgngZIgDgKIM6jaIAGAJIADAHQAjBQA6B/QBuDvBrDGQD1HJCbB8IACABQA2ArArABIABAAIADAAQCQABBAirQAIAAAAgIQAGAGACAJIABAXQAABxhEBnQhJBvhcAAQguAAhLgeQgZgKgcgNIh7hAIgVgLQgngUgzhXQgzhegYgnIAFgGIgJAAIAEAGQAYAnAzBeQAzBXAnAUIAVALIgEAGQASASBIAoQA/AqAAAsQAAATgRAQQgSAQgYAAQh4ABhlhaIgOgMIALAPQAdAmAAAfQAAAegRAMQgMAJgaAAQg5AAhNg3gADgJsQATAWATATQgXghgFgTIgIAAIAIAAQAFATAXAhQgTgTgTgWQhjhzg5iwQA5CwBjBzgAgbJdIAAAAgAgbJdIAAAAgAkuGtIAAAAgADdE2IAAAAg");
	this.shape_107.setTransform(266.9125,250.55);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#3A1C11").ss(0.1,1,1).p("ABYtsQAkCaBEE5QA+ELA/CiQAQAqA1CkQAoB/AjBLQASAmB4B6QBsBuAAAjQAAAtgrAVQggARgwAAQg/AAhSg6QhDgxhAhMQAQAmAqBFQAtBKAAAcQAAAfgaALQgSAJghAAQhsAAiWkxQgghAgehHQgDgIgDgHQgFAIAAAMQAABTBBBkQAjA6AIAPQAUAnAAAhQAAAvgRASQgPARgoAAQhPAAhQhlQg/hPg4iCQAHAlASAwQAdBSAAAxQAAARgZARQgXARgPAAQgzAAhvjyQg4h4hTjWQhfjagfhfQgziaAAjKQAAhsACggQAEhJAOgfQACgFACgDABat8IgGACIsCDiAAIG2QgOgjgOgjQgkhcgHgbAAMGjQAAAIgEAJQAAABAAABACDEKQACBGAsBhQAsBcBGBYQAIAKAJAKACDEKQAAgCAAgCQAAgOAFADQACACABAFgAjbIuQgGgNgFgOQg2iFgdiJQgdiHAJhIAjgH/QAAAKABAKQABAMADAPAEsJlQADAJAFAL");
	this.shape_108.setTransform(259.3,247.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#794629").s().p("ABMJKQggg/gehHIgHgQIABgBQAEgJAAgIQAAAIgEAJIgBABIgbhFQgjhcgHgbQAHAbAjBcIAbBFQgDAKgBALQAABTBABkQAlA6AHAPQAUAoAAAgQAAAvgRARQgPASgogBQhOAAhRhkQg/hQg4iAQAIAkARAwQAeBSgBAxQAAARgZASQgWAQgQAAQgzAAhvjyQg4h4hSjWQhfjagghfQgziZAAjLQAAhsACgfQAEhKAOgfIMCjiIAEAOQAkCaBEE5QA/ELA+CiQAQAqA0CkQApB/AkBKQARAnB4B6QBsBuAAAiQAAAugrAWQggARgwAAQg/AAhSg7QhDgxhAhMIgIgUIgJAAQhGhYgshcQgthggBhHIAIgJIgDgFQgFgDAAANIAAAEQABBHAtBgQAsBcBGBYIARAUQAQAmApBFQAuBKgBAcQABAegaAMQgSAJghAAQhsAAiWkygAjmITIALAbIgEgcIgBgTIABATgAjmITIgDgHQg0iCgciGQgWhnAAhCQAAgVACgQQgCAQAAAVQAABCAWBnQAcCGA0CCIADAHgAjfISIAAAAgACDEJIAAAAg");
	this.shape_109.setTransform(259.3,247.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#3A1C11").ss(0.1,1,1).p("Aoyp+QACgFACgEAk9GKQhkihhYkFQhnkzAAjXQACgxACgqQADhWABg4QAAgNAAgMApTsOQAEACAAAGQBygcCsgVQCegTBVAAQAyAABGAOQAiAGAZAGQADAEADAEQD0EjAnHpQAHBSALCaQAMCBAVBjQAEAUBMCqQBICjAAAbQAAAggQALQgLAJgbAAQiMAAhsj0QgBgBAAgBQgehDgVhKQgLgigIgkQgYhpAAhOQAAgsAFgUADVtjIgFACAB1swQAGABAFACQAIACAIADAB1swQgIgJgIgIAApEsQgCgagBgbQgEhKAAgyAAzEbQgBACgCACQgEAGgDAHAD/HhQABBEAUBaQAVBhAAAmQAAAZgaASQgXARgXAAQhfAAgxjiQgMg1gJhBQgNhXgGhnQgGAOgEAVQgFAeAAAlQAABDAZBKQANAlAHAfQAGAeAAAXQAAAegIANQgMARgfAAQhsAAgsiyQgZhkgBiHQgBANgBARQgFBugBAEQgEAvgIAgQgTBHgoAAQg9AAgUiYQgDgZgCgiQgDg7AAhWQAAiMABgdQAEhQAUhQAD+HWQAAAGABAFAk4GSQgCgEgDgEAiQENQgEAKgDAZQAAAEgBADQAAgDAAgEQAAgrAQh/QAMhhAGgo");
	this.shape_110.setTransform(246.975,245.25);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#794629").s().p("AEzJkIgBgCQgehDgVhKQABBDAUBaQAVBiAAAmQAAAYgaATQgXAQgXAAQhfAAgxjhQgMg1gJhBQgNhYgGhmIAHgNIADgEIgDAEIgHANIgDg1QgEhKAAgzQAAAzAEBKIADA1QgGANgEAWQgFAeAAAlQAABCAZBLQANAlAHAeQAGAfAAAXQAAAegIANQgMARgfAAQhsAAgsiyQgZhlgBiGIABgHQADgZAEgKQgEAKgDAZIgBAAQAAgrAQh/QAMhiAGgnQgGAngMBiQgQB/AAArIAAAHIgCAeIgGByQgEAvgIAgQgTBHgoAAQg9AAgUiYIAAgzIgFgIQgDg7AAhWQAAiMABgdQAEhPAUhRQgUBRgEBPQgBAdAACMQAABWADA7QhkihhYkFQhnkzAAjXIAEhbIAEiOIAFABQAEACAAAGQBygcCsgVQCegTBVAAQAyAABGANQAiAHAZAGIAGAHQD0EkAnHoIASDtQAMCBAVBjQAEAUBMCqQBICiAAAcQAAAfgQAMQgLAIgbAAQiMAAhsjzgADUDYQAABNAYBqQAIAkALAiIgBgLIgSg7QgYhqAAhNQAAgtAFgTQgFATAAAtIAAAAgAoyqLIAEgIIgEAIgAApEgIAAAAg");
	this.shape_111.setTransform(246.975,246.475);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AoypDQAfkFD0i/QBvhXCDgwQCGgwCDAAQCDAABuAzQB3A3AABNQAAAKgBALAJDvxQgIBCgyBKQhUBqgwBFQhWB7gtCGQg8C0AADoQAACfAwCvQAiB8BHCpQBhDpAIAUQAvCBAABTQAABGgQAcQgVAig3AAQhsAAhIjqQgXhFgOhPIAAAAAjXN4QAAAVgBAtQAAAEAAAFQgIBTgmAAQhpAAhml0QgkiFgaiRQgXh+AAgtQAAgLAJh5QAIh4AAgLQAAhHgViPQgViQAAhWQAAgQARg/QACgJACgIQANgvAAgFAI7vyQm3CqjmF/Qj2GWA9IaAC9MaQgBgEAAgEQgOhPAAgpAC/MHQgBAKgBAJQgFA2AAAfQAAAkAPAqQAOApAPBFQANBGAAAcQAAAUgIAOQgMARgXAAQhsAAhRkCQgKglgKgnQgQg8gMg/QgCgKgCgJQgGglgGglAksGjQAEAkAEAiQASChAeCAQAOA8APAyQAAgQAAgEAgrLkQgCAHADAMQAGAlAOBZQAHAuAEAfQAHA1AAAOQAAAtgIAPQgJAQgdAAQhRAAg9iXQgMgegLgk");
	this.shape_112.setTransform(235.55,157.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#DD6900").ss(0.1,1,1).p("ADDuRQgBABABAAAi9OSQgDgMgCgL");
	this.shape_113.setTransform(273.975,147.475);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#794629").s().p("AiDNYQgMglgKgnQgQg9gMg/IgDgSIgMhLIAMBLQgCAHACAMIAUB9IAMBOQAHA1AAANQAAAugIAOQgJARgeAAQhRAAg8iXQgMgfgLgjIAAgUIAAAUQgQgygOg8QgdiAgTihIAKgCQg9oaD1mXQDnl+G3iqIAHABQgHBBgzBLQhUBrgvBEQhXB7gtCGQg7CzAADoQAACgAvCuQAiB9BHCpIBpD9QAwCBAABTQAABFgRAdQgUAhg4AAQhsABhIjrQgWhEgPhPIAAAAIgDgqIgBASIgCgIQgNhOgBgqQABAqANBOIACAIQgFA2AAAgQAAAkAOApQAPApAOBGQANBFAAAdQAAAUgIANQgLASgXgBQhsABhQkCg");
	this.shape_114.setTransform(249.718,167.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#8A522F").s().p("AnUL3QgkiFgaiRQgYh/AAgtIAJiEIAJiDQgBhGgUiQQgWiPAAhXQAAgQARg+IAFgRIgFgBQAfkFD0i/QBvhWCEgwQCFgyCDAAQCCABBvAzQB3A3AABMIgBAWIgIAAQm3CqjmF+Qj1GWA8IbIgJACIgIhGIAIBGQATChAdCAQAOA8AQAyIgBBBIAAAKQgJBSglAAQhqABhll0gAotntQAMgwAAgEQAAAEgMAwg");
	this.shape_115.setTransform(235.55,148.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AIopUQgCACgCACQgCABgCACQgBAAAAABQgxgZhfgGQglgCh+AAQmYAAlBF9QiACYhkDFQhSChgzDXQgCglgCgBQABgBACgCQAEgEgDAtQAvAeEhA4QEMA0BNgBQALlIEAl9QBciHBmh1QgHgIgGgEAIopUIAkAAQBsAzBLBcQBYBsAAB9QAABrgRBTQgcCHhBAAQgyAAgUhHQgMgsgIh6QgBgcgCgZQgCBagYBjQgkCYhCAAQgcAAgNgqQgJgcAAgoQAAgLAJhaQAIhaAAgLQAAhUgWg8QABAEAAADQAEAdAAAKQAABngzCLQg4CXg6AAQgSAAgTghQgSgfAAgVQAAgzAehkQAdhkAAg5QAAgbgPggQgHgQgHgKAIypcQgFAEgFAEAKEksQgCgLgCgKQgUhfgtgpAIfpMQhYBJhSBUQgBAAAAAAQgrAtgpAvAKQi5QgBgIAAgGQgFg/gGgmQADASAFAlQAEAlAAAJQAAAHAAAHgAHWlOQAAALADAXQgWg9gtglAilJuQgEAAgEAA");
	this.shape_116.setTransform(252.525,56.1759);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#794629").s().p("AhHFOQgIgcAAgoQAAgLAIhbQAJhaAAgLQAAhTgWg7IABAHQAEAcAAAKQAABmgzCLQg4CZg7AAQgSgBgTghQgRgfAAgVQAAgzAdhkQAdhlAAg4QAAgbgOgfQgIgRgHgJQApgwAsgtIAAAAQBShUBZhJIAAAAIAFgEIADgEIAjAAQBtA0BKBbQBYBsAAB9QAABrgRBSQgbCIhBAAQgyAAgUhHQgNgtgHh5IgEg2IAAgOQAAgIgEglQgEglgEgSQAGAmAFA+IABAOQgCBagXBkQgkCZhBAAQgdgBgNgqgAhUhPQgEgYAAgLQAAALAEAYQgXg+gsglQAsAlAXA+gABRhkIAEAUIgEgUQgThggtgpQAtApATBgg");
	this.shape_117.setTransform(308.375,34.15);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#8A522F").s().p("AlqI7Qkhg4gvgeQAzjXBSihQBkjFCAiYQFBl9GYAAQB+AAAlACQBfAGAxAZQhYBJhSBUIgBAAQgrAtgpAvQgHgIgGgEQAGAEAHAIQhmB1hcCHQkAF9gLFIIgDAAQhPAAkHgzg");
	this.shape_118.setTransform(236.925,56.1759);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#3A1C11").ss(0.1,1,1).p("Ah5CIQgMgrgjhpQgVg+gdhSQhNjfAAgXQAAgbARgYQASgZAYAAQBSAABEDKQAiBmATBuIhMoHQAAgqAZgwQAbgyAcAAQA5AAAnBkQAQApARA5QgGgnAAgkQAAiAAiiCQAsipBJAAQBfAAAhEGQARCFAADqQAABUgQDqQgODUAEBkQgLAtheDdQhQC8AABPQAAALAEAVQABABAAACQACANABAIIAJgEABpnxIAAAAQADACABADQgEgRgFgQQACAOADAOQgFgFgGAAABpnxQADAMADANQAWBXADAXAh5CIQgTgUgegoQglgzgRgUQhHhQhVgGQgJAIAAArQAABCBhB0QAyA8BJBPQgxAAgeA0QgdAzAQAxQg4AGglA8QgZAogHAvQgCANgBANAh5CIQACACABABIAAAJQgBgGgCgGgAl6JVIBuGvIHHjP");
	this.shape_119.setTransform(199.725,41.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#8A522F").s().p("Al6JVIgIgBQAHgvAZgoQAlg8A4gGQgQgxAdgzQAeg0AxAAQhJhPgyg8Qhhh0AAhCQAAgrAJgIQBVAGBHBRQARATAlAzQAeAoATAUQgMgrgkhpIgxiQQhNjfAAgXQAAgaARgYIAqgaQBSAABEDKQAiBmATBuIhMoHQAAgpAZgxQAbgyAcAAQA5AAAnBlQAQAoARA5QgGgnAAgkQAAiAAiiCQAsipBJAAQBfAAAhEGQARCFAADrQAABTgQDqQgODUAEBkQgLAtheDdQhQC8AABPQAAALAEAVIABADIADAVInHDPgAh2CUIAAgJIgDgDIADAMgABen2QAGAAAFAFIAGAZQAWBXADAXQgDgXgWhXIgGgZIAAAAIAEAFIgJghg");
	this.shape_120.setTransform(199.725,41.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AEEk1QAEiAAVh0QABgGABgFQAKhNAihBQARgiAYgeQAbgjArgCQAygCAJAuQADAPgDARQgCANgCAMQgVBugeBuQgQBFgBApQgBBKAECbQAACIgUBKQgkCIhWDuQhbD7gdBfQgBABAAABQgBADgBADAg9AuQgXhTgShJQgkiNAAg6QAAgvAZg2QAghEAxAAQBTAAAXCxQAGAvAIBcQAKBJASAZIAAg3QAAgKgIh4QgCgegCgYQgFhFAAgIQAAhoAFg7QAAgHABgGQAJg4A4gZQAMgGAHgEIAcALQAcAQADBNQANBmgBCEAEEktIAAgIAEEktQgBAJAAAIIAAAJQABgNAAgNgAg1A2QgDgBgDgCQgCgCgCgBIAAAAQgTgOgNgbQgDgHgVg5QgehShAAAQgeAAgNAZQgIARAAAZQAABHA9BuQAeA4A/BaAhyD9QgYgEgNAAQgTAAgaAaQgaAaAAAUQAAATASAYQABACACACQAAABAAAAQABABABABQAGAHAOAPAjJFxQAAAAgBAAQgYAGgfAeQghAgAAATQAAASASAUQgcADgaAiQgIALgkA8QgbAtgVAQQgdAXghgNAkQHuQADAEAFAFACfMOQgCACgCABQgdAShBAEQgRABhdAAQiQAAhZgUQhXgUiEg+QAJgVACgBQADgCADABQAEABAEAF");
	this.shape_121.setTransform(198.325,41.0708);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#8A522F").s().p("AkaMUQhXgUiEg+QAJgVACgBQADgCADABQADABAFAFQgFgFgDgBIADgKQAiANAdgXQAVgQAbgtQAkg8AIgLQAagiAbgDQgRgUAAgSQAAgTAhggQAfgeAYgGIABAAIABACIAVAWIgVgWIgBgCIAAgBIgDgEQgSgYAAgTQAAgUAagaQAagaATAAQANAAAYAEIgRAIIAVgGQg/hageg4Qg9huAAhHIAIgqQANgZAeAAQBAAAAeBSQAVA5ADAHQANAbATAOIAAAAIAEADIAGADIgGgDIgEgDIAAAAIACgCQgXhTgShJQgkiNAAg6QAAgvAZg2QAghEAxAAQBTAAAXCxQAGAvAIBcQAKBJASAZIAAg3IgIiCIgEg2IgFhNQAAhoAFg7IABgNQAJg4A4gZIATgKIAcALQAcAQADBNQANBmgBCEQAEiAAVh0IACgLQAKhNAihBQARgiAYgeQAbgjArgCQAygCAJAuQADAPgDARIgEAZQgVBugfBuQgPBFgBApQgBBKAECbQAACIgUBKQgkCIhWDuQhbD7geBfIAAACIgKgDIgEADQgdAShBAEQgRABhdAAQiQAAhZgUgAkIH3IgJgJIAJAJgAEDkcIAAAJIABgaIAAgIIAAAIIgBARg");
	this.shape_122.setTransform(198.325,41.0708);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96},{t:this.shape_95}]}).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_122},{t:this.shape_121}]},1).wait(1));

	// left_leg
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#683D2A").ss(0.1,1,1).p("AC1glQAAAAAAABQgRBFguBBQg8BWhFAAQhEAAgyg8Qgzg8AAhTQAAgTAVhJQAPgyAEgW");
	this.shape_123.setTransform(128.15,207.475);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AihhBQACgKAAgEACgBQQABgDABgD");
	this.shape_124.setTransform(130.25,195.675);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#8A522F").s().p("AiBB8Qgzg8AAhTQAAgTAWhJQAOgyAFgWIALADIE1CPIAAABQgQBFguBBQg9BWhFAAQhDAAgzg8g");
	this.shape_125.setTransform(128.15,207.475);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AC2gkQgBADgBADQAAAAAAABQgQBFguBBQg8BWhGAAQhDAAgzg8Qgzg8AAhTQAAgTAWhJQAOgyAFgWQACgKAAgE");
	this.shape_126.setTransform(128.225,210.275);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#DD6900").ss(0.1,1,1).p("AC1glQAAAAAAABQgRBFguBBQg8BWhFAAQhEAAgyg8Qgzg8AAhTQAAgTAVhJQAPgyAEgW");
	this.shape_127.setTransform(128.15,210.975);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF8012").s().p("AiBB8Qgzg8AAhTQAAgTAWhJQAOgyAFgWIALADIE1CPIAAABQgQBFguBBQg9BWhFAAQhDAAgzg8g");
	this.shape_128.setTransform(128.15,210.975);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#8A522F").s().p("AiBB8Qgzg8AAhTQAAgTAVhJQAPgyAEgWIAMADIE1CPIAAABQgRBFguBBQg7BWhGAAQhDAAgzg8g");
	this.shape_129.setTransform(133.05,206.075);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#3A1C11").ss(0.1,1,1).p("AC1glQAAAAAAABQgRBFguBBQg8BWhFAAQhEAAgyg8Qgzg8AAhTQAAgTAVhJQAPgyAEgW");
	this.shape_130.setTransform(133.05,206.075);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AihhBQACgKAAgEACgBQQAAgDACgD");
	this.shape_131.setTransform(135.15,194.275);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#794629").s().p("AiBB8Qgzg8AAhTQAAgTAVhJQAPgyAEgWIAMADIE1CPIAAABQgRBFguBBQg7BWhGAAQhDAAgzg8g");
	this.shape_132.setTransform(133.05,206.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_125,p:{y:207.475}},{t:this.shape_124,p:{y:195.675}},{t:this.shape_123}]}).to({state:[{t:this.shape_125,p:{y:210.975}},{t:this.shape_126,p:{x:128.225,y:210.275}}]},1).to({state:[{t:this.shape_125,p:{y:210.975}},{t:this.shape_126,p:{x:128.225,y:210.275}}]},1).to({state:[{t:this.shape_128},{t:this.shape_124,p:{y:199.175}},{t:this.shape_127}]},1).to({state:[{t:this.shape_128},{t:this.shape_124,p:{y:199.175}},{t:this.shape_127}]},1).to({state:[{t:this.shape_129,p:{y:206.075}},{t:this.shape_126,p:{x:133.125,y:205.375}}]},1).to({state:[{t:this.shape_129,p:{y:206.075}},{t:this.shape_126,p:{x:133.125,y:205.375}}]},1).to({state:[{t:this.shape_132},{t:this.shape_131,p:{y:194.275}},{t:this.shape_130,p:{y:206.075}}]},1).to({state:[{t:this.shape_129,p:{y:207.475}},{t:this.shape_131,p:{y:195.675}},{t:this.shape_130,p:{y:207.475}}]},1).to({state:[{t:this.shape_125,p:{y:210.975}},{t:this.shape_126,p:{x:128.225,y:210.275}}]},1).to({state:[{t:this.shape_125,p:{y:207.475}},{t:this.shape_126,p:{x:128.225,y:206.775}}]},1).wait(1));

	// left_foot
	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgDADQgCABAFAAQABBOgoA0QgoA2hEAAQgMAAgSgEQgSgEgHAAQAFgKATgOQAigaADgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_133.setTransform(96.2,225.775);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQABADABAEQAEAJAFARAgQgNQAAABACACQADADACAFAARAhIAAAIIghAA");
	this.shape_134.setTransform(113.15,214.925);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#563A07").s().p("AhtCDQgRgEgJAAQAGgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQAQAAAUAFQAVAGAGAGQBEgRAiAAIAIAAIAAAMIAAA4IgqAAQgLAAgMAEQgMAEgHAAQAAAFgDADQgBAAAAAAQAAAAABABQAAAAABAAQABAAABAAQABBOgoA0QgoA2hEAAQgLAAgTgEg");
	this.shape_135.setTransform(96.2,225.775);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQABADABAEAARAhIAAAIIghAAAgQgNQAAABACACQADADACAFQAEAJAFAR");
	this.shape_136.setTransform(113.15,218.425);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZh6IAAgMIgJAAQgiAAhEARQgGgGgVgGQgTgFgRAAQgaAAguARQgtASgOAQQAjgCArAVQAxAYAAAdQAAAugwAoQgDACgiAaQgTAOgFAKQAHAAASAEQASAEAMAAQBEAAAog2QAog0gBhOQgFAAACgBQADgDAAgFQAHAAANgEQALgEALAAIArAA");
	this.shape_137.setTransform(96.2,229.275);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#412C05").ss(0.1,1,1).p("ACRiIIgBgMIgJABQghAEhCAZQgGgEgWgDQgUgDgQACQgaADgrAXQgrAXgLASQAigGAtAQQA0AQADAdQAGAugqAuQgDACgfAeQgQARgFAKQAIgBASACQATACALgCQBDgIAhg7QAig5gMhNQgEAAABgBQADgDgBgFQAIgBALgFQALgGALgBIAqgF");
	this.shape_138.setTransform(101.475,225.6321);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgTgaIgCgOQACAOAHAQQACADABADQAFAJAHARAgJgEQgDgEgDgDQgDgBAAgBIAAgBAAVAcIABAJIghAE");
	this.shape_139.setTransform(117.875,213.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#563A07").s().p("AhSCUQgSgCgIABQAFgKAQgRIAiggQAqgugGguQgDgdg0gQQgtgQgiAGQALgSArgXQArgXAagDQAQgCAUADQAWADAGAEQBCgZAhgEIAJgBIABAMIAAAAIAHA4IgqAFQgLABgLAGQgLAFgIABQABAFgDADQAAAAAAABQAAAAAAAAQABAAABAAQAAAAABAAQAMBNgiA5QghA7hDAIIgLABIgTgBg");
	this.shape_140.setTransform(101.475,225.6321);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgMAEgIAAQAAAFgDADQgBABAEAAQABBOgoA0QgoA2hEAAQgLAAgSgEQgTgEgHAAQAFgKATgOQAjgaACgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_141.setTransform(101.1,224.375);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQABAPAFAQQABADAAAEQAEAJAFARAgQgNQAAABACACQADADACAFAARAhIAAAIIghAA");
	this.shape_142.setTransform(118.05,213.525);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#563A07").s().p("AhsCDQgTgEgHAAQAFgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgiACQANgQAtgSQAugRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAMIAAA4IgrAAQgLAAgLAEQgMAEgJAAQAAAFgDADQAAAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQACBOgoA0QgoA2hEAAQgLAAgSgEg");
	this.shape_143.setTransform(101.1,224.375);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgNQAAABACACQADADACAFQAEAJAFARAgQgaIAAgOQAAAPAFAQQACADAAAEAARAhIAAAIIghAA");
	this.shape_144.setTransform(122.95,208.625);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgDADQgCABAFAAQABBOgoA0QgoA2hEAAQgMAAgSgEQgSgEgHAAQAFgKATgOQAigaADgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_145.setTransform(106,219.475);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#563A07").s().p("AhtCDQgRgEgJAAQAGgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAIAAIAAAMIAAA4IgqAAQgLAAgLAEQgNAEgHAAQAAAFgEADQAAAAAAAAQAAAAABABQAAAAABAAQAAAAACAAQABBOgoA0QgoA2hEAAQgMAAgSgEg");
	this.shape_146.setTransform(106,219.475);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgLAEQgNAEgHAAQAAAFgEADQgBABAFAAQABBOgoA0QgoA2hEAAQgMAAgSgEQgSgEgIAAQAGgKATgOQAigaADgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQAQAAAUAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_147.setTransform(110.9,214.575);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#563A07").s().p("AhsCDQgTgEgHAAQAFgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgiACQANgQAtgSQAugRAaAAQARAAATAFQAVAGAGAGQBEgRAiAAIAJAAIAAAMIAAA4IgrAAQgLAAgMAEQgLAEgJAAQAAAFgCADQgBAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQACBOgoA0QgoA2hEAAQgMAAgRgEg");
	this.shape_148.setTransform(110.9,214.575);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#412C05").ss(0.1,1,1).p("ACZhCIgrAAQgLAAgMAEQgMAEgIAAQAAAFgDADQgBABAEAAQACBOgoA0QgoA2hEAAQgMAAgSgEQgSgEgIAAQAGgKATgOQAigaADgCQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAtgSQAugRAaAAQAQAAAUAFQAVAGAGAGQBEgRAiAAIAJAAIAAAM");
	this.shape_149.setTransform(115.8,211.075);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQABADACAEQADAJAFARAARAhIAAAIIghAAAgQgNQAAABADACQACADADAF");
	this.shape_150.setTransform(132.75,200.225);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#563A07").s().p("AhtCDQgRgEgJAAQAGgKATgOIAlgcQAwgoAAguQAAgdgxgYQgrgVgjACQAOgQAugSQAtgRAbAAQAQAAATAFQAVAGAGAGQBEgRAiAAIAIAAIAAAMIAAA4IgqAAQgLAAgLAEQgNAEgHAAQAAAFgEADQAAAAAAAAQAAAAABAAQAAABABAAQABAAABAAQABBOgoA0QgoA2hEAAQgMAAgSgEg");
	this.shape_151.setTransform(115.8,211.075);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#FF99CC").ss(0.1,1,1).p("AgQgaIAAgOQAAAPAFAQQABADABAEAgQgNQAAABACACQADADACAFQAEAJAFARAARAhIAAAIIghAA");
	this.shape_152.setTransform(113.15,218.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_135,p:{y:225.775}},{t:this.shape_134,p:{y:214.925,x:113.15}},{t:this.shape_133,p:{y:225.775}}]}).to({state:[{t:this.shape_135,p:{y:229.275}},{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_135,p:{y:229.275}},{t:this.shape_134,p:{y:218.425,x:113.15}},{t:this.shape_133,p:{y:229.275}}]},1).to({state:[{t:this.shape_135,p:{y:229.275}},{t:this.shape_134,p:{y:218.425,x:113.15}},{t:this.shape_133,p:{y:229.275}}]},1).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141}]},1).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_148},{t:this.shape_134,p:{y:203.725,x:127.85}},{t:this.shape_147}]},1).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149}]},1).to({state:[{t:this.shape_135,p:{y:229.275}},{t:this.shape_133,p:{y:229.275}},{t:this.shape_152}]},1).to({state:[{t:this.shape_135,p:{y:225.775}},{t:this.shape_134,p:{y:214.925,x:113.15}},{t:this.shape_133,p:{y:225.775}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.9,-62.7,437.9,411.9);


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

	// Layer_2
	this.text = new cjs.Text("29", "500px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 571;
	this.text.lineWidth = 595;
	this.text.parent = this;
	this.text.setTransform(-15.4,-384.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._3answerreveal, new cjs.Rectangle(-315.1,-386.9,599.4000000000001,917), null);


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

	// Layer_6
	this.instance = new lib.redeagle("synched",5);
	this.instance.setTransform(41.75,255.75,0.3018,0.3018,0,0,180,131.2,220.3);
	var instanceFilter_1 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-75,-65,442,416);

	this.instance_1 = new lib.redeagle("synched",5);
	this.instance_1.setTransform(-130.3,180.15,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_1Filter_2 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-75,-65,442,416);

	this.instance_2 = new lib.redeagle("synched",5);
	this.instance_2.setTransform(-165.8,-156.15,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_2Filter_3 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_3];
	this.instance_2.cache(-75,-65,442,416);

	this.instance_3 = new lib.redeagle("synched",5);
	this.instance_3.setTransform(312.3,29.6,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_3Filter_4 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_4];
	this.instance_3.cache(-75,-65,442,416);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(11));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_3).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_4).wait(11));

	// Layer_3
	this.instance_4 = new lib.browneagle("synched",5);
	this.instance_4.setTransform(-225.9,29.6,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_4Filter_5 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_4.filters = [instance_4Filter_5];
	this.instance_4.cache(-75,-65,442,416);

	this.instance_5 = new lib.browneagle("synched",5);
	this.instance_5.setTransform(52,-203.8,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_5Filter_6 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_5.filters = [instance_5Filter_6];
	this.instance_5.cache(-75,-65,442,416);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_5).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_6).wait(11));

	// Layer_2
	this.instance_6 = new lib.eagleflyingloop("synched",5);
	this.instance_6.setTransform(219,170.15,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_6Filter_7 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_6.filters = [instance_6Filter_7];
	this.instance_6.cache(-75,-65,442,416);

	this.instance_7 = new lib.eagleflyingloop("synched",5);
	this.instance_7.setTransform(268.95,-156.15,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_7Filter_8 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_7.filters = [instance_7Filter_8];
	this.instance_7.cache(-75,-65,442,416);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_6Filter_7).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_7Filter_8).wait(11));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_3, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_4, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_5, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_6, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_7, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297.1,-289.9,671.7,585.2);


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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.8516},5,cjs.Ease.get(1)).wait(158));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-738.1,-434.1,1476.3000000000002,1422.8000000000002);


(lib.lineblur = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.rlines("synched",0);
	this.instance.setTransform(712.6,235.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1366.4,485.2);


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


(lib.eagles3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.browneagle("synched",5);
	this.instance.setTransform(71.6,-21.85,0.3018,0.3018,0,0,180,131.2,220.3);
	var instanceFilter_1 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-75,-65,442,416);

	this.instance_1 = new lib.browneagle("synched",5);
	this.instance_1.setTransform(-106.1,136.15,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_1Filter_2 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-75,-65,442,416);

	this.instance_2 = new lib.browneagle("synched",5);
	this.instance_2.setTransform(-442.05,-19.15,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_2Filter_3 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_3];
	this.instance_2.cache(-75,-65,442,416);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(11));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_3).wait(11));

	// Layer_5
	this.instance_3 = new lib.redeagle("synched",5);
	this.instance_3.setTransform(-281.7,-145.5,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_3Filter_4 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_4];
	this.instance_3.cache(-75,-65,442,416);

	this.instance_4 = new lib.redeagle("synched",5);
	this.instance_4.setTransform(-83.1,-145.5,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_4Filter_5 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_4.filters = [instance_4Filter_5];
	this.instance_4.cache(-75,-65,442,416);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_4).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_5).wait(11));

	// Layer_2
	this.instance_5 = new lib.eagleflyingloop("synched",5);
	this.instance_5.setTransform(-84.6,-19.15,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_5Filter_6 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_5.filters = [instance_5Filter_6];
	this.instance_5.cache(-75,-65,442,416);

	this.instance_6 = new lib.eagleflyingloop("synched",5);
	this.instance_6.setTransform(-263.2,-19.15,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_6Filter_7 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_6.filters = [instance_6Filter_7];
	this.instance_6.cache(-75,-65,442,416);

	this.instance_7 = new lib.eagleflyingloop("synched",5);
	this.instance_7.setTransform(-283.2,124.45,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_7Filter_8 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_7.filters = [instance_7Filter_8];
	this.instance_7.cache(-75,-65,442,416);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_6).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_6Filter_7).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_7Filter_8).wait(11));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_3, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_4, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_5, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_6, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_7, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-513.3,-231.6,647.1999999999999,407.29999999999995);


(lib.eaglefly1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.redeagle("synched",5);
	this.instance.setTransform(-561.9,-105.45,0.3018,0.3018,0,0,180,131.2,220.3);
	var instanceFilter_1 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-75,-65,442,416);

	this.instance_1 = new lib.redeagle("synched",5);
	this.instance_1.setTransform(-784.15,67.05,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_1Filter_2 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-75,-65,442,416);

	this.instance_2 = new lib.redeagle("synched",5);
	this.instance_2.setTransform(-373.35,67.05,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_2Filter_3 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_3];
	this.instance_2.cache(-75,-65,442,416);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(11));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_3).wait(11));

	// Layer_7
	this.instance_3 = new lib.browneagle("synched",5);
	this.instance_3.setTransform(-794.4,-105.45,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_3Filter_4 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_4];
	this.instance_3.cache(-75,-65,442,416);

	this.instance_4 = new lib.browneagle("synched",5);
	this.instance_4.setTransform(-572.15,78.8,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_4Filter_5 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_4.filters = [instance_4Filter_5];
	this.instance_4.cache(-75,-65,442,416);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_4).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_5).wait(11));

	// Layer_2
	this.instance_5 = new lib.eagleflyingloop("synched",5);
	this.instance_5.setTransform(-363.1,-105.45,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_5Filter_6 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_5.filters = [instance_5Filter_6];
	this.instance_5.cache(-75,-65,442,416);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_6).wait(11));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_3, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_4, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_5, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-865.6,-191.5,564.8,309.9);


(lib.eagle4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.eagleflyingloop("synched",5);
	this.instance.setTransform(-530.05,215.25,0.3018,0.3018,0,0,180,131.2,220.3);
	var instanceFilter_1 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-75,-65,442,416);

	this.instance_1 = new lib.eagleflyingloop("synched",5);
	this.instance_1.setTransform(-1023.75,9.65,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_1Filter_2 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-75,-65,442,416);

	this.instance_2 = new lib.eagleflyingloop("synched",5);
	this.instance_2.setTransform(-703.4,-144.6,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_2Filter_3 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_3];
	this.instance_2.cache(-75,-65,442,416);

	this.instance_3 = new lib.redeagle("synched",5);
	this.instance_3.setTransform(-692.85,172.65,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_3Filter_4 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_4];
	this.instance_3.cache(-75,-65,442,416);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(11));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_3).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_4).wait(11));

	// Layer_4
	this.instance_4 = new lib.browneagle("synched",5);
	this.instance_4.setTransform(-859.2,97.05,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_4Filter_5 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_4.filters = [instance_4Filter_5];
	this.instance_4.cache(-75,-65,442,416);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_5).wait(11));

	// Layer_3
	this.instance_5 = new lib.browneagle("synched",5);
	this.instance_5.setTransform(-562.8,-240.65,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_5Filter_6 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_5.filters = [instance_5Filter_6];
	this.instance_5.cache(-75,-65,442,416);

	this.instance_6 = new lib.browneagle("synched",5);
	this.instance_6.setTransform(-860.7,-56.6,0.3018,0.3018,0,0,180,131.2,220.3);
	var instance_6Filter_7 = new cjs.ColorFilter(0.94,0.94,0.94,1,0,0,0,0);
	this.instance_6.filters = [instance_6Filter_7];
	this.instance_6.cache(-75,-65,442,416);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_6).wait(11));
	this.timeline.addTween(cjs.Tween.get(instance_6Filter_7).wait(11));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_3, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_4, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_5, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this.filterCacheList.push({instance: this.instance_6, startFrame:0, endFrame:11, x:-75, y:-65, w:442, h:416});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1095,-326.7,627.3,581.5);


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


(lib.submitbutton2 = function(mode,startPosition,loop,reversed) {
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

	// Layer_2
	this.instance = new lib.rewatchpuzzletxtcopy5();
	this.instance.setTransform(-2.95,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7));

	// Layer_1
	this.instance_1 = new lib.btnbggraycopy5();
	this.instance_1.shadow = new cjs.Shadow("#333333",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-344.9,-79.9,696,167);


(lib.submitbutton = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.rewatchpuzzletxt2();
	this.instance.setTransform(-2.95,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.btnbgcopy4();
	this.instance_1.shadow = new cjs.Shadow("#333333",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.submitbutton, new cjs.Rectangle(-344.9,-79.9,696,167), null);


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
	this.shape.graphics.lf(["#666666","#333333"],[0,1],4,-116.3,4,353.2).s().p("Ehj9A5lMAAAhzJMDH7AAAMAAABzJg");
	this.shape.setTransform(32,-46.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Eg9hAcHMAAAg4NMB7DAAAMAAAA4Ng");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.letsseehowyoudid, new cjs.Rectangle(-607.7,-415.5,1279.5,1089.2), null);


(lib.inputbox = function(mode,startPosition,loop,reversed) {
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
	this.answerbox = new lib.an_TextInput({'id': 'answerbox', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answerbox.name = "answerbox";
	this.answerbox.setTransform(0.8,0.9,5.3412,4.418,0,0,0,50.1,11.2);

	this.timeline.addTween(cjs.Tween.get(this.answerbox).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inputbox, new cjs.Rectangle(-269.4,-50.8,539.4,101.6), null);


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


(lib.cloudin2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.innercloud3();
	this.instance.filters = [new cjs.BlurFilter(8, 8, 3)];
	this.instance.cache(-65,-25,131,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloudin2, new cjs.Rectangle(-74.2,-34,152,72), null);


(lib.cloudin1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cloud6();
	this.instance.setTransform(154.3,-85.75,0.3009,0.3009,0,0,0,0,-0.1);
	this.instance.alpha = 0.75;
	this.instance.filters = [new cjs.BlurFilter(8, 8, 3)];
	this.instance.cache(-249,-142,499,285);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.innercloud1();
	this.instance_1.filters = [new cjs.BlurFilter(8, 8, 3)];
	this.instance_1.cache(-89,-42,178,85);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.1,-138.9,342,193.4);


(lib.cloud4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cloudin2();
	this.instance.setTransform(63.25,23);
	this.instance.filters = [new cjs.BlurFilter(8, 8, 3)];
	this.instance.cache(-76,-36,156,76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud4, new cjs.Rectangle(-22,-22,178,98), null);


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


(lib.milmo5bg = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cloudin1();
	this.instance.setTransform(-22.05,-75.1);
	this.instance.filters = [new cjs.BlurFilter(8, 8, 3)];
	this.instance.cache(-100,-141,346,197);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.2,-225,367,221);


(lib.submitbtn2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.submitbutton();
	this.instance.setTransform(0,-32.35,0.8099,0.8099);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282.9,-100.7,572,144);


(lib.submitbtn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.submitbutton();
	this.instance.setTransform(0,-32.35,0.8099,0.8099);

	this.instance_1 = new lib.submitbutton2();
	this.instance_1.setTransform(0,-32.35,0.8099,0.8099);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282.9,-100.7,572,144);


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

}).prototype = getMCSymbolPrototype(lib.slotanswerreveal2ndroundcopy2, new cjs.Rectangle(-679.9,-532.9,1362.6,12004.4), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSCMIAAhdIAFhsIAaAAIAGBsIAABdgAgShkIAAgnIAlAAIAAAng");
	this.shape.setTransform(-43.7,114.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSCMIAAgnIAmAAIAAAngAgNA+IgFhsIAAhdIAmAAIAABdIgHBsg");
	this.shape_1.setTransform(116.3,115.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAqCMIhSi9IAAC9IgoAAIAAkXIAoAAIBSC9IAAi9IAmAAIAAEXg");
	this.shape_2.setTransform(101.4,115.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhQCMIAAkXIChAAIAAAnIh6AAIAABSIBmAAIAAAmIhmAAIAABRIB6AAIAAAng");
	this.shape_3.setTransform(81.4,115.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTCMIAAkXIAnAAIAAEXg");
	this.shape_4.setTransform(67.5,115.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhXCMIAAkXIA4AAQAoAAAeAYQAdAXAAAhQAAAegdAVQAKAFAJAGQAeAYAAAhQAAAigeAXQgdAXgoAAgAgwBlIAlAAQAYAAASgMQASgMAAgRQAAgRgSgMQgSgLgYAAIglAAgAgwgSIASAAQAZAAARgNQARgLAAgRQAAgRgRgMQgRgMgaAAIgRAAg");
	this.shape_5.setTransform(52.85,115.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTCMIAAhUIg8jDIAnAAIAoCFIApiFIAnAAIg8DFIAABSg");
	this.shape_6.setTransform(23.075,115.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhGBuQgdgdAAgqIAAizIAnAAIAACzQAAAZASASQASASAYAAQAZAAASgSQASgSAAgZIAAizIAnAAIAACzQAAAqgdAdQgdAfgqAAQgpAAgdgfg");
	this.shape_7.setTransform(2.1,116.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABOCMIAAjmIg6DmIgnAAIg6jmIAADmIgnAAIAAkXIBDAAIAxDJIAzjJIBCAAIAAEXg");
	this.shape_8.setTransform(-23.525,115.95);

	this.text = new cjs.Text("correct", "100px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 116;
	this.text.lineWidth = 950;
	this.text.parent = this;
	this.text.setTransform(41.95,-37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#009900","#006600"],[0,1],1.8,-162.3,2.3,436.1).s().p("Ehj9A5nMAAAhzNMDH7AAAMAAABzNg");
	this.shape_9.setTransform(6.6,-52.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("Eg9hAcHMAAAg4NMB7DAAAMAAAA4Ng");
	this.shape_10.setTransform(0,-1.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.correctscreencopy, new cjs.Rectangle(-633.1,-421.7,1279.5,1311.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgSCMIAAhdIAFhsIAaAAIAGBsIAABdgAgShkIAAgnIAlAAIAAAng");
	this.shape.setTransform(-43.7,114.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSCMIAAgnIAmAAIAAAngAgNA+IgFhsIAAhdIAmAAIAABdIgHBsg");
	this.shape_1.setTransform(116.3,115.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAqCMIhSi9IAAC9IgoAAIAAkXIAoAAIBSC9IAAi9IAmAAIAAEXg");
	this.shape_2.setTransform(101.4,115.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhQCMIAAkXIChAAIAAAnIh6AAIAABSIBmAAIAAAmIhmAAIAABRIB6AAIAAAng");
	this.shape_3.setTransform(81.4,115.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTCMIAAkXIAnAAIAAEXg");
	this.shape_4.setTransform(67.5,115.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhXCMIAAkXIA4AAQAoAAAeAYQAdAXAAAhQAAAegdAVQAKAFAJAGQAeAYAAAhQAAAigeAXQgdAXgoAAgAgwBlIAlAAQAYAAASgMQASgMAAgRQAAgRgSgMQgSgLgYAAIglAAgAgwgSIASAAQAZAAARgNQARgLAAgRQAAgRgRgMQgRgMgaAAIgRAAg");
	this.shape_5.setTransform(52.85,115.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTCMIAAhUIg8jDIAnAAIAoCFIApiFIAnAAIg8DFIAABSg");
	this.shape_6.setTransform(23.075,115.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhGBuQgdgdAAgqIAAizIAnAAIAACzQAAAZASASQASASAYAAQAZAAASgSQASgSAAgZIAAizIAnAAIAACzQAAAqgdAdQgdAfgqAAQgpAAgdgfg");
	this.shape_7.setTransform(2.1,116.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABOCMIAAjmIg6DmIgnAAIg6jmIAADmIgnAAIAAkXIBDAAIAxDJIAzjJIBCAAIAAEXg");
	this.shape_8.setTransform(-23.525,115.95);

	this.text = new cjs.Text("correct", "100px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 116;
	this.text.lineWidth = 950;
	this.text.parent = this;
	this.text.setTransform(41.95,-37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#009900","#006600"],[0,1],1.8,-162.3,2.3,436.1).s().p("Ehj9A5nMAAAhzNMDH7AAAMAAABzNg");
	this.shape_9.setTransform(6.6,-52.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("Eg9hAcHMAAAg4NMB7DAAAMAAAA4Ng");
	this.shape_10.setTransform(0,-1.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.correctscreen, new cjs.Rectangle(-633.1,-421.7,1279.5,1311.1), null);


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
p.nominalBounds = new cjs.Rectangle(-680.1,-10362.3,1362.6,22001.5);


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
	this.instance = new lib.milmo5bg();
	this.instance.setTransform(441.85,-93.55,1.6823,1.6823,0,0,180,-23.9,-67);
	this.instance.alpha = 0.75;

	this.instance_1 = new lib.milmo5bg();
	this.instance_1.setTransform(-1045.4,24.85,1.6823,1.6823,0,0,0,-23.9,-67);
	this.instance_1.alpha = 0.75;
	this.instance_1.filters = [new cjs.BlurFilter(8, 8, 3)];
	this.instance_1.cache(-133,-227,371,225);

	this.instance_2 = new lib.cloud4();
	this.instance_2.setTransform(-21.2,162.45,2.731,2.731,0,0,0,63.2,23);
	this.instance_2.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1221.8,-344.4,1837.6999999999998,600.0999999999999);


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

	// lines
	this.instance = new lib.lineblur();
	this.instance.setTransform(62,-0.95,1.4601,1.4601,0,0,0,647.3,241.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// clouds
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(-270.85,47,1.5943,1.5943,0,0,0,0.1,0.1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// sun
	this.instance_2 = new lib.sunsetcopy();
	this.instance_2.setTransform(464.85,277.65,7.3512,7.3512,0,0,0,0.1,0.1);
	this.instance_2.shadow = new cjs.Shadow("rgba(254,254,152,1)",0,0,5);
	this.instance_2.filters = [new cjs.BlurFilter(15, 15, 2)];
	this.instance_2.cache(-65,-53,122,106);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.skybg();
	this.instance_3.setTransform(-3.75,-6.2,1.7332,1.7332,0,0,0,376.2,221.6);
	this.instance_3.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_3.cache(-3,-3,759,449);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.newthumbnail, new cjs.Rectangle(-638,-360,1277.6,719.8), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(107).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).wait(2));

	// Incorrect
	this.instance_1 = new lib.slotanswerreveal2ndroundcopy2();
	this.instance_1.setTransform(-0.2,167.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({y:-459.15},10,cjs.Ease.get(-1)).to({y:-6310.3},21).to({y:-10553.45},46,cjs.Ease.get(1)).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-680.1,-11086.3,1362.6,22725.5);


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

}).prototype = getMCSymbolPrototype(lib.slotanswerrevealcopy, new cjs.Rectangle(-639.7,-535.3,1284.9,12767.5), null);


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

}).prototype = getMCSymbolPrototype(lib.slotanswerreveal, new cjs.Rectangle(-639.7,-535.3,1284.9,12767.5), null);


// stage content:
(lib.Birds2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,659,667,685,795,889,904,1564,1572,1590,1684,1797];
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
	this.frame_659 = function() {
		function main() {
			var inputTF = document.getElementById("answerbox");
			inputTF.placeholder = "Enter Answer Here";
		}
		
		stage.on("drawend", main, this, true);
	}
	this.frame_667 = function() {
		this.submitbtn3.addEventListener("click", function (event) {
			console.log("Submit button was clicked!"); // <<< PLACE IT HERE
			var val = document.getElementById("answerbox").value;
		
			if (val.toLowerCase().trim() === "29" ||
				val.toLowerCase().trim() === "twenty-nine" ||
				val.toLowerCase().trim() === "twenty nine") {
				this.gotoAndPlay(687);
			} 
		
		else if (val === "") {
			this.gotoAndPlay(668);
		} 
		
		else {
				this.gotoAndPlay(797);
			}
		}.bind(this));
		
		function main() {
			var inputTF = document.getElementById("answerbox");
			inputTF.placeholder = "Enter Answer Here";
		}
		
		stage.on("drawend", main, this, true);
	}
	this.frame_685 = function() {
		this.gotoAndPlay(669);
	}
	this.frame_795 = function() {
		this.stop();
	}
	this.frame_889 = function() {
		this.rewatch_btn2.addEventListener("click", function(evt) {
		  this.gotoAndPlay(906);
		}.bind(this));
	}
	this.frame_904 = function() {
		this.stop();
	}
	this.frame_1564 = function() {
		function main() {
			var inputTF = document.getElementById("answerbox");
			inputTF.placeholder = "Enter Answer Here";
		}
		
		stage.on("drawend", main, this, true);
	}
	this.frame_1572 = function() {
		this.submitbtn3.addEventListener("click", function (event) {
			console.log("Submit button was clicked!"); // <<< PLACE IT HERE
			var val = document.getElementById("answerbox").value;
		
			if (val.toLowerCase().trim() === "29" ||
				val.toLowerCase().trim() === "twenty-nine" ||
				val.toLowerCase().trim() === "twenty nine") {
				this.gotoAndPlay(1592);
			} 
		
		else if (val === "") {
			this.gotoAndPlay(1573);
		} 
		
		else {
				this.gotoAndPlay(1686);
			}
		}.bind(this));
		
		function main() {
			var inputTF = document.getElementById("answerbox");
			inputTF.placeholder = "Enter Answer Here";
		}
		
		stage.on("drawend", main, this, true);
	}
	this.frame_1590 = function() {
		this.gotoAndPlay(1574);
	}
	this.frame_1684 = function() {
		this.stop();
	}
	this.frame_1797 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(659).call(this.frame_659).wait(8).call(this.frame_667).wait(18).call(this.frame_685).wait(110).call(this.frame_795).wait(94).call(this.frame_889).wait(15).call(this.frame_904).wait(660).call(this.frame_1564).wait(8).call(this.frame_1572).wait(18).call(this.frame_1590).wait(94).call(this.frame_1684).wait(113).call(this.frame_1797).wait(1));

	// CSS
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/style.css'});

	this.instance.setTransform(438.65,-674.3,1,1,0,0,0,50,11);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1797));

	// wrong
	this.rewatch_btn2 = new lib.rewatchbtn2copy();
	this.rewatch_btn2.name = "rewatch_btn2";
	this.rewatch_btn2.setTransform(645.05,629.85);
	new cjs.ButtonHelper(this.rewatch_btn2, 0, 1, 2, false, new lib.rewatchbtn2copy(), 3);

	this.instance_1 = new lib.Wrong("synched",0);
	this.instance_1.setTransform(639.2,356.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.rewatch_btn2}]},889).to({state:[]},16).to({state:[{t:this.instance_1}]},780).wait(113));

	// Incorrect
	this.instance_2 = new lib.slotanswerrevealcopy();
	this.instance_2.setTransform(639.8,527.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(796).to({_off:false},0).wait(16).to({y:-99.15},10,cjs.Ease.get(-1)).to({y:-5950.3},21).to({y:-9542.55},46,cjs.Ease.get(1)).to({_off:true},16).wait(893));

	// Correct__2nd_
	this.instance_3 = new lib.slotanswerreveal();
	this.instance_3.setTransform(639.8,527.7);
	this.instance_3._off = true;

	this.instance_4 = new lib.Correct2ndAttemptScreen("synched",0);
	this.instance_4.setTransform(639.65,357.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},686).to({state:[{t:this.instance_3}]},16).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},21).to({state:[{t:this.instance_3}]},46).to({state:[]},17).to({state:[{t:this.instance_4}]},795).to({state:[]},94).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(686).to({_off:false},0).wait(16).to({y:-99.15},10,cjs.Ease.get(-1)).to({y:-5950.3},21).to({y:-8824.05},46,cjs.Ease.get(1)).to({_off:true},17).wait(1002));

	// submit_button
	this.instance_5 = new lib.submitbtn2();
	this.instance_5.setTransform(662.3,31.25,0.6918,0.6918);
	this.instance_5._off = true;

	this.submitbtn3 = new lib.submitbtn();
	this.submitbtn3.name = "submitbtn3";
	this.submitbtn3.setTransform(662.3,426.8,0.6918,0.6918);
	new cjs.ButtonHelper(this.submitbtn3, 0, 1, 2, false, new lib.submitbtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},659).to({state:[{t:this.instance_5}]},7).to({state:[{t:this.submitbtn3}]},1).to({state:[]},19).to({state:[{t:this.instance_5}]},878).to({state:[{t:this.instance_5}]},7).to({state:[{t:this.submitbtn3}]},1).to({state:[]},19).wait(207));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(659).to({_off:false},0).to({y:426.25},7,cjs.Ease.get(1)).to({_off:true},1).wait(897).to({_off:false,y:31.25},0).to({y:426.25},7,cjs.Ease.get(1)).to({_off:true},1).wait(226));

	// Input_Section
	this.answerbox = new lib.inputbox();
	this.answerbox.name = "answerbox";
	this.answerbox.setTransform(660.8,-114.25);
	this.answerbox._off = true;

	this.timeline.addTween(cjs.Tween.get(this.answerbox).wait(659).to({_off:false},0).to({y:280.75},7,cjs.Ease.get(1)).wait(1).to({y:281.75},0).to({_off:true},19).wait(878).to({_off:false,y:-114.25},0).to({y:280.75},7,cjs.Ease.get(1)).wait(1).to({y:281.75},0).to({_off:true},19).wait(207));

	// Answer_Input
	this.instance_6 = new lib.inputbg();
	this.instance_6.setTransform(657.45,-59.15);
	this.instance_6.shadow = new cjs.Shadow("rgba(102,102,102,1)",3,3,20);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(659).to({_off:false},0).to({y:335.85},7,cjs.Ease.get(1)).wait(1).to({y:336.4},0).to({_off:true},19).wait(878).to({_off:false,y:-59.15},0).to({y:335.85},7,cjs.Ease.get(1)).wait(1).to({y:336.4},0).to({_off:true},19).wait(207));

	// Instructions
	this.instance_7 = new lib.instuctionsframe();
	this.instance_7.setTransform(646.15,374.1);

	this.instance_8 = new lib.QuestionFrame();
	this.instance_8.setTransform(646.15,374.1);

	this.instance_9 = new lib.questionbg();
	this.instance_9.setTransform(640,360);
	this.instance_9.alpha = 0.8516;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},1).to({state:[]},143).to({state:[{t:this.instance_8,p:{mode:"independent",startPosition:undefined}}]},375).to({state:[{t:this.instance_9}]},140).to({state:[]},27).to({state:[{t:this.instance_7}]},219).to({state:[]},144).to({state:[{t:this.instance_8,p:{mode:"synched",startPosition:0}}]},389).to({state:[{t:this.instance_9}]},126).to({state:[]},27).to({state:[]},69).wait(138));

	// lines
	this.instance_10 = new lib.lineblur();
	this.instance_10.setTransform(702,359.05,1.4601,1.4601,0,0,0,647.3,241.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(905).to({_off:false},0).to({_off:true},686).wait(207));

	// cloud
	this.instance_11 = new lib.cloud4();
	this.instance_11.setTransform(-809.95,477.5,14.6662,14.6662,0,0,0,62.9,22.9);
	this.instance_11.alpha = 0.75;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1188).to({_off:false},0).to({x:2246.35},18).to({_off:true},1).wait(591));

	// bird
	this.instance_12 = new lib.eaglefly1("synched",0);
	this.instance_12.setTransform(2321.55,349.3);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween2("synched",0);
	this.instance_13.setTransform(1971.55,349.3);
	this.instance_13._off = true;

	this.instance_14 = new lib.eagles3("synched",0);
	this.instance_14.setTransform(1971.55,349.3);
	this.instance_14._off = true;

	this.instance_15 = new lib.eagle4("synched",0);
	this.instance_15.setTransform(2403.25,389.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1053).to({_off:false},0).to({x:121.9,y:342.5},55).to({_off:true},1).wait(689));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1143).to({_off:false},0).to({x:-540.1,y:342.5},60).to({_off:true},1).wait(594));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1248).to({_off:false},0).to({x:-190,y:342.65,startPosition:5},55).to({_off:true},1).wait(494));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1348).to({_off:false},0).to({x:239.25,startPosition:5},56).to({_off:true},1).wait(393));
	this.instance_12.addEventListener("tick", AdobeAn.handleFilterCache);
	this.instance_13.addEventListener("tick", AdobeAn.handleFilterCache);
	this.instance_14.addEventListener("tick", AdobeAn.handleFilterCache);
	this.instance_15.addEventListener("tick", AdobeAn.handleFilterCache);

	// clouds
	this.instance_16 = new lib.Tween1("synched",0);
	this.instance_16.setTransform(369.15,407,1.5943,1.5943,0,0,0,0.1,0.1);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(905).to({_off:false},0).to({x:1835.25,y:424.55},499).to({x:1868.55,y:425},34,cjs.Ease.get(0.1)).to({_off:true},153).wait(207));

	// sun
	this.instance_17 = new lib.sunsetcopy();
	this.instance_17.setTransform(1104.85,637.65,7.3512,7.3512,0,0,0,0.1,0.1);
	this.instance_17.shadow = new cjs.Shadow("rgba(254,254,152,1)",0,0,5);
	this.instance_17._off = true;
	this.instance_17.filters = [new cjs.BlurFilter(15, 15, 2)];
	this.instance_17.cache(-65,-53,122,106);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(905).to({_off:false},0).wait(499).to({x:1084.85},34).to({_off:true},153).wait(207));

	// bg
	this.instance_18 = new lib.skybg();
	this.instance_18.setTransform(636.25,353.8,1.7332,1.7332,0,0,0,376.2,221.6);
	this.instance_18._off = true;
	this.instance_18.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_18.cache(-3,-3,759,449);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(905).to({_off:false},0).to({_off:true},686).wait(207));

	// lines
	this.instance_19 = new lib.lineblur();
	this.instance_19.setTransform(702,359.05,1.4601,1.4601,0,0,0,647.3,241.6);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({_off:false},0).to({_off:true},685).wait(1112));

	// cloud
	this.instance_20 = new lib.cloud4();
	this.instance_20.setTransform(-809.95,477.5,14.6662,14.6662,0,0,0,62.9,22.9);
	this.instance_20.alpha = 0.75;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(284).to({_off:false},0).to({x:2246.35},18).to({_off:true},1).wait(1495));

	// bird
	this.instance_21 = new lib.eaglefly1("synched",0);
	this.instance_21.setTransform(2321.55,349.3);
	this.instance_21._off = true;

	this.instance_22 = new lib.Tween2("synched",0);
	this.instance_22.setTransform(1971.55,349.3);
	this.instance_22._off = true;

	this.instance_23 = new lib.eagles3("synched",0);
	this.instance_23.setTransform(1971.55,349.3);
	this.instance_23._off = true;

	this.instance_24 = new lib.eagle4("synched",0);
	this.instance_24.setTransform(2403.25,389.3);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(149).to({_off:false},0).to({x:121.9,y:342.5},55).to({_off:true},1).wait(1593));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(239).to({_off:false},0).to({x:-540.1,y:342.5},60).to({_off:true},1).wait(1498));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(344).to({_off:false},0).to({x:-190,y:342.65,startPosition:5},55).to({_off:true},1).wait(1398));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(444).to({_off:false},0).to({x:239.25,startPosition:5},56).to({_off:true},1).wait(1297));
	this.instance_21.addEventListener("tick", AdobeAn.handleFilterCache);
	this.instance_22.addEventListener("tick", AdobeAn.handleFilterCache);
	this.instance_23.addEventListener("tick", AdobeAn.handleFilterCache);
	this.instance_24.addEventListener("tick", AdobeAn.handleFilterCache);

	// clouds
	this.instance_25 = new lib.Tween1("synched",0);
	this.instance_25.setTransform(369.15,407,1.5943,1.5943,0,0,0,0.1,0.1);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1).to({_off:false},0).to({x:1835.25,y:424.55},499).to({x:1868.55,y:425},34,cjs.Ease.get(0.1)).to({_off:true},152).wait(1112));

	// sun
	this.instance_26 = new lib.sunsetcopy();
	this.instance_26.setTransform(1104.85,637.65,7.3512,7.3512,0,0,0,0.1,0.1);
	this.instance_26.shadow = new cjs.Shadow("rgba(254,254,152,1)",0,0,5);
	this.instance_26._off = true;
	this.instance_26.filters = [new cjs.BlurFilter(15, 15, 2)];
	this.instance_26.cache(-65,-53,122,106);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({_off:false},0).wait(499).to({x:1084.85},34).to({_off:true},152).wait(1112));

	// bg
	this.instance_27 = new lib.skybg();
	this.instance_27.setTransform(636.25,353.8,1.7332,1.7332,0,0,0,376.2,221.6);
	this.instance_27._off = true;
	this.instance_27.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_27.cache(-3,-3,759,449);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(1).to({_off:false},0).to({_off:true},685).wait(1112));

	// playbtn
	this.play_btn = new lib.playbuttonbutton();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(629.85,371.95);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.playbuttonbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).to({_off:true},1).wait(1797));

	// thumnail
	this.instance_28 = new lib.newthumbnail();
	this.instance_28.setTransform(638,360,1.0344,1.0344);
	var instance_28Filter_1 = new cjs.ColorFilter(0.6,0.6,0.6,1,0,0,0,0);
	this.instance_28.filters = [instance_28Filter_1];
	this.instance_28.cache(-640,-362,1282,724);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({_off:true},1).wait(1797));
	this.timeline.addTween(cjs.Tween.get(instance_28Filter_1).wait(1797));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1114.4,-10369.8,4324.200000000001,23129.699999999997);
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
		{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"},
		{src:"components/ui/src/css.js", id:"an.CSS"}
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
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
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