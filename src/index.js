import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './styles/style.css';

import Main from './components/Main';

const render = Component => {
   return ReactDOM.render(
      <Component />,
      document.getElementById('root')
   );
};

render(Main);

if (module.hot) {
   module.hot.accept(Main, () => {
      const NextApp = require(Main).default;
      render(NextApp);
   });
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
