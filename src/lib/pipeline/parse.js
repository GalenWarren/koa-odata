import parser from "odata-parser";

/**
* Parse component
*/

export function parse( options ) {

  return function *() {

//    this.body = JSON.stringify(parser.parse(this.request.querystring));
    this.body = this.request.path;

  };

}
