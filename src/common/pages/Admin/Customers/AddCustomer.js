import React from 'react';

const AddCustomer = () => {
  return (
    <div>
      <div className="new-section-content">
        <div className="section-title">
          <p>Add customer</p>
        </div>
        <br />
        <div className="line"></div>
        <br />
        <div className="customer-input-section">
          <div className="customer-input-details">
            <div className="form-group-title">
              <p>Customer overview</p>
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
              <p>Address</p>
            </div>
            <p>The primary address of this customer.</p>
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
              <p>Notes</p>
            </div>
            <p>Add notes about your customer.</p>
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
              <p>Tags</p>
            </div>
            <p>Tags can be used to categorize customers into groups.</p>
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

export default AddCustomer;
