var Promise = require("bluebird");

/**
* Helper to test a pipeline process method
*/
export function testPipelineProcess( pipelineComponent, context ) {
  return Promise.coroutine( pipelineComponent.process ).call( pipelineComponent, Promise.resolve(), context );
}
