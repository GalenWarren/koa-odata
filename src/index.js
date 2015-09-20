/**
* The middleware function for koa
*/
export function odata() {

  return function*() {
    this.body = 'Hello OData';
  };

}
