/**
* @class App.tux.ProgressBar
* @extend Ext.Component
* @author Richard Kimber
*/
Ext.define('App.tux.ProgressBar',{
	extend: 'Ext.Component',
	xtype: 'progressbar',

	template: [
		{
			cls: Ext.baseCSSPrefix + 'meter',
			reference: 'meter',
			tag: 'div',
			children: [
				{
					reference: 'span',
					tag: 'span',
				}
			]
		}
	],

	initialize: function() {
		console.log('constructor');
		window.progress = this;

		var self = this;
		self.updateProgress(0);
	},

	updateProgress: function(percentage) {
		var self = this;
		self.span.setWidth(percentage + '%');
	}
});