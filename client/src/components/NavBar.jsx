import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

const Menu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={<IconButton iconClassName='material-icons'>more_vert</IconButton>}
    iconStyle={{color:'#fff'}}
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

class NavBar extends Component {

  render() {
    return (
      <div>
      <AppBar
        title="React Template"
        iconElementLeft={
          <IconButton onTouchTap={() => this.props.handleDrawerState(true)} iconClassName='material-icons'>menu</IconButton>
        }
        iconElementRight={<Menu />}
      />
    </div>
    );
  }
}

export default NavBar;
