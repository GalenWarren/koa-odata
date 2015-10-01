import koa from "koa";
import {inject} from "aurelia-dependency-injection";
import {ErrorPipelineComponent} from "./error";
import {ParsePipelineComponent} from "./parse";
import {PreparePipelineComponent} from "./prepare";
import {ExecutePipelineComponent} from "./execute";
import Cache from "lru-cache";

/**
* The main application pipeline object
*/
@inject(
  "options",
  ErrorPipelineComponent,
  ParsePipelineComponent,
  PreparePipelineComponent,
  ExecutePipelineComponent
)
export class Pipeline {

  /**
  * The configuration options
  */
  options

  /**
  * The pipeline components
  */
  components

  /**
  * The metadata for this pipeline's model
  */
  modelMetadata

  /**
  * Construction
  */
  constructor( options, ...components ) {
    this.options = options;
    this.components = components;
    this.modelMetadata = options.model;
  }

  /**
  * Create the koa app for this set of options
  */
  createApp() {

    // create the koa app
    const app = koa();

    // add all the pipeline components to the app
    const pipeline = this;
    for (let component of this.components) {
      app.use( function *(next) {
        yield * component.process( next, this, pipeline );
      });
    }

    // done!
    return app;

  }

}
