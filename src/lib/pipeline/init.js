import {inject} from "aurelia-dependency-injection";
import {PipelineComponent} from "./base";
import {ODataState} from "./state";

/**
* The pipeline component to init the odata state
*/
@inject("options", ODataState )
export class InitPipelineComponent extends PipelineComponent {

  /**
  * Construct with the odata options
  */
  constructor( options ) {
    super(options);
  }

  /**
  * Init middleware
  */
  *process( next, context ) {
    context.state.odata = new ODataState( this.options );
    yield next;
  }

}
