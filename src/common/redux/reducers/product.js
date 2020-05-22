import { GET_PRODUCT, GET_PRODUCTS, GET_CATEGORIES } from '../actions/types';

const initialState = {
  products: [{ id: '', data: {} }],
  loading: true,
  categories: [{ id: '', data: {} }],
  product: { id: '', data: {} },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
