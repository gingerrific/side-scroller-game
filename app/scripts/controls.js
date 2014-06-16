var sprite = {
	xCoord:0, yCoord: 0,
	vX: 0, vY: 0,
	direction: 'right',
	mass: 60, //kg
	restitution: -0.3
};

var frameRate = 1/20; // Seconds
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

	// Integrate to get position
	sprite.xCoord += sprite.vX*frameRate*100;
	$('.sprite').css({'left': sprite.xCoord+'em'});
	sprite.yCoord += sprite.vY*frameRate*100;

	if (sprite.yCoord <= 0) {
		$('.sprite').css({'bottom': -sprite.yCoord+'em'});

	}
	else {
		sprite.yCoord = 0
		$('.sprite').css({'bottom': sprite.yCoord+'em'});
		$('.sprite').removeClass('sprite-jump-forward');
		$('.sprite').removeClass('sprite-jump-backward');
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
		if (sprite.xCoord <= 60) {
				sprite.vX = 0.3;
				sprite.direction = 'right';
		}
	}
	// up arrow
	else if (key.keyCode === 38) {
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

	// space bar
	else if (key.keyCode === 32) {
		event.preventDefault();
		// Filter out commands if you're at the edge of the board
		if (sprite.yCoord == 0) {
				sprite.vY = -1;
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