
/*Template.tabPlace_weather_forecast.onRendered(function() {

	var days$ = this.$('.weather_day');

	days$.eq(0).show();
	
	this.$('#slider_weather').slider({
			value: 0,
			step:0.5
		})
		.on('slide', function(e) {
			days$.hide().eq(e.value).show();
		})
		.parent().css({width:'97%'});
});
*/

Template.tabPlace_weather.events({
	'click .place-btn-weather': function(e) {
		e.preventDefault();		
		this.loadWeather();
	}
});