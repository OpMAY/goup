import { Routes, Route } from "react-router-dom";
// import Kakao from "./module/Kakao";
// import axios from "axios";
// header
import Header from "./component/Header";
// footer
import Footer from "./component/Footer";
// product
import Product from "./component/Product/Product";
// Shop
import Shop from "./page/Shop";
// Login
import Login from "./page/Login";
// Detail
import Detail from "./page/Detail";
// Style page
import Style from "./page/Style";
import My from "./page/My";
import Notice from "./page/Notice";
import Kakao from "./module/Kakao";
import { useRecoilState, useRecoilValue } from "recoil";
import { tokenAtom, userAtom } from "./atoms/atom";
import Select from "./component/Detail/Select";

function App() {
  const [getUser, setUser] = useRecoilState(userAtom);
  const [token, setToken] = useRecoilState(tokenAtom);
  console.log("token ? ", token);
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        {/*<Route path="" element={}/>*/}
        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route
          path="/buy/select/:id"
          element={<Select path="purchase_select" />}
        />
        <Route
          path="/buy/check/:id"
          element={<Select path="purchase_check" />}
        />
        <Route path="/buy/:id" element={<Select path="purchase_order" />} />
        <Route
          path="/sell/select/:id"
          element={<Select path="sell_select" />}
        />
        <Route path="/sell/check/:id" element={<Select path="sell_check" />} />
        <Route path="/sell/:id" element={<Select path="sell_order" />} />
        <Route path="/style" element={<Style />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my" element={getUser === null ? <Login /> : <My />} />
        <Route path="/my/buying" element={<My path="buying" />} />
        <Route path="/my/selling" element={<My path="selling" />} />
        <Route path="/my/account" element={<My path="account" />} />
        <Route path="/my/address" element={<My path="address" />} />
        <Route path="/my/payment" element={<My path="payment" />} />
        <Route path="/my/point" element={<My path="point" />} />
        <Route path="/my/profile" element={<My path="profile" />} />
        <Route path="/my/receipt" element={<My path="receipt" />} />
        <Route path="/my/wish" element={<My path="wish" />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/faq" element={<Notice path="faq" />} />
        <Route path="/oauth" element={<Kakao />} />
      </Routes>
      <Footer></Footer>

      {/* Route */}
    </div>
  );
}

export default App;
