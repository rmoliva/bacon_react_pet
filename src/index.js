/* import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
*/

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './views/todo';



var onHandleClick = function(options) {
  console.log(options)
};


ReactDOM.render(<ToDo handleAction={onHandleClick} />, document.getElementById('app'));
