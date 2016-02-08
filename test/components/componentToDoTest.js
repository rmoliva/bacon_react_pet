/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import BaconJS from 'baconjs';
import R from 'ramda';
var componentToDo = require('components/ToDo').componentToDo();

describe('componentToDo', function() {
  beforeEach(function() {
    this.values = [];
    this.actionBus = BaconJS.Bus();
    this.component = componentToDo({
      initialState: [],
      actionStream: this.actionBus
    });
    this.streamList = this.component.getStream();
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
      this.actionBus.push({
        action: 'add',
        options: this.firstItem
      });
    });

    it('List should contain only the first item', function() {
      expect(this.values).toEqual([[],[this.firstItem]]);
    });

    describe('remove first item', function() {
      beforeEach(function() {
        this.actionBus.push({
          action: 'del',
          options: {
            id: this.firstItem.id
          }
        });
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
        this.actionBus.push({
          action: 'add',
          options: this.secondItem
        });
      });

      it('List should contain the first item and the second item',
        function() {
          expect(this.values).toEqual([
            [],
            [this.firstItem],
            [this.firstItem, this.secondItem]
          ]);
        }
      );

      describe('mark first element', function() {
        beforeEach(function() {
          this.actionBus.push({
            action: 'mark',
            options: {
              id: this.firstItem.id,
              marked: true
            }
          });
        });

        it('List should contain the first item marked',
          function() {
            expect(_.last(this.values)).toEqual([
              R.merge({marked: true}, this.firstItem), this.secondItem
            ]);
          }
        );

        describe('mark second element', function() {
          beforeEach(function() {
            this.actionBus.push({
              action: 'mark',
              options: {
                id: this.secondItem.id,
                marked: true
              }
            });
          });

          it('List should contain both items marked', function() {
            expect(_.last(this.values)).toEqual([
              R.merge({marked: true}, this.firstItem), R.merge({marked: true}, this.secondItem)
            ]);
          });
        });
      });

      describe('remove first item', function() {
        beforeEach(function() {
          this.actionBus.push({
            action: 'del',
            options: {
              id: this.firstItem.id
            }
          });
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
          this.actionBus.push({
            action: 'del',
            options: {
              id: this.secondItem.id
            }
          });
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
