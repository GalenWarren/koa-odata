var Promise = require("bluebird");
var testUtilities = require("../utilities");
var pipelineUtilities = require("./utilities");
var expect = require("chai").expect;

var initModule = testUtilities.sourceRequire("lib/pipeline/init");
var stateModule = testUtilities.sourceRequire("lib/pipeline/state");

describe("InitPipelineComponent", function() {

  it("adds an instance of ODataState to the context state", function( done ) {

    const init = new initModule.InitPipelineComponent({});

    const context = {
      state: {}
    };

    pipelineUtilities.testPipelineProcess( init, context ).then( function() {

      expect(context.state.odata).to.be.an.instanceOf(stateModule.ODataState);

    }).then( done, done );

  });

});
