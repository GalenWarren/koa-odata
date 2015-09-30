import Promise from "bluebird";
import {sourceRequire,container} from "../utilities";
import {testPipelineProcess} from "./utilities";
import {chai} from "chai";

const {ParsePipelineComponent} = sourceRequire("lib/pipeline/parse");
const {PipelineState} = sourceRequire("lib/pipeline/state");
const {EntitiesSegment} = sourceRequire("lib/segments/entities");
const {modelMetadata} = sourceRequire("sample/model");

/**
* Helper to prepare for a test
*/
function prepareTest( path, querystring) {

  const parse = container.get(ParsePipelineComponent);
  const context = {
    state: {
      odata: new PipelineState(modelMetadata)
    },
    request: {
      path: path,
      querystring: querystring
    }
  };
  return [parse,context];
}


describe("ParsePipelineComponent", function() {

  it("adds a populated instance of PipelineState to the context state", function( done ) {

    const [parse, context] = prepareTest( "/users");

    testPipelineProcess( parse, context ).then( function() {

      expect(context.state.odata.segments).to.be.instanceOf(Array);
      expect(context.state.odata.segments.length).to.equal(1);
      expect(context.state.odata.segments[1]).to.be.instanceOf(EntitiesSegment);
      expect(context.state.odata.segments[1].metadata.name).to.equal("user");

    }).then( done, done );

  });

});
