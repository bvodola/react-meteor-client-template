import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer as HotLoader} from 'react-hot-loader'
import AppContainer from './containers/AppContainer.jsx';

import Meteor from 'react-meteor-client';
// import '../node_modules/grommet/scss/vanilla/index.scss';
import '../node_modules/grommet-css'

Meteor.connect('ws://localhost:3000/websocket');

const render = Component => {
  ReactDOM.render(
    <HotLoader>
      <Component />
    </HotLoader>,
    document.getElementById('root')
  )
}

render(AppContainer);

if (module.hot) {
  module.hot.accept('./containers/AppContainer.jsx', () => { render(AppContainer) })
}
