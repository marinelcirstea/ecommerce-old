import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from '../../../services/firebase';
import Octicon, { Search } from '@primer/octicons-react';

import NoData from '../../../components/NoData';

const AdminCategories = () => {
  let categoryList = [];

  const [categories, setCategories] = useState([{ id: '', data: {} }]);

  const getCategories = (page = page) => {
    firebase
      .firestore()
      .collection('categories')
      .get()
      .then((snaps) => {
        snaps.forEach((product) => {
          categoryList.push({ id: product.id, data: product.data() });
        });
        setCategories(categoryList);
      });
  };

  useEffect(() => {
    getCategories();
    return () => {
      getCategories;
    };
  }, []);

  if (categories.length == 0 || (categories.length == 1 && !categories[0].id)) {
    return (
      <NoData
        title={'Collections'}
        intro={'Manage your collections'}
        description={
          "You don't have any collections yet, add a collection so you can manage your products with ease."
        }
        button={'Create collection'}
        url={'/admin/products/collections/new'}
      />
    );
  }

  return (
    <div>
      <section>
        <div className="section-upper">
          <div className="section-title-with-button">
            <p>Collections</p>
            <button>
              <NavLink
                to="/admin/products/collections/new"
                style={{ padding: '3px' }}
              >
                Add Collection
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
                    <div className="fake-th">Collection</div>
                    <div className="fake-th">CollectionID</div>
                  </div>
                </div>
                <div className="fake-tbody">
                  {categories.map((category) => {
                    return (
                      <div className="fake-tr" key={category.id}>
                        <div className="fake-td td-checkbox">
                          <input type="checkbox" name="" id="" />
                        </div>
                        <div className="fake-td">
                          {category.data.CategoryName}
                        </div>

                        <div className="fake-td">
                          {category.data.CategoryID}
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

export default AdminCategories;
