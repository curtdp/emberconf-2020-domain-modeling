"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // options
    snippetPaths: ["app/exercises"],
    "ember-prism": {
      plugins: ["normalize-plugins"]
    }
    // 'theme': 'twilight',
    // 'components': ['scss', 'javascript'], //needs to be an array, or undefined.
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  app.import("node_modules/codemirror/lib/codemirror.js");
  app.import("node_modules/codemirror/lib/codemirror.css");
  app.import("node_modules/codemirror/mode/javascript/javascript.js");
  app.import("node_modules/codemirror/addon/edit/closebrackets.js");
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
