import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Cart,
  Home,
  SignIn,
  SignUp,
  Reset,
  Verification,
  CheckMail,
  ChangePassword,
  ProductList,
  ProductDetails,
  NotFound,
  CartEmpty,
  OrderList,
  OrderDetail,
  WishList,
  WishListEmpty,
  Checkout,
  Address,
  Account,
  Confirm,
} from "./screens/index ";
import { BaseLayout, AuthLayout } from "./components/index";
import { GlobalStyles } from "./styles/global/GlobalStyles";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/product/details" element={<ProductDetails />} />
            <Route path="/empty_cart" element={<CartEmpty />} />
            <Route path="/order" element={<OrderList />} />
            <Route path="/order_detail" element={<OrderDetail />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/empty_wishlist" element={<WishListEmpty />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account/add" element={<Address /> } />
            <Route path="/account" element={<Account />} />
            <Route  path="/confirm" element={<Confirm /> } />
          </Route>

          <Route path="/" element={<AuthLayout />}>
            <Route path="sign_in" element={<SignIn />} />
            <Route path="sign_up" element={<SignUp />} />
            <Route path="reset" element={<Reset />} />
            <Route path="verification" element={<Verification />} />
            <Route path="check_mail" element={<CheckMail />} />
            <Route path="change_password" element={<ChangePassword />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
