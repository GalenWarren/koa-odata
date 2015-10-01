/**
* Class that represents the odata state through the processing of the request
* @class
*/
export class PipelineState {
  /**
  * The segments
  */
  segments = null

  /**
  * The expression
  */
  expression = null

  /**
  * Parameters to be supplied to the expression
  */
  parameters = []

  /**
  * The function that will be called to execute get requests
  */
  get

}
