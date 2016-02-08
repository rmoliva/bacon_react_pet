/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

var array = require('fn/array').array();

describe('fn/array', function() {
  describe('removeByPropValue', function() {
    describe('on an empty array', function() {
      it('should return an empty array', function() {
        var fn = array.removeByPropValue({
          prop_name: 'id',
          prop_value: 1
        });
        expect(fn([])).toEqual([]);
      });
    });

    describe('on an array with one element', function() {
      it('should return an empty array', function() {
        var fn = array.removeByPropValue({
          prop_name: 'id',
          prop_value: 1
        });
        expect(fn([{
          id: 1,
          name: 'pepe'
        }])).toEqual([]);
      });
    });

    describe('on an array with two elements', function() {
      it('should return an array with one element', function() {
        var fn = array.removeByPropValue({
          prop_name: 'id',
          prop_value: 1
        });

        expect(fn([{
          id: 1,
          name: 'pepe'
        }, {
          id: 2,
          name: 'juan'
        }])).toEqual([{
          id: 2,
          name: 'juan'
        }]);
      });
    });
  });

  describe('markPropBySearch', function() {
    beforeEach(function() {
      this.testList = [{
        id: 1,
        name: 'juan'
      }, {
        id: 2,
        name: 'pepe'
      }, {
        id: 3,
        name: 'tomas'
      }];
    });

    it('i can mark element with id = 2', function() {
      var fn = array.markPropBySearch({
        search_prop_name: 'id',
        search_prop_value: 2,
        set_prop_name: 'marked',
        set_prop_value: true
      })
      expect(fn(this.testList)).toEqual([{
        id: 1,
        name: 'juan'
      }, {
        id: 2,
        name: 'pepe',
        marked: true
      }, {
        id: 3,
        name: 'tomas'
      }]);
    });

    it('i can unmark element with id = 2', function() {
      var fn = array.markPropBySearch({
        search_prop_name: 'id',
        search_prop_value: 2,
        set_prop_name: 'marked',
        set_prop_value: false
      })
      expect(fn(this.testList)).toEqual([{
        id: 1,
        name: 'juan'
      }, {
        id: 2,
        name: 'pepe',
        marked: false
      }, {
        id: 3,
        name: 'tomas'
      }]);
    });
  });
});
