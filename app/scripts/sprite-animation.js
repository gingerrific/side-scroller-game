'use strict';

$(window).keydown(function(key) {
	// Spacebar
	if (key.keyCode === 32) {
		console.log('spacebar');
		// jump stuff will go here
	}

	// Left Arrow
	if (key.keyCode === 37) {
		$('.sprite').removeClass('sprite-stand-forward');
		$('.sprite').removeClass('sprite-run-forward');
		$('.sprite').addClass('sprite-run-backward');
		$('.sprite').addClass('sprite-stand-backward');
		$('.sprite').addClass('sprite-animate');
	}

	// Right Arrow
	if (key.keyCode === 39) {
		$('.sprite').removeClass('sprite-stand-backward');
		$('.sprite').removeClass('sprite-run-backward');
		$('.sprite').addClass('sprite-run-forward');
		$('.sprite').addClass('sprite-stand-forward');
		$('.sprite').addClass('sprite-animate');
	}
});

$(window).keyup(function(key) {
	// Left or Right Arrow
	if (key.keyCode === 37 || key.keyCode === 39) {
		resetSprite();
	}

	function resetSprite() {
		$('.sprite').removeClass('sprite-run-forward');
		$('.sprite').removeClass('sprite-run-backward');
		$('.sprite').removeClass('sprite-animate');
	}
});