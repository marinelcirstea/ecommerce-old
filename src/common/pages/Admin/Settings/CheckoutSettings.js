import React from 'react';

const CheckoutSettings = () => {
  return (
    <div>
      <div className="new-section-content">
        <div className="section-title">
          <p>Checkout</p>
        </div>
        <br />
        <div className="line"></div>
        <br />
        <div className="customer-input-section">
          <div className="customer-input-details">
            <div className="form-group-title">
              <p>Style</p>
            </div>
          </div>
          <div className="new-section-content-wrapper">
            <div className="inline-form-group">
              <div className="form-group-2">
                <label htmlFor="">First name</label>
                <input type="text" />
              </div>
              <div className="form-group-2">
                <label htmlFor="">Last name</label>
                <input type="text" />
              </div>
            </div>
            <div className="form-group-2">
              <label htmlFor="">Email</label>
              <input type="email" />
            </div>
            <div className="form-group-2">
              <label htmlFor="">Phone</label>
              <input type="phone" />
            </div>
            <div className="form-group-row-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Customer accepts marketing</label>
            </div>
          </div>
        </div>
        <br />
        <div className="line"></div>
        <br />
        <div className="customer-input-section">
          <div className="customer-input-details">
            <div className="form-group-title">
              <p>Customer accounts</p>
            </div>
            <p>
              Choose if you want to prompt your customer to create an account
              when they check out.
            </p>
          </div>
          <div className="new-section-content-wrapper">
            <div className="form-group-2">
              <label htmlFor="">Company</label>
              <input type="text" />
            </div>
            <div className="form-group-2">
              <label htmlFor="">Address</label>
              <input type="text" />
            </div>
            <div className="form-group-2">
              <label htmlFor="">Apartment, suite, etc.</label>
              <input type="text" />
            </div>
            <div className="form-group-2">
              <label htmlFor="">City</label>
              <input type="text" />
            </div>
            <div className="inline-form-group">
              <div className="form-group-2">
                <label htmlFor="">Country/Region</label>
                <input type="text" />
              </div>
              <div className="form-group-2">
                <label htmlFor="">Postal code</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="line"></div>
        <br />
        <div className="customer-input-section">
          <div className="customer-input-details">
            <div className="form-group-title">
              <p>Customer contact</p>
            </div>
            <p>
              Choose which contact methods your customers can use to check out
              and receive updates.
            </p>
          </div>
          <div className="new-section-content-wrapper">
            <div className="form-group-2">
              <label htmlFor="">Note</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <br />
        <div className="line"></div>
        <br />
        <div className="customer-input-section">
          <div className="customer-input-details">
            <div className="form-group-title">
              <p>Form options</p>
            </div>
            <p>
              Choose whether your checkout form requires extra information from
              your customer.
            </p>
          </div>
          <div className="new-section-content-wrapper">
            <div className="form-group-2">
              <label htmlFor="">Note</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default CheckoutSettings;
