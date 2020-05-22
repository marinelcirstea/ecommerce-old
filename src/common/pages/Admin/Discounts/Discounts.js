import React from 'react';
import NoData from '../../../components/NoData';

const Discounts = () => {
  return (
    <div>
      <NoData
        title={'Discounts'}
        intro={'Manage your collections'}
        description={
          "You don't have any collections yet, add a collection so you can manage your products with ease."
        }
        button={'Create collection'}
        url={'/admin/products/collections/new'}
      />
    </div>
  );
};

export default Discounts;
