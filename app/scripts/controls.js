////// the good one
var sprite = {
	xCoord:0, yCoord: 0, // xcoord = left side // ycoord = bottom
	xCoordRight: 11.875, // xcoordRight = right side
	yCoordTop: 13.4375,  // ycoordTop = top
	vX: 0, vY: 0, 
	direction: 'right',
	mass: 60, //kg
	restitution: -0.3,
	platform: 0,
};

var frameRate = 1/40; // Seconds
var frameDelay = frameRate * 1000; // ms
var loopTimer = false;


var Cd = 1; // Dimensionless
var rho = 1.22; // kg / m^3
var A = 0.22; //m^2
var ag = 3.25; // non-earth gravity




var loop = function () {

	// Do physics
	// Drag force: Fd = -1/2 * Cd * A * rho * v * v
	var Fx = -0.5 * Cd * A * rho * sprite.vX * sprite.vX * (sprite.vX / Math.abs(sprite.vX));
	var Fy = -0.5 * Cd * A * rho * sprite.vY * sprite.vY * (sprite.vY / Math.abs(sprite.vY));
			
	Fx = (isNaN(Fx) ? 0 : Fx);
	Fy = (isNaN(Fy) ? 0 : Fy);
			
	// Calculate acceleration ( F = ma )
	var ax = Fx / sprite.mass;
	var ay = ag + (Fy / sprite.mass);

	// Integrate to get velocity
	sprite.vX += ax*frameRate;
	sprite.vY += ay*frameRate;
	
	if (sprite.vY > -1 && sprite.vY < 1) {

	}

	else {
		sprite.vY = 0;
	}
			
	// Integrate to get position
	sprite.xCoord += sprite.vX*frameRate*100; // left side
	sprite.xCoordRight = sprite.xCoord+9.3; // right side

	$('.sprite').css({'left': sprite.xCoord+'em'});

	sprite.yCoord += sprite.vY*frameRate*100;
	sprite.yCoordTop = sprite.yCoord+13.4375;
	
	if (sprite.yCoord < 0 ) {
		$('.sprite').css({'bottom': -sprite.yCoord+(7.8125*sprite.platform)+'em'});


		if (sprite.yCoord <= -13 && sprite.xCoord >= 42 && sprite.xcoord <= 56) {
			console.log(sprite.yCoord,'love me dammit');
			// sprite.yCoord = 2;
			// sprite.platform = 2;

			// $('.sprite').css({'bottom': -sprite.yCoord+(7.8125*sprite.platform)+'em'});
			// $('.sprite').removeClass('sprite-jump-forward');
			// $('.sprite').removeClass('sprite-jump-backward');
		}

		else if (sprite.yCoord === -7.332866231710772 && sprite.xCoordRight >= 57) {
			sprite.yCoord = 1;
			sprite.platform = 1;

			$('.sprite').css({'bottom': -sprite.yCoord+(7.8125*sprite.platform)+'em'});
			$('.sprite').removeClass('sprite-jump-forward');
			$('.sprite').removeClass('sprite-jump-backward');
			console.log(sprite.yCoord)
		}

	}

	else {
		sprite.yCoord = 0 + sprite.platform;

		$('.sprite').css({'bottom': (sprite.yCoord - sprite.platform)+(7.8125*sprite.platform)+'em'});
		$('.sprite').removeClass('sprite-jump-forward');
		$('.sprite').removeClass('sprite-jump-backward');

		if (sprite.xCoordRight >= 56 && sprite.yCoord == 0) {
			sprite.vX = 0;
		}
		else if (sprite.xCoordRight <= 56.65) {
			sprite.platform = 0
		}

	}
}

setInterval(loop, frameDelay);

// hero sprite movement
$(window).keydown( function (key) {

	// left arrow
	if (key.keyCode === 37) {
		event.preventDefault();
		// Filter out commands if you're at the edge of the board
		if (sprite.xCoord > 0 ) {
				sprite.vX = -0.3;
				sprite.direction = 'left';
		}
	}
	// right arrow
	else if (key.keyCode === 39) {
		event.preventDefault();
		// Filter out commands if you're at the edge of the board
		if (sprite.xCoordRight <= 56 && sprite.yCoord == 0) {
				sprite.vX = 0.3;
				sprite.direction = 'right';
		}

		else if (sprite.yCoord > 0){
			sprite.vX = 0.3;
			sprite.direction = 'right';
		}
	}
	// up arrow
	else if (key.keyCode === 38) {
		event.preventDefault();
		// Filter out commands if you're at the edge of the board
		if (sprite.yCoord == 0 || sprite.yCoord == sprite.platform) {
				sprite.vY = -1;
				if (sprite.direction === 'right') {
					$('.sprite').addClass('sprite-jump-forward');

				}
				else if (sprite.direction === 'left') {
					$('.sprite').addClass('sprite-jump-backward');
				}
		}
	}

	// space bar
	else if (key.keyCode === 32) {
		event.preventDefault();
		// Filter out commands if you're at the edge of the board
		if (sprite.yCoord == 0) {
				sprite.vY = -1;

				if (sprite.direction === 'right') {
					$('.sprite').addClass('sprite-jump-forward');

				}
				else if (sprite.direction === 'left') {
					$('.sprite').addClass('sprite-jump-backward');
				}
		}
	}

});

$(window).keyup( function (key) {

	// left arrow
	if (key.keyCode === 37) {
		sprite.vX = 0;
	}

	else if (key.keyCode === 39) {
		sprite.vX = 0;
	}
});

var shape = {}

// coordinates are the left most position of the character/sprite. 
// also the xCoord is currently in ems, so the right-side position will be xCoord + 11.875em (sprite width)
// platform width: 11.875em;
// platform x-axis start: 58em
// platform height: 7.8125
// display width: 70em;


// true width is 9.3em
// extra 1.2875 on each side
// character right toe at box = 47.5 em

