/* import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
*/

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
import BaconJS from 'baconjs';
import R from 'ramda';

import React from 'react';
import ReactDOM from 'react-dom';
import viewToDo from './views/todo';

console.log(viewToDo)

ReactDOM.render(<viewToDo name="John" />, document.getElementById('app'));
