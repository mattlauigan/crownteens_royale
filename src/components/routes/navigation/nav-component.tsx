import { Outlet, Link } from "react-router-dom";
import logo from "../../../assets/crownteensLogo2.svg";
import useSignIn from "../../../utils/store/signin-utils";
import NavCartHover from "./nav-cart-hover-component";
import { CartDataType } from "ts/types/component";


const Navigation = () => {
  const SampleData: CartDataType[] = [
    {
      id: 1,
      name: "Sample Product",
      productdetail: "This is something",
      quantity: 1,
      price: 10.99,
    },
    {
      id: 2,
      name: "Sample Product 2",
      productdetail: "This is something 2",
      quantity: 3,
      price: 10.29,
    },
  ];
  const isLoggedIn = useSignIn((state) => state.isLoggedIn);
  const userDisplayName = useSignIn((state) => state.userDisplayName);


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
            <strong>{userDisplayName}</strong>
          ) : (
            <Link to="signin">SIGN IN</Link>
          )}
          <NavCartHover items={SampleData} />
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
