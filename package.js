
Package.describe({
  name: 'keplerjs:wunderground',
  summary: 'keplerjs plugin for wunderground API',
  version: "1.2.6",
  git: "https://github.com/Keplerjs/Kepler.git"
});

Package.onUse(function(api) {

  api.versionsFrom("1.5.1");

  api.use([
    'keplerjs:core@1.2.4',
  ]);
  
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

  api.addAssets('assets/images/weather.png', 'client');

  api.addFiles([
    'server/weather.js',
  ],'server');

});
