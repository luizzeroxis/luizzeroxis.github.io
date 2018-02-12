//what

function startSpawn() {
	player = new Player();
	enemy = new Enemy(200,200);
	main = new Main();
	background = new Background();
	
}

//{ OBJECTS

function Main() {
	Obj.call(this,0,0,-1000);
		
	this.draw = function() {
		ctx.save();
		
		ctx.resetTransform();
		ctx.textAlign = "start";
		ctx.textBaseline = "top";
		ctx.fillStyle = "#000";
		ctx.fillText(fps + " fps",0,0);
		//ctx.fillText("("+mousex+","+mousey+") "+mouse,0,16);
		
		drawText(-viewx+","+-viewy,0,16);
		
		let objs = "";
		for(let i=0;i<objects.length;i++) {
			objs += objects[i].constructor.name+" ("+Math.floor(objects[i].x)+","+Math.floor(objects[i].y)+")"+"\n";
		}
		
		drawText(objs,0,32);
		
		ctx.restore();
	}
	
}

function Background() {
	Obj.call(this,0,0,1000);
	
	this.draw = function() {
		ctx.save();
		
		ctx.translate(0.5, 0.5);
		ctx.beginPath();
		ctx.moveTo(-1000,0);
		ctx.lineTo(+1000,0);
		ctx.moveTo(0,-1000);
		ctx.lineTo(0,1000);
		ctx.strokeStyle = "#48f";
		ctx.stroke();
		ctx.closePath();
		
		ctx.restore();
	}
}

function Player() {
	Obj.call(this,0,0);
	
	this.maxspeed = 256;
	
	var s = 32;
	var firerate = 0.15;
	var canFire = true;
	
	this.step = function() {
		
		this.x += delta * this.maxspeed * ((key[68]?1:0) - (key[65]?1:0));
		this.y += delta * this.maxspeed * ((key[83]?1:0) - (key[87]?1:0));
		
		viewx = Math.floor(canvas.width/2-player.x);
		viewy = Math.floor(canvas.height/2-player.y);
		
		// if(this.x<-s/2) {this.x=this.x+canvas.width+s;}
		// if(this.y<-s/2) {this.y=this.y+canvas.height+s;}
		// if(this.x>=canvas.width+s/2) {this.x=this.x-(canvas.width+s);}
		// if(this.y>=canvas.height+s/2) {this.y=this.y-(canvas.height+s);}
		
		if (key[84]) {
			this.destroy();
			console.log("You diedened");
		}
		
		if (mouse[0] && canFire) {
			
			new Bullet(this.x,this.y,Math.atan2((mousex-viewx)-player.x, (mousey-viewy)-player.y));
			canFire = false;
			
			alarm(firerate,function(){
				canFire = true;
			});
			
		}
		
	}
	
	this.draw = function() {
		ctx.beginPath();
		ctx.rect(Math.floor(this.x-s/2), Math.floor(this.y-s/2), s, s);
		//ctx.rect(this.x-s/2, this.y-s/2, s, s);
		ctx.fillStyle = "#008";
		ctx.fill();
		ctx.closePath();
	}
}

function Bullet(x,y,dir) {
	Obj.call(this,x,y,-1);
	
	compRectCollider.call(this);
	
	this.dir = dir;
	this.maxspeed = 512;
	
	this.w = 8;
	this.h = 8;
	
	this.step = function() {
		
		this.x += delta * Math.sin(this.dir) * this.maxspeed;
		this.y += delta * Math.cos(this.dir) * this.maxspeed;
		
		if(key[32]) {
			this.destroy();
			return;
		}
		
		//collisions
		
		for(var i=0;i<objects.length;i++) {
			
			var o = objects[i];
			if (o instanceof Enemy) {
				if (colRectOnRect(
						Rect(this.x-this.w/2, this.y-this.h/2, this.w, this.h),
						Rect(o.x-o.w/2, o.y-o.h/2, o.w, o.h))
					) {
						this.coll(o);
						o.coll(this);
						//return;
				}
			}
		}
		
		//outside view
		if(!colRectOnRect(
				Rect(this.x-this.w/2, this.y-this.h/2, this.w, this.h),
				Rect(-viewx,-viewy,canvas.width,canvas.height)
			)) {
			this.destroy();
		}
	}
	
	this.coll = function(other) {
		this.destroy();
	}
	
	this.draw = function() {
		
		ctx.save()
		
		ctx.beginPath();
		ctx.translate(Math.floor(this.x),Math.floor(this.y));
		ctx.rotate(-dir);
		ctx.rect(-this.w/2, -this.h/2, this.w, this.h);
		//ctx.arc(0,0,4,0,2*Math.PI);
		ctx.fillStyle = "#fc0";
		ctx.fill();
		ctx.closePath();
		
		ctx.restore();
		
	}	
	
}

function Enemy(x,y) {
	Obj.call(this,x,y);
	
	this.w = 32;
	this.h = 32;
	
	this.coll = function() {
		this.destroy();
	}
	
	this.draw = function() {
		ctx.beginPath();
		ctx.rect(Math.floor(this.x-this.w/2), Math.floor(this.y-this.h/2), this.w, this.h);
		ctx.fillStyle = "#f80";
		ctx.fill();
		ctx.closePath();
	}
	
}

//}

//{ SCRIPTS

function Rect(x,y,w,h) {
	return {
		x: x, y: y, w: w, h: h
	};
}

function colRectOnRect(rect1,rect2) {
	if (rect1.x < rect2.x + rect2.w && rect1.x + rect1.w >= rect2.x &&
		rect1.y < rect2.y + rect2.h && rect1.h + rect1.y >= rect2.y) {
		return true;
	}
	return false;
}
function drawText(text,x,y,lineheight = 16,sep = "\n") {
	let lines = text.split(sep);
	for(let i=0;i<lines.length;i++) {
		ctx.fillText(lines[i],x,y+(i*lineheight));
	}
}

//}

//START
start();