import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { doClick } from '../redux/actions/click';

const Home = (props) => {
  return (
    <>
      <p>Welcome to Razzle.</p>
      <Link to="about">About</Link>

      <button onClick={props.doClick}>Click me</button>

      <div>The value:{props.click}</div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    click: state.click.click,
  };
};
export default connect(mapStateToProps, { doClick })(Home);
