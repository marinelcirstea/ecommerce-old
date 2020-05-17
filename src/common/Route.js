import React from 'react';
import { Route } from 'react-router-dom';

export default function NewRoute({
  layout: Layout,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
