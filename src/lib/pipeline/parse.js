import parser from "odata-parser";
import {inject} from "aurelia-dependency-injection";
import {PipelineComponent} from "./base";
import {Parameters} from "../parameters/index";

/**
* The pipeline component to parse the odata request
*/
@inject("options", Parameters)
export class ParsePipelineComponent extends PipelineComponent {

  /**
  * Construction
  */
  constructor( options, parameters ) {
    super(options);
    this.parameters = parameters;
  }

  /**
  * Returns a koa middleware function that parses the request
  */
  *process( next, context ) {

    yield next;

    //    this.body = JSON.stringify(parser.parse(this.request.querystring));
    context.body = context.request.path;

  }

}
