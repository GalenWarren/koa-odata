import {Container} from "aurelia-dependency-injection";
import {Pipeline} from "./pipeline/index";
import _ from "lodash";
import Cache from "lru-cache";

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

  // create the container and register options
  const container = new Container();
  container.registerInstance( "options", actualOptions );

  // register the cache object -- kgw configure!
  container.registerInstance( Cache, new Cache());

  // resolve the pipeline
  return container.get(Pipeline).createApp();
}
