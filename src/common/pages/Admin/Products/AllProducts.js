import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import firebase from '../../../services/firebase';
import Octicon, { ArrowUp, ArrowDown, Search } from '@primer/octicons-react';
import NoData from '../../../components/NoData';
import ImportModal from '../../../components/Modals/ImportModal';

const AllProducts = () => {
  let page = 1;
  let productList = [];

  const [products, setProducts] = useState([{ id: '', data: {} }]);
  const [showModal, setShowModal] = useState(false);

  const getProducts = (page = page) => {
    firebase
      .firestore()
      .collection('products')
      .get()
      .then((snaps) => {
        snaps.forEach((product) => {
          productList.push({ id: product.id, data: product.data() });
        });
        setProducts(productList);
      });
  };

  useEffect(() => {
    getProducts();
    return () => {
      getProducts;
    };
  }, []);

  if (products.length == 0 || (products.length == 1 && !products[0].id)) {
    return (
      <NoData
        title={'Products'}
        intro={'Manage your products'}
        description={
          "You don't have any products yet, add a product so you can start selling."
        }
        button={'Add product'}
        url={'/admin/products/new'}
      />
    );
  }

  return (
    <div>
      <section>
        <div className="section-upper">
          <div className="section-title-with-button">
            <p>Products</p>
            <button>
              <NavLink to="/admin/products/new" style={{ padding: '3px' }}>
                Add Product
              </NavLink>
            </button>
          </div>
          <div className="section-options">
            <div className="option" onClick={() => setShowModal(true)}>
              <Octicon icon={ArrowUp} />
              Import
            </div>
            <div className="option">
              <Octicon icon={ArrowDown} />
              Export
            </div>
          </div>
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
                    <div className="fake-th">Product</div>
                    <div className="fake-th">Inventory</div>
                    <div className="fake-th">Type</div>
                    <div className="fake-th th-vendor">Vendor</div>
                  </div>
                </div>
                <div className="fake-tbody">
                  {products.map((product) => {
                    return (
                      <div className="fake-tr" key={product.id}>
                        <div className="fake-td td-checkbox">
                          <input type="checkbox" name="" id="" />
                        </div>
                        <div className="fake-td">
                          <Link
                            to={`/admin/products/${
                              product.data.ProductID
                                ? product.data.ProductID
                                : product.id
                            }`}
                            className="bold hover-underline"
                          >
                            {product.data.ProductName}
                          </Link>
                        </div>
                        <div className="fake-td">
                          {product.data.UnitsInStock
                            ? product.data.UnitsInStock
                            : 'Not tracked'}
                        </div>
                        <div className="fake-td">
                          {product.data.ProductType}
                        </div>
                        <div className="fake-td td-vendor">
                          {product.data.Vendor}
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
      {showModal && <ImportModal setShowModal={setShowModal} />}
    </div>
  );
};

export default AllProducts;
