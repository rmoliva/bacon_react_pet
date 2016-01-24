/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import BaconJS from 'baconjs';
import promiseBaconSubscription from 'helpers/baconPromiseHelper';

var actionListStamp = require('actions/listStamp').actionListStamp;

describe('actionListStamp', function() {
  var list;
  var streamList;
  var addBus = BaconJS.Bus();
  var delBus = BaconJS.Bus();

  beforeEach(() => {
    list = actionListStamp();
    streamList = list({
      initialState: [],
      addItem: addBus,
      delItem: delBus
    });
    streamList.log();
  });

  it('List should get an empty array', function(done) {
    promiseBaconSubscription(streamList).then((event) => {
      expect(event.value()).toEqual([]);
    }).finally(done);
  });

  describe('add first item', function() {
    var firstItem = {
      id: 1,
      name: 'pepe'
    };

    beforeEach(function() {
      console.log('ADD BUS0');
      addBus.push(firstItem);
      console.log('ADD BUS1');
    });

    it('List should contain only the first item', function(done) {
      promiseBaconSubscription(streamList).then((event) => {
        expect(event.value()).toEqual([firstItem]);
      }).finally(done);
    });

    describe('remove first item', function() {
      beforeEach(function() {
        console.log('DEL BUS0');
        delBus.push(firstItem);
        console.log('DEL BUS1');
      });

      it('List should be empty', function(done) {
        promiseBaconSubscription(streamList).then((event) => {
          expect(event.value()).toEqual([]);
        }).finally(done);
      });
    });

    describe('add second item', function() {
      var secondItem = {
        id: 2,
        name: 'juan'
      };

      beforeEach(function() {
        addBus.push(secondItem);
      });

      it('List should contain the first item and the second item',
        function(done) {
          promiseBaconSubscription(streamList).then((event) => {
            expect(event.value()).toEqual([firstItem,secondItem]);
          }).finally(done);
        }
      );

      describe('remove first item', function() {
        beforeEach(function() {
          delBus.push(firstItem);
        });

        it('List should contain second item', function(done) {
          promiseBaconSubscription(streamList).then((event) => {
            expect(event.value()).toEqual([secondItem]);
          }).finally(done);
        });
      });

      describe('remove second item', function() {
        beforeEach(function() {
          delBus.push(secondItem);
        });

        it('List should contain first item', function(done) {
          promiseBaconSubscription(streamList).then((event) => {
            expect(event.value()).toEqual([firstItem]);
          }).finally(done);
        });
      });
    });
  });
});
