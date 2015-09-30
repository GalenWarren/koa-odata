import _ from "lodash";
import {ModelMetadata, EntityMetadata} from "../lib/metadata/index";

/**
* A set of model metadata we use for the unit tests
*/
export const modelMetadata = new ModelMetadata();

_.extend( modelMetadata.entityCollections, {

  users: new EntityMetadata({
    name: "user",
    model: modelMetadata,
    properties: [
    ]
  })

});
