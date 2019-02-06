import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import reduxPromise from 'redux-promise';

const middleware = [
  thunk,
  reduxPromise
]
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, withDevTools(
  applyMiddleware(...middleware)
))
