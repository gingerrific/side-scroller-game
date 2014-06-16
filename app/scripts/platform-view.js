'use strict';

////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// VIEW
////////////////////////////////////////////////////////////
var PlatformView = Backbone.View.extend({
	platformTemplate:  _.template($('.platform-template').text()),

	initialize: function() {
		$('.display-container').append(this.el);

		this.render();
		this.setLifespan();
	},

	render: function() {
		var platformRendered = this.platformTemplate(this.model);
		this.$el.html(platformRendered);
		return this;
	},

	setLifespan: function() {
		var that = this;

		setTimeout(function() {
			that.destroy();
		}, 7000);
	},

	destroy: function() {
		this.model.destroy();
		this.remove();
	}
});