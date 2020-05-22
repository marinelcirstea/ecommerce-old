import { ADD_TO_CART, REMOVE_FROM_CART, SET_ITEM_COUNT } from './types';

export const addToCart = (items, product) => (dispatch) => {
  let productAlreadyInCart = false;
  items.forEach((item) => {
    if (item.id === product.id) {
      item.count += 1;
      productAlreadyInCart = true;
    }
  });
  if (!productAlreadyInCart) {
    product.count = 1;
    items.push(product);
  }
  dispatch({
    type: ADD_TO_CART,
    payload: items,
  });
};

export const setItemCount = (items, ProductID, counts) => (dispatch) => {
  let newList = [];
  items.map((item) => {
    if (item.id === ProductID) {
      item.count = counts;
    }
    newList.push(item);
  });
  dispatch({
    type: SET_ITEM_COUNT,
    payload: newList,
  });
};
export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.filter((a) => a.id !== product.id);
  // localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({
    type: REMOVE_FROM_CART,
    payload: cartItems,
  });
};
