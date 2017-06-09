import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer as HotLoader} from 'react-hot-loader'
import AppContainer from './containers/AppContainer.jsx';

import Meteor from 'react-meteor-client';
import injectTapEventPlugin from 'react-tap-event-plugin';

Meteor.connect('ws://192.168.0.110:3000/websocket');
injectTapEventPlugin();

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
