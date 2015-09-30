import koa from "koa";
import {inject} from "aurelia-dependency-injection";
import {ParsePipelineComponent} from "./parse";

/**
* The main application pipeline object
*/
@inject(
  "options",
  ParsePipelineComponent
)
export class Pipeline {

  /**
  * Construction
  */
  constructor( options, ...pipelineComponents ) {

    this.options = options;
    this.pipelineComponents = pipelineComponents;
  }

  /**
  * Create the koa app for this set of options
  */
  createApp() {

    // create the koa app
    const app = koa();

    // add all the pipeline components to the app
    const pipeline = this;
    for (let pipelineComponent of this.pipelineComponents) {
      app.use( function *(next) {
        yield * pipelineComponent.process( next, this, pipeline );
      });
    }

    // done!
    return app;

  }

}
