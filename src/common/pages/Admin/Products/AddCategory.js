import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addCategory } from '../../../redux/actions/admin/adminProduct';

export class AddCategory extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    categoryData: {
      Active: true,
      CategoryID: '',
      CategoryName: '',
      CategoryPicture: '',
      CategoryDescription: '',
      CategoryMetaDescription: '',
      CategoryMetaTitle: '',
      CategorySlug: '',
      CategoryType: 'manual',
    },
  };
  handleChange = (e) => {
    this.setState({
      categoryData: {
        ...this.state.categoryData,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleCheckbox = (e) => {
    this.setState({
      categoryData: {
        ...this.state.categoryData,
        [e.target.name]: e.target.checked,
      },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addProduct(this.state.categoryData);
  };
  render() {
    const {
      Active,
      CategoryID,
      CategoryName,
      CategoryPicture,
      CategoryDescription,
      CategoryMetaDescription,
      CategoryMetaTitle,
      CategorySlug,
      CategoryType,
    } = this.state.categoryData;
    const { loading } = this.props;
    return (
      <div className="new-product">
        <div className="section-title">
          <p>Create collection</p>
        </div>
        <div className="section-content">
          <div className="left-side">
            {/* <form> */}
            <div className="section-content-wrapper">
              <div className="form-group-title">
                <p>About</p>
              </div>
              <div className="form-group">
                <label htmlFor="CategoryName">Title</label>
                <input
                  type="text"
                  placeholder="My cool shirt"
                  name="CategoryName"
                  value={CategoryName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="CategoryDescription">Description</label>
                <textarea
                  type="text"
                  rows="10"
                  name="CategoryDescription"
                  value={CategoryDescription}
                  onChange={this.handleChange}
                ></textarea>
              </div>
            </div>

            <div className="section-content-wrapper">
              <div className="form-group-title">
                <p>Collection type</p>
              </div>
              <div className="form-group-row">
                <input
                  type="radio"
                  name="CategoryType"
                  id="manual"
                  checked={true}
                  value={CategoryType}
                />
                <label htmlFor="manual">Manual</label>
              </div>
              <p>
                Add products to this collection one by one. Learn more about
                manual collections.
              </p>
              <div className="form-group-row">
                <input
                  type="radio"
                  name="CategoryType"
                  id="automated"
                  value={CategoryType}
                />
                <label htmlFor="automated">Automated</label>
              </div>
              <p>
                Existing and future products that match the conditions you set
                will automatically be added to this collection. Learn more about
                automated collections.
              </p>
              {/* <div className="form-group-row">
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
              </div> */}
            </div>

            <div className="section-content-wrapper">
              <div className="form-group-title">
                <p>Search engine listing preview</p>
              </div>
              {CategoryMetaDescription ? (
                <div className="seo-preview">
                  <div className="seo-preview-title" style={{ color: 'blue' }}>
                    <h3>
                      {CategoryMetaTitle ? CategoryMetaTitle : CategoryName}
                    </h3>
                  </div>
                  <div
                    className="seo-preview-website"
                    style={{ color: 'green' }}
                  >
                    {'https://mywebsite.com/category/' +
                      `${
                        !CategorySlug
                          ? CategoryName &&
                            CategoryName.toLowerCase()
                              .replace(/[^\w ]+/g, '')
                              .replace(/ +/g, '-')
                          : CategorySlug.toLowerCase()
                              .replace(/[^\w ]+/g, '')
                              .replace(/ +/g, '-')
                      }`}
                  </div>
                  <div
                    className="seo-preview-description"
                    style={{ color: 'rgb(75,75,75)' }}
                  >
                    {CategoryMetaDescription}
                  </div>
                </div>
              ) : (
                <p>
                  Add a description to see how this collection might appear in a
                  search engine listing
                </p>
              )}
              <br />
              <hr />
              <br />
              <div className="form-group">
                <label htmlFor="CategoryMetaTitle">Category Title(meta)</label>
                <input
                  type="text"
                  name="CategoryMetaTitle"
                  id="CategoryMetaTitle"
                  value={CategoryMetaTitle ? CategoryMetaTitle : CategoryName}
                  onChange={this.handleChange}
                />
                <div className="charts-left-to-write">
                  {CategoryMetaTitle.length +
                    ' of 70' +
                    // (70 - CategoryMetaTitle.length) +
                    ' characters used.'}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="CategoryMetaDescription">
                  Category Description(meta)
                </label>
                <textarea
                  type="text"
                  name="CategoryMetaDescription"
                  id="CategoryMetaDescription"
                  value={CategoryMetaDescription}
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
                    name="Active"
                    id="Active"
                    checked={Active}
                    value={Active}
                    onChange={this.handleCheckbox}
                  />
                  <label htmlFor="Active">Online Store</label>
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
                  <label htmlFor="CategoryPicture">Or enter Url</label>
                  <input
                    type="text"
                    name="CategoryPicture"
                    value={CategoryPicture}
                    onChange={this.handleChange}
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
            Add Collection
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

const mapStateToProps = (state) => ({
  loading: state.adminProductReducer.loading,
  categoryData: state.productReducer.categoryData,
});

export default connect(mapStateToProps, { addCategory })(AddCategory);
