import React from 'react';
import NoData from '../../../components/NoData';

const Orders = () => {
  return (
    <div>
      <NoData
        title={'Orders'}
        intro={'Manage your orders'}
        description={
          "Once your store has orders, this is where you'll process and track them."
        }
        button={'Create order'}
        url={'/admin/orders/new'}
      />
    </div>
  );
};

export default Orders;
