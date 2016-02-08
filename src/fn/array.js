/**
 *
 */
 import R from 'ramda';

 export function array() {
   return {
     /**
      * options:
      *   prop_name
      *   prop_value
      */
     removeByPropValue: function(options) {
       return R.reject(
         R.propEq(
           options.prop_name,options.prop_value
         )
       );
     },

     /**
      * Busca los elementos que coincidan con una propiedad
      * especificada y les pone un valor especifico a otra propiedad
      *
      * options:
      *  search_prop_name
      *  search_prop_value
      *  set_prop_name
      *  set_prop_value
      */
     markPropBySearch: function(options) {
       var xLens = R.lensProp(options.set_prop_name);
       var doMark = R.when(
         R.propEq(options.search_prop_name, options.search_prop_value),
         R.set(xLens, options.set_prop_value)
       );
       return R.map(doMark)
     }
   };
 }
