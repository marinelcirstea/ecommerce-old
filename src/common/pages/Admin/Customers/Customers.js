import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from '../../../services/firebase';
import Octicon, { Search } from '@primer/octicons-react';

// import NoCustomers from './NoCustomers';
import NoData from '../../../components/NoData';

const Customers = () => {
  let customerList = [];

  const [customers, setCustomers] = useState([{ id: '', data: {} }]);

  const getCustomers = (page = page) => {
    firebase
      .firestore()
      .collection('customers')
      .get()
      .then((snaps) => {
        snaps.forEach((customer) => {
          customerList.push({ id: customer.id, data: customer.data() });
        });
        setCustomers(customerList);
      });
  };

  useEffect(() => {
    getCustomers();
    return () => {
      getCustomers;
    };
  }, []);

  if (customers.length == 0 || (customers.length == 1 && !customers[0].id)) {
    return (
      <NoData
        title={'Customers'}
        intro={'Manage your customers'}
        description={
          "Once your store has customers, you'll be able to see them here."
        }
        button={'Add customer'}
        url={'/admin/customers/new'}
      />
    );
  }

  return (
    <div>
      <section>
        <div className="section-upper">
          <div className="section-title-with-button">
            <p>Customers</p>
            <button>
              <NavLink to="/admin/customers/new" style={{ padding: '3px' }}>
                Add Customer
              </NavLink>
            </button>
          </div>
          {/* <div className="section-options">
            <div className="option">
              <Octicon icon={ArrowUp} />
              Import
            </div>
            <div className="option">
              <Octicon icon={ArrowDown} />
              Export
            </div>
          </div> */}
          <div className="section-content">
            <div className="section-content-wrapper">
              <div className="fake-table">
                <div className="fake-table-header">
                  <div className="filters">
                    <label htmlFor="search" id="searchlabel">
                      <Octicon icon={Search} />
                    </label>
                    <input
                      type="search"
                      placeholder="Search.."
                      name="search"
                      id="search"
                    />
                  </div>
                  <div className="fake-tr">
                    <div className="fake-th th-checkbox">
                      <input type="checkbox" name="" id="" />
                    </div>
                    <div className="fake-th">Customer</div>
                    <div className="fake-th">CustomerID</div>
                  </div>
                </div>
                <div className="fake-tbody">
                  {customers.map((customer) => {
                    return (
                      <div className="fake-tr" key={customer.id}>
                        <div className="fake-td td-checkbox">
                          <input type="checkbox" name="" id="" />
                        </div>
                        <div className="fake-td">
                          {customer.data.CustomerName}
                        </div>

                        <div className="fake-td">
                          {customer.data.CustomerID}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customers;
