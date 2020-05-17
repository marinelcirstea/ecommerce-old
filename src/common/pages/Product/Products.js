import './Products.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/actions/product';
import { Link } from 'react-router-dom';

const Products = (props) => {
  const { products, loading } = props;
  useEffect(() => {
    props.getProducts();
    return () => {
      // props.getProducts();
    };
  }, []);
  if (loading) {
    return <div className="loading-overlay">Loading..</div>;
  }
  return (
    <div>
      <div className="products">
        <div className="row">
          {products.map((product) => {
            return (
              <div key={product.id} className="product">
                <div className="product_inner">
                  <Link to={`/product/${product.id}`}>
                    <div className="product-img-wrapper">
                      <img
                        src={product.data.Picture}
                        width="300"
                        alt={product.data.ProductName}
                      />
                    </div>
                  </Link>
                  <p className="product-title">
                    <Link to={`/product/${product.id}`}>
                      {product.data.ProductName}
                    </Link>
                  </p>
                  {/* <p>Size 7</p> */}
                  <p className="product-price">
                    <span>Price</span> £{product.data.UnitPrice}
                  </p>
                  <button className="add-to-cart-button">Add to basket</button>
                </div>
                {/* <div className="product_overlay">
                    <h2>Added to basket</h2>
                    <i className="fa fa-check"></i>
                  </div> */}
              </div>
            );
          })}
        </div>
      </div>
      <div className="products-pagination"></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    loading: state.productReducer.loading,
  };
};
export default connect(mapStateToProps, { getProducts })(Products);
