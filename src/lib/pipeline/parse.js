import parser from "odata-parser";
import {inject} from "aurelia-dependency-injection";
import {PipelineComponent} from "./base";
import {Segments} from "../segments/index";
import {Parameters} from "../parameters/index";
import {PipelineState} from "./state";
import _ from "lodash";

/**
* The pipeline component to parse the odata request
*/
@inject("options", Segments, Parameters )
export class ParsePipelineComponent extends PipelineComponent {

  /**
  * Construction
  */
  constructor( options, segments, parameters ) {
    super(options);
    this.segments = segments;
    this.parameters = parameters;
  }

  /**
  * Returns a koa middleware function that parses the request
  */
  *process( next, context, pipeline ) {

    // initialize the odata state
    context.state.odata = new PipelineState( pipeline.modelMetadata );

    // parse the segments
    context.state.odata.segments = this.segments.parse( context.request.path, pipeline );

    // is query string supplied?
    if (context.request.querystring) {

      // yes, parse it
      const parsed = parser.parse( context.request.querystring );
      context.state.odata.expression = this.parameters.parse( parsed );
    }

    debugger;

    yield next;

  }

}
