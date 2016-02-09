// https://muffinresearch.co.uk/back-to-the-future-using-es6-with-react/

import _ from 'lodash';
import React, { Component, PropTypes } from 'react';

class ToDoComponent  extends Component {
    _bind(...methods) {
      methods.forEach( (method) => this[method] = this[method].bind(this) );
    }

    constructor() {
      super();
      this.state = {
        taskText: ""
      };
      this._bind('handleAddTask', 'handleDelTask', 'handleChangeTaskText');
    }

    handleAddTask(e) {
      e.preventDefault();
      if(this.props.handleAction) {
        this.props.handleAction({
          action: 'add',
          options: {
            task: this.state.taskText
          }
        });
        this.setState({taskText: ''});
      }
    }

    handleDelTask(id) {
      return function() {
        console.log("handleDelTask");
        console.log(id);
      }
    }

    handleChangeTaskText(e) {
      this.setState({taskText:e.target.value});
    }

    render() {
      return (
        <div>
          <form className="form-inline">
            <div className="form-group">
              <input type="text" className="form-control" name="taskText" placeholder="Introduzca una tarea" value={this.state.taskText} onChange={this.handleChangeTaskText} />
            </div>
            <button type="submit" className="btn btn-default" onClick={this.handleAddTask}>Añadir</button>
          </form>
          <table className="table table-striped">
            <thead>
              <tr>
                <th></th>
                <th>Tarea</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Cocer espeaghettis</td>
                <td><button type="submit" className="btn btn-default" onClick={this.handleDelTask(1)}>Borrar</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
}

ToDoComponent.propTypes = {handleAction: PropTypes.func.isRequired};

export default ToDoComponent;
