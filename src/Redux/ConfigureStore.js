import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import CategoryReducer from './Reducer/CategoryReducer';
import IntroReducer from './Reducer/IntroReducer';
import CategoryDetailReducer from './Reducer/CategoryDetailReducer';

const middlewareList = [thunk, logger];

const reducer = combineReducers({
  CategoryReducer,
  IntroReducer,
  CategoryDetailReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(...middlewareList),
);

export default store;
