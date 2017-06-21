import React, { Component } from 'react';
import Meteor from 'react-meteor-client';

import { default as Theme } from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';

import NavBar from './NavBar.jsx';
import Drawer from './Drawer.jsx';

import Playground from '../helpers/Playground.jsx';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isDrawerOpened: false
    }
  }

  handleAddItem() {
    const content = Math.floor(Math.random() * 10); // random number

    Meteor.call('Tasks.addOne', {content}, (e, res) => {
      if(e) console.log(e);
      else {
        console.log(res, this.props.tasks);
      }
    });
  }

  handleDrawerState(open, reason) {
    this.setState({isDrawerOpened: open});
  }

  render() {

    return (
      <Theme>
        <div>
          <NavBar handleDrawerState={this.handleDrawerState.bind(this)} />
          <Drawer open={this.state.isDrawerOpened} handleDrawerState={this.handleDrawerState.bind(this)} />
          <div style={{padding: '16px'}}>
            <RaisedButton label="Add Item" primary={true} onTouchTap={() => this.handleAddItem()} />
            &nbsp;
            <RaisedButton label="Open Drawer" primary={true} onTouchTap={() => this.handleDrawerState(true)} />
            <List>
              {this.props.tasks.map((v,i,a) => (
                <ListItem key={i} primaryText={String(v._id)} />
              ))}
            </List>
            <Playground />
          </div>
        </div>
      </Theme>
    );
  }
}

export default App;
