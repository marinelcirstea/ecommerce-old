import React from 'react';
import { Link } from 'react-router-dom';

const NoData = ({ title, intro, description, button, url }) => {
  return (
    <div>
      <div className="new-section-content">
        <div className="section-title">
          <p>{title}</p>
        </div>
        <div className="new-section-content-wrapper no-bg no-border">
          <div className="screen-left">
            <div className="screen-left-content-wrapper">
              <p className="slc-intro">{intro}</p>
              <br />
              <p className="slc-description">{description}</p>
              <br />
              <button>
                <Link to={`${url}`}>{button}</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoData;
