import {singleton,inject} from "aurelia-dependency-injection";
import {EntitiesSegment} from "./entities";
import {ModelMetadata} from "../metadata/index";
import {parsePathSegment} from "./utilities";
import _ from "lodash";

// track the segments that can be at the root
const rootSegmentClasses = [
  EntitiesSegment
];

/**
* The segments class
*/
export class Segments {

  /**
  * Parse a path string and return an array of segment objects
  */
  parse( path, modelMetadata ) {

    debugger;

    // break the path apart into segments, separated by /
    const pathSegments = _.filter(path.split("/"));

    // parse and return an array of segment objects
    return _(pathSegments).transform( (segments, pathSegment ) => {

      // try to parse the path segment into a segment object
      const segment = segments.length ?

        // if we have existing segments, call last one in chain to process
        _.last(segments).constructor.parse( pathSegment, segments, modelMetadata ) :

        // if no existing segments, then just process with the top-level ones
        parsePathSegment( pathSegment, rootSegmentClasses, segments, modelMetadata);

      // throw error if the segment is unrecognized
      if (!segment) {
        throw new Error( `Unrecognized segment ${pathSegment}`);
      }

      // we have a valid segment, add it
      segments.push(segment);

    }, []).value();

  }


}
