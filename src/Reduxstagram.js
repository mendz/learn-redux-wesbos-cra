import React from 'react';

// import react router deps
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store';

// import components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

const store = configureStore();

function App() {
   return (
      <Provider store={store}>
         <ConnectedRouter history={history}>
            <Route path="/" component={Main} />
            <Route path="/" exact component={PhotoGrid} />
            <Route path="/view/:postId" exact component={Single} />
         </ConnectedRouter>
      </Provider>
   )
}

export default App;