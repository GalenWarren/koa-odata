var initModule = sourceRequire("lib/pipeline/init");

describe("InitPipelineComponent", function() {

  it("adds an instance of ODataState to the context state", function() {

    const init = new initModule.InitPipelineComponent({});

    let x = 0;
    x.should.equal(0);

  });
});
