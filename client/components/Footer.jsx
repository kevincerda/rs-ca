import React from 'react';

const Footer = props => (
  <footer className="footer d-lg-none">
    <div className="container-fluid">
      <div className="row">
        <div
          className={
            props.activeButtonMobile === 'ListView'
              ? 'col-6 footer-tab tab-active'
              : 'col-6 footer-tab'
          }
        >
          <button
            className="btn-mobile"
            onClick={props.handleMobileButtonToggle}
            data-view="ListView"
          >
            List
          </button>
        </div>
        <div
          className={
            props.activeButtonMobile === 'MapView'
              ? 'col-6 footer-tab tab-active'
              : 'col-6 footer-tab'
          }
        >
          <button
            className="btn-mobile"
            onClick={props.handleMobileButtonToggle}
            data-view="MapView"
          >
            Map
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
