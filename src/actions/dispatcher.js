import BaconJS from 'baconjs';
import stampit from 'stampit';
import _ from 'lodash';

export function actionDispatcher(initial) {
  var stamp = stampit().props({
    initialState: {},
    sendAction: null
  }).methods({
    stream() {
      return BaconJS.update(this.initialState,
        [this.sendAction], function(state, action) {
          return state = _.clone(action);
        }
      ).changes();
    }
  });
  return stamp(initial);
}

/*
function actionDispatcher(initialState, sendAction) {
  return BaconJS.update(initialState,
    [sendAction], (state, action) => {
      return state = _.clone(action);
    }
  ).changes();
}
*/
