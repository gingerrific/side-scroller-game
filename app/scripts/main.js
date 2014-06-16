'use strict';

////////////////////////////////////////////////////////////
////////////////////////////////////////////// INITIALIZE UI
////////////////////////////////////////////////////////////
$(document).ready(function() {
	$('.background').pan({fps: 20, speed: 3, dir: 'right', depth: 50});
	$('.background').spRelSpeed(5);

	startPlatformLoad();
});

////////////////////////////////////////////////////////////
///////////////////////////////////////////// INITIALIZE APP
////////////////////////////////////////////////////////////
var numDelayMilliseconds = 3000;
var numIntervalID = 0;

function startPlatformLoad() {
	numIntervalID = setInterval(function() {
		new PlatformView({model: new PlatformModel()});
	}, numDelayMilliseconds);
}

function stopPlatformLoad() {
	clearInterval(numIntervalID);
	console.log('Platform loading has been stopped.');
}