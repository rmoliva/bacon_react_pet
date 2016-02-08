/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import BaconJS from 'baconjs';
var actionCompletedArrayStamp = require('actions/completedArrayStamp').actionCompletedArrayStamp();

describe('actionCompletedArrayStamp', function() {
  beforeEach(function() {
    this.values = [];
    this.markCompletedById = BaconJS.Bus();

    // Inicializamos con tres valores
    this.initialState = [{
      id: 1,
      name: 'juan'
    }, {
      id: 2,
      name: 'pepe'
    }, {
      id: 3,
      name: 'tomas'
    }];
    this.list = actionCompletedArrayStamp({
      initialState: this.initialState,
      markCompletedById: this.markCompletedById
    });

    this.streamList = this.list.getMarkedStream();
    this.streamList.onValue(_.bind(function(a) {
      this.values.push(_.clone(a));
    }, this));
    // streamList.log();
  });

  describe('mark the element with id = 2', function() {
    beforeEach(function() {
      this.markCompletedById.push({
        id: 2,
        marked: true
      });
    });

    it('the second element should be marked', function() {
      expect(this.values).toEqual([
        [{
          id: 1,
          name: 'juan'
        }, {
          id: 2,
          name: 'pepe'
        }, {
          id: 3,
          name: 'tomas'
        }], [{
          id: 1,
          name: 'juan'
        }, {
          id: 2,
          name: 'pepe',
          marked: true
        }, {
          id: 3,
          name: 'tomas'
        }]
      ]);
    });
  });
});
