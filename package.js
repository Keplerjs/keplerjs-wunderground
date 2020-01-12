var version = '1.7.0';

Package.describe({
  version: version,
  name: 'keplerjs:wunderground',
  summary: 'keplerjs plugin for wunderground API',
  git: "https://github.com/Keplerjs/Kepler.git"
});

Package.onUse(function(api) {
  api.use([
    'keplerjs:core@'+version,
  ]);
  
  api.versionsFrom("1.5.1");

  api.addFiles([
    'plugin.js',
    'i18n/it.js',
    'i18n/en.js',
    'i18n/de.js',
    'i18n/es.js',
    'i18n/fr.js',	
  ]);

  api.addFiles([
    'client/Place_weather.js',
    'client/views/panels.html',
    'client/views/panels.js',
    'client/stylesheets/panels/weather.css',
  ],'client');

  api.addAssets([
  	'assets/images/weather.svg'
  ],'client');

  var icons = ["na.svg","00.svg","01.svg","02.svg","03.svg","04.svg","05.svg","06.svg","07.svg","08.svg","09.svg","10.svg","11.svg","12.svg","13.svg","14.svg","15.svg","16.svg","17.svg","18.svg","19.svg","20.svg","21.svg","22.svg","23.svg","24.svg","25.svg","26.svg","27.svg","28.svg","29.svg","30.svg","31.svg","32.svg","33.svg","34.svg","35.svg","36.svg","37.svg","38.svg","39.svg","40.svg","41.svg","42.svg","43.svg","44.svg","45.svg","46.svg","47.svg"];
  api.addAssets(icons.map(function(f) {
  	return 'assets/images/icons/'+f;
  }), 'client');

  api.addFiles([
    'server/weather.js',
  ],'server');

});
