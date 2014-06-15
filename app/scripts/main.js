'use strict';

////////////////////////////////////////////////////////////
////////////////////////////////////////////// INITIALIZE UI
////////////////////////////////////////////////////////////
$(document).ready(function() {
	// $('.background').pan({fps: 5, speed: 3, dir: 'right', depth: 50});
	// $('.background').spRelSpeed(5);

	loadPlatforms();
});

////////////////////////////////////////////////////////////
///////////////////////////////////////////// INITIALIZE APP
////////////////////////////////////////////////////////////
var platformCollection = new PlatformCollection();
var numDelayMilliseconds = 3000;
var numIntervalID = 0;
var numLivePlatforms = 0;

function loadPlatforms() {
	platformCollection.fetch().done(function() {
		numIntervalID = setInterval(function() {
			var objPlatformModel = platformCollection.add({});
			objPlatformModel.save();

			new PlatformView({model: objPlatformModel});
		}, numDelayMilliseconds);
	});
}

function stopPlatformLoad() {
	clearInterval(numIntervalID);
	console.log('Platform loading has been stopped.');
}