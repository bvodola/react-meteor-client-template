import React, { Component } from 'react';
import TextField from './TextField.jsx';
import StateHandler from './StateHandler.jsx';

class Playground extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 1,
      name: 'Default'
    }
  }

  render() {
    let stateHandler = new StateHandler(this);

    return(
      <div>
        <h2>Playground</h2>
        <TextField name='name' stateHandler={stateHandler} />
      </div>
    );
  }
}

export default Playground;
