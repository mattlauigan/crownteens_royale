import { Outlet, Link } from "react-router-dom";
import logo from "../../../assets/crownteensLogo2.svg";
import cart from "../../../assets/cart.svg";
import useSignIn from "../../../utils/store/signin-utils";
import { useEffect, useState } from "react";

const Navigation = () => {
  const isLoggedIn = useSignIn((state) => state.isLoggedIn);
  const userDisplayName = useSignIn((state) => state.userDisplayName);
  const [cartNumber, setCartNumber] = useState<number>(0);

  useEffect(() => {
    if (isLoggedIn) setCartNumber(1);
  }, [isLoggedIn]);

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
          {isLoggedIn ? (
            <span className="user-cart">
              <strong>{userDisplayName}</strong>
              <Link to="cartpage">
                <img src={cart} alt="cart" />
              </Link>
              <ul>
                <li>asd</li>
                <li>asd</li>
                <li>sda</li>
                <li>asdasd</li>
              </ul>
              <p>{cartNumber}</p>
            </span>
          ) : (
            <Link to="signin">SIGN IN</Link>
          )}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
