import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

import React from 'react';
// import Products from '../pages/Product/Products';
import Product from '../pages/Product/Product';
import Category from '../pages/Category/Category';
import Categories from '../pages/Category/Categories';
import NewRoute from '../Route';
import Default from './layouts/Default';

import Admin from '../pages/Admin/Admin';
import AdminLayout from './layouts/AdminLayout';
import AllProducts from '../pages/Admin/Products/AllProducts';
import AdminCategories from '../pages/Admin/Products/AdminCategories';
import AddCategory from '../pages/Admin/Products/AddCategory';
import NewProduct from '../pages/Admin/Products/NewProduct';

import Analytics from '../pages/Admin/Analytics/Analytics';
import Customers from '../pages/Admin/Customers/Customers';
import Discounts from '../pages/Admin/Discounts/Discounts';
import Marketing from '../pages/Admin/Marketing/Marketing';
import OnlineStore from '../pages/Admin/OnlineStore/OnlineStore';
import Orders from '../pages/Admin/Orders/Orders';
import AddCustomer from '../pages/Admin/Customers/AddCustomer';
import UpdateProduct from '../pages/Admin/Products/UpdateProduct';

//settings
import Settings from '../pages/Admin/Settings/Settings';
import CheckoutSettings from '../pages/Admin/Settings/CheckoutSettings';
import FilesSettings from '../pages/Admin/Settings/FilesSettings';
import GeneralSettings from '../pages/Admin/Settings/GeneralSettings';
import LanguageSettings from '../pages/Admin/Settings/LanguageSettings';
import LegalSettings from '../pages/Admin/Settings/LegalSettings';
import NotificationSettings from '../pages/Admin/Settings/NotificationSettings';
import PaymentSettings from '../pages/Admin/Settings/PaymentSettings';
import ShippingSettings from '../pages/Admin/Settings/ShippingSettings';
import TaxSettings from '../pages/Admin/Settings/TaxSettings';
import CartPage from '../pages/Cart/CartPage';

const App = () => {
  return (
    <div>
      <Switch>
        <NewRoute path="/" exact component={Home} layout={Default} />
        <NewRoute path="/cart" exact component={CartPage} layout={Default} />
        <Route path="/about" component={About} />
        {/* <NewRoute path="/product" exact component={Products} layout={Default} /> */}
        {/* <Route path ='/product' component={Redirect} /> */}
        <NewRoute path="/product/:id" component={Product} layout={Default} />
        <NewRoute
          path="/category"
          exact
          component={Category}
          layout={Default}
        />
        <NewRoute
          path="/category/:id"
          component={Categories}
          layout={Default}
        />
        <NewRoute exact path="/admin" component={Admin} layout={AdminLayout} />
        <NewRoute
          exact
          path="/admin/orders"
          component={Orders}
          layout={AdminLayout}
        />
        <NewRoute
          exact
          path="/admin/products"
          component={AllProducts}
          layout={AdminLayout}
        />

        <NewRoute
          exact
          path="/admin/products/new"
          component={NewProduct}
          layout={AdminLayout}
        />
        <NewRoute
          exact
          path="/admin/products/collections"
          component={AdminCategories}
          layout={AdminLayout}
        />

        <NewRoute
          exact
          path="/admin/products/collections/new"
          component={AddCategory}
          layout={AdminLayout}
        />
        <NewRoute
          exact
          path="/admin/products/:id"
          component={UpdateProduct}
          layout={AdminLayout}
        />
        {/* <NewRoute path="/admin/product/:id" component={Admin} layout={AdminLayout} /> */}

        <NewRoute
          exact
          path="/admin/customers"
          component={Customers}
          layout={AdminLayout}
        />
        <NewRoute
          exact
          path="/admin/customers/new"
          component={AddCustomer}
          layout={AdminLayout}
        />
        <NewRoute
          exact
          path="/admin/dashboards"
          component={Analytics}
          layout={AdminLayout}
        />
        <NewRoute
          exact
          path="/admin/marketing"
          component={Marketing}
          layout={AdminLayout}
        />
        <NewRoute
          exact
          path="/admin/discounts"
          component={Discounts}
          layout={AdminLayout}
        />
        <NewRoute
          exact
          path="/admin/store"
          component={OnlineStore}
          layout={AdminLayout}
        />
        <NewRoute
          exact
          path="/admin/settings"
          component={Settings}
          layout={AdminLayout}
        />
        <NewRoute
          exact
          path="/admin/settings/checkout"
          component={CheckoutSettings}
          layout={AdminLayout}
        />
        <NewRoute
          exact
          path="/admin/settings/files"
          component={FilesSettings}
          layout={AdminLayout}
        />
        <NewRoute
          exact
          path="/admin/settings/general"
          component={GeneralSettings}
          layout={AdminLayout}
        />
        <NewRoute
          exact
          path="/admin/settings/languages"
          component={LanguageSettings}
          layout={AdminLayout}
        />
        <NewRoute
          exact
          path="/admin/settings/legal"
          component={LegalSettings}
          layout={AdminLayout}
        />
        <NewRoute
          exact
          path="/admin/settings/notifications"
          component={NotificationSettings}
          layout={AdminLayout}
        />
        <NewRoute
          exact
          path="/admin/settings/payment"
          component={PaymentSettings}
          layout={AdminLayout}
        />
        <NewRoute
          exact
          path="/admin/settings/shipping"
          component={ShippingSettings}
          layout={AdminLayout}
        />
        <NewRoute
          exact
          path="/admin/settings/taxes"
          component={TaxSettings}
          layout={AdminLayout}
        />
        {/* <NewRoute path="/admin/category/:id" component={Admin} layout={AdminLayout} /> */}
      </Switch>
    </div>
  );
};

export default App;
