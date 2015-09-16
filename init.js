// set up es6 environment, using bluebird for promises
var Promise = require("bluebird");
var System = require("systemjs");

// set base url for module loading
System.config({
  baseURL: "file:///" + __dirname
});

// set config information, this performs more System initialization
require("./config");

// export the system object
module.exports = System;
