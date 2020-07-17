import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';
const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
      createRootReducer(history),
      preloadedState,
      composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
    );
    return store;
  }
  
  export { history };