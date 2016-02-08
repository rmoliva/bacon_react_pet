// https://muffinresearch.co.uk/back-to-the-future-using-es6-with-react/

import React, { Component, PropTypes } from 'react';

class viewToDo  extends Component {
    render() {
      debugger;


      return <div>Hello {this.props.name}</div>;
    }
}


viewToDo.propTypes = {name: PropTypes.func.isRequired};

export default viewToDo;
