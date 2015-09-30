/**
* Base class for a segment object
*/
export class Segment {

  /**
  * Called on each segment to parse the next segment,
  * allows each segment to be parsed in the proper context
  */
  static parse( pathSegment, segments, modelMetadata ) {
    throw new Error("Segment class must implement parse method.")
  }


}
