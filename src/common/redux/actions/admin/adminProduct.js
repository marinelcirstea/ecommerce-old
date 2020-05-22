import {
  ADD_PRODUCT,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  ADD_CATEGORY,
  UPDATE_PRODUCT,
  GET_PRODUCT_DATA,
} from '../types';
import firebase from '../../../services/firebase';
console.warn('adminProduct file imported.');

export const addProduct = (productData) => async (dispatch) => {
  try {
    console.warn('FIREBASE: addProduct called');
    dispatch({
      type: SET_LOADING_TRUE,
    });
    await firebase
      .firestore()
      .collection('products')
      .add(productData)
      .then(async (res) => {
        if (!productData.ProductID) {
          await firebase
            .firestore()
            .collection('products')
            .doc(res.id)
            .update({ ProductID: res.id });
        }
        dispatch({
          type: ADD_PRODUCT,
          payload: productData,
        });
        dispatch({
          type: SET_LOADING_FALSE,
        });
      });
  } catch (err) {
    console.log(err);
  }
};

export const addCategory = (categoryData) => async (dispatch) => {
  try {
    console.warn('FIREBASE: addCategory called');
    dispatch({
      type: SET_LOADING_TRUE,
    });
    await firebase
      .firestore()
      .collection('categories')
      .add(categoryData)
      .then(async (cat) => {
        if (!categoryData.CategoryID) {
          await firebase
            .firestore()
            .collection('categories')
            .doc(cat.id)
            .update({
              CategoryID: cat.id,
            });
        }
        dispatch({
          type: ADD_CATEGORY,
          payload: categoryData,
        });
        dispatch({
          type: SET_LOADING_FALSE,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export const getProductData = (id) => (dispatch) => {
  try {
    console.warn('FIREBASE: getProductData called');
    dispatch({
      type: SET_LOADING_TRUE,
    });
    firebase
      .firestore()
      .collection('products')
      .doc(id)
      .get()
      .then((productData) => {
        const data = {};
        if (productData.data() && productData.data().ProductID) {
          data = {
            ProductID: productData.data().ProductID,
            SKU: productData.data().SKU,
            Barcode: productData.data().Barcode,
            VendorProductID: productData.data().VendorProductID,
            ProductName: productData.data().ProductName, //
            ProductDescription: productData.data().ProductDescription, //
            SupplierID: productData.data().SupplierID,
            CategoryID: productData.data().CategoryID,
            QuantityPerUnit: productData.data().QuantityPerUnit,
            UnitPrice: productData.data().UnitPrice,
            CompareAtPrice: productData.data().CompareAtPrice,
            SupplierPrice: productData.data().SupplierPrice,
            MSRP: productData.data().MSRP,
            AvailableSizes: productData.data().AvailableSizes,
            AvailableColors: productData.data().AvailableColors,
            Size: productData.data().Size,
            Color: productData.data().Color,
            Discount: productData.data().Discount,
            UnitWeight: productData.data().UnitWeight,
            UnitsInStock: productData.data().UnitsInStock,
            UnitsInOrder: productData.data().UnitsInOrder,
            ReorderLevel: productData.data().ReorderLevel,
            ProductAvailable: productData.data().ProductAvailable,
            DiscountAvailable: productData.data().DiscountAvailable,
            CurrentOrder: productData.data().CurrentOrder,
            Picture: productData.data().Picture,
            Ranking: productData.data().Ranking,
            Note: productData.data().Note,
            ChargeTax: productData.data().ChargeTax,
            TaxValue: productData.data().TaxValue,
            TrackQuantity: productData.data().TrackQuantity,
            SellWhenOutOfStock: productData.data().SellWhenOutOfStock,
            IsPhysicalProduct: productData.data().IsPhysicalProduct,
            ProductMetaTitle: productData.data().ProductMetaTitle,
            ProductMetaDescription: productData.data().ProductMetaDescription,
            ProductSlug: productData.data().ProductSlug,
            ProductType: productData.data().ProductType,
            ProductVendor: productData.data().ProductVendor,
          };
        }
        dispatch({
          type: GET_PRODUCT_DATA,
          payload: data,
        });

        dispatch({
          type: SET_LOADING_FALSE,
        });
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = (productData) => async (dispatch) => {
  console.warn('FIREBASE: updateProduct called');

  try {
    firebase
      .firestore()
      .collection('products')
      .doc(productData.ProductID)
      .update(productData)
      .then(() => {
        dispatch({
          type: UPDATE_PRODUCT,
          payload: productData,
        });
      });
  } catch (error) {
    console.log(error);
  }
};
