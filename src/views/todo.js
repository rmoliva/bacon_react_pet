// https://muffinresearch.co.uk/back-to-the-future-using-es6-with-react/

import React, { Component, PropTypes } from 'react';

class ToDoComponent  extends Component {
    render() {
      return <div>Hello {this.props.name}</div>;
    }
}

ToDoComponent.propTypes = {name: PropTypes.string.isRequired};

export default ToDoComponent;
