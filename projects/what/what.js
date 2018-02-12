//Game

sPlayer = newSprite('player.png',16,16);
//newSound('death.ogg');

function onStart() {
	onDebug();
	console.log("Game start!");
	player = new Player();
}

function Player() {
	Obj.call(this);
	
	this.shape = 0; //rect
	this.mask = Rect(-32,-32,32,32);
	
	this.maxspeed = 160;
	
	this.step = function() {
		this.x += delta * this.maxspeed * ((key[68]?1:0) - (key[65]?1:0));
		this.y += delta * this.maxspeed * ((key[83]?1:0) - (key[87]?1:0));
	}
	this.draw = function() {
		// ctx.beginPath();
		// drawRect(Math.floor(this.x), Math.floor(this.y), this.mask);
		// ctx.fillStyle = "#000";
		// ctx.fill();
		// ctx.closePath();
		
		drawSprite(this.x,this.y,sPlayer);
	}
}

function onDebug() {
	console.log("test");
	debug = html("debug");
	
	debugTimescale = html("debugTimescale");
	debugTimescaleSet = html("debugTimescaleSet");
	
	debugTimescaleSet.addEventListener("click",function(){
		let f = parseFloat(debugTimescale.value);
		console.log(f);
		if (!isNaN(f)) {
			timescale = f;
		}
	});
	
}

start(onStart);