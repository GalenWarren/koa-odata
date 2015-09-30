import {Container} from "aurelia-dependency-injection";
import path from "path";
import _ from "lodash";

/**
* Helper to laod source modules
*/
export function sourceRequire( moduleName ) {
  return require( path.join( __dirname, "../../../dist/common/", moduleName ));
}

/**
* A shared container for tests
*/
export const container = new Container();
