/**
* Class that represents the odata state through the processing of the request
* @class
*/
export class PipelineState {

  /**
  * The metadata for the model being processed
  */
  modelMetadata

  /**
  * The segments
  */
  segments

  /**
  * The expression
  */
  expression

  /**
  * @constructor
  */
  constructor( modelMetadata ) {
    this.modelMetadata = modelMetadata;
  }

}
