import './Cart.css';
import React, { useRef, useState, useEffect } from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
// import CartItem from './CartItem';
import { setItemCount } from '../../redux/actions/cart';
import Icon from '@mdi/react';
import { mdiGoogle } from '@mdi/js';
import PayPalCheckout from './Paypal';

export const CartPage = (props) => {
  const { items, setItemCount } = props;
  let subtotal = 0;
  items.forEach((item) => {
    subtotal += parseInt(item.data.UnitPrice) * parseInt(item.count);
  });

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-table">
        <div className="cart-thead">
          <div className="cart-tr">
            <div className="cart-th th-product">
              <p>Product</p>
            </div>
            <div className="cart-th th-price">
              <p>Price</p>
            </div>
            <div className="cart-th th-qty">
              <label htmlFor="qty">Quantity</label>
            </div>
            <div className="cart-th th-total">
              <p>Total</p>
            </div>
          </div>
        </div>
        <div className="cart-tbody">
          {items.map((item) => {
            return (
              <div className="cart-tr" key={item.data.ProductID}>
                <div className="cart-td td-product">
                  {item.data.ProductName}
                </div>
                <div className="cart-td td-price">{item.data.UnitPrice}</div>
                <div className="cart-td td-qty">
                  <input
                    type="number"
                    min="1"
                    name="qty"
                    id="qty"
                    value={item.count}
                    onChange={(e) => {
                      if (e.target.value > 0) {
                        setItemCount(
                          items,
                          item.data.ProductID,
                          e.target.value
                        );
                      } else {
                        setItemCount(items, item.data.ProductID, 1);
                      }
                    }}
                  />
                </div>
                <div className="cart-td td-total">
                  {item.count * item.data.UnitPrice}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="cart-subtotal">
        <div className="cart-subtotal-upper">
          <h3>Subtotal: </h3>
          <p>{subtotal}</p>
        </div>
        <p className="cs-shipping">Shipping calculated at checkout.</p>
      </div>
      <div className="cart-checkout">
        <div className="cc-upper">
          <button>CHECK OUT</button>
        </div>
        <div className="cc-lower">
          <button>
            <Icon path={mdiGoogle} size={1} />
            Pay
          </button>
          <button>Pay</button>
          <button>Pay</button>
        </div>
      </div>
      {/* {paidFor ? <p>Congrats</p> : <div ref={paypalRef}></div>} */}
      <PayPalCheckout />
    </div>
  );
};

// CartPage.propTypes = {
//   prop: PropTypes
// }

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
  };
};

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps, { setItemCount })(CartPage);
