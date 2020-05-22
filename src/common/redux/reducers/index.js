import { combineReducers } from 'redux';
import counter from './counter';
import productReducer from './product';
import adminProductReducer from './admin/adminProduct';
import cartReducer from './cart';

const rootReducer = combineReducers({
  counter,
  productReducer,
  adminProductReducer,
  cart: cartReducer,
});

export default rootReducer;
