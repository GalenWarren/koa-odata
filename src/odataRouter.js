import Router from "koa-router";

/**
* The OData router
*/
export class ODataRouter extends Router {

  constructor( options ) {

    // base class constructor
    super(options);

    // map
    this.get( "/:collectionName(:key)", function*() {
      this.body = `Returning data for ${this.params.collectionName}, key=${this.params.key}`;
    });

    // map collection routes without keys
    this.get( "/:collectionName", function*() {
      this.body = `Returning data for ${this.params.collectionName}`;
    });

  }

}
