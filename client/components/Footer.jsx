import React from 'react';

const Footer = props => (
  <footer className="footer d-lg-none">
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 footer-tab tab-active">
          <button onClick={props.handleMobileButtonToggle} data-view="ListView">
            List
          </button>
        </div>
        <div className="col-6 footer-tab">
          <button onClick={props.handleMobileButtonToggle} data-view="MapView">
            Map
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
