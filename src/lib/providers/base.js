import {NotImplementedError} from "../errors/index";


/**
* Base data provider class
* @class
*/
export class Provider {

  get modelMetatdata() {
    throw new NotImplementedError("get modelMetadata", Provider );
  }

}
