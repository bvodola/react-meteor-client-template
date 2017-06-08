import React, { Component } from 'react';
import { default as MuiDrawer } from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Drawer extends Component {

  render() {
    return(
      <MuiDrawer
        docked={false}
        width={230}
        open={this.props.open}
        onRequestChange={this.props.handleDrawerState}
      >
        <MenuItem onTouchTap={() => this.props.handleDrawerState(false)}>Menu Item</MenuItem>
        <MenuItem onTouchTap={() => this.props.handleDrawerState(false)}>Menu Item 2</MenuItem>
      </MuiDrawer>
    )
  }
}

export default Drawer;
