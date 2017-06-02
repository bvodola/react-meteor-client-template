import React, { Component } from 'react';
import Meteor from 'react-meteor-client';

import { default as Theme } from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import NavBar from './NavBar.jsx';
import { List, ListItem } from 'material-ui/List';

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
      <Theme>
        <div>
          <NavBar />
          <div style={{padding: '16px'}}>
          <RaisedButton label="Add Item" primary={true} onTouchTap={() => this.handleAddItem()} />
          <List>
          {this.props.tasks.map((v,i,a) => (
            <ListItem key={i} primaryText={String(v._id)} />
          ))}
          </List>
          </div>
        </div>
      </Theme>
    );
  }
}

export default App;
