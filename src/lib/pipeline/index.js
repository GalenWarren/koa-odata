import koa from "koa";
import {inject} from "aurelia-dependency-injection";
import {InitPipelineComponent} from "./init";
import {ParsePipelineComponent} from "./parse";

/**
* The main application pipeline object
*/
@inject(
  "options",
  InitPipelineComponent,
  ParsePipelineComponent
)
export class Pipeline {

  /**
  * Construction
  */
  constructor( options, ...pipelineComponents ) {

    debugger;

    this.options = options;
    this.pipelineComponents = pipelineComponents;
  }

  /**
  * Create the koa app for this set of options
  */
  createApp() {

    debugger;

    // create the koa app
    const app = koa();

    // add all the pipeline components to the app
    for (let pipelineComponent of this.pipelineComponents) {
      app.use( function *(next) {
        yield * pipelineComponent.process( next, this );
      });
    }

    // done!
    return app;

  }

}
