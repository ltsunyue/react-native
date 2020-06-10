import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer";

const logger = store => next => action => {
  if(typeof action === 'function'){
      console.log('dispation')
  } else {
      console.log('dispation', action);
  }
  const result = next(action);
  console.log('nextState', store.getState());
  return result;
};
const middlewares = [
    thunk
];
/**
* 创建store
* */
export default createStore(reducer, applyMiddleware(...middlewares));