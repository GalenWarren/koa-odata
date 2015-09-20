// enable harmony features
require("harmonize")();

// load systemjs, etc
require("./init");

// register the various tasks
require("json5/lib/require");
require("shabeco-build-tools")(require("./build.json5"));
