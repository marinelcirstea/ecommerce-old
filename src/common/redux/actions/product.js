import firebase from '../../services/firebase';
import { GET_PRODUCTS, GET_CATEGORIES, GET_PRODUCT } from './types';
console.warn('products file imported.');

export const getProducts = () => async (dispatch) => {
  console.warn('FIREBASE: getProducts called');

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

export const getCategories = () => async (dispatch) => {
  console.warn('FIREBASE: getCategories called');

  try {
    let categories = [];
    await firebase
      .firestore()
      .collection('categories')
      .get()
      .then(async (res) => {
        res.forEach((cat) => {
          categories.push({ id: cat.id, data: cat.data() });
        });
      })
      .then(() => {
        dispatch({
          type: GET_CATEGORIES,
          payload: categories,
        });
      });
  } catch (err) {
    console.log(err);
  }
};

export const getProduct = (id) => (dispatch) => {
  try {
    firebase
      .firestore()
      .collection('products')
      .where('ProductID', '==', id)
      .get()
      .then((prod) => {
        dispatch({
          type: GET_PRODUCT,
          payload: { id: prod.docs[0].id, data: prod.docs[0].data() },
        });
        console.log('id', prod.docs[0].id, 'data', prod.docs[0].data());
      });
  } catch (error) {
    console.log(error);
  }
};
