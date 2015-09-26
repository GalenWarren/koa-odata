// enable harmony features
require("harmonize")();

// register the various tasks
require("json5/lib/require");
require("shabeco-build-tools")(require("./build.json5"), __dirname);
