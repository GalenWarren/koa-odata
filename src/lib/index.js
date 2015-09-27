import {Container} from "aurelia-dependency-injection";
import {Pipeline} from "./pipeline/index";
import _ from "lodash";

// re-export stuff used by consumers
export * from "./metadata/index";
export * from "./providers/index";

/**
* The main odata function, returns a koa object that can be used directly
* or mounted into another application
*/
export function odata( options ) {

  // set defaults
  const actualOptions = _.defaults( {}, options, {

  });

  // resolve the pipeline object from the container and return the koa app
  const container = new Container();
  container.registerInstance( "options", actualOptions );
  return container.get(Pipeline).createApp();
}
