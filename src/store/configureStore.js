import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import reduxInmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxInmutableStateInvariant())
  );
}
