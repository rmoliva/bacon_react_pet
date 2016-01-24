/* import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
*/

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
import BaconJS from 'baconjs';

var actionDispatcher = require('actions/dispatcher').actionDispatcher;

debugger;

var actionBus = BaconJS.Bus();
var stamp = actionDispatcher({initialState: {}, sendAction: actionBus});
stamp.stream();
