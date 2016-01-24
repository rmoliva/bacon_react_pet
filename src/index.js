/* import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
*/

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
import BaconJS from 'baconjs';

var actionListStamp = require('actions/listStamp').actionListStamp;

debugger;

var addBus = BaconJS.Bus();
var delBus = BaconJS.Bus();

var list = actionListStamp();

var stream = list({
  initialState: [],
  addItem: addBus,
  delItem: delBus
});
