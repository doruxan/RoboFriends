import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from 'redux-logger'

import home from "./reducers/homeReducer";

import * as rootSaga from "./rootSaga";

const combinedReducer = combineReducers({
  home
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, logger)));

sagaMiddleware.run(rootSaga.watchHome);

export default store;