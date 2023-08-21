import { Outlet, Link } from "react-router-dom";
import logo from "../../../assets/crownteensLogo2.svg";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link to="/">
          <img
            className="logo-container"
            src={logo}
            alt="CrownTeens Royale Logo"
          />
        </Link>
        <div className="nav-links-container">
          <Link to="shop">SHOP</Link>
          <Link to="contact">CONTACT</Link>
          <Link to="signin">SIGN IN</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
