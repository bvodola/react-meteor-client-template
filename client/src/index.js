import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotLoader} from 'react-hot-loader'
import AppContainer from './containers/AppContainer.jsx';

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
