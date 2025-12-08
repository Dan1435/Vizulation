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


(lib.wall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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



(lib.table = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#7F5100").ss(0.1,1,1).p("Eg/CghyMg8WAbnMAAAAn+MD1iAAAMABPhDlg");
	this.shape.setTransform(0,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B95C00","#793D00"],[0,1],0,-293.9,0,294).s().p("Eh7YAhyMAAAgn9MA8WgbmMC6bAAAMgBQBDjg");
	this.shape_1.setTransform(0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.table, new cjs.Rectangle(-790.7,-211.2,1581.4,434.5), null);


(lib.silvercoin = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666666").ss(0.1,1,1).p("AKOgqQgHlfjzjPQjfi9kUA6Qj5A0ihDkQiVDVABEKQAAEPCYDIQClDZD/AaQEcAdDbjdQDujvgGlhg");
	this.shape.setTransform(-3.7929,0.7804);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DFDFE4","#C1C0C6"],[0,1],70.1,0.9,-57.5,0.9).s().p("AhRLmQj/gailjZQiYjIAAkPQgBkKCVjVQChjkD5g0QEUg6DfC9QDzDPAHFfQAGFhjuDvQjCDDj0AAQggAAghgDg");
	this.shape_1.setTransform(-3.7929,0.7804);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(0.1,1,1).p("AHjr0QjViqj4AGQhRADhUAWQkuBJi/EYQivECAAFAQgBFDCzD1QDFELE3ArQA0AHA0AAQAhAAAigDQD9gWDTjKQE3krgKnCQgLnAk9j9g");
	this.shape_2.setTransform(0.8138,-0.0869);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#DFDFE4","#C1C0C6"],[0,1],80.1,1.1,-76.8,1.1).s().p("Ah9OSQk3grjFkLQizj1ABlDQAAlACvkCQC/kYEuhJQBUgWBRgDQD4gGDVCqQE9D9ALHAQAKHCk3ErQjTDKj9AWQgiADghAAQg0AAg0gHg");
	this.shape_3.setTransform(0.8138,-0.0869);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#787685").s().p("Ah8OMQkzgqjCkLQiwjzAAlBQAAk/CtkAQC8kWErhJQBTgVBPgCQD2gHDTCqQE6D6AKG+QAKHAk0EoQjRDIj6AXQggADggAAQg0AAg1gHg");
	this.shape_4.setTransform(17.5392,-1.0278);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.silvercoin, new cjs.Rectangle(-81.3,-93.1,179.1,186.1), null);


(lib.shadowshade = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.149)").s().p("EghPAHoQtxizAAkNQAAkMNxjKQNyjKTdgRQTfgQNxCyQNxCzAAENQAAEMtxDKQtxDLzfAQIjPABQxZAAsnijg");
	this.shape.setTransform(0,-0.0002);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shadowshade, new cjs.Rectangle(-300.9,-65.1,601.8,130.3), null);


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
	this.text = new cjs.Text("how many silver coins fell into the piggy bank?", "100px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 116;
	this.text.lineWidth = 1054;
	this.text.parent = this;
	this.text.setTransform(-0.05,-212.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.questiontext, new cjs.Rectangle(-529.1,-214.9,1058.2,429.9), null);


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
	this.text = new cjs.Text("count the silver \ncoins that fall in \nthe piggy bank.", "100px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 116;
	this.text.lineWidth = 1054;
	this.text.parent = this;
	this.text.setTransform(-0.05,-237.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.instructionstext, new cjs.Rectangle(-529.1,-239.6,1058.2,465.4), null);


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


(lib.goldcoin = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("Ag6HjIgBgBIgBAAQgOgKgNgMIgSgPQieiOgUjlIgBgFQgTjlCAi1IABgCIATgZIAUgYIABgBIABgBQCJigDJgRIABAGQi1Ahh9CgIgBACQgTAYgPAYQhwCtASDWQARDWCJCKQATAUAWASQCQB5CxgKQgoAGgnAAQiQAAh6hZg");
	this.shape.setTransform(-20.8978,-4.1759);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD806").s().p("Ak9HNQiwiSgVj2QgUj1CVi/QCSi6DagSQDRgRCdCWQCZCTARDiQARDgh/C2QiCC7jPAlQguAIgrAAQiiAAiGhwg");
	this.shape_1.setTransform(2.132,-4.2486);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AmQJPQjli5gak9QgDgnAAgkQgBkPCrjXQC8jtEZgTQEKgSDGDAQC+C8AWEcQAVEaifDmQijDtkFAzQg/AMg7AAQjKAAiriLg");
	this.shape_2.setTransform(0.7228,-4.1783);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8B31D").s().p("AmHJJQjfi4gak5Qgak5C+jyQC3jpESgTQEEgSDBC+QC7C5AVEZIACBCQAADwiJDJQifDrkAAxQg9AMg5AAQjHAAimiJg");
	this.shape_3.setTransform(14.2932,-4.9048);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.goldcoin, new cjs.Rectangle(-65.2,-77.2,143.9,146.10000000000002), null);


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


(lib.rewatchpuzzletxtcopy3 = function(mode,startPosition,loop,reversed) {
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


(lib.btnbggraycopy3 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("light's\nout!", "200px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 230;
	this.text.lineWidth = 950;
	this.text.parent = this;
	this.text.setTransform(0,-462.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.answerrevealtext, new cjs.Rectangle(-476.8,-464.4,953.7,928.8), null);


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


(lib.blurshade = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.047)").s().p("EAFMAmfQiHiZh+kbQDOBaBliQQCQFBCWCpQCVCpCfA5QhVAchbAAQj3AAjhj+gEgkkAmqQijhfg1hkIieieQkZk9i0mBQhxjxhJj+IA3gQQirhcAzncQgMh/gFhxIAHAkQgVn7AtjCQBynrEjmXQDfk5E7jYQGvkkHri7QGcifG4g7QCqgVCqgGIAAAbQm4A7mcCfQnrC7mvEkQk7DYjfE5QkjGXhyHrQhiGjCKQGIALAoQBJD+BxDxIAQAjQCxFtEMEuIgCgCIAIAJIABABIAIAJQAMANAOALIB1B1QA1BkCjBfQBjA5BeAbQhbAXhaAAQimAAi6hrgEAatAkzIgjgUQijhggHiBIgIgCIAAgBQASgxANgyQCmgsC3hLIAKAXQgHAwgMAwQgNAygSAxIAAABIAIACQAHCBCjBgQA9AkBCAWQhIAfhFAAQiZAAiKhFgEgLMAhbIjyAMQipgHingUQk0glkuhRIIIjIQMBEpGnAzQCiAThMAAQhjAAn/gigEAoUASwIgBgEQgbhagLguQgXheAAhpQAAl/D3khQDvkXFphEIASgMIAAABQAhAvAcAwQjABbiTCsQj3EhAAF/QAABpAXBeQALAuAbBaIAAACIgEABIgDgBIABACQhUAXhUAAQhTAAhSgXgEAjbgAMQAjhGBSg6QBahBBsgaIFUAAQhsAahaBBQhSA6gjBGg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blurshade, new cjs.Rectangle(-344.4,-271.7,688.9,543.5), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.149)").s().p("EiMDgX5IgGhxIhCAJIAAgSIBBABIAA0QMEWiAAAUAFhA5tgFSAiYUhJJhcHjNhAWLg");
	this.shape.setTransform(291.5416,-74.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB039").s().p("Eiiog49MFFRAAAMAAABowMlFRAJLg");
	this.shape_1.setTransform(428.75,-28.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.149)").s().p("EhLFAQLMAAAggVMCWLAAAMAAAAgVg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-612.1,-393.5,2081.8,729.2), null);


(lib.answerrevealtext_1 = function(mode,startPosition,loop,reversed) {
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
	this.text_1 = new cjs.Text("good \nluck!", "200px 'Zerove'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 230;
	this.text_1.lineWidth = 950;
	this.text_1.parent = this;
	this.text_1.setTransform(0,-462.4);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.answerrevealtext_1, new cjs.Rectangle(-476.8,-464.4,953.7,928.8), null);


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

	// Layer_3
	this.text = new cjs.Text("18", "500px 'Zerove'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 571;
	this.text.lineWidth = 686;
	this.text.parent = this;
	this.text.setTransform(43.3,-431.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.answerreveal, new cjs.Rectangle(-301.6,-433.3,689.9000000000001,1032.8), null);


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
	this.instance = new lib.rewatchpuzzletxt();
	this.instance.setTransform(-2.95,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7));

	// Layer_1
	this.instance_1 = new lib.btnbggray();
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
	this.instance_1 = new lib.btnbg();
	this.instance_1.shadow = new cjs.Shadow("#333333",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.submitbutton, new cjs.Rectangle(-344.9,-79.9,696,167), null);


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
p.nominalBounds = new cjs.Rectangle(-738.1,-434.1,1476.3000000000002,1386.8000000000002);


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

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApED+Qg+gtAChGQgChIA/g0QA6gyBRAAQBLgCAzAsQAwArAABAQgBA+gxAyQg1AzhKAKIgaACQg/AAgwgjgAHGhHQgjgoACg2QABg2AkgkQAjgkAvAEQAsADAeAnQAdAkgCAzQgCAwgfAlQggAkgsACQgvAAgfgkg");
	this.shape.setTransform(183.108,23.9315);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkBEgQgtgvABhaQgChhAvhRQAvhUBCgLQA3gPAnA3QAgA0gDBUQgFBQgnBGQgpBJg0AaQgcAKgWABQgdgFgVgVgACAAfQgZgsAGhPQAFhWAohBQAhhAApgFQAogIAUA0QALAeADAqIgCAzQgIBGggA6QgfA6gjAQQgMAEgKAAQgbAAgRgeg");
	this.shape_1.setTransform(269.2209,111.1158);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FAA0AE").ss(0.1,1,1).p("AsqgEQDwgYDxgGQCigECiAFQChAGCjAMQCRAMCRARQBlALBlAM");
	this.shape_2.setTransform(-68.1,-161.2342);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDDADF").s().p("AspK2IAA1fQDwgYDwgGQCigECiAFQChAGCiAMQCSAMCQASIDLAXIpkVJg");
	this.shape_3.setTransform(-68.1,-93.5092);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_12
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FAA0AE").ss(0.1,1,1).p("AucBXIBzicQEug3ExgEQIzgGIvBMIAFACIAAABIgFADIgCACIjdCzAOYg0IAFgE");
	this.shape_4.setTransform(-56.7,-170.4755);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D1800").s().p("ACSBLQoWgooVA0IBzicQEtg3ExgEQIzgGIvBMIgCAIIjdCzQkVgjkUgTg");
	this.shape_5.setTransform(-56.95,-170.4755);

	var maskedShapeInstanceList = [this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer_13
	this.instance = new lib.blurshade();
	this.instance.setTransform(-45.45,59.15);
	this.instance.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance.cache(-346,-274,693,548);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_14
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FAA0AE").ss(0.1,1,1).p("AmFHIQAmljCPjZQCSjcEIhkIA5gUQBkBlAZCvQAPBpgaEn");
	this.shape_6.setTransform(74.0096,-95.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FDDADF","#FCC0C9"],[0,1],23.1,27.7,3,-47.5).s().p("Al2G8IgFAMIgKgBQAmljCPjZQCSjcEIhkIA5gUQBkBlAZCvQAPBpgaEnIrqDvg");
	this.shape_7.setTransform(74.0096,-95.825);

	var maskedShapeInstanceList = [this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Layer_15
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FAA0AE").ss(0.1,1,1).p("ADbx0QADh2BgihQBeicCWiRQFhlUE5AAQAiAABFAXQAQAFAMAFIABAAQAAAAABAAQAAABABAAQAhAMAGAGAVE/DQgBABgBAAEAwmgDmQg1kShjjUQj/okmGnMQiyjRjTiiQjui3kZh5QoSjlpwg8Qnwg8n1A8Qm4A8mcCfQnrC7mvEkQk7DXjfE6QkjGXhyHqQh3H+BIIGQBGH1DWHIQC0GBEZE9IAEAEIACACQAAABABABIgDgEIgGgHIACADALyxEQgBABAAACAL7xAQAAgBABgCEArSgEaIFSBAIDZAoQADAFADAEQAAABABAAQD/Fng9HKQgPB5hWBbQjcDtk1BcQi4A/i3gzQgFgBgDgBQgbgKgbgJEAoXgDmIg0AAQhsAahaBBQhSA7gjBGQgDAEgBAGQAAAAAAAAIAAAAIAAAAEAzygCdQlpBEjvEYQj3EgAAF/QAABqAXBeQALAuAbBaQAAACABACEAlwAYfQgXAHgZAHQkaBGkfgeQgqgGgqgFAXEfZQAMgwAHgwEAAvAguQBUDJCWCpQDhD/D3AAQEnAADfkpQBziYA7ihIAAAAQASgyANgyEApDAW1QAHAhAABFQAAD2jlEvQjuE6jaAAQitAAiZhZQijhggHiBEAlwAYfQjTCckNB4Qj1BujXA4EApDAW1QhSA5hUAhQgWAJgXAHEAtQASmQiBCsiMBjAB9OYQBdElBkCSQCUDUDqAnA+jfXQEuBRE0AlQDKAYDMAGQHwAMHqhJEgrGAhTQAEAEAEAEQAMANAOALIgpgoEgVFAhqQgeCgjiCIQjcCFjWAAQimAAi6hrQijhfjVkFAAUfsQAMAiAPAg");
	this.shape_8.setTransform(-40.3192,59.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FDDADF","#FCC0C9"],[0,1],-0.5,-45.6,77.4,-45.6).s().p("AgEABIAAgCIAJABIAAACg");
	this.shape_9.setTransform(35.525,-50.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FDDADF","#FCC0C9"],[0,1],-0.5,-13.7,-16.8,-74.7).s().p("AgEAAIAAAAIAJAAg");
	this.shape_10.setTransform(35.5,-49.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCC0C9").s().p("AtkS4QijhggGiBIgIgDQASgxANgyQDWg5D1htQENh5DTibQAYgIAVgIQBUgiBRg4QAIAgAABFQAAD2jkEvQjvE6jZAAQiuAAiZhZgAAlBJIgBgEQgahZgLguQgXheAAhpQAAl/D2khQDwkYFphEIARgLQEAFog9HJQgQB6hWBbQjbDtk2BbQhlAihlAAQhTAAhSgXg");
	this.shape_11.setTransform(208.8378,171.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FDDADF").s().p("EAGAAmgQiWiphUjJQgPgggMgiQAMAiAPAgQnqBJnwgMQjMgGjKgYQk0glkuhRQEuBRE0AlIgEAdQgeCgjiCIQjcCFjWAAQimAAi6hrQijhfjVkFIAGAHIACACIABACIAIAIQAMANAOALIgpgoQkZk9i0mBQjWnIhGn1QhIoGB3n+QBynqEjmXQDfk6E7jXQGvkkHri7QGcifG4g8QH1g8HwA8QJwA8ISDlQEZB5DuC3QDTCiCyDRQGGHMD/IkQBjDUA1ESIgCAMIlShAIFSBAIDZAoIAGAJIABABIgSALQlpBEjvEYQj3EgAAF/QAABqAXBeQALAuAbBaIgHACIAIACQC3AzC4g/QiBCsiMBjQhSA5hUAhQgWAJgXAHIgwAOIgOADIgBABQi+AtjBAAIAAAAIAAAAQhTAAhUgIIgEgBIhUgLIBUALIAEABQBUAIBTAAIAAAAIAAAAQDBAAC+gtIABgBIAOgDIAwgOQjTCckNB4Qj1BujXA4QAMgwAHgwQgHAwgMAwQgNAygSAyIAAAAQg7ChhzCYQjfEpknAAQj3AAjhj/gAGlVPQCUDUDqAnQjqgniUjUQhkiShdklQBdElBkCSgEApAASwIg2gTIA2ATgEAkLAAAIAAAAIAEgKQAjhGBSg7QBahBBsgaIA0AAIg0AAQhsAahaBBQhSA7gjBGIgEAKIAAAAIAAAAgANxv6IAHgBQgFgEgDgDgANYxBIABABIAJAAIABgDIgKgBIgBADgAKZ64QiWCRheCcQhgChgDB2QADh2BgihQBeicCWiRQFhlUE5AAQAiAABFAXIAcAKIABAAIABAAIABABQAhAMAGAGQgGgGghgMIgBgBIgBAAIgBAAIgcgKQhFgXgiAAQk5AAlhFUgAWp/CIACgBIgCABgEgTaAhNIAAAAgEACWAguIAAAAgEAkLAAAIAAAAIAAAAgEAkLAAAIAAAAg");
	this.shape_12.setTransform(-50.6321,59.025);

	var maskedShapeInstanceList = [this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer_16
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FAA0AE").ss(0.1,1,1).p("AAvlYQhaBNgqA5QhCBZAABgQAACOBsBvQBYBaBqAbg");
	this.shape_13.setTransform(-391.3,115.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FDDADF").s().p("AgrDkQhshvABiOQgBhgBChZQAqg5BahNIBpKxQhrgbhYhag");
	this.shape_14.setTransform(-391.3,115.425);

	var maskedShapeInstanceList = [this.shape_13,this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// Layer_17
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FAA0AE").ss(0.1,1,1).p("AEPIAQA8iNAqiRQAziyAJi2QAKjOhyioQi+gsivBTQhLAkhIAnQiJBMhxBtID6HBAE9n0QiOBjhzCEQhzCGhFChQgsBngPBvIHCEXIABAAIgCADQAEACAFAAIgEgMIgDAHIAHAF");
	this.shape_15.setTransform(181.9655,-130.5342);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FDDADF","#FCC0C9"],[0,1],-8,29.7,7.9,-29.8).s().p("Ak0DrQAPhvAshnQBFihB0iGQByiDCOhkIAMgIQByCogKDOQgJC2gzCyQgqCRg8CNIgEAHg");
	this.shape_16.setTransform(194.4655,-130.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDDADF").s().p("Al9hCQBxhtCKhMQBIgnBJgkQCxhUC+AsIgNAJQiOBjhzCEQhyCEhGCiQgrBngPBvg");
	this.shape_17.setTransform(176.75,-144.7592);

	var maskedShapeInstanceList = [this.shape_15,this.shape_16,this.shape_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// Layer_18
	this.instance_1 = new lib.wall();
	this.instance_1.setTransform(2.15,78.1);
	this.instance_1.alpha = 0.8516;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_22
	this.instance_2 = new lib.shadowshade();
	this.instance_2.setTransform(-59.2,278.3);
	this.instance_2.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_2.cache(-303,-67,606,134);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_23
	this.instance_3 = new lib.table();
	this.instance_3.setTransform(17.75,225.4);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_24
	this.instance_4 = new lib.bg();
	this.instance_4.setTransform(-187.6,-80.95,0.7997,0.7997);
	this.instance_4.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_4.cache(-614,-395,2086,733);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.newthumbnail, new cjs.Rectangle(-638,-360,1277.6,719.8), null);


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
	this.instance = new lib.answerrevealtext_1();
	this.instance.setTransform(55,174.55);
	this.instance.shadow = new cjs.Shadow("#333333",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#666666","#333333"],[0,1],4,-113.9,4,345.9).s().p("Ehj9A4ZMAAAhwxMDH7AAAMAAABwxg");
	this.shape.setTransform(32,-74.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Eg9hAcHMAAAg4NMB7DAAAMAAAA4Ng");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.letsseehowyoudid, new cjs.Rectangle(-607.7,-435.8,1279.5,1100), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({y:23.65},10,cjs.Ease.get(1)).wait(86).to({y:683.65},13,cjs.Ease.get(1)).to({_off:true},4).wait(18));

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
p.nominalBounds = new cjs.Rectangle(-738.1,-434.1,1476.3000000000002,1397.2);


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


(lib.replaybutton2copy = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.rewatchpuzzletxtcopy3();
	this.instance.setTransform(-2.95,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0531,scaleY:1.0531,x:-3.1,y:-2.7},3).wait(1));

	// Layer_1
	this.instance_1 = new lib.btnbggraycopy3();
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


(lib.letsseehowyoudid_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.answerrevealtext();
	this.instance_1.setTransform(55,183.1);
	this.instance_1.shadow = new cjs.Shadow("#333333",3,3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#666666","#333333"],[0,1],4,-113.9,4,345.9).s().p("Ehj9A4ZMAAAhwxMDH7AAAMAAABwxg");
	this.shape_2.setTransform(32,-46.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("Eg9hAcHMAAAg4NMB7DAAAMAAAA4Ng");
	this.shape_3.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.letsseehowyoudid_1, new cjs.Rectangle(-607.7,-407.8,1279.5,1081.5), null);


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

}).prototype = getMCSymbolPrototype(lib.slotanswerreveal2ndroundcopy2, new cjs.Rectangle(-679.9,-554.1,1362.6,12025.6), null);


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
	this.instance = new lib.replaybuttoncopy();
	this.instance.setTransform(0,-32.35,0.8099,0.8099);

	this.instance_1 = new lib.replaybutton2copy();
	this.instance_1.setTransform(0,-32.35,0.8099,0.8099);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282.9,-100.7,572,189.9);


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
	this.text = new cjs.Text("You tracked it like a pro.", "40px 'Zerove'", "#FFFFFF");
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
p.nominalBounds = new cjs.Rectangle(-680.1,-10383.5,1362.6,22022.7);


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
	this.instance = new lib.answerreveal();
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
p.nominalBounds = new cjs.Rectangle(-680.1,-11107.5,1362.6,22746.7);


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
	this.instance = new lib.letsseehowyoudid_1();
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

}).prototype = getMCSymbolPrototype(lib.slotanswerreveal, new cjs.Rectangle(-639.7,-527.6,1314.9,12759.800000000001), null);


// stage content:
(lib.PiggyBank2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,606,614,650,760,854,869,1475,1483,1519,1613,1726];
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
	this.frame_606 = function() {
		function main() {
			var inputTF = document.getElementById("answerbox");
			inputTF.placeholder = "Enter Answer Here";
		}
		
		stage.on("drawend", main, this, true);
	}
	this.frame_614 = function() {
		this.submitbtn.addEventListener("click", function (event) {
			console.log("Submit button was clicked!"); // <<< PLACE IT HERE
			var val = document.getElementById("answerbox").value;
		
			if (val.toLowerCase().trim() === "18" ||
				 val.toLowerCase().trim() === "eighteen" ||
				 val.toLowerCase().trim() === "Eighteen") {
				this.gotoAndPlay(652);
			} 
		else if (val === "") {
			this.gotoAndPlay(616);
		}
			
		else {
				this.gotoAndPlay(762);
			}
		}.bind(this));
		
		function main() {
			var inputTF = document.getElementById("answerbox");
			inputTF.placeholder = "Enter Answer Here";
		}
		
		stage.on("drawend", main, this, true);
	}
	this.frame_650 = function() {
		this.gotoAndPlay(617);
	}
	this.frame_760 = function() {
		this.stop();
	}
	this.frame_854 = function() {
		this.rewatch_btn.addEventListener("click", handleClick.bind(this));
		
		function handleClick(evt) {
		  
		if (evt.currentTarget === this.rewatch_btn) {
		    this.gotoAndPlay(871);
		}
		}
	}
	this.frame_869 = function() {
		this.stop();
	}
	this.frame_1475 = function() {
		function main() {
			var inputTF = document.getElementById("answerbox");
			inputTF.placeholder = "Enter Answer Here";
		}
		
		stage.on("drawend", main, this, true);
	}
	this.frame_1483 = function() {
		this.submitbtn2.addEventListener("click", function (event) {
			console.log("Submit button was clicked!"); // <<< PLACE IT HERE
			var val = document.getElementById("answerbox").value;
		
			if (val.toLowerCase().trim() === "18" ||
				 val.toLowerCase().trim() === "eighteen" ||
				 val.toLowerCase().trim() === "Eighteen") {
				this.gotoAndPlay(1521);
			} 
		else if (val === "") {
			this.gotoAndPlay(1485);
		}
			
		else {
				this.gotoAndPlay(1615);
			}
		}.bind(this));
		
		function main() {
			var inputTF = document.getElementById("answerbox");
			inputTF.placeholder = "Enter Answer Here";
		}
		
		stage.on("drawend", main, this, true);
	}
	this.frame_1519 = function() {
		this.gotoAndPlay(1485);
	}
	this.frame_1613 = function() {
		this.stop();
	}
	this.frame_1726 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(606).call(this.frame_606).wait(8).call(this.frame_614).wait(36).call(this.frame_650).wait(110).call(this.frame_760).wait(94).call(this.frame_854).wait(15).call(this.frame_869).wait(606).call(this.frame_1475).wait(8).call(this.frame_1483).wait(36).call(this.frame_1519).wait(94).call(this.frame_1613).wait(113).call(this.frame_1726).wait(1));

	// Wrong
	this.instance = new lib.Wrong("synched",0);
	this.instance.setTransform(639.2,359.85);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1614).to({_off:false},0).wait(113));

	// Correct__2nd_
	this.instance_1 = new lib.Correct2ndAttemptScreen("synched",0);
	this.instance_1.setTransform(639.65,359.85);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1520).to({_off:false},0).to({_off:true},94).wait(113));

	// Rewatch_Puzzle_btn
	this.rewatch_btn = new lib.rewatchbtn2();
	this.rewatch_btn.name = "rewatch_btn";
	this.rewatch_btn.setTransform(645.05,629.85);
	this.rewatch_btn._off = true;
	new cjs.ButtonHelper(this.rewatch_btn, 0, 1, 2, false, new lib.rewatchbtn2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rewatch_btn).wait(854).to({_off:false},0).to({_off:true},16).wait(857));

	// Incorrect
	this.instance_2 = new lib.slotanswerreveal();
	this.instance_2.setTransform(639.8,527.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(761).to({_off:false},0).wait(16).to({y:-99.15},10,cjs.Ease.get(-1)).to({y:-5950.3},21).to({y:-9542.55},46,cjs.Ease.get(1)).to({_off:true},16).wait(857));

	// Correct
	this.instance_3 = new lib.slotanswerreveal();
	this.instance_3.setTransform(639.8,527.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(651).to({_off:false},0).wait(16).to({y:-99.15},10,cjs.Ease.get(-1)).to({y:-5950.3},21).to({y:-8824.05},46,cjs.Ease.get(1)).to({_off:true},17).wait(966));

	// submit_btn
	this.instance_4 = new lib.submitbtn2();
	this.instance_4.setTransform(662.3,31.25,0.6918,0.6918);
	this.instance_4._off = true;

	this.submitbtn = new lib.submitbtn();
	this.submitbtn.name = "submitbtn";
	this.submitbtn.setTransform(662.3,426.8,0.6918,0.6918);
	new cjs.ButtonHelper(this.submitbtn, 0, 1, 2, false, new lib.submitbtn(), 3);

	this.submitbtn2 = new lib.submitbtn();
	this.submitbtn2.name = "submitbtn2";
	this.submitbtn2.setTransform(662.3,426.8,0.6918,0.6918);
	new cjs.ButtonHelper(this.submitbtn2, 0, 1, 2, false, new lib.submitbtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},606).to({state:[{t:this.instance_4}]},7).to({state:[{t:this.submitbtn}]},1).to({state:[]},37).to({state:[{t:this.instance_4}]},824).to({state:[{t:this.instance_4}]},7).to({state:[{t:this.submitbtn2}]},1).to({state:[]},37).wait(207));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(606).to({_off:false},0).to({y:426.25},7,cjs.Ease.get(1)).to({_off:true},1).wait(861).to({_off:false,y:31.25},0).to({y:426.25},7,cjs.Ease.get(1)).to({_off:true},1).wait(244));

	// Input_Section
	this.answerbox = new lib.inputbox();
	this.answerbox.name = "answerbox";
	this.answerbox.setTransform(660.8,-114.25);
	this.answerbox._off = true;

	this.timeline.addTween(cjs.Tween.get(this.answerbox).wait(606).to({_off:false},0).to({y:280.75},7,cjs.Ease.get(1)).wait(1).to({y:281.75},0).to({_off:true},37).wait(824).to({_off:false,y:-114.25},0).to({y:280.75},7,cjs.Ease.get(1)).wait(1).to({y:281.75},0).to({_off:true},37).wait(207));

	// Answer_Input
	this.instance_5 = new lib.inputbg();
	this.instance_5.setTransform(657.45,-59.15);
	this.instance_5.shadow = new cjs.Shadow("#666666",3,3,20);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(606).to({_off:false},0).to({y:335.85},7,cjs.Ease.get(1)).wait(1).to({y:336.4},0).to({_off:true},37).wait(824).to({_off:false,y:-59.15},0).to({y:335.85},7,cjs.Ease.get(1)).wait(1).to({y:336.4},0).to({_off:true},37).wait(207));

	// Instructions
	this.instance_6 = new lib.instuctionsframe();
	this.instance_6.setTransform(646.15,374.1);

	this.instance_7 = new lib.QuestionFrame();
	this.instance_7.setTransform(646.15,374.1);

	this.instance_8 = new lib.questionbg();
	this.instance_8.setTransform(640,360);
	this.instance_8.alpha = 0.8516;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},1).to({state:[]},143).to({state:[{t:this.instance_7}]},340).to({state:[{t:this.instance_8}]},122).to({state:[]},45).to({state:[{t:this.instance_6}]},219).to({state:[]},143).to({state:[{t:this.instance_7}]},340).to({state:[{t:this.instance_8}]},122).to({state:[]},45).wait(207));

	// CSS
	this.instance_9 = new lib.an_CSS({'id': 'instance_9', 'href':'assets/style.css'});

	this.instance_9.setTransform(438.65,-674.3,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1520).wait(207));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApED+Qg+gtAChGQgChIA/g0QA6gyBRAAQBLgCAzAsQAwArAABAQgBA+gxAyQg1AzhKAKIgaACQg/AAgwgjgAHGhHQgjgoACg2QABg2AkgkQAjgkAvAEQAsADAeAnQAdAkgCAzQgCAwgfAlQggAkgsACQgvAAgfgkg");
	this.shape.setTransform(823.108,383.9315);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(870).to({_off:false},0).to({_off:true},650).wait(207));

	// Layer_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkBEgQgtgvABhaQgChhAvhRQAvhUBCgLQA3gPAnA3QAgA0gDBUQgFBQgnBGQgpBJg0AaQgcAKgWABQgdgFgVgVgACAAfQgZgsAGhPQAFhWAohBQAhhAApgFQAogIAUA0QALAeADAqIgCAzQgIBGggA6QgfA6gjAQQgMAEgKAAQgbAAgRgeg");
	this.shape_1.setTransform(909.2209,471.1158);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(870).to({_off:false},0).to({_off:true},650).wait(207));

	// Layer_20
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FAA0AE").ss(1,1,1).p("AsqgEQDwgYDxgGQCigECiAFQCgAGCjAMQCSAMCQARQBlALBlAM");
	this.shape_2.setTransform(571.9,198.7658);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDDADF").s().p("AspK2IAA1fQDwgYDwgGQCigECiAFQCgAGCjAMQCSAMCRASIDKAXQieNdnGHsg");
	this.shape_3.setTransform(571.9,266.4908);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},870).to({state:[]},650).to({state:[]},1).wait(206));

	// Layer_2
	this.instance_10 = new lib.silvercoin();
	this.instance_10.setTransform(576.2,-80.85,0.7641,0.7641,0,0,0,0.1,0.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1034).to({_off:false},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(10).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(19).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(10).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(11).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(608));

	// Layer_22
	this.instance_11 = new lib.goldcoin();
	this.instance_11.setTransform(575.45,-65.4,0.8491,0.8491,0,0,0,0.1,0.1);
	this.instance_11._off = true;

	this.instance_12 = new lib.silvercoin();
	this.instance_12.setTransform(576.2,-80.85,0.7641,0.7641,0,0,0,0.1,0.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1043).to({_off:false},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(11).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(2).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).to({_off:true},1).wait(28).to({_off:false,x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).to({_off:true},1).wait(617));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1138).to({_off:false},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(21).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(3).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(20).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(11).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(3).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(10).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(1).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(1).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(15).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(9).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(10).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(15).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(379));

	// Layer_18
	this.instance_13 = new lib.goldcoin();
	this.instance_13.setTransform(575.45,-65.4,0.8491,0.8491,0,0,0,0.1,0.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1086).to({_off:false},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(29).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(3).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(12).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(3).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(23).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(3).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(12).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(22).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(25).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(1).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(27).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(9).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(1).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).to({_off:true},180).wait(207));

	// Layer_30
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#EBA0AE").ss(1,1,1).p("EAoZgWwQAphpAfhsQAzixAJi3QAKjPhxioQi+gsiwBUQhLAkhIAnQhpA6haBNQjNiQjqhlQoTjlpwg8Qnwg8n1A8Qk4ArkrBcQh5Amh3AuQnsC7mvEkQk7DXjeE6QkjGXhyHqQhiGjAfGpQAHBcANBcQAeDXA4DPEAMygkrIgCACIjeC0EAM2gkvIAAABIgEADgEgQCgifIBzidQEtg3EygEQIzgGIuBMIAFACEAiJgeFQhghbhnhPQgogfgogcAYq0wQAakogPhqQgZivhkhkIg5ATQkJBkiSDdQiPDZgmFkQAAABAAACIAAAAAEZx0QADh2BgihQBdicCXiRQFglUE6AAQAhAABFAXQAQAFANAFQAAAAAAAAQABAAAAAAQABABAAAAQAiAMAGAGAM5xAQAAgBAAgCEAoqglbQiPBjhzCEQhfBuhACBEAoZgWwQhjiJhviDQhbhqhjhfEAxkgDmQgiitgziUQgfhXgkhOQiHkiiskIQg9hfhDhbEApUgDmIg0AAQhsAahZBBQgtAhgfAjQgaAdgQAgQgCAFgCAFIAAAAQAFgFgBgFEAsQgEaIIqBoQAEAFADAEIAAAAQAAABAAAAQAEAGAEAGQAeAqAYArQC6FDg1GNQgQB5hWBbQgpAsgsAoQjACqj8BLQi4A/i3gzQgEgBgDgBQgbgKgcgJEA0wgCdQiOAbh7A7Qi+BbiSCrQj3EgAAF/QAABqAXBeQAMAuAaBaQABACAAACEAmtAYfQgXAHgYAHQkaBGkggeQgqgGgqgFEAqAAW1QhRA5hVAhQgVAJgYAHQjTCckNB4QimBLiZAyQhIAXhEASEAqAAW1QAIAhAABFQAAC6iDDbQgqBGg4BKQjvE6jZAAQiuAAiZhZQijhggGiBEAuNASmQiACsiNBjEABsAguQBVDJCVCpQDhD/D3AAQEnAADgkpQByiYA8ihIAAAAQASgyANgyQAFgUAEgVQAGgbAEgcEg2MAEYQgpAogYAhQhCBZAABgQAACPBsBvQA9A9BEAhQBLESB6EFQC1GBEZE9IADAEIgGgHIADADEgqMAhPIACACQABABABABgAC6OYQBeElBkCSQCTDUDrAnEgUHAhqQgDAQgGARQgtCNjLB6QjbCFjXAAQimAAi5hrQijhfjWkFA9mfXQEoBQEuAlQAGABAGAAQDKAYDNAGQHvAMHqhJEgqIAhTQAEAEADAEQAMANAOALIgogoABSfsQALAiAPAg");
	this.shape_4.setTransform(593.5126,419.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FDDADF","#FCC0C9"],[0,1],-0.5,-13.7,-16.8,-74.7).s().p("AgDABIgBgBIAAAAIAJABg");
	this.shape_5.setTransform(675.5,310.0875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FDDADF","#FCC0C9"],[0,1],-0.5,-45.6,77.4,-45.6).s().p("AgEABIAAgCIAJABIAAACg");
	this.shape_6.setTransform(675.525,309.9125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDDADF").s().p("AgBgDIAEACIgDADIADgDIAAABIgDACIgCACg");
	this.shape_7.setTransform(675.425,184.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},870).to({state:[]},650).to({state:[]},206).wait(1));

	// Layer_5
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FAA0AE").ss(0.1,1,1).p("AOYg0IAFgEIAAABIgFADIgCACIjdCzAubBXIBzicQEtg3ExgEQIzgGIvBMIAFAC");
	this.shape_8.setTransform(583.3,189.5245);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4D1800").s().p("ACSBLQoWgooVA0IBzicQEtg3EygEQIygGIvBMIgCAIIjdCzQkVgjkUgTg");
	this.shape_9.setTransform(583.05,189.5245);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8}]},870).to({state:[]},650).to({state:[]},1).wait(206));

	// Layer_11
	this.instance_14 = new lib.blurshade();
	this.instance_14.setTransform(594.55,419.15);
	this.instance_14._off = true;
	this.instance_14.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance_14.cache(-346,-274,693,548);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(870).to({_off:false},0).to({_off:true},650).wait(207));

	// Layer_25
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FAA0AE").ss(0.1,1,1).p("AmFHIQAmljCQjYQCRjdEJhkIA4gTQBlBkAZCvQAOBqgaEn");
	this.shape_10.setTransform(713.9971,264.0375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FDDADF","#FCC0C9"],[0,1],23.1,27.7,3,-47.5).s().p("Al2G8IgEAMIgLgBQAmljCQjZQCRjcEJhkIA4gUQBlBlAZCvQAOBpgaEnIrpDvg");
	this.shape_11.setTransform(713.9971,264.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},870).to({state:[]},650).to({state:[]},1).wait(206));

	// Layer_1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#EBA0AE").ss(0.1,1,1).p("AVE/DQgBABgBAAADbx0QADh2BgihQBeicCWiRQFhlUE5AAQAiAABFAXQAQAFAMAFQAAAAAAAAQABAAAAAAQABABABAAQAhAMAGAGAL7xAQAAgBABgCALxxEQAAABAAACIAAAAEAoXgDmIg0AAQhsAahaBBQhSA7gjBGQgDAFgCAFIABAAQAFgFgBgFEAwmgDmQg1kShjjUQj/okmGnMQiyjRjTiiQjui3kZh5QoSjlpwg8Qnwg8n1A8Qm4A8mcCfQnrC7mvEkQk7DXjfE6QkjGXhyHqQh3H+BIIGQBGH1DWHIQC0GBEZE9IAEAEIACACQAAABABABIgDgEIgGgHIACADEArSgEaIFSBAIDZAoQADAFADAEIAAAAQAAABABAAQD/Fng9HKQgPB5hWBbQjcDtk1BcQi4A/i3gzQgFgBgDgBQgbgKgbgJEAzygCdQlpBEjvEYQj3EgAAF/QAABqAXBeQALAuAbBaQAAACABACEAlwAYfQgXAHgZAHQkaBGkfgeQgqgGgqgFEApDAW1QhSA5hUAhQgWAJgXAHQjTCckNB4Qj1BujXA4EApDAW1QAHAhAABFQAAD2jlEvQjuE6jaAAQitAAiZhZQijhggHiBEAtQASmQiBCsiMBjEAAvAguQBUDJCWCpQDhD/D3AAQEnAADfkpQBziYA7ihIAAAAQASgyANgyQAMgwAHgwAB9OYQBdElBkCSQCUDUDqAnEgVFAhqQgeCgjiCIQjcCFjWAAQimAAi6hrQijhfjVkFEgrGAhTQAEAEAEAEQAMANAOALIgpgoA+jfXQEuBRE0AlQDKAYDMAGQHwAMHqhJAAUfsQAMAiAPAg");
	this.shape_12.setTransform(599.6808,419.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFC0C9").s().p("AmgGJQijhggGiBIgIgDQARgxANgyQDXg5D1hsQEMh5DTibQAYgIAVgIQBUgiBSg4QAHAgAABFQABD2jlEuQjvE6jYAAQiuAAiZhZg");
	this.shape_13.setTransform(803.65,613.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FDDADF","#FCC0C9"],[0,1],-0.5,-45.6,77.4,-45.6).s().p("AgEABIAAgCIAJABIAAACg");
	this.shape_14.setTransform(675.525,309.9125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FDDADF","#FCC0C9"],[0,1],-0.5,-13.7,-16.8,-74.7).s().p("AgDABIgBgBIAAAAIAJABg");
	this.shape_15.setTransform(675.5,310.0875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FCC0C9").s().p("AnZKiIgBgEQgahagMguQgXheAAhqQAAl+D3kgQDwkZFohEIARgLQEAFog9HJQgQB5hWBbQjbDtk1BcQhlAjhlAAQhSAAhTgXg");
	this.shape_16.setTransform(899.9128,471.8332);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDDADF").s().p("EAGAAmgQiWiphUjJQgPgggMgiQAMAiAPAgQnqBJnwgMQjMgGjKgYQk0glkuhRQEuBRE0AlIgEAdQgeCgjiCIQjcCFjWAAQimAAi6hrQijhfjVkFIAGAHIACACIABACIAIAIQAMANAOALIgpgoQkZk9i0mBQjWnIhGn1QhIoGB3n+QBynqEjmXQDfk6E7jXQGvkkHri7QGcifG4g8QH1g8HwA8QJwA8ISDlQEZB5DuC3QDTCiCyDRQGGHMD/IkQBjDUA1ESIgCAMIlShAIFSBAIDZAoIAGAJIAAAAIABABIgSALQlpBEjvEYQj3EgAAF/QAABqAXBeQALAuAbBaIgHACIAIACQC3AzC4g/QiBCsiMBjQhSA5hUAhQgWAJgXAHIgwAOIgOADIgBABQi+AtjBAAIAAAAIAAAAQhTAAhUgIIgEgBIhUgLIBUALIAEABQBUAIBTAAIAAAAIAAAAQDBAAC+gtIABgBIAOgDIAwgOQjTCckNB4Qj1BujXA4QAMgwAHgwQgHAwgMAwQgNAygSAyIAAAAQg7ChhzCYQjfEpknAAQj3AAjhj/gAGlVPQCUDUDqAnQjqgniUjUQhkiShdklQBdElBkCSgEApAASwIg2gTIA2ATgEAkLAAAIAAAAQAFgFgBgFIgEAKgEAmEgCLQhSA7gjBGQAjhGBSg7QBahBBsgaIA0AAIg0AAQhsAahaBBgANxv6IAHgBIgIgHgANYxBIAAAAIABABIAJAAIABgDIgKgCIgBAEgAKZ64QiWCRheCcQhgChgDB2QADh2BgihQBeicCWiRQFhlUE5AAQAiAABFAXIAcAKIABAAIABAAIABABQAhAMAGAGQgGgGghgMIgBgBIgBAAIgBAAIgcgKQhFgXgiAAQk5AAlhFUgAWp/CIACgBIgCABgAYrfZIAAAAg");
	this.shape_17.setTransform(589.3679,419.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},870).to({state:[]},650).to({state:[]},1).wait(206));

	// Layer_3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FAA0AE").ss(0.1,1,1).p("AAvlYQhaBNgqA5QhCBZAABgQAACOBsBvQBYBaBrAbg");
	this.shape_18.setTransform(248.7,475.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FDDADF").s().p("AgrDkQhshvABiOQgBhgBChZQAqg5BahNIBpKxQhrgbhYhag");
	this.shape_19.setTransform(248.7,475.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19},{t:this.shape_18}]},870).to({state:[]},650).to({state:[]},1).wait(206));

	// Layer_4
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FAA0AE").ss(0.1,1,1).p("AEPIAQA8iNAqiRQAziyAJi2QAKjOhyioQi+gsivBTQhLAkhIAnQiJBMhxBtID6HBIHCEXIABAAIAHAFAE9n0QiOBjhzCEQhzCGhFChQgsBngPBvAEPIAIgDAHIgCADQAEACAFAAg");
	this.shape_20.setTransform(821.9655,229.4658);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FDDADF","#FCC0C9"],[0,1],-8,29.7,7.9,-29.8).s().p("Ak0DrQAPhvAshnQBFihB0iGQByiDCOhkIAMgIQByCogKDOQgJC2gzCyQgqCRg8CNIgEAHg");
	this.shape_21.setTransform(834.4655,229.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDDADF").s().p("Al9hCQBxhtCKhMQBIgnBJgkQCwhUC/AsIgMAJQiPBjhzCEQhyCEhGCiQgrBngPBvg");
	this.shape_22.setTransform(816.75,215.2408);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},870).to({state:[]},650).to({state:[]},1).wait(206));

	// Layer_13
	this.instance_15 = new lib.wall();
	this.instance_15.setTransform(642.15,438.1);
	this.instance_15.alpha = 0.8516;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(870).to({_off:false},0).to({_off:true},650).wait(207));

	// Layer_21
	this.instance_16 = new lib.shadowshade();
	this.instance_16.setTransform(580.8,638.3);
	this.instance_16._off = true;
	this.instance_16.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_16.cache(-303,-67,606,134);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(870).to({_off:false},0).to({_off:true},650).wait(207));

	// Layer_14
	this.instance_17 = new lib.table();
	this.instance_17.setTransform(657.75,585.4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(870).to({_off:false},0).to({_off:true},650).wait(207));

	// Layer_17
	this.instance_18 = new lib.bg();
	this.instance_18.setTransform(452.4,279.05,0.7997,0.7997);
	this.instance_18._off = true;
	this.instance_18.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_18.cache(-614,-395,2086,733);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(870).to({_off:false},0).to({_off:true},650).wait(207));

	// Layer_6
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ApED+Qg+gtAChGQgChIA/g0QA6gyBRAAQBLgCAzAsQAwArAABAQgBA+gxAyQg1AzhKAKIgaACQg/AAgwgjgAHGhHQgjgoACg2QABg2AkgkQAjgkAvAEQAsADAeAnQAdAkgCAzQgCAwgfAlQggAkgsACQgvAAgfgkg");
	this.shape_23.setTransform(823.108,383.9315);
	this.shape_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1).to({_off:false},0).to({_off:true},650).wait(1076));

	// Layer_7
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AkBEgQgtgvABhaQgChhAvhRQAvhUBCgLQA3gPAnA3QAgA0gDBUQgFBQgnBGQgpBJg0AaQgcAKgWABQgdgFgVgVgACAAfQgZgsAGhPQAFhWAohBQAhhAApgFQAogIAUA0QALAeADAqIgCAzQgIBGggA6QgfA6gjAQQgMAEgKAAQgbAAgRgeg");
	this.shape_24.setTransform(909.2209,471.1158);
	this.shape_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1).to({_off:false},0).to({_off:true},650).wait(1076));

	// Layer_20
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FAA0AE").ss(1,1,1).p("AsqgEQDwgYDxgGQCigECiAFQCgAGCjAMQCSAMCQARQBlALBlAM");
	this.shape_25.setTransform(571.9,198.7658);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FDDADF").s().p("AspK2IAA1fQDwgYDwgGQCigECiAFQCgAGCjAMQCSAMCRASIDKAXQieNdnGHsg");
	this.shape_26.setTransform(571.9,266.4908);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[]},650).to({state:[]},581).wait(495));

	// Layer_2
	this.instance_19 = new lib.silvercoin();
	this.instance_19.setTransform(576.2,-80.85,0.7641,0.7641,0,0,0,0.1,0.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(165).to({_off:false},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(10).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(19).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(10).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(11).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(1477));

	// Layer_22
	this.instance_20 = new lib.goldcoin();
	this.instance_20.setTransform(575.45,-65.4,0.8491,0.8491,0,0,0,0.1,0.1);
	this.instance_20._off = true;

	this.instance_21 = new lib.silvercoin();
	this.instance_21.setTransform(576.2,-80.85,0.7641,0.7641,0,0,0,0.1,0.2);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(174).to({_off:false},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(11).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(2).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).to({_off:true},1).wait(28).to({_off:false,x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).to({_off:true},1).wait(1486));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(269).to({_off:false},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(21).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(3).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(20).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(11).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(3).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(10).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(1).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(1).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(15).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(9).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(10).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(15).to({_off:false,x:576.2,y:-80.85},0).to({x:556.65,y:247.6},6).to({_off:true},1).wait(1248));

	// Layer_18
	this.instance_22 = new lib.goldcoin();
	this.instance_22.setTransform(575.45,-65.4,0.8491,0.8491,0,0,0,0.1,0.1);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(217).to({_off:false},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(29).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(3).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(12).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(3).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(23).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(3).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(12).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(22).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(25).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(1).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(27).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(9).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).wait(1).to({x:575.45,y:-65.4},0).to({x:554.9,y:260.9},6,cjs.Ease.get(1)).to({_off:true},180).wait(1076));

	// Layer_30
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#EBA0AE").ss(1,1,1).p("EAoZgWwQAphpAfhsQAzixAJi3QAKjPhxioQi+gsiwBUQhLAkhIAnQhpA6haBNQjNiQjqhlQoTjlpwg8Qnwg8n1A8Qk4ArkrBcQh5Amh3AuQnsC7mvEkQk7DXjeE6QkjGXhyHqQhiGjAfGpQAHBcANBcQAeDXA4DPEAMygkrIgCACIjeC0EAM2gkvIAAABIgEADgEgQCgifIBzidQEtg3EygEQIzgGIuBMIAFACEAiJgeFQhghbhnhPQgogfgogcAYq0wQAakogPhqQgZivhkhkIg5ATQkJBkiSDdQiPDZgmFkQAAABAAACIAAAAAEZx0QADh2BgihQBdicCXiRQFglUE6AAQAhAABFAXQAQAFANAFQAAAAAAAAQABAAAAAAQABABAAAAQAiAMAGAGAM5xAQAAgBAAgCEAoqglbQiPBjhzCEQhfBuhACBEAoZgWwQhjiJhviDQhbhqhjhfEAxkgDmQgiitgziUQgfhXgkhOQiHkiiskIQg9hfhDhbEApUgDmIg0AAQhsAahZBBQgtAhgfAjQgaAdgQAgQgCAFgCAFIAAAAQAFgFgBgFEAsQgEaIIqBoQAEAFADAEIAAAAQAAABAAAAQAEAGAEAGQAeAqAYArQC6FDg1GNQgQB5hWBbQgpAsgsAoQjACqj8BLQi4A/i3gzQgEgBgDgBQgbgKgcgJEA0wgCdQiOAbh7A7Qi+BbiSCrQj3EgAAF/QAABqAXBeQAMAuAaBaQABACAAACEAmtAYfQgXAHgYAHQkaBGkggeQgqgGgqgFEAqAAW1QhRA5hVAhQgVAJgYAHQjTCckNB4QimBLiZAyQhIAXhEASEAqAAW1QAIAhAABFQAAC6iDDbQgqBGg4BKQjvE6jZAAQiuAAiZhZQijhggGiBEAuNASmQiACsiNBjEABsAguQBVDJCVCpQDhD/D3AAQEnAADgkpQByiYA8ihIAAAAQASgyANgyQAFgUAEgVQAGgbAEgcEg2MAEYQgpAogYAhQhCBZAABgQAACPBsBvQA9A9BEAhQBLESB6EFQC1GBEZE9IADAEIgGgHIADADEgqMAhPIACACQABABABABgAC6OYQBeElBkCSQCTDUDrAnEgUHAhqQgDAQgGARQgtCNjLB6QjbCFjXAAQimAAi5hrQijhfjWkFA9mfXQEoBQEuAlQAGABAGAAQDKAYDNAGQHvAMHqhJEgqIAhTQAEAEADAEQAMANAOALIgogoABSfsQALAiAPAg");
	this.shape_27.setTransform(593.5126,419.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FDDADF","#FCC0C9"],[0,1],-0.5,-13.7,-16.8,-74.7).s().p("AgDABIgBgBIAAAAIAJABg");
	this.shape_28.setTransform(675.5,310.0875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#FDDADF","#FCC0C9"],[0,1],-0.5,-45.6,77.4,-45.6).s().p("AgEABIAAgCIAJABIAAACg");
	this.shape_29.setTransform(675.525,309.9125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FDDADF").s().p("AgBgDIAEACIgDADIADgDIAAABIgDACIgCACg");
	this.shape_30.setTransform(675.425,184.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[]},650).wait(1076));

	// Layer_5
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FAA0AE").ss(0.1,1,1).p("AOYg0IAFgEIAAABIgFADIgCACIjdCzAubBXIBzicQEtg3ExgEQIzgGIvBMIAFAC");
	this.shape_31.setTransform(583.3,189.5245);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4D1800").s().p("ACSBLQoWgooVA0IBzicQEtg3EygEQIygGIvBMIgCAIIjdCzQkVgjkUgTg");
	this.shape_32.setTransform(583.05,189.5245);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[]},650).to({state:[]},581).wait(495));

	// Layer_11
	this.instance_23 = new lib.blurshade();
	this.instance_23.setTransform(594.55,419.15);
	this.instance_23._off = true;
	this.instance_23.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance_23.cache(-346,-274,693,548);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1).to({_off:false},0).to({_off:true},650).wait(1076));

	// Layer_25
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FAA0AE").ss(0.1,1,1).p("AmFHIQAmljCQjYQCRjdEJhkIA4gTQBlBkAZCvQAOBqgaEn");
	this.shape_33.setTransform(713.9971,264.0375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#FDDADF","#FCC0C9"],[0,1],23.1,27.7,3,-47.5).s().p("Al2G8IgEAMIgLgBQAmljCQjZQCRjcEJhkIA4gUQBlBlAZCvQAOBpgaEnIrpDvg");
	this.shape_34.setTransform(713.9971,264.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[]},650).to({state:[]},706).wait(370));

	// Layer_1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#EBA0AE").ss(0.1,1,1).p("AVE/DQgBABgBAAADbx0QADh2BgihQBeicCWiRQFhlUE5AAQAiAABFAXQAQAFAMAFQAAAAAAAAQABAAAAAAQABABABAAQAhAMAGAGAL7xAQAAgBABgCALxxEQAAABAAACIAAAAEAoXgDmIg0AAQhsAahaBBQhSA7gjBGQgDAFgCAFIABAAQAFgFgBgFEAwmgDmQg1kShjjUQj/okmGnMQiyjRjTiiQjui3kZh5QoSjlpwg8Qnwg8n1A8Qm4A8mcCfQnrC7mvEkQk7DXjfE6QkjGXhyHqQh3H+BIIGQBGH1DWHIQC0GBEZE9IAEAEIACACQAAABABABIgDgEIgGgHIACADEArSgEaIFSBAIDZAoQADAFADAEIAAAAQAAABABAAQD/Fng9HKQgPB5hWBbQjcDtk1BcQi4A/i3gzQgFgBgDgBQgbgKgbgJEAzygCdQlpBEjvEYQj3EgAAF/QAABqAXBeQALAuAbBaQAAACABACEAlwAYfQgXAHgZAHQkaBGkfgeQgqgGgqgFEApDAW1QhSA5hUAhQgWAJgXAHQjTCckNB4Qj1BujXA4EApDAW1QAHAhAABFQAAD2jlEvQjuE6jaAAQitAAiZhZQijhggHiBEAtQASmQiBCsiMBjEAAvAguQBUDJCWCpQDhD/D3AAQEnAADfkpQBziYA7ihIAAAAQASgyANgyQAMgwAHgwAB9OYQBdElBkCSQCUDUDqAnEgVFAhqQgeCgjiCIQjcCFjWAAQimAAi6hrQijhfjVkFEgrGAhTQAEAEAEAEQAMANAOALIgpgoA+jfXQEuBRE0AlQDKAYDMAGQHwAMHqhJAAUfsQAMAiAPAg");
	this.shape_35.setTransform(599.6808,419.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFC0C9").s().p("AmgGJQijhggGiBIgIgDQARgxANgyQDXg5D1hsQEMh5DTibQAYgIAVgIQBUgiBSg4QAHAgAABFQABD2jlEuQjvE6jYAAQiuAAiZhZg");
	this.shape_36.setTransform(803.65,613.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#FDDADF","#FCC0C9"],[0,1],-0.5,-45.6,77.4,-45.6).s().p("AgEABIAAgCIAJABIAAACg");
	this.shape_37.setTransform(675.525,309.9125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#FDDADF","#FCC0C9"],[0,1],-0.5,-13.7,-16.8,-74.7).s().p("AgDABIgBgBIAAAAIAJABg");
	this.shape_38.setTransform(675.5,310.0875);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FCC0C9").s().p("AnZKiIgBgEQgahagMguQgXheAAhqQAAl+D3kgQDwkZFohEIARgLQEAFog9HJQgQB5hWBbQjbDtk1BcQhlAjhlAAQhSAAhTgXg");
	this.shape_39.setTransform(899.9128,471.8332);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FDDADF").s().p("EAGAAmgQiWiphUjJQgPgggMgiQAMAiAPAgQnqBJnwgMQjMgGjKgYQk0glkuhRQEuBRE0AlIgEAdQgeCgjiCIQjcCFjWAAQimAAi6hrQijhfjVkFIAGAHIACACIABACIAIAIQAMANAOALIgpgoQkZk9i0mBQjWnIhGn1QhIoGB3n+QBynqEjmXQDfk6E7jXQGvkkHri7QGcifG4g8QH1g8HwA8QJwA8ISDlQEZB5DuC3QDTCiCyDRQGGHMD/IkQBjDUA1ESIgCAMIlShAIFSBAIDZAoIAGAJIAAAAIABABIgSALQlpBEjvEYQj3EgAAF/QAABqAXBeQALAuAbBaIgHACIAIACQC3AzC4g/QiBCsiMBjQhSA5hUAhQgWAJgXAHIgwAOIgOADIgBABQi+AtjBAAIAAAAIAAAAQhTAAhUgIIgEgBIhUgLIBUALIAEABQBUAIBTAAIAAAAIAAAAQDBAAC+gtIABgBIAOgDIAwgOQjTCckNB4Qj1BujXA4QAMgwAHgwQgHAwgMAwQgNAygSAyIAAAAQg7ChhzCYQjfEpknAAQj3AAjhj/gAGlVPQCUDUDqAnQjqgniUjUQhkiShdklQBdElBkCSgEApAASwIg2gTIA2ATgEAkLAAAIAAAAQAFgFgBgFIgEAKgEAmEgCLQhSA7gjBGQAjhGBSg7QBahBBsgaIA0AAIg0AAQhsAahaBBgANxv6IAHgBIgIgHgANYxBIAAAAIABABIAJAAIABgDIgKgCIgBAEgAKZ64QiWCRheCcQhgChgDB2QADh2BgihQBeicCWiRQFhlUE5AAQAiAABFAXIAcAKIABAAIABAAIABABQAhAMAGAGQgGgGghgMIgBgBIgBAAIgBAAIgcgKQhFgXgiAAQk5AAlhFUgAWp/CIACgBIgCABgAYrfZIAAAAg");
	this.shape_40.setTransform(589.3679,419.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[]},650).to({state:[]},580).wait(496));

	// Layer_3
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FAA0AE").ss(0.1,1,1).p("AAvlYQhaBNgqA5QhCBZAABgQAACOBsBvQBYBaBrAbg");
	this.shape_41.setTransform(248.7,475.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FDDADF").s().p("AgrDkQhshvABiOQgBhgBChZQAqg5BahNIBpKxQhrgbhYhag");
	this.shape_42.setTransform(248.7,475.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[]},650).to({state:[]},581).wait(495));

	// Layer_4
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FAA0AE").ss(0.1,1,1).p("AEPIAQA8iNAqiRQAziyAJi2QAKjOhyioQi+gsivBTQhLAkhIAnQiJBMhxBtID6HBIHCEXIABAAIAHAFAE9n0QiOBjhzCEQhzCGhFChQgsBngPBvAEPIAIgDAHIgCADQAEACAFAAg");
	this.shape_43.setTransform(821.9655,229.4658);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#FDDADF","#FCC0C9"],[0,1],-8,29.7,7.9,-29.8).s().p("Ak0DrQAPhvAshnQBFihB0iGQByiDCOhkIAMgIQByCogKDOQgJC2gzCyQgqCRg8CNIgEAHg");
	this.shape_44.setTransform(834.4655,229.95);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FDDADF").s().p("Al9hCQBxhtCKhMQBIgnBJgkQCwhUC/AsIgMAJQiPBjhzCEQhyCEhGCiQgrBngPBvg");
	this.shape_45.setTransform(816.75,215.2408);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},1).to({state:[]},650).to({state:[]},581).wait(495));

	// Layer_13
	this.instance_24 = new lib.wall();
	this.instance_24.setTransform(642.15,438.1);
	this.instance_24.alpha = 0.8516;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({_off:false},0).to({_off:true},650).wait(1076));

	// Layer_21
	this.instance_25 = new lib.shadowshade();
	this.instance_25.setTransform(580.8,638.3);
	this.instance_25._off = true;
	this.instance_25.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_25.cache(-303,-67,606,134);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1).to({_off:false},0).to({_off:true},650).wait(1076));

	// Layer_14
	this.instance_26 = new lib.table();
	this.instance_26.setTransform(657.75,585.4);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({_off:false},0).to({_off:true},650).wait(1076));

	// Layer_17
	this.instance_27 = new lib.bg();
	this.instance_27.setTransform(452.4,279.05,0.7997,0.7997);
	this.instance_27._off = true;
	this.instance_27.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_27.cache(-614,-395,2086,733);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(1).to({_off:false},0).to({_off:true},650).wait(1076));

	// playbtn
	this.play_btn = new lib.playbuttonbutton();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(629.85,371.95);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.playbuttonbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).to({_off:true},1).wait(1726));

	// thumnail
	this.instance_28 = new lib.newthumbnail();
	this.instance_28.setTransform(638,360,1.0344,1.0344);
	var instance_28Filter_1 = new cjs.ColorFilter(0.6,0.6,0.6,1,0,0,0,0);
	this.instance_28.filters = [instance_28Filter_1];
	this.instance_28.cache(-640,-362,1282,724);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({_off:true},1).wait(1726));
	this.timeline.addTween(cjs.Tween.get(instance_28Filter_1).wait(1726));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(479.5,-10387.7,1188.1,23147.6);
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