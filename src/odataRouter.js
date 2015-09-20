import Router from "koa-router";

/**
* The OData router
*/
export class ODataRouter extends Router {

  constructor( options ) {

    // base class constructor
    super(options);

    // handle get requests
    this.get( "/*target", function*() {
      this.body = `Returning data for ${this.params.target}`;
    });

  }

}
