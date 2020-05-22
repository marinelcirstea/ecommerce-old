import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_ITEM_COUNT,
} from '../actions/types';

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ITEM_COUNT:
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: action.payload,
      };
    // return {
    //   ...state,
    //   items: action.payload,
    // };
    default:
      return state;
  }
}
