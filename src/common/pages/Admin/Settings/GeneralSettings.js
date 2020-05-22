import React from 'react';

const GeneralSettings = () => {
  return (
    <div>
      <div className="new-section-content">
        <div className="section-title">
          <p>General</p>
        </div>
        <br />
        <div className="line"></div>
        <br />
        <div className="customer-input-section">
          <div className="customer-input-details">
            <div className="form-group-title">
              <p>Store details</p>
            </div>
            <p>Your customers will use this information to contact you.</p>
          </div>
          <div className="new-section-content-wrapper">
            <div className="form-group-2">
              <label htmlFor="">Store name</label>
              <input type="text" />
            </div>
            <div className="form-group-2">
              <label htmlFor="">Email</label>
              <input type="email" />
            </div>
            <div className="form-group-2">
              <label htmlFor="">Industry</label>
              <input type="phone" />
            </div>
          </div>
        </div>
        <br />
        <div className="line"></div>
        <br />
        <div className="customer-input-section">
          <div className="customer-input-details">
            <div className="form-group-title">
              <p>Store address</p>
            </div>
            <p>
              This address will appear on your invoices. You can edit the
              address used to calculate shipping rates in your shipping settings
            </p>
          </div>
          <div className="new-section-content-wrapper">
            <div className="form-group-2">
              <label htmlFor="">Legal name of business</label>
              <input type="text" />
            </div>
            <div className="form-group-2">
              <label htmlFor="">Phone</label>
              <input type="phone" />
            </div>
            <div className="form-group-2">
              <label htmlFor="">Street</label>
              <input type="text" />
            </div>
            <div className="form-group-2">
              <label htmlFor="">Apartment, suite, etc.</label>
              <input type="text" />
            </div>

            <div className="inline-form-group">
              <div className="form-group-2">
                <label htmlFor="">City</label>
                <input type="text" />
              </div>
              <div className="form-group-2">
                <label htmlFor="">Postal code</label>
                <input type="text" />
              </div>
            </div>
            <div className="form-group-2">
              <label htmlFor="">Country/Region</label>
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
              <p>Standards and formats</p>
            </div>
            <p>
              Standards and formats are used to calculate product prices,
              shipping weights, and order times.
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
              <p>Store currency</p>
            </div>
            <p>This is the currency your products are sold in.</p>
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

export default GeneralSettings;
