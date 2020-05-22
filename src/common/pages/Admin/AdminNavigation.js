import React from 'react';
import { NavLink } from 'react-router-dom';
// import Icon from '../../components/Icon';
import Icon from '@mdi/react';
import {
  mdiCogOutline,
  mdiGoogleAnalytics,
  mdiSale,
  mdiBullhornOutline,
  mdiAccountOutline,
  mdiTagOutline,
} from '@mdi/js';
import Octicon, {
  Home,
  Package,
  Tag,
  Person,
  Globe,
  Megaphone,
  Settings,
} from '@primer/octicons-react';

const AdminNavigation = () => {
  return (
    <div className="admin-menu">
      <div className="menu-section">
        <div className="menu-item">
          <NavLink to="/admin" exact className="menu-main-link">
            <Octicon width={24} height={24} icon={Home} />
            <p>Home</p>
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/admin/orders" className="menu-main-link">
            <Octicon width={24} height={24} icon={Package} />
            <p>Orders</p>
          </NavLink>
          <NavLink className="menu-sublink" exact to="/admin/orders">
            Orders
          </NavLink>
          <NavLink className="menu-sublink" to="/admin/orders/drafts">
            Drafts
          </NavLink>
          <NavLink className="menu-sublink" to="/admin/orders/checkouts">
            Abandoned Checkouts
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/admin/products" className="menu-main-link">
            <Icon path={mdiTagOutline} size={1} />
            <p>Products</p>
          </NavLink>
          <NavLink className="menu-sublink" exact to="/admin/products">
            All products
          </NavLink>
          <NavLink className="menu-sublink" to="/admin/products/new">
            New Product
          </NavLink>
          {/* <NavLink
            className="menu-sublink"
            exact
            to="/admin/products/inventory"
          >
            Inventory
          </NavLink>
          <NavLink className="menu-sublink" exact to="/admin/products/orders">
            Purchase orders
          </NavLink> */}
          {/* <NavLink className="menu-sublink" exact to="/admin/products/transfers">
          Transfers
        </NavLink> */}
          <NavLink
            className="menu-sublink"
            exact
            to="/admin/products/collections"
          >
            Collections
          </NavLink>

          <NavLink
            className="menu-sublink"
            to="/admin/products/collections/new"
          >
            New Collection
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/admin/customers" exact className="menu-main-link">
            <Icon path={mdiAccountOutline} size={1} />
            <p>Customers</p>
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/admin/dashboards" exact className="menu-main-link">
            {/* <Icon icon={Globe} /> */}
            <Icon path={mdiGoogleAnalytics} size={1} />
            <p>Analytics</p>
          </NavLink>
          <NavLink className="menu-sublink" exact to="/admin/dashboards">
            Dashboards
          </NavLink>
          <NavLink className="menu-sublink" to="/admin/reports">
            Reports
          </NavLink>
          <NavLink className="menu-sublink" to="/admin/dashboards/live">
            Live View
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/admin/marketing" className="menu-main-link">
            {/* <Icon icon={Megaphone} /> */}
            <Icon size={1} path={mdiBullhornOutline} />
            <p>Marketing</p>
          </NavLink>
          <NavLink className="menu-sublink" exact to="/admin/marketing">
            Overview
          </NavLink>
          <NavLink className="menu-sublink" to="/admin/marketing/campaigns">
            Campaigns
          </NavLink>
          <NavLink className="menu-sublink" to="/admin/marketing/automations">
            Automations
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/admin/discounts" className="menu-main-link">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-discount"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="9" y1="15" x2="15" y2="9" />
                <circle cx="9.5" cy="9.5" r=".5" />
                <circle cx="14.5" cy="14.5" r=".5" />
                <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
              </svg>
            </span>
            <p>Discounts</p>{' '}
          </NavLink>
          {/* <NavLink className="menu-sublink" exact to="/admin/dashboards">
            Dashboards
          </NavLink>
          <NavLink className="menu-sublink" to="/admin/reports">
            Reports
          </NavLink>
          <NavLink className="menu-sublink" to="/admin/dashboards/live">
            Live View
          </NavLink> */}
        </div>
      </div>
      <div className="menu-section">
        <div className="navigation-section-title">sales channels</div>
        <div className="menu-item">
          <NavLink to="/admin/store" exact className="menu-main-link">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-building-store"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="3" y1="21" x2="21" y2="21" />
                <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                <path d="M5 21v-10.15" />
                <path d="M19 21v-10.15" />
                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
              </svg>
            </span>
            <p>Online Store</p>
          </NavLink>
          <NavLink exact className="menu-sublink" exact to="/admin/store">
            Theme
          </NavLink>
          <NavLink
            exact
            className="menu-sublink"
            exact
            to="/admin/store/articles"
          >
            Blog
          </NavLink>
          <NavLink exact className="menu-sublink" exact to="/admin/store/pages">
            Pages
          </NavLink>
          <NavLink
            exact
            className="menu-sublink"
            exact
            to="/admin/store/navigation"
          >
            Navigation
          </NavLink>
          <NavLink
            exact
            className="menu-sublink"
            exact
            to="/admin/store/domains"
          >
            Domains
          </NavLink>
          <NavLink
            exact
            className="menu-sublink"
            exact
            to="/admin/store/preferences"
          >
            Preferences
          </NavLink>
        </div>
      </div>
      <div className="menu-section">
        <div className="menu-item">
          <NavLink to="/admin/settings" className="menu-main-link">
            <Icon path={mdiCogOutline} size={1} />
            <p>Settings</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdminNavigation;
