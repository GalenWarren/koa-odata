import koa from "koa";
import {init,parse} from "./pipeline/index";

export * from "./metadata/index";
export * from "./providers/index";

/**
* The main odata function, returns a koa object that can be used directly
* or mounted into another application
*/
export function odata( options ) {

  debugger;

  const app = koa();

  // build up the pipeline
  app.use(init(options));
  app.use(parse(options));

  // done
  return app;
}
