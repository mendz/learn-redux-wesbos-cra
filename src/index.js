import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

// import css
import './styles/style.css';

import Reduxstagram from './Reduxstagram';

// hot reloading staff
const render = Component => {
   return ReactDOM.render(
      <Component />,
      document.getElementById('root')
   );
};

render(Reduxstagram);

if (module.hot) {
   module.hot.accept('./Reduxstagram', () => {
      const NextApp = require('./Reduxstagram').default;
      render(NextApp);
   });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
