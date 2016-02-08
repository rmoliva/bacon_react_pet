import BaconJS from 'baconjs';
import stampit from 'stampit';
var fnArray = require('fn/array').array();

/**
 * Returns an stamp that creates a property to hold a
 * functional reactive List
 */
export function actionCompletedArrayStamp() {
  return stampit().props({
    initialState: [],
    markCompletedById: null
  }).init(function() {
    this.stream = BaconJS.update(this.initialState,
      // options:
      //  id : Id to mark
      //  mark : Boolean
      this.markCompletedById, function(state, options) {
        return fnArray.markPropBySearch({
          search_prop_name: 'id',
          search_prop_value: options.id,
          set_prop_name: 'marked',
          set_prop_value: options.marked
        })(state);
      }
    );
  }).methods({
    getMarkedStream() {
      return this.stream;
    }
  });
}
