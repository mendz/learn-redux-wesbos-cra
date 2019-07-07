import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore, compose } from 'redux';

// import the root reducer
import createRootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
   posts,
   comments
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const configureStore = () => {
   const store = createStore(
      createRootReducer(history),
      defaultState,
      composeEnhancers(
         applyMiddleware(
            routerMiddleware(history),
         )
      ),
   )

   // Hot reloading
   if (process.env.NODE_ENV !== 'production') {
      if (module.hot) {
         module.hot.accept('./reducers', () => {
            store.replaceReducer(createRootReducer(history));
         });
      }
   }

   return store
};

export default configureStore;
