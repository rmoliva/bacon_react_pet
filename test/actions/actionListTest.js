/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import BaconJS from 'baconjs';
var actionListStamp = require('actions/listStamp').actionListStamp();

describe('actionListStamp', function() {
  beforeEach(function() {
    this.values = [];
    this.addBus = BaconJS.Bus();
    this.removeById = BaconJS.Bus();
    this.list = actionListStamp({
      initialState: [],
      addItem: this.addBus,
      removeById: this.removeById
    });

    this.streamList = this.list.getListStream();
    this.streamList.onValue(_.bind(function(a) {
      this.values.push(_.clone(a));
    }, this));
    // streamList.log();
  });

  it('List should get an empty array', function() {
    expect(this.values).toEqual([[]]);
  });

  describe('add first item', function() {
    beforeEach(function() {
      this.firstItem = {
        id: 1,
        name: 'pepe'
      };
      this.addBus.push(this.firstItem);
    });

    it('List should contain only the first item', function() {
      expect(this.values).toEqual([[],[this.firstItem]]);
    });

    describe('remove first item', function() {
      beforeEach(function() {
        this.removeById.push(this.firstItem.id);
      });

      it('List should be empty', function() {
        expect(this.values).toEqual([[],[this.firstItem],[]]);
      });
    });

    describe('add second item', function() {
      beforeEach(function() {
        this.secondItem = {
          id: 2,
          name: 'juan'
        };
        this.addBus.push(this.secondItem);
      });

      it('List should contain the first item and the second item',
        function() {
          expect(this.values).toEqual([
            [],
            [this.firstItem],
            [this.firstItem,this.secondItem]
          ]);
        }
      );

      describe('remove first item', function() {
        beforeEach(function() {
          this.removeById.push(this.firstItem.id);
        });

        it('List should contain second item', function() {
          expect(this.values).toEqual([
            [],
            [this.firstItem],
            [this.firstItem,this.secondItem],
            [this.secondItem]
          ]);
        });
      });

      describe('remove second item', function() {
        beforeEach(function() {
          this.removeById.push(this.secondItem.id);
        });

        it('List should contain first item', function() {
          expect(this.values).toEqual([
            [],
            [this.firstItem],
            [this.firstItem,this.secondItem],
            [this.firstItem]
          ]);
        });
      });
    });
  });
});
