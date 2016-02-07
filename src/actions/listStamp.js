import BaconJS from 'baconjs';
// import stampit from 'stampit';
import _ from 'lodash';

/**
 * Returns an stamp that creates a property to hold a
 * functional reactive List
 */
export function actionListStamp() {
  return function getStream(options) {
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

/*  return stampit().props({
    initialState: [],
    addItem: null,
    delItem: null
  }).init(function() {
    this.stream = BaconJS.update(this.initialState,
      this.addItem, function(state, newItem) {
        console.log('addItem0');
        console.log(newItem);
        console.log('addItem1');
        console.log(state);
        state.push(newItem);
        console.log('addItem2');
        console.log(state);
        return state;
      },
      this.delItem, function(state, removeItem) {
        console.log('delItem0');
        console.log(removeItem);
        console.log('delItem1');
        console.log(state);
        _.remove(state, removeItem);
        console.log('delItem2');
        console.log(state);
        return state;
      }
    );
  }).methods({
    getStream() {
      return this.stream;
    }
  });
}
*/
