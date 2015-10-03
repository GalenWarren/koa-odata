import {inject} from "aurelia-dependency-injection";
import {PipelineComponent} from "./base";
import _ from "lodash";

/**
* The pipeline component to parse the odata request
*/
@inject("options")
export class ErrorPipelineComponent extends PipelineComponent {

  /**
  * Construction
  */
  constructor( options ) {
    super(options);
  }

  /**
  * Returns a koa middleware function that parses the request
  */
  *process( next, context, pipeline ) {

    try {
      yield next;
    }
    catch (err) {

      // set the error return
      context.status = err.status || 500;
      context.body = err.message;
      context.app.emit('error', err, context);

    }

  }

}
