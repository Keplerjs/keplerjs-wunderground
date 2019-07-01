
K.Plugin({
	name: 'wunderground',
	templates: {
		tabPlace: {'tabPlace_weather':{order:0}}
	},
	settings: {
		"public": {
			"wunderground": {
				"iconsBaseUrl": "/packages/keplerjs_wunderground/assets/images/icons/"
			}
		},
		"wunderground": {
			"cacheTime": "daily",
			"key": ""
		}
	}
});