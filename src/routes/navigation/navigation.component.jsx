import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as XLogo } from "../../assets/crown.svg";

import "./navigation.styles.scss";

const Navigation = () =>{
  return (
    <Fragment>

      <div className="navigation">
        <Link to="/">
          <XLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/auth">
            auth
          </Link>
        </div>
      </div>

      <Outlet />
     </Fragment>
  );
}

export default Navigation;
