/**
 * Takes a data stream an returns the paginator information
 */
import BaconJS from 'baconjs';
import stampit from 'stampit';

/**
 * Expects an objet with the following
 * members:
 * * initalState * : Estado inicial del stream
 * * inputStream * : Stream de entrada
 * * perPage * : Registros por pagina (defaults to 20)
 */
export function paginatorData(initial) {
   var stamp = stampit().props({
     initialState: {},
     inputStream: null,
     perPage: 20
   }).methods({
     stream() {
       return BaconJS.update(this.initialState,
         [this.inputStream], function(state, data) {
           return state = {
             page: (data.page || 1),
             perPage: (data.page || this.perPage),
             pagePount: (data.pageCount || 0),
             total: (data.total || 0)
           };
         }
       ).changes();
     }
   });
   return stamp(initial);
 }
