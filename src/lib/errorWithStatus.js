/**
* Convenience class to throw an error with an http status code
*/
export class ErrorWithStatus extends Error {

  /**
  * @constructor
  */
  constructor( message, status ) {
    super(message);
    this.status = status;
  }

}
