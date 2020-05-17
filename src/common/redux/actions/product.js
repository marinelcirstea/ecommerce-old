import firebase from '../../services/firebase';
import { GET_PRODUCTS } from './types';

export const getProducts = () => async (dispatch) => {
  try {
    let products = [];
    firebase
      .firestore()
      .collection('products')
      .limit(16)
      .get()
      .then((snap) => {
        snap.forEach((product) => {
          products.push({ id: product.id, data: product.data() });
        });
        dispatch({
          type: GET_PRODUCTS,
          payload: products,
        });
      });
  } catch (err) {
    console.log(err);
  }
};
