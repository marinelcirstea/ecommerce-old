import React from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div>
      <div className="grid">
        <div className="new-section-content">
          <div className="section-title">
            <p>Checkout</p>
          </div>
          <div className="section-content-wrapper">
            <Link to="/admin/settings/general" className="setting-link">
              <div className="setting">
                <div className="setting-image"></div>
                <div className="setting-text">
                  <div className="form-group-title">
                    <p>General</p>
                  </div>
                  <div className="setting-description">
                    <p>View and update your store details</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/admin/settings/payments" className="setting-link">
              <div className="setting">
                <div className="setting-image"></div>
                <div className="setting-text">
                  <div className="form-group-title">
                    <p>Payments</p>
                  </div>
                  <div className="setting-description">
                    <p>Enable and manage your store's payment providers</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/admin/settings/notifications" className="setting-link">
              <div className="setting">
                <div className="setting-image"></div>
                <div className="setting-text">
                  <div className="form-group-title">
                    <p>Notifications</p>
                  </div>
                  <div className="setting-description">
                    <p>Manage notifications sent to you and your customers</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/admin/settings/languages" className="setting-link">
              <div className="setting">
                <div className="setting-image"></div>
                <div className="setting-text">
                  <div className="form-group-title">
                    <p>Store languages</p>
                  </div>
                  <div className="setting-description">
                    <p>
                      Manage the languages your customers can view your store
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/admin/settings/checkout" className="setting-link">
              <div className="setting">
                <div className="setting-image"></div>
                <div className="setting-text">
                  <div className="form-group-title">
                    <p>Checkout</p>
                  </div>
                  <div className="setting-description">
                    <p>Customize your online checkout process</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/admin/settings/shipping" className="setting-link">
              <div className="setting">
                <div className="setting-image"></div>
                <div className="setting-text">
                  <div className="form-group-title">
                    <p>Shipping</p>
                  </div>
                  <div className="setting-description">
                    <p>Manage how you ship orders to your customers</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/admin/settings/files" className="setting-link">
              <div className="setting">
                <div className="setting-image"></div>
                <div className="setting-text">
                  <div className="form-group-title">
                    <p>Files</p>
                  </div>
                  <div className="setting-description">
                    <p>Upload images, videos, and documents</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/admin/settings/legal" className="setting-link">
              <div className="setting">
                <div className="setting-image"></div>
                <div className="setting-text">
                  <div className="form-group-title">
                    <p>Legal</p>
                  </div>
                  <div className="setting-description">
                    <p>Manage your store's legal pages</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/admin/settings/taxes" className="setting-link">
              <div className="setting">
                <div className="setting-image"></div>
                <div className="setting-text">
                  <div className="form-group-title">
                    <p>Taxes</p>
                  </div>
                  <div className="setting-description">
                    <p>Manage how your store charges taxes</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
