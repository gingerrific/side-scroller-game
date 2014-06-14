$(window).keydown(function(key) {
	// SPACEBAR
	if (key.keyCode === 32) {
		console.log('spacebar');
		// jump stuff will go here
	}

	// LEFT ARROW
	if (key.keyCode === 37) {
		$('.sprite').removeClass('sprite-stand-forward');
		$('.sprite').removeClass('sprite-run-forward');
		$('.sprite').addClass('sprite-run-backward');
		$('.sprite').addClass('sprite-stand-backward');
		$('.sprite').addClass('sprite-animate');
	}

	// RIGHT ARROW
	if (key.keyCode === 39) {
		$('.sprite').removeClass('sprite-stand-backward');
		$('.sprite').removeClass('sprite-run-backward');
		$('.sprite').addClass('sprite-run-forward');
		$('.sprite').addClass('sprite-stand-forward');
		$('.sprite').addClass('sprite-animate');
	}
});

$(window).keyup(function(key) {
	// LEFT ARROW
	if (key.keyCode === 37) {
		resetSprite();
	}

	// RIGHT ARROW
	if (key.keyCode === 39) {
		resetSprite();
	}

	function resetSprite() {
		$('.sprite').removeClass('sprite-run-forward');
		$('.sprite').removeClass('sprite-run-backward');
		$('.sprite').removeClass('sprite-animate');
	}
});