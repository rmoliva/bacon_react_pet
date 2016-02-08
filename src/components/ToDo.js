import BaconJS from 'baconjs';
import stampit from 'stampit';
import R from 'ramda';
var fnArray = require('fn/array').array();

/**
 * actionStream: Acciones soportadas:
 *  add : Añadir el objeto pasado en options
 *  del : Quitar el objeto cuyo id es pasado en options
 *  mark : Marcar el objeto cuyo id es pasado en optiones. Se debe pasar
 *    en options el estado de la marca (marked)
 **/
export function componentToDo() {
  return stampit().props({
    initialState: [],
    actionStream: null
  }).init(function() {
    var addActionStream = this.actionStream.filter(function(value) {
      return value.action === 'add'
    }).map(function(value) {
      return value.options;
    });

    var removeActionStream = this.actionStream.filter(function(value) {
      return value.action === 'del'
    }).map(function(value) {
      return value.options;
    });

    var markActionStream = this.actionStream.filter(function(value) {
      return value.action === 'mark'
    }).map(function(value) {
      return value.options;
    });

    this.stream = BaconJS.update(this.initialState,
      addActionStream, function(state, options) {
        return R.insert(-1, options)(state);
      },
      removeActionStream, function(state, options) {
        return fnArray.removeByPropValue({
          prop_name: 'id',
          prop_value: options.id
        })(state);
      },
      markActionStream, function(state, options) {
        return fnArray.markPropBySearch({
          search_prop_name: 'id',
          search_prop_value: options.id,
          set_prop_name: 'marked',
          set_prop_value: options.marked
        })(state);
      }
    );
  }).methods({
    getStream() {
      return this.stream;
    }
  });
}
