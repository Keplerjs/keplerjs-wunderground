
Kepler.Place.include({
	/**
	 * reformat dates to local time
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	formatWeather: function(data) {
		var iconUrl = K.settings.public.wunderground.iconsBaseUrl;
		return _.map(data, function(d) {
			var date = new Date(0);
			date.setUTCSeconds(d.date);

			var day = date.getDate(),
				mon = date.getMonth()+1,
				yea = date.getFullYear();

			d.date = ([yea,mon,day]).join('-');
			d.icon = iconUrl+(d.iconCode||'na')+'.svg';
			return d;
		});
	},

	loadWeather: function() {

		var self = this;

		self.weather = K.Cache.get(self.loc,'weather');

		if(!self.weather)
			Meteor.call('getWeatherByLoc', self.loc, function(err, res) {

				let localRes = self.formatWeather(res);

				self.weather = K.Cache.set(self.loc, localRes, 'weather');
				self._dep.changed();
			});
	},
	getWeatherList: function() {
		this._dep.depend();
		return this.weather;
	}
});