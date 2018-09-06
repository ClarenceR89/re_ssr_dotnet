import React from 'react';
import NavMenu from './NavMenu/NavMenu';

export default props => (
  <React.Fragment>
    <div className="container-fluid" >
      <div className="row">
        <div className="col-12">
          <NavMenu />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        {props.children}
      </div>
    </div>
  </React.Fragment>
);
