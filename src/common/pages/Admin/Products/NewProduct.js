import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addProduct } from '../../../redux/actions/admin/adminProduct';
import { getCategories } from '../../../redux/actions/product';
class NewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    props.getCategories();
  }
  state = {
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
    errors: [],
  };

  handleChange = (e) => {
    this.setState({
      productData: {
        ...this.state.productData,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleCheckbox = (e) => {
    this.setState({
      productData: {
        ...this.state.productData,
        [e.target.name]: e.target.checked,
      },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addProduct(this.state.productData);
  };
  render() {
    const {
      ProductID,
      SKU,
      Barcode,
      VendorProductID,
      ProductName,
      ProductDescription,
      SupplierID,
      CategoryID,
      QuantityPerUnit,
      UnitPrice,
      CompareAtPrice,
      SupplierPrice,
      MSRP,
      AvailableSizes,
      AvailableColors,
      Size,
      Color,
      Discount,
      UnitWeight,
      UnitsInStock,
      UnitsInOrder,
      ReorderLevel,
      ProductAvailable,
      DiscountAvailable,
      CurrentOrder,
      Picture,
      Ranking,
      Note,
      ChargeTax,
      TaxValue,
      TrackQuantity,
      SellWhenOutOfStock,
      IsPhysicalProduct,
      ProductMetaTitle,
      ProductMetaDescription,
      ProductSlug,
      ProductType,
      ProductVendor,
    } = this.state.productData;
    const { loading } = this.props;
    ProductMetaTitle.length > 70
      ? this.setState({
          productData: {
            ...this.state.productData,
            ProductMetaTitle: ProductMetaTitle.slice(0, 69),
          },
        })
      : null;

    const { categories } = this.props;
    return (
      <div className="new-product">
        <div className="section-title">
          <p>Product</p>
        </div>
        <div className="section-content">
          <div className="left-side">
            {/* <form> */}
            <div className="section-content-wrapper">
              <div className="form-group-title">
                <p>About</p>
              </div>
              <div className="form-group">
                <label htmlFor="ProductName">Title</label>
                <input
                  type="text"
                  placeholder="My cool shirt"
                  name="ProductName"
                  value={ProductName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="ProductDescription">Description</label>
                <textarea
                  type="text"
                  rows="10"
                  name="ProductDescription"
                  value={ProductDescription}
                  onChange={this.handleChange}
                ></textarea>
              </div>
            </div>
            <div className="section-content-wrapper">
              <div className="form-group-title">
                <p>Media</p>
              </div>
              <div className="form-group">
                <input
                  type="file"
                  placeholder="My cool shirt"
                  // name="Picture"
                  // value={Picture}
                  // onChange={this.handleChange}
                />
                <label htmlFor="Picture">Or enter Url</label>
                <input
                  type="text"
                  name="Picture"
                  value={Picture}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="section-content-wrapper">
              <div className="form-group-title">
                <p>Pricing</p>
              </div>
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="UnitPrice">Price</label>
                  <input
                    type="number"
                    name="UnitPrice"
                    value={UnitPrice}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="CompareAtPrice">Compare at price</label>
                  <input
                    type="number"
                    name="CompareAtPrice"
                    value={CompareAtPrice}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="SupplierPrice">
                    Cost per item (customers won't see this)
                  </label>
                  <input
                    type="number"
                    name="SupplierPrice"
                    value={SupplierPrice}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  name="ChargeTax"
                  id="ChargeTax"
                  checked={ChargeTax}
                  value={ChargeTax}
                  onChange={this.handleCheckbox}
                />
                <label htmlFor="ChargeTax">Charge tax for this item</label>
              </div>
            </div>
            <div className="section-content-wrapper">
              <div className="form-group-title">
                <p>Inventory</p>
              </div>
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="SKU">SKU</label>
                  <input
                    type="text"
                    name="SKU"
                    value={SKU}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Barcode">
                    Barcode (ISBN, UPC, GTIN, etc.)
                  </label>
                  <input
                    type="text"
                    name="Barcode"
                    value={Barcode}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="ProductID">Product ID</label>
                <input
                  type="text"
                  name="ProductID"
                  value={ProductID}
                  onChange={this.handleChange}
                />
                <p>
                  Add a UNIQUE product ID. If no ID is provided, the server will
                  generate one for you.
                </p>
              </div>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  name="TrackQuantity"
                  id="TrackQuantity"
                  checked={TrackQuantity}
                  value={TrackQuantity}
                  onChange={this.handleCheckbox}
                />
                <label htmlFor="TrackQuantity">Track Quantity</label>
              </div>
              <div
                className="form-group"
                style={{ display: TrackQuantity ? 'flex' : 'none' }}
              >
                <div className="form-group">
                  <div className="checkbox-group">
                    <input
                      type="checkbox"
                      name="SellWhenOutOfStock"
                      id="SellWhenOutOfStock"
                      checked={SellWhenOutOfStock}
                      value={SellWhenOutOfStock}
                      onChange={this.handleCheckbox}
                    />
                    <label htmlFor="SellWhenOutOfStock">
                      Continue selling when out of stock
                    </label>
                  </div>
                </div>
                <p>QUANTITY</p>
                <label htmlFor="UnitsInStock">Available</label>
                <input
                  type="number"
                  name="UnitsInStock"
                  value={UnitsInStock}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="section-content-wrapper">
              <div className="form-group-title">
                <p>Shipping</p>
              </div>
              <p>Coming Soon..</p>
              {/* <div className="form-group-row">
                <input
                  type="checkbox"
                  name="IsPhysicalProduct"
                  id="IsPhysicalProduct"
                  value={IsPhysicalProduct}
                  onChange={this.handleCheckbox}
                  checked={IsPhysicalProduct}
                />
                <label htmlFor="IsPhysicalProduct">
                  This is a physical product
                </label>
              </div>
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="ProductPrice">Price</label>
                  <input type="text" name="ProductPrice" />
                </div>
              </div> */}
            </div>
            <div className="section-content-wrapper">
              <div className="form-group-title">
                <p>Variants</p>
              </div>
              <p>Coming Soon..</p>
            </div>
            <div className="section-content-wrapper">
              <div className="form-group-title">
                <p>Search engine listing preview</p>
              </div>
              {ProductMetaDescription ? (
                <div className="seo-preview">
                  <div className="seo-preview-title" style={{ color: 'blue' }}>
                    <h3>{ProductMetaTitle ? ProductMetaTitle : ProductName}</h3>
                  </div>
                  <div
                    className="seo-preview-website"
                    style={{ color: 'green' }}
                  >
                    {'https://mywebsite.com/product/' +
                      `${
                        !ProductSlug
                          ? ProductName &&
                            ProductName.toLowerCase()
                              .replace(/[^\w ]+/g, '')
                              .replace(/ +/g, '-')
                          : ProductSlug.toLowerCase()
                              .replace(/[^\w ]+/g, '')
                              .replace(/ +/g, '-')
                      }`}
                  </div>
                  <div
                    className="seo-preview-description"
                    style={{ color: 'rgb(75,75,75)' }}
                  >
                    {ProductMetaDescription}
                  </div>
                </div>
              ) : (
                <p>
                  Add a description to see how this product might appear in a
                  search engine listing
                </p>
              )}
              <br />
              <hr />
              <br />
              <div className="form-group">
                <label htmlFor="ProductMetaTitle">Product Title(meta)</label>
                <input
                  type="text"
                  name="ProductMetaTitle"
                  id="ProductMetaTitle"
                  value={ProductMetaTitle ? ProductMetaTitle : ProductName}
                  onChange={this.handleChange}
                />
                <div className="charts-left-to-write">
                  {ProductMetaTitle.length +
                    ' of 70' +
                    // (70 - ProductMetaTitle.length) +
                    ' characters used.'}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="ProductMetaDescription">
                  Product Description(meta)
                </label>
                <textarea
                  type="text"
                  name="ProductMetaDescription"
                  id="ProductMetaDescription"
                  value={ProductMetaDescription}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              {/* <div className="form-group">
                <label htmlFor="ProductSlug">URL and handle</label>
                <div className="url-and-handle form-group-row">
                  <span style={{ color: 'green' }}>
                    {'https://mywebsite.com/product/ '}
                  </span>
                  <input
                    type="text"
                    name="ProductSlug"
                    id="ProductSlug"
                    value={
                      !ProductSlug
                        ? ProductName &&
                          ProductName.toLowerCase()
                            .replace(/[^\w ]+/g, '')
                            .replace(/ +/g, '-')
                        : ProductSlug.toLowerCase()
                            .replace(/[^\w ]+/g, '')
                            .replace(/ +/g, '-')
                    }
                    style={{ width: '100%' }}
                    onChange={this.handleChange}
                  />
                </div>
              </div> */}
            </div>
            {/* </form> */}
          </div>
          <div className="right-side">
            <div className="rs-content-wrapper">
              <div className="section-content-wrapper">
                <div className="form-group-title">
                  <p>Availability</p>
                </div>
                <hr />
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    name="ProductAvailable"
                    id="ProductAvailable"
                    checked={ProductAvailable}
                    value={ProductAvailable}
                    onChange={this.handleCheckbox}
                  />
                  <label htmlFor="ProductAvailable">Online Store</label>
                </div>
              </div>
              <div className="section-content-wrapper">
                <div className="form-group-title">
                  <p>Organization</p>
                </div>
                <div className="form-group">
                  <label htmlFor="ProductType">Product type</label>
                  <input
                    type="text"
                    name="ProductType"
                    value={ProductType}
                    onChange={this.handleChange}
                    placeholder="e.g. Shirts"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ProductVendor">Vendor</label>
                  <input
                    type="text"
                    name="ProductVendor"
                    value={ProductVendor}
                    onChange={this.handleChange}
                    placeholder="e.g. Nike"
                  />
                </div>
                <br />
                <hr />
                <br />
                <div className="form-group">
                  <label htmlFor="CategoryID">COLLECTIONS</label>
                  <br />
                  {/* <input
                    type="text"
                    name="CategoryID"
                    // value={CategoryID}
                    onChange={this.handleChange}
                    placeholder="Search for collections"
                  /> */}
                  <select
                    name="CategoryID"
                    id="CategoryID"
                    value={CategoryID}
                    onChange={this.handleChange}
                  >
                    <option value="none">Uncategorized</option>
                    {categories.map((cat) => {
                      return (
                        <option
                          key={cat.id}
                          value={
                            cat.data.CategoryID ? cat.data.CategoryID : cat.id
                          }
                        >
                          {cat.data.CategoryName}
                        </option>
                      );
                    })}
                  </select>
                  <p>
                    Add this product to a collection so it's easy to find in
                    your store.
                  </p>
                </div>
                <br />
                <hr />
                <br />
                <div className="form-group">
                  <label htmlFor="ProductCollection">TAGS</label>
                  <input
                    type="text"
                    name="ProductCollection"
                    // value={ProductCollection}
                    onChange={this.handleChange}
                    placeholder="e.g. Vintage, summer, beautiful"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="admin-submit-button-wrapper">
          <button
            className="admin-submit-button"
            type="button"
            onClick={this.handleSubmit}
          >
            Add Product
          </button>
        </div>
        {/*  */}
        {loading ? (
          <div className="loading">
            <p>Wait</p>
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productData: state.adminProductReducer.productData,
    loading: state.adminProductReducer.loading,
    categories: state.productReducer.categories,
  };
};
export default connect(mapStateToProps, { addProduct, getCategories })(
  withRouter(NewProduct)
);
