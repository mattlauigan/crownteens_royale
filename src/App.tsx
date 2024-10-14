import { Routes, Route } from "react-router-dom";
import {
  Home,
  Navigation,
  ContactMainPage,
  ShopMainPage,
  SigninMainPage,
  CartPage
} from "./components/index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<ShopMainPage />} />
        <Route path="contact" element={< ContactMainPage/>} />
        <Route path="signin" element={<SigninMainPage />} />
        <Route path="cartpage" element={<CartPage />} />
      </Route>
    </Routes>
  );
};

export default App;
