import { Link } from "react-router-dom";
import cart from "../../../assets/cart.svg";
import { useEffect, useState } from "react";
import { CartDataType } from "ts/types/component";

type props = {
  items: CartDataType[];
};

const NavCartHover = (props: props) => {
  const [cartNumber, setCartNumber] = useState<number>(0);

  useEffect(() => {
    setCartNumber(props.items.length);
  }, [props]);

  return (
    <>
      <span className="user-cart">
        <span>
          <Link to="cartpage">
            <img src={cart} alt="cart" />
          </Link>
          <p className="cart-number">{cartNumber}</p>
          <ul>
            {props.items.map(
              ({ id, name, quantity, productdetail, price }: CartDataType) => (
                <li key={id}>
                  <h3>{name}</h3>

                  <div className="item-detail-container">
                    <p className="item-detail">{productdetail}</p>
                    <p className="item-price">{(price * quantity).toFixed(2)}</p>
                  </div>
                  <div className="quantity">
                    <input value="-" type="button" onClick={() => {}} />
                    <input type="text" value={quantity} readOnly />
                    <input type="button" value="+" onClick={() => {}} />
                  </div>
                </li>
              )
            )}
            <div className="hover-total-container">
              <p>Total</p>
              <p className="item-price"></p>
            </div>

            <Link to="cartpage">
              <p className="checkout-hover">Checkout</p>
            </Link>
          </ul>
        </span>
      </span>
    </>
  );
};

export default NavCartHover;
