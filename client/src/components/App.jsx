import React, { Component } from 'react';
import Meteor from 'react-meteor-client';

class App extends Component {

  handleAddItem() {
    const content = Math.floor(Math.random() * 10); // random number

    Meteor.call('Tasks.addOne', {content}, (e, res) => {
      if(e) console.log(e);
      else {
        console.log(res, this.props.tasks);
      }
    });
  }

  render() {

    return (
     <div>
        <h1>React Template</h1>
        <button onClick={() => this.handleAddItem()}>Add Item</button>
        {this.props.tasks.map((v,i,a) => (
          <p key={i}>{v._id}</p>
        ))}
      </div>);
  }
}

export default App;
