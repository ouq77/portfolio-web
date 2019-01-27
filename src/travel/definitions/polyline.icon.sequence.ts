import Polyline = google.maps.Polyline;
import IconSequence = google.maps.IconSequence;

/**
 * Interface for a Polyline with IconSequence[] object
 */

export interface PolylineIconSequence {
  polyline: Polyline;
  linesIcons: IconSequence[];
}
