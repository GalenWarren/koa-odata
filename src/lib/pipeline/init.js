import {ODataState} from "./state";

/**
* Init component
*/
export function init( options ) {

  return function *(next) {
    this.state.odata = new ODataState( options );
    yield next;
  };
  
}
