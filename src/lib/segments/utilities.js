import _ from "lodash";

/**
* Parses a given path segment by iterating through the provided segmentClasses
* and returning an instance of the first class that can parse it
*/
export function parsePathSegment( pathSegment, segmentClasses, segments, pipeline ) {

  return _(segmentClasses)
    .map(segmentClass => segmentClass.parse(pathSegment, segments, pipeline ))
    .filter()
    .first();

}
