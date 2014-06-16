'use strict';

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// MODEL
////////////////////////////////////////////////////////////
var numMinYCoordEms = 3;
var numMaxYCoordEms = 22;
var numMinWidthEms = 12;
var numMaxWidthEms = 20;

var PlatformModel = Backbone.Model.extend({
	initialize: function() {
		this.yCoordinate =  Math.random() * (numMaxYCoordEms - numMinYCoordEms) + numMinYCoordEms;
		this.width = Math.random() * (numMaxWidthEms - numMinWidthEms) + numMinWidthEms;
	}
});