//LUIX JS ENGINE (c) 2018

//TODO: rewrite this with classes

sprites = [];

//Init point of engine
function start(callback) {

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
	
	//sprites
	for(let i=0;i<sprites.length;i++) {
		
		let img = new Image();
		img.addEventListener('load', function() {
			sprites[i].state = 1; //loaded
			
			let loaded = 1;
			for(let j=0;j<sprites.length;j++) {
				if(sprites[j].state != 1) {
					loaded = 0;
					break;
				}
			}
			
			if(loaded) {
				callback();
			}
			
			console.log(this,"loaded!");
		});
		img.addEventListener('error', function() {
			sprites[i].state = 2; //error
			
			console.log(this,"error!");
		});
		img.src = 'sprites/'+sprites[i].file;
		
		sprites[i].image = img;
	}
	
	//[sprite1,sprite2={definition1=42,definition2=13,object{}}],sprite3]
	
	//gameplay
	objects = [];
	
	//start drawing
	window.requestAnimationFrame(draw);
	
}

function newSprite(file,ox,oy) {
	sprites.push({
		file: file,
		state: 0, //not loaded
		ox: ox,
		oy: oy
	});
	return sprites[sprites.length-1];
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

function html(id) {
	return document.getElementById(id);
}

function Rect(left,top,right,bottom) {
	return {
		left: left, top: top,
		right: right, bottom: bottom
	};
}
function drawRect(x,y,rect) {
	ctx.rect(x+rect.left, y+rect.top, rect.right-rect.left, rect.bottom - rect.top);
}
function drawSprite(x,y,sprite) {
	ctx.drawImage(sprite.image,x-sprite.ox,y-sprite.oy);
}

//}

