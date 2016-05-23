import { applyMiddleware, createStore, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';
import { Map } from 'immutable';


const initialState = new Map();

export default createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(ReduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
