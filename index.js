(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {};

// library properties:
lib.properties = {
	width: 650,
	height: 750,
	fps: 24,
	color: "#0076BE",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) {
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.mano = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0076BE").ss(4,0,1).p("AInrIQAFibBiheQBchaCFgDQCFgCBcBXQBnBhAACpIAAC2QAEiDBchMQBWhIB9ADQB9ADBXBNQBgBWAACOIAAVcIADA/QACBSgGBWQgSEWhYDoQh6FEjzC5QkwDnndAAQlDAAkKhxQkph9itjzQhEhhhsj0QhkjihXhsQhpiBhXhaQhuhxhthPQhDgyhIglQiFg5hBgfQhyg2g9hGQhJhTAmhmQAvh8CGgxQBugoCUARQB0AMCdAwQAQAFCZAsQCQAuABANMAAAgkFQAAiiBtheQBhhVCOACQCNABBiBVQBtBfAACeIAAQoIAAPIAhZvAQADiQBfhUQBahNCDACQCCACBbBOQBkBXAACPIAADxAS3AAIAAoJAIngZIAAqv");
	this.shape.setTransform(182.6,236.5,1,1,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgAUAjLQkph9itjzQhEhhhsj0QhkjihXhsQhpiBhXhaQhuhxhthPQhDgyhIglQiFg5hBgfQhyg2g9hGQhJhTAmhmQAvh8CGgxQBugoCUARQB0AMCdAwICpAxQCQAuABANMAAAgkFQAAiiBtheQBhhVCOACQCNABBiBVQBtBfAACeIAAQoQADiQBfhUQBahNCDACQCCACBbBOQBkBXAACPIAADxIAAKvIAAqvQAFibBiheQBchaCFgDQCFgCBcBXQBnBhAACpIAAC2IAAIJIAAoJQAEiDBchMQBWhIB9ADQB9ADBXBNQBgBWAACOIAAVcIADA/QACBSgGBWQgSEWhYDoQh6FEjzC5QkwDnndAAQlDAAkKhxgAhZAIIAAvIg");
	this.shape_1.setTransform(182.6,236.5,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,-6.8,380.7,494.2);


(lib.circulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArTaxQlNiNkCkBQkBkBiOlOQiSlaABl6QgBl5CSlZQCOlOEBkBQECkCFNiNQFaiSF5AAQF6AAFaCSQFOCNEBECQEBEBCOFOQCSFZgBF5QABF6iSFaQiOFOkBEBQkBEBlOCNQlaCSl6AAQl5AAlaiSgApw3JQkiB6jeDfQjfDfh6EhQh+EqAAFGQAAFHB+ErQB6EhDfDfQDeDfEiB6QEqB+FGAAQFHAAErh+QEhh6DfjfQDejfB6khQB/krAAlHQAAlGh/kqQh6khjejfQjfjfkhh6Qkrh+lHAAQlGAAkqB+g");
	this.shape.setTransform(186,186);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,372,372);

(lib.initHandClick = function() {
	var canvas = document.getElementById("canvasHandClick");
	var exportRoot = new lib.handClick();

	var stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
});

// stage content:
(lib.handClick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mano("synched",0);
	this.instance.setTransform(233.9,539.7,1,1,0,0,0,217.5,410.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:182.6,regY:236.5,rotation:0.9,x:202.8,y:369,alpha:0.043},0).wait(1).to({rotation:1.8,x:206.9,y:372.5,alpha:0.085},0).wait(1).to({rotation:2.8,x:211.4,y:376,alpha:0.128},0).wait(1).to({rotation:3.7,x:216.3,y:379.4,alpha:0.17},0).wait(1).to({rotation:4.6,x:221.5,y:382.6,alpha:0.213},0).wait(1).to({rotation:5.5,x:227,y:385.6,alpha:0.255},0).wait(1).to({rotation:6.4,x:232.9,y:388.4,alpha:0.298},0).wait(1).to({rotation:7.4,x:238.9,y:391,alpha:0.34},0).wait(1).to({rotation:8.3,x:245.3,y:393.4,alpha:0.383},0).wait(1).to({rotation:9.2,x:251.7,y:395.6,alpha:0.425},0).wait(1).to({rotation:10.1,x:258.4,y:397.5,alpha:0.468},0).wait(1).to({rotation:11.1,x:265.1,y:399.3,alpha:0.51},0).wait(1).to({rotation:12,x:271.8,y:400.9,alpha:0.553},0).wait(1).to({rotation:12.9,x:278.8,y:402.4,alpha:0.595},0).wait(1).to({rotation:13.8,x:285.7,y:403.7,alpha:0.638},0).wait(1).to({rotation:14.7,x:292.7,y:405,alpha:0.68},0).wait(1).to({rotation:15.7,x:299.8,y:406.1,alpha:0.723},0).wait(1).to({rotation:16.6,x:306.9,y:407.2,alpha:0.766},0).wait(1).to({rotation:17.5,x:313.9,y:408.2,alpha:0.808},0).wait(1).to({rotation:18.4,x:321.1,y:409.1,alpha:0.851},0).wait(1).to({rotation:19.3,x:328.1,y:410,alpha:0.893},0).wait(1).to({rotation:20.3,x:335.2,y:410.8,alpha:0.936},0).wait(1).to({rotation:21.2,x:342.3,y:411.6,alpha:0.978},0).wait(1).to({rotation:22.1,x:347.8,y:412.1,alpha:0.976},0).wait(1).to({rotation:23,x:352.5,y:412.6,alpha:0.975},0).wait(1).to({rotation:24,x:357.4,y:413.2,alpha:0.973},0).wait(1).to({rotation:24.9,x:362.2,y:413.8,alpha:0.971},0).wait(1).to({rotation:25.8,x:367.2,y:414.5,alpha:0.969},0).wait(1).to({rotation:26.7,x:372,y:415.1,alpha:0.967},0).wait(1).to({rotation:22.5,x:357.3,y:412.1,alpha:0.966},0).wait(1).to({rotation:18.3,x:342.3,y:410.1,alpha:0.964},0).wait(1).to({rotation:14.1,x:327.1,y:408.9,alpha:0.962},0).wait(1).to({rotation:9.9,x:311.9,y:408.8,alpha:0.96},0).wait(1).to({rotation:5.8,x:296.8,y:409.5,alpha:0.959},0).wait(1).to({rotation:1.6,x:281.7,y:411.2,alpha:0.957},0).wait(1).to({rotation:-2.6,x:268.9,y:413.9,alpha:0.955},0).wait(1).to({rotation:1,x:283.8,y:411.5,alpha:0.953},0).wait(1).to({rotation:4.6,x:298.8,y:409.8,alpha:0.951},0).wait(1).to({rotation:8.2,x:313.9,y:408.9,alpha:0.95},0).wait(1).to({rotation:11.8,x:329.1,y:408.6,alpha:0.948},0).wait(1).to({rotation:15.4,x:344.2,y:409,alpha:0.946},0).wait(1).to({rotation:19,x:359.3,y:410.2,alpha:0.944},0).wait(1).to({rotation:18.7,x:362.2,y:410.1,alpha:0.913},0).wait(1).to({rotation:18.4,x:365.2,y:410,alpha:0.881},0).wait(1).to({rotation:18.1,x:368.2,y:409.8,alpha:0.85},0).wait(1).to({rotation:17.8,x:371.2,y:409.7,alpha:0.818},0).wait(1).to({rotation:17.5,x:374.2,alpha:0.787},0).wait(1).to({rotation:17.2,x:377.1,y:409.6,alpha:0.755},0).wait(1).to({rotation:16.9,x:380.1,y:409.5,alpha:0.724},0).wait(1).to({rotation:16.6,x:383.1,y:409.4,alpha:0.692},0).wait(1).to({rotation:16.3,x:386.1,alpha:0.661},0).wait(1).to({rotation:16,x:389,y:409.3,alpha:0.629},0).wait(1).to({rotation:15.7,x:392,y:409.2,alpha:0.598},0).wait(1).to({rotation:15.4,x:395,alpha:0.567},0).wait(1).to({rotation:15,x:397.9,alpha:0.535},0).wait(1).to({rotation:14.7,x:400.9,y:409.1,alpha:0.504},0).wait(1).to({rotation:14.4,x:403.9,y:409.2,alpha:0.472},0).wait(1).to({rotation:14.1,x:406.8,y:409.1,alpha:0.441},0).wait(1).to({rotation:13.8,x:409.8,alpha:0.409},0).wait(1).to({rotation:13.5,x:412.8,alpha:0.378},0).wait(1).to({rotation:13.2,x:415.7,y:409.2,alpha:0.346},0).wait(1).to({rotation:12.9,x:418.7,alpha:0.315},0).wait(1).to({rotation:12.6,x:421.7,y:409.3,alpha:0.283},0).wait(1).to({rotation:12.3,x:424.7,y:409.4,alpha:0.252},0).wait(1).to({rotation:12,x:427.6,alpha:0.22},0).wait(1).to({rotation:11.7,x:430.5,y:409.5,alpha:0.189},0).wait(1).to({rotation:11.4,x:433.5,y:409.6,alpha:0.157},0).wait(1).to({rotation:11.1,x:436.5,y:409.7,alpha:0.126},0).wait(1).to({rotation:10.7,x:439.5,y:409.9,alpha:0.094},0).wait(1).to({rotation:10.4,x:442.5,y:410,alpha:0.063},0).wait(1).to({rotation:10.1,x:445.4,y:410.2,alpha:0.031},0).wait(1).to({rotation:9.8,x:448.4,y:410.5,alpha:0},0).to({_off:true},1).wait(43));

	// Layer 2 copy
	this.instance_1 = new lib.circulo("synched",0);
	this.instance_1.setTransform(471.1,236.5,0.254,0.265,0,0,0,185.9,186);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).wait(1).to({regX:186,scaleX:0.31,scaleY:0.32,alpha:0.921},0).wait(1).to({scaleX:0.37,scaleY:0.38,x:471.2,y:236.4,alpha:0.843},0).wait(1).to({scaleX:0.42,scaleY:0.44,alpha:0.767},0).wait(1).to({scaleX:0.47,scaleY:0.49,x:471.1,alpha:0.693},0).wait(1).to({scaleX:0.52,scaleY:0.55,alpha:0.62},0).wait(1).to({scaleX:0.57,scaleY:0.6,x:471.2,alpha:0.549},0).wait(1).to({scaleX:0.62,scaleY:0.65,y:236.5,alpha:0.479},0).wait(1).to({scaleX:0.67,scaleY:0.7,alpha:0.411},0).wait(1).to({scaleX:0.72,scaleY:0.75,y:236.4,alpha:0.345},0).wait(1).to({scaleX:0.76,scaleY:0.8,y:236.5,alpha:0.28},0).wait(1).to({scaleX:0.81,scaleY:0.84,alpha:0.217},0).wait(1).to({scaleX:0.85,scaleY:0.89,y:236.4,alpha:0.155},0).wait(1).to({scaleX:0.89,scaleY:0.93,alpha:0.095},0).wait(1).to({scaleX:0.94,scaleY:0.98,alpha:0.037},0).wait(1).to({scaleX:0.96,scaleY:1,alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(36));

	// Layer 2
	this.instance_2 = new lib.circulo("synched",0);
	this.instance_2.setTransform(471.1,236.5,0.254,0.265,0,0,0,185.9,186);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42).to({_off:false},0).wait(1).to({regX:186,scaleX:0.31,scaleY:0.33,alpha:0.917},0).wait(1).to({scaleX:0.37,scaleY:0.39,y:236.4,alpha:0.836},0).wait(1).to({scaleX:0.43,scaleY:0.45,y:236.5,alpha:0.755},0).wait(1).to({scaleX:0.48,scaleY:0.51,alpha:0.676},0).wait(1).to({scaleX:0.54,scaleY:0.56,y:236.4,alpha:0.598},0).wait(1).to({scaleX:0.59,scaleY:0.62,x:471.2,alpha:0.521},0).wait(1).to({scaleX:0.65,scaleY:0.68,y:236.5,alpha:0.445},0).wait(1).to({scaleX:0.7,scaleY:0.73,alpha:0.37},0).wait(1).to({scaleX:0.75,scaleY:0.79,y:236.4,alpha:0.296},0).wait(1).to({scaleX:0.8,scaleY:0.84,y:236.5,alpha:0.224},0).wait(1).to({scaleX:0.85,scaleY:0.89,alpha:0.152},0).wait(1).to({scaleX:0.9,scaleY:0.94,y:236.4,alpha:0.082},0).wait(1).to({scaleX:0.95,scaleY:1,alpha:0.013},0).wait(1).to({scaleX:0.96,scaleY:1,alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(335.2,496.9,380.7,494.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
