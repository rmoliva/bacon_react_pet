import BaconJS from 'baconjs';
import stampit from 'stampit';
import R from 'ramda';
import _ from 'lodash';

/**
 * Returns an stamp that creates a property to hold a
 * functional reactive List
 */
export function actionListStamp() {
/*  return function getStream(options) {
    return BaconJS.update(options.initialState,
      options.addItem, function(state, newItem) {
        return state.concat(_.clone(newItem));
      },
      options.removeById, function(state, id) {
        return _.pullAllBy(state, [{'id': id}], 'id');
      }
    );
  };
}
*/
  return stampit().props({
    initialState: [],
    addItem: null,
    removeById: null
  }).init(function() {
    this.stream = BaconJS.update(this.initialState,
      this.addItem, function(state, newItem) {
        return R.insert(-1, newItem)(state);
      },
      this.removeById, _.bind(function(state, id) {
        return this.fnRemoveById(id)(state);
      }, this)
    );
  }).methods({
    getListStream() {
      return this.stream;
    },
    fnRemoveById(id) {
      return R.reject(R.propEq('id',id));
    }
  });
}
