var Promise = require("bluebird");
var testUtilities = require("../utilities");
var pipelineUtilities = require("./utilities");
var expect = require("chai").expect;

var parseModule = testUtilities.sourceRequire("lib/pipeline/parse");
var stateModule = testUtilities.sourceRequire("lib/pipeline/state");

describe("ParsePipelineComponent", function() {

  it("adds an instance of ODataState to the context state", function( done ) {

    const parse = new parseModule.ParsePipelineComponent({});
    const context = {
      state: {
        odata: new stateModule.ODataState()
      }
    };

    pipelineUtilities.testPipelineProcess( init, context ).then( function() {
      expect(context.state.odata).to.be.an.instanceOf(stateModule.ODataState);
    }).then( done, done );

  });

});
