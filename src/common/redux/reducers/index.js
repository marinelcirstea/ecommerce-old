import { combineReducers } from 'redux';
import counter from './counter';
import productReducer from './product';
const rootReducer = combineReducers({
  counter,
  productReducer,
});

export default rootReducer;
