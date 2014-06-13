// hero character movement
$(window).keydown( function (key) {

	// left arrow
	if (key.keyCode === 37) {
		event.preventDefault();
		// Filter out commands if you're at the edge of the board
		if (heroLocation.xCoord > 0 ) {
			// Create a copy of current location and test if the next move would move you into an stone wall
			upcomingHeroLocation = _.extend({}, heroLocation);
			upcomingHeroLocation.xCoord -= 64;
			if (_.findWhere(wallCoordinates, upcomingHeroLocation) === undefined) {
				// Setting the proper coordinate on the hero model
				Game.models.hero.attributes.positionX -= 1;
				// Each tile is 64px and moving in increments of 64 will move the character to each tile
				heroLocation.xCoord = heroLocation.xCoord - 64;
				$('.hero').css({'-webkit-transform': 'matrix(1, 0, 0, 1, '+heroLocation.xCoord+', '+heroLocation.yCoord+')'}); // X movement
			}
		}
	}
	// right arrow
	else if (key.keyCode === 39) {
		event.preventDefault();
		// Filter out commands if you're at the edge of the board
		if (heroLocation.xCoord <= 512) {
			// Create a copy of current location and test if the next move would move you into an stone wall
			upcomingHeroLocation = _.extend({}, heroLocation);
			upcomingHeroLocation.xCoord += 64;
			//	findWhere will return the location where these objects have the same properties (x,y). If it's return is undefined, there is no conflict.
			if (_.findWhere(wallCoordinates, upcomingHeroLocation) === undefined) {
				// Setting the proper coordinate on the hero model
				Game.models.hero.attributes.positionX += 1;
				// Each tile is 64px and moving in increments of 64 will move the character to each tile
				heroLocation.xCoord = heroLocation.xCoord + 64;
				$('.hero').css({'-webkit-transform': 'matrix(1, 0, 0, 1, '+heroLocation.xCoord+', '+heroLocation.yCoord+')'}); // X movement
			}
		}
	}
	// up arrow
	else if (key.keyCode === 38) {
		event.preventDefault();
		// Filter out commands if you're at the edge of the board
		if (heroLocation.yCoord > 0) {
			// Create a copy of current location and test if the next move would move you into an stone wall
			upcomingHeroLocation = _.extend({}, heroLocation);
			upcomingHeroLocation.yCoord -= 64;
			if (_.findWhere(wallCoordinates, upcomingHeroLocation) === undefined) {
				// Setting the proper coordinate on the hero model
				Game.models.hero.attributes.positionY -= 1;
				// Each tile is 64px and moving in increments of 64 will move the character to each tile
				heroLocation.yCoord = heroLocation.yCoord - 64;
				$('.hero').css({'-webkit-transform': 'matrix(1, 0, 0, 1, '+heroLocation.xCoord+', '+heroLocation.yCoord+')'}); // Y movement
			}
		}
	}
	// down arrow
	else if (key.keyCode === 40) {
		event.preventDefault();
		// Filter out commands if you're at the edge of the board
		if (heroLocation.yCoord <= 512) {
			// Create a copy of current location and test if the next move would move you into an stone wall
			upcomingHeroLocation = _.extend({}, heroLocation);
			upcomingHeroLocation.yCoord += 64;
			if (_.findWhere(wallCoordinates, upcomingHeroLocation) === undefined) {
				// Setting the proper coordinate on the hero model
				Game.models.hero.attributes.positionY += 1;
				// Each tile is 64px and moving in increments of 64 will move the character to each tile
				heroLocation.yCoord = heroLocation.yCoord + 64;
				$('.hero').css({'-webkit-transform': 'matrix(1, 0, 0, 1, '+heroLocation.xCoord+', '+heroLocation.yCoord+')'}); // Y movement
			}
		}
	}
});