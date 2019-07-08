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

// sentry configuration
import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';
// the only reason that I used this variable is for not to comment all the Sentry code which make it hard to read.
const test = false;
// add more tags which will come along with the error
Raven.config(sentry_url, {
   tags: {
      git_commit: 'asfas9d08f',
      userLevel: 'editor'
   }
}).install();
// inside a try catch or catch of a promise to have an addition information about the error
test && logException(new Error('download failed!'), {
   email: 'wesbos@gmail.com'
});
// In case we just need to catch a message that something happened without al the extra information.
test && Raven.captureMessage('Something bad happened!');
// after we capture an exception or a message we can show to the user a report dialog
test && Raven.showReportDialog();
// console.log(window.doesNotExist.nope);
// console.log(window.user.doesNotExist);
// console.log(window.doesNot.nope());


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