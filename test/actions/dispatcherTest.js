/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import BaconJS from 'baconjs';
import Promise from 'bluebird';
var actionDispatcher = require('actions/dispatcher').actionDispatcher;

var promiseBaconSubscription = function(stream) {
  return new Promise((resolve) => {
    stream.subscribe((event) => {
      resolve(event);
      return BaconJS.noMore;
    });
  });
};

describe('Dispatcher', () => {
  let stamp;
  let disp;
  let actionBus = BaconJS.Bus();
  let action = {action: 'index', params: {one: 1, two: 2}};

  beforeEach(() => {
    stamp = actionDispatcher({initialState: {}, sendAction: actionBus});
    disp = stamp.stream();
  });

  it('Action should get expected value', (done) => {
    promiseBaconSubscription(disp).then((event) => {
      expect(event.value()).toEqual(action);
    }).finally(done);
    actionBus.push(action);
  });

});
