/**
* Parse component
*/

export function parse( options ) {
  return function *() {
    this.body = `request for path=${this.request.path} and querystring=${this.request.querystring}`;
  };
}
