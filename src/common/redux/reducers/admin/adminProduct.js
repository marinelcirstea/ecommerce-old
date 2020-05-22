import {
  ADD_PRODUCT,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  ADD_CATEGORY,
  GET_PRODUCT_DATA,
  UPDATE_PRODUCT,
} from '../../actions/types';

const initialState = {
  productData: {
    ProductID: '',
    SKU: '',
    Barcode: '',
    VendorProductID: '',
    ProductName: '', //
    ProductDescription: '', //
    SupplierID: '',
    CategoryID: '',
    QuantityPerUnit: '',
    UnitPrice: '',
    CompareAtPrice: '',
    SupplierPrice: '',
    MSRP: '',
    AvailableSizes: [],
    AvailableColors: [],
    Size: '',
    Color: '',
    Discount: '',
    UnitWeight: '',
    UnitsInStock: '',
    UnitsInOrder: '',
    ReorderLevel: '',
    ProductAvailable: true,
    DiscountAvailable: '',
    CurrentOrder: '',
    Picture: '',
    Ranking: '',
    Note: '',
    ChargeTax: false,
    TaxValue: '',
    TrackQuantity: false,
    SellWhenOutOfStock: false,
    IsPhysicalProduct: true,
    ProductMetaTitle: '',
    ProductMetaDescription: '',
    ProductSlug: '',
    ProductType: '',
    ProductVendor: '',
  },
  categoryData: {
    Active: true,
    CategoryID: '',
    CategoryName: '',
    CategoryPicture: '',
    CategoryDescription: '',
  },
  errors: [],
  loading: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case SET_LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    case ADD_PRODUCT:
    case UPDATE_PRODUCT:
      return {
        ...state,
        productData: action.payload,
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categoryData: action.payload,
      };
    case GET_PRODUCT_DATA:
      return {
        ...state,
        productData: action.payload,
      };

    default:
      return state;
  }
}
