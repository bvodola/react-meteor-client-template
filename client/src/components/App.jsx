import React, { Component } from 'react';
import Meteor from 'react-meteor-client';
import Button from 'grommet/components/Button';
import CheckBox from 'grommet/components/CheckBox';


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
        <Button label='Label' href='#' />
        <CheckBox label='Sample label' />
        <button onClick={() => this.handleAddItem()}>Add Item</button>
        {this.props.tasks.map((v,i,a) => (
          <p key={i}>{v._id}</p>
        ))}
      </div>);
  }
}

export default App;
