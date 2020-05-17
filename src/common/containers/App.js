import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

import React from 'react';
import Products from '../pages/Product/Products';
import Product from '../pages/Product/Product';
import Category from '../pages/Category/Category';
import Categories from '../pages/Category/Categories';
import NewRoute from '../Route';
import Default from './layouts/Default';
const App = () => {
  return (
    <div>
      <Switch>
        <NewRoute path="/" exact component={Home} layout={Default} />
        <Route path="/about" component={About} />
        <NewRoute path="/product" exact component={Products} layout={Default} />
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
      </Switch>
    </div>
  );
};

export default App;
