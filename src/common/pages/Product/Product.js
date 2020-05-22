import './Product.css';
import React, { Component, useEffect, useState } from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getProduct } from '../../redux/actions/product';
import { addToCart } from '../../redux/actions/cart';

import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';

export const Product = (props) => {
  const { product, cartItems, getProduct, addToCart } = props;
  useEffect(() => {
    if (
      product.data.ProductID !== props.match.params.id &&
      product.id !== props.match.params.id
    ) {
      getProduct(props.match.params.id);
    }
    // return () => {
    //   getProduct(props.match.params.id);
    // };
  }, [props.match.params.id]);
  const [itemsInCart, setItemsInCart] = useState(cartItems.length);
  return (
    <div>
      <Link to="/cart" className="cart-icon">
        <Icon path={mdiCartOutline} size={1} />
        <span>{itemsInCart}</span>
      </Link>
      <div className="product-page">
        <div className="product-upper">
          <div className="product-upper-top">
            <div className="product-upper-left">
              <div className="product-images">
                <div className="product-main-image">
                  <img
                    src={product.data.Picture}
                    alt={product.data.ProductName}
                  />
                </div>
                <div className="product-secondary-images"></div>
              </div>
            </div>
            <div className="product-upper-right">
              <div className="pur-intro">
                <div className="product-name">
                  <h1>{product.data.ProductName}</h1>
                </div>
                <div className="product-price">
                  <p>{product.data.UnitPrice}</p>
                </div>
                <div className="product-rate">
                  <p>reviews</p>
                </div>
              </div>
              <div className="line"></div>
              <div className="product-variants">
                {product.data.AvailableSizes &&
                  product.data.AvailableSizes.map((size) => {
                    return (
                      <div className="product-variant" key={size.id}>
                        <div className="variant-name">{size.VariantName}</div>
                        <div className="variant-price">{size.VariantPrice}</div>
                      </div>
                    );
                  })}
              </div>
              <div className="pur-actions">
                <button
                  onClick={() => {
                    addToCart(cartItems, product);
                    setItemsInCart(cartItems.length);
                  }}
                >
                  Add to cart
                </button>
                <button>Buy it now</button>
              </div>
              <div className="product-description">
                {product.data.ProductDescription}
              </div>
            </div>
          </div>
          <div className="product-upper-bottom">
            <h3>reviews</h3>
          </div>
        </div>
        <div className="product-middle">
          <h3>middle</h3>
        </div>
        <div className="product-lower">
          <h4>lower</h4>
        </div>
      </div>
    </div>
  );
};

// Product.propTypes = {
//   prop: PropTypes
// }

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    product: state.productReducer.product,
    cartItems: state.cart.items,
  };
};

export default connect(mapStateToProps, { getProduct, addToCart })(
  withRouter(Product)
);
