import {Segment} from "./base";
import {parsePathSegment} from "./utilities";

/**
* The regex that we use, exposed for unit testing
*/
export const regex = /(\w+)(\(([^)]+)\))?/;

/**
* Class for an entities segment
*/
export class EntitiesSegment extends Segment {

  /**
  * The metadata for this entity
  */
  metadata

  /**
  * The key, if one exists
  */
  key

  /**
  * @constructor
  */
  constructor( metadata, key ) {
    super()
    this.metadata = metadata;
    this.key = key;
  }

  /**
  * Called on each segment to parse the next segment,
  * allows each segment to be parsed in the proper context
  */
  static parse( pathSegment, segments, pipeline ) {

    // only process at root
    if (segments.length == 0) {

      // look for a match on entityName with optional key
      const [match, collectionName, key ] = regex.exec( pathSegment );
      if (match) {

        // it looks like an entity, is it in the metadata?
        const entityMetadata = pipeline.modelMetadata.entityCollections[ collectionName ];
        if (entityMetadata) {

          // yes, create the segment
          return new EntitiesSegment( entityMetadata, key );

        }

      }

    }

    // not this type of segment
    return null;
  }

}
