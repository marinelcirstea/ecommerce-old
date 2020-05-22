import React from 'react';

const CartItem = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <br />
      <h3>{props.price}</h3>
      <br />
    </div>
  );
};

export default CartItem;
