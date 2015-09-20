import Router from "koa-router";

/**
* The OData router
*/
export class ODataRouter extends Router {

  constructor( options ) {

    // base class constructor
    super(options);

    // map collection routes without keys
    this.get( "/:collectionName", function*() {
      this.body = `Returning data for ${this.params.collectionName}`;
    });

  }

}
