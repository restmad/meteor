Package.describe({
  name: 'standard-minifiers-css',
  version: '1.0.3-modules.5',
  summary: 'Standard css minifiers used with Meteor apps by default.',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: "minifyStdCSS",
  use: [
    'minifiers-css'
  ],
  npmDependencies: {
    "source-map": "0.5.3"
  },
  sources: [
    'plugin/minify-css.js'
  ]
});

Package.onUse(function(api) {
  api.use('isobuild:minifier-plugin@1.0.0');
});

Package.onTest(function(api) {
});
