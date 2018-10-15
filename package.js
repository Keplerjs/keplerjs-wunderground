Package.describe({
  version: "1.4.0",
  name: 'keplerjs:wunderground',
  summary: 'keplerjs plugin for wunderground API',
  git: "https://github.com/Keplerjs/Kepler.git"
});

Package.onUse(function(api) {

  api.versionsFrom("1.5.1");

  api.use([
    'keplerjs:core@1.4.0',
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
