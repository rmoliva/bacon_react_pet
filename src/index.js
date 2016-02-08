/* import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
*/

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
import BaconJS from 'baconjs';
import R from 'ramda';

var actionCompletedArrayStamp = require('actions/completedArrayStamp').actionCompletedArrayStamp();

var options = {id: 2, marked: true};
var listTest = [{
  id: 1,
  name: 'juan'
}, {
  id: 2,
  name: 'pepe'
}, {
  id: 3,
  name: 'tomas'
}];

debugger

var fn = R.reject(R.propEq('id',2))

console.log(fn(listTest));


console.log(fn(this.testList));
