
Kepler.Place.include({
	/**
	 * reformat dates to local time
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	formatWeather: function(data) {
		var iconUrl = K.settings.public.wunderground.iconsBaseUrl;
		var ret = _.map(data, function(d) {
			var date = new Date(0);
			date.setUTCSeconds(d.date);

			var day = date.getDate(),
				mon = date.getMonth()+1,
				yea = date.getFullYear();

			d.date = ([yea,mon,day]).join('-');
			
			d.iconCode = d.iconCode<10 ? '0'+d.iconCode : d.iconCode;

			d.icon = iconUrl+d.iconCode+'.svg';
			return d;
		});
		return ret;
	},

	loadWeather: function() {

		var self = this;

		//self.weather = K.Cache.get(self.loc,'weather');

		if(!self.weather)
			Meteor.call('getWeatherByLoc', self.loc, function(err, res) {

				let localRes = self.formatWeather(res);

				self.weather = localRes;//K.Cache.set(self.loc, localRes, 'weather');
				console.log(self.weather)
				self._dep.changed();
			});
	},
	getWeatherList: function() {
		this._dep.depend();
		return this.weather;
	}
});
