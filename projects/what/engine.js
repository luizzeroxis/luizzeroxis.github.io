//LUIX JS ENGINE (c) 2018

//TODO: rewrite this with classes

//Init point of engine
function start() {

	//graphics
	canvas = document.getElementById("c");
	ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	
	//screen size
	canvas.width = 800;
	canvas.height = 600;
	
	//framerates and deltas
	ts = performance.now();
	timescale = 1;
	alarms = [];
	
	//keyboard and mouse
	key = [];
	document.addEventListener("keydown", keydown, false);
	document.addEventListener("keyup", keyup, false);
	mousex = 0;
	mousey = 0;
	document.addEventListener("mousemove", mousemove, false);
	mouse = [];
	document.addEventListener("mousedown", mousedown, false);
	document.addEventListener("mouseup", mouseup, false);
	
	//views
	viewx = 0;
	viewy = 0;
	
	//gameplay
	objects = [];
	startSpawn();
	
	//start drawing
	window.requestAnimationFrame(draw);
	
}

//Alarm creation method
function alarm(time,callback) {
	alarms.push({
		time: time,
		callback: callback
	});
}

//Drawing called by requestAnimationFrame
function draw(tsnow) {

	delta = (tsnow-ts)/1000; //amount of seconds since the last frame
	delta = (delta*timescale);
	fps = 1000/(tsnow-ts);
	ts = tsnow;
	
	//alarms
	for(let i=alarms.length-1;i>=0;i--) {
		alarms[i].time -= delta;
		if(alarms[i].time <= 0) {
			alarms[i].callback(alarms[i].time);
			alarms.splice(i,1);
		}
	}
	
	//clear canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	//execute objects
	for(let i=0;i<objects.length;i++) {
		objects[i].step();
	}
	
	//collide objects
	
	for(let i=0;i<objects.length-1;i++) {
		obj1 = objects[i];
		for(let j=i+1;j<objects.length;j++) {
			obj2 = objects[j];
			//aaaa
		}
	}
	
	//draw objects
	objects.sort(function(a,b) {
		//console.log(a.depth+','+b.depth);
		return a.depth-b.depth;
	});
	
	//views
	viewx = Math.floor(viewx);
	viewy = Math.floor(viewy);
	
	ctx.save();
	ctx.translate(viewx, viewy);
	
	for(let i=objects.length-1;i>=0;i--) {
		objects[i].draw();
	}
	
	ctx.restore();
	
	window.requestAnimationFrame(draw);
}

function compRectCollider() {
	this.pub = function() {
		console.log("public and inherited function");
	}
}
compRectCollider.stat = function() {
	console.log("static function");
}
pepe = new compRectCollider();

//{ Keyboard and mouse handling

function keydown(e) {
	key[e.keyCode] = true;
}
function keyup(e) {
	key[e.keyCode] = false;
}
function mousemove(e) {
	mousex = Math.floor(Math.min(Math.max(e.clientX - canvas.getBoundingClientRect().left, 0), canvas.width));
	mousey = Math.floor(Math.min(Math.max(e.clientY - canvas.getBoundingClientRect().top, 0), canvas.height));
}
function mousedown(e) {
	if (e.clientX >= canvas.getBoundingClientRect().left && e.clientX < canvas.getBoundingClientRect().right &&
		e.clientY >= canvas.getBoundingClientRect().top && e.clientY < canvas.getBoundingClientRect().bottom) {
		mouse[e.button] = true;
		e.preventDefault();
	}
}
function mouseup(e) {
	mouse[e.button] = false;
}

//}

//Base for physical objects
function Obj(x=0,y=0,depth=0) {
	
	objects.push(this);
	
	this.x = x;
	this.y = y;
	this.depth = depth;
	
	this.destroy = function() {
		objects.splice(objects.indexOf(this), 1);
	}
	this.coll = function() {}
	this.step = function() {}
	this.draw = function() {}

}

//{ Random functions

//}

