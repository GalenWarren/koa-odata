var path = require("path");

/**
* Helper to laod source modules
*/
export function sourceRequire( moduleName ) {
  return require( path.join( __dirname, "../../../dist/common/", moduleName ));
}
