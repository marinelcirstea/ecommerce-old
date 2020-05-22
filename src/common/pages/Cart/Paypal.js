import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

export default class PayPalCheckout extends React.Component {
  ppbtn = {
    maxWidth: '600px',
    margin: 'auto',
  };
  changeStyles = () => {
    this.ppbtn = {
      width: '100%',
    };
  };
  render() {
    return (
      <div className="pp-btn" style={this.ppbtn} onClick={this.changeStyles}>
        <PayPalButton
          amount="0.01"
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={(details, data) => {
            // alert('Transaction completed by ' + details.payer.name.given_name);
            console.log('details', details);
            console.log('details.payer', details.payer);
            console.log('data', data);

            // OPTIONAL: Call your server to save the transaction
            // return fetch('/paypal-transaction-complete', {
            //   method: 'post',
            //   body: JSON.stringify({
            //     orderId: data.orderID,
            //   }),
            // });
          }}
          options={{
            clientId:
              'AenpMVO65GtPSTBY_zJyrn9T-9SCrad7CknyJ4raw5ZbZmsLruaNXlNzl03hfv5KLMty8ER3AQAgdXT5',
          }}
        />
      </div>
    );
  }
}
