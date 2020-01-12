
var	getOpts = {
		timeout: 20000,	//timeout connessioni http remote
		headers: {
			'Accept-Encoding': 'gzip',
			'User-Agent': ''
		}
	};

var weatherAPI = function(ll) {

	var tmplUrl = "https://api.weather.com/v3/wx/forecast/daily/5day?"+
				  "geocode={lat},{lon}&format=json&"+
				  "units=m&language=en-US&"+
				  "apiKey={key}",
		url = K.Util.tmpl(tmplUrl, {
			key: K.settings.wunderground.key,
			lat: ll[0], lon: ll[1]
		});

	try {
		res = HTTP.get(url, getOpts);
		console.log(url)
	} catch(e) {
		console.log('Weather: error',url,e);
		return null;
	}

	if(res && res.statusCode == 200 && res.data)
	{
		let day = res.data.daypart[0];
		let ret = [];

		_.each(day['daypartName'], function(dayName, k) {
			if(dayName) {
				ret.push({
					dayName: dayName,
					date: res.data.validTimeUtc[parseInt(k/2)],
					temp:  {
						min: day['temperatureWindChill'][k],
						max: day['temperatureHeatIndex'][k]
					},
					wind: {
						vel: day['windSpeed'][k],
						ang: day['windDirection'][k]
					},
					prob: day['precipChance'][k],
					humid: day['relativeHumidity'][k],
					iconCode: day['iconCode'][k]
				});
			}
		});
		return ret;
	}
	else
		return null;
};

Meteor.methods({
	getWeatherByLoc: function(ll) {

		ll = K.Util.geo.locRound(ll, 2);

		return K.Cache.get(ll, 'weather', function(loc) {
			return weatherAPI(loc);
		}, K.settings.wunderground.cacheTime);
	}
});
