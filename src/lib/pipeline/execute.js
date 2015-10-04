import {inject} from "aurelia-dependency-injection";
import {PipelineComponent} from "./base";
import {PipelineState} from "./state";
import {Functions} from "../expressions/functions";
import _ from "lodash";

/**
* The pipeline component to parse the odata request
*/
export class ExecutePipelineComponent extends PipelineComponent {

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

    const collection = _([
      { name: "Galen" },
      { name: "Bob" },
      { name: "Steve" }
    ]);

    const functions = new Functions();

    context.response.body = context.state.odata.get( collection, context.state.odata.parameters, functions );

    yield next;

  }

}
