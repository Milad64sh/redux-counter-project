import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from './actions';

const Products = ({ getProducts, loading, products }) => {
  React.useEffect(() => {
    getProducts();
  }, [getProducts]);
  if (loading) {
    return <h2 className='section-title'>loading...</h2>;
  }
  return <div>hello from products</div>;
};

Products.propTypes = {
  loading: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  getProducts: PropTypes.func.isRequired,
};
const mapStateToProps = ({ productState: { products, loading } }) => {
  return { loading, products };
};

export default connect(mapStateToProps, { getProducts })(Products);
