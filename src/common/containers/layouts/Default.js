import React from 'react';
import Header from '../../components/Header';
import PropTypes from 'prop-types';

const Default = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

Default.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Default;
