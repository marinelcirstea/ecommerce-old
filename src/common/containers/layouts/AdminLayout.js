import React from 'react';
import PropTypes from 'prop-types';
import AdminNavigation from '../../pages/Admin/AdminNavigation';
import './Admin.css';
// import 'semantic-ui-css/semantic.min.css';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <input type="checkbox" name="show-admin-menu" id="show-admin-menu" />
      <div className="admin-header">
        <div className="admin-menu-button">
          <label htmlFor="show-admin-menu">Menu</label>
        </div>
      </div>
      <div className="admin-layout">
        <div className="admin-left-side">
          <AdminNavigation />
        </div>
        <div className="admin-right-side">
          <div className="admin-container">{children}</div>
        </div>
      </div>
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default AdminLayout;
